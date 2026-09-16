import type { LessonExtra } from "@/lib/types";

// Bài 19. Dịch vụ sửa chữa và bảo trì máy tính — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b19-tf1",
      context:
        "Trung tâm bảo hành và sửa chữa máy tính T đang có nhu cầu tuyển dụng các kĩ thuật viên sửa chữa và bảo trì. Trong bảng mô tả công việc, trung tâm liệt kê một số nhiệm vụ sau:\n1. Nâng cấp bộ nhớ RAM và thay thế ổ cứng thể rắn (SSD) cho máy tính xách tay của khách hàng.\n2. Phát triển một hệ điều hành hoàn toàn mới dành riêng cho các thiết bị di động.\n3. Cài đặt các phần mềm văn phòng cơ bản và cấu hình mạng Internet cho văn phòng.\n4. Tư vấn, giải thích cho khách hàng về nguyên nhân gây lỗi máy tính và cách phòng tránh.",
      code: "",
      statements: [
        {
          text: "Nhiệm vụ 1 (Nâng cấp RAM, thay SSD) thuộc nhóm công việc liên quan tới phần mềm hệ thống.",
          answer: false,
          explain:
            "RAM và ổ SSD là linh kiện phần cứng. Tháo lắp linh kiện, thay thế ổ cứng, nâng cấp bộ nhớ đều là những tác động vật lí lên máy, nên thuộc nhóm công việc liên quan tới phần cứng.",
        },
        {
          text: "Nhiệm vụ 2 (Phát triển hệ điều hành mới) là kĩ năng bắt buộc của mọi nhân viên bảo trì máy tính.",
          answer: false,
          explain:
            "Sai. Phát triển một hệ điều hành mới thuộc về lĩnh vực nghiên cứu và kĩ sư phần mềm mức độ cao, không phải là công việc chính của kĩ thuật viên sửa chữa, bảo trì máy tính thông thường.",
        },
        {
          text: "Nhiệm vụ 3 (Cài phần mềm, cấu hình mạng) đòi hỏi kĩ thuật viên có kiến thức phần mềm và mạng máy tính.",
          answer: true,
          explain:
            "Đúng. Cài đặt các phần mềm ứng dụng thuộc kiến thức phần mềm, còn cấu hình truy cập Internet đòi hỏi kiến thức cơ bản về kết nối và cấu hình mạng.",
        },
        {
          text: "Nhiệm vụ 4 (Tư vấn, giải thích cho khách) đòi hỏi nhân viên phải trang bị kĩ năng giao tiếp tốt.",
          answer: true,
          explain:
            "Đúng. Kĩ năng giao tiếp tốt giúp kĩ thuật viên lắng nghe yêu cầu của khách hàng, giải thích vấn đề và đưa ra giải pháp một cách rõ ràng, dễ hiểu.",
        },
      ],
    },
    {
      id: "b19-tf2",
      context:
        "Cuộc Cách mạng công nghiệp 4.0 đang thúc đẩy nhu cầu sử dụng thiết bị công nghệ và mở rộng mô hình làm việc từ xa. Điều này đặt ra những thách thức và cơ hội mới cho ngành dịch vụ sửa chữa và bảo trì máy tính.",
      code: "",
      statements: [
        {
          text: "Làm việc từ xa đòi hỏi kĩ thuật viên phải có kĩ năng chẩn đoán, sửa lỗi từ xa.",
          answer: true,
          explain:
            "Đúng. Khi người dùng làm việc từ xa, kĩ thuật viên không thể lúc nào cũng có mặt vật lí ngay lập tức, do đó kĩ năng hỗ trợ từ xa qua các phần mềm điều khiển là rất cần thiết.",
        },
        {
          text: "Sự bùng nổ thiết bị IoT sẽ làm suy giảm nhu cầu nhân lực của nghề sửa chữa máy tính.",
          answer: false,
          explain:
            "Sai. Thực tế là sự bùng nổ của các thiết bị kết nối sẽ khiến nhu cầu duy trì, bảo dưỡng hệ thống tăng lên, làm tăng nhu cầu nhân lực của ngành này.",
        },
        {
          text: "Bảo mật thông tin ngày càng quan trọng, đòi hỏi người làm nghề bảo trì nắm vững an toàn mạng.",
          answer: true,
          explain:
            "Đúng. Việc cấu hình phần mềm chống virus, bảo đảm an toàn dữ liệu và quét mã độc là yêu cầu cấp thiết để ngăn chặn các vụ xâm nhập trái phép hiện nay.",
        },
        {
          text: "Sinh viên học sửa chữa máy tính ở bậc Đại học chỉ thực hành tay nghề, không cần học nguyên lí.",
          answer: false,
          explain:
            "Sai. Bậc Cao đẳng, Trung cấp mới chú trọng chủ yếu vào rèn kĩ năng tay nghề. Bậc Đại học chú trọng vào nguyên lí, kĩ năng giải quyết các vấn đề phức tạp và có tính hệ thống cao hơn.",
        },
      ],
    },
    {
      id: "b19-tf3",
      context:
        "Anh Sùng, cựu học sinh của trường, về nói chuyện hướng nghiệp với lớp 12A. Anh kể mình học hệ Cao đẳng ngành Công nghệ kĩ thuật máy tính, ra trường làm ở một cửa hàng máy tính dưới thị trấn. Một ngày của anh thường gồm: sáng thay ổ cứng cho khách, trưa cài lại hệ điều hành và quét mã độc cho máy của một trường học, chiều sang công ty cấu hình lại mạng nội bộ, tối trả lời tin nhắn hướng dẫn khách tự khắc phục vài lỗi nhỏ. Anh nói nghề này bận nên phải biết sắp xếp thời gian, và học xong rồi vẫn phải tự đọc thêm liên tục vì thiết bị đổi mới rất nhanh.",
      statements: [
        {
          text: "Anh Sùng vừa thay ổ cứng vừa cài hệ điều hành cho thấy nghề này không tách rời phần cứng với phần mềm.",
          answer: true,
          explain:
            "Máy tính chỉ hoạt động được khi phần cứng và phần mềm phối hợp với nhau, nên trong quá trình sửa chữa và bảo trì thì hai mảng công việc này không thể tách rời.",
        },
        {
          text: "Kĩ năng quản lí thời gian và khả năng tự học là những kĩ năng cần thiết với người làm nghề này.",
          answer: true,
          explain:
            "Kĩ thuật viên thường phải xử lí nhiều yêu cầu trong ngày nên cần biết sắp xếp thời gian; công nghệ và thiết bị lại thay đổi nhanh nên phải tự học, tự tìm tài liệu liên tục.",
        },
        {
          text: "Vì học hệ Cao đẳng nên anh Sùng chỉ được học lí thuyết, không được thực hành sửa chữa máy.",
          answer: false,
          explain:
            "Ngược lại. Đào tạo bậc Cao đẳng thiên về thực hành và kĩ năng nghề để ra trường làm được việc ngay, còn bậc Đại học thiên về nền tảng lí thuyết và nghiên cứu.",
        },
        {
          text: "Việc quét mã độc và cấu hình phần mềm phòng chống virus không thuộc nhiệm vụ của người bảo trì máy tính.",
          answer: false,
          explain:
            "Đây đúng là một nhiệm vụ của nghề, thuộc nhóm công việc liên quan tới phần mềm: bảo đảm an toàn dữ liệu và giữ cho máy hoạt động ổn định cho người dùng.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b19-es1",
      q: "Trình bày các công việc chính của người làm nghề sửa chữa và bảo trì máy tính đối với phần cứng và phần mềm.",
      answer:
        "* Công việc liên quan tới phần cứng:\n- Kiểm soát và duy trì hoạt động vật lí của máy tính.\n- Xác định và khắc phục lỗi phần cứng, sửa chữa hoặc thay thế các linh kiện máy tính bị hỏng.\n- Phát hiện nguyên nhân hỏng thiết bị để quyết định sửa, thay thế hay cấu hình lại.\n- Nâng cấp hoặc bổ sung thiết bị (thay ổ cứng, RAM, lắp thêm thiết bị mạng).\n- Thay màn hình, thay bo mạch chủ (mainboard) khi cần thiết.\n\n* Công việc liên quan tới phần mềm:\n- Cài đặt, cập nhật phần mềm điều khiển thiết bị ngoại vi (driver).\n- Cài đặt, cấu hình hệ điều hành, cấu hình mạng và các ứng dụng văn phòng, trình duyệt web.\n- Đảm bảo tính bảo mật của hệ thống: cài đặt phần mềm phòng chống virus, quét mã độc, rà soát an toàn dữ liệu.\n- Cập nhật các phiên bản mới của phần mềm để máy tính hoạt động ổn định và hiệu quả.",
    },
    {
      id: "b19-es2",
      q: "Ngoài kiến thức chuyên môn, người làm nghề bảo trì và sửa chữa máy tính cần trang bị những kĩ năng mềm nào để đạt hiệu quả cao trong công việc? Trình bày ý nghĩa của từng kĩ năng đó.",
      answer:
        "Các kĩ năng mềm thiết yếu cho kĩ thuật viên bảo trì máy tính bao gồm:\n- Kĩ năng học hỏi, cập nhật kiến thức: Công nghệ thay đổi liên tục, do đó kĩ thuật viên cần thường xuyên theo dõi các thiết bị, phần mềm mới để không bị tụt hậu.\n- Kĩ năng giải quyết vấn đề: Khả năng phân tích tình huống thực tế, tìm kiếm, tra cứu tài liệu hướng dẫn trên Internet và diễn đàn kĩ thuật để đưa ra phương pháp khắc phục lỗi hợp lí.\n- Kĩ năng giao tiếp: Là khả năng thấu hiểu yêu cầu khách hàng, trình bày và tư vấn các giải pháp phức tạp bằng ngôn từ đơn giản, dễ hiểu để khách hàng có thể nắm bắt và đồng thuận.\n- Kĩ năng quản lí thời gian: Giúp kĩ thuật viên phân bổ thời gian hợp lí để hoàn thành công việc, dự án sửa chữa đúng hạn, đáp ứng yêu cầu nhanh chóng của khách hàng và duy trì sự chuyên nghiệp.",
    },
  ],
};

export default extra;
