import type { Question } from "@/lib/types";

// Bài 8. Định dạng văn bản (SGK trang 46-51)
// 1. Thuộc tính thẻ: cú pháp tên_thuộc_tính="giá_trị", vị trí trong thẻ bắt đầu,
//    nhiều thuộc tính ngăn cách bởi dấu cách, thuộc tính style dùng để định dạng.
// 2. Các thẻ định dạng trình bày văn bản: <hx> (x=1..6), <p>, <div>, <span>, <br>, <hr>.
// 3. Các thẻ định dạng phông chữ: <strong>/<b>, <em>/<i>, <u>, <mark>, <small>,
//    <sup>, <sub>, <del>; định dạng phông qua style: color, font-family, font-size.
const questions: Question[] = [
  {
    id: "b8-01",
    q: "Thuộc tính của thẻ HTML có tác dụng gì?",
    options: [
      "Bổ sung thông tin, làm rõ cách xử lí mà thẻ chỉ định",
      "Thay thế hoàn toàn vai trò của thẻ trong trang web",
      "Bắt buộc xuất hiện ở mọi thẻ, nếu thiếu trang sẽ lỗi",
      "Xác định nội dung văn bản hiển thị giữa cặp thẻ đó",
    ],
    answer: 0,
    explain:
      "Thuộc tính của thẻ có tác dụng bổ sung thông tin, làm rõ các điều khiển được thẻ chỉ định. Thẻ có thể có hoặc không có thuộc tính — không phải thẻ nào cũng bắt buộc có thuộc tính.",
  },
  {
    id: "b8-02",
    q: "Thuộc tính của thẻ HTML được đặt ở vị trí nào trong câu lệnh?",
    options: [
      "Nằm trong thẻ bắt đầu, sau tên thẻ",
      "Nằm trong thẻ kết thúc, trước dấu gạch chéo",
      "Nằm giữa thẻ bắt đầu và thẻ kết thúc, sau nội dung",
      "Nằm ngoài cả cặp thẻ, trước thẻ bắt đầu",
    ],
    answer: 0,
    explain:
      "Thuộc tính nằm trong thẻ bắt đầu (không nằm trong thẻ kết thúc), sau tên thẻ. Khi thẻ có nhiều hơn một thuộc tính thì các thuộc tính được ngăn cách bởi dấu cách.",
  },
  {
    id: "b8-03",
    q: "Cú pháp xác định một thuộc tính HTML (trừ trường hợp đặc biệt chỉ cần tên thuộc tính) là gì?",
    options: [
      'tên_thuộc_tính="giá_trị"',
      "tên_thuộc_tính: giá_trị",
      "tên_thuộc_tính { giá_trị }",
      "tên_thuộc_tính(giá_trị)",
    ],
    answer: 0,
    explain:
      'Cú pháp xác định thuộc tính là tên_thuộc_tính="giá_trị". Cú pháp "tên: giá_trị" là của CSS, còn "tên { giá_trị }" và "tên(giá_trị)" là của các ngôn ngữ lập trình khác, không dùng trong HTML.',
  },
  {
    id: "b8-04",
    q: "Thuộc tính nào của HTML được dùng để thiết lập định dạng văn bản như màu sắc, phông chữ, cỡ chữ ngay tại vị trí phần tử được viết?",
    options: [
      "Thuộc tính style",
      "Thuộc tính class",
      "Thuộc tính id",
      "Thuộc tính type",
    ],
    answer: 0,
    explain:
      "Một trong những thuộc tính được sử dụng thường xuyên nhất là thuộc tính style, dùng để thiết lập định dạng văn bản như chọn màu sắc, phông chữ, cỡ chữ, kiểu chữ, căn lề, tạo khung,… cho một phần tử HTML ngay tại vị trí được viết.",
  },
  {
    id: "b8-05",
    q: "Khi muốn thực hiện nhiều định dạng phông đồng thời trong thuộc tính style, các cặp tên:giá_trị được ngăn cách với nhau bằng dấu gì?",
    options: [
      "Dấu chấm phẩy (;)",
      "Dấu phẩy (,)",
      "Dấu gạch đứng (|)",
      "Dấu hai chấm (:)",
    ],
    answer: 0,
    explain:
      'Khi muốn thực hiện nhiều định dạng phông đồng thời, ta đặt các cặp tên:giá_trị trong phần giá trị của thuộc tính style, ngăn cách nhau bởi dấu chấm phẩy ";". Ví dụ: style="color:red;font-family:Arial;font-size:15px".',
  },
  {
    id: "b8-06",
    q: "Thẻ <h1> đến <h6> dùng để làm gì, và độ quan trọng thay đổi như thế nào?",
    options: [
      "Định dạng tiêu đề, độ quan trọng giảm dần từ <h1> tới <h6>",
      "Định dạng tiêu đề, độ quan trọng tăng dần từ <h1> tới <h6>",
      "Định dạng đoạn văn bản, cỡ chữ giảm dần từ <h1> tới <h6>",
      "Định dạng khối nội dung, mỗi mức h là một phong cách khác nhau",
    ],
    answer: 0,
    explain:
      "Các thẻ dạng <hx> (x nhận giá trị từ 1 đến 6) dùng để định dạng tiêu đề, thể hiện độ quan trọng giảm dần của nội dung. <h1> là tiêu đề chính hay tiêu đề chung của cả văn bản; các tiêu đề ở mức thấp hơn dùng <h2> và tiếp tục với các mức tiếp theo.",
  },
  {
    id: "b8-07",
    q: "Thẻ <p> trong HTML được dùng để làm gì?",
    options: [
      "Xác định một đoạn văn bản, trình duyệt hiển thị trên dòng mới với khoảng trống nhỏ trước và sau",
      "Tạo một khối chứa nhiều loại nội dung, bắt đầu trên dòng mới, thường dùng thay thế cho thẻ <p>",
      "Định dạng phông chữ cho một cụm từ ngắn nằm ngay trong dòng đang viết, không tạo dòng mới",
      "Chèn một dòng kẻ ngang nằm ngang trang để phân cách các phần nội dung với nhau",
    ],
    answer: 0,
    explain:
      "Cách đơn giản nhất để xác định đoạn là đặt nội dung đoạn trong cặp thẻ <p>Nội dung</p>. Khi gặp cặp thẻ <p>...</p> trình duyệt sẽ hiển thị nội dung đoạn trên dòng mới kèm với khoảng trống nhỏ trước và sau đoạn.",
  },
  {
    id: "b8-08",
    q: "Điểm khác biệt chính giữa phần tử <div> và phần tử <span> là gì?",
    options: [
      "<div> là khối bắt đầu trên dòng mới, <span> dùng cho quy mô nhỏ hơn, nội dung hiển thị trên cùng dòng đang viết",
      "<div> chỉ chứa được văn bản thuần tuý, không chứa hình ảnh hay bảng, còn <span> chứa được mọi loại nội dung",
      "<div> chủ yếu dùng để định dạng màu sắc và phông chữ, còn <span> dùng để tạo bố cục và phân chia vùng trang",
      "<div> là thẻ đơn chỉ có thẻ bắt đầu mà không có thẻ kết thúc, còn <span> là thẻ đôi có đủ cả hai thẻ",
    ],
    answer: 0,
    explain:
      "Cả <div> và <span> đều tạo khối chứa nội dung bất kì. Điểm khác: phần tử <div> là một khối, bắt đầu trên dòng mới; trong khi phần tử <span> có tác dụng tương tự nhưng sử dụng cho quy mô nhỏ hơn, nội dung khối hiển thị trên cùng dòng đang viết.",
  },
  {
    id: "b8-09",
    q: "Đoạn mã dưới đây hiển thị trên trình duyệt thành mấy dòng?",
    code: "<p>Thẻ p tạo đoạn nội dung.</p><p>Thẻ div tạo khối chứa dữ liệu.</p><p>Các thẻ này <br> không có hình thức trình bày riêng.</p>",
    options: [
      "4 dòng — mỗi <p> một dòng và <br> tạo thêm một dòng trong đoạn thứ ba",
      "3 dòng — mỗi thẻ <p> tạo một đoạn, thẻ <br> không ảnh hưởng thêm",
      "1 dòng — trình duyệt bỏ qua mọi xuống dòng kể cả <br> trong <p>",
      "6 dòng — thẻ mở và thẻ đóng của mỗi cặp thẻ đều tạo ra một dòng",
    ],
    answer: 0,
    explain:
      "Ba thẻ <p> tạo ra 3 đoạn, mỗi đoạn bắt đầu trên dòng mới. Bên trong đoạn thứ ba có thêm thẻ <br> (xuống dòng), nên nội dung đoạn thứ ba hiển thị trên 2 dòng. Tổng cộng là 4 dòng.",
  },
  {
    id: "b8-10",
    q: "Trong HTML, để in đậm một cụm từ, ta nên dùng thẻ nào trong số các thẻ sau?",
    options: [
      "<strong> hoặc <b>",
      "<em> hoặc <i>",
      "<mark> hoặc <u>",
      "<sup> hoặc <sub>",
    ],
    answer: 0,
    explain:
      "Để định dạng chữ đậm, ta dùng thẻ <strong> hoặc <b>. Cả hai có cùng tác dụng hiển thị, nhưng <strong> có ý nghĩa nhấn mạnh vào ngữ nghĩa của nội dung và được khuyến khích sử dụng nhiều hơn trong định dạng văn bản.",
  },
  {
    id: "b8-11",
    q: "Đoạn mã dưới đây hiển thị kết quả như thế nào trên trình duyệt?",
    code: "<p>Môn <em>Tin học</em> rất hay.</p>",
    options: [
      "Chữ \"Tin học\" in nghiêng, phần còn lại bình thường",
      "Chữ \"Tin học\" in đậm, phần còn lại bình thường",
      "Chữ \"Tin học\" có gạch chân, phần còn lại bình thường",
      "Cả câu đều in nghiêng vì thẻ <em> bao ngoài thẻ <p>",
    ],
    answer: 0,
    explain:
      "Thẻ <em> dùng để định dạng chữ nghiêng (in nghiêng). Vì thẻ <em> chỉ bao quanh cụm từ \"Tin học\" nên chỉ cụm từ đó được in nghiêng, phần còn lại hiển thị bình thường.",
  },
  {
    id: "b8-12",
    q: "Thẻ nào dùng để đánh dấu xoá (hiển thị chữ bị gạch ngang giữa)?",
    options: [
      "<del>",
      "<u>",
      "<mark>",
      "<small>",
    ],
    answer: 0,
    explain:
      "Thẻ <del> dùng để đánh dấu xoá — hiển thị bằng nét gạch giữa chữ, ý nghĩa là nội dung đó đã bị xoá hoặc không còn hiệu lực. Thẻ <u> là gạch chân, <mark> là đánh dấu highlight, <small> là giảm cỡ chữ.",
  },
  {
    id: "b8-13",
    q: "Để viết số mũ (ví dụ: x²) trong HTML, ta dùng thẻ nào?",
    options: [
      "<sup>",
      "<sub>",
      "<small>",
      "<strong>",
    ],
    answer: 0,
    explain:
      "Thẻ <sup> dùng để viết chỉ số trên (số mũ), ví dụ ax<sup>2</sup> hiển thị thành ax². Ngược lại, thẻ <sub> dùng để viết chỉ số dưới, ví dụ H<sub>2</sub>O. Hai thẻ này rất cần thiết khi trình bày công thức toán học và hoá học.",
  },
  {
    id: "b8-14",
    q: "Điểm khác nhau giữa thẻ <strong> và thẻ <b> là gì theo SGK Tin học 12?",
    options: [
      "<strong> nhấn mạnh vào ngữ nghĩa nội dung, <b> chỉ in đậm về mặt hiển thị",
      "<strong> dùng cho tiêu đề, <b> dùng cho đoạn văn bản bên trong thẻ <p>",
      "<strong> dùng được trong <head>, <b> chỉ dùng được trong <body>",
      "<strong> làm to chữ hơn, <b> chỉ đổi màu chữ thành đen đậm hơn",
    ],
    answer: 0,
    explain:
      "Cả <strong> và <em> đều có cùng tác dụng định dạng hiển thị giống các thẻ <b>, <i> nhưng các thẻ này có ý nghĩa nhấn mạnh vào ngữ nghĩa của nội dung và được khuyến khích sử dụng nhiều hơn trong định dạng văn bản.",
  },
  {
    id: "b8-15",
    q: "Để đặt màu chữ đỏ cho một đoạn văn bản qua thuộc tính style, ta viết như thế nào?",
    options: [
      '<p style="color:red">Nội dung.</p>',
      '<p style="text-color:red">Nội dung.</p>',
      '<p style="font-color:red">Nội dung.</p>',
      '<p color="red">Nội dung.</p>',
    ],
    answer: 0,
    explain:
      'Để định dạng màu sắc chữ, ta dùng thuộc tính style với cú pháp: <p style="color:màu">Nội dung.</p>. Giá trị màu sắc được sử dụng theo tiếng Anh (red, green, blue, grey, yellow, black, brown,...) hoặc giá trị màu trong hệ RGB.',
  },
  {
    id: "b8-16",
    q: "Để thiết lập phông chữ Tahoma, cỡ chữ 15px, màu xanh lam cho một đoạn văn, ta viết thuộc tính style như thế nào?",
    options: [
      'style="font-family:Tahoma;font-size:15px;color:blue"',
      'style="font-family:Tahoma, font-size:15px, color:blue"',
      'style="font:Tahoma; size:15px; color:blue"',
      'style="Tahoma; 15px; blue"',
    ],
    answer: 0,
    explain:
      'Khi muốn thực hiện nhiều định dạng phông đồng thời, ta đặt các cặp tên:giá_trị ngăn cách nhau bởi dấu chấm phẩy trong phần giá trị của thuộc tính style. Cụ thể: font-family để chọn phông, font-size để chọn cỡ chữ, color để chọn màu chữ — tất cả viết liên tiếp, ngăn cách bởi ";".',
  },
  {
    id: "b8-17",
    q: "Lưu ý nào sau đây về thẻ <u> là đúng theo SGK Tin học 12?",
    options: [
      "HTML5 không hỗ trợ thẻ <u>, nên dùng text-decoration trong thuộc tính style thay thế",
      "Thẻ <u> hoạt động hoàn toàn bình thường trong HTML5, không cần thay thế bằng thuộc tính nào",
      "Thẻ <u> chỉ dùng được bên trong phần tử <head>, không được phép dùng trong phần <body>",
      "Thẻ <u> và thẻ <del> có cùng kiểu hiển thị gạch ngang giống nhau trên mọi trình duyệt",
    ],
    answer: 0,
    explain:
      "SGK ghi rõ: HTML5 không hỗ trợ thẻ <big> và <u>; để điều khiển em nên thay bằng giá trị font-size và text-decoration trong thuộc tính style.",
  },
  {
    id: "b8-18",
    q: "Đoạn mã dưới đây khi chạy trên trình duyệt sẽ hiển thị chữ \"Tin học\" ở dạng nào?",
    code: '<p>Môn Tin học <em>rất</em> hay.</p>',
    options: [
      "Chữ \"rất\" in nghiêng, còn \"Tin học\" và các phần chữ còn lại hiển thị bình thường",
      "Cả chữ \"Tin học\" lẫn chữ \"rất\" đều được in nghiêng do cùng nằm trong thẻ <p>",
      "Chữ \"rất\" được in đậm, còn \"Tin học\" và phần còn lại hiển thị chữ bình thường",
      "Cả câu đều in nghiêng do thẻ <em> được đặt lồng bên trong thẻ <p> bên ngoài",
    ],
    answer: 0,
    explain:
      "Thẻ <em> chỉ bao quanh chữ \"rất\", nên chỉ từ đó được in nghiêng. Chữ \"Tin học\" nằm ngoài thẻ <em>, bên trong <p> nhưng không có định dạng đặc biệt nào, nên hiển thị bình thường. Đây là ví dụ Ví dụ 2 trong SGK.",
  },
];

export default questions;
