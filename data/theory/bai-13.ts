import type { LessonTheory } from "@/lib/types";

// Bài 13. Khái niệm, vai trò của CSS — SGK Tin học 12 (ICT, Kết nối tri thức),
// trang 71–75. Giữ đúng thuật ngữ sách: mẫu định dạng, bộ chọn (selector),
// vùng mô tả (declaration block), CSS trong / CSS ngoài / CSS nội tuyến.
//
// Bài này SGK chủ yếu lập luận bằng lời ("nhanh hơn, thuận tiện hơn, viết một
// lần dùng nhiều lần"). Học sinh chỉ tin khi NHÌN THẤY, nên bài lí thuyết mở
// đầu bằng cặp demo cùng một trang web — một bản không CSS, một bản có CSS —
// và kết bằng demo sửa đúng một dòng làm đổi cả trang.
//
// Phần "Lịch sử CSS" lấy từ hộp tư liệu của mục Vận dụng (trang 75), vẫn là
// nội dung trong SGK chứ không phải kiến thức ngoài.

const theory: LessonTheory = {
  minutes: 15,

  intro:
    "Đến đây em đã viết được trang web bằng HTML, nhưng trang còn **trơ trụi**: chữ đen, nền trắng, cỡ chữ mặc định. Bài này học công cụ làm trang web **đẹp và chuyên nghiệp** — **CSS** — và điều quan trọng hơn: vì sao người ta phải tách việc trang trí ra khỏi việc viết nội dung.",

  sections: [
    {
      id: "css-la-gi",
      emoji: "🎨",
      heading: "CSS là gì",
      blocks: [
        {
          kind: "text",
          text: "Hãy nhìn **cùng một trang web** ở hai khung dưới đây. Nội dung chữ nghĩa **y hệt nhau**, chỉ khác đúng mấy dòng ở phần đầu tệp.",
        },
        {
          kind: "code",
          caption: "① Trang web CHƯA có CSS — trình duyệt hiển thị theo mặc định",
          preview: true,
          tall: true,
          code: `<h1>Lịch sử phát triển HTML</h1>
<p>Các chuẩn HTML của trang web hiện nay được nhà vật lí
Tim Berners-Lee đưa ra lần đầu tiên vào những năm 1990
của thế kỉ XX tại trung tâm vật lí hạt nhân CERN.</p>
<p>Ý tưởng ban đầu của Berners-Lee là muốn thiết lập một
chuẩn chung để thể hiện và chia sẻ các văn bản có thể
trao đổi bên trong cơ quan CERN.</p>`,
        },
        {
          kind: "code",
          caption: "② Cùng nội dung đó, thêm ba dòng CSS — chính là Hình 13.1 trong SGK",
          preview: true,
          tall: true,
          code: `<style>
 h1 {color: red;}
 h1 {border: 2px solid blue;}
 p {text-indent: 15px;}
</style>

<h1>Lịch sử phát triển HTML</h1>
<p>Các chuẩn HTML của trang web hiện nay được nhà vật lí
Tim Berners-Lee đưa ra lần đầu tiên vào những năm 1990
của thế kỉ XX tại trung tâm vật lí hạt nhân CERN.</p>
<p>Ý tưởng ban đầu của Berners-Lee là muốn thiết lập một
chuẩn chung để thể hiện và chia sẻ các văn bản có thể
trao đổi bên trong cơ quan CERN.</p>`,
        },
        {
          kind: "text",
          text: "Phần nằm giữa cặp thẻ `<style>` và `</style>` là **một loại ngôn ngữ đặc biệt** dùng để thiết lập các **mẫu định dạng** cho trang web. Các mẫu định dạng này được gọi là **Cascading Style Sheet**, viết tắt là **CSS**.",
        },
        {
          kind: "text",
          text: "Ba dòng ở khung ② tương ứng **ba mẫu định dạng**: mẫu thứ nhất thiết lập **màu chữ đỏ** cho các phần tử `<h1>`; mẫu thứ hai thiết lập **khung viền màu xanh dày 2 pixel** cũng cho `<h1>`; mẫu thứ ba thiết lập **dòng đầu thụt vào 15 pixel** cho tất cả các phần tử `<p>`.",
        },
        {
          kind: "example",
          title: "1 pixel to bằng nào?",
          text: "SGK ghi rõ ở chỗ này: **mỗi pixel = 2,54/96 cm**. Nghĩa là 96 pixel xếp liền nhau thì dài đúng 2,54 cm (một inch). Vậy viền dày `2px` chỉ mảnh cỡ **nửa milimét** — đủ thấy rõ mà không thô.",
        },
        {
          kind: "text",
          text: "**CSS là định dạng độc lập với chuẩn HTML**, được dùng để thiết lập các mẫu định dạng dùng trong trang web. CSS có **cách viết riêng — ngôn ngữ CSS**, độc lập với ngôn ngữ HTML. Chỉ cần viết mẫu định dạng **một lần** là nó được áp dụng đồng thời cho **tất cả các phần tử tương ứng**.",
        },
        {
          kind: "note",
          text: "Mẫu định dạng CSS là một công cụ hỗ trợ giúp định dạng nội dung trang web **nhanh hơn, thuận tiện hơn** bằng cách **định nghĩa một lần và sử dụng nhiều lần**. CSS sử dụng **ngôn ngữ mô tả riêng, độc lập với HTML**.",
        },
        {
          kind: "check",
          q: "Ngôn ngữ CSS có phải là ngôn ngữ HTML không?",
          options: [
            "Có, CSS là một nhóm thẻ đặc biệt của HTML",
            "Không, CSS có ngôn ngữ mô tả riêng độc lập",
            "Có, vì CSS luôn nằm bên trong tệp HTML",
            "Không, nhưng CSS chỉ chạy được trên Chrome",
          ],
          answer: 1,
          explain:
            "**Không.** SGK nêu rõ: CSS **sử dụng ngôn ngữ mô tả riêng, độc lập với HTML**. Việc CSS hay được viết nằm trong tệp HTML (thẻ `<style>`) chỉ là **nơi đặt**, không làm nó thành HTML — giống như em chép một câu tiếng Anh vào giữa bài văn tiếng Việt thì câu đó vẫn là tiếng Anh.",
        },
        {
          kind: "check",
          q: "Các mẫu định dạng CSS thường được mô tả như thế nào?",
          options: [
            "Bắt buộc trình bày ở dạng một bảng nhiều cột",
            "Bắt buộc viết gọn trên đúng một hàng duy nhất",
            "Có thể viết trên nhiều hàng cho dễ đọc",
            "Chỉ viết được bên trong thẻ của phần tử đó",
          ],
          answer: 2,
          explain:
            "Đây là câu hỏi củng cố trong SGK, đáp án là **C — có thể viết trên nhiều hàng**. Khi một mẫu có nhiều quy định, người ta thường xuống dòng mỗi quy định một hàng cho dễ đọc; trình duyệt vẫn hiểu đúng vì các quy định đã được ngăn nhau bởi dấu `;`.",
        },
      ],
    },

    {
      id: "cau-truc-css",
      emoji: "🧩",
      heading: "Cấu trúc của một mẫu định dạng",
      blocks: [
        {
          kind: "text",
          text: "Cấu trúc tổng quát của một mẫu định dạng CSS có **hai phần**: **bộ chọn** (selector) và **vùng mô tả** (declaration block). Vùng mô tả bao gồm một hay nhiều quy định có dạng `{thuộc tính : giá trị ;}`, các quy định được viết cách nhau bởi dấu **`;`**. **Bộ chọn** quy định **những thẻ HTML nào được chọn** để áp dụng định dạng này.",
        },
        {
          kind: "figure",
          diagram: "cau-truc-css",
          caption: "Bộ chọn quyết định “áp dụng cho ai”, vùng mô tả quyết định “định dạng thế nào”",
        },
        {
          kind: "code",
          caption: "Dạng đơn giản — vùng mô tả chỉ có một quy định",
          code: `bộ chọn {thuộc tính: giá trị;}`,
        },
        {
          kind: "code",
          caption: "Dạng nhiều quy định — xuống dòng cho dễ đọc",
          code: `bộ chọn {
      thuộc tính 1: giá trị 1;
      thuộc tính 2: giá trị 2;
      ......
      thuộc tính n: giá trị n;
   }`,
        },
        {
          kind: "text",
          text: "**Ví dụ 2 trong SGK** — một mẫu gồm **hai quy định**: thụt lề dòng đầu và chữ màu xanh, áp dụng cho bộ chọn là tất cả các thẻ `p`:",
        },
        {
          kind: "code",
          caption: "Hai quy định trong một mẫu — cả hai đoạn dưới đều đổi theo",
          preview: true,
          code: `<style>
 p {text-indent: 15px; color: blue;}
</style>

<p>Đoạn văn thứ nhất của trang web.</p>
<p>Đoạn văn thứ hai, cũng thụt lề và xanh y hệt.</p>`,
        },
        {
          kind: "text",
          text: "Bộ chọn có thể là **một thẻ**, hoặc **đồng thời nhiều thẻ** viết cách nhau bởi **dấu phẩy**. Cách viết này giúp cho CSS **dễ thiết lập và áp dụng**:",
        },
        {
          kind: "code",
          caption: "Ví dụ 3 trong SGK — một dòng CSS duy nhất tô đỏ cả ba cấp tiêu đề",
          preview: true,
          code: `<style>
 h1, h2, h3 {color: red;}
</style>

<h1>Tiêu đề cấp 1</h1>
<h2>Tiêu đề cấp 2</h2>
<h3>Tiêu đề cấp 3</h3>
<p>Đoạn văn không nằm trong bộ chọn nên giữ màu đen.</p>`,
        },
        {
          kind: "example",
          title: "Để ý đoạn văn màu đen ở khung trên",
          text: "Thẻ `<p>` **không nằm trong bộ chọn** `h1, h2, h3` nên nó **không bị đổi màu**. Đó chính là việc của bộ chọn: nó là **bộ lọc** quyết định mẫu định dạng chạm tới thẻ nào và bỏ qua thẻ nào.",
        },
        {
          kind: "check",
          q: "Trong mẫu định dạng p { color: blue; } thì phần nào là bộ chọn?",
          options: ["color", "p", "blue", "{ color: blue; }"],
          answer: 1,
          explain:
            "**`p`** là bộ chọn — nó đứng trước dấu `{` và quy định mẫu này áp dụng cho **tất cả các thẻ `<p>`**. Phần `{ color: blue; }` là **vùng mô tả**, trong đó `color` là **thuộc tính** và `blue` là **giá trị**.",
        },
        {
          kind: "check",
          q: "Muốn tất cả các đoạn văn bản của trang web có màu xanh thì viết mẫu CSS nào?",
          options: ["color { p: blue; }", "p { color: blue; }", "blue { color: p; }", "p { blue: color; }"],
          answer: 1,
          explain:
            "Viết theo đúng thứ tự **bộ chọn { thuộc tính: giá trị; }** → **`p { color: blue; }`**. Bộ chọn `p` chọn mọi đoạn văn bản, thuộc tính `color` là màu chữ, giá trị `blue` là màu xanh. Ba phương án còn lại đảo lộn vị trí nên trình duyệt không hiểu.",
        },
      ],
    },

    {
      id: "ba-cach-thiet-lap",
      emoji: "📍",
      heading: "Ba cách thiết lập CSS",
      blocks: [
        {
          kind: "text",
          text: "Có **ba cách** thiết lập CSS: **CSS trong** (internal CSS), **CSS ngoài** (external CSS) và **CSS nội tuyến** (inline CSS). Khác nhau ở chỗ **đặt mẫu định dạng ở đâu** — và chính chỗ đặt quyết định **định dạng đó với được tới đâu**.",
        },
        {
          kind: "figure",
          diagram: "ba-cach-css",
          caption: "Cùng một mẫu định dạng, đặt ở ba chỗ khác nhau thì phạm vi áp dụng khác hẳn nhau",
        },
        {
          kind: "text",
          text: "**a) CSS trong.** Đưa toàn bộ các mẫu định dạng vào bên trong thẻ `<style>` và đặt trong **phần tử `head`** của tệp HTML. Các định dạng sẽ áp dụng cho **tất cả các phần tử HTML của trang web** phù hợp với mô tả bộ chọn — nhưng **chỉ trong tệp HTML hiện thời**.",
        },
        {
          kind: "code",
          caption: "CSS trong — đặt đúng chỗ trong cấu trúc tệp HTML đầy đủ",
          code: `<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      <title>Lịch sử phát triển HTML</title>
      <style>
         h1 {color: red;}
         p {text-indent: 15px;}
      </style>
   </head>
   <body>
      <h1>Lịch sử phát triển HTML</h1>
      <p>Nội dung trang web…</p>
   </body>
</html>`,
        },
        {
          kind: "text",
          text: "**b) CSS ngoài.** Các mẫu định dạng được viết trong **một tệp css riêng, bên ngoài tệp HTML**. Sau đó cần thực hiện thao tác **kết nối** tệp HTML với tệp định dạng css. Trong tệp css, phần chú thích viết dưới dạng `/*……*/` và **có thể trên nhiều dòng**.",
        },
        {
          kind: "code",
          caption: "Tệp styles.css — chỉ chứa CSS, không có thẻ HTML nào",
          code: `/* tệp thông tin CSS */
h1 {color: red; }
h1 {border: 2px solid blue;}
p {text-indent: 15px;}`,
        },
        {
          kind: "steps",
          items: [
            {
              label: "1",
              title: "Cách 1 — dùng thẻ link",
              text: "Đặt thẻ `link` trong vùng `head` của trang web: `<link href=\"styles.css\" rel=\"stylesheet\" type=\"text/css\">`",
            },
            {
              label: "2",
              title: "Cách 2 — dùng lệnh @import",
              text: "Đặt lệnh `@import` trong phần tử `style` và nằm trong phần `head`: `<style> @import \"styles.css\"; </style>`",
            },
          ],
        },
        {
          kind: "text",
          text: "Một tệp CSS có thể được thiết lập để **đồng thời áp dụng cho nhiều trang web**, giúp cho việc định dạng nhiều trang web **thống nhất**, và khi cần chỉnh sửa định dạng thì **chỉ cần sửa một lần** trong tệp css.",
        },
        {
          kind: "example",
          title: "Vì sao khung xem trước không thử được CSS ngoài?",
          text: "Hai đoạn mã trên là **hai tệp riêng biệt** nằm cạnh nhau trong cùng thư mục. Khung xem trước của bài học chỉ chạy được **một tệp đơn lẻ**, không có tệp `styles.css` bên cạnh để nối tới, nên chỗ này em phải **tự thử trên máy**: tạo hai tệp, để chung một thư mục, rồi mở tệp HTML bằng trình duyệt.",
        },
        {
          kind: "text",
          text: "**c) CSS nội tuyến.** Có thể định dạng CSS **trực tiếp bên trong thẻ** của các phần tử HTML bằng cách chỉ ra các thuộc tính và giá trị cho **thuộc tính `style`**. Theo SGK, cách làm này *mất thời gian nhưng thời gian thực hiện sẽ nhanh* — hiểu đơn giản là **viết thì tốn công** (phải viết lại cho từng phần tử một) nhưng trình duyệt áp dụng ngay.",
        },
        {
          kind: "code",
          caption: "CSS nội tuyến — định dạng dán thẳng vào thẻ, chỉ ăn đúng thẻ đó",
          preview: true,
          code: `<h1 style="color: red;">Tiêu đề này đỏ</h1>
<h1>Tiêu đề này vẫn đen</h1>
<p style="color: blue; text-indent: 15px;">Đoạn này xanh
và thụt lề.</p>
<p>Đoạn này thì không.</p>`,
        },
        {
          kind: "example",
          title: "Vì sao lại gọi là “Cascading” — xếp chồng?",
          text: "Khi **nhiều mẫu cùng chạm tới một phần tử**, trình duyệt không bối rối mà **xếp chồng chúng theo thứ tự ưu tiên**: **nội tuyến** (viết trong thẻ) đè lên **CSS trong**, **CSS trong** đè lên **CSS ngoài**. Cái nào gần phần tử hơn thì thắng. Khung dưới cho thấy điều đó.",
        },
        {
          kind: "code",
          caption: "Cùng một thẻ h1 bị hai mẫu tranh nhau — thử đoán màu nào thắng trước khi nhìn khung bên",
          preview: true,
          code: `<style>
 h1 {color: red;}
</style>

<h1>Tiêu đề chỉ theo CSS trong</h1>
<h1 style="color: green;">Tiêu đề có thêm nội tuyến</h1>`,
        },
        {
          kind: "note",
          text: "Cấu trúc tổng quát của CSS bao gồm các mẫu định dạng dùng để tạo khuôn cho các phần tử HTML của trang web. Mỗi mẫu này bao gồm hai phần: **bộ chọn** và **vùng mô tả**. Có thể thiết lập **CSS trong**, **CSS ngoài** thông qua tệp CSS, hoặc đặt **nội tuyến** trực tiếp bên trong các phần tử HTML thông qua thuộc tính `style`.",
        },
        {
          kind: "check",
          q: "Muốn thiết lập CSS để áp dụng cho toàn bộ một tệp HTML thì làm cách nào?",
          options: [
            "Viết thuộc tính style cho riêng từng thẻ một",
            "Viết trong thẻ <style> đặt ở phần head",
            "Viết vào tệp .css rồi để đó, không cần nối",
            "Viết ở cuối phần body, sau nội dung trang",
          ],
          answer: 1,
          explain:
            "Đó là **CSS trong**: đưa toàn bộ mẫu định dạng vào thẻ `<style>` đặt trong phần `head`. Khi đó mọi phần tử của **trang web hiện thời** khớp với bộ chọn đều được áp dụng. Viết `style` cho từng thẻ là **nội tuyến** — chỉ ăn đúng một phần tử, phải lặp lại rất nhiều lần.",
        },
        {
          kind: "check",
          q: "Muốn một bộ định dạng dùng chung cho nhiều trang web thì làm thế nào?",
          options: [
            "Chép thẻ <style> sang từng trang web một",
            "Dùng thuộc tính style cho mọi phần tử HTML",
            "Viết vào tệp .css ngoài rồi nối vào các trang",
            "Không làm được, mỗi trang phải viết định dạng riêng",
          ],
          answer: 2,
          explain:
            "Đó là **CSS ngoài**: viết mẫu định dạng vào một tệp `.css` riêng rồi **nối vào từng trang** bằng thẻ `<link>` hoặc lệnh `@import`. Nhờ vậy nhiều trang dùng chung một bộ định dạng, **thống nhất** và khi sửa thì **chỉ sửa một lần** trong tệp css.",
        },
      ],
    },

    {
      id: "vai-tro-css",
      emoji: "⭐",
      heading: "Vì sao phải cần đến CSS",
      blocks: [
        {
          kind: "text",
          text: "**Nếu không dùng CSS** thì khi định dạng nội dung trang web, ta phải thực hiện thông qua việc **thiết lập các thuộc tính cho từng phần tử HTML**. Nếu có nhiều trang web và nhiều phần tử HTML thì công việc này **mất nhiều thời gian và có thể không thống nhất**.",
        },
        {
          kind: "code",
          caption: "① Không dùng CSS — phải chép đi chép lại định dạng cho từng thẻ một",
          preview: true,
          code: `<h2 style="color: teal;">Món khai vị</h2>
<h2 style="color: teal;">Món chính</h2>
<h2 style="color: teal;">Món tráng miệng</h2>
<h2 style="color: teal;">Đồ uống</h2>`,
        },
        {
          kind: "code",
          caption: "② Dùng CSS — một dòng duy nhất, thêm bao nhiêu mục cũng không phải viết lại",
          preview: true,
          code: `<style>
 h2 {color: teal;}
</style>

<h2>Món khai vị</h2>
<h2>Món chính</h2>
<h2>Món tráng miệng</h2>
<h2>Đồ uống</h2>`,
        },
        {
          kind: "example",
          title: "Thử tưởng tượng lúc phải sửa",
          text: "Sếp bảo đổi màu tiêu đề từ xanh sang nâu. Ở khung ①, em phải **sửa đủ 4 chỗ** — và đó mới là một trang có 4 mục; một website thật có hàng trăm tiêu đề trên hàng chục trang. Ở khung ②, em **sửa đúng 1 chỗ**. Nếu mẫu này nằm trong tệp `.css` ngoài, một lần sửa đó còn làm đổi **toàn bộ website**.",
        },
        {
          kind: "text",
          text: "CSS ra đời để phục vụ việc định dạng nội dung trang web một cách **thống nhất, nhanh chóng và thuận tiện**. Cụ thể:",
        },
        {
          kind: "compare",
          left: {
            title: "Không có CSS",
            emoji: "😩",
            items: [
              "Định dạng **trộn lẫn** vào từng thẻ HTML, nội dung và trang trí dính chặt lấy nhau.",
              "Mỗi phần tử phải viết định dạng **một lần riêng** → mất nhiều thời gian.",
              "Nhiều người cùng làm dễ ra kết quả **không thống nhất**.",
              "Đổi giao diện phải **mở từng trang sửa lại**.",
            ],
          },
          right: {
            title: "Có CSS",
            emoji: "😌",
            items: [
              "**Tách** việc nhập nội dung và việc định dạng thành hai công việc **độc lập**.",
              "Viết mẫu **một lần**, áp dụng cho **tất cả** phần tử trong bộ chọn.",
              "Cả website dùng chung một tệp css → giao diện **thống nhất**.",
              "Đổi giao diện chỉ cần **chỉnh sửa một lần**.",
            ],
          },
        },
        {
          kind: "text",
          text: "Việc tách rời này còn **giảm nhẹ công việc nhập nội dung** và **tăng tính chuyên nghiệp của việc định dạng** — người viết bài chỉ lo viết bài, người làm giao diện chỉ lo giao diện.",
        },
        {
          kind: "note",
          text: "CSS được thiết lập với mục đích làm cho công việc định dạng nội dung trang web trở nên **khoa học hơn, nhanh hơn, thuận tiện hơn**. Với CSS, các mẫu định dạng được thiết kế độc lập, có thể **viết ra một lần nhưng được áp dụng nhiều lần**.",
        },
        {
          kind: "text",
          text: "**Đôi nét lịch sử** (theo hộp tư liệu trang 75 của SGK) — CSS không sinh ra cùng lúc với HTML mà đến sau, khi người ta đã thấm nỗi khổ định dạng thủ công:",
        },
        {
          kind: "steps",
          items: [
            {
              label: "1994",
              title: "Ý tưởng đầu tiên",
              text: "Kĩ sư người Na Uy **Håkon Wium Lie** đưa ra ý tưởng CSS khi đang làm việc với Tim Berners-Lee tại viện hạt nhân **CERN**: tạo ra các mẫu định dạng riêng, **độc lập** với các phần tử HTML.",
            },
            {
              label: "1996",
              title: "CSS1 chính thức ra đời",
              text: "Các ý tưởng ban đầu từ 1994 mất hai năm mới thành phiên bản **CSS1** chính thức.",
            },
            {
              label: "1998",
              title: "CSS2",
              text: "Khởi động ngay sau CSS1 nhưng **mãi đến 1998 mới hoàn thiện**. Bản hoàn thiện nhất là **CSS2.1** ra đời năm **2011**, được nâng cấp hoàn thiện năm **2016**.",
            },
            {
              label: "CSS3",
              title: "Phát triển theo từng gói",
              text: "Từ bản **CSS3** trở đi, CSS được phát triển theo **từng gói riêng biệt**. Hiện các gói CSS3 vẫn đang hoàn thiện, đồng thời một số chuẩn của **CSS4, CSS5** vẫn đang được thiết lập mới. Hiệp hội chịu trách nhiệm các chuẩn HTML, CSS là **W3C**.",
            },
          ],
        },
        {
          kind: "check",
          q: "Chỉ cần sửa thông tin trong một tệp CSS là làm thay đổi định dạng của nhiều trang web — đúng hay sai?",
          options: [
            "Sai, mỗi trang web giữ một bản định dạng riêng",
            "Đúng, vì các trang đó cùng nối tới một tệp css",
            "Đúng, nhưng chỉ với trang nằm cùng thư mục",
            "Sai, phải mở từng trang web lên sửa lại bằng tay",
          ],
          answer: 1,
          explain:
            "**Đúng** — đây là câu Luyện tập số 2 của SGK. Một tệp CSS có thể **đồng thời áp dụng cho nhiều trang web**; các trang chỉ *nối* tới nó chứ không giữ bản sao riêng. Vì vậy sửa một lần trong tệp css là **cả website đổi theo** — kể cả các trang nằm ở thư mục khác, miễn là đường dẫn nối tới đúng.",
        },
        {
          kind: "check",
          q: "Mẫu định dạng h1, h2, h3 { border: 2px solid red; } có ý nghĩa gì?",
          options: [
            "Kẻ viền đỏ nét liền dày 2px cho cả ba cấp tiêu đề",
            "Kẻ viền đỏ dày 2px cho riêng tiêu đề cấp một",
            "Tô màu chữ đỏ cho cả ba cấp tiêu đề nói trên",
            "Kẻ ba đường viền đỏ chồng lên nhau ở mỗi tiêu đề",
          ],
          answer: 0,
          explain:
            "Bộ chọn `h1, h2, h3` chọn **đồng thời cả ba cấp tiêu đề**; vùng mô tả `border: 2px solid red` đặt **khung viền dày 2 pixel, nét liền (`solid`), màu đỏ**. Đây là câu hỏi củng cố của SGK. Lưu ý `border` là **viền**, còn màu chữ là thuộc tính `color`.",
        },
      ],
    },
  ],

  summary: [
    "**CSS** (Cascading Style Sheet) là tập hợp các **mẫu định dạng** viết bằng **ngôn ngữ riêng, độc lập với HTML**.",
    "Mỗi mẫu gồm **bộ chọn** (chọn thẻ nào) và **vùng mô tả** `{thuộc tính: giá trị;}`; nhiều quy định ngăn nhau bởi `;`, nhiều thẻ ngăn nhau bởi `,`.",
    "**CSS trong**: thẻ `<style>` trong `head` — áp dụng cho **cả trang hiện thời**.",
    "**CSS ngoài**: tệp `.css` riêng, nối bằng `<link>` hoặc `@import` — áp dụng cho **nhiều trang, cả website**.",
    "**CSS nội tuyến**: thuộc tính `style` viết thẳng trong thẻ — chỉ ăn **đúng một phần tử**, và **đè lên** hai cách kia.",
    "Giá trị lớn nhất của CSS: **tách nội dung khỏi định dạng**, **viết một lần dùng nhiều lần**, đổi giao diện chỉ cần **sửa một chỗ**.",
  ],
};

export default theory;
