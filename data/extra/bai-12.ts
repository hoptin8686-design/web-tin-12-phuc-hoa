import type { LessonExtra } from "@/lib/types";

// Bài 12. Tạo biểu mẫu — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b12-tf1",
      context:
        "Bạn Lùng tạo biểu mẫu đăng kí thành viên câu lạc bộ trường Phục Hòa. Bạn viết đoạn mã dưới đây. Bạn Páo nhìn vào và nói: thẻ <input> là thẻ đôi nên phải có </input> để đóng thẻ. Bạn Sình thì bảo: thuộc tính for trong <label> không liên quan gì đến id của <input>, chỉ cần đặt <label> ngay trước <input> là liên kết được.",
      code: '<form>\n  <label for="hoten">Họ và tên:</label>\n  <input id="hoten" type="text" name="hoten">\n  <br>\n  <label for="lop">Lớp:</label>\n  <input id="lop" type="text" name="lop">\n  <br>\n  <input type="submit" value="Gửi đăng kí">\n</form>',
      statements: [
        {
          text: "Đoạn mã của Lùng có cấu trúc hợp lệ: thẻ <form> bao ngoài, <label> liên kết đúng với <input> qua for và id.",
          answer: true,
          explain:
            "Cấu trúc chuẩn: <form> bao ngoài tất cả phần tử. <label for=\"hoten\"> liên kết với <input id=\"hoten\"> — giá trị for và id trùng nhau. Cú pháp hoàn toàn đúng.",
        },
        {
          text: "Nhận xét của Páo là đúng: <input> là thẻ đôi nên bắt buộc phải có thẻ kết thúc </input>.",
          answer: false,
          explain:
            "Páo nhầm. Phần tử input được xác định bởi một thẻ đơn, không có và không cần thẻ kết thúc. Cấu trúc đúng chỉ gồm <input id=\"...\" type=\"...\" name=\"...\"> như trong đoạn mã của Lùng.",
        },
        {
          text: "Nhận xét của Sình là đúng: chỉ cần đặt <label> ngay trước <input> là hai phần tử tự liên kết với nhau.",
          answer: false,
          explain:
            "Sình nhầm. Muốn nhấn vào nhãn mà con trỏ tự vào ô nhập liệu thì giá trị thuộc tính for của <label> phải trùng với giá trị thuộc tính id của <input> tương ứng. Đặt cạnh nhau trong mã nguồn không tạo ra liên kết đó.",
        },
        {
          text: "type=\"submit\" trong đoạn mã trên tạo nút gửi form — khi nhấn sẽ gửi dữ liệu tới địa chỉ trong thuộc tính action của thẻ <form>.",
          answer: true,
          explain:
            "type=\"submit\" tạo nút để gửi thông tin đến máy chủ — trình duyệt sẽ gọi tới đường dẫn chỉ định tại thuộc tính action của thẻ <form>. Nếu form không có action thì dữ liệu gửi về chính trang hiện tại.",
        },
      ],
    },
    {
      id: "b12-tf2",
      context:
        "Cô giáo yêu cầu tạo biểu mẫu đăng kí môn học có các trường: Họ tên (text), Giới tính (radio), Môn học ưa thích (checkbox), Ghi chú (textarea). Bạn Mai viết đoạn mã dưới đây. Bạn Dín góp ý: dùng checkbox cho giới tính là hợp lí hơn radio vì người dùng có thể chọn nhiều giới tính.",
      code: '<form>\n  <label for="ten">Họ và tên:</label>\n  <input id="ten" type="text" name="ten"><br>\n  <label>Giới tính:</label>\n  <input type="radio" name="gt" value="Nam"> Nam\n  <input type="radio" name="gt" value="Nu"> Nữ<br>\n  <label>Môn ưa thích:</label>\n  <input type="checkbox" name="mon" value="Toan"> Toán\n  <input type="checkbox" name="mon" value="Van"> Văn<br>\n  <label for="ghichu">Ghi chú:</label>\n  <textarea id="ghichu" name="ghichu" rows="3" cols="30"></textarea>\n</form>',
      statements: [
        {
          text: "Hai ô radio có cùng name=\"gt\" — điều này đảm bảo người dùng chỉ chọn được một trong hai giá trị Nam hoặc Nữ.",
          answer: true,
          explain:
            "type=\"radio\" tạo ô chọn 1 giá trị duy nhất trong các phần tử radio cùng name. Các radio cùng name=\"gt\" tạo thành một nhóm — chọn một thì ô kia bỏ chọn.",
        },
        {
          text: "Các ô checkbox cho phép người dùng chọn nhiều môn học cùng lúc, trong khi radio chỉ cho chọn một.",
          answer: true,
          explain:
            "type=\"checkbox\" tạo ô lựa chọn có hoặc không độc lập — người dùng có thể chọn nhiều ô checkbox cùng lúc. Đây là sự khác biệt chính so với radio.",
        },
        {
          text: "Góp ý của Dín là hợp lí: nên đổi giới tính sang checkbox để người dùng chọn được nhiều giá trị cùng lúc.",
          answer: false,
          explain:
            "Góp ý của Dín không hợp lí. Giới tính là trường chỉ được chọn một giá trị (Nam hoặc Nữ) nên radio mới là lựa chọn đúng. Checkbox chỉ dùng khi người dùng có thể chọn nhiều giá trị cùng lúc, như trường môn học ưa thích ở ngay bên dưới.",
        },
        {
          text: "Phần tử <textarea rows=\"3\" cols=\"30\"> tạo vùng nhập giống <input type=\"text\"> nhưng có nhiều dòng hơn.",
          answer: false,
          explain:
            "Mặc dù cả hai đều là vùng nhập văn bản, nhưng <textarea> là thẻ đôi (có </textarea>), xác định vùng nhập nhiều dòng và cột riêng biệt. <input type=\"text\"> là thẻ đơn, chỉ nhập một dòng. Cú pháp và thuộc tính khác nhau hoàn toàn.",
        },
      ],
    },
    {
      id: "b12-tf3",
      context:
        "Bạn Páo xây dựng biểu mẫu đăng kí thi tốt nghiệp có nhiều trường thông tin. Để biểu mẫu trông gọn gàng và có tổ chức, bạn dùng <fieldset> để nhóm các trường liên quan. Đoạn mã dưới đây là một phần của biểu mẫu. Bạn Súa nói: thuộc tính type=\"number\" và type=\"date\" không hợp lệ vì bảng SGK chỉ liệt kê 5 loại type mà thôi.",
      code: '<form>\n  <fieldset>\n    <legend>Thông tin cá nhân</legend>\n    <label for="hoten">Họ và tên:</label>\n    <input id="hoten" type="text" name="hoten"><br>\n    <label for="cccd">CCCD:</label>\n    <input id="cccd" type="number" name="cccd"><br>\n    <label for="ngaysinh">Ngày sinh:</label>\n    <input id="ngaysinh" type="date" name="ngaysinh">\n  </fieldset>\n  <fieldset>\n    <legend>Môn thi</legend>\n    <input type="checkbox" name="mon" value="Toan"> Toán\n    <input type="checkbox" name="mon" value="Van"> Văn\n  </fieldset>\n</form>',
      statements: [
        {
          text: "Thẻ <fieldset> trong đoạn mã dùng để nhóm các phần tử có liên quan bằng cách vẽ khung hình chữ nhật bao quanh.",
          answer: true,
          explain:
            "Phần tử fieldset dùng để nhóm các phần tử có liên quan trong biểu mẫu bằng cách vẽ một hình chữ nhật bao quanh các phần tử đặt trong cặp thẻ <fieldset>...</fieldset>.",
        },
        {
          text: "Phần tử <legend> bên trong <fieldset> dùng để đặt tên/tiêu đề cho nhóm phần tử đó.",
          answer: true,
          explain:
            "Ta có thể thêm tên nhóm phần tử bằng cách đặt phần tử legend trong phần tử fieldset tương ứng. Tên sẽ hiển thị trên đường viền khung.",
        },
        {
          text: "Ý kiến của Súa là đúng: type=\"number\" và type=\"date\" không hợp lệ vì bảng trong SGK chỉ liệt kê 5 loại type.",
          answer: false,
          explain:
            "Súa nhầm. Bảng trong SGK chỉ giới thiệu \"một số loại type thông dụng\" chứ không liệt kê hết. Chính ví dụ biểu mẫu đăng kí thi tốt nghiệp trong sách đã dùng type=\"number\" cho số CCCD và type=\"date\" cho ngày sinh.",
        },
        {
          text: "Vì các ô checkbox ở nhóm thứ hai có cùng name=\"mon\" nên chỉ chọn được một môn duy nhất, giống như radio.",
          answer: false,
          explain:
            "Khác với radio, checkbox không bị giới hạn chọn một giá trị dù có cùng name. Các checkbox cùng name được dùng chính là để gửi nhiều giá trị cùng tên lên máy chủ — ở đây là danh sách các môn thi đã chọn.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b12-es1",
      q: "Trình bày các thành phần cơ bản của một biểu mẫu HTML: thẻ bao ngoài, phần tử nhãn, phần tử nhập liệu, phần tử chọn và phần tử vùng văn bản. Nêu cú pháp và ví dụ cho mỗi loại.",
      answer:
        "* CẤU TRÚC CHUNG CỦA BIỂU MẪU HTML\n\n<form>\n  các phần tử của biểu mẫu\n</form>\n\nCác phần tử thường dùng bên trong: input, label, select, textarea, fieldset, legend,...\n\n* 1. THẺ <label> — NHÃN\nCú pháp: <label for=\"id_của_input\">Tên nhãn</label>\nTác dụng: Khi nhấn vào nhãn, con trỏ tự động vào ô input tương ứng (id trùng với for).\nVí dụ: <label for=\"hoten\">Họ và tên:</label>\n\n* 2. THẺ <input> — VÙNG NHẬP DỮ LIỆU (thẻ đơn)\nCú pháp: <input id=\"mã\" type=\"loại\" name=\"tên\">\n\nCác loại type phổ biến:\n- text: nhập văn bản một dòng\n- password: nhập mật khẩu (che ký tự)\n- radio value: chọn đúng một trong nhóm cùng name\n- checkbox value: chọn có/không; cho phép chọn nhiều\n- button value=\"tên\": nút bấm thông thường\n- file: chọn tệp tải lên\n- submit value=\"tên\": nút gửi form lên máy chủ\n- number: nhập số\n- date: chọn ngày tháng năm\n\nVí dụ:\n<label for=\"monan\">Tên món ăn</label>\n<input id=\"monan\" type=\"text\" name=\"monan\">\n\n* 3. THẺ <select> + <option> — DANH SÁCH THẢ XUỐNG\nCú pháp:\n<select id=\"mã\" name=\"tên\">\n  <option value=\"giá_trị\">Văn bản hiển thị</option>\n  ...\n</select>\n\nVí dụ:\n<label for=\"lop\">Lớp:</label>\n<select id=\"lop\" name=\"lop\">\n  <option value=\"10\">10</option>\n  <option value=\"11\">11</option>\n  <option value=\"12\">12</option>\n</select>\n\n* 4. THẺ <textarea> — VÙNG NHẬP NHIỀU DÒNG\nCú pháp: <textarea id=\"mã\" name=\"tên\" rows=\"số_dòng\" cols=\"số_cột\">Nội dung</textarea>\nNếu không để Nội_dung trong thẻ, vùng nhập là vùng trắng.\n\nVí dụ:\n<label for=\"ghichu\">Ghi chú:</label>\n<textarea id=\"ghichu\" name=\"ghichu\" rows=\"3\" cols=\"30\"></textarea>\n\n* 5. THẺ <fieldset> + <legend> — NHÓM PHẦN TỬ CÓ KHUNG\nDùng để nhóm các phần tử liên quan bằng cách vẽ khung hình chữ nhật bao quanh.\n<fieldset>\n  <legend>Tên nhóm</legend>\n  ... các phần tử ...\n</fieldset>",
    },
    {
      id: "b12-es2",
      q: "Phân biệt các loại input type trong HTML: text, password, radio, checkbox, submit. Cho ví dụ mã HTML minh hoạ cho mỗi loại.",
      answer:
        "* 1. type=\"text\" — NHẬP VĂN BẢN\nTạo trường nhập văn bản một dòng.\n<label for=\"ten\">Họ và tên:</label>\n<input id=\"ten\" type=\"text\" name=\"ten\">\n\n* 2. type=\"password\" — NHẬP MẬT KHẨU\nTạo trường nhập văn bản nhưng bị che thông tin (hiển thị dấu chấm hoặc sao).\n<label for=\"mk\">Mật khẩu:</label>\n<input id=\"mk\" type=\"password\" name=\"matkhau\">\n\n* 3. type=\"radio\" — CHỌN MỘT\nTạo ô chọn đúng một giá trị trong các phần tử radio cùng name. Mỗi ô cần thuộc tính value.\n<label>Giới tính:</label>\n<input type=\"radio\" name=\"gioitinh\" value=\"Nam\"> Nam\n<input type=\"radio\" name=\"gioitinh\" value=\"Nu\"> Nữ\n→ Người dùng chỉ chọn được Nam hoặc Nữ, không chọn được cả hai.\n\n* 4. type=\"checkbox\" — CHỌN CÓ/KHÔNG\nTạo ô lựa chọn có hoặc không. Nhiều checkbox có thể cùng được chọn. Mỗi ô cần thuộc tính value.\n<label>Môn học:</label>\n<input type=\"checkbox\" name=\"mon\" value=\"Toan\"> Toán\n<input type=\"checkbox\" name=\"mon\" value=\"Van\"> Văn\n<input type=\"checkbox\" name=\"mon\" value=\"Anh\"> Anh văn\n→ Người dùng có thể chọn nhiều môn cùng lúc.\n\n* 5. type=\"submit\" — NÚT GỬI FORM\nTạo nút để gửi thông tin lên máy chủ. Trình duyệt gọi tới đường dẫn trong thuộc tính action của <form>.\n<input type=\"submit\" value=\"Gửi thông tin\">\n→ Khác với type=\"button\" chỉ là nút bấm thông thường (không tự gửi form).\n\n* TÓM TẮT PHÂN BIỆT radio vs checkbox:\n- radio: chọn một trong nhóm cùng name → dùng cho giới tính, tổ hợp môn,...\n- checkbox: chọn có/không độc lập → dùng cho danh sách môn học, sở thích,...",
    },
  ],
};

export default extra;
