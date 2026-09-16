import type { LessonTheory } from "@/lib/types";

// Bài 8. Định dạng văn bản — SGK Tin học 12 (ICT, Kết nối tri thức), trang
// 46–51. Giữ đúng thuật ngữ sách: thuộc tính thẻ, định dạng tiêu đề / đoạn /
// kiểu chữ / phông chữ, khối (div), quy mô nhỏ hơn (span).
//
// Lưu ý khi soạn: SGK vừa liệt kê thẻ <u> trong Bảng 8.1 (gạch chân), vừa ghi
// ở phần Lưu ý là "HTML5 không hỗ trợ thẻ <big> và <u>". Giữ nguyên cả hai
// theo sách vì đề thi bám SGK, không tự ý bỏ bên nào.

const theory: LessonTheory = {
  minutes: 13,
  intro:
    "Bài 7 em đã viết được trang web, nhưng chữ còn trơ trụi. Bài này dạy cách **làm cho văn bản đẹp và dễ đọc**: chia tiêu đề nhiều cấp, tách đoạn, in đậm in nghiêng, đổi màu và cỡ chữ. Chìa khoá của cả bài chỉ là một thứ — **thuộc tính `style`**.",

  sections: [
    {
      id: "thuoc-tinh",
      emoji: "🔧",
      heading: "Thuộc tính thẻ",
      blocks: [
        {
          kind: "text",
          text: "**Mọi phần tử HTML đều có thể có thuộc tính.** Thuộc tính của thẻ có tác dụng **bổ sung thông tin, làm rõ các điều khiển được thẻ chỉ định**.",
        },
        {
          kind: "figure",
          diagram: "cu-phap-thuoc-tinh",
          caption: "Cú pháp một thuộc tính: tên_thuộc_tính = “giá trị”",
        },
        {
          kind: "note",
          text: "Cú pháp để xác định thuộc tính: **tên_thuộc_tính=\"giá trị\"** — trừ các trường hợp đặc biệt chỉ cần tên thuộc tính để xác định giá trị **Có** hoặc **Không**. Thuộc tính nằm trong **thẻ bắt đầu** (không nằm trong thẻ kết thúc), sau tên thẻ. Thẻ có nhiều hơn một thuộc tính thì **các thuộc tính được ngăn cách bởi dấu cách**.",
        },
        {
          kind: "code",
          caption: "Một thẻ có thể mang nhiều thuộc tính, ngăn nhau bởi dấu cách",
          code: `<Tên_thẻ thuộc_tính_1="giá_trị_1" thuộc_tính_2="giá_trị_2"> Nội dung </Tên_thẻ>`,
        },
        {
          kind: "text",
          text: "Một trong những thuộc tính được sử dụng **thường xuyên nhất là `style`**, dùng để thiết lập định dạng văn bản như **chọn màu sắc, phông chữ, cỡ chữ, kiểu chữ, căn lề, tạo khung**,… cho một phần tử HTML **ngay tại vị trí được viết**.",
        },
        {
          kind: "check",
          q: "Thuộc tính của thẻ được viết ở đâu?",
          options: [
            "Trong thẻ bắt đầu, sau tên thẻ",
            "Trong thẻ kết thúc, sau dấu /",
            "Ở cả thẻ bắt đầu và thẻ kết thúc cho khớp nhau",
            "Ở dòng riêng phía trên thẻ",
          ],
          answer: 0,
          explain:
            "Thuộc tính nằm trong **thẻ bắt đầu, sau tên thẻ** — không nằm trong thẻ kết thúc. Nếu có nhiều thuộc tính thì chúng **ngăn cách nhau bởi dấu cách**.",
        },
      ],
    },

    {
      id: "tieu-de",
      emoji: "📰",
      heading: "Định dạng tiêu đề",
      blocks: [
        {
          kind: "text",
          text: "Để định dạng tiêu đề và các tiêu đề con, ta dùng các thẻ dạng **`<hx>`**, trong đó **x nhận một trong các giá trị từ 1 đến 6**, thể hiện **độ quan trọng giảm dần** của nội dung. Thẻ **`<h1>` nên dùng cho tiêu đề chính hay tiêu đề chung của cả văn bản**; các tiêu đề ở mức thấp hơn dùng `<h2>` rồi tiếp tục với các mức tiếp theo.",
        },
        {
          kind: "code",
          caption: "Ví dụ 1 trong SGK — một văn bản có bốn mức tiêu đề",
          preview: true,
          code: `<h1>Tin học 12</h1>
<h2>Phần chung</h2>
<h3>Chủ đề 1. Máy tính và xã hội tri thức</h3>
<h4>1. Trí tuệ nhân tạo và ứng dụng</h4>
<h4>2. Trí tuệ nhân tạo trong khoa học và đời sống</h4>
<h3>Chủ đề 2. Mạng máy tính và Internet</h3>
<h4>3. Thiết bị mạng</h4>`,
        },
        {
          kind: "example",
          title: "Thẻ tiêu đề không chỉ để cho đẹp",
          text: "Khi sử dụng thẻ `<hx>`, trình duyệt dùng chúng để **hiển thị trang web và định dạng văn bản giúp người dùng đọc lướt trang web theo tiêu đề**. Ngoài ra, **các công cụ tìm kiếm sử dụng thẻ này để xác định cấu trúc và nội dung trang web** — dùng đúng cấp tiêu đề thì trang của em dễ được tìm thấy hơn.",
        },
      ],
    },

    {
      id: "doan-va-khoi",
      emoji: "🧱",
      heading: "Đoạn và khối",
      blocks: [
        {
          kind: "text",
          text: "Một văn bản thường gồm **nhiều đoạn văn bản tách rời nhau**. Cách đơn giản nhất để xác định đoạn là đặt nội dung trong cặp thẻ **`<p>Nội dung</p>`**. Khi gặp cặp thẻ này, trình duyệt sẽ hiển thị nội dung đoạn **trên dòng mới, kèm với khoảng trống nhỏ trước và sau đoạn**.",
        },
        {
          kind: "note",
          text: "Nội dung đoạn có thể chứa văn bản, hình ảnh và cả các phần tử khác, **nhưng không được chứa tiêu đề, danh sách, phần tử phân đoạn hoặc các phần tử dạng khối khác**. Các đoạn được định dạng bằng thẻ `<p>` phù hợp với **văn bản chứa nhiều chữ**.",
        },
        {
          kind: "figure",
          diagram: "div-va-span",
          caption: "Cùng là khối chứa nội dung, nhưng div chiếm trọn dòng còn span nằm gọn trong dòng",
        },
        {
          kind: "text",
          text: "Khi cần thao tác với nhiều loại nội dung, ta có thể dùng phần tử **`<div>`** và thẻ **`<span>`**. Cặp thẻ `<div>…</div>` hay `<span>…</span>` **tạo một khối chứa nội dung bất kì** đặt ở giữa hai thẻ. Phần tử `<div>` là **một khối, bắt đầu trên dòng mới**; trong khi `<span>` có tác dụng tương tự nhưng **sử dụng cho quy mô nhỏ hơn** — nội dung khối hiển thị **trên cùng dòng đang viết**.",
        },
        {
          kind: "code",
          caption: "So sánh trực tiếp: div đẩy nội dung xuống dòng mới, span thì không",
          preview: true,
          code: `<p>Đoạn văn có <span style="color:red">một cụm span</span> nằm giữa dòng.</p>
<div style="color:blue">Còn div thì tự xuống dòng mới.</div>
<p>Đoạn tiếp theo.</p>`,
        },
        {
          kind: "text",
          text: "Ngoài các thẻ định dạng đoạn và khối kể trên, còn có hai thẻ **`<br>`** và **`<hr>`** để **xuống dòng** hoặc **tạo ra một đường kẻ ngang** trên trang web.",
        },
        {
          kind: "code",
          caption: "Cả bốn đoạn p dính liền nhau, nhưng trình duyệt vẫn tách thành từng dòng riêng có khoảng trống",
          preview: true,
          code: `<p>Thẻ p tạo đoạn nội dung, </p><p>thẻ div tạo khối chứa dữ liệu. </p>
<p>Các thẻ này <br> không có hình thức trình bày riêng </p><p> mà được định dạng bằng thuộc tính style. </p>`,
        },
        {
          kind: "check",
          q: "Điểm khác nhau cơ bản giữa <div> và <span> là gì?",
          options: [
            "div dùng cho chữ, còn span dùng cho hình ảnh",
            "div là khối bắt đầu dòng mới, span nằm trong dòng",
            "div phải có thuộc tính style, còn span thì không",
            "span là thẻ đơn còn div là thẻ đôi có thẻ đóng",
          ],
          answer: 1,
          explain:
            "Cả hai đều tạo khối chứa nội dung bất kì. Nhưng **`<div>` là một khối, bắt đầu trên dòng mới**; còn **`<span>` dùng cho quy mô nhỏ hơn**, nội dung của nó hiển thị **trên cùng dòng đang viết**.",
        },
      ],
    },

    {
      id: "kieu-chu",
      emoji: "✒️",
      heading: "Kiểu chữ",
      blocks: [
        {
          kind: "text",
          text: "Một số kiểu chữ thường dùng gồm: **đậm, nghiêng, gạch chân, đánh dấu (highlight)**,… Các đoạn chữ cần thiết lập kiểu chữ được đặt trong **cặp thẻ tương ứng**.",
        },
        {
          kind: "code",
          caption: "Bảng 8.1 của SGK — tám kiểu chữ, xem kết quả ngay bên cạnh",
          preview: true,
          code: `<p>Đây là câu chuẩn</p>
<p>Đây <strong>là câu</strong> chuẩn</p>
<p>Đây <em>là câu</em> chuẩn</p>
<p>Đây <u>là câu</u> chuẩn</p>
<p>Đây <mark>là câu</mark> chuẩn</p>
<p>Đây <small>là câu</small> chuẩn</p>
<p>Đây <sup>là câu</sup> chuẩn</p>
<p>Đây <del>là câu</del> chuẩn</p>`,
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            { emoji: "🅱️", title: "<strong> ; <b>", text: "Chữ **đậm**" },
            { emoji: "🇮", title: "<em> ; <i>", text: "Chữ *nghiêng*" },
            { emoji: "➖", title: "<u>", text: "Gạch chân" },
            { emoji: "🖍️", title: "<mark>", text: "Đánh dấu (bôi vàng)" },
            { emoji: "🔡", title: "<small>", text: "Giảm cỡ chữ" },
            { emoji: "🔢", title: "<sup> ; <sub>", text: "Chỉ số trên hoặc chỉ số dưới" },
            { emoji: "🚫", title: "<del>", text: "Đánh dấu xoá bằng nét gạch giữa chữ" },
          ],
        },
        {
          kind: "note",
          text: "**HTML5 không hỗ trợ thẻ `<big>` và `<u>`** — để điều khiển, nên thay bằng giá trị **`font-size`** và **`text-decoration`** trong thuộc tính `style`.",
        },
        {
          kind: "example",
          title: "strong / em khác gì b / i?",
          text: "Các thẻ `<strong>`, `<em>` có **cùng tác dụng định dạng** chữ đậm, nghiêng giống các thẻ `<b>`, `<i>`. Nhưng `<strong>` và `<em>` **có ý nghĩa nhấn mạnh vào ngữ nghĩa của nội dung** và **được khuyến khích sử dụng nhiều hơn** trong định dạng văn bản.",
        },
        {
          kind: "code",
          caption: "Ví dụ 2 trong SGK — đặt em ở chỗ khác nhau thì nhấn mạnh ý khác nhau",
          preview: true,
          code: `<p>Môn <em>Tin học</em> rất hay.</p>
<p>Môn Tin học <em>rất</em> hay.</p>`,
        },
        {
          kind: "check",
          q: "Vì sao SGK khuyến khích dùng <strong> và <em> nhiều hơn <b> và <i>?",
          options: [
            "Vì <strong> và <em> hiển thị đẹp hơn hẳn",
            "Vì <strong> và <em> nhấn mạnh về mặt ngữ nghĩa",
            "Vì <b> và <i> đã bị HTML5 loại bỏ hoàn toàn",
            "Vì <strong> và <em> gõ nhanh hơn khi soạn mã",
          ],
          answer: 1,
          explain:
            "Bốn thẻ có **cùng tác dụng định dạng** (đậm, nghiêng). Khác biệt nằm ở ý nghĩa: `<strong>` và `<em>` **nhấn mạnh vào ngữ nghĩa của nội dung** chứ không chỉ đổi hình thức, nên **được khuyến khích dùng nhiều hơn**.",
        },
      ],
    },

    {
      id: "phong-chu",
      emoji: "🎨",
      heading: "Phông chữ",
      blocks: [
        {
          kind: "text",
          text: "Để định dạng phông chữ ta sử dụng **thuộc tính `style`**. Ba thuộc tính hay dùng nhất:",
        },
        {
          kind: "list",
          items: [
            "**Màu sắc:** `<p style=\"color:màu\">Nội dung.</p>`",
            "**Phông chữ:** `<p style=\"font-family:tên phông\">Nội dung.</p>`",
            "**Cỡ chữ:** `<p style=\"font-size:cỡ\">Nội dung.</p>`",
          ],
        },
        {
          kind: "text",
          text: "Có nhiều cách xác định cỡ chữ, phổ biến là **dùng số kèm đơn vị (px-pixel, mm, cm,…)** hoặc **cỡ chữ thông dụng (small, medium, large,…)**. Giá trị màu sắc được viết **theo tiếng Anh**: red, green, blue, grey, yellow, black, brown,… hoặc dùng **giá trị màu trong hệ RGB**.",
        },
        {
          kind: "note",
          text: "Khi muốn thực hiện **nhiều định dạng phông đồng thời**, ta đặt các cặp **tên:giá trị** trong phần giá trị của thuộc tính, **ngăn cách nhau bởi dấu “;”**.",
        },
        {
          kind: "code",
          caption: "Ba cách gọi màu, ba cách đặt cỡ chữ, và cách gộp nhiều định dạng bằng dấu ;",
          preview: true,
          code: `<p style="color:red">Màu gọi theo tên tiếng Anh</p>
<p style="color:rgb(0,0,255)">Màu gọi theo hệ RGB</p>
<p style="font-size:22px">Cỡ chữ theo số pixel</p>
<p style="font-size:large">Cỡ chữ thông dụng</p>
<p style="color:green;font-family:Tahoma;font-size:20px">Gộp cả ba, ngăn nhau bởi dấu ;</p>`,
        },
        {
          kind: "text",
          text: "Ghép tất cả những gì đã học trong bài, em viết được một văn bản hoàn chỉnh có tiêu đề nhiều cấp, chữ màu, chỉ số trên và chỉ số dưới:",
        },
        {
          kind: "code",
          caption: "Bài thực hành trong SGK — biện luận số nghiệm phương trình bậc 2",
          preview: true,
          code: `<h1>Biện luận số nghiệm của phương trình bậc 2</h1>
<h3><span style="color:rgb(205,0,0)">Bài toán:</span> Xác định số nghiệm của
phương trình ax<sup>2</sup> + bx + c = 0 (a != 0)</h3>
<h3 style="color:rgb(205,0,0)">Cách làm:</h3>
<p><strong>B<sub>1</sub></strong>: Xác định hệ số a, b và c</p>
<p><strong>B<sub>2</sub></strong>: Tính <strong>delta</strong> = b<sup>2</sup> - 4ac</p>
<p><strong>B<sub>3</sub></strong>: Kết luận<br>
+ Nếu <strong>delta</strong> &lt; 0: Phương trình <em>vô nghiệm</em><br>
+ Nếu <strong>delta</strong> = 0: Phương trình có <em>nghiệm duy nhất</em><br>
+ Nếu <strong>delta</strong> &gt; 0: Phương trình có hai <em>nghiệm phân biệt</em></p>`,
        },
        {
          kind: "check",
          q: "Muốn một đoạn văn bản vừa có chữ màu xanh, vừa dùng phông Tahoma, vừa cỡ 20px thì viết thế nào?",
          options: [
            '<p style="color:blue" style="font-family:Tahoma" style="font-size:20px">',
            '<p style="color:blue,font-family:Tahoma,font-size:20px">',
            '<p style="color:blue;font-family:Tahoma;font-size:20px">',
            '<p color="blue" font="Tahoma" size="20px">',
          ],
          answer: 2,
          explain:
            "Nhiều định dạng phông cùng lúc thì đặt **tất cả các cặp tên:giá trị trong MỘT thuộc tính `style`**, **ngăn cách nhau bởi dấu chấm phẩy “;”**. Không viết nhiều thuộc tính `style` rời nhau, cũng không ngăn bằng dấu phẩy.",
        },
      ],
    },
  ],

  summary: [
    "**Mọi phần tử HTML đều có thể có thuộc tính**. Cú pháp: **tên_thuộc_tính=\"giá trị\"**, viết trong **thẻ bắt đầu**, nhiều thuộc tính thì **ngăn nhau bởi dấu cách**.",
    "Một văn bản thường gồm hai thành phần cơ bản: **tiêu đề** định dạng bởi thẻ `<h1>` đến `<h6>` (6 mức, quan trọng giảm dần) và **đoạn văn bản** định dạng bởi thẻ `<p>`.",
    "**Khối** là phần tử chứa nhiều loại dữ liệu, định nghĩa bởi **`<div>`** (bắt đầu trên dòng mới) và **`<span>`** (nằm trong dòng đang viết, quy mô nhỏ hơn).",
    "Mỗi kiểu chữ có thẻ riêng: **`<strong>`/`<b>`** đậm, **`<em>`/`<i>`** nghiêng, **`<u>`** gạch chân, **`<mark>`** đánh dấu, **`<small>`** giảm cỡ, **`<sup>`/`<sub>`** chỉ số trên/dưới, **`<del>`** gạch giữa chữ.",
    "`<strong>` và `<em>` **nhấn mạnh vào ngữ nghĩa** nên được khuyến khích dùng hơn `<b>`, `<i>`.",
    "**Để định dạng phông chữ ta dùng thuộc tính `style`** trong HTML5: `color`, `font-family`, `font-size`. Nhiều định dạng cùng lúc thì **ngăn nhau bởi dấu “;”**.",
  ],
};

export default theory;
