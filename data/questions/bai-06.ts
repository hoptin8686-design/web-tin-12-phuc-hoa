import type { Question } from "@/lib/types";

// Bài 6. Giao tiếp và ứng xử trong không gian mạng (SGK trang 34-38)
// 1. Giao tiếp trong không gian mạng: khái niệm; 4 ưu điểm (thuận tiện, tiết kiệm
//    thời gian - chi phí, mở rộng kết nối xã hội, công cụ đa dạng); 4 nhược điểm
//    (thiếu tín hiệu phi ngôn ngữ, nguy cơ bảo mật - riêng tư, thiếu kết nối cá
//    nhân chặt chẽ, dễ bị sự cố kĩ thuật).
// 2. Tính nhân văn: 4 yếu tố (tôn trọng, lịch sự, thấu hiểu, hỗ trợ), 5 cách hình
//    thành thói quen, ứng xử trong các tình huống cụ thể.
const questions: Question[] = [
  {
    id: "b6-01",
    q: "Không gian mạng là gì?",
    options: [
      "Môi trường được tạo ra nhờ sử dụng các mạng máy tính",
      "Toàn bộ thiết bị mạng đang hoạt động trên thế giới",
      "Phần mềm dùng để trò chuyện trực tuyến với bạn bè",
      "Khoảng cách địa lí giữa hai người đang trò chuyện",
    ],
    answer: 0,
    explain:
      "Không gian mạng, còn được gọi là thế giới ảo, là môi trường được tạo ra nhờ sử dụng mạng máy tính, trong đó Internet có thể được coi là không gian mạng lớn nhất. Nó cho phép con người giao tiếp qua mạng xã hội, thư điện tử, ứng dụng nhắn tin, gọi điện video, diễn đàn, blog…",
  },
  {
    id: "b6-02",
    q: "Trường hợp nào sau đây KHÔNG phải là giao tiếp trong không gian mạng?",
    options: [
      "Hẹn gặp bạn tại một quán cà phê Internet để nói chuyện",
      "Giao tiếp với trợ lí ảo trên trang web tuyển sinh đại học",
      "Tham gia một lớp học trực tuyến do nhà trường tổ chức",
      "Hai người bạn gọi điện thoại video cho nhau qua mạng",
    ],
    answer: 0,
    explain:
      "Hẹn gặp ở quán cà phê Internet là gặp mặt trực tiếp, dù địa điểm có tên là \"Internet\". Ba trường hợp còn lại đều diễn ra qua phần mềm và dịch vụ giao tiếp trực tuyến nên thuộc không gian mạng.",
  },
  {
    id: "b6-03",
    q: "Ưu điểm nào của giao tiếp trực tuyến đặc biệt có lợi cho những người sống xa nhau?",
    options: [
      "Thuận tiện — thực hiện được mọi nơi, mọi lúc, miễn là có mạng",
      "Công cụ đa dạng — có nhiều phần mềm khác nhau để lựa chọn",
      "Mở rộng kết nối xã hội — quen thêm nhiều người cùng sở thích",
      "Tiết kiệm chi phí — giảm tiền đi lại và tiền ăn ở khi đi họp",
    ],
    answer: 0,
    explain:
      "Giao tiếp trực tuyến có thể được thực hiện mọi nơi, mọi lúc, miễn là có kết nối mạng. Điều này đặc biệt có lợi cho những người không có điều kiện giao tiếp trực tiếp, chẳng hạn những người sống xa nhau.",
  },
  {
    id: "b6-04",
    q: "Hội nghị truyền hình giúp giảm nhu cầu đi lại và chi phí ăn ở. Đó là ưu điểm nào?",
    options: [
      "Tiết kiệm thời gian và chi phí so với giao tiếp trực tiếp",
      "Thực hiện thuận tiện ở mọi nơi, mọi lúc khi có kết nối",
      "Mở rộng kết nối xã hội với nhiều người có cùng sở thích",
      "Công cụ giao tiếp đa dạng cho người dùng lựa chọn dùng",
    ],
    answer: 0,
    explain:
      "So với giao tiếp trực tiếp, giao tiếp trực tuyến tiết kiệm thời gian và chi phí di chuyển nhưng vẫn đảm bảo hiệu quả công việc. Sách nêu đúng ví dụ hội nghị truyền hình và điện thoại video.",
  },
  {
    id: "b6-05",
    q: "Ưu điểm mở rộng kết nối xã hội của giao tiếp trực tuyến thể hiện như thế nào?",
    options: [
      "Dễ kết nối nhiều người cùng sở thích, quan điểm hoặc nhu cầu",
      "Giúp giảm chi phí đi lại và ăn ở khi tổ chức một cuộc họp",
      "Giúp thực hiện cuộc trò chuyện ở bất cứ đâu và bất cứ lúc nào",
      "Cho phép chọn giữa nhắn tin, thư điện tử hay hội nghị truyền hình",
    ],
    answer: 0,
    explain:
      "Giao tiếp trực tuyến giúp dễ dàng mở rộng mạng lưới quan hệ xã hội và kết nối nhiều người khác nhau cùng sở thích, quan điểm hoặc nhu cầu. Đây cũng là cách xây dựng thương hiệu cá nhân hoặc doanh nghiệp qua các kênh truyền thông xã hội.",
  },
  {
    id: "b6-06",
    q: "Nhược điểm \"thiếu tín hiệu phi ngôn ngữ\" của giao tiếp trực tuyến là gì?",
    options: [
      "Thiếu nét mặt, ngôn ngữ cơ thể, biểu cảm giọng nói nên dễ hiểu lầm",
      "Thiếu kết nối mạng ổn định nên cuộc trò chuyện hay bị gián đoạn",
      "Thiếu phần mềm phù hợp nên hai bên không nói chuyện được với nhau",
      "Thiếu thông tin cá nhân nên khó biết người đối diện là ai thật sự",
    ],
    answer: 0,
    explain:
      "Một số phương thức giao tiếp như thư điện tử hay tin nhắn thiếu tín hiệu phi ngôn ngữ: nét mặt, ngôn ngữ cơ thể và biểu cảm giọng nói. Điều này gây khó khăn cho việc truyền đạt cảm xúc và dẫn đến những hiểu lầm không đáng có.",
  },
  {
    id: "b6-07",
    q: "Nhược điểm nào của giao tiếp trực tuyến liên quan tới bảo mật và quyền riêng tư?",
    options: [
      "Bị lộ mật khẩu truy cập, bị tấn công mạng, bị xâm phạm dữ liệu",
      "Bị mất kết nối mạng giữa chừng làm cuộc gọi bị gián đoạn hẳn",
      "Bị thiếu nét mặt và giọng nói nên truyền đạt cảm xúc khó khăn",
      "Bị phần mềm không tương thích nên hai bên không kết nối được",
    ],
    answer: 0,
    explain:
      "Giao tiếp trực tuyến có thể bị vi phạm tính bảo mật như lộ mật khẩu truy cập hay bị tấn công mạng, làm gia tăng lo ngại về quyền riêng tư: dữ liệu bị xâm phạm, thông tin riêng tư và nhạy cảm bị lộ lọt hoặc bị tấn công bởi kẻ xấu.",
  },
  {
    id: "b6-08",
    q: "Vì sao trong không gian mạng khó xây dựng mối quan hệ và lòng tin?",
    options: [
      "Vì người dùng dễ giấu mặt, giả mạo thông tin về bản thân mình",
      "Vì tốc độ đường truyền không ổn định nên hay bị mất kết nối",
      "Vì các phần mềm nhắn tin có quá nhiều tính năng khó sử dụng",
      "Vì mỗi người chỉ được lập một tài khoản duy nhất trên mạng đó",
    ],
    answer: 0,
    explain:
      "Người sử dụng có thể dễ dàng giấu mặt, tạo ra các bản sao không đầy đủ của bản thân hoặc giả mạo thông tin, làm người khác khó đánh giá được tính chân thật của thông tin và sự thật về người đối diện. Thông tin cá nhân của một tài khoản có thể chỉ là bịa đặt.",
  },
  {
    id: "b6-09",
    q: "Nhược điểm \"dễ bị ảnh hưởng bởi sự cố kĩ thuật\" thể hiện qua điều gì?",
    options: [
      "Mất kết nối mạng, phần mềm không tương thích làm gián đoạn",
      "Người dùng dùng ngôn từ khiếm nhã làm người khác tổn thương",
      "Thông tin cá nhân của một tài khoản có thể chỉ là bịa đặt",
      "Thư điện tử không truyền được nét mặt và giọng nói của người",
    ],
    answer: 0,
    explain:
      "Các sự cố kĩ thuật như mất kết nối mạng và phần mềm không tương thích có thể cản trở giao tiếp trực tuyến, dẫn đến giao tiếp bị trì hoãn hoặc bị gián đoạn.",
  },
  {
    id: "b6-10",
    q: "Quy tắc ứng xử trên mạng xã hội ở nước ta được nêu trong văn bản nào?",
    options: [
      "Quyết định số 874/QĐ-BTTTT ngày 17/6/2021",
      "Luật An toàn thông tin mạng ban hành năm 2015",
      "Luật Sở hữu trí tuệ được sửa đổi vào năm 2022",
      "Nghị định về bảo vệ dữ liệu cá nhân năm 2023",
    ],
    answer: 0,
    explain:
      "Bên cạnh việc thực hiện các quy tắc ứng xử trên mạng xã hội phù hợp với quy định của pháp luật được nêu trong Quyết định số 874/QĐ-BTTTT ngày 17/6/2021, người dùng còn cần biết ứng xử một cách nhân văn.",
  },
  {
    id: "b6-11",
    q: "Bốn yếu tố quan trọng của việc ứng xử nhân văn trong không gian mạng là gì?",
    options: [
      "Tôn trọng, lịch sự, thấu hiểu và sẵn sàng hỗ trợ người khác",
      "Nhanh nhạy, chính xác, tiết kiệm và bảo mật khi dùng mạng",
      "Trung thực, chăm chỉ, kỉ luật và trách nhiệm với công việc",
      "Cẩn thận, kiên trì, sáng tạo và hợp tác khi học trực tuyến",
    ],
    answer: 0,
    explain:
      "Tôn trọng, lịch sự, thấu hiểu và sẵn sàng hỗ trợ giúp tạo ra một môi trường trao đổi thông tin và giao tiếp trong không gian mạng an toàn, lành mạnh; tránh làm tổn thương người khác, tạo sự thoải mái và tin tưởng cho mọi người.",
  },
  {
    id: "b6-12",
    q: "Biểu hiện nào thể hiện sự tôn trọng khi giao tiếp trong không gian mạng?",
    options: [
      "Không phát tán thông tin riêng tư của người khác khi chưa được phép",
      "Bắt buộc người khác phải chấp nhận và chia sẻ quan điểm của mình",
      "Dùng từ lóng và ngôn ngữ chuyên ngành cho câu chuyện thêm sinh động",
      "Chia sẻ lại ngay mọi tin tức nóng vừa nhìn thấy trên mạng xã hội",
    ],
    answer: 0,
    explain:
      "Tôn trọng bao gồm tôn trọng quyền riêng tư, không phát tán thông tin riêng tư của người khác mà không có sự cho phép của họ; tôn trọng quan điểm của mỗi người, không bắt buộc họ chấp nhận quan điểm của mình; không châm chọc hay làm người khác tổn thương.",
  },
  {
    id: "b6-13",
    q: "Hành vi nào KHÔNG phù hợp với yêu cầu lịch sự khi giao tiếp trên mạng?",
    options: [
      "Dùng từ ngữ thô tục và xúc phạm để thể hiện sự bất bình của mình",
      "Đọc kĩ bài viết của người khác trước khi đưa ra ý kiến của mình",
      "Chủ động tìm hiểu thêm thông tin trước khi đưa ra ý kiến tranh luận",
      "Tôn trọng ý kiến và quan điểm của người khác dù mình không đồng ý",
    ],
    answer: 0,
    explain:
      "Lịch sự đòi hỏi sử dụng ngôn từ đúng mực, không dùng ngôn từ nhạy cảm, lăng mạ, châm chọc, phỉ báng hoặc phân biệt chủng tộc, giới tính, tôn giáo. Ba phương án còn lại đều là cách ứng xử đúng mực khi tranh luận trên mạng.",
  },
  {
    id: "b6-14",
    q: "Yếu tố \"thấu hiểu\" trong ứng xử nhân văn nghĩa là gì?",
    options: [
      "Đặt mình vào hoàn cảnh người khác để hiểu suy nghĩ, khó khăn của họ",
      "Đọc thật kĩ mọi bài viết trên mạng xã hội trước khi bấm nút chia sẻ",
      "Dùng đúng ngôn từ chuyên ngành để câu chuyện thêm phần chính xác",
      "Ghi nhớ thông tin cá nhân của bạn bè để tiện liên lạc với họ khi cần",
    ],
    answer: 0,
    explain:
      "Thấu hiểu là cảm thông với người khác và hiểu được những khó khăn mà họ đang gặp phải, cố gắng đặt mình vào hoàn cảnh của họ. Khi thấu hiểu được người khác, ta sẽ có khả năng giúp đỡ họ một cách hiệu quả hơn.",
  },
  {
    id: "b6-15",
    q: "Khi dùng thư hoặc tin nhắn điện tử, điều nào cần tôn trọng?",
    options: [
      "Không chia sẻ nội dung riêng cho bên thứ ba khi chưa được phép",
      "Không gửi thư cho nhiều người cùng lúc để tránh làm phiền họ",
      "Không dùng thư điện tử để trao đổi việc học tập của lớp mình",
      "Không lưu lại các tin nhắn đã trao đổi quá ba ngày trên máy",
    ],
    answer: 0,
    explain:
      "Khi sử dụng thư hoặc tin nhắn điện tử, cần viết một cách lịch sự, tránh ngôn từ thô tục khiêu khích, và luôn tôn trọng quyền riêng tư của người nhận: không chia sẻ thông tin trao đổi riêng giữa hai người với một bên thứ ba khi chưa được phép.",
  },
  {
    id: "b6-16",
    q: "Khi trò chuyện qua video, cách ứng xử nào là phù hợp?",
    options: [
      "Mặc quần áo lịch sự, không để lộ cảnh quan không phù hợp",
      "Chỉ cần bật camera lên là đủ, trang phục thế nào cũng được",
      "Tắt camera đi để giữ hoàn toàn quyền riêng tư của bản thân",
      "Chia sẻ luôn nội dung cuộc trò chuyện cho những người khác",
    ],
    answer: 0,
    explain:
      "Khi trò chuyện qua video, hãy mặc quần áo lịch sự và không để lộ những vật dụng hoặc cảnh quan không phù hợp, đồng thời giữ một thái độ đúng đắn trong suốt cuộc trò chuyện.",
  },
  {
    id: "b6-17",
    q: "Trước khi đăng bài hoặc chia sẻ thông tin lên mạng xã hội cần làm gì?",
    options: [
      "Đọc kĩ nội dung và kiểm tra tính chính xác của thông tin đó",
      "Chia sẻ càng nhanh càng tốt để mọi người kịp biết tin mới",
      "Thêm vào vài chi tiết cho câu chuyện hấp dẫn người đọc hơn",
      "Chỉ cần xem nguồn tin có nhiều lượt chia sẻ hay không là đủ",
    ],
    answer: 0,
    explain:
      "Khi đăng bài hoặc chia sẻ thông tin lên mạng xã hội, diễn đàn, hãy đọc kĩ nội dung và kiểm tra tính chính xác của nó để đảm bảo không làm tổn hại đến danh tiếng hoặc quyền riêng tư của người khác. Đây cũng là cách tránh lan truyền thông tin sai lệch và tin đồn.",
  },
];

export default questions;
