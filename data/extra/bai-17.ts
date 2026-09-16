import type { LessonExtra } from "@/lib/types";

// Bài 17. Các mức ưu tiên của bộ chọn — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b17-tf1",
      context:
        "Bạn E đang tạo giao diện cho một liên kết (thẻ <a>). Bạn E muốn liên kết mặc định có màu xanh, khi chưa click thì màu xanh, sau khi đã click (truy cập) thì chuyển sang màu tím, và khi di chuột vào thì có màu đỏ, phông chữ lớn hơn 120%. Bạn E viết đoạn CSS như sau:\n\na { color: blue; }\na:link { color: blue; }\na:visited { color: purple; }\na:hover { color: red; font-size: 120%; }",
      code: "",
      statements: [
        {
          text: "Các bộ chọn :link, :visited, :hover trong đoạn mã trên được gọi là các pseudo-element (phần tử giả).",
          answer: false,
          explain:
            "Chúng được gọi là pseudo-class (lớp giả) vì chúng dùng để định dạng các trạng thái đặc biệt của phần tử, không phải đại diện cho một phần cụ thể (như first-line) của phần tử.",
        },
        {
          text: "Khi người dùng chưa từng nhấp vào liên kết, văn bản sẽ hiển thị màu xanh (blue).",
          answer: true,
          explain:
            "Bộ chọn a:link áp dụng cho liên kết khi chưa được kích hoạt (chưa truy cập), theo CSS này thì nó sẽ có color: blue.",
        },
        {
          text: "Khi người dùng di chuyển con trỏ chuột lên liên kết, màu sắc chữ sẽ biến thành màu đỏ.",
          answer: true,
          explain:
            "Lớp giả :hover được kích hoạt khi con trỏ chuột di chuyển lên trên phần tử, thuộc tính color: red sẽ được áp dụng.",
        },
        {
          text: "Nếu B viết bộ chọn ::first-letter cho thẻ <a> trên, thì ::first-letter thuộc nhóm pseudo-class.",
          answer: false,
          explain:
            "::first-letter là một pseudo-element (phần tử giả). Nó chỉ nhắm mục tiêu vào một phần cấu trúc của phần tử (kí tự đầu tiên), và nó sử dụng hai dấu :: theo chuẩn.",
        },
      ],
    },
    {
      id: "b17-tf2",
      context:
        "Một phần tử HTML <p id=\"title\" class=\"highlight\">Xin chào</p> chịu ảnh hưởng của các đoạn mã CSS sau:\n\np { color: black; }\n.highlight { color: blue; }\n#title { color: red; }",
      code: "",
      statements: [
        {
          text: "Bộ chọn 'p' có giá trị trọng số (specificity) lớn nhất trong 3 bộ chọn trên.",
          answer: false,
          explain:
            "Bộ chọn p (phần tử) chỉ có trọng số bằng 1. .highlight (lớp) có trọng số 10, và #title (ID) có trọng số 100. Do đó p có trọng số nhỏ nhất.",
        },
        {
          text: "Chữ 'Xin chào' hiển thị trên màn hình sẽ có màu đỏ (red).",
          answer: true,
          explain:
            "Do #title có trọng số cao nhất (100 điểm) so với .highlight (10 điểm) và p (1 điểm), trình duyệt sẽ áp dụng thuộc tính của #title.",
        },
        {
          text: "CSS nội tuyến viết trong thuộc tính style của thẻ có mức ưu tiên thấp hơn bộ chọn id nên sẽ bị bộ chọn id ghi đè.",
          answer: false,
          explain:
            "Ngược lại mới đúng. Theo bảng mức ưu tiên của CSS, CSS trực tiếp (inline) ở mức 2, cao hơn mức 4 là trọng số của các bộ chọn. Vì vậy <p style=\"color: green;\"> sẽ ghi đè quy định của #title, chỉ có !important mới vượt được nó.",
        },
        {
          text: "Để buộc đoạn chữ luôn có màu xanh dương (blue) bất chấp ID hay inline CSS, lập trình viên có thể sử dụng từ khoá !important (ví dụ: .highlight { color: blue !important; }).",
          answer: true,
          explain:
            "Từ khoá !important nằm ở mức ưu tiên tuyệt đối cao nhất (mức 1). Nó sẽ phá vỡ toàn bộ luật ưu tiên thông thường và áp dụng bắt buộc định dạng đó.",
        },
      ],
    },
    {
      id: "b17-tf3",
      context:
        "Bạn Dín làm trang web có thanh điều hướng. Dín muốn khi rê chuột lên một mục thì mục đó đổi sang màu đỏ, và khi người dùng bôi đen chữ trên trang thì phần bôi đen có nền vàng. Dín viết đoạn CSS dưới đây và chạy thử thì thấy đúng ý. Bạn Mai nhìn vào đoạn mã rồi nhận xét: lớp giả và phần tử giả viết giống hệt nhau, đều dùng một dấu hai chấm, chắc Dín gõ thừa một dấu ở dòng thứ hai. Mai còn nói thêm rằng :hover chỉ dùng được cho thẻ <a>.",
      code: "a:hover { color: red; }\n::selection { background-color: yellow; }",
      statements: [
        {
          text: "Bộ chọn a:hover là lớp giả (pseudo-class), dùng để định dạng khi con trỏ chuột rê lên đối tượng.",
          answer: true,
          explain:
            ":hover là lớp giả thông dụng nhất, xác định định dạng áp dụng cho phần tử ở trạng thái đang được con trỏ chuột trỏ tới.",
        },
        {
          text: "Bộ chọn ::selection là phần tử giả (pseudo-element), định dạng phần văn bản người dùng đang bôi đen.",
          answer: true,
          explain:
            "::selection thuộc loại phần tử giả, dùng để thiết lập định dạng cho phần nội dung mà người dùng bôi đen (chọn) trên trang.",
        },
        {
          text: "Nhận xét của Mai là đúng: theo chuẩn CSS3, lớp giả và phần tử giả đều được viết với một dấu hai chấm.",
          answer: false,
          explain:
            "Mai nhầm, và Dín không gõ thừa. Chuẩn CSS3 quy định lớp giả viết với MỘT dấu hai chấm (:hover), còn phần tử giả viết với HAI dấu hai chấm (::selection) — chính là để phân biệt hai loại này.",
        },
        {
          text: "Lớp giả :hover chỉ áp dụng được cho thẻ <a>, không dùng được cho các phần tử khác.",
          answer: false,
          explain:
            ":hover áp dụng được cho hầu hết mọi phần tử, ví dụ p:hover, div:hover hay .tin-moi:hover. Thẻ <a> chỉ là trường hợp dùng phổ biến nhất nên hay được lấy làm ví dụ.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b17-es1",
      q: "Trình bày khái niệm và sự khác biệt giữa pseudo-class (lớp giả) và pseudo-element (phần tử giả) trong CSS. Nêu ví dụ cho mỗi loại và phân tích cú pháp khai báo.",
      answer:
        "* Pseudo-class (Lớp giả):\n- Khái niệm: Dùng để định nghĩa một trạng thái đặc biệt của một phần tử, ví dụ như khi người dùng di chuột lên nó, hoặc liên kết đã truy cập hay chưa truy cập.\n- Cú pháp: Sử dụng một dấu hai chấm (:). Ví dụ: :hover, :link, :visited.\n\n* Pseudo-element (Phần tử giả):\n- Khái niệm: Dùng để nhắm mục tiêu và định dạng một bộ phận (một phần cụ thể) của một phần tử, như dòng chữ đầu tiên hay kí tự đầu tiên.\n- Cú pháp: Theo chuẩn CSS3, nó sử dụng hai dấu hai chấm (::) để phân biệt với pseudo-class. Ví dụ: ::first-line, ::first-letter, ::selection.\n\n* Điểm khác biệt cơ bản: Pseudo-class dựa trên \"trạng thái\", còn pseudo-element dựa trên \"cấu trúc hiển thị vật lý\" của phần tử.",
    },
    {
      id: "b17-es2",
      q: "Thứ tự ưu tiên của CSS được trình duyệt xét duyệt như thế nào khi một phần tử bị ảnh hưởng bởi nhiều quy tắc cùng thay đổi chung một thuộc tính? Trình bày cách tính Trọng số CSS (Specificity).",
      answer:
        "* Thứ tự ưu tiên áp dụng CSS từ cao xuống thấp gồm 7 mức:\n1. !important (mức ưu tiên tối cao).\n2. CSS trực tiếp (viết inline trong thuộc tính style của thẻ HTML).\n3. CSS liên quan đến thiết bị (@media).\n4. Trọng số CSS (Specificity) của bộ chọn.\n5. Nguyên tắc thứ tự cuối cùng (nếu trọng số bằng nhau, quy tắc viết dưới/sau cùng được áp dụng).\n6. Kế thừa từ phần tử cha.\n7. Mặc định của trình duyệt.\n\n* Cách tính Trọng số CSS (Specificity):\n- Trọng số được cộng dồn theo các thành phần tạo nên bộ chọn đó:\n+ Mã định danh (ID): Mỗi ID (+100 điểm).\n+ Lớp (Class), lớp giả (pseudo-class), bộ chọn thuộc tính: Mỗi loại (+10 điểm).\n+ Phần tử (Element), phần tử giả (pseudo-element): Mỗi loại (+1 điểm).\n+ Dấu (*) không đóng góp điểm (0 điểm).",
    },
  ],
};

export default extra;
