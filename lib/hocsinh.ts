// Danh tính học sinh dùng khi nộp bài cho giáo viên.
//
// Web không có đăng nhập. Học sinh gõ họ tên và lớp một lần, thông tin lưu
// ngay trong trình duyệt của các em (localStorage) rồi gửi kèm mỗi lần nộp.
// Không có mật khẩu, không đồng bộ giữa các máy — đúng như đã chốt: đơn giản,
// dùng được ngay, đổi lại là có em có thể gõ tên bạn khác.

export type HocSinh = {
  hoTen: string;
  lop: string;
};

const KEY = "ltn12:hocsinh";

// Giới hạn độ dài để dữ liệu gửi lên bảng tính không bị nhồi rác.
export const MAX_HO_TEN = 60;
export const MAX_LOP = 12;

// Viết hoa chữ cái đầu mỗi tiếng, các chữ còn lại viết thường. Học sinh gõ
// "nông thị mai" hay "NÔNG THỊ MAI" thì bảng tính của giáo viên đều nhận được
// "Nông Thị Mai" — nhờ vậy sắp xếp và dò tên mới gọn.
function hoaDauMoiTieng(s: string): string {
  return s
    .split(" ")
    .map((t) => (t ? t[0].toLocaleUpperCase("vi") + t.slice(1).toLocaleLowerCase("vi") : t))
    .join(" ");
}

export function chuanHoa(hs: HocSinh): HocSinh {
  return {
    hoTen: hoaDauMoiTieng(hs.hoTen.trim().replace(/\s+/g, " ")).slice(0, MAX_HO_TEN),
    lop: hs.lop.trim().replace(/\s+/g, "").toUpperCase().slice(0, MAX_LOP),
  };
}

export function hopLe(hs: HocSinh): boolean {
  const c = chuanHoa(hs);
  // Họ tên cần ít nhất hai tiếng, lớp cần ít nhất hai kí tự (vd 12A, 12A1)
  return c.hoTen.length >= 3 && c.hoTen.includes(" ") && c.lop.length >= 2;
}

export function getHocSinh(): HocSinh | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const hs = JSON.parse(raw) as HocSinh;
    return hopLe(hs) ? chuanHoa(hs) : null;
  } catch {
    return null;
  }
}

export function saveHocSinh(hs: HocSinh) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(chuanHoa(hs)));
}

export function xoaHocSinh() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
