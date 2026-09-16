import type { LessonTheory } from "@/lib/types";

// Bài 21. Hội thảo hướng nghiệp — SGK Tin học 12 (ICT, Kết nối tri thức),
// trang 113–117. Chủ đề 5 (Hướng nghiệp với Tin học) — bài hoạt động dự án
// (tổ chức hội thảo), không có cơ chế kĩ thuật cần vẽ SVG minh hoạ.

const theory: LessonTheory = {
  minutes: 13,

  intro:
    "Bài này tìm hiểu những ngành nghề, lĩnh vực có sử dụng nhân lực công nghệ thông tin qua hoạt động **tổ chức một hội thảo hướng nghiệp** — từ lập kế hoạch, chuẩn bị bài trình bày, đến tổ chức và đánh giá kết quả.",

  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "cntt-nhieu-linh-vuc-ke-hoach",
      emoji: "🧭",
      heading: "Công nghệ thông tin trong nhiều lĩnh vực & kế hoạch hội thảo",
      blocks: [
        {
          kind: "text",
          text: "Công nghệ thông tin đã trở thành phần không thể thiếu trong cuộc sống hiện đại. Vì vậy, nhu cầu nhân lực công nghệ thông tin **không chỉ giới hạn** trong các ngành nghề của lĩnh vực này.",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "🏥",
              title: "Y tế và y học",
              text: "Cần chuyên gia công nghệ thông tin quản lí, duy trì hệ thống bệnh án điện tử, cổng thông tin y tế, thiết bị số trong bệnh viện; tham gia phát triển ứng dụng sức khoẻ số, nghiên cứu dược phẩm.",
            },
            {
              emoji: "🏭",
              title: "Công nghiệp và sản xuất",
              text: "Cần kĩ sư công nghệ thông tin triển khai, bảo mật hệ thống thông tin kĩ thuật số, mạng vạn vật (IoT); quản lí và khai thác dữ liệu để cải thiện quy trình sản xuất.",
            },
          ],
        },
        {
          kind: "note",
          text: "Ngoài y tế và công nghiệp, có thể nêu thêm nhiều ví dụ ở các lĩnh vực khác như **tài chính, ngân hàng, khoa học xã hội**,... — công nghệ thông tin len lỏi vào hầu hết mọi ngành nghề của xã hội hiện đại.",
        },
        {
          kind: "check",
          q: "Vì sao nhu cầu nhân lực công nghệ thông tin ngày nay không chỉ giới hạn trong các ngành nghề của chính lĩnh vực công nghệ thông tin?",
          options: [
            "Vì công nghệ thông tin đã trở thành phần không thể thiếu trong cuộc sống hiện đại",
            "Vì các trường đại học đã ngừng đào tạo chuyên ngành công nghệ thông tin từ nhiều năm nay",
            "Vì lĩnh vực công nghệ thông tin hiện đã bão hoà nhân lực, không còn tuyển dụng thêm",
            "Vì pháp luật quy định mọi ngành nghề đều phải có ít nhất một nhân viên công nghệ thông tin",
          ],
          answer: 0,
          explain:
            "SGK nêu: công nghệ thông tin đã trở thành phần không thể thiếu trong cuộc sống hiện đại, nên nhu cầu nhân lực công nghệ thông tin không chỉ giới hạn trong các ngành nghề của lĩnh vực này — như y tế, công nghiệp sản xuất đã nêu ví dụ.",
        },
        {
          kind: "text",
          text: "Có nhiều cách để tìm hiểu về các ngành nghề, lĩnh vực có sử dụng nhân lực công nghệ thông tin — ví dụ tham gia hội chợ giới thiệu việc làm, triển lãm nghề nghiệp, buổi thuyết trình định hướng nghề nghiệp. Bài học này chọn cách **tổ chức một Hội thảo hướng nghiệp** để trao đổi về nội dung đó, có mời thêm chuyên gia hoặc người có kinh nghiệm trong lĩnh vực liên quan.",
        },
        {
          kind: "list",
          items: [
            "**Tên hội thảo:** Hội thảo hướng nghiệp.",
            "**Chủ đề:** Nhân lực công nghệ thông tin — cơ hội và thách thức trong kỉ nguyên số.",
            "**Thời lượng:** 1 tiết (45 phút).",
            "**Địa điểm:** Phòng học của lớp.",
            "**Thành phần:** Giáo viên, khách mời, học sinh của lớp.",
            "**Hình thức:** Trực tiếp, có thể kết hợp trực tuyến với một số khách mời ở xa.",
            "**Ban tổ chức:** 4 thành viên là đại diện từ mỗi nhóm.",
            "**Chủ toạ:** 3 thành viên do ban tổ chức chọn cử trong lớp.",
          ],
        },
        {
          kind: "text",
          text: "**Nội dung chính** của hội thảo: thảo luận về một số ngành nghề, lĩnh vực có sử dụng nhân lực công nghệ thông tin; thảo luận về vai trò và công việc của chuyên viên công nghệ thông tin trong các ngành nghề đó; chia sẻ thông tin ngành đào tạo của một số cơ sở đào tạo phù hợp.",
        },
        {
          kind: "text",
          text: "Vì thời gian hội thảo có hạn, nên chọn ra một vài lĩnh vực học sinh quan tâm nhất để trao đổi — chẳng hạn **y tế, giáo dục, tài chính-kinh doanh, truyền thông và giải trí**. Chương trình hội thảo gợi ý:",
        },
        {
          kind: "steps",
          items: [
            { label: "1", title: "Cơ hội & thách thức — lĩnh vực Y tế", text: "Nhóm 1 trình bày · **8 phút**" },
            { label: "2", title: "Cơ hội & thách thức — lĩnh vực Giáo dục", text: "Nhóm 2 trình bày · **8 phút**" },
            { label: "3", title: "Thảo luận", text: "Chủ toạ, chuyên gia và các nhóm · **5 phút**" },
            { label: "4", title: "Cơ hội & thách thức — lĩnh vực Tài chính, kinh doanh", text: "Nhóm 3 trình bày · **8 phút**" },
            { label: "5", title: "Cơ hội & thách thức — lĩnh vực Truyền thông, giải trí", text: "Nhóm 4 trình bày · **8 phút**" },
            { label: "6", title: "Thảo luận", text: "Chủ toạ, chuyên gia và các nhóm · **5 phút**" },
            { label: "7", title: "Kết luận", text: "Chủ toạ · **3 phút**" },
          ],
        },
        {
          kind: "note",
          text: "Chương trình mẫu gồm **4 lĩnh vực**, mỗi lĩnh vực do một nhóm trình bày trong 8 phút, xen giữa là **2 lượt thảo luận** (5 phút) và **kết luận** (3 phút) do chủ toạ thực hiện — tổng vừa khít 45 phút.",
        },
        {
          kind: "check",
          q: "Theo chương trình hội thảo gợi ý, sau khi Nhóm 2 trình bày xong lĩnh vực Giáo dục, hoạt động tiếp theo trong chương trình là gì?",
          options: [
            "Thảo luận, do chủ toạ, chuyên gia và các nhóm cùng tham gia trong 5 phút",
            "Nhóm 3 trình bày ngay lĩnh vực Tài chính, kinh doanh mà không có thảo luận xen giữa",
            "Chủ toạ kết luận toàn bộ hội thảo ngay lập tức, kết thúc sớm chương trình",
            "Giải lao 10 phút trước khi chuyển sang phần trình bày của Nhóm 3",
          ],
          answer: 0,
          explain:
            "Theo bảng chương trình 7 dòng của SGK, sau Nhóm 1 (Y tế) và Nhóm 2 (Giáo dục) trình bày là mục 3: Thảo luận (chủ toạ, chuyên gia và các nhóm, 5 phút) — rồi mới tới Nhóm 3 (Tài chính, kinh doanh).",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "chuan-bi-va-xay-dung-bai-trinh-bay",
      emoji: "📋",
      heading: "Nhiệm vụ 1, 2: Chuẩn bị và xây dựng bài trình bày",
      blocks: [
        {
          kind: "text",
          text: "**Nhiệm vụ 1 (Chuẩn bị hội thảo)** yêu cầu thành lập các nhóm và ban tổ chức, thảo luận và lập kế hoạch tổ chức hội thảo: thảo luận chung để chọn lĩnh vực giới thiệu; chia lớp thành 4 nhóm theo 4 lĩnh vực đã chọn; mỗi nhóm bầu nhóm trưởng, thư kí rồi cử một đại diện tham gia ban tổ chức.",
        },
        {
          kind: "cards",
          tone: "gold",
          items: [
            {
              emoji: "🖥️",
              title: "Hình thức bài trình bày",
              text: "Bài trình chiếu hoặc video clip.",
            },
            {
              emoji: "📄",
              title: "Giới hạn số trang",
              text: "Không quá 15 trang chiếu: 1 trang giới thiệu chủ đề và nhóm, tối đa 12 trang nội dung, 1 trang kết luận, cảm ơn.",
            },
            {
              emoji: "⏰",
              title: "Thời hạn nộp bài",
              text: "Trước hội thảo 2 ngày, để ban tổ chức tập hợp tài liệu, nộp giáo viên và gửi trước cho chuyên gia.",
            },
          ],
        },
        {
          kind: "text",
          text: "**Nhiệm vụ 2 (Xây dựng bài trình bày)** gồm 4 bước. **Bước 1 — Lập dàn ý:** dựa trên nội dung và mục đích hội thảo, mỗi bài trình bày tập trung cung cấp thông tin chính xác, chi tiết về lĩnh vực, vai trò, cơ hội và thách thức, đồng thời cho người nghe cái nhìn toàn diện về những gì một chuyên viên công nghệ thông tin cần biết và làm trong lĩnh vực đó.",
        },
        {
          kind: "steps",
          items: [
            {
              label: "I",
              title: "Giới thiệu lĩnh vực và vai trò của CNTT",
              text: "Định nghĩa, tầm quan trọng của lĩnh vực; đóng góp, lợi ích của việc dùng công nghệ thông tin. **1 phút**",
            },
            {
              label: "II",
              title: "Vai trò của chuyên viên công nghệ thông tin",
              text: "Công việc chính; yêu cầu về kiến thức và kĩ năng cần có. **2 phút**",
            },
            {
              label: "III",
              title: "Phân tích cơ hội và thách thức",
              text: "Cơ hội phát triển mà lĩnh vực mang lại; thách thức, khó khăn có thể gặp phải. **2 phút**",
            },
            {
              label: "IV",
              title: "Chia sẻ thông tin về đào tạo",
              text: "Giới thiệu cơ sở đào tạo uy tín; mô tả chương trình, khoá học liên quan. **2 phút**",
            },
            {
              label: "V",
              title: "Kết luận và đề xuất",
              text: "Tóm tắt điểm chính; đề xuất ý tưởng, hướng phát triển cho lĩnh vực. **1 phút**",
            },
          ],
        },
        {
          kind: "text",
          text: "**Bước 2 — Thu thập thông tin** từ các nguồn:",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            { emoji: "🌐", title: "Trang web chính thức", text: "Của tổ chức, công ti, cơ sở đào tạo liên quan tới lĩnh vực thảo luận." },
            { emoji: "📰", title: "Nghiên cứu, bài báo uy tín", text: "Từ các tổ chức uy tín." },
            { emoji: "💼", title: "Tin tuyển dụng", text: "Liên quan đến ngành nghề đang tìm hiểu." },
            { emoji: "💬", title: "Diễn đàn, chuyên gia", text: "Ý kiến từ các diễn đàn, các chuyên gia trong ngành." },
          ],
        },
        {
          kind: "text",
          text: "**Bước 3 — Chọn lọc, tổng hợp thông tin và xây dựng bài trình bày:** thảo luận nhóm để phân tích, kiểm chứng thông tin thu được; chọn lọc và tổng hợp thông tin; lựa chọn cách biểu diễn phù hợp (bảng, biểu đồ, sơ đồ, ảnh minh hoạ) để thông tin rõ ràng, dễ hiểu, và **nêu rõ nguồn** của thông tin sử dụng; dùng phần mềm trình chiếu, tuân thủ giới hạn số trang và thời lượng.",
        },
        {
          kind: "text",
          text: "**Bước 4 — Báo cáo thử, hoàn thiện bài trình bày:** thảo luận nhóm, chọn báo cáo viên; báo cáo thử để các thành viên khác nhận xét, góp ý; chỉnh sửa nội dung; hoàn thiện bài trình bày và lên phương án trình bày.",
        },
        {
          kind: "note",
          text: "**Lưu ý:** nộp bài cho ban tổ chức **đúng hạn** — chậm nhất 2 ngày trước hội thảo, để kịp tập hợp tài liệu và gửi trước cho các chuyên gia.",
        },
        {
          kind: "check",
          q: "Ở Bước 3 (Chọn lọc, tổng hợp thông tin), khi sử dụng bảng, biểu đồ hay ảnh minh hoạ để trình bày thông tin đã thu thập, SGK lưu ý điều gì?",
          options: [
            "Phải nêu rõ nguồn của các thông tin sử dụng",
            "Không được dùng bảng hay biểu đồ, chỉ được viết bằng văn bản thuần tuý",
            "Phải giữ bí mật nguồn thông tin, không tiết lộ cho người nghe",
            "Phải trích dẫn nguyên văn toàn bộ bài báo gốc vào trang chiếu",
          ],
          answer: 0,
          explain:
            "SGK lưu ý: khi chọn cách biểu diễn phù hợp (bảng, biểu đồ, sơ đồ, ảnh minh hoạ) để thông tin rõ ràng, dễ hiểu, cần nêu rõ nguồn của các thông tin sử dụng.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "to-chuc-va-danh-gia",
      emoji: "🏆",
      heading: "Nhiệm vụ 3: Tổ chức hội thảo và đánh giá kết quả",
      blocks: [
        {
          kind: "text",
          text: "Tại buổi hội thảo, ban tổ chức và chủ toạ điều hành hội thảo theo chương trình và kế hoạch đã thống nhất. Các nhóm trình bày theo thứ tự, tham gia thảo luận, lắng nghe góp ý, hỏi đáp với chuyên gia.",
        },
        {
          kind: "text",
          text: "Điểm của mỗi nhóm được giáo viên đánh giá theo **5 tiêu chí**, mỗi tiêu chí có 4 mức: **Giỏi (2 điểm) · Khá (1,5 điểm) · Trung bình (1 điểm) · Chưa đạt (0,5 điểm)**.",
        },
        {
          kind: "cards",
          tone: "coral",
          items: [
            { emoji: "📝", title: "Nội dung", text: "Mức độ giới thiệu đầy đủ nội dung so với dàn ý đã lập." },
            { emoji: "🎨", title: "Hình thức", text: "Trình bày khoa học, bố cục hợp lí, định dạng nhất quán, không lỗi chính tả." },
            { emoji: "🧑‍💼", title: "Tính chuyên nghiệp", text: "Mức độ hoàn thiện, công phu, tỉ mỉ trong quá trình thực hiện." },
            { emoji: "🎤", title: "Báo cáo viên", text: "Báo cáo mạch lạc, dễ hiểu, đúng thời gian quy định." },
            { emoji: "🗣️", title: "Thảo luận", text: "Nhiệt tình, sôi nổi, ý kiến chất lượng khi tham gia thảo luận." },
          ],
        },
        {
          kind: "example",
          title: "Ví dụ mức điểm tiêu chí \"Nội dung\"",
          text: "**Giỏi (2đ):** giới thiệu đầy đủ toàn bộ nội dung như dàn ý. **Khá (1,5đ):** giới thiệu được 80% nội dung. **Trung bình (1đ):** giới thiệu được 50%–80% nội dung. **Chưa đạt (0,5đ):** giới thiệu được ít hơn 50% nội dung như dàn ý.",
        },
        {
          kind: "note",
          text: "**Điểm cá nhân = Điểm nhóm × hệ số cá nhân.** Hệ số cá nhân được xác định bằng **tổng điểm cá nhân chia cho 100%** — điểm cá nhân do chính các thành viên trong nhóm đánh giá lẫn nhau.",
        },
        {
          kind: "list",
          items: [
            "**Hoàn thành nhiệm vụ được giao, đúng hạn, đảm bảo chất lượng** — tối đa 30 điểm.",
            "**Có tinh thần trách nhiệm, nhiệt tình** — tối đa 20 điểm.",
            "**Có nhiều ý kiến đóng góp cho sản phẩm** — tối đa 20 điểm.",
            "**Phối kết hợp tốt với các thành viên trong nhóm** — tối đa 20 điểm.",
            "**Tham gia đầy đủ các buổi họp nhóm** — tối đa 10 điểm.",
          ],
        },
        {
          kind: "text",
          text: "Ngoài ra, lớp có thể thảo luận và thống nhất thêm **điểm thưởng** cho các cá nhân trong ban tổ chức và chủ toạ hội thảo — ghi nhận công sức điều hành, tổ chức của họ.",
        },
        {
          kind: "check",
          q: "Công thức tính điểm cá nhân của mỗi thành viên trong nhóm là gì?",
          options: [
            "Điểm cá nhân = Điểm nhóm × hệ số cá nhân, với hệ số cá nhân = tổng điểm cá nhân chia cho 100%",
            "Điểm cá nhân = Điểm nhóm chia đều cho tổng số thành viên, không tính thêm hệ số nào khác",
            "Điểm cá nhân luôn bằng đúng điểm nhóm, bất kể mức độ đóng góp của từng thành viên",
            "Điểm cá nhân do giáo viên tự quyết định hoàn toàn, không liên quan gì tới đánh giá của nhóm",
          ],
          answer: 0,
          explain:
            "SGK nêu công thức: Điểm cá nhân = Điểm nhóm × hệ số cá nhân. Hệ số cá nhân được xác định bằng tổng điểm cá nhân (do các thành viên trong nhóm đánh giá lẫn nhau theo 5 tiêu chí, tổng tối đa 100) chia cho 100%.",
        },
      ],
    },
  ],

  summary: [
    "Nhu cầu nhân lực công nghệ thông tin **không chỉ giới hạn** trong ngành CNTT — lan sang y tế, công nghiệp sản xuất, tài chính, giáo dục... Bài học tổ chức một **Hội thảo hướng nghiệp** để tìm hiểu điều này.",
    "Kế hoạch hội thảo gợi ý: 1 tiết (45 phút), 4 lĩnh vực do 4 nhóm trình bày (8 phút/lĩnh vực), xen 2 lượt thảo luận (5 phút) và kết luận của chủ toạ (3 phút).",
    "Bài trình bày: tối đa **15 trang chiếu** (1 giới thiệu + 12 nội dung + 1 kết luận), nộp trước hội thảo **2 ngày**. Dàn ý gồm **5 phần**: giới thiệu lĩnh vực, vai trò chuyên viên, cơ hội-thách thức, thông tin đào tạo, kết luận-đề xuất.",
    "Điểm nhóm đánh giá theo **5 tiêu chí** (Nội dung, Hình thức, Tính chuyên nghiệp, Báo cáo viên, Thảo luận), mỗi tiêu chí 4 mức Giỏi/Khá/Trung bình/Chưa đạt.",
    "**Điểm cá nhân = Điểm nhóm × hệ số cá nhân**, hệ số cá nhân = tổng điểm cá nhân (do thành viên nhóm đánh giá lẫn nhau, tối đa 100) chia cho 100%.",
  ],
};

export default theory;
