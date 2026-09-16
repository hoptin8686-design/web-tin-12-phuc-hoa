import type { LessonTheory } from "@/lib/types";

// Bài 10. Tạo liên kết — SGK Tin học 12 (ICT, Kết nối tri thức), trang 57–61.
// Giữ đúng thuật ngữ sách: siêu văn bản, siêu liên kết, đường dẫn tuyệt đối,
// đường dẫn tương đối, liên kết trong cùng website, liên kết trong cùng trang.

const theory: LessonTheory = {
  minutes: 12,
  intro:
    "Trang web sẽ trở thành một 'ốc đảo' nếu không có cách nào đi đến nó hay từ nó đi ra. Bài này dạy cách tạo **siêu liên kết** (link) bằng thẻ `<a>` — tính năng cốt lõi làm nên mạng lưới World Wide Web.",

  sections: [
    {
      id: "sieu-van-ban",
      emoji: "🔗",
      heading: "Siêu văn bản và đường dẫn",
      blocks: [
        {
          kind: "text",
          text: "**Siêu văn bản** (hypertext) là loại văn bản mà nội dung của nó không chỉ chứa văn bản mà còn chứa nhiều dạng dữ liệu khác như âm thanh, hình ảnh,… và đặc biệt là chứa các **siêu liên kết** (hyperlink) tới siêu văn bản khác.",
        },
        {
          kind: "example",
          title: "Khác gì với đọc sách giấy?",
          text: "Khi xem siêu văn bản, em **không cần xem tuần tự từ đầu đến cuối** mà có thể nhờ các siêu liên kết để **truy cập vị trí tương ứng không theo trình tự nào**. **Siêu liên kết** (còn gọi tắt là **liên kết**) là **một tham chiếu** để liên kết tới siêu văn bản khác — nháy chuột vào vị trí đặt liên kết trong văn bản ban đầu là truy cập được ngay.",
        },
        {
          kind: "text",
          text: "Trong HTML, người ta sử dụng **thẻ `<a>`** cho các liên kết. Cấu trúc chung:",
        },
        {
          kind: "code",
          caption: "Cú pháp tạo liên kết",
          code: `<a href="URL">Nội dung hiển thị tại vị trí đặt liên kết</a>`,
        },
        {
          kind: "text",
          text: "Trong đó **URL** là địa chỉ (đường dẫn) tham chiếu tới tài liệu được liên kết. Thuộc tính **`href`** dùng để cung cấp địa chỉ của trang web hay tài liệu được liên kết. **Đường dẫn URL phải được nằm trong cặp dấu nháy kép `\" \"`.** Phần lớn các liên kết trỏ tới một tài liệu HTML khác, nhưng cũng có thể trỏ tới một hình ảnh, tệp âm thanh hoặc video.",
        },
        {
          kind: "text",
          text: "Có **hai loại URL chính** là đường dẫn tuyệt đối và đường dẫn tương đối:",
        },
        {
          kind: "compare",
          left: {
            title: "Tuyệt đối",
            emoji: "🌐",
            items: [
              "Cung cấp **địa chỉ đầy đủ** bao gồm cả giao thức (`http://` hoặc `https://`), tên miền và tên đường dẫn chi tiết nếu cần.",
              "Dùng khi liên kết trên mạng Internet (tài liệu **không nằm trên máy chủ của mình**).",
              "Ví dụ: `href=\"https://www.nxbgd.vn/\"`",
            ],
          },
          right: {
            title: "Tương đối",
            emoji: "📂",
            items: [
              "Mô tả cách truy cập tài liệu được liên kết **từ vị trí của tài liệu hiện tại**.",
              "Dùng khi liên kết tới một tài liệu khác trên **cùng trang web (cùng máy chủ)**, không yêu cầu giao thức hay tên miền.",
              "Ví dụ: `href=\"BT/bai_tap_1.html\"`",
            ],
          },
        },
        {
          kind: "note",
          text: "Siêu văn bản là văn bản chứa nhiều loại dữ liệu và các liên kết tới siêu văn bản khác. Trong HTML, liên kết được xác định bằng **thẻ `<a>`** và thuộc tính **`href`** dùng để cung cấp đường dẫn (tuyệt đối hoặc tương đối) tới địa chỉ đích.",
        },
        {
          kind: "check",
          q: "Đường dẫn nào sau đây là đường dẫn tuyệt đối?",
          options: [
            "html/cach_tao_lien_ket.html",
            "../index.html",
            "http://google.com",
            "bai_tap/bai_tap_1.html",
          ],
          answer: 2,
          explain:
            "**`http://google.com`** là đường dẫn tuyệt đối vì có chứa giao thức (`http://`) và tên miền. Các đường dẫn còn lại là tương đối, mô tả vị trí từ tài liệu hiện tại.",
        },
      ],
    },

    {
      id: "lien-ket-trang-khac",
      emoji: "🌍",
      heading: "Liên kết tới trang web khác",
      blocks: [
        {
          kind: "text",
          text: "Khi cần liên kết từ trang web của mình tới một trang web khác trên Internet (liên kết ngoài), ta sử dụng thẻ `<a>` và truyền **đường dẫn tuyệt đối** cho thuộc tính `href`.",
        },
        {
          kind: "code",
          caption: "Ví dụ liên kết tới website của Nhà xuất bản Giáo dục",
          preview: true,
          code: `<p><a href="https://hanhtrangso.nxbgd.vn/sach-dien-tu?book_active=0"> Sách
điện tử Kết nối tri thức với cuộc sống</a></p>`,
        },
      ],
    },

    {
      id: "lien-ket-cung-website",
      emoji: "📁",
      heading: "Liên kết trong cùng website",
      blocks: [
        {
          kind: "text",
          text: "Phần lớn các liên kết được sử dụng là liên kết trỏ tới các trang trong cùng website của mình (ví dụ: từ trang chủ đi tới các trang nội dung). Trường hợp này gọi là liên kết trong, ta sử dụng **đường dẫn tương đối**.",
        },
        {
          kind: "text",
          text: "Khi đường dẫn không có giao thức ở đầu, trình duyệt kiểm tra địa chỉ đó **trên máy chủ hiện tại** để tìm tài liệu. Muốn viết được đường dẫn tương đối, trước hết phải **nhìn ra cấu trúc thư mục của website** — em đang đứng ở tệp nào, tệp cần tới nằm ở đâu.",
        },
        {
          kind: "figure",
          diagram: "cay-thu-muc-website",
          caption: "Hình 10.1 trong SGK — từ index.html viết đường dẫn tới từng tệp khác",
        },
        {
          kind: "text",
          text: "Giả sử em đang ở trang **`index.html`** như hình trên. Có **bốn trường hợp** khi dùng đường dẫn tương đối:",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Cùng thư mục:** chỉ cần cung cấp tên tệp. Ví dụ: `href=\"thong_tin.html\"`.",
            "**Dưới một cấp:** đường dẫn gồm tên thư mục và tên tệp, ngăn cách bởi dấu `/`. Ví dụ: `href=\"bai_tap/bai_tap_1.html\"`.",
            "**Dưới hai (hay nhiều) cấp:** đường dẫn gồm **tên các thư mục theo thứ tự từ trên xuống** rồi mới tới tên tệp, **mỗi cấp ngăn nhau bởi dấu `/`**. Ví dụ: `href=\"bai_tap/on_tap/bai_tap_on_tap.html\"`.",
            "**Ở thư mục mức trên:** dùng kí tự **`../`** để chỉ định “trở lại thư mục trên **một** mức”. **Số cụm `../` tương ứng với số mức quay trở lại.** Ví dụ từ `bai_tap_1.html` quay về trang chủ: `href=\"../index.html\"`.",
          ],
        },
        {
          kind: "code",
          caption: "Bốn trường hợp viết đường dẫn tương đối trên cấu trúc website ở hình trên",
          code: `<!-- 1. Cùng thư mục với index.html -->
<a href="thong_tin.html">Giới thiệu về trang web</a>

<!-- 2. Xuống một cấp (vào thư mục bai_tap) -->
<a href="bai_tap/bai_tap_1.html">Bài tập 1</a>

<!-- 3. Xuống hai cấp (bai_tap rồi on_tap) -->
<a href="bai_tap/on_tap/bai_tap_on_tap.html">Bài tập ôn tập</a>

<!-- 4. Lên một cấp — viết trong tệp bai_tap_1.html -->
<a href="../index.html">Quay lại trang chủ</a>`,
        },
        {
          kind: "check",
          q: "Để liên kết từ tệp hiện tại đến một tệp nằm ở thư mục cha (trên một cấp), ta bắt đầu đường dẫn bằng gì?",
          options: [
            "/",
            "./",
            "../",
            "//",
          ],
          answer: 2,
          explain:
            "Sử dụng **`../`** để chỉ định trở lại thư mục trên một mức. Nếu muốn lên 2 mức thì dùng `../../`.",
        },
        {
          kind: "check",
          q: "Nhìn cây thư mục ở trên: từ trang index.html, muốn liên kết tới tệp bai_tap_on_tap.html thì viết href thế nào?",
          options: [
            'href="bai_tap_on_tap.html"',
            'href="on_tap/bai_tap_on_tap.html"',
            'href="bai_tap/on_tap/bai_tap_on_tap.html"',
            'href="../bai_tap/on_tap/bai_tap_on_tap.html"',
          ],
          answer: 2,
          explain:
            "Tệp nằm **dưới hai cấp** so với index.html: phải đi qua thư mục `bai_tap` rồi tới `on_tap` mới gặp tệp. Đường dẫn gồm **tên các thư mục theo thứ tự từ trên xuống, mỗi cấp ngăn nhau bởi dấu `/`** → **`bai_tap/on_tap/bai_tap_on_tap.html`**. Không dùng `../` vì ta đang đi **xuống** chứ không đi lên.",
        },
      ],
    },

    {
      id: "lien-ket-cung-trang",
      emoji: "🎯",
      heading: "Liên kết tới vị trí khác trong cùng trang web",
      blocks: [
        {
          kind: "text",
          text: "Khi đọc một trang web dài, người dùng thường muốn nháy chuột vào mục lục để nhảy ngay đến phần nội dung tương ứng, hoặc từ cuối trang nhảy nhanh về đầu trang. Để tạo liên kết trong cùng trang, ta thực hiện hai bước:",
        },
        {
          kind: "steps",
          items: [
            {
              label: "1",
              title: "Tạo đích đến",
              text: "Thiết lập thuộc tính **`id`** cho thẻ HTML tại vị trí cần đến. Thuộc tính `id` giống như việc cắm cờ, giá trị `id` phải là **duy nhất** trong toàn bộ trang web (mỗi tên gọi chỉ xuất hiện một lần). Đây gọi là mã định danh đoạn.",
            },
            {
              label: "2",
              title: "Tạo liên kết",
              text: "Tạo thẻ `<a>` với thuộc tính `href` chứa dấu **`#`** theo sau là giá trị `id` vừa tạo: `href=\"#mã_định_danh_đoạn\"`.",
            },
          ],
        },
        {
          kind: "code",
          caption: "Ví dụ trong SGK — tạo bảng có id, rồi tạo liên kết trỏ tới bảng đó",
          code: `<!-- 1. Đặt id cho đích đến -->
<table id="Thong_tin"> ... </table>

<!-- 2. Tạo liên kết trỏ tới id đó -->
<a href="#Thong_tin">Thông tin chi tiết</a>`,
        },
        {
          kind: "code",
          caption: "Thử ngay: bấm vào liên kết trong khung xem trước sẽ nhảy xuống đúng mục có id",
          preview: true,
          code: `<p><a href="#phan-cuoi">Nhảy xuống phần cuối ↓</a></p>
<p>Nội dung ở giữa…</p>
<p>Nội dung ở giữa…</p>
<p>Nội dung ở giữa…</p>
<p>Nội dung ở giữa…</p>
<h3 id="phan-cuoi">Phần cuối</h3>
<p>Em đã nhảy tới đây!</p>`,
        },
        {
          kind: "check",
          q: "Để tạo liên kết nhảy đến một phần tử có id là \"Lich_su\", thuộc tính href phải viết như thế nào?",
          options: [
            'href="Lich_su"',
            'href="@Lich_su"',
            'href="#Lich_su"',
            'href="id=Lich_su"',
          ],
          answer: 2,
          explain:
            "Để liên kết tới một `id` trong cùng trang, `href` phải bắt đầu bằng dấu thăng **`#`** kèm theo tên `id`, tức là **`href=\"#Lich_su\"`**.",
        },
      ],
    },

    {
      id: "lien-ket-hinh-anh",
      emoji: "🖼️",
      heading: "Tạo liên kết cho hình ảnh",
      blocks: [
        {
          kind: "text",
          text: "Ngoài văn bản, ta có thể dùng hình ảnh làm nội dung liên kết (người dùng nháy chuột vào ảnh để mở trang khác). Để làm vậy, ta chỉ cần đặt thẻ **`<img>`** vào bên trong thẻ **`<a>`**.",
        },
        {
          kind: "text",
          text: "Trước hết cần hiển thị ảnh trong trang web bằng thẻ **`<img>`** với thuộc tính **`src`** chứa đường dẫn tới tệp ảnh. Đường dẫn này **cũng dùng đường dẫn tuyệt đối hoặc tương đối** giống như `href`.",
        },
        {
          kind: "code",
          caption: "Ví dụ trong SGK — ảnh Mặt Trời lưu ở images/sun.png, nháy vào ảnh mở trang thong_tin.html",
          code: `<a href="thong_tin.html">
  <img src="images/sun.png">
</a>`,
        },
        {
          kind: "code",
          caption:
            "Thử ngay: nháy vào hình Mặt Trời — ảnh nằm trong thẻ <a> nên bấm vào ảnh là đi theo liên kết. Ở đây href trỏ tới một mục ngay bên dưới để chạy được trong khung; ngoài thực tế href thường là tên tệp trang khác như ví dụ trên.",
          preview: true,
          code: `<a href="#gioi-thieu">
  <img width="90" height="90" alt="Mặt Trời"
       src="data:image/svg+xml;utf8,
       <svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'>
       <circle cx='45' cy='45' r='24' fill='%23EFA31D'/></svg>">
</a>
<p>Nháy vào hình Mặt Trời ở trên ↑</p>
<p>Nội dung ở giữa…</p>
<p>Nội dung ở giữa…</p>
<p>Nội dung ở giữa…</p>
<h3 id="gioi-thieu">Em vừa nháy vào một tấm ảnh!</h3>
<p>Ảnh đặt trong thẻ a nên bấm vào ảnh cũng đi theo liên kết.</p>`,
        },
        {
          kind: "note",
          text: "Từ một vị trí trong một trang web, ta có thể tạo liên kết tới trang web bất kì trên Internet, tới các trang ở trên cùng máy chủ hay liên kết tới những vị trí khác trong cùng trang.",
        },
      ],
    },
  ],

  summary: [
    "**Siêu văn bản** là văn bản chứa các **siêu liên kết** tới siêu văn bản khác.",
    "Thẻ **`<a>`** tạo liên kết, thuộc tính **`href`** chứa đường dẫn.",
    "**Đường dẫn tuyệt đối**: chứa đầy đủ giao thức (`http://`) và tên miền, dùng để liên kết ra ngoài website.",
    "**Đường dẫn tương đối**: chỉ vị trí tương đối từ tệp hiện tại, dùng để liên kết trong cùng website (`thong_tin.html`, `bai_tap/bt1.html`, `../index.html`).",
    "**Liên kết trong cùng trang**: đặt thuộc tính **`id`** cho đích đến (duy nhất trong trang), sau đó tạo liên kết **`href=\"#tên_id\"`**.",
    "Để tạo **liên kết cho hình ảnh**, đặt thẻ **`<img>`** vào bên trong thẻ **`<a>`**.",
  ],
};

export default theory;
