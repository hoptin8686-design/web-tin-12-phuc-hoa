import type { Question, TFQuestion } from "./types";
import { CURRICULUM } from "@/data/curriculum";
import { QUESTION_BANK } from "./questions";
import { EXTRA_BANK } from "./extras";
import { CSDL_MCQ, CSDL_TF_LY_THUYET, CSDL_TF_THUC_HANH } from "@/data/thithu-csdl";

// Chế độ Thi thử — mô phỏng đúng cấu trúc đề tốt nghiệp THPT môn Tin học
// theo Quyết định 764/QĐ-BGDĐT (24 câu D1 + 4 câu D2), định hướng Tin học
// ứng dụng (ICT). Nguồn xác thực cấu trúc: xem skill `on-thi-thpt-tin`.
//
// LỊCH SỬ: bản đầu (2026-08-07) là bản RÚT GỌN chỉ 2/4 câu D2, vì web này
// (chỉ dạy lớp 12) không có nội dung chủ đề "11E — Giới thiệu các hệ CSDL"
// (SGK lớp 11) mà ma trận thật của Bộ bắt 1/6 chủ đề D1 và 2/4 câu D2 phải
// lấy từ đó. Đã bàn với giáo viên và soạn bổ sung `data/thithu-csdl.ts` từ
// SGK Tin 11 ICT (Bài 10–15 lí thuyết CSDL, Bài 17 thực hành MySQL/HeidiSQL)
// — từ nay đủ đúng 6 chủ đề D1 và 4 câu D2 như đề thật, không còn rút gọn.

export const THOI_GIAN_GIAY = 50 * 60; // 50 phút, đúng theo QĐ 764
export const SO_CAU_D1 = 24;
export const SO_CAU_D2 = 4;

export const DIEM_MOI_CAU_D1 = 0.25; // 24 × 0,25 = 6,0đ, đúng chuẩn Bộ
export const DIEM_TOI_DA_D1 = SO_CAU_D1 * DIEM_MOI_CAU_D1;

// Công thức gốc của Bộ: 1 ý đúng = 0,1đ · 2 ý = 0,25đ · 3 ý = 0,5đ · cả 4 ý
// = 1,0đ (tối đa). 4 câu × 1,0đ = 4,0đ, đúng thang điểm đề thật.
export const DIEM_D2_THEO_SO_Y_DUNG = [0, 0.1, 0.25, 0.5, 1.0] as const;
export const DIEM_TOI_DA_D2 = SO_CAU_D2 * 1.0;
export const DIEM_TOI_DA = DIEM_TOI_DA_D1 + DIEM_TOI_DA_D2; // 10,0đ

// Mỗi chủ đề D1 hoặc lấy câu hỏi từ một chủ đề có sẵn trong curriculum lớp 12
// (chuDeId), hoặc — riêng "11E" — lấy thẳng từ ngân hàng CSDL soạn riêng cho
// thi thử (nguon: "csdl"), vì CSDL không phải nội dung lớp 12 nên không nằm
// trong CURRICULUM/QUESTION_BANK như các chủ đề khác.
type NguonChuDe = { ma: string; ten: string; chuDeId: string } | { ma: string; ten: string; nguon: "csdl" };

const CHU_DE_D1: NguonChuDe[] = [
  { ma: "12A", ten: "Trí tuệ nhân tạo", chuDeId: "chu-de-1" },
  { ma: "12B", ten: "Kết nối mạng", chuDeId: "chu-de-2" },
  { ma: "12D", ten: "Đạo đức, ứng xử trong môi trường số", chuDeId: "chu-de-3" },
  { ma: "12E", ten: "Tạo trang web (HTML, CSS)", chuDeId: "chu-de-4" },
  { ma: "12G", ten: "Hướng nghiệp CNTT", chuDeId: "chu-de-5" },
  { ma: "11E", ten: "Giới thiệu các hệ cơ sở dữ liệu", nguon: "csdl" },
];

// Phần II — đúng 4 vị trí của đề thật: Câu 1–2 là phần chung (mọi thí sinh
// đều làm), Câu 5–6 là phần riêng nhánh Tin học ứng dụng (ICT).
const CHU_DE_D2: (
  | { ten: string; nhom: "chung"; chuDeId: string }
  | { ten: string; nhom: "chung" | "rieng"; nguon: "csdl-ly-thuyet" | "csdl-thuc-hanh" }
  | { ten: string; nhom: "rieng"; chuDeId: string }
)[] = [
  { ten: "Kết nối mạng (Câu 1, phần chung)", nhom: "chung", chuDeId: "chu-de-2" },
  { ten: "Cơ sở dữ liệu (Câu 2, phần chung)", nhom: "chung", nguon: "csdl-ly-thuyet" },
  { ten: "Tạo trang web (Câu 5, nhánh ICT)", nhom: "rieng", chuDeId: "chu-de-4" },
  { ten: "Thực hành CSDL — SQL (Câu 6, nhánh ICT)", nhom: "rieng", nguon: "csdl-thuc-hanh" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function baiIdsCuaChuDe(chuDeId: string): string[] {
  const chuDe = CURRICULUM.find((t) => t.id === chuDeId);
  return chuDe ? chuDe.lessons.filter((l) => l.available).map((l) => l.id) : [];
}

function goMcqCuaChuDe(cd: NguonChuDe): Question[] {
  if ("nguon" in cd) return CSDL_MCQ;
  return baiIdsCuaChuDe(cd.chuDeId).flatMap((id) => QUESTION_BANK[id] ?? []);
}

function goTfCuaChuDe(cd: (typeof CHU_DE_D2)[number]): TFQuestion[] {
  if ("nguon" in cd) return cd.nguon === "csdl-ly-thuyet" ? CSDL_TF_LY_THUYET : CSDL_TF_THUC_HANH;
  return baiIdsCuaChuDe(cd.chuDeId).flatMap((id) => EXTRA_BANK[id]?.tf ?? []);
}

export type DeThiThu = {
  d1: Question[]; // 24 câu, đã trộn thứ tự
  d2: TFQuestion[]; // 4 câu — đúng thứ tự Câu 1, 2 (chung), 5, 6 (riêng ICT)
};

// Trộn 24 câu D1 chia đều cho 6 chủ đề (4 câu/chủ đề — vừa khít, không dư),
// và 4 câu D2 lấy đúng theo ma trận thật (Mạng, CSDL, Web, CSDL thực hành).
export function taoDeThiThu(): DeThiThu {
  const soChuDe = CHU_DE_D1.length;
  const coBan = Math.floor(SO_CAU_D1 / soChuDe);
  const du = SO_CAU_D1 - coBan * soChuDe;
  const chiSoDuocDu = new Set(shuffle(CHU_DE_D1.map((_, i) => i)).slice(0, du));

  const d1: Question[] = [];
  CHU_DE_D1.forEach((cd, i) => {
    const soLuong = coBan + (chiSoDuocDu.has(i) ? 1 : 0);
    const pool = shuffle(goMcqCuaChuDe(cd));
    d1.push(...pool.slice(0, soLuong));
  });

  const d2 = CHU_DE_D2.map((cd) => shuffle(goTfCuaChuDe(cd))[0]).filter(
    (x): x is TFQuestion => Boolean(x),
  );

  return { d1: shuffle(d1), d2 };
}

export function diemMotCauD2(soYDung: number): number {
  return DIEM_D2_THEO_SO_Y_DUNG[soYDung] ?? 0;
}

// Tên các chủ đề dùng để hiện ở màn giới thiệu.
export const TEN_CHU_DE_D1 = CHU_DE_D1.map((c) => c.ten);
export const TEN_CHU_DE_D2 = CHU_DE_D2.map((c) => c.ten);
