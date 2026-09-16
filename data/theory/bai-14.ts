import type { LessonTheory } from "@/lib/types";

// Bài 14. Định dạng văn bản bằng CSS — SGK Tin học 12 (ICT, Kết nối tri thức),
// trang 76–82. Giữ đúng thuật ngữ sách: phông chữ, cỡ chữ, đường cơ sở
// (baseline), chiều cao dòng (line-height), tính kế thừa, thứ tự ưu tiên.
//
// ĐÃ KIỂM CHỨNG TRÊN TRÌNH DUYỆT (2026-08-07) ba chỗ mã trong sách chạy khác
// với mô tả — gộp vào một hộp Cập nhật 2026 thay vì rải khắp bài:
//   1. font-style: italics  -> computed ra "normal", KHÔNG nghiêng. Phải viết
//      italic (không có s). Sách viết "italics" cả ở phần chữ lẫn ví dụ.
//   2. line-align: right    -> text-align vẫn là "start", không căn phải. Đây
//      là lỗi in: chính đầu mục của sách ghi đúng là text-align.
//   3. "chiều cao dòng mặc định = 2em" -> đo thật: cỡ chữ 16px cho ra dòng cao
//      18px (1,125 lần), còn 2em là 32px — lệch gần gấp đôi.
// Toàn bộ quy tắc ưu tiên của Hình 14.7 thì tái hiện ĐÚNG như sách nói.

const theory: LessonTheory = {
  minutes: 18,

  intro:
    "Bài 13 đã biết CSS là gì và đặt ở đâu. Bài này học **bộ thuộc tính đầu tiên và dùng nhiều nhất**: định dạng chữ nghĩa — phông chữ, cỡ chữ, màu chữ, dòng văn bản. Cuối bài là hai quy tắc quyết định **mẫu nào thắng** khi nhiều mẫu cùng tranh một phần tử.",

  sections: [
    {
      id: "phong-chu",
      emoji: "🔠",
      heading: "Định dạng phông chữ",
      blocks: [
        {
          kind: "text",
          text: "CSS hỗ trợ thiết lập các thuộc tính liên quan đến **chọn phông** (`font-family`), **chọn cỡ chữ** (`font-size`), **chọn kiểu chữ** (`font-style`), **độ dày nét chữ** (`font-weight`) và nhiều thuộc tính khác.",
        },
        {
          kind: "text",
          text: "**font-family.** Trên máy tính có thể cài đặt nhiều phông chữ khác nhau, mỗi phông có một tên riêng. Tuy nhiên các phông chữ có thể được **chia làm năm loại**:",
        },
        {
          kind: "code",
          caption: "Hình 14.2 SGK — năm loại phông chữ, khung bên hiển thị bằng chính phông thật của máy em",
          preview: true,
          tall: true,
          code: `<p style="font-family: serif; font-size: 22px">
  CSS history — serif (chữ có chân)</p>
<p style="font-family: sans-serif; font-size: 22px">
  CSS history — sans-serif (chữ không chân)</p>
<p style="font-family: monospace; font-size: 22px">
  CSS history — monospace (rộng đều)</p>
<p style="font-family: cursive; font-size: 22px">
  CSS history — cursive (chữ viết tay)</p>
<p style="font-family: fantasy; font-size: 22px">
  CSS history — fantasy (chữ trừu tượng)</p>`,
        },
        {
          kind: "example",
          title: "“Chân” của chữ là cái gì?",
          text: "Nhìn kĩ chữ **serif** ở khung trên: cuối mỗi nét có một **gạch ngang nhỏ** như bàn chân — đó là *chân* (serif). Chữ **sans-serif** thì cụt nét, không có gạch đó (*sans* tiếng Pháp nghĩa là **không có**). Chữ có chân dễ đọc trên giấy in, chữ không chân sắc nét hơn trên màn hình.",
        },
        {
          kind: "code",
          caption: "Ví dụ trong SGK — khai báo một danh sách phông dự phòng cho thẻ h1",
          code: `h1 {font-family: Times, "Times New Roman", Tahoma, serif ;}`,
        },
        {
          kind: "text",
          text: "Sau `font-family` là một hay **một danh sách các tên phông chữ**. Nếu tên phông chữ có chứa **dấu cách** thì cần đặt trong **hai dấu nháy kép** (hoặc nháy đơn). Trình duyệt sẽ **lần lượt tìm các phông trong danh sách từ trái sang phải** để chọn thể hiện văn bản; nếu không tìm thấy phông nào thì sẽ **chọn phông cùng loại bất kì**. Vì vậy danh sách thường **để tên loại phông ở vị trí cuối cùng** làm chốt chặn.",
        },
        {
          kind: "text",
          text: "**font-size.** Thuộc tính này thiết lập cỡ chữ, cú pháp `selector {font-size: cỡ chữ;}`. Cỡ chữ có thể viết theo **bốn kiểu**:",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "📏",
              title: "Đơn vị đo tuyệt đối",
              text: "**cm** (centimét), **mm** (milimét), **in** (inch = 2,54 cm), **px** (pixel = 1/96 inch), **pt** (point = 1/72 inch).",
            },
            {
              emoji: "🔗",
              title: "Đơn vị đo tương đối",
              text: "**em** (so với cỡ chữ hiện thời của trình duyệt), **ex** (so với chiều cao chữ *x* của cỡ chữ hiện thời), **rem** (so với cỡ chữ của phần tử gốc `html`).",
            },
            {
              emoji: "％",
              title: "Theo tỉ lệ phần trăm",
              text: "Tính theo **% cỡ chữ của phần tử cha**. Ví dụ `html {font-size: 100%;}` đặt cỡ chữ mặc định cho toàn trang theo chế độ mặc định của trình duyệt.",
            },
            {
              emoji: "🎚️",
              title: "Theo các mức có sẵn",
              text: "**xx-small, x-small, small, medium, large, x-large, xx-large**. Cỡ chữ mặc định là **medium**.",
            },
          ],
        },
        {
          kind: "code",
          caption: "Thử ngay: cùng một câu, năm cách khai báo cỡ chữ khác nhau",
          preview: true,
          tall: true,
          code: `<p style="font-size: 12px">12px — đơn vị tuyệt đối</p>
<p style="font-size: 1.2em">1.2em — gấp 1,2 cỡ chữ hiện thời</p>
<p style="font-size: 150%">150% — theo cỡ chữ phần tử cha</p>
<p style="font-size: medium">medium — mức mặc định</p>
<p style="font-size: x-large">x-large — mức có sẵn cỡ lớn</p>`,
        },
        {
          kind: "text",
          text: "**font-style** thiết lập kiểu chữ **thường** hay **nghiêng**, có hai giá trị là **normal** (thường) và **italics** (nghiêng). **font-weight** thiết lập **kiểu chữ đậm**: đặt bằng chữ **normal** (bình thường), **bold** (đậm), hoặc đặt bằng các giá trị số từ **100, 200,…, 900**, trong đó các mức độ viết đậm là **từ 500 trở lên**.",
        },
        {
          kind: "code",
          caption: "Ví dụ trong SGK — đặt thẻ strong và em với kiểu chữ nghiêng và đậm khác nhau",
          code: `em {font-style: italics; font-weight: bold;}
strong {font-style: italics; font-weight: 900;}`,
        },
        {
          kind: "update",
          title: "Ba chỗ trong sách gõ vào máy sẽ không ra kết quả",
          text: "Em soạn trang web thật thì cần biết, còn **bài thi vẫn bám theo sách**. ① Giá trị nghiêng của `font-style` phải viết là **`italic`** — **không có chữ *s***; gõ `italics` như sách thì trình duyệt bỏ qua, chữ vẫn thẳng đứng (đã thử: kết quả trả về `normal`). ② Ví dụ căn phải ở trang 78 in nhầm thành `line-align`, phải là **`text-align: right`** — chính đầu mục của sách cũng ghi `text-align`. ③ Sách ghi chiều cao dòng mặc định là `2em`, nhưng đo thật thì cỡ chữ 16px cho dòng cao **18px (khoảng 1,125 lần)**, còn `2em` là 32px — lệch gần gấp đôi.",
        },
        {
          kind: "code",
          caption: "Bằng chứng: hai dòng dưới chỉ khác nhau đúng một chữ “s” — dòng đầu KHÔNG nghiêng",
          preview: true,
          code: `<p style="font-style: italics">Viết italics như sách — chữ
vẫn thẳng đứng.</p>

<p style="font-style: italic">Viết italic không có s — chữ
nghiêng thật.</p>

<p style="font-weight: bold">font-weight: bold — chữ đậm.</p>
<p style="font-weight: 900">font-weight: 900 — đậm hơn nữa.</p>`,
        },
        {
          kind: "check",
          q: "Vì sao danh sách trong font-family thường để tên loại phông (serif, sans-serif…) ở cuối cùng?",
          options: [
            "Vì trình duyệt luôn đọc danh sách từ phải sang trái",
            "Vì tên loại phông bắt buộc phải đứng cuối danh sách",
            "Để làm chốt chặn khi không tìm thấy phông nào phía trước",
            "Vì các phông đứng trước chỉ có tác dụng khi in ra giấy",
          ],
          answer: 2,
          explain:
            "Trình duyệt tìm **lần lượt từ trái sang phải**. Nếu máy không cài phông nào trong danh sách, tên loại phông ở cuối bảo đảm trình duyệt vẫn **chọn được một phông cùng loại bất kì** — trang web không bị vỡ kiểu chữ. Đó là chốt chặn, không phải quy định bắt buộc.",
        },
      ],
    },

    {
      id: "mau-chu",
      emoji: "🖍️",
      heading: "Định dạng màu chữ",
      blocks: [
        {
          kind: "text",
          text: "Thuộc tính **`color`** thiết lập màu chữ. Một số giá trị màu cơ bản: **black** (đen), **white** (trắng), **purple** (tím), **blue** (xanh dương), **orange** (cam), **red** (đỏ), **green** (xanh lá cây), **yellow** (vàng).",
        },
        {
          kind: "code",
          caption: "Ví dụ trong SGK — để ý bộ chọn dấu sao ở dòng cuối",
          preview: true,
          code: `<style>
 h1 {color: red;}
 em {color: green;}
 * {color: black;}
</style>

<h1>Tiêu đề này màu đỏ</h1>
<p>Đoạn văn thường màu đen, nhưng <em>cụm này xanh lá</em>
vì nằm trong thẻ em.</p>`,
        },
        {
          kind: "text",
          text: "**Bộ chọn với kí tự `*` là tất cả các phần tử HTML của trang web.** Khi áp dụng CSS trên thì các phần tử `h1` có chữ màu đỏ, các phần tử `em` có chữ màu xanh lá cây, còn **toàn bộ các phần tử còn lại** có chữ màu đen.",
        },
        {
          kind: "note",
          text: "Các mẫu định dạng văn bản cơ bản bao gồm các thuộc tính liên quan đến **phông chữ**, **màu chữ** và **định dạng dòng văn bản**.",
        },
      ],
    },

    {
      id: "dong-van-ban",
      emoji: "📐",
      heading: "Định dạng dòng văn bản",
      blocks: [
        {
          kind: "text",
          text: "Để hiểu cách định dạng loại này cần biết hai khái niệm: **đường cơ sở** (baseline) và **chiều cao dòng** (line-height). **Đường cơ sở** là **đường ngang mà các chữ cái đứng thẳng trên nó**. **Chiều cao dòng** văn bản là **khoảng cách giữa các đường cơ sở** của các dòng trong cùng một đoạn văn bản.",
        },
        {
          kind: "figure",
          diagram: "baseline-line-height",
          caption: "Để ý chữ “g” thò xuống dưới đường cơ sở — chữ cái đứng trên đường đó chứ không nằm trong khung",
        },
        {
          kind: "text",
          text: "**line-height** thiết lập chiều cao dòng cho bộ chọn. Ngoài các đơn vị đo thông thường, còn có thể thiết lập các số đo tương đối:",
        },
        {
          kind: "code",
          caption: "Ba cách viết chiều cao dòng, kèm chú thích của SGK",
          code: `p {line-height: 3;}     /* bằng 3 lần cỡ chữ hiện thời */
p {line-height: 2em;}   /* bằng 2 lần chiều cao dòng hiện thời */
p {line-height: 200%;}  /* bằng 200% chiều cao dòng của phần tử cha */`,
        },
        {
          kind: "code",
          caption: "Thử ngay: cùng một đoạn văn, ba chiều cao dòng — để ý khoảng hở giữa các dòng",
          preview: true,
          tall: true,
          code: `<p style="line-height: 1; background: #eef">
line-height 1 — các dòng sát nhau, đọc dài dễ mỏi mắt.
Dòng thứ hai của đoạn này nằm rất sát dòng trên.</p>

<p style="line-height: 2; background: #efe">
line-height 2 — thoáng gấp đôi, dễ đọc hơn hẳn.
Dòng thứ hai của đoạn này cách xa dòng trên.</p>`,
        },
        {
          kind: "text",
          text: "**text-align** thiết lập **căn lề** cho các phần tử được chọn. Các kiểu căn hàng bao gồm **left** (trái), **center** (giữa), **right** (phải), **justify** (đều hai bên).",
        },
        {
          kind: "code",
          caption: "Thử ngay bốn kiểu căn lề — để ý kiểu justify kéo giãn chữ cho thẳng hai mép",
          preview: true,
          tall: true,
          code: `<p style="text-align: left">left — căn trái, mép phải so le.
Đây là dòng thứ hai để thấy rõ mép phải.</p>

<p style="text-align: center">center — căn giữa</p>

<p style="text-align: right">right — căn phải</p>

<p style="text-align: justify">justify — căn đều hai bên nên
chữ được kéo giãn ra cho hai mép đều thẳng tăm tắp.</p>`,
        },
        {
          kind: "text",
          text: "**text-decoration** thiết lập tính chất *“trang trí”* dòng văn bản bằng các **đường kẻ ngang** trên, dưới hay giữa dòng. Thuộc tính này **sẽ thay thế và mở rộng cho thẻ `<u>`** của HTML. Bốn giá trị thường dùng là **none** (mặc định, không trang trí), **underline** (kẻ dưới chữ), **overline** (kẻ phía trên chữ) và **line-through** (kẻ giữa dòng chữ).",
        },
        {
          kind: "code",
          caption: "Hình 14.4 SGK — ba kiểu đường kẻ ngang",
          preview: true,
          code: `<p style="text-decoration: underline">chữ có gạch dưới</p>
<p style="text-decoration: overline">chữ có gạch trên</p>
<p style="text-decoration: line-through">chữ có đường kẻ ngang</p>`,
        },
        {
          kind: "note",
          text: "*Lưu ý:* Thuộc tính `text-decoration` **không có tính kế thừa** — đặt cho phần tử cha thì các phần tử con **không tự động nhận** đường kẻ đó.",
        },
        {
          kind: "text",
          text: "**text-indent** định dạng **thụt lề dòng đầu tiên**. Nếu giá trị **lớn hơn 0** thì dòng đầu tiên **thụt vào**. Nếu giá trị **nhỏ hơn 0** thì dòng đầu tiên **lùi ra ngoài**, còn gọi là **thụt lề treo** (hanging indent).",
        },
        {
          kind: "code",
          caption: "Thử ngay: giá trị dương thụt vào, giá trị âm thò ra — đó là thụt lề treo",
          preview: true,
          tall: true,
          code: `<p style="text-indent: 40px; background: #eef">
text-indent 40px — dòng đầu thụt vào. Dòng thứ hai trở đi
thì vẫn thẳng mép trái như bình thường.</p>

<p style="text-indent: -30px; margin-left: 40px; background: #fee">
text-indent -30px — dòng đầu thò hẳn ra ngoài, đây gọi là
thụt lề treo, hay dùng cho danh mục tài liệu.</p>`,
        },
        {
          kind: "check",
          q: "Chiều cao dòng (line-height) được đo bằng khoảng cách giữa hai cái gì?",
          options: [
            "Hai mép trên của hai dòng chữ liền nhau",
            "Hai đường cơ sở của hai dòng liền nhau",
            "Đỉnh chữ cao nhất và đáy chữ thấp nhất",
            "Mép trái và mép phải của một dòng chữ",
          ],
          answer: 1,
          explain:
            "SGK định nghĩa: chiều cao dòng là **khoảng cách giữa các đường cơ sở** của các dòng trong cùng một đoạn văn bản. Đường cơ sở là đường ngang mà các chữ cái **đứng thẳng lên trên nó** — chữ có nét thò xuống như `g`, `y` sẽ vượt qua đường này.",
        },
        {
          kind: "check",
          q: "Đặt text-indent với giá trị nhỏ hơn 0 thì dòng đầu tiên sẽ như thế nào?",
          options: [
            "Thụt vào sâu hơn so với các dòng còn lại",
            "Bị xoá bỏ và dồn lên dòng phía trên nó",
            "Lùi hẳn ra ngoài, gọi là thụt lề treo",
            "Giữ nguyên vì giá trị âm bị trình duyệt bỏ qua",
          ],
          answer: 2,
          explain:
            "Giá trị **nhỏ hơn 0** làm dòng đầu tiên **lùi ra ngoài** so với các dòng còn lại — SGK gọi là **thụt lề treo** (hanging indent). Kiểu này hay gặp ở danh mục tài liệu tham khảo: dòng đầu thò ra để nhìn thấy ngay tên tác giả.",
        },
      ],
    },

    {
      id: "ke-thua-uu-tien",
      emoji: "🌳",
      heading: "Tính kế thừa và thứ tự ưu tiên",
      blocks: [
        {
          kind: "text",
          text: "Một tính chất **rất quan trọng** của CSS là **tính kế thừa**. Nếu một mẫu CSS áp dụng cho một phần tử HTML bất kì thì nó sẽ được **tự động áp dụng cho tất cả các phần tử là con, cháu** của phần tử đó trong mô hình cây HTML — trừ các trường hợp ngoại lệ, ví dụ các phần tử đã có mẫu định dạng riêng.",
        },
        {
          kind: "figure",
          diagram: "ke-thua-cay-html",
          caption: "Hình 14.5 SGK — h1 có mẫu riêng nên chặn được dòng chảy, h2 và p thì nhận màu từ body",
        },
        {
          kind: "code",
          caption: "Thử ngay tính kế thừa — chỉ đặt màu cho body mà cả trang đổi theo",
          preview: true,
          code: `<style>
 body {color: blue;}
 h1 {color: red; text-align: center;}
</style>

<h1>Tính kế thừa của CSS</h1>
<h2>1. Mô hình cây html</h2>
<p>Đây là đoạn đầu tiên…</p>`,
        },
        {
          kind: "text",
          text: "**Thứ tự ưu tiên.** Do được phép có nhiều mẫu định dạng nên có thể xảy ra trường hợp **nhiều mẫu cùng áp dụng cho một phần tử**. Khi đó trình duyệt sẽ thực hiện **mẫu định dạng được viết cuối cùng** — đây chính là tính chất **“cascading”** của CSS.",
        },
        {
          kind: "code",
          caption: "Hai mẫu cùng cho h1: mẫu đầu căn giữa, mẫu sau căn trái — kết quả theo mẫu viết sau",
          preview: true,
          code: `<style>
 body {color: blue;}
 h1 {color: red; text-align: center;}
 h1 {text-align: left;}
</style>

<h1>Tính kế thừa của CSS</h1>
<h2>1. Mô hình cây html</h2>
<p>Đây là đoạn đầu tiên…</p>`,
        },
        {
          kind: "text",
          text: "Ngoài ra CSS còn cho phép dùng **kí hiệu `*`** và **`!important`**:",
        },
        {
          kind: "compare",
          left: {
            title: "Kí hiệu *",
            emoji: "🔻",
            items: [
              "Dùng trong bộ chọn với ý nghĩa là **phần tử bất kì**.",
              "Định dạng này áp dụng cho **mọi phần tử chưa có trong bất cứ mẫu định dạng nào khác** của CSS.",
              "**Mức độ ưu tiên thấp nhất** — thua cả mẫu viết trước nó.",
            ],
          },
          right: {
            title: "Từ khoá !important",
            emoji: "🔺",
            items: [
              "Mẫu chứa nó sẽ được **ưu tiên cao nhất**, **không phụ thuộc vị trí** của mẫu trong CSS.",
              "Phải viết **ngay sau thuộc tính** cần đánh dấu ưu tiên.",
              "**Chỉ thuộc tính đó** được ưu tiên cao nhất, các thuộc tính khác vẫn theo luật thường.",
            ],
          },
        },
        {
          kind: "figure",
          diagram: "thu-tu-uu-tien-css",
          caption: "Ba bậc ưu tiên — nhớ được thang này là giải được mọi câu hỏi “mẫu nào thắng”",
        },
        {
          kind: "code",
          caption:
            "Hình 14.7 SGK — thử đoán trước: tiêu đề sẽ căn thế nào và màu gì? Ba quy tắc cùng đánh nhau trong đây",
          preview: true,
          tall: true,
          code: `<style>
 h1 {
     text-indent: 0em;
     color: blue;
     text-align: center !important ;}
 h1 { text-align: left; color: red ;}
 * {text-indent: 1em; color: blue ; }
</style>

<h1>Lịch sử CSS</h1>
<p>Ý tưởng của CSS do kĩ sư Håkon Wium Lie, người Na Uy,
thiết lập năm 1994 trong khi làm việc với Tim Berners-Lee
tại viện hạt nhân CERN.</p>`,
        },
        {
          kind: "example",
          title: "Giải thích kết quả khung trên",
          text: "**Căn giữa** vì `text-align: center` có `!important` nên thắng `text-align: left` viết sau. **Màu đỏ** vì hai mẫu `h1` không có `!important` cho `color`, mẫu **viết sau** (`red`) thắng mẫu viết trước (`blue`). **Không thụt lề** vì `text-indent: 1em` nằm ở bộ chọn `*` — **ưu tiên thấp nhất**, thua mẫu `h1` dù nó được viết ở dòng cuối. Còn thẻ `<p>` không có mẫu riêng nào nên **nhận cả hai** thuộc tính của `*`: chữ xanh và thụt lề 1em.",
        },
        {
          kind: "note",
          text: "Các mẫu định dạng CSS được áp dụng theo nguyên tắc **kế thừa** trong mô hình cây HTML. Nếu có nhiều mẫu định dạng được viết cho **cùng một bộ chọn** thì **mẫu viết sau cùng** sẽ được áp dụng. Nếu bộ chọn có kí tự **`*`** thì được áp dụng cho mọi phần tử nhưng với **độ ưu tiên thấp nhất**. Ngược lại, mẫu định dạng với từ khoá **`!important`** có mức **ưu tiên cao nhất**.",
        },
        {
          kind: "check",
          q: "Mẫu body {font-family: sans-serif;} làm toàn bộ văn bản trang web mặc định hiển thị bằng phông có chân — đúng hay sai?",
          options: [
            "Đúng, vì sans-serif chính là loại phông có chân",
            "Sai, sans-serif là phông KHÔNG chân",
            "Đúng, nhưng chỉ áp dụng cho riêng thẻ body",
            "Sai, vì thẻ body không thể đặt phông chữ được",
          ],
          answer: 1,
          explain:
            "**Sai** — đây là câu hỏi củng cố của SGK. **sans-serif** là phông **không chân** (*sans* nghĩa là *không có*); phông **có chân** là **serif**. Về phạm vi thì mẫu này **đúng là áp dụng cho cả trang**, nhờ tính kế thừa từ `body` xuống mọi phần tử con cháu.",
        },
        {
          kind: "check",
          q: "Cho CSS: h1 {text-align: center !important;} rồi h1 {text-align: left;}. Tiêu đề h1 sẽ được căn thế nào?",
          options: [
            "Căn trái, vì mẫu viết sau luôn được ưu tiên",
            "Căn giữa, vì !important có ưu tiên cao nhất",
            "Căn đều hai bên do hai mẫu trung hoà nhau",
            "Không căn được vì hai mẫu mâu thuẫn nhau",
          ],
          answer: 1,
          explain:
            "**Căn giữa.** Quy tắc *mẫu viết sau thắng* chỉ áp dụng khi các mẫu **ngang hàng nhau**. Ở đây thuộc tính `text-align` của mẫu đầu có **`!important`** nên được **ưu tiên cao nhất, không phụ thuộc vị trí** — mẫu viết sau thua. Kết quả này đã được kiểm tra thật trên trình duyệt ở khung Hình 14.7 phía trên.",
        },
        {
          kind: "check",
          q: "Bộ chọn * {color: blue;} viết ở dòng cuối cùng của CSS, còn h1 {color: red;} viết ở dòng đầu. Thẻ h1 sẽ có màu gì?",
          options: [
            "Màu xanh, vì mẫu dấu sao được viết sau cùng",
            "Màu đen, vì hai mẫu triệt tiêu lẫn nhau hết",
            "Màu đỏ, vì bộ chọn * có ưu tiên thấp nhất",
            "Màu tím, do hai màu xanh và đỏ trộn vào nhau",
          ],
          answer: 2,
          explain:
            "**Màu đỏ.** Bộ chọn `*` có **mức ưu tiên thấp nhất**, thua mọi mẫu khác **kể cả khi nó được viết ở vị trí cuối cùng**. Mẫu `*` chỉ có tác dụng với những phần tử **chưa được nhắc tới trong bất cứ mẫu nào khác** — ở đây là các thẻ không phải `h1`.",
        },
      ],
    },

    {
      id: "thuc-hanh-css",
      emoji: "🛠️",
      heading: "Thực hành: định dạng một bài đọc",
      blocks: [
        {
          kind: "text",
          text: "**Nhiệm vụ 1 của SGK:** trình bày nội dung bài đọc *“Kĩ thuật chia để trị”* (Hình 14.8) theo ba yêu cầu — các tiêu đề **căn trái, cỡ chữ 16px, màu đỏ, phông chữ không chân**; các dòng văn bản **thụt lề dòng đầu 2 kí tự, căn trái**; toàn bộ văn bản trừ tiêu đề là **phông chữ có chân**.",
        },
        {
          kind: "code",
          caption: "Nhiệm vụ 1 — dịch từng yêu cầu thành thuộc tính CSS tương ứng",
          preview: true,
          tall: true,
          code: `<style>
 h1,h2 {font-family: sans-serif; font-size: 16px;
    color: red; text-align: left; }
 p {font-family: serif; text-align: left; text-indent: 2em; }
</style>

<h1>Kĩ thuật chia để trị</h1>
<p>Chia để trị hay Divide and Conquer là một kĩ thuật thiết
kế thuật toán và chương trình rất quan trọng. Ý tưởng chính
của kĩ thuật này nằm ở hai thao tác "chia" và "trị".</p>
<h2>Ý tưởng của kĩ thuật chia để trị</h2>
<p>Từ bài toán gốc ban đầu (kí hiệu P), chúng ta chia thành
các bài toán nhỏ hơn về kích thước nhưng vẫn giữ nguyên yêu
cầu.</p>`,
        },
        {
          kind: "text",
          text: "**Nhiệm vụ 2:** vẫn trang web đó nhưng đổi yêu cầu — tiêu đề **căn giữa, cỡ chữ 16px, màu xanh**; các dòng văn bản **thụt lề dòng đầu 2 kí tự, căn đều hai bên**; các từ **in đậm và in nghiêng** thể hiện theo **mặc định của trình duyệt**.",
        },
        {
          kind: "code",
          caption: "Nhiệm vụ 2 — chỉ sửa mấy giá trị trong CSS, không đụng gì tới phần nội dung",
          preview: true,
          tall: true,
          code: `<style>
 h1,h2 {font-family: sans-serif; font-size: 16px;
    color: blue; text-align: center; }
 p {text-align: justify; text-indent: 2em; }
 strong,em {font-size: 100%; }
</style>

<h1>Kĩ thuật chia để trị</h1>
<p>Chia để trị hay <strong>Divide and Conquer</strong> là một
kĩ thuật thiết kế thuật toán rất quan trọng. Ý tưởng chính nằm
ở hai thao tác <em>chia</em> và <em>trị</em>.</p>
<h2>Ý tưởng của kĩ thuật chia để trị</h2>
<p>Từ bài toán gốc ban đầu (kí hiệu P), chúng ta chia thành
các bài toán nhỏ hơn về kích thước nhưng vẫn giữ nguyên yêu
cầu.</p>`,
        },
        {
          kind: "example",
          title: "Đây chính là điều Bài 13 đã hứa",
          text: "Hai khung trên dùng **cùng một khối nội dung HTML**, chỉ khác phần `<style>`. Muốn đổi hẳn diện mạo bài đọc, em **không phải động vào một chữ nào của nội dung** — đúng tinh thần *tách việc nhập nội dung khỏi việc định dạng* mà Bài 13 đã nêu.",
        },
        {
          kind: "check",
          q: "Yêu cầu “các dòng văn bản thụt lề dòng đầu 2 kí tự” được viết thành thuộc tính CSS nào?",
          options: [
            "text-align: 2em",
            "text-indent: 2em",
            "line-height: 2em",
            "font-size: 2em",
          ],
          answer: 1,
          explain:
            "**`text-indent: 2em`** — `text-indent` là thụt lề **dòng đầu tiên**, còn đơn vị `em` tính theo cỡ chữ nên `2em` xấp xỉ bề ngang **2 kí tự**. `text-align` là căn lề, `line-height` là chiều cao dòng, `font-size` là cỡ chữ.",
        },
      ],
    },
  ],

  summary: [
    "**Phông chữ**: `font-family` (5 loại — serif, sans-serif, monospace, cursive, fantasy; danh sách tìm từ trái sang phải), `font-size`, `font-style`, `font-weight` (đậm từ 500 trở lên).",
    "**Màu chữ**: `color`. Bộ chọn **`*`** nghĩa là **mọi phần tử**.",
    "**Dòng văn bản**: `line-height` (khoảng cách giữa hai **đường cơ sở**), `text-align` (left/center/right/justify), `text-decoration` (underline/overline/line-through, **không kế thừa**), `text-indent` (âm thì thành **thụt lề treo**).",
    "**Kế thừa**: mẫu đặt cho phần tử cha **tự động áp dụng cho con cháu**, trừ phần tử đã có mẫu riêng.",
    "**Thứ tự ưu tiên**: `!important` **cao nhất** → mẫu thường (**viết sau thắng viết trước**) → bộ chọn `*` **thấp nhất**.",
    "Đổi hẳn diện mạo trang chỉ cần sửa phần `<style>`, **không đụng tới nội dung**.",
  ],
};

export default theory;
