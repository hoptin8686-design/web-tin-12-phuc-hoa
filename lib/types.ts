export type Question = {
  id: string;
  q: string;
  // Đoạn code minh hoạ (hiển thị khối chữ mono riêng dưới câu hỏi), nếu có
  code?: string;
  options: [string, string, string, string];
  // Chỉ số đáp án đúng trong mảng options (0-3). Khi luyện, thứ tự phương án
  // được trộn ngẫu nhiên — xem QuizClient.
  answer: 0 | 1 | 2 | 3;
  explain: string;
};

// Câu trắc nghiệm đúng/sai 4 mệnh đề (dạng D2 đề thi tốt nghiệp THPT từ 2025):
// một lời dẫn tình huống + 4 ý a/b/c/d, đánh giá đúng/sai từng ý độc lập.
export type TFStatement = {
  text: string;
  answer: boolean; // true = Đúng, false = Sai
  explain: string;
};

export type TFQuestion = {
  id: string;
  context: string; // lời dẫn tình huống (3 dòng trở lên, có ngữ cảnh sinh động)
  code?: string;
  statements: TFStatement[]; // luôn 4 ý
};

// Câu tự luận: đề bài + gợi ý trả lời để học sinh tự đối chiếu
export type EssayQuestion = {
  id: string;
  q: string;
  code?: string;
  answer: string; // gợi ý đáp án, xuống dòng bằng \n
};

// Bộ câu hỏi bổ sung của một bài (ngoài trắc nghiệm 4 phương án)
export type LessonExtra = {
  tf: TFQuestion[];
  essay: EssayQuestion[];
};

// ─── Lý thuyết tự học ────────────────────────────────────────────────────────
// Bài lí thuyết được ghép từ các "khối" (block) thay vì một đoạn văn dài, để
// mỗi ý đứng riêng trong một hình thức trực quan phù hợp: thẻ màu, bảng so
// sánh, dòng thời gian, hình vẽ SVG… Học sinh lướt tới đâu hiểu tới đó.

// Màu nền của thẻ/hộp — dùng tên màu trong tailwind.config.ts.
export type Tone = "sea" | "coral" | "leaf" | "gold" | "berry";

export type TheoryCard = {
  emoji: string;
  title: string;
  text: string;
};

export type TheoryBlock =
  // Đoạn văn thường. Bọc **…** để in đậm một cụm từ khoá.
  | { kind: "text"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  // Lưới thẻ có emoji — dùng cho các nhóm ngang hàng (đặc trưng, lĩnh vực…)
  | { kind: "cards"; tone?: Tone; items: TheoryCard[] }
  // Bảng so sánh hai cột, kiểu "cái này khác cái kia chỗ nào"
  | {
      kind: "compare";
      left: { title: string; emoji: string; items: string[] };
      right: { title: string; emoji: string; items: string[] };
    }
  // Dòng thời gian / quy trình các bước
  | { kind: "steps"; items: { label: string; title: string; text: string }[] }
  // Hình vẽ SVG, khoá tra trong components/theory/Diagram.tsx
  | { kind: "figure"; diagram: string; caption: string }
  // Khối mã HTML/CSS. preview = true thì hiện thêm khung "kết quả trên trình duyệt".
  // tall = true thì khung xem trước cao gấp đôi — dành cho biểu mẫu nhiều dòng
  // (Bài 12) hay bảng dài, những thứ không lọt vừa khung 180px mặc định.
  | { kind: "code"; code: string; caption?: string; preview?: boolean; tall?: boolean }
  // Hộp ví dụ đời thường, nền xanh biển nhạt
  | { kind: "example"; title: string; text: string }
  // Hộp ghi nhớ, nền vàng — lấy đúng kết luận đóng khung trong SGK
  | { kind: "note"; text: string }
  // Hộp "Cập nhật 2026": chỗ SGK đã lạc hậu so với thực tế, hoặc kiến thức
  // mới xuất hiện sau khi sách in. CỐ Ý để màu và viền khác hẳn mọi hộp
  // khác, kèm nhãn "đề thi không hỏi phần này" — đề thi tốt nghiệp bám SGK,
  // học sinh phải phân biệt được đâu là phần thi, đâu là phần biết thêm.
  | { kind: "update"; title: string; text: string; items?: TheoryCard[] }
  // Câu hỏi kiểm tra nhanh xen giữa bài, trả lời xong hiện giải thích ngay
  | {
      kind: "check";
      q: string;
      options: string[];
      answer: number;
      explain: string;
    };

export type TheorySection = {
  id: string;
  emoji: string;
  heading: string;
  blocks: TheoryBlock[];
};

export type LessonTheory = {
  intro: string; // 1-2 câu dẫn nhập, nói bài này học gì
  minutes: number; // ước lượng thời gian đọc
  sections: TheorySection[];
  summary: string[]; // "Ghi nhớ nhanh" cuối bài, 3-5 gạch đầu dòng
};

// Số câu từng dạng của một bài, đếm sẵn ở phía máy chủ rồi truyền xuống trang
// chủ. Làm vậy để trang chủ không phải nạp cả ngân hàng câu hỏi vào trình duyệt
// chỉ để đếm số câu.
export type LessonCounts = {
  mcq: number;
  tf: number;
  essay: number;
  theory: boolean;
};

export type Lesson = {
  id: string; // slug dùng trong URL, vd "bai-01"
  title: string; // vd "Bài 1. Thông tin và xử lí thông tin"
  available: boolean; // false = chưa có câu hỏi, hiện mờ trên trang chủ
};

export type Topic = {
  id: string;
  name: string;
  emoji: string;
  lessons: Lesson[];
};

export type LessonProgress = {
  best: number; // điểm cao nhất, phần trăm 0-100
  attempts: number;
  lastAt: string; // ISO date
};

export type ProgressMap = Record<string, LessonProgress>;

// Thống kê câu sai của một bài, cộng dồn qua tất cả các lần luyện (cả trắc
// nghiệm lẫn đúng/sai). Dùng để tính tỉ lệ sai theo chủ đề rồi gợi ý học sinh
// ôn lại phần còn yếu — xem lib/onLai.ts.
export type LessonErrorStat = {
  wrong: number; // số câu (hoặc ý) trả lời sai
  total: number; // tổng số câu (hoặc ý) đã trả lời
  lastAt: string;
};

export type ErrorMap = Record<string, LessonErrorStat>;
