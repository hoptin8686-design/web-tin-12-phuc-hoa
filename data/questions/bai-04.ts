import type { Question } from "@/lib/types";

// Bài 4. Giao thức mạng (SGK trang 21-25)
// 1. Giao thức mạng: ví dụ thư điện tử (SMTP, POP3, IMAP), giao thức Ethernet
//    với bốn nhóm quy định (địa chỉ MAC, mã kiểm tra, khung truyền, xung đột).
// 2. Giao thức TCP/IP: địa chỉ IP và định tuyến (bảng định tuyến, cổng mặc định,
//    định tuyến tĩnh - động); giao thức TCP (cổng ứng dụng, chia gói, xác nhận).
const questions: Question[] = [
  {
    id: "b4-01",
    q: "Giao thức mạng (network protocol) là gì?",
    options: [
      "Tập hợp các quy định về cách thức giao tiếp để truyền dữ liệu qua mạng",
      "Tập hợp các thiết bị dùng để kết nối các máy tính lại thành mạng",
      "Tập hợp các phần mềm cài trên máy chủ để quản lí toàn bộ mạng",
      "Tập hợp các đường cáp và sóng vô tuyến dùng để truyền dữ liệu",
    ],
    answer: 0,
    explain:
      "Giao thức mạng, còn gọi là giao thức truyền thông, là tập hợp các quy định cách thức giao tiếp giữa các đối tượng tham gia truyền nhận dữ liệu qua mạng. Các quy định này liên quan tới định dạng, ý nghĩa và cách xử lí dữ liệu — không phải là thiết bị hay đường truyền.",
  },
  {
    id: "b4-02",
    q: "Giao thức nào quy định cách gửi thư điện tử đi?",
    options: [
      "SMTP — Simple Mail Transfer Protocol, dùng khi gửi thư đi",
      "POP3 — Post Office Protocol phiên bản 3, dùng khi lấy thư về",
      "IMAP — Internet Message Access Protocol, dùng khi lấy thư về",
      "DNS — Domain Name System, dùng tên miền thay cho địa chỉ IP",
    ],
    answer: 0,
    explain:
      "Các quy định liên quan đến gửi thư có tên là giao thức SMTP. Còn các quy định về cách người nhận lấy thư là POP3 hoặc IMAP — đúng, nhưng ở chiều ngược lại. DNS thì không liên quan tới thư điện tử.",
  },
  {
    id: "b4-03",
    q: "Trong giao thức Ethernet, quy định về mã kiểm tra có tác dụng gì?",
    options: [
      "Giúp máy nhận phát hiện lỗi truyền để yêu cầu gửi lại dữ liệu",
      "Giúp mã hoá nội dung dữ liệu để người ngoài không đọc trộm được",
      "Giúp nén dữ liệu lại cho nhỏ hơn trước khi đưa lên đường truyền",
      "Giúp xác định địa chỉ của máy nhận trong cùng mạng cục bộ đó",
    ],
    answer: 0,
    explain:
      "Dữ liệu chuyển đi có kèm theo một mã kiểm tra; máy nhận dùng mã này để phát hiện lỗi truyền, nếu có lỗi thì yêu cầu gửi lại dữ liệu. Việc xác định máy nhận là nhiệm vụ của quy định về địa chỉ (địa chỉ MAC), một nhóm quy định khác của Ethernet.",
  },
  {
    id: "b4-04",
    q: "Vì sao dữ liệu phải được truyền theo từng gói có độ dài xác định?",
    options: [
      "Vì truyền tin quá dài sẽ làm quá tải máy nhận và cản trở cuộc truyền khác",
      "Vì mỗi gói dữ liệu cần mang một địa chỉ MAC riêng của máy đã gửi",
      "Vì đường truyền vật lí chỉ cho phép truyền tối đa bốn byte một lần",
      "Vì máy nhận chỉ đọc được dữ liệu sau khi đã nhận đủ toàn bộ tệp",
    ],
    answer: 0,
    explain:
      "Đây là quy định khung truyền dữ liệu: giữa hai máy tính không thể truyền một lượng tin dài không giới hạn trong khoảng thời gian không định trước, vì có thể làm quá tải máy nhận và cản trở các cuộc truyền khác.",
  },
  {
    id: "b4-05",
    q: "Địa chỉ MAC có đặc điểm gì?",
    options: [
      "Là địa chỉ 6 byte gắn với phần cứng, không thay đổi được",
      "Là địa chỉ 4 byte được gán cho thiết bị, có thể gán lại",
      "Là địa chỉ dạng chữ do người dùng tự đặt cho máy của mình",
      "Là địa chỉ do nhà cung cấp dịch vụ Internet cấp phát hằng tháng",
    ],
    answer: 0,
    explain:
      "MAC (Media Access Control Address) là địa chỉ 6 byte đi theo phần cứng, không thay đổi được. Phương án thứ hai chính là mô tả của địa chỉ IP — 4 byte, được gán cho thiết bị và có thể thay đổi nếu gán lại.",
  },
  {
    id: "b4-06",
    q: "Địa chỉ IPv4 được biểu diễn như thế nào?",
    options: [
      "Là một số 4 byte, viết theo kiểu dot decimal ngăn bằng dấu chấm",
      "Là một số 6 byte, viết hệ thập lục phân ngăn bằng dấu hai chấm",
      "Là một dãy chữ cái người dùng tự đặt, ví dụ tên miền moet.edu.vn",
      "Là một số 2 byte, viết trong hệ nhị phân gồm mười sáu chữ số 0 và 1",
    ],
    answer: 0,
    explain:
      "Mỗi địa chỉ IP là một số 4 byte. Người ta viết theo kiểu \"dot decimal\": giá trị mỗi byte viết trong hệ thập phân và phân tách nhau bởi các dấu chấm, ví dụ 10.25.0.255 hay 192.168.1.3.",
  },
  {
    id: "b4-07",
    q: "Địa chỉ IP dưới đây viết ở dạng thập phân là địa chỉ nào?",
    code: "11000000 10101000 00001101 11010010",
    options: ["192.168.13.210", "192.168.13.208", "192.128.13.210", "168.192.13.210"],
    answer: 0,
    explain:
      "Đổi từng byte sang hệ thập phân: 11000000 = 128+64 = 192; 10101000 = 128+32+8 = 168; 00001101 = 8+4+1 = 13; 11010010 = 128+64+16+2 = 210. Ghép lại và ngăn bằng dấu chấm được 192.168.13.210.",
  },
  {
    id: "b4-08",
    q: "Khi truyền dữ liệu giữa hai máy trong cùng một mạng cục bộ thì căn cứ vào địa chỉ nào?",
    options: [
      "Địa chỉ MAC — máy chỉ nhận gói có địa chỉ trùng MAC của mình",
      "Địa chỉ IP — máy chỉ nhận gói có địa chỉ IP trùng của mình",
      "Tên miền do người dùng đặt cho từng máy tính trong mạng đó",
      "Số hiệu cổng ứng dụng mà phần mềm đang mở trên máy tính đó",
    ],
    answer: 0,
    explain:
      "Chuyển dữ liệu giữa hai máy trong cùng một mạng cục bộ thì chỉ cần địa chỉ MAC; máy tính chỉ nhận các gói dữ liệu có địa chỉ nhận trùng với địa chỉ MAC của mình. Địa chỉ IP chỉ cần đến khi hai máy nằm ở hai LAN khác nhau.",
  },
  {
    id: "b4-09",
    q: "Bảng định tuyến của một router chứa thông tin gì?",
    options: [
      "Nhóm địa chỉ IP nào thì gửi theo cổng nào của router đó",
      "Danh sách địa chỉ MAC của mọi máy tính trong toàn mạng",
      "Mật khẩu truy cập của những người được phép vào mạng",
      "Tốc độ truyền tối đa mà mỗi cổng của router hỗ trợ được",
    ],
    answer: 0,
    explain:
      "Theo phương pháp định tuyến tĩnh, mỗi router có một bảng định tuyến hướng dẫn nhóm địa chỉ nào sẽ gửi theo cổng nào. Sách ví router như bưu cục chuyển tiếp bưu phẩm, còn bảng định tuyến tương ứng với bảng đường đi của các xe chuyển bưu phẩm.",
  },
  {
    id: "b4-10",
    q: "Theo bảng định tuyến dưới đây (dấu * hiểu là bất cứ giá trị nào), gói dữ liệu gửi tới địa chỉ 200.5.6.7 sẽ đi qua cổng nào?",
    code: "Địa chỉ        Cổng   Ghi chú\n126.13.*.*      1     Mỹ, cổng mặc định\n172.18.*.*      2     Hồng Kông\n113.23.12.*     3     Singapore\n230.17.*.*      4     Thái Lan",
    options: [
      "Cổng 1, vì địa chỉ không có trong bảng nên dùng cổng mặc định",
      "Cổng 4, vì đó là cổng cuối cùng còn trống trong bảng định tuyến",
      "Không cổng nào, router sẽ huỷ gói dữ liệu đó và báo lỗi về",
      "Cổng 3, vì cổng 3 có địa chỉ chi tiết nhất trong cả bảng đó",
    ],
    answer: 0,
    explain:
      "Địa chỉ 200.5.6.7 không khớp dòng nào trong bảng. Các router bao giờ cũng có một cổng mặc định — nếu địa chỉ đến không có trong bảng hướng dẫn thì gói dữ liệu được gửi theo cổng mặc định, ở đây là cổng 1. (Nếu gửi tới 113.23.12.45 thì khớp dòng thứ ba nên đi cổng 3.)",
  },
  {
    id: "b4-11",
    q: "Định tuyến động khác định tuyến tĩnh ở điểm nào?",
    options: [
      "Cho phép thay đổi cổng gửi đi tuỳ theo điều kiện cụ thể lúc đó",
      "Chỉ dùng đúng một cổng cố định đã ghi sẵn trong bảng định tuyến",
      "Không cần dùng địa chỉ IP mà chỉ dựa vào địa chỉ MAC của máy",
      "Tự động tăng tốc độ đường truyền khi có nhiều dữ liệu đi qua",
    ],
    answer: 0,
    explain:
      "Sách ví: bưu phẩm từ Hà Nội về Thái Bình bình thường chuyển qua Nam Định, nhưng nếu xe đi Nam Định đã quá tải mà có xe đi Hưng Yên thì đổi hành trình qua Hưng Yên rồi chuyển tiếp tới Thái Bình. Phương án thứ hai là mô tả của định tuyến tĩnh.",
  },
  {
    id: "b4-12",
    q: "Giao thức IP có hai nội dung chính nào?",
    options: [
      "Cách đánh địa chỉ và định tuyến để dẫn dữ liệu tới LAN máy nhận",
      "Cách chia gói dữ liệu và cách đánh số thứ tự cho từng gói tin",
      "Cách mã hoá trang web và cách đặt tên miền thay cho địa chỉ",
      "Cách kiểm tra lỗi truyền và cách yêu cầu gửi lại gói bị hỏng",
    ],
    answer: 0,
    explain:
      "Lập địa chỉ và định tuyến theo địa chỉ là các quy tắc bảo đảm liên kết các LAN trong phạm vi toàn cầu, làm thành giao thức liên mạng IP. Chia gói và đánh số gói là nội dung của TCP; mã hoá trang web là HTTP; đặt tên miền là DNS.",
  },
  {
    id: "b4-13",
    q: "Vì sao bên cạnh giao thức IP còn cần thêm giao thức TCP?",
    options: [
      "Vì IP không đảm bảo dữ liệu tới đúng một ứng dụng trên máy nhận",
      "Vì IP không đảm bảo dữ liệu đi được từ mạng này sang mạng kia",
      "Vì IP không có khả năng đánh địa chỉ cho các thiết bị trong mạng",
      "Vì IP chỉ hoạt động trong mạng cục bộ chứ không ra được Internet",
    ],
    answer: 0,
    explain:
      "Một máy tính có thể chạy đồng thời nhiều phần mềm với nhiều nhóm dữ liệu khác nhau. Giao thức IP chỉ đảm bảo chuyển dữ liệu từ mạng này đến mạng kia, không đảm bảo chuyển tới một ứng dụng cụ thể trên một máy cụ thể — đó là việc của TCP.",
  },
  {
    id: "b4-14",
    q: "Giao thức TCP dùng cách nào để dữ liệu không bị lẫn giữa các ứng dụng?",
    options: [
      "Gán nhãn cổng ứng dụng cho từng gói dữ liệu được chuyển đi",
      "Gán địa chỉ MAC của máy nhận vào từng gói dữ liệu chuyển đi",
      "Mã hoá nội dung từng gói bằng một mật khẩu riêng cho ứng dụng",
      "Gửi các gói của mỗi ứng dụng qua một sợi cáp mạng riêng biệt",
    ],
    answer: 0,
    explain:
      "Mỗi ứng dụng được cấp phát một số hiệu gọi là cổng ứng dụng; các gói dữ liệu chuyển đi được gán nhãn cổng ứng dụng để không lẫn giữa các ứng dụng. Nhờ đó tệp đang sao chép và cuộc trò chuyện chat không bị trộn vào nhau.",
  },
  {
    id: "b4-15",
    q: "Vì sao giao thức TCP phải đánh số các gói dữ liệu theo từng ứng dụng?",
    options: [
      "Vì các gói đi theo đường khác nhau nên gói gửi sau có thể đến trước",
      "Vì mỗi gói dữ liệu phải có một địa chỉ IP riêng để router dẫn đường",
      "Vì máy nhận cần biết tổng dung lượng của tệp trước khi tải xuống",
      "Vì các gói phải được sắp xếp theo thứ tự bảng chữ cái khi truyền",
    ],
    answer: 0,
    explain:
      "Các gói có thể lưu ở các router với thời gian khác nhau và đi theo đường khác nhau nên gói gửi sau lại đến trước. TCP đánh số các gói theo từng ứng dụng để nơi nhận ráp lại đúng thứ tự. TCP còn quy định cơ chế xác nhận để yêu cầu gửi lại khi gói sai sót hay thất lạc.",
  },
  {
    id: "b4-16",
    q: "Giao thức DNS (Domain Name System) có tác dụng gì?",
    options: [
      "Cho phép dùng tên bằng chữ thay cho địa chỉ IP vốn khó nhớ",
      "Cho phép mã hoá cách biểu diễn nội dung của các trang web",
      "Cho phép chia dữ liệu thành gói và đánh số thứ tự các gói",
      "Cho phép kiểm tra một máy tính có kết nối được hay không",
    ],
    answer: 0,
    explain:
      "DNS cho phép dùng hệ thống tên bằng chữ thay thế cho địa chỉ IP vốn khó nhớ — ví dụ dùng moet.edu.vn thay cho địa chỉ máy chủ của Bộ Giáo dục và Đào tạo. Mã hoá trang web là việc của HTTP, còn chia gói và đánh số là việc của TCP.",
  },
];

export default questions;
