import type { LessonTheory } from "./types";
import bai01 from "@/data/theory/bai-01";
import bai02 from "@/data/theory/bai-02";
import bai03 from "@/data/theory/bai-03";
import bai04 from "@/data/theory/bai-04";
import bai05 from "@/data/theory/bai-05";
import bai06 from "@/data/theory/bai-06";
import bai07 from "@/data/theory/bai-07";
import bai08 from "@/data/theory/bai-08";
import bai09 from "@/data/theory/bai-09";
import bai10 from "@/data/theory/bai-10";
import bai11 from "@/data/theory/bai-11";
import bai12 from "@/data/theory/bai-12";
import bai13 from "@/data/theory/bai-13";
import bai14 from "@/data/theory/bai-14";
import bai15 from "@/data/theory/bai-15";
import bai16 from "@/data/theory/bai-16";
import bai17 from "@/data/theory/bai-17";
import bai18 from "@/data/theory/bai-18";
import bai19 from "@/data/theory/bai-19";
import bai20 from "@/data/theory/bai-20";
import bai21 from "@/data/theory/bai-21";
import bai23 from "@/data/theory/bai-23";

// Bài lí thuyết tự học của từng bài.
// Thêm bài mới: tạo data/theory/<id>.ts rồi import và khai báo thêm một dòng
// ở đây — không cần sửa gì trong components.
//
// Bài nào chưa có ở bảng này thì thẻ "Lý thuyết" tự ẩn khỏi trang bài học.
export const THEORY_BANK: Record<string, LessonTheory> = {
  "bai-01": bai01,
  "bai-02": bai02,
  "bai-03": bai03,
  "bai-04": bai04,
  "bai-05": bai05,
  "bai-06": bai06,
  "bai-07": bai07,
  "bai-08": bai08,
  "bai-09": bai09,
  "bai-10": bai10,
  "bai-11": bai11,
  "bai-12": bai12,
  "bai-13": bai13,
  "bai-14": bai14,
  "bai-15": bai15,
  "bai-16": bai16,
  "bai-17": bai17,
  "bai-18": bai18,
  "bai-19": bai19,
  "bai-20": bai20,
  "bai-21": bai21,
  "bai-23": bai23,
};

export function getTheory(lessonId: string): LessonTheory | null {
  return THEORY_BANK[lessonId] ?? null;
}

export function hasTheory(lessonId: string): boolean {
  return lessonId in THEORY_BANK;
}
