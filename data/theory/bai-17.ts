import type { LessonTheory } from "@/lib/types";

// Bài 17. Các mức ưu tiên của bộ chọn — SGK Tin học 12 (ICT, Kết nối tri
// thức), trang 96–101. Giữ đúng thuật ngữ sách: lớp giả (pseudo-class),
// phần tử giả (pseudo-element), trọng số (specificity), thứ tự cuối cùng
// (rule order / cascading).

const theory: LessonTheory = {
  minutes: 13,

  intro:
    "Bài này học hai kiểu bộ chọn mô tả **trạng thái tương tác**: pseudo-class và pseudo-element; và quy tắc quan trọng nhất khi nhiều mẫu CSS cùng tranh nhau áp dụng cho một phần tử — **bảy mức ưu tiên** và cách tính **trọng số bộ chọn**.",

  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "pseudo-class-va-element",
      emoji: "👻",
      heading: "Bộ chọn pseudo-class và pseudo-element",
      blocks: [
        {
          kind: "text",
          text: "Các lệnh CSS đã học đều chỉ áp dụng cho các phần tử **tĩnh**, không phụ thuộc vào tương tác với người dùng. CSS còn cung cấp cách định dạng cho các **trạng thái tương tác**, ví dụ khi người dùng di chuyển hay nháy chuột lên phần tử.",
        },
        {
          kind: "text",
          text: "**a) Pseudo-class (lớp giả)** là khái niệm chỉ các trạng thái đặc biệt của phần tử HTML — không cần định nghĩa, được coi như lớp có sẵn của CSS. Cú pháp viết sau dấu **một dấu hai chấm** `:` — `:pseudo-class {thuộc tính: giá trị;}`.",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            { emoji: "🔗", title: ":link", text: "Tất cả các liên kết khi chưa được kích hoạt. Ví dụ: a:link {color: blue;}" },
            { emoji: "✅", title: ":visited", text: "Tất cả các liên kết sau khi đã được kích hoạt một lần. Ví dụ: a:visited {color: gray;}" },
            { emoji: "🖱️", title: ":hover", text: "Tất cả các phần tử, khi người dùng di chuyển con trỏ chuột lên đối tượng. Ví dụ: #home:hover {font-size: 150%;}" },
          ],
        },
        {
          kind: "code",
          caption: "Hình 17.1 SGK — liên kết đỏ mặc định, xanh lá sau khi đã bấm, hồng khi rê chuột (thử di chuột vào liên kết)",
          preview: true,
          code: `<style>
a:link {color: red;}
a:visited {color: green;}
a:hover {color: magenta;}
h1 {color: blue;}
</style>
<h1>CSS là gì</h1>
<p><a href="#p1">Tự học nhanh CSS</a></p>
<p>CSS (Cascading Style Sheets) là ngôn ngữ định dạng đặc biệt được dùng để mô tả cách thể hiện của văn bản HTML trong trang web.</p>`,
        },
        {
          kind: "text",
          text: "**b) Pseudo-element (phần tử giả)** là khái niệm chỉ **một phần hoặc một thành phần** của các phần tử bình thường — được coi là một phần tử giả và có thể thiết lập mẫu định dạng CSS riêng. Cú pháp viết sau **hai dấu hai chấm** `::` — `::pseudo-element {thuộc tính: giá trị;}`.",
        },
        {
          kind: "cards",
          tone: "coral",
          items: [
            { emoji: "1️⃣", title: "::first-line", text: "Dòng đầu tiên của đối tượng. Ví dụ: p.test::first-line {font-family: monospace;}" },
            { emoji: "🔤", title: "::first-letter", text: "Kí tự đầu tiên của đối tượng. Ví dụ: p#first::first-letter {font-size: 200%;}" },
            { emoji: "🖍️", title: "::selection", text: "Phần được chọn bằng cách kéo thả chuột. Ví dụ: ::selection {background-color: lime;}" },
          ],
        },
        {
          kind: "code",
          caption: "Hình 17.2 SGK — dòng đầu tiên của mỗi đoạn p hiển thị đỏ, phông đều, cỡ chữ lớn hơn 1,2 lần",
          preview: true,
          code: `<style>
p::first-line {
  color: red;
  font-family: monospace;
  font-size: 120%;
}
</style>
<p>HTML là ngôn ngữ đánh dấu siêu văn bản, là ngôn ngữ đặc biệt dùng để thiết kế nội dung các trang web và được thể hiện bằng trình duyệt.</p>
<p>CSS là ngôn ngữ định dạng đặc biệt được dùng để mô tả cách thể hiện của văn bản HTML trong trang web.</p>`,
        },
        {
          kind: "note",
          text: "CSS hỗ trợ thiết lập định dạng cho các **lớp giả (pseudo-class)** và **phần tử giả (pseudo-element)**. Lớp giả mô tả các trạng thái được định nghĩa trước của phần tử. Phần tử giả mô tả các thành phần (nhỏ hơn) của phần tử.",
        },
        {
          kind: "check",
          q: "Muốn đổi màu chữ một đoạn văn bản khi người dùng di chuyển chuột qua đoạn đó, cần dùng lớp giả nào?",
          options: [":hover", ":link", ":visited", "::selection"],
          answer: 0,
          explain: ":hover áp dụng cho phần tử khi người dùng di chuyển con trỏ chuột lên đối tượng — đây cũng là câu hỏi 2 phần Luyện tập của SGK.",
        },
        {
          kind: "check",
          q: "Sự khác biệt cơ bản giữa pseudo-class và pseudo-element là gì?",
          options: [
            "Pseudo-class mô tả trạng thái; pseudo-element mô tả thành phần nhỏ hơn",
            "Pseudo-class chỉ dùng cho a; pseudo-element chỉ dùng riêng cho p",
            "Pseudo-class viết bằng ::, còn pseudo-element viết bằng dấu :",
            "Hai khái niệm hoàn toàn giống hệt nhau, chỉ khác mỗi tên gọi",
          ],
          answer: 0,
          explain: "Pseudo-class (viết với 1 dấu :) mô tả trạng thái đặc biệt của phần tử (như :hover); pseudo-element (viết với 2 dấu ::) mô tả một phần/thành phần nhỏ hơn của phần tử (như ::first-letter).",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "muc-do-uu-tien",
      emoji: "⚖️",
      heading: "Mức độ ưu tiên khi áp dụng CSS",
      blocks: [
        {
          kind: "text",
          text: "Khi có **nhiều mẫu định dạng** có thể áp dụng cho cùng một phần tử HTML, CSS sẽ áp dụng định dạng theo **thứ tự ưu tiên**. Ở các bài trước, ta đã biết hai quy tắc: **tính kế thừa** và **quy định thứ tự cuối cùng** (cascading). Trên thực tế, quy định chọn mẫu định dạng ưu tiên từ cao xuống thấp của CSS gồm **bảy mức**.",
        },
        {
          kind: "figure",
          diagram: "thang-bay-muc-uu-tien",
          caption: "Bảng 17.3 SGK — bảy mức ưu tiên của CSS, từ cao xuống thấp",
        },
        {
          kind: "text",
          text: "Mức 3 (CSS theo kích thước thiết bị) dùng chỉ thị **@media** để điều khiển cách hiển thị tuỳ theo kích thước màn hình thiết bị. Ví dụ, mẫu sau tăng cỡ chữ lên 150% nếu chiều ngang màn hình nhỏ hơn 600px:",
        },
        {
          kind: "code",
          caption: "Ví dụ SGK — định dạng theo kích thước thiết bị bằng @media",
          code: `@media only screen and (max-width: 600px) {
  body {font-size: 150%;}
}`,
        },
        {
          kind: "text",
          text: "Nếu tính kế thừa và nguyên tắc thứ tự cuối cùng đã xếp dưới **trọng số CSS**, thì khi có một dãy mẫu CSS cùng có thể áp dụng cho một phần tử, CSS sẽ tính **trọng số (specificity)** của từng mẫu — mẫu nào có trọng số **lớn hơn** sẽ được áp dụng. Cách tính: trọng số của bộ chọn bằng **tổng giá trị đóng góp** của từng thành phần trong bộ chọn.",
        },
        {
          kind: "cards",
          tone: "gold",
          items: [
            { emoji: "🆔", title: "Mã định danh (ID)", text: "Đóng góp 100 điểm vào trọng số." },
            { emoji: "🏷️", title: "Lớp, lớp giả, thuộc tính", text: "Class, pseudo-class, attribute selector — mỗi cái đóng góp 10 điểm." },
            { emoji: "🔤", title: "Phần tử, phần tử giả", text: "Element, pseudo-element — mỗi cái đóng góp 1 điểm." },
            { emoji: "⭐", title: "Bộ chọn *", text: "Bộ chọn mọi phần tử (universal selector) đóng góp 0 điểm." },
          ],
        },
        {
          kind: "figure",
          diagram: "tinh-trong-so-bo-chon",
          caption: "Bảng 17.5 SGK — ví dụ tính trọng số bộ chọn p > em#p123",
        },
        {
          kind: "example",
          title: "Trở lại ví dụ Hoạt động 2",
          text: "Với `<p class=\"test\">Tin học 12</p>` và hai mẫu `.test {color: green;}` (trọng số 10, vì là class) cùng `p {color: red;}` (trọng số 1, vì là phần tử) — mẫu `.test` có trọng số cao hơn nên cụm từ **“Tin học 12” sẽ có màu xanh lá cây**.",
        },
        {
          kind: "note",
          text: "Nếu có nhiều mẫu định dạng CSS **cùng mức ưu tiên** áp dụng cho một phần tử HTML thì mẫu CSS nào có **trọng số cao nhất** sẽ được áp dụng.",
        },
        {
          kind: "check",
          q: "Tính trọng số của bộ chọn h1, h2, h3, h4 > #new (câu hỏi 1b Luyện tập SGK, coi dấu phẩy tách các bộ chọn độc lập — tính riêng nhánh h4 > #new).",
          options: ["101 (h4 = 1 điểm, cộng ID #new = 100 điểm)", "11 (h4 tính là 1 điểm, cộng thêm lớp new = 10 điểm)", "4 (đếm đủ bốn phần tử h1 h2 h3 h4, mỗi cái 1 điểm)", "100 (chỉ tính riêng mã ID, bỏ hẳn phần tử h4 đi)"],
          answer: 0,
          explain: "Nhánh h4 > #new gồm 1 phần tử (h4, đóng góp 1) và 1 mã định danh (#new, đóng góp 100) — tổng trọng số = 1 + 100 = 101.",
        },
        {
          kind: "check",
          q: "Bộ chọn p.test em.more (theo Bảng 17.5 SGK) có trọng số bằng bao nhiêu?",
          options: ["22 (hai phần tử p, em: 1+1, cộng hai lớp test, more: 10+10)", "20 (chỉ tính hai lớp test và more, bỏ qua hai phần tử p, em)", "2 (chỉ tính hai phần tử p và em, bỏ qua hai lớp test, more)", "112 (nhầm lẫn hai lớp test và more thành hai mã định danh)"],
          answer: 0,
          explain: "Bộ chọn có hai phần tử (p, em: 1+1=2) và hai lớp (test, more: 10+10=20), tổng trọng số = 2 + 20 = 22 — đúng như Bảng 17.5 SGK.",
        },
        {
          kind: "check",
          q: "Hai mẫu CSS cùng bộ chọn (cùng trọng số) áp dụng được cho một phần tử — mẫu nào sẽ thắng?",
          options: ["Mẫu được viết ở vị trí sau cùng trong tệp CSS", "Mẫu được viết ở vị trí đầu tiên trong tệp CSS", "Trình duyệt chọn ngẫu nhiên một trong hai mẫu", "Cả hai mẫu đều bị bỏ qua, dùng định dạng mặc định"],
          answer: 0,
          explain: "Theo mức ưu tiên 5 (nguyên tắc thứ tự cuối cùng — cascading): nếu nhiều mẫu định dạng có cùng trọng số thì mẫu ở vị trí cuối cùng sẽ được áp dụng.",
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
          text: "Bài 17 là bài có độ phân hoá cao nhất trong học kì 1 vì quy tắc ưu tiên và tính trọng số rất dễ bị nhầm. Hãy lưu lại các mẹo và bẫy kinh điển dưới đây:",
        },
        {
          kind: "cards",
          tone: "coral",
          items: [
            {
              emoji: "🎯",
              title: "Thang điểm trọng số (100 - 10 - 1)",
              text: "**ID (#)** = 100 điểm > **Class (.) / Pseudo-class (:)** = 10 điểm > **Tag (p, h1...) / Pseudo-element (::)** = 1 điểm. Dù có 9 class cộng lại (90 điểm) vẫn thua 1 ID (100 điểm).",
            },
            {
              emoji: "👑",
              title: "Thần chú thứ tự 7 mức ưu tiên",
              text: "**Quan trọng (!important)** > **Trực tiếp (inline style)** > **Thiết bị (@media)** > **Trọng số (ID/Class/Tag)** > **Thứ tự cuối (viết sau đè trước)** > **Kế thừa cha** > **Mặc định trình duyệt**.",
            },
            {
              emoji: "👻",
              title: "Phân biệt 1 dấu (:) và 2 dấu (::)",
              text: "**Một dấu hai chấm (`:`)** = Trạng thái hành động (*:hover, :link*); **Hai dấu hai chấm (`::`)** = Một mẩu/bộ phận của phần tử (*::first-letter, ::first-line*).",
            },
            {
              emoji: "✍️",
              title: "Quy tắc Viết sau đè viết trước",
              text: "Khi hai mẫu CSS có **cùng điểm trọng số** cùng áp dụng cho một phần tử, mẫu nào được viết ở **vị trí sau cùng (ở dưới)** trong tệp CSS sẽ giành chiến thắng.",
            },
          ],
        },
        {
          kind: "compare",
          left: {
            emoji: "❌",
            title: "Bẫy câu chữ đề thi hay gài",
            items: [
              "Cộng dồn nhiều thẻ HTML sẽ thắng được 1 class",
              ":hover là pseudo-element vì có trạng thái",
              "Mẫu CSS viết ở trên đầu luôn được ưu tiên trước",
              "Thuộc tính kế thừa từ thẻ cha sẽ đè được thẻ con",
              "Bộ chọn * có trọng số bằng 1 điểm như thẻ p",
            ],
          },
          right: {
            emoji: "✅",
            title: "Bản chất chính xác cần chọn",
            items: [
              "1 Class = 10 điểm, luôn thắng dù có bao nhiêu thẻ (1đ)",
              ":hover là **pseudo-class** (trạng thái, 1 dấu hai chấm)",
              "Cùng trọng số thì **mẫu viết sau cùng** mới áp dụng",
              "Định dạng **trực tiếp cho con** luôn thắng kế thừa",
              "Bộ chọn * có **trọng số = 0 điểm** (thấp nhất)",
            ],
          },
        },
        {
          kind: "check",
          q: "Cho đoạn HTML: <p id=\"title\" class=\"highlight\">Chào bạn</p>. Mẫu CSS nào sau đây sẽ quyết định màu chữ của thẻ p?",
          options: [
            "#title {color: red;} (vì có trọng số ID = 100 điểm)",
            ".highlight {color: blue;} (vì đứng gần thẻ p hơn)",
            "p {color: green;} (vì định dạng trực tiếp tên thẻ p)",
            "Trình duyệt trộn cả ba màu lại thành màu tổng hợp",
          ],
          answer: 0,
          explain:
            "Mã định danh #title có trọng số cao nhất (100 điểm), vượt trội so với class .highlight (10 điểm) và thẻ p (1 điểm). Do đó màu đỏ sẽ được áp dụng.",
        },
      ],
    },
  ],

  summary: [
    "**Pseudo-class** (`:tên`) mô tả trạng thái đặc biệt của phần tử (:link, :visited, :hover). **Pseudo-element** (`::tên`) mô tả một thành phần nhỏ hơn của phần tử (::first-line, ::first-letter, ::selection).",
    "CSS áp dụng theo **7 mức ưu tiên** từ cao xuống thấp: !important → CSS trực tiếp (inline) → CSS theo thiết bị (@media) → trọng số CSS → thứ tự cuối cùng → kế thừa từ cha → mặc định trình duyệt.",
    "**Trọng số** bộ chọn = tổng đóng góp của từng thành phần: **ID = 100, class/pseudo-class/thuộc tính = 10, phần tử/pseudo-element = 1, * = 0**. Trọng số cao hơn được ưu tiên áp dụng.",
  ],
};

export default theory;
