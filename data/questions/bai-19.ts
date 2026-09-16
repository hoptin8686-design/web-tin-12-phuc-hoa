import type { Question } from "@/lib/types";

// Bài 19. Dịch vụ sửa chữa và bảo trì máy tính (SGK trang 106-109)
const questions: Question[] = [
  {
    id: "b19-01",
    q: "Công việc sửa chữa và bảo trì máy tính thuộc nhóm nghề nào trong xã hội hiện nay?",
    options: [
      "Nhóm nghề dịch vụ thuộc ngành Công nghệ thông tin",
      "Nhóm nghề nghiên cứu và phát triển phần mềm độc lập",
      "Nhóm nghề tự động hoá và robot trong công nghiệp",
      "Nhóm nghề điện tử viễn thông và truyền tải mạng",
    ],
    answer: 0,
    explain:
      "Theo SGK, các nghề dịch vụ thuộc ngành Công nghệ thông tin có nhiệm vụ hỗ trợ, phát triển và duy trì các hệ thống công nghệ thông tin. Sửa chữa, bảo trì máy tính là một nghề thuộc nhóm dịch vụ này.",
  },
  {
    id: "b19-02",
    q: "Nhiệm vụ chính của công việc sửa chữa và bảo trì máy tính là gì?",
    options: [
      "Nhằm duy trì sự ổn định của máy tính và giúp người dùng được hỗ trợ kĩ thuật khi cần",
      "Tạo ra các phần mềm quản lí doanh nghiệp và thiết kế các loại cơ sở dữ liệu quy mô lớn",
      "Sản xuất, lắp ráp hàng loạt các linh kiện phần cứng máy tính tại các khu công nghiệp",
      "Thiết kế giao diện người dùng và lập trình các trang web thương mại điện tử trực tuyến",
    ],
    answer: 0,
    explain:
      "Công việc của nghề này nhằm duy trì sự ổn định của máy tính cũng như các thiết bị liên quan, giúp người dùng được hỗ trợ kĩ thuật khi cần thiết.",
  },
  {
    id: "b19-03",
    q: "Trong quá trình sửa chữa máy tính, tại sao không thể tách rời việc bảo trì phần cứng và phần mềm?",
    options: [
      "Vì máy tính chỉ có thể hoạt động ổn định khi cả phần cứng và phần mềm đều phù hợp và tương thích với nhau",
      "Vì các kĩ thuật viên sửa chữa bắt buộc phải bán kèm phần mềm bản quyền mỗi khi thay thế một linh kiện mới",
      "Vì các bộ phận phần cứng sẽ tự động sửa lỗi phần mềm nếu chúng được cập nhật thường xuyên trên mạng",
      "Vì phần cứng và phần mềm luôn được sản xuất từ cùng một công ty nên chúng không thể tháo rời hay chia cắt",
    ],
    answer: 0,
    explain:
      "SGK nhấn mạnh: Sửa chữa, bảo trì phần cứng không tách rời khỏi việc duy trì phần mềm đi kèm để đảm bảo môi trường hoạt động cho cả hệ thống một cách ổn định, hiệu quả.",
  },
  {
    id: "b19-04",
    q: "Công việc nào sau đây thuộc nhóm công việc liên quan tới phần mềm của người làm nghề bảo trì máy tính?",
    options: [
      "Cài đặt hệ điều hành, phần mềm văn phòng, diệt virus và cập nhật driver cho thiết bị ngoại vi",
      "Thay thế bo mạch chủ (mainboard) hoặc nâng cấp dung lượng thanh RAM để tăng tốc độ",
      "Kiểm tra vật lí các cáp kết nối màn hình và làm sạch bụi bẩn bên trong thùng máy tính",
      "Thiết kế cấu trúc mạng vật lí và đi dây cáp mạng LAN xuyên qua các tầng của toà nhà",
    ],
    answer: 0,
    explain:
      "Thay thế bo mạch, nâng cấp RAM, kiểm tra cáp mạng vật lí là các công việc phần cứng/mạng. Cài đặt hệ điều hành, driver, diệt virus là công việc liên quan tới phần mềm.",
  },
  {
    id: "b19-05",
    q: "Công việc nào sau đây thuộc về kĩ năng hỗ trợ người dùng của nhân viên sửa chữa máy tính?",
    options: [
      "Hướng dẫn người dùng sử dụng máy tính, thiết bị công nghệ thông tin và phần mềm đúng cách",
      "Tự động xoá toàn bộ dữ liệu cá nhân của người dùng để máy tính hoạt động nhanh chóng hơn",
      "Chỉ tập trung sửa các lỗi kĩ thuật trên máy tính mà không cần giải thích cho khách hàng hiểu",
      "Viết lại toàn bộ mã nguồn của phần mềm mà người dùng đang sử dụng để sửa các lỗi bên trong",
    ],
    answer: 0,
    explain:
      "Công việc liên quan tới hỗ trợ người dùng là hướng dẫn người dùng sử dụng máy tính, thiết bị công nghệ thông tin và các phần mềm thông dụng một cách đúng đắn, hiệu quả.",
  },
  {
    id: "b19-06",
    q: "Để làm tốt nghề sửa chữa và bảo trì máy tính, người kĩ thuật viên cần trang bị khối kiến thức về mảng nào?",
    options: [
      "Kiến thức toàn diện về phần cứng, phần mềm và kiến thức cơ bản về mạng máy tính",
      "Chỉ cần nắm vững kiến thức lập trình ứng dụng di động và thiết kế đồ hoạ ba chiều",
      "Chỉ cần hiểu biết sâu sắc về các ngôn ngữ lập trình trí tuệ nhân tạo và học máy",
      "Kiến thức quản trị kinh doanh, marketing trực tuyến và cách tối ưu hoá công cụ tìm kiếm",
    ],
    answer: 0,
    explain:
      "Người làm nghề sửa chữa và bảo trì máy tính cần phải có kiến thức về phần cứng, phần mềm, mạng máy tính và một số kĩ năng mềm để nâng cao hiệu quả làm việc.",
  },
  {
    id: "b19-07",
    q: "Kĩ năng mềm nào giúp nhân viên bảo trì máy tính hiểu được yêu cầu của khách hàng và tư vấn giải pháp hiệu quả?",
    options: [
      "Kĩ năng giao tiếp",
      "Kĩ năng lập trình",
      "Kĩ năng đồ hoạ",
      "Kĩ năng quản lí tài chính",
    ],
    answer: 0,
    explain:
      "Kĩ năng giao tiếp: Có khả năng giao tiếp tốt với người dùng để hiểu các yêu cầu của họ và giải thích, tư vấn cho họ các giải pháp kĩ thuật một cách dễ hiểu.",
  },
  {
    id: "b19-08",
    q: "Khả năng phân tích vấn đề kĩ thuật, tìm kiếm tài liệu hướng dẫn trên Internet để khắc phục lỗi thuộc về kĩ năng nào?",
    options: [
      "Kĩ năng giải quyết vấn đề",
      "Kĩ năng giao tiếp khách hàng",
      "Kĩ năng quản lí thời gian",
      "Kĩ năng thiết kế phần cứng",
    ],
    answer: 0,
    explain:
      "Kĩ năng giải quyết vấn đề: Có khả năng phân tích và giải quyết các vấn đề kĩ thuật. Biết cách tìm kiếm, tra cứu tài liệu hướng dẫn, thông tin hữu ích được chia sẻ trên Internet và phương pháp khắc phục lỗi.",
  },
  {
    id: "b19-09",
    q: "Tại sao nhu cầu nhân lực cho dịch vụ sửa chữa và bảo trì máy tính được dự báo sẽ tiếp tục tăng trong tương lai?",
    options: [
      "Do sự phổ biến của máy tính và sự bùng nổ của các thiết bị kết nối trong kỉ nguyên công nghiệp 4.0",
      "Do máy tính hiện đại được thiết kế với tuổi thọ rất ngắn nên cần phải sửa chữa liên tục hàng tuần",
      "Do chính phủ bắt buộc mọi người dân phải thuê nhân viên bảo trì kiểm tra máy tính định kì mỗi tháng",
      "Do các công ty phần mềm cố tình tạo ra nhiều lỗi để kích thích sự phát triển của ngành dịch vụ này",
    ],
    answer: 0,
    explain:
      "Trong tương lai gần, nhu cầu nhân lực làm nghề này dự kiến sẽ tăng lên do cuộc cách mạng công nghiệp 4.0 dẫn đến sự phổ biến của máy tính, thiết bị kĩ thuật số cũng như sự bùng nổ của các thiết bị kết nối.",
  },
  {
    id: "b19-10",
    q: "Sự phát triển của mô hình làm việc từ xa ảnh hưởng như thế nào đến nghề sửa chữa và bảo trì máy tính?",
    options: [
      "Đòi hỏi kĩ thuật viên phải có kĩ năng chẩn đoán, sửa lỗi từ xa và am hiểu các biện pháp bảo mật an toàn thông tin",
      "Làm giảm đi vai trò của kĩ thuật viên vì người dùng có thể tự mình sửa chữa mọi thiết bị ngay tại nhà",
      "Yêu cầu kĩ thuật viên phải chuyển sang làm công việc giao hàng các linh kiện máy tính đến tận nhà người dùng",
      "Khiến cho dịch vụ bảo trì phần cứng bị loại bỏ hoàn toàn, chỉ còn tập trung vào lập trình các phần mềm đám mây",
    ],
    answer: 0,
    explain:
      "Theo SGK, mô hình làm việc từ xa và sự gia tăng dịch vụ trực tuyến yêu cầu họ phải có kĩ năng chẩn đoán và sửa lỗi từ xa. Đồng thời, đòi hỏi ngày càng cao về bảo mật thông tin.",
  },
  {
    id: "b19-11",
    q: "Sự khác biệt chính trong việc đào tạo nghề sửa chữa, bảo trì ở bậc Cao đẳng so với bậc Đại học ở Việt Nam là gì?",
    options: [
      "Bậc Cao đẳng chú ý rèn luyện kĩ năng sửa chữa cụ thể, trong khi Đại học giúp giải quyết các vấn đề phức tạp và đòi hỏi chuyên môn cao",
      "Bậc Cao đẳng chỉ dạy về kĩ năng lắp ráp phần cứng máy tính, còn bậc Đại học chỉ tập trung hoàn toàn vào việc đào tạo lập trình phần mềm",
      "Bậc Cao đẳng đào tạo ra các nhà quản lí dự án công nghệ thông tin, còn bậc Đại học đào tạo ra những thợ lắp ráp linh kiện trên dây chuyền",
      "Bậc Cao đẳng cấp chứng chỉ quốc tế về bảo mật không gian mạng, còn bậc Đại học chỉ tập trung cấp chứng chỉ tin học văn phòng cơ bản",
    ],
    answer: 0,
    explain:
      "SGK nêu rõ: Các trường dạy nghề ở bậc Cao đẳng thường có điều kiện rèn kĩ năng sửa chữa thiết bị cụ thể. Ở bậc Đại học, sinh viên được đào tạo về nguyên lí hoạt động, giải quyết các vấn đề phức tạp, khả năng tìm hiểu thiết bị mới đòi hỏi kiến thức cao.",
  },
  {
    id: "b19-12",
    q: "Ngành học nào sau đây KHÔNG liên quan trực tiếp đến nhóm nghề sửa chữa và bảo trì máy tính được đề cập trong sách giáo khoa?",
    options: [
      "Công nghệ sinh học phân tử và di truyền",
      "Kĩ thuật sửa chữa, lắp ráp máy tính",
      "Công nghệ kĩ thuật phần cứng máy tính",
      "Công nghệ kĩ thuật phần mềm máy tính",
    ],
    answer: 0,
    explain:
      "Các ngành như Kĩ thuật sửa chữa lắp ráp, Công nghệ kĩ thuật phần cứng, phần mềm, CNTT đều liên quan. Công nghệ sinh học phân tử không liên quan trực tiếp.",
  },
  {
    id: "b19-13",
    q: "Công việc nâng cấp hoặc bổ sung thiết bị như thay ổ cứng, RAM dung lượng lớn hơn được xếp vào nhóm công việc nào?",
    options: [
      "Công việc liên quan tới phần cứng",
      "Công việc liên quan tới phần mềm",
      "Công việc liên quan tới thiết lập mạng",
      "Công việc liên quan tới hỗ trợ người dùng",
    ],
    answer: 0,
    explain:
      "Thay thế ổ cứng, RAM, màn hình, mainboard thuộc nhóm công việc liên quan tới phần cứng.",
  },
  {
    id: "b19-14",
    q: "Người làm nghề sửa chữa máy tính quét mã độc và cấu hình phần mềm phòng chống virus nhằm mục đích gì?",
    options: [
      "Để rà soát, đảm bảo an toàn cho hệ thống và ngăn chặn các nguy cơ tấn công mạng",
      "Để tự động sao lưu và phát tán dữ liệu cá nhân của người dùng lên các máy chủ công cộng trực tuyến",
      "Để phá vỡ các lớp bảo mật của hệ điều hành, giúp các phần mềm lậu hoạt động mượt mà hơn",
      "Để tăng tốc độ quay của ổ cứng cơ học, làm cho máy tính hoạt động với hiệu suất tối đa liên tục",
    ],
    answer: 0,
    explain:
      "Công việc quét mã độc, cấu hình diệt virus nhằm rà soát an toàn của hệ thống, bảo vệ máy tính khỏi các phần mềm độc hại, thuộc nhóm công việc phần mềm.",
  },
  {
    id: "b19-15",
    q: "Tại sao kĩ năng quản lí thời gian lại quan trọng đối với kĩ thuật viên sửa chữa máy tính?",
    options: [
      "Giúp hoàn thành dự án sửa chữa, bảo trì trong thời gian quy định và đáp ứng kịp thời yêu cầu của khách hàng",
      "Giúp họ có thời gian viết các ứng dụng giải trí và trò chơi điện tử để bán kiếm thêm thu nhập phụ",
      "Giúp họ tính toán chính xác số giờ đã làm để yêu cầu khách hàng trả thêm chi phí phát sinh mà không cần báo trước",
      "Giúp họ kéo dài thời gian sửa chữa một thiết bị để khiến khách hàng tin rằng máy bị lỗi rất nghiêm trọng",
    ],
    answer: 0,
    explain:
      "Kĩ năng quản lí thời gian: Có khả năng quản lí thời gian để hoàn thành dự án sửa chữa, bảo trì trong thời gian quy định và đáp ứng yêu cầu của khách hàng.",
  },
];

export default questions;
