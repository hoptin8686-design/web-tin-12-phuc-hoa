import type { LessonTheory } from "@/lib/types";

// Bài 3. Một số thiết bị mạng thông dụng — SGK Tin học 12 (ICT, Kết nối tri
// thức), trang 14–20. Giữ đúng thuật ngữ sách: bộ chia tín hiệu (hub), bộ
// chuyển mạch (switch), điểm truy cập không dây (WAP/AP), bộ định tuyến
// (router), định tuyến (routing), cổng LAN / cổng WAN, modem, cổng RJ45,
// cáp UTP, xung đột (collision) tín hiệu.

const theory: LessonTheory = {
  minutes: 10,
  intro:
    "Nhìn bên ngoài, hub với switch giống hệt nhau; router với modem thì hay bị gọi lẫn là “cục Wi-Fi”. Bài này phân biệt rạch ròi **bốn thiết bị kết nối mạng** — mỗi cái sinh ra để giải một bài toán khác nhau — rồi hướng dẫn nối máy tính vào mạng bằng cả hai cách: cáp và Wi-Fi.",

  sections: [
    {
      id: "hub-switch",
      emoji: "🔀",
      heading: "Hub và switch",
      blocks: [
        {
          kind: "text",
          text: "Hub (**bộ chia tín hiệu**) và switch (**bộ chuyển mạch**) đều dùng để nối các máy tính **trong cùng một LAN** qua cáp mạng. Nhìn bên ngoài rất khó phân biệt — điểm khác nhau nằm ở **cách thức hoạt động**.",
        },
        {
          kind: "figure",
          diagram: "hub-vs-switch",
          caption: "Cùng một việc “máy A gửi cho máy C”, hub và switch xử lí hoàn toàn khác nhau",
        },
        {
          kind: "list",
          items: [
            "**Hub:** máy tính gửi dữ liệu qua một cổng thì tín hiệu **được gửi đến tất cả các cổng còn lại**.",
            "**Switch:** xác định cổng của thiết bị gửi và thiết bị nhận, **thiết lập tạm thời một kênh truyền** giữa đúng hai cổng đó, truyền xong thì **huỷ kết nối**.",
          ],
        },
        {
          kind: "example",
          title: "Xung đột tín hiệu là gì?",
          text: "Giống một buổi gặp gỡ mà **nhiều người nói cùng lúc**, ồn tới mức không nghe được ai nói gì. Trong LAN cũng vậy: nhiều máy đồng thời gửi dữ liệu lên đường truyền chung thì tín hiệu bị hỏng, máy nhận không đọc được. Hiện tượng đó gọi là **xung đột (collision) tín hiệu** — phải truyền lại, làm giảm hiệu quả của mạng.",
        },
        {
          kind: "text",
          text: "Vì hub phát tán tín hiệu ra tất cả các cổng nên **càng nhiều máy trong mạng, nguy cơ xung đột càng cao**. Switch thì tín hiệu đi thẳng từ máy gửi tới máy nhận, không gây xung đột với các cuộc truyền ở cổng khác.",
        },
        {
          kind: "compare",
          left: {
            emoji: "🏠",
            title: "Khi nào dùng hub?",
            items: [
              "Mạng có **ít thiết bị đầu cuối**, ví dụ mạng gia đình",
              "**Chi phí rẻ hơn rất nhiều** so với switch cùng số cổng",
              "Ít máy nên xung đột tín hiệu không đáng lo",
            ],
          },
          right: {
            emoji: "🏫",
            title: "Khi nào dùng switch?",
            items: [
              "LAN có từ **vài chục đến hàng trăm máy tính**",
              "Có thể dùng **nhiều switch nối thành nhiều tầng**",
              "Kết hợp với hub ở **tầng cuối cùng**",
            ],
          },
        },
        {
          kind: "check",
          q: "Trong một LAN, thiết bị nào dễ gây ra xung đột tín hiệu hơn?",
          options: [
            "Switch, vì phải thiết lập kênh truyền",
            "Hub, vì tín hiệu phát tán ra tất cả các cổng",
            "Cả hai như nhau vì nhìn bên ngoài giống nhau",
            "Không cái nào, xung đột chỉ xảy ra trên Wi-Fi",
          ],
          answer: 1,
          explain:
            "**Hub** — tín hiệu vào một cổng là phát ra tất cả các cổng còn lại, nên càng nhiều máy thì càng dễ đụng nhau. Switch chỉ mở kênh giữa đúng cặp cổng gửi – nhận nên **giảm thiểu được tình trạng xung đột**, giúp mạng hoạt động hiệu quả hơn.",
        },
      ],
    },

    {
      id: "wap",
      emoji: "📶",
      heading: "Wi-Fi và WAP",
      blocks: [
        {
          kind: "text",
          text: "**Wi-Fi** là chữ viết tắt của **Wireless Fidelity**. Người ta thường hiểu “Wi-Fi” là thiết bị kết nối không dây trong mạng cục bộ, nhưng thực ra **Wi-Fi là một bộ tiêu chuẩn kĩ thuật** truyền dữ liệu bằng sóng vô tuyến điện, được dùng rộng rãi trong các mạng cục bộ.",
        },
        {
          kind: "note",
          text: "Bộ thu phát Wi-Fi còn được gọi là **“điểm truy cập không dây”** — Wireless Access Point (**WAP**), hay Access Point (**AP**).",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "⚡",
              title: "Cách lập LAN đơn giản nhất",
              text: "Dùng **một bộ thu phát Wi-Fi** để kết nối tất cả thiết bị đầu cuối trong một khu vực — *không phải mua sắm, lắp đặt hub, switch hay cáp mạng*. Yêu cầu duy nhất: các thiết bị đầu cuối phải hỗ trợ truy cập Wi-Fi.",
            },
            {
              emoji: "🗺️",
              title: "Mở rộng phạm vi của LAN",
              text: "LAN có dây nối các máy qua switch hay hub **trong một phạm vi địa lí nhất định**. Nối thêm một WAP vào LAN thì kết nối được không dây các thiết bị di động, giúp **mở rộng phạm vi địa lí** của LAN.",
            },
          ],
        },
      ],
    },

    {
      id: "router",
      emoji: "🧭",
      heading: "Router",
      blocks: [
        {
          kind: "text",
          text: "Hub và switch chỉ nối được các máy **trong cùng một LAN**. Muốn nối hai máy tính ở hai LAN khác nhau — có thể cách xa **hàng nghìn kilômét** — thì không thể kéo cáp mạng qua được, mà phải dùng dịch vụ truyền dữ liệu của các nhà cung cấp dịch vụ viễn thông. Mạng viễn thông dùng **bộ định tuyến (router)** để chuyển tiếp dữ liệu.",
        },
        {
          kind: "figure",
          diagram: "router-lan-wan",
          caption: "Dữ liệu ra khỏi LAN qua cổng WAN, trung chuyển qua nhiều router rồi vào LAN đích qua cổng LAN",
        },
        {
          kind: "steps",
          items: [
            {
              label: "1",
              title: "Vào router qua cổng LAN",
              text: "Mỗi router có **một số cổng nối trực tiếp vào LAN gọi là cổng LAN**. Dữ liệu từ máy gửi trước hết phải chuyển đến router của LAN qua cổng này.",
            },
            {
              label: "2",
              title: "Ra ngoài qua cổng WAN",
              text: "Các cổng để nối với **router khác gọi là cổng WAN**. Dữ liệu rời LAN đi ra Internet bằng cổng WAN.",
            },
            {
              label: "3",
              title: "Định tuyến qua nhiều router",
              text: "Khi router có nhiều cổng WAN thì phải **chọn cổng thích hợp** để dữ liệu đi tới đích. Dữ liệu có thể phải **trung chuyển qua nhiều router**.",
            },
            {
              label: "4",
              title: "Tới máy nhận",
              text: "Đến **router cuối cùng**, dữ liệu được chuyển qua **cổng LAN** để tới máy nhận.",
            },
          ],
        },
        {
          kind: "note",
          text: "Thuật ngữ **định tuyến** hay **chọn đường** (routing) hàm ý: router phải chọn một cổng thích hợp để gửi dữ liệu đi sao cho tới được LAN của máy nhận.",
        },
        {
          kind: "example",
          title: "Vì sao router nhà em chỉ có 1 cổng WAN?",
          text: "Router của các nhà cung cấp dịch vụ Internet hay các tổ chức lớn mới có nhiều cổng WAN. Router của **mạng gia đình chỉ có một cổng WAN** nối đến nhà cung cấp dịch vụ, nên **không cần phải định tuyến** — chỉ có đúng một đường ra. Các router này thường **tích hợp cả bộ thu phát Wi-Fi**, vì thế được gọi là **router Wi-Fi**.",
        },
        {
          kind: "check",
          q: "Có thể dùng hub hay switch để nối hai máy tính thuộc hai LAN khác nhau qua Internet không?",
          options: [
            "Được, chỉ cần mua loại hub có nhiều cổng",
            "Không, không kéo cáp xa được — phải dùng router",
            "Được, nếu hai LAN nằm trong cùng một tỉnh",
            "Không, vì hub và switch không có nguồn điện",
          ],
          answer: 1,
          explain:
            "Hai LAN có thể cách xa **hàng nghìn kilômét**, không thể dùng cáp mạng nối qua hub hay switch. Phải dùng dịch vụ truyền dữ liệu của nhà cung cấp viễn thông, và mạng viễn thông dùng **router** để chuyển tiếp dữ liệu giữa các LAN.",
        },
      ],
    },

    {
      id: "modem",
      emoji: "🔄",
      heading: "Modem",
      blocks: [
        {
          kind: "text",
          text: "Trong LAN, tín hiệu là **tín hiệu số (digital)** — các giá trị logic 0 hay 1 dùng cho máy tính. Nhưng để truyền ra bên ngoài LAN, người ta dùng **tín hiệu tương tự (analog)**: tín hiệu quang, sóng điện từ trong môi trường có dây không dây, sóng mang của điện thoại công cộng, sóng mang 3G, 4G, 5G,…",
        },
        {
          kind: "text",
          text: "Vấn đề là **router chỉ hướng luồng dữ liệu tới đích chứ không chuyển đổi tín hiệu**. Vì vậy cần một thiết bị chuyển đổi tín hiệu hai chiều đặt **giữa router và nhà cung cấp dịch vụ Internet** — đó chính là **modem**.",
        },
        {
          kind: "figure",
          diagram: "modem-so-tuong-tu",
          caption: "Modem đứng giữa hai thế giới tín hiệu: số bên trong LAN, tương tự bên ngoài",
        },
        {
          kind: "note",
          text: "Modem là thiết bị có chức năng **chuyển đổi tín hiệu số thành tín hiệu tương tự và ngược lại**. Modem **chỉ thay đổi tín hiệu, không làm thay đổi dữ liệu** được mang bởi tín hiệu.",
        },
        {
          kind: "cards",
          tone: "gold",
          items: [
            {
              emoji: "☎️",
              title: "Modem quay số",
              text: "Nối hai máy tính qua hệ thống chuyển mạch của **mạng điện thoại công cộng**. Dữ liệu được mã hoá qua tín hiệu thoại, chuyển qua **đường dây dùng chung với điện thoại**.",
            },
            {
              emoji: "📞",
              title: "Modem ADSL",
              text: "Cũng dùng cáp điện thoại nhưng **sử dụng riêng cho thuê bao số, không dùng chung tần số với đường thoại**. Rất phổ biến để kết nối Internet tốc độ cao **trước khi cáp quang được dùng rộng rãi**.",
            },
            {
              emoji: "💡",
              title: "Modem quang",
              text: "Chuyển đổi **tín hiệu số sang tín hiệu quang** và ngược lại. Cổng bên phải là cổng LAN, hai cổng bên trái là cổng quang — một đường vào, một đường ra.",
            },
            {
              emoji: "📱",
              title: "Modem GSM 3G, 4G, 5G",
              text: "Có **khe cắm SIM** để truy cập Internet qua hệ thống điện thoại di động, rồi **phát lại qua sóng Wi-Fi** hoặc nối vào mạng có dây.",
            },
          ],
        },
        {
          kind: "example",
          title: "Vì sao gọi là “modem”?",
          text: "Việc chuyển tín hiệu **từ dạng số sang dạng tương tự** (hoặc dạng phù hợp để truyền qua đường truyền mạng) gọi là **điều chế xung** — tiếng Anh là **Modulation**. Việc chuyển **ngược lại** về dạng số ban đầu gọi là **giải điều chế xung** — **Demodulation**. Thiết bị làm cả hai việc đó gọi là **modem**, ghép từ *modulation* và *demodulation*.",
        },
        {
          kind: "text",
          text: "Thời kì đầu, modem thường **tách rời khỏi router**. Sau này chức năng modem được **tích hợp ngay vào router** nên ngày nay ta ít thấy hình ảnh các modem độc lập — cái “cục Wi-Fi” ở nhà em thực ra đang làm cả ba việc: modem, router và WAP.",
        },
        {
          kind: "check",
          q: "Máy tính xách tay có Wi-Fi nhưng không có khe SIM. Làm thế nào để nối nó vào Internet qua mạng điện thoại di động?",
          options: [
            "Không được, buộc phải mua máy có khe cắm SIM",
            "Dùng modem GSM có khe SIM rồi phát lại qua Wi-Fi",
            "Dùng thêm một hub nhiều cổng nối vào máy tính",
            "Cắm cáp UTP vào cổng RJ45 của điện thoại",
          ],
          answer: 1,
          explain:
            "**Modem GSM 3G/4G/5G** có khe cắm SIM để truy cập Internet qua hệ thống điện thoại di động, sau đó **phát lại qua sóng Wi-Fi** (hoặc nối vào mạng có dây). Máy xách tay chỉ cần bắt sóng Wi-Fi đó là ra được Internet.",
        },
      ],
    },

    {
      id: "ket-noi",
      emoji: "🔌",
      heading: "Nối máy vào mạng",
      blocks: [
        {
          kind: "text",
          text: "Máy tính — kể cả thiết bị di động — có thể kết nối vào mạng bằng **cáp tín hiệu** hoặc **qua sóng Wi-Fi**.",
        },
        {
          kind: "cards",
          tone: "leaf",
          items: [
            {
              emoji: "🔗",
              title: "Cách 1 — Nối bằng cáp",
              text: "LAN thường dùng **cáp mạng UTP** có **bốn đôi dây xoắn** với **giắc cắm RJ45**. Chỉ cần cắm một đầu giắc vào **cổng RJ45 của máy tính**, đầu kia vào cổng RJ45 của switch, hub hay **cổng LAN của router**.",
            },
            {
              emoji: "📡",
              title: "Cách 2 — Nối qua Wi-Fi",
              text: "Thực hiện qua một **trạm thu phát Wi-Fi** (đóng vai trò WAP). Hầu hết **máy tính để bàn không có sẵn khả năng Wi-Fi** như máy xách tay hay điện thoại — muốn dùng phải **lắp thêm một bảng mạch mở rộng**.",
            },
          ],
        },
        {
          kind: "steps",
          items: [
            {
              label: "B1",
              title: "Tìm trạm thu phát Wi-Fi để kết nối vào LAN",
              text: "**Windows 10:** nháy chuột vào biểu tượng sóng bên phải thanh công việc. **Windows 11:** nháy vào biểu tượng sóng rồi nháy tiếp vào dấu **>** cạnh biểu tượng Wi-Fi. **Android:** vuốt màn hình từ trên xuống, chọn biểu tượng cài đặt rồi chọn biểu tượng Wi-Fi. **iOS:** vuốt màn hình sẽ thấy ngay biểu tượng Wi-Fi.",
            },
            {
              label: "B2",
              title: "Kết nối",
              text: "Chọn một trạm thuộc LAN muốn vào. Nếu trạm **được bảo mật** (có biểu tượng cái khoá) thì phải **nhập đúng mật khẩu** mới kết nối được, rồi chọn **Connect / Kết nối**.",
            },
          ],
        },
        {
          kind: "example",
          title: "Muốn lần sau khỏi phải nhập lại mật khẩu?",
          text: "Đánh dấu vào ô **Connect automatically** trên Windows, hoặc kéo con trượt **Tự động kết nối lại** sang phải trên Android và iOS. Từ lần sau máy sẽ tự nối ngay khi vào vùng phủ sóng.",
        },
        {
          kind: "note",
          text: "Nối cáp mới chỉ là **kết nối vật lí**. Trong các mạng cụ thể còn phải thiết lập các **kết nối logic** — ví dụ muốn máy trong LAN giao tiếp được với Internet thì còn phải thiết lập địa chỉ, khai báo cách kết nối ra ngoài,…",
        },
      ],
    },
    {
      id: "meo-nho-va-cam-bay",
      emoji: "💡",
      heading: "Mẹo nhớ & Cảnh báo bẫy",
      blocks: [
        {
          kind: "text",
          text: "Bài 3 có rất nhiều thiết bị mạng dễ bị gọi lẫn lộn trong đời sống. Dưới đây là các **mẹo phân biệt 1 câu** và **bảng cảnh báo bẫy trắc nghiệm**:",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "📢",
              title: "Hub: Cái loa phát thanh (Broadcast)",
              text: "Máy A gửi thì **tất cả các máy khác đều nhận** (phát tán ra mọi cổng) → rất dễ xảy ra hiện tượng **xung đột tín hiệu** khi nhiều máy cùng gửi.",
            },
            {
              emoji: "🤫",
              title: "Switch: Kênh truyền riêng (Chuyển mạch)",
              text: "Máy A gửi cho máy C thì Switch **chỉ mở riêng đường nối giữa A và C** → không làm phiền máy khác, **triệt tiêu xung đột tín hiệu**.",
            },
            {
              emoji: "🗺️",
              title: "Router: Người dẫn đường liên mạng",
              text: "Hub và Switch chỉ dùng **trong nội bộ một mạng LAN**. Muốn chuyển dữ liệu **ra ngoài Internet hoặc sang LAN khác** bắt buộc phải qua **Router**.",
            },
            {
              emoji: "🔄",
              title: "Modem: Người phiên dịch tín hiệu",
              text: "**Số (Digital) ↔ Tương tự (Analog)**. Modem chỉ đổi hình thức tín hiệu để truyền đi xa, **hoàn toàn không làm thay đổi nội dung dữ liệu**.",
            },
          ],
        },
        {
          kind: "compare",
          left: {
            emoji: "❌",
            title: "Bẫy câu chữ đề thi hay gài",
            items: [
              "Dùng Hub hoặc Switch để kết nối 2 LAN cách xa nhau",
              "Switch phát tán tín hiệu ra tất cả các cổng như Hub",
              "Modem làm thay đổi nội dung dữ liệu khi truyền",
              "Cáp mạng LAN xoắn đôi thông dụng là cáp HDMI",
              "Router chuyển dữ liệu ra ngoài Internet qua cổng LAN",
            ],
          },
          right: {
            emoji: "✅",
            title: "Bản chất chính xác cần chọn",
            items: [
              "Kết nối giữa 2 LAN khác nhau **bắt buộc dùng Router**",
              "Switch **chỉ thiết lập kênh truyền riêng** giữa 2 cổng",
              "Modem **chỉ đổi dạng tín hiệu**, giữ nguyên dữ liệu",
              "Cáp mạng LAN là **cáp UTP** (4 đôi xoắn) với **giắc RJ45**",
              "Dữ liệu đi ra Internet qua **cổng WAN** của Router",
            ],
          },
        },
        {
          kind: "check",
          q: "Một trường học có 100 máy tính trong phòng thực hành, cần kết nối mạng với hiệu quả cao và tránh xung đột tín hiệu. Thiết bị nào sau đây là phù hợp nhất để nối các máy trong phòng?",
          options: [
            "Bộ chuyển mạch (Switch), vì mở kênh riêng giữa từng cặp máy",
            "Bộ chia tín hiệu (Hub), vì chi phí thấp và cấu tạo đơn giản",
            "Điểm truy cập không dây (WAP), vì không cần dùng cáp mạng",
            "Bộ điều chế tín hiệu (Modem), vì có chức năng đổi tín hiệu",
          ],
          answer: 0,
          explain:
            "Với mạng có số lượng máy lớn (hàng chục đến hàng trăm máy), **Switch** là lựa chọn bắt buộc vì nó tạo kênh truyền riêng cho từng cặp máy gửi - nhận, giảm thiểu tối đa nguy cơ xung đột tín hiệu so với Hub.",
        },
      ],
    },
  ],

  summary: [
    "**Hub, switch, WAP và router** là các thiết bị kết nối mạng.",
    "**Hub và switch** chỉ nối các máy trong **cùng một LAN** qua cáp mạng. Hub **phát tán tín hiệu ra tất cả các cổng**; switch **chỉ nối từng cặp cổng gửi – nhận** nên giảm thiểu xung đột, mạng chạy hiệu quả hơn.",
    "**WAP** (điểm truy cập không dây) nối các thiết bị đầu cuối qua sóng Wi-Fi, giúp **giảm chi phí lập LAN** hoặc **mở rộng phạm vi** làm việc của một LAN sẵn có.",
    "**Router** dẫn đường cho dữ liệu khi kết nối trên mạng rộng như Internet: vào bằng **cổng LAN**, ra bằng **cổng WAN**, chọn cổng thích hợp gọi là **định tuyến**.",
    "**Modem** chuyển đổi **tín hiệu số ↔ tín hiệu tương tự**, thường dùng khi kết nối LAN với Internet. Nó chỉ đổi dạng tín hiệu, **không làm thay đổi dữ liệu**.",
    "Nối máy vào mạng: bằng **cáp UTP với giắc/cổng RJ45**, hoặc **qua Wi-Fi** theo hai bước tìm trạm rồi nhập mật khẩu.",
  ],
};

export default theory;
