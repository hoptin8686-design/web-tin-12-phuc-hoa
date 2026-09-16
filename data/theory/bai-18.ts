import type { LessonTheory } from "@/lib/types";

// Bài 18. Thực hành tổng hợp thiết kế trang web — SGK Tin học 12 (ICT, Kết
// nối tri thức), trang 102–105. Bài thực hành khép lại Chủ đề 4 (HTML & CSS):
// vận dụng tổng hợp để xây dựng một website nhiều trang, dùng chung một tệp
// CSS. Giữ đúng tên lớp CSS trong SGK: .banner, .slogan, .row, .block_3.

const theory: LessonTheory = {
  minutes: 12,

  intro:
    "Bài này vận dụng tổng hợp HTML và CSS đã học ở Chủ đề 4 để xây dựng một **website nhiều trang** có phong cách trình bày thống nhất — qua dự án thực hành: website giới thiệu các câu lạc bộ ngoại khoá của trường.",

  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "du-an-website-clb",
      emoji: "🏫",
      heading: "Dự án: Website giới thiệu câu lạc bộ ngoại khoá",
      blocks: [
        {
          kind: "text",
          text: "Giả sử website của em có nhiều tệp HTML. Có thể chỉ dùng **một tệp CSS duy nhất** để định dạng cho toàn bộ các trang web hay không?",
        },
        {
          kind: "text",
          text: "Website cần một trang chủ và các trang riêng cho từng nhóm hoặc từng câu lạc bộ, tuỳ theo số lượng và thông tin hoạt động chi tiết. Ở mức đơn giản, có thể thiết kế website với **ba thành viên trang**:",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "🏠",
              title: "Trang chủ",
              text: "Chứa các thông tin chung nhất về các câu lạc bộ và liên kết tới các trang thành viên.",
            },
            {
              emoji: "⚽",
              title: "Trang CLB Thể thao",
              text: "Đăng thông tin chi tiết, lịch hoạt động, thành tích… tuỳ nhu cầu.",
            },
            {
              emoji: "🎨",
              title: "Trang CLB Nghệ thuật",
              text: "Đăng thông tin chi tiết, lịch hoạt động, thành tích… tuỳ nhu cầu.",
            },
          ],
        },
        {
          kind: "text",
          text: "Minh hoạ có thể tuỳ chọn vào các tài nguyên sẵn có — thường là ảnh và video. Ngoài ra, có thể tạo thêm một trang chứa biểu mẫu để các bạn đăng kí tham gia.",
        },
        {
          kind: "note",
          text: "Các trang nên tuân theo **phong cách trình bày chung** bằng cách sử dụng liên kết tới **cùng một tệp CSS**. Để thực hiện ý tưởng này, trước hết cần lên ý tưởng về bố cục của từng phần trong một trang web, rồi dùng CSS để định dạng (kích thước, vị trí, màu sắc, cỡ chữ…) cho mỗi phần.",
        },
        {
          kind: "check",
          q: "Muốn nhiều tệp HTML của cùng một website có phong cách trình bày thống nhất, cách làm được SGK khuyến nghị là gì?",
          options: [
            "Cho các trang cùng liên kết tới một tệp CSS duy nhất",
            "Chép nguyên văn cùng một đoạn style vào từng tệp HTML",
            "Không dùng CSS, chỉ canh chỉnh bằng mắt cho các trang giống nhau",
            "Mỗi trang tự thiết kế một bảng màu và cỡ chữ khác nhau",
          ],
          answer: 0,
          explain:
            "SGK nêu: các trang nên tuân theo phong cách trình bày chung bằng cách sử dụng liên kết tới cùng một tệp CSS — đây cũng chính là mục tiêu của Nhiệm vụ 1.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "nhiem-vu-1-tao-tep-css",
      emoji: "🎨",
      heading: "Nhiệm vụ 1: Tạo tệp CSS",
      blocks: [
        {
          kind: "text",
          text: "Với bố cục website như Hình 18.2, mỗi thành phần (đầu trang, nội dung chính, cuối trang, banner, slogan, ảnh/nội dung) được định nghĩa bằng **một lớp riêng**, hoặc **dùng chung một lớp** nếu cùng định dạng.",
        },
        {
          kind: "figure",
          diagram: "bo-cuc-website-clb",
          caption: "Hình 18.2 SGK — bố cục website: đầu trang (banner + slogan), nội dung chính, cuối trang",
        },
        {
          kind: "text",
          text: "**Phần đầu trang gồm hai phần nhỏ.** Banner: có thể dùng một ảnh làm nền và tiêu đề là tiêu đề trang web, cỡ chữ to, màu sắc nổi bật. Ví dụ, CSS cho banner được thiết lập như sau:",
        },
        {
          kind: "code",
          caption: "Ví dụ SGK — CSS cho banner (ảnh nền không tồn tại trong khung xem trước nên chỉ hiện màu chữ và bố cục)",
          preview: true,
          code: `<style>
.banner {
  background: url("../assets/img/bg-masthead.jpg") no-repeat center center;
  background-size: cover;
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center !important;
  color: darkred !important;
}
</style>
<div class="banner">
  <h2>CLB ngoại khoá trường THPT Nguyễn Bỉnh Khiêm</h2>
</div>`,
        },
        {
          kind: "note",
          text: "Hai thuộc tính `text-align` và `color` được thêm **`!important`** để đảm bảo luôn được áp dụng, không bị mẫu CSS khác (ví dụ định dạng mặc định của trình duyệt cho thẻ `<h2>`) ghi đè — đúng mức ưu tiên cao nhất đã học ở Bài 17.",
        },
        {
          kind: "check",
          q: "Vì sao CSS của banner thêm !important vào text-align và color?",
          options: [
            "Để đảm bảo hai thuộc tính này luôn được áp dụng, không bị mẫu CSS khác ghi đè",
            "Vì cú pháp CSS bắt buộc mọi thuộc tính trong lớp .banner phải có !important",
            "Để trình duyệt tải ảnh nền nhanh hơn, giảm dung lượng tệp CSS",
            "Vì nếu thiếu !important thì trình duyệt sẽ báo lỗi và từ chối hiển thị trang",
          ],
          answer: 0,
          explain:
            "!important có mức ưu tiên cao nhất trong bảy mức ưu tiên CSS (Bài 17), giúp đảm bảo text-align và color của .banner luôn thắng, dù có mẫu CSS khác cùng áp dụng cho phần tử.",
        },
        {
          kind: "text",
          text: "**Slogan:** trong Hình 18.1, slogan gồm **3 ô trên hàng ngang** có định dạng giống nhau, mỗi ô rộng bằng **1/3 độ rộng trang**. Vì các ô giống nhau nên chỉ cần tạo một lớp CSS (đặt tên `block_3`). Tuy nhiên, khi dùng thẻ `<div>`, các ô sẽ tự **xếp theo chiều dọc** (vì div là phần tử khối). Để hiển thị theo phương ngang, cần tạo thêm một lớp `Row` chứa 3 ô.",
        },
        {
          kind: "figure",
          diagram: "bo-cuc-slogan-long-lop",
          caption: "Hình 18.3 SGK — bố cục slogan: ba lớp CSS lồng nhau (.slogan bọc .row, .row bọc ba .block_3)",
        },
        {
          kind: "code",
          caption: "Ví dụ SGK — CSS và HTML cho slogan 3 ô nằm ngang (đã rút gọn), xem khung dưới chạy thật",
          preview: true,
          tall: true,
          code: `<style>
.slogan {
  background-color: rgb(248, 249, 250) !important;
  text-align: center !important;
  padding: 2rem;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.block_3 {
  flex: 0 0 auto;
  width: 33.33333333%;
}
</style>
<div class="slogan">
  <div class="row">
    <div class="block_3">
      <h3>Năng động</h3>
      <p>Hoạt động năng nổ và hiệu quả</p>
    </div>
    <div class="block_3">
      <h3>Đam mê</h3>
      <p>Cháy hết mình trong các cuộc chơi</p>
    </div>
    <div class="block_3">
      <h3>Toả sáng</h3>
      <p>Giành những giải thưởng cao nhất</p>
    </div>
  </div>
</div>`,
        },
        {
          kind: "note",
          text: "Cách trình bày nhiều ô trong cùng một hàng (dùng `display: flex` + `width` tính theo %) được dùng **phổ biến** trong các trang web, tạo sự cân đối và hài hoà khi hiển thị. Cách thiết lập này áp dụng **hoàn toàn tương tự** cho phần nội dung chính (chia hai cột bằng nhau trên mỗi hàng) và phần cuối trang.",
        },
        {
          kind: "check",
          q: "Nếu chỉ dùng thẻ <div> để tạo 3 ô của slogan mà không thêm CSS gì khác, các ô sẽ hiển thị theo phương nào? Vì sao?",
          options: [
            "Theo chiều dọc, vì div là phần tử khối, mặc định chiếm hết chiều ngang nên tự xuống dòng",
            "Theo chiều ngang, vì div luôn tự động xếp cạnh nhau khi có từ 2 phần tử trở lên",
            "Xen kẽ ngang rồi dọc luân phiên, tuỳ theo thứ tự khai báo trong tệp HTML",
            "Chồng lên nhau tại đúng một vị trí, che khuất lẫn nhau hoàn toàn",
          ],
          answer: 0,
          explain:
            "SGK giải thích: div là phần tử khối (block), mặc định chiếm hết chiều ngang khung chứa nên phần tử sau tự xuống dòng — phải thêm lớp .row với display: flex mới xếp được theo hàng ngang.",
        },
        {
          kind: "text",
          text: "Với phần nội dung chính và cuối trang, thực hiện việc phân tích bố cục và thiết lập CSS **hoàn toàn tương tự**. Sau khi hoàn thành, lưu tệp với tên **`style.css`**.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "nhiem-vu-2-tao-tep-html",
      emoji: "🧩",
      heading: "Nhiệm vụ 2: Tạo các tệp HTML",
      blocks: [
        {
          kind: "text",
          text: "Tạo các tệp `index.html`, `thethao.html` và `nghethuat.html` để dựng trang web theo phân tích ở Nhiệm vụ 1. Để dùng được các thiết lập CSS đã tạo, cần tạo các khối bằng thẻ `<div>` với đúng tên lớp CSS đã định nghĩa. Ví dụ, để tạo khối banner cho trang chủ:",
        },
        {
          kind: "code",
          caption: "Ví dụ SGK — khối banner nhận đúng định dạng của lớp .banner nhờ trùng tên class",
          code: `<div class="banner">
  <h2>CLB ngoại khoá trường THPT Nguyễn Bỉnh Khiêm</h2>
</div>`,
        },
        {
          kind: "text",
          text: "Với khối slogan, cần tạo đúng **ba lớp thẻ div lồng nhau** như đã phân tích ở Hình 18.3: `div.slogan` bọc ngoài, bên trong là `div.row`, bên trong `row` là ba `div.block_3` — nội dung hiển thị của từng ô nằm trong khối `div` trong cùng. Thực hiện tương tự cho cả ba tệp.",
        },
        {
          kind: "list",
          items: [
            "Chuẩn bị một số hình ảnh và video các hoạt động tại lớp/trường để sử dụng trong mỗi trang web.",
            "Tạo các liên kết từ trang chủ đến hai trang còn lại.",
            "Đặt liên kết tới các trang khác ở **phần cuối trang** (footer) — để trang nào cũng dễ dàng điều hướng.",
          ],
        },
        {
          kind: "note",
          text: "Muốn một khối HTML nhận đúng định dạng đã khai báo trong CSS, chỉ cần đặt thuộc tính `class` của thẻ `<div>` **trùng tên** với lớp CSS tương ứng (ví dụ `.banner`, `.slogan`, `.row`, `.block_3`) — không cần sửa gì thêm trong components hay lặp lại CSS.",
        },
        {
          kind: "check",
          q: "Luyện tập của Bài 18 yêu cầu bổ sung trang dang_ki.html, và đặt liên kết tới trang này ở đâu trên các trang?",
          options: [
            "Ở phần cuối trang (footer) của tất cả các trang trong website",
            "Chỉ ở phần đầu trang (banner) của riêng trang chủ, các trang khác không cần",
            "Không cần đặt liên kết, học sinh tự gõ địa chỉ URL để truy cập",
            "Chỉ đặt bên trong tệp CSS, không chèn liên kết trực tiếp vào HTML",
          ],
          answer: 0,
          explain:
            "SGK yêu cầu: tạo trang dang_ki.html chứa biểu mẫu đăng kí câu lạc bộ, và bổ sung liên kết tới trang đăng kí trong phần cuối trang của TẤT CẢ các trang.",
        },
      ],
    },
  ],

  summary: [
    "Nhiều tệp HTML của cùng một website nên **liên kết tới cùng một tệp CSS** (`style.css`) để có phong cách trình bày thống nhất.",
    "Bố cục website gồm ba phần: **đầu trang** (banner + slogan), **nội dung chính**, **cuối trang** — mỗi phần một lớp CSS riêng, hoặc dùng chung nếu cùng định dạng.",
    "`div` là phần tử khối nên mặc định xếp dọc. Muốn nhiều ô nằm ngang: tạo lớp bọc ngoài với **`display: flex; flex-wrap: wrap;`**, mỗi ô có **`width` tính theo %** (ví dụ `33.33333333%` cho 3 ô bằng nhau).",
    "`!important` dùng để đảm bảo thuộc tính CSS luôn được áp dụng, không bị mẫu khác ghi đè — mức ưu tiên cao nhất trong 7 mức đã học ở Bài 17.",
    "Một khối `<div>` nhận đúng định dạng CSS khi thuộc tính `class` **trùng tên** với lớp CSS đã định nghĩa (`.banner`, `.slogan`, `.row`, `.block_3`).",
  ],
};

export default theory;
