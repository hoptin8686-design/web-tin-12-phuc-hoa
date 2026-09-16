import type { Question } from "@/lib/types";

// Bài 10. Tạo liên kết (SGK trang 57-61)
// 1. Siêu văn bản (hypertext): chứa nhiều loại dữ liệu và siêu liên kết (hyperlink).
// 2. Thẻ <a href="URL">Nội dung</a>: tạo liên kết; thuộc tính href là đường dẫn.
// 3. URL tuyệt đối: có giao thức (http/https) + tên miền + đường dẫn chi tiết.
// 4. URL tương đối: chỉ cần tên tệp/thư mục; dấu "/" phân cách cấp; "../" lên thư mục cha.
// 5. Liên kết trong cùng trang: thuộc tính id + href="#mã_định_danh".
// 6. Liên kết cho hình ảnh: thẻ <img src="đường_dẫn"> đặt bên trong cặp thẻ <a>.
const questions: Question[] = [
  {
    id: "b10-01",
    q: "Siêu văn bản (hypertext) khác văn bản thông thường ở điểm gì?",
    options: [
      "Chứa nhiều loại dữ liệu và đặc biệt có các siêu liên kết tới siêu văn bản khác",
      "Chỉ chứa văn bản thuần túy và không có hình ảnh hay âm thanh đính kèm",
      "Được mã hoá bằng mật khẩu nên chỉ người được cấp quyền mới đọc được",
      "Được hiển thị theo thứ tự từ đầu đến cuối, không thể nhảy tới vị trí khác",
    ],
    answer: 0,
    explain:
      "Siêu văn bản là loại văn bản mà nội dung của nó không chỉ chứa văn bản mà còn có thể chứa nhiều dạng dữ liệu khác như âm thanh, hình ảnh,... và đặc biệt là chứa các siêu liên kết tới siêu văn bản khác. Nhờ các siêu liên kết, người dùng có thể truy cập vị trí tương ứng không theo trình tự.",
  },
  {
    id: "b10-02",
    q: "Trong HTML, thẻ nào được dùng để tạo liên kết?",
    options: [
      "Thẻ <a> với thuộc tính href chứa đường dẫn tới tài liệu được liên kết",
      "Thẻ <link> với thuộc tính href chứa đường dẫn tới tài liệu được liên kết",
      "Thẻ <url> với thuộc tính src chứa đường dẫn tới tài liệu được liên kết",
      "Thẻ <ref> với thuộc tính path chứa đường dẫn tới tài liệu được liên kết",
    ],
    answer: 0,
    explain:
      "Trong HTML, người ta sử dụng thẻ <a> cho các liên kết. Cấu trúc chung: <a href=\"URL\">Nội dung hiển thị tại vị trí đặt liên kết</a>. Thuộc tính href dùng để cung cấp địa chỉ (đường dẫn) trang web hay tài nguyên được liên kết.",
  },
  {
    id: "b10-03",
    q: "Đường dẫn URL tuyệt đối khác đường dẫn URL tương đối ở điểm nào?",
    options: [
      "URL tuyệt đối có đầy đủ giao thức, tên miền và đường dẫn; URL tương đối chỉ cần tên tệp hoặc thư mục",
      "URL tuyệt đối chỉ dùng được trong cùng website trên cùng máy chủ, không dùng để liên kết ra Internet",
      "URL tuyệt đối không cần giao thức http hay https, còn URL tương đối bắt buộc phải có giao thức",
      "URL tuyệt đối và URL tương đối hoàn toàn giống nhau về chức năng, chỉ khác về độ dài chuỗi ký tự",
    ],
    answer: 0,
    explain:
      "Đường dẫn tuyệt đối cung cấp một địa chỉ đầy đủ bao gồm cả giao thức (http:// hoặc https://), tên miền và tên đường dẫn chi tiết nếu cần. Đường dẫn tương đối mô tả cách truy cập tài liệu từ vị trí tài liệu hiện tại — không cần giao thức hay tên miền.",
  },
  {
    id: "b10-04",
    q: "Khi nào cần dùng đường dẫn tuyệt đối để liên kết?",
    options: [
      "Khi liên kết tới tài liệu không nằm trên cùng máy chủ, tức là liên kết ra Internet",
      "Khi liên kết giữa hai trang trong cùng một website trên cùng máy chủ của mình",
      "Khi liên kết tới một vị trí cụ thể trong cùng trang web hiện đang xem",
      "Khi liên kết tới tệp ảnh hoặc tệp âm thanh nằm trong thư mục images/",
    ],
    answer: 0,
    explain:
      "Khi sử dụng liên kết trên mạng Internet (mà tài liệu không nằm trên máy chủ của mình), ta cần phải sử dụng đường dẫn tuyệt đối. Còn khi liên kết trong cùng website (cùng máy chủ), ta dùng đường dẫn tương đối cho tiện.",
  },
  {
    id: "b10-05",
    q: "Trong cấu trúc website, để liên kết từ trang index.html tới trang thong_tin.html nằm cùng thư mục, ta viết thuộc tính href như thế nào?",
    options: [
      'href="thong_tin.html"',
      'href="/thong_tin.html"',
      'href="../thong_tin.html"',
      'href="https://thong_tin.html"',
    ],
    answer: 0,
    explain:
      "Để liên kết tới một tệp trong cùng thư mục, ta chỉ cần cung cấp tên của tệp liên kết tới. Ví dụ: <a href=\"thong_tin.html\">Giới thiệu về trang web</a>. Không cần giao thức, tên miền hay dấu / ở đầu.",
  },
  {
    id: "b10-06",
    q: "Trong website có cấu trúc thư mục, để liên kết từ trang index.html tới trang bai_tap_1.html nằm trong thư mục con bai_tap/, ta viết href như thế nào?",
    options: [
      'href="bai_tap/bai_tap_1.html"',
      'href="../bai_tap_1.html"',
      'href="/bai_tap_1.html"',
      'href="bai_tap_1.html"',
    ],
    answer: 0,
    explain:
      "Đường dẫn đến trang web ở thư mục khác, dưới một cấp gồm tên thư mục và tên tệp được phân cách bằng dấu \"/\". Ví dụ: href=\"bai_tap/bai_tap_1.html\" nghĩa là vào thư mục bai_tap rồi mở tệp bai_tap_1.html.",
  },
  {
    id: "b10-07",
    q: "Ký tự \"../\" trong đường dẫn tương đối có ý nghĩa gì?",
    options: [
      "Quay trở lại thư mục ở mức trên — một cấp so với thư mục chứa tệp hiện tại",
      "Vào thư mục con một cấp bên trong thư mục hiện đang chứa tệp",
      "Xác định gốc của toàn bộ website, tương đương với thư mục web/",
      "Biểu thị đây là đường dẫn tuyệt đối, cần thêm giao thức http:// phía trước",
    ],
    answer: 0,
    explain:
      "Khi sử dụng \"../\" trong đường dẫn, tức là chỉ định \"trở lại thư mục trên một mức\" của thư mục chứa tệp có liên kết. Số cụm \"../\" trong đường dẫn tương ứng với số mức quay trở lại thư mục ở mức trên.",
  },
  {
    id: "b10-08",
    q: "Đoạn mã <a href=\"../index.html\">Quay lại trang chủ</a> được viết trong tệp bai_tap_1.html nằm trong thư mục bai_tap/. Liên kết này dẫn tới đâu?",
    options: [
      "Tệp index.html nằm ở thư mục cha (web/) — thư mục mức trên của bai_tap/",
      "Tệp index.html nằm trong cùng thư mục bai_tap/ với tệp hiện tại",
      "Trang chủ của website trên Internet theo giao thức http://",
      "Tệp index.html nằm trong thư mục con on_tap/ bên dưới bai_tap/",
    ],
    answer: 0,
    explain:
      "\"../\" chỉ định quay lại thư mục trên một mức. Tệp bai_tap_1.html nằm trong bai_tap/, nên \"../\" đưa về thư mục cha là web/. Vì vậy href=\"../index.html\" dẫn tới tệp index.html trong thư mục web/ — đó là trang chủ của website.",
  },
  {
    id: "b10-09",
    q: "Để tạo liên kết tới một vị trí cụ thể trong cùng trang web, cần thực hiện mấy bước?",
    options: [
      "Hai bước: tạo phần tử có thuộc tính id tại vị trí đích, rồi tạo liên kết với href=\"#id\"",
      "Một bước: chỉ cần thêm href=\"#vị_trí\" vào thẻ <a> là trình duyệt tự tìm vị trí",
      "Ba bước: tạo id, tạo liên kết, rồi thêm thuộc tính target để chỉ định trang đích",
      "Hai bước: tạo thẻ <anchor> tại vị trí đích, rồi liên kết tới thẻ đó bằng href",
    ],
    answer: 0,
    explain:
      "Để tạo liên kết tới vị trí trong cùng trang, cần hai bước: Bước 1 — tạo phần tử HTML có thuộc tính id tại vị trí cần liên kết đến (id phải là tên duy nhất trong toàn trang); Bước 2 — tạo liên kết với href=\"#mã_định_danh\" trỏ đến id đó.",
  },
  {
    id: "b10-10",
    q: "Thuộc tính id trong HTML có yêu cầu gì?",
    options: [
      "Phải là tên duy nhất, chỉ xuất hiện duy nhất một lần trong toàn bộ trang web",
      "Có thể dùng lại nhiều lần trong cùng trang, miễn là không có hai thẻ cùng loại dùng chung một id",
      "Chỉ được đặt cho thẻ <table> và <h1>, không được phép đặt cho các thẻ HTML khác trong trang",
      "Phải bắt đầu bằng ký tự # để trình duyệt web nhận ra đây là mã định danh đoạn trong trang",
    ],
    answer: 0,
    explain:
      "Thuộc tính id cần được đặt tên duy nhất — chỉ xuất hiện duy nhất một lần trong toàn bộ trang web — và được gọi là mã định danh đoạn. Khi tạo liên kết tới id này, ta dùng href=\"#tên_id\" (thêm dấu # trước tên id).",
  },
  {
    id: "b10-11",
    q: "Đoạn mã nào sau đây đúng để tạo liên kết dẫn tới phần có id=\"Thong_tin\" trong cùng trang?",
    options: [
      '<a href="#Thong_tin">Thông tin chi tiết</a>',
      '<a href="Thong_tin">Thông tin chi tiết</a>',
      '<a href="id:Thong_tin">Thông tin chi tiết</a>',
      '<a id="#Thong_tin">Thông tin chi tiết</a>',
    ],
    answer: 0,
    explain:
      "Để liên kết tới phần tử có id=\"Thong_tin\" trong cùng trang, ta thiết lập href=\"#Thong_tin\" — thêm dấu \"#\" trước tên id. Nếu bỏ dấu \"#\", trình duyệt hiểu đây là tên tệp cần liên kết tới, không phải vị trí trong trang.",
  },
  {
    id: "b10-12",
    q: "Để hiển thị một hình ảnh trong trang web HTML, ta dùng thẻ nào?",
    options: [
      '<img src="đường_dẫn_tới_tệp_ảnh">',
      '<image src="đường_dẫn_tới_tệp_ảnh">',
      '<photo href="đường_dẫn_tới_tệp_ảnh">',
      '<picture path="đường_dẫn_tới_tệp_ảnh">',
    ],
    answer: 0,
    explain:
      "Để tạo liên kết tới hình ảnh, trước tiên cần hiển thị ảnh trong trang web bằng thẻ <img src=\"đường dẫn tới tệp tin ảnh\">. Đường dẫn trong thuộc tính src cũng sử dụng đường dẫn tuyệt đối hoặc tương đối như trong thuộc tính href.",
  },
  {
    id: "b10-13",
    q: "Để tạo liên kết cho một hình ảnh (nhấn vào ảnh thì chuyển sang trang khác), ta viết mã HTML như thế nào?",
    options: [
      'Đặt thẻ <img src="..."> bên trong cặp thẻ <a href="...">…</a>',
      'Đặt thẻ <a href="..."> bên trong thuộc tính src của thẻ <img>',
      'Thêm thuộc tính href trực tiếp vào thẻ <img>, ví dụ <img href="...">',
      'Đặt thẻ <img> và thẻ <a> cạnh nhau trong cùng thẻ <p>, không cần lồng nhau',
    ],
    answer: 0,
    explain:
      "Để tạo liên kết cho hình ảnh, ta đặt thẻ <img> bên trong cặp thẻ <a>: <a href=\"thong_tin.html\"><img src=\"images/sun.png\"></a>. Khi đó, nhấn vào hình ảnh sẽ chuyển tới trang được chỉ định trong href.",
  },
  {
    id: "b10-14",
    q: "Đường dẫn nào sau đây là đường dẫn tuyệt đối?",
    options: [
      "https://hanhtrangso.nxbgd.vn/sach-dien-tu?book_active=0",
      "html/cach_tao_lien_ket.html — chỉ có tên thư mục và tên tệp, không có giao thức",
      "bai_tap/bai_tap_1.html — chỉ có tên thư mục con và tên tệp, không có giao thức",
      "../index.html — dùng dấu ../ để lên thư mục cha, không có giao thức và tên miền",
    ],
    answer: 0,
    explain:
      "Đường dẫn tuyệt đối có đầy đủ giao thức (https://), tên miền (hanhtrangso.nxbgd.vn) và đường dẫn chi tiết. Ba lựa chọn còn lại đều là đường dẫn tương đối: chỉ có tên tệp hoặc tên thư mục mà không có giao thức và tên miền.",
  },
  {
    id: "b10-15",
    q: "Siêu liên kết (hyperlink) được định nghĩa là gì?",
    options: [
      "Một tham chiếu để liên kết tới siêu văn bản khác, người dùng truy cập bằng cách nháy chuột vào vị trí đặt liên kết",
      "Một loại văn bản đặc biệt chứa nhiều hình ảnh, âm thanh và video nhúng trực tiếp vào trong nội dung trang web",
      "Một giao thức mạng máy tính được dùng để truyền tải dữ liệu từ máy chủ web tới trình duyệt của người dùng",
      "Một thư mục đặc biệt được lưu trên máy chủ dùng để chứa toàn bộ các tệp và tài nguyên của một website",
    ],
    answer: 0,
    explain:
      "Siêu liên kết (còn gọi tắt là liên kết) là một tham chiếu để liên kết tới siêu văn bản khác. Người dùng có thể dễ dàng truy cập đến văn bản liên kết bằng cách nháy chuột vào vị trí đặt liên kết trong văn bản ban đầu.",
  },
  {
    id: "b10-16",
    q: "Trong website có thư mục web/ chứa index.html và bai_tap/ chứa bai_tap_1.html. Bên trong bai_tap/ còn có on_tap/ chứa bai_tap_on_tap.html. Để liên kết từ bai_tap_on_tap.html về index.html, ta viết href như thế nào?",
    options: [
      'href="../../index.html"',
      'href="../index.html"',
      'href="index.html"',
      'href="/index.html"',
    ],
    answer: 0,
    explain:
      "Tệp bai_tap_on_tap.html nằm trong on_tap/ (trong bai_tap/ trong web/). Để về web/ phải lên 2 cấp: \"../\" đưa về bai_tap/, \"../../\" đưa về web/. Vì vậy href=\"../../index.html\" là đúng. Số cụm \"../\" tương ứng với số mức quay trở lại thư mục ở mức trên.",
  },
];

export default questions;
