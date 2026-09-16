import type { Question } from "@/lib/types";

// Bài 13. Khái niệm, vai trò của CSS (SGK trang 73-75)
const questions: Question[] = [
  {
    id: "b13-01",
    q: "Cấu trúc tổng quát của một mẫu định dạng CSS bao gồm những phần nào?",
    options: [
      "Gồm hai phần: bộ chọn (selector) và vùng mô tả (chứa các quy định định dạng nằm trong cặp ngoặc nhọn {})",
      "Gồm ba phần: thẻ HTML, tên tệp CSS kết nối, và mã nguồn định dạng chi tiết đặt ở bên trong thân trang web",
      "Gồm một phần duy nhất: danh sách các thuộc tính và giá trị được đặt xen kẽ vào các đoạn mã hiển thị HTML",
      "Gồm hai phần: đường dẫn tới tệp mã nguồn bên ngoài và danh sách các thẻ HTML chịu tác động của tệp đó",
    ],
    answer: 0,
    explain:
      "Cấu trúc tổng quát của CSS bao gồm các mẫu định dạng. Mỗi mẫu này bao gồm hai phần: bộ chọn và vùng mô tả. Bộ chọn xác định các phần tử HTML sẽ được áp dụng định dạng. Vùng mô tả chứa một hoặc nhiều quy định (thuộc tính: giá trị;) nằm trong cặp dấu ngoặc nhọn { }.",
  },
  {
    id: "b13-02",
    q: "Trong vùng mô tả của một mẫu định dạng CSS, mỗi quy định (luật) được viết theo cấu trúc nào?",
    options: [
      "thuộc tính: giá trị; (ví dụ: color: red;)",
      "thuộc tính = giá trị; (ví dụ: color = red;)",
      "thuộc tính(giá trị); (ví dụ: color(red);)",
      'thuộc tính="giá trị" (ví dụ: color="red")',
    ],
    answer: 0,
    explain:
      "Trong vùng mô tả, mỗi quy định được viết theo cấu trúc: thuộc tính: giá trị; và kết thúc bằng dấu chấm phẩy (;). Ví dụ: h1 {color: red;}.",
  },
  {
    id: "b13-03",
    q: "Để áp dụng cùng một định dạng CSS cho đồng thời nhiều thẻ khác nhau (ví dụ: h1, h2, h3), ta viết bộ chọn như thế nào?",
    options: [
      "Viết tên các thẻ cách nhau bởi dấu phẩy: h1, h2, h3 { ... }",
      "Viết tên các thẻ cách nhau bởi khoảng trắng: h1 h2 h3 { ... }",
      "Viết tên các thẻ cách nhau bởi dấu cộng: h1 + h2 + h3 { ... }",
      "Phải viết lặp lại thành nhiều mẫu định dạng riêng biệt cho từng thẻ",
    ],
    answer: 0,
    explain:
      "Bộ chọn có thể là một thẻ hoặc đồng thời nhiều thẻ. Cách viết này giúp cho CSS dễ thiết lập và áp dụng. Ví dụ: h1, h2, h3 {color: red;} — Các thẻ này được viết cách nhau bởi dấu phẩy.",
  },
  {
    id: "b13-04",
    q: "CSS trong (internal CSS) là gì và được đặt ở vị trí nào trong mã HTML?",
    options: [
      "Đưa toàn bộ mẫu định dạng vào bên trong thẻ <style> và đặt trong phần tử head của tệp HTML",
      "Viết trực tiếp các mẫu định dạng vào thuộc tính style của từng thẻ HTML bên trong thẻ body",
      "Viết tất cả các định dạng vào một tệp .css riêng biệt và kết nối vào HTML thông qua thẻ link",
      "Đặt các mã định dạng bên trong cặp thẻ <script> nằm ở cuối trang web để tăng tốc độ tải",
    ],
    answer: 0,
    explain:
      "Cách thiết lập CSS trong (internal CSS) đưa toàn bộ các mẫu định dạng vào bên trong thẻ <style> và đặt trong phần tử head của tệp HTML. Các định dạng này sẽ áp dụng cho tất cả các phần tử của trang web đó, nhưng không áp dụng cho trang web khác.",
  },
  {
    id: "b13-05",
    q: "Để sử dụng CSS ngoài (external CSS), cách đầu tiên và phổ biến nhất là dùng thẻ nào để kết nối?",
    options: [
      'Thẻ <link> đặt trong phần head, ví dụ: <link href="styles.css" rel="stylesheet" type="text/css">',
      'Thẻ <style> đặt trong phần head, ví dụ: <style src="styles.css" rel="stylesheet"></style>',
      'Thẻ <meta> đặt trong phần head, ví dụ: <meta href="styles.css" rel="stylesheet">',
      'Thẻ <script> đặt ở cuối thẻ body, ví dụ: <script src="styles.css" type="text/css"></script>',
    ],
    answer: 0,
    explain:
      "Cách 1 để kết nối tệp CSS ngoài là sử dụng thẻ link đặt trong vùng head của trang web. Cú pháp: <link href=\"styles.css\" rel=\"stylesheet\" type=\"text/css\">. Cách 2 là dùng lệnh @import đặt trong thẻ <style>.",
  },
  {
    id: "b13-06",
    q: "Cách thứ hai để kết nối tệp CSS ngoài (external CSS) vào trang web HTML là gì?",
    options: [
      'Sử dụng lệnh @import đặt trong phần tử <style> và nằm trong phần head của trang web',
      'Sử dụng thuộc tính css-src đặt trực tiếp trên thẻ <html> hoặc <body> của mã nguồn',
      'Sử dụng thẻ <a> với thuộc tính href trỏ tới tệp .css và đặt ở đầu phần thân trang web',
      'Sử dụng lệnh include trong ngôn ngữ JavaScript để tải động tệp định dạng vào trang web',
    ],
    answer: 0,
    explain:
      "Ngoài thẻ <link>, cách 2 là sử dụng lệnh @import đặt trong phần tử <style> và nằm trong phần head của trang web, ví dụ: <style> @import \"styles.css\"; </style>.",
  },
  {
    id: "b13-07",
    q: "CSS nội tuyến (inline CSS) được thiết lập như thế nào?",
    options: [
      "Định dạng trực tiếp bên trong thẻ của phần tử HTML bằng cách chỉ ra các thuộc tính và giá trị qua thuộc tính style",
      "Viết các mẫu định dạng vào bên trong thẻ <style> đặt ở ngay vị trí trên cùng của nội dung hiển thị trong body",
      "Tạo một khối mã định dạng bao quanh phần tử cần định dạng và giới hạn tầm ảnh hưởng bằng một thẻ span",
      "Định dạng bằng cách dùng thẻ <link> đặt trực tiếp cạnh phần tử HTML cần định dạng thay vì đặt trên vùng head",
    ],
    answer: 0,
    explain:
      "CSS nội tuyến: Có thể định dạng CSS trực tiếp bên trong thẻ của các phần tử HTML bằng cách chỉ ra các thuộc tính và giá trị thông qua thuộc tính style. Cách làm này mất thời gian nhưng thời gian thực hiện (áp dụng định dạng lên thẻ đó) sẽ nhanh.",
  },
  {
    id: "b13-08",
    q: "Vai trò quan trọng nhất của CSS đối với thiết kế trang web là gì?",
    options: [
      "Giúp tách biệt việc nhập nội dung bằng HTML và việc định dạng thành hai công việc độc lập",
      "Thay thế hoàn toàn ngôn ngữ HTML để xây dựng cấu trúc và định dạng cho toàn bộ website",
      "Cung cấp khả năng lập trình xử lí dữ liệu và tạo hoạt cảnh động cho các phần tử trên trang",
      "Đảm bảo an toàn thông tin bằng cách mã hoá nội dung văn bản truyền tải trên đường truyền",
    ],
    answer: 0,
    explain:
      "CSS ra đời để phục vụ việc định dạng nội dung trang web một cách thống nhất, nhanh chóng. Vai trò lớn nhất: CSS sẽ giúp tách việc nhập nội dung trang web bằng thẻ HTML và việc định dạng thành hai công việc độc lập với nhau, làm giảm nhẹ công việc nhập nội dung.",
  },
  {
    id: "b13-09",
    q: "Ý tưởng của CSS do kĩ sư nào đề xuất và thiết lập vào năm 1994?",
    options: [
      "Håkon Wium Lie, kĩ sư người Na Uy, khi làm việc với Tim Berners-Lee tại viện hạt nhân CERN",
      "Bill Gates, kĩ sư người Mỹ, khi đang xây dựng hệ điều hành Windows đầu tiên cho máy tính cá nhân",
      "Mark Zuckerberg, sinh viên Đại học Harvard, trong quá trình phát triển nền tảng mạng xã hội lớn",
      "Linus Torvalds, lập trình viên người Phần Lan, trong lúc thiết kế và hoàn thiện nhân hệ điều hành",
    ],
    answer: 0,
    explain:
      "Ý tưởng của CSS do kĩ sư Håkon Wium Lie, người Na Uy, thiết lập năm 1994 trong khi làm việc với Tim Berners-Lee tại viện hạt nhân CERN. Ý tưởng chính là tạo ra các mẫu định dạng riêng, độc lập cho các phần tử HTML.",
  },
  {
    id: "b13-10",
    q: "Lợi ích của việc thiết lập CSS bằng một tệp CSS ngoài (external CSS) là gì?",
    options: [
      "Có thể định dạng một lần và áp dụng thống nhất cho nhiều trang web, thậm chí cả một website",
      "Tăng tốc độ tải trang lên mức tối đa vì toàn bộ mã CSS đều được nhúng vào thân trang web",
      "Tránh việc trình duyệt lưu vào bộ nhớ tạm (cache), giúp cập nhật giao diện nhanh chóng hơn",
      "Đảm bảo trang web chỉ hiển thị chính xác trên một trình duyệt nhất định để bảo vệ tính bảo mật",
    ],
    answer: 0,
    explain:
      "Một tệp CSS ngoài có thể kết nối vào bất kì trang web nào. Tính năng này cho phép định dạng một lần và áp dụng cho nhiều trang web, thậm chí cả một website. Khi cần thay đổi định dạng, chỉ cần chỉnh sửa một lần trong tệp định dạng css đó.",
  },
  {
    id: "b13-11",
    q: "Dấu hiệu nào trong tệp CSS chỉ ra rằng đó là một dòng chú thích?",
    options: [
      "Nội dung chú thích được đặt giữa hai kí hiệu /* và */",
      "Nội dung chú thích được đặt phía sau kí hiệu // trên cùng dòng",
      "Nội dung chú thích được đặt giữa hai kí hiệu <!-- và -->",
      "Nội dung chú thích bắt buộc phải bắt đầu bằng kí hiệu #",
    ],
    answer: 0,
    explain:
      "Trong tệp CSS, dòng chú thích được đặt giữa cụm kí hiệu /* và */. Ví dụ: /* tệp thông tin CSS */. Chú thích này không ảnh hưởng đến việc hiển thị giao diện.",
  },
  {
    id: "b13-12",
    q: "Việc sử dụng CSS trong (đặt tại thẻ <style> ở head) có ưu điểm gì so với thiết lập thuộc tính cho từng thẻ HTML (không dùng CSS)?",
    options: [
      "Chỉ cần viết mẫu định dạng một lần, các định dạng sẽ được áp dụng cho tất cả các phần tử tương ứng trong trang",
      "Các định dạng sẽ tự động lan truyền sang tất cả các trang web khác trên cùng một máy chủ lưu trữ website",
      "Trình duyệt sẽ tự động xoá các thẻ HTML thừa để tối ưu hoá tốc độ khung hình và thời gian tải xuống của trang",
      "Không cần sử dụng bộ chọn mà trình duyệt sẽ tự động phân tích ngữ cảnh để biết cần tô màu và định dạng thế nào",
    ],
    answer: 0,
    explain:
      "Các mẫu định dạng của CSS có thể được viết ngay trong phần head của trang html, chỉ cần viết một lần và áp dụng cho tất cả các phần tử trong bộ chọn. Như vậy, các định dạng này được thiết lập một lần và được dùng nhiều lần.",
  },
  {
    id: "b13-13",
    q: "Từ bản CSS3 trở đi, CSS được phát triển theo hướng nào?",
    options: [
      "Được phát triển theo từng gói riêng biệt (module) và hiện nay các gói của CSS3 vẫn đang được phát triển, hoàn thiện",
      "Bị thay thế hoàn toàn bởi các ngôn ngữ kịch bản mạnh mẽ hơn và không còn được cập nhật thêm bất kỳ tính năng nào mới",
      "Hợp nhất tất cả thành một chuẩn duy nhất để đơn giản hóa quá trình xử lý trên các thiết bị di động có cấu hình thấp",
      "Chỉ tập trung vào tạo hiệu ứng âm thanh và video động, từ bỏ khả năng định dạng cấu trúc của văn bản và hình ảnh",
    ],
    answer: 0,
    explain:
      "Theo SGK, từ bản CSS3 trở đi, CSS được phát triển theo từng gói riêng biệt (module). Hiện nay các gói của CSS3 vẫn đang được phát triển và hoàn thiện. Đồng thời một số chuẩn của CSS4 và CSS5 vẫn đang được tiếp tục thiết lập mới.",
  },
  {
    id: "b13-14",
    q: "Tổ chức nào hiện tại chịu trách nhiệm phát triển các chuẩn của HTML và CSS?",
    options: [
      "Tổ chức World Wide Web Consortium (W3C), có địa chỉ tại https://www.w3.org/",
      "Tổ chức Liên Hợp Quốc về phát triển công nghệ thông tin và truyền thông toàn cầu",
      "Tập đoàn Microsoft với vai trò dẫn dắt việc xây dựng chuẩn trình duyệt mặc định",
      "Cộng đồng phát triển mã nguồn mở độc lập do nhà sáng lập Linux quản lý và điều hành",
    ],
    answer: 0,
    explain:
      "Hiện tại hiệp hội chịu trách nhiệm phát triển các chuẩn của HTML, CSS và các công nghệ có liên quan là tổ chức World Wide Web Consortium (W3C), có địa chỉ tại https://www.w3.org/.",
  },
];

export default questions;
