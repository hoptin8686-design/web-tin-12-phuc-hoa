import type { Question } from "@/lib/types";

// Bài 9. Tạo danh sách, bảng (SGK trang 52-56)
// 1. Danh sách có thứ tự <ol> + thuộc tính type (1,A,a,I,i), start.
// 2. Danh sách không có thứ tự <ul> + list-style-type (disc, circle, square, none).
// 3. Danh sách mô tả <dl>/<dt>/<dd>.
// 4. Danh sách lồng nhau: đặt danh sách con trong cặp <li></li>.
// 5. Bảng: <table>, <tr>, <td>, <th>, <caption>;
//    thuộc tính border, rowspan, colspan, width, height qua style.
const questions: Question[] = [
  {
    id: "b9-01",
    q: "Ba dạng danh sách cơ bản trong HTML là gì?",
    options: [
      "Danh sách không có thứ tự, danh sách có thứ tự và danh sách mô tả",
      "Danh sách ngang, danh sách dọc và danh sách lồng nhau",
      "Danh sách chữ số, danh sách chữ cái và danh sách hình ảnh",
      "Danh sách đơn, danh sách đôi và danh sách nhiều cấp",
    ],
    answer: 0,
    explain:
      "Các dạng danh sách trong HTML cơ bản gồm: danh sách không có thứ tự, danh sách có thứ tự và danh sách mô tả. Ngoài ra, có thể tạo danh sách lồng nhau bằng cách đặt một danh sách là một mục của danh sách khác.",
  },
  {
    id: "b9-02",
    q: "Để tạo danh sách có thứ tự trong HTML, ta dùng cặp thẻ nào?",
    options: [
      "<ol>…</ol> bao ngoài các mục, mỗi mục là một cặp <li>…</li>",
      "<ul>…</ul> bao ngoài các mục, mỗi mục là một cặp <li>…</li>",
      "<dl>…</dl> bao ngoài các mục, mỗi mục là một cặp <dt>…</dt>",
      "<list>…</list> bao ngoài các mục, mỗi mục là một cặp <item>…</item>",
    ],
    answer: 0,
    explain:
      "Để tạo danh sách có thứ tự, dùng cặp thẻ <ol></ol>. Để tạo danh sách không có thứ tự, dùng cặp thẻ <ul></ul>. Mỗi mục trong cả hai loại đều được đặt trong cặp thẻ <li></li>.",
  },
  {
    id: "b9-03",
    q: "Thuộc tính type=\"i\" trong thẻ <ol> xác định kiểu đánh số nào?",
    options: [
      "Chữ số La Mã viết thường: i, ii, iii, iv,...",
      "Chữ số La Mã viết hoa: I, II, III, IV,...",
      "Chữ cái viết thường: a, b, c, d,...",
      "Chữ số Ả Rập thông thường: 1, 2, 3, 4,...",
    ],
    answer: 0,
    explain:
      "Thuộc tính type của thẻ <ol> xác định kiểu đánh số. Các kiểu đánh số là: \"1\" (số thông thường), \"A\" (chữ hoa), \"a\" (chữ thường), \"I\" (La Mã hoa) và \"i\" (La Mã thường). Ví dụ type=\"i\" cho kết quả i, ii, iii,...",
  },
  {
    id: "b9-04",
    q: "Thuộc tính start trong thẻ <ol> có tác dụng gì?",
    options: [
      "Xác định giá trị bắt đầu đánh số, nhận giá trị là các số thực",
      "Xác định kiểu ký tự dùng để đánh số thứ tự trong danh sách",
      "Xác định khoảng cách thụt lề của toàn bộ danh sách bên trái",
      "Xác định màu sắc của các ký tự đầu dòng trong danh sách",
    ],
    answer: 0,
    explain:
      "Thuộc tính start xác định giá trị bắt đầu đánh số, nhận giá trị là các số thực. Ví dụ <ol start=\"5\"> sẽ bắt đầu đánh số từ 5 thay vì từ 1.",
  },
  {
    id: "b9-05",
    q: "Để tạo danh sách không có thứ tự với ký tự đầu dòng là hình vuông, ta viết thẻ <ul> thế nào?",
    options: [
      '<ul style="list-style-type:square">',
      '<ul style="list-style-type:circle">',
      '<ul style="list-style-type:disc">',
      '<ul style="list-style-type:none">',
    ],
    answer: 0,
    explain:
      "Để chọn ký tự đầu dòng của danh sách không có thứ tự, ta thiết lập giá trị của đặc tính list-style-type trong thuộc tính style bằng một trong 4 giá trị: disc (chấm tròn đặc — mặc định), circle (vòng tròn rỗng), square (hình vuông) và none (không có ký tự).",
  },
  {
    id: "b9-06",
    q: "Danh sách mô tả trong HTML dùng để làm gì và được tạo bằng những thẻ nào?",
    options: [
      "Liệt kê các mục kèm mô tả cho từng mục, dùng thẻ <dl>, <dt> và <dd>",
      "Liệt kê các mục kèm số thứ tự tự động, dùng thẻ <dl>, <li> và <dd>",
      "Liệt kê các mục kèm hình ảnh minh hoạ, dùng thẻ <dl>, <dt> và <img>",
      "Liệt kê các mục lồng nhau nhiều cấp, dùng thẻ <dl>, <ol> và <ul>",
    ],
    answer: 0,
    explain:
      "Danh sách mô tả dùng để liệt kê các mục kèm với mô tả cho từng mục. Để tạo danh sách mô tả, dùng ba thẻ: <dl> (bao ngoài toàn danh sách), <dt> (tên mục) và <dd> (mô tả của mục đó).",
  },
  {
    id: "b9-07",
    q: "Để tạo danh sách lồng nhau trong HTML, ta đặt danh sách con ở vị trí nào?",
    options: [
      "Bên trong cặp thẻ <li></li> của mục tương ứng trong danh sách cha",
      "Bên ngoài cặp thẻ danh sách cha, ngay sau thẻ kết thúc </ol> hoặc </ul>",
      "Bên trong cặp thẻ <dt></dt> của danh sách mô tả cấp trên",
      "Bên trong thẻ <table> để tạo bố cục nhiều cột cho danh sách",
    ],
    answer: 0,
    explain:
      "Có thể tạo ra các danh sách lồng nhau bằng cách để một danh sách là một mục của một danh sách khác — bằng cách đặt danh sách đó bên trong cụm thẻ <li></li> của mục tương ứng.",
  },
  {
    id: "b9-08",
    q: "Phần tử bảng trong HTML được tạo bởi những thẻ chính nào?",
    options: [
      "<table> tạo bảng, <tr> tạo hàng, <td> tạo ô dữ liệu, <th> tạo ô tiêu đề",
      "<table> tạo bảng, <row> tạo hàng, <col> tạo cột, <cell> tạo ô dữ liệu",
      "<table> tạo bảng, <tr> tạo hàng, <td> tạo cột, <caption> tạo ô dữ liệu",
      "<grid> tạo bảng, <tr> tạo hàng, <td> tạo ô dữ liệu, <th> tạo tiêu đề",
    ],
    answer: 0,
    explain:
      "Phần tử bảng được tạo bởi các thẻ chính: <table> — tạo bảng; <tr> — tạo hàng; <td> — tạo các ô dữ liệu; <th> — tạo ô tiêu đề. Ngoài ra còn có <caption> để thêm tiêu đề cho bảng.",
  },
  {
    id: "b9-09",
    q: "Thẻ <caption> trong bảng HTML được đặt ở vị trí nào?",
    options: [
      "Ngay sau thẻ <table> và trước thẻ <tr> đầu tiên",
      "Ngay trước thẻ </table> tức là sau hàng cuối cùng",
      "Bên trong ô <td> đầu tiên của hàng đầu tiên trong bảng",
      "Bên ngoài thẻ <table>, ngay phía trên thẻ bắt đầu <table>",
    ],
    answer: 0,
    explain:
      "Để thêm tiêu đề cho bảng, sử dụng thẻ <caption>, đặt ngay sau thẻ <table> và trước thẻ <tr> đầu tiên. Ví dụ: <table><caption>Hoá đơn</caption><tr>...</tr></table> — bảng sẽ hiện tiêu đề là \"Hoá đơn\".",
  },
  {
    id: "b9-10",
    q: "Để tạo khung viền cho bảng HTML5, cách làm nào được SGK Tin học 12 hướng dẫn?",
    options: [
      "Dùng thuộc tính con border trong thuộc tính style với cú pháp \"độ_dày_px kiểu_viền [màu_viền]\"",
      "Dùng thuộc tính border đặt trực tiếp trong thẻ <table> với giá trị là số nguyên dương chỉ độ dày",
      "Dùng thẻ đặc biệt <border> đặt ngay bên trong cặp thẻ <table>…</table> để tạo khung bao quanh",
      "Dùng thẻ <frame> đặt bao phía ngoài toàn bộ cặp thẻ <table>…</table> để tạo khung viền ngoài",
    ],
    answer: 0,
    explain:
      "Trong HTML5, độ dày khung được thiết lập cho viền khung bảng hoặc khung từng ô bảng bằng thuộc tính con border của thuộc tính style. Giá trị là một bộ ba thuộc tính nhỏ hơn: độ dày (px), kiểu viền (solid/dotted/double/none), và màu viền (có thể bỏ qua — mặc định là màu đen).",
  },
  {
    id: "b9-11",
    q: "Trong HTML, kiểu viền bảng nào là không hợp lệ theo SGK Tin học 12?",
    options: [
      "dashed — viền nét đứt đoạn ngắt quãng",
      "solid — viền nét liền liên tục",
      "dotted — viền nét chấm bi",
      "double — viền nét đôi song song",
    ],
    answer: 0,
    explain:
      "SGK liệt kê bốn kiểu viền hợp lệ cho thuộc tính border là: solid (nét liền), dotted (nét chấm), double (nét đôi) và none (không có viền). Kiểu dashed (nét đứt) không được đề cập trong SGK Tin học 12.",
  },
  {
    id: "b9-12",
    q: "Thuộc tính colspan=\"3\" trong thẻ <td> có tác dụng gì?",
    options: [
      "Ô đó được mở rộng chiếm 3 cột liền kề trong cùng hàng",
      "Ô đó được mở rộng chiếm 3 hàng liền kề trong cùng cột",
      "Ô đó có chiều rộng bằng 3% của chiều rộng toàn bảng",
      "Ô đó có độ dày viền là 3 pixel so với các ô xung quanh",
    ],
    answer: 0,
    explain:
      "Thuộc tính colspan dùng để gộp ô theo cột: colspan=\"3\" có nghĩa ô đó mở rộng chiếm 3 cột liền kề trong cùng hàng. Ngược lại, rowspan dùng để gộp ô theo hàng. Khi dùng rowspan hoặc colspan, các ô bị gộp ở hàng/cột tiếp theo phải bỏ qua (không viết thêm thẻ <td>/<th>).",
  },
  {
    id: "b9-13",
    q: "Khi dùng rowspan=\"2\" cho một ô ở hàng đầu tiên, cần xử lí hàng tiếp theo thế nào?",
    options: [
      "Bỏ qua thẻ <th> hoặc <td> tại vị trí tương ứng của hàng tiếp theo",
      "Thêm thuộc tính rowspan=\"1\" cho thẻ <td> ở hàng tiếp theo",
      "Lặp lại nội dung của ô đó trong thẻ <td> của hàng tiếp theo",
      "Đặt thẻ <td></td> rỗng vào vị trí tương ứng để giữ chỗ trống",
    ],
    answer: 0,
    explain:
      "Khi dùng rowspan=\"2\" cho ô ở hàng đầu tiên, ô đó sẽ chiếm cả hàng tiếp theo. Ở hàng tiếp theo, ta bỏ qua cặp thẻ <th> hoặc <td> tại vị trí tương ứng (nếu đặt rowspan=\"3\" thì bỏ qua hai hàng tiếp theo).",
  },
  {
    id: "b9-14",
    q: "Để thiết lập chiều rộng của bảng bằng 80% phần hiển thị chữ và chiều cao 400px, ta viết thuộc tính style của thẻ <table> như thế nào?",
    options: [
      'style="width:80%;height:400px"',
      'style="width:80px;height:400%"',
      'style="table-width:80%;table-height:400px"',
      'style="size:80% 400px"',
    ],
    answer: 0,
    explain:
      "Để điều chỉnh kích thước bảng, sử dụng đặc tính con width và height của thuộc tính style. Kích thước có thể đặt theo tỉ lệ (%) hoặc theo số điểm ảnh (px). Ví dụ: style=\"width:80%;height:400px\" cho bảng chiều rộng 80% phần hiển thị và cao 400px.",
  },
  {
    id: "b9-15",
    q: "Lưu ý nào sau đây về kích thước bảng HTML là đúng theo SGK?",
    options: [
      "Không nên dùng kích thước theo px vì thiết bị khác nhau có số điểm ảnh khác nhau, dễ hiển thị sai",
      "Nên dùng kích thước theo px để bảng giữ nguyên kích thước cố định trên mọi loại thiết bị",
      "Chỉ được dùng kích thước theo % cho chiều cao hàng, còn chiều rộng cột thì chỉ dùng px",
      "Không cần thiết lập kích thước vì trình duyệt luôn tự căn chỉnh bảng cho phù hợp màn hình",
    ],
    answer: 0,
    explain:
      "SGK lưu ý: Không nên sử dụng kích thước theo px do các thiết bị hiển thị có sự khác nhau về kích thước và số điểm ảnh, có thể dẫn đến bảng không hiển thị đúng như mong đợi. Nên dùng kích thước tỉ lệ (%) để bảng tự điều chỉnh theo thiết bị.",
  },
  {
    id: "b9-16",
    q: "Điểm khác biệt giữa thẻ <td> và thẻ <th> trong bảng HTML là gì?",
    options: [
      "<th> tạo ô tiêu đề — thường in đậm và căn giữa, <td> tạo ô dữ liệu thông thường",
      "<th> tạo ô ở cột đầu tiên, <td> tạo tất cả các ô ở những cột còn lại",
      "<th> tạo hàng tiêu đề duy nhất ở trên cùng, <td> tạo tất cả các hàng còn lại",
      "<th> dùng để gộp ô theo hàng, <td> dùng để gộp ô theo cột",
    ],
    answer: 0,
    explain:
      "Trong bảng HTML, <td> tạo các ô dữ liệu thông thường, còn <th> tạo ô tiêu đề — trình duyệt thường hiển thị nội dung <th> in đậm và căn giữa để phân biệt với ô dữ liệu. Cả hai đều có thể xuất hiện ở bất kì vị trí hàng/cột nào.",
  },
  {
    id: "b9-17",
    q: "Đoạn mã dưới đây tạo ra bảng có bao nhiêu hàng và bao nhiêu cột hiển thị?",
    code: "<table>\n  <tr><th>Tên</th><th>Điểm</th></tr>\n  <tr><td>An</td><td>9</td></tr>\n  <tr><td>Bình</td><td>8</td></tr>\n</table>",
    options: [
      "3 hàng, 2 cột — hàng đầu là tiêu đề, hai hàng sau là dữ liệu",
      "2 hàng, 2 cột — chỉ đếm hàng <td>, không đếm hàng tiêu đề <th>",
      "3 hàng, 3 cột — mỗi thẻ <tr> là một hàng, mỗi thẻ <th> là một cột",
      "2 hàng, 3 cột — hàng <th> và <td> gộp thành một, mỗi ô là một cột",
    ],
    answer: 0,
    explain:
      "Có 3 cặp thẻ <tr>...</tr> nên bảng có 3 hàng. Mỗi hàng có 2 ô (hàng đầu là 2 ô <th>, hai hàng sau là 2 ô <td>) nên bảng có 2 cột. Thẻ <th> và <td> đều tạo ra ô trong bảng, đều được đếm vào số cột.",
  },
  {
    id: "b9-18",
    q: "Trong danh sách mô tả, thẻ <dt> và thẻ <dd> có vai trò gì?",
    options: [
      "<dt> là tên mục, <dd> là phần mô tả hoặc định nghĩa của mục đó",
      "<dt> là tiêu đề toàn danh sách, <dd> là từng mục con bên trong",
      "<dt> là mục có thứ tự, <dd> là mục không có thứ tự trong cùng danh sách",
      "<dt> tạo dòng kẻ ngang phân cách, <dd> chứa nội dung giữa hai dòng kẻ",
    ],
    answer: 0,
    explain:
      "Trong danh sách mô tả (<dl>), <dt> (Definition Term) chứa tên mục — chẳng hạn một thuật ngữ hoặc một nhãn; còn <dd> (Definition Description) chứa phần mô tả hoặc định nghĩa tương ứng của mục đó.",
  },
];

export default questions;
