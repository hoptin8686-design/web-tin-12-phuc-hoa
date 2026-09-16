import type { Question } from "@/lib/types";

// Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống (SGK trang 9-13)
// 1. AI và sự phát triển của một số lĩnh vực: hệ chuyên gia, y học và chăm sóc
//    sức khoẻ, giao thông vận tải, tài chính - ngân hàng, sản xuất, giáo dục.
// 2. AI và một vài cảnh báo: AI tạo sinh, ChatGPT, bốn nguy cơ (thất nghiệp,
//    quyền riêng tư, thiếu minh bạch, an ninh - an toàn), khía cạnh đạo đức.
const questions: Question[] = [
  {
    id: "b2-01",
    q: "Hệ chuyên gia được hiểu như thế nào?",
    options: [
      "Chương trình dựa trên luật suy diễn và tri thức của chuyên gia một lĩnh vực",
      "Chương trình chỉ dành riêng cho các chuyên gia đầu ngành được sử dụng",
      "Chương trình chạy trên máy tính cấu hình mạnh nhất của một cơ quan",
      "Chương trình lưu trữ hồ sơ nhân sự của các chuyên gia trong một ngành",
    ],
    answer: 0,
    explain:
      "Hệ chuyên gia, còn gọi là hệ thống dựa trên tri thức, mô phỏng khả năng ra quyết định của chuyên gia trong một lĩnh vực cụ thể. Nhờ Học máy, nhiều hệ chuyên gia nay còn tự học từ dữ liệu để hình thành luật và tri thức mới.",
  },
  {
    id: "b2-02",
    q: "Trong y học và chăm sóc sức khoẻ, AI được sử dụng để làm gì?",
    options: [
      "Làm nổi bật cấu trúc bất thường trong cơ thể, hỗ trợ chẩn đoán kịp thời",
      "Ghi hồ sơ bệnh án của người bệnh vào máy tính để thay cho sổ giấy",
      "In phiếu xét nghiệm rồi gửi kết quả cho người bệnh qua thư điện tử",
      "Sắp xếp lịch khám của các phòng theo thứ tự người bệnh đã đăng kí",
    ],
    answer: 0,
    explain:
      "AI cải thiện chất lượng hình ảnh y tế, làm nổi bật những cấu trúc bất thường bên trong cơ thể và hỗ trợ chẩn đoán, hướng điều trị chính xác, kịp thời. Phần mềm IBM Watson for Oncology được nêu là ví dụ góp phần nâng cao hiệu quả điều trị ung thư.",
  },
  {
    id: "b2-03",
    q: "Thành tựu nào trong giao thông vận tải gắn liền với sự phát triển của AI?",
    options: [
      "Ô tô tự lái, máy bay không người lái và quản lí giao thông thông minh",
      "Đèn tín hiệu giao thông đổi màu theo đúng chu kì đã cài đặt sẵn",
      "Máy bán vé tự động in vé cho khách sau khi nhận đủ tiền mặt",
      "Cân điện tử đặt ở trạm để đo tải trọng của xe khi đi ngang qua",
    ],
    answer: 0,
    explain:
      "AI được dùng để phát triển phương tiện tự lái, quản lí giao thông thông minh và định tuyến vận tải; ô tô tự lái hay máy bay không người lái sẽ không thể có nếu không có AI. Đèn tín hiệu theo chu kì, máy bán vé và cân điện tử chỉ là tự động hoá.",
  },
  {
    id: "b2-04",
    q: "Trong lĩnh vực tài chính, ngân hàng, AI mang lại lợi ích nào?",
    options: [
      "Phân tích dữ liệu để hỗ trợ quyết định đầu tư, phát hiện và ngăn gian lận",
      "Đếm và phân loại các tờ tiền theo mệnh giá khi khách tới gửi tiết kiệm",
      "In sao kê tài khoản của khách hàng theo từng tháng để gửi qua bưu điện",
      "Cộng dồn số dư các tài khoản trong chi nhánh vào cuối mỗi ngày làm việc",
    ],
    answer: 0,
    explain:
      "AI không chỉ tự động hoá việc cập nhật chứng từ, hoá đơn mà còn phân tích, xử lí dữ liệu để hỗ trợ quyết định đầu tư, phát hiện và ngăn chặn gian lận, nâng cao trải nghiệm khách hàng. Đếm tiền, in sao kê hay cộng số dư đều là thao tác cố định.",
  },
  {
    id: "b2-05",
    q: "Trong nông nghiệp, AI được sử dụng ở các trang trại thông minh để làm gì?",
    options: [
      "Theo dõi thời tiết, đất đai, dịch bệnh để tối ưu quy trình chăm sóc cây con",
      "Bơm nước lên ruộng bậc thang bằng máy bơm chạy dầu đặt ở đầu nguồn",
      "Cắt lúa và tuốt lấy hạt ngay trên cánh đồng bằng máy gặt đập liên hợp",
      "Mở van tưới nhỏ giọt cho vườn cây theo đúng giờ đã hẹn sẵn từ trước",
    ],
    answer: 0,
    explain:
      "Trang trại thông minh dùng AI theo dõi các yếu tố ảnh hưởng tới hiệu quả nuôi trồng — thời tiết, đất đai, sức đề kháng với dịch bệnh — để tối ưu quy trình chăm sóc, hợp lí hoá tưới tiêu, dự đoán mùa vụ và xác định thời điểm thu hoạch tối ưu.",
  },
  {
    id: "b2-06",
    q: "AI được ứng dụng trong giáo dục theo hướng nào?",
    options: [
      "Phát triển nền tảng học tập cá nhân hoá và trợ lí học tập ảo cho người học",
      "Trình chiếu bài giảng đã soạn sẵn lên màn hình lớn của phòng học bộ môn",
      "Lưu điểm kiểm tra của học sinh vào sổ điểm điện tử của nhà trường",
      "Gửi thông báo của nhà trường tới phụ huynh qua tin nhắn điện thoại",
    ],
    answer: 0,
    explain:
      "AI phát triển các nền tảng học trực tuyến thông minh: theo dõi tiến trình học, đề xuất nội dung phù hợp và phản hồi tức thì cho từng người học. Trợ lí học tập ảo còn trả lời câu hỏi, cung cấp hướng dẫn và tài liệu cho học sinh, giáo viên.",
  },
  {
    id: "b2-07",
    q: "Trí tuệ nhân tạo tạo sinh (Generative AI) là loại AI như thế nào?",
    options: [
      "Loại AI tập trung tạo ra dữ liệu, hình ảnh, văn bản, âm nhạc một cách tự động",
      "Loại AI chuyên phân loại dữ liệu có sẵn thành các nhóm theo từng chủ đề",
      "Loại AI chuyên điều khiển robot và các thiết bị cơ khí trong nhà máy",
      "Loại AI chuyên tìm kiếm và sắp xếp thông tin có sẵn trên mạng Internet",
    ],
    answer: 0,
    explain:
      "AI tạo sinh tập trung xây dựng thuật toán và mô hình tạo ra nội dung mới (hình ảnh, âm thanh, văn bản) một cách tự động, dựa trên các mẫu và thông tin học được từ dữ liệu huấn luyện. Nó được dùng nhiều trong nghệ thuật, giải trí, quảng cáo và trò chơi.",
  },
  {
    id: "b2-08",
    q: "ChatGPT được nêu trong bài là sản phẩm của tổ chức nào và thuộc loại hệ thống gì?",
    options: [
      "Của OpenAI, là một hệ thống xử lí ngôn ngữ tự nhiên tiên tiến",
      "Của Google, là một hệ thống tìm kiếm thông tin trên mạng Internet",
      "Của Honda, là một hệ thống điều khiển robot hình dạng giống con người",
      "Của Đại học Stanford, là một hệ chuyên gia hỗ trợ chẩn đoán bệnh",
    ],
    answer: 0,
    explain:
      "ChatGPT do OpenAI phát triển, là hệ thống xử lí ngôn ngữ tự nhiên tiên tiến và được coi là bước đột phá của lĩnh vực AI năm 2022. Ba phương án còn lại lần lượt là máy tìm kiếm, Robot Asimo và hệ chuyên gia MYCIN.",
  },
  {
    id: "b2-09",
    q: "Vì sao nói ChatGPT là một hệ thống AI có tri thức?",
    options: [
      "Vì nó được huấn luyện trên lượng lớn văn bản thuộc nhiều lĩnh vực khác nhau",
      "Vì nó được cài đặt trên các máy chủ có cấu hình mạnh đặt tại nhiều nước",
      "Vì nó truy cập được vào mọi trang web trên Internet ngay khi người dùng hỏi",
      "Vì nó hiển thị được câu trả lời rất nhanh trên màn hình của người dùng",
    ],
    answer: 0,
    explain:
      "Phiên bản GPT-3 được huấn luyện trên hàng vạn văn bản thuộc nhiều lĩnh vực khác nhau: sách, bài báo, trang web và nhiều nguồn khác. Chính kho hiểu biết rộng đó tạo nên tri thức của hệ thống, chứ không phải cấu hình máy chủ hay tốc độ hiển thị.",
  },
  {
    id: "b2-10",
    q: "Biểu hiện nào cho thấy ChatGPT có khả năng suy luận?",
    options: [
      "Đưa ra câu trả lời đa dạng tuỳ theo ngữ cảnh và yêu cầu của người dùng",
      "Trả lời bằng đúng một câu cố định đã soạn sẵn cho mỗi loại câu hỏi",
      "Sao chép nguyên văn đoạn phù hợp nhất tìm được trong dữ liệu huấn luyện",
      "Đếm số từ trong câu hỏi rồi chọn câu trả lời có độ dài tương ứng",
    ],
    answer: 0,
    explain:
      "ChatGPT không cung cấp những câu trả lời cố định mà đưa ra câu trả lời đa dạng dựa trên ngữ cảnh và yêu cầu cụ thể — điều này cho thấy sự linh hoạt trong suy nghĩ và khả năng suy luận. Nó còn xử lí được câu hỏi phức tạp cần phân tích và tổng hợp.",
  },
  {
    id: "b2-11",
    q: "Nguy cơ nào sau đây KHÔNG nằm trong các cảnh báo về sự phát triển của AI nêu trong bài?",
    options: [
      "Máy tính chạy chương trình AI sẽ nhanh hỏng do phải làm việc quá tải",
      "Áp lực thất nghiệp do AI tự động hoá được nhiều công việc của con người",
      "Ảnh hưởng quyền riêng tư do ứng dụng AI thu thập nhiều dữ liệu cá nhân",
      "Rủi ro an ninh, an toàn do ứng dụng AI trực tuyến có thể bị tấn công",
    ],
    answer: 0,
    explain:
      "Bài nêu bốn nguy cơ: áp lực thất nghiệp, ảnh hưởng quyền riêng tư, khả năng thiếu minh bạch và rủi ro về an ninh, an toàn. Chuyện máy nhanh hỏng do quá tải là vấn đề phần cứng thông thường, không phải cảnh báo về sự phát triển của AI.",
  },
  {
    id: "b2-12",
    q: "Cảnh báo \"khả năng thiếu minh bạch\" của các ứng dụng AI hiện nay nghĩa là gì?",
    options: [
      "Phần lớn ứng dụng AI là \"hộp đen\", khó hiểu chúng ra quyết định thế nào",
      "Phần lớn ứng dụng AI không công bố giá bán nên người dùng khó lựa chọn",
      "Phần lớn ứng dụng AI có giao diện khó nhìn khiến người dùng hay thao tác sai",
      "Phần lớn ứng dụng AI chạy ngầm nên người dùng không biết máy đang bật",
    ],
    answer: 0,
    explain:
      "Các ứng dụng AI hiện nay phần lớn là \"hộp đen\": rất khó hiểu được vì sao hệ thống đưa ra quyết định như vậy. Điều đó dẫn tới việc thiếu trách nhiệm giải trình, trong khi AI lại tham gia vào những quyết định ảnh hưởng trực tiếp tới con người.",
  },
  {
    id: "b2-13",
    q: "Vì sao cần ngăn cấm việc giao toàn quyền quyết định cho AI điều khiển vũ khí sát thương?",
    options: [
      "Vì quyết định sai của AI có thể gây nguy hại trực tiếp tới sinh mạng con người",
      "Vì các hệ thống vũ khí có giá thành rất cao, hỏng hóc sẽ gây tốn kém lớn",
      "Vì máy tính điều khiển vũ khí cần nguồn điện ổn định mà chiến trường khó có",
      "Vì phần mềm điều khiển vũ khí thường được viết bằng ngôn ngữ lập trình cũ",
    ],
    answer: 0,
    explain:
      "Thực tế đòi hỏi phải có ràng buộc pháp lí với những lĩnh vực AI ảnh hưởng trực tiếp tới sinh mạng con người. Ứng dụng AI có thể đưa ra quyết định không chính xác, mà quyết định sai lầm trong trường hợp này thì hậu quả không thể sửa chữa được.",
  },
  {
    id: "b2-14",
    q: "Vì sao dữ liệu dùng để huấn luyện có thể khiến một hệ thống AI đưa ra kết quả thiếu công bằng?",
    options: [
      "Vì hệ thống chỉ học được từ dữ liệu, dữ liệu lệch thì kết quả cũng lệch theo",
      "Vì hệ thống xử lí dữ liệu quá nhanh nên bỏ sót một phần dữ liệu đầu vào",
      "Vì hệ thống lưu dữ liệu trên máy chủ đặt ở nước ngoài nên hay bị chậm",
      "Vì hệ thống cần dung lượng lớn mà ổ cứng máy chủ thì có giới hạn nhất định",
    ],
    answer: 0,
    explain:
      "Hệ thống AI học được gì hoàn toàn do dữ liệu cho nó học. Nếu dữ liệu huấn luyện chỉ phản ánh một nhóm người thì hệ thống sẽ xử lí kém chính xác với các nhóm còn lại. Tốc độ xử lí, vị trí máy chủ hay dung lượng ổ cứng đều không gây ra chuyện đó.",
  },
  {
    id: "b2-15",
    q: "Các thành tựu hiện tại của AI nói chung thuộc phạm vi nào?",
    options: [
      "Đều thuộc phạm vi Trí tuệ nhân tạo hẹp hay Trí tuệ nhân tạo yếu",
      "Đã thuộc phạm vi Trí tuệ nhân tạo mạnh kể từ khi có ChatGPT năm 2022",
      "Một nửa thuộc AI hẹp, một nửa đã đạt tới Trí tuệ nhân tạo tổng quát",
      "Chưa hệ thống nào đạt tới mức AI hẹp, tất cả vẫn đang trong thử nghiệm",
    ],
    answer: 0,
    explain:
      "Dù ChatGPT cho thấy những khả năng không nhỏ, các thành tựu hiện tại của AI vẫn chỉ hạn chế trong phạm vi AI hẹp / AI yếu. Việc phát triển AI tổng quát — có năng lực trí tuệ như con người, áp dụng được tri thức từ lĩnh vực này sang lĩnh vực khác — vẫn đang được nghiên cứu.",
  },
  {
    id: "b2-16",
    q: "Đâu là yêu cầu đặt ra để bảo đảm AI phát triển an toàn, có trách nhiệm?",
    options: [
      "Giám sát chặt chẽ quá trình phát triển AI, không gây hậu quả xấu cho xã hội",
      "Giao toàn bộ quyết định cho AI để tránh sai sót do con người gây ra",
      "Giữ kín cách hệ thống AI hoạt động với tất cả những người sử dụng nó",
      "Thu thập càng nhiều dữ liệu cá nhân càng tốt để AI ngày càng chính xác",
    ],
    answer: 0,
    explain:
      "Cần có giải pháp bảo đảm an toàn và giám sát chặt chẽ quá trình phát triển AI, sao cho AI mang lại cơ hội tiến bộ, nâng cao chất lượng cuộc sống, phục vụ lợi ích cộng đồng mà không gây hậu quả xấu cho xã hội. Ba phương án còn lại đi ngược lại yêu cầu đó.",
  },
];

export default questions;
