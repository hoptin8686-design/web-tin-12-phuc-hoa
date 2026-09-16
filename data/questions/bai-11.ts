import type { Question } from "@/lib/types";

// Bài 11. Chèn tệp tin đa phương tiện và khung nội tuyến vào trang web (SGK trang 62-66)
// 1. Chèn ảnh: <img src="..." alt="..." width="..." height="..."> — thẻ đơn.
//    - src: đường dẫn tệp ảnh (bắt buộc). alt: văn bản thay thế (nên dùng).
//    - Dùng cả width + height: trình duyệt giữ đúng không gian khi ảnh đang tải.
//    - Dùng một trong hai: chiều còn lại tính tự động theo tỉ lệ ảnh gốc.
//    - Định dạng hỗ trợ: PNG, JPEG, GIF, WebP (không dùng TIFF, EPS).
// 2. Chèn video: <video> ... </video> — thẻ đôi.
//    - controls, autoplay (boolean), poster, src, width, height.
//    - Định dạng: mp4 (tốt nhất), webm. Dùng <source> cho nhiều định dạng.
// 3. Chèn âm thanh: <audio> — không có width, height, poster.
//    - Định dạng: mp3, wav, ogg.
// 4. Khung nội tuyến: <iframe src="..." width="..." height=""></iframe>.
//    - Dùng thuộc tính target của <a> để mở nội dung vào trong iframe.
const questions: Question[] = [
  {
    id: "b11-01",
    q: "Để chèn ảnh vào trang web, ta dùng thẻ nào và thuộc tính nào là bắt buộc?",
    options: [
      "Thẻ <img> — thẻ đơn, thuộc tính src là bắt buộc để chỉ đường dẫn tới tệp ảnh",
      "Thẻ <image> — thẻ đôi, thuộc tính alt là bắt buộc để chỉ văn bản thay thế",
      "Thẻ <picture> — thẻ đơn, thuộc tính href là bắt buộc để chỉ đường dẫn ảnh",
      "Thẻ <photo> — thẻ đôi, thuộc tính src là bắt buộc để chỉ đường dẫn tệp ảnh",
    ],
    answer: 0,
    explain:
      "Cách chèn ảnh vào trang web là sử dụng thẻ <img>. Đây là thẻ đơn (không có thẻ kết thúc). Trong các thuộc tính của thẻ <img>, thuộc tính src là bắt buộc, để chỉ đường dẫn tới tệp ảnh. Thuộc tính alt nên được sử dụng kèm để cung cấp văn bản thay thế khi hiển thị ảnh bị lỗi.",
  },
  {
    id: "b11-02",
    q: "Thuộc tính alt trong thẻ <img> có tác dụng gì?",
    options: [
      "Cung cấp văn bản thay thế hiển thị khi ảnh bị lỗi, giúp người đọc hình dung nội dung ảnh",
      "Xác định độ sáng và màu sắc của ảnh khi hiển thị trên các trình duyệt khác nhau",
      "Thiết lập căn chỉnh (trái, phải, giữa) của ảnh so với văn bản xung quanh",
      "Chỉ định loại định dạng tệp ảnh như PNG, JPEG, GIF để trình duyệt xử lý đúng",
    ],
    answer: 0,
    explain:
      "Thuộc tính alt nên được sử dụng kèm thẻ <img> để cung cấp văn bản thay thế khi việc hiển thị ảnh bị lỗi. Văn bản thay thế cần có tác dụng giúp người đọc hình dung ra nội dung bức ảnh.",
  },
  {
    id: "b11-03",
    q: "Những định dạng tệp ảnh nào phổ biến và được trình duyệt web hỗ trợ theo SGK?",
    options: [
      "PNG, JPEG, GIF và một số định dạng mới phổ biến cho web như JPEG-XR hay WebP",
      "TIFF, EPS, BMP và SVG — đây là các định dạng chuẩn của đồ hoạ vector",
      "PSD, AI, INDD — đây là các định dạng của phần mềm thiết kế chuyên nghiệp",
      "RAW, CR2, NEF — đây là các định dạng ảnh gốc từ máy ảnh kỹ thuật số",
    ],
    answer: 0,
    explain:
      "Để có thể hiển thị trên web, các tệp ảnh cần được định dạng là một trong những loại được trình duyệt web hỗ trợ. Các định dạng phổ biến như PNG, JPEG hoặc GIF và một số định dạng mới phổ biến cho web như JPEG-XR hay WebP. Các ảnh có định dạng khác như TIFF, EPS,... cần được chuyển đổi.",
  },
  {
    id: "b11-04",
    q: "Khi chỉ thiết lập một trong hai thuộc tính width hoặc height cho thẻ <img>, chiều còn lại sẽ ra sao?",
    options: [
      "Chiều còn lại được tính toán tự động để hiển thị theo đúng tỉ lệ của ảnh gốc",
      "Chiều còn lại mặc định bằng 0 nên ảnh sẽ bị ép mỏng hoặc dẹt đi",
      "Chiều còn lại mặc định là 100px bất kể kích thước gốc của ảnh là bao nhiêu",
      "Chiều còn lại sẽ bằng đúng chiều đã thiết lập, tạo ra hình vuông trên màn hình",
    ],
    answer: 0,
    explain:
      "Nếu chỉ sử dụng một trong hai thuộc tính (width hoặc height), chiều còn lại sẽ được tính toán để hiển thị theo tỉ lệ của ảnh gốc. Ví dụ: ảnh gốc 262×257px, nếu đặt width=\"131\" thì height sẽ tự tính ra xấp xỉ 128px.",
  },
  {
    id: "b11-05",
    q: "Lợi ích của việc thiết lập cả hai thuộc tính width và height cho thẻ <img> là gì?",
    options: [
      "Trình duyệt giữ đúng không gian trong bố cục khi hình ảnh đang tải, giúp trang hiển thị nhanh hơn",
      "Ảnh sẽ tự động phóng to hay thu nhỏ để lấp đầy toàn bộ diện tích màn hình của thiết bị đang dùng",
      "Trình duyệt sẽ từ chối tải ảnh về nếu kích thước ảnh gốc lớn hơn kích thước đã thiết lập trước",
      "Chất lượng và độ phân giải của ảnh sẽ được cải thiện tự động để phù hợp với kích thước mới đặt ra",
    ],
    answer: 0,
    explain:
      "Khi sử dụng cả width và height, trình duyệt sẽ giữ đúng không gian trong bố cục khi hình ảnh đang tải giúp hiển thị trang nhanh hơn. Nếu chỉ dùng một trong hai, chiều còn lại được tính tự động theo tỉ lệ ảnh gốc.",
  },
  {
    id: "b11-06",
    q: "Để chèn video vào trang web HTML5, ta dùng thẻ nào?",
    options: [
      "Thẻ <video> với thuộc tính src chỉ đường dẫn, width và height chỉ kích thước",
      "Thẻ <img> với thuộc tính src chỉ đường dẫn — vì video cũng là tệp đa phương tiện",
      "Thẻ <movie> với thuộc tính path chỉ đường dẫn tới tệp video cần nhúng vào trang",
      "Thẻ <embed> là thẻ đơn duy nhất dùng được cho tất cả loại tệp đa phương tiện",
    ],
    answer: 0,
    explain:
      "Để chèn tệp video hay âm thanh vào trang web, ta sử dụng thẻ <video> hoặc <audio>. Tương tự như thẻ <img>, thẻ <video> cũng có các thuộc tính cơ bản như src, width, height. Hai định dạng video phổ biến nhất là mp4 và webm.",
  },
  {
    id: "b11-07",
    q: "Thuộc tính controls trong thẻ <video> có tác dụng gì?",
    options: [
      "Hiển thị các thành phần điều khiển như nút phát/tạm dừng, điều khiển âm lượng,...",
      "Tự động chạy video ngay khi trang web được mở trên trình duyệt của người dùng",
      "Hiển thị một hình ảnh đại diện (thumbnail) khi video chưa được phát lên",
      "Ẩn thanh điều khiển video để trang web trông gọn gàng và chuyên nghiệp hơn",
    ],
    answer: 0,
    explain:
      "Thuộc tính controls là thuộc tính boolean (không cần giá trị), dùng để trình duyệt hiển thị các thành phần điều khiển như nút phát/tạm dừng, điều khiển âm lượng,... Thuộc tính này nên được sử dụng để có thể điều khiển trong quá trình phát tệp tin đa phương tiện.",
  },
  {
    id: "b11-08",
    q: "Thuộc tính autoplay trong thẻ <video> có đặc điểm gì theo SGK?",
    options: [
      "Là thuộc tính boolean, cho phép trình duyệt chạy video ngay khi hiển thị, nhưng một số trình duyệt sẽ chặn",
      "Là thuộc tính bắt buộc phải có giá trị là \"true\" hoặc \"false\" để kiểm soát chế độ tự động phát video",
      "Đảm bảo video phát tự động ngay lập tức trên mọi trình duyệt mà không cần thêm thuộc tính nào khác",
      "Chỉ hoạt động khi được kết hợp cùng với thuộc tính controls để thanh điều khiển hiện ra kèm theo",
    ],
    answer: 0,
    explain:
      "autoplay là thuộc tính boolean, không cần có giá trị, cho phép trình duyệt chạy video ngay khi hiển thị. Tuy nhiên, một số trình duyệt như Google Chrome thường không cho video chạy ngay khi hiển thị hoặc có thể chạy ngay khi hiển thị nếu có thuộc tính muted (không phát tiếng).",
  },
  {
    id: "b11-09",
    q: "Thuộc tính poster trong thẻ <video> dùng để làm gì?",
    options: [
      "Cung cấp đường dẫn tới tệp ảnh dùng để hiển thị khi chưa chạy video",
      "Hiển thị phụ đề văn bản bên dưới màn hình video trong khi video đang phát",
      "Thiết lập hình nền của toàn bộ trang web khi trang web có chứa video",
      "Chỉ định tiêu đề của video xuất hiện phía trên vùng phát video trên trang",
    ],
    answer: 0,
    explain:
      "Thuộc tính poster cung cấp đường dẫn đến tệp ảnh, dùng để hiển thị khi chưa chạy video — tương tự ảnh bìa hay thumbnail của video. Lưu ý: thẻ <audio> không có thuộc tính poster.",
  },
  {
    id: "b11-10",
    q: "Điểm khác biệt giữa thẻ <audio> và thẻ <video> là gì theo SGK Tin học 12?",
    options: [
      "Thẻ <audio> không có các thuộc tính width, height và poster như thẻ <video>",
      "Thẻ <audio> là thẻ đơn còn thẻ <video> là thẻ đôi có thẻ bắt đầu và kết thúc",
      "Thẻ <audio> chỉ hỗ trợ định dạng mp3, còn thẻ <video> hỗ trợ mọi định dạng",
      "Thẻ <audio> không có thuộc tính controls, còn thẻ <video> bắt buộc phải có",
    ],
    answer: 0,
    explain:
      "Thẻ <audio> không có thuộc tính width, height và poster. Đây là điểm khác biệt chính so với thẻ <video>. Cả hai thẻ đều là thẻ đôi và đều có thuộc tính controls, autoplay, src.",
  },
  {
    id: "b11-11",
    q: "Ba định dạng tệp âm thanh phổ biến được hỗ trợ bởi hầu hết trình duyệt là gì?",
    options: [
      "mp3, wav và ogg",
      "mp4, avi và mkv",
      "flac, aiff và m4a",
      "wma, aac và mp2",
    ],
    answer: 0,
    explain:
      "Ba định dạng tệp âm thanh phổ biến được hỗ trợ bởi hầu hết trình duyệt hiện tại là mp3, wav và ogg. Hai định dạng video phổ biến nhất là mp4 và webm.",
  },
  {
    id: "b11-12",
    q: "Thẻ <source> trong cặp thẻ <video> hoặc <audio> có tác dụng gì?",
    options: [
      "Chỉ định các tệp đa phương tiện với định dạng khác nhau để trình duyệt tự chọn định dạng hỗ trợ",
      "Xác định nguồn gốc và thông tin bản quyền của tệp âm thanh hay video đính kèm trong trang web",
      "Chèn thêm phụ đề từ tệp văn bản ngoài vào luồng phát của video hoặc âm thanh đang chạy trên trang",
      "Kiểm soát tốc độ tải xuống của tệp đa phương tiện từ máy chủ về máy tính của người dùng",
    ],
    answer: 0,
    explain:
      "Trong trường hợp có nhiều video hoặc nhiều tệp âm thanh tương ứng với các định dạng khác nhau, ta có thể sử dụng thẻ <source> trong cặp thẻ <video> hay <audio> để chỉ định các loại định dạng khác nhau. Trình duyệt sẽ tự động tìm và hiển thị tệp tin với định dạng mà nó hỗ trợ.",
  },
  {
    id: "b11-13",
    q: "Khung nội tuyến (inline frame) trong HTML là gì và được tạo bằng thẻ nào?",
    options: [
      "Một khung nhìn chứa tài nguyên web khác trong trang hiện tại, tạo bằng thẻ <iframe>",
      "Một khung chứa hình ảnh phủ toàn màn hình nằm phía trên nội dung trang web",
      "Một bảng đặc biệt có viền được đặt nổi trên văn bản chính của trang web",
      "Một cửa sổ pop-up xuất hiện khi người dùng di chuột qua một liên kết trên trang",
    ],
    answer: 0,
    explain:
      "Khung nội tuyến là một khung nhìn chứa tài nguyên web khác trong trang web hiện tại. Để tạo khung nội tuyến, ta sử dụng thẻ <iframe> (viết tắt của inline frame). Các thuộc tính thường dùng: src (đường dẫn nội dung), width và height (kích thước khung).",
  },
  {
    id: "b11-14",
    q: "Thuộc tính target trong thẻ <a> kết hợp với <iframe> có tác dụng gì?",
    options: [
      "Chỉ định nơi mở tài liệu liên kết — đặt target bằng id của iframe để mở nội dung vào trong khung đó",
      "Thiết lập kích thước hiển thị của đường liên kết trong trang web cho phù hợp với màn hình thiết bị",
      "Xác định màu sắc và kiểu chữ của văn bản đường liên kết được hiển thị bên trong khung nội tuyến",
      "Kiểm soát tốc độ chuyển trang web khi người dùng nhấn vào đường liên kết trên trang",
    ],
    answer: 0,
    explain:
      "Thuộc tính target của thẻ <a> dùng để chỉ định nơi mở tài liệu được liên kết. Khi kết hợp với <iframe>, ta đặt giá trị target bằng id của iframe — khi đó nhấn vào liên kết sẽ mở nội dung vào trong khung nội tuyến đó thay vì chuyển toàn bộ trang.",
  },
  {
    id: "b11-15",
    q: "Ảnh có kích thước gốc 262×257 pixel. Câu lệnh <img src=\"heart.png\" alt=\"Trái tim\" width=\"131\"> sẽ hiển thị ảnh với kích thước bao nhiêu?",
    options: [
      "Khoảng 131×128 pixel — chiều cao tự tính theo tỉ lệ ảnh gốc khi chỉ đặt width",
      "131×257 pixel — chiều cao giữ nguyên kích thước gốc khi không được thiết lập",
      "131×131 pixel — trình duyệt tạo hình vuông khi chỉ có một chiều được thiết lập",
      "262×257 pixel — kích thước gốc không thay đổi vì height chưa được thiết lập",
    ],
    answer: 0,
    explain:
      "Khi chỉ dùng một trong hai thuộc tính (width hoặc height), chiều còn lại được tính tự động để hiển thị theo tỉ lệ ảnh gốc. Ảnh gốc 262×257px, tỉ lệ ≈ 1.02. Đặt width=\"131\" thì height ≈ 131 / (262/257) ≈ 128px. Kết quả xấp xỉ 131×128px.",
  },
  {
    id: "b11-16",
    q: "Tại sao SGK khuyến nghị nên chèn ảnh vào trang web bằng đường dẫn tương đối?",
    options: [
      "Để tránh lỗi khi ảnh trên mạng bị thay đổi vị trí hoặc địa chỉ URL bị thay đổi",
      "Vì đường dẫn tuyệt đối quá dài và làm chậm tốc độ tải trang web của người dùng",
      "Vì trình duyệt không thể xử lý đường dẫn tuyệt đối trong thuộc tính src của <img>",
      "Vì đường dẫn tương đối an toàn hơn và ngăn người khác sao chép ảnh của mình",
    ],
    answer: 0,
    explain:
      "SGK lưu ý: khi chèn ảnh, nên chèn bằng đường dẫn tương đối để tránh trường hợp xảy ra lỗi khi ảnh trên mạng bị thay đổi (địa chỉ URL thay đổi hoặc ảnh bị xóa). Khi dùng đường dẫn tương đối, ảnh nằm cùng cấu trúc thư mục với trang web và luôn được tìm thấy.",
  },
];

export default questions;
