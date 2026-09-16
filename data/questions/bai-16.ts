import type { Question } from "@/lib/types";

// Bài 16. Định dạng khung (SGK trang 88-93)
const questions: Question[] = [
  {
    id: "b16-01",
    q: "Đặc điểm nào dưới đây mô tả đúng nhất về phần tử khối (block level) trong HTML?",
    options: [
      "Thường bắt đầu hiển thị từ đầu hàng và kéo dài chiếm suốt toàn bộ chiều rộng có sẵn của trang web",
      "Luôn luôn nằm gọn bên trong một phần tử khác và chỉ chiếm khoảng không gian vừa đủ với nội dung",
      "Chỉ dùng để chèn các đoạn văn bản ngắn hoặc các liên kết ẩn mà không hiển thị trực tiếp lên màn hình",
      "Không thể chứa bất kì phần tử nào khác bên trong nó do giới hạn cố định về chiều cao và chiều rộng",
    ],
    answer: 0,
    explain:
      "Theo SGK, các thẻ (hay phần tử) html được chia làm hai loại: khối và nội tuyến. Các phần tử khối thường bắt đầu từ đầu hàng và kéo dài suốt chiều rộng của trang web.",
  },
  {
    id: "b16-02",
    q: "Đặc điểm nào dưới đây là đúng khi nói về phần tử nội tuyến (inline level) trong HTML?",
    options: [
      "Thường là các phần tử nhúng bên trong một phần tử khác và chỉ chiếm chiều rộng bằng kích thước nội dung của nó",
      "Luôn tự động tạo ra một khoảng trắng trước và sau nó, đồng thời chiếm trọn toàn bộ không gian chiều ngang màn hình",
      "Bắt buộc phải được khai báo bằng thuộc tính id hoặc class thì trình duyệt mới có thể nhận diện và phân biệt được",
      "Chỉ giới hạn sử dụng cho các thẻ đa phương tiện như hình ảnh hoặc video mà không áp dụng cho văn bản",
    ],
    answer: 0,
    explain:
      "Theo định nghĩa, các phần tử nội tuyến là các phần tử nhúng bên trong một phần tử khác, ví dụ như cụm từ được in nghiêng bằng thẻ <em> nhúng trong đoạn văn <p>. Nó không tự động xuống dòng và chỉ chiếm độ rộng vừa đủ nội dung.",
  },
  {
    id: "b16-03",
    q: "Nhóm nào dưới đây chỉ chứa các phần tử thuộc loại khối (block level)?",
    options: [
      "h1, p, div, form, table, ul, li",
      "span, a, strong, img, br",
      "h1, p, div, span, a, em",
      "table, form, ol, sub, sup",
    ],
    answer: 0,
    explain:
      "Theo Bảng 16.1 SGK phân loại: Phần tử khối gồm h1–h6, p, div, address, nav, article, section, aside, form, header, footer, table, hr, ol, ul, li, canvas. Nhóm chứa span, a, strong là phần tử nội tuyến.",
  },
  {
    id: "b16-04",
    q: "Để thay đổi một phần tử từ loại nội tuyến (inline) sang loại khối (block), ta sử dụng thuộc tính CSS nào với giá trị tương ứng?",
    options: [
      "Thuộc tính display với giá trị là block (display: block;)",
      "Thuộc tính visibility với giá trị là block (visibility: block;)",
      "Thuộc tính position với giá trị là absolute (position: absolute;)",
      "Thuộc tính type với giá trị là block-level (type: block-level;)",
    ],
    answer: 0,
    explain:
      "Chúng ta có thể thay đổi loại phần tử HTML bằng thuộc tính display. Các giá trị của thuộc tính này bao gồm block, inline, none. Để đổi thành khối thì dùng display: block;.",
  },
  {
    id: "b16-05",
    q: "Sự khác biệt về cách thiết lập khung giữa phần tử khối và phần tử nội tuyến là gì?",
    options: [
      "Phần tử khối được xác định khung với đầy đủ tính chất, trong khi phần tử nội tuyến thì không có thông số chiều cao và chiều rộng",
      "Khung của phần tử nội tuyến cho phép người dùng tuỳ chỉnh khoảng cách lề tự do, trong khi phần tử khối bị cố định lề mặc định không thể thay đổi",
      "Phần tử khối không hỗ trợ tạo viền khung bao quanh nội dung, còn phần tử nội tuyến bắt buộc phải có viền bao quanh để ngăn cách với các thành phần khác",
      "Khung của phần tử nội tuyến luôn che lấp nội dung của các phần tử xung quanh nó, còn các phần tử khối thì tự động xếp chồng lên nhau theo trật tự",
    ],
    answer: 0,
    explain:
      "Trong hoạt động 2 (Thiết lập định dạng khung): Khung của phần tử khối được xác định với đầy đủ tính chất, còn với các phần tử nội tuyến thì khung chỉ có thể thiết lập mà không có các thông số chiều cao, chiều rộng.",
  },
  {
    id: "b16-06",
    q: "Trong mô hình khung (Box model) của CSS, thuộc tính padding được định nghĩa như thế nào?",
    options: [
      "Là khoảng cách (vùng đệm) được đo từ vùng nội dung văn bản bên trong đến đường viền ngoài của khung",
      "Là khoảng cách (lề khung) được đo từ đường viền ngoài của khung này đến các văn bản hoặc phần tử xung quanh nó",
      "Là độ dày thực tế của chính đường viền bao quanh khung của phần tử đó tính theo đơn vị pixel",
      "Là khoảng trống tự động được thêm vào phía dưới phần tử để ngăn cách với phần tử tiếp theo trên trang",
    ],
    answer: 0,
    explain:
      "Thuộc tính padding (Vùng đệm) là khoảng cách từ vùng văn bản nội dung (text) đến đường viền ngoài của khung.",
  },
  {
    id: "b16-07",
    q: "Trong mô hình khung (Box model) của CSS, thuộc tính margin được định nghĩa như thế nào?",
    options: [
      "Là khoảng cách (lề khung) đo từ đường viền ngoài của khung cho đến văn bản hoặc các phần tử xung quanh nó",
      "Là khoảng không gian đệm tính từ mép nội dung hiển thị ở bên trong tới chính đường viền ngoài cùng của khung",
      "Là một đường kẻ viền với nhiều kiểu dáng khác nhau được vẽ nổi trực tiếp lên trên nền của trang web",
      "Là thông số quy định giới hạn độ dài dòng tối đa trước khi đoạn văn bản tự động bị bẻ gập xuống dòng mới",
    ],
    answer: 0,
    explain:
      "Thuộc tính margin (Lề khung) là khoảng cách từ đường viền ngoài của khung đến văn bản (hoặc phần tử) xung quanh nó.",
  },
  {
    id: "b16-08",
    q: "Thuộc tính border-style trong CSS hỗ trợ những giá trị nào để xác định kiểu đường viền?",
    options: [
      "none, solid, dotted, dashed, double, inset, outset, ridge, groove",
      "circle, square, triangle, oval, rectangle, polygon, diamond, star",
      "top, bottom, left, right, center, middle, justify, align",
      "primary, secondary, success, danger, warning, info, light, dark",
    ],
    answer: 0,
    explain:
      "Thuộc tính border-style quy định kiểu đường viền. Các giá trị có thể là: none, solid, dotted, dashed, double, inset, outset, ridge, groove.",
  },
  {
    id: "b16-09",
    q: "Bộ chọn lớp (class selector) trong CSS được viết theo cấu trúc nào?",
    options: [
      "Bắt đầu bằng dấu chấm, sau đó là tên lớp: .class { thuộc tính: giá trị; }",
      "Bắt đầu bằng dấu thăng, sau đó là tên lớp: #class { thuộc tính: giá trị; }",
      "Bắt đầu bằng dấu sao, sau đó là tên lớp: *class { thuộc tính: giá trị; }",
      "Bắt đầu bằng kí tự a còng, sau đó là tên lớp: @class { thuộc tính: giá trị; }",
    ],
    answer: 0,
    explain:
      "Bộ chọn lớp (class) cho một nhóm phần tử có cùng ý nghĩa được thiết lập bằng cách bắt đầu bằng dấu chấm, theo sau là tên lớp. Ví dụ: .class {thuộc tính : giá trị;}",
  },
  {
    id: "b16-10",
    q: "Đoạn mã CSS: \".test.warning { color: red; }\" có ý nghĩa như thế nào?",
    options: [
      "Áp dụng chữ màu đỏ cho các phần tử HTML có khai báo đồng thời cả hai lớp là test và warning",
      "Áp dụng chữ màu đỏ cho mọi phần tử HTML có khai báo lớp test hoặc có khai báo lớp warning",
      "Áp dụng chữ màu đỏ cho phần tử lớp warning với điều kiện nó phải là con trực tiếp của phần tử lớp test",
      "Hệ thống sẽ báo lỗi cú pháp do không được viết liền hai tên lớp cạnh nhau mà thiếu dấu phẩy phân tách",
    ],
    answer: 0,
    explain:
      "Bộ chọn \".test.warning\" (viết liền nhau, không có dấu cách) có ý nghĩa áp dụng cho tất cả các phần tử có tên lớp chứa đồng thời cả lớp test và lớp warning. Ví dụ: <p class=\"test warning\">.</p>",
  },
  {
    id: "b16-11",
    q: "Bộ chọn định danh ID trong CSS được thiết lập theo cú pháp nào và có đặc điểm gì?",
    options: [
      "Bắt đầu bằng dấu thăng (#) theo sau là tên ID; mỗi ID chỉ là duy nhất cho một phần tử trong một trang web",
      "Bắt đầu bằng dấu chấm (.) theo sau là tên ID; một ID có thể dùng chung cho hàng trăm phần tử giống nhau",
      "Bắt đầu bằng dấu sao (*) theo sau là tên ID; chỉ dùng khi muốn thiết lập kiểu dáng giống hệt trên toàn trang",
      "Bắt đầu bằng dấu bằng (=) theo sau là tên ID; bắt buộc phải đặt tên chứa cả số thứ tự và chữ viết hoa",
    ],
    answer: 0,
    explain:
      "CSS cho phép thiết lập mẫu định dạng với phần tử có id tương ứng bằng bộ chọn bắt đầu bằng dấu #. Ví dụ: #idname {thuộc tính : giá trị;}. Mỗi phần tử chỉ có một mã định danh id duy nhất trong một trang web.",
  },
  {
    id: "b16-12",
    q: "Bộ chọn thuộc tính trong CSS cho phép nhắm mục tiêu phần tử theo cách nào?",
    options: [
      "Dựa vào tên thuộc tính cụ thể (ví dụ [href]) hoặc tên thuộc tính kèm giá trị chính xác của nó (ví dụ [target=\"_blank\"])",
      "Dựa hoàn toàn vào giá trị đo lường bằng chiều cao và độ rộng hiển thị trên thực tế của chính phần tử HTML đó trên trình duyệt web",
      "Chỉ dựa vào sự tồn tại của từ khoá đặc biệt !important được người dùng cố tình ẩn sâu bên trong nội dung đoạn văn bản con của phần tử",
      "Dựa vào thứ tự xuất hiện chẵn hay lẻ của các phần tử liên tiếp nhau khi chúng được phân loại và nhóm lại thành một danh sách thứ tự",
    ],
    answer: 0,
    explain:
      "Bộ chọn thuộc tính nhắm tới phần tử nếu nó được gắn với thuộc tính cụ thể nào đó, viết trong cặp ngoặc vuông. Ví dụ: [href] {border: 1px;} hoặc a[target=\"_blank\"] {color: red;}.",
  },
  {
    id: "b16-13",
    q: "Quy tắc nào sau đây là KHÔNG ĐÚNG khi đặt tên cho thuộc tính id và class trong tài liệu HTML?",
    options: [
      "Được phép chứa dấu cách để tạo thành nhiều tên riêng biệt ngầm định gộp lại thành một ID duy nhất",
      "Tên của id và class bắt buộc phải phân biệt rõ ràng giữa chữ cái in hoa và chữ cái in thường",
      "Tên phải có độ dài ít nhất là một kí tự và tuyệt đối không được phép bắt đầu bằng các kí tự số",
      "Không được chứa các kí tự đặc biệt (trừ một số dấu được cho phép theo chuẩn như gạch dưới, gạch ngang)",
    ],
    answer: 0,
    explain:
      "Theo SGK bài 16: Tên của id và class phân biệt chữ in hoa, in thường. Tên bắt buộc phải có ít nhất một kí tự, không bắt đầu bằng số, không chứa dấu cách và các kí tự đặc biệt.",
  },
  {
    id: "b16-14",
    q: "Để gán nhiều lớp (class) khác nhau cho cùng một phần tử HTML (ví dụ gán 3 lớp test, more, once cho thẻ <p>), cách khai báo nào đúng?",
    options: [
      '<p class="test more once">',
      '<p class="test, more, once">',
      '<p class="test" class="more" class="once">',
      '<p class="test.more.once">',
    ],
    answer: 0,
    explain:
      "Một phần tử có thể thuộc nhiều lớp khác nhau. Để khai báo, ta đặt các tên lớp cách nhau bởi dấu cách. Cú pháp chuẩn là: <p class=\"test more once\">.",
  },
  {
    id: "b16-15",
    q: "Bộ chọn \"div#bat_dau > p\" mang ý nghĩa như thế nào trong CSS?",
    options: [
      "Áp dụng định dạng cho tất cả thẻ <p> là con trực tiếp của thẻ <div> có id là bat_dau",
      "Áp dụng định dạng cho thẻ <p> là anh em liền kề nằm sau thẻ <div> có thuộc tính class là bat_dau",
      "Áp dụng định dạng cho tất cả các thẻ <div> và thẻ <p> miễn là chúng mang id bắt đầu bằng chữ bat_dau",
      "Áp dụng định dạng cho tất cả các thẻ <div> chứa thẻ <p> làm phần tử con trực tiếp phía bên trong",
    ],
    answer: 0,
    explain:
      "Bộ chọn này là tổ hợp của bộ chọn thẻ, bộ chọn id và quan hệ cha con trực tiếp. div#bat_dau chọn phần tử div có id bằng 'bat_dau'. Dấu > chỉ quan hệ cha con trực tiếp. p chỉ định phần tử con là thẻ p.",
  },
];

export default questions;
