import type { LessonExtra } from "@/lib/types";

// Bài 20. Nhóm nghề quản trị thuộc ngành Công nghệ thông tin — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b20-tf1",
      context:
        "Tập đoàn X quyết định chuyển đổi số hoàn toàn và sử dụng dịch vụ lưu trữ đám mây để quản lí toàn bộ dữ liệu khách hàng. Để đảm bảo hệ thống mới hoạt động trơn tru và an toàn, tập đoàn đã tuyển dụng một nhóm các chuyên gia Công nghệ thông tin.",
      code: "",
      statements: [
        {
          text: "Cài đặt và cấu hình phần mềm kế toán cho từng máy nhân viên là nhiệm vụ chính của chuyên gia quản trị mạng.",
          answer: false,
          explain:
            "Sai. Cài đặt phần mềm ứng dụng trên máy tính cá nhân thuộc về chuyên gia hỗ trợ kĩ thuật hoặc quản trị hệ thống, không phải chuyên môn chính của chuyên gia quản trị mạng (quản lí hạ tầng mạng, thiết bị mạng).",
        },
        {
          text: "Chuyên gia bảo mật thiết lập tường lửa và hệ thống phát hiện xâm nhập (IDS) để bảo vệ dữ liệu đám mây.",
          answer: true,
          explain:
            "Đúng. Nhiệm vụ của chuyên gia bảo mật là triển khai các biện pháp bảo mật, giám sát phát hiện xâm nhập (IDS, tường lửa) để bảo vệ hệ thống.",
        },
        {
          text: "Người quản trị và bảo trì hệ thống phải theo dõi hiệu suất máy chủ đám mây để hệ thống luôn ổn định.",
          answer: true,
          explain:
            "Đúng. Quản trị và bảo trì hệ thống là quản lí toàn bộ hệ thống (kể cả máy chủ đám mây), theo dõi hiệu suất và duy trì tính ổn định.",
        },
        {
          text: "Các chuyên gia chỉ cần giỏi kĩ thuật, không cần quan tâm luật quốc tế về quyền riêng tư dữ liệu.",
          answer: false,
          explain:
            "Sai. Kiến thức về Luật pháp và tuân thủ quy định là cực kì cần thiết để đảm bảo hệ thống không vi phạm các tiêu chuẩn quốc tế về bảo mật và quyền riêng tư dữ liệu (ví dụ GDPR).",
        },
      ],
    },
    {
      id: "b20-tf2",
      context:
        "Sinh viên A đang theo học ngành 'Mạng máy tính và truyền thông dữ liệu'. Mục tiêu nghề nghiệp của A là trở thành một chuyên gia an ninh mạng xuất sắc.",
      code: "",
      statements: [
        {
          text: "Ngành học của A phù hợp và liên quan trực tiếp đến nhóm nghề quản trị mạng, bảo mật thông tin.",
          answer: true,
          explain:
            "Đúng. Ngành 'Mạng máy tính và truyền thông dữ liệu' cung cấp kiến thức nền tảng vững chắc để phát triển thành chuyên gia mạng hoặc an ninh mạng.",
        },
        {
          text: "A cần tìm hiểu cách các cuộc tấn công mạng như DoS hoạt động để biết cách phòng thủ.",
          answer: true,
          explain:
            "Đúng. Để bảo vệ hệ thống, chuyên gia an ninh mạng phải nắm được các phương thức tấn công (như DoS, lỗ hổng) để triển khai biện pháp ngăn chặn (như IDS).",
        },
        {
          text: "Để thành công, A chỉ cần chứng chỉ kĩ năng cứng, không cần giao tiếp hay làm việc nhóm.",
          answer: false,
          explain:
            "Sai. Bên cạnh kiến thức kĩ thuật, kĩ năng mềm như giao tiếp, quản lí thời gian, làm việc nhóm là rất cần thiết để nâng cao hiệu quả làm việc.",
        },
        {
          text: "Nhờ có AI hỗ trợ, A sẽ không cần tự học thêm kiến thức mới sau khi tốt nghiệp.",
          answer: false,
          explain:
            "Sai. Kĩ năng tự nghiên cứu, học hỏi là yếu tố bắt buộc vì công nghệ liên tục thay đổi. AI chỉ là công cụ hỗ trợ, người quản trị vẫn phải không ngừng cập nhật để làm chủ công cụ đó.",
        },
      ],
    },
    {
      id: "b20-tf3",
      context:
        "Trường THPT Phục Hòa lắp thêm một phòng máy mới và hệ thống camera nối Internet. Thầy phụ trách công nghệ thông tin cấu hình bộ định tuyến, theo dõi hiệu suất và xử lí sự cố để mạng luôn ổn định, đồng thời cài một hệ thống phát hiện xâm nhập để cảnh báo truy cập bất thường. Thầy nhắc tới vụ mã độc WannaCry năm 2017 từng làm tê liệt nhiều cơ quan trên thế giới, và mỗi chiếc camera nối mạng cũng là một cửa ngõ có thể bị tấn công.",
      statements: [
        {
          text: "Cấu hình bộ định tuyến, theo dõi hiệu suất và xử lí sự cố đường truyền là việc của quản trị mạng.",
          answer: true,
          explain:
            "Đây đúng là nhiệm vụ của người quản trị mạng: cài đặt, cấu hình, theo dõi hiệu suất và xử lí các sự cố để bảo đảm mạng lưới luôn hoạt động ổn định.",
        },
        {
          text: "Hệ thống phát hiện xâm nhập (IDS) được triển khai để phát hiện và cảnh báo các truy cập bất thường.",
          answer: true,
          explain:
            "IDS là công cụ của chuyên gia bảo mật, theo dõi lưu lượng và hoạt động của hệ thống để phát hiện dấu hiệu xâm nhập rồi đưa ra cảnh báo kịp thời.",
        },
        {
          text: "Vụ WannaCry năm 2017 cho thấy chỉ cần cài một phần mềm diệt virus là hệ thống đã an toàn tuyệt đối.",
          answer: false,
          explain:
            "WannaCry cho thấy điều ngược lại: an toàn thông tin đòi hỏi cả một quy trình gồm vá lỗ hổng, sao lưu dữ liệu, giám sát và ứng phó sự cố. Không có biện pháp đơn lẻ nào mang lại an toàn tuyệt đối.",
        },
        {
          text: "Các thiết bị IoT như camera nối mạng không làm tăng nguy cơ mất an toàn vì chúng không lưu dữ liệu.",
          answer: false,
          explain:
            "Sự phát triển của IoT làm tăng đáng kể số lượng thiết bị nối mạng cần được quản lí và bảo vệ. Mỗi thiết bị là một điểm có thể bị khai thác để xâm nhập vào toàn hệ thống, dù bản thân nó lưu ít dữ liệu.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b20-es1",
      q: "Phân biệt rõ nhiệm vụ cốt lõi của ba công việc: Quản trị mạng, Bảo mật hệ thống thông tin, và Quản trị & bảo trì hệ thống. Tại sao trong môi trường doanh nghiệp hiện đại, các chuyên gia này thường phải phối hợp chặt chẽ với nhau?",
      answer:
        "* Phân biệt nhiệm vụ cốt lõi:\n- Quản trị mạng: Chuyên về hạ tầng giao tiếp. Nhiệm vụ là cài đặt, cấu hình, duy trì mạng (cáp, router, firewall) để đảm bảo kết nối thông suốt, theo dõi lưu lượng mạng.\n- Bảo mật hệ thống thông tin: Chuyên về an toàn dữ liệu. Nhiệm vụ là triển khai các biện pháp bảo mật (IDS), giám sát mạng phát hiện xâm nhập, xử lí sự cố rò rỉ dữ liệu hoặc tấn công (như DoS, WannaCry).\n- Quản trị và bảo trì hệ thống: Chuyên về nền tảng ứng dụng. Nhiệm vụ là quản lí toàn bộ hệ thống máy chủ, hệ điều hành, cài đặt và cập nhật phần mềm, đảm bảo hiệu suất và độ sẵn sàng của máy chủ.\n\n* Sự phối hợp chặt chẽ:\nTrong môi trường hiện đại, một sự cố thường liên quan đến nhiều tầng kĩ thuật. Ví dụ, một cuộc tấn công mạng (bảo mật) có thể làm tê liệt băng thông (mạng) và gây quá tải máy chủ (hệ thống). Do đó, ba vị trí này phải phối hợp để phòng ngừa rủi ro, cô lập lỗi và khắc phục sự cố một cách toàn diện và nhanh chóng nhất.",
    },
    {
      id: "b20-es2",
      q: "Nêu các yếu tố chính làm gia tăng mạnh mẽ nhu cầu tuyển dụng các chuyên gia bảo mật hệ thống thông tin trong bối cảnh toàn cầu hoá và chuyển đổi số hiện nay. Liên hệ với thực tiễn các vụ tấn công mạng nổi tiếng (ví dụ: WannaCry) để làm rõ luận điểm của em.",
      answer:
        "Nhu cầu tuyển dụng chuyên gia bảo mật tăng cao do các yếu tố:\n1. Nguy cơ tấn công ngày càng phức tạp: Các mã độc, phần mềm tống tiền, tấn công có tổ chức ngày càng tinh vi, đòi hỏi chuyên gia giỏi để đối phó.\n2. Sự bùng nổ chuyển đổi số: Lượng dữ liệu số hoá khổng lồ, đặc biệt là dữ liệu cá nhân, tài chính cần được bảo vệ tuyệt đối khỏi sự rò rỉ.\n3. Sự dịch chuyển sang dịch vụ đám mây: Lưu trữ trên mạng đem lại nhiều rủi ro, cần các cấu hình bảo mật trực tuyến tiên tiến.\n4. Sự phát triển của IoT: Số lượng thiết bị kết nối tăng vọt đồng nghĩa với việc mở rộng diện tấn công, tạo ra nhiều lỗ hổng mới.\n5. Các quy định pháp luật: Chính phủ ban hành luật lệ khắt khe về bảo mật dữ liệu, buộc doanh nghiệp phải có chuyên viên tuân thủ.\n\n* Liên hệ thực tiễn:\nVụ tấn công mã độc tống tiền WannaCry (2017) đã mã hoá dữ liệu của hàng trăm ngàn máy tính trên toàn cầu, gây thiệt hại hàng tỉ USD, làm tê liệt hệ thống y tế ở nhiều quốc gia. Sự cố này chứng minh rằng, lỗ hổng nhỏ có thể mang lại hậu quả thảm khốc tầm quốc tế. Nó trở thành hồi chuông cảnh tỉnh, buộc mọi tổ chức phải ưu tiên tuyển dụng chuyên gia bảo mật, thiết lập hệ thống phòng ngự vững chắc để bảo đảm an toàn dữ liệu và danh tiếng công ty.",
    },
  ],
};

export default extra;
