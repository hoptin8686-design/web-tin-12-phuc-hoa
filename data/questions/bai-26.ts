import type { Question } from "@/lib/types";

// Bài 26. Liên kết và thanh điều hướng — Google Sites (SGK trang 144-146)
const questions: Question[] = [
  {
    id: "b26-01",
    q: "Vấn đề mở đầu bài học nêu ra: nếu văn bản giới thiệu một địa danh ở trang chủ quá dài thì gặp khó khăn gì, và SGK đưa ra giải pháp nào?",
    options: [
      "Khó đọc tiếp phần sau, dễ mất cân đối; giải pháp là tạo trang độc lập và dùng liên kết từ phần giới thiệu ở trang chủ",
      "Trang web sẽ không thể xuất bản lên Internet được nữa; giải pháp là xoá bớt một nửa nội dung bài viết",
      "Google Sites sẽ tự động từ chối lưu trang có văn bản dài; giải pháp là chia nhỏ mỗi câu thành một trang riêng",
      "Ảnh minh hoạ sẽ bị mất định dạng; giải pháp là chuyển toàn bộ văn bản giới thiệu thành hình ảnh chụp màn hình",
    ],
    answer: 0,
    explain:
      "SGK nêu: nếu nội dung văn bản giới thiệu quá dài, người dùng không dễ dàng đọc tiếp phần sau, đồng thời độ dài khác nhau giữa các bài viết cạnh nhau làm lộ khoảng trống, mất cân đối. Giải pháp là tạo ra các trang độc lập và dùng liên kết đến chúng từ trang chủ.",
  },
  {
    id: "b26-02",
    q: "Theo Hình 26.1, cụm từ \"Đọc tiếp\" ở cuối đoạn giới thiệu tóm tắt về Mù Cang Chải trên trang chủ có vai trò gì?",
    options: [
      "Được gắn liên kết (link) đến trang web có đầy đủ thông tin về địa danh Mù Cang Chải",
      "Chỉ là một dòng chữ trang trí, không có bất kì chức năng liên kết nào cả",
      "Dùng để xoá đoạn giới thiệu hiện tại và thay bằng một đoạn giới thiệu khác",
      "Dùng để đổi tên trang chủ hiện tại sang một tên gọi khác do người dùng chọn",
    ],
    answer: 0,
    explain:
      "SGK nêu: cụm từ Đọc tiếp được gắn liên kết đến trang web với đầy đủ thông tin về địa danh đó. Khi duyệt web, người dùng nháy chuột vào Đọc tiếp để mở trang có đầy đủ thông tin tương ứng.",
  },
  {
    id: "b26-03",
    q: "Theo SGK, \"trang con\" là gì?",
    options: [
      "Các trang web được mở từ bảng chọn của trang chủ",
      "Các trang web có dung lượng lưu trữ nhỏ hơn 1 MB trên Google Drive",
      "Các trang web chỉ hiển thị được trên điện thoại, không hiển thị được trên máy tính",
      "Các trang web do một học sinh khác trong lớp tạo ra và chia sẻ lại cho mình",
    ],
    answer: 0,
    explain: "SGK định nghĩa: các trang web được mở từ bảng chọn của trang chủ được gọi là trang con của trang chủ.",
  },
  {
    id: "b26-04",
    q: "Theo SGK, cấu trúc tổ chức các trang web (trang chủ, trang con, trang con của trang con,...) có thể được sắp xếp tương tự cấu trúc nào?",
    options: ["Cây thư mục", "Bảng tính Excel", "Hàng đợi tuần tự", "Danh bạ điện thoại"],
    answer: 0,
    explain:
      "SGK nêu: các trang con của trang chủ cũng có thể có các trang con của mình, như vậy các trang web có thể được tổ chức, sắp xếp theo cấu trúc tương tự cây thư mục.",
  },
  {
    id: "b26-05",
    q: "Ở Bước 1 (Tạo trang con), cần chọn bảng chọn nào trong khung bên phải cửa sổ thiết kế, rồi thực hiện thao tác gì?",
    options: [
      "Chọn bảng chọn Trang; nháy dấu ba chấm cạnh Trang chủ rồi chọn Thêm trang con",
      "Chọn bảng chọn Chèn; nháy biểu tượng Hộp văn bản rồi gõ tên trang con cần tạo",
      "Chọn bảng chọn Giao diện; nháy vào mục Bảng màu rồi chọn màu cho trang con",
      "Không cần chọn bảng chọn nào, chỉ cần nháy đúp chuột vào logo của trang chủ",
    ],
    answer: 0,
    explain:
      "SGK hướng dẫn: chọn bảng chọn Trang trong khung bên phải, nháy chuột vào dấu ba chấm cạnh Trang chủ và chọn Thêm trang con, sau đó nhập tên trang con và chọn Xong (Hình 26.3).",
  },
  {
    id: "b26-06",
    q: "Khi người dùng truy cập trang web bằng điện thoại hay máy tính bảng, Google Sites tự động điều chỉnh bảng chọn trên thanh điều hướng như thế nào?",
    options: [
      "Chuyển sang phía phải, ngay trước logo của trang, hiển thị dưới dạng biểu tượng ba gạch",
      "Ẩn hoàn toàn bảng chọn, người dùng phải gõ trực tiếp địa chỉ URL của từng trang con",
      "Phóng to toàn bộ bảng chọn ra giữa màn hình, che khuất mất phần nội dung chính",
      "Tự động xoá bớt một nửa số mục trong bảng chọn để tiết kiệm diện tích màn hình",
    ],
    answer: 0,
    explain:
      "SGK nêu: Google Sites tự động điều chỉnh giao diện khi truy cập bằng điện thoại hay máy tính bảng — bảng chọn trên thanh điều hướng tự động chuyển sang phía phải, ngay trước logo của trang, có dạng biểu tượng ba gạch.",
  },
  {
    id: "b26-07",
    q: "Muốn bảng chọn trên thanh điều hướng hiển thị dạng biểu tượng (giống như trên điện thoại) ngay cả khi xem trên máy tính, cần thực hiện dãy thao tác nào?",
    options: [
      "Cài đặt → Điều hướng → Phần tử xuất hiện nhiều nhất → Bên",
      "Chèn → Hình ảnh → Tải lên → Chọn biểu tượng ba gạch từ máy tính",
      "Trang → Thêm trang con → Nhập tên → Xong",
      "Giao diện → Bảng màu → Chọn màu bên → Áp dụng",
    ],
    answer: 0,
    explain:
      "SGK hướng dẫn (Hình 26.5): để hiển thị bảng chọn dạng biểu tượng giống trên điện thoại, chọn Cài đặt → Điều hướng → Phần tử xuất hiện nhiều nhất → Bên.",
  },
  {
    id: "b26-08",
    q: "Ở Bước 3 (Thêm nội dung cho các trang con), phần đầu của các trang con mới khởi tạo được Google Sites tự động tạo ra như thế nào?",
    options: [
      "Với hình nền của trang chủ và tiêu đề tương ứng với tên trang con vừa đặt",
      "Với hình nền hoàn toàn trống trơn màu trắng và không có bất kì tiêu đề nào",
      "Với hình nền ngẫu nhiên do hệ thống Google Sites tự chọn, khác trang chủ",
      "Với nội dung y hệt phần đầu trang chủ, kể cả logo, tên trang và tiêu đề",
    ],
    answer: 0,
    explain:
      "SGK nêu: các trang con đã được khởi tạo nhưng chưa có nội dung; phần đầu của các trang này được tạo tự động với hình nền trang chủ và tiêu đề tương ứng (ví dụ Tây Bắc – Đông Bắc hay Mù Cang Chải).",
  },
  {
    id: "b26-09",
    q: "Ở Bước 4 (Tạo liên kết trong bài giới thiệu), để gắn liên kết \"Đọc tiếp\" ở trang chủ tới trang con Mù Cang Chải, cần thực hiện thao tác nào?",
    options: [
      "Nháy biểu tượng chèn đường liên kết, chọn trang Mù Cang Chải, nhập \"Đọc tiếp\" vào ô Văn bản, nháy Áp dụng",
      "Sao chép toàn bộ nội dung trang Mù Cang Chải rồi dán trực tiếp vào cuối đoạn giới thiệu ở trang chủ",
      "Xoá trang Mù Cang Chải rồi viết lại nguyên văn nội dung đó trực tiếp trên trang chủ",
      "Đổi tên trang chủ thành Mù Cang Chải để hai trang tự động dùng chung một địa chỉ URL",
    ],
    answer: 0,
    explain:
      "SGK hướng dẫn: nháy chuột ở cuối đoạn giới thiệu, nháy biểu tượng chèn đường liên kết, chọn đường liên kết là trang Mù Cang Chải, nhập Đọc tiếp vào ô Văn bản rồi nháy chọn Áp dụng (Hình 26.6).",
  },
  {
    id: "b26-10",
    q: "Theo phần Luyện tập của Bài 26, cần tạo trang con nào của trang chủ, và trang con nào của trang đó?",
    options: [
      "Tạo trang con Tây Nguyên của trang chủ, và trang con Bản Đôn của trang Tây Nguyên",
      "Tạo trang con Miền Trung của trang chủ, và trang con Đà Lạt của trang Miền Trung",
      "Tạo trang con Ca khúc của trang chủ, và trang con Nhạc sĩ của trang Ca khúc",
      "Tạo trang con Liên hệ của trang chủ, và trang con Bản đồ của trang Liên hệ",
    ],
    answer: 0,
    explain:
      "SGK nêu ở phần Luyện tập: hãy tạo trang con Tây Nguyên của trang chủ và tạo trang con Bản Đôn của trang Tây Nguyên, sau đó viết vài dòng giới thiệu ngắn về Bản Đôn ở trang chủ và tạo liên kết đến trang Bản Đôn.",
  },
];

export default questions;
