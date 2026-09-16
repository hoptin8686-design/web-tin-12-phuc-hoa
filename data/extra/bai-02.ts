import type { LessonExtra } from "@/lib/types";

// Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống — câu đúng/sai + tự luận
// (SGK trang 9-13)
const extra: LessonExtra = {
  tf: [
    {
      id: "b2-tf1",
      context:
        "Trung tâm y tế huyện được trang bị một phần mềm hỗ trợ đọc ảnh X-quang phổi. Bác sĩ chụp phim đưa lên, vài giây sau phần mềm làm nổi bật vùng nghi tổn thương kèm mức độ nghi ngờ theo phần trăm. Phần mềm được xây dựng từ tri thức của nhiều bác sĩ cùng hàng trăm nghìn phim đã có kết luận. Dù vậy, bác sĩ vẫn xem lại từng phim và tự kết luận, phần mềm chỉ gợi ý.",
      statements: [
        {
          text: "Đây là ứng dụng AI trong lĩnh vực y học và chăm sóc sức khoẻ.",
          answer: true,
          explain:
            "Sách nêu rõ: AI được dùng để cải thiện chất lượng hình ảnh y tế, làm nổi bật những cấu trúc bất thường bên trong cơ thể và hỗ trợ đưa ra chẩn đoán chính xác, kịp thời.",
        },
        {
          text: "Việc bác sĩ vẫn xem lại phim và tự kết luận là cách giữ vai trò kiểm soát của con người với hệ thống AI.",
          answer: true,
          explain:
            "Ứng dụng AI vẫn có thể đưa ra quyết định không chính xác, mà sai sót trong y tế thì gây nguy hại trực tiếp tới con người. Vì vậy con người phải giám sát và chịu trách nhiệm về kết luận cuối cùng.",
        },
        {
          text: "Vì phần mềm đã học từ hàng trăm nghìn phim nên kết luận của nó luôn đúng, bác sĩ có thể kí ngay theo kết quả.",
          answer: false,
          explain:
            "Không hệ thống AI nào chính xác tuyệt đối — phần mềm cũng chỉ đưa ra mức độ nghi ngờ chứ không khẳng định. Kí theo máy mà không kiểm tra là bỏ mất sự giám sát của con người.",
        },
        {
          text: "Nếu bộ phim dùng để huấn luyện chỉ lấy từ người lớn thì phần mềm vẫn chẩn đoán chính xác như vậy cho trẻ nhỏ.",
          answer: false,
          explain:
            "Hệ thống chỉ học được từ dữ liệu nó được cho học. Lồng ngực trẻ nhỏ khác người lớn, mà nhóm này lại chưa có trong dữ liệu huấn luyện, nên kết quả sẽ kém tin cậy.",
        },
      ],
    },
    {
      id: "b2-tf2",
      context:
        "Mai lớp 12A dùng ChatGPT chuẩn bị bài thuyết trình về nghề nghiệp tương lai. Mai hỏi một câu, ChatGPT trả lời trôi chảy; hỏi lại theo hướng khác thì nó đưa ra câu trả lời khác hẳn, bám đúng ý mới. Khi Mai nhờ xem một đoạn Python bị lỗi, nó chỉ ra dòng sai và giải thích vì sao. Nhưng lúc hỏi số liệu dân số xã mình thì nó đưa ra một con số không khớp với cổng thông tin của xã.",
      statements: [
        {
          text: "Việc ChatGPT đưa ra câu trả lời khác nhau tuỳ theo ngữ cảnh và yêu cầu cho thấy khả năng suy luận của nó.",
          answer: true,
          explain:
            "Sách nêu: ChatGPT không chỉ cung cấp những câu trả lời cố định mà còn đưa ra câu trả lời đa dạng dựa trên ngữ cảnh và yêu cầu cụ thể của người dùng — đó là sự linh hoạt trong suy nghĩ và khả năng suy luận.",
        },
        {
          text: "Việc ChatGPT chỉ ra được dòng lệnh sai và giải thích nguyên nhân cho thấy nó có tri thức về lập trình.",
          answer: true,
          explain:
            "ChatGPT được huấn luyện trên lượng lớn văn bản thuộc nhiều lĩnh vực, trong đó có lập trình; sách cũng nêu nó có thể thiết kế và sửa lỗi trong lập trình. Đây là biểu hiện của một hệ thống có tri thức.",
        },
        {
          text: "Vì ChatGPT được huấn luyện trên lượng dữ liệu rất lớn nên mọi số liệu nó đưa ra đều chính xác.",
          answer: false,
          explain:
            "Chính tình huống của Mai cho thấy điều ngược lại. ChatGPT vẫn còn nhiều hạn chế, nhất là với thông tin ít phổ biến hoặc không có nhiều dữ liệu huấn luyện — phải kiểm chứng lại bằng nguồn tin cậy.",
        },
        {
          text: "ChatGPT là minh chứng cho thấy AI đã đạt tới mức Trí tuệ nhân tạo tổng quát.",
          answer: false,
          explain:
            "Sách khẳng định các thành tựu hiện tại của AI nói chung, kể cả ChatGPT, vẫn thuộc phạm vi Trí tuệ nhân tạo hẹp / Trí tuệ nhân tạo yếu. AI tổng quát vẫn đang trong quá trình nghiên cứu và phát triển.",
        },
      ],
    },
    {
      id: "b2-tf3",
      context:
        "Xã triển khai một ứng dụng dùng AI để xét duyệt hồ sơ vay vốn cho hộ nông dân. Người vay nhập thông tin cá nhân, thu nhập, diện tích đất; hệ thống trả về \"đồng ý\" hoặc \"từ chối\" kèm điểm số. Hồ sơ nhà Dín bị từ chối, bố Dín hỏi cán bộ thì cán bộ cũng chỉ nói \"phần mềm nó tính ra vậy\". Mỗi lần nộp hồ sơ, ứng dụng còn yêu cầu chụp ảnh giấy tờ tuỳ thân và xin quyền truy cập danh bạ điện thoại.",
      statements: [
        {
          text: "Việc không ai giải thích được vì sao hệ thống từ chối là biểu hiện của nguy cơ thiếu minh bạch.",
          answer: true,
          explain:
            "Sách gọi đây là các \"hộp đen\": khó hiểu được các quyết định của ứng dụng AI được đưa ra như thế nào, dẫn đến việc thiếu trách nhiệm giải trình.",
        },
        {
          text: "Việc ứng dụng xin quyền truy cập danh bạ điện thoại liên quan tới nguy cơ ảnh hưởng quyền riêng tư.",
          answer: true,
          explain:
            "Nhiều ứng dụng AI hoạt động dựa vào việc thu thập lượng lớn dữ liệu cá nhân, làm tăng mối lo ngại về quyền riêng tư và khả năng bị lạm dụng — đúng nguy cơ sách cảnh báo.",
        },
        {
          text: "Vì hệ thống chấm điểm bằng máy nên kết quả chắc chắn khách quan và công bằng với mọi hộ dân.",
          answer: false,
          explain:
            "Hệ thống chỉ học từ dữ liệu được cung cấp; nếu dữ liệu đó lệch thì kết quả cũng lệch theo. Máy chấm không đồng nghĩa với công bằng, nhất là khi không ai giải thích được cách nó tính điểm.",
        },
        {
          text: "Những vấn đề trên chỉ là chuyện kĩ thuật, không liên quan gì tới khía cạnh đạo đức khi dùng AI.",
          answer: false,
          explain:
            "Sách nêu rõ các cảnh báo này đặt ra những khía cạnh đạo đức cần được xem xét, để bảo đảm AI được xây dựng và sử dụng một cách minh bạch và có trách nhiệm.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b2-es1",
      q: "Nêu các lĩnh vực đã và đang phát triển mạnh mẽ dựa trên thành tựu của AI được giới thiệu trong bài. Với mỗi lĩnh vực, cho một ví dụ cụ thể.",
      answer:
        "1. HỆ CHUYÊN GIA — chương trình máy tính dựa trên luật suy diễn và tri thức của chuyên gia trong từng lĩnh vực. Nhờ Học máy, nhiều hệ chuyên gia nay tự học từ dữ liệu để hình thành luật và tri thức mới.\n\n2. Y HỌC VÀ CHĂM SÓC SỨC KHOẺ — cải thiện chất lượng hình ảnh y tế, làm nổi bật cấu trúc bất thường trong cơ thể, đo các chỉ số lâm sàng, hỗ trợ chẩn đoán và hướng điều trị chính xác, kịp thời.\n   Ví dụ: phần mềm IBM Watson for Oncology góp phần nâng cao hiệu quả điều trị ung thư.\n\n3. GIAO THÔNG VẬN TẢI — phát triển phương tiện tự lái, quản lí giao thông thông minh và định tuyến phương tiện vận tải.\n   Ví dụ: ô tô tự lái, máy bay không người lái.\n\n4. TÀI CHÍNH, NGÂN HÀNG — phân tích, xử lí dữ liệu để hỗ trợ quyết định đầu tư, phát hiện và ngăn chặn gian lận, nâng cao trải nghiệm khách hàng.\n\n5. SẢN XUẤT — trong công nghiệp: tự động hoá từ chế tạo, lắp ráp, kiểm tra chất lượng đến quản lí chuỗi cung ứng. Trong nông nghiệp: trang trại thông minh theo dõi thời tiết, đất đai, dịch bệnh để tối ưu quy trình chăm sóc, hợp lí hoá tưới tiêu, dự đoán mùa vụ và thời điểm thu hoạch.\n\n6. GIÁO DỤC — nền tảng học tập được cá nhân hoá, theo dõi tiến trình học, đề xuất nội dung phù hợp và phản hồi tức thì; trợ lí học tập ảo hỗ trợ học sinh và giáo viên.\n\nNgoài ra còn có: khoa học xã hội và nhân văn (thu thập, phân tích quan điểm xã hội, mô hình hoá hiện tượng xã hội), sáng tạo âm nhạc - hội hoạ - văn học, AIoT giám sát môi trường tự nhiên và biến đổi khí hậu, dịch thuật tự động, trò chơi điện tử, thám hiểm không gian vũ trụ.",
    },
    {
      id: "b2-es2",
      q: "ChatGPT được coi là hệ thống AI có tri thức, có khả năng suy luận và khả năng học. Hãy chỉ ra biểu hiện của từng khả năng đó. Nêu những nguy cơ mà sự phát triển của AI đặt ra.",
      answer:
        "* BA KHẢ NĂNG CỦA ChatGPT (hệ thống xử lí ngôn ngữ tự nhiên do OpenAI phát triển):\n\n1. CÓ TRI THỨC — được huấn luyện trên lượng lớn dữ liệu văn bản; phiên bản GPT-3 huấn luyện trên hàng vạn văn bản thuộc nhiều lĩnh vực khác nhau: sách, bài báo, trang web và nhiều nguồn khác.\n\n2. KHẢ NĂNG SUY LUẬN — không đưa ra câu trả lời cố định mà trả lời đa dạng dựa trên ngữ cảnh và yêu cầu cụ thể của người dùng; xử lí được câu hỏi phức tạp cần phân tích và tổng hợp tri thức từ nhiều nguồn.\n\n3. KHẢ NĂNG HỌC — tương tác liên tục và cải thiện nội dung trả lời dựa trên phản hồi của người dùng, cho thấy khả năng nắm bắt và thích nghi với ngữ cảnh cụ thể.\n\n(ChatGPT còn hiểu và tạo được văn bản ngôn ngữ tự nhiên, làm thơ, soạn nhạc, viết thư, thiết kế và sửa lỗi lập trình. Nhiều chuyên gia coi đây là bước đột phá của lĩnh vực AI năm 2022.)\n\n* BỐN NGUY CƠ CẦN CẢNH BÁO:\n\n1. Áp lực thất nghiệp — AI tự động hoá nhiều công việc, dẫn đến thất nghiệp và tạo nguy cơ cho sự phát triển xã hội.\n\n2. Ảnh hưởng quyền riêng tư — nhiều ứng dụng AI hoạt động dựa vào thu thập lượng lớn dữ liệu cá nhân, làm tăng mối lo ngại về quyền riêng tư và khả năng bị lạm dụng.\n\n3. Khả năng thiếu minh bạch — phần lớn ứng dụng AI hiện nay là \"hộp đen\", khó hiểu được quyết định được đưa ra như thế nào, dẫn tới thiếu trách nhiệm giải trình.\n\n4. Rủi ro về an ninh, an toàn — ứng dụng AI triển khai trực tuyến có thể bị xâm nhập, tấn công thay đổi dữ liệu và mô hình, dẫn tới quyết định không chính xác gây nguy hại trực tiếp cho con người.\n\n* KẾT LUẬN: cần có ràng buộc pháp lí với các lĩnh vực ảnh hưởng trực tiếp tới sinh mạng con người (ví dụ ngăn cấm giao toàn quyền quyết định cho AI điều khiển vũ khí sát thương), cùng các giải pháp bảo đảm an toàn và giám sát chặt chẽ quá trình phát triển AI.",
    },
  ],
};

export default extra;
