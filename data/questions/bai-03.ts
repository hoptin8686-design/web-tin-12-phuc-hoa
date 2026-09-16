import type { Question } from "@/lib/types";

// Bài 3. Một số thiết bị mạng thông dụng (SGK trang 14-20)
// 1. Thiết bị mạng thông dụng: hub và switch, Wireless Access Point, router, modem.
// 2. Thực hành kết nối máy tính với các thiết bị mạng: cáp UTP - cổng RJ45,
//    kết nối vật lí và kết nối logic, kết nối Wi-Fi.
const questions: Question[] = [
  {
    id: "b3-01",
    q: "Khi một máy tính gửi dữ liệu qua một cổng của hub thì điều gì xảy ra?",
    options: [
      "Tín hiệu được phát tán tới tất cả các cổng còn lại của thiết bị",
      "Tín hiệu chỉ được gửi tới đúng cổng của máy nhận dữ liệu đó",
      "Tín hiệu được lưu lại trong bộ nhớ của hub rồi mới gửi tiếp đi",
      "Tín hiệu được chuyển đổi sang dạng tương tự trước khi truyền đi",
    ],
    answer: 0,
    explain:
      "Hub gửi tín hiệu đến tất cả các cổng còn lại, máy nào cũng nhận được dù không phải máy nhận. Việc chỉ gửi tới đúng cổng máy nhận là cách làm của switch, còn chuyển đổi tín hiệu là việc của modem.",
  },
  {
    id: "b3-02",
    q: "Switch khác hub ở cách thức hoạt động như thế nào?",
    options: [
      "Switch xác định cổng gửi – nhận rồi lập kênh truyền tạm giữa hai cổng",
      "Switch phát tán tín hiệu ra tất cả các cổng nên tốc độ nhanh hơn hub",
      "Switch chuyển đổi tín hiệu số sang tương tự trước khi truyền dữ liệu",
      "Switch chọn đường đi cho dữ liệu giữa các LAN khác nhau trên Internet",
    ],
    answer: 0,
    explain:
      "Switch xác định cổng kết nối giữa thiết bị gửi và thiết bị nhận, thiết lập tạm thời kênh truyền giữa hai cổng đó rồi huỷ kết nối sau khi truyền xong. Nhìn bên ngoài hub và switch rất khó phân biệt — điểm khác nằm ở cách hoạt động.",
  },
  {
    id: "b3-03",
    q: "Xung đột (collision) tín hiệu trong mạng cục bộ là hiện tượng gì?",
    options: [
      "Nhiều máy cùng gửi dữ liệu lên đường truyền chung làm hỏng tín hiệu",
      "Hai máy tính trong cùng mạng bị đặt trùng nhau một địa chỉ mạng",
      "Cáp mạng bị đứt ngầm khiến dữ liệu không tới được máy nhận nữa",
      "Nhiều người cùng mở một tệp trên máy chủ nên tệp đó bị khoá lại",
    ],
    answer: 0,
    explain:
      "Khi nhiều máy đồng thời gửi dữ liệu lên đường truyền chung, tín hiệu bị hỏng khiến các máy không nhận biết được dữ liệu, phải truyền lại nên giảm hiệu quả của mạng. Sách ví hiện tượng này như một buổi gặp gỡ mà nhiều người nói cùng lúc.",
  },
  {
    id: "b3-04",
    q: "Vì sao với mạng gia đình có ít thiết bị đầu cuối thì có thể dùng hub?",
    options: [
      "Vì hub có chi phí rẻ hơn rất nhiều so với switch có cùng số cổng",
      "Vì hub truyền dữ liệu nhanh hơn switch khi mạng có ít máy tính",
      "Vì hub không gây ra xung đột tín hiệu như switch trong mạng nhỏ",
      "Vì hub kết nối được cả thiết bị có dây lẫn thiết bị không dây",
    ],
    answer: 0,
    explain:
      "Mạng ít máy thì nguy cơ xung đột thấp, mà hub lại rẻ hơn nhiều so với switch cùng số cổng nên dùng hub là hợp lí. Hub vẫn là thiết bị dễ gây xung đột hơn switch, và nó chỉ kết nối bằng cáp mạng chứ không kết nối không dây.",
  },
  {
    id: "b3-05",
    q: "Một LAN có từ vài chục đến hàng trăm máy tính thì nên thiết kế thế nào?",
    options: [
      "Dùng switch, có thể nhiều switch nhiều tầng, kết hợp hub ở tầng cuối",
      "Dùng hub cho toàn bộ mạng để tiết kiệm chi phí đầu tư ban đầu",
      "Dùng modem thay cho switch để tăng tốc độ truyền trong mạng đó",
      "Dùng router nối trực tiếp từng máy tính để tránh xung đột tín hiệu",
    ],
    answer: 0,
    explain:
      "Với LAN lớn nên dùng switch, thậm chí nhiều switch kết nối thành nhiều tầng, kết hợp với hub ở tầng cuối cùng. Dùng toàn hub sẽ gây xung đột nặng; modem và router có chức năng hoàn toàn khác, không thay thế switch được.",
  },
  {
    id: "b3-06",
    q: "Wi-Fi thực chất là gì?",
    options: [
      "Một bộ tiêu chuẩn kĩ thuật truyền dữ liệu bằng sóng vô tuyến điện",
      "Một thiết bị kết nối không dây dùng trong các mạng máy tính cục bộ",
      "Một loại cáp mạng đặc biệt truyền dữ liệu bằng tín hiệu ánh sáng",
      "Một phần mềm quản lí việc truy cập Internet của các máy trong LAN",
    ],
    answer: 0,
    explain:
      "Đây là chỗ dễ nhầm nhất của bài. Người ta thường hiểu Wi-Fi (viết tắt của Wireless Fidelity) là thiết bị kết nối không dây, nhưng thực ra Wi-Fi là một bộ tiêu chuẩn kĩ thuật truyền dữ liệu bằng sóng vô tuyến điện, được dùng rộng rãi trong các mạng cục bộ.",
  },
  {
    id: "b3-07",
    q: "Điểm truy cập không dây (Wireless Access Point – WAP) dùng để làm gì?",
    options: [
      "Kết nối thiết bị đầu cuối qua sóng Wi-Fi, mở rộng phạm vi của LAN",
      "Dẫn đường cho dữ liệu khi kết nối trên mạng diện rộng như Internet",
      "Chuyển đổi tín hiệu số sang tín hiệu tương tự và ngược lại khi cần",
      "Nối các máy tính trong cùng một LAN bằng cáp mạng có giắc RJ45",
    ],
    answer: 0,
    explain:
      "Dùng một bộ thu phát Wi-Fi là cách đơn giản nhất để thiết lập LAN — không phải mua sắm, lắp đặt hub, switch hay cáp mạng. Nối thêm WAP vào một LAN có sẵn thì mở rộng được phạm vi địa lí của LAN đó. Dẫn đường là việc của router, chuyển đổi tín hiệu là việc của modem.",
  },
  {
    id: "b3-08",
    q: "Router dùng để làm gì?",
    options: [
      "Dẫn đường cho dữ liệu khi kết nối trên mạng diện rộng như Internet",
      "Kết nối các máy tính trong cùng một LAN bằng cáp mạng giắc RJ45",
      "Chuyển đổi tín hiệu số sang tín hiệu tương tự và ngược lại khi cần",
      "Phát tán tín hiệu tới tất cả các cổng để mọi máy đều nhận được",
    ],
    answer: 0,
    explain:
      "Muốn kết nối hai máy tính ở hai LAN cách nhau hàng nghìn kilômét thì không thể dùng cáp mạng nối qua hub hay switch; mạng viễn thông dùng các bộ định tuyến (router) để chuyển tiếp dữ liệu giữa các LAN với nhau.",
  },
  {
    id: "b3-09",
    q: "Cổng LAN và cổng WAN trên một router khác nhau như thế nào?",
    options: [
      "Cổng LAN nối trực tiếp vào LAN, cổng WAN nối với các router khác",
      "Cổng LAN nối với các router khác, cổng WAN nối trực tiếp vào LAN",
      "Cổng LAN dùng cáp mạng, còn cổng WAN chỉ dùng sóng Wi-Fi để nối",
      "Cổng LAN truyền tín hiệu số, còn cổng WAN truyền tín hiệu tương tự",
    ],
    answer: 0,
    explain:
      "Dữ liệu từ một máy trong LAN muốn ra Internet phải chuyển đến router qua cổng LAN, rồi ra ngoài qua cổng WAN. Router Wi-Fi gia đình trong Hình 3.5 có 1 cổng WAN và 4 cổng LAN — thường được phân biệt bằng màu cổng.",
  },
  {
    id: "b3-10",
    q: "Thuật ngữ định tuyến (routing) hàm ý điều gì?",
    options: [
      "Router chọn một cổng thích hợp để gửi dữ liệu tới được LAN máy nhận",
      "Router chuyển đổi tín hiệu số thành tín hiệu tương tự trước khi gửi",
      "Router phát tán dữ liệu ra mọi cổng để bảo đảm máy nhận nhận được",
      "Router nén dữ liệu lại cho nhỏ hơn trước khi gửi ra ngoài Internet",
    ],
    answer: 0,
    explain:
      "Định tuyến còn gọi là chọn đường: khi router có nhiều cổng WAN, nó phải chọn cổng thích hợp để dữ liệu đi tới đích. Dữ liệu có thể phải trung chuyển qua nhiều router; tới router cuối cùng thì được chuyển qua cổng LAN để tới máy nhận.",
  },
  {
    id: "b3-11",
    q: "Vì sao router của mạng gia đình thường không cần phải định tuyến?",
    options: [
      "Vì nó chỉ có một cổng WAN nối đến nhà cung cấp dịch vụ Internet",
      "Vì nó có nhiều cổng WAN nên tự động chọn được cổng nhanh nhất",
      "Vì nó đã tích hợp sẵn bộ thu phát Wi-Fi nên không cần chọn đường",
      "Vì mạng gia đình có ít máy tính nên dữ liệu không cần đi ra ngoài",
    ],
    answer: 0,
    explain:
      "Chỉ router của nhà cung cấp dịch vụ Internet hay của các tổ chức lớn mới có nhiều cổng WAN để phải chọn. Router gia đình chỉ có một cổng WAN duy nhất, dữ liệu ra ngoài chỉ có một đường nên không phải chọn đường nào cả.",
  },
  {
    id: "b3-12",
    q: "Modem có chức năng gì?",
    options: [
      "Chuyển đổi tín hiệu số thành tín hiệu tương tự và ngược lại",
      "Chọn đường đi cho dữ liệu giữa các mạng cục bộ khác nhau",
      "Phát tán tín hiệu tới mọi cổng khi có một máy gửi dữ liệu",
      "Kết nối các thiết bị đầu cuối vào LAN bằng sóng vô tuyến",
    ],
    answer: 0,
    explain:
      "Trong LAN tín hiệu là tín hiệu số (0 và 1), còn bên ngoài LAN thường là tín hiệu tương tự như tín hiệu quang, sóng mang điện thoại, sóng 3G/4G/5G. Router chỉ hướng luồng dữ liệu chứ không chuyển đổi tín hiệu, nên cần modem đặt giữa router và nhà cung cấp dịch vụ.",
  },
  {
    id: "b3-13",
    q: "Modem có làm thay đổi dữ liệu được truyền đi hay không?",
    options: [
      "Không, modem chỉ thay đổi tín hiệu mang dữ liệu chứ không đổi dữ liệu",
      "Có, modem nén dữ liệu lại cho nhỏ hơn trước khi truyền ra bên ngoài",
      "Có, modem mã hoá dữ liệu để bảo mật rồi mới truyền trên đường dây",
      "Không, vì modem chỉ đóng vai trò cấp nguồn điện cho router hoạt động",
    ],
    answer: 0,
    explain:
      "Modem chỉ thay đổi dạng tín hiệu, không làm thay đổi dữ liệu được mang bởi tín hiệu đó. Tên gọi modem ghép từ Modulation (điều chế xung) và Demodulation (giải điều chế xung) — đúng hai công việc chuyển đổi ngược chiều nhau.",
  },
  {
    id: "b3-14",
    q: "Máy tính xách tay có Wi-Fi nhưng không có khe SIM. Muốn nối Internet qua mạng điện thoại di động thì dùng thiết bị nào?",
    options: [
      "Modem GSM có khe cắm SIM, phát lại qua sóng Wi-Fi cho máy tính",
      "Modem ADSL nối vào đường cáp điện thoại của thuê bao trong nhà",
      "Modem quang chuyển tín hiệu số sang tín hiệu quang và ngược lại",
      "Một chiếc hub tám cổng nối bằng cáp UTP tới máy tính xách tay đó",
    ],
    answer: 0,
    explain:
      "Modem GSM 3G, 4G, 5G có khe cắm SIM để truy cập Internet qua hệ thống điện thoại di động, rồi phát lại qua sóng Wi-Fi hoặc nối vào mạng có dây. Modem ADSL dùng cáp điện thoại cố định, modem quang dùng cáp quang — cả hai đều không đi qua mạng di động.",
  },
  {
    id: "b3-15",
    q: "Nối máy tính vào switch, hub hay cổng LAN của router thì dùng cổng và cáp nào?",
    options: [
      "Cổng RJ45 với cáp UTP có bốn đôi dây xoắn và giắc cắm RJ45",
      "Cổng USB với cáp truyền dữ liệu hai đầu giắc USB thông dụng",
      "Cổng HDMI với cáp truyền hình ảnh và âm thanh có độ nét cao",
      "Cổng VGA với cáp tín hiệu hình ảnh nối tới màn hình máy tính",
    ],
    answer: 0,
    explain:
      "Các LAN thường dùng cáp mạng UTP có bốn đôi dây xoắn với giắc cắm RJ45. Chỉ cần cắm một đầu giắc vào cổng RJ45 của máy tính, đầu kia vào cổng RJ45 của switch, hub hay cổng LAN của router. USB, HDMI, VGA là các cổng dùng cho mục đích khác.",
  },
  {
    id: "b3-16",
    q: "Cắm xong cáp mạng vào máy tính và switch thì máy đã dùng được mạng chưa?",
    options: [
      "Chưa, còn phải thiết lập kết nối logic như đặt địa chỉ cho máy",
      "Rồi, cắm cáp mạng xong là máy vào được Internet ngay lập tức",
      "Chưa, còn phải lắp thêm bảng mạch mở rộng cho máy tính để bàn",
      "Rồi, nhưng phải khởi động lại máy thì kết nối mới có hiệu lực",
    ],
    answer: 0,
    explain:
      "Nối cáp mới chỉ là kết nối vật lí. Trong các mạng cụ thể còn phải thiết lập kết nối logic: đặt địa chỉ cho máy, khai báo cách kết nối ra ngoài… Bảng mạch mở rộng chỉ cần khi muốn máy để bàn bắt được Wi-Fi, không liên quan tới kết nối bằng cáp.",
  },
];

export default questions;
