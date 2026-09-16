import type { LessonExtra } from "@/lib/types";

// Bài 21. Hội thảo hướng nghiệp — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b21-tf1",
      context:
        "Trước khi lập kế hoạch hội thảo, cô giáo cho cả lớp đọc lại đoạn mở đầu SGK về nhu cầu nhân lực công nghệ thông tin trong các lĩnh vực y tế, công nghiệp sản xuất. Bạn Yến phát biểu vài nhận định để cả lớp cùng nhận xét đúng, sai.",
      code: "",
      statements: [
        {
          text: "Nhu cầu nhân lực công nghệ thông tin hiện nay chỉ giới hạn trong chính các ngành nghề của lĩnh vực công nghệ thông tin.",
          answer: false,
          explain: "Sai. SGK nêu rõ nhu cầu nhân lực công nghệ thông tin không chỉ giới hạn trong các ngành nghề của lĩnh vực này, mà lan sang nhiều lĩnh vực khác như y tế, công nghiệp, tài chính...",
        },
        {
          text: "Trong lĩnh vực y tế, chuyên gia công nghệ thông tin có thể tham gia quản lí hệ thống bệnh án điện tử và phát triển ứng dụng sức khoẻ số.",
          answer: true,
          explain: "Đúng theo ví dụ của SGK: lĩnh vực y tế cần chuyên gia công nghệ thông tin quản lí, duy trì hệ thống bệnh án điện tử, cổng thông tin y tế và phát triển ứng dụng sức khoẻ số.",
        },
        {
          text: "Trong công nghiệp và sản xuất, kĩ sư công nghệ thông tin có vai trò khai thác dữ liệu để cải thiện quy trình sản xuất.",
          answer: true,
          explain: "Đúng theo SGK: kĩ sư công nghệ thông tin trong công nghiệp, sản xuất quản lí và khai thác dữ liệu để cải thiện quy trình sản xuất, bên cạnh việc triển khai, bảo mật hệ thống thông tin và IoT.",
        },
        {
          text: "SGK khẳng định các lĩnh vực tài chính, ngân hàng, khoa học xã hội hoàn toàn không sử dụng nhân lực công nghệ thông tin.",
          answer: false,
          explain: "Sai. SGK gợi ý học sinh tự nêu thêm ví dụ liên quan tới các lĩnh vực khác như tài chính, ngân hàng, khoa học xã hội — nghĩa là các lĩnh vực này cũng có sử dụng nhân lực công nghệ thông tin.",
        },
      ],
    },
    {
      id: "b21-tf2",
      context:
        "Lớp 12A đang lập kế hoạch tổ chức hội thảo theo gợi ý SGK. Ban tổ chức trình bày bản kế hoạch sơ bộ, bạn Tùng đọc rồi phát biểu vài nhận định để cả lớp góp ý.",
      code: "",
      statements: [
        {
          text: "Theo kế hoạch gợi ý, hội thảo diễn ra trong 1 tiết (45 phút), có thể kết hợp trực tuyến với một số khách mời ở xa.",
          answer: true,
          explain: "Đúng: kế hoạch gợi ý ghi thời lượng 1 tiết (45 phút), hình thức trực tiếp, có thể kết hợp trực tuyến với khách mời ở xa.",
        },
        {
          text: "Ban tổ chức gồm 4 thành viên là đại diện được cử từ mỗi nhóm trong lớp.",
          answer: true,
          explain: "Đúng theo gợi ý SGK: Ban tổ chức gồm 4 thành viên là đại diện từ mỗi nhóm (lớp chia thành 4 nhóm theo 4 lĩnh vực).",
        },
        {
          text: "Chương trình hội thảo mẫu chỉ có một nhóm duy nhất trình bày, không có phần thảo luận xen giữa các phần trình bày.",
          answer: false,
          explain: "Sai. Chương trình mẫu có 4 nhóm lần lượt trình bày 4 lĩnh vực, xen giữa là hai lượt thảo luận (có chủ toạ, chuyên gia và các nhóm tham gia) và một phần kết luận cuối cùng do chủ toạ thực hiện.",
        },
        {
          text: "Mỗi bài trình bày của các nhóm không được vượt quá 10 trang chiếu, gồm 2 trang giới thiệu và 8 trang nội dung, không có trang kết luận.",
          answer: false,
          explain: "Sai. Quy định đúng trong Nhiệm vụ 1 là không quá 15 trang chiếu, gồm 1 trang giới thiệu, tối đa 12 trang nội dung và 1 trang kết luận, cảm ơn.",
        },
      ],
    },
    {
      id: "b21-tf3",
      context:
        "Sau khi các nhóm trình bày xong ở buổi hội thảo, giáo viên chấm điểm theo bảng tiêu chí trong SGK, rồi hướng dẫn cả lớp tính điểm cá nhân cho từng thành viên. Bạn Hoa và bạn Đức tranh luận về cách tính điểm.",
      code: "",
      statements: [
        {
          text: "Điểm của mỗi nhóm được giáo viên đánh giá theo 5 tiêu chí, trong đó mức Giỏi của mỗi tiêu chí được 2 điểm.",
          answer: true,
          explain: "Đúng: bảng tiêu chí đánh giá gồm 5 tiêu chí (Nội dung, Hình thức, Tính chuyên nghiệp, Báo cáo viên, Thảo luận), mức Giỏi mỗi tiêu chí được 2 điểm.",
        },
        {
          text: "Công thức tính điểm cá nhân là: Điểm cá nhân = Điểm nhóm × hệ số cá nhân.",
          answer: true,
          explain: "Đúng theo SGK, và hệ số cá nhân được xác định bằng tổng điểm cá nhân (do các thành viên trong nhóm tự đánh giá lẫn nhau theo 5 tiêu chí, tổng tối đa 100) chia cho 100%.",
        },
        {
          text: "Hoa cho rằng mọi thành viên trong cùng một nhóm luôn nhận điểm cá nhân bằng nhau, vì điểm nhóm là như nhau cho cả nhóm.",
          answer: false,
          explain: "Sai. Vì điểm cá nhân còn phụ thuộc vào hệ số cá nhân — do các thành viên trong nhóm đánh giá lẫn nhau theo mức độ hoàn thành nhiệm vụ, tinh thần trách nhiệm, đóng góp ý kiến... nên các thành viên có thể có hệ số khác nhau.",
        },
        {
          text: "Đức cho rằng bắt buộc phải tổ chức thêm một hội thảo lần hai thì mới được trao điểm thưởng cho ban tổ chức và chủ toạ.",
          answer: false,
          explain: "Sai. SGK chỉ nêu: ngoài cách tính điểm cá nhân theo công thức trên, lớp CÓ THỂ thảo luận và thống nhất điểm thưởng cho ban tổ chức, chủ toạ — không yêu cầu phải tổ chức thêm hội thảo lần hai.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b21-es1",
      q: "Trình bày kế hoạch tổ chức một hội thảo hướng nghiệp theo gợi ý của SGK: tên hội thảo, chủ đề, thời lượng, thành phần, ban tổ chức, chủ toạ và nội dung chính.",
      answer:
        "* Kế hoạch gợi ý:\n- Tên hội thảo: Hội thảo hướng nghiệp.\n- Chủ đề: Nhân lực công nghệ thông tin — cơ hội và thách thức trong kỉ nguyên số.\n- Thời lượng: 1 tiết (45 phút).\n- Địa điểm: Phòng học của lớp.\n- Thành phần: Giáo viên, khách mời, học sinh của lớp.\n- Hình thức: Trực tiếp, có thể kết hợp trực tuyến với một số khách mời ở xa.\n- Ban tổ chức: 4 thành viên là đại diện từ mỗi nhóm.\n- Chủ toạ: 3 thành viên do ban tổ chức chọn cử trong lớp.\n\n* Nội dung chính:\n- Thảo luận về một số ngành nghề, lĩnh vực có sử dụng nhân lực công nghệ thông tin.\n- Thảo luận về vai trò và công việc của chuyên viên công nghệ thông tin trong các ngành nghề đó.\n- Chia sẻ thông tin ngành đào tạo của một số cơ sở đào tạo Công nghệ thông tin phù hợp.\n\nDo thời gian hạn chế, nên chọn ra một vài lĩnh vực học sinh quan tâm nhất (ví dụ: y tế, giáo dục, tài chính-kinh doanh, truyền thông-giải trí), mỗi lĩnh vực giao cho một nhóm chuẩn bị và trình bày.",
    },
    {
      id: "b21-es2",
      q: "Trình bày 4 bước xây dựng bài trình bày ở Nhiệm vụ 2 của Bài 21, và cách tính điểm nhóm, điểm cá nhân ở Nhiệm vụ 3.",
      answer:
        "* Bốn bước xây dựng bài trình bày:\n1. Lập dàn ý bài trình bày: gồm 5 phần — (I) Giới thiệu lĩnh vực và vai trò công nghệ thông tin; (II) Vai trò của chuyên viên công nghệ thông tin (công việc chính, kiến thức và kĩ năng cần có); (III) Phân tích cơ hội và thách thức; (IV) Chia sẻ thông tin về đào tạo (cơ sở đào tạo, chương trình đào tạo); (V) Kết luận và đề xuất.\n2. Thu thập thông tin: từ trang web chính thức của tổ chức/công ti/cơ sở đào tạo, các nghiên cứu và bài báo từ tổ chức uy tín, tin tuyển dụng liên quan, ý kiến từ diễn đàn và chuyên gia trong ngành.\n3. Chọn lọc, tổng hợp thông tin và xây dựng bài trình bày: thảo luận nhóm để phân tích, kiểm chứng thông tin thu được; chọn cách biểu diễn phù hợp (bảng, biểu đồ, sơ đồ, ảnh minh hoạ); nêu rõ nguồn thông tin; dùng phần mềm trình chiếu, tuân thủ giới hạn số trang và thời lượng.\n4. Báo cáo thử, hoàn thiện bài trình bày: chọn báo cáo viên, báo cáo thử để các thành viên góp ý, chỉnh sửa nội dung, hoàn thiện phương án trình bày, nộp bài đúng hạn.\n\n* Cách tính điểm:\n- Điểm nhóm: giáo viên đánh giá theo 5 tiêu chí (Nội dung, Hình thức, Tính chuyên nghiệp, Báo cáo viên, Thảo luận), mỗi tiêu chí có 4 mức Giỏi (2đ) — Khá (1,5đ) — Trung bình (1đ) — Chưa đạt (0,5đ), cộng lại thành tổng điểm nhóm.\n- Điểm cá nhân = Điểm nhóm × hệ số cá nhân. Hệ số cá nhân = tổng điểm cá nhân (do các thành viên trong nhóm đánh giá lẫn nhau theo 5 tiêu chí, tổng tối đa 100) chia cho 100%.",
    },
  ],
};

export default extra;
