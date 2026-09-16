import type { Question } from "@/lib/types";

// Bài 24. Xây dựng phần đầu trang web — Google Sites (SGK trang 134-138)
const questions: Question[] = [
  {
    id: "b24-01",
    q: "Google Sites là gì?",
    options: [
      "Ứng dụng miễn phí của Google, giúp người dùng xây dựng và xuất bản trang web lên Internet",
      "Một ngôn ngữ lập trình chuyên dụng để viết mã HTML và CSS cho trang web hiện đại",
      "Một dịch vụ trả phí của Google, chỉ dành riêng cho các lập trình viên chuyên nghiệp sử dụng",
      "Một trình duyệt web do Google phát triển để thay thế cho trình duyệt Google Chrome",
    ],
    answer: 0,
    explain:
      "SGK giới thiệu: Google Sites là một ứng dụng trong hệ sinh thái đa dạng của Google, miễn phí, giúp người dùng xây dựng các trang web và xuất bản chúng lên Internet — kể cả người dùng không chuyên về tin học.",
  },
  {
    id: "b24-02",
    q: "Theo Nhiệm vụ 1, để vào giao diện tạo trang web mới của Google Sites, cần nhập địa chỉ nào vào thanh địa chỉ trình duyệt?",
    options: ["sites.google.com/new", "drive.google.com/new", "docs.google.com/create", "mail.google.com/sites"],
    answer: 0,
    explain:
      "SGK hướng dẫn: tại thanh địa chỉ của trình duyệt, nhập sites.google.com để vào giao diện Google Sites, hoặc trực tiếp sites.google.com/new để vào giao diện tạo trang web mới.",
  },
  {
    id: "b24-03",
    q: "Theo Hình 24.1, giao diện đầu tiên của Google Sites gồm ba phần. Phần thứ hai của giao diện có chức năng gì?",
    options: [
      "Các lựa chọn tạo trang web mới: trang trắng hoặc trang theo mẫu có sẵn",
      "Ô tìm kiếm và biểu tượng để truy cập vào danh sách các ứng dụng khác của Google",
      "Danh sách các trang mà người dùng mới mở trước đó, sắp xếp theo thời gian gần nhất",
      "Bảng chọn thiết lập tài khoản Google và các thông tin cá nhân của người dùng",
    ],
    answer: 0,
    explain:
      "Theo Hình 24.1: phần ① trên cùng là ô tìm kiếm và biểu tượng ứng dụng Google; phần ② là các lựa chọn tạo trang web mới (trắng hoặc theo mẫu); phần ③ là danh sách trang mở gần đây.",
  },
  {
    id: "b24-04",
    q: "Theo Nhiệm vụ 2, phần đầu trang trên Google Sites có thể gồm những thành phần nào?",
    options: [
      "Logo, tên trang, hình nền của phần đầu trang, tiêu đề trang, bảng chọn trên thanh điều hướng",
      "Chỉ duy nhất một đoạn văn bản giới thiệu ngắn gọn, không có bất kì hình ảnh nào khác",
      "Chỉ có mã nguồn HTML được viết tay để định dạng toàn bộ giao diện của trang web",
      "Chỉ có biểu mẫu thu thập thông tin liên hệ của người truy cập trang web",
    ],
    answer: 0,
    explain:
      "SGK nêu (Hình 24.3): phần đầu trang có thể có logo, tên trang, hình nền của phần đầu trang, tiêu đề trang, và bảng chọn trên thanh điều hướng.",
  },
  {
    id: "b24-05",
    q: "Trong giao diện thiết lập phần đầu trang (Hình 24.3), dòng \"Trang web không có tiêu đề\" dùng để làm gì?",
    options: [
      "Nơi nhập/hiển thị tên tệp lưu trữ trang web, được lưu ở Google Drive của người dùng",
      "Là nơi nhập tiêu đề chính hiển thị to nhất ở giữa phần đầu trang cho người xem",
      "Là nơi nhập logo và biểu tượng favicon của trang web mà người dùng đang tạo",
      "Là nơi hiển thị danh sách các trang con đã được tạo trong cùng một website",
    ],
    answer: 0,
    explain:
      "SGK nêu: dòng Trang web không có tiêu đề là nơi thao tác nhập/hiển thị tên tệp lưu trữ trang web — các tệp này được lưu trữ ở Google Drive của người dùng.",
  },
  {
    id: "b24-06",
    q: "Trong giao diện thiết lập phần đầu trang, dòng \"Nhập tên trang web\" dùng để làm gì?",
    options: [
      "Là nơi nhập/hiển thị logo, favicon và tên trang web",
      "Là nơi nhập/hiển thị tên tệp lưu trữ được lưu trên Google Drive",
      "Là nơi nhập nội dung chi tiết của phần thân trang (body)",
      "Là nơi thiết lập địa chỉ URL cuối cùng của toàn bộ website",
    ],
    answer: 0,
    explain: "SGK nêu: dòng Nhập tên trang web là nơi nhập/hiển thị logo, favicon và tên trang web.",
  },
  {
    id: "b24-07",
    q: "Theo Hình 24.4, các tuỳ chọn \"Loại tiêu đề\" (Bìa, Biểu ngữ lớn, Biểu ngữ, Chỉ có tiêu đề) khác nhau chủ yếu ở điểm gì?",
    options: [
      "Chiều cao của phần đầu trang; trong đó Bìa có chiều cao lớn nhất, chiếm toàn bộ màn hình",
      "Màu sắc nền của phần đầu trang; mỗi tuỳ chọn ứng với một bảng màu cố định khác nhau",
      "Số lượng logo có thể hiển thị đồng thời trên thanh điều hướng của phần đầu trang",
      "Ngôn ngữ hiển thị của tiêu đề trang; mỗi tuỳ chọn ứng với một ngôn ngữ khác nhau",
    ],
    answer: 0,
    explain:
      "SGK nêu: các kích thước này chỉ khác nhau về chiều cao. Tuỳ chọn Bìa có dạng tương tự bìa sách, chiều cao lớn nhất, chiếm toàn bộ màn hình; Chỉ có tiêu đề thì không có ảnh nền.",
  },
  {
    id: "b24-08",
    q: "Theo hướng dẫn ở Bước 2 Nhiệm vụ 3, favicon nên có định dạng và kích thước như thế nào?",
    options: [
      "Định dạng png, jpg hay gif; dạng hình vuông với kích thước 16×16, 32×32 hay 48×48 pixels",
      "Định dạng bắt buộc là pdf; dạng hình chữ nhật với kích thước cố định 100×200 pixels",
      "Định dạng bắt buộc là mp4; dạng hình tròn với kích thước tối thiểu 1000×1000 pixels",
      "Không giới hạn định dạng hay kích thước, favicon có thể là bất kì tệp nào tải lên",
    ],
    answer: 0,
    explain:
      "SGK nêu: định dạng các tệp ảnh logo và favicon có thể là png, jpg hay gif. Favicon có dạng hình vuông với kích thước 16×16, 32×32 hay 48×48 pixels (logo thì có dạng hình chữ nhật).",
  },
  {
    id: "b24-09",
    q: "Để thiết lập logo và favicon, theo hướng dẫn SGK cần thực hiện dãy thao tác nào?",
    options: [
      "Nháy Nhập tên trang web, rồi Thêm biểu tượng, rồi chọn Hình ảnh thương hiệu trong Cài đặt",
      "Nháy \"Tiêu đề trang\" → \"Định dạng chữ\" → chọn màu và cỡ chữ cho tiêu đề trang web",
      "Nháy \"Loại tiêu đề\" → \"Xem trước\" → chọn thiết bị xem trước là điện thoại hoặc máy tính",
      "Nháy \"Công bố\" → \"Sao chép liên kết\" → dán liên kết vào thanh địa chỉ trình duyệt",
    ],
    answer: 0,
    explain:
      "SGK hướng dẫn: nháy chuột vào ô Nhập tên trang web rồi nháy Thêm biểu tượng (Hình 24.6); cửa sổ Cài đặt hiện ra, chọn Hình ảnh thương hiệu ở khung bên trái để thiết lập logo và favicon (Hình 24.7).",
  },
  {
    id: "b24-10",
    q: "Vì sao SGK lưu ý tên trang web (ví dụ \"Tiềm ẩn - Việt Nam\") nên đặt ngắn gọn?",
    options: [
      "Vì tên trang web được gán vào địa chỉ URL của trang",
      "Vì Google Sites giới hạn tối đa 5 kí tự cho mọi tên trang web được tạo",
      "Vì tên trang web dài sẽ khiến logo và favicon không thể hiển thị được nữa",
      "Vì tên trang dài sẽ tự động bị hệ thống Google Sites xoá bỏ sau khi công bố",
    ],
    answer: 0,
    explain: "SGK lưu ý: tên trang web nên ngắn gọn vì được gán vào địa chỉ URL của trang.",
  },
  {
    id: "b24-11",
    q: "Khi thiết lập ảnh nền cho phần đầu trang, độ sáng của ảnh mặc định được xử lí như thế nào, và muốn giữ nguyên độ sáng gốc thì làm gì?",
    options: [
      "Tự động điều chỉnh để đọc được chữ; muốn giữ nguyên thì nháy biểu tượng để huỷ chế độ tự động",
      "Độ sáng luôn được tăng lên mức tối đa mặc định, không có cách nào để chỉnh lại độ sáng gốc",
      "Độ sáng của ảnh hoàn toàn không thay đổi so với ảnh gốc, không có cơ chế tự động điều chỉnh nào",
      "Ảnh nền bắt buộc phải được chỉnh độ sáng thủ công trước khi tải lên bằng phần mềm bên ngoài",
    ],
    answer: 0,
    explain:
      "SGK nêu: khi thiết lập ảnh nền, độ sáng của ảnh được tự động điều chỉnh để vẫn đọc được phần chữ trên nền. Muốn giữ nguyên độ sáng gốc, nháy chuột vào biểu tượng ở góc dưới bên phải để huỷ bỏ chế độ tự động điều chỉnh (Hình 24.10).",
  },
  {
    id: "b24-12",
    q: "Biểu tượng \"neo\" ở góc dưới bên phải ảnh nền (Hình 24.11) dùng để làm gì?",
    options: [
      "Điều chỉnh vị trí ảnh nền để phần ấn tượng nhất hiển thị trọn vẹn trong khung",
      "Xoá hoàn toàn ảnh nền hiện tại, đưa phần đầu trang trở về trạng thái không có ảnh",
      "Xoay ảnh nền theo góc 90 độ mỗi lần nháy chuột vào biểu tượng này",
      "Đổi định dạng tệp ảnh nền từ jpg sang png ngay trên giao diện Google Sites",
    ],
    answer: 0,
    explain:
      "SGK nêu: vì ảnh gốc làm nền có thể lớn hơn khung tiêu đề, để điều chỉnh phần ấn tượng nhất của ảnh hiển thị trọn vẹn, nháy vào biểu tượng neo rồi chọn các mũi tên điều hướng để điều chỉnh vị trí ảnh.",
  },
  {
    id: "b24-13",
    q: "Ở Bước 4 (Thiết lập tiêu đề trang), nếu tiêu đề dài mà không muốn thay đổi kích thước khung văn bản, có thể ngắt xuống dòng bằng cách nào?",
    options: ["Nhấn tổ hợp phím Shift + Enter", "Nhấn tổ hợp phím Ctrl + Enter", "Nhấn tổ hợp phím Alt + Tab", "Nhấn phím Tab hai lần liên tiếp"],
    answer: 0,
    explain: "SGK nêu: nếu tiêu đề dài thì có thể thay đổi kích thước khung văn bản hoặc nhấn phím Shift + Enter để ngắt xuống dòng.",
  },
  {
    id: "b24-14",
    q: "Ở Bước 5 (Xem trước, chỉnh sửa), trước khi xuất bản, có thể xem trước trang web đang tạo trên những loại thiết bị nào?",
    options: [
      "Điện thoại, máy tính bảng và máy tính",
      "Chỉ riêng máy tính để bàn, không hỗ trợ xem trước trên thiết bị di động",
      "Chỉ riêng điện thoại di động, không hỗ trợ xem trước trên máy tính",
      "Chỉ hỗ trợ xem trước trên máy in, không hỗ trợ xem trên màn hình bất kì thiết bị nào",
    ],
    answer: 0,
    explain:
      "Theo Hình 24.13 và 24.14, nháy biểu tượng Xem trước rồi chọn xem trên điện thoại, máy tính bảng hay máy tính với các biểu tượng tương ứng.",
  },
  {
    id: "b24-15",
    q: "Ở Bước 6 (Xuất bản và truy cập trang web), sau khi nháy nút \"Công bố\" để xuất bản trang, làm thế nào để lấy địa chỉ URL của trang?",
    options: [
      "Nháy biểu tượng liên kết để sao chép URL, dán vào thanh địa chỉ trình duyệt",
      "Gửi yêu cầu qua thư điện tử cho quản trị viên của Google để được cấp địa chỉ URL",
      "Mở lại tệp trên Google Drive rồi tìm kiếm địa chỉ URL trong phần thông tin chi tiết của tệp",
      "Địa chỉ URL không thể lấy được, chỉ có thể chia sẻ trang web bằng cách gửi kèm tệp đính kèm",
    ],
    answer: 0,
    explain:
      "SGK hướng dẫn: nháy vào nút Công bố để xuất bản. Để sao chép địa chỉ URL, nháy vào biểu tượng liên kết (Hình 24.13), rồi dán địa chỉ URL vào thanh địa chỉ của một trình duyệt để nhận được kết quả.",
  },
];

export default questions;
