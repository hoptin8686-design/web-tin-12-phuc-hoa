import type { Question } from "@/lib/types";

// Bài 12. Tạo biểu mẫu (SGK trang 67-70)
// 1. Biểu mẫu web: dùng để thu thập dữ liệu; định nghĩa bởi thẻ <form>.
// 2. <label for="id">: nhãn liên kết với input, khi nhấn vào nhãn con trỏ vào input.
// 3. <input id type name [value]>: thẻ đơn.
//    - type="text": trường văn bản. type="password": mật khẩu (che).
//    - type="radio" value: chọn 1 trong nhóm cùng name.
//    - type="checkbox" value: chọn có/không; cần value để ghi nhận.
//    - type="button" value="tên nút": nút bấm.
//    - type="file": chọn tệp tải lên. type="submit" value: gửi form.
//    - type="number": nhập số. type="date": chọn ngày.
// 4. <select name><option value>...</option></select>: danh sách thả xuống.
// 5. <textarea name rows cols>Nội dung</textarea>: vùng nhập nhiều dòng.
// 6. <fieldset>...</fieldset> + <legend>: nhóm phần tử có khung hình chữ nhật.
const questions: Question[] = [
  {
    id: "b12-01",
    q: "Biểu mẫu web (form) trong HTML dùng để làm gì?",
    options: [
      "Thu thập dữ liệu từ người dùng để xử lý tại chỗ hoặc gửi về máy chủ",
      "Hiển thị bảng dữ liệu có viền và căn chỉnh cột giống như bảng tính Excel",
      "Tạo danh sách thả xuống cho phép người dùng chọn một mục bất kì",
      "Định dạng và in văn bản trang web ra giấy theo khuôn khổ đã thiết lập",
    ],
    answer: 0,
    explain:
      "Biểu mẫu web hay phần tử form của HTML là một công cụ dùng để thu thập dữ liệu. Dữ liệu được người dùng nhập vào form và xử lí tại chỗ hoặc gửi về máy chủ. Ta thường xuyên gặp các biểu mẫu (form) khi đăng kí tài khoản, mua hàng, tìm kiếm thông tin,...",
  },
  {
    id: "b12-02",
    q: "Biểu mẫu web đầy đủ gồm mấy thành phần? Thành phần nào thuộc phạm vi HTML?",
    options: [
      "Hai thành phần: biểu mẫu hiển thị trên web (HTML) và ứng dụng/script xử lí dữ liệu (không thuộc HTML)",
      "Một thành phần: toàn bộ biểu mẫu kể cả xử lí dữ liệu đều được viết bằng HTML",
      "Ba thành phần: giao diện, xử lí và lưu trữ — cả ba đều được viết bằng HTML5",
      "Hai thành phần: cả hai đều là mã HTML, một phần chạy trên trình duyệt và một phần chạy trên máy chủ",
    ],
    answer: 0,
    explain:
      "Biểu mẫu web đầy đủ có hai thành phần: (1) Biểu mẫu hiển thị trên web — được tạo bởi các đoạn mã HTML, dùng để người dùng nhập và gửi thông tin. (2) Ứng dụng hoặc script xử lí dữ liệu — thường nằm trên máy chủ, không thuộc phạm vi ngôn ngữ HTML.",
  },
  {
    id: "b12-03",
    q: "Thẻ nào bao ngoài toàn bộ biểu mẫu HTML?",
    options: [
      "Cặp thẻ <form>…</form> bao ngoài tất cả các phần tử của biểu mẫu",
      "Cặp thẻ <fieldset>…</fieldset> bao ngoài tất cả các phần tử biểu mẫu",
      "Cặp thẻ <input>…</input> bao ngoài tất cả các trường nhập liệu",
      "Cặp thẻ <table>…</table> bao ngoài các phần tử để căn chỉnh bố cục",
    ],
    answer: 0,
    explain:
      "Biểu mẫu web được tạo bởi thẻ <form> có cấu trúc: <form>các phần tử của biểu mẫu</form>. Các phần tử thường dùng bên trong gồm: input, label, select, textarea, fieldset, legend, datalist,...",
  },
  {
    id: "b12-04",
    q: "Phần tử <label> trong biểu mẫu HTML có tác dụng gì?",
    options: [
      "Định nghĩa nhãn cho input; khi nhấn vào nhãn, con trỏ chuột được đưa vào vùng input tương ứng",
      "Tạo ra một trường nhập liệu tuỳ chỉnh để người dùng có thể điền thông tin chi tiết vào biểu mẫu",
      "Định nghĩa một nhóm các phần tử biểu mẫu và vẽ khung hình chữ nhật bao quanh toàn bộ nhóm đó",
      "Tạo ra nút bấm chức năng để người dùng gửi toàn bộ thông tin về máy chủ khi đã hoàn thành điền",
    ],
    answer: 0,
    explain:
      "Phần tử label định nghĩa nhãn, có cấu trúc: <label for=\"mã_định_danh_của_input_tương_ứng\">Tên_nhãn</label>. Về mặt hiển thị không có gì đặc biệt, tuy nhiên khi nháy chuột vào Tên_nhãn, con trỏ chuột sẽ được đưa vào vùng của phần tử input được xác định bởi thuộc tính for.",
  },
  {
    id: "b12-05",
    q: "Thuộc tính for trong thẻ <label> có tác dụng gì?",
    options: [
      "Liên kết nhãn với phần tử input có id trùng với giá trị của for",
      "Xác định kiểu dữ liệu mà ô nhập liệu tương ứng được phép nhận vào",
      "Chỉ định màu sắc và kích thước chữ của nhãn hiển thị trên biểu mẫu",
      "Thiết lập số lượng ký tự tối đa mà người dùng có thể nhập vào ô liên kết",
    ],
    answer: 0,
    explain:
      "Thuộc tính for trong thẻ <label> liên kết nhãn với phần tử input có id trùng với giá trị của for. Khi nhấn vào nhãn, con trỏ chuột sẽ di chuyển tới phần tử input tương ứng — giúp người dùng tương tác dễ hơn.",
  },
  {
    id: "b12-06",
    q: "Phần tử <input> trong biểu mẫu HTML có đặc điểm gì đáng chú ý?",
    options: [
      "Là thẻ đơn (không có thẻ kết thúc); thuộc tính type xác định loại dữ liệu nhập",
      "Là thẻ đôi phải có thẻ kết thúc </input>; bắt buộc phải có thuộc tính value",
      "Chỉ tạo được trường nhập văn bản, không tạo được nút bấm hay ô chọn",
      "Không cần thuộc tính id vì phần tử input tự động liên kết với label gần nhất",
    ],
    answer: 0,
    explain:
      "Phần tử input xác định vùng nhập dữ liệu. Input xác định bởi thẻ đơn, không cần thẻ kết thúc. Cấu trúc: <input id=\"mã_định_danh\" type=\"loại_input\" name=\"tên_input\">. Thuộc tính type xác định loại dữ liệu mà phần tử input chứa.",
  },
  {
    id: "b12-07",
    q: "Điểm khác biệt giữa type=\"radio\" và type=\"checkbox\" là gì?",
    options: [
      "radio chỉ cho chọn một giá trị duy nhất trong nhóm cùng name; checkbox cho chọn có hoặc không độc lập",
      "radio được thiết kế hiển thị dạng ô vuông tích chọn; trong khi đó checkbox hiển thị dạng ô tròn chọn",
      "radio chỉ được dùng trong biểu mẫu đăng ký thành viên; checkbox chỉ dùng trong biểu mẫu công cụ tìm kiếm",
      "radio bắt buộc phải có thuộc tính name; checkbox không cần name vì mỗi ô hoạt động độc lập hoàn toàn",
    ],
    answer: 0,
    explain:
      "type=\"radio\": tạo ra ô chọn 1 giá trị duy nhất trong các phần tử checkbox cùng tên (name). type=\"checkbox\": tạo ra ô lựa chọn giá trị có hoặc không. Mỗi ô radio và checkbox cần thêm thuộc tính value để ghi nhận giá trị.",
  },
  {
    id: "b12-08",
    q: "Thuộc tính name trong phần tử <input> có tác dụng gì?",
    options: [
      "Dùng khi xử lí: tên_input được sử dụng để tham chiếu tới dữ liệu đã nhập khi tính toán hay gửi tới máy chủ",
      "Xác định nhãn văn bản hiển thị phía trên ô nhập liệu để người dùng có thể biết cần phải nhập thông tin gì",
      "Thiết lập sẵn giá trị mặc định sẽ được hiển thị trong ô nhập liệu khi trang web vừa mới được trình duyệt mở",
      "Giới hạn số lượng ký tự tối đa được phép nhập vào ô tương ứng nhằm bảo vệ và tối ưu hoá cơ sở dữ liệu nền",
    ],
    answer: 0,
    explain:
      "Thuộc tính name được sử dụng cho input khi thực hiện xử lí. Nghĩa là, tên_input được sử dụng để tham chiếu tới dữ liệu đã nhập khi thực hiện tính toán hay gửi tới máy chủ. Đây là thuộc tính bắt buộc phải có khi muốn gửi dữ liệu form lên máy chủ.",
  },
  {
    id: "b12-09",
    q: "Để tạo nút gửi thông tin trong biểu mẫu HTML, dùng cú pháp nào?",
    options: [
      '<input type="submit" value="Gửi thông tin">',
      '<input type="button" value="Gửi thông tin">',
      '<input type="send" value="Gửi thông tin">',
      '<button type="form" value="Gửi thông tin">',
    ],
    answer: 0,
    explain:
      "type=\"submit\" tạo ra nút để gửi thông tin đến máy chủ — trình duyệt sẽ gọi tới đường dẫn chỉ định tại thuộc tính action của thẻ <form>. Cần thêm thuộc tính value như button. Khác với type=\"button\" chỉ là nút bấm thông thường không tự gửi form.",
  },
  {
    id: "b12-10",
    q: "Phần tử <select> trong biểu mẫu HTML có tác dụng gì?",
    options: [
      "Cho phép người dùng chọn một trong các lựa chọn trong danh sách thả xuống",
      "Tạo ra một trường nhập liệu để người dùng điền văn bản ngắn một dòng",
      "Tạo ra vùng nhập văn bản nhiều dòng có thể kéo giãn kích thước tuỳ ý",
      "Tạo nút tải tệp lên máy chủ kèm thanh tiến trình hiển thị tiến độ tải",
    ],
    answer: 0,
    explain:
      "Phần tử select có tác dụng cho phép người dùng chọn một trong các lựa chọn trong danh sách thả xuống. Phần tử select chứa nhiều thẻ option, mỗi cặp định nghĩa một lựa chọn trong danh sách. Cấu trúc: <select name><option value>giá_trị_lựa_chọn</option>...</select>.",
  },
  {
    id: "b12-11",
    q: "Phần tử <textarea> khác <input type=\"text\"> ở điểm nào?",
    options: [
      "<textarea> xác định vùng nhập văn bản nhiều dòng nhiều cột; <input type=\"text\"> chỉ nhập một dòng ngắn",
      "<textarea> chỉ nhận văn bản thuần túy; <input type=\"text\"> nhận được cả chữ lẫn số và ký hiệu",
      "<textarea> là thẻ đơn không có thẻ kết thúc; <input type=\"text\"> là thẻ đôi có thẻ kết thúc",
      "<textarea> bắt buộc phải nằm trong <fieldset>; <input type=\"text\"> có thể đặt bất kỳ đâu trong form",
    ],
    answer: 0,
    explain:
      "Phần tử textarea xác định một vùng nhập văn bản có nhiều dòng và cột. Cấu trúc: <textarea name rows=\"số_dòng\" cols=\"số_cột\">Nội_dung</textarea>. Nếu không để Nội_dung trong thẻ, vùng nhập văn bản là vùng trắng.",
  },
  {
    id: "b12-12",
    q: "Phần tử <fieldset> trong biểu mẫu HTML có tác dụng gì?",
    options: [
      "Nhóm các phần tử có liên quan bằng cách vẽ khung hình chữ nhật bao quanh chúng",
      "Định nghĩa nhãn văn bản hiển thị phía trên phần tử input tương ứng",
      "Tạo vùng nhập văn bản nhiều dòng có thể cuộn ngang và cuộn dọc",
      "Gửi dữ liệu biểu mẫu tới địa chỉ URL chỉ định trong thuộc tính action",
    ],
    answer: 0,
    explain:
      "Phần tử fieldset dùng để nhóm các phần tử có liên quan trong biểu mẫu bằng cách vẽ một hình chữ nhật bao quanh các phần tử đặt trong cặp thẻ <fieldset>...</fieldset>. Ta có thể thêm tên nhóm phần tử bằng cách đặt phần tử legend trong phần tử fieldset tương ứng.",
  },
  {
    id: "b12-13",
    q: "Để liên kết phần tử <label> với phần tử <input>, cần thiết lập điều kiện gì?",
    options: [
      "Giá trị thuộc tính for của <label> phải trùng với giá trị thuộc tính id của <input>",
      "Giá trị thuộc tính for của <label> phải hoàn toàn trùng khớp với giá trị thuộc tính name của <input>",
      "Thẻ <label> luôn luôn phải được đặt ngay vị trí phía trước thẻ <input> tương ứng bên trong mã HTML",
      "Thẻ <label> bắt buộc phải được đặt lồng vào bên trong cặp thẻ <input>…</input> tương ứng của biểu mẫu",
    ],
    answer: 0,
    explain:
      "Để liên kết nhãn với ô nhập liệu: giá trị thuộc tính for của <label> phải trùng với giá trị thuộc tính id của <input> tương ứng. Ví dụ: <label for=\"monan\">Tên món ăn</label> liên kết với <input id=\"monan\" type=\"text\">.",
  },
  {
    id: "b12-14",
    q: "Tại sao phần tử <input> chỉ dùng để nhập dữ liệu nhưng muốn có thông tin về nội dung nhập phải tạo kèm <label>?",
    options: [
      "Vì phần tử input chỉ tạo ô nhập liệu — không tự hiển thị hướng dẫn; label mới cung cấp tên/nhãn mô tả",
      "Vì phần tử input không thể nhận sự kiện nhấn chuột nếu như không được bao bọc trực tiếp bởi thẻ label",
      "Vì trình duyệt sẽ lập tức báo lỗi và từ chối hiển thị biểu mẫu nếu input không có label đi kèm theo nó",
      "Vì phần tử input chỉ nhận dữ liệu dạng số; thẻ label là thành phần cần thiết để cho phép nhập văn bản",
    ],
    answer: 0,
    explain:
      "SGK lưu ý: phần tử input chỉ dùng để nhập dữ liệu, muốn có thông tin về nội dung nhập phải tạo kèm label. Phần tử input chỉ tạo ô nhập liệu trống — không tự hiển thị hướng dẫn hay tên trường; phần tử label mới cung cấp nhãn mô tả cho ô đó.",
  },
  {
    id: "b12-15",
    q: "Để tạo biểu mẫu đăng kí thi tốt nghiệp có trường Giới tính (Nam/Nữ chọn một), dùng loại input nào?",
    options: [
      'type="radio" — chọn đúng một trong nhóm phần tử cùng name',
      'type="checkbox" — chọn có hoặc không cho từng giá trị độc lập',
      'type="text" — nhập tên giới tính dưới dạng văn bản tự do',
      'type="select" — tạo danh sách thả xuống chứa các lựa chọn',
    ],
    answer: 0,
    explain:
      "type=\"radio\" tạo ra ô chọn 1 giá trị duy nhất trong các phần tử cùng name. Đây là lựa chọn phù hợp cho trường Giới tính vì chỉ được chọn đúng một trong hai giá trị Nam hoặc Nữ. Các radio cùng name tạo thành một nhóm.",
  },
  {
    id: "b12-16",
    q: "Đoạn mã dưới đây tạo ra phần tử nào trong biểu mẫu?",
    code: '<select id="lop" name="lop">\n  <option value="10">10</option>\n  <option value="11">11</option>\n  <option value="12">12</option>\n</select>',
    options: [
      "Danh sách thả xuống cho phép chọn lớp 10, 11 hoặc 12",
      "Nhóm ba ô radio để chọn một trong ba lớp",
      "Nhóm ba ô checkbox để chọn một hoặc nhiều lớp",
      "Vùng nhập văn bản nhiều dòng gợi ý sẵn 10, 11, 12",
    ],
    answer: 0,
    explain:
      "Thẻ <select> tạo ra danh sách thả xuống. Mỗi thẻ <option> định nghĩa một lựa chọn trong danh sách: giá trị thuộc tính value là dữ liệu được gửi đi, còn nội dung giữa cặp thẻ là văn bản hiển thị cho người dùng thấy.",
  },
];

export default questions;
