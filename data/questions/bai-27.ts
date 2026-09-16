import type { Question } from "@/lib/types";

// Bài 27. Biểu mẫu trên trang web — Google Sites (SGK trang 147-150)
const questions: Question[] = [
  {
    id: "b27-01",
    q: "Việc tạo biểu mẫu (form) trên trang web để lấy ý kiến phản hồi của người dùng, về bản chất là làm gì?",
    options: [
      "Tạo biểu mẫu bằng Forms của Google rồi nhúng vào trang web thiết kế bằng Google Sites",
      "Viết trực tiếp mã HTML cho thẻ <form> rồi chèn thủ công vào mã nguồn của trang web",
      "Gửi thư điện tử hàng loạt tới toàn bộ người dùng để xin ý kiến phản hồi trực tiếp",
      "Tạo một trang tính Google Sheets trống, không liên quan gì tới ứng dụng Forms",
    ],
    answer: 0,
    explain:
      "SGK nêu: việc tạo biểu mẫu trên trang web để lấy ý kiến phản hồi của người dùng, về bản chất là tạo biểu mẫu bằng ứng dụng Forms của Google rồi nhúng vào trang web được thiết kế bằng Google Sites.",
  },
  {
    id: "b27-02",
    q: "Theo Bước 1 (Chuẩn bị biểu mẫu), một biểu mẫu được SGK mô tả là gì?",
    options: [
      "Một bộ câu hỏi, có thể là các câu hỏi trắc nghiệm hoặc câu trả lời ngắn",
      "Một đoạn video giới thiệu về trang web, không chứa bất kì câu hỏi nào",
      "Một tệp âm thanh ghi lại lời nhận xét trực tiếp của người dùng",
      "Một bảng tính chứa sẵn danh sách toàn bộ người dùng của trang web",
    ],
    answer: 0,
    explain: "SGK nêu: trước hết phải chuẩn bị biểu mẫu là một bộ câu hỏi, có thể là các câu hỏi trắc nghiệm hoặc là câu trả lời ngắn.",
  },
  {
    id: "b27-03",
    q: "Để tạo biểu mẫu, theo Bước 2 cần vào kho ứng dụng của Google và chọn ứng dụng nào?",
    options: ["Forms", "Sheets", "Slides", "Calendar"],
    answer: 0,
    explain: "SGK hướng dẫn: vào kho ứng dụng của Google, chọn ứng dụng Forms (Hình 27.1) để tìm hiểu giao diện tạo biểu mẫu.",
  },
  {
    id: "b27-04",
    q: "Theo Hình 27.2, giao diện ứng dụng Forms có thể chọn một trong số các kiểu biểu mẫu được tạo sẵn nào?",
    options: [
      "Yêu cầu đặt hàng, Thông tin liên hệ, Trả lời sự kiện, Lời mời dự tiệc",
      "Thời khoá biểu, Sổ điểm điện tử, Danh sách lớp, Giấy khen học sinh",
      "Hợp đồng lao động, Hoá đơn tài chính, Báo cáo thuế, Bảng lương",
      "Bản đồ du lịch, Thực đơn nhà hàng, Vé máy bay, Phiếu giảm giá",
    ],
    answer: 0,
    explain:
      "SGK nêu: giao diện của Forms tương tự Google Sites, có thể chọn một trong số các kiểu biểu mẫu được tạo sẵn như Yêu cầu đặt hàng, Thông tin liên hệ,... (Hình 27.2 còn có Trả lời sự kiện, Lời mời dự tiệc).",
  },
  {
    id: "b27-05",
    q: "Theo Bước 3 (Tạo biểu mẫu), khi tạo một câu hỏi trắc nghiệm mà người trả lời bắt buộc phải trả lời, cần thực hiện thao tác nào?",
    options: [
      "Chọn kiểu câu hỏi Trắc nghiệm rồi bật tuỳ chọn Bắt buộc",
      "Chọn kiểu câu hỏi Trắc nghiệm rồi tắt hẳn tuỳ chọn Bắt buộc đi",
      "Chọn kiểu câu hỏi Câu trả lời khác rồi xoá toàn bộ các tuỳ chọn có sẵn",
      "Không có cách nào để bắt buộc người dùng phải trả lời một câu hỏi trong Forms",
    ],
    answer: 0,
    explain:
      "SGK hướng dẫn: chọn câu hỏi Trắc nghiệm, bật kiểu câu hỏi là Bắt buộc, sau đó nhập câu hỏi và các tuỳ chọn trả lời (Hình 27.3).",
  },
  {
    id: "b27-06",
    q: "Ở Nhiệm vụ 2 (Nhúng biểu mẫu vào trang web), muốn nhúng biểu mẫu đã tạo vào cuối trang chủ, cần mở trang chủ rồi dùng nút lệnh nào trong bảng chọn Chèn?",
    options: ["Biểu mẫu", "Hình ảnh", "Nhúng", "Drive"],
    answer: 0,
    explain: "SGK hướng dẫn: mở trang chủ, nháy chuột vào nút lệnh Biểu mẫu trong bảng chọn Chèn (Hình 27.5) để chọn và chèn biểu mẫu đã tạo.",
  },
  {
    id: "b27-07",
    q: "Sau khi chọn biểu mẫu (ví dụ \"Ý kiến phản hồi của bạn\") và nháy nút Chèn, biểu mẫu sẽ được thêm vào đâu của trang chủ?",
    options: ["Vào cuối trang chủ", "Vào ngay đầu trang chủ, phía trên logo", "Vào giữa phần đầu trang, đè lên tiêu đề", "Vào một trang con hoàn toàn mới, tách biệt trang chủ"],
    answer: 0,
    explain: "SGK nêu: biểu mẫu sẽ được thêm vào cuối trang chủ (Hình 27.7), sau khi đã nháy nút Chèn ở góc dưới bên phải khung chọn biểu mẫu (Hình 27.6).",
  },
  {
    id: "b27-08",
    q: "Ở Nhiệm vụ 3 (Xem dữ liệu thống kê phản hồi), để xem và thống kê ý kiến phản hồi của người dùng sau khi trang web đã xuất bản, cần mở lại đâu?",
    options: [
      "Mở ứng dụng Forms và mở lại biểu mẫu đã tạo",
      "Mở lại trình duyệt và xoá toàn bộ lịch sử duyệt web đã lưu",
      "Mở ứng dụng Trang tính (Sheets) trống, tự gõ lại dữ liệu thủ công",
      "Mở lại Google Sites và xoá biểu mẫu cũ để tạo một biểu mẫu hoàn toàn mới",
    ],
    answer: 0,
    explain: "SGK hướng dẫn: để xem và thống kê ý kiến phản hồi, mở ứng dụng Forms và mở lại biểu mẫu Ý kiến phản hồi của bạn đã tạo trước đó.",
  },
  {
    id: "b27-09",
    q: "Trong phần Câu trả lời của Forms, mục \"Cá nhân\" cho biết thông tin gì?",
    options: [
      "Thông tin chi tiết về câu trả lời của từng người cụ thể đã tham gia trả lời",
      "Thông tin tóm tắt dạng biểu đồ cho tất cả các câu hỏi trong biểu mẫu",
      "Thông tin chi tiết riêng cho từng câu hỏi, không phân biệt theo từng người",
      "Thông tin cá nhân (họ tên, số điện thoại) của người tạo ra biểu mẫu",
    ],
    answer: 0,
    explain:
      "SGK nêu: nháy vào Câu trả lời để xem chi tiết — Bản tóm tắt thống kê dạng biểu đồ, Câu hỏi cho biết thông tin chi tiết theo từng câu hỏi, còn Cá nhân cho biết thông tin chi tiết về câu trả lời của từng người.",
  },
  {
    id: "b27-10",
    q: "Muốn xem toàn bộ dữ liệu trả lời được tập hợp lại, theo Hình 27.10, có thể chọn chức năng nào trong Forms?",
    options: ["Xem trong Trang tính", "Xem trong Bản trình bày", "Xem trong Lịch", "Xem trong Trang web"],
    answer: 0,
    explain: "SGK nêu: có thể chọn Xem trong trang tính để thấy được toàn bộ dữ liệu trả lời đã được tập hợp vào bảng tính (Hình 27.10).",
  },
];

export default questions;
