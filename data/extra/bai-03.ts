import type { LessonExtra } from "@/lib/types";

// Bài 3. Một số thiết bị mạng thông dụng — câu đúng/sai + tự luận
// (SGK trang 14-20)
const extra: LessonExtra = {
  tf: [
    {
      id: "b3-tf1",
      context:
        "Phòng thực hành Tin học của trường có 30 máy nối bằng cáp mạng. Nhà trường định mua toàn hub cho rẻ, nhưng thầy phụ trách khuyên dùng switch: khi cả lớp cùng nộp bài lên máy chủ, dùng hub thì tín hiệu các máy chồng lên nhau, phải truyền lại nhiều lần rất chậm. Cuối cùng phòng máy lắp hai switch nối tầng, còn hub cũ chuyển sang thư viện chỉ có bốn máy.",
      statements: [
        {
          text: "Hiện tượng tín hiệu của các máy chồng lên nhau khi cùng gửi dữ liệu gọi là xung đột tín hiệu.",
          answer: true,
          explain:
            "Nhiều máy đồng thời gửi dữ liệu lên đường truyền chung thì tín hiệu bị hỏng, các máy không nhận biết được dữ liệu và phải truyền lại — đó là xung đột (collision), làm giảm hiệu quả của mạng.",
        },
        {
          text: "Với LAN vài chục máy như phòng thực hành thì nên dùng switch, đúng như lời khuyên của thầy.",
          answer: true,
          explain:
            "Sách hướng dẫn: LAN có từ vài chục đến hàng trăm máy tính thì nên dùng switch, thậm chí nhiều switch kết nối thành nhiều tầng — đúng cách phòng máy đã lắp hai switch nối tầng.",
        },
        {
          text: "Chuyển chiếc hub cũ sang phòng thư viện chỉ có bốn máy là lãng phí, vì hub không dùng được cho mạng nhỏ.",
          answer: false,
          explain:
            "Ngược lại, mạng ít thiết bị đầu cuối là chỗ dùng hub hợp lí nhất: nguy cơ xung đột thấp mà chi phí lại rẻ hơn nhiều so với switch cùng số cổng.",
        },
        {
          text: "Nếu thay toàn bộ switch bằng hub thì mạng chạy nhanh hơn, vì hub gửi tín hiệu tới tất cả các cổng cùng lúc.",
          answer: false,
          explain:
            "Việc phát tán tín hiệu ra mọi cổng chính là nguyên nhân gây xung đột, càng nhiều máy thì nguy cơ càng cao và mạng càng chậm. Switch chỉ lập kênh truyền giữa cặp cổng gửi – nhận nên hiệu quả hơn hẳn.",
        },
      ],
    },
    {
      id: "b3-tf2",
      context:
        "Nhà Dín vừa lắp Internet cáp quang. Nhân viên nhà mạng mang tới một hộp thiết bị nối vào sợi cáp quang từ ngoài cột điện, rồi cắm cáp mạng từ hộp đó sang cổng xanh của router Wi-Fi sáu anten. Bốn cổng vàng còn lại để cắm cáp cho máy tính bàn. Dín thắc mắc vì sao phải có hai thiết bị chứ không gộp làm một, và vì sao điện thoại cả nhà vào mạng được mà không cắm dây nào.",
      statements: [
        {
          text: "Hộp thiết bị nối vào sợi cáp quang là modem, làm nhiệm vụ chuyển đổi giữa tín hiệu số và tín hiệu quang.",
          answer: true,
          explain:
            "Đó là modem quang: chuyển tín hiệu số trong LAN sang tín hiệu quang truyền trên cáp quang và ngược lại. Router chỉ hướng luồng dữ liệu tới đích chứ không chuyển đổi tín hiệu, nên vẫn cần modem.",
        },
        {
          text: "Cổng màu xanh trên router là cổng LAN, còn bốn cổng màu vàng là các cổng WAN.",
          answer: false,
          explain:
            "Ngược lại. Cổng nối ra phía nhà cung cấp dịch vụ Internet là cổng WAN (ở đây là cổng màu xanh), còn các cổng cắm máy tính trong nhà là cổng LAN. Router Wi-Fi gia đình thường có 1 cổng WAN và 4 cổng LAN.",
        },
        {
          text: "Router có thể tự chuyển đổi tín hiệu quang thành tín hiệu số nên thực ra nhà Dín không cần modem.",
          answer: false,
          explain:
            "Router không có chức năng chuyển đổi tín hiệu. Về sau chức năng modem hay được tích hợp ngay vào router nên ít thấy modem rời, nhưng đó là gộp hai thiết bị làm một chứ không phải bỏ bớt chức năng.",
        },
        {
          text: "Điện thoại cả nhà vào mạng được mà không cần cắm dây là nhờ router đã tích hợp sẵn bộ thu phát Wi-Fi.",
          answer: true,
          explain:
            "Router của mạng gia đình thường tích hợp cả bộ thu phát Wi-Fi, vì thế mới gọi là router Wi-Fi. Bộ thu phát này đóng vai trò điểm truy cập không dây (WAP) cho các thiết bị trong nhà.",
        },
      ],
    },
    {
      id: "b3-tf3",
      context:
        "Páo mang máy tính để bàn cũ tới phòng thực hành nhờ thầy nối mạng. Thầy cắm một đầu cáp UTP vào cổng RJ45 sau máy, đầu kia vào switch của phòng, nhưng máy vẫn chưa vào được Internet — còn phải đặt địa chỉ và khai báo cách kết nối ra ngoài. Páo hỏi sao không cho máy bắt Wi-Fi như máy xách tay của Mai cho tiện, thầy nói máy để bàn thường không có sẵn khả năng đó.",
      statements: [
        {
          text: "Cáp UTP có bốn đôi dây xoắn, hai đầu là giắc cắm RJ45 để cắm vào cổng RJ45.",
          answer: true,
          explain:
            "Các LAN thường dùng cáp mạng UTP có bốn đôi dây xoắn với giắc cắm RJ45 để kết nối máy tính với switch, hub hay cổng LAN của router.",
        },
        {
          text: "Việc cắm cáp mới chỉ là kết nối vật lí, còn phải thiết lập kết nối logic thì máy mới dùng được mạng.",
          answer: true,
          explain:
            "Sách nói rõ: nối cáp chỉ là kết nối vật lí; trong các mạng cụ thể còn phải thiết lập các kết nối logic như đặt địa chỉ, khai báo cách kết nối ra ngoài.",
        },
        {
          text: "Máy tính để bàn nào cũng bắt được Wi-Fi, chỉ cần bật biểu tượng sóng ở thanh công việc lên là xong.",
          answer: false,
          explain:
            "Hầu hết máy tính để bàn không có sẵn khả năng kết nối Wi-Fi như máy tính xách tay hay điện thoại thông minh. Muốn dùng Wi-Fi thì phải lắp thêm một bảng mạch mở rộng cho máy.",
        },
        {
          text: "Vì đã cắm cáp mạng vào switch nên máy chắc chắn ra được Internet ngay, không cần làm thêm gì.",
          answer: false,
          explain:
            "Chính tình huống của Páo cho thấy điều ngược lại: cáp đã cắm mà máy vẫn chưa vào được mạng, vì còn thiếu bước thiết lập kết nối logic.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b3-es1",
      q: "So sánh chức năng của hub, switch và thiết bị thu phát Wi-Fi (WAP).",
      answer:
        "* ĐIỂM CHUNG: hub, switch và WAP (cùng với router) đều là thiết bị kết nối mạng, dùng để nối các thiết bị đầu cuối lại thành mạng cục bộ.\n\n* HUB\n- Kết nối các máy tính trong cùng LAN, nối trực tiếp bằng cáp mạng.\n- Khi một máy gửi dữ liệu qua một cổng, tín hiệu được PHÁT TÁN tới tất cả các cổng còn lại.\n- Vì thế càng nhiều máy trong mạng, nguy cơ xung đột tín hiệu càng cao.\n- Ưu điểm: chi phí rẻ hơn nhiều so với switch có cùng số cổng.\n- Nên dùng cho mạng ít thiết bị đầu cuối, ví dụ mạng gia đình.\n\n* SWITCH\n- Cũng kết nối các máy tính trong cùng LAN bằng cáp mạng, nhìn bên ngoài rất khó phân biệt với hub.\n- Khác ở CÁCH HOẠT ĐỘNG: switch xác định cổng kết nối giữa thiết bị gửi và thiết bị nhận, thiết lập tạm thời kênh truyền giữa hai cổng đó, truyền xong thì huỷ kết nối.\n- Nhờ chỉ nối từng cặp cổng gửi – nhận nên GIẢM THIỂU ĐƯỢC XUNG ĐỘT tín hiệu, mạng hoạt động hiệu quả hơn.\n- Nên dùng cho LAN có từ vài chục đến hàng trăm máy; có thể dùng nhiều switch nối thành nhiều tầng, kết hợp hub ở tầng cuối cùng.\n\n* THIẾT BỊ THU PHÁT Wi-Fi (WAP – điểm truy cập không dây)\n- Kết nối các thiết bị đầu cuối bằng SÓNG Wi-Fi thay cho cáp mạng.\n- Là cách đơn giản nhất để thiết lập một LAN: không phải mua sắm, lắp đặt hub, switch hay cáp mạng.\n- Yêu cầu: thiết bị đầu cuối phải hỗ trợ truy cập Wi-Fi.\n- Nối thêm WAP vào một LAN có sẵn thì mở rộng được phạm vi địa lí của LAN, kết nối được cả các thiết bị di động.\n\n* LƯU Ý: Wi-Fi (Wireless Fidelity) không phải là thiết bị, mà là một bộ tiêu chuẩn kĩ thuật truyền dữ liệu bằng sóng vô tuyến điện.",
    },
    {
      id: "b3-es2",
      q: "Giải thích cách thức hoạt động của router và ý nghĩa của từ \"định tuyến\". Cho biết chức năng của modem và kể tên một số loại modem tương ứng với những phương thức truyền tín hiệu khác nhau.",
      answer:
        "* ROUTER (bộ định tuyến)\n- Dùng để kết nối các LAN với nhau qua mạng diện rộng như Internet, khi hai máy có thể cách xa hàng nghìn kilômét và không thể nối bằng cáp mạng qua hub hay switch.\n- Mỗi router có hai loại cổng: CỔNG LAN (kết nối trực tiếp vào LAN) và CỔNG WAN (kết nối với các router khác).\n- Đường đi của dữ liệu: máy gửi → router của LAN (qua cổng LAN) → ra ngoài (qua cổng WAN) → có thể trung chuyển qua nhiều router → tới router cuối cùng → qua cổng LAN → máy nhận.\n\n* \"ĐỊNH TUYẾN\" (routing, hay chọn đường)\n- Hàm ý router phải CHỌN một cổng thích hợp để gửi dữ liệu đi sao cho tới được LAN của máy nhận.\n- Chỉ router có nhiều cổng WAN (của nhà cung cấp dịch vụ Internet hay tổ chức lớn) mới phải chọn đường. Router mạng gia đình chỉ có một cổng WAN nối đến nhà cung cấp dịch vụ nên không cần định tuyến; loại này thường tích hợp cả bộ thu phát Wi-Fi nên gọi là router Wi-Fi.\n\n* MODEM\n- Chức năng: CHUYỂN ĐỔI TÍN HIỆU SỐ THÀNH TÍN HIỆU TƯƠNG TỰ VÀ NGƯỢC LẠI.\n- Lí do cần modem: trong LAN là tín hiệu số (0 và 1), còn bên ngoài LAN là tín hiệu tương tự (tín hiệu quang, sóng mang điện thoại, sóng 3G/4G/5G…). Router chỉ hướng luồng dữ liệu tới đích chứ không chuyển đổi tín hiệu, nên phải đặt modem giữa router và nhà cung cấp dịch vụ Internet.\n- Modem chỉ thay đổi TÍN HIỆU, không làm thay đổi DỮ LIỆU mà tín hiệu mang theo.\n\n* MỘT SỐ LOẠI MODEM\n1. Modem quay số — nối hai máy tính qua hệ thống chuyển mạch của mạng điện thoại công cộng, dữ liệu được mã hoá qua tín hiệu thoại, dùng chung đường dây với điện thoại.\n2. Modem ADSL — cũng dùng cáp điện thoại nhưng dành riêng cho thuê bao số, không dùng chung tần số với đường thoại; rất phổ biến trước khi có cáp quang.\n3. Modem quang — chuyển tín hiệu số sang tín hiệu quang và ngược lại.\n4. Modem GSM 3G, 4G, 5G — có khe cắm SIM để truy cập Internet qua hệ thống điện thoại di động, rồi phát lại qua sóng Wi-Fi hoặc nối vào mạng có dây.\n\n(Tên gọi modem ghép từ Modulation — điều chế xung và Demodulation — giải điều chế xung.)",
    },
  ],
};

export default extra;
