import type { Question } from "@/lib/types";

// Bài 17. Các mức ưu tiên của bộ chọn (SGK trang 96-101)
const questions: Question[] = [
  {
    id: "b17-01",
    q: "Khái niệm pseudo-class (lớp giả) trong CSS được sử dụng với mục đích chính là gì?",
    options: [
      "Để định dạng cho các trạng thái đặc biệt của một phần tử HTML (ví dụ: khi di chuyển chuột lên)",
      "Để nhắm mục tiêu vào các thành phần nhỏ bé ẩn sâu bên trong bố cục của một phần tử HTML",
      "Để tạo ra các lớp thuộc tính mới chưa từng được hỗ trợ chính thức bởi trình duyệt web",
      "Để ghi đè lên các quy tắc định dạng của phần tử cha mà không cần dùng đến tính kế thừa",
    ],
    answer: 0,
    explain:
      "Theo SGK bài 17, pseudo-class (lớp giả) là khái niệm chỉ các trạng thái đặc biệt của phần tử HTML (như chưa kích hoạt, đã kích hoạt, khi di chuyển con trỏ chuột...). Nó giúp định dạng CSS cho các trạng thái tương tác với người dùng.",
  },
  {
    id: "b17-02",
    q: "Cú pháp chính xác để thiết lập bộ chọn pseudo-class cho phần tử là gì?",
    options: [
      "Sử dụng một dấu hai chấm \":\" ngay phía trước tên lớp giả. Ví dụ: :hover",
      "Sử dụng hai dấu hai chấm \"::\" ngay phía trước tên lớp giả. Ví dụ: ::hover",
      "Sử dụng một dấu chấm \".\" theo sau là tên lớp giả được bọc trong cặp dấu ngoặc đơn. Ví dụ: .(hover)",
      "Sử dụng dấu thăng \"#\" ngay phía trước tên lớp giả. Ví dụ: #hover",
    ],
    answer: 0,
    explain:
      "Trong CSS, các lớp giả (pseudo-class) quy định viết sau một dấu \":\" theo cú pháp :pseudo-class { thuộc tính : giá trị; }. Ví dụ: :hover, :link, :visited.",
  },
  {
    id: "b17-03",
    q: "Bộ chọn pseudo-element (phần tử giả) trong CSS có ý nghĩa gì?",
    options: [
      "Chỉ nhắm mục tiêu đến một phần hoặc một thành phần cụ thể của các phần tử bình thường",
      "Chỉ định dạng cho các đối tượng đa phương tiện như video hoặc audio được chèn vào trang",
      "Định nghĩa lại hoàn toàn chức năng mặc định của một thẻ HTML bất kì do trình duyệt thiết lập",
      "Gộp chung toàn bộ tất cả các phần tử trên trang web để áp dụng đồng loạt cùng một hiệu ứng",
    ],
    answer: 0,
    explain:
      "Pseudo-element (phần tử giả) là khái niệm chỉ một phần (hoặc một thành phần) của các phần tử bình thường. Ví dụ ::first-line chỉ định dạng dòng đầu tiên, ::first-letter chỉ định dạng kí tự đầu tiên.",
  },
  {
    id: "b17-04",
    q: "Đâu là cú pháp đúng chuẩn để viết một pseudo-element (phần tử giả) theo quy định của CSS3?",
    options: [
      "Viết sau hai dấu hai chấm (::). Ví dụ: ::first-line",
      "Viết sau một dấu hai chấm (:). Ví dụ: :first-line",
      "Viết sau kí tự đô la ($). Ví dụ: $first-line",
      "Viết bên trong cặp ngoặc vuông ([]). Ví dụ: [first-line]",
    ],
    answer: 0,
    explain:
      "Quy định phần tử giả (pseudo-element) viết sau dấu \"::\" theo cú pháp ::pseudo-element { thuộc tính : giá trị ; }. Ví dụ ::first-line, ::first-letter, ::selection.",
  },
  {
    id: "b17-05",
    q: "Theo bảng quy tắc thứ tự (mức) ưu tiên của CSS, mức độ nào nắm quyền ưu tiên cao nhất, vượt qua mọi định dạng khác?",
    options: [
      "Các thuộc tính có chứa từ khoá !important",
      "Các định dạng CSS được viết trực tiếp bên trong thẻ HTML (inline CSS)",
      "Các định dạng có trọng số (specificity) được tính toán ra kết quả lớn nhất",
      "Các định dạng nằm ở cuối cùng của tệp CSS theo nguyên tắc thứ tự (rule order)",
    ],
    answer: 0,
    explain:
      "Theo Bảng 17.3, thứ tự ưu tiên từ cao xuống thấp: 1. !important (cao nhất) -> 2. CSS trực tiếp (inline) -> 3. CSS liên quan kích thước thiết bị (@media) -> 4. Trọng số CSS -> 5. Nguyên tắc thứ tự cuối cùng -> 6. Kế thừa -> 7. Mặc định trình duyệt.",
  },
  {
    id: "b17-06",
    q: "Nguyên tắc \"thứ tự cuối cùng (rule order)\" trong CSS có tác dụng trong trường hợp nào?",
    options: [
      "Khi có nhiều mẫu định dạng trùng lặp mang cùng một mức trọng số thì ưu tiên áp dụng định dạng ở cuối cùng",
      "Khi toàn bộ các thuộc tính CSS trên trang đều được gán chung bằng từ khoá !important bắt buộc",
      "Khi trình duyệt web không hỗ trợ tính toán trọng số thì sẽ tự động áp dụng định dạng cuối cùng",
      "Khi một thẻ HTML được gán quá nhiều class khác nhau mà không thể xác định được thuộc tính cụ thể",
    ],
    answer: 0,
    explain:
      "Nguyên tắc thứ tự cuối cùng (rule order): Nếu có nhiều mẫu định dạng với cùng một trọng số như nhau thì định dạng ở vị trí cuối cùng sẽ được áp dụng (viết sau đè viết trước).",
  },
  {
    id: "b17-07",
    q: "Trong cách tính trọng số CSS (specificity), thành phần nào dưới đây được đóng góp giá trị trọng số cao nhất (tương đương 100 điểm)?",
    options: [
      "Mã định danh (ID)",
      "Lớp (Class) và lớp giả (pseudo-class)",
      "Bộ chọn kiểu thuộc tính (attribute selector)",
      "Phần tử (Element) và phần tử giả (pseudo-element)",
    ],
    answer: 0,
    explain:
      "Theo Bảng 17.4: ID đóng góp 100 điểm. Class, pseudo-class, attribute selector đóng góp 10 điểm. Element, pseudo-element đóng góp 1 điểm. Dấu sao (*) đóng góp 0 điểm.",
  },
  {
    id: "b17-08",
    q: "Với bộ chọn p.test em.more, giá trị tổng trọng số CSS của nó là bao nhiêu?",
    options: [
      "22 (gồm 2 phần tử và 2 lớp)",
      "12 (gồm 1 phần tử và 1 lớp)",
      "20 (chỉ tính 2 lớp, bỏ qua phần tử)",
      "11 (gồm 1 phần tử và 1 lớp lấy giá trị cuối cùng)",
    ],
    answer: 0,
    explain:
      "Bộ chọn p.test em.more gồm: 2 phần tử p, em (mỗi phần tử +1 điểm) và 2 lớp .test, .more (mỗi lớp +10 điểm). Tổng cộng: 1 + 10 + 1 + 10 = 22.",
  },
  {
    id: "b17-09",
    q: "Hãy tính tổng trọng số CSS (specificity) cho bộ chọn sau: div#container p:hover",
    options: [
      "112 (gồm 1 ID, 1 lớp giả, 2 phần tử)",
      "102 (gồm 1 ID và 2 phần tử)",
      "111 (gồm 1 ID, 1 lớp giả, 1 phần tử)",
      "120 (gồm 1 ID và 2 lớp giả)",
    ],
    answer: 0,
    explain:
      "Phân tích div#container p:hover: Có 2 phần tử là div và p (2*1 = 2). Có 1 ID là #container (100). Có 1 pseudo-class là :hover (10). Tổng = 100 + 10 + 2 = 112.",
  },
  {
    id: "b17-10",
    q: "Trong cách tính trọng số CSS, bộ chọn dấu sao (*) có giá trị đóng góp là bao nhiêu điểm?",
    options: [
      "0",
      "1",
      "10",
      "100",
    ],
    answer: 0,
    explain:
      "Theo Bảng 17.4, bộ chọn dấu sao (*) (chọn tất cả các phần tử) có giá trị đóng góp trọng số là 0.",
  },
  {
    id: "b17-11",
    q: "Nếu có 2 bộ chọn `#header` (trọng số 100) và `.menu .item` (trọng số 20) cùng trỏ tới 1 phần tử, bộ chọn nào sẽ được áp dụng?",
    options: [
      "Bộ chọn #header vì nó có trọng số lớn hơn (100 > 20)",
      "Bộ chọn .menu .item vì nó chi tiết hơn khi gộp 2 class lại",
      "Bộ chọn nào viết ở phía dưới cùng trong tệp CSS sẽ được áp dụng",
      "Cả hai bộ chọn đều được kết hợp lại để áp dụng đồng thời",
    ],
    answer: 0,
    explain:
      "Theo nguyên tắc ưu tiên, CSS sẽ tính trọng số (specificity). Cái nào có trọng số lớn hơn sẽ được ưu tiên áp dụng. Ở đây #header (100) > .menu .item (20) nên #header sẽ ghi đè thuộc tính trùng lặp.",
  },
  {
    id: "b17-12",
    q: "Nếu phần tử không được định dạng bằng CSS và cũng không có bất kỳ CSS nào kế thừa từ phần tử cha, nó sẽ hiển thị như thế nào?",
    options: [
      "Trình duyệt sẽ quyết định thể hiện nội dung theo định dạng mặc định",
      "Trang web sẽ báo lỗi không thể hiển thị nội dung phần tử đó lên giao diện",
      "Phần tử sẽ bị ẩn hoàn toàn (display: none) do không có thông tin định dạng màu sắc",
      "Phần tử sẽ kế thừa định dạng từ tệp CSS tiêu chuẩn đầu tiên được liên kết trong trang",
    ],
    answer: 0,
    explain:
      "Theo bảng mức ưu tiên, mức 7 (thấp nhất) là Mặc định theo trình duyệt: Nếu không có bất cứ định dạng CSS nào thì trình duyệt quyết định thể hiện nội dung mặc định.",
  },
  {
    id: "b17-13",
    q: "Bộ chọn pseudo-class nào được dùng để thiết lập định dạng màu sắc khi người dùng di chuyển con trỏ chuột lên đối tượng?",
    options: [
      ":hover",
      ":visited",
      ":link",
      ":active",
    ],
    answer: 0,
    explain:
      "Theo Bảng 17.1 SGK bài 17, bộ chọn :hover áp dụng cho tất cả các phần tử khi người dùng di chuyển con trỏ chuột lên đối tượng.",
  },
  {
    id: "b17-14",
    q: "Bộ chọn ::selection (thuộc loại pseudo-element) có tác dụng gì trong CSS?",
    options: [
      "Định dạng vùng văn bản đang được người dùng quét khối (kéo thả chuột để bôi đen) trên màn hình",
      "Định dạng cho dòng chữ đầu tiên của một đoạn văn bản ngay khi trang web vừa mới hiển thị ra màn hình",
      "Định dạng ngẫu nhiên cho một thành phần được trình duyệt lựa chọn trong danh sách phần tử",
      "Định dạng màu sắc nổi bật cho các ô checkbox hoặc radio đã được đánh dấu tích chọn",
    ],
    answer: 0,
    explain:
      "Theo Bảng 17.2, ::selection có ý nghĩa là phần được chọn (bằng cách kéo thả bôi đen trên màn hình). Ví dụ ::selection {background-color: lime;}",
  },
  {
    id: "b17-15",
    q: "Khi viết `<p style=\"color: blue;\">`, đây là dạng khai báo CSS nào và nằm ở mức độ ưu tiên thứ mấy trong bảng thứ tự CSS?",
    options: [
      "Là CSS trực tiếp (inline CSS), nắm giữ mức độ ưu tiên thứ hai chỉ đứng ngay sau từ khoá !important",
      "Là CSS liên quan đến thiết bị, nắm giữ mức độ ưu tiên thứ ba đứng ngay sau CSS trực tiếp",
      "Là trọng số CSS đặc biệt, nắm giữ mức độ ưu tiên cao nhất và vượt qua cả từ khoá !important",
      "Là cấu trúc kế thừa, nắm giữ mức độ ưu tiên thứ sáu và dễ dàng bị ghi đè bởi mọi cấu trúc khác",
    ],
    answer: 0,
    explain:
      "Viết thuộc tính style trực tiếp vào thẻ được gọi là inline CSS (CSS trực tiếp). Theo Bảng 17.3, CSS trực tiếp nằm ở mức ưu tiên thứ 2 (chỉ thấp hơn các thuộc tính có từ khoá !important).",
  },
];

export default questions;
