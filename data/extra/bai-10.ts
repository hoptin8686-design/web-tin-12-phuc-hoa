import type { LessonExtra } from "@/lib/types";

// Bài 10. Tạo liên kết — câu đúng/sai + tự luận (SGK trang 57-61)
const extra: LessonExtra = {
  tf: [
    {
      id: "b10-tf1",
      context:
        "Bạn Páo đang xây dựng website giới thiệu làng nghề dệt thổ cẩm của bản mình. Cấu trúc thư mục như sau: thư mục web/ chứa index.html và thư mục san-pham/ chứa tệp ao-dai.html. Páo viết đoạn mã dưới đây trong tệp index.html để tạo các liên kết. Bạn Dín xem và nhận xét rằng cả ba liên kết đều là đường dẫn tuyệt đối vì chúng đều trỏ đến một địa chỉ cụ thể.",
      code: '<p><a href="https://langnghe-thocan.vn">Xem làng nghề trên mạng</a></p>\n<p><a href="san-pham/ao-dai.html">Xem áo dài thổ cẩm</a></p>\n<p><a href="#gioi-thieu">Xem phần giới thiệu</a></p>',
      statements: [
        {
          text: "Liên kết đầu tiên dùng đường dẫn tuyệt đối vì có đầy đủ giao thức https:// và tên miền.",
          answer: true,
          explain:
            "Đường dẫn tuyệt đối cung cấp địa chỉ đầy đủ gồm giao thức (https://) và tên miền (langnghe-thocan.vn). Liên kết thứ nhất đáp ứng đủ điều kiện này.",
        },
        {
          text: "Liên kết thứ hai là đường dẫn tuyệt đối vì trong đó có ghi rõ tên thư mục san-pham/.",
          answer: false,
          explain:
            "Có tên thư mục không làm cho đường dẫn thành tuyệt đối. Đường dẫn tuyệt đối phải có đầy đủ giao thức và tên miền. \"san-pham/ao-dai.html\" không có hai thứ đó nên là đường dẫn tương đối: từ vị trí tệp index.html hiện tại, vào thư mục san-pham/ rồi mở tệp ao-dai.html.",
        },
        {
          text: "Liên kết thứ ba với href=\"#gioi-thieu\" sẽ dẫn tới một trang web khác có tên \"gioi-thieu\".",
          answer: false,
          explain:
            "Href bắt đầu bằng \"#\" là liên kết tới vị trí trong cùng trang web hiện tại, không phải trang khác. Cụ thể \"#gioi-thieu\" trỏ tới phần tử có id=\"gioi-thieu\" trong trang index.html.",
        },
        {
          text: "Nhận xét của Dín là sai: chỉ liên kết đầu là tuyệt đối, hai liên kết còn lại là tương đối.",
          answer: true,
          explain:
            "Đường dẫn tuyệt đối phải có giao thức và tên miền. Liên kết 2 (\"san-pham/ao-dai.html\") và liên kết 3 (\"#gioi-thieu\") đều không có giao thức hay tên miền — đây là đường dẫn tương đối.",
        },
      ],
    },
    {
      id: "b10-tf2",
      context:
        "Nhóm học sinh lớp 12A xây dựng website giới thiệu các câu lạc bộ trường. Cấu trúc: thư mục web/ chứa CLB.html; bên trong web/ có thư mục on_tap/ chứa bai_tap_on_tap.html. Bạn Sình viết đoạn mã dưới đây trong tệp bai_tap_on_tap.html. Bạn Lùng góp ý rằng để liên kết từ ô 'Họ và tên' trong bảng tới phần giới thiệu ở đầu trang, nên thêm href=\"#Ho_ten\" vào thẻ <td> thay vì thẻ <a>.",
      code: '<h2 id="lich-clb">Lịch sinh hoạt CLB</h2>\n<p><a href="../CLB.html">Quay về trang CLB</a></p>\n<table>\n  <tr><th>Họ và tên</th><th>CLB</th></tr>\n  <tr><td>Sình</td><td>Thể thao</td></tr>\n</table>',
      statements: [
        {
          text: "Dấu \"../\" trong đường dẫn \"../CLB.html\" có nghĩa là tìm tệp CLB.html ngay trong thư mục hiện tại.",
          answer: false,
          explain:
            "\"../\" có nghĩa là lùi lên thư mục cha, không phải thư mục hiện tại. Tệp bai_tap_on_tap.html nằm trong on_tap/ (con của web/), nên \"../\" đưa về web/ và \"../CLB.html\" trỏ tới tệp CLB.html nằm trong web/.",
        },
        {
          text: "Thuộc tính id=\"lich-clb\" trong thẻ <h2> đặt đúng vị trí để liên kết tới đây bằng href=\"#lich-clb\".",
          answer: true,
          explain:
            "Để tạo liên kết tới vị trí trong cùng trang: Bước 1 — tạo phần tử có thuộc tính id tại vị trí đích. Bước 2 — dùng href=\"#id\" trong thẻ <a>. Đoạn mã đã làm đúng Bước 1; nếu muốn liên kết tới đây chỉ cần viết <a href=\"#lich-clb\">...</a>.",
        },
        {
          text: "Gợi ý của Lùng là đúng: thêm href vào thẻ <td> cũng tạo được liên kết giống thẻ <a>.",
          answer: false,
          explain:
            "Thuộc tính href chỉ hoạt động với thẻ <a>, không hoạt động với <td> hay các thẻ khác. Để tạo liên kết trong ô bảng, phải đặt thẻ <a href=\"...\">...</a> bên trong cặp thẻ <td>...</td>.",
        },
        {
          text: "Muốn nhấn vào tên 'Sình' để mở trang CLB.html, cần đặt thẻ <a href=\"../CLB.html\"> bên trong <td>.",
          answer: true,
          explain:
            "Để tạo liên kết trong bất kỳ vị trí nào của trang — kể cả trong ô bảng <td> — đều phải dùng cặp thẻ <a href=\"...\">nội dung</a>. Thẻ <a> có thể đặt lồng bên trong <td>.",
        },
      ],
    },
    {
      id: "b10-tf3",
      context:
        "Cô giáo giao bài tập: viết trang web giới thiệu bản thân có ảnh đại diện, khi nhấn vào ảnh thì dẫn tới trang Facebook cá nhân. Bạn Mai làm theo đoạn mã dưới đây. Khi mở trên trình duyệt, nhấn vào ảnh thì trình duyệt mở trang Facebook đúng như yêu cầu. Tuy nhiên bạn Páo nói rằng thẻ <img> không được phép đặt bên trong thẻ <a> vì <a> chỉ dành cho văn bản.",
      code: '<h1 id="dau-trang">Giới thiệu bản thân</h1>\n<a href="https://facebook.com/mai.123">\n  <img src="images/avatar.jpg">\n</a>\n<p>Tên: Nguyễn Thị Mai — Lớp 12A</p>\n<p><a href="#dau-trang">Về đầu trang</a></p>',
      statements: [
        {
          text: "Cách Mai đặt thẻ <img> bên trong thẻ <a> là đúng — đây là cách tạo liên kết cho hình ảnh.",
          answer: true,
          explain:
            "Để tạo liên kết cho hình ảnh, ta đặt thẻ <img src=\"...\"> bên trong cặp thẻ <a href=\"...\">…</a>. Đây là cú pháp hợp lệ và được SGK hướng dẫn.",
        },
        {
          text: "Liên kết tới Facebook nên rút gọn thành đường dẫn tương đối cho ngắn, vì đó là trang ai cũng biết.",
          answer: false,
          explain:
            "Không rút gọn được. Khi liên kết tới tài liệu không nằm trên máy chủ của mình — ở đây là trang Facebook trên Internet — bắt buộc phải dùng đường dẫn tuyệt đối có đầy đủ giao thức (https://) và tên miền. Đường dẫn tương đối chỉ dùng cho tài liệu trong cùng website.",
        },
        {
          text: "Nhận xét của Páo là sai: thẻ <a> có thể chứa cả văn bản lẫn hình ảnh bên trong.",
          answer: true,
          explain:
            "SGK nêu rõ: để tạo liên kết cho hình ảnh, ta cần hiển thị ảnh với thẻ <img> đặt bên trong cặp thẻ <a>. Thẻ <a> không giới hạn chỉ chứa văn bản.",
        },
        {
          text: "Liên kết \"#dau-trang\" trong đoạn mã sẽ dẫn sang một trang web khác có tiêu đề là \"dau-trang\".",
          answer: false,
          explain:
            "Href bắt đầu bằng \"#\" là liên kết tới vị trí trong cùng trang hiện tại. \"#dau-trang\" trỏ tới phần tử có id=\"dau-trang\" — ở đây là thẻ <h1> ở đầu trang. Nhấn vào sẽ cuộn lên đầu trang, không mở trang mới.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b10-es1",
      q: "Phân biệt siêu văn bản, siêu liên kết. Nêu cú pháp tạo liên kết trong HTML và phân biệt đường dẫn tuyệt đối với đường dẫn tương đối. Cho ví dụ mỗi loại.",
      answer:
        "* SIÊU VĂN BẢN (hypertext)\nLà loại văn bản mà nội dung không chỉ chứa văn bản mà còn có thể chứa nhiều dạng dữ liệu khác như âm thanh, hình ảnh,... và đặc biệt là chứa các siêu liên kết tới siêu văn bản khác. Khi xem siêu văn bản, không cần xem tuần tự từ đầu đến cuối mà có thể nhờ các siêu liên kết để truy cập vị trí tương ứng không theo trình tự.\n\n* SIÊU LIÊN KẾT (hyperlink)\nCòn gọi tắt là liên kết — là một tham chiếu để liên kết tới siêu văn bản khác. Người dùng có thể dễ dàng truy cập đến văn bản liên kết bằng cách nháy chuột vào vị trí đặt liên kết trong văn bản ban đầu.\n\n* CÚ PHÁP TẠO LIÊN KẾT TRONG HTML\n<a href=\"URL\">Nội dung hiển thị tại vị trí đặt liên kết</a>\n\nTrong đó:\n- href: thuộc tính cung cấp địa chỉ (đường dẫn) trang web hay tài nguyên được liên kết (URL). Đường dẫn URL phải được nằm trong cặp dấu nháy kép \" \".\n- Nội dung bên trong cặp thẻ <a>: phần hiển thị trên trang, người dùng nhấn vào để mở liên kết. Có thể là văn bản hoặc hình ảnh (<img>).\n\n* PHÂN BIỆT ĐƯỜNG DẪN TUYỆT ĐỐI VÀ TƯƠNG ĐỐI\n\nĐường dẫn TUYỆT ĐỐI:\n- Cung cấp địa chỉ đầy đủ: giao thức (http:// hoặc https://) + tên miền + đường dẫn chi tiết.\n- Dùng khi liên kết tới tài liệu trên máy chủ khác (liên kết ra Internet).\n- Ví dụ: href=\"https://hanhtrangso.nxbgd.vn/sach-dien-tu\"\n\nĐường dẫn TƯƠNG ĐỐI:\n- Mô tả cách truy cập tài liệu từ vị trí tài liệu hiện tại — không cần giao thức hay tên miền.\n- Dùng khi liên kết trong cùng website (cùng máy chủ).\n- Cách viết:\n  + Cùng thư mục: chỉ cần tên tệp. VD: href=\"thong_tin.html\"\n  + Thư mục con một cấp: tên_thư_mục/tên_tệp. VD: href=\"bai_tap/bai_tap_1.html\"\n  + Thư mục cha: dùng \"../\" để lên một mức. VD: href=\"../index.html\"\n  + Nhiều mức cha: dùng nhiều \"../\". VD: href=\"../../index.html\" (lên 2 mức)",
    },
    {
      id: "b10-es2",
      q: "Nêu các cách liên kết trong HTML: liên kết tới trang web khác, liên kết trong cùng website, liên kết tới vị trí trong cùng trang, và liên kết cho hình ảnh. Cho ví dụ mã HTML minh hoạ cho mỗi cách.",
      answer:
        "* 1. LIÊN KẾT TỚI TRANG WEB KHÁC (liên kết ngoài)\nDùng thẻ <a> với đường dẫn tuyệt đối cho thuộc tính href.\n\nVí dụ:\n<p><a href=\"https://hanhtrangso.nxbgd.vn/sach-dien-tu?book_active=0\">Sách điện tử Kết nối tri thức với cuộc sống</a></p>\n→ Khi nhấn, trình duyệt mở trang web của nhà xuất bản.\n\n* 2. LIÊN KẾT TRONG CÙNG WEBSITE (liên kết trong)\nDùng thẻ <a> với đường dẫn tương đối cho thuộc tính href.\n\nVí dụ (cùng thư mục):\n<a href=\"thong_tin.html\">Giới thiệu về trang web</a>\n\nVí dụ (thư mục con):\n<a href=\"bai_tap/bai_tap_1.html\">Bài tập 1</a>\n\nVí dụ (thư mục cha, dùng \"../\"):\n<a href=\"../index.html\">Quay lại trang chủ</a>\n\n* 3. LIÊN KẾT TỚI VỊ TRÍ TRONG CÙNG TRANG\nThực hiện hai bước:\nBước 1: Tạo phần tử HTML có thuộc tính id tại vị trí cần liên kết đến. Tên id phải duy nhất trong toàn trang.\n  Ví dụ: <table id=\"Thong_tin\">…</table>\n\nBước 2: Tạo liên kết với href=\"#tên_id\".\n  Ví dụ: <a href=\"#Thong_tin\">Thông tin chi tiết</a>\n→ Khi nhấn, trang cuộn tới vị trí của phần tử có id=\"Thong_tin\".\n\n* 4. LIÊN KẾT CHO HÌNH ẢNH\nHiển thị ảnh bằng thẻ <img>, rồi đặt thẻ <img> bên trong cặp thẻ <a>.\n\nVí dụ:\n<a href=\"thong_tin.html\">\n  <img src=\"images/sun.png\">\n</a>\n→ Khi nhấn vào hình ảnh Mặt Trời, trình duyệt mở trang thong_tin.html.\n\nLưu ý: đường dẫn trong thuộc tính src của <img> cũng dùng đường dẫn tuyệt đối hoặc tương đối tương tự như href.\n\n* TÓM TẮT: Từ một vị trí trong một trang web, ta có thể tạo liên kết tới trang web bất kì trên Internet, tới các trang ở trên cùng máy chủ hay liên kết tới những vị trí khác trong cùng trang.",
    },
  ],
};

export default extra;
