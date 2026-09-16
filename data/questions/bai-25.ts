import type { Question } from "@/lib/types";

// Bài 25. Xây dựng phần thân và chân trang web — Google Sites (SGK trang 139-143)
const questions: Question[] = [
  {
    id: "b25-01",
    q: "Ở khung bên phải cửa sổ thiết kế trang web trên Google Sites, có ba bảng chọn nào (Hình 25.1)?",
    options: ["Chèn, Trang và Giao diện", "Tệp, Sửa và Xem", "Đầu trang, Thân trang và Chân trang", "Chèn, Định dạng và Công cụ"],
    answer: 0,
    explain:
      "SGK nêu: có ba bảng chọn Chèn, Trang và Giao diện ở khung bên phải cửa sổ thiết kế trang web. Bài 25 chỉ làm việc với bảng chọn Chèn.",
  },
  {
    id: "b25-02",
    q: "Bảng chọn Chèn trong giao diện tạo phần thân trang web có mấy nhóm lệnh?",
    options: ["3 nhóm lệnh", "2 nhóm lệnh", "5 nhóm lệnh", "1 nhóm lệnh duy nhất"],
    answer: 0,
    explain:
      "SGK nêu bảng chọn Chèn có ba nhóm lệnh: nhóm đầu tiên (Hộp văn bản, Hình ảnh, Nhúng, Drive), nhóm thứ hai (Các thành phần nội dung), nhóm thứ ba (Các đối tượng khác).",
  },
  {
    id: "b25-03",
    q: "Trong nhóm lệnh đầu tiên của bảng chọn Chèn, lệnh Drive dùng để làm gì?",
    options: [
      "Chèn thông tin từ Google Drive: văn bản, hình ảnh, video, tư liệu của Google",
      "Xoá toàn bộ nội dung đã chèn trên trang web và khôi phục lại trang trắng ban đầu",
      "Đổi tên tệp lưu trữ trang web đang chỉnh sửa sang một tên gợi nhớ khác",
      "Chèn video trực tiếp từ YouTube vào giữa phần thân trang đang thiết kế",
    ],
    answer: 0,
    explain:
      "SGK nêu: nếu muốn chèn thông tin từ Google Drive (văn bản, hình ảnh, video, các tư liệu khác được tạo bằng các ứng dụng của Google) thì nháy chuột vào Drive.",
  },
  {
    id: "b25-04",
    q: "Trong nhóm lệnh đầu tiên của bảng chọn Chèn, lệnh Nhúng dùng để làm gì?",
    options: [
      "Chèn các dữ liệu nhúng từ những ứng dụng Internet khác, ví dụ thời tiết, âm nhạc",
      "Chèn văn bản thuần tuý do người dùng tự gõ trực tiếp trên trang web đang soạn",
      "Sao chép một khối nội dung đã có sẵn sang một vị trí khác trong cùng trang web",
      "Xuất bản trang web ra Internet với một địa chỉ URL do Google hỗ trợ cấp phát",
    ],
    answer: 0,
    explain:
      "SGK nêu: nếu muốn chèn các dữ liệu nhúng từ các ứng dụng Internet khác như thời tiết, âm nhạc,... thì nháy chuột vào Nhúng.",
  },
  {
    id: "b25-05",
    q: "Nhóm lệnh thứ hai của bảng chọn Chèn, mang tên \"Các thành phần nội dung\", cho phép người dùng làm gì?",
    options: [
      "Tạo phần thân trang theo kiến trúc khối, với các mẫu bố cục được hỗ trợ sẵn",
      "Chỉ cho phép nhập văn bản thuần tuý, không hỗ trợ chèn thêm bất kì hình ảnh nào",
      "Chỉ dùng để đổi màu nền và phông chữ chung cho toàn bộ trang web đang thiết kế",
      "Chỉ dùng để thiết lập lại logo và favicon đã tạo ở phần đầu trang trước đó",
    ],
    answer: 0,
    explain:
      "SGK nêu: nhóm lệnh thứ hai (Các thành phần nội dung) cho phép Google Sites thực hiện tạo phần thân trang theo kiến trúc khối với các mẫu được hỗ trợ sẵn (Hình 25.1).",
  },
  {
    id: "b25-06",
    q: "Nhóm lệnh thứ ba của bảng chọn Chèn, mang tên \"Các đối tượng khác\", cho phép chèn những gì?",
    options: [
      "Khối văn bản thu gọn, mục lục, băng chuyển hình ảnh, bản đồ, video YouTube, liên kết",
      "Chỉ duy nhất các tệp âm thanh định dạng mp3 được tải lên từ máy tính cá nhân",
      "Chỉ duy nhất các biểu mẫu thu thập thông tin liên hệ của người truy cập trang",
      "Chỉ duy nhất mã nguồn HTML và CSS được viết tay để tuỳ biến giao diện trang",
    ],
    answer: 0,
    explain:
      "SGK nêu: nhóm lệnh thứ ba (Các đối tượng khác) cho phép chèn các đối tượng như khối văn bản có thể thu gọn, mục lục, băng chuyển hình ảnh, bản đồ, đoạn video từ YouTube, liên kết...",
  },
  {
    id: "b25-07",
    q: "Ở Nhiệm vụ 2 (Tạo phần thân trang web), sau khi thiết lập cấu trúc nội dung có hai khối, thao tác thêm ảnh cho mỗi khối được thực hiện như thế nào?",
    options: [
      "Nháy chuột vào biểu tượng dấu cộng (+) trong khối để thêm ảnh vào trang web",
      "Kéo thả trực tiếp một tệp ảnh bất kì từ màn hình máy tính vào giữa trang web",
      "Gõ đường dẫn URL của ảnh trực tiếp vào ô tiêu đề của khối nội dung tương ứng",
      "Chép ảnh vào bộ nhớ đệm (clipboard) rồi nhấn phím Enter để tự động dán ảnh vào",
    ],
    answer: 0,
    explain:
      "SGK hướng dẫn Bước 2: đối với mỗi khối, nháy chuột vào biểu tượng dấu cộng (+) để thêm ảnh vào trang web; bên dưới ảnh thêm tiêu đề và nội dung bài viết (Hình 25.2).",
  },
  {
    id: "b25-08",
    q: "Theo Nhiệm vụ 3, việc thêm bản đồ vào trang web thực chất là làm gì?",
    options: [
      "Nhúng ứng dụng bản đồ (ví dụ Google Maps) vào trang web",
      "Vẽ lại thủ công toàn bộ bản đồ bằng công cụ hình ảnh có sẵn của Google Sites",
      "Tải một tệp ảnh chụp màn hình bản đồ từ máy tính rồi chèn như một hình ảnh thường",
      "Liên kết trang web sang hẳn một trang bản đồ khác nằm ngoài website đang xây dựng",
    ],
    answer: 0,
    explain: "SGK nêu: việc thêm bản đồ vào trang web thực chất là nhúng ứng dụng bản đồ vào trang web.",
  },
  {
    id: "b25-09",
    q: "Theo SGK, nếu muốn nhúng Google Maps vào trang web, cách nhanh nhất là gì?",
    options: [
      "Chọn Bản đồ ở nhóm lệnh thứ ba của bảng chọn Chèn, thay vì dùng lệnh Nhúng tổng quát",
      "Bắt buộc phải dùng lệnh Nhúng ở nhóm lệnh đầu tiên rồi tự gõ mã nhúng của Google Maps",
      "Không thể nhúng Google Maps vào Google Sites bằng bất kì cách nào theo hướng dẫn SGK",
      "Phải tải ứng dụng Google Maps riêng về máy tính rồi đồng bộ hoá với Google Sites",
    ],
    answer: 0,
    explain:
      "SGK nêu: có thể dùng lệnh Nhúng trong bảng chọn Chèn để chèn bản đồ. Tuy nhiên, nếu muốn nhúng Google Maps thì chỉ cần chọn Bản đồ (Hình 25.3) ở nhóm thứ ba của bảng chọn Chèn.",
  },
  {
    id: "b25-10",
    q: "Trong cửa sổ Chọn bản đồ, làm thế nào để xác định địa điểm sẽ hiển thị trên bản đồ được chèn?",
    options: [
      "Nhập tên địa điểm vào ô Nhập vị trí, hoặc chọn Đặt dấu vị trí rồi nháy chuột trực tiếp trên bản đồ",
      "Chỉ có thể gõ chính xác toạ độ kinh độ, vĩ độ dạng số, không hỗ trợ nhập tên địa danh",
      "Địa điểm được xác định tự động theo vị trí hiện tại của máy tính, không thể thay đổi được",
      "Phải liên hệ trực tiếp với bộ phận hỗ trợ của Google để được cấp quyền chọn địa điểm",
    ],
    answer: 0,
    explain:
      "SGK hướng dẫn: trong cửa sổ Chọn bản đồ, nhập tên vào ô Nhập vị trí rồi xác định một địa điểm, hoặc chọn Đặt dấu vị trí để xác định địa điểm bằng cách nháy chuột (Hình 25.4).",
  },
  {
    id: "b25-11",
    q: "Sau khi đã có một địa điểm (dấu ghim) trên bản đồ trong cửa sổ Chọn bản đồ, cần nháy nút nào để thêm bản đồ vào trang web?",
    options: ["Nút Chọn", "Nút Huỷ", "Nút Công bố", "Nút Xoá"],
    answer: 0,
    explain: "SGK nêu: sau khi có một địa điểm trên bản đồ (có dấu ghim), nháy chuột vào nút Chọn để thêm bản đồ vào trang web (Hình 25.4).",
  },
  {
    id: "b25-12",
    q: "Muốn thay đổi kích thước một đối tượng đã chèn vào trang web (ví dụ bản đồ, hình ảnh), theo SGK cần làm gì?",
    options: [
      "Chọn đối tượng đó rồi kéo thả chuột tại các nút trên khung bao quanh đối tượng",
      "Nháy đúp chuột vào đối tượng, gõ trực tiếp số điểm ảnh mới vào ô hiện ra",
      "Xoá hẳn đối tượng cũ rồi chèn lại một đối tượng mới có kích thước như ý muốn",
      "Kích thước đối tượng là cố định, Google Sites không hỗ trợ thay đổi kích thước",
    ],
    answer: 0,
    explain:
      "SGK nêu: có thể thay đổi kích thước của bản đồ (và các đối tượng khác) bằng cách chọn đối tượng rồi kéo thả chuột tại các nút trên khung để được kích thước mong muốn (Hình 25.5).",
  },
  {
    id: "b25-13",
    q: "Ở Nhiệm vụ 4 (Chỉnh sửa các đối tượng đã có), muốn sao chép hay xoá một đối tượng đã chọn, cần làm gì theo Hình 25.7?",
    options: [
      "Chọn đối tượng, quan sát bảng chọn tắt và nháy nút sao chép hoặc xoá tương ứng",
      "Nhấn giữ phím Ctrl rồi gõ chữ cái đầu tiên của tên đối tượng để mở hộp thoại sao chép",
      "Kéo đối tượng ra ngoài phạm vi trang web đang chỉnh sửa để tự động xoá đối tượng đó",
      "Không có cách nào để sao chép hoặc xoá đối tượng đã chèn, chỉ có thể tạo đối tượng mới",
    ],
    answer: 0,
    explain:
      "SGK nêu: nếu muốn sao chép hay xoá một đối tượng, chọn đối tượng đó và quan sát bảng chọn tắt tương ứng, trong đó có các nút lệnh sao chép và xoá; nháy chuột vào nút lệnh tương ứng (Hình 25.7).",
  },
  {
    id: "b25-14",
    q: "Theo lưu ý ở Nhiệm vụ 4, chức năng nào cho phép huỷ bỏ một lệnh vừa thực hiện hoặc thực hiện lại một lệnh trước đó?",
    options: ["Undo (hoàn tác) và Redo (làm lại)", "Copy (sao chép) và Paste (dán)", "Save (lưu) và Load (tải lại)", "Cut (cắt) và Delete (xoá)"],
    answer: 0,
    explain:
      "SGK nêu: có thể huỷ bỏ một lệnh vừa thực hiện (undo) hay thực hiện lại một lệnh trước đó (redo), thể hiện bằng hai biểu tượng ở góc trên cửa sổ thiết kế (Hình 25.8).",
  },
  {
    id: "b25-15",
    q: "Theo Nhiệm vụ 5 (Thiết lập chân trang), nội dung phổ biến nhất được đưa vào phần chân trang là gì?",
    options: [
      "Tuyên bố về bản quyền và thông tin liên lạc như địa chỉ email, số điện thoại",
      "Toàn bộ nội dung chi tiết của phần thân trang được lặp lại thêm một lần nữa",
      "Danh sách đầy đủ tên của tất cả các thành viên đã từng truy cập trang web",
      "Mã nguồn HTML gốc của toàn bộ trang web, hiển thị công khai cho người xem",
    ],
    answer: 0,
    explain:
      "SGK nêu: nội dung phổ biến nhất đưa vào phần chân trang là tuyên bố về bản quyền, thông tin liên lạc như địa chỉ email, số điện thoại (Hình 25.9, 25.10) — ngoài ra có thể chèn liên kết đến mạng xã hội.",
  },
];

export default questions;
