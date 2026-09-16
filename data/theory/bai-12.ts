import type { LessonTheory } from "@/lib/types";

// Bài 12. Tạo biểu mẫu — SGK Tin học 12 (ICT, Kết nối tri thức), trang 67–70.
// Giữ đúng thuật ngữ sách: biểu mẫu web, phần tử form, nhãn (label), mã định
// danh (id), vùng nhập dữ liệu, danh sách thả xuống.
//
// Đây là bài hợp nhất với khung xem trước: mọi phần tử biểu mẫu đều chạy được
// thật trong khung (gõ chữ, tích ô, chọn danh sách) mà không cần JavaScript,
// nên dùng nhiều khối preview thay vì tả bằng lời.
//
// Hai chỗ SGK in thiếu dấu "/" ở thẻ đóng: dòng cú pháp label ghi <label> và
// dòng cú pháp textarea ghi <textarea> ở cuối. Chính ví dụ Hình 12.1 của sách
// lại viết đúng </label>, </select>. Ở đây viết đúng chuẩn và có nhắc một câu
// để học sinh đối chiếu sách không hoang mang.

const theory: LessonTheory = {
  minutes: 15,

  intro:
    "Từ Bài 7 đến Bài 11, trang web của em mới chỉ **đưa thông tin ra** cho người đọc xem. Bài này học chiều ngược lại: **thu thập thông tin từ người dùng** — ô đăng nhập, phiếu đăng kí, giỏ hàng… tất cả đều là **biểu mẫu web**.",

  sections: [
    {
      id: "bieu-mau-web",
      emoji: "📋",
      heading: "Biểu mẫu web là gì",
      blocks: [
        {
          kind: "text",
          text: "**Biểu mẫu web** hay **phần tử `form`** của HTML là một công cụ dùng để **thu thập dữ liệu**. Dữ liệu được người dùng nhập vào form và **xử lí tại chỗ hoặc gửi về máy chủ**. Ta thường xuyên gặp các biểu mẫu (form) khi **đăng kí tài khoản, mua hàng, tìm kiếm thông tin,…**",
        },
        {
          kind: "text",
          text: "Biểu mẫu web đầy đủ có **hai thành phần**:",
        },
        {
          kind: "compare",
          left: {
            title: "Phần nhìn thấy",
            emoji: "🖥️",
            items: [
              "Là **biểu mẫu hiển thị trên web**, được tạo thành bởi các đoạn mã HTML.",
              "Dùng để người dùng **nhập và gửi thông tin**.",
              "**Đây là phần Bài 12 học.**",
            ],
          },
          right: {
            title: "Phần xử lí",
            emoji: "⚙️",
            items: [
              "Là các **ứng dụng hoặc script xử lí dữ liệu**, thường nằm trên máy chủ.",
              "**Không thuộc phạm vi ngôn ngữ HTML** nên SGK không đề cập.",
              "Nhờ nó, dữ liệu em gõ mới được lưu lại và dùng tiếp.",
            ],
          },
        },
        {
          kind: "text",
          text: "Biểu mẫu web được tạo bởi **thẻ `<form>`**, có cấu trúc chung như sau:",
        },
        {
          kind: "code",
          caption: "Cấu trúc chung của biểu mẫu",
          code: `<form>
các phần tử của biểu mẫu
</form>`,
        },
        {
          kind: "text",
          text: "Các phần tử của biểu mẫu thường dùng là: **`input`, `label`, `select`, `textarea`**; ngoài ra còn có các phần tử khác như **`fieldset`, `legend`, `datalist`,…**",
        },
        {
          kind: "note",
          text: "Người dùng web cung cấp thông tin cho trang web thông qua **biểu mẫu**. Biểu mẫu được định nghĩa bởi thẻ chứa nhiều loại phần tử tuỳ theo yêu cầu về thông tin cần thu thập, trong đó loại phần tử **quan trọng nhất là `input`**.",
        },
      ],
    },

    {
      id: "label-va-input",
      emoji: "🏷️",
      heading: "Nhãn và vùng nhập: label với input",
      blocks: [
        {
          kind: "text",
          text: "Phần tử **`label`** định nghĩa **nhãn** — dòng chữ cho người dùng biết ô bên cạnh dùng để nhập cái gì. Cấu trúc:",
        },
        {
          kind: "code",
          caption: "Cú pháp thẻ label",
          code: `<label for="mã_định_danh_của_input_tương_ứng">Tên_nhãn</label>`,
        },
        {
          kind: "text",
          text: "*Đối chiếu với sách: dòng cú pháp này trong SGK in thiếu dấu `/` ở thẻ đóng. Chính ví dụ Hình 12.1 của sách viết đúng là `</label>` — em cứ viết có dấu `/` như trên.*",
        },
        {
          kind: "text",
          text: "Về mặt hiển thị thì nhãn **không có gì đặc biệt**, tuy nhiên khi **nháy chuột vào Tên_nhãn**, con trỏ chuột sẽ **được đưa vào vùng của phần tử `input`** được xác định bởi thuộc tính **`for`** tương ứng.",
        },
        {
          kind: "figure",
          diagram: "label-for-id",
          caption: "for của label phải trùng id của input thì nháy vào nhãn mới nhảy được vào ô nhập",
        },
        {
          kind: "code",
          caption:
            "Thử ngay: nháy chuột vào chữ “Tên món ăn” trong khung bên — con trỏ tự nhảy vào ô nhập, dù em không bấm trúng ô",
          preview: true,
          code: `<label for="monan">Tên món ăn</label>
<input id="monan" type="text">`,
        },
        {
          kind: "text",
          text: "Phần tử **`input`** xác định **vùng nhập dữ liệu**. `input` xác định bởi **thẻ đơn, không cần thẻ kết thúc**. Cấu trúc:",
        },
        {
          kind: "code",
          caption: "Cú pháp thẻ input",
          code: `<input id="mã_định_danh" type="loại_input" name="tên_input">`,
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "🔖",
              title: "id — mã định danh",
              text: "Dùng để **thẻ `label` trỏ tới** qua thuộc tính `for`. Giống như đặt tên riêng cho ô nhập để gọi đúng nó.",
            },
            {
              emoji: "📮",
              title: "name — tên input",
              text: "Được sử dụng cho `input` khi **thực hiện xử lí**: `tên_input` dùng để **tham chiếu tới dữ liệu đã nhập** khi tính toán hay gửi tới máy chủ.",
            },
            {
              emoji: "🎛️",
              title: "type — loại dữ liệu",
              text: "Xác định **loại dữ liệu mà phần tử `input` chứa** — chữ, mật khẩu, ô tích, nút bấm… Xem Bảng 12.1 ở mục sau.",
            },
          ],
        },
        {
          kind: "note",
          text: "*Lưu ý:* Phần tử **`input` chỉ dùng để nhập dữ liệu**, muốn có thông tin về nội dung nhập **phải tạo kèm `label`**.",
        },
        {
          kind: "check",
          q: "Thuộc tính for của thẻ label phải được gán bằng giá trị nào?",
          options: [
            "Tên hiển thị của nhãn trên trang web",
            "Giá trị thuộc tính id của thẻ input tương ứng",
            "Giá trị thuộc tính type của thẻ input đó",
            "Địa chỉ trang web sẽ nhận dữ liệu gửi đi",
          ],
          answer: 1,
          explain:
            "`for` của `label` phải trùng **`id`** của `input` tương ứng — đó là sợi dây nối nhãn với ô nhập. Nhờ vậy khi nháy chuột vào nhãn, con trỏ được đưa thẳng vào vùng nhập. Đừng nhầm với `name`: `name` dùng khi **xử lí và gửi dữ liệu**, còn `for` bắt cặp với `id`.",
        },
      ],
    },

    {
      id: "cac-loai-input",
      emoji: "🎚️",
      heading: "Các loại dữ liệu (type) thông dụng",
      blocks: [
        {
          kind: "text",
          text: "Thuộc tính **`type`** quyết định `input` hiện ra thành cái gì. Bảng 12.1 của SGK nêu **bảy loại thông dụng**:",
        },
        {
          kind: "cards",
          tone: "coral",
          items: [
            {
              emoji: "🔤",
              title: "text",
              text: "`type=\"text\"` — tạo ra **trường nhập văn bản**.",
            },
            {
              emoji: "🔒",
              title: "password",
              text: "`type=\"password\"` — tạo ra **trường nhập mật khẩu**, dùng để nhập văn bản nhưng **bị che thông tin**.",
            },
            {
              emoji: "🔘",
              title: "radio",
              text: "`type=\"radio\"` kèm `value=\"Nam\"` — tạo ra ô **chọn 1 giá trị duy nhất** trong nhóm các ô **cùng tên (`name`)**.",
            },
            {
              emoji: "☑️",
              title: "checkbox",
              text: "`type=\"checkbox\"` kèm `value=\"Toán\"` — tạo ra ô lựa chọn **giá trị có hoặc không**. Mỗi ô `radio` và `checkbox` **cần thêm thuộc tính `value`** để ghi nhận giá trị.",
            },
            {
              emoji: "🔲",
              title: "button",
              text: "`type=\"button\"` — tạo **một nút bấm**. Cần thêm thuộc tính `value=\"tên hiện trên nút\"`.",
            },
            {
              emoji: "📎",
              title: "file",
              text: "`type=\"file\"` — tạo ra nút để **chọn một tệp tin và tải lên máy chủ**.",
            },
            {
              emoji: "📤",
              title: "submit",
              text: "`type=\"submit\"` — tạo nút **gửi thông tin đến máy chủ**; trình duyệt sẽ gọi tới đường dẫn chỉ định tại thuộc tính **`action`** của thẻ `<form>`. Cần thêm `value` như `button`.",
            },
          ],
        },
        {
          kind: "code",
          caption:
            "Thử ngay cả bảy loại: gõ thử vào hai ô đầu, tích thử ô tròn và ô vuông để thấy chúng hoạt động khác nhau",
          preview: true,
          tall: true,
          code: `<label for="ten">Họ và tên</label>
<input id="ten" type="text" name="hoten"><br>

<label for="mk">Mật khẩu</label>
<input id="mk" type="password" name="matkhau"><br><br>

Giới tính:
<input type="radio" name="gt" value="Nam"> Nam
<input type="radio" name="gt" value="Nữ"> Nữ <br>

Môn thi:
<input type="checkbox" name="mon" value="Toán"> Toán
<input type="checkbox" name="mon" value="Văn"> Văn <br><br>

<input type="file">
<input type="button" value="Nút">
<input type="submit" value="Gửi thông tin">`,
        },
        {
          kind: "figure",
          diagram: "radio-checkbox-select",
          caption: "Câu hỏi củng cố số 1 của SGK: radio, checkbox và select khác nhau chỗ nào",
        },
        {
          kind: "example",
          title: "Vì sao hai ô radio phải cùng name?",
          text: "Trong khung thử ở trên, hai ô **Nam / Nữ** cùng `name=\"gt\"` nên **chọn ô này thì ô kia tự bỏ** — đúng nghĩa \"chọn một giá trị duy nhất\". Còn hai ô **Toán / Văn** là `checkbox`, mỗi ô là một câu hỏi riêng **có hoặc không**, nên **tích cả hai cũng được**. Nếu em đặt hai ô radio khác `name` nhau, chúng sẽ **không loại trừ nhau nữa** — tích được cả hai, sai ý đồ.",
        },
        {
          kind: "check",
          q: "Muốn người dùng chọn được nhiều môn học cùng lúc (Toán, Văn, Ngoại ngữ) thì dùng loại input nào?",
          options: [
            "type=\"radio\" và đặt cùng một name",
            "type=\"checkbox\" cho mỗi môn học",
            "type=\"password\" để che bớt thông tin",
            "type=\"submit\" rồi bấm nhiều lần liên tiếp",
          ],
          answer: 1,
          explain:
            "**`checkbox`** tạo ô lựa chọn **giá trị có hoặc không**, mỗi ô độc lập nên tích được nhiều môn cùng lúc. `radio` cùng `name` thì ngược lại — **chỉ chọn được một**, chọn ô này ô kia tự bỏ, nên không dùng cho trường hợp nhiều lựa chọn.",
        },
        {
          kind: "check",
          q: "Ô radio và ô checkbox bắt buộc phải thêm thuộc tính nào để ghi nhận giá trị?",
          options: ["value", "for", "rows", "action"],
          answer: 0,
          explain:
            "SGK ghi rõ trong Bảng 12.1: mỗi ô `radio` và ô `checkbox` **cần thêm thuộc tính `value`** để ghi nhận giá trị — nếu không, máy chủ biết ô được tích nhưng không biết nó mang giá trị gì. `for` là của `label`, `rows` là của `textarea`, `action` là của `form`.",
        },
      ],
    },

    {
      id: "select-textarea-fieldset",
      emoji: "🗂️",
      heading: "Danh sách chọn, vùng nhập nhiều dòng và nhóm phần tử",
      blocks: [
        {
          kind: "text",
          text: "Phần tử **`select`** có tác dụng cho phép người dùng **chọn một trong các lựa chọn trong danh sách thả xuống**. Phần tử `select` chứa nhiều thẻ **`option`**, mỗi cặp định nghĩa một lựa chọn trong danh sách.",
        },
        {
          kind: "code",
          caption: "Cú pháp phần tử select",
          code: `<select id="mã_định_danh" name="tên_select">
   <option value="giá_trị">giá_trị_lựa_chọn</option>
   …
</select>`,
        },
        {
          kind: "code",
          caption: "Hình 12.1 SGK — thử bấm vào danh sách trong khung bên để thả xuống chọn lớp",
          preview: true,
          code: `<label for="class">Lớp:</label>
<select id="class" name="class">
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
</select>`,
        },
        {
          kind: "text",
          text: "Phần tử **`textarea`** xác định một **vùng nhập văn bản có nhiều dòng và cột**. Cấu trúc:",
        },
        {
          kind: "code",
          caption: "Cú pháp phần tử textarea",
          code: `<textarea id="mã_định_danh" name="tên_textarea" rows="số_dòng" cols="số_cột">Nội_dung</textarea>`,
        },
        {
          kind: "note",
          text: "*Lưu ý:* Phần **`Nội_dung`** được **hiển thị sẵn trong vùng nhập**; nếu không để `Nội_dung` trong thẻ thì vùng nhập văn bản là **vùng trắng**.",
        },
        {
          kind: "code",
          caption:
            "Thử ngay: khung dưới có hai vùng nhập — vùng trái có sẵn chữ, vùng phải để trắng. Em gõ thử vào cả hai và kéo góc dưới bên phải để đổi kích thước",
          preview: true,
          code: `<textarea rows="3" cols="22">Món ăn rất ngon!</textarea>
<textarea rows="3" cols="22"></textarea>`,
        },
        {
          kind: "text",
          text: "Phần tử **`fieldset`** được dùng để **nhóm các phần tử có liên quan** trong biểu mẫu bằng cách **vẽ một hình chữ nhật bao quanh** các phần tử đặt trong cặp thẻ `<fieldset>…</fieldset>`. Ta có thể **thêm tên cho nhóm** bằng cách đặt phần tử **`legend`** trong phần tử `fieldset` tương ứng.",
        },
        {
          kind: "code",
          caption: "Thử ngay: khung viền và dòng chữ “Thông tin thí sinh” nằm trên viền chính là fieldset và legend",
          preview: true,
          code: `<fieldset>
  <legend>Thông tin thí sinh</legend>
  <label for="ht">Họ và tên</label>
  <input id="ht" type="text"><br>
  <label for="ns">Ngày sinh</label>
  <input id="ns" type="date">
</fieldset>`,
        },
        {
          kind: "check",
          q: "Phần nội dung viết giữa cặp thẻ textarea có tác dụng gì?",
          options: [
            "Đặt tên nhóm hiển thị ngay trên đường viền",
            "Hiển thị sẵn trong vùng nhập văn bản đó",
            "Quy định số dòng và số cột của vùng nhập",
            "Gán nhãn cho vùng nhập giống thẻ label",
          ],
          answer: 1,
          explain:
            "SGK lưu ý: phần `Nội_dung` **được hiển thị trong vùng nhập**; nếu không để `Nội_dung` trong thẻ thì vùng nhập là **vùng trắng**. Số dòng và số cột do `rows` và `cols` quy định; đặt tên nhóm trên đường viền là việc của `legend`.",
        },
        {
          kind: "check",
          q: "Muốn vẽ một khung bao quanh nhóm phần tử liên quan trong biểu mẫu, ta dùng cặp thẻ nào?",
          options: ["<select> và <option>", "<fieldset> và <legend>", "<form> và <label>", "<textarea> và <input>"],
          answer: 1,
          explain:
            "**`fieldset`** vẽ hình chữ nhật bao quanh các phần tử đặt trong cặp thẻ `<fieldset>…</fieldset>`, còn **`legend`** đặt bên trong `fieldset` để **thêm tên cho nhóm** — tên này hiện ngay trên đường viền.",
        },
      ],
    },

    {
      id: "thuc-hanh-bieu-mau",
      emoji: "🧑‍🍳",
      heading: "Thực hành: dựng một biểu mẫu hoàn chỉnh",
      blocks: [
        {
          kind: "text",
          text: "**Nhiệm vụ 1 của SGK:** tạo biểu mẫu để nhập thông tin các món ăn (Hình 12.2). Làm theo ba bước:",
        },
        {
          kind: "steps",
          items: [
            {
              label: "1",
              title: "Tạo tiêu đề cho biểu mẫu",
              text: "Dùng thẻ heading: `<h2>Thông tin món ăn</h2>`.",
            },
            {
              label: "2",
              title: "Tạo biểu mẫu",
              text: "Tạo một biểu mẫu bằng cặp thẻ `<form></form>`.",
            },
            {
              label: "3",
              title: "Tạo ba cặp label và input",
              text: "Trong cặp thẻ `<form>`, lần lượt tạo ba cặp `label` và `input`. Mỗi thẻ `<input>`, ngoài `type` để xác định kiểu dữ liệu, **cần thiết lập mã định danh bằng `id`** để liên kết với thẻ `<label>` tương ứng. Muốn mỗi `label` xuống dòng mới thì **thêm thẻ `<br>` vào trước thẻ `<label>`** tương ứng.",
            },
          ],
        },
        {
          kind: "code",
          caption: "Hình 12.2 SGK — biểu mẫu Thông tin món ăn. Thử gõ vào cả ba ô trong khung bên",
          preview: true,
          code: `<h2>Thông tin món ăn</h2>
<form>
  <label for="monan">Tên món ăn</label>
  <input id="monan" type="text">
  <br><label for="gia">Đơn giá</label>
  <input id="gia" type="number">
  <br><label for="sl">Số lượng</label>
  <input id="sl" type="number">
</form>`,
        },
        {
          kind: "text",
          text: "**Nhiệm vụ 2 của SGK:** tạo biểu mẫu đăng kí môn thi tốt nghiệp (Hình 12.3). **Bước 1** là xác định thông tin cần cung cấp và chọn đúng loại `input` cho từng thứ:",
        },
        {
          kind: "list",
          items: [
            "**Họ và tên**: `type=\"text\"`",
            "**Số căn cước công dân**: `type=\"number\"`",
            "**Ngày sinh**: `type=\"date\"`",
            "**Giới tính**: chọn một trong hai giá trị → `type=\"radio\"` (hoặc phần tử `select`)",
            "**Các môn Toán, Văn, Ngoại ngữ**: giá trị có hoặc không → `type=\"checkbox\"`",
            "**Tổ hợp môn Khoa học tự nhiên hoặc Khoa học xã hội**: chọn một trong hai → `type=\"radio\"` (hoặc phần tử `select`)",
            "**Nút gửi thông tin**: `type=\"submit\" value=\"Gửi thông tin\"`",
          ],
        },
        {
          kind: "text",
          text: "**Bước 2:** lần lượt tạo các phần tử đã phân tích ở trên theo cấu trúc đã học. **Bước 3:** để biểu mẫu dễ nhìn, bổ sung thêm **tiêu đề bằng thẻ `<h1>`** và **nhóm các thông tin bằng thẻ `<fieldset>`** — đặt tất cả các câu lệnh hiển thị các phần tử nằm trong khung vào giữa cặp thẻ `<fieldset>…</fieldset>`.",
        },
        {
          kind: "code",
          caption:
            "Hình 12.3 SGK — biểu mẫu đăng kí môn thi tốt nghiệp, ghép đủ cả sáu loại phần tử đã học. Khung bên chạy thật: gõ, tích ô, chọn ngày, thả danh sách đều được",
          preview: true,
          tall: true,
          code: `<h1>Đăng kí môn thi tốt nghiệp</h1>
<form>
<fieldset>
  <label for="ht">Họ và tên:</label>
  <input id="ht" type="text" name="hoten">

  <br><label for="cccd">CCCD:</label>
  <input id="cccd" type="number" name="cccd">

  <br><label for="ns">Ngày sinh:</label>
  <input id="ns" type="date" name="ngaysinh">

  <br><br>Giới tính:
  <input type="radio" name="gt" value="Nam"> Nam
  <input type="radio" name="gt" value="Nữ"> Nữ

  <br><br>Môn thi:
  <br><input type="checkbox" name="mon" value="Toán"> Toán
  <input type="checkbox" name="mon" value="Văn"> Văn
  <input type="checkbox" name="mon" value="Ngoại ngữ"> Ngoại ngữ

  <br><br><label for="th">Tổ hợp</label>
  <select id="th" name="tohop">
    <option value="KHTN">Khoa học tự nhiên</option>
    <option value="KHXH">Khoa học xã hội</option>
  </select>

  <br><br><input type="submit" value="Gửi thông tin">
</fieldset>
</form>`,
        },
        {
          kind: "update",
          title: "Hai loại type có trong bài thực hành mà Bảng 12.1 chưa liệt kê",
          text: "Bước 1 của Nhiệm vụ 2 dùng **`type=\"number\"`** (chỉ cho nhập số) và **`type=\"date\"`** (hiện lịch để chọn ngày), nhưng Bảng 12.1 lại không có hai loại này — em cứ dùng bình thường, chúng là loại chuẩn của HTML. Ngoài ra còn hai thuộc tính rất hay dùng ngoài thực tế mà SGK chưa nhắc: **`placeholder`** (chữ mờ gợi ý trong ô khi chưa gõ gì) và **`required`** (bắt buộc phải điền mới gửi được).",
        },
        {
          kind: "check",
          q: "Trong biểu mẫu đăng kí môn thi, vì sao Ngày sinh nên dùng type=\"date\" thay vì type=\"text\"?",
          options: [
            "Vì type=\"text\" không cho gõ chữ số vào trong ô",
            "Vì date cho chọn ngày trên lịch, đỡ nhập sai định dạng",
            "Vì thẻ input bắt buộc phải khai báo type là date",
            "Vì chỉ có type=\"date\" mới gửi được về máy chủ",
          ],
          answer: 1,
          explain:
            "`type=\"date\"` hiện sẵn **ô chọn ngày theo lịch** nên người dùng khó nhập sai định dạng, và dữ liệu gửi đi thống nhất. `type=\"text\"` vẫn gõ được chữ số bình thường và vẫn gửi được, chỉ là mỗi người viết ngày một kiểu (1/2, 01-02, 2 tháng 1…) rất khó xử lí.",
        },
        {
          kind: "check",
          q: "Khi người dùng bấm nút type=\"submit\", trình duyệt gửi dữ liệu tới đâu?",
          options: [
            "Tới địa chỉ ghi ở thuộc tính action của thẻ form",
            "Tới địa chỉ ghi ở thuộc tính name của nút submit",
            "Tới chính trang web đang mở, không thể đổi khác",
            "Tới thư mục chứa tệp HTML ở trên máy của mình",
          ],
          answer: 0,
          explain:
            "SGK ghi trong Bảng 12.1: nút `submit` gửi thông tin đến máy chủ, **trình duyệt sẽ gọi tới đường dẫn chỉ định tại thuộc tính `action` của thẻ `<form>`**. Việc nhận và xử lí dữ liệu ở đầu kia là do ứng dụng/script trên máy chủ đảm nhiệm — phần này không thuộc HTML.",
        },
      ],
    },
  ],

  summary: [
    "**Biểu mẫu web** (`<form>`) dùng để **thu thập dữ liệu** từ người dùng; phần xử lí dữ liệu nằm trên máy chủ, không thuộc HTML.",
    "**`label`** tạo nhãn, **`for` của label phải trùng `id` của input** thì nháy vào nhãn mới nhảy được vào ô nhập.",
    "**`input`** là thẻ đơn, quan trọng nhất trong biểu mẫu: `id` để label trỏ tới, **`name` để xử lí và gửi dữ liệu**, `type` quyết định loại dữ liệu.",
    "Bảy `type` thông dụng: **text, password, radio, checkbox, button, file, submit**. Ô `radio` và `checkbox` **phải có `value`**.",
    "**`radio` cùng `name`** thì chỉ chọn được một; **`checkbox`** mỗi ô độc lập có/không; **`select`** là danh sách thả xuống chọn một.",
    "**`textarea`** là vùng nhập nhiều dòng (`rows`, `cols`); **`fieldset`** vẽ khung nhóm các phần tử, **`legend`** đặt tên cho nhóm.",
  ],
};

export default theory;
