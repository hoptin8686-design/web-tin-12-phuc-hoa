import type { Question } from "@/lib/types";

// Bài 28. Thực hành tổng hợp — Google Sites (SGK trang 151-155)
const questions: Question[] = [
  {
    id: "b28-01",
    q: "Theo yêu cầu về Nội dung của sản phẩm website (phần Khái quát nhiệm vụ và yêu cầu), website hoàn chỉnh cần bao gồm các tư liệu đa phương tiện với ít nhất bao nhiêu bài viết ngắn gọn?",
    options: ["3 đến 4 bài viết", "Chỉ cần đúng 1 bài viết", "Ít nhất 10 bài viết", "Không giới hạn số bài viết"],
    answer: 0,
    explain: "SGK nêu yêu cầu về Nội dung: bao gồm các tư liệu đa phương tiện với ít nhất 3 đến 4 bài viết ngắn gọn.",
  },
  {
    id: "b28-02",
    q: "Theo phần \"Yêu cầu khác\", tất cả các trang web trong sản phẩm phải có đặc điểm gì?",
    options: [
      "Đều có dữ liệu đa phương tiện, không phải trang văn bản thuần chữ",
      "Đều chỉ chứa duy nhất văn bản thuần chữ, không được phép có hình ảnh",
      "Đều phải có đúng một biểu mẫu và không được có bất kì liên kết nào",
      "Đều phải sử dụng cùng một màu nền duy nhất cho toàn bộ website",
    ],
    answer: 0,
    explain: "SGK nêu: tất cả các trang web đều có dữ liệu đa phương tiện, không phải trang văn bản thuần chữ.",
  },
  {
    id: "b28-03",
    q: "Theo hướng dẫn Nhiệm vụ 1 (Lựa chọn chủ đề), có thể thực hiện sản phẩm theo hình thức nào?",
    options: [
      "Làm việc cá nhân hoặc làm việc nhóm, nhóm không quá 3 người",
      "Bắt buộc làm việc cá nhân, tuyệt đối không được lập nhóm",
      "Bắt buộc làm việc theo nhóm cố định 5 người do giáo viên chỉ định",
      "Làm việc theo cả lớp, cả lớp cùng chỉnh sửa chung một trang web duy nhất",
    ],
    answer: 0,
    explain: "SGK hướng dẫn: có thể làm việc cá nhân hoặc làm việc nhóm (không quá 3 người).",
  },
  {
    id: "b28-04",
    q: "Theo SGK, khi lựa chọn chủ đề của website, cần lưu ý điều gì?",
    options: [
      "Chủ đề không nên quá rộng, đối tượng hạn chế, có thể chuẩn bị tư liệu trong khoảng 3 tiết thực hành",
      "Chủ đề phải thật rộng để bao quát được nhiều lĩnh vực khác nhau trong cùng một website",
      "Chủ đề bắt buộc phải liên quan tới lịch sử thế giới, không được chọn chủ đề gần gũi đời sống",
      "Chủ đề phải được Bộ Giáo dục và Đào tạo phê duyệt trước khi bắt đầu thực hành",
    ],
    answer: 0,
    explain:
      "SGK nêu: chọn chủ đề của website không nên quá rộng, đối tượng người dùng cũng nên hạn chế, những yêu cầu vừa phải, có thể nhanh chóng chuẩn bị tư liệu và thực hiện trong khoảng thời gian 3 tiết thực hành trên lớp.",
  },
  {
    id: "b28-05",
    q: "Ở ví dụ Nhiệm vụ 2 (website giới thiệu Địa lí Việt Nam), dàn ý nội dung được SGK đề xuất gồm mấy phần chính?",
    options: [
      "3 phần: địa lí tự nhiên, địa lí kinh tế - xã hội, và câu hỏi trắc nghiệm kiểm tra hiểu biết",
      "2 phần: chỉ có địa lí tự nhiên và địa lí kinh tế - xã hội, không có phần trắc nghiệm",
      "5 phần, tương ứng với 5 vùng kinh tế trọng điểm của cả nước theo quy hoạch",
      "1 phần duy nhất, gộp chung toàn bộ nội dung tự nhiên và kinh tế - xã hội",
    ],
    answer: 0,
    explain:
      "SGK nêu: dàn ý nội dung có hai phần nội dung là địa lí tự nhiên và địa lí kinh tế – xã hội; phần thứ ba là các câu hỏi trắc nghiệm kiểm tra hiểu biết địa lí của người dùng.",
  },
  {
    id: "b28-06",
    q: "Ở Bước 1, Nhiệm vụ 3, muốn tạo các trang Tự nhiên, Kinh tế – Xã hội, Trắc nghiệm CÙNG CẤP với Trang chủ (không phải là trang con của Trang chủ), cần thực hiện thao tác nào?",
    options: [
      "Trong bảng chọn Trang, nháy vào dấu cộng (+) để thêm Trang mới, rồi nhập tên và chọn Xong",
      "Trong bảng chọn Trang, nháy dấu ba chấm cạnh Trang chủ rồi chọn Thêm trang con như ở Bài 26",
      "Trong bảng chọn Chèn, nháy vào Hộp văn bản rồi gõ trực tiếp tên các trang mới cần tạo",
      "Trong bảng chọn Giao diện, chọn mẫu Đơn giản để tự động sinh ra các trang mới cùng cấp",
    ],
    answer: 0,
    explain:
      "SGK phân biệt rõ: cách tạo trang CON (Bài 26) khác với cách tạo trang mới CÙNG CẤP với Trang chủ ở bài này — trong bảng chọn Trang, nháy vào dấu cộng (+) để thêm Trang mới, nhập tên trang mới rồi chọn nút lệnh Xong (Hình 28.2).",
  },
  {
    id: "b28-07",
    q: "Theo Bước 2 (Sử dụng các mẫu giao diện có sẵn), mẫu giao diện của Google Sites là tập hợp các quy định về những gì?",
    options: [
      "Bảng màu, phông chữ, thiết kế đầu trang",
      "Chỉ riêng số lượng trang con tối đa được phép tạo trong website",
      "Chỉ riêng dung lượng lưu trữ tối đa cho phép trên Google Drive",
      "Chỉ riêng danh sách các tài khoản Google được phép truy cập chỉnh sửa",
    ],
    answer: 0,
    explain: "SGK nêu: mẫu giao diện là một tập hợp các quy định về bảng màu, phông chữ, thiết kế đầu trang,...",
  },
  {
    id: "b28-08",
    q: "Theo SGK, mỗi mẫu giao diện có sẵn của Google Sites có bảng màu gồm mấy màu, và có bao nhiêu màu có thể tự điều chỉnh?",
    options: [
      "3 màu, trong đó 2 màu cố định (tông nhẹ) và 1 màu (tông đậm) có thể điều chỉnh",
      "5 màu, cả 5 màu đều cố định, hoàn toàn không thể tự điều chỉnh màu nào",
      "1 màu duy nhất, áp dụng chung cho mọi thành phần của trang web",
      "10 màu, tất cả đều có thể tự do điều chỉnh theo ý muốn của người dùng",
    ],
    answer: 0,
    explain: "SGK nêu: mỗi mẫu có định dạng cụ thể — bảng màu có 3 màu, trong đó 2 màu cố định (tông nhẹ) và 1 màu (tông đậm) có thể điều chỉnh; phông chữ với 3 phông và kiểu cố định.",
  },
  {
    id: "b28-09",
    q: "Bảng chọn Giao diện (Hình 28.4) gồm hai nhóm lựa chọn, đó là gì?",
    options: [
      "Nhóm để tự thiết kế mẫu hoặc tải mẫu có sẵn lên, và nhóm các mẫu có sẵn của Google Sites",
      "Nhóm dành cho máy tính và nhóm dành riêng cho điện thoại di động, không có nhóm nào khác",
      "Nhóm miễn phí và nhóm trả phí, người dùng phải trả tiền mới xem được nhóm thứ hai",
      "Nhóm cho trang chủ và nhóm cho trang con, mỗi nhóm áp dụng một mẫu khác nhau",
    ],
    answer: 0,
    explain:
      "SGK nêu: bảng chọn Giao diện gồm hai nhóm — nhóm thứ nhất có hai lựa chọn để người dùng tự thiết kế mẫu hoặc tải mẫu có sẵn lên; nhóm thứ hai là các mẫu có sẵn của Google Sites.",
  },
  {
    id: "b28-10",
    q: "Khi hiển thị màu của trang theo Kiểu 3, muốn điều chỉnh màu thứ ba của bảng màu, cần thực hiện kết hợp luân phiên hai thao tác nào?",
    options: [
      "Chọn điểm trên thanh chọn màu, và chọn điểm trên bảng chọn sắc thái màu, cho tới khi màu ưng ý",
      "Chỉ cần gõ trực tiếp mã màu dạng số vào một ô duy nhất, không cần thao tác nào khác",
      "Chỉ cần chọn lại toàn bộ mẫu giao diện khác, không thể chỉnh riêng một màu trong mẫu đang dùng",
      "Xoá hẳn mẫu giao diện hiện tại rồi thiết kế lại từ đầu bằng công cụ vẽ tự do",
    ],
    answer: 0,
    explain:
      "SGK hướng dẫn: nháy vào một điểm trên thanh chọn màu để thấy màu trang thay đổi cùng mã màu; nháy vào một điểm trên bảng chọn sắc thái màu cũng vậy; thực hiện kết hợp luân phiên hai bước này cho tới khi màu sắc hiển thị như mong muốn.",
  },
];

export default questions;
