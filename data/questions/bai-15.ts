import type { Question } from "@/lib/types";

// Bài 15. Tạo màu cho chữ và nền (SGK trang 83-87)
const questions: Question[] = [
  {
    id: "b15-01",
    q: "Hệ màu RGB trong HTML và CSS sử dụng tổ hợp của 3 màu cơ bản nào và mỗi giá trị nằm trong khoảng bao nhiêu?",
    options: [
      "Đỏ (Red), Xanh lá (Green), Xanh dương (Blue); mỗi giá trị là một số nguyên từ 0 đến 255",
      "Đỏ (Red), Xám (Gray), Đen (Black); mỗi giá trị là một số nguyên từ 1 đến 100",
      "Hồng (Pink), Vàng (Yellow), Cam (Orange); mỗi giá trị được biểu diễn dưới dạng số thập phân từ 0.0 đến 1.0",
      "Xanh lơ (Cyan), Đỏ sẫm (Magenta), Vàng (Yellow); mỗi giá trị là một mã màu nhị phân gồm 8 bit",
    ],
    answer: 0,
    explain:
      "HTML và CSS hỗ trợ hệ màu theo mẫu RGB (R – red, G – green, B – blue). Mỗi màu là tổ hợp của 3 giá trị (r, g, b), trong đó mỗi giá trị là số nguyên nằm trong khoảng 0 đến 255 (8 bit). Tổng số màu là 2^24.",
  },
  {
    id: "b15-02",
    q: "Đâu KHÔNG phải là một cách hợp lệ để biểu diễn giá trị màu theo hệ RGB trong CSS?",
    options: [
      "rgb(255, 0, 0, 100)",
      "rgb(100%, 0%, 0%)",
      "rgb(255, 0, 0)",
      "#ff0000",
    ],
    answer: 0,
    explain:
      "CSS hỗ trợ 3 cách thiết lập màu hệ RGB cơ bản: rgb(x, x, x) với x từ 0-255; rgb(x%, x%, x%) với x từ 0-100; và #rrggbb (hexa). Hàm rgb() cơ bản chỉ nhận 3 tham số, nếu truyền 4 tham số (như alpha channel) thì phải dùng cú pháp rgba hoặc cú pháp rgb mới (dùng dấu /), nhưng cách viết rgb(255, 0, 0, 100) phân tách 4 tham số bằng dấu phẩy là không đúng chuẩn RGB truyền thống trình bày trong SGK.",
  },
  {
    id: "b15-03",
    q: "Trong hệ màu HSL, các chữ cái H, S, L lần lượt đại diện cho những thông số nào?",
    options: [
      "Hue (vòng tròn màu 0-360), Saturation (độ bão hòa 0-100%), Lightness (độ sáng 0-100%)",
      "Height (chiều cao), Size (kích thước), Length (chiều dài) của khối màu hiển thị trên màn hình",
      "Hexadecimal (hệ thập lục phân), System (hệ thống), Layer (lớp màu chồng lấp lên nhau)",
      "Horizontal (chiều ngang), Solid (độ đặc), Linear (tuyến tính) dùng cho hiệu ứng dải màu",
    ],
    answer: 0,
    explain:
      "HSL viết tắt của Hue (vòng tròn màu, 0 đến 360 độ), Saturation (độ bão hòa, 0% đến 100%), và Lightness (độ sáng, 0% đến 100%).",
  },
  {
    id: "b15-04",
    q: "Trong hệ màu HSL, nếu thiết lập tham số Lightness (độ sáng) bằng 0% hoặc 100% thì kết quả nhận được sẽ là màu gì?",
    options: [
      "Lightness = 0% luôn ra màu đen; Lightness = 100% luôn ra màu trắng",
      "Lightness = 0% ra màu trong suốt; Lightness = 100% ra màu hiển thị đậm nhất",
      "Lightness = 0% ra màu xám trung tính; Lightness = 100% ra màu gốc có độ bão hoà tối đa",
      "Lightness = 0% ra màu trắng tinh khiết; Lightness = 100% ra màu đen tối nhất",
    ],
    answer: 0,
    explain:
      "L (Lightness) là độ sáng với giá trị từ 0% đến 100%. Với 0% chỉ mức độ sáng thấp nhất (màu đen). Với 100%, độ sáng là lớn nhất (màu trắng). Để màu hiển thị đúng theo Hue, cần đặt Lightness = 50%.",
  },
  {
    id: "b15-05",
    q: "Phiên bản CSS3 đã thiết lập sẵn bao nhiêu tên màu (color names) chuẩn không phân biệt chữ hoa chữ thường để người dùng sử dụng trực tiếp?",
    options: [
      "140 tên màu",
      "16 tên màu",
      "256 tên màu",
      "65536 tên màu",
    ],
    answer: 0,
    explain:
      "Phiên bản CSS2 thiết lập tên 16 màu chuẩn. Còn phiên bản CSS3 đã thiết lập 140 tên màu có sẵn để dễ dàng cho việc sử dụng (tên màu không phân biệt chữ hoa chữ thường).",
  },
  {
    id: "b15-06",
    q: "Thuộc tính nào trong CSS được dùng để thiết lập màu nền cho một phần tử HTML?",
    options: [
      "background-color",
      "color",
      "bg-color",
      "background-image",
    ],
    answer: 0,
    explain:
      "Trong CSS: thuộc tính color dùng định dạng màu chữ, thuộc tính background-color dùng để định dạng màu nền, và thuộc tính border dùng định dạng màu khung viền.",
  },
  {
    id: "b15-07",
    q: "Trong 3 thuộc tính định dạng màu sắc (color, background-color, border), thuộc tính nào KHÔNG có tính kế thừa từ phần tử cha sang phần tử con?",
    options: [
      "border (màu khung viền)",
      "color (màu văn bản)",
      "background-color (màu nền)",
      "Cả 3 thuộc tính trên đều tự động kế thừa",
    ],
    answer: 0,
    explain:
      "Theo SGK bài 15 phần lưu ý trang 85: Các thuộc tính định dạng màu chữ (color) và màu nền (background-color) đều có tính kế thừa, riêng thuộc tính border KHÔNG có tính kế thừa.",
  },
  {
    id: "b15-08",
    q: "Bộ chọn kết hợp (combinator) theo cú pháp \"E F\" (có khoảng trắng ở giữa) thể hiện mối quan hệ gì giữa hai phần tử?",
    options: [
      "Quan hệ con cháu: Áp dụng cho các phần tử F là phần tử con hoặc cháu của E (nằm trong E)",
      "Quan hệ cha con trực tiếp: Áp dụng cho các phần tử F bắt buộc phải là con trực tiếp của phần tử E",
      "Quan hệ anh em liền kề: Áp dụng cho các phần tử F đứng ngay sát phía sau phần tử E",
      "Quan hệ nhóm: Áp dụng định dạng độc lập cho cả phần tử E và phần tử F cùng một lúc",
    ],
    answer: 0,
    explain:
      "Cú pháp \"E F\" là quan hệ con cháu. Nó áp dụng cho các phần tử F với điều kiện F là phần tử con/cháu của E, tức là E phải ở phía trên F trong cây HTML.",
  },
  {
    id: "b15-09",
    q: "Đoạn mã CSS sử dụng bộ chọn \"E > F\" sẽ áp dụng định dạng cho đối tượng nào?",
    options: [
      "Các phần tử F với điều kiện F phải là con trực tiếp của phần tử E",
      "Tất cả các phần tử F miễn là chúng nằm bất kì đâu bên trong phần tử E",
      "Phần tử F đầu tiên xuất hiện trên trang web nằm bên ngoài phần tử E",
      "Các phần tử F có chung cấp độ (cùng cha) và đứng ngay sau phần tử E",
    ],
    answer: 0,
    explain:
      "Cú pháp \"E > F\" là quan hệ cha con trực tiếp. Áp dụng cho các phần tử F với điều kiện F là phần tử con trực tiếp (ngay cấp dưới) của E.",
  },
  {
    id: "b15-10",
    q: "Để định dạng cho phần tử <strong> chỉ khi nó đứng liền kề ngay sau phần tử <em> (có cùng phần tử cha), ta dùng bộ chọn nào?",
    options: [
      "em + strong",
      "em ~ strong",
      "em strong",
      "em > strong",
    ],
    answer: 0,
    explain:
      "Cú pháp \"E + F\" thể hiện quan hệ anh em liền kề. Áp dụng cho các phần tử F là phần tử liền kề ngay sau E (E và F phải có cùng cha). Ví dụ: em + strong.",
  },
  {
    id: "b15-11",
    q: "Bộ chọn \"E ~ F\" khác biệt như thế nào so với bộ chọn \"E + F\" trong CSS?",
    options: [
      "\"E ~ F\" áp dụng cho phần tử F đứng sau E (không cần liền kề), còn \"E + F\" bắt buộc F phải đứng ngay liền kề sau E",
      "\"E ~ F\" áp dụng đối với phần tử F đứng phía trước E, còn \"E + F\" áp dụng đối với phần tử F đứng phía sau E",
      "\"E ~ F\" yêu cầu phần tử F phải là con trực tiếp của phần tử E, trong khi \"E + F\" cho phép phần tử F là cháu của E",
      "\"E ~ F\" được dùng để gộp nhiều bộ chọn riêng biệt lại với nhau, còn \"E + F\" chỉ áp dụng cho một bộ chọn đơn lẻ",
    ],
    answer: 0,
    explain:
      "\"E ~ F\" (quan hệ anh em): Áp dụng cho các phần tử F là phần tử đứng sau (không cần liên tục/liền kề với E), E và F có cùng cha. Trong khi đó \"E + F\" đòi hỏi F phải đứng liền kề ngay sau E.",
  },
  {
    id: "b15-12",
    q: "Trong đoạn HTML: <body><div><h1>...</h1><p>...</p></div><h1>...</h1></body>. Bộ chọn \"body > h1\" sẽ tác động đến thẻ <h1> nào?",
    options: [
      "Chỉ tác động đến thẻ <h1> thứ hai (nằm trực tiếp bên trong <body>, ngang hàng với <div>)",
      "Chỉ tác động đến thẻ <h1> thứ nhất (nằm sâu bên trong cấu trúc của thẻ <div> được khai báo)",
      "Tác động đồng thời đến cả hai thẻ <h1> vì cả hai thẻ này đều nằm trọn bên trong thẻ <body>",
      "Không tác động đến bất kì thẻ <h1> nào do cú pháp bộ chọn > không được hỗ trợ đối với thẻ <body>",
    ],
    answer: 0,
    explain:
      "Bộ chọn \"body > h1\" chỉ tác động tới những thẻ h1 là con trực tiếp của body. Thẻ h1 thứ nhất là con trực tiếp của div (nên nó là cháu của body). Thẻ h1 thứ hai nằm ngoài div, trực tiếp trong body, nên sẽ bị tác động.",
  },
  {
    id: "b15-13",
    q: "Hàm nào trong CSS được sử dụng để thiết lập một màu thuần xám (hay trắng/đen) bằng hệ màu RGB?",
    options: [
      "Hàm rgb(x, x, x) với 3 giá trị của red, green, blue hoàn toàn bằng nhau",
      "Hàm rgb(255, 0, x) với giá trị của red luôn ở mức tối đa là 255",
      "Hàm gray(x%) để tự động điều chỉnh sắc độ xám mà không cần dùng RGB",
      "Hàm rgb() với việc bỏ trống hoàn toàn các tham số truyền vào bên trong",
    ],
    answer: 0,
    explain:
      "Các màu xám (hay đen trắng) có thể được thiết lập theo cách: rgb(x,x,x) với các tham số r, g, b bằng nhau. Hoặc bằng HSL với hsl(h, 0%, x%) khi tham số saturation = 0%.",
  },
  {
    id: "b15-14",
    q: "Theo bộ chọn \"div p {color: blue;}\", phần tử <p> sẽ được định dạng màu xanh nếu nó đáp ứng điều kiện gì?",
    options: [
      "Phần tử <p> nằm ở bất kì vị trí nào (con, cháu, chắt,...) bên trong phần tử <div>",
      "Phần tử <p> bắt buộc phải nằm ngay sau phần tử <div> và cùng một thẻ cha chứa chúng",
      "Phần tử <p> bắt buộc phải là con trực tiếp ngay một cấp dưới của phần tử <div>",
      "Phần tử <p> nằm ngoài phần tử <div> nhưng có cùng chung một thuộc tính class",
    ],
    answer: 0,
    explain:
      "\"div p\" là tổ hợp bộ chọn quan hệ con cháu (E F). Nó sẽ áp dụng cho tất cả các phần tử p miễn là phần tử p đó nằm bên trong phần tử div (có thể là con trực tiếp, hoặc cháu chắt).",
  },
  {
    id: "b15-15",
    q: "Giá trị của thuộc tính color (màu chữ) có được áp dụng tính kế thừa trong HTML không?",
    options: [
      "Có, màu chữ thiết lập ở phần tử cha sẽ tự động áp dụng cho các phần tử con bên trong",
      "Không, màu chữ bắt buộc phải được thiết lập riêng lẻ thủ công cho từng phần tử HTML",
      "Có, nhưng chỉ áp dụng tính kế thừa đối với các văn bản có định dạng chữ in nghiêng",
      "Không, màu chữ chỉ được ưu tiên áp dụng cho phần tử đứng cuối cùng trong tài liệu",
    ],
    answer: 0,
    explain:
      "Theo SGK, thuộc tính định dạng màu chữ (color) và màu nền (background-color) đều CÓ tính kế thừa. Nếu cha có color: red thì con cũng tự động có chữ đỏ.",
  },
];

export default questions;
