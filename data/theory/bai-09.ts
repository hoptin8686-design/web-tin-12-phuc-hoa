import type { LessonTheory } from "@/lib/types";

// Bài 9. Tạo danh sách, bảng — SGK Tin học 12 (ICT, Kết nối tri thức), trang
// 52–56. Giữ đúng thuật ngữ sách: danh sách có thứ tự / không có thứ tự /
// danh sách mô tả, thẻ <table> <tr> <td> <th>, thuộc tính rowspan / colspan,
// thẻ <caption>, thuộc tính border trong style.

const theory: LessonTheory = {
  minutes: 14,
  intro:
    "Bài 8 em đã biết định dạng chữ đẹp, nhưng dữ liệu thực tế không chỉ toàn chữ — có khi cần liệt kê từng bước, có khi cần xếp thành hàng cột. Bài này dạy hai công cụ trình bày phổ biến nhất: **danh sách** (list) và **bảng** (table).",

  sections: [
    {
      id: "danh-sach",
      emoji: "📋",
      heading: "Tạo danh sách",
      blocks: [
        {
          kind: "text",
          text: "Danh sách trong HTML cho phép **nhóm và liệt kê các mục tương tự nhau** thành một danh sách để hiển thị. Các dạng danh sách trong HTML cơ bản gồm: **danh sách không có thứ tự**, **danh sách có thứ tự** và **danh sách mô tả**. Có thể tạo danh sách **lồng nhau**.",
        },
        {
          kind: "text",
          text: "Trong danh sách, các mục được hiển thị tuần tự, kí tự đầu dòng có thể là một số, chữ, dấu, kí hiệu hoặc hình ảnh. Cấu trúc chung:",
        },
        {
          kind: "code",
          caption: "Cấu trúc đoạn mã HTML tạo danh sách",
          code: `<thẻ bắt đầu>
  <li> mục thứ 1 </li>
  ...
  <li> mục thứ n </li>
</thẻ kết thúc>`,
        },
      ],
    },

    {
      id: "danh-sach-co-thu-tu",
      emoji: "🔢",
      heading: "Danh sách có hoặc không có thứ tự",
      blocks: [
        {
          kind: "text",
          text: "Để tạo **danh sách có thứ tự**, dùng cặp thẻ **`<ol>…</ol>`**. Để chọn kiểu đánh thứ tự và giá trị bắt đầu, dùng thuộc tính **`type`** và **`start`**.",
        },
        {
          kind: "list",
          items: [
            "**`type`**: xác định kiểu đánh số. Các kiểu đánh số là: `\"1\"`, `\"A\"`, `\"a\"`, `\"I\"` và `\"i\"`.",
            "**`start`**: xác định giá trị bắt đầu đánh số, nhận giá trị là các số thực.",
          ],
        },
        {
          kind: "code",
          caption: "Hình 9.1 trong SGK — danh sách có thứ tự kiểu chữ La Mã thường",
          preview: true,
          code: `<ol type="i">
<li>Nếu <b>delta</b> < 0: ...</li>
<li>Nếu <b>delta</b> = 0: ...</li>
<li>Nếu <b>delta</b> > 0: ...</li>
</ol>`,
        },
        {
          kind: "text",
          text: "Để tạo **danh sách không có thứ tự**, dùng cặp thẻ **`<ul>…</ul>`**. Để chọn kí tự đầu dòng, ta thiết lập giá trị của đặc tính **`list-style-type`** trong thuộc tính **`style`** bằng một trong 4 giá trị: **`disc`**, **`circle`**, **`square`** và **`none`**.",
        },
        {
          kind: "code",
          caption: "Hình 9.2 trong SGK — danh sách không có thứ tự dùng hình vuông",
          preview: true,
          code: `<ul style="list-style-type:square">
<li>Nếu <b>delta</b> &lt; 0: ...</li>
<li>Nếu <b>delta</b> = 0: ...</li>
<li>Nếu <b>delta</b> &gt; 0: ...</li>
</ul>`,
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            { emoji: "🔢", title: "<ol>", text: "Danh sách **có thứ tự** — đánh số / chữ tự động" },
            { emoji: "⚫", title: "<ul>", text: "Danh sách **không có thứ tự** — kí tự đầu dòng" },
            { emoji: "📝", title: "<li>", text: "Mỗi **mục** trong danh sách (dùng cho cả ol và ul)" },
          ],
        },
        {
          kind: "check",
          q: "Muốn tạo danh sách đánh số kiểu chữ cái viết hoa (A, B, C…) thì dùng thuộc tính nào?",
          options: [
            '<ol type="A">',
            '<ol type="a">',
            '<ul type="A">',
            '<ol start="A">',
          ],
          answer: 0,
          explain:
            "Dùng **`<ol type=\"A\">`** để đánh thứ tự bằng chữ cái viết hoa. `type=\"a\"` là chữ thường, còn `<ul>` là danh sách **không** có thứ tự. `start` nhận **số** chứ không nhận chữ.",
        },
      ],
    },

    {
      id: "danh-sach-mo-ta",
      emoji: "📖",
      heading: "Danh sách mô tả",
      blocks: [
        {
          kind: "text",
          text: "**Danh sách mô tả** dùng để liệt kê các mục kèm với **mô tả cho từng mục**. Cấu trúc của đoạn mã tạo danh sách mô tả **khác** với đoạn mã tạo danh sách có hoặc không có thứ tự. Để tạo danh sách mô tả, em dùng **ba thẻ `<dl>`, `<dt>` và `<dd>`**:",
        },
        {
          kind: "list",
          items: [
            "**`<dl>…</dl>`**: bao bọc toàn bộ danh sách mô tả (definition list).",
            "**`<dt>…</dt>`**: tên mục (chẳng hạn như một thuật ngữ hoặc một nhãn).",
            "**`<dd>…</dd>`**: mô tả của mục (định nghĩa của thuật ngữ hoặc mô tả cho nhãn tương ứng).",
          ],
        },
        {
          kind: "code",
          caption: "Hình 9.3 trong SGK — danh sách mô tả hai mục Kem và Trà sữa",
          preview: true,
          code: `<dl>
  <dt><b>Kem</b></dt>
  <dd>Món ăn ngọt, ở dạng đông lạnh.</dd>
  <dt><b>Trà sữa</b></dt>
  <dd>Là đồ uống làm từ hai nguyên liệu trà và sữa.</dd>
</dl>`,
        },
        {
          kind: "note",
          text: "Trong HTML, ta có thể định nghĩa các kiểu danh sách có thứ tự, không có thứ tự và danh sách mô tả bằng các thẻ **`<ol>`**, **`<ul>`** và **`<dl>`**.",
        },
        {
          kind: "example",
          title: "Danh sách lồng nhau",
          text: "Ta có thể tạo ra các danh sách **lồng nhau** bằng cách để một danh sách là **một mục** của một danh sách khác (bằng cách đặt danh sách đó bên trong cụm thẻ `<li>…</li>` của mục tương ứng). Ví dụ: danh sách mức 1 đánh số 1, 2, 3,… và danh sách mức 2 đánh số dạng a, b, c.",
        },
        {
          kind: "check",
          q: "Trong danh sách mô tả, thẻ nào chứa phần giải thích / mô tả cho từng mục?",
          options: [
            "<dl>",
            "<dt>",
            "<dd>",
            "<li>",
          ],
          answer: 2,
          explain:
            "**`<dd>`** chứa phần mô tả (definition description). `<dt>` chứa tên mục (thuật ngữ), `<dl>` bao bọc toàn bộ danh sách, còn `<li>` dùng cho danh sách `<ol>` và `<ul>`.",
        },
      ],
    },

    {
      id: "thiet-lap-bang",
      emoji: "📊",
      heading: "Thiết lập bảng",
      blocks: [
        {
          kind: "text",
          text: "Phần tử bảng được dùng khi ta cần thêm dữ liệu có thể **sắp xếp dưới dạng hàng và cột** vào trang web. Dữ liệu trong bảng có thể là **bất kì loại thông tin nào, không nhất thiết là dạng số**. Bảng là công cụ để tạo ra các bố cục nhiều cột hoặc phân bố nội dung và các khoảng trắng.",
        },
        {
          kind: "text",
          text: "Bảng được tạo từ các **hàng**, mỗi hàng gồm các **ô dữ liệu**. Hàng đầu tiên có thể là hàng **tiêu đề**. Ngôn ngữ HTML xây dựng bảng từ các thành phần tương ứng như trên. Các thành phần lần lượt được định nghĩa bởi các thẻ:",
        },
        {
          kind: "cards",
          tone: "gold",
          items: [
            { emoji: "📦", title: "<table>", text: "Tạo **bảng** — bao bọc toàn bộ bảng" },
            { emoji: "➡️", title: "<tr>", text: "Tạo **hàng** (table row)" },
            { emoji: "📝", title: "<td>", text: "Tạo **ô dữ liệu** (table data)" },
            { emoji: "🏷️", title: "<th>", text: "Tạo **ô tiêu đề** (table header) — chữ đậm, căn giữa" },
          ],
        },
        {
          kind: "code",
          caption: "Hình 9.4 trong SGK — bảng Món ăn, Đơn giá, SL, Thành tiền",
          preview: true,
          code: `<table>
<tr>
  <th>Món ăn</th> <th>Đơn giá</th> <th>SL</th> <th>Thành tiền</th>
</tr>
<tr>
  <td>Thịt xiên</td> <td>10K</td> <td>3</td> <td>30</td>
</tr>
<tr>
  <td>Cá viên</td> <td>5K</td> <td>6</td> <td>30</td>
</tr>
</table>`,
        },
        {
          kind: "check",
          q: "Thẻ nào dùng để tạo một hàng trong bảng HTML?",
          options: [
            "<table>",
            "<tr>",
            "<td>",
            "<th>",
          ],
          answer: 1,
          explain:
            "**`<tr>`** (table row) tạo một hàng. `<table>` tạo cả bảng, `<td>` tạo ô dữ liệu, `<th>` tạo ô tiêu đề.",
        },
      ],
    },

    {
      id: "dinh-dang-bang",
      emoji: "🎨",
      heading: "Định dạng bảng",
      blocks: [
        {
          kind: "text",
          text: "Bảng trong Hình 9.4 có thể được **định dạng thêm** để đẹp và dễ đọc hơn. Các định dạng cơ bản gồm: **thêm tiêu đề cho bảng**, **tạo khung bảng**, **điều chỉnh kích thước hàng/cột/ô** và **gộp ô**.",
        },
        {
          kind: "steps",
          items: [
            {
              label: "1",
              title: "Thêm tiêu đề",
              text: "Sử dụng thẻ **`<caption>`**, ngay sau thẻ `<table>` và trước thẻ `<tr>` đầu tiên.",
            },
            {
              label: "2",
              title: "Tạo khung bảng",
              text: "Trong HTML5, độ dày khung được thiết lập cho viền khung bảng hoặc khung của từng ô bằng thuộc tính con **`border`** của thuộc tính `style`. Cú pháp: **`\"độ_dày_theo_px kiểu_viền [màu_viền]\"`**. Kiểu viền: **solid, dotted, double, none**. Màu viền mặc định là đen.",
            },
            {
              label: "3",
              title: "Điều chỉnh kích thước",
              text: "Sử dụng đặc tính con **`width`** và **`height`** của thuộc tính `style`. Kích thước được đặt có thể là theo **tỉ lệ (%)** với khối bao ngoài đối tượng hoặc theo **số điểm ảnh (px)**.",
            },
            {
              label: "4",
              title: "Gộp ô",
              text: "Sử dụng thuộc tính **`rowspan`** (gộp theo hàng) và **`colspan`** (gộp theo cột). Bản chất là **mở rộng một ô** bằng cách thêm một số hàng hoặc một số cột lân cận có cùng nội dung.",
            },
          ],
        },
        {
          kind: "code",
          caption: "Hình 9.5 trong SGK — ví dụ thuộc tính kích thước của bảng",
          code: `<table style="width:80%;height:400px">
  <tr style="height:15%">...</tr>
  <td style="width:10%">...</td>
</table>`,
        },
        {
          kind: "note",
          text: "Không nên sử dụng kích thước theo px do các thiết bị hiển thị có sự khác nhau về kích thước và số điểm ảnh, có thể dẫn đến bảng **không hiển thị đúng như mong đợi**.",
        },
      ],
    },

    {
      id: "gop-o",
      emoji: "🔗",
      heading: "Gộp hàng và cột",
      blocks: [
        {
          kind: "text",
          text: "Việc gộp ô giúp tạo ra được bảng có **cấu trúc phức tạp** nhưng cũng làm cho việc đánh dấu, theo dõi và kiểm soát số lượng ô trở nên **khó khăn hơn**.",
        },
        {
          kind: "text",
          text: "Để gộp ô trên hàng, sử dụng thuộc tính **`colspan`** — tương tự đối với cột, sử dụng **`rowspan`**:",
        },
        {
          kind: "list",
          items: [
            "Thêm **`rowspan=\"số_hàng_muốn_ghép\"`** cho phần tử `<th>` hoặc `<td>` thuộc hàng đầu tiên cần ghép.",
            "Đối với các hàng tiếp theo: **bỏ qua** cặp thẻ `<th>` hoặc `<td>` tại vị trí tương ứng (nếu bước trên đặt `rowspan=\"3\"` thì bỏ qua hai hàng tiếp theo).",
          ],
        },
        {
          kind: "code",
          caption: "Hình 9.6 trong SGK — bảng điểm thi gộp hàng và cột",
          preview: true,
          code: `<table border="1">
<tr>
  <th rowspan="2">Họ và tên</th>
  <th colspan="3">Điểm thi</th>
</tr>
<tr>
  <td>Toán</td>
  <td>Vật lí</td>
  <td>Hoá học</td>
</tr>
</table>`,
        },
        {
          kind: "note",
          text: "Phần tử bảng dùng để biểu diễn dữ liệu có cấu trúc dạng bảng. Phần tử bảng được tạo bởi các thẻ chính là **`<table>`**, **`<tr>`**, **`<td>`** và **`<th>`**; trình bày bảng bằng thuộc tính **`style`**.",
        },
        {
          kind: "check",
          q: "Muốn ô tiêu đề \"Điểm thi\" trải rộng chiếm 3 cột, ta viết thuộc tính gì?",
          options: [
            'rowspan="3"',
            'colspan="3"',
            'span="3"',
            'width="3"',
          ],
          answer: 1,
          explain:
            "Gộp theo cột dùng **`colspan`** — `colspan=\"3\"` nghĩa là ô đó mở rộng chiếm 3 cột. `rowspan` gộp theo hàng, còn `span` và `width` không dùng cho mục đích gộp ô.",
        },
      ],
    },
  ],

  summary: [
    "Ba dạng danh sách: **`<ol>`** có thứ tự (thuộc tính `type` và `start`), **`<ul>`** không có thứ tự (đặc tính `list-style-type`: disc, circle, square, none), **`<dl>`** mô tả (kèm `<dt>` tên mục và `<dd>` mô tả).",
    "Có thể tạo **danh sách lồng nhau** bằng cách đặt một danh sách bên trong cụm thẻ `<li>…</li>` của mục tương ứng.",
    "Bảng HTML gồm: **`<table>`** tạo bảng, **`<tr>`** tạo hàng, **`<td>`** tạo ô dữ liệu, **`<th>`** tạo ô tiêu đề. Thêm **`<caption>`** sau `<table>` để đặt tiêu đề bảng.",
    "Định dạng bảng bằng thuộc tính **`style`**: **`border`** tạo viền (cú pháp: \"độ_dày kiểu_viền màu_viền\"), **`width`** / **`height`** điều chỉnh kích thước (dùng **%** ưu tiên hơn px).",
    "Gộp ô bằng **`colspan`** (theo cột) và **`rowspan`** (theo hàng) — bản chất là mở rộng một ô rồi **bỏ qua** các ô tương ứng ở hàng/cột tiếp theo.",
  ],
};

export default theory;
