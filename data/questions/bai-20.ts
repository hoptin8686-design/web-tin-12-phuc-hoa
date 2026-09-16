import type { Question } from "@/lib/types";

// Bài 20. Nhóm nghề quản trị thuộc ngành Công nghệ thông tin (SGK trang 110-112)
const questions: Question[] = [
  {
    id: "b20-01",
    q: "Sự kiện mã độc WannaCry tấn công toàn cầu vào năm 2017 đã làm nổi bật lên vai trò vô cùng quan trọng của nhóm chuyên gia nào?",
    options: [
      "Nhóm chuyên gia quản trị và bảo mật hệ thống thông tin",
      "Nhóm kĩ sư phát triển phần mềm và lập trình trò chơi",
      "Nhóm thiết kế đồ hoạ ba chiều và kĩ xảo điện ảnh",
      "Nhóm kĩ thuật viên sửa chữa màn hình và phần cứng",
    ],
    answer: 0,
    explain:
      "Sự cố an ninh mạng nghiêm trọng như WannaCry (năm 2017) cho thấy vai trò sống còn của các chuyên gia quản trị hệ thống thông tin, bảo mật và quản trị mạng trong việc bảo vệ dữ liệu và hệ thống.",
  },
  {
    id: "b20-02",
    q: "Nhiệm vụ cài đặt, cấu hình, theo dõi hiệu suất và xử lí các sự cố để đảm bảo mạng lưới luôn hoạt động ổn định thuộc về công việc nào?",
    options: [
      "Quản trị mạng",
      "Bảo mật hệ thống thông tin",
      "Lập trình ứng dụng di động",
      "Sửa chữa bo mạch chủ máy tính",
    ],
    answer: 0,
    explain:
      "Quản trị mạng: Chuyên gia quản trị mạng có nhiệm vụ quản lí và duy trì hệ thống mạng, bao gồm cài đặt, cấu hình, bảo mật mạng, theo dõi hiệu suất, xử lí sự cố.",
  },
  {
    id: "b20-03",
    q: "Công việc chính của chuyên gia bảo mật hệ thống thông tin là gì?",
    options: [
      "Triển khai các biện pháp bảo mật, giám sát mạng để phát hiện sự xâm nhập trái phép và xử lí các sự cố liên quan đến bảo mật",
      "Quản lí hệ điều hành, cài đặt và nâng cấp các phiên bản phần mềm diệt virus cho các máy tính cá nhân của nhân viên",
      "Phân tích lưu lượng mạng, cấu hình các thiết bị phần cứng như bộ định tuyến (router) và thiết kế hệ thống cáp mạng",
      "Lắp ráp máy chủ mới, thay thế ổ cứng bị hỏng và vệ sinh toàn bộ hệ thống máy tính của tổ chức định kì hàng tháng",
    ],
    answer: 0,
    explain:
      "Bảo mật hệ thống thông tin: đảm nhận vai trò bảo mật dữ liệu, phát triển triển khai biện pháp bảo mật, giám sát mạng để phát hiện xâm nhập trái phép và xử lí sự cố liên quan đến bảo mật.",
  },
  {
    id: "b20-04",
    q: "Người làm nghề quản trị và bảo trì hệ thống phải đảm nhận nhiệm vụ gì trong một tổ chức?",
    options: [
      "Quản lí và duy trì toàn bộ hệ thống thông tin bao gồm cả phần cứng và phần mềm, cài đặt, cập nhật và xử lí sự cố để đảm bảo sự ổn định",
      "Chỉ tập trung vào việc giám sát toàn bộ lưu lượng truy cập Internet của nhân viên nhằm ngăn chặn họ tải xuống các tệp tin trái phép",
      "Nghiên cứu sâu các phương thức tấn công từ chối dịch vụ để kiểm tra sức chịu đựng của các hệ thống máy tính của đối thủ cạnh tranh",
      "Cung cấp các dịch vụ bảo hành, thay thế linh kiện điện tử trực tiếp tại nhà cho tất cả khách hàng cá nhân đã mua sản phẩm của công ty",
    ],
    answer: 0,
    explain:
      "Quản trị và bảo trì hệ thống: quản lí và duy trì toàn bộ hệ thống (phần cứng, phần mềm). Cài đặt, cập nhật và xử lí sự cố để đảm bảo sự ổn định và hiệu suất.",
  },
  {
    id: "b20-05",
    q: "Việc hiểu biết về các phương thức tấn công từ chối dịch vụ (DoS) và quét lỗ hổng (Vulnerability scanning) thuộc về khối kiến thức nào?",
    options: [
      "Kiến thức về Bảo mật thông tin",
      "Kiến thức về Quản lí hệ thống",
      "Kiến thức về Mạng máy tính",
      "Kiến thức về Luật pháp quốc tế",
    ],
    answer: 0,
    explain:
      "Kiến thức về Bảo mật thông tin: Nắm được các phương thức tấn công như tấn công từ chối dịch vụ (DoS), tấn công dò lỗ hổng (Vulnerability scanning).",
  },
  {
    id: "b20-06",
    q: "Hệ thống phát hiện xâm nhập (viết tắt là IDS) được chuyên gia bảo mật triển khai nhằm mục đích gì?",
    options: [
      "Phát hiện kịp thời các hành vi truy cập trái phép hoặc các cuộc tấn công mạng nhắm vào hệ thống của tổ chức",
      "Tự động gửi email quảng cáo đến toàn bộ danh sách khách hàng mỗi khi phát hiện có thiết bị mới kết nối vào mạng",
      "Giúp nhân viên kĩ thuật điều khiển máy tính của khách hàng từ xa để cài đặt các phần mềm văn phòng cơ bản",
      "Quản lí và cấp phát địa chỉ IP động một cách tự động cho tất cả các thiết bị kết nối vào mạng cục bộ",
    ],
    answer: 0,
    explain:
      "IDS (Intrusion Detection System) là Hệ thống phát hiện xâm nhập, cùng với tường lửa, được dùng để phòng thủ, phát hiện và ngăn chặn xâm nhập mạng.",
  },
  {
    id: "b20-07",
    q: "Kiến thức về Mạng máy tính yêu cầu người làm nghề quản trị phải có khả năng cấu hình và quản lí các thiết bị nào?",
    options: [
      "Các thiết bị mạng như bộ định tuyến (router) và tường lửa (firewall)",
      "Các thiết bị phần mềm đồ hoạ ba chiều và máy in 3D công nghiệp",
      "Các thành phần vi mạch bán dẫn và bo mạch chủ trên điện thoại",
      "Các ứng dụng văn phòng cơ bản và hệ thống quản trị cơ sở dữ liệu",
    ],
    answer: 0,
    explain:
      "Kiến thức về mạng máy tính: nắm được cấu trúc, hoạt động mạng, phân tích lưu lượng, khả năng cấu hình quản lí thiết bị mạng như router và firewall.",
  },
  {
    id: "b20-08",
    q: "Người làm nghề quản trị cần nắm vững kiến thức về luật pháp và các quy định quốc tế nhằm mục đích gì?",
    options: [
      "Để tuân thủ đúng các tiêu chuẩn hiện hành về bảo mật, an ninh mạng và bảo vệ dữ liệu cá nhân của người dùng",
      "Để tìm cách lách luật khi khai thác dữ liệu từ các hệ thống máy chủ đặt tại nước ngoài mà không bị khởi kiện",
      "Để tự bào chữa trước toà án nếu công ty của họ vô tình phát tán mã độc gây thiệt hại cho các đối tác kinh doanh",
      "Để soạn thảo các hợp đồng mua bán linh kiện phần cứng với các nhà cung cấp nước ngoài một cách chặt chẽ nhất",
    ],
    answer: 0,
    explain:
      "Kiến thức về Luật pháp và tuân thủ quy định: hiểu biết, tuân thủ luật pháp, các quy định và tiêu chuẩn quốc tế hiện hành về bảo mật thông tin và an ninh mạng.",
  },
  {
    id: "b20-09",
    q: "Sự phát triển mạnh mẽ của công nghệ IoT (Internet of Things) mang lại thách thức gì cho lĩnh vực quản trị mạng?",
    options: [
      "Làm gia tăng mạnh mẽ số lượng thiết bị kết nối, từ đó kéo theo nhiều rủi ro bị tấn công tinh vi hơn bao giờ hết",
      "Làm giảm đi số lượng lớn các chuyên gia mạng vì các thiết bị IoT đều có khả năng tự động sửa lỗi và bảo mật",
      "Xoá bỏ hoàn toàn nhu cầu sử dụng mạng nội bộ do tất cả thiết bị IoT đều chỉ giao tiếp trực tiếp qua vệ tinh",
      "Buộc các lập trình viên phải viết lại toàn bộ mã nguồn của hệ điều hành Windows để tương thích với cảm biến",
    ],
    answer: 0,
    explain:
      "Sự phổ biến của IoT đã dẫn đến gia tăng số lượng thiết bị kết nối mạng. Nguy cơ tấn công ngày càng cao và tinh vi, tạo ra nhu cầu lớn về quản trị mạng.",
  },
  {
    id: "b20-10",
    q: "Xu hướng áp dụng trí tuệ nhân tạo (AI) vào quản trị và bảo trì hệ thống tạo ra yêu cầu gì cho các chuyên gia?",
    options: [
      "Đòi hỏi họ phải học hỏi, cập nhật kiến thức để biết tận dụng AI nhằm đảm bảo tính ổn định và sẵn sàng của hệ thống",
      "Yêu cầu họ phải loại bỏ hoàn toàn các phương pháp bảo mật truyền thống vì AI sẽ tự động xử lí mọi sự cố thay con người",
      "Bắt buộc họ phải tự mình viết ra một mô hình trí tuệ nhân tạo mới hoàn toàn để thay thế toàn bộ hệ thống tường lửa cũ",
      "Khiến cho họ không còn quyền kiểm soát hệ thống nữa, vì AI sẽ tước đoạt toàn bộ quyền quản trị tối cao của máy chủ",
    ],
    answer: 0,
    explain:
      "Việc áp dụng các công cụ hỗ trợ hiện đại như AI để đảm bảo tính ổn định của hệ thống là những đòi hỏi mới đối với các chuyên gia, buộc họ phải học hỏi và nắm bắt công cụ AI.",
  },
  {
    id: "b20-11",
    q: "Nhu cầu chuyên gia bảo mật hệ thống thông tin tăng cao đột biến KHÔNG xuất phát từ yếu tố nào sau đây?",
    options: [
      "Sự suy giảm nhanh chóng của các dịch vụ đám mây công cộng",
      "Nguy cơ tấn công mạng ngày càng phức tạp và vô cùng đa dạng",
      "Sự bùng nổ của kỉ nguyên chuyển đổi số và quá trình số hoá dữ liệu",
      "Yêu cầu bắt buộc về việc bảo vệ tính riêng tư của dữ liệu cá nhân",
    ],
    answer: 0,
    explain:
      "Các yếu tố làm tăng nhu cầu: nguy cơ tấn công phức tạp, chuyển đổi số gia tăng dữ liệu, chuyển sang dùng đám mây, bảo vệ dữ liệu cá nhân. Do đó \"suy giảm dịch vụ đám mây\" là yếu tố sai.",
  },
  {
    id: "b20-12",
    q: "Kĩ năng mềm nào được coi là cực kì cần thiết giúp người quản trị bắt kịp các xu hướng công nghệ mới nổi?",
    options: [
      "Kĩ năng tự nghiên cứu, học hỏi",
      "Kĩ năng lập trình cấp thấp",
      "Kĩ năng giao tiếp với máy tính",
      "Kĩ năng lắp ráp cơ khí chính xác",
    ],
    answer: 0,
    explain:
      "Đặc biệt, kĩ năng tự nghiên cứu, học hỏi, cập nhật kiến thức là rất cần thiết để giúp người làm nghề này bắt kịp các xu hướng mới, công nghệ mới.",
  },
  {
    id: "b20-13",
    q: "Ngành học nào dưới đây thuộc nhóm các ngành đào tạo liên quan đến nghề quản trị trong lĩnh vực Công nghệ thông tin?",
    options: [
      "Mạng máy tính và truyền thông dữ liệu",
      "Công nghệ kĩ thuật hoá học ứng dụng",
      "Thiết kế đồ hoạ và đa phương tiện",
      "Kế toán và kiểm toán doanh nghiệp",
    ],
    answer: 0,
    explain:
      "Các ngành học liên quan: Quản trị mạng máy tính, Quản trị hệ thống, An ninh mạng, Hệ thống thông tin, Mạng máy tính và truyền thông dữ liệu.",
  },
  {
    id: "b20-14",
    q: "Trong quá trình làm việc, một chuyên gia quản trị mạng phát hiện một cuộc tấn công DoS nhằm vào máy chủ của công ty. Hành động đầu tiên họ cần thực hiện là gì?",
    options: [
      "Sử dụng các công cụ bảo mật và cấu hình lại tường lửa để ngăn chặn hoặc giảm thiểu lưu lượng tấn công ảo",
      "Lập tức rút phích cắm điện của tất cả các máy chủ trong trung tâm dữ liệu để tránh bị kẻ gian đánh cắp thông tin",
      "Gửi email thông báo cho toàn bộ nhân viên công ty để họ tự khởi động lại máy tính cá nhân của mình",
      "Xoá toàn bộ cơ sở dữ liệu trên máy chủ để tin tặc không thể lấy được bất kì thông tin quan trọng nào",
    ],
    answer: 0,
    explain:
      "Chuyên gia quản trị/bảo mật có kiến thức về DoS, IDS, tường lửa sẽ cấu hình lại thiết bị bảo mật để xử lí sự cố mạng, bảo vệ hệ thống mà không cần thiết phải phá huỷ dữ liệu hay cúp điện cục bộ đột ngột.",
  },
  {
    id: "b20-15",
    q: "Mục đích tối thượng của mọi công việc thuộc nhóm nghề quản trị trong ngành Công nghệ thông tin là gì?",
    options: [
      "Đảm bảo hệ thống công nghệ thông tin của tổ chức và doanh nghiệp hoạt động một cách ổn định, hiệu quả và an toàn",
      "Tạo ra các phần mềm giải trí mới lạ để thu hút thêm người dùng Internet truy cập vào mạng xã hội của công ty",
      "Tối ưu hoá các linh kiện phần cứng để chúng có thể ép xung và hoạt động vượt qua giới hạn kĩ thuật của nhà sản xuất",
      "Kiểm duyệt toàn bộ nội dung mà nhân viên chia sẻ trên Internet để đảm bảo không ai tiết lộ bí mật đời tư",
    ],
    answer: 0,
    explain:
      "Theo phần tóm tắt SGK: Nhóm nghề quản trị trong ngành Công nghệ thông tin thực hiện những công việc nhằm đảm bảo hệ thống CNTT của các tổ chức và doanh nghiệp hoạt động một cách hiệu quả và an toàn.",
  },
];

export default questions;
