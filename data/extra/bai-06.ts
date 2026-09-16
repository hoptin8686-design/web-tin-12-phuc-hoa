import type { LessonExtra } from "@/lib/types";

// Bài 6. Giao tiếp và ứng xử trong không gian mạng — câu đúng/sai + tự luận
// (SGK trang 34-38). Câu tf3 dùng tình huống nội dung giả mạo do AI tạo sinh
// (deepfake) theo phần tích hợp AI của KHGD — bám vào yêu cầu của SGK là
// "kiểm tra tính chính xác của thông tin trước khi chia sẻ".
const extra: LessonExtra = {
  tf: [
    {
      id: "b6-tf1",
      context:
        "Đợt mưa lũ, đường vào xã sạt lở nên lớp 12A học trực tuyến một tuần qua phần mềm hội nghị truyền hình; các bạn ở bản xa vẫn theo được bài mà không phải đi bộ mấy cây số đường trơn. Nhưng Dín kể có hôm mạng chập chờn, cô giảng đứt quãng phải học lại. Mai thì nhắn tin hỏi bài một bạn, viết cụt lủn quá nên bạn kia tưởng Mai đang giận, hai bạn hiểu lầm nhau mấy hôm mới nói lại được.",
      statements: [
        {
          text: "Việc các bạn ở bản xa vẫn học được mà không phải đi bộ thể hiện ưu điểm thuận tiện, tiết kiệm.",
          answer: true,
          explain:
            "Giao tiếp trực tuyến thực hiện được mọi nơi, mọi lúc miễn là có kết nối mạng, đồng thời tiết kiệm thời gian và chi phí di chuyển — đúng hai ưu điểm đầu tiên sách nêu.",
        },
        {
          text: "Chuyện mạng chập chờn làm cô giảng đứt quãng là nhược điểm dễ bị ảnh hưởng bởi sự cố kĩ thuật.",
          answer: true,
          explain:
            "Các sự cố kĩ thuật như mất kết nối mạng và phần mềm không tương thích có thể cản trở giao tiếp trực tuyến, làm giao tiếp bị trì hoãn hoặc gián đoạn.",
        },
        {
          text: "Việc Mai và bạn hiểu lầm nhau là do phần mềm nhắn tin bị lỗi chứ không phải nhược điểm của giao tiếp trực tuyến.",
          answer: false,
          explain:
            "Đây chính là nhược điểm thiếu tín hiệu phi ngôn ngữ: tin nhắn không có nét mặt, ngôn ngữ cơ thể và biểu cảm giọng nói nên khó truyền đạt cảm xúc, dẫn tới hiểu lầm không đáng có.",
        },
        {
          text: "Học trực tuyến không có nhược điểm nào, vì chỉ cần có mạng là hiệu quả y hệt như học trực tiếp.",
          answer: false,
          explain:
            "Sách nêu rõ giao tiếp trong không gian mạng cũng có nhiều nhược điểm và có thể dẫn đến trải nghiệm giao tiếp kém hiệu quả hơn so với giao tiếp trực tiếp.",
        },
      ],
    },
    {
      id: "b6-tf2",
      context:
        "Giờ ra chơi, hai bạn lớp bên xô xát nhau. Một bạn lớp 12A quay được video và định đăng lên mạng xã hội cho \"mọi người biết\". Páo ngăn lại, nói đăng lên sẽ làm hai bạn kia xấu hổ và câu chuyện lan đi không kiểm soát được. Cũng hôm đó, một bạn khác chụp trộm trang nhật kí của bạn cùng bàn — viết về điều bạn ấy không hài lòng với một bạn trong lớp — rồi gửi cho mấy bạn khác xem cho vui.",
      statements: [
        {
          text: "Việc Páo ngăn không cho đăng đoạn video lên mạng là một biểu hiện của ứng xử nhân văn.",
          answer: true,
          explain:
            "Đây đúng là trường hợp sách đưa ra: ngăn không cho bạn gửi lên mạng video quay cảnh hai bạn đánh nhau chính là ứng xử nhân văn, vì tránh làm tổn hại danh tiếng của người khác.",
        },
        {
          text: "Chụp trang nhật kí của bạn rồi gửi cho người khác là hành vi xâm phạm quyền riêng tư, không nhân văn.",
          answer: true,
          explain:
            "Tôn trọng bao gồm tôn trọng quyền riêng tư và không phát tán thông tin riêng tư của người khác khi chưa có sự cho phép của họ.",
        },
        {
          text: "Vì video quay đúng sự thật nên đăng lên mạng xã hội là việc nên làm, giúp mọi người rút kinh nghiệm.",
          answer: false,
          explain:
            "Nội dung đúng sự thật vẫn có thể làm tổn hại danh tiếng và quyền riêng tư của người khác. Trước khi đăng hay chia sẻ, phải cân nhắc để đảm bảo không gây tổn thương cho người khác.",
        },
        {
          text: "Nhật kí đã bị bạn cùng bàn để hở ra thì ai chụp lại và gửi đi cũng được, không vi phạm gì.",
          answer: false,
          explain:
            "Sơ ý của người khác không tạo ra quyền phát tán thông tin riêng tư của họ. Đây vẫn là hành vi xâm phạm quyền riêng tư và làm người khác tổn thương.",
        },
      ],
    },
    {
      id: "b6-tf3",
      context:
        "Trên nhóm Zalo của thôn lan truyền một video: người rất giống ông trưởng thôn kêu gọi bà con chuyển tiền vào một tài khoản để ủng hộ đồng bào vùng lũ. Mặt và giọng đều giống thật, nhiều người định chuyển tiền ngay. Páo xem kĩ thấy khẩu hình chưa khớp tiếng, không ai tìm được bản gốc. Páo gọi hỏi trực tiếp thì ông trưởng thôn khẳng định chưa từng quay video nào như vậy.",
      statements: [
        {
          text: "Việc Páo kiểm tra tính chính xác của thông tin trước khi tin và chia sẻ là đúng nguyên tắc ứng xử trên mạng.",
          answer: true,
          explain:
            "Sách yêu cầu khi đăng bài hoặc chia sẻ thông tin, hãy đọc kĩ nội dung và kiểm tra tính chính xác của nó; đồng thời chia sẻ thông tin chính xác, đáng tin cậy và tránh lan truyền thông tin sai lệch hoặc tin đồn.",
        },
        {
          text: "Đây nhiều khả năng là nội dung giả mạo do AI tạo sinh, thường được gọi là deepfake.",
          answer: true,
          explain:
            "Mặt và giọng giống người thật, khẩu hình lệch, không có bản gốc, người trong video phủ nhận — đó là các dấu hiệu quen thuộc của video ghép mặt, nhái giọng bằng AI tạo sinh.",
        },
        {
          text: "Vì mặt và giọng giống hệt ông trưởng thôn nên chắc chắn đó là video thật.",
          answer: false,
          explain:
            "Công cụ AI hiện nay dựng được cả khuôn mặt lẫn giọng nói rất giống thật, nên \"trông giống thật\" không còn là bằng chứng cho tính xác thực của một đoạn video.",
        },
        {
          text: "Cứ chia sẻ lại cho nhiều người cùng biết đã, đúng sai tính sau, vì như thế là đang giúp đỡ bà con.",
          answer: false,
          explain:
            "Chia sẻ khi chưa kiểm chứng chính là lan truyền thông tin sai lệch, ở đây còn có thể khiến bà con mất tiền. Hỗ trợ người khác phải đi cùng với việc bảo đảm thông tin chính xác, đáng tin cậy.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b6-es1",
      q: "Không gian mạng là gì? Phân tích ưu điểm và nhược điểm của giao tiếp trong không gian mạng.",
      answer:
        "* KHÁI NIỆM: Không gian mạng (còn gọi là thế giới ảo) là môi trường được tạo ra nhờ sử dụng mạng máy tính, trong đó Internet có thể được coi là không gian mạng lớn nhất. Không gian mạng cho phép con người giao tiếp với nhau thông qua các phần mềm và dịch vụ giao tiếp trực tuyến như mạng xã hội, thư điện tử, ứng dụng nhắn tin, gọi điện thoại video, diễn đàn trực tuyến, nhật kí web (blog), trang web cá nhân, trang thương mại điện tử…\n\n* BỐN ƯU ĐIỂM\n\n1. THUẬN TIỆN — thực hiện được mọi nơi, mọi lúc, miễn là có kết nối mạng. Đặc biệt có lợi cho những người không có điều kiện giao tiếp trực tiếp, chẳng hạn những người sống xa nhau.\n\n2. TIẾT KIỆM THỜI GIAN VÀ CHI PHÍ — so với giao tiếp trực tiếp, tiết kiệm thời gian và chi phí di chuyển nhưng vẫn đảm bảo hiệu quả công việc. Ví dụ: hội nghị truyền hình giảm nhu cầu đi lại và chi phí ăn ở; điện thoại video giúp con người gần nhau hơn khi không có điều kiện sống cùng nhau.\n\n3. MỞ RỘNG KẾT NỐI XÃ HỘI — dễ dàng mở rộng mạng lưới quan hệ xã hội, kết nối nhiều người cùng sở thích, quan điểm hoặc nhu cầu. Cũng là cách xây dựng thương hiệu cá nhân hoặc doanh nghiệp qua các kênh truyền thông xã hội.\n\n4. CÔNG CỤ GIAO TIẾP ĐA DẠNG — hội nghị truyền hình, nhắn tin nhanh, thư điện tử, mạng xã hội… cho phép người dùng lựa chọn công cụ phù hợp nhất với nhu cầu liên lạc của mình.\n\n* BỐN NHƯỢC ĐIỂM (ngoài hậu quả tổn hại tinh thần và vật chất do \"nghiện mạng\")\n\n1. THIẾU TÍN HIỆU PHI NGÔN NGỮ — thư điện tử hay tin nhắn thiếu nét mặt, ngôn ngữ cơ thể và biểu cảm giọng nói, gây khó khăn cho việc truyền đạt cảm xúc và dẫn đến những hiểu lầm không đáng có.\n\n2. ẨN CHỨA NHIỀU NGUY CƠ VỀ BẢO MẬT VÀ QUYỀN RIÊNG TƯ — có thể bị lộ mật khẩu truy cập, bị tấn công mạng; dữ liệu bị xâm phạm, thông tin riêng tư và nhạy cảm bị lộ lọt hoặc bị tấn công bởi kẻ xấu.\n\n3. THIẾU KẾT NỐI QUAN HỆ CÁ NHÂN CHẶT CHẼ — người dùng dễ dàng giấu mặt, tạo ra bản sao không đầy đủ của bản thân hoặc giả mạo thông tin, khiến người khác khó đánh giá tính chân thật của thông tin và sự thật về người đối diện; gây khó khăn cho việc xây dựng mối quan hệ và lòng tin.\n\n4. DỄ BỊ ẢNH HƯỞNG BỞI SỰ CỐ KĨ THUẬT — mất kết nối mạng, phần mềm không tương thích làm giao tiếp bị trì hoãn hoặc gián đoạn.\n\n* KẾT LUẬN: giao tiếp trong không gian mạng có nhiều ưu điểm song cũng tiềm ẩn những nhược điểm, đòi hỏi người dùng phải biết ứng xử đúng cách.",
    },
    {
      id: "b6-es2",
      q: "Nêu các yếu tố thể hiện tính nhân văn khi giao tiếp trong không gian mạng và các cách hình thành thói quen ứng xử nhân văn. Cho ví dụ ứng xử nhân văn trong hai tình huống cụ thể.",
      answer:
        "* BỐN YẾU TỐ CỦA ỨNG XỬ NHÂN VĂN\n\n1. TÔN TRỌNG — tôn trọng quyền riêng tư, không phát tán thông tin riêng tư của người khác mà không có sự cho phép của họ; tôn trọng quan điểm và suy nghĩ của mỗi người, không bắt buộc họ phải chấp nhận hoặc chia sẻ quan điểm của mình; không châm chọc hoặc làm cho người khác cảm thấy bị tổn thương.\n\n2. LỊCH SỰ — sử dụng ngôn từ đúng mực, không dùng ngôn từ nhạy cảm, lăng mạ, châm chọc, phỉ báng hoặc phân biệt chủng tộc, giới tính, tôn giáo; tránh dùng ngôn ngữ chuyên ngành hoặc từ lóng không phổ biến; chia sẻ thông tin chính xác và đáng tin cậy, tránh lan truyền thông tin sai lệch hoặc tin đồn; tránh gửi thư rác hoặc quảng cáo không liên quan.\n\n3. THẤU HIỂU — cảm thông với người khác và hiểu được những khó khăn họ đang gặp phải; đặt mình vào hoàn cảnh của người khác để hiểu suy nghĩ, tình cảm và vấn đề của họ.\n\n4. HỖ TRỢ — luôn sẵn lòng giúp đỡ người khác khi họ gặp khó khăn, đôi khi chỉ là lời động viên chân thành, tin nhắn an ủi kịp thời hay biểu cảm sẻ chia. Hỗ trợ nhau là cách xây dựng một cộng đồng trực tuyến mạnh mẽ.\n\n* NĂM CÁCH HÌNH THÀNH THÓI QUEN ỨNG XỬ NHÂN VĂN\n\n1. Tự kiểm tra, cải thiện hành vi trực tuyến của mình — xem lại và tự đánh giá hành vi của mình trên mạng xã hội, trong các cuộc trò chuyện, thư điện tử; nếu thấy chưa đúng mực hoặc thiếu nhân văn thì cố gắng sửa đổi.\n2. Bình tĩnh lắng nghe và tôn trọng ý kiến của người khác — nếu không đồng ý thì đưa ra lí do và phản bác một cách lịch sự.\n3. Học cách xử lí các tình huống khó xử — nếu không chắc chắn, hãy tìm sự giúp đỡ từ người có kinh nghiệm hoặc tài liệu hướng dẫn trực tuyến.\n4. Cẩn trọng với ngôn từ và cách viết — chú ý để nội dung không gây hiểu nhầm hoặc mang tính khiêu khích.\n5. Đối xử với người khác theo cách mà mình muốn được đối xử.\n\n* VÍ DỤ TRONG TÌNH HUỐNG CỤ THỂ (chọn hai trong số các tình huống sau)\n\n- Trên diễn đàn, nếu không đồng ý với ý kiến của ai đó: trao đổi lịch sự, không bao giờ dùng ngôn ngữ khiêu khích hoặc phân biệt chủng tộc, giới tính, tôn giáo, không tấn công cá nhân; giữ bình tĩnh trong các tình huống khó chịu hoặc bị xúc phạm.\n- Khi thảo luận trên mạng xã hội: đọc kĩ bài viết của người khác trước khi đưa ra ý kiến; nếu có ý kiến trái ngược thì trao đổi lịch sự trên tinh thần tôn trọng quan điểm của họ.\n- Khi dùng thư hoặc tin nhắn điện tử: viết lịch sự, tôn trọng quyền riêng tư của người nhận, không chia sẻ thông tin trao đổi riêng giữa hai người với bên thứ ba khi chưa được phép.\n- Khi trò chuyện qua video: mặc quần áo lịch sự, không để lộ vật dụng hoặc cảnh quan không phù hợp, giữ thái độ đúng đắn trong suốt cuộc trò chuyện.\n- Khi đăng bài hoặc chia sẻ thông tin: đọc kĩ nội dung và kiểm tra tính chính xác để đảm bảo không làm tổn hại đến danh tiếng hoặc quyền riêng tư của người khác.",
    },
  ],
};

export default extra;
