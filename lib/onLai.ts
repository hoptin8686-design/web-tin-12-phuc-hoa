import { CURRICULUM } from "@/data/curriculum";
import type { ErrorMap } from "./types";

// Từ thống kê câu sai, tìm ra những chủ đề học sinh còn yếu để gợi ý ôn lại.
//
// Nguyên tắc đặt ngưỡng: chỉ gợi ý khi đã có đủ căn cứ. Sai 2/3 câu trong một
// bài mới làm lần đầu chưa nói lên điều gì, nên phải đủ NGUONG_SO_CAU câu mới
// tính; và chỉ nhắc khi tỉ lệ sai từ NGUONG_TY_LE_SAI trở lên, tránh việc bài
// nào cũng bị gắn nhãn "cần ôn lại" làm học sinh nản.
const NGUONG_SO_CAU = 5;
const NGUONG_TY_LE_SAI = 30;

export type BaiCanOnLai = {
  id: string;
  title: string;
  tyLeSai: number;
  soCauDaLam: number;
};

export type ChuDeCanOnLai = {
  id: string;
  name: string;
  emoji: string;
  tyLeSai: number;
  soCauSai: number;
  soCauDaLam: number;
  bai: BaiCanOnLai[]; // các bài cụ thể trong chủ đề còn sai nhiều
};

export function chuDeCanOnLai(errors: ErrorMap): ChuDeCanOnLai[] {
  const ketQua: ChuDeCanOnLai[] = [];

  for (const chuDe of CURRICULUM) {
    let sai = 0;
    let tong = 0;
    const bai: BaiCanOnLai[] = [];

    for (const lesson of chuDe.lessons) {
      const stat = errors[lesson.id];
      if (!stat || stat.total <= 0) continue;
      sai += stat.wrong;
      tong += stat.total;

      const tyLe = Math.round((stat.wrong / stat.total) * 100);
      if (stat.total >= NGUONG_SO_CAU && tyLe >= NGUONG_TY_LE_SAI) {
        bai.push({
          id: lesson.id,
          title: lesson.title,
          tyLeSai: tyLe,
          soCauDaLam: stat.total,
        });
      }
    }

    if (tong < NGUONG_SO_CAU) continue;
    const tyLeChuDe = Math.round((sai / tong) * 100);
    // Hiện chủ đề khi bản thân chủ đề sai nhiều, hoặc khi trong đó có bài
    // cụ thể sai nhiều (chủ đề nhiều bài dễ bị trung bình hoá che mất).
    if (tyLeChuDe < NGUONG_TY_LE_SAI && bai.length === 0) continue;

    ketQua.push({
      id: chuDe.id,
      name: chuDe.name,
      emoji: chuDe.emoji,
      tyLeSai: tyLeChuDe,
      soCauSai: sai,
      soCauDaLam: tong,
      bai: bai.sort((a, b) => b.tyLeSai - a.tyLeSai),
    });
  }

  return ketQua.sort((a, b) => b.tyLeSai - a.tyLeSai);
}
