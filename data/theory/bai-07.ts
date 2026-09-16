import type { LessonTheory } from "@/lib/types";

// Bài 7. HTML và cấu trúc trang web — SGK Tin học 12 (ICT, Kết nối tri thức),
// trang 39–45. Giữ đúng thuật ngữ sách: trang nguồn (mã nguồn), thẻ đánh dấu
// HTML (tag), phần tử HTML (element), thẻ đôi / thẻ đơn, phần tử gốc (root),
// cây thông tin.
//
// Đây là bài đầu tiên dùng khối `code` với preview: true — khung xem trước
// sống bên cạnh đoạn mã. Mọi đoạn mã ở đây đều tự chạy được, không phụ thuộc
// tệp ảnh hay tệp CSS bên ngoài, vì khung xem trước chạy trong iframe sandbox.

const theory: LessonTheory = {
  minutes: 13,
  intro:
    "Từ bài này em bắt đầu **tự viết ra trang web** chứ không chỉ xem. Trang web mà em thấy trên Chrome hay Cốc Cốc thực chất chỉ là **một tệp văn bản** — bài này chỉ ra tệp đó viết bằng gì, có cấu trúc ra sao. Mỗi đoạn mã dưới đây đều có **khung xem trước ngay bên cạnh**, em đối chiếu mã với kết quả là hiểu nhanh nhất.",

  sections: [
    {
      id: "trang-web-html",
      emoji: "📄",
      heading: "Trang web và HTML",
      blocks: [
        {
          kind: "text",
          text: "Các trang web em vẫn xem được hiển thị bởi **trình duyệt web** (Cốc Cốc, FireFox, Chrome). Thực chất chúng được tạo ra từ **các tệp văn bản** — các tệp này gọi là **trang nguồn** (hay **mã nguồn**) của trang web tương ứng.",
        },
        {
          kind: "text",
          text: "Trang web được thiết lập từ các tệp văn bản thường có phần mở rộng là **.html** hoặc **.htm**, gọi là **trang html**. Trên trang html có phần văn bản (text) và các **kí tự đánh dấu đặc biệt nằm trong hai dấu “<” và “>”** — các kí tự này gọi là **thẻ đánh dấu HTML**, còn gọi là **thẻ HTML** hay **tag**.",
        },
        {
          kind: "note",
          text: "**HTML** là viết tắt của **Hypertext Markup Language** (*ngôn ngữ đánh dấu siêu văn bản*), là **một bộ quy tắc dùng để thiết lập cấu trúc và hiển thị nội dung trang web**.",
        },
        {
          kind: "text",
          text: "Các thẻ HTML được dùng để xác định **phần tử HTML** tương ứng. Các phần tử HTML định dạng thông tin trong trang web. Muốn hiển thị được thông tin đó thì cần **phần mềm trình duyệt web**.",
        },
      ],
    },

    {
      id: "the-va-phan-tu",
      emoji: "🏷️",
      heading: "Thẻ và phần tử",
      blocks: [
        {
          kind: "text",
          text: "**Thẻ đánh dấu HTML (tag)** là các thành phần chính tạo thành ngôn ngữ HTML. Mỗi loại thẻ có **một tên riêng** và **một ý nghĩa nhất định** trong việc định dạng nội dung. Thẻ được viết trong cặp dấu “<”, “>”; thông thường mỗi thẻ gồm **thẻ bắt đầu và thẻ kết thúc**, chỉ ra phạm vi tác dụng.",
        },
        {
          kind: "code",
          caption: "Hai thẻ cơ bản nhất: p là đoạn văn bản, h1 là tiêu đề cấp 1",
          preview: true,
          code: `<h1>Đây là tiêu đề 1</h1>
<p>Đây là đoạn văn bản.</p>`,
        },
        {
          kind: "figure",
          diagram: "phan-tu-html",
          caption: "Thẻ bắt đầu + nội dung + thẻ kết thúc = một phần tử HTML",
        },
        {
          kind: "note",
          text: "**Phần tử HTML (element)** là khái niệm cơ bản của trang html. Thông thường một phần tử được định nghĩa bởi **thẻ bắt đầu, thẻ kết thúc và phần nội dung nằm giữa cặp thẻ này**. Các **thẻ đơn cùng với nội dung của nó cũng được gọi là phần tử HTML**.",
        },
        {
          kind: "text",
          text: "Mỗi tệp HTML là **tập hợp các phần tử HTML**. Các phần tử này đóng vai trò quan trọng tạo nên cấu trúc và nội dung của trang web, và chúng có thể **độc lập, rời nhau hoặc lồng nhau**.",
        },
        {
          kind: "code",
          caption: "Thẻ em được lồng bên trong thẻ p",
          preview: true,
          code: `<p>Trang này được lập bởi <em>nhóm bạn bè</em> thân thiết</p>`,
        },
        {
          kind: "code",
          caption: "Mỗi thẻ có thể đi kèm thông tin thuộc tính — ở đây là màu chữ",
          preview: true,
          code: `<p style="color : red">This is a paragraph.</p>`,
        },
        {
          kind: "compare",
          left: {
            emoji: "🔗",
            title: "Thẻ đôi",
            items: [
              "**Phần lớn các thẻ** đều là thẻ đôi",
              "Có **thẻ bắt đầu (opening tag)** và **thẻ kết thúc (closing tag)**",
              "Vị trí kết thúc có thêm dấu **“/”**, chẳng hạn `</p>`",
            ],
          },
          right: {
            emoji: "➖",
            title: "Thẻ đơn",
            items: [
              "**Chỉ có thẻ bắt đầu**",
              "Dạng `<tên thẻ>` hoặc `<tên thẻ/>`",
              "`<hr/>` — dòng kẻ ngang",
              "`<br/>` — ngắt xuống dòng",
            ],
          },
        },
        {
          kind: "code",
          caption: "Hai thẻ đơn quen thuộc: hr kẻ một đường ngang, br ngắt xuống dòng",
          preview: true,
          code: `<p>Phần trên</p>
<hr>
<p>Phần dưới có<br>ngắt xuống dòng</p>`,
        },
        {
          kind: "example",
          title: "Bẫy hay gặp nhất khi mới học",
          text: "**HTML và trình duyệt không nhận biết được nhiều dấu cách.** Gõ bao nhiêu dấu cách liền nhau thì máy cũng chỉ hiểu là **một dấu cách**. Trình duyệt cũng **không nhận biết dấu xuống dòng** khi em nhấn phím **Enter** lúc soạn thảo. Em xem khung dưới đây rồi đối chiếu sẽ thấy ngay.",
        },
        {
          kind: "code",
          caption: "Gõ 10 dấu cách và 2 lần Enter, nhưng trình duyệt chỉ hiện một dòng liền",
          preview: true,
          code: `<p>Nhiều          dấu cách
và cả xuống dòng
đều bị bỏ qua hết.</p>`,
        },
        {
          kind: "text",
          text: "Hai lưu ý nhỏ nữa: **tên thẻ HTML không phân biệt chữ hoa chữ thường**, nhưng mặc định người ta **viết chữ thường**. Và dòng `<!DOCTYPE html>` ở đầu tệp **không được xem là phần tử HTML** — nó chỉ thông báo kiểu của tệp.",
        },
        {
          kind: "code",
          caption: "Phần tử đặc biệt mang ý nghĩa chú thích — trình duyệt bỏ qua, không hiển thị",
          preview: true,
          code: `<p>Dòng này hiện ra</p>
<!--  đây là dòng chú thích  -->`,
        },
        {
          kind: "check",
          q: "Thẻ nào dưới đây là thẻ đơn?",
          options: ["<p>", "<hr>", "<h1>", "<em>"],
          answer: 1,
          explain:
            "**`<hr>`** (dòng kẻ ngang) là thẻ đơn — chỉ có thẻ bắt đầu, không có thẻ kết thúc. `<br>` (ngắt xuống dòng) cũng vậy. Còn `<p>`, `<h1>`, `<em>` đều là **thẻ đôi**, phải có thẻ kết thúc `</p>`, `</h1>`, `</em>`.",
        },
        {
          kind: "check",
          q: "Trong tệp HTML, em gõ 10 dấu cách liền nhau rồi nhấn Enter xuống dòng. Trình duyệt sẽ hiển thị thế nào?",
          options: [
            "Đúng 10 dấu cách và xuống dòng như em gõ",
            "Chỉ một dấu cách, và không xuống dòng",
            "Báo lỗi cú pháp HTML",
            "Bỏ hết dấu cách, viết liền các từ vào nhau",
          ],
          answer: 1,
          explain:
            "HTML và trình duyệt **không nhận biết nhiều dấu cách** — gõ bao nhiêu cũng chỉ hiểu là **một dấu cách**; và **không nhận biết dấu xuống dòng** khi nhấn Enter. Muốn xuống dòng thật thì phải dùng thẻ `<br>` hoặc tách thành đoạn `<p>` mới.",
        },
      ],
    },

    {
      id: "cau-truc-tep",
      emoji: "🧱",
      heading: "Cấu trúc tệp HTML",
      blocks: [
        {
          kind: "text",
          text: "Mọi tệp HTML đều theo một khung sườn giống nhau. Em đọc đoạn mã dưới đây rồi đối chiếu với khung xem trước — đây chính là **tệp html hoàn chỉnh đầu tiên** của em.",
        },
        {
          kind: "code",
          caption: "newpage.html — cấu trúc cơ bản của một tệp HTML",
          preview: true,
          code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Tên trang Web</title>
  </head>
  <body>
    <div>
      <h1>Trang Web và HTML</h1>
      <p>Đây là dòng đầu tiên</p>
      <hr>
      <p>Đây là dòng cuối cùng</p>
    </div>
    <p>Trang này được lập bởi <em>nhóm bạn bè</em></p>
  </body>
</html>`,
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "1️⃣",
              title: "<!DOCTYPE html>",
              text: "**Dòng đầu tiên**, mang ý nghĩa đặc biệt: thông báo cho trình duyệt biết đây là tệp có định dạng html. Có thể coi là **dòng khai báo html** của tệp văn bản. **Không được coi là phần tử HTML.**",
            },
            {
              emoji: "2️⃣",
              title: "<html>",
              text: "**Bắt buộc phải có.** Là **phần tử gốc (root)**, chứa tất cả các phần tử HTML còn lại của trang. Thường chứa hai phần tử con là `<head>` và `<body>`.",
            },
            {
              emoji: "3️⃣",
              title: "<head>",
              text: "Chứa các phần tử **liên quan chung đến toàn bộ trang web**. Trong head thường có `<title>`; một số phần tử khác thường gặp là `<meta>`, `<style>` và `<script>`.",
            },
            {
              emoji: "4️⃣",
              title: "<body>",
              text: "Chứa **tất cả các phần tử còn lại** — chính là **thông tin của trang web** mà người xem nhìn thấy.",
            },
            {
              emoji: "5️⃣",
              title: "<meta>",
              text: "Mô tả các **thông tin bổ sung** của trang web: cách mã hoá Unicode, từ khoá dùng để tìm kiếm trang, tên tác giả. Nằm trong `<head>`. *`<meta charset=\"utf-8\">` mô tả cách mã hoá văn bản theo mã UTF-8 — có nó thì tiếng Việt mới hiện đúng dấu.*",
            },
            {
              emoji: "6️⃣",
              title: "<title>",
              text: "Nằm trong `<head>`, mô tả **tên của trang web hiện thời** — tên này xuất hiện trên **tab trình duyệt** và trong **danh sách kết quả tìm kiếm**. Phần tử title phải là **văn bản thường và không được phép chứa các phần tử con**.",
            },
          ],
        },
        {
          kind: "text",
          text: "Nhóm các thẻ định dạng văn bản thường dùng là các **thẻ tiêu đề theo thứ tự giảm cấp dần: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`**. Thẻ `<p>` mô tả **một đoạn văn bản hoàn chỉnh**.",
        },
        {
          kind: "code",
          caption: "Sáu cấp tiêu đề nhỏ dần, và một đoạn văn bản",
          preview: true,
          code: `<h1>Tiêu đề cấp 1</h1>
<h2>Tiêu đề cấp 2</h2>
<h3>Tiêu đề cấp 3</h3>
<p>Còn đây là một đoạn văn bản.</p>`,
        },
        {
          kind: "check",
          q: "Dòng `<!DOCTYPE html>` ở đầu tệp có phải là một phần tử HTML không?",
          options: [
            "Có, vì nó cũng nằm trong cặp dấu < > như thẻ",
            "Không — nó chỉ báo cho trình duyệt biết đây là tệp html",
            "Có, và nó chính là phần tử gốc của cả trang web",
            "Không, vì nó chỉ là một dòng chú thích cho người đọc",
          ],
          answer: 1,
          explain:
            "SGK ghi rõ: dòng `<!DOCTYPE html>` **không được coi là phần tử HTML**, nó mang ý nghĩa đặc biệt là **thông báo cho trình duyệt biết đây là tệp có định dạng html**. Phần tử gốc của trang là **`<html>`**, không phải DOCTYPE.",
        },
      ],
    },

    {
      id: "cay-thong-tin",
      emoji: "🌳",
      heading: "Cây thông tin",
      blocks: [
        {
          kind: "text",
          text: "Mỗi tệp HTML gồm nhiều phần tử, và các phần tử **có thể lồng nhau**. Quan hệ lồng nhau này có thể hình dung như **quan hệ cha – con**, hay quan hệ giữa các nút của một **sơ đồ hình cây**.",
        },
        {
          kind: "figure",
          diagram: "cay-html",
          caption: "Cây thông tin của tệp newpage.html ở mục trước",
        },
        {
          kind: "text",
          text: "Nhìn cây trên em thấy: `<div>` **chứa** bốn phần tử con là `h1`, `p`, `hr`, `p` — nên trên cây chúng là **con của div**. Còn `<head>` và `<body>` là **hai phần tử rời nhau**, không cái nào chứa cái nào.",
        },
        {
          kind: "note",
          text: "Cấu trúc cơ bản của tệp HTML có dạng như **một cây thông tin các phần tử HTML**. Quan hệ **cha – con** của các nút trên cây được mô tả bằng **sự lồng nhau** của các phần tử (hay thẻ) HTML. **Gốc của cây HTML chính là phần tử `<html>`.**",
        },
      ],
    },

    {
      id: "soan-thao",
      emoji: "⌨️",
      heading: "Soạn thảo HTML",
      blocks: [
        {
          kind: "text",
          text: "Tệp HTML chỉ là **tệp văn bản thuần**, nên có nhiều cách để soạn thảo nó.",
        },
        {
          kind: "cards",
          tone: "leaf",
          items: [
            {
              emoji: "📝",
              title: "Notepad",
              text: "Phần mềm soạn thảo **văn bản đơn giản không định dạng**, cung cấp một số chức năng chỉnh sửa cơ bản. **Có sẵn trên Windows**. Trên MacOS có phần mềm tương tự là **TextEdit**.",
            },
            {
              emoji: "🧑‍💻",
              title: "Notepad++",
              text: "Phần mềm soạn thảo chương trình **đa năng**, hỗ trợ nhiều ngôn ngữ trong đó có HTML. **Miễn phí, mã nguồn mở**, tải ở notepad-plus-plus.org. *Lưu ý: chọn **Language → H → HTML** để phần mềm hiển thị đúng ngôn ngữ HTML.*",
            },
            {
              emoji: "🎨",
              title: "Sublime Text",
              text: "Soạn thảo chương trình nhiều ngôn ngữ, **tương tự Notepad++**, có phiên bản cơ bản miễn phí, tải ở sublimetext.com. *Lưu ý: chọn **View → Syntax → HTML**.*",
            },
            {
              emoji: "🌐",
              title: "Trang soạn thảo trực tuyến",
              text: "Cần **máy có kết nối Internet và trình duyệt chuẩn**. Soạn ở khung bên trái, nháy nút **Run** để xem kết quả ở khung bên phải — **giống hệt cách bài học này đang trình bày**. Ví dụ: w3schools.com, tutorialspoint.com.",
            },
          ],
        },
        {
          kind: "note",
          text: "Có thể soạn thảo tệp HTML bằng **nhiều phần mềm khác nhau**. Cũng có thể **soạn thảo trực tuyến và kiểm tra kết quả trực tiếp trên trình duyệt**.",
        },
        {
          kind: "check",
          q: "Nhóm nào dưới đây gồm TOÀN các phần mềm soạn thảo HTML (không phải trình duyệt web)?",
          options: [
            "Notepad, Notepad++, Sublime Text",
            "Opera, Chrome, Cốc Cốc",
            "Notepad++, FireFox, Sublime Text",
            "Microsoft Edge, Notepad, Opera",
          ],
          answer: 0,
          explain:
            "**Notepad, Notepad++, Sublime Text** là phần mềm soạn thảo. Còn **Opera, Chrome, Cốc Cốc, FireFox, Microsoft Edge** đều là **trình duyệt web** — chúng dùng để *hiển thị* trang web chứ không phải để viết mã nguồn.",
        },
      ],
    },
  ],

  summary: [
    "**HTML = Hypertext Markup Language** (ngôn ngữ đánh dấu siêu văn bản) — bộ quy tắc **thiết lập cấu trúc và hiển thị nội dung trang web**. Tệp có phần mở rộng **.html** hoặc **.htm**.",
    "**Thẻ (tag)** viết trong cặp dấu < >. **Phần tử (element)** = thẻ bắt đầu + nội dung + thẻ kết thúc. Thẻ đơn cùng nội dung của nó cũng là một phần tử.",
    "Phần lớn là **thẻ đôi**; **thẻ đơn** chỉ có thẻ bắt đầu — ví dụ `<hr>` (dòng kẻ ngang), `<br>` (ngắt xuống dòng).",
    "Trình duyệt **không nhận biết nhiều dấu cách** (gõ bao nhiêu cũng thành một) và **không nhận biết dấu xuống dòng** khi nhấn Enter.",
    "Khung sườn tệp HTML: **`<!DOCTYPE html>`** (không phải phần tử) → **`<html>`** (phần tử gốc) → **`<head>`** (chứa `<meta>`, `<title>`) và **`<body>`** (chứa nội dung trang).",
    "Cấu trúc tệp HTML là **một cây thông tin**: phần tử lồng nhau chính là quan hệ **cha – con**, **gốc của cây là `<html>`**.",
  ],
};

export default theory;
