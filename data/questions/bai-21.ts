import type { Question } from "@/lib/types";

// Bài 21. Hội thảo hướng nghiệp (SGK trang 113-117)
const questions: Question[] = [
  {
    id: "b21-01",
    q: "Theo SGK, nhu cầu nhân lực công nghệ thông tin hiện nay có đặc điểm gì?",
    options: [
      "Không chỉ giới hạn trong ngành công nghệ thông tin, mà lan sang nhiều lĩnh vực khác",
      "Chỉ tập trung duy nhất ở các công ti phần mềm và tập đoàn công nghệ lớn trong nước",
      "Đang giảm dần vì hầu hết công việc công nghệ thông tin đã được tự động hoá hoàn toàn",
      "Chỉ cần thiết đối với các quốc gia phát triển, không liên quan tới Việt Nam",
    ],
    answer: 0,
    explain:
      "SGK nêu: công nghệ thông tin đã trở thành phần không thể thiếu trong cuộc sống hiện đại, nên nhu cầu nhân lực công nghệ thông tin không chỉ giới hạn trong các ngành nghề của lĩnh vực này.",
  },
  {
    id: "b21-02",
    q: "Trong lĩnh vực y tế và y học, chuyên gia công nghệ thông tin được SGK nêu ví dụ tham gia vào công việc nào?",
    options: [
      "Quản lí, duy trì hệ thống bệnh án điện tử, cổng thông tin y tế và phát triển ứng dụng sức khoẻ số",
      "Trực tiếp khám chữa bệnh, kê đơn thuốc và thực hiện các ca phẫu thuật thay cho bác sĩ chuyên khoa",
      "Sản xuất thuốc và vắc xin tại các nhà máy dược phẩm theo quy trình sản xuất công nghiệp",
      "Đào tạo sinh viên y khoa các môn giải phẫu học và sinh lí học tại các trường đại học y",
    ],
    answer: 0,
    explain:
      "SGK nêu: trong lĩnh vực y tế và y học cần các chuyên gia công nghệ thông tin để quản lí, duy trì hệ thống bệnh án điện tử, cổng thông tin y tế, thiết bị số trong bệnh viện và phát triển ứng dụng sức khoẻ số.",
  },
  {
    id: "b21-03",
    q: "Trong lĩnh vực công nghiệp và sản xuất, kĩ sư công nghệ thông tin được SGK nêu có vai trò gì?",
    options: [
      "Triển khai, bảo mật hệ thống thông tin kĩ thuật số, mạng vạn vật và khai thác dữ liệu để cải thiện sản xuất",
      "Vận hành trực tiếp máy móc trên dây chuyền lắp ráp, thay thế hoàn toàn công nhân kĩ thuật lành nghề",
      "Quản lí kho hàng vật tư và điều phối phương tiện vận chuyển nguyên liệu tới nhà máy sản xuất",
      "Thiết kế bao bì sản phẩm và xây dựng chiến lược quảng cáo cho các mặt hàng công nghiệp mới",
    ],
    answer: 0,
    explain:
      "SGK nêu: trong công nghiệp và sản xuất cần kĩ sư công nghệ thông tin để triển khai, bảo mật các hệ thống thông tin kĩ thuật số, mạng vạn vật (IoT), quản lí và khai thác dữ liệu để cải thiện quy trình sản xuất.",
  },
  {
    id: "b21-04",
    q: "Theo kế hoạch gợi ý của SGK, hội thảo hướng nghiệp được tổ chức trong thời lượng bao lâu, tại đâu?",
    options: [
      "1 tiết (45 phút), tại phòng học của lớp",
      "Cả một buổi học, khoảng 3 tiết liên tục, tại hội trường của trường",
      "30 phút đầu giờ trước khi vào tiết học chính, tại sân trường",
      "2 tiết liền nhau (90 phút), tổ chức tại phòng thực hành tin học",
    ],
    answer: 0,
    explain:
      "Theo gợi ý kế hoạch tổ chức hội thảo trong SGK: thời lượng 1 tiết (45 phút), địa điểm là phòng học của lớp.",
  },
  {
    id: "b21-05",
    q: "Theo kế hoạch gợi ý, Ban tổ chức hội thảo gồm bao nhiêu thành viên và được chọn như thế nào?",
    options: [
      "4 thành viên, là đại diện được cử ra từ mỗi nhóm trong lớp",
      "2 thành viên, do giáo viên chỉ định trực tiếp không thông qua ý kiến lớp",
      "Toàn bộ học sinh trong lớp đều tham gia làm thành viên ban tổ chức",
      "6 thành viên, được bầu chọn ngẫu nhiên bằng cách bốc thăm trong lớp",
    ],
    answer: 0,
    explain:
      "SGK gợi ý: Ban tổ chức gồm 4 thành viên là đại diện từ mỗi nhóm (lớp được chia thành 4 nhóm theo 4 lĩnh vực đã chọn).",
  },
  {
    id: "b21-06",
    q: "Theo chương trình hội thảo gợi ý (bảng nội dung 7 dòng), có bao nhiêu lĩnh vực được các nhóm trình bày, mỗi lĩnh vực bao nhiêu phút?",
    options: [
      "4 lĩnh vực, mỗi lĩnh vực trình bày trong 8 phút",
      "2 lĩnh vực, mỗi lĩnh vực trình bày trong 15 phút",
      "6 lĩnh vực, mỗi lĩnh vực trình bày trong 5 phút",
      "1 lĩnh vực duy nhất, trình bày trong toàn bộ 45 phút",
    ],
    answer: 0,
    explain:
      "Chương trình mẫu trong SGK có 4 nhóm, mỗi nhóm trình bày một lĩnh vực (y tế, giáo dục, tài chính-kinh doanh, truyền thông-giải trí) trong 8 phút, xen giữa là các lượt thảo luận và kết luận của chủ toạ.",
  },
  {
    id: "b21-07",
    q: "Theo hướng dẫn Nhiệm vụ 1 (Chuẩn bị hội thảo), ban tổ chức quy định mỗi bài trình bày tối đa bao nhiêu trang chiếu và gồm những phần nào?",
    options: [
      "Tối đa 15 trang: 1 trang giới thiệu chủ đề và nhóm, tối đa 12 trang nội dung, 1 trang kết luận, cảm ơn",
      "Tối đa 5 trang, chỉ gồm duy nhất phần nội dung chính, không cần trang giới thiệu hay kết luận",
      "Không giới hạn số trang, miễn là trình bày đủ toàn bộ thông tin nhóm đã tìm hiểu được",
      "Đúng 20 trang cố định cho mọi nhóm, chia đều 5 trang cho mỗi phần trong dàn ý",
    ],
    answer: 0,
    explain:
      "SGK quy định: mỗi bài không quá 15 trang chiếu, gồm 1 trang giới thiệu về chủ đề và nhóm, tối đa 12 trang nội dung và 1 trang kết luận, cảm ơn.",
  },
  {
    id: "b21-08",
    q: "Theo Nhiệm vụ 1, các nhóm cần nộp bài trình bày cho ban tổ chức trước thời điểm nào?",
    options: [
      "Trước hội thảo 2 ngày, để ban tổ chức tập hợp tài liệu và gửi trước cho các chuyên gia",
      "Ngay trong giờ giải lao trước khi hội thảo bắt đầu vài phút, không cần chuẩn bị trước",
      "Sau khi hội thảo kết thúc, để làm căn cứ đối chiếu với phần trình bày thực tế",
      "Trước hội thảo đúng 1 tháng, để giáo viên có thời gian duyệt và chỉnh sửa toàn bộ",
    ],
    answer: 0,
    explain:
      "SGK nêu yêu cầu về thời hạn nộp bài trước hội thảo 2 ngày, để ban tổ chức tập hợp tài liệu hội thảo, nộp cho giáo viên và gửi trước cho các chuyên gia.",
  },
  {
    id: "b21-09",
    q: "Ở Bước 1 (Lập dàn ý bài trình bày) của Nhiệm vụ 2, dàn ý gợi ý gồm mấy phần chính?",
    options: [
      "5 phần: giới thiệu lĩnh vực, vai trò chuyên viên, cơ hội-thách thức, thông tin đào tạo, kết luận",
      "3 phần: mở bài, thân bài và kết bài theo đúng cấu trúc một bài văn nghị luận thông thường",
      "2 phần: phần lí thuyết trình bày bằng lời và phần thực hành minh hoạ bằng video clip",
      "7 phần, tương ứng với 7 dòng trong bảng chương trình hội thảo đã lập ở phần trước",
    ],
    answer: 0,
    explain:
      "SGK gợi ý dàn ý gồm 5 phần: (I) Giới thiệu về lĩnh vực và vai trò của công nghệ thông tin, (II) Vai trò của chuyên viên công nghệ thông tin, (III) Phân tích cơ hội và thách thức, (IV) Chia sẻ thông tin về đào tạo, (V) Kết luận và đề xuất.",
  },
  {
    id: "b21-10",
    q: "Ở Bước 2 (Thu thập thông tin) của Nhiệm vụ 2, SGK gợi ý những nguồn tin nào?",
    options: [
      "Trang web chính thức của tổ chức, nghiên cứu uy tín, tin tuyển dụng, ý kiến chuyên gia",
      "Chỉ duy nhất sách giáo khoa Tin học 12 và các tài liệu do giáo viên phát trực tiếp trên lớp",
      "Chỉ hỏi trực tiếp bạn bè trong lớp, không cần tra cứu thêm bất kì nguồn thông tin nào khác",
      "Chỉ dùng thông tin từ các trang mạng xã hội cá nhân không rõ nguồn gốc, không cần kiểm chứng",
    ],
    answer: 0,
    explain:
      "SGK gợi ý các nguồn: trang web chính thức của tổ chức, công ti, cơ sở đào tạo; các nghiên cứu, bài báo từ tổ chức uy tín; tin tuyển dụng liên quan ngành nghề; ý kiến từ diễn đàn, chuyên gia trong ngành.",
  },
  {
    id: "b21-11",
    q: "Ở Bước 3 (Chọn lọc, tổng hợp thông tin và xây dựng bài trình bày), SGK lưu ý điều gì khi sử dụng thông tin đã thu thập?",
    options: [
      "Chọn cách biểu diễn phù hợp (bảng, biểu đồ, sơ đồ, ảnh) và nêu rõ nguồn thông tin",
      "Sao chép nguyên văn toàn bộ nội dung tìm được, không cần chỉnh sửa hay trích dẫn nguồn gốc",
      "Chỉ được phép trình bày bằng văn bản thuần tuý, tuyệt đối không dùng bảng biểu hay hình ảnh",
      "Giữ bí mật nguồn thông tin, không tiết lộ cho người nghe biết thông tin lấy từ đâu",
    ],
    answer: 0,
    explain:
      "SGK lưu ý: với thông tin được chọn để trình bày, cần lựa chọn cách biểu diễn phù hợp (bảng, biểu đồ, sơ đồ, ảnh minh hoạ...) để rõ ràng, dễ hiểu, và phải nêu rõ nguồn của các thông tin sử dụng.",
  },
  {
    id: "b21-12",
    q: "Ở Nhiệm vụ 3 (Tổ chức hội thảo và đánh giá kết quả), điểm của mỗi nhóm được giáo viên đánh giá theo mấy tiêu chí, mức \"Giỏi\" của mỗi tiêu chí được bao nhiêu điểm?",
    options: [
      "5 tiêu chí, mức Giỏi mỗi tiêu chí được 2 điểm",
      "3 tiêu chí, mức Giỏi mỗi tiêu chí được 5 điểm",
      "10 tiêu chí, mức Giỏi mỗi tiêu chí được 1 điểm",
      "5 tiêu chí, mức Giỏi mỗi tiêu chí được 10 điểm",
    ],
    answer: 0,
    explain:
      "Bảng tiêu chí đánh giá của SGK gồm 5 tiêu chí (Nội dung, Hình thức, Tính chuyên nghiệp, Báo cáo viên, Thảo luận), mỗi tiêu chí có 4 mức: Giỏi (2 điểm), Khá (1,5 điểm), Trung bình (1 điểm), Chưa đạt (0,5 điểm).",
  },
  {
    id: "b21-13",
    q: "Theo tiêu chí \"Nội dung\" trong bảng đánh giá, mức \"Trung bình\" (1 điểm) tương ứng với yêu cầu nào?",
    options: [
      "Giới thiệu được 50% - 80% nội dung như dàn ý đã lập",
      "Giới thiệu được đầy đủ toàn bộ nội dung như dàn ý đã lập ban đầu",
      "Giới thiệu được ít hơn 50% nội dung như dàn ý đã lập ban đầu",
      "Không giới thiệu được bất kì nội dung nào có trong dàn ý đã lập",
    ],
    answer: 0,
    explain:
      "Theo bảng tiêu chí đánh giá của SGK: mức Trung bình (1 điểm) ở tiêu chí Nội dung tương ứng với giới thiệu được 50% - 80% nội dung như dàn ý.",
  },
  {
    id: "b21-14",
    q: "Công thức tính điểm cá nhân được SGK đưa ra là gì?",
    options: [
      "Điểm cá nhân = Điểm nhóm × hệ số cá nhân",
      "Điểm cá nhân = Điểm nhóm chia đều cho tổng số thành viên trong nhóm",
      "Điểm cá nhân = Điểm nhóm cộng thêm điểm thưởng cố định 1 điểm cho mỗi thành viên",
      "Điểm cá nhân hoàn toàn độc lập, không liên quan gì tới điểm chung của cả nhóm",
    ],
    answer: 0,
    explain:
      "SGK nêu công thức: Điểm cá nhân = Điểm nhóm × hệ số cá nhân, trong đó hệ số cá nhân được xác định bằng tổng điểm cá nhân (do các thành viên trong nhóm đánh giá lẫn nhau) chia cho 100%.",
  },
  {
    id: "b21-15",
    q: "Phần Vận dụng của Bài 21 yêu cầu học sinh làm gì?",
    options: [
      "Chia sẻ thông tin hướng nghiệp về ngành yêu thích qua mạng xã hội dạng áp phích hoặc video clip",
      "Nộp lại toàn bộ bài trình bày của nhóm cho giáo viên chấm điểm lại lần thứ hai trong tuần sau",
      "Tổ chức lại y nguyên hội thảo lần thứ hai với cùng nội dung tại một lớp học khác trong trường",
      "Viết một bản báo cáo tổng kết dài 10 trang A4 gửi cho ban giám hiệu nhà trường xem xét",
    ],
    answer: 0,
    explain:
      "SGK nêu Vận dụng: chia sẻ thông tin hướng nghiệp về ngành nghề em yêu thích với bạn bè, người thân qua mạng xã hội dưới dạng áp phích truyền thông hoặc video clip.",
  },
];

export default questions;
