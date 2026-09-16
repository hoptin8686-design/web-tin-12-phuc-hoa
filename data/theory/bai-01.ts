import type { LessonTheory } from "@/lib/types";

// Bài 1. Làm quen với Trí tuệ nhân tạo — SGK Tin học 12 (ICT, Kết nối tri thức),
// trang 5–8. Bám sát nội dung và thuật ngữ của sách: "phép thử Turing",
// "Hội thảo Dartmouth", "Trí tuệ nhân tạo hẹp/yếu", "Trí tuệ nhân tạo tổng
// quát/mạnh". Các ví dụ đời thường thêm vào chỉ để giải thích, không thay
// đổi kiến thức.

const theory: LessonTheory = {
  minutes: 8,
  intro:
    "Ngày nào em cũng gặp AI: điện thoại mở khoá bằng khuôn mặt, YouTube gợi ý đúng bài em thích, Google dịch một câu tiếng Anh trong nháy mắt. Bài này trả lời hai câu hỏi: **AI thật ra là gì**, và **làm sao phân biệt AI với máy móc tự động thông thường**.",

  sections: [
    {
      id: "ai-la-gi",
      emoji: "🧠",
      heading: "AI là gì?",
      blocks: [
        {
          kind: "text",
          text: "Người xưa đã mơ về những cỗ máy biết suy nghĩ, nhưng chỉ là huyền thoại. Vấn đề khó nhất là: **đánh giá thế nào thì gọi là “thông minh”?** Năm 1950, nhà khoa học Alan Turing đưa ra một cách thử rất khéo, sau này gọi là **phép thử Turing**.",
        },
        {
          kind: "figure",
          diagram: "turing-test",
          caption: "Phép thử Turing (1950) — cách đầu tiên để đánh giá máy có hành vi thông minh hay không",
        },
        {
          kind: "text",
          text: "Sáu năm sau, năm 1956, một hội thảo ở **Đại học Dartmouth** (bang New Hampshire, Mỹ) quy tụ nhiều nhà khoa học máy tính hàng đầu thế giới. Hội thảo này được coi là **mốc ra đời của thuật ngữ AI**, mở đầu cho cả lĩnh vực Trí tuệ nhân tạo.",
        },
        {
          kind: "steps",
          items: [
            {
              label: "1950",
              title: "Phép thử Turing",
              text: "Alan Turing đưa ra cách đánh giá khả năng thể hiện hành vi thông minh của máy tính.",
            },
            {
              label: "1956",
              title: "Hội thảo Dartmouth",
              text: "Điểm mốc ghi nhận sự ra đời của thuật ngữ **AI**, khởi đầu lĩnh vực Trí tuệ nhân tạo.",
            },
          ],
        },
        {
          kind: "note",
          text: "**AI là khả năng của máy tính có thể làm những công việc mang tính trí tuệ của con người** như đọc chữ, hiểu tiếng nói, dịch thuật, lái xe hay khả năng học và ra quyết định,…",
        },
        {
          kind: "text",
          text: "“Công việc mang tính trí tuệ” là công việc mà khi làm phải trải qua **quá trình trí tuệ đặc trưng của con người**: khả năng suy luận, khái quát hoá, ra quyết định… Mục tiêu của việc phát triển ứng dụng AI là xây dựng các phần mềm giúp máy tính có được những năng lực trí tuệ như con người.",
        },
      ],
    },

    {
      id: "dac-trung",
      emoji: "✨",
      heading: "5 đặc trưng",
      blocks: [
        {
          kind: "text",
          text: "Khi nói tới AI, người ta hay nhắc tới năm khả năng cơ bản dưới đây. Em để ý: mỗi khả năng đều là một việc mà **trước đây chỉ con người mới làm được**.",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "📈",
              title: "Khả năng học",
              text: "Nắm bắt thông tin từ dữ liệu và tự điều chỉnh hành vi theo thông tin mới. *YouTube học từ lịch sử xem video của em rồi gợi ý bài hát mới.*",
            },
            {
              emoji: "🔍",
              title: "Khả năng suy luận",
              text: "Vận dụng logic và tri thức để đưa ra kết luận. *Hệ chẩn đoán y tế dựa vào tri thức về triệu chứng và bệnh lí để kết luận tình trạng sức khoẻ.*",
            },
            {
              emoji: "👁️",
              title: "Khả năng nhận thức",
              text: "Cảm nhận và hiểu môi trường xung quanh qua cảm biến. *Xe tự lái dùng radar và camera để nhận biết xe cộ, chướng ngại vật, biển báo, người đi bộ.*",
            },
            {
              emoji: "💬",
              title: "Khả năng hiểu ngôn ngữ",
              text: "Hiểu và xử lí ngôn ngữ tự nhiên của con người, cả văn bản lẫn tiếng nói. *Google, Bing hiểu được yêu cầu tra cứu gõ vào hoặc nói ra.*",
            },
            {
              emoji: "🧩",
              title: "Khả năng giải quyết vấn đề",
              text: "Tìm cách xử lí tình huống phức tạp dựa trên thông tin và tri thức. *Hệ dự báo thời tiết dựa vào dữ liệu thời tiết trước đây để dự báo cho thời gian tới.*",
            },
          ],
        },
        {
          kind: "text",
          text: "Không ứng dụng nào có đủ cả năm ở mức hoàn hảo. Bất kì ứng dụng AI nào cũng **kết hợp một số đặc trưng ở các mức độ khác nhau** — chỗ này chính là điểm để phân biệt AI với tự động hoá ở mục sau.",
        },
        {
          kind: "check",
          q: "Xe tự lái dùng camera và radar để “nhìn thấy” biển báo, người đi bộ. Đó là đặc trưng nào của AI?",
          options: ["Khả năng học", "Khả năng nhận thức", "Khả năng hiểu ngôn ngữ", "Khả năng suy luận"],
          answer: 1,
          explain:
            "**Khả năng nhận thức** — cảm nhận và hiểu môi trường xung quanh thông qua các cảm biến và dữ liệu đầu vào. Xe tự lái còn dùng thêm các đặc trưng khác, nhưng riêng việc “nhìn thấy” là nhận thức.",
        },
      ],
    },

    {
      id: "khac-tu-dong-hoa",
      emoji: "⚙️",
      heading: "AI ≠ tự động hoá",
      blocks: [
        {
          kind: "text",
          text: "Đây là chỗ dễ nhầm nhất của cả bài. Máy móc chạy tự động **chưa chắc** đã là AI. Điều làm nên khác biệt là có hay không những đặc trưng trí tuệ vừa học ở trên.",
        },
        {
          kind: "compare",
          left: {
            emoji: "🔁",
            title: "Chỉ là tự động hoá",
            items: [
              "Lặp đi lặp lại **một vài thao tác cố định, đơn điệu**",
              "Không học, không suy luận, không hiểu gì cả",
              "Ấm đun nước tự ngắt điện khi nước sôi",
              "Cửa siêu thị tự mở khi có người tới gần",
              "Guồng nước ở vùng quê quay nhờ dòng chảy tự nhiên",
              "Dây chuyền lắp ráp, robot cơ giới hoá trong nhà máy",
            ],
          },
          right: {
            emoji: "🧠",
            title: "Là ứng dụng AI",
            items: [
              "Có kết hợp **các đặc trưng trí tuệ** ở mức độ khác nhau",
              "Biết học từ dữ liệu, biết suy luận, biết hiểu",
              "Máy tìm kiếm hiểu được yêu cầu tra cứu của em",
              "Xe tự lái nhận biết biển báo và người đi đường",
              "Trợ lí ảo trò chuyện bằng chính tiếng nói của em",
            ],
          },
        },
        {
          kind: "example",
          title: "Vì sao ấm đun nước tự ngắt không phải AI?",
          text: "Nó chỉ làm đúng **một việc cố định**: nước đạt 100°C thì ngắt điện. Nó không học được gì mới, không suy luận, không hiểu nước đang dùng để pha trà hay nấu mì. Hiệu suất cao nhưng **không có đặc trưng trí tuệ nào** — nên đó là tự động hoá, không phải AI.",
        },
        {
          kind: "note",
          text: "Các hệ thống tự động hoá như dây chuyền lắp ráp, robot cơ giới hoá **đều không được coi là hệ thống có ứng dụng AI**, dù chúng đạt hiệu suất rất cao trong nhiều công việc cụ thể.",
        },
        {
          kind: "check",
          q: "Trường hợp nào sau đây KHÔNG được coi là ứng dụng của AI?",
          options: [
            "Tìm kiếm thông tin trên Internet nhờ máy tìm kiếm",
            "Guồng nước ở vùng quê quay nhờ dòng chảy của khe suối",
            "Trợ lí ảo đọc tin nhắn theo yêu cầu bằng lời nói",
            "Phần mềm nhận dạng khuôn mặt để mở khoá điện thoại",
          ],
          answer: 1,
          explain:
            "**Guồng nước** chỉ quay nhờ dòng chảy tự nhiên và chuyển nước lên các đường dẫn — một chuyển động cơ học lặp lại, không có đặc trưng trí tuệ nào. Ba trường hợp còn lại đều cần hiểu ngôn ngữ, nhận thức hoặc học từ dữ liệu.",
        },
      ],
    },

    {
      id: "hai-loai-ai",
      emoji: "🪜",
      heading: "Hai loại AI",
      blocks: [
        {
          kind: "text",
          text: "Theo chức năng, AI được chia thành hai loại chính. Em nhớ kĩ cặp tên gọi này, vì mỗi loại có **hai cách gọi** đều được dùng trong sách.",
        },
        {
          kind: "figure",
          diagram: "ai-hep-va-manh",
          caption: "Hai loại AI theo chức năng — hiện nay ta mới đang ở nấc bên trái",
        },
        {
          kind: "text",
          text: "**Trí tuệ nhân tạo tổng quát** (hay Trí tuệ nhân tạo mạnh) có khả năng tự học, tự thích nghi và thực hiện được nhiều công việc giống như con người. Đây đang là **mục tiêu dài hạn** của các nghiên cứu về AI, **trong thực tế hiện vẫn chưa đạt được**.",
        },
        {
          kind: "update",
          title: "Ranh giới giữa hai loại đang mờ dần",
          text: "Kết luận của SGK **vẫn đúng**: đến nay vẫn chưa đạt được Trí tuệ nhân tạo tổng quát. Nhưng mô tả kinh điển “AI chỉ giỏi đúng một việc” thì đã lỏng đi nhiều — các mô hình ngôn ngữ lớn ngày nay dùng **cùng một mô hình** để dịch thuật, viết văn bản, lập trình, đọc hiểu hình ảnh… Khoảng cách giữa hai loại hẹp hơn hẳn so với lúc sách được viết, dù mục tiêu **tự học và tự thích nghi ở mọi lĩnh vực như con người** thì vẫn chưa tới.",
        },
        {
          kind: "check",
          q: "Một chương trình máy tính chơi cờ rất giỏi, thắng cả kì thủ vô địch, nhưng không làm được việc gì khác. Đó là loại AI nào?",
          options: [
            "Trí tuệ nhân tạo tổng quát (mạnh)",
            "Trí tuệ nhân tạo hẹp (yếu)",
            "Không phải AI, chỉ là tự động hoá",
            "Vừa hẹp vừa tổng quát",
          ],
          answer: 1,
          explain:
            "**Trí tuệ nhân tạo hẹp** (Trí tuệ nhân tạo yếu) — được thiết kế để thực hiện một nhiệm vụ cụ thể. Chơi cờ giỏi đến đâu mà chỉ làm được đúng việc đó thì vẫn là AI hẹp. Toàn bộ thành tựu AI hiện nay đều thuộc loại này.",
        },
      ],
    },

    {
      id: "ung-dung",
      emoji: "🌍",
      heading: "Ứng dụng",
      blocks: [
        {
          kind: "text",
          text: "Sáu ứng dụng tiêu biểu dưới đây trải dài từ năm 1972 tới nay — mỗi cái minh hoạ cho một nhóm đặc trưng trí tuệ khác nhau.",
        },
        {
          kind: "cards",
          tone: "coral",
          items: [
            {
              emoji: "💊",
              title: "Hệ chuyên gia MYCIN",
              text: "Phát triển tại Đại học Stanford (Mỹ) **từ năm 1972**. Khoảng **600 luật suy diễn** dạng “nếu có triệu chứng A1, A2,… thì kết luận B”. Người dùng trả lời “có/không”, MYCIN đưa ra danh sách vi khuẩn nghi là thủ phạm gây nhiễm trùng máu và đề xuất kháng sinh. Nó **chưa dùng Học máy** nhưng là bước quan trọng của lĩnh vực này.",
            },
            {
              emoji: "🤖",
              title: "Robot Asimo",
              text: "Của hãng **Honda**, xuất hiện lần đầu **năm 1986** — robot hình dạng người đầu tiên trên thế giới tích hợp nhiều ứng dụng AI: tự di chuyển bằng hai chân, có thị giác máy để “nhìn thấy”, nhận dạng tiếng nói và biết chào hỏi. Asimo từng mở cửa Sàn giao dịch chứng khoán New York (2002), làm nhạc trưởng dàn nhạc giao hưởng Detroit (2008), chơi bóng cùng cựu Tổng thống Obama (2014).",
            },
            {
              emoji: "🌐",
              title: "Google dịch",
              text: "Dịch vụ dịch thuật miễn phí do Google phát triển vào **tháng 4 năm 2006**. Dịch được từ, cụm từ, tệp văn bản và cả trang web; tự động phát hiện ngôn ngữ, nhận ra chữ trong hình ảnh và phiên dịch tức thời.",
            },
            {
              emoji: "😊",
              title: "Nhận dạng khuôn mặt",
              text: "Xác định danh tính dựa trên hình ảnh khuôn mặt: mở khoá điện thoại, kiểm tra an ninh, xác định nhân vật trong ảnh hoặc video. Facebook dùng khả năng này để gán nhãn tên khá chính xác cho người quen trong ảnh.",
            },
            {
              emoji: "✍️",
              title: "Nhận dạng chữ viết tay",
              text: "Chuyển hình ảnh chữ viết tay thành dữ liệu văn bản xử lí được. Đang dùng rộng rãi khi xử lí hoá đơn, chứng từ thương mại điện tử, tự động hoá nhập dữ liệu và xác minh chữ kí trong giao dịch điện tử.",
            },
            {
              emoji: "🗣️",
              title: "Trợ lí ảo",
              text: "**Google Assistant** (Google), **Siri** (Apple), **Bixby** (Samsung), **Cortana** (Microsoft). Trò chuyện, tìm thông tin, gọi điện theo tên trong danh bạ, đọc tin nhắn, mở nhạc — tất cả bằng chính tiếng nói của người dùng.",
            },
          ],
        },
        {
          kind: "note",
          text: "Ngày nay AI đã phổ biến trong nhiều lĩnh vực khác nhau. Những ví dụ tiêu biểu: **điều khiển robot, chẩn đoán bệnh, dịch tự động, nhận dạng khuôn mặt, trợ lí ảo**,…",
        },
        {
          kind: "update",
          title: "Hai ví dụ trong sách nay đã thành chuyện lịch sử",
          text: "SGK viết xong trước năm 2023 nên có hai chi tiết đã thay đổi. **Khi làm bài thi em vẫn kể theo sách** — phần dưới đây chỉ để em biết chuyện thực tế.",
          items: [
            {
              emoji: "🤖",
              title: "Asimo đã nghỉ hưu năm 2022",
              text: "Honda cho Asimo dừng biểu diễn sau 22 năm, chuyển sang những ứng dụng thực tế hơn của công nghệ robot. Asimo vẫn là **ví dụ kinh điển** về robot tích hợp nhiều đặc trưng AI — chỉ là nó không còn hoạt động nữa.",
            },
            {
              emoji: "🗣️",
              title: "Cortana đã bị khai tử",
              text: "Microsoft ngừng ứng dụng Cortana độc lập trên Windows từ mùa xuân 2023, thay bằng trợ lí **Copilot**. Siri, Google Assistant và Bixby thì vẫn đang hoạt động.",
            },
          ],
        },
      ],
    },
    {
      id: "meo-nho-va-cam-bay",
      emoji: "💡",
      heading: "Mẹo nhớ & Cảnh báo bẫy",
      blocks: [
        {
          kind: "text",
          text: "Bài 1 là bài mở đầu chương trình Tin học 12 nhưng lại có nhiều câu hỏi trắc nghiệm gài bẫy khái niệm. Dưới đây là các **mẹo phân biệt nhanh** và **bảng cảnh báo bẫy thi**:",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "⏱️",
              title: "Mẹo nhớ 2 mốc: 1950 vs 1956",
              text: "**1950 (Turing Test)**: Cách *thử* máy có thông minh không; **1956 (Dartmouth)**: *Đặt tên* ra đời thuật ngữ AI (sau đúng 6 năm).",
            },
            {
              emoji: "🤖",
              title: "AI vs Tự động hoá: Tự thích nghi",
              text: "Nếu máy chỉ **làm theo kịch bản cố định, gặp tình huống mới thì chịu** (máy giặt, tay robot hàn, đèn tín hiệu) ➔ **Tự động hoá**. Chỉ khi có **học, suy luận, tự thích ứng** ➔ mới là **AI**.",
            },
            {
              emoji: "🎯",
              title: "AI Hẹp vs AI Tổng quát",
              text: "**AI hẹp (yếu)**: Giỏi **1 nhiệm vụ cụ thể** (chơi cờ, dịch thuật, Face ID). *Toàn bộ AI hiện nay đều là AI hẹp*. **AI tổng quát (mạnh)**: Đa năng như não người (vẫn là *mục tiêu tương lai*).",
            },
            {
              emoji: "🖐️",
              title: "5 đặc trưng trí tuệ của AI",
              text: "Nhớ 5 từ: **HỌC** (rút kinh nghiệm) - **SUY LUẬN** (logic) - **NHẬN THỨC** (cảm biến/camera) - **NGÔN NGỮ** (tiếng nói/chữ) - **GIẢI QUYẾT VẤN ĐỀ** (tình huống mới).",
            },
          ],
        },
        {
          kind: "compare",
          left: {
            emoji: "❌",
            title: "Bẫy câu chữ đề thi hay gài",
            items: [
              "Máy giặt tự ngắt hay robot hàn là ứng dụng AI",
              "Phần mềm AlphaGo chơi cờ siêu đẳng là AI tổng quát",
              "Thuật ngữ AI xuất hiện lần đầu ở Phép thử Turing 1950",
              "Mọi hệ thống AI bắt buộc có đủ cả 5 đặc trưng",
              "Hệ chuyên gia MYCIN (1972) sử dụng Học máy",
            ],
          },
          right: {
            emoji: "✅",
            title: "Bản chất chính xác cần chọn",
            items: [
              "Chỉ là **Tự động hoá** (chạy theo kịch bản cố định)",
              "Vẫn là **AI hẹp** (vì chỉ giỏi 1 việc là chơi cờ)",
              "Thuật ngữ AI ra đời tại **Hội thảo Dartmouth (1956)**",
              "Chỉ cần **kết hợp một số đặc trưng** ở các mức độ",
              "MYCIN dùng **600 luật suy diễn**, chưa dùng Học máy",
            ],
          },
        },
        {
          kind: "check",
          q: "Trường hợp nào sau đây là một ví dụ thực sự về ứng dụng của Trí tuệ nhân tạo (AI)?",
          options: [
            "Hệ thống camera giám sát tự nhận dạng biển số xe vi phạm",
            "Dây chuyền dập vỏ xe ô tô tự động theo khuôn mẫu cơ khí",
            "Nồi cơm điện tử tự ngắt điện khi đạt nhiệt độ cài đặt sẵn",
            "Đèn tín hiệu giao thông tự đổi màu theo chu kì thời gian",
          ],
          answer: 0,
          explain:
            "Nhận dạng biển số xe đòi hỏi khả năng nhận thức thị giác máy và xử lí hình ảnh — đây là đặc trưng của AI. Các trường hợp còn lại đều là tự động hoá thuần tuý theo cảm biến vật lí hoặc chu kì cố định.",
        },
      ],
    },
  ],

  summary: [
    "**AI là khả năng của máy tính làm những công việc mang tính trí tuệ của con người**: đọc chữ, hiểu tiếng nói, dịch thuật, lái xe, học và ra quyết định.",
    "Hai mốc phải nhớ: **phép thử Turing năm 1950** (Alan Turing) và **Hội thảo Dartmouth năm 1956** — mốc ra đời của thuật ngữ AI.",
    "Năm đặc trưng: **học – suy luận – nhận thức – hiểu ngôn ngữ – giải quyết vấn đề**. Mọi ứng dụng AI đều kết hợp một số đặc trưng này ở mức độ khác nhau.",
    "**Tự động hoá không phải là AI**: dây chuyền lắp ráp, ấm đun nước tự ngắt, guồng nước chỉ lặp lại thao tác cố định, không có đặc trưng trí tuệ nào.",
    "Hai loại AI: **hẹp/yếu** (giỏi một việc — toàn bộ AI hiện nay) và **tổng quát/mạnh** (làm nhiều việc như con người — mục tiêu dài hạn, chưa đạt được).",
  ],
};

export default theory;
