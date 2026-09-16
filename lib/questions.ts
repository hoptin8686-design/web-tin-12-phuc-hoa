import type { Question } from "./types";
import bai01 from "@/data/questions/bai-01";
import bai02 from "@/data/questions/bai-02";
import bai03 from "@/data/questions/bai-03";
import bai04 from "@/data/questions/bai-04";
import bai05 from "@/data/questions/bai-05";
import bai06 from "@/data/questions/bai-06";
import bai07 from "@/data/questions/bai-07";
import bai08 from "@/data/questions/bai-08";
import bai09 from "@/data/questions/bai-09";
import bai10 from "@/data/questions/bai-10";
import bai11 from "@/data/questions/bai-11";
import bai12 from "@/data/questions/bai-12";
import bai13 from "@/data/questions/bai-13";
import bai14 from "@/data/questions/bai-14";
import bai15 from "@/data/questions/bai-15";
import bai16 from "@/data/questions/bai-16";
import bai17 from "@/data/questions/bai-17";
import bai18 from "@/data/questions/bai-18";
import bai19 from "@/data/questions/bai-19";
import bai20 from "@/data/questions/bai-20";
import bai21 from "@/data/questions/bai-21";
import bai22 from "@/data/questions/bai-22";
import bai23 from "@/data/questions/bai-23";
import bai24 from "@/data/questions/bai-24";
import bai25 from "@/data/questions/bai-25";
import bai26 from "@/data/questions/bai-26";
import bai27 from "@/data/questions/bai-27";
import bai28 from "@/data/questions/bai-28";

// Đăng ký ngân hàng câu hỏi trắc nghiệm: thêm bài mới = tạo file trong
// data/questions/ rồi import và khai báo ở đây (và bật available trong
// data/curriculum.ts).
//
// Ngân hàng lớp 12 đang được soạn — sẽ thêm dần theo phân phối chương trình.
export const QUESTION_BANK: Record<string, Question[]> = {
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
  "bai-22": bai22,
  "bai-23": bai23,
  "bai-24": bai24,
  "bai-25": bai25,
  "bai-26": bai26,
  "bai-27": bai27,
  "bai-28": bai28,
};

export function getQuestions(lessonId: string): Question[] {
  return QUESTION_BANK[lessonId] ?? [];
}
