import type { Question } from "@/lib/types";

// Bài 22. Thực hành kết nối các thiết bị số (SGK trang 118-125)
const questions: Question[] = [
  {
    id: "b22-01",
    q: "Thiết bị hiển thị là gì?",
    options: [
      "Thiết bị điện tử hiển thị hình ảnh, văn bản hoặc thông tin trực quan trên màn hình cho người dùng",
      "Thiết bị chuyên dùng để lưu trữ dữ liệu với dung lượng lớn, không có khả năng hiển thị thông tin ra bên ngoài",
      "Thiết bị chỉ dùng để phát ra âm thanh, không có bất kì chức năng hiển thị hình ảnh hay văn bản nào",
      "Thiết bị chuyên dùng để sạc pin cho điện thoại và máy tính bảng khi kết nối qua cổng USB",
    ],
    answer: 0,
    explain:
      "SGK định nghĩa: thiết bị hiển thị là các thiết bị điện tử được sử dụng để hiển thị hình ảnh, văn bản hoặc thông tin trực quan trên màn hình cho người dùng quan sát, ví dụ ti vi, máy chiếu, bảng cảm ứng, bảng LED.",
  },
  {
    id: "b22-02",
    q: "Theo Hình 22.1, hai loại cổng kết nối phổ biến của các thiết bị hiển thị được SGK nêu tên là gì?",
    options: ["Cổng VGA và cổng HDMI", "Cổng USB và cổng Type-C", "Cổng Ethernet và cổng SIM", "Cổng Bluetooth và cổng NFC"],
    answer: 0,
    explain:
      "SGK nêu: phần lớn các thiết bị hiển thị có nhiều loại cổng kết nối như cổng VGA (Vector Graphic Arrays), cổng HDMI (High-Definition Multimedia Interface) và sử dụng cáp kết nối tương ứng.",
  },
  {
    id: "b22-03",
    q: "Bluetooth được SGK định nghĩa là gì?",
    options: [
      "Công nghệ kết nối không dây qua sóng vô tuyến điện, truyền dữ liệu giữa thiết bị số ở khoảng cách gần",
      "Một loại cáp tín hiệu vật lí dùng để nối trực tiếp máy tính với màn hình rời không qua sóng vô tuyến",
      "Một giao thức chỉ dùng riêng cho việc truy cập Internet tốc độ cao ở khoảng cách rất xa",
      "Một phần mềm diệt virus chuyên dụng cài đặt sẵn trên mọi thiết bị di động hiện nay",
    ],
    answer: 0,
    explain:
      "SGK định nghĩa: Bluetooth là một công nghệ kết nối không dây qua sóng vô tuyến điện, được sử dụng để truyền tải dữ liệu giữa các thiết bị số, bao gồm cả âm thanh và hình ảnh, trong phạm vi gần.",
  },
  {
    id: "b22-04",
    q: "Nhà thông minh (Smart Home) được SGK định nghĩa là gì?",
    options: [
      "Nhà trang bị thiết bị và hệ thống công nghệ thông minh, tăng tiện ích, hiệu suất, bảo mật, khả năng quản lí",
      "Nhà có diện tích rất lớn, được xây dựng bằng vật liệu công nghệ cao và trang trí nội thất hiện đại nhất",
      "Nhà chỉ sử dụng năng lượng mặt trời, hoàn toàn không kết nối với bất kì thiết bị điện tử nào khác",
      "Nhà có hệ thống an ninh camera nhưng không có khả năng kết nối Internet hay điều khiển từ xa",
    ],
    answer: 0,
    explain:
      "SGK định nghĩa: Nhà thông minh (Smart Home) là loại nhà được trang bị các thiết bị và hệ thống công nghệ thông minh để tăng cường tiện ích, hiệu suất, bảo mật và khả năng quản lí.",
  },
  {
    id: "b22-05",
    q: "Theo SGK, hệ thống điều khiển nhà thông minh phổ biến nhất giao tiếp với người dùng qua đâu?",
    options: [
      "Giao diện của các ứng dụng trên điện thoại thông minh hay máy tính bảng",
      "Duy nhất một bảng cảm ứng gắn cố định ngay tại cửa ra vào của ngôi nhà",
      "Chỉ thông qua cuộc gọi điện thoại trực tiếp tới tổng đài chăm sóc khách hàng",
      "Một bàn phím vật lí kết nối dây với bộ điều khiển trung tâm đặt trong nhà",
    ],
    answer: 0,
    explain:
      "SGK nêu: hệ thống điều khiển nhà thông minh có thể giao tiếp qua bảng cảm ứng hoặc ứng dụng web, nhưng phổ biến hơn cả là qua giao diện của các ứng dụng trên điện thoại thông minh hay máy tính bảng.",
  },
  {
    id: "b22-06",
    q: "Lần đầu tiên thiết lập kết nối một thiết bị thông minh (như ổ điện thông minh) với điện thoại, việc kết nối được thực hiện bằng cách nào, theo hướng dẫn của SGK?",
    options: [
      "Dùng điện thoại đã cài phần mềm điều khiển để kết nối gần qua bluetooth/Wi-Fi, không dùng Internet",
      "Kết nối trực tiếp thiết bị thông minh với Internet bằng cách cắm dây mạng vào ngay cổng LAN của thiết bị",
      "Gọi điện cho nhà sản xuất để họ kết nối từ xa qua Internet ngay từ lần sử dụng đầu tiên",
      "Không cần thực hiện bước kết nối nào, thiết bị sẽ tự động kết nối Internet ngay khi vừa cắm điện",
    ],
    answer: 0,
    explain:
      "SGK nêu: ngay sau khi lắp đặt thiết bị, cần sử dụng điện thoại đã cài phần mềm điều khiển nhà thông minh để kết nối với thiết bị mà không dùng Internet — thực hiện một kết nối gần qua bluetooth hay sóng Wi-Fi.",
  },
  {
    id: "b22-07",
    q: "Sau khi thiết lập kết nối lần đầu, phần mềm điều khiển nhà thông minh sẽ đăng kí thiết bị vào đâu?",
    options: [
      "Cơ sở dữ liệu trên đám mây (Cloud) của nhà cung cấp dịch vụ nhà thông minh",
      "Bộ nhớ trong (ROM) của chính chiếc điện thoại đang thực hiện việc kết nối",
      "Một tệp văn bản được lưu cục bộ ngay trên máy tính để bàn của người dùng",
      "Danh bạ liên hệ của điện thoại, dưới dạng một số điện thoại ảo đại diện cho thiết bị",
    ],
    answer: 0,
    explain:
      "SGK nêu: cùng với việc kết nối, phần mềm sẽ tiến hành đăng kí thiết bị của nhà thông minh vào cơ sở dữ liệu trên đám mây (Cloud) của nhà cung cấp dịch vụ nhà thông minh.",
  },
  {
    id: "b22-08",
    q: "Trong Nhiệm vụ 1 (Kết nối máy tính với thiết bị hiển thị), tổ hợp phím nào được dùng để mở giao diện thiết lập chế độ hiển thị màn hình mở rộng?",
    options: ["Windows + P", "Ctrl + Alt + Delete", "Windows + Tab", "Alt + F4"],
    answer: 0,
    explain:
      "SGK hướng dẫn: hãy nhấn tổ hợp phím Windows + P để làm xuất hiện giao diện thiết lập chế độ hiển thị màn hình mở rộng (Hình 22.3).",
  },
  {
    id: "b22-09",
    q: "Chế độ \"Extend\" (Mở rộng) trong giao diện thiết lập hiển thị màn hình mở rộng có đặc điểm gì?",
    options: [
      "Màn hình mở rộng là phần tiếp nối của màn hình máy tính, kéo cửa sổ qua lại được giữa hai màn hình",
      "Màn hình mở rộng hiển thị y hệt màn hình máy tính, hai màn hình luôn giống nhau về nội dung",
      "Màn hình máy tính bị tắt hoàn toàn, chỉ còn duy nhất màn hình mở rộng hoạt động",
      "Cả hai màn hình đều bị tắt, máy tính chuyển sang chế độ tiết kiệm năng lượng",
    ],
    answer: 0,
    explain:
      "SGK mô tả chế độ Extend (Mở rộng): màn hình ti vi hay máy chiếu sẽ là phần mở rộng của màn hình máy tính, các cửa sổ ứng dụng có thể được kéo thả qua lại giữa màn hình máy tính và màn hình mở rộng.",
  },
  {
    id: "b22-10",
    q: "Chế độ \"Duplicate\" (Sao chép) trong giao diện thiết lập hiển thị màn hình mở rộng có đặc điểm gì?",
    options: [
      "Màn hình mở rộng là bản sao màn hình máy tính, hiển thị đồng thời ở cả hai màn hình",
      "Chỉ màn hình máy tính hoạt động, màn hình mở rộng bị tắt hoàn toàn không hiển thị gì",
      "Chỉ màn hình mở rộng hoạt động, màn hình máy tính bị tắt hoàn toàn không hiển thị gì",
      "Hai màn hình hiển thị hai nội dung độc lập, không liên quan gì tới nhau",
    ],
    answer: 0,
    explain:
      "SGK mô tả chế độ Duplicate (Sao chép): màn hình mở rộng sẽ trở thành bản sao của màn hình máy tính, hình ảnh được hiển thị đồng thời ở cả hai màn hình.",
  },
  {
    id: "b22-11",
    q: "Theo SGK, vì sao máy tính để bàn (PC) thường cần cắm thêm bảng mạch mở rộng mới kết nối được bluetooth, trong khi máy tính xách tay thì không cần?",
    options: [
      "Vì laptop thường có sẵn khả năng bluetooth, còn máy để bàn thường không có sẵn khả năng này",
      "Vì máy tính để bàn không được phép sử dụng bluetooth theo quy định của nhà sản xuất linh kiện",
      "Vì bluetooth chỉ hoạt động được với thiết bị có pin, mà máy tính để bàn luôn cắm điện trực tiếp",
      "Vì bluetooth trên máy tính xách tay hoạt động theo cơ chế hoàn toàn khác so với máy tính để bàn",
    ],
    answer: 0,
    explain:
      "SGK nêu: máy tính xách tay thường có sẵn khả năng kết nối bluetooth, còn máy tính để bàn thường không có khả năng này, nếu muốn sử dụng thì phải cắm thêm bảng mạch mở rộng có chức năng đó.",
  },
  {
    id: "b22-12",
    q: "Trong Nhiệm vụ 2 (Kết nối máy tính với điện thoại qua bluetooth), để bắt đầu tìm và ghép đôi thiết bị mới trên Windows, cần thực hiện dãy truy cập nào?",
    options: [
      "Show Bluetooth Devices → Add a Device", "Task Manager → End Task", "Control Panel → Uninstall a Program", "File Explorer → This PC",
    ],
    answer: 0,
    explain:
      "SGK hướng dẫn: từ máy tính, thực hiện dãy truy cập Show Bluetooth Devices → Add a Device để máy tính quét tìm các thiết bị bluetooth mới, chưa ghép đôi ở xung quanh.",
  },
  {
    id: "b22-13",
    q: "Trong Nhiệm vụ 2, khi máy tính gửi mã ngẫu nhiên sang điện thoại để ghép đôi bluetooth, phía điện thoại cần làm gì để chấp nhận kết nối?",
    options: [
      "Chọn Ghép đôi trong hộp thoại Yêu cầu kết nối Bluetooth hiện trên điện thoại",
      "Tắt hoàn toàn nguồn điện thoại rồi bật lại để mã ghép đôi tự động được xác nhận",
      "Xoá toàn bộ danh sách thiết bị bluetooth đã từng kết nối trước đó trên điện thoại",
      "Gửi lại một mã khác từ điện thoại sang máy tính để hai bên trao đổi mã qua lại",
    ],
    answer: 0,
    explain:
      "SGK mô tả (Hình 22.5): phía điện thoại cần chấp nhận yêu cầu kết nối bằng cách chọn Ghép đôi trong hộp thoại hiện ra, sau khi máy tính đã gửi mã ngẫu nhiên (ví dụ 649568) sang bằng lệnh Connect.",
  },
  {
    id: "b22-14",
    q: "Trong ví dụ Nhiệm vụ 3, lịch hẹn giờ cho công tắc đèn bảo vệ được thiết lập như thế nào?",
    options: [
      "Bật đèn lúc 18 giờ 30 các ngày thứ Hai-Sáu; tắt đèn lúc 5 giờ sáng các ngày thứ Ba-Bảy",
      "Bật đèn lúc 6 giờ sáng và tắt đèn lúc 18 giờ, áp dụng giống nhau cho tất cả các ngày trong tuần",
      "Đèn chỉ bật vào hai ngày cuối tuần là thứ Bảy và Chủ nhật, các ngày còn lại tắt hoàn toàn",
      "Đèn được bật liên tục 24/24 giờ suốt cả tuần, không có lịch tắt tự động nào cả",
    ],
    answer: 0,
    explain:
      "SGK nêu ví dụ: đặt lịch hoạt động cho công tắc đèn bảo vệ — bật đèn vào lúc 18 giờ 30 phút các ngày từ thứ Hai đến thứ Sáu; tắt đèn vào lúc 5 giờ sáng các ngày từ thứ Ba đến thứ Bảy.",
  },
  {
    id: "b22-15",
    q: "Theo gợi ý ở Nhiệm vụ 4, kính thực tế ảo (VR) có thể được chia thành mấy loại theo cách hoạt động?",
    options: [
      "3 loại: kính VR hoạt động độc lập, dùng với máy tính (PCVR), và hoạt động với PS5",
      "2 loại duy nhất: kính VR có dây và kính VR không dây, không phân biệt theo thiết bị đi kèm",
      "4 loại, phân biệt theo bốn hãng sản xuất lớn nhất hiện nay trên thị trường công nghệ",
      "Chỉ có 1 loại kính VR duy nhất, hoạt động giống nhau ở mọi hãng sản xuất khác nhau",
    ],
    answer: 0,
    explain:
      "SGK gợi ý (Bước 2, Nhiệm vụ 4): có bao nhiêu loại kính thực tế ảo — gợi ý gồm kính VR hoạt động độc lập, kính thực tế ảo sử dụng với máy tính PCVR, và kính thực tế ảo hoạt động với PS5.",
  },
];

export default questions;
