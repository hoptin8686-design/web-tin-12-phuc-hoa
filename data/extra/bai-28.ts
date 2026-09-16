import type { LessonExtra } from "@/lib/types";

// Bài 28. Thực hành tổng hợp — Google Sites — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b28-tf1",
      context:
        "Trước khi bắt tay thực hành, nhóm bạn My đọc lại phần Khái quát nhiệm vụ và yêu cầu, cùng Nhiệm vụ 1 (Lựa chọn chủ đề). My ghi vài nhận định, bạn Tiến đối chiếu với SGK.",
      code: "",
      statements: [
        {
          text: "Sản phẩm website hoàn chỉnh phải bao gồm tư liệu đa phương tiện với ít nhất 3 đến 4 bài viết ngắn gọn.",
          answer: true,
          explain: "Đúng theo yêu cầu về Nội dung trong phần Khái quát nhiệm vụ và yêu cầu.",
        },
        {
          text: "Tất cả các trang web trong sản phẩm đều phải có dữ liệu đa phương tiện, không được là trang văn bản thuần chữ.",
          answer: true,
          explain: "Đúng theo phần Yêu cầu khác của SGK.",
        },
        {
          text: "Theo Nhiệm vụ 1, bắt buộc phải làm việc theo nhóm cố định 5 người, không được làm việc cá nhân.",
          answer: false,
          explain: "Sai. SGK nêu: có thể làm việc cá nhân hoặc làm việc nhóm, và nhóm không quá 3 người — không bắt buộc nhóm 5 người.",
        },
        {
          text: "SGK khuyến khích chọn chủ đề càng rộng càng tốt, phục vụ được toàn bộ mọi đối tượng người dùng khác nhau trên Internet.",
          answer: false,
          explain: "Sai, ngược với SGK. SGK khuyên chủ đề KHÔNG nên quá rộng, đối tượng người dùng nên hạn chế, để có thể nhanh chóng chuẩn bị tư liệu và thực hiện trong khoảng 3 tiết thực hành.",
        },
      ],
    },
    {
      id: "b28-tf2",
      context:
        "Sang Nhiệm vụ 2, nhóm bạn Quân chọn chủ đề website giới thiệu Địa lí Việt Nam, làm theo ví dụ gợi ý trong SGK. Quân trình bày lại kế hoạch, bạn Hà kiểm tra từng ý.",
      code: "",
      statements: [
        {
          text: "Dàn ý nội dung website Địa lí Việt Nam gồm ba phần: địa lí tự nhiên, địa lí kinh tế - xã hội, và câu hỏi trắc nghiệm kiểm tra hiểu biết.",
          answer: true,
          explain: "Đúng theo ví dụ Nhiệm vụ 2 trong SGK.",
        },
        {
          text: "Trên thanh điều hướng của website này có bảng chọn Trang chủ, Địa lí Tự nhiên, Địa lí Kinh tế – Xã hội, Trắc nghiệm.",
          answer: true,
          explain: "Đúng theo phần Bố cục trong ví dụ Nhiệm vụ 2 của SGK.",
        },
        {
          text: "SGK khuyến nghị dùng phông chữ Serif (có chân) cho toàn bộ nội dung website Địa lí Việt Nam, với các cỡ chữ 10, 12, 18.",
          answer: false,
          explain: "Sai. SGK khuyến nghị dùng phông chữ Sans Serif (không chân), với các kích thước 10, 12, 18 — không phải phông Serif.",
        },
        {
          text: "Phần mềm được SGK đề xuất để thực hiện toàn bộ website Địa lí Việt Nam là Microsoft PowerPoint, không phải Google Sites.",
          answer: false,
          explain: "Sai. Mục Phần mềm thực hiện trong ví dụ Nhiệm vụ 2 của SGK ghi rõ: Google Sites — không phải PowerPoint.",
        },
      ],
    },
    {
      id: "b28-tf3",
      context:
        "Hoàn thành khâu chuẩn bị, nhóm bạn Linh chuyển sang Nhiệm vụ 3: xây dựng bảng chọn ngang và áp dụng mẫu giao diện có sẵn. Linh báo cáo lại thao tác, cô giáo nêu vài nhận định để cả lớp kiểm tra.",
      code: "",
      statements: [
        {
          text: "Muốn tạo các trang Tự nhiên, Kinh tế – Xã hội, Trắc nghiệm cùng cấp với Trang chủ, Linh dùng thao tác Thêm trang con giống hệt như ở Bài 26.",
          answer: false,
          explain: "Sai. Thêm trang con (Bài 26) tạo ra trang PHỤ THUỘC cấp dưới Trang chủ; để tạo trang CÙNG CẤP, Bài 28 hướng dẫn khác: trong bảng chọn Trang, nháy dấu cộng (+) để thêm Trang mới.",
        },
        {
          text: "Mẫu giao diện có sẵn của Google Sites quy định bảng màu, phông chữ và thiết kế đầu trang; khi đã chọn một mẫu, vẫn có thể tự thay đổi riêng màu sắc hay phông chữ của một phần nào đó.",
          answer: true,
          explain: "Đúng theo SGK: dù chọn mẫu, giao diện được điều khiển mặc định theo mẫu đó, nhưng vẫn có thể thay đổi riêng về màu sắc, phông chữ của một phần nào đó trong quá trình thiết lập.",
        },
        {
          text: "Bảng chọn Giao diện gồm hai nhóm: nhóm để tự thiết kế mẫu hoặc tải mẫu lên, và nhóm các mẫu có sẵn của Google Sites.",
          answer: true,
          explain: "Đúng theo mô tả bảng chọn Giao diện trong SGK (Hình 28.4).",
        },
        {
          text: "Mỗi mẫu giao diện có bảng màu với toàn bộ 3 màu đều cố định, không có màu nào có thể tự điều chỉnh được.",
          answer: false,
          explain: "Sai. SGK nêu: bảng màu có 3 màu, trong đó 2 màu cố định (tông nhẹ) và 1 màu (tông đậm) CÓ THỂ điều chỉnh — không phải cả 3 màu đều cố định.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b28-es1",
      q: "Trình bày các yêu cầu đối với sản phẩm website hoàn chỉnh trong Bài 28 (phần Khái quát nhiệm vụ và yêu cầu), và những lưu ý khi lựa chọn chủ đề ở Nhiệm vụ 1.",
      answer:
        "* Yêu cầu đối với sản phẩm:\n- Nội dung: bao gồm các tư liệu đa phương tiện với ít nhất 3 đến 4 bài viết ngắn gọn.\n- Bố cục: bố cục nội dung và hình thức hợp lí.\n- Hình thức: sử dụng màu sắc và phông chữ hợp lí.\n- Yêu cầu khác: tất cả các trang web đều có dữ liệu đa phương tiện (không phải trang văn bản thuần chữ); có bảng chọn ở thanh điều hướng để đi tới các trang con; có liên kết trong bài viết tới các trang khác của website hoặc tới các trang trên Internet; có biểu mẫu với nội dung hợp lí.\n- Thuyết minh sản phẩm: dưới dạng một bài giới thiệu ngắn gọn về mục đích, ý nghĩa cùng các yêu cầu đã đạt được.\n\n* Lưu ý khi chọn chủ đề (Nhiệm vụ 1): có thể làm việc cá nhân hoặc theo nhóm (không quá 3 người); chủ đề không nên quá rộng, đối tượng người dùng nên hạn chế, yêu cầu vừa phải, có thể nhanh chóng chuẩn bị tư liệu và thực hiện trong khoảng 3 tiết thực hành trên lớp. Gợi ý một số chủ đề gần gũi: lớp học, những kỉ niệm THPT, môn học yêu thích, quê hương, gia đình...",
    },
    {
      id: "b28-es2",
      q: "Trình bày hai bước xây dựng trang web ở Nhiệm vụ 3: cách tạo bảng chọn trên thanh điều hướng theo chiều ngang, và cách sử dụng mẫu giao diện có sẵn của Google Sites.",
      answer:
        "* Bước 1. Xây dựng bảng chọn trên thanh điều hướng theo chiều ngang:\n- Khác với cách tạo trang CON của trang chủ (Bài 26, tạo cấu trúc đổ xuống theo chiều dọc), ở đây cần tạo các trang mới CÙNG CẤP với Trang chủ (ví dụ Tự nhiên, Kinh tế – Xã hội, Trắc nghiệm) để bảng chọn trải ra theo chiều ngang trên thanh điều hướng.\n- Cách thực hiện: trong bảng chọn Trang, nháy vào dấu cộng (+) để thêm Trang mới; nhập tên trang mới rồi chọn nút lệnh Xong.\n- Lưu ý: trong giao diện bảng chọn Trang, có thể kéo thả để di chuyển, thay đổi trình tự và mức hiển thị của trang trong cấu trúc cây các trang, tương tự di chuyển thư mục trong cây thư mục.\n\n* Bước 2. Sử dụng các mẫu giao diện có sẵn của Google Sites:\n- Mẫu giao diện là tập hợp các quy định về bảng màu, phông chữ, thiết kế đầu trang. Khi chọn một mẫu, toàn bộ giao diện được điều khiển hiển thị mặc định theo mẫu đó, nhưng vẫn có thể thay đổi riêng màu sắc, phông chữ của một phần nào đó.\n- Mỗi mẫu có bảng màu 3 màu (2 màu cố định tông nhẹ, 1 màu tông đậm có thể điều chỉnh) và phông chữ với 3 phông, kiểu cố định.\n- Thao tác: mở bảng chọn Giao diện; chọn một mẫu có sẵn (ví dụ Đơn giản); nháy lần lượt vào 5 hình tròn màu để xem và chọn màu ưng ý; chọn 1 trong 3 phông chữ được ấn định sẵn; đưa con trỏ vào vùng bất kì của trang để mở bảng chọn tắt, chọn 1 trong 3 kiểu hiển thị màu (Kiểu 1, 2, 3). Ở Kiểu 3, có thể nháy vào vị trí thứ sáu để mở giao diện điều chỉnh màu thứ ba: kết hợp luân phiên chọn điểm trên thanh chọn màu và trên bảng chọn sắc thái màu cho tới khi được màu như mong muốn.",
    },
  ],
};

export default extra;
