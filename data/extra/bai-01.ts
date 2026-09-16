import type { LessonExtra } from "@/lib/types";

// Bài 1. Làm quen với Trí tuệ nhân tạo — câu đúng/sai + tự luận (SGK trang 5-8)
const extra: LessonExtra = {
  tf: [
    {
      id: "b1-tf1",
      context:
        "Cô giáo cho lớp 12A kể những thiết bị \"tự động\" gặp hằng ngày. Sùng kể ấm điện tự ngắt khi nước sôi. Dín kể cửa kính siêu thị tự mở khi có người tới gần. Mai kể guồng nước ở khe suối quê mình quay nhờ dòng chảy tự nhiên. Còn Páo đưa điện thoại lên mặt cho màn hình mở khoá, rồi nói \"Mở bản nhạc hôm qua nghe\" thì máy phát đúng bài.",
      statements: [
        {
          text: "Ấm điện tự ngắt, cửa siêu thị tự mở và guồng nước đều là hệ thống tự động hoá, không phải ứng dụng AI.",
          answer: true,
          explain:
            "Cả ba đều chỉ lặp lại một thao tác cố định theo một ngưỡng đặt sẵn hoặc theo quy luật vật lí, không có đặc trưng trí tuệ nào. Đây đúng là ba ví dụ sách đưa ra để phân biệt AI với tự động hoá.",
        },
        {
          text: "Việc điện thoại nhận đúng mặt bạn Páo để mở khoá là một ứng dụng của AI.",
          answer: true,
          explain:
            "Nhận dạng khuôn mặt là xác định danh tính dựa trên hình ảnh khuôn mặt — một ứng dụng AI được sách nêu đích danh, từ mở khoá điện thoại cho tới kiểm tra an ninh.",
        },
        {
          text: "Guồng nước quay được nhờ dòng chảy tự nhiên nên nó là ứng dụng AI đơn giản nhất trong bốn ví dụ.",
          answer: false,
          explain:
            "Guồng nước hoạt động hoàn toàn nhờ sức nước, không hề có máy tính hay khả năng học, suy luận nào. Càng đơn giản thì càng xa AI chứ không phải \"AI đơn giản\".",
        },
        {
          text: "Mọi hệ thống hoạt động tự động đều được coi là ứng dụng của trí tuệ nhân tạo.",
          answer: false,
          explain:
            "Sách nói rõ: không phải bất kì hệ thống tự động hoá nào cũng được coi là AI. Muốn là AI thì phải có sự kết hợp ở mức độ nào đó của các đặc trưng trí tuệ: học, suy luận, nhận thức, hiểu ngôn ngữ, giải quyết vấn đề.",
        },
      ],
    },
    {
      id: "b1-tf2",
      context:
        "Bạn Páo lập bảng liệt kê bốn ứng dụng AI để chuẩn bị bài thuyết trình: (1) hệ thống khuyến nghị trên YouTube đề xuất video ca nhạc mới dựa trên lịch sử xem của từng người; (2) máy tìm kiếm Google hiểu được câu hỏi Páo đọc bằng tiếng nói; (3) ô tô tự lái dùng cảm biến radar và camera để phát hiện xe xung quanh, chướng ngại vật, biển báo giao thông; (4) hệ thống dự báo thời tiết đưa ra bản tin cho những ngày tới dựa trên dữ liệu thời tiết nhiều năm trước.",
      statements: [
        {
          text: "Ứng dụng (1) thể hiện khả năng học của AI.",
          answer: true,
          explain:
            "Khả năng học là nắm bắt thông tin từ dữ liệu và điều chỉnh hành vi dựa trên thông tin mới. Hệ khuyến nghị YouTube học từ lịch sử xem của từng người dùng cụ thể — đây là ví dụ sách dùng cho đặc trưng này.",
        },
        {
          text: "Ứng dụng (2) thể hiện khả năng hiểu ngôn ngữ của AI.",
          answer: true,
          explain:
            "Hiểu ngôn ngữ là hiểu và xử lí ngôn ngữ tự nhiên của con người, gồm cả văn bản lẫn tiếng nói. Máy tìm kiếm nhận yêu cầu tra cứu bằng giọng nói chính là ví dụ sách nêu.",
        },
        {
          text: "Ứng dụng (3) thể hiện khả năng hiểu ngôn ngữ, vì xe phải đọc được chữ ghi trên biển báo.",
          answer: false,
          explain:
            "Đây là khả năng nhận thức: cảm nhận và hiểu biết môi trường xung quanh thông qua cảm biến và dữ liệu đầu vào. Nhận ra biển báo là nhận dạng hình ảnh chứ không phải xử lí ngôn ngữ tự nhiên.",
        },
        {
          text: "Ứng dụng (4) không thuộc AI vì dự báo thời tiết chỉ là tính toán trên số liệu.",
          answer: false,
          explain:
            "Sách dùng đúng ví dụ này cho khả năng giải quyết vấn đề: tìm ra cách xử lí các tình huống phức tạp dựa trên thông tin và tri thức. Thời tiết có rất nhiều yếu tố đan xen, không phải một phép tính cố định.",
        },
      ],
    },
    {
      id: "b1-tf3",
      context:
        "Hợp tác xã trồng cam ở xã bên được hỗ trợ một ứng dụng điện thoại: bác nông dân chụp ảnh lá bị đốm rồi gửi lên, vài giây sau ứng dụng báo tên bệnh kèm cách xử lí. Ứng dụng được xây dựng từ hơn năm mươi nghìn ảnh lá cây đã được kĩ sư nông nghiệp gắn nhãn bệnh. Ban đầu còn hay nhầm, nhưng sau mỗi đợt bà con gửi thêm ảnh thì nó nhận dạng ngày một chính xác hơn.",
      statements: [
        {
          text: "Việc ứng dụng nhận dạng chính xác hơn sau mỗi đợt bổ sung ảnh thể hiện khả năng học của AI.",
          answer: true,
          explain:
            "Kết quả tốt dần lên nhờ có thêm dữ liệu chứ không phải nhờ lập trình viên sửa mã nguồn — đúng là nắm bắt thông tin từ dữ liệu và điều chỉnh hành vi.",
        },
        {
          text: "Ứng dụng này thuộc loại Trí tuệ nhân tạo hẹp, cũng gọi là Trí tuệ nhân tạo yếu.",
          answer: true,
          explain:
            "AI hẹp (AI yếu) được thiết kế để thực hiện một nhiệm vụ cụ thể. Ứng dụng chỉ nhận dạng bệnh trên lá cây, không làm được việc trí tuệ nào khác — đúng loại này.",
        },
        {
          text: "Vì ứng dụng tư vấn được cho rất nhiều vườn cam khác nhau nên nó là Trí tuệ nhân tạo tổng quát.",
          answer: false,
          explain:
            "Dùng cho nhiều vườn vẫn chỉ là một nhiệm vụ duy nhất. AI tổng quát (AI mạnh) phải tự học, tự thích nghi và làm được nhiều việc như con người — thực tế hiện vẫn chưa đạt được.",
        },
        {
          text: "Nếu bộ ảnh huấn luyện chỉ có lá cam thì ứng dụng vẫn chẩn đoán chính xác bệnh trên lá bưởi.",
          answer: false,
          explain:
            "Hệ thống AI chỉ làm tốt trong phạm vi dữ liệu nó đã học. Gặp loại lá chưa từng có trong dữ liệu huấn luyện, ứng dụng rất dễ đưa ra kết luận sai.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b1-es1",
      q: "Trí tuệ nhân tạo là gì? Nêu năm đặc trưng cơ bản của AI, mỗi đặc trưng cho một ví dụ minh hoạ.",
      answer:
        "* KHÁI NIỆM: AI là khả năng của máy tính có thể làm những công việc mang tính trí tuệ của con người như đọc chữ, hiểu tiếng nói, dịch thuật, lái xe hay khả năng học và ra quyết định. Mục tiêu của việc phát triển ứng dụng AI là xây dựng các phần mềm giúp máy tính có được những năng lực trí tuệ như con người.\n\n* NĂM ĐẶC TRƯNG CƠ BẢN:\n\n1. Khả năng học — nắm bắt thông tin từ dữ liệu và điều chỉnh hành vi dựa trên thông tin mới.\n   Ví dụ: hệ thống khuyến nghị trên YouTube học từ lịch sử xem để đề xuất video mới cho từng người dùng.\n\n2. Khả năng suy luận — vận dụng logic và tri thức để đưa ra quyết định hoặc kết luận.\n   Ví dụ: hệ thống chẩn đoán y tế dựa trên tri thức về triệu chứng và bệnh lí để chẩn đoán tình trạng sức khoẻ người bệnh.\n\n3. Khả năng nhận thức — cảm nhận và hiểu biết môi trường xung quanh qua cảm biến và dữ liệu đầu vào.\n   Ví dụ: máy tính điều khiển xe tự lái dùng radar và camera phát hiện xe xung quanh, chướng ngại vật, biển báo giao thông và người đi bộ.\n\n4. Khả năng hiểu ngôn ngữ — hiểu và xử lí ngôn ngữ tự nhiên, gồm cả văn bản và tiếng nói.\n   Ví dụ: máy tìm kiếm Google, Bing hiểu được yêu cầu tra cứu đưa vào bằng văn bản hay bằng tiếng nói.\n\n5. Khả năng giải quyết vấn đề — tìm ra cách giải quyết các tình huống phức tạp dựa trên thông tin và tri thức.\n   Ví dụ: hệ thống dự báo thời tiết dùng mô hình dựa trên dữ liệu thời tiết trước đây để đưa ra bản tin dự báo.\n\n* LƯU Ý: bất kì ứng dụng AI nào cũng cần có sự kết hợp ở các mức độ khác nhau của một số đặc trưng trên.",
    },
    {
      id: "b1-es2",
      q: "Phân biệt Trí tuệ nhân tạo hẹp và Trí tuệ nhân tạo tổng quát. Vì sao ấm đun nước tự ngắt hay dây chuyền lắp ráp trong nhà máy không được coi là ứng dụng của AI?",
      answer:
        "* PHÂN LOẠI AI THEO CHỨC NĂNG (gồm hai loại chính):\n\n1. Trí tuệ nhân tạo hẹp (Trí tuệ nhân tạo yếu): được thiết kế để thực hiện MỘT nhiệm vụ cụ thể.\n   Ví dụ: chương trình máy tính chơi cờ, nhận dạng khuôn mặt, thực hiện dự báo thời tiết.\n   Toàn bộ thành tựu hiện tại của AI đều thuộc phạm vi này.\n\n2. Trí tuệ nhân tạo tổng quát (Trí tuệ nhân tạo mạnh): có khả năng tự học, tự thích nghi và thực hiện được nhiều công việc giống như con người, áp dụng được tri thức từ lĩnh vực này sang lĩnh vực khác.\n   Đây đang là mục tiêu dài hạn của các nghiên cứu về AI, trong thực tế hiện vẫn chưa đạt được.\n\n* VÌ SAO ẤM ĐUN NƯỚC TỰ NGẮT, DÂY CHUYỀN LẮP RÁP KHÔNG PHẢI AI:\n\nĐây là ranh giới giữa AI và TỰ ĐỘNG HOÁ. Các hệ thống tự động hoá như dây chuyền lắp ráp, robot cơ giới hoá, ấm điện tự ngắt, cửa tự động chỉ thực hiện lặp đi lặp lại một vài thao tác cố định và đơn điệu. Chúng có thể đạt hiệu suất rất cao trong công việc cụ thể của mình, nhưng KHÔNG có bất kì đặc trưng trí tuệ nào — không học được, không suy luận, không nhận thức được môi trường. Vì vậy chúng không được coi là hệ thống có ứng dụng AI.",
    },
  ],
};

export default extra;
