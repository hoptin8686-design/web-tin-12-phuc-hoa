import type { LessonExtra } from "@/lib/types";

// Bài 26. Liên kết và thanh điều hướng — Google Sites — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b26-tf1",
      context:
        "Trước khi thực hành, nhóm bạn Linh ôn lại Nhiệm vụ 1 về mô hình các trang web liên kết theo cấu trúc hình cây. Linh ghi vài nhận định, bạn Phong đối chiếu với SGK.",
      code: "",
      statements: [
        {
          text: "Nếu văn bản giới thiệu một địa danh ở trang chủ quá dài, người dùng sẽ khó đọc tiếp phần sau và có thể làm lộ khoảng trống mất cân đối giữa các bài viết.",
          answer: true,
          explain: "Đúng theo vấn đề mở đầu bài học trong SGK.",
        },
        {
          text: "Cụm từ \"Đọc tiếp\" ở cuối đoạn giới thiệu tóm tắt trên trang chủ được gắn liên kết đến trang web có đầy đủ thông tin về địa danh đó.",
          answer: true,
          explain: "Đúng theo Hình 26.1 và mô tả của SGK.",
        },
        {
          text: "Trang con là những trang web hoàn toàn độc lập, không thể được mở ra từ bảng chọn của trang chủ.",
          answer: false,
          explain: "Sai. SGK định nghĩa ngược lại: các trang web được mở từ bảng chọn của trang chủ chính là trang con của trang chủ.",
        },
        {
          text: "Một trang con chỉ được phép có tối đa một trang con của riêng nó, không thể tạo thêm trang con thứ hai bên dưới.",
          answer: false,
          explain: "Sai. SGK không giới hạn số trang con như vậy — trang con của trang chủ cũng có thể có nhiều trang con của mình, tổ chức theo cấu trúc tương tự cây thư mục.",
        },
      ],
    },
    {
      id: "b26-tf2",
      context:
        "Sang Nhiệm vụ 2, nhóm bạn Đăng thực hành tạo và truy cập các trang con trên Google Sites. Đăng kể lại thao tác, bạn Thư kiểm tra lại từng ý.",
      code: "",
      statements: [
        {
          text: "Để tạo trang con, Đăng chọn bảng chọn Trang trong khung bên phải, nháy dấu ba chấm cạnh Trang chủ rồi chọn Thêm trang con.",
          answer: true,
          explain: "Đúng theo Bước 1, Nhiệm vụ 2 của SGK (Hình 26.3).",
        },
        {
          text: "Khi truy cập trang web bằng điện thoại, Google Sites tự động chuyển bảng chọn trên thanh điều hướng sang phía phải, ngay trước logo, dạng biểu tượng ba gạch.",
          answer: true,
          explain: "Đúng theo SGK: Google Sites tự động điều chỉnh giao diện khi truy cập bằng điện thoại hay máy tính bảng theo cách này.",
        },
        {
          text: "Muốn hiển thị bảng chọn dạng biểu tượng giống điện thoại ngay trên máy tính, Đăng cần vào Chèn → Nhúng → dán mã HTML của bảng chọn.",
          answer: false,
          explain: "Sai. Đường dẫn đúng theo SGK (Hình 26.5) là Cài đặt → Điều hướng → Phần tử xuất hiện nhiều nhất → Bên — không liên quan tới lệnh Nhúng hay mã HTML.",
        },
        {
          text: "Các trang con vừa khởi tạo sẽ có sẵn đầy đủ nội dung chi tiết ngay từ đầu, không cần chỉnh sửa hay thêm nội dung gì thêm.",
          answer: false,
          explain: "Sai. SGK nêu: các trang con đã khởi tạo NHƯNG CHƯA CÓ NỘI DUNG — phần đầu trang được tạo tự động với hình nền trang chủ và tiêu đề tương ứng, còn nội dung phải tự thêm vào ở Bước 3.",
        },
      ],
    },
    {
      id: "b26-tf3",
      context:
        "Hoàn thành các trang con, nhóm bạn Yến chuyển sang Bước 4: gắn liên kết \"Đọc tiếp\" từ trang chủ tới trang Mù Cang Chải. Yến báo cáo thao tác, cô giáo nêu vài nhận định để cả lớp kiểm tra.",
      code: "",
      statements: [
        {
          text: "Để gắn liên kết, Yến nháy chuột ở cuối đoạn giới thiệu, nháy biểu tượng chèn đường liên kết, chọn trang Mù Cang Chải làm đích, rồi nháy Áp dụng.",
          answer: true,
          explain: "Đúng theo Bước 4, Nhiệm vụ 2 của SGK (Hình 26.6).",
        },
        {
          text: "Trang Tây Bắc – Đông Bắc nên chứa thông tin đầy đủ, chi tiết nhất; còn trang con Mù Cang Chải của nó chỉ nên giới thiệu khái quát, sơ lược hơn.",
          answer: false,
          explain: "Sai, ngược với SGK. Trang con cụ thể hơn (Mù Cang Chải) mới nên chứa thông tin đầy đủ, chi tiết; trang cấp trên bao quát cả vùng (Tây Bắc – Đông Bắc) chỉ nên giới thiệu khái quát.",
        },
        {
          text: "Theo Luyện tập, cần tạo trang con Miền Trung của trang chủ, và trang con Đà Lạt của trang Miền Trung.",
          answer: false,
          explain: "Sai. SGK yêu cầu tạo trang con Tây Nguyên của trang chủ, và trang con Bản Đôn của trang Tây Nguyên — không phải Miền Trung/Đà Lạt.",
        },
        {
          text: "Phần Vận dụng yêu cầu xây dựng các trang con Ca khúc, Nhạc sĩ, Ca sĩ cho đề tài \"Những bài ca đi cùng năm tháng\".",
          answer: true,
          explain: "Đúng theo phần Vận dụng của SGK.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b26-es1",
      q: "Trình bày mô hình tổ chức các trang web liên kết với nhau theo cấu trúc hình cây (Nhiệm vụ 1): vì sao cần mô hình này, và khái niệm trang con là gì?",
      answer:
        "* Vì sao cần: Nếu văn bản giới thiệu một địa danh ở trang chủ quá dài, người dùng khó đọc tiếp phần sau; đồng thời độ dài khác nhau giữa các bài viết cạnh nhau có thể làm lộ khoảng trống, mất cân đối trong trình bày trang chủ. Giải pháp là tạo ra các trang độc lập, đầy đủ thông tin, và dùng liên kết đến chúng từ phần giới thiệu tóm tắt ở trang chủ (ví dụ cụm từ \"Đọc tiếp\").\n\n* Khái niệm trang con: trên thanh điều hướng cũng có thể đưa vào các cụm từ mang liên kết đến trang khác, tạo thành một bảng chọn. Các trang web được mở từ bảng chọn của trang chủ được gọi là trang con của trang chủ. Trang con cũng có thể có các trang con của riêng mình. Nhờ vậy, các trang web có thể được tổ chức, sắp xếp theo cấu trúc tương tự cây thư mục — trang chủ ở gốc, các trang con và trang con của trang con phân nhánh xuống dưới.",
    },
    {
      id: "b26-es2",
      q: "Trình bày 4 bước tạo và truy cập các trang con, gắn liên kết trong bài giới thiệu (Nhiệm vụ 2).",
      answer:
        "1. Tạo trang con: chọn bảng chọn Trang trong khung bên phải; nháy dấu ba chấm cạnh Trang chủ, chọn Thêm trang con; nhập tên trang con rồi chọn Xong. Có thể tạo tiếp trang con của một trang con vừa tạo.\n\n2. Truy cập các trang: đưa con trỏ chuột đến Trang chủ để mở bảng chọn các trang con; nháy tên trang con muốn truy cập. Lưu ý: Google Sites tự động điều chỉnh giao diện khi xem bằng điện thoại/máy tính bảng — bảng chọn chuyển sang phía phải, dạng biểu tượng ba gạch, ngay trước logo. Muốn hiển thị dạng này trên máy tính: Cài đặt → Điều hướng → Phần tử xuất hiện nhiều nhất → Bên.\n\n3. Thêm nội dung cho các trang con: các trang con mới khởi tạo có phần đầu trang tự động (hình nền trang chủ, tiêu đề tương ứng) nhưng chưa có nội dung; cần chỉnh sửa phần đầu (ví dụ giảm chiều cao, đổi hình nền để phân biệt) và thêm nội dung — trang chi tiết cụ thể chứa đầy đủ văn bản/hình ảnh/video, trang cấp trên chứa thông tin khái quát hơn.\n\n4. Tạo liên kết trong bài giới thiệu: mở trang chủ, nháy chuột ở cuối đoạn giới thiệu, nháy biểu tượng chèn đường liên kết; chọn trang đích cần liên kết tới; nhập văn bản hiển thị (ví dụ \"Đọc tiếp\") vào ô Văn bản; nháy Áp dụng để hoàn tất.",
    },
  ],
};

export default extra;
