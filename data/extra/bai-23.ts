import type { LessonExtra } from "@/lib/types";

// Bài 23. Chuẩn bị xây dựng trang web — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b23-tf1",
      context:
        "Khi phân tích cấu trúc chung của một trang web điển hình trên Internet, chúng ta thường thấy sự lặp lại của một số thành phần cơ bản nhằm giúp người dùng dễ dàng định vị thông tin.",
      statements: [
        {
          text: "Một trang web đầy đủ thường có ba phần: đầu trang, thân trang và chân trang.",
          answer: true,
          explain:
            "Đúng. Dễ nhận thấy mỗi trang web đầy đủ nhất đều có cấu trúc 3 phần chính này.",
        },
        {
          text: "Công cụ tìm kiếm và thanh điều hướng chính của trang web thường đặt ở phần chân trang (footer).",
          answer: false,
          explain:
            "Sai. Công cụ tìm kiếm và thanh điều hướng (bảng chọn) thường được đặt ở phần đầu trang (header). Chân trang thường chứa thông tin bản quyền, liên hệ.",
        },
        {
          text: "Favicon là biểu tượng nhỏ xuất hiện trên tab trình duyệt, đại diện cho cả website.",
          answer: true,
          explain: "Đúng. Favicon là biểu tượng đại diện trên tab trình duyệt.",
        },
        {
          text: "Phần thân trang (body) chỉ chứa được văn bản, không hiển thị được hình ảnh hay video.",
          answer: false,
          explain:
            "Sai. Phần thân trang có thể chứa thông tin đa dạng: văn bản, hình ảnh, âm thanh, biểu mẫu, ứng dụng nhúng...",
        },
      ],
    },
    {
      id: "b23-tf2",
      context:
        "Trước khi bắt tay vào việc tạo các trang con và đưa nội dung lên mạng, người quản trị cần thực hiện các bước chuẩn bị kĩ lưỡng để đảm bảo dự án web thành công.",
      statements: [
        {
          text: "Bước đầu tiên là 'Định hình ý tưởng': xác định mục đích trang web và đối tượng người dùng.",
          answer: true,
          explain:
            "Đúng. Việc xây dựng cần bắt đầu với phân tích mục đích và đối tượng phục vụ để từ đó đáp ứng đúng nhu cầu.",
        },
        {
          text: "Khi thiết kế mĩ thuật, nên ưu tiên phông chữ có chân (Serif) vì dễ đọc trên màn hình điện thoại.",
          answer: false,
          explain:
            "Sai. Phông chữ không chân (Sans Serif) mới là loại được khuyên dùng trên màn hình vì dễ đọc hơn phông chữ có chân (Serif).",
        },
        {
          text: "Bảng màu hài hoà cho trang web nên có khoảng 5 màu, pha trộn gam ấm, lạnh và trung tính.",
          answer: true,
          explain:
            "Đúng. Bảng màu thường có khoảng 5 màu pha trộn hài hoà, tránh màu sắc tương phản quá gắt gây phản cảm.",
        },
        {
          text: "Google Sites là phần mềm xây web tính phí, phải trả tiền theo tháng để duy trì tên miền.",
          answer: false,
          explain:
            "Sai. Google Sites là ứng dụng được Google cung cấp miễn phí trong hệ sinh thái của mình.",
        },
      ],
    },
    {
      id: "b23-tf3",
      context:
        "Nhóm bạn Mai làm trang web giới thiệu chợ phiên Phục Hòa, dành cho khách du lịch từ xa nên đầu trang đặt logo và thanh điều hướng, chân trang ghi địa chỉ liên hệ và bản quyền. Mai đề nghị dùng Google Sites vì cả nhóm đã có tài khoản Google. Bạn Súa thì bảo nội dung chính nên chọn phông chữ có chân cho đẹp, còn bảng màu cứ dùng thật nhiều màu cho bắt mắt.",
      statements: [
        {
          text: "Việc nhóm xác định trang web dành cho khách du lịch phương xa thuộc bước định hình ý tưởng.",
          answer: true,
          explain:
            "Bước định hình ý tưởng là xác định rõ mục đích của trang web và đối tượng người dùng mà trang web phục vụ. Biết rõ đối tượng thì mới chọn được nội dung và cách trình bày phù hợp.",
        },
        {
          text: "Google Sites là công cụ trực quan, miễn phí, chỉ cần có tài khoản Google là dùng được.",
          answer: true,
          explain:
            "Google Sites cho phép tự xây dựng website đa dạng mà không nhất thiết phải biết HTML và CSS; yêu cầu tiên quyết chỉ là người dùng có một tài khoản Google.",
        },
        {
          text: "Góp ý của Súa là đúng: nên dùng phông có chân (Serif) cho nội dung chính trên màn hình.",
          answer: false,
          explain:
            "Ngược lại. Trên màn hình nên dùng phông không chân (Sans Serif) như Arial, Tahoma, Calibri vì nét đều, dễ đọc và đỡ mỏi mắt. Phông có chân (Serif) đẹp trên bản in giấy nhưng khó nhận diện hơn trên màn hình.",
        },
        {
          text: "Bảng màu của trang web càng dùng nhiều màu càng tốt vì như thế mới bắt mắt người xem.",
          answer: false,
          explain:
            "Dùng quá nhiều màu làm trang rối và khó đọc. Các nhà thiết kế thường chọn một bảng màu hài hoà gồm ít màu và phân bổ theo tỉ lệ hợp lí giữa màu nền, màu phụ và màu nhấn.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b23-w1",
      q: "Hãy kể tên 3 phần chính thường có của một trang web đầy đủ và nêu tóm tắt nội dung/vai trò của từng phần.",
      answer:
        "- Phần đầu trang (header): Chứa những thông tin chung nhất và nổi bật như logo, tên trang, thanh điều hướng (bảng chọn), công cụ tìm kiếm, tiêu đề. Có vai trò như trang bìa của sách.\n- Phần thân trang (body): Chứa nội dung chính của trang web, thường được bố cục thành các khối hình chữ nhật để truyền tải văn bản, hình ảnh, âm thanh hoặc biểu mẫu.\n- Phần chân trang (footer): Chứa các thông tin ngắn gọn về chủ thể, bản quyền, thông tin liên hệ và liên kết tới các trang mạng xã hội.",
    },
    {
      id: "b23-w2",
      q: "Favicon là gì và nó xuất hiện ở vị trí nào khi người dùng truy cập một website?",
      answer:
        "Favicon (viết tắt của favorite icon) là một biểu tượng (logo) thu nhỏ đại diện cho toàn bộ các trang web trong một website. Favicon thường xuất hiện ở phần tab của trình duyệt web (cạnh tiêu đề trang) khi người dùng mở trang web đó. Nó giúp người dùng dễ dàng nhận diện trang web giữa nhiều tab đang mở.",
    },
    {
      id: "b23-w3",
      q: "Trình bày các bước cơ bản cần thực hiện để chuẩn bị xây dựng một trang web.",
      answer:
        "Trình tự các bước chuẩn bị cần thực hiện gồm 3 bước chính:\n1. Định hình ý tưởng: Xác định rõ mục đích (trang web làm gì) và đối tượng phục vụ (ai sẽ xem trang web).\n2. Thiết kế: Xây dựng dàn ý tổng thể, xây dựng kiến trúc nội dung và thiết kế mĩ thuật (chọn bảng màu, phông chữ).\n3. Lựa chọn phần mềm và chuẩn bị tư liệu: Chọn nền tảng (ví dụ: Google Sites), thiết kế logo, favicon, ảnh nền, và chuẩn bị tư liệu (bài viết, hình ảnh) cho từng phần.",
    },
    {
      id: "b23-w4",
      q: "Tại sao trong thiết kế mĩ thuật cho trang web, người ta thường khuyên sử dụng các phông chữ Sans Serif (không có chân) thay vì phông chữ Serif (có chân) cho phần nội dung chính?",
      answer:
        "Bởi vì phông chữ Sans Serif (không có chân) như Arial, Tahoma, Calibri... có nét đều đặn, không có phần gạch ngang (chân) ở cuối các nét chữ, giúp nó rất dễ đọc và tiết kiệm diện tích hiển thị trên các màn hình điện tử (màn hình máy tính, điện thoại). Ngược lại, phông chữ Serif (có chân) như Times New Roman tuy đẹp trên bản in giấy nhưng lại tương đối khó nhận diện rõ ràng trên màn hình với độ phân giải thấp, khiến người dùng bị mỏi mắt khi đọc các văn bản dài.",
    },
  ],
};

export default extra;
