import type { LessonExtra } from "@/lib/types";

// Bài 16. Định dạng khung — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b16-tf1",
      context:
        "Khi thiết kế layout cho một trang tin tức, học sinh C có một đoạn mã HTML chứa thẻ <h1>, thẻ <p> và thẻ <span>. C muốn tất cả các thẻ này đều hiển thị thành các khối chữ nhật có viền, có thể thay đổi chiều rộng tùy ý.",
      code: "",
      statements: [
        {
          text: "Mặc định, cả ba thẻ <h1>, <p> và <span> đều thuộc loại phần tử khối (block level).",
          answer: false,
          explain:
            "Chỉ <h1> và <p> là phần tử khối. Thẻ <span> thuộc loại phần tử nội tuyến (inline level) — đó là lí do <span> không tự chiếm trọn một dòng như <h1> và <p>.",
        },
        {
          text: "Học sinh C có thể dùng thuộc tính display: inline; cho thẻ <h1> để nó biến thành phần tử khối.",
          answer: false,
          explain:
            "Thuộc tính display: inline; sẽ biến phần tử thành nội tuyến (inline). Để biến thành khối, phải dùng display: block;.",
        },
        {
          text: "Thẻ <span> mặc định không thể thiết lập thông số chiều cao và chiều rộng bằng CSS.",
          answer: true,
          explain:
            "Vì <span> là phần tử nội tuyến (inline), khung của phần tử nội tuyến không thể thiết lập các thông số chiều cao (height) và chiều rộng (width).",
        },
        {
          text: "Nếu C thêm thuộc tính display: block; vào thẻ <span>, thẻ này sẽ có đầy đủ tính chất khung giống như phần tử khối (chỉnh được width, height).",
          answer: true,
          explain:
            "Thuộc tính display cho phép thay đổi loại phần tử. Khi thiết lập display: block cho span, nó sẽ cư xử như một phần tử khối, có thể chỉnh kích thước và khung tự do.",
        },
      ],
    },
    {
      id: "b16-tf2",
      context:
        "Bạn D đang thiết lập định dạng khung cho một vùng chứa nội dung (box) bằng đoạn CSS sau:\n\ndiv.content {\n  width: 300px;\n  padding: 20px;\n  border: 5px solid red;\n  margin: 10px;\n}",
      code: "",
      statements: [
        {
          text: "Khung của vùng chứa có chiều rộng vùng nội dung bên trong chính xác là 300px.",
          answer: true,
          explain:
            "Thuộc tính width quy định chiều rộng của phần vùng nội dung chứa văn bản. Ở đây, chiều rộng vùng nội dung là 300px.",
        },
        {
          text: "Khoảng cách từ mép nội dung văn bản tới đường viền đỏ là 10px.",
          answer: false,
          explain:
            "Khoảng cách từ vùng nội dung (text) đến đường viền là vùng đệm (padding). Ở đây padding là 20px, chứ không phải 10px.",
        },
        {
          text: "Đường viền của khung có độ dày 5px, nét liền (solid) và có màu đỏ (red).",
          answer: true,
          explain:
            "Thuộc tính gộp border: 5px solid red; thiết lập đồng thời border-width (5px), border-style (solid), và border-color (red).",
        },
        {
          text: "Thuộc tính margin: 10px; tạo ra khoảng trống 10px ở bên trong khung, giữa đường viền đỏ và phần nội dung.",
          answer: false,
          explain:
            "Đây là chỗ rất dễ nhầm giữa hai thuộc tính. Khoảng trống bên TRONG khung, giữa đường viền và nội dung, là padding. Còn margin là lề khung — khoảng trống bên NGOÀI đường viền, dùng để đẩy các phần tử xung quanh ra xa.",
        },
      ],
    },
    {
      id: "b16-tf3",
      context:
        "Cô giáo yêu cầu cả lớp dùng bộ chọn lớp để định dạng các khối tin tức trên trang web của trường. Bạn Lùng viết đoạn mã dưới đây, trong đó gán cho một thẻ <p> ba lớp cùng lúc. Bạn Súa ngồi bên góp ý rằng tên lớp và tên định danh nên bắt đầu bằng chữ số cho dễ sắp xếp, ví dụ đặt là 1tin-moi, và nói thêm rằng có thể gán chung một giá trị id cho nhiều thẻ giống như gán class.",
      code: "<style>\n  .tin-moi { color: red; }\n  #tieu-de { font-size: 20px; }\n</style>\n\n<h1 id=\"tieu-de\">Bản tin trường</h1>\n<p class=\"tin-moi noi-bat lon\">Hợp tác xã vừa thu hoạch vụ cam đầu tiên.</p>",
      statements: [
        {
          text: "Bộ chọn lớp viết bắt đầu bằng dấu chấm, còn bộ chọn định danh id viết bắt đầu bằng dấu thăng.",
          answer: true,
          explain:
            "Đúng cú pháp trong đoạn mã: .tin-moi là bộ chọn lớp (class), còn #tieu-de là bộ chọn định danh (id).",
        },
        {
          text: "Cách Lùng gán ba lớp cho một thẻ là đúng: các tên lớp viết cách nhau bởi dấu cách trong cùng thuộc tính class.",
          answer: true,
          explain:
            "Một phần tử có thể mang nhiều lớp cùng lúc, chỉ cần liệt kê các tên lớp cách nhau bởi dấu cách trong một thuộc tính class duy nhất — như class=\"tin-moi noi-bat lon\".",
        },
        {
          text: "Góp ý của Súa là đúng: tên id và tên class nên bắt đầu bằng chữ số cho dễ sắp xếp.",
          answer: false,
          explain:
            "Tên id và class KHÔNG được bắt đầu bằng chữ số — phải bắt đầu bằng chữ cái. Vì vậy 1tin-moi là tên không hợp lệ.",
        },
        {
          text: "Có thể gán cùng một giá trị id cho nhiều phần tử khác nhau trong một trang, giống như gán class.",
          answer: false,
          explain:
            "Đây chính là điểm khác nhau cơ bản giữa hai loại. Giá trị id phải là duy nhất trong một trang, mỗi id chỉ dùng cho một phần tử; còn cùng một class thì gán được cho nhiều phần tử.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b16-es1",
      q: "Phân biệt sự khác nhau giữa phần tử khối (block level element) và phần tử nội tuyến (inline level element) trong HTML. Nêu cách để chuyển đổi qua lại giữa hai loại phần tử này bằng CSS.",
      answer:
        "* Phân biệt phần tử khối và nội tuyến:\n1. Phần tử khối (Block-level):\n- Luôn bắt đầu trên một dòng mới (đầu hàng).\n- Mặc định kéo dài chiếm toàn bộ chiều rộng có sẵn của phần tử cha.\n- Khung của phần tử khối có đủ tính chất (có thể thiết lập width, height, margin dọc/ngang, padding dọc/ngang đầy đủ).\n- Ví dụ: h1-h6, p, div, form, ul, li...\n\n2. Phần tử nội tuyến (Inline-level):\n- Không bắt đầu trên dòng mới, nó nằm nhúng ngay bên trong dòng nội dung hiện tại.\n- Chỉ chiếm chiều rộng vừa đủ để hiển thị nội dung của nó.\n- Khung của phần tử nội tuyến bị hạn chế (KHÔNG thể thiết lập width, height).\n- Ví dụ: span, a, strong, em, img...\n\n* Cách chuyển đổi bằng CSS:\n- Sử dụng thuộc tính `display`.\n- Chuyển thành khối: `display: block;`\n- Chuyển thành nội tuyến: `display: inline;`\n- Ẩn phần tử: `display: none;`",
    },
    {
      id: "b16-es2",
      q: "Mô hình khung (Box model) trong CSS bao gồm những thành phần nào? Trình bày ý nghĩa của các thuộc tính: width, padding, border, và margin.",
      answer:
        "* Mô hình khung (Box model) của CSS xác định cách một phần tử được bao bọc bởi các lớp không gian. Nó bao gồm 4 phần chính từ trong ra ngoài:\n1. Vùng nội dung (Content - tương ứng width, height): Là vùng chính giữa chứa nội dung thực tế (văn bản, hình ảnh, ...). Thuộc tính width xác định chiều rộng, height xác định chiều cao vùng này.\n2. Vùng đệm (Padding): Là khoảng không gian bao quanh vùng nội dung, tính từ mép nội dung ra đến đường viền. Thuộc tính padding đẩy nội dung cách xa đường viền.\n3. Khung viền (Border): Là đường viền bao quanh toàn bộ vùng đệm (padding) và vùng nội dung. Thuộc tính border định dạng độ dày, kiểu nét vẽ (solid, dashed...) và màu sắc đường viền.\n4. Lề khung (Margin): Là khoảng không gian ngoài cùng, bao bọc đường viền. Thuộc tính margin đẩy các phần tử khác xung quanh ra xa, tạo khoảng trống (lề) ngăn cách giữa các phần tử với nhau.",
    },
  ],
};

export default extra;
