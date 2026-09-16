import type { Question } from "@/lib/types";

// Bài 14. Định dạng văn bản bằng CSS (SGK trang 76-80)
const questions: Question[] = [
  {
    id: "b14-01",
    q: "Thuộc tính font-family trong CSS có tác dụng gì và cách trình duyệt xử lý danh sách phông chữ như thế nào?",
    options: [
      "Thiết lập phông chữ; trình duyệt tìm từ trái sang phải, nếu không thấy phông nào trong danh sách thì chọn phông cùng loại bất kì",
      "Thiết lập kích thước phông chữ; trình duyệt sẽ tự động lấy trung bình cộng của tất cả các kích thước đã được liệt kê trong khai báo",
      "Thiết lập độ đậm nhạt của phông chữ; trình duyệt chỉ nhận diện tên phông chữ đầu tiên và bỏ qua phần còn lại trong danh sách liệt kê",
      "Thiết lập kiểu chữ in nghiêng; trình duyệt yêu cầu thiết bị phải có kết nối mạng Internet để tải toàn bộ phông chữ mẫu về hiển thị",
    ],
    answer: 0,
    explain:
      "Thuộc tính font-family dùng để chọn phông chữ. Sau thuộc tính là một hay một danh sách các tên phông chữ. Trình duyệt sẽ lần lượt tìm các phông trong danh sách từ trái sang phải để chọn hiển thị. Nếu không tìm thấy phông nào, trình duyệt sẽ chọn phông cùng loại bất kì.",
  },
  {
    id: "b14-02",
    q: "Nhóm phông chữ nào dưới đây thuộc loại chữ có chân (serif)?",
    options: [
      "Times, Times New Roman, Georgia",
      "Arial, Helvetica, Tahoma",
      "Courier New, Consolas, Monaco",
      "Comic Sans MS, Brush Script MT, Papyrus",
    ],
    answer: 0,
    explain:
      "Theo bảng phân loại phông chữ: serif (chữ có chân) bao gồm các phông như Times, Times New Roman. Sans-serif là chữ không chân (Arial, Tahoma); monospace là chữ có chiều rộng đều nhau; cursive là chữ viết tay; fantasy là chữ trừu tượng.",
  },
  {
    id: "b14-03",
    q: "Khi tên phông chữ có chứa dấu cách (ví dụ: Times New Roman), ta cần viết như thế nào trong CSS?",
    options: [
      "Cần đặt tên phông chữ trong hai dấu nháy kép hoặc dấu nháy đơn",
      "Cần thay thế dấu cách bằng dấu gạch ngang hoặc dấu gạch dưới",
      "Viết liền tất cả các từ lại với nhau mà không có khoảng trắng",
      "Chỉ cần viết bình thường, trình duyệt sẽ tự động nhận diện khoảng trắng",
    ],
    answer: 0,
    explain:
      "SGK lưu ý: Nếu tên phông chữ có chứa dấu cách thì cần đặt trong hai dấu nháy kép (hoặc nháy đơn). Ví dụ: font-family: \"Times New Roman\", serif;",
  },
  {
    id: "b14-04",
    q: "Thuộc tính font-size trong CSS không hỗ trợ đơn vị đo nào dưới đây?",
    options: [
      "Đơn vị đo khối lượng và thể tích như kg, lít, gam",
      "Đơn vị đo tuyệt đối như cm, mm, in, px (pixel), pt (point)",
      "Đơn vị đo tương đối như em, ex, rem, hoặc theo tỉ lệ phần trăm (%)",
      "Các mức chỉ định sẵn như xx-small, small, medium, large, xx-large",
    ],
    answer: 0,
    explain:
      "Thuộc tính font-size thiết lập cỡ chữ. Nó hỗ trợ các đơn vị tuyệt đối (cm, mm, in, px, pt), tương đối (em, ex, rem, %), và các mức định sẵn (xx-small đến xx-large). Đơn vị khối lượng không được sử dụng trong CSS.",
  },
  {
    id: "b14-05",
    q: "Để thiết lập chữ in nghiêng cho văn bản, ta dùng thuộc tính và giá trị nào?",
    options: [
      "font-style: italics;",
      "font-weight: bold;",
      "text-decoration: italic;",
      "text-align: right;",
    ],
    answer: 0,
    explain:
      "Thuộc tính font-style thiết lập kiểu chữ thường hay in nghiêng. Các giá trị là normal (thường) và italics (nghiêng).",
  },
  {
    id: "b14-06",
    q: "Thuộc tính font-weight có thể nhận các giá trị nào để thiết lập độ đậm của chữ?",
    options: [
      "normal, bold, hoặc các mức độ viết đậm từ 100 đến 900",
      "light, dark, hoặc các mã màu thập lục phân từ #000 đến #fff",
      "thin, thick, hoặc các kích thước đo bằng pixel như 1px, 2px",
      "uppercase, lowercase, hoặc các giá trị chữ hoa chữ thường khác",
    ],
    answer: 0,
    explain:
      "Thuộc tính font-weight thiết lập độ dày nét chữ. Giá trị có thể đặt bằng chữ là normal (bình thường), bold (đậm) hoặc đặt bằng các giá trị từ 100, 200, ..., 900 (trong đó các mức độ viết đậm từ 500 trở lên).",
  },
  {
    id: "b14-07",
    q: "Đường cơ sở (baseline) của dòng văn bản được định nghĩa là gì?",
    options: [
      "Đường ngang mà các chữ cái đứng thẳng trên nó",
      "Khoảng cách từ đỉnh của chữ cái cao nhất đến đáy của chữ cái thấp nhất",
      "Đường viền hình chữ nhật bao quanh toàn bộ đoạn văn bản đang hiển thị",
      "Khoảng cách giữa hai từ liên tiếp nhau trong cùng một câu văn bản",
    ],
    answer: 0,
    explain:
      "Đường cơ sở (baseline) là đường ngang mà các chữ cái đứng thẳng trên nó. Chiều cao dòng văn bản là khoảng cách giữa các đường cơ sở của các dòng trong cùng một đoạn văn bản.",
  },
  {
    id: "b14-08",
    q: "Trong CSS, thuộc tính line-height mặc định bằng bao nhiêu và có thể nhận giá trị dạng nào?",
    options: [
      "Mặc định coi chiều cao = 2em; có thể dùng đơn vị đo thông thường, số tương đối (vd: 1.5, 3) hoặc %",
      "Mặc định luôn là 10px; chỉ chấp nhận các giá trị đo tuyệt đối bằng các đơn vị tiêu chuẩn như pixel hoặc point",
      "Mặc định là 100%; không chấp nhận bất kì đơn vị định dạng nào khác ngoại trừ đơn vị đo theo tỉ lệ phần trăm",
      "Mặc định coi chiều cao = 0; văn bản sẽ bị xếp chồng lên nhau liên tiếp nếu người dùng không tự thiết lập lại",
    ],
    answer: 0,
    explain:
      "CSS sẽ mặc định coi chiều cao dòng = 2em. Thuộc tính line-height dùng để thiết lập chiều cao dòng, có thể thiết lập bằng các đơn vị thông thường, hoặc bằng các số đo tương đối (ví dụ: line-height: 3; line-height: 200%;).",
  },
  {
    id: "b14-09",
    q: "Để căn đều hai bên (thẳng cả lề trái và lề phải) cho đoạn văn bản, thuộc tính text-align dùng giá trị nào?",
    options: [
      "justify",
      "center",
      "right",
      "left",
    ],
    answer: 0,
    explain:
      "Thuộc tính text-align thiết lập căn lề cho các phần tử. Các kiểu bao gồm: left (trái), center (giữa), right (phải), justify (căn đều hai bên).",
  },
  {
    id: "b14-10",
    q: "Thuộc tính text-decoration dùng để tạo các đường kẻ trang trí. Giá trị nào tạo ra đường kẻ giữa dòng chữ?",
    options: [
      "line-through",
      "underline",
      "overline",
      "none",
    ],
    answer: 0,
    explain:
      "Thuộc tính text-decoration có 4 giá trị: none (không trang trí), underline (đường kẻ dưới chữ), overline (đường kẻ phía trên chữ), và line-through (kẻ giữa dòng chữ). SGK lưu ý thuộc tính này không có tính kế thừa.",
  },
  {
    id: "b14-11",
    q: "Nếu gán giá trị âm cho thuộc tính text-indent (ví dụ: text-indent: -10px;), điều gì sẽ xảy ra?",
    options: [
      "Dòng đầu tiên của đoạn văn bản sẽ lùi ra ngoài (gọi là thụt lề treo - hanging indent)",
      "Toàn bộ đoạn văn bản sẽ tự động chuyển sang chế độ hiển thị lật ngược từ phải sang trái",
      "Trình duyệt sẽ hiển thị thông báo lỗi và tự động bỏ qua toàn bộ khối mã CSS có chứa thuộc tính đó",
      "Dòng cuối cùng của đoạn văn bản sẽ bị trình duyệt đẩy sát vào mép ngoài cùng lề phải của trang web",
    ],
    answer: 0,
    explain:
      "Thuộc tính text-indent định dạng thụt lề dòng đầu tiên. Nếu giá trị > 0 thì dòng đầu thụt vào. Nếu giá trị < 0 thì dòng đầu tiên lùi ra ngoài, còn gọi là thụt lề treo (hanging indent).",
  },
  {
    id: "b14-12",
    q: "Tính kế thừa của CSS có ý nghĩa gì đối với các phần tử HTML?",
    options: [
      "Mẫu CSS áp dụng cho một phần tử sẽ tự động áp dụng cho tất cả các phần tử là con, cháu của phần tử đó (trừ ngoại lệ)",
      "Một tệp nguồn mã CSS có thể kế thừa các quy định từ một tệp mã CSS khác thông qua việc dùng thẻ kết nối trong mã HTML",
      "Các thẻ đánh dấu HTML thế hệ mới sẽ tự động kế thừa lại tất cả các thuộc tính định dạng của các thẻ HTML đã bị loại bỏ",
      "Trình duyệt hiển thị sẽ sao chép toàn bộ định dạng của trang web trước đó và trực tiếp áp dụng cho trang web hiện tại",
    ],
    answer: 0,
    explain:
      "Một tính chất rất quan trọng của CSS là tính kế thừa. Nếu một mẫu CSS áp dụng cho một phần tử HTML bất kì thì nó sẽ được tự động áp dụng cho tất cả các phần tử là con, cháu của phần tử đó trong mô hình cây HTML (trừ các trường hợp ngoại lệ).",
  },
  {
    id: "b14-13",
    q: "Khi có nhiều mẫu định dạng CSS xung đột cùng áp dụng cho một phần tử HTML, trình duyệt sẽ xử lý theo nguyên tắc (cascading) nào?",
    options: [
      "Trình duyệt sẽ ưu tiên áp dụng mẫu định dạng được viết cuối cùng trong đoạn mã",
      "Trình duyệt sẽ gộp tất cả các mẫu lại và hiển thị theo hiệu ứng pha trộn lẫn nhau",
      "Trình duyệt sẽ chọn mẫu định dạng được viết đầu tiên và bỏ qua các mẫu còn lại",
      "Trình duyệt sẽ hiện thông báo lỗi yêu cầu người dùng phải tự chọn mẫu muốn xem",
    ],
    answer: 0,
    explain:
      "Do được phép có nhiều mẫu định dạng CSS nên có thể xảy ra trường hợp xung đột. Khi đó, tính chất \"cascading\" của CSS quy định trình duyệt sẽ thực hiện mẫu định dạng được viết cuối cùng. Đây là thứ tự ưu tiên áp dụng.",
  },
  {
    id: "b14-14",
    q: "Kí hiệu * trong bộ chọn CSS có tác dụng gì và mức độ ưu tiên của nó như thế nào?",
    options: [
      "Là bộ chọn cho mọi phần tử bất kì trên trang, có mức độ ưu tiên thấp nhất trong các loại bộ chọn",
      "Là kí hiệu dùng để ẩn mọi phần tử HTML khỏi màn hình, có mức độ ưu tiên tuyệt đối không thể ghi đè",
      "Là lệnh yêu cầu trình duyệt tải lại toàn bộ tệp CSS, áp dụng ưu tiên cho các thẻ chứa đa phương tiện",
      "Là bộ chọn chuyên biệt chỉ dùng cho các phần tử chứa danh sách, có mức độ ưu tiên cao thứ nhì",
    ],
    answer: 0,
    explain:
      "Kí hiệu * dùng trong bộ chọn sẽ có ý nghĩa là phần tử bất kì. Mẫu định dạng chứa kí hiệu * sẽ áp dụng cho mọi phần tử mà chưa có trong bất cứ mẫu định dạng nào khác của CSS. Mức độ ưu tiên của * là thấp nhất.",
  },
  {
    id: "b14-15",
    q: "Làm thế nào để một thuộc tính CSS luôn được ưu tiên cao nhất, không phụ thuộc vào vị trí viết hay tính kế thừa?",
    options: [
      "Thêm kí hiệu !important ngay sau giá trị của thuộc tính, trước dấu chấm phẩy (;)",
      "Đặt kí hiệu * ngay trước tên của thuộc tính muốn được ưu tiên trong vùng mô tả",
      "Viết hoa toàn bộ tên thuộc tính và giá trị của nó để trình duyệt nhận diện được",
      "Bọc toàn bộ mẫu định dạng trong thẻ <strong> bên trong tệp nguồn mã CSS đó",
    ],
    answer: 0,
    explain:
      "Kí hiệu !important nếu được sử dụng trong một mẫu định dạng thì mẫu này với thuộc tính tương ứng sẽ được ưu tiên cao nhất mà không phụ thuộc vào vị trí của mẫu trong CSS. Chú ý: kí hiệu !important cần được viết ngay sau thuộc tính cần đánh dấu ưu tiên (trước dấu chấm phẩy).",
  },
];

export default questions;
