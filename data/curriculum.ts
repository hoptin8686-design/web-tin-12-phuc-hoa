import type { Topic } from "@/lib/types";

// Cấu trúc SGK Tin học 12 — Kết nối tri thức với cuộc sống,
// định hướng Tin học ứng dụng (ICT). 28 bài / 70 tiết.
// Lấy theo Kế hoạch giáo dục của giáo viên năm học 2026-2027
// (xem KHGD_Tin_hoc_12_ICT_2026-2027.docx ở thư mục gốc dự án).
//
// available: true = đã có câu hỏi trong data/questions/, false = sẽ bổ sung sau.
// Muốn thêm câu hỏi cho một bài: tạo file data/questions/<id>.ts rồi
// đăng ký trong lib/questions.ts và đổi available thành true ở đây.

export const CURRICULUM: Topic[] = [
  {
    id: "chu-de-1",
    name: "Chủ đề 1. Máy tính và xã hội tri thức",
    emoji: "🤖",
    lessons: [
      { id: "bai-01", title: "Bài 1. Làm quen với Trí tuệ nhân tạo", available: true },
      {
        id: "bai-02",
        title: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-2",
    name: "Chủ đề 2. Mạng máy tính và Internet",
    emoji: "🌐",
    lessons: [
      { id: "bai-03", title: "Bài 3. Một số thiết bị mạng thông dụng", available: true },
      { id: "bai-04", title: "Bài 4. Giao thức mạng", available: true },
      {
        id: "bai-05",
        title: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-3",
    name: "Chủ đề 3. Đạo đức, pháp luật và văn hoá trong môi trường số",
    emoji: "⚖️",
    lessons: [
      {
        id: "bai-06",
        title: "Bài 6. Giao tiếp và ứng xử trong không gian mạng",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-4",
    name: "Chủ đề 4. Giải quyết vấn đề với sự trợ giúp của máy tính (HTML & CSS)",
    emoji: "🧩",
    lessons: [
      { id: "bai-07", title: "Bài 7. HTML và cấu trúc trang web", available: true },
      { id: "bai-08", title: "Bài 8. Định dạng văn bản", available: true },
      { id: "bai-09", title: "Bài 9. Tạo danh sách, bảng", available: true },
      { id: "bai-10", title: "Bài 10. Tạo liên kết", available: true },
      {
        id: "bai-11",
        title: "Bài 11. Chèn tệp tin đa phương tiện và khung nội tuyến vào trang web",
        available: true,
      },
      { id: "bai-12", title: "Bài 12. Tạo biểu mẫu", available: true },
      { id: "bai-13", title: "Bài 13. Khái niệm, vai trò của CSS", available: true },
      { id: "bai-14", title: "Bài 14. Định dạng văn bản bằng CSS", available: true },
      { id: "bai-15", title: "Bài 15. Tạo màu cho chữ và nền", available: true },
      { id: "bai-16", title: "Bài 16. Định dạng khung", available: true },
      { id: "bai-17", title: "Bài 17. Các mức ưu tiên của bộ chọn", available: true },
      {
        id: "bai-18",
        title: "Bài 18. Thực hành tổng hợp thiết kế trang web",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-5",
    name: "Chủ đề 5. Hướng nghiệp với tin học",
    emoji: "🧭",
    lessons: [
      {
        id: "bai-19",
        title: "Bài 19. Dịch vụ sửa chữa và bảo trì máy tính",
        available: true,
      },
      {
        id: "bai-20",
        title: "Bài 20. Nhóm nghề quản trị thuộc ngành Công nghệ thông tin",
        available: true,
      },
      { id: "bai-21", title: "Bài 21. Hội thảo hướng nghiệp", available: true },
    ],
  },
  {
    // SGK đặt tên Chủ đề 6 trùng tên Chủ đề 1 (mục lục trang 4, trang mở chủ đề
    // 118) và chỉ gồm một bài là Bài 22. KHGD ghi nhầm thành "Mạng máy tính và
    // Internet (thực hành)"; giáo viên đã xác nhận lấy theo SGK.
    id: "chu-de-6",
    name: "Chủ đề 6. Máy tính và xã hội tri thức",
    emoji: "🔌",
    lessons: [
      {
        id: "bai-22",
        title: "Bài 22. Thực hành kết nối các thiết bị số",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-7",
    name: "Chủ đề 7. Ứng dụng tin học",
    emoji: "🏗️",
    lessons: [
      { id: "bai-23", title: "Bài 23. Chuẩn bị xây dựng trang web", available: true },
      { id: "bai-24", title: "Bài 24. Xây dựng phần đầu trang web", available: true },
      {
        id: "bai-25",
        title: "Bài 25. Xây dựng phần thân và chân trang web",
        available: true,
      },
      { id: "bai-26", title: "Bài 26. Liên kết và thanh điều hướng", available: true },
      { id: "bai-27", title: "Bài 27. Biểu mẫu trên trang web", available: true },
      { id: "bai-28", title: "Bài 28. Thực hành tổng hợp", available: true },
    ],
  },
];

export function findLesson(lessonId: string) {
  for (const topic of CURRICULUM) {
    const lesson = topic.lessons.find((l) => l.id === lessonId);
    if (lesson) return { topic, lesson };
  }
  return null;
}
