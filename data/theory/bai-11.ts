import type { LessonTheory } from "@/lib/types";

// Bài 11. Chèn tệp tin đa phương tiện và khung nội tuyến vào trang web — SGK
// Tin học 12 (ICT, Kết nối tri thức), trang 62–66. Giữ đúng thuật ngữ sách:
// khung nội tuyến (iframe), thuộc tính boolean, mã định danh (id).
//
// Không đưa mục 4 "Thực hành" của SGK vào lí thuyết (giống cách bài 10 chỉ
// lấy mục 1–2, bỏ phần thực hành) — phần thực hành đã có Bước 1–3 nhưng nội
// dung trùng khái niệm target/id ở mục 3 nên gộp minh hoạ vào đó thay vì lặp.

const theory: LessonTheory = {
  minutes: 13,
  intro:
    "Bài 10 đã nối trang này với trang khác. Bài này dạy cách làm trang web **sinh động hơn**: chèn ảnh, âm thanh, video — và một kĩ thuật thú vị là nhúng cả một trang web khác vào ngay bên trong trang mình bằng **khung nội tuyến**.",

  sections: [
    {
      id: "chen-anh",
      emoji: "🖼️",
      heading: "Chèn tệp ảnh vào trang web",
      blocks: [
        {
          kind: "text",
          text: "Để hiển thị được trên web, tệp ảnh cần có định dạng được trình duyệt hỗ trợ. Định dạng phổ biến nhất là **PNG, JPEG, GIF**; một số định dạng mới hơn cho web là **JPEG-XR, WebP**. Ảnh định dạng khác như **TIFF, EPS,…** cần được chuyển đổi sang định dạng được hỗ trợ ở trên trước khi chèn.",
        },
        {
          kind: "update",
          title: "JPEG-XR giờ hầu như không dùng được",
          text: "SGK liệt kê JPEG-XR là định dạng mới cho web, nhưng thực tế **các trình duyệt phổ biến hiện nay không đọc được JPEG-XR** — Chrome đánh dấu sẽ **không bao giờ hỗ trợ** (WONTFIX), Firefox cũng không hỗ trợ. Định dạng thật sự dùng được rộng rãi cho web là **WebP** (SGK có nhắc) và **AVIF** (mới hơn, SGK chưa nhắc tới).",
        },
        {
          kind: "text",
          text: "**Thẻ `<img>`** là thẻ đơn, dùng để thêm ảnh vào trang web. Khi gặp thẻ `<img>`, trình duyệt hiểu là *\"cần đặt một hình ảnh vào đây\"* — ảnh được chèn ngay trong dòng văn bản mà **không tạo ngắt dòng**.",
        },
        {
          kind: "code",
          caption: "Hình 11.1 SGK — a) đoạn mã",
          code: `<p> Tôi muốn uống một cốc
<img src="images/coffee.png"> ngay bây giờ.</p>`,
        },
        {
          kind: "code",
          caption:
            "Hình 11.1 SGK — b) kết quả hiển thị trên trình duyệt (ảnh coffee.png đổi bằng hình vẽ tay để chạy được trong khung này)",
          preview: true,
          code: `<p>Tôi muốn uống một cốc
<img width="46" height="46"
     alt="cốc cà phê"
     src="data:image/svg+xml;utf8,
     <svg xmlns='http://www.w3.org/2000/svg' width='46' height='46'>
     <circle cx='23' cy='26' r='14' fill='%238F5D02'/>
     <rect x='9' y='10' width='28' height='6' rx='3' fill='%234C5D6B'/></svg>">
ngay bây giờ.</p>`,
        },
        {
          kind: "text",
          text: "Với thẻ `<img>`, trình duyệt phải **tải ảnh lên trước khi hiển thị**. Vì vậy, khi chèn ảnh, cần quan tâm tới **dung lượng tệp ảnh** — dung lượng lớn sẽ làm việc hiển thị ảnh gặp khó khăn nếu tốc độ mạng chậm.",
        },
        {
          kind: "text",
          text: "Trong các thuộc tính của thẻ `<img>`, thuộc tính **`src`** là bắt buộc, dùng để chỉ đường dẫn tới tệp ảnh. Ngoài ra, thuộc tính quan trọng khác là **`alt`** — nên được sử dụng kèm để cung cấp **văn bản thay thế** khi việc hiển thị ảnh bị lỗi. Văn bản thay thế cần giúp người đọc hình dung ra nội dung bức ảnh.",
        },
        {
          kind: "code",
          caption: "Cú pháp chèn ảnh",
          code: `<img src="đường dẫn tới tệp tin ảnh" alt="đoạn văn bản thay thế">`,
        },
        {
          kind: "code",
          caption:
            "Hình 11.2 SGK — ảnh pdffiles.png dùng làm liên kết tới biểu mẫu. Thử ngay: khung dưới KHÔNG có sẵn tệp ảnh này (giống Hình 11.2b của sách) nên trình duyệt tự hiện đúng hành vi lỗi — icon ảnh vỡ kèm chữ alt",
          preview: true,
          code: `<p> Tải biểu mẫu xin nhập học:
<a href="tai_lieu/bieu_mau.pdf">
    <img src="images/pdffiles.png" alt="Biểu mẫu xin nhập học ">
</a>
</p>`,
        },
        {
          kind: "example",
          title: "Vì sao cần alt?",
          text: "Đoạn mã trên chạy trong khung ở trên. Nếu tệp ảnh `pdffiles.png` **có sẵn** trong thư mục `images`, trình duyệt hiện đúng icon PDF (Hình 11.2a của sách). Nếu **không có** — như khung xem trước ở trên — trình duyệt hiện icon ảnh vỡ kèm ngay dòng chữ `alt`, nhờ vậy người đọc vẫn biết đây là liên kết \"Biểu mẫu xin nhập học\".",
        },
        {
          kind: "text",
          text: "Để thiết lập kích thước cho ảnh, ta dùng các thuộc tính **`width`, `height`** cho thẻ `<img>` — cho biết kích thước hiển thị ảnh **tính bằng pixel**. Khi dùng các thuộc tính này, trình duyệt sẽ **giữ đúng không gian trong bố cục** trang khi ảnh đang tải, giúp hiển thị trang nhanh hơn.",
        },
        {
          kind: "text",
          text: "**Nếu chỉ sử dụng một trong hai thuộc tính** (`width` hoặc `height`), chiều còn lại sẽ được **tính toán tự động để hiển thị theo đúng tỉ lệ của ảnh gốc**. Nhưng nếu khai báo **cả hai** thuộc tính với tỉ lệ **không đúng** với ảnh gốc, ảnh sẽ bị **méo**.",
        },
        {
          kind: "figure",
          diagram: "kich-thuoc-anh",
          caption: "Hình 11.3 SGK — cùng một ảnh trái tim với ba cách khai báo width/height khác nhau",
        },
        {
          kind: "text",
          text: "*Lưu ý: khi chèn ảnh, nên chèn bằng **đường dẫn tương đối** để tránh trường hợp xảy ra lỗi khi ảnh trên mạng bị thay đổi.*",
        },
        {
          kind: "note",
          text: "Cách chèn ảnh vào trang web là sử dụng thẻ **`<img>`**.",
        },
        {
          kind: "check",
          q: "Nhận định nào sau đây đúng về thẻ <img>?",
          options: [
            "Chỉ chèn được ảnh có định dạng .jpg vào trang web",
            "Là thẻ đơn, bắt buộc có thuộc tính src chỉ đường dẫn ảnh",
            "Bắt buộc phải có cả hai thuộc tính width và height",
            "Ảnh luôn hiển thị đúng dù đường dẫn trong src bị sai",
          ],
          answer: 1,
          explain:
            "Thẻ `<img>` là thẻ đơn, hỗ trợ nhiều định dạng phổ biến (PNG, JPEG, GIF,…) chứ không riêng .jpg. Thuộc tính **`src`** bắt buộc để chỉ đường dẫn tới tệp ảnh; `alt`, `width`, `height` chỉ là các thuộc tính nên dùng thêm, không bắt buộc. Nếu `src` sai đường dẫn, ảnh sẽ lỗi và trình duyệt hiện văn bản `alt` thay thế.",
        },
        {
          kind: "check",
          q: "Nếu thẻ <img> chỉ khai báo thuộc tính width mà không khai báo height thì điều gì xảy ra?",
          options: [
            "Ảnh không hiển thị được",
            "Chiều cao giữ nguyên đúng bằng kích thước gốc, bất kể chiều rộng",
            "Chiều cao được tính toán tự động theo đúng tỉ lệ của ảnh gốc",
            "Trình duyệt báo lỗi cú pháp",
          ],
          answer: 2,
          explain:
            "SGK nêu rõ: nếu chỉ sử dụng một trong hai thuộc tính (`width` hoặc `height`), **chiều còn lại sẽ được tính toán để hiển thị theo tỉ lệ của ảnh gốc** — ảnh không bị méo. Chỉ khi khai báo **cả hai** thuộc tính sai tỉ lệ, ảnh mới bị méo.",
        },
      ],
    },

    {
      id: "chen-am-thanh-video",
      emoji: "🎬",
      heading: "Chèn âm thanh và video vào trang web",
      blocks: [
        {
          kind: "text",
          text: "Để chèn video hoặc âm thanh vào trang web, ta sử dụng thẻ **`<video>`** và **`<audio>`**. Hai thẻ này được hỗ trợ trong hầu hết các trình duyệt, tuy nhiên **định dạng của tệp tin đa phương tiện** có thể sử dụng vẫn phụ thuộc vào trình duyệt.",
        },
        {
          kind: "list",
          items: [
            "**Hai định dạng tệp video phổ biến nhất**: `mp4` và `webm`. **`mp4` chạy được trực tiếp trên hầu hết các trình duyệt.**",
            "**Ba định dạng tệp âm thanh phổ biến** được hỗ trợ bởi hầu hết trình duyệt hiện tại là **`mp3`, `wav` và `ogg`**.",
          ],
        },
        {
          kind: "code",
          caption: "Cú pháp chung để chèn video hoặc âm thanh",
          code: `<video[audio] thuộc_tính="giá_trị_thuộc_tính"></video[audio]>`,
        },
        {
          kind: "text",
          text: "**Tương tự thẻ `<img>`**, thẻ `<video>` cũng có các thuộc tính cơ bản như **`src`, `width`, `height`**. Ngoài ra còn có các thuộc tính khác:",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "🎛️",
              title: "controls",
              text: "Thuộc tính **boolean** (không cần giá trị), để trình duyệt hiển thị các thành phần điều khiển như nút phát/tạm dừng, điều khiển âm lượng,… Nên dùng để người xem có thể điều khiển quá trình phát.",
            },
            {
              emoji: "▶️",
              title: "autoplay",
              text: "Thuộc tính **boolean**, cho phép trình duyệt chạy video ngay khi hiển thị. Một số trình duyệt như **Google Chrome** thường **không** cho video chạy ngay, hoặc chỉ chạy ngay nếu có thêm thuộc tính **`muted`** — không phát tiếng.",
            },
            {
              emoji: "🖼️",
              title: "poster",
              text: "Cung cấp đường dẫn tới tệp ảnh, dùng để hiển thị khi **chưa chạy video**. Thẻ `<audio>` **không có** thuộc tính `width`, `height` và `poster`.",
            },
          ],
        },
        {
          kind: "text",
          text: "Khi có **nhiều video hoặc nhiều tệp âm thanh** tương ứng với các định dạng khác nhau, ta có thể dùng thẻ **`<source>`** lồng trong cặp thẻ `<video>` hay `<audio>` để chỉ định các định dạng khác nhau. Trình duyệt sẽ **tự động tìm và hiển thị** tệp tin với định dạng mà nó hỗ trợ.",
        },
        {
          kind: "code",
          caption: "Ví dụ trong SGK — cung cấp 2 định dạng để trình duyệt tự chọn",
          code: `<video width="320" height="240" controls>
<source src="movie.mp4" type="video/mp4">
<source src="movie.ogg" type="video/ogg">
Trình duyệt của bạn không hỗ trợ HTML video
</video>`,
        },
        {
          kind: "note",
          text: "Thẻ **`<video>`** và thẻ **`<audio>`** dùng để chèn các tệp tin video và âm thanh vào trang web. Để các trình duyệt thể hiện đúng, các tệp tin phải có định dạng được hỗ trợ bởi trình duyệt.",
        },
        {
          kind: "check",
          q: "Thuộc tính src có vai trò gì đối với thẻ <audio>?",
          options: [
            "Chỉ đường dẫn tới tệp âm thanh cần phát",
            "Bật chế độ tự động phát khi tải trang",
            "Hiện thanh điều khiển phát/tạm dừng",
            "Đặt hình ảnh hiển thị trước khi phát",
          ],
          answer: 0,
          explain:
            "**`src`** dùng để chỉ đường dẫn tới tệp tin cần chèn — với `<audio>` là tệp âm thanh. Phương án B là thuộc tính `autoplay`, C là `controls`; D là `poster` — mà thẻ `<audio>` **không có** thuộc tính `poster`.",
        },
        {
          kind: "check",
          q: "Vì sao thuộc tính autoplay có thể không làm video tự phát ngay trên một số trình duyệt như Google Chrome?",
          options: [
            "Vì thẻ video vốn không hỗ trợ thuộc tính autoplay",
            "Vì Chrome thường chặn tự phát có tiếng, phải thêm muted",
            "Vì phải có thuộc tính controls thì autoplay mới hoạt động",
            "Vì autoplay chỉ hoạt động với thẻ audio, không dùng cho video",
          ],
          answer: 1,
          explain:
            "SGK nêu: một số trình duyệt như Google Chrome **thường không cho video chạy ngay** khi hiển thị, hoặc **có thể chạy ngay nếu có thêm thuộc tính `muted`** (không phát tiếng). Đây là hành vi riêng của trình duyệt, không phải do `<video>` thiếu hỗ trợ.",
        },
      ],
    },

    {
      id: "khung-noi-tuyen",
      emoji: "🪟",
      heading: "Tạo khung nội tuyến trong trang web",
      blocks: [
        {
          kind: "text",
          text: "**Khung nội tuyến** là một khung nhìn chứa **tài nguyên web khác** trong trang web hiện tại. Để tạo khung nội tuyến, ta sử dụng thẻ **`<iframe>`** (viết tắt của *inline frame* – khung nội tuyến).",
        },
        {
          kind: "example",
          title: "Dùng để làm gì trong thực tế?",
          text: "Khi cần chèn nội dung từ **YouTube** hoặc bản đồ từ **Google Maps** vào trang web của mình, các nền tảng đều cung cấp sẵn một đoạn mã sử dụng `iframe` để ta sao chép và dán vào trang web. `iframe` cũng là **công cụ tiêu chuẩn** để chèn các nội dung quảng cáo.",
        },
        {
          kind: "text",
          text: "Các thuộc tính thường dùng của thẻ `<iframe>`:",
        },
        {
          kind: "list",
          items: [
            "**`src`**: đường dẫn tới nội dung hiển thị trong khung nội tuyến.",
            "**`width`, `height`**: chiều rộng và chiều cao của khung nội tuyến.",
          ],
        },
        {
          kind: "code",
          caption: "Ví dụ trong SGK — tệp iframe.html chèn khung 600×400 hiển thị nội dung của CLB.html",
          code: `<iframe src="CLB.html" width="600" height="400"></iframe>`,
        },
        {
          kind: "text",
          text: "*Lưu ý: các phần tử `iframe` thường dùng kết hợp với thẻ `<a>` để tạo liên kết và hiển thị nội dung bằng cách thêm thuộc tính **`target`** cho thẻ `<a>` để chỉ định nơi mở tài liệu được liên kết.*",
        },
        {
          kind: "figure",
          diagram: "iframe-lien-ket",
          caption: "Hình 11.4–11.5 SGK — bấm liên kết có target trùng id của iframe để đổi nội dung trong khung",
        },
        {
          kind: "steps",
          items: [
            {
              label: "1",
              title: "Tạo tệp trang chính",
              text: "Tạo tệp `index.html` có nội dung *\"Câu lạc bộ ngoại khoá Trường Nguyễn Bình Khiêm\"* đặt trong cặp thẻ `<h2></h2>`.",
            },
            {
              label: "2",
              title: "Tạo khung nội tuyến có id",
              text: "Tạo một phần tử `iframe` để hiển thị nội dung; phần tử `iframe` được **gán mã định danh (`id`)** để có thể đặt liên kết trỏ tới.",
            },
            {
              label: "3",
              title: "Tạo liên kết với target",
              text: "Tạo hai vị trí đặt liên kết tương ứng với hai lựa chọn (câu lạc bộ thể thao / nghệ thuật), đặt liên kết bằng thẻ `<a>` với thuộc tính **`target`** là **mã định danh của khung nhìn** vừa tạo.",
            },
          ],
        },
        {
          kind: "code",
          caption: "Mã của Bước 2 và Bước 3 ghép lại",
          code: `<iframe id="iframe" width="60%" height="700"></iframe>

<a href="the_thao.html" target="iframe">Câu lạc bộ Thể thao</a>
<a href="nghe_thuat.html" target="iframe">Câu lạc bộ Nghệ thuật</a>`,
        },
        {
          kind: "update",
          title: "Gõ đúng như sách mà khung vẫn trống?",
          text: "Trên các trình duyệt hiện nay, thuộc tính **`target`** tìm khung theo thuộc tính **`name`** của `<iframe>`, **không phải theo `id`**. Với đoạn mã của SGK ở trên (khung chỉ có `id`), bấm liên kết sẽ **không nạp vào khung** mà mở ra trang mới. Khi thực hành, em hãy **đặt cả hai** cho chắc: `<iframe id=\"iframe\" name=\"iframe\" …>`. Phần lí thuyết và bài thi vẫn giữ đúng theo sách.",
        },
        {
          kind: "note",
          text: "Thẻ **`<iframe>`** sử dụng để chèn một trang web hoặc một tài nguyên web trong một trang web khác.",
        },
        {
          kind: "check",
          q: "Để liên kết <a> mở nội dung ngay bên trong một khung iframe cụ thể (không mở tab mới), thuộc tính target của thẻ <a> phải được gán giá trị gì?",
          options: [
            "\"_blank\"",
            "Đúng bằng giá trị thuộc tính id của khung iframe đó",
            "Đúng bằng giá trị thuộc tính src của khung iframe đó",
            "\"_self\"",
          ],
          answer: 1,
          explain:
            "Theo SGK, phải gán `target` cho thẻ `<a>` bằng đúng **giá trị `id`** của khung `iframe` cần hiển thị nội dung, thay vì mở tab hay trang mới. *Khi thực hành trên máy, nhớ đặt thêm `name` trùng giá trị đó thì khung mới nhận nội dung — xem hộp Cập nhật 2026 ở trên.*",
        },
        {
          kind: "check",
          q: "Trong ví dụ Nhiệm vụ 3 của SGK, muốn hai liên kết chọn câu lạc bộ hiển thị ở PHÍA TRÊN khung iframe trên trang, ta cần làm gì?",
          options: [
            "Đặt đoạn mã liên kết (Bước 3) TRƯỚC đoạn mã tạo iframe (Bước 2)",
            "Đặt thuộc tính height của iframe nhỏ lại cho vừa màn hình",
            "Thêm thuộc tính target=\"_blank\" cho cả hai liên kết",
            "Không đổi được, vị trí do trình duyệt tự quyết định",
          ],
          answer: 0,
          explain:
            "SGK lưu ý: **thứ tự hiển thị chính là thứ tự các đoạn mã lệnh** trong tệp HTML — để các lựa chọn câu lạc bộ hiển thị phía trên khung nhìn, cần đặt câu lệnh trong Bước 3 (liên kết) **ở trên** câu lệnh trong Bước 2 (iframe).",
        },
      ],
    },
  ],

  summary: [
    "Thẻ **`<img>`** chèn ảnh; **`src`** bắt buộc, **`alt`** nên dùng kèm để hiện văn bản thay thế khi ảnh lỗi.",
    "Set **một trong hai** `width`/`height` thì chiều còn lại tự theo tỉ lệ gốc; set **cả hai sai tỉ lệ** sẽ làm ảnh **méo**.",
    "**`<video>`, `<audio>`** chèn video/âm thanh; các thuộc tính boolean **`controls`, `autoplay`** (kèm `muted` để tự phát), **`poster`** (audio không có).",
    "**`<source>`** lồng trong `<video>`/`<audio>` để cung cấp nhiều định dạng, trình duyệt tự chọn định dạng hỗ trợ.",
    "**`<iframe>`** tạo khung nội tuyến nhúng tài nguyên web khác qua `src`, `width`, `height`.",
    "Kết hợp **`<a target=\"id_của_iframe\">`** để đổi nội dung trong iframe khi bấm liên kết, không mở tab mới.",
  ],
};

export default theory;
