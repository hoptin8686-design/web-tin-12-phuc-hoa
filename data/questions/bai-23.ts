import type { Question } from "@/lib/types";

// Bài 23. Chuẩn bị xây dựng trang web (SGK trang 126-133)
const questions: Question[] = [
  {
    id: "b23-01",
    q: "Một trang web đầy đủ thông thường được chia thành bao nhiêu phần chính?",
    options: [
      "Ba phần chính: phần đầu trang, phần thân trang và phần chân trang",
      "Hai phần chính: phần giới thiệu ngắn và phần nội dung chi tiết",
      "Bốn phần chính: tiêu đề, thân bài, thanh công cụ và biểu mẫu",
      "Năm phần chính: phần mở đầu, phần nội dung, quảng cáo, liên hệ, kết luận",
    ],
    answer: 0,
    explain:
      "Dễ nhận thấy mỗi trang web đầy đủ nhất đều có cấu trúc gồm ba phần chính: Phần đầu trang (header), Phần thân trang (body) và Phần chân trang (footer).",
  },
  {
    id: "b23-02",
    q: "Phần đầu trang (header) của một trang web thường có vai trò giống với thành phần nào của một cuốn sách?",
    options: [
      "Giống như trang bìa thu gọn của một cuốn sách hay phần trình bày đầu mỗi chương",
      "Giống như phần mục lục liệt kê toàn bộ các trang con ở trang cuối cùng của sách",
      "Giống như phần phụ lục giải thích các thuật ngữ khó hiểu ở cuối mỗi cuốn sách",
      "Giống như phần thân chứa nội dung chi tiết nhất của các chương trong cuốn sách",
    ],
    answer: 0,
    explain:
      "Phần đầu trang có vai trò như trang bìa thu gọn của một cuốn sách hay là phần trình bày đầu mỗi chương sách, chứa những thông tin nổi bật nhất.",
  },
  {
    id: "b23-03",
    q: "Thành phần nào sau đây thường xuất hiện ở phần đầu trang (header) của một website?",
    options: [
      "Logo, tên trang, thanh điều hướng và biểu tượng của chức năng tìm kiếm",
      "Văn bản chính tả chi tiết và các đoạn video minh hoạ dài hàng giờ đồng hồ",
      "Các điều khoản bảo mật thông tin, bản quyền và đường link liên kết mạng xã hội",
      "Biểu mẫu để thu thập toàn bộ thông tin cá nhân của người dùng truy cập trang web",
    ],
    answer: 0,
    explain:
      "Phần đầu trang thường chứa hình nền, logo, tên trang, thanh điều hướng (bảng chọn), chức năng tìm kiếm, tiêu đề và tóm tắt thông tin (Hình 23.1).",
  },
  {
    id: "b23-04",
    q: "Favicon trong ngữ cảnh thiết kế trang web được hiểu là gì?",
    options: [
      "Là một logo nhỏ, biểu tượng đại diện cho tất cả các trang web trong một website hiển thị trên tab của trình duyệt",
      "Là một thanh điều hướng dọc chứa danh sách các bài viết phổ biến nhất nhằm mục đích tăng tương tác của người dùng",
      "Là một loại mã độc chuyên đánh cắp dữ liệu cá nhân của người dùng khi họ vô tình truy cập vào các trang web lạ",
      "Là tên miền quốc tế mà người dùng gõ vào thanh địa chỉ để truy cập vào hệ thống máy chủ của website doanh nghiệp",
    ],
    answer: 0,
    explain:
      "Favicon (favorite icon) là biểu tượng đại diện cho tất cả các trang web trong một website và hiển thị ở tab của trình duyệt web.",
  },
  {
    id: "b23-05",
    q: "Phần thân trang (body) của trang web thường được tổ chức theo cấu trúc như thế nào?",
    options: [
      "Được tổ chức thành các khối hình chữ nhật, mỗi khối trình bày một nội dung với tiêu đề riêng",
      "Được thiết kế dưới dạng một danh sách sổ xuống dài vô tận mà không có bất kì ngắt trang nào",
      "Được phân chia thành các vòng tròn đồng tâm, trong đó vòng tròn trung tâm là nội dung chính",
      "Được sắp xếp ngẫu nhiên tuỳ thuộc vào độ phân giải màn hình của người sử dụng trang web",
    ],
    answer: 0,
    explain:
      "Thân trang là phần chứa nội dung, thường được bố cục thành các khối hình chữ nhật, mỗi khối trình bày một nội dung với tiêu đề riêng (Hình 23.2).",
  },
  {
    id: "b23-06",
    q: "Thông tin nào sau đây thường KHÔNG được đặt ở phần chân trang (footer) của trang web?",
    options: [
      "Logo chính của website, thanh điều hướng chức năng và thanh công cụ tìm kiếm",
      "Thông tin về thương hiệu, bản quyền và chính sách bảo mật của tổ chức",
      "Thông tin liên hệ như địa chỉ, số điện thoại, email của cơ quan chủ quản",
      "Các liên kết trỏ tới các trang mạng xã hội liên quan đến tổ chức đó",
    ],
    answer: 0,
    explain:
      "Logo chính, thanh điều hướng và thanh tìm kiếm thường nằm ở đầu trang. Chân trang (footer) thường chứa thông tin bản quyền, liên hệ, liên kết mạng xã hội.",
  },
  {
    id: "b23-07",
    q: "Bước đầu tiên trong quy trình chuẩn bị xây dựng trang web là gì?",
    options: [
      "Định hình ý tưởng: xác định mục đích và đối tượng phục vụ của trang web",
      "Xây dựng thiết kế: thiết kế kiến trúc nội dung và chọn bảng màu, phông chữ",
      "Chuẩn bị tư liệu: viết các bài luận chi tiết và chụp toàn bộ hình ảnh cần thiết",
      "Viết mã nguồn HTML và CSS ngay lập tức để tiết kiệm thời gian phát triển",
    ],
    answer: 0,
    explain:
      "Theo SGK, các bước chuẩn bị bao gồm: 1. Định hình ý tưởng (xác định mục đích, đối tượng). 2. Thiết kế. 3. Lựa chọn phần mềm và chuẩn bị tư liệu.",
  },
  {
    id: "b23-08",
    q: "Trong quá trình xây dựng thiết kế mĩ thuật cho trang web, việc lựa chọn phông chữ cần lưu ý điều gì?",
    options: [
      "Nên chọn phông chữ Sans Serif (không có chân) cho các thanh điều hướng và nội dung bài viết để dễ đọc trên màn hình",
      "Chỉ được sử dụng duy nhất một cỡ chữ và một kiểu chữ xuyên suốt toàn bộ trang web để đảm bảo tính đồng nhất tuyệt đối",
      "Bắt buộc phải sử dụng các phông chữ có chân (Serif) như Times New Roman cho tất cả các khối nội dung để tạo vẻ cổ điển",
      "Nên chọn các phông chữ thư pháp có đường nét phức tạp và bay bướm để làm nổi bật sự độc đáo của trang web",
    ],
    answer: 0,
    explain:
      "Phông Sans Serif (không chân) dễ đọc trên màn hình, tiết kiệm diện tích. Phông Serif (có chân) như Times New Roman ít được dùng để trình bày nội dung do khó nhận diện trên màn hình. Do đó nên dùng Sans Serif.",
  },
  {
    id: "b23-09",
    q: "Để thiết kế bảng màu hài hoà cho trang web, các nhà thiết kế thường áp dụng quy tắc nào?",
    options: [
      "Chọn một bảng màu thường có khoảng 5 màu pha trộn giữa các gam ấm, lạnh và trung tính, tránh màu quá gắt",
      "Sử dụng càng nhiều màu sắc rực rỡ càng tốt để thu hút sự chú ý của người truy cập ngay từ cái nhìn đầu tiên",
      "Chỉ sử dụng hai màu trắng và đen để tăng cường sự đơn giản và tiết kiệm bộ nhớ lưu trữ của máy chủ",
      "Để cho hệ điều hành của người dùng tự động quyết định màu sắc ngẫu nhiên mỗi khi tải lại trang web",
    ],
    answer: 0,
    explain:
      "Bảng màu: Một trang web với màu quá gắt hay không hài hoà sẽ gây phản cảm. Mỗi bảng màu thường có 5 màu pha trộn giữa ấm, lạnh và trung tính.",
  },
  {
    id: "b23-10",
    q: "Theo khuyến nghị, cỡ chữ trong thiết kế mĩ thuật của trang web thường được quy định như thế nào?",
    options: [
      "Có thể quy định tối thiểu bốn cỡ chữ: cỡ nhỏ nhất (chú thích), cỡ thường (nội dung), cỡ lớn (tiêu đề) và rất lớn (tiêu đề nổi bật)",
      "Chỉ được phép sử dụng tối đa hai cỡ chữ: một cỡ cho tiêu đề lớn và một cỡ cho nội dung để đảm bảo tính tối giản tuyệt đối cho website",
      "Phải sử dụng ít nhất mười cỡ chữ khác nhau trong cùng một bài viết để tạo sự phong phú về mặt thị giác và chống sự nhàm chán khi đọc",
      "Tất cả các thành phần từ tiêu đề chính, tiêu đề phụ, nội dung văn bản đến các dòng chú thích đều phải dùng chung một cỡ chữ duy nhất",
    ],
    answer: 0,
    explain:
      "Theo SGK: Cỡ chữ có thể quy định tối thiểu bốn cỡ: cỡ nhỏ nhất (chú thích), cỡ thường (nội dung bài viết), cỡ lớn (tiêu đề), cỡ rất lớn (tiêu đề nổi bật).",
  },
  {
    id: "b23-11",
    q: "Đặc điểm nổi bật của phần mềm Google Sites trong việc tạo trang web là gì?",
    options: [
      "Đây là nền tảng miễn phí, dễ sử dụng, kết nối trực quan với hệ sinh thái Google (Docs, Sheets, Slides, Drive)",
      "Đây là phần mềm trả phí hàng tháng đắt đỏ chỉ dành riêng cho các nhà thiết kế web chuyên nghiệp hàng đầu",
      "Đây là hệ thống chỉ cho phép tải lên mã nguồn HTML viết tay mà không cung cấp công cụ chỉnh sửa trực quan",
      "Đây là phần mềm phải tải về và cài đặt trực tiếp vào ổ cứng máy tính cá nhân để chạy cục bộ (offline)",
    ],
    answer: 0,
    explain:
      "Google Sites cung cấp miễn phí, dễ sử dụng, có điểm mạnh là kết nối một cách dễ dàng với phần mềm khác của Google (Docs, Sheets, Slides, Drive...).",
  },
  {
    id: "b23-12",
    q: "Để tạo một trang web bằng công cụ Google Sites, yêu cầu tiên quyết đối với người dùng là gì?",
    options: [
      "Người dùng cần phải đăng kí và sở hữu một tài khoản Google Mail (Gmail) hợp lệ",
      "Người dùng bắt buộc phải có chứng chỉ lập trình viên quốc tế chuyên nghiệp",
      "Người dùng phải có máy chủ vật lí riêng được đặt tại trung tâm dữ liệu",
      "Người dùng phải trả phí bản quyền mua phần mềm thiết kế trị giá hàng ngàn đô la",
    ],
    answer: 0,
    explain:
      "SGK nêu rõ: Yêu cầu cần có chỉ là người dùng đăng kí để có tài khoản Google Mail.",
  },
  {
    id: "b23-13",
    q: "Việc chuẩn bị tư liệu (bài viết, hình ảnh, âm thanh) cho trang web thường diễn ra trong giai đoạn nào?",
    options: [
      "Kéo dài liên tục trong suốt thời gian thực hiện dự án xây dựng trang web",
      "Chỉ diễn ra trong ngày đầu tiên trước khi thiết kế giao diện đồ hoạ",
      "Chỉ được phép thực hiện sau khi trang web đã được xuất bản lên Internet",
      "Là việc của trình duyệt web tự động thu thập từ các trang mạng xã hội",
    ],
    answer: 0,
    explain:
      "Theo SGK: Việc chuẩn bị tư liệu cho trang web là việc kéo dài suốt thời gian thực hiện dự án, bắt đầu từ thiết kế favicon, logo, ảnh nền... đến các bài viết cho từng nội dung.",
  },
  {
    id: "b23-14",
    q: "Thành phần nào sau đây được thiết kế nhằm mục đích thông báo những tin tức quan trọng hoặc thông báo bảo trì, thường xuất hiện phía trên cùng hoặc dưới thanh điều hướng?",
    options: [
      "Phần thông báo (Announcement banner)",
      "Phần bảng biểu dữ liệu (Data table)",
      "Phần bản quyền (Copyright section)",
      "Biểu tượng mạng xã hội (Social icons)",
    ],
    answer: 0,
    explain:
      "SGK có đề cập: Tuỳ theo thiết kế mà đôi khi người ta dành ra một vài dòng trước phần đầu trang để đưa ra thông báo quan trọng (ví dụ trang đang bảo trì), gọi là phần thông báo.",
  },
  {
    id: "b23-15",
    q: "Trong quá trình định hình ý tưởng, tại sao việc 'xác định rõ đối tượng người dùng' lại có vai trò quan trọng?",
    options: [
      "Giúp định hướng lựa chọn nội dung, màu sắc, phong cách thiết kế sao cho phù hợp với thị hiếu và đặc điểm văn hoá của họ",
      "Giúp nhà phát triển viết mã nguồn nhanh hơn mà không cần phải chạy thử nghiệm trang web trên các thiết bị thực tế",
      "Giúp tự động chặn đứng những người dùng không mong muốn truy cập vào trang web thông qua địa chỉ IP của họ",
      "Giúp loại bỏ hoàn toàn các yêu cầu về bảo mật hệ thống do đã biết trước tất cả những người sẽ truy cập trang web",
    ],
    answer: 0,
    explain:
      "Xác định đối tượng người đọc giúp trả lời câu hỏi họ mong muốn biết thông tin gì, đặc điểm văn hoá thị hiếu là gì. Từ đó thiết kế được nội dung và hình thức cho phù hợp nhất.",
  },
];

export default questions;
