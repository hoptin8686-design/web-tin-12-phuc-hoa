import type { LessonExtra } from "@/lib/types";

// Bài 24. Xây dựng phần đầu trang web — Google Sites — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b24-tf1",
      context:
        "Nhóm bạn Chi lần đầu mở Google Sites để làm quen theo Nhiệm vụ 1 và 2. Chi ghi lại vài nhận định vào vở, bạn Kỳ đọc và kiểm tra lại từng ý.",
      code: "",
      statements: [
        {
          text: "Google Sites là ứng dụng miễn phí trong hệ sinh thái Google, giúp cả người dùng không chuyên về tin học cũng có thể xây dựng và xuất bản trang web.",
          answer: true,
          explain: "Đúng theo giới thiệu của SGK: Google Sites miễn phí, giúp người dùng xây dựng trang web và xuất bản lên Internet, kể cả nhóm người dùng không chuyên về tin học.",
        },
        {
          text: "Địa chỉ sites.google.com/new dùng để vào thẳng giao diện tạo một trang web mới của Google Sites.",
          answer: true,
          explain: "Đúng theo SGK: nhập sites.google.com/new tại thanh địa chỉ trình duyệt để vào giao diện tạo trang web mới.",
        },
        {
          text: "Phần đầu trang trên Google Sites chỉ có thể chứa duy nhất tiêu đề trang, không thể có logo hay hình nền.",
          answer: false,
          explain: "Sai. SGK nêu phần đầu trang có thể có logo, tên trang, hình nền của phần đầu trang, tiêu đề trang, và bảng chọn trên thanh điều hướng.",
        },
        {
          text: "Dòng \"Trang web không có tiêu đề\" trong giao diện thiết lập phần đầu trang là nơi nhập tiêu đề chính hiển thị to nhất cho người xem trang.",
          answer: false,
          explain: "Sai, Kỳ nhầm với dòng \"Tiêu đề trang\". Dòng \"Trang web không có tiêu đề\" là nơi nhập/hiển thị TÊN TỆP lưu trữ trang web, được lưu ở Google Drive của người dùng.",
        },
      ],
    },
    {
      id: "b24-tf2",
      context:
        "Đến Nhiệm vụ 3, nhóm bạn Bảo bắt tay tạo phần đầu trang cho dự án \"Việt Nam - Vẻ đẹp tiềm ẩn\". Bảo báo cáo lại các bước đã làm, bạn Vy đối chiếu với SGK.",
      code: "",
      statements: [
        {
          text: "Favicon nên có dạng hình vuông với kích thước 16×16, 32×32 hay 48×48 pixels, còn logo có dạng hình chữ nhật.",
          answer: true,
          explain: "Đúng theo SGK: favicon dạng hình vuông với các kích thước gợi ý 16×16, 32×32 hay 48×48 pixels; logo có thể có dạng hình chữ nhật.",
        },
        {
          text: "Tên trang web (ví dụ \"Tiềm ẩn - Việt Nam\") nên đặt ngắn gọn vì tên này được gán vào địa chỉ URL của trang.",
          answer: true,
          explain: "Đúng theo lưu ý của SGK về việc đặt tên trang web ngắn gọn.",
        },
        {
          text: "Các tuỳ chọn Loại tiêu đề (Bìa, Biểu ngữ lớn, Biểu ngữ, Chỉ có tiêu đề) khác nhau về màu nền, không liên quan gì tới chiều cao của phần đầu trang.",
          answer: false,
          explain: "Sai. SGK nêu các kích thước này chỉ khác nhau về CHIỀU CAO; tuỳ chọn Bìa có chiều cao lớn nhất, chiếm toàn bộ màn hình, Chỉ có tiêu đề thì không có ảnh nền.",
        },
        {
          text: "Khi thiết lập ảnh nền, độ sáng của ảnh không bao giờ tự động thay đổi; muốn chữ dễ đọc trên nền, người dùng phải tự chỉnh độ sáng ảnh bằng phần mềm bên ngoài trước khi tải lên.",
          answer: false,
          explain: "Sai. SGK nêu ngược lại: độ sáng ảnh nền MẶC ĐỊNH được Google Sites tự động điều chỉnh để vẫn đọc được chữ trên nền; muốn giữ nguyên độ sáng gốc thì nháy biểu tượng ở góc dưới bên phải để huỷ chế độ tự động (Hình 24.10) — không cần phần mềm ngoài.",
        },
      ],
    },
    {
      id: "b24-tf3",
      context:
        "Hoàn thành phần đầu trang, nhóm bạn Đạt chuyển sang Bước 4, 5, 6 của Nhiệm vụ 3: thiết lập tiêu đề trang, xem trước và xuất bản. Đạt kể lại thao tác của mình cho cô giáo nghe.",
      code: "",
      statements: [
        {
          text: "Nếu tiêu đề trang dài, Đạt có thể nhấn tổ hợp phím Shift + Enter để ngắt xuống dòng mà không cần thay đổi kích thước khung văn bản.",
          answer: true,
          explain: "Đúng theo SGK: nếu tiêu đề dài thì có thể thay đổi kích thước khung văn bản hoặc nhấn Shift + Enter để ngắt xuống dòng.",
        },
        {
          text: "Trước khi xuất bản, Đạt có thể xem trước trang web đang tạo trên điện thoại, máy tính bảng và máy tính bằng biểu tượng Xem trước.",
          answer: true,
          explain: "Đúng theo SGK (Hình 24.13, 24.14): nháy biểu tượng Xem trước rồi chọn xem trên điện thoại, máy tính bảng hay máy tính.",
        },
        {
          text: "Đạt chỉ cần lưu trang web vào Google Drive là coi như đã xuất bản xong, người khác có thể truy cập trang web ngay mà không cần thao tác gì thêm.",
          answer: false,
          explain: "Sai. Lưu vào Drive chỉ là lưu bản nháp đang chỉnh sửa (Google Sites tự động lưu). Muốn người khác truy cập được, Đạt phải nháy nút Công bố để xuất bản trang web.",
        },
        {
          text: "Muốn lấy địa chỉ URL của trang, Đạt phải gửi yêu cầu qua thư điện tử cho bộ phận hỗ trợ của Google, không thể tự lấy được ngay trên giao diện Google Sites.",
          answer: false,
          explain: "Sai. Theo SGK (Bước 6), Đạt chỉ cần nháy vào biểu tượng liên kết (Sao chép liên kết) ngay trên giao diện, rồi dán vào thanh địa chỉ trình duyệt — không cần liên hệ bộ phận hỗ trợ nào.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b24-es1",
      q: "Trình bày các thành phần của giao diện thiết lập phần đầu trang trên Google Sites (Nhiệm vụ 2) và vai trò của từng dòng chức năng chính.",
      answer:
        "* Phần đầu trang trên Google Sites có thể gồm: logo, tên trang, hình nền của phần đầu trang, tiêu đề trang, và bảng chọn trên thanh điều hướng.\n\n* Vai trò các dòng chức năng chính trong giao diện thiết lập (Hình 24.3):\n- Dòng \"Trang web không có tiêu đề\": nơi thao tác nhập/hiển thị tên tệp lưu trữ trang web (lưu trên Google Drive của người dùng).\n- Dòng \"Nhập tên trang web\": nơi nhập/hiển thị logo, favicon và tên trang web.\n- Dòng \"Thay đổi hình ảnh\", \"Loại tiêu đề\": bảng chọn kích thước phần đầu trang và hình ảnh nền. Các kích thước tuỳ chọn (Bìa, Biểu ngữ lớn, Biểu ngữ, Chỉ có tiêu đề) chỉ khác nhau về chiều cao; Bìa có chiều cao lớn nhất, chiếm toàn bộ màn hình; Chỉ có tiêu đề thì không có ảnh nền.\n- Dòng \"Tiêu đề trang\": nơi nhập/hiển thị tiêu đề trang và nội dung tóm tắt trang.\n\nRiêng phần Thanh điều hướng sẽ được học kĩ ở các bài sau.",
    },
    {
      id: "b24-es2",
      q: "Trình bày 6 bước tạo phần đầu trang web ở Nhiệm vụ 3 (lấy ví dụ dự án \"Việt Nam - Vẻ đẹp tiềm ẩn\").",
      answer:
        "1. Nhập tên tệp lưu trữ trang web: nháy vào dòng \"Trang web không có tiêu đề\", nhập tên tệp gợi nhớ (ví dụ VN - Ver 1) — tệp sẽ xuất hiện trên Google Drive.\n\n2. Thiết lập logo, favicon, nhập tên trang, thông báo đầu trang: chọn ảnh định dạng png/jpg/gif (favicon hình vuông 16×16, 32×32 hay 48×48 pixels); nháy \"Nhập tên trang web\" → \"Thêm biểu tượng\" → trong cửa sổ Cài đặt chọn \"Hình ảnh thương hiệu\" để thiết lập logo/favicon (chọn ảnh có sẵn trên Drive hoặc tải lên từ thiết bị); có thể thêm thông báo đầu trang ở mục \"Phần thông báo\"; sau đó nhập tên trang ngắn gọn (vì được gán vào URL), ví dụ \"Tiềm ẩn - Việt Nam\".\n\n3. Thiết lập kích thước phần đầu trang, ảnh nền, tiêu đề trang: chọn kích thước ở \"Loại tiêu đề\"; thiết lập ảnh nền bằng \"Thay đổi hình ảnh\" (tải lên hoặc chọn từ Drive/Google Photos/Internet); có thể huỷ chế độ tự động điều chỉnh độ sáng nếu muốn giữ ảnh gốc; dùng biểu tượng neo để điều chỉnh phần ảnh hiển thị trọn vẹn trong khung.\n\n4. Thiết lập tiêu đề trang: nháy \"Tiêu đề trang\", nhập nội dung, có thể đổi phông chữ, cỡ chữ, màu sắc, căn lề, dãn dòng; nếu tiêu đề dài thì đổi kích thước khung văn bản hoặc nhấn Shift + Enter để ngắt dòng.\n\n5. Xem trước, chỉnh sửa: Google Sites tự động lưu vào Drive; trước khi xuất bản có thể xem trước trên điện thoại, máy tính bảng hay máy tính bằng biểu tượng Xem trước.\n\n6. Xuất bản và truy cập trang web theo URL: nháy nút \"Công bố\" để xuất bản; nháy biểu tượng liên kết để sao chép địa chỉ URL rồi dán vào thanh địa chỉ trình duyệt để truy cập.",
    },
  ],
};

export default extra;
