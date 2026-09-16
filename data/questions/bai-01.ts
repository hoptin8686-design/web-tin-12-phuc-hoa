import type { Question } from "@/lib/types";

// Bài 1. Làm quen với Trí tuệ nhân tạo (SGK trang 5-8)
// 1. Khái niệm về AI: phép thử Turing, Hội thảo Dartmouth, định nghĩa AI,
//    năm đặc trưng cơ bản, AI khác tự động hoá, phân loại AI hẹp/tổng quát.
// 2. Một số ứng dụng của AI: hệ chuyên gia MYCIN, Robot Asimo, Google dịch,
//    nhận dạng khuôn mặt, nhận dạng chữ viết tay, trợ lí ảo.
const questions: Question[] = [
  {
    id: "b1-01",
    q: "Theo cách hiểu thông thường được nêu trong bài, Trí tuệ nhân tạo (AI) là gì?",
    options: [
      "Khả năng của máy tính làm những công việc mang tính trí tuệ của con người",
      "Khả năng của máy tính lưu trữ khối lượng dữ liệu rất lớn và lâu dài",
      "Khả năng của máy tính thực hiện phép tính số học với tốc độ rất cao",
      "Khả năng của máy tính kết nối và trao đổi dữ liệu qua mạng Internet",
    ],
    answer: 0,
    explain:
      "AI là khả năng của máy tính làm được những công việc mang tính trí tuệ của con người như đọc chữ, hiểu tiếng nói, dịch thuật, lái xe, học và ra quyết định. Lưu trữ lớn, tính nhanh và kết nối mạng là thế mạnh chung của máy tính, có từ lâu trước khi có AI.",
  },
  {
    id: "b1-02",
    q: "Phép thử Turing do ai đưa ra, vào năm nào và nhằm mục đích gì?",
    options: [
      "Do Alan Turing đưa ra năm 1950, để đánh giá hành vi thông minh của máy",
      "Do các nhà khoa học ở Hội thảo Dartmouth đưa ra năm 1956 để phân loại AI",
      "Do Alan Turing đưa ra năm 1950, để đo tốc độ tính toán của máy tính điện tử",
      "Do hãng Honda đưa ra năm 1986 nhằm kiểm tra khả năng đi lại của robot",
    ],
    answer: 0,
    explain:
      "Năm 1950, Alan Turing đưa ra phép thử: nếu người chơi trò chuyện mà không nhận ra mình đang nói với máy tính thì máy đó được coi là vượt qua phép thử. Đây là bước đầu tiên có được cách đánh giá hành vi thông minh của máy, không phải để đo tốc độ hay phân loại AI.",
  },
  {
    id: "b1-03",
    q: "Sự kiện nào được coi là điểm mốc ghi nhận sự ra đời của thuật ngữ AI?",
    options: [
      "Hội thảo Dartmouth năm 1956 tại bang New Hampshire, Mỹ",
      "Phép thử Turing do nhà khoa học Alan Turing đưa ra năm 1950",
      "Hệ chuyên gia MYCIN phát triển tại Đại học Stanford năm 1972",
      "Robot Asimo của hãng Honda xuất hiện lần đầu vào năm 1986",
    ],
    answer: 0,
    explain:
      "Hội thảo Dartmouth năm 1956 quy tụ nhiều nhà khoa học máy tính hàng đầu với chủ đề phát triển máy tính có khả năng thực hiện tác vụ thông minh — đây là mốc ra đời thuật ngữ AI. Ba mốc còn lại đều có thật nhưng là các sự kiện khác trong lịch sử AI.",
  },
  {
    id: "b1-04",
    q: "Một số đặc trưng cơ bản của AI thường được nói tới nhiều nhất gồm những gì?",
    options: [
      "Khả năng học, suy luận, nhận thức, hiểu ngôn ngữ và giải quyết vấn đề",
      "Khả năng tính toán, lưu trữ, kết nối mạng và hiển thị hình ảnh sắc nét",
      "Khả năng chạy nhanh, không mắc lỗi, tiết kiệm điện và hoạt động bền bỉ",
      "Khả năng sao chép dữ liệu, nén tệp, mã hoá và truyền tin có bảo mật",
    ],
    answer: 0,
    explain:
      "Sách nêu năm đặc trưng: khả năng học, khả năng suy luận, khả năng nhận thức, khả năng hiểu ngôn ngữ và khả năng giải quyết vấn đề. Các phương án còn lại chỉ liệt kê thế mạnh kĩ thuật chung của máy tính, không phải đặc trưng trí tuệ.",
  },
  {
    id: "b1-05",
    q: "Hệ thống khuyến nghị trên YouTube học từ lịch sử xem để đề xuất video mới cho từng người. Đó là đặc trưng nào của AI?",
    options: [
      "Khả năng học — nắm bắt thông tin từ dữ liệu và điều chỉnh hành vi",
      "Khả năng nhận thức — cảm nhận môi trường qua các cảm biến đầu vào",
      "Khả năng hiểu ngôn ngữ — xử lí văn bản và tiếng nói của người dùng",
      "Khả năng giải quyết vấn đề — tìm cách xử lí các tình huống phức tạp",
    ],
    answer: 0,
    explain:
      "Hệ thống nhìn vào lịch sử xem của từng người rồi điều chỉnh danh sách đề xuất cho phù hợp — đó chính là nắm bắt thông tin từ dữ liệu và điều chỉnh hành vi, tức khả năng học. Ba phương án còn lại là ba đặc trưng khác của AI.",
  },
  {
    id: "b1-06",
    q: "Hệ thống chẩn đoán y tế dựa trên tri thức về triệu chứng và bệnh lí để đưa ra chẩn đoán. Đó là đặc trưng nào của AI?",
    options: [
      "Khả năng suy luận — vận dụng logic và tri thức để đưa ra kết luận",
      "Khả năng học — nắm bắt thông tin từ dữ liệu và điều chỉnh hành vi",
      "Khả năng nhận thức — cảm nhận môi trường qua các cảm biến đầu vào",
      "Khả năng hiểu ngôn ngữ — xử lí văn bản và tiếng nói của người dùng",
    ],
    answer: 0,
    explain:
      "Đi từ tri thức đã có (triệu chứng nào ứng với bệnh nào) để rút ra kết luận về tình trạng người bệnh chính là vận dụng logic và tri thức — khả năng suy luận. Hệ thống ở đây dùng tri thức sẵn có chứ không phải đang học thêm từ dữ liệu mới.",
  },
  {
    id: "b1-07",
    q: "Máy tính điều khiển xe tự lái dùng cảm biến radar và camera để phát hiện xe xung quanh, chướng ngại vật, biển báo. Đó là đặc trưng nào của AI?",
    options: [
      "Khả năng nhận thức — cảm nhận môi trường qua các cảm biến đầu vào",
      "Khả năng học — nắm bắt thông tin từ dữ liệu và điều chỉnh hành vi",
      "Khả năng suy luận — vận dụng logic và tri thức để đưa ra kết luận",
      "Khả năng hiểu ngôn ngữ — xử lí văn bản và tiếng nói của người dùng",
    ],
    answer: 0,
    explain:
      "Nhận thức là khả năng cảm nhận và hiểu biết môi trường xung quanh thông qua cảm biến và dữ liệu đầu vào. Xe tự lái phải \"thấy\" được cảnh vật quanh mình trước đã, rồi mới tới bước suy luận để quyết định phanh hay rẽ.",
  },
  {
    id: "b1-08",
    q: "Máy tìm kiếm như Google, Bing hiểu được yêu cầu tra cứu nhập vào bằng văn bản hay bằng tiếng nói. Đó là đặc trưng nào của AI?",
    options: [
      "Khả năng hiểu ngôn ngữ — xử lí văn bản và tiếng nói của người dùng",
      "Khả năng nhận thức — cảm nhận môi trường qua các cảm biến đầu vào",
      "Khả năng học — nắm bắt thông tin từ dữ liệu và điều chỉnh hành vi",
      "Khả năng suy luận — vận dụng logic và tri thức để đưa ra kết luận",
    ],
    answer: 0,
    explain:
      "Hiểu ngôn ngữ là hiểu và xử lí ngôn ngữ tự nhiên của con người, bao gồm cả văn bản lẫn tiếng nói. Người dùng gõ hay nói một câu bình thường, máy vẫn nắm được ý — đó là đặc trưng này.",
  },
  {
    id: "b1-09",
    q: "Hệ thống dự báo thời tiết dùng mô hình dựa trên dữ liệu thời tiết trước đây để đưa ra bản tin dự báo. Đó là đặc trưng nào của AI?",
    options: [
      "Khả năng giải quyết vấn đề — tìm cách xử lí các tình huống phức tạp",
      "Khả năng hiểu ngôn ngữ — xử lí văn bản và tiếng nói của người dùng",
      "Khả năng nhận thức — cảm nhận môi trường qua các cảm biến đầu vào",
      "Khả năng học — nắm bắt thông tin từ dữ liệu và điều chỉnh hành vi",
    ],
    answer: 0,
    explain:
      "Giải quyết vấn đề là tìm ra cách xử lí các tình huống phức tạp dựa trên thông tin và tri thức. Dự báo thời tiết là bài toán nhiều yếu tố đan xen, hệ thống phải tổng hợp tất cả để đưa ra bản tin — đúng đặc trưng này.",
  },
  {
    id: "b1-10",
    q: "Trường hợp nào sau đây KHÔNG được coi là một ứng dụng của AI?",
    options: [
      "Ấm đun nước tự ngắt điện khi nước đã sôi tới nhiệt độ đặt sẵn",
      "Máy tìm kiếm hiểu yêu cầu tra cứu người dùng đưa vào bằng tiếng nói",
      "Phần mềm nhận dạng khuôn mặt để mở khoá màn hình chiếc điện thoại",
      "Ứng dụng dịch tự động một trang web tiếng Anh sang tiếng Việt",
    ],
    answer: 0,
    explain:
      "Ấm đun nước ngắt điện theo một ngưỡng nhiệt độ cố định — đó là tự động hoá đơn giản, không có đặc trưng trí tuệ nào. Cửa siêu thị tự mở hay guồng nước ở vùng quê cũng vậy. Ba trường hợp còn lại đều cần hiểu ngôn ngữ hoặc nhận dạng, tức là AI.",
  },
  {
    id: "b1-11",
    q: "Vì sao các dây chuyền lắp ráp, robot cơ giới hoá trong nhà máy không được coi là hệ thống có ứng dụng AI?",
    options: [
      "Vì chúng chỉ thực hiện lặp đi lặp lại một vài thao tác cố định, đơn điệu",
      "Vì chúng hoạt động chậm hơn con người nên chưa đạt mức được gọi là AI",
      "Vì chúng chỉ được dùng trong nhà máy chứ không phục vụ đời sống hằng ngày",
      "Vì chúng chưa được kết nối Internet để tải dữ liệu huấn luyện mới về máy",
    ],
    answer: 0,
    explain:
      "Đây chính là ranh giới giữa AI và tự động hoá: hệ thống tự động hoá làm lặp lại vài thao tác cố định, dù đạt hiệu suất rất cao vẫn không có đặc trưng trí tuệ nào. Tốc độ, nơi sử dụng hay việc có nối mạng đều không phải tiêu chí phân biệt.",
  },
  {
    id: "b1-12",
    q: "Trí tuệ nhân tạo hẹp (còn gọi là Trí tuệ nhân tạo yếu) là loại AI như thế nào?",
    options: [
      "Loại AI được thiết kế để thực hiện một nhiệm vụ cụ thể đã xác định",
      "Loại AI có khả năng tự học, tự thích nghi và làm được nhiều công việc",
      "Loại AI chạy được trên thiết bị bộ nhớ nhỏ như chiếc điện thoại di động",
      "Loại AI mới đạt độ chính xác thấp nên chưa đưa vào dùng trong thực tế",
    ],
    answer: 0,
    explain:
      "AI hẹp (AI yếu) chỉ làm một nhiệm vụ cụ thể: chương trình chơi cờ, nhận dạng khuôn mặt, dự báo thời tiết. \"Hẹp\" nói về phạm vi nhiệm vụ, không phải kích thước thiết bị hay độ chính xác. Phương án thứ hai lại chính là mô tả của AI tổng quát.",
  },
  {
    id: "b1-13",
    q: "Trí tuệ nhân tạo tổng quát (còn gọi là Trí tuệ nhân tạo mạnh) có đặc điểm gì?",
    options: [
      "Có khả năng tự học, tự thích nghi, làm nhiều việc giống như con người",
      "Có khả năng thực hiện thật nhanh một nhiệm vụ cụ thể đã được xác định",
      "Có khả năng hoạt động mà không cần tới bất kì dữ liệu huấn luyện nào",
      "Có khả năng chạy đồng thời trên nhiều máy tính trong cùng một mạng",
    ],
    answer: 0,
    explain:
      "AI tổng quát (AI mạnh) tự học, tự thích nghi và thực hiện được nhiều công việc giống con người. Đây đang là mục tiêu dài hạn của các nghiên cứu về AI, thực tế hiện vẫn chưa đạt được. Phương án thứ hai là mô tả của AI hẹp.",
  },
  {
    id: "b1-14",
    q: "Hệ chuyên gia MYCIN được giới thiệu trong bài là ứng dụng AI trong lĩnh vực nào?",
    options: [
      "Y học — đưa ra danh sách vi khuẩn nghi ngờ và đề xuất dùng kháng sinh",
      "Giáo dục — xây dựng nền tảng học tập cá nhân hoá cho từng học sinh",
      "Giao thông — điều khiển phương tiện tự lái và định tuyến vận tải",
      "Tài chính — phân tích dữ liệu để phát hiện và ngăn chặn gian lận",
    ],
    answer: 0,
    explain:
      "MYCIN được phát triển tại Đại học Stanford từ năm 1972, cơ sở tri thức gồm khoảng 600 luật suy diễn dạng \"nếu có các triệu chứng A1, A2… thì có kết luận B\". Từ câu trả lời có/không của người dùng, MYCIN chỉ ra vi khuẩn nghi ngờ và liều kháng sinh thích hợp.",
  },
  {
    id: "b1-15",
    q: "Robot Asimo của hãng Honda được nêu trong bài là ví dụ tiêu biểu cho điều gì?",
    options: [
      "Robot hình người tích hợp nhiều ứng dụng AI: đi lại, nhìn, nghe, nói",
      "Robot công nghiệp chuyên lắp ráp linh kiện trên dây chuyền sản xuất",
      "Robot dò tìm và xử lí vật liệu nguy hiểm thay cho con người tại chỗ",
      "Robot phẫu thuật hỗ trợ bác sĩ thao tác thật chính xác trong phòng mổ",
    ],
    answer: 0,
    explain:
      "Asimo xuất hiện năm 1986, là robot hình người đầu tiên trên thế giới tích hợp một loạt ứng dụng AI: tự di chuyển bằng hai chân, nhận dạng hình ảnh (thị giác máy), nhận dạng tiếng nói và chào hỏi bằng ngôn ngữ tự nhiên.",
  },
  {
    id: "b1-16",
    q: "Ứng dụng nào sau đây thể hiện khả năng nhận dạng chữ viết tay của AI?",
    options: [
      "Chuyển ảnh chụp chữ viết tay thành dữ liệu văn bản máy xử lí được",
      "Chuyển một đoạn văn bản tiếng Anh trên trang web sang tiếng Việt",
      "Xác định danh tính một người dựa trên hình ảnh khuôn mặt của họ",
      "Trò chuyện và mở nhạc theo yêu cầu bằng chính tiếng nói người dùng",
    ],
    answer: 0,
    explain:
      "Nhận dạng chữ viết tay biến hình ảnh chữ viết thành văn bản số hoá, nay dùng rộng rãi khi xử lí hoá đơn, nhập liệu tự động và xác minh chữ kí điện tử. Ba phương án còn lại lần lượt là Google dịch, nhận dạng khuôn mặt và trợ lí ảo.",
  },
];

export default questions;
