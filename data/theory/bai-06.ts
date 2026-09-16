import type { LessonTheory } from "@/lib/types";

// Bài 6. Giao tiếp và ứng xử trong không gian mạng — SGK Tin học 12 (ICT, Kết
// nối tri thức), trang 34–38. Giữ đúng thuật ngữ sách: không gian mạng (thế
// giới ảo), tín hiệu phi ngôn ngữ, ứng xử nhân văn, và mốc pháp lí Quyết định
// số 874-QĐ-BTTTT ngày 17/6/2021.
//
// Bài này không cần hộp "Cập nhật 2026": nội dung là chuẩn mực ứng xử, không
// gắn với công nghệ cụ thể nào đã lỗi thời.

const theory: LessonTheory = {
  minutes: 10,
  intro:
    "Mỗi ngày em nhắn tin, bình luận, gọi video — đó đều là **giao tiếp trong không gian mạng**. Bài này chỉ ra **cái được và cái mất** của kiểu giao tiếp ấy, rồi trả lời câu hỏi quan trọng hơn: **ứng xử thế nào cho tử tế** khi không nhìn thấy mặt nhau.",

  sections: [
    {
      id: "khong-gian-mang",
      emoji: "🌐",
      heading: "Không gian mạng",
      blocks: [
        {
          kind: "note",
          text: "**Không gian mạng** (còn được gọi là **thế giới ảo**) là môi trường được tạo ra nhờ sử dụng mạng máy tính, trong đó **Internet có thể được coi là không gian mạng lớn nhất**.",
        },
        {
          kind: "text",
          text: "Không gian mạng cho phép con người giao tiếp với nhau thông qua các phần mềm và dịch vụ giao tiếp trực tuyến như **mạng xã hội, thư điện tử, ứng dụng nhắn tin, gọi điện thoại video, diễn đàn trực tuyến, nhật kí web (blog) và trang web cá nhân, các trang thương mại điện tử**,…",
        },
        {
          kind: "check",
          q: "Trường hợp nào sau đây KHÔNG phải là giao tiếp trong không gian mạng?",
          options: [
            "Giao tiếp với một trợ lí ảo (chatbot) trên trang web tuyển sinh của một trường đại học",
            "Tham gia một lớp học trực tuyến",
            "Hai người bạn gọi điện thoại video (FaceTime)",
            "Hẹn gặp bạn tại một quán cà phê Internet",
          ],
          answer: 3,
          explain:
            "Hẹn gặp bạn ở quán cà phê Internet là **gặp mặt trực tiếp** — quán chỉ là địa điểm, việc trò chuyện không diễn ra qua mạng máy tính. Ba trường hợp còn lại đều trao đổi thông qua phần mềm và dịch vụ trực tuyến.",
        },
      ],
    },

    {
      id: "uu-nhuoc",
      emoji: "⚖️",
      heading: "Được và mất",
      blocks: [
        {
          kind: "figure",
          diagram: "uu-nhuoc-giao-tiep-mang",
          caption: "Bốn ưu điểm và bốn nhược điểm của giao tiếp trong không gian mạng",
        },
        {
          kind: "cards",
          tone: "leaf",
          items: [
            {
              emoji: "📍",
              title: "Thuận tiện",
              text: "Thực hiện được **mọi nơi, mọi lúc**, miễn là có kết nối mạng. Đặc biệt có lợi cho những người **không có điều kiện giao tiếp trực tiếp**, chẳng hạn những người sống xa nhau.",
            },
            {
              emoji: "💰",
              title: "Tiết kiệm thời gian và chi phí",
              text: "Tiết kiệm **thời gian và chi phí di chuyển** nhưng vẫn đảm bảo hiệu quả công việc. *Hội nghị truyền hình giảm nhu cầu đi lại và chi phí ăn ở; điện thoại video giúp con người gần nhau hơn khi không sống cùng nhau.*",
            },
            {
              emoji: "🤝",
              title: "Mở rộng kết nối xã hội",
              text: "Dễ dàng mở rộng mạng lưới quan hệ, kết nối những người **cùng sở thích, quan điểm hoặc nhu cầu**. Đây cũng là cách xây dựng **thương hiệu cá nhân hoặc doanh nghiệp** qua các kênh truyền thông xã hội.",
            },
            {
              emoji: "🧰",
              title: "Công cụ giao tiếp đa dạng",
              text: "Hội nghị truyền hình, nhắn tin nhanh, thư điện tử, mạng xã hội,… Sự đa dạng cho phép người dùng **chọn công cụ phù hợp nhất** với nhu cầu liên lạc.",
            },
          ],
        },
        {
          kind: "text",
          text: "Những lợi ích trên làm cho giao tiếp trong không gian mạng trở thành **công cụ hỗ trợ đáng kể cho khoa học, giáo dục và cuộc sống**. Tuy nhiên nó cũng có nhiều nhược điểm — ngoài những hậu quả tổn hại tinh thần và vật chất xảy ra do **“nghiện mạng”**, nó còn ẩn chứa không ít vấn đề khác.",
        },
        {
          kind: "cards",
          tone: "berry",
          items: [
            {
              emoji: "😐",
              title: "Thiếu tín hiệu phi ngôn ngữ",
              text: "Thư điện tử hay tin nhắn **thiếu nét mặt, ngôn ngữ cơ thể và biểu cảm giọng nói**. Điều này gây khó khăn trong việc truyền đạt cảm xúc và dẫn đến **những hiểu lầm không đáng có**.",
            },
            {
              emoji: "🔓",
              title: "Nguy cơ về bảo mật và quyền riêng tư",
              text: "Có thể bị **vi phạm tính bảo mật** — lộ mật khẩu truy cập, bị tấn công mạng. Làm gia tăng lo ngại về quyền riêng tư: **xâm phạm dữ liệu**, thông tin riêng tư và nhạy cảm bị lộ lọt hoặc bị tấn công bởi kẻ xấu.",
            },
            {
              emoji: "🎭",
              title: "Thiếu kết nối quan hệ cá nhân chặt chẽ",
              text: "Người dùng dễ dàng **giấu mặt, tạo bản sao không đầy đủ của bản thân hoặc giả mạo thông tin**, làm người khác khó đánh giá tính chân thật. *Thông tin cá nhân của một tài khoản mạng xã hội có thể chỉ là bịa đặt.* Điều này gây khó khăn cho việc xây dựng mối quan hệ và lòng tin.",
            },
            {
              emoji: "📵",
              title: "Dễ bị ảnh hưởng bởi sự cố kĩ thuật",
              text: "**Mất kết nối mạng, phần mềm không tương thích** có thể cản trở giao tiếp trực tuyến, dẫn đến giao tiếp bị **trì hoãn hoặc gián đoạn**.",
            },
          ],
        },
        {
          kind: "note",
          text: "Không gian mạng là môi trường được tạo ra nhờ các mạng máy tính. Giao tiếp trong không gian mạng có nhiều ưu điểm song cũng **tiềm ẩn những nhược điểm đòi hỏi người dùng phải biết ứng xử đúng cách**.",
        },
        {
          kind: "check",
          q: "Vì sao nhắn tin dễ gây hiểu lầm hơn nói chuyện trực tiếp?",
          options: [
            "Vì tin nhắn thường bị gửi chậm hơn lời nói",
            "Vì thiếu nét mặt, cử chỉ và biểu cảm giọng nói",
            "Vì tin nhắn bị giới hạn số kí tự gửi mỗi lần",
            "Vì tin nhắn không lưu lại được để đọc lại",
          ],
          answer: 1,
          explain:
            "Đây là nhược điểm **thiếu tín hiệu phi ngôn ngữ**. Khi nói chuyện trực tiếp, cùng một câu nói kèm nét mặt cười hay cau mày sẽ mang nghĩa khác hẳn — nhắn tin mất hết những tín hiệu đó nên **khó truyền đạt cảm xúc**, dễ hiểu lầm.",
        },
      ],
    },

    {
      id: "nhan-van",
      emoji: "💗",
      heading: "Ứng xử nhân văn",
      blocks: [
        {
          kind: "text",
          text: "Bên cạnh việc thực hiện các quy tắc ứng xử trên mạng xã hội phù hợp với quy định của pháp luật được nêu trong **Quyết định số 874-QĐ-BTTTT ngày 17/6/2021**, khi giao tiếp trong không gian mạng người dùng còn cần biết **ứng xử một cách nhân văn**. Bốn khía cạnh quan trọng nhất:",
        },
        {
          kind: "figure",
          diagram: "bon-yeu-to-nhan-van",
          caption: "Bốn yếu tố làm nên ứng xử nhân văn trong không gian mạng",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "🤝",
              title: "Tôn trọng",
              text: "Tôn trọng **quyền riêng tư**, không phát tán thông tin riêng tư của người khác **mà không có sự cho phép của họ**. Tôn trọng quan điểm và suy nghĩ của mỗi người, **không bắt buộc họ phải chấp nhận hoặc chia sẻ quan điểm của mình**, cũng như không châm chọc hay làm người khác cảm thấy bị tổn thương.",
            },
            {
              emoji: "💬",
              title: "Lịch sự",
              text: "Dùng **ngôn từ đúng mực**, không nhạy cảm, lăng mạ, châm chọc, phỉ báng hoặc phân biệt chủng tộc, giới tính, tôn giáo. Tránh **ngôn ngữ chuyên ngành hoặc từ lóng** khiến đối phương không hiểu. Chia sẻ thông tin **chính xác và đáng tin cậy**, tránh lan truyền tin sai lệch hoặc tin đồn, tránh gửi thư rác.",
            },
            {
              emoji: "💗",
              title: "Thấu hiểu",
              text: "Cảm thông với người khác và hiểu được những khó khăn họ đang gặp. Cố gắng **đặt mình vào hoàn cảnh của người khác** để hiểu suy nghĩ, tình cảm, vấn đề của họ. Thấu hiểu được thì mới **giúp đỡ hiệu quả hơn**.",
            },
            {
              emoji: "🫶",
              title: "Hỗ trợ",
              text: "Luôn sẵn lòng giúp đỡ khi người khác gặp khó khăn — đôi khi chỉ là **lời động viên chân thành, tin nhắn an ủi kịp thời, biểu cảm sẻ chia**. Hỗ trợ nhau là cách xây dựng một **cộng đồng trực tuyến mạnh mẽ**, giúp nhau vượt qua khó khăn và cùng phát triển.",
            },
          ],
        },
        {
          kind: "note",
          text: "**Tôn trọng, lịch sự, thấu hiểu và sẵn sàng hỗ trợ** là những yếu tố quan trọng của ứng xử nhân văn trong không gian mạng. Chúng giúp tạo ra môi trường giao tiếp **an toàn, lành mạnh**, tránh làm tổn thương người khác, đồng thời tạo sự **thoải mái và tin tưởng** cho mọi người.",
        },
      ],
    },

    {
      id: "thoi-quen",
      emoji: "🔁",
      heading: "Rèn thói quen",
      blocks: [
        {
          kind: "text",
          text: "Biết bốn yếu tố trên là một chuyện, **làm được thành thói quen** lại là chuyện khác. SGK gợi ý năm cách:",
        },
        {
          kind: "steps",
          items: [
            {
              label: "1",
              title: "Tự kiểm tra, cải thiện hành vi trực tuyến của mình",
              text: "Xem lại và **tự đánh giá** các hành vi của mình trên mạng xã hội, trong các cuộc trò chuyện, thư điện tử. Nếu nhận thấy hành vi nào **không đúng mực hoặc thiếu nhân văn**, hãy cố gắng tìm cách sửa đổi.",
            },
            {
              label: "2",
              title: "Bình tĩnh lắng nghe và tôn trọng ý kiến người khác",
              text: "Lắng nghe ý kiến của người khác và đối xử với họ một cách tôn trọng. Nếu không đồng ý, hãy **đưa ra lí do và phản bác một cách lịch sự**.",
            },
            {
              label: "3",
              title: "Học cách xử lí các tình huống khó xử",
              text: "Có nhiều tình huống khó xử có thể xảy ra. Nếu cảm thấy không chắc chắn về cách xử lí, hãy **tìm kiếm sự giúp đỡ từ những người có kinh nghiệm** hoặc từ các tài liệu hướng dẫn trực tuyến.",
            },
            {
              label: "4",
              title: "Cẩn trọng với ngôn từ và cách viết",
              text: "Chú ý đến **cách viết** của mình để đảm bảo nó **không gây hiểu nhầm hoặc mang tính khiêu khích**.",
            },
            {
              label: "5",
              title: "Đối xử với người khác theo cách mình muốn được đối xử",
              text: "Đây là tinh thần cần quán triệt để hình thành thói quen ứng xử nhân văn trong không gian mạng.",
            },
          ],
        },
        {
          kind: "text",
          text: "Cụ thể hoá vào **những tình huống em gặp hằng ngày**:",
        },
        {
          kind: "cards",
          tone: "gold",
          items: [
            {
              emoji: "🗣️",
              title: "Tranh luận trên diễn đàn",
              text: "Không đồng ý thì **trao đổi một cách lịch sự**, không bao giờ dùng ngôn ngữ khiêu khích, phân biệt chủng tộc, giới tính, tôn giáo hoặc **tấn công cá nhân**. Giữ bình tĩnh trong các tình huống khó chịu hoặc bị xúc phạm.",
            },
            {
              emoji: "💭",
              title: "Thảo luận trên mạng xã hội",
              text: "**Đọc kĩ bài viết của người khác trước khi đưa ra ý kiến của mình.** Nếu có ý kiến trái ngược, trao đổi lịch sự trên tinh thần tôn trọng quan điểm của họ.",
            },
            {
              emoji: "✉️",
              title: "Viết thư hoặc tin nhắn",
              text: "Viết một cách lịch sự, tránh ngôn từ thô tục khiêu khích. Tôn trọng quyền riêng tư của người nhận: **không chia sẻ thông tin trao đổi riêng giữa hai người với bên thứ ba khi chưa được phép**.",
            },
            {
              emoji: "📹",
              title: "Trò chuyện qua video",
              text: "Mặc **quần áo lịch sự**, không để lộ những vật dụng hoặc cảnh quan không phù hợp. Giữ **thái độ đúng đắn trong suốt cuộc trò chuyện**.",
            },
            {
              emoji: "📤",
              title: "Đăng bài hoặc chia sẻ thông tin",
              text: "Đọc kĩ nội dung và **kiểm tra tính chính xác** của nó, để đảm bảo không làm **tổn hại đến danh tiếng hoặc quyền riêng tư của người khác**.",
            },
          ],
        },
        {
          kind: "check",
          q: "Một bạn đăng lên nhóm lớp một ý kiến mà em thấy hoàn toàn sai. Cách ứng xử nào thể hiện tính nhân văn?",
          options: [
            "Bình luận thẳng bằng từ ngữ mạnh cho bạn ấy biết là mình bất bình",
            "Trao đổi lịch sự, nêu lí do và tôn trọng quan điểm của bạn",
            "Chụp màn hình gửi sang nhóm khác để mọi người cùng bình luận",
            "Im lặng rồi chặn bạn đó để khỏi phải đọc thêm",
          ],
          answer: 1,
          explain:
            "Nhân văn không có nghĩa là phải đồng ý. SGK nêu rõ: nếu không đồng ý với ý kiến của người khác, hãy **đưa ra lí do và phản bác một cách lịch sự**. Dùng từ ngữ mạnh là thiếu lịch sự; chụp màn hình gửi nơi khác là **xâm phạm quyền riêng tư** và làm tổn hại danh tiếng của bạn.",
        },
      ],
    },
  ],

  summary: [
    "**Không gian mạng** (thế giới ảo) là môi trường được tạo ra nhờ mạng máy tính; **Internet là không gian mạng lớn nhất**.",
    "Bốn ưu điểm: **thuận tiện – tiết kiệm thời gian và chi phí – mở rộng kết nối xã hội – công cụ giao tiếp đa dạng**.",
    "Bốn nhược điểm: **thiếu tín hiệu phi ngôn ngữ – nguy cơ bảo mật và quyền riêng tư – thiếu kết nối cá nhân chặt chẽ – dễ bị ảnh hưởng bởi sự cố kĩ thuật**.",
    "Bốn yếu tố của ứng xử nhân văn: **tôn trọng – lịch sự – thấu hiểu – hỗ trợ**.",
    "Quy tắc ứng xử trên mạng xã hội theo quy định pháp luật được nêu trong **Quyết định số 874-QĐ-BTTTT ngày 17/6/2021**.",
    "Nguyên tắc gốc để rèn thói quen: **đối xử với người khác theo cách mà mình muốn được đối xử**.",
  ],
};

export default theory;
