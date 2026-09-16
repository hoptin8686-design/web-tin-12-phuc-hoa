import type { Question } from "@/lib/types";

// Bài 7. HTML và cấu trúc trang web (SGK trang 39-45)
// 1. Trang web và HTML: thẻ đánh dấu HTML (tag), phần tử HTML (element).
// 2. Cấu trúc cơ bản của một tệp HTML: <!DOCTYPE html>, <html>, <head>, <body>,
//    <meta>, <title>, các thẻ tiêu đề <h1>-<h6>, <p>; cây HTML.
// 3. Phần mềm soạn thảo HTML: Notepad, Notepad++, Sublime Text, trang trực tuyến.
const questions: Question[] = [
  {
    id: "b7-01",
    q: "HTML là viết tắt của cụm từ nào?",
    options: [
      "HyperText Markup Language — ngôn ngữ đánh dấu siêu văn bản",
      "HyperText Machine Language — ngôn ngữ máy siêu văn bản",
      "HighText Markup Language — ngôn ngữ đánh dấu văn bản cao",
      "HyperText Making Language — ngôn ngữ tạo lập siêu văn bản",
    ],
    answer: 0,
    explain:
      "HTML là viết tắt của HyperText Markup Language, dịch là ngôn ngữ đánh dấu siêu văn bản. Chữ \"Markup\" (đánh dấu) chỉ đúng cách hoạt động của nó: dùng các kí tự đánh dấu đặt trong cặp dấu < và > để mô tả cấu trúc trang web.",
  },
  {
    id: "b7-02",
    q: "HTML được hiểu là gì?",
    options: [
      "Bộ quy tắc dùng để thiết lập cấu trúc và hiển thị nội dung trang web",
      "Phần mềm dùng để hiển thị nội dung của trang web lên màn hình",
      "Ngôn ngữ lập trình dùng để viết các chương trình chạy trên máy chủ",
      "Giao thức quy định cách truyền các trang web trên mạng Internet",
    ],
    answer: 0,
    explain:
      "HTML là một bộ quy tắc dùng để thiết lập cấu trúc và hiển thị nội dung trang web. Phần mềm hiển thị trang web là trình duyệt, còn giao thức truyền trang web là HTTP — đó là những thứ khác.",
  },
  {
    id: "b7-03",
    q: "Tệp văn bản tạo nên trang web thường có phần mở rộng là gì?",
    options: [
      "Phần mở rộng .html hoặc .htm, gọi là trang html",
      "Phần mở rộng .txt hoặc .doc, gọi là trang văn bản",
      "Phần mở rộng .css hoặc .style, gọi là trang định dạng",
      "Phần mở rộng .web hoặc .site, gọi là trang trực tuyến",
    ],
    answer: 0,
    explain:
      "Trang web được thiết lập từ các tệp văn bản thường có phần mở rộng là .html hoặc .htm, gọi là trang html. Tệp văn bản này chính là trang nguồn (mã nguồn) của trang web tương ứng.",
  },
  {
    id: "b7-04",
    q: "Thẻ đánh dấu HTML (tag) là gì?",
    options: [
      "Các kí tự đánh dấu đặc biệt nằm trong hai dấu < và >",
      "Các đoạn văn bản được người dùng gõ vào trang web",
      "Các tệp ảnh và video được chèn vào trong trang web",
      "Các dòng chú thích giúp người đọc hiểu mã nguồn hơn",
    ],
    answer: 0,
    explain:
      "Trên trang html, nội dung gồm phần văn bản (text) và các kí tự đánh dấu đặc biệt nằm trong hai dấu \"<\" và \">\" — đó là các thẻ đánh dấu HTML. Mỗi loại thẻ có một tên riêng và ý nghĩa nhất định trong định dạng nội dung.",
  },
  {
    id: "b7-05",
    q: "Tên thẻ HTML có phân biệt chữ hoa và chữ thường không?",
    options: [
      "Không phân biệt, nhưng mặc định tên thẻ được viết chữ thường",
      "Có phân biệt, bắt buộc phải viết toàn bộ bằng chữ thường",
      "Có phân biệt, bắt buộc phải viết toàn bộ bằng chữ in hoa",
      "Không phân biệt, nhưng mặc định tên thẻ được viết chữ hoa",
    ],
    answer: 0,
    explain:
      "Tên thẻ HTML không phân biệt chữ hoa, chữ thường, nhưng theo mặc định thì tên thẻ được viết chữ thường. Vì vậy <P> và <p> có tác dụng như nhau, song nên viết <p> cho đúng quy ước.",
  },
  {
    id: "b7-06",
    q: "Thẻ nào sau đây là thẻ đơn, tức là chỉ có thẻ bắt đầu?",
    options: [
      "Thẻ <hr/> tạo dòng kẻ ngang trên trang web",
      "Thẻ <p> dùng để mô tả một đoạn văn bản",
      "Thẻ <h1> dùng để mô tả tiêu đề cấp một",
      "Thẻ <em> dùng để nhấn mạnh một cụm từ",
    ],
    answer: 0,
    explain:
      "Phần lớn các thẻ là thẻ đôi, gồm thẻ bắt đầu và thẻ kết thúc (thẻ kết thúc có thêm dấu \"/\", ví dụ </p>). Một số ít là thẻ đơn, chỉ có thẻ bắt đầu, dạng <tên thẻ> hoặc <tên thẻ/> — ví dụ <hr/> (dòng kẻ ngang) và <br/> (ngắt xuống dòng).",
  },
  {
    id: "b7-07",
    q: "Một phần tử HTML thông thường được định nghĩa bởi những thành phần nào?",
    options: [
      "Thẻ bắt đầu, thẻ kết thúc và phần nội dung nằm giữa cặp thẻ đó",
      "Chỉ riêng phần nội dung nằm giữa thẻ bắt đầu và thẻ kết thúc",
      "Chỉ riêng cặp thẻ bắt đầu và thẻ kết thúc, không kể nội dung",
      "Toàn bộ tệp văn bản nguồn tạo nên một trang web hoàn chỉnh",
    ],
    answer: 0,
    explain:
      "Phần tử HTML (element) gồm thẻ bắt đầu, thẻ kết thúc và phần nội dung nằm giữa cặp thẻ này — tức là toàn bộ phần thẻ và nội dung của thẻ. Lưu ý các thẻ đơn cùng với nội dung của nó cũng được gọi là phần tử HTML.",
  },
  {
    id: "b7-08",
    q: "Dòng <!DOCTYPE html> ở đầu tệp có vai trò gì?",
    options: [
      "Thông báo cho trình duyệt biết đây là tệp có định dạng html",
      "Khai báo tên của trang web hiện thời cho trình duyệt biết",
      "Khai báo cách mã hoá văn bản trên trang web theo mã UTF-8",
      "Đánh dấu bắt đầu phần thân chứa nội dung của trang web đó",
    ],
    answer: 0,
    explain:
      "Dòng đầu tiên <!DOCTYPE html> mang ý nghĩa đặc biệt: thông báo cho trình duyệt biết đây là tệp có định dạng html, có thể coi là dòng khai báo html của tệp văn bản. Nó KHÔNG được xem là một phần tử HTML.",
  },
  {
    id: "b7-09",
    q: "Phần tử gốc (root) của cây HTML là phần tử nào?",
    options: [
      "Phần tử <html>, chứa tất cả các phần tử HTML còn lại",
      "Phần tử <body>, chứa toàn bộ nội dung của trang web",
      "Phần tử <head>, chứa thông tin chung của trang web",
      "Dòng <!DOCTYPE html> đặt ở ngay đầu tệp văn bản",
    ],
    answer: 0,
    explain:
      "Phần tử <html> là bắt buộc, là phần tử gốc và chứa tất cả các phần tử HTML còn lại của trang web. Trong sơ đồ cây HTML, đây là nút gốc; nó thường chứa hai phần tử con là <head> và <body>.",
  },
  {
    id: "b7-10",
    q: "Phần tử <head> chứa những gì?",
    options: [
      "Các phần tử liên quan chung đến toàn bộ trang web như <title>",
      "Tất cả các phần tử là nội dung hiển thị của trang web đó",
      "Các đoạn văn bản và hình ảnh chính của trang web hiện thời",
      "Các dòng chú thích giúp lập trình viên đọc hiểu mã nguồn",
    ],
    answer: 0,
    explain:
      "Phần tử <head> chứa các phần tử có liên quan chung đến toàn bộ trang web; trong <head> thường có <title>, ngoài ra còn có thể có <meta>, <style> và <script>. Còn phần tử chứa nội dung hiển thị của trang web là <body>.",
  },
  {
    id: "b7-11",
    q: "Khai báo <meta charset = \"utf-8\"> có ý nghĩa gì?",
    options: [
      "Mô tả cách mã hoá văn bản trên trang web theo mã UTF-8",
      "Mô tả tên của trang web sẽ hiện trên thanh tiêu đề",
      "Mô tả từ khoá dùng để tìm kiếm trang web đó trên mạng",
      "Mô tả tên tác giả đã tạo ra trang web hiện thời này",
    ],
    answer: 0,
    explain:
      "Phần tử <meta> nằm trong <head>, dùng để mô tả các thông tin bổ sung của trang web như cách mã hoá Unicode, từ khoá tìm kiếm, tên tác giả. Riêng <meta charset = \"utf-8\"> mô tả cách mã hoá văn bản trên trang web theo mã UTF-8.",
  },
  {
    id: "b7-12",
    q: "Phần tử <title> có đặc điểm nào sau đây?",
    options: [
      "Nằm trong <head>, mô tả tên trang web, không chứa phần tử con",
      "Nằm trong <body>, mô tả tiêu đề lớn nhất của trang web đó",
      "Nằm trong <head>, mô tả cách mã hoá văn bản của trang web",
      "Nằm trong <body>, mô tả một đoạn văn bản hoàn chỉnh của trang",
    ],
    answer: 0,
    explain:
      "Phần tử <title> nằm trong <head>, mô tả tên của trang web hiện thời — tên này sẽ xuất hiện trong danh sách kết quả tìm kiếm. Nội dung của <title> phải là văn bản thường và không được phép chứa các phần tử con.",
  },
  {
    id: "b7-13",
    q: "Nhóm các thẻ tiêu đề văn bản trong HTML gồm những thẻ nào?",
    options: [
      "<h1> đến <h6>, giảm cấp dần từ <h1> tới <h6>",
      "<h1> đến <h6>, tăng cấp dần từ <h1> tới <h6>",
      "<p1> đến <p6>, giảm cấp dần từ <p1> tới <p6>",
      "<title1> đến <title6>, giảm dần theo thứ tự",
    ],
    answer: 0,
    explain:
      "Nhóm các thẻ định dạng văn bản thường dùng là các thẻ tiêu đề theo thứ tự giảm cấp dần: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>. Riêng thẻ <p> mô tả một đoạn văn bản hoàn chỉnh.",
  },
  {
    id: "b7-14",
    q: "Nếu gõ nhiều dấu cách liên tiếp và nhấn Enter xuống dòng khi soạn HTML thì trình duyệt hiển thị thế nào?",
    options: [
      "Chỉ hiểu là một dấu cách và không nhận biết dấu xuống dòng",
      "Hiển thị đúng số dấu cách đã gõ và đúng chỗ đã xuống dòng",
      "Báo lỗi cú pháp và không hiển thị được nội dung trang web",
      "Tự động thay mỗi dấu cách thừa bằng một dòng kẻ ngang mới",
    ],
    answer: 0,
    explain:
      "HTML và trình duyệt không nhận biết được nhiều dấu cách — gõ bao nhiêu dấu cách máy cũng chỉ hiểu là một. Trình duyệt cũng không nhận biết dấu xuống dòng khi nhấn phím Enter. Muốn ngắt dòng phải dùng thẻ <br/>.",
  },
  {
    id: "b7-15",
    q: "Trong đoạn mã dưới đây, phần tử <em> có quan hệ thế nào với phần tử <p>?",
    code: "<p> Trang này được lập bởi <em>nhóm bạn bè</em> thân thiết </p>",
    options: [
      "Nằm bên trong phần tử <p>, đây là hai thẻ lồng nhau",
      "Nằm bên trong phần tử <div>, đây là hai thẻ rời nhau",
      "Nằm ngoài phần tử <p>, hai phần tử này độc lập nhau",
      "Nằm bên trong phần tử <head> của tệp html hiện thời",
    ],
    answer: 0,
    explain:
      "Các thẻ HTML có thể lồng nhau. Ở đây thẻ <em> được lồng bên trong thẻ <p>. Quan hệ lồng nhau giữa các phần tử HTML chính là quan hệ cha – con giữa các nút của cây HTML.",
  },
  {
    id: "b7-16",
    q: "Đoạn mã dưới đây cho kết quả hiển thị như thế nào trên trình duyệt?",
    code: "<p style = \"color : red\">This is a paragraph.</p>",
    options: [
      "Cả đoạn văn bản This is a paragraph. có màu đỏ",
      "Cả đoạn văn bản This is a paragraph. được in đậm",
      "Chỉ chữ color trong đoạn mã được hiển thị màu đỏ",
      "Đoạn văn bản hiển thị bình thường vì style bị sai",
    ],
    answer: 0,
    explain:
      "Mỗi thẻ có thể đi kèm các thông tin thuộc tính. Ở đây thuộc tính màu chữ được gán thêm cho thẻ <p>, do đó toàn bộ đoạn văn bản này có màu đỏ khi hiển thị trên trình duyệt.",
  },
  {
    id: "b7-17",
    q: "Dòng chú thích trong tệp HTML được viết theo dạng nào?",
    options: [
      "<!-- đây là dòng chú thích -->",
      "// đây là dòng chú thích",
      "/* đây là dòng chú thích */",
      "# đây là dòng chú thích",
    ],
    answer: 0,
    explain:
      "Phần tử HTML đặc biệt có ý nghĩa chú thích trong tệp HTML có dạng <!-- nội dung chú thích -->. Các dạng //, /* */ và # là cú pháp chú thích của những ngôn ngữ lập trình khác, không dùng được trong HTML.",
  },
  {
    id: "b7-18",
    q: "Nhóm nào sau đây gồm toàn phần mềm soạn thảo HTML?",
    options: [
      "Notepad, Notepad++ và Sublime Text",
      "Cốc Cốc, Chrome và Microsoft Edge",
      "Opera, FireFox và Sublime Text",
      "Notepad++, Chrome và TextEdit",
    ],
    answer: 0,
    explain:
      "Notepad (có sẵn trên Windows), Notepad++ và Sublime Text đều là phần mềm soạn thảo. Cốc Cốc, Chrome, Microsoft Edge, Opera và FireFox là trình duyệt web. TextEdit là phần mềm soạn thảo tương tự Notepad nhưng trên MacOS.",
  },
  {
    id: "b7-19",
    q: "Trong Notepad++, cần thực hiện lệnh nào để phần mềm hỗ trợ soạn thảo đúng HTML?",
    options: [
      "Language → H → HTML trên thanh bảng chọn",
      "View → Syntax → HTML trên thanh bảng chọn",
      "File → Save As → HTML trên thanh bảng chọn",
      "Settings → Style → HTML trên thanh bảng chọn",
    ],
    answer: 0,
    explain:
      "Với Notepad++ thì dùng lệnh Language → H → HTML để chọn ngôn ngữ HTML. Còn View → Syntax → HTML là lệnh tương ứng của phần mềm Sublime Text — hai phần mềm khác nhau nên rất dễ nhầm.",
  },
];

export default questions;
