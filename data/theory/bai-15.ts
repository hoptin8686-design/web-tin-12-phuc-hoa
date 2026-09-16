import type { LessonTheory } from "@/lib/types";

// Bài 15. Tạo màu cho chữ và nền — SGK Tin học 12 (ICT, Kết nối tri thức),
// trang 83–88. Giữ đúng thuật ngữ sách: hệ màu RGB/HSL, thuộc tính color/
// background-color/border, bốn kiểu bộ chọn tổ hợp E F, E>F, E+F, E~F.
//
// Bốn khối "code preview" ở mục 3 dùng LẠI đúng đoạn HTML mẫu "Lịch sử CSS"
// của SGK (Hình 15.4–15.7), chỉ đổi luật CSS — để học sinh thấy trực tiếp
// cùng một trang HTML nhưng bốn kiểu bộ chọn tô màu khác nhau ra sao.

const theory: LessonTheory = {
  minutes: 12,

  intro:
    "Bài này học cách **CSS biểu diễn màu sắc** (RGB, HSL, tên màu có sẵn), cách **tô màu chữ và màu nền** cho phần tử HTML, và một kiểu bộ chọn nâng cao: **bộ chọn là tổ hợp các phần tử có quan hệ** với nhau (E F, E > F, E + F, E ~ F).",

  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "he-mau-css",
      emoji: "🎨",
      heading: "Hệ thống màu của CSS",
      blocks: [
        {
          kind: "text",
          text: "HTML và CSS hỗ trợ hệ màu **RGB** (Red – Green – Blue). Mỗi màu là một tổ hợp ba giá trị (r, g, b), mỗi giá trị là số nguyên từ 0 đến 255 (một số 8 bit). Tổng số màu có thể biểu diễn là 2⁸ × 2⁸ × 2⁸ = 2²⁴ = **16 777 216 màu**.",
        },
        {
          kind: "list",
          items: [
            "**rgb(x-red, x-green, x-blue)** — ba tham số nhận giá trị độc lập từ 0 đến 255. Ví dụ: `rgb(255, 0, 0)` là màu đỏ.",
            "**rgb(x-red%, x-green%, x-blue%)** — ba tham số biểu thị phần trăm của 255. Ví dụ: `rgb(100%, 0%, 0%)` cũng là màu đỏ.",
            "**#rrggbb** — rr, gg, bb là giá trị theo hệ đếm hexa (cơ số 16). Ví dụ: `#FF0000` cũng là màu đỏ.",
          ],
        },
        {
          kind: "text",
          text: "Một hệ màu khác mà HTML và CSS hỗ trợ là **HSL** (Hue, Saturation, Lightness): Hue là vòng tròn màu với giá trị từ 0° đến 360°; Saturation là độ bão hoà, từ 0% (chỉ còn xám) đến 100% (đủ màu); Lightness là độ sáng, từ 0% (đen) đến 100% (trắng) — đặt lightness = 50% để có màu đúng như tên gọi.",
        },
        {
          kind: "figure",
          diagram: "he-mau-hsl",
          caption: "Hình 15.2 SGK — vòng tròn Hue và hai thang Saturation, Lightness",
        },
        {
          kind: "text",
          text: "Bên cạnh rgb() và hsl(), CSS còn thiết lập sẵn các **tên màu có sẵn** để tiện dùng — không phân biệt chữ hoa chữ thường. Phiên bản CSS2 có 16 tên màu chuẩn (black, gray, white, red, green, orange, yellow, purple, blue, lime,…); phiên bản CSS3 đã mở rộng lên **140 tên màu**.",
        },
        {
          kind: "note",
          text: "Hệ màu trên trang web được hỗ trợ bởi HTML và CSS chủ yếu là hệ màu RGB. Ngoài ra, có thể sử dụng hệ màu HSL hoặc các tên màu có sẵn. Các màu xám (kể cả đen, trắng) có thể thiết lập theo hai cách: **rgb(x, x, x)** với ba tham số bằng nhau, hoặc **hsl(h, 0%, x%)** khi saturation bằng 0%.",
        },
        {
          kind: "check",
          q: "Ba màu rgb(128,0,128), #800080 và hsl(300,100%,25.1%) có cùng biểu diễn một màu hay không?",
          options: [
            "Có — đây là ba cách viết khác nhau của cùng một màu tím",
            "Không — ba cách viết luôn cho ra ba màu hoàn toàn khác nhau",
            "Chỉ hai cách rgb() và hex là giống nhau, hsl() thì khác hẳn",
            "Không thể so sánh vì CSS không cho phép trộn các hệ màu",
          ],
          answer: 0,
          explain:
            "SGK mở đầu bài bằng chính câu hỏi này: rgb(128,0,128), #800080 (128=80 theo hexa) và hsl(300,100%,25,1%) là ba cách biểu diễn khác nhau của cùng một màu tím — CSS cho phép chọn bất kì cách nào tuỳ thích.",
        },
        {
          kind: "check",
          q: "Muốn thiết lập một màu xám bằng hàm rgb(), ba tham số cần thoả mãn điều kiện gì?",
          options: [
            "Ba tham số r, g, b phải bằng nhau",
            "Tham số đầu tiên (red) phải bằng 0",
            "Cả ba tham số phải bằng 255",
            "Tổng ba tham số phải chia hết cho 3",
          ],
          answer: 0,
          explain:
            "Theo lưu ý trong SGK, màu xám (kể cả đen, trắng) thiết lập bằng rgb(x,x,x) với ba tham số r, g, b bằng nhau — hoặc bằng hsl(h,0%,x%) khi độ bão hoà bằng 0%.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "mau-chu-va-nen",
      emoji: "🖌️",
      heading: "Thiết lập màu chữ và màu nền bằng CSS",
      blocks: [
        {
          kind: "text",
          text: "Các phần tử HTML của trang web có thể được tô màu bằng ba thuộc tính: **color** dùng định dạng màu chữ (màu nổi), **background-color** dùng định dạng màu nền, và **border** dùng định dạng màu khung viền quanh phần tử.",
        },
        {
          kind: "code",
          caption: "Ví dụ SGK — phần tử h1 được định dạng màu chữ, màu nền và màu khung viền",
          preview: true,
          code: `<style>
h1 {color: red; background-color: lightgreen; border: 2px solid magenta;}
</style>
<h1>Lịch sử CSS</h1>
<p>Ý tưởng của CSS do kĩ sư Håkon Wium Lie, người Na Uy, thiết lập năm 1994 trong khi làm việc với Tim Berners-Lee tại viện hạt nhân CERN.</p>`,
        },
        {
          kind: "code",
          caption: "Ví dụ SGK — định dạng riêng cho phần tử em (nền + viền) và phần tử p (màu chữ)",
          preview: true,
          code: `<style>
em {background-color: lightgreen; border: 1px solid red;}
p {color: blue;}
</style>
<h1>Lịch sử CSS</h1>
<p>Ý tưởng của <em>CSS</em> do kĩ sư Håkon Wium Lie, người Na Uy, thiết lập năm 1994 trong khi làm việc với Tim Berners-Lee tại viện hạt nhân CERN.</p>`,
        },
        {
          kind: "note",
          text: "CSS hỗ trợ định dạng màu chữ bằng thuộc tính **color**, màu nền bằng thuộc tính **background-color** và màu khung viền bằng thuộc tính **border**. Các thuộc tính định dạng màu chữ và màu nền đều có **tính kế thừa**, riêng thuộc tính **border không có tính kế thừa**.",
        },
        {
          kind: "check",
          q: "Thuộc tính nào sau đây CSS dùng để định dạng màu nền cho một phần tử?",
          options: ["background-color", "color", "border", "font-color"],
          answer: 0,
          explain: "background-color dùng để định dạng màu nền. color dùng định dạng màu chữ; border dùng cho khung viền.",
        },
        {
          kind: "check",
          q: "Trong ba thuộc tính color, background-color, border, thuộc tính nào KHÔNG có tính kế thừa?",
          options: ["border", "color", "background-color", "Cả ba đều không có tính kế thừa"],
          answer: 0,
          explain:
            "SGK nêu rõ: color và background-color đều có tính kế thừa, riêng border thì không — phần tử con không tự động nhận khung viền của phần tử cha.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "bo-chon-to-hop",
      emoji: "🔗",
      heading: "Bộ chọn là tổ hợp các phần tử có quan hệ",
      blocks: [
        {
          kind: "text",
          text: "Từ trước tới nay, các mẫu định dạng CSS đã học đều dùng bộ chọn là **các phần tử độc lập, riêng biệt**. Ở đây, ta tìm hiểu các mẫu định dạng có bộ chọn là **tổ hợp các phần tử có quan hệ với nhau** — rất hữu dụng trong thực tế, cho phép áp dụng định dạng lên phần tử **với điều kiện nhất định** thay vì mọi phần tử cùng loại.",
        },
        {
          kind: "figure",
          diagram: "bo-chon-to-hop",
          caption: "Bốn kiểu bộ chọn tổ hợp phần tử có quan hệ (theo sơ đồ cuối trang 87 SGK)",
        },
        {
          kind: "list",
          items: [
            "**E F** (quan hệ con cháu): áp dụng cho phần tử F với điều kiện F là phần tử con hoặc cháu của E ở bất kì cấp nào trong cây HTML.",
            "**E > F** (quan hệ cha con trực tiếp): áp dụng cho phần tử F với điều kiện F là phần tử con **trực tiếp** của E.",
            "**E + F** (quan hệ anh em liền kề): áp dụng cho phần tử F nếu F là phần tử liền kề **ngay sau** E, và E, F có cùng phần tử cha.",
            "**E ~ F** (quan hệ anh em nói chung): áp dụng cho phần tử F là phần tử đứng sau E, **không cần liền kề**, miễn E và F có cùng phần tử cha.",
          ],
        },
        {
          kind: "code",
          caption: "Bộ chọn E F — div p {color: blue;} chỉ áp dụng cho p nằm trong div",
          preview: true,
          code: `<style>div p {color: blue;}</style>
<div>
  <h1>Lịch sử CSS</h1>
  <p>Ý tưởng ban đầu của CSS do kĩ sư Håkon Wium Lie, người Na Uy, thiết lập năm 1994 trong khi làm việc với Tim Berners-Lee tại viện hạt nhân CERN.</p>
</div>
<h1>Ý tưởng CSS</h1>
<p>Ý tưởng chính của CSS là tạo ra các mẫu định dạng riêng, độc lập cho các phần tử HTML của trang web.</p>`,
        },
        {
          kind: "code",
          caption: "Bộ chọn E > F — p > em {color: red;} chỉ áp dụng cho em là CON TRỰC TIẾP của p",
          preview: true,
          code: `<style>p > em {color: red;}</style>
<h1>Lịch sử CSS</h1>
<p>Ý tưởng của CSS do kĩ sư <span><em>Håkon Wium Lie</em></span>, người Na Uy, thiết lập năm 1994 trong khi làm việc với Tim Berners-Lee tại viện hạt nhân <em>CERN</em>.</p>`,
        },
        {
          kind: "example",
          title: "Vì sao chỉ “CERN” đổi màu, còn “Håkon Wium Lie” thì không?",
          text: "Phần tử em đầu tiên nằm **trong thẻ span**, nên nó là con trực tiếp của span chứ không phải của p — bộ chọn p > em không khớp. Phần tử em thứ hai (CERN) là con trực tiếp của p nên đổi màu đỏ.",
        },
        {
          kind: "code",
          caption: "Bộ chọn E + F — em + strong {color: red;} chỉ áp dụng cho strong liền ngay sau em",
          preview: true,
          code: `<style>em + strong {color: red;}</style>
<h1>Lịch sử CSS</h1>
<p>Ý tưởng của CSS do kĩ sư <em>Håkon Wium Lie</em>, người Na Uy, thiết lập năm 1994 trong khi làm việc với <strong>Tim Berners-Lee</strong> tại viện hạt nhân <strong>CERN</strong>.</p>`,
        },
        {
          kind: "code",
          caption: "Bộ chọn E ~ F — em ~ strong {color: red;} áp dụng cho MỌI strong đứng sau em, không cần liền kề",
          preview: true,
          code: `<style>em ~ strong {color: red;}</style>
<h1>Lịch sử CSS</h1>
<p>Ý tưởng của CSS do kĩ sư <em>Håkon Wium Lie</em>, người Na Uy, thiết lập năm 1994 trong khi làm việc với <strong>Tim Berners-Lee</strong> tại viện hạt nhân <strong>CERN</strong>.</p>`,
        },
        {
          kind: "note",
          text: "CSS hỗ trợ các kiểu bộ chọn là tổ hợp các phần tử quan hệ dạng: **E F, E > F, E + F và E ~ F**.",
        },
        {
          kind: "check",
          q: "Bộ chọn nào áp dụng cho phần tử F là con hoặc cháu của E ở BẤT KÌ cấp nào trong cây HTML?",
          options: ["E F", "E > F", "E + F", "E ~ F"],
          answer: 0,
          explain: "E F (cách nhau một khoảng trắng) là bộ chọn quan hệ con cháu — không giới hạn cấp bậc, khác với E > F chỉ áp dụng con trực tiếp.",
        },
        {
          kind: "check",
          q: "So với E + F, bộ chọn E ~ F khác biệt ở điểm nào?",
          options: [
            "E ~ F không đòi hỏi F phải liền kề ngay sau E, miễn cùng cha",
            "E ~ F chỉ áp dụng khi F là con trực tiếp của E",
            "E ~ F chỉ áp dụng cho phần tử đứng trước E, không phải sau",
            "E ~ F và E + F hoàn toàn giống nhau, chỉ khác kí hiệu viết",
          ],
          answer: 0,
          explain:
            "E + F chỉ áp dụng cho F liền kề ngay sau E; E ~ F áp dụng cho mọi F đứng sau E có cùng cha, không đòi hỏi liền kề — vì vậy E ~ F thường khớp nhiều phần tử hơn E + F.",
        },
      ],
    },
  ],

  summary: [
    "CSS hỗ trợ hai hệ màu chính: **RGB** (rgb(r,g,b), rgb(r%,g%,b%), #rrggbb) và **HSL** (Hue 0–360°, Saturation 0–100%, Lightness 0–100%), cùng các **tên màu có sẵn** (CSS2: 16 tên, CSS3: 140 tên).",
    "Ba thuộc tính tô màu phần tử: **color** (màu chữ), **background-color** (màu nền), **border** (màu khung viền). color và background-color có tính kế thừa; border thì không.",
    "Bốn kiểu bộ chọn tổ hợp phần tử có quan hệ: **E F** (con cháu bất kì cấp), **E > F** (con trực tiếp), **E + F** (anh em liền kề ngay sau), **E ~ F** (anh em nói chung, không cần liền kề).",
  ],
};

export default theory;
