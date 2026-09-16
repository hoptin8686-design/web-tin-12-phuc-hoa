import { NextResponse } from "next/server";
import { themDong, daCauHinh } from "@/lib/google-sheets";

// Nhận kết quả học sinh nộp rồi ghi một dòng vào Google Sheets.
//
// Địa chỉ này CÔNG KHAI trên Internet — ai biết đường dẫn cũng gọi được. Vì
// vậy phải tự bảo vệ, không tin bất cứ thứ gì gửi lên:
//   1. Chỉ nhận yêu cầu đến từ chính tên miền của web (kiểm tra Origin).
//   2. Kiểm tra chặt chẽ hình dạng và độ dài mọi trường dữ liệu.
//   3. Giới hạn số lần nộp trên mỗi địa chỉ IP trong một khoảng thời gian.
//   4. Không bao giờ trả chi tiết lỗi nội bộ về cho trình duyệt.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Tên miền được phép gọi API này. Ngoài ba mục cố định:
//  - VERCEL_URL: Vercel tự đặt cho mỗi bản triển khai, nhờ đó bản xem trước
//    cũng chạy được mà không phải sửa mã.
//  - MIEN_CHO_PHEP_THEM: để dành cho ngày thầy dùng tên miền riêng, khai báo
//    trong Vercel, nhiều tên miền thì ngăn nhau bởi dấu phẩy.
function danhSachMien(): string[] {
  const codinh = [
    "chinh-phuc-tin-12.vercel.app",
    "localhost:3002",
    "127.0.0.1:3002",
  ];
  const cuaVercel = process.env.VERCEL_URL ? [process.env.VERCEL_URL] : [];
  const themVao = (process.env.MIEN_CHO_PHEP_THEM ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return [...codinh, ...cuaVercel, ...themVao];
}

const DANG_HOP_LE = ["Trắc nghiệm", "Đúng/Sai"] as const;

// Giới hạn tần suất: tối đa 20 lượt nộp trong 10 phút cho mỗi IP.
// Bộ nhớ này chỉ sống trong một tiến trình serverless nên là biện pháp chặn
// thô — đủ để cản người nghịch ngợm, không phải tường lửa thật sự.
const GIOI_HAN = 20;
const CUA_SO_MS = 10 * 60 * 1000;
const dem = new Map<string, { soLan: number; batDau: number }>();

function quaGioiHan(ip: string): boolean {
  const now = Date.now();
  const cu = dem.get(ip);
  if (!cu || now - cu.batDau > CUA_SO_MS) {
    dem.set(ip, { soLan: 1, batDau: now });
    return false;
  }
  cu.soLan += 1;
  return cu.soLan > GIOI_HAN;
}

function dungMien(req: Request): boolean {
  const origin = req.headers.get("origin");
  // Không có Origin (ví dụ gọi bằng curl) thì từ chối luôn.
  if (!origin) return false;
  try {
    return danhSachMien().includes(new URL(origin).host);
  } catch {
    return false;
  }
}

function chuoi(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim().replace(/\s+/g, " ");
  if (s.length === 0 || s.length > max) return null;
  return s;
}

function soNguyen(v: unknown, min: number, max: number): number | null {
  if (typeof v !== "number" || !Number.isInteger(v) || v < min || v > max) return null;
  return v;
}

export async function POST(req: Request) {
  if (!dungMien(req)) {
    return NextResponse.json({ ok: false, loi: "Yêu cầu không hợp lệ" }, { status: 403 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "khong-ro";
  if (quaGioiHan(ip)) {
    return NextResponse.json(
      { ok: false, loi: "Em nộp hơi nhiều lần, thử lại sau ít phút nhé" },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, loi: "Dữ liệu gửi lên không đọc được" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const hoTen = chuoi(b.hoTen, 60);
  const lop = chuoi(b.lop, 12);
  const baiId = chuoi(b.baiId, 20);
  const tenBai = chuoi(b.tenBai, 120);
  const dang = typeof b.dang === "string" ? b.dang : null;
  const tongSoCau = soNguyen(b.tongSoCau, 1, 200);
  const soCauDung = soNguyen(b.soCauDung, 0, tongSoCau ?? 200);
  const diem = soNguyen(b.diem, 0, 100);

  if (
    !hoTen ||
    !lop ||
    !baiId ||
    !tenBai ||
    !dang ||
    !DANG_HOP_LE.includes(dang as (typeof DANG_HOP_LE)[number]) ||
    tongSoCau === null ||
    soCauDung === null ||
    diem === null ||
    !/^bai-\d{2}$/.test(baiId)
  ) {
    return NextResponse.json({ ok: false, loi: "Dữ liệu gửi lên không hợp lệ" }, { status: 400 });
  }

  // Kiểm tra cấu hình SAU khi đã xác thực dữ liệu: yêu cầu rác thì trả 400
  // luôn, không tiết lộ tình trạng cấu hình của máy chủ cho người gọi bừa.
  if (!daCauHinh()) {
    return NextResponse.json(
      { ok: false, loi: "Máy chủ chưa được cấu hình để nhận bài nộp" },
      { status: 503 },
    );
  }

  // Dấu ' ở đầu để Google Sheets giữ nguyên chuỗi, không tự hiểu thành công
  // thức — chặn kiểu chèn công thức qua ô họ tên.
  const anToan = (s: string) => (/^[=+\-@]/.test(s) ? `'${s}` : s);

  const thoiGian = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

  try {
    await themDong([
      thoiGian,
      anToan(hoTen),
      anToan(lop),
      baiId,
      anToan(tenBai),
      dang,
      diem,
      soCauDung,
      tongSoCau,
    ]);
  } catch (e) {
    // Ghi log cho giáo viên xem trong Vercel, nhưng không lộ chi tiết ra ngoài.
    console.error("Ghi bảng tính thất bại:", e);
    return NextResponse.json(
      { ok: false, loi: "Chưa gửi được lên bảng tính, em thử lại sau nhé" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
