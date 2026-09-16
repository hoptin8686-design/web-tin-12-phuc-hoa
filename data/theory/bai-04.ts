import type { LessonTheory } from "@/lib/types";

// Bài 4. Giao thức mạng — SGK Tin học 12 (ICT, Kết nối tri thức), trang 21–25.
// Giữ đúng thuật ngữ sách: giao thức mạng (network protocol) / giao thức
// truyền thông, địa chỉ MAC, địa chỉ IP, định tuyến tĩnh / định tuyến động,
// bảng định tuyến, cổng mặc định, cổng ứng dụng, giao thức liên mạng.
//
// Lưu ý: SGK viết HTTP là "Hypertext Transmission Protocol". Giữ nguyên theo
// sách vì đề thi bám SGK.

const theory: LessonTheory = {
  minutes: 11,
  intro:
    "Hỏi “Internet là gì”, nhiều người trả lời là web, là chat, là mạng xã hội. Đó là cách nhìn về **phương diện sử dụng**, chưa thấy cơ chế hoạt động. Câu trả lời chính xác về mặt công nghệ: **Internet là mạng thông tin toàn cầu hoạt động theo giao thức TCP/IP**. Bài này giải thích giao thức là gì, và vì sao riêng TCP với IP lại quan trọng đến thế.",

  sections: [
    {
      id: "giao-thuc-la-gi",
      emoji: "📜",
      heading: "Giao thức là gì?",
      blocks: [
        {
          kind: "text",
          text: "Bắt đầu từ một việc em làm hằng ngày: **gửi một bức thư điện tử**. Ngoài nội dung thư, phần mềm còn phải xử lí rất nhiều thứ khác — và mọi bước đều theo quy định chặt chẽ.",
        },
        {
          kind: "steps",
          items: [
            {
              label: "1",
              title: "Soạn và đóng gói",
              text: "Thư phải mang địa chỉ người gửi và người nhận dạng **<tên tài khoản>@<tên miền của máy chủ thư điện tử>**, cùng thông tin về các tệp đính kèm. Phần mềm soạn thư **theo định dạng đã định** rồi đóng gói toàn bộ dữ liệu.",
            },
            {
              label: "2",
              title: "Chuyển tới máy chủ",
              text: "Gói dữ liệu được chuyển qua Internet tới **máy chủ thư điện tử tương ứng với người nhận**.",
            },
            {
              label: "3",
              title: "Máy chủ xử lí",
              text: "Nếu có người nhận đúng như địa chỉ, máy chủ **lưu vào hộp thư** của người đó. Ngược lại nó **tạo một thư báo lỗi** chuyển ngược lại người gửi.",
            },
            {
              label: "4",
              title: "Người nhận tải thư về",
              text: "Phần mềm nhận thư **tách các thành phần dữ liệu** để lấy lại địa chỉ người gửi, người nhận, nội dung thư và danh sách tệp đính kèm.",
            },
          ],
        },
        {
          kind: "text",
          text: "Tất cả các quy định trên có mục đích làm rõ **định dạng và ý nghĩa của các thành phần dữ liệu**, qua đó xác định **cách thức xử lí dữ liệu** của phần mềm gửi và nhận thư. Riêng ví dụ này đã dùng tới ba giao thức có tên hẳn hoi:",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "📤",
              title: "SMTP",
              text: "**Simple Mail Transfer Protocol** — các quy định liên quan đến **gửi thư**.",
            },
            {
              emoji: "📥",
              title: "POP3 và IMAP",
              text: "**Post Office Protocol phiên bản 3** và **Internet Message Access Protocol** — các quy định về cách **người nhận lấy thư**.",
            },
          ],
        },
        {
          kind: "note",
          text: "**Giao thức mạng** (network protocol), hay còn gọi là **giao thức truyền thông**, là **tập hợp các quy định về cách thức giao tiếp để truyền dữ liệu giữa các đối tượng tham gia mạng**. Tất cả các hoạt động truyền thông trên mạng đều cần có giao thức giúp việc gửi, nhận dữ liệu chính xác, tin cậy và hiệu quả.",
        },
        {
          kind: "text",
          text: "Trong mạng cục bộ cũng vậy — việc trao đổi dữ liệu giữa các máy tuân thủ **giao thức Ethernet**, gồm bốn nhóm quy định chính:",
        },
        {
          kind: "cards",
          tone: "leaf",
          items: [
            {
              emoji: "🏷️",
              title: "Quy định về địa chỉ",
              text: "Mỗi thiết bị tham gia mạng đều có một **địa chỉ bằng số khác nhau đi theo phần cứng**, gọi là **địa chỉ MAC** (Media Access Control Address). Truyền dữ liệu trong mạng cục bộ sẽ căn cứ vào địa chỉ MAC.",
            },
            {
              emoji: "✅",
              title: "Quy định về mã kiểm tra",
              text: "Dữ liệu chuyển đi có **kèm theo một mã kiểm tra**. Máy nhận dùng mã này để **phát hiện lỗi truyền**; nếu có lỗi sẽ yêu cầu gửi lại dữ liệu.",
            },
            {
              emoji: "📦",
              title: "Quy định khung truyền dữ liệu",
              text: "Không thể truyền một lượng tin **dài không giới hạn** vì có thể làm quá tải máy nhận và cản trở các cuộc truyền khác. Việc truyền được thực hiện **theo từng gói dữ liệu có độ dài xác định**.",
            },
            {
              emoji: "💥",
              title: "Quy định xử lí xung đột",
              text: "Quy định về **cách thức xử lí các cuộc truyền khi xảy ra xung đột tín hiệu** — hiện tượng em đã học ở Bài 3.",
            },
          ],
        },
      ],
    },

    {
      id: "dia-chi-ip",
      emoji: "🏠",
      heading: "Địa chỉ IP",
      blocks: [
        {
          kind: "text",
          text: "Giao thức IP có **hai nội dung chính**: cách **đánh địa chỉ** và cách **định tuyến** để dẫn dữ liệu từ LAN của máy gửi đến LAN của máy nhận. Mục này học phần địa chỉ trước.",
        },
        {
          kind: "text",
          text: "Mỗi thiết bị tham gia Internet đều phải có địa chỉ. Hiện nay có hai loại là **IPv4** và **IPv6**; sách chỉ xét địa chỉ IPv4 và gọi tắt là **địa chỉ IP**. Mỗi địa chỉ IP là một số **4 byte**.",
        },
        {
          kind: "figure",
          diagram: "dia-chi-ip",
          caption: "Cùng một địa chỉ IP viết ở hai dạng: nhị phân và dot decimal",
        },
        {
          kind: "example",
          title: "Tự đổi thử một địa chỉ",
          text: "**11000000 10101000 00000001 00000011** → tách thành 4 byte, đổi từng byte sang thập phân: 11000000 = 192, 10101000 = 168, 00000001 = 1, 00000011 = 3 → địa chỉ là **192.168.1.3**. Đây chính là dải địa chỉ hay gặp trong mạng gia đình.",
        },
        {
          kind: "compare",
          left: {
            emoji: "🔒",
            title: "Địa chỉ MAC",
            items: [
              "**6 byte**",
              "**Gắn với phần cứng**, không thay đổi được",
              "Dùng để truyền dữ liệu **trong mạng cục bộ**",
            ],
          },
          right: {
            emoji: "🔁",
            title: "Địa chỉ IP",
            items: [
              "**4 byte** (với IPv4)",
              "**Được gán cho thiết bị**, có thể thay đổi nếu ta gán lại",
              "Dùng để truyền dữ liệu **giữa các mạng khác nhau**",
            ],
          },
        },
        {
          kind: "check",
          q: "Địa chỉ IP dưới dạng nhị phân 11000000 10101000 00001101 11010010 viết ở dạng thập phân là gì?",
          options: ["192.168.13.210", "192.168.14.208", "190.166.13.210", "192.186.13.212"],
          answer: 0,
          explain:
            "Đổi từng byte: 11000000 = 128+64 = **192**; 10101000 = 128+32+8 = **168**; 00001101 = 8+4+1 = **13**; 11010010 = 128+64+16+2 = **210**. Ghép lại theo kiểu dot decimal được **192.168.13.210**.",
        },
      ],
    },

    {
      id: "dinh-tuyen",
      emoji: "🧭",
      heading: "Định tuyến",
      blocks: [
        {
          kind: "text",
          text: "Nếu chuyển dữ liệu giữa **hai máy trong cùng một mạng cục bộ** thì chỉ cần địa chỉ MAC — máy tính chỉ nhận các gói dữ liệu có địa chỉ nhận **trùng với địa chỉ MAC của mình**.",
        },
        {
          kind: "text",
          text: "Nhưng khi hai máy **không nằm trong cùng một LAN** thì có hai trở ngại: không có đường cáp tín hiệu nối liền hai máy, và máy gửi cũng **không xác định trực tiếp được địa chỉ MAC** của máy nhận ở ngoài LAN của mình. Vì vậy dữ liệu phải được gửi **dựa trên địa chỉ IP**, và quá trình chuyển tiếp này đòi hỏi **sự hỗ trợ của router**.",
        },
        {
          kind: "note",
          text: "Router hoạt động như một **bộ chuyển mạch**, nó hướng dẫn dữ liệu “tìm đường” tới LAN của máy nhận. Khi dữ liệu **đã đến được LAN của máy nhận**, địa chỉ MAC sẽ được dùng để chuyển dữ liệu tới máy nhận cụ thể.",
        },
        {
          kind: "text",
          text: "Router có thể có nhiều cổng WAN nối với các router khác. Khi nhận được một gói dữ liệu, nó phải **chọn cổng thích hợp** để gửi tới đích. **Cách thức chọn cổng chính là nội dung chính của giao thức định tuyến.**",
        },
        {
          kind: "figure",
          diagram: "bang-dinh-tuyen",
          caption: "Định tuyến tĩnh: mỗi router có một bảng hướng dẫn nhóm địa chỉ nào đi cổng nào",
        },
        {
          kind: "example",
          title: "Bảng định tuyến giống hệt biển chỉ đường",
          text: "Router đóng vai trò như **các bưu cục chuyển tiếp bưu phẩm**, còn bảng định tuyến tương ứng với **bảng đường đi của các xe chuyển bưu phẩm**. Ví dụ bảng chỉ đường ở bưu cục Hải Dương có chỉ dẫn đi Quảng Ninh theo đường 37, đi Thái Bình theo đường 391, đi Hưng Yên theo đường 38B và đi Hà Nội theo **đường số 5 — đường mặc định** — nhưng **không có chỉ dẫn đi tới Cần Thơ**. Bưu phẩm đi Cần Thơ sẽ được chuyển theo đường mặc định về Hà Nội, sau đó được hướng dẫn đi tiếp.",
        },
        {
          kind: "compare",
          left: {
            emoji: "📌",
            title: "Định tuyến tĩnh",
            items: [
              "Mỗi router có một **bảng định tuyến** cố định",
              "Nhóm địa chỉ nào thì gửi theo cổng nào",
              "Địa chỉ không có trong bảng → đi **cổng mặc định**",
            ],
          },
          right: {
            emoji: "🔀",
            title: "Định tuyến động",
            items: [
              "**Thay đổi được cổng gửi đi** tuỳ điều kiện cụ thể",
              "*Bưu phẩm Hà Nội – Thái Bình thường qua Nam Định; nếu xe đi Nam Định quá tải mà có xe đi Hưng Yên thì đổi hành trình qua Hưng Yên rồi chuyển tiếp.*",
            ],
          },
        },
        {
          kind: "note",
          text: "**Lập địa chỉ** và **định tuyến theo địa chỉ** là các quy tắc đảm bảo liên kết các LAN trong phạm vi toàn cầu. Chúng làm thành **giao thức liên mạng** — Internet Protocol, viết tắt là **IP**.",
        },
        {
          kind: "check",
          q: "Một router có bảng định tuyến như hình trên. Nó nhận được gói dữ liệu gửi tới địa chỉ 45.62.8.1 — địa chỉ không khớp dòng nào trong bảng. Router xử lí thế nào?",
          options: [
            "Huỷ gói dữ liệu và báo lỗi cho máy gửi",
            "Gửi gói dữ liệu ra cổng mặc định",
            "Gửi lần lượt ra cả bốn cổng",
            "Giữ lại chờ đến khi bảng định tuyến được cập nhật",
          ],
          answer: 1,
          explain:
            "Các router **bao giờ cũng có một cổng mặc định**. Nếu địa chỉ đến không có trong bảng hướng dẫn thì gói dữ liệu **được gửi theo cổng mặc định** — giống bưu phẩm đi Cần Thơ được chuyển về Hà Nội rồi đi tiếp.",
        },
      ],
    },

    {
      id: "tcp",
      emoji: "📦",
      heading: "Giao thức TCP",
      blocks: [
        {
          kind: "example",
          title: "Một tình huống IP không giải quyết được",
          text: "Em đang **sao chép một tệp** vào thư mục chia sẻ trên máy của bạn, đồng thời dùng một phần mềm khác để **trò chuyện (chat)** với chính bạn ấy. Hai máy đang chạy hai phần mềm cùng lúc với hai nhóm dữ liệu khác nhau. Vậy làm sao dữ liệu của phần mềm này **không bị nhầm** sang phần mềm kia?",
        },
        {
          kind: "text",
          text: "Giao thức IP chỉ đảm bảo chuyển dữ liệu **từ mạng này đến mạng kia**, chứ **không đảm bảo chuyển dữ liệu đến một ứng dụng cụ thể trên một máy cụ thể**. Cần có quy định chi tiết hơn để đảm bảo kết nối tới **mức ứng dụng**, đồng thời đảm bảo việc truyền **tin cậy, không có sai sót**. Đó là việc của **TCP — Transmission Control Protocol**, giao thức kiểm soát việc truyền dữ liệu.",
        },
        {
          kind: "cards",
          tone: "coral",
          items: [
            {
              emoji: "🔢",
              title: "Cổng ứng dụng",
              text: "Mỗi ứng dụng được cấp phát một **số hiệu gọi là cổng ứng dụng**. Các gói dữ liệu chuyển đi được **gán nhãn cổng ứng dụng** để không lẫn giữa các ứng dụng.",
            },
            {
              emoji: "🧩",
              title: "Cắt gói và đánh số",
              text: "Tại nơi gửi, dữ liệu được **cắt ra thành nhiều gói có độ dài xác định**. TCP yêu cầu **đánh số các gói theo từng ứng dụng** để nơi nhận **ráp lại đúng thứ tự**.",
            },
            {
              emoji: "🤝",
              title: "Cơ chế xác nhận",
              text: "Quy định một **cơ chế xác nhận** để nơi gửi biết các gói tin đến **có sai sót hoặc thất lạc hay không**, để yêu cầu gửi lại khi cần.",
            },
          ],
        },
        {
          kind: "figure",
          diagram: "tcp-cat-goi",
          caption: "Vì sao phải đánh số gói: các gói đi những đường khác nhau nên đến nơi không đúng thứ tự",
        },
        {
          kind: "text",
          text: "Việc tách dữ liệu thành nhiều gói còn có một lợi ích lớn nữa: cho phép **nhiều cuộc truyền khác nhau được thực hiện xen kẽ nhau trên cùng một đường truyền vật lí**, giúp tận dụng được đường truyền.",
        },
        {
          kind: "example",
          title: "So sánh với gọi điện thoại bàn",
          text: "Khi gọi điện thoại giữa hai máy để bàn, mỗi cuộc gọi **độc chiếm kênh truyền suốt thời gian nói chuyện**. Nhưng gọi điện qua Internet có thể thực hiện **đồng thời hàng trăm cuộc gọi trên cùng một đường truyền vật lí** — chính là nhờ dữ liệu được cắt thành các gói nhỏ đi xen kẽ nhau.",
        },
        {
          kind: "check",
          q: "Đã có giao thức IP dẫn dữ liệu tới đúng máy nhận rồi, vì sao vẫn cần thêm giao thức TCP?",
          options: [
            "Vì IP chỉ chạy được trên mạng có dây, không có Wi-Fi",
            "Vì IP không đảm bảo đúng ứng dụng, đúng thứ tự, không lỗi",
            "Vì IP không dùng được địa chỉ MAC của máy nhận",
            "Vì TCP đã thay thế hoàn toàn cho giao thức IP",
          ],
          answer: 1,
          explain:
            "IP chỉ đảm bảo chuyển dữ liệu **từ mạng này đến mạng kia**. TCP bổ sung ba việc IP không làm: gán **cổng ứng dụng** để dữ liệu không lẫn giữa các phần mềm, **đánh số gói** để ráp lại đúng thứ tự, và **cơ chế xác nhận** để phát hiện sai sót hay thất lạc mà yêu cầu gửi lại.",
        },
      ],
    },

    {
      id: "tcp-ip",
      emoji: "🌍",
      heading: "Vì sao gọi là TCP/IP",
      blocks: [
        {
          kind: "text",
          text: "Có nhiều giao thức liên quan đến Internet, không chỉ hai giao thức vừa học. Hai cái em gặp hằng ngày:",
        },
        {
          kind: "cards",
          tone: "gold",
          items: [
            {
              emoji: "🌐",
              title: "HTTP",
              text: "**Hypertext Transmission Protocol** — giao thức quy định cách **biểu diễn (mã hoá) các trang web**.",
            },
            {
              emoji: "🔤",
              title: "DNS",
              text: "**Domain Name System** — cho phép dùng **hệ thống tên bằng chữ thay thế cho địa chỉ IP** vốn khó nhớ. *Ví dụ dùng moet.edu.vn thay cho địa chỉ máy chủ của Bộ Giáo dục và Đào tạo.*",
            },
          ],
        },
        {
          kind: "text",
          text: "Trong số các giao thức đó, **hai giao thức IP và TCP xác định cách kết nối và trao đổi dữ liệu có tính đặc thù của mạng toàn cầu này**. Chính vì thế người ta thường coi Internet là mạng toàn cầu hoạt động theo giao thức **TCP/IP**.",
        },
        {
          kind: "note",
          text: "**IP** quy định cách thiết lập địa chỉ cho các thiết bị tham gia mạng và cách dẫn đường các gói dữ liệu theo địa chỉ từ thiết bị gửi đến thiết bị nhận. **TCP** đảm bảo việc truyền dữ liệu **theo từng ứng dụng** một cách chính xác, tin cậy và hiệu quả.",
        },
        {
          kind: "example",
          title: "Thử một giao thức ngay trên máy em",
          text: "Giao thức **ICMP** (Internet Control Message Protocol) cho phép gửi một yêu cầu đến máy khác để lấy thông tin phản hồi. Ứng dụng quen thuộc nhất của nó là **lệnh ping** — mở Command Prompt rồi gõ `ping vnexpress.net` là biết máy em có kết nối được tới đó không, mất bao nhiêu mili giây.",
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
          text: "Kiến thức về Giao thức mạng có nhiều thuật ngữ tiếng Anh và con số dễ nhầm. Dưới đây là các **mẹo liên tưởng thực tế** giúp em nhớ nhanh và **bảng cảnh báo các bẫy câu chữ** hay gặp nhất trong đề thi trắc nghiệm.",
        },
        {
          kind: "cards",
          tone: "leaf",
          items: [
            {
              emoji: "🏠",
              title: "IP vs Cổng: Nhà và Số phòng",
              text: "Địa chỉ **IP** dẫn dữ liệu đến đúng **ngôi nhà (máy tính)**; **Cổng ứng dụng** dẫn vào đúng **căn phòng (phần mềm Web, Chat, Mail)**.",
            },
            {
              emoji: "🚦",
              title: "MAC vs IP: Trong phòng và Ra ngoài",
              text: "**MAC** dùng liên lạc **trong nội bộ mạng LAN** (gắn cứng phần cứng); **IP** dùng liên lạc **ra ngoài mạng Internet** (được gán, đổi được).",
            },
            {
              emoji: "✉️",
              title: "SMTP vs POP3/IMAP: Gửi và Nhận",
              text: "**S**MTP = **S**end (giao thức dùng để **gửi thư**); **P**OP3 / IMAP = **P**ull / get (giao thức dùng để **nhận/tải thư về** máy).",
            },
            {
              emoji: "📦",
              title: "IP vs TCP: Dẫn đường và Chất lượng",
              text: "**IP** lo dẫn đường đi từ mạng này sang mạng khác; **TCP** lo cắt gói, đánh số, kiểm tra lỗi và xác nhận để dữ liệu không bị thất lạc.",
            },
          ],
        },
        {
          kind: "compare",
          left: {
            emoji: "❌",
            title: "Bẫy câu chữ đề thi hay gài",
            items: [
              "IPv4 dài **4 bit** hoặc **32 byte**",
              "Địa chỉ MAC có thể **tự do thay đổi**",
              "Giao thức IP lo việc **gửi đúng phần mềm**",
              "Không tìm thấy đường đi thì **huỷ gói ngay**",
              "SMTP dùng cho cả **gửi và nhận thư**",
            ],
          },
          right: {
            emoji: "✅",
            title: "Bản chất chính xác cần chọn",
            items: [
              "IPv4 dài **4 byte (32 bit)**; MAC dài **6 byte**",
              "MAC **gắn cứng phần cứng**; IP mới **thay đổi được**",
              "**TCP** mới lo mức phần mềm (qua số hiệu cổng)",
              "Chuyển qua **cổng mặc định** để tìm đường tiếp",
              "**SMTP chỉ gửi**; nhận thư là **POP3 hoặc IMAP**",
            ],
          },
        },
        {
          kind: "check",
          q: "Phát biểu nào sau đây là **CHÍNH XÁC** về các giao thức và địa chỉ mạng?",
          options: [
            "Địa chỉ IPv4 gồm 4 byte, địa chỉ MAC gồm 6 byte gắn cứng",
            "Địa chỉ IPv4 gồm 4 bit, địa chỉ MAC gồm 6 bit gắn cứng",
            "Giao thức SMTP dùng nhận thư, POP3 dùng để gửi thư đi",
            "Khi không tìm thấy đường đi, router lập tức huỷ bỏ gói tin",
          ],
          answer: 0,
          explain:
            "**Địa chỉ IPv4 gồm 4 byte (32 bit)**, còn **địa chỉ MAC gồm 6 byte (48 bit) gắn với phần cứng**. Các câu còn lại đều là bẫy: SMTP là gửi thư, POP3 là nhận thư; router chuyển gói tin qua cổng mặc định chứ không huỷ ngay.",
        },
      ],
    },
  ],

  summary: [
    "**Giao thức mạng** (network protocol) là **tập hợp các quy định về cách thức giao tiếp để truyền dữ liệu giữa các đối tượng tham gia mạng**, giúp việc gửi nhận chính xác, tin cậy và hiệu quả.",
    "Giao thức **Ethernet** trong mạng cục bộ gồm bốn nhóm quy định: **địa chỉ MAC – mã kiểm tra – khung truyền dữ liệu – xử lí xung đột tín hiệu**.",
    "**Địa chỉ IP (IPv4) là số 4 byte**, viết kiểu dot decimal. Khác với **địa chỉ MAC 6 byte gắn cứng không đổi được**, địa chỉ IP **được gán và có thể thay đổi**.",
    "**Định tuyến**: router tra **bảng định tuyến** để chọn cổng gửi đi; địa chỉ không có trong bảng thì đi theo **cổng mặc định**. Định tuyến **tĩnh** dùng bảng cố định, định tuyến **động** đổi cổng tuỳ điều kiện.",
    "**IP** lo phần **địa chỉ và dẫn đường** giữa các mạng. **TCP** lo phần **cổng ứng dụng, cắt gói – đánh số – ráp lại đúng thứ tự và cơ chế xác nhận**.",
    "Internet là mạng toàn cầu hoạt động theo giao thức **TCP/IP** — vì hai giao thức này xác định cách kết nối và trao đổi dữ liệu đặc thù của nó.",
  ],
};

export default theory;
