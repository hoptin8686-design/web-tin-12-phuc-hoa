import type { LessonTheory } from "@/lib/types";

// Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống — SGK Tin học 12 (ICT,
// Kết nối tri thức), trang 9–13. Giữ đúng thuật ngữ sách: "Trí tuệ nhân tạo
// tạo sinh (Generative AI)", "OpenAI", "Trí tuệ nhân tạo hẹp/yếu".
// SGK không nhắc tới deepfake ở bài này — đừng thêm vào.

const theory: LessonTheory = {
  minutes: 9,
  intro:
    "Bài 1 trả lời “AI là gì”. Bài này trả lời “**AI đang làm thay đổi những gì**” — từ bệnh viện, ruộng đồng cho tới lớp học — và quan trọng không kém: **AI mang lại những nguy cơ nào** mà cả thế giới đang phải lo giải quyết.",

  sections: [
    {
      id: "linh-vuc",
      emoji: "🌱",
      heading: "AI đổi thay các ngành",
      blocks: [
        {
          kind: "text",
          text: "Rất nhiều lĩnh vực khoa học, công nghệ và đời sống đã và đang **nhận được lợi ích lớn từ sự phát triển của AI**. Dưới đây là những lĩnh vực tiêu biểu nhất.",
        },
        {
          kind: "figure",
          diagram: "ai-linh-vuc",
          caption: "Sáu lĩnh vực tiêu biểu đang phát triển mạnh nhờ AI",
        },
        {
          kind: "cards",
          tone: "leaf",
          items: [
            {
              emoji: "🧠",
              title: "Hệ chuyên gia",
              text: "Ban đầu chỉ chạy theo **luật suy diễn và tri thức do chuyên gia cung cấp**. Nhờ AI, đặc biệt là **Học máy**, nhiều hệ chuyên gia đã **tự học từ dữ liệu để tự hình thành luật và tri thức** — không cần chuyên gia ngồi viết ra từng luật nữa.",
            },
            {
              emoji: "🏥",
              title: "Y học và chăm sóc sức khoẻ",
              text: "Cải thiện chất lượng hình ảnh y tế, **làm nổi bật những cấu trúc bất thường bên trong cơ thể**, đo đạc chỉ số lâm sàng, hỗ trợ chẩn đoán và hướng điều trị chính xác, kịp thời. Ví dụ: phần mềm **IBM Watson for Oncology** góp phần nâng cao hiệu quả điều trị ung thư.",
            },
            {
              emoji: "🚗",
              title: "Giao thông vận tải",
              text: "Phát triển **phương tiện tự lái**, quản lí giao thông thông minh và định tuyến phương tiện vận tải. Ô tô tự lái, máy bay không người lái mấy năm gần đây **không thể có được nếu không có AI**.",
            },
            {
              emoji: "🏦",
              title: "Tài chính, ngân hàng",
              text: "Không chỉ tự động cập nhật chứng từ, hoá đơn vào cơ sở dữ liệu, mà còn phân tích dữ liệu để **hỗ trợ quyết định đầu tư, phát hiện và ngăn chặn gian lận**, nâng cao trải nghiệm khách hàng.",
            },
            {
              emoji: "🏭",
              title: "Sản xuất",
              text: "**Công nghiệp:** tự động hoá từ chế tạo, lắp ráp, kiểm tra chất lượng đến quản lí chuỗi cung ứng. **Nông nghiệp:** trang trại thông minh theo dõi thời tiết, đất đai, dịch bệnh; hợp lí hoá tưới tiêu, dự đoán mùa vụ, xác định **thời điểm thu hoạch tối ưu**.",
            },
            {
              emoji: "🎓",
              title: "Giáo dục",
              text: "Nền tảng học tập **cá nhân hoá** và hỗ trợ đánh giá kết quả: theo dõi tiến trình học, đề xuất nội dung phù hợp, **phản hồi tức thì** cho từng người học. Trợ lí học tập ảo trả lời câu hỏi, cung cấp hướng dẫn và tài liệu.",
            },
          ],
        },
        {
          kind: "text",
          text: "Ngoài ra AI còn vào cả **khoa học xã hội và nhân văn** (thu thập, phân tích quan điểm xã hội; mô phỏng các hiện tượng xã hội), **sáng tạo nghệ thuật** (âm nhạc, hội hoạ, văn học theo nhiều phong cách), **giám sát môi trường và biến đổi khí hậu** nhờ kết hợp IoT với AI thành **AIoT**, rồi trò chơi điện tử và thám hiểm không gian vũ trụ.",
        },
        {
          kind: "note",
          text: "Ngày nay, nhiều lĩnh vực của khoa học công nghệ và đời sống đã và đang phát triển mạnh mẽ dựa trên những thành tựu to lớn của AI. Có thể nói **AI đã trở thành một phần không thể thiếu của cuộc sống hiện đại**.",
        },
        {
          kind: "check",
          q: "Điểm khác biệt lớn nhất của hệ chuyên gia thời nay so với hệ chuyên gia thời đầu là gì?",
          options: [
            "Chạy nhanh hơn nhờ máy tính ngày nay mạnh hơn",
            "Tự học từ dữ liệu để hình thành tri thức",
            "Giao diện đẹp và dễ sử dụng hơn trước nhiều",
            "Không cần đến cơ sở dữ liệu tri thức nữa",
          ],
          answer: 1,
          explain:
            "Nhờ AI, đặc biệt là **Học máy**, hệ chuyên gia ngày nay **tự học từ dữ liệu để tự hình thành các luật và tri thức**, thay vì phải chờ chuyên gia con người viết sẵn từng luật suy diễn như thời MYCIN.",
        },
      ],
    },

    {
      id: "ai-tao-sinh",
      emoji: "🎨",
      heading: "AI tạo sinh",
      blocks: [
        {
          kind: "text",
          text: "Các thành tựu hiện tại của AI **vẫn chỉ hạn chế trong phạm vi Trí tuệ nhân tạo hẹp / Trí tuệ nhân tạo yếu**. Nhưng triển vọng thì không hề ít hứa hẹn, mà minh chứng rõ nhất là **Trí tuệ nhân tạo tạo sinh (Generative AI)**.",
        },
        {
          kind: "example",
          title: "Tạo sinh nghĩa là gì?",
          text: "AI tạo sinh tập trung xây dựng các thuật toán và mô hình có thể **tự động tạo ra nội dung mới**: hình ảnh, âm thanh, văn bản. Nó được dùng nhiều trong **nghệ thuật, giải trí, quảng cáo và trò chơi** — thay vì chỉ phân loại hay dự đoán, nó *làm ra* thứ chưa từng có.",
        },
      ],
    },

    {
      id: "chatgpt",
      emoji: "💬",
      heading: "ChatGPT",
      blocks: [
        {
          kind: "text",
          text: "**ChatGPT** là một hệ thống xử lí ngôn ngữ tiên tiến do **OpenAI** phát triển — ví dụ điển hình nhất của AI tạo sinh. Nó là một hệ thống **có tri thức, có khả năng suy luận và khả năng học**.",
        },
        {
          kind: "figure",
          diagram: "chatgpt-flow",
          caption: "ChatGPT học từ kho văn bản khổng lồ rồi trò chuyện với người dùng",
        },
        {
          kind: "text",
          text: "ChatGPT được huấn luyện trên lượng dữ liệu văn bản rất lớn — phiên bản **GPT-3** huấn luyện trên **hàng vạn văn bản** thuộc nhiều lĩnh vực khác nhau trên Internet, gồm sách, bài báo, trang web và nhiều nguồn khác. Từ đó nó có được các khả năng sau:",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "📖",
              title: "Hiểu và tạo văn bản",
              text: "Đọc hiểu câu hỏi, yêu cầu của người dùng rồi trả lời một cách hợp lí và thông minh — thể hiện **khả năng suy luận và tri thức về ngôn ngữ**.",
            },
            {
              emoji: "🔄",
              title: "Trả lời theo ngữ cảnh",
              text: "Không đưa ra câu trả lời cố định mà **đa dạng theo ngữ cảnh** và yêu cầu cụ thể — cho thấy sự linh hoạt trong suy nghĩ.",
            },
            {
              emoji: "🧮",
              title: "Xử lí thông tin phức tạp",
              text: "**Phân tích và tổng hợp** dữ liệu từ nhiều nguồn để cung cấp giải pháp, chứ không chỉ tra cứu một chỗ.",
            },
            {
              emoji: "🎯",
              title: "Thích nghi theo phản hồi",
              text: "Tương tác **liên tục nhiều lượt**, cải thiện nội dung trả lời dựa trên phản hồi của người dùng — nắm bắt được ngữ cảnh cụ thể.",
            },
          ],
        },
        {
          kind: "text",
          text: "ChatGPT làm việc được với nhiều thứ tiếng, nhưng **mức độ hiểu và trả lời khác nhau tuỳ ngôn ngữ**: tốt nhất với các ngôn ngữ phổ biến và có nhiều dữ liệu huấn luyện như tiếng Anh, Tây Ban Nha, Pháp, Đức, Ý. Với ngôn ngữ ít phổ biến hoặc ít dữ liệu, khả năng của nó hạn chế hơn. Ngoài trò chuyện, ChatGPT còn **làm thơ, soạn nhạc, viết thư, thiết kế và thậm chí sửa lỗi trong lập trình**.",
        },
        {
          kind: "note",
          text: "Nhiều chuyên gia coi ChatGPT là **bước đột phá trong lĩnh vực AI của năm 2022**, có thể dẫn tới những thay đổi lớn về cách làm việc, cách suy nghĩ, cách dạy và học trong nhà trường.",
        },
        {
          kind: "update",
          title: "Từ trợ lí trả lời câu hỏi sang AI tác nhân (agentic AI)",
          text: "SGK mô tả ChatGPT ở vai trò **hỏi – đáp**: em hỏi, nó trả lời bằng văn bản. Từ khoảng năm 2025–2026 xuất hiện một lớp ứng dụng khác hẳn: người dùng **giao một mục tiêu** thay vì đặt câu hỏi, AI tự làm **chuỗi nhiều bước** — mở tệp, dùng các ứng dụng và công cụ được cho phép — rồi trả về một **sản phẩm hoàn chỉnh** để người xem lại. Lớp ứng dụng này gọi là **AI tác nhân (agentic AI)**. Hãng lớn nào cũng có sản phẩm đi theo hướng đó.",
          items: [
            {
              emoji: "💻",
              title: "Claude Code — tác nhân lập trình",
              text: "Đọc được cả một dự án mã nguồn, tự sửa nhiều tệp cùng lúc, chạy thử rồi sửa tiếp lỗi phát sinh. *Chính công cụ này đang được dùng để xây trang web em đang học đây.*",
            },
            {
              emoji: "🗂️",
              title: "Claude Cowork — tác nhân cho công việc văn phòng",
              text: "Anthropic ra bản xem trước tháng 1/2026, hướng tới **người làm văn phòng chứ không phải lập trình viên**. Tháng 7/2026 mở rộng lên web và di động: công việc vẫn chạy tiếp ngay cả khi người dùng đã gập máy tính lại.",
            },
          ],
        },
        {
          kind: "check",
          q: "Vì sao nói ChatGPT thể hiện “khả năng học” của AI?",
          options: [
            "Vì nó có thể dạy học trực tuyến cho học sinh",
            "Vì học từ kho văn bản lớn và phản hồi người dùng",
            "Vì nó có thể tự viết ra chương trình máy tính mới",
            "Vì nó trả lời trôi chảy được bằng nhiều thứ tiếng",
          ],
          answer: 1,
          explain:
            "Khả năng học thể hiện ở hai chỗ: nó **học quy luật ngôn ngữ từ kho dữ liệu văn bản khổng lồ** khi huấn luyện, và trong lúc trò chuyện nó **cải thiện câu trả lời dựa trên phản hồi**, nắm bắt được ngữ cảnh cụ thể của người dùng.",
        },
      ],
    },

    {
      id: "canh-bao",
      emoji: "⚠️",
      heading: "Cảnh báo",
      blocks: [
        {
          kind: "text",
          text: "Bên cạnh lợi ích to lớn, sự phát triển của AI **kéo theo những nguy cơ cần được cảnh báo**. Bốn nguy cơ dưới đây là nội dung phải nhớ của bài.",
        },
        {
          kind: "cards",
          tone: "berry",
          items: [
            {
              emoji: "💼",
              title: "Áp lực thất nghiệp",
              text: "AI tự động hoá được nhiều công việc, dẫn đến tình trạng thất nghiệp và tạo nên nhiều nguy cơ cho sự phát triển xã hội.",
            },
            {
              emoji: "🔒",
              title: "Ảnh hưởng quyền riêng tư",
              text: "Nhiều ứng dụng AI hoạt động dựa vào việc **thu thập lượng lớn dữ liệu cá nhân**, làm tăng mối lo ngại về quyền riêng tư và khả năng bị lạm dụng.",
            },
            {
              emoji: "📦",
              title: "Thiếu minh bạch",
              text: "Phần lớn ứng dụng AI hiện nay là các **“hộp đen”** — khó hiểu được quyết định đưa ra như thế nào, dẫn đến thiếu trách nhiệm giải trình.",
            },
            {
              emoji: "🛡️",
              title: "Rủi ro an ninh, an toàn",
              text: "Ứng dụng AI triển khai trực tuyến có thể **bị xâm nhập hoặc tấn công thay đổi dữ liệu và mô hình**, dẫn tới quyết định sai — ví dụ chẩn đoán sai bệnh, hay ra quyết định tấn công mục tiêu dân sự.",
            },
          ],
        },
        {
          kind: "text",
          text: "Từ các cảnh báo đó đặt ra **khía cạnh đạo đức và ràng buộc pháp lí**. Thực tế đang đòi hỏi phải có ràng buộc pháp lí với những lĩnh vực AI ảnh hưởng trực tiếp tới sinh mạng con người — ví dụ **ngăn cấm việc giao toàn quyền quyết định cho AI điều khiển vũ khí sát thương**. Những thử nghiệm kết hợp bộ não con người với “bộ não” robot cũng đang gây nhiều tranh cãi và mang tính rủi ro cao.",
        },
        {
          kind: "note",
          text: "Cần có giải pháp đảm bảo an toàn và **giám sát chặt chẽ quá trình phát triển AI**, sao cho AI chỉ mang lại cơ hội tiến bộ, nâng cao chất lượng cuộc sống, phục vụ lợi ích cộng đồng, **không gây hậu quả xấu cho xã hội**.",
        },
        {
          kind: "update",
          title: "Hai nguy cơ nữa nổi lên sau khi sách in",
          text: "Bốn cảnh báo của SGK ở trên **vẫn đúng nguyên và vẫn là phần phải học**. Sau khi sách in, AI tạo sinh phát triển mạnh làm nổi lên thêm hai vấn đề nữa mà em gặp thường xuyên trên mạng.",
          items: [
            {
              emoji: "🎭",
              title: "Deepfake",
              text: "AI tạo sinh làm được ảnh, video và **giọng nói giả gần như thật**. Kẻ xấu dùng để lừa đảo (giả giọng người thân gọi điện xin tiền), bôi nhọ danh dự, hoặc tung tin sai lệch. Gặp một video gây sốc, việc đầu tiên nên làm là **kiểm chứng nguồn**.",
            },
            {
              emoji: "©️",
              title: "Bản quyền dữ liệu huấn luyện",
              text: "Mô hình học từ sách, bài báo, tranh ảnh, mã nguồn có sẵn trên Internet. Câu hỏi **tác giả của những tác phẩm đó có được hỏi ý kiến và trả công hay không** đang là tranh cãi pháp lí lớn ở nhiều nước.",
            },
          ],
        },
        {
          kind: "check",
          q: "Vì sao cần ngăn cấm việc giao toàn quyền quyết định cho AI điều khiển vũ khí sát thương?",
          options: [
            "Vì AI xử lí chậm hơn con người trong tình huống gấp",
            "Vì AI có thể bị tấn công, đổi dữ liệu và quyết định sai",
            "Vì AI chưa hiểu được đầy đủ ngôn ngữ tiếng Việt",
            "Vì chi phí chế tạo các loại vũ khí này quá đắt",
          ],
          answer: 1,
          explain:
            "Ứng dụng AI có thể **bị xâm nhập, tấn công thay đổi dữ liệu và mô hình**, dẫn tới quyết định không chính xác. Với vũ khí sát thương, một quyết định sai gây nguy hại **trực tiếp tới sinh mạng con người** — nên phải có ràng buộc pháp lí, luôn giữ quyền quyết định cuối cùng ở con người.",
        },
      ],
    },
  ],

  summary: [
    "AI đang làm thay đổi mạnh mẽ: **hệ chuyên gia, y học, giao thông vận tải, tài chính – ngân hàng, sản xuất, giáo dục** và nhiều lĩnh vực khác.",
    "Thành tựu hiện tại của AI **vẫn nằm trong phạm vi Trí tuệ nhân tạo hẹp / yếu**; Trí tuệ nhân tạo tổng quát / mạnh vẫn đang là mục tiêu nghiên cứu.",
    "**Trí tuệ nhân tạo tạo sinh (Generative AI)** tạo ra nội dung mới — hình ảnh, âm thanh, văn bản; **ChatGPT của OpenAI** là ví dụ điển hình, được coi là bước đột phá của năm 2022.",
    "ChatGPT là hệ thống **có tri thức, biết suy luận và biết học**: huấn luyện trên hàng vạn văn bản, hiểu ngữ cảnh, thích nghi theo phản hồi người dùng.",
    "Bốn cảnh báo phải nhớ: **áp lực thất nghiệp – ảnh hưởng quyền riêng tư – thiếu minh bạch (“hộp đen”) – rủi ro an ninh, an toàn**.",
  ],
};

export default theory;
