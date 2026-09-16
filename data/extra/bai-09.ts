import type { LessonExtra } from "@/lib/types";

// Bài 9. Tạo danh sách, bảng — câu đúng/sai + tự luận (SGK trang 52-56)
const extra: LessonExtra = {
  tf: [
    {
      id: "b9-tf1",
      context:
        "Nhóm lớp 12A đang xây dựng trang web giới thiệu các câu lạc bộ của trường. Bạn Lùng viết đoạn mã dưới đây để tạo danh sách các môn thể thao. Sau khi mở trên trình duyệt, bạn thấy danh sách hiện ký tự đầu dòng là hình vuông, bên trong mục 'Võ thuật' xuất hiện một danh sách nhỏ hơn đánh số i, ii, iii. Páo nhìn vào và nói rằng để đổi ký tự đầu dòng thành hình tròn rỗng, chỉ cần thay square thành round.",
      code: '<ul style="list-style-type:square">\n  <li>Bóng đá</li>\n  <li>Bóng chuyền</li>\n  <li>Võ thuật\n    <ol type="i">\n      <li>Karatedo</li>\n      <li>Taekwondo</li>\n      <li>Vovinam</li>\n    </ol>\n  </li>\n</ul>',
      statements: [
        {
          text: "Ký tự đầu dòng là hình vuông vì thuộc tính list-style-type được đặt giá trị là square.",
          answer: true,
          explain:
            "Để chọn ký tự đầu dòng của <ul>, ta thiết lập list-style-type trong thuộc tính style. Giá trị square cho ký tự hình vuông; các giá trị khác là disc (chấm tròn đặc), circle (vòng tròn rỗng) và none.",
        },
        {
          text: "Danh sách con bên trong mục Võ thuật được tạo đúng cách: đặt <ol> bên trong cặp thẻ <li>…</li> của mục đó.",
          answer: true,
          explain:
            "Cách tạo danh sách lồng nhau là đặt danh sách con bên trong cặp thẻ <li></li> của mục tương ứng trong danh sách cha. Đây đúng là cách đoạn mã của Lùng đã làm.",
        },
        {
          text: "Danh sách con trong mục Võ thuật sẽ hiển thị theo thứ tự 1, 2, 3 vì thẻ <ol> luôn đánh số bằng chữ số.",
          answer: false,
          explain:
            "Thuộc tính type của thẻ <ol> xác định kiểu đánh số, nên <ol> không phải lúc nào cũng đánh số bằng chữ số. Ở đây type=\"i\" cho kiểu chữ số La Mã viết thường: i, ii, iii, iv,… Năm giá trị hợp lệ của type là \"1\", \"A\", \"a\", \"I\", \"i\".",
        },
        {
          text: "Đề xuất của Páo là đúng: thay square thành round sẽ đổi ký tự đầu dòng thành hình tròn rỗng.",
          answer: false,
          explain:
            "SGK quy định 4 giá trị hợp lệ của list-style-type: disc, circle, square và none. Không có giá trị round. Để có vòng tròn rỗng, phải dùng circle, không phải round.",
        },
      ],
    },
    {
      id: "b9-tf2",
      context:
        "Cô giáo yêu cầu lớp 12A tạo bảng thời khoá biểu đơn giản. Bạn Sình viết đoạn mã dưới đây. Khi mở trên trình duyệt, Sình thấy bảng hiện ra nhưng không có đường kẻ, các ô liền nhau khó đọc. Bạn Dín đề xuất thêm thuộc tính border vào thẻ <table> để vẽ viền. Bạn Súa thì cho rằng thêm thuộc tính rowspan=\"2\" vào ô 'Tiết' sẽ giúp ô đó chiếm cả hai cột Toán và Văn.",
      code: '<table>\n  <tr>\n    <th>Tiết</th>\n    <th>Thứ 2</th>\n    <th>Thứ 3</th>\n  </tr>\n  <tr>\n    <td>1</td>\n    <td>Toán</td>\n    <td>Văn</td>\n  </tr>\n  <tr>\n    <td>2</td>\n    <td>Lí</td>\n    <td>Toán</td>\n  </tr>\n</table>',
      statements: [
        {
          text: "Bảng của Sình có 3 hàng và 3 cột.",
          answer: true,
          explain:
            "Có 3 cặp thẻ <tr>...</tr> nên bảng có 3 hàng. Mỗi hàng có 3 ô (một hàng với ba <th>, hai hàng với ba <td>) nên bảng có 3 cột.",
        },
        {
          text: "Để thêm đường viền cho bảng trong HTML5, nên dùng thuộc tính border trong thuộc tính style thay vì thêm thuộc tính border trực tiếp vào thẻ <table>.",
          answer: true,
          explain:
            "Trong HTML5, cách đúng để tạo khung viền bảng là dùng thuộc tính con border trong style với cú pháp \"độ_dày_px kiểu_viền [màu_viền]\", ví dụ style=\"border:1px solid\". Đề xuất của Dín dùng thuộc tính border trực tiếp là cách của HTML4 cũ.",
        },
        {
          text: "Hiểu của Súa là đúng: rowspan=\"2\" sẽ khiến ô 'Tiết' chiếm 2 cột liền kề theo chiều ngang.",
          answer: false,
          explain:
            "Súa nhầm giữa hai thuộc tính. rowspan gộp ô theo hàng (chiều dọc), còn colspan mới gộp ô theo cột (chiều ngang). Muốn ô 'Tiết' chiếm 2 cột Toán và Văn thì phải dùng colspan=\"2\".",
        },
        {
          text: "Thẻ <th> trong hàng đầu tiên sẽ hiển thị giống hệt thẻ <td> — không có sự khác biệt về trực quan.",
          answer: false,
          explain:
            "Trình duyệt thường hiển thị nội dung <th> (ô tiêu đề) in đậm và căn giữa để phân biệt với ô dữ liệu <td>. Đây là sự khác biệt quan trọng giúp người đọc nhận biết hàng/cột tiêu đề trong bảng.",
        },
      ],
    },
    {
      id: "b9-tf3",
      context:
        "Hội chợ ẩm thực trường THPT Phục Hòa năm nay có nhiều món đặc sản vùng cao. Ban tổ chức muốn đăng bảng thực đơn lên trang web của lớp, kèm đơn giá và số lượng. Bạn Mai được giao viết đoạn mã tạo bảng. Bạn nghĩ cần gộp ô 'Ngày' để ô này chiếm cả hai cột Thứ 7 và Chủ nhật. Bạn Lùng góp ý rằng thêm thẻ <caption> ngay trước thẻ </table> là cách đúng để đặt tiêu đề cho bảng.",
      code: '<table style="border:1px solid">\n  <caption>Thực đơn hội chợ</caption>\n  <tr>\n    <th>Món ăn</th>\n    <th colspan="2">Ngày bán</th>\n  </tr>\n  <tr>\n    <td>Thắng cố ngựa</td>\n    <td>Thứ 7</td>\n    <td>Chủ nhật</td>\n  </tr>\n</table>',
      statements: [
        {
          text: "Thẻ <caption> đặt đúng vị trí: ngay sau thẻ <table> và trước thẻ <tr> đầu tiên.",
          answer: true,
          explain:
            "SGK quy định thẻ <caption> phải đặt ngay sau thẻ <table> và trước thẻ <tr> đầu tiên — đúng như đoạn mã của Mai. Đây là vị trí bắt buộc, không phải trước </table>.",
        },
        {
          text: "Thuộc tính colspan=\"2\" trong thẻ <th> khiến ô 'Ngày bán' chiếm 2 cột liền kề trong cùng hàng.",
          answer: true,
          explain:
            "colspan dùng để gộp ô theo cột: colspan=\"2\" mở rộng ô chiếm 2 cột liền kề trong cùng hàng. Ô 'Ngày bán' sẽ trải rộng bao phủ cả hai cột 'Thứ 7' và 'Chủ nhật' ở hàng tiếp theo.",
        },
        {
          text: "Gợi ý của Lùng là đúng: thẻ <caption> đặt ở đâu trong bảng cũng được, kể cả ngay trước </table>.",
          answer: false,
          explain:
            "Lùng nhầm. Sách quy định rõ thẻ <caption> phải đặt ngay sau thẻ <table> và trước thẻ <tr> đầu tiên. Đặt trước </table> là sai vị trí.",
        },
        {
          text: "Vì bảng đã dùng style=\"border:1px solid\" nên không cần thêm viền riêng cho từng ô <td>.",
          answer: false,
          explain:
            "Thuộc tính style đặt trong <table> chỉ tạo viền cho bảng (khung ngoài), không tự động tạo viền cho từng ô bên trong. Để có đường kẻ ô, cần thêm style=\"border:1px solid\" cho từng thẻ <tr> hoặc từng thẻ <td> và <th> riêng.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b9-es1",
      q: "Trình bày ba dạng danh sách trong HTML. Với mỗi dạng: nêu thẻ sử dụng, thuộc tính liên quan và cho ví dụ minh hoạ đơn giản.",
      answer:
        "* 1. DANH SÁCH CÓ THỨ TỰ (<ol>)\n\nDùng cặp thẻ <ol></ol> bao ngoài, mỗi mục là cặp <li></li>.\n\nThuộc tính:\n- type: kiểu đánh số — \"1\" (mặc định: 1,2,3,...), \"A\" (A,B,C,...), \"a\" (a,b,c,...), \"I\" (I,II,III,...), \"i\" (i,ii,iii,...)\n- start: giá trị bắt đầu đánh số (số thực)\n\nVí dụ:\n<ol type=\"i\">\n  <li>Karatedo</li>\n  <li>Taekwondo</li>\n  <li>Vovinam</li>\n</ol>\n→ Hiển thị: i. Karatedo  ii. Taekwondo  iii. Vovinam\n\n* 2. DANH SÁCH KHÔNG CÓ THỨ TỰ (<ul>)\n\nDùng cặp thẻ <ul></ul> bao ngoài, mỗi mục là cặp <li></li>.\n\nThuộc tính: list-style-type trong style — 4 giá trị:\n- disc (chấm tròn đặc — mặc định)\n- circle (vòng tròn rỗng)\n- square (hình vuông)\n- none (không có ký tự)\n\nVí dụ:\n<ul style=\"list-style-type:square\">\n  <li>Bóng đá</li>\n  <li>Bóng chuyền</li>\n</ul>\n→ Hiển thị: ■ Bóng đá  ■ Bóng chuyền\n\n* 3. DANH SÁCH MÔ TẢ (<dl>)\n\nDùng ba thẻ:\n- <dl>...</dl>: bao ngoài toàn danh sách\n- <dt>...</dt>: tên mục (thuật ngữ hoặc nhãn)\n- <dd>...</dd>: mô tả hoặc định nghĩa của mục\n\nVí dụ:\n<dl>\n  <dt><b>Kem</b></dt>\n  <dd>Món ăn ngọt, ở dạng đông lạnh.</dd>\n  <dt><b>Trà sữa</b></dt>\n  <dd>Đồ uống làm từ hai nguyên liệu trà và sữa.</dd>\n</dl>\n→ Hiển thị: Kem in đậm, phần mô tả thụt vào bên dưới.\n\n* DANH SÁCH LỒNG NHAU\nĐể tạo danh sách lồng nhau, đặt danh sách con bên trong cặp thẻ <li></li> của mục tương ứng trong danh sách cha. Có thể lồng nhiều cấp và kết hợp <ol> với <ul>.",
    },
    {
      id: "b9-es2",
      q: "Trình bày cách tạo bảng trong HTML: các thẻ cần dùng, cách thêm tiêu đề bảng, tạo viền, điều chỉnh kích thước và gộp ô. Cho ví dụ minh hoạ.",
      answer:
        "* CÁC THẺ TẠO BẢNG HTML\n\n- <table>: tạo bảng (bao ngoài toàn bộ)\n- <tr>: tạo hàng (Table Row)\n- <td>: tạo ô dữ liệu (Table Data)\n- <th>: tạo ô tiêu đề (Table Header) — trình duyệt thường hiển thị in đậm, căn giữa\n- <caption>: thêm tiêu đề cho bảng\n\nCấu trúc cơ bản:\n<table>\n  <caption>Tiêu đề bảng</caption>\n  <tr><th>Tên cột 1</th><th>Tên cột 2</th></tr>\n  <tr><td>Dữ liệu 1</td><td>Dữ liệu 2</td></tr>\n</table>\nLưu ý: <caption> đặt ngay sau <table>, trước <tr> đầu tiên.\n\n* TẠO VIỀN BẢNG (HTML5)\nDùng thuộc tính con border trong style:\nCú pháp: \"độ_dày_px kiểu_viền [màu_viền]\"\n- Kiểu viền: solid (liền), dotted (chấm), double (đôi), none (không viền)\n- Màu viền: tuỳ chọn, mặc định là đen\nVí dụ: <table style=\"border:1px solid\"> — viền nét liền 1px màu đen\nĐể viền hiện cả ô bên trong: thêm style=\"border:1px solid\" cho từng <tr> và <td>.\n\n* ĐIỀU CHỈNH KÍCH THƯỚC\nDùng đặc tính width và height trong style:\n- <table style=\"width:80%;height:400px\"> — bảng rộng 80%, cao 400px\n- <tr style=\"height:15%\"> — hàng cao 15% chiều cao bảng\n- <td style=\"width:10%\"> — ô rộng 10% chiều rộng bảng\nLưu ý: Không nên dùng px vì thiết bị khác nhau có số điểm ảnh khác nhau, dễ hiển thị sai.\n\n* GỘP Ô\n1. Gộp ô theo cột (colspan): ô mở rộng sang phải\n   Thêm colspan=\"số_cột_muốn_ghép\" vào <th> hoặc <td>.\n   Các ô bị gộp ở cùng hàng — bỏ qua <td>/<th> tương ứng.\n\n2. Gộp ô theo hàng (rowspan): ô mở rộng xuống dưới\n   Thêm rowspan=\"số_hàng_muốn_ghép\" vào <th> hoặc <td> của hàng đầu.\n   Ở các hàng tiếp theo — bỏ qua <th>/<td> tại vị trí tương ứng.\n\nVí dụ gộp ô:\n<tr>\n  <th rowspan=\"2\">Họ và tên</th>\n  <th colspan=\"3\">Điểm thi</th>\n</tr>\n<tr>\n  <th>Toán</th><th>Vật lí</th><th>Hoá học</th>\n</tr>\n→ Ô 'Họ và tên' chiếm 2 hàng, ô 'Điểm thi' chiếm 3 cột.",
    },
  ],
};

export default extra;
