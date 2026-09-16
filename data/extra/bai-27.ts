import type { LessonExtra } from "@/lib/types";

// Bài 27. Biểu mẫu trên trang web — Google Sites — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b27-tf1",
      context:
        "Trước khi thực hành, nhóm bạn Ngọc ôn lại Nhiệm vụ 1 về tạo biểu mẫu. Ngọc ghi vài nhận định, bạn Sơn đối chiếu lại với SGK.",
      code: "",
      statements: [
        {
          text: "Việc tạo biểu mẫu trên trang web về bản chất là tạo biểu mẫu bằng ứng dụng Forms của Google rồi nhúng vào trang web thiết kế bằng Google Sites.",
          answer: true,
          explain: "Đúng theo mô tả của SGK ở đầu Nhiệm vụ 1.",
        },
        {
          text: "Một biểu mẫu là một bộ câu hỏi, có thể là câu hỏi trắc nghiệm hoặc câu trả lời ngắn.",
          answer: true,
          explain: "Đúng theo Bước 1: chuẩn bị biểu mẫu là một bộ câu hỏi, có thể trắc nghiệm hoặc câu trả lời ngắn.",
        },
        {
          text: "Để tạo biểu mẫu, cần vào kho ứng dụng của Google và chọn ứng dụng Sheets, không phải Forms.",
          answer: false,
          explain: "Sai. SGK hướng dẫn chọn ứng dụng Forms trong kho ứng dụng Google (Hình 27.1), không phải Sheets.",
        },
        {
          text: "Giao diện của Forms hoàn toàn khác biệt, không có điểm nào tương tự với giao diện Google Sites.",
          answer: false,
          explain: "Sai. SGK nêu: giao diện của Forms tương tự Google Sites, có thể chọn một trong số các kiểu biểu mẫu được tạo sẵn.",
        },
      ],
    },
    {
      id: "b27-tf2",
      context:
        "Ngọc tiếp tục tạo câu hỏi trắc nghiệm cho biểu mẫu \"Ý kiến phản hồi của bạn\" theo Bước 3. Sơn quan sát và ghi lại vài nhận định để kiểm tra.",
      code: "",
      statements: [
        {
          text: "Để tạo câu hỏi bắt buộc phải trả lời, Ngọc chọn kiểu câu hỏi Trắc nghiệm rồi bật tuỳ chọn Bắt buộc.",
          answer: true,
          explain: "Đúng theo Bước 3 của SGK (Hình 27.3).",
        },
        {
          text: "Muốn thêm tuỳ chọn trả lời khác cho câu hỏi trắc nghiệm, Ngọc có thể nháy Thêm tuỳ chọn hoặc thêm \"Câu trả lời khác\".",
          answer: true,
          explain: "Đúng theo SGK: nháy chuột vào Thêm tuỳ chọn hoặc thêm Câu trả lời khác để thêm tuỳ chọn khác.",
        },
        {
          text: "Sau khi hoàn thành một câu hỏi, Ngọc chỉ có thể thoát khỏi Forms để tạo biểu mẫu mới, không có cách nào thêm câu hỏi tiếp theo trong cùng biểu mẫu.",
          answer: false,
          explain: "Sai. SGK nêu: nháy chuột chọn nút ⊕ trong bảng chọn bên phải để tiếp tục nhập câu hỏi khác trong cùng biểu mẫu (Hình 27.4).",
        },
        {
          text: "Biểu mẫu mới khởi tạo đã có sẵn tiêu đề do Forms tự động đặt tên, Ngọc không cần và không thể đổi lại tiêu đề đó.",
          answer: false,
          explain: "Sai. SGK nêu ngược lại: biểu mẫu mới không có tiêu đề được khởi tạo; Ngọc cần nháy vào \"Mẫu không có tiêu đề\" để tự nhập tiêu đề cho biểu mẫu (ví dụ Ý kiến phản hồi của bạn).",
        },
      ],
    },
    {
      id: "b27-tf3",
      context:
        "Hoàn thành biểu mẫu, nhóm bạn Trang nhúng biểu mẫu vào trang chủ (Nhiệm vụ 2) rồi xem thống kê phản hồi (Nhiệm vụ 3). Trang báo cáo lại, cô giáo nêu vài nhận định để cả lớp kiểm tra.",
      code: "",
      statements: [
        {
          text: "Để nhúng biểu mẫu vào trang chủ, Trang mở trang chủ rồi nháy nút lệnh Biểu mẫu trong bảng chọn Chèn.",
          answer: true,
          explain: "Đúng theo Nhiệm vụ 2 của SGK (Hình 27.5).",
        },
        {
          text: "Sau khi chọn và chèn, biểu mẫu sẽ được thêm vào cuối trang chủ.",
          answer: true,
          explain: "Đúng theo SGK: biểu mẫu sẽ được thêm vào cuối trang chủ (Hình 27.7).",
        },
        {
          text: "Để xem dữ liệu thống kê phản hồi, Trang phải mở lại Google Sites và xem trực tiếp trên trang chủ, Forms không lưu được dữ liệu trả lời.",
          answer: false,
          explain: "Sai. SGK hướng dẫn mở ứng dụng Forms và mở lại biểu mẫu đã tạo để xem thống kê — dữ liệu trả lời được lưu và thống kê ngay trong Forms, không xem trên Google Sites.",
        },
        {
          text: "Trong phần Câu trả lời của Forms, mục Cá nhân hiển thị thống kê dạng biểu đồ cho cả biểu mẫu, còn mục Bản tóm tắt mới cho biết câu trả lời của từng người.",
          answer: false,
          explain: "Sai, Trang nói ngược. Theo SGK: Bản tóm tắt thống kê dạng biểu đồ cho cả biểu mẫu; Cá nhân mới cho biết thông tin chi tiết về câu trả lời của TỪNG NGƯỜI.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b27-es1",
      q: "Trình bày các bước tạo một biểu mẫu bằng ứng dụng Forms của Google (Nhiệm vụ 1).",
      answer:
        "1. Chuẩn bị biểu mẫu: xác định trước biểu mẫu là một bộ câu hỏi, có thể là câu hỏi trắc nghiệm hoặc câu trả lời ngắn.\n\n2. Tìm hiểu giao diện ứng dụng Forms: vào kho ứng dụng của Google, chọn Forms. Giao diện tương tự Google Sites, có thể chọn một kiểu biểu mẫu tạo sẵn (Yêu cầu đặt hàng, Thông tin liên hệ, Trả lời sự kiện, Lời mời dự tiệc...) hoặc bắt đầu từ biểu mẫu Trống.\n\n3. Tạo biểu mẫu:\n- Nháy biểu tượng dấu cộng (+) để tạo biểu mẫu mới.\n- Nháy vào \"Mẫu không có tiêu đề\" để nhập tiêu đề biểu mẫu (ví dụ \"Ý kiến phản hồi của bạn\"), sau đó nhập mô tả ngắn gọn.\n- Tạo câu hỏi: chọn kiểu câu hỏi Trắc nghiệm, bật tuỳ chọn Bắt buộc nếu cần; nhập nội dung câu hỏi; nháy Tuỳ chọn 1 để nhập nội dung tuỳ chọn đầu tiên; nháy Thêm tuỳ chọn hoặc thêm \"Câu trả lời khác\" để bổ sung tuỳ chọn.\n- Nháy nút ⊕ trong bảng chọn bên phải để tiếp tục nhập các câu hỏi khác cho tới khi hoàn thành biểu mẫu.",
    },
    {
      id: "b27-es2",
      q: "Trình bày cách nhúng biểu mẫu đã tạo vào trang web (Nhiệm vụ 2) và cách xem dữ liệu thống kê phản hồi (Nhiệm vụ 3).",
      answer:
        "* Nhúng biểu mẫu vào trang web (Nhiệm vụ 2):\n1. Mở trang chủ, nháy chuột vào nút lệnh Biểu mẫu trong bảng chọn Chèn.\n2. Chọn biểu mẫu đã tạo (ví dụ Ý kiến phản hồi của bạn), nháy nút Chèn ở góc dưới bên phải.\n3. Biểu mẫu sẽ được thêm vào cuối trang chủ.\n4. Xuất bản trang web.\n5. Mở trang web bằng địa chỉ URL để kiểm tra: trả lời thử các câu hỏi trong biểu mẫu.\n\n* Xem dữ liệu thống kê phản hồi (Nhiệm vụ 3):\n1. Mở ứng dụng Forms, mở lại biểu mẫu đã tạo.\n2. Dòng đầu tiên hiển thị thông tin về số câu trả lời đã nhận được cho biểu mẫu.\n3. Nháy vào Câu trả lời để xem chi tiết: Bản tóm tắt (thống kê câu trả lời dạng biểu đồ), Câu hỏi (thông tin chi tiết theo từng câu hỏi), Cá nhân (thông tin chi tiết theo từng người trả lời).\n4. Có thể chọn Xem trong Trang tính để thấy toàn bộ dữ liệu trả lời được tập hợp vào một bảng tính.",
    },
  ],
};

export default extra;
