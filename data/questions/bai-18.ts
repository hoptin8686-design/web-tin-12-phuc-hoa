import type { Question } from "@/lib/types";

// Bài 18. Thực hành tổng hợp thiết kế trang web (SGK trang 102-105)
const questions: Question[] = [
  {
    id: "b18-01",
    q: "Mục tiêu chính của bài thực hành tổng hợp thiết kế trang web là gì?",
    options: [
      "Tạo được trang web bằng HTML và định dạng bằng CSS",
      "Chỉ học cách tạo văn bản định dạng đậm, nghiêng bằng thẻ HTML thuần tuý",
      "Học cách cài đặt phần mềm trình duyệt web trên nhiều hệ điều hành khác nhau",
      "Chỉ học cách chèn hình ảnh và video vào một trang web duy nhất, không có CSS",
    ],
    answer: 0,
    explain:
      "SGK ghi rõ mục tiêu bài học: sau bài học em sẽ tạo được trang web bằng HTML và định dạng bằng CSS — vận dụng tổng hợp kiến thức từ Chủ đề 4.",
  },
  {
    id: "b18-02",
    q: "Dự án minh hoạ trong bài thực hành có chủ đề gì?",
    options: [
      "Xây dựng website giới thiệu các câu lạc bộ ngoại khoá của trường",
      "Xây dựng website bán hàng trực tuyến cho một cửa hàng tạp hoá nhỏ",
      "Xây dựng website cá nhân để lưu trữ nhật kí học tập hằng ngày",
      "Xây dựng website tra cứu điểm thi cho toàn bộ học sinh trong trường",
    ],
    answer: 0,
    explain:
      "Bài thực hành lấy ví dụ dự án: Xây dựng website giới thiệu các câu lạc bộ ngoại khoá của trường (ví dụ CLB Thể thao, CLB Nghệ thuật).",
  },
  {
    id: "b18-03",
    q: "Với website câu lạc bộ mức đơn giản trong SGK, website được thiết kế với bao nhiêu trang thành viên?",
    options: [
      "Ba trang: trang chủ, trang câu lạc bộ thể thao, trang câu lạc bộ nghệ thuật",
      "Một trang duy nhất chứa toàn bộ thông tin của tất cả các câu lạc bộ trong trường",
      "Năm trang, mỗi trang tương ứng với một câu lạc bộ ngoại khoá riêng biệt của trường",
      "Hai trang: một trang cho học sinh, một trang riêng dành cho giáo viên quản lí",
    ],
    answer: 0,
    explain:
      "SGK nêu: em có thể thiết kế website với ba thành viên trang tương ứng với trang chủ, trang giới thiệu các câu lạc bộ thể thao và các câu lạc bộ nghệ thuật.",
  },
  {
    id: "b18-04",
    q: "Trang chủ của website câu lạc bộ trong ví dụ SGK có vai trò gì?",
    options: [
      "Chứa các thông tin chung nhất về các câu lạc bộ và liên kết tới các trang thành viên",
      "Chỉ chứa duy nhất một biểu mẫu đăng kí tham gia câu lạc bộ, không có nội dung khác",
      "Chứa toàn bộ lịch hoạt động chi tiết của tất cả câu lạc bộ trong suốt cả năm học",
      "Là trang được thiết lập ẩn, chỉ giáo viên quản lí website mới có quyền truy cập",
    ],
    answer: 0,
    explain:
      "SGK ghi rõ: trang chủ sẽ chứa các thông tin chung nhất về các câu lạc bộ và liên kết tới các trang thành viên.",
  },
  {
    id: "b18-05",
    q: "Theo hướng dẫn của SGK, các trang trong cùng một website nên tuân theo nguyên tắc trình bày như thế nào?",
    options: [
      "Tuân theo phong cách trình bày chung bằng cách sử dụng liên kết tới cùng một tệp CSS",
      "Mỗi trang phải viết một tệp CSS hoàn toàn riêng biệt, không được dùng chung với trang khác",
      "Không cần CSS, chỉ cần định dạng trực tiếp bằng thuộc tính style trong từng thẻ HTML",
      "Mỗi trang dùng một bảng màu ngẫu nhiên khác nhau để tạo sự đa dạng, mới lạ cho website",
    ],
    answer: 0,
    explain:
      "SGK nêu: các trang nên tuân theo phong cách trình bày chung bằng cách sử dụng liên kết tới cùng một tệp tin CSS — đây chính là mục tiêu chính của Nhiệm vụ 1.",
  },
  {
    id: "b18-06",
    q: "Theo bố cục website ở Hình 18.2, một trang web đầy đủ trong bài thực hành gồm những phần chính nào?",
    options: [
      "Đầu trang (Header), phần nội dung chính và cuối trang (Footer)",
      "Chỉ có phần nội dung chính, không cần đầu trang lẫn cuối trang",
      "Thanh điều hướng, khung tìm kiếm và một biểu mẫu đăng kí duy nhất",
      "Bốn phần: mở đầu, nội dung, quảng cáo và một trang liên hệ tách riêng",
    ],
    answer: 0,
    explain:
      "Hình 18.2 (Bố cục của website) thể hiện ba phần: Đầu trang (Header), Phần nội dung chính, và Cuối trang (Footer) — đúng cấu trúc chung đã học ở Bài 23 (đầu/thân/chân trang).",
  },
  {
    id: "b18-07",
    q: "Trong Hình 18.2, phần đầu trang (Header) của website câu lạc bộ gồm hai phần nhỏ nào?",
    options: [
      "Banner và Khẩu hiệu (Slogan)",
      "Thanh điều hướng và khung tìm kiếm nội dung",
      "Logo trường và số điện thoại liên hệ của giáo viên chủ nhiệm",
      "Ảnh đại diện học sinh và tên đăng nhập tài khoản quản trị",
    ],
    answer: 0,
    explain:
      "Theo Hình 18.2 và phần hướng dẫn: phần đầu trang gồm hai phần nhỏ là Banner (ảnh nền và tiêu đề trang) và Slogan (khẩu hiệu, gồm 3 ô trên hàng ngang).",
  },
  {
    id: "b18-08",
    q: "Trong đoạn CSS mẫu .banner { background: url(\"../assets/img/bg-masthead.jpg\") no-repeat center center; background-size: cover; ... }, cặp thuộc tính background-size: cover có tác dụng gì?",
    options: [
      "Phóng ảnh nền vừa đủ để phủ kín toàn bộ vùng chứa, giữ đúng tỉ lệ ảnh gốc",
      "Lặp lại ảnh nền liên tục theo cả chiều ngang và chiều dọc để lấp đầy khung",
      "Ẩn hoàn toàn ảnh nền đi, chỉ hiển thị một màu nền trơn duy nhất thay thế",
      "Thu nhỏ ảnh nền xuống còn đúng 1 điểm ảnh, đặt cố định ở góc trên bên trái",
    ],
    answer: 0,
    explain:
      "background-size: cover phóng ảnh nền vừa đủ lớn để phủ kín toàn bộ khung chứa, giữ nguyên tỉ lệ ảnh gốc (có thể bị cắt bớt phần thừa), khác với việc lặp lại (repeat) ảnh nhiều lần.",
  },
  {
    id: "b18-09",
    q: "Trong CSS mẫu của .banner có dùng từ khoá !important cho hai thuộc tính text-align và color. Vì sao cần thêm !important ở đây?",
    options: [
      "Để đảm bảo hai thuộc tính này luôn được áp dụng, không bị các mẫu CSS khác có trọng số cao hơn ghi đè",
      "Vì cú pháp CSS bắt buộc mọi thuộc tính viết trong lớp .banner phải có thêm từ khoá này",
      "Để giảm dung lượng tệp CSS, giúp trang web tải nhanh hơn khi có nhiều người truy cập",
      "Vì trình duyệt web không thể tự nhận diện được thuộc tính color nếu thiếu từ khoá !important",
    ],
    answer: 0,
    explain:
      "Theo mức ưu tiên CSS đã học ở Bài 17, !important có mức ưu tiên cao nhất, giúp đảm bảo định dạng luôn được áp dụng cho dù có mẫu CSS khác (ví dụ định dạng mặc định của phần tử được chèn ảnh nền) tranh chấp.",
  },
  {
    id: "b18-10",
    q: "Theo Hình 18.3, khối Slogan gồm 3 ô trên hàng ngang, mỗi ô có độ rộng chiếm bao nhiêu phần trăm chiều ngang trang?",
    options: ["1/3 độ rộng, xấp xỉ 33,33%", "1/2 độ rộng, đúng bằng 50%", "1/4 độ rộng, đúng bằng 25%", "Toàn bộ 100% độ rộng của trang"],
    answer: 0,
    explain:
      "SGK nêu: slogan gồm 3 ô trên hàng ngang có định dạng giống nhau, mỗi ô có độ rộng bằng 1/3 độ rộng trang — khớp với thuộc tính width: 33.33333333% của lớp .block_3.",
  },
  {
    id: "b18-11",
    q: "Vì sao khi dùng thẻ <div> để tạo 3 ô của slogan mà không thêm CSS gì khác, các ô lại tự động xếp theo chiều dọc thay vì nằm ngang cạnh nhau?",
    options: [
      "Vì thẻ div là phần tử khối (block), mặc định chiếm hết chiều ngang sẵn có nên luôn tự xuống dòng",
      "Vì trình duyệt web mặc định sắp xếp mọi thẻ HTML theo thứ tự bảng chữ cái của tên lớp CSS",
      "Vì thẻ div bắt buộc phải nằm bên trong một thẻ <table> mới hiển thị được theo hàng ngang",
      "Vì số lượng thẻ div phải là số chẵn thì trình duyệt mới cho phép xếp chúng nằm ngang nhau",
    ],
    answer: 0,
    explain:
      "SGK giải thích: khi sử dụng thẻ div, các ô sẽ được xếp theo chiều dọc — do div là phần tử block, mặc định chiếm trọn chiều ngang khung chứa nên phần tử sau tự động xuống dòng.",
  },
  {
    id: "b18-12",
    q: "Để hiển thị 3 ô của slogan theo phương ngang, SGK hướng dẫn tạo thêm một lớp Row với thuộc tính CSS nào là mấu chốt?",
    options: ["display: flex", "display: none", "position: fixed", "text-align: justify"],
    answer: 0,
    explain:
      "Lớp .row trong SGK có display: flex — thiết lập bố cục linh hoạt (flexbox) để các phần tử con (3 ô .block_3) xếp cạnh nhau theo hàng ngang thay vì xuống dòng như mặc định của div.",
  },
  {
    id: "b18-13",
    q: "Trong lớp .row { display: flex; flex-wrap: wrap; ... }, thuộc tính flex-wrap: wrap có vai trò gì?",
    options: [
      "Cho phép các phần tử con tự động xuống hàng mới khi không đủ chỗ chứa trên một hàng ngang",
      "Buộc toàn bộ phần tử con luôn nằm chung một hàng duy nhất, dù màn hình có hẹp đến đâu",
      "Xoá bỏ hoàn toàn khoảng cách giữa các phần tử con, cho chúng dính sát nhau tuyệt đối",
      "Đảo ngược thứ tự hiển thị của các phần tử con, ô cuối cùng chuyển ra vị trí đầu tiên",
    ],
    answer: 0,
    explain:
      "flex-wrap: wrap cho phép các phần tử con của khung flex (ở đây là các ô .block_3) tự xuống hàng khi không đủ chiều rộng để hiển thị hết trên một hàng, thay vì bị nén chật hay tràn ra ngoài.",
  },
  {
    id: "b18-14",
    q: "Theo Nhiệm vụ 2 của bài thực hành, để một khối HTML (ví dụ khối banner) áp dụng được định dạng đã khai báo trong tệp CSS, cần làm gì?",
    options: [
      "Dùng thẻ <div> với thuộc tính class có giá trị đúng bằng tên lớp CSS đã định nghĩa",
      "Chép nguyên văn toàn bộ nội dung tệp CSS vào giữa cặp thẻ <div> và </div> của khối đó",
      "Đặt tên tệp html trùng hệt với tên tệp CSS thì trình duyệt sẽ tự động liên kết với nhau",
      "Không cần thao tác gì thêm, mọi thẻ div trên trang sẽ tự nhận toàn bộ định dạng có trong CSS",
    ],
    answer: 0,
    explain:
      "SGK minh hoạ: <div class=\"banner\"><h2>...</h2></div> — dùng thẻ div với thuộc tính class trùng tên lớp đã định nghĩa trong tệp CSS (ví dụ .banner) để khối đó nhận đúng định dạng tương ứng.",
  },
  {
    id: "b18-15",
    q: "Bài Luyện tập của Bài 18 yêu cầu bổ sung trang dang_ki.html và đặt liên kết tới trang này ở đâu?",
    options: [
      "Ở phần cuối trang (footer) của tất cả các trang trong website",
      "Chỉ ở duy nhất phần đầu trang (header) của trang chủ, các trang khác không cần",
      "Chỉ đặt bên trong tệp CSS, không cần chèn liên kết trực tiếp vào các tệp HTML",
      "Ở giữa nội dung chính của trang thể thao, không xuất hiện ở bất kì trang nào khác",
    ],
    answer: 0,
    explain:
      "SGK yêu cầu: tạo trang dang_ki.html chứa biểu mẫu đăng kí câu lạc bộ và bổ sung liên kết tới trang đăng kí trong phần cuối trang (footer) của tất cả các trang.",
  },
];

export default questions;
