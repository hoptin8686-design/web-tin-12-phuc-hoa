import type { LessonTheory } from "@/lib/types";

// Bài 16. Định dạng khung — SGK Tin học 12 (ICT, Kết nối tri thức),
// trang 89–95. Giữ đúng thuật ngữ sách: phần tử khối/nội tuyến, khung
// (margin/border/padding/width/height), bộ chọn lớp/id/thuộc tính.
//
// LƯU Ý VỀ LỖI IN: SGK trang 92, ví dụ bộ chọn lớp viết ".waring {color:
// red;}" (thiếu chữ "n") trong khi đoạn chú thích và ví dụ HTML phía dưới
// đều dùng đúng chính tả "warning" (class="warning"). Đây là lỗi in — nếu
// gõ đúng y hệt sách thì luật CSS .waring sẽ KHÔNG khớp class="warning" nên
// không cho kết quả như sách mô tả. Xử lí theo mục 7.4 của hướng dẫn soạn
// bài: khối "code preview" tương tác dùng chính tả ĐÚNG ".warning" để chạy
// đúng như sách mô tả, kèm một khối "example" chú thích ngắn về lỗi in này
// để học sinh không hoang mang nếu đối chiếu với sách giấy.

const theory: LessonTheory = {
  minutes: 13,

  intro:
    "Bài này học cách phân biệt **phần tử khối và nội tuyến**, cách dùng CSS để định dạng **khung** (kích thước, lề, viền, vùng đệm) cho phần tử, và ba kiểu **bộ chọn đặc biệt**: lớp (class), mã định danh (id) và thuộc tính.",

  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "khoi-va-noi-tuyen",
      emoji: "📦",
      heading: "Phân loại phần tử khối và nội tuyến",
      blocks: [
        {
          kind: "text",
          text: "Các thẻ (phần tử) HTML được chia làm hai loại: **khối** (block level) và **nội tuyến** (inline level). Phần tử khối thường bắt đầu từ đầu hàng và kéo dài suốt chiều rộng của trang web. Phần tử nội tuyến là các phần tử nhúng bên trong một phần tử khác, không tự xuống hàng.",
        },
        {
          kind: "compare",
          left: {
            title: "Phần tử khối (block)",
            emoji: "🧱",
            items: ["h1 – h6, p, div, address, nav, article, section, aside", "form, header, footer, table, hr, ol, ul, li, canvas"],
          },
          right: {
            title: "Phần tử nội tuyến (inline)",
            emoji: "🔤",
            items: ["b, span, a, img, em, strong, sub, sup, var, samp", "cite, dfn, kbd, pre, code, q, i, u, del, ins, mark, br, label, textarea, input, script"],
          },
        },
        {
          kind: "text",
          text: "Có thể thay đổi loại phần tử HTML bằng thuộc tính **display**. Các giá trị của thuộc tính này gồm **block, inline, none**. Giá trị **none** sẽ làm ẩn (không hiển thị) phần tử trên trang web.",
        },
        {
          kind: "code",
          caption: "Hình 16.2 SGK — đổi phần tử span từ nội tuyến (mặc định) sang khối",
          preview: true,
          code: `<style>
span {display: block; text-indent: 2em; color: red;}
p {color: blue;}
</style>
<h1>Kiểu thể hiện</h1>
<p> Đây là phần đầu...
<span>dòng thứ nhất</span>
<span>dòng tiếp theo</span>
<span>dòng tiếp theo nữa...</span>
đây là phần cuối của đoạn </p>`,
        },
        {
          kind: "note",
          text: "Các phần tử HTML đều thuộc một trong hai loại khối (block) hoặc nội tuyến (inline). Có thể dùng thuộc tính **display** để thay đổi loại phần tử — với ba giá trị thường dùng: **block, inline, none**.",
        },
        {
          kind: "check",
          q: "Thuộc tính CSS nào dùng để ẩn hoàn toàn một phần tử khỏi trang web?",
          options: ["display: none;", "display: block;", "display: inline;", "color: none;"],
          answer: 0,
          explain: "Giá trị none của thuộc tính display sẽ làm ẩn (không hiển thị) phần tử trên trang web — đây cũng là đáp án cho câu hỏi Luyện tập 1 của SGK.",
        },
        {
          kind: "check",
          q: "Trong các phần tử sau, phần tử nào thuộc loại NỘI TUYẾN (inline)?",
          options: ["span", "div", "p", "table"],
          answer: 0,
          explain: "span là phần tử nội tuyến theo Bảng 16.1 SGK. div, p, table đều là phần tử khối (block).",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "khung-css",
      emoji: "📐",
      heading: "Thiết lập định dạng khung bằng CSS",
      blocks: [
        {
          kind: "text",
          text: "Với phần tử dạng khối, khung được xác định với đầy đủ tính chất; còn với phần tử nội tuyến, khung chỉ có thể thiết lập viền và vùng đệm, **không có** các thông số chiều cao, chiều rộng.",
        },
        {
          kind: "figure",
          diagram: "box-model-khung",
          caption: "Hình 16.3 SGK — các thông số chính của khung (mô hình hộp CSS)",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            { emoji: "↔️", title: "width / height", text: "Chiều rộng / chiều cao của khung. Chỉ áp dụng cho phần tử dạng khối." },
            { emoji: "🧊", title: "padding", text: "Vùng đệm — khoảng cách từ vùng text đến đường viền ngoài của khung." },
            { emoji: "🖼️", title: "margin", text: "Lề khung — khoảng cách từ đường viền ngoài của khung đến văn bản xung quanh (nếu có)." },
            { emoji: "🎨", title: "border-color / border-width / border-style", text: "Màu, độ dày và kiểu đường viền khung (kiểu: none, solid, dotted, dashed, double, inset, outset, ridge, groove)." },
          ],
        },
        {
          kind: "text",
          text: "Thuộc tính **border** có thể gán đồng thời cả ba thuộc tính border-width, border-style, border-color, ví dụ: `{border: 2px solid red;}`. Lưu ý: **tất cả các thuộc tính khung ở trên đều KHÔNG có tính kế thừa** — khác với color/background-color đã học ở Bài 15.",
        },
        {
          kind: "code",
          caption: "Hình 16.4 SGK — định dạng khung viền cho h1 và em",
          preview: true,
          tall: true,
          code: `<style>
h1 {
  border: 5px ridge blue;
  margin: 20px;
  width: 200px;
  padding: 10px;
}
em {border: 2px double red;}
</style>
<h1> Lịch sử CSS </h1>
<p>Ý tưởng của CSS do kĩ sư <em>Håkon Wium Lie</em>, người Na Uy, thiết lập năm 1994 trong khi làm việc với Tim Berners-Lee tại viện hạt nhân CERN.</p>`,
        },
        {
          kind: "note",
          text: "Có thể thiết lập định dạng khung cho các phần tử bằng CSS. Cần phân biệt hai loại phần tử khối và phần tử nội tuyến với các thông số khác nhau — phần tử nội tuyến không có width, height.",
        },
        {
          kind: "check",
          q: "Trong các thuộc tính khung của một phần tử HTML, khoảng cách từ vùng văn bản đến đường viền khung được gọi là gì?",
          options: ["padding (vùng đệm)", "margin (lề khung)", "border (khung viền)", "width (chiều rộng)"],
          answer: 0,
          explain: "padding là khoảng cách từ vùng text đến đường viền ngoài của khung. margin là khoảng cách từ viền ngoài khung ra văn bản xung quanh, tính từ phía ngoài border.",
        },
        {
          kind: "check",
          q: "Thuộc tính width (chiều rộng khung) có thể áp dụng cho loại phần tử nào?",
          options: ["Chỉ phần tử dạng khối (block)", "Chỉ phần tử dạng nội tuyến (inline)", "Cả hai loại như nhau", "Không phần tử nào dùng được"],
          answer: 0,
          explain: "Theo Bảng 16.2 SGK, width và height chỉ áp dụng cho phần tử dạng khối; phần tử nội tuyến chỉ có thể thiết lập viền và vùng đệm.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "bo-chon-dac-biet",
      emoji: "🎯",
      heading: "Một số bộ chọn đặc biệt của CSS",
      blocks: [
        {
          kind: "text",
          text: "Trên một trang web thường có rất nhiều phần tử cùng loại — một định dạng với bộ chọn là tên thẻ (ví dụ p) sẽ áp dụng cho TẤT CẢ các thẻ đó. Muốn phân biệt và định dạng riêng cho từng nhóm hoặc từng phần tử cụ thể, CSS cung cấp ba kiểu bộ chọn đặc biệt: **lớp (class), mã định danh (id)** và **thuộc tính**.",
        },
        {
          kind: "text",
          text: "**a) Bộ chọn lớp (class).** Cấu trúc chung: `.class {thuộc tính: giá trị;}`. Một phần tử có thể thuộc nhiều lớp cùng lúc, khai báo cách nhau bởi dấu cách, ví dụ `<p class=\"test more once\">`.",
        },
        {
          kind: "code",
          caption: "Ví dụ bộ chọn lớp — đoạn có class=\"test\" chữ xanh đậm, đoạn có class=\"warning\" chữ đỏ",
          preview: true,
          code: `<style>
.warning {color: red;}
.test {
  color: blue;
  font-weight: bold;
}
</style>
<p class="test"> Thông tin đang test </p>
<p class="warning"> Thông tin cần warning. </p>`,
        },
        {
          kind: "example",
          title: "Đối chiếu với sách",
          text: "Bản in SGK trang 92 gõ luật này là `.waring` (thiếu chữ “n”) — đây là lỗi in, vì đoạn chú thích ngay bên cạnh và ví dụ HTML phía dưới đều dùng đúng chính tả **warning**. Khung xem trước ở trên đã sửa lại đúng chính tả để chạy ra kết quả giống mô tả của sách.",
        },
        {
          kind: "text",
          text: "**b) Bộ chọn mã định danh (id).** Mỗi phần tử chỉ có **một** id duy nhất trong toàn trang. Cấu trúc chung: `#idname {thuộc tính: giá trị;}`. Ví dụ: `#home {color: red;}` áp dụng cho phần tử có id=\"home\"; `p#home {font-size: 150%;}` áp dụng riêng cho phần tử **p** có id=\"home\".",
        },
        {
          kind: "text",
          text: "**c) Bộ chọn thuộc tính.** Áp dụng cho các phần tử được gắn với một thuộc tính cụ thể. Ví dụ: `[href] {border: 1px solid blue;}` áp dụng cho mọi phần tử có thuộc tính href; `a[target=\"_blank\"] {color: red; font-weight: bold;}` áp dụng riêng cho thẻ a có target=\"_blank\".",
        },
        {
          kind: "list",
          items: [
            "Tên id và class **phân biệt chữ in hoa, in thường**.",
            "Tên bắt buộc phải có ít nhất một kí tự không phải số, **không bắt đầu bằng số**, không chứa dấu cách và kí tự đặc biệt.",
          ],
        },
        {
          kind: "note",
          text: "Có thể thiết lập các mẫu định dạng với bộ chọn là **class, ID hoặc thuộc tính**.",
        },
        {
          kind: "check",
          q: "Khác biệt cơ bản nhất giữa thuộc tính id và class của phần tử HTML là gì?",
          options: [
            "id chỉ gắn cho một phần tử duy nhất, class dùng chung nhiều phần tử",
            "id chỉ dùng được cho thẻ p, còn class dùng được cho mọi thẻ khác",
            "class phân biệt chữ hoa/thường, còn id thì không hề phân biệt",
            "id không thể kết hợp với tên thẻ, class thì bắt buộc phải kèm",
          ],
          answer: 0,
          explain: "Mỗi phần tử chỉ có một id duy nhất trong toàn trang web; còn một lớp (class) có thể được gán cho nhiều phần tử khác nhau để áp dụng định dạng chung.",
        },
        {
          kind: "check",
          q: "Bộ chọn div#bat_dau > p áp dụng cho phần tử nào?",
          options: [
            "Phần tử p là con trực tiếp của div có id=\"bat_dau\"",
            "Mọi phần tử p bất kì trong trang, không cần điều kiện",
            "Phần tử div có id=\"bat_dau\", gắn thêm lớp tên là p",
            "Phần tử p đứng ngay trước div có id=\"bat_dau\"",
          ],
          answer: 0,
          explain: "div#bat_dau chọn phần tử div có id=\"bat_dau\"; kết hợp với > p (bộ chọn con trực tiếp đã học ở Bài 15) nghĩa là áp dụng cho p là con trực tiếp của div đó — đây chính là câu hỏi 2a trong SGK.",
        },
        {
          kind: "check",
          q: "Bộ chọn .test .test_more {background-color: red;} (câu Luyện tập 2 SGK) áp dụng cho phần tử nào?",
          options: [
            "Phần tử có lớp test_more, với điều kiện nó là con/cháu của một phần tử có lớp test",
            "Phần tử vừa có lớp test vừa có lớp test_more gán cùng lúc trên một thẻ duy nhất",
            "Chỉ áp dụng cho phần tử là con trực tiếp của lớp test, không tính tới các cháu xa hơn",
            "Mọi phần tử có lớp test hoặc có lớp test_more, không đòi hỏi quan hệ gì giữa chúng",
          ],
          answer: 0,
          explain: ".test .test_more là bộ chọn quan hệ con cháu (E F, học ở Bài 15) áp dụng cho .test và .test_more — tức phần tử mang lớp test_more phải nằm trong (là con/cháu của) một phần tử mang lớp test.",
        },
      ],
    },
    {
      id: "meo-nho-va-cam-bay",
      emoji: "💡",
      heading: "Mẹo nhớ & Cảnh báo bẫy",
      blocks: [
        {
          kind: "text",
          text: "Định dạng khung (Box Model) và các bộ chọn đặc biệt là nội dung thực hành rất trọng tâm. Hãy ghi nhớ các mẹo phân biệt và bẫy trắc nghiệm dưới đây:",
        },
        {
          kind: "cards",
          tone: "leaf",
          items: [
            {
              emoji: "📦",
              title: "Thứ tự 4 lớp mô hình hộp (Box Model)",
              text: "Từ trong ra ngoài: **Nội dung (Content)** → **Đệm (Padding)** → **Viền (Border)** → **Lề (Margin)**. Nhớ từ khoá: *Padding là đệm bên trong viền, Margin là khoảng cách bên ngoài viền*.",
            },
            {
              emoji: "⏰",
              title: "Quy tắc kim đồng hồ: TRÊN - PHẢI - DƯỚI - TRÁI",
              text: "Khi viết 4 giá trị ngắn gọn: `margin: 10px 20px 30px 40px;` tương ứng với **Top (Trên) → Right (Phải) → Bottom (Dưới) → Left (Trái)** (theo chiều kim đồng hồ bắt đầu từ 12 giờ).",
            },
            {
              emoji: "🎯",
              title: "Dấu chấm (.) vs Dấu thăng (#)",
              text: "**.class** (dấu chấm): giống như *tên lớp học*, nhiều phần tử có thể cùng chung một lớp. **#id** (dấu thăng): giống như *số CCCD*, mỗi phần tử chỉ có đúng 1 mã duy nhất trong toàn trang web.",
            },
            {
              emoji: "🧱",
              title: "Khối vs Nội tuyến: width và height",
              text: "Chỉ có **phần tử khối (block)** mới chỉnh được `width` và `height`. Phần tử **nội tuyến (inline)** không nhận `width/height` (muốn nhận phải đổi sang `display: block`).",
            },
          ],
        },
        {
          kind: "compare",
          left: {
            emoji: "❌",
            title: "Bẫy câu chữ đề thi hay gài",
            items: [
              "Padding là khoảng cách bên ngoài đường viền",
              "Thẻ span hay a có thể đặt thuộc tính width",
              "Tên ID và Class được phép bắt đầu bằng chữ số",
              "Thuộc tính khung (margin, border) có tính kế thừa",
              "display: none; chỉ làm mờ đi chứ không ẩn phần tử",
            ],
          },
          right: {
            emoji: "✅",
            title: "Bản chất chính xác cần chọn",
            items: [
              "**Margin** mới là ngoài viền; **Padding** là đệm bên trong",
              "Thẻ nội tuyến (span, a) **không có width/height**",
              "Tên ID/Class **bắt buộc không được bắt đầu bằng số**",
              "Mọi thuộc tính khung đều **KHÔNG có tính kế thừa**",
              "display: none; **làm ẩn hoàn toàn** khỏi trang web",
            ],
          },
        },
        {
          kind: "check",
          q: "Khai báo CSS nào sau đây sẽ thiết lập lề trên và lề dưới là 10px, lề trái và lề phải là 20px?",
          options: [
            "margin: 10px 20px; (giá trị 1: trên/dưới, giá trị 2: trái/phải)",
            "margin: 20px 10px; (giá trị 1: trái/phải, giá trị 2: trên/dưới)",
            "padding: 10px 20px; (vì khoảng cách lề được gọi là padding)",
            "border: 10px 20px; (vì đường bao quanh phần tử là border)",
          ],
          answer: 0,
          explain:
            "margin: 10px 20px; viết theo dạng 2 giá trị rút gọn: giá trị thứ nhất (10px) cho trên/dưới (Top/Bottom), giá trị thứ hai (20px) cho trái/phải (Left/Right).",
        },
      ],
    },
  ],

  summary: [
    "Phần tử HTML chia hai loại: **khối** (bắt đầu từ đầu hàng, chiếm hết chiều rộng) và **nội tuyến** (nhúng trong phần tử khác). Đổi loại bằng thuộc tính **display: block/inline/none**.",
    "Khung của phần tử gồm 4 lớp lồng nhau: **nội dung → padding (vùng đệm) → border (viền) → margin (lề)**. width/height chỉ áp dụng cho phần tử khối. Mọi thuộc tính khung đều **không có tính kế thừa**.",
    "Ba kiểu bộ chọn đặc biệt: **.class** (nhiều phần tử cùng lớp), **#id** (một phần tử duy nhất trong trang), **[thuộc tính]** (phần tử có gắn thuộc tính cụ thể).",
  ],
};

export default theory;
