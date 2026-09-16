import type { LessonExtra } from "@/lib/types";

// Bài 4. Giao thức mạng — câu đúng/sai + tự luận (SGK trang 21-25)
const extra: LessonExtra = {
  tf: [
    {
      id: "b4-tf1",
      context:
        "Bạn Mai soạn thư điện tử nộp bài tập cho cô giáo. Ngoài nội dung bài làm, phần mềm còn tự ghi thêm địa chỉ người gửi, địa chỉ người nhận và đính kèm một tệp văn bản. Mai gõ nhầm một chữ trong địa chỉ của cô nên vài phút sau nhận được một thư báo lỗi chuyển ngược về hộp thư của mình. Mai sửa lại địa chỉ rồi gửi lần nữa thì cô nhận được, mở ra vẫn đọc được đủ cả nội dung lẫn tệp đính kèm.",
      statements: [
        {
          text: "Địa chỉ thư điện tử có dạng <tên tài khoản>@<tên miền của máy chủ thư điện tử>.",
          answer: true,
          explain:
            "Đó chính là định dạng sách nêu, ví dụ nguyenquang2003@gmail.com hay hungmanhk66@vnu.edu.vn. Đây là một trong các quy định làm rõ định dạng và ý nghĩa của các thành phần dữ liệu trong thư.",
        },
        {
          text: "Thư báo lỗi chuyển ngược về là do máy chủ thư điện tử không tìm thấy người nhận đúng địa chỉ.",
          answer: true,
          explain:
            "Máy chủ thư điện tử xử lí thư đến: nếu có người nhận đúng như địa chỉ thì lưu vào hộp thư của người nhận; ngược lại nó tạo một thư báo lỗi chuyển ngược lại người gửi.",
        },
        {
          text: "Các quy định về cách gửi và nhận thư điện tử không được coi là giao thức mạng, vì thư không phải là dữ liệu.",
          answer: false,
          explain:
            "Ngược lại, đây chính là ví dụ sách dùng để dẫn vào khái niệm giao thức mạng. Quy định về gửi thư là giao thức SMTP, quy định về lấy thư là POP3 hoặc IMAP.",
        },
        {
          text: "Vì Mai và cô giáo dùng chung một nhà cung cấp thư điện tử nên không cần tuân theo giao thức nào cả.",
          answer: false,
          explain:
            "Tất cả các hoạt động truyền thông trên mạng đều cần có giao thức để việc gửi, nhận dữ liệu được chính xác, tin cậy và hiệu quả — không phụ thuộc vào việc dùng chung hay khác nhà cung cấp.",
        },
      ],
    },
    {
      id: "b4-tf2",
      context:
        "Phòng máy của trường có 30 máy tính nối vào cùng một switch. Thầy giáo mở phần thông tin mạng và chỉ cho học sinh thấy mỗi máy có hai loại địa chỉ: một địa chỉ gắn sẵn theo card mạng không đổi được, và một địa chỉ dạng 192.168.1.x do router cấp, có thể đặt lại. Khi hai máy trong phòng chép tệp cho nhau thì dữ liệu đi thẳng qua switch. Còn khi một máy mở trang web của Bộ Giáo dục và Đào tạo thì dữ liệu phải qua router rồi mới ra Internet.",
      statements: [
        {
          text: "Địa chỉ gắn sẵn theo card mạng, không đổi được, là địa chỉ MAC dài 6 byte.",
          answer: true,
          explain:
            "MAC (Media Access Control Address) là địa chỉ bằng số 6 byte đi theo phần cứng và không thay đổi được — đúng như mô tả về chiếc card mạng của máy.",
        },
        {
          text: "Địa chỉ dạng 192.168.1.x là địa chỉ IP, dài 4 byte và có thể gán lại được.",
          answer: true,
          explain:
            "Địa chỉ IP là một số 4 byte, viết theo kiểu dot decimal. Khác với MAC, IP được gán cho thiết bị và có thể thay đổi nếu ta gán lại.",
        },
        {
          text: "Khi hai máy trong cùng phòng chép tệp cho nhau, phải dùng địa chỉ IP thì dữ liệu mới tới đúng máy.",
          answer: false,
          explain:
            "Chuyển dữ liệu giữa hai máy trong cùng một mạng cục bộ thì chỉ cần địa chỉ MAC; máy tính chỉ nhận các gói có địa chỉ nhận trùng địa chỉ MAC của mình.",
        },
        {
          text: "Khi ra Internet, router sẽ dùng địa chỉ MAC của máy chủ Bộ Giáo dục và Đào tạo để dẫn đường tới đó.",
          answer: false,
          explain:
            "Máy gửi không thể xác định trực tiếp địa chỉ MAC của một máy nằm ngoài LAN của mình. Dữ liệu được gửi dựa trên địa chỉ IP; chỉ khi đã tới được LAN của máy nhận thì địa chỉ MAC mới được dùng để chuyển tới máy nhận cụ thể.",
        },
      ],
    },
    {
      id: "b4-tf3",
      context:
        "Bạn Páo vừa tải một tệp video dung lượng lớn từ Internet về, vừa nhắn tin với bạn Dín bằng một phần mềm khác trên cùng chiếc máy tính. Cả hai luồng dữ liệu đều đi qua cùng một đường truyền vào nhà Páo nhưng không hề lẫn vào nhau. Thỉnh thoảng đường truyền chập chờn, một vài phần dữ liệu bị thất lạc, nhưng cuối cùng tệp video vẫn tải về đầy đủ và mở ra xem được bình thường.",
      statements: [
        {
          text: "Hai luồng dữ liệu không lẫn vào nhau là nhờ TCP gán nhãn cổng ứng dụng cho từng gói.",
          answer: true,
          explain:
            "Mỗi ứng dụng được cấp phát một số hiệu gọi là cổng ứng dụng; các gói dữ liệu chuyển đi được gán nhãn cổng ứng dụng để không lẫn giữa các ứng dụng.",
        },
        {
          text: "Việc phần dữ liệu thất lạc vẫn được bù lại là nhờ cơ chế xác nhận của TCP để yêu cầu gửi lại.",
          answer: true,
          explain:
            "TCP quy định một cơ chế xác nhận để nơi gửi biết các gói tin đến có sai sót hoặc thất lạc hay không, từ đó yêu cầu gửi lại khi cần.",
        },
        {
          text: "Vì tệp video rất lớn nên nó được truyền nguyên vẹn trong một lần chứ không cắt thành gói.",
          answer: false,
          explain:
            "Ngược lại: tại nơi gửi, dữ liệu được cắt ra thành nhiều gói có độ dài xác định. Nhờ vậy nhiều cuộc truyền khác nhau mới thực hiện xen kẽ được trên cùng một đường truyền vật lí.",
        },
        {
          text: "Các gói dữ liệu luôn về tới máy Páo đúng theo thứ tự đã gửi nên không cần đánh số.",
          answer: false,
          explain:
            "Các gói có thể lưu ở các router với thời gian khác nhau và đi theo đường khác nhau nên gói gửi sau lại đến trước. Chính vì thế TCP yêu cầu đánh số các gói theo từng ứng dụng để nơi nhận ráp lại đúng thứ tự.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b4-es1",
      q: "Giao thức mạng là gì và có ý nghĩa như thế nào? Lấy giao thức Ethernet làm ví dụ, cho biết giao thức này gồm những nhóm quy định nào.",
      answer:
        "* KHÁI NIỆM: Giao thức mạng (network protocol), còn gọi là giao thức truyền thông, là tập hợp các quy định về cách thức giao tiếp giữa các đối tượng tham gia truyền nhận dữ liệu qua mạng.\n\n* Ý NGHĨA: các quy định này làm rõ ĐỊNH DẠNG và Ý NGHĨA của các thành phần dữ liệu, qua đó xác định CÁCH THỨC XỬ LÍ dữ liệu của phần mềm gửi và nhận. Nhờ đó việc gửi và nhận dữ liệu được thực hiện chính xác, tin cậy và hiệu quả. Mọi hoạt động truyền thông trên mạng đều cần có giao thức.\n\n* VÍ DỤ 1 — THƯ ĐIỆN TỬ:\n- Địa chỉ có dạng <tên tài khoản>@<tên miền của máy chủ thư điện tử>.\n- Phần mềm soạn thư theo định dạng đã định, đóng gói nội dung thư, địa chỉ người gửi, người nhận và tệp đính kèm rồi chuyển tới máy chủ thư điện tử của người nhận.\n- Máy chủ lưu thư vào hộp thư người nhận, hoặc tạo thư báo lỗi chuyển ngược lại người gửi.\n- Quy định về gửi thư là giao thức SMTP; quy định về lấy thư là POP3 hoặc IMAP.\n\n* VÍ DỤ 2 — GIAO THỨC ETHERNET (truyền tin trong mạng cục bộ), gồm bốn nhóm quy định:\n\n1. QUY ĐỊNH VỀ ĐỊA CHỈ — mỗi thiết bị tham gia mạng có một địa chỉ bằng số khác nhau đi theo phần cứng, gọi là địa chỉ MAC. Truyền dữ liệu trong mạng cục bộ căn cứ vào địa chỉ MAC.\n\n2. QUY ĐỊNH VỀ MÃ KIỂM TRA — dữ liệu chuyển đi có kèm một mã kiểm tra; máy nhận dùng mã này để phát hiện lỗi truyền, nếu có lỗi thì yêu cầu gửi lại dữ liệu.\n\n3. QUY ĐỊNH KHUNG TRUYỀN DỮ LIỆU — không thể truyền một lượng tin dài không giới hạn trong khoảng thời gian không định trước vì có thể làm quá tải máy nhận và cản trở các cuộc truyền khác; việc truyền được thực hiện theo từng gói dữ liệu có độ dài xác định.\n\n4. QUY ĐỊNH VỀ CÁCH THỨC XỬ LÍ các cuộc truyền khi xảy ra xung đột tín hiệu.",
    },
    {
      id: "b4-es2",
      q: "Nêu nội dung và ý nghĩa của giao thức IP. Nêu nội dung và ý nghĩa của giao thức TCP.",
      answer:
        "* GIAO THỨC IP (Internet Protocol — giao thức liên mạng)\n\nNội dung gồm hai phần chính: CÁCH ĐÁNH ĐỊA CHỈ và ĐỊNH TUYẾN, để dẫn dữ liệu từ LAN của máy gửi đến LAN của máy nhận.\n\n1. Địa chỉ IP\n- Mọi thiết bị tham gia Internet đều phải có địa chỉ. Có hai loại là IPv4 và IPv6.\n- Mỗi địa chỉ IPv4 là một số 4 byte, viết theo kiểu \"dot decimal\": mỗi byte viết trong hệ thập phân, phân tách bởi dấu chấm (ví dụ 10.25.0.255).\n- Khác với địa chỉ MAC: MAC dài 6 byte, gắn với phần cứng, không thay đổi được; IP dài 4 byte, được gán cho thiết bị và có thể thay đổi nếu gán lại.\n\n2. Định tuyến\n- Trong cùng một LAN chỉ cần địa chỉ MAC. Khi hai máy ở hai LAN khác nhau, dữ liệu được gửi dựa trên địa chỉ IP và cần router hỗ trợ.\n- Router hoạt động như một bộ chuyển mạch, hướng dẫn dữ liệu \"tìm đường\" tới LAN của máy nhận; tới nơi rồi thì địa chỉ MAC mới được dùng để chuyển tới máy nhận cụ thể.\n- Định tuyến tĩnh: mỗi router có một bảng định tuyến ghi nhóm địa chỉ nào gửi theo cổng nào; luôn có một cổng mặc định dùng khi địa chỉ đến không có trong bảng.\n- Định tuyến động: cho phép thay đổi cổng gửi đi tuỳ điều kiện cụ thể.\n\nÝ NGHĨA: lập địa chỉ và định tuyến theo địa chỉ là các quy tắc bảo đảm liên kết được các LAN trong phạm vi toàn cầu.\n\n* GIAO THỨC TCP (Transmission Control Protocol — giao thức kiểm soát việc truyền dữ liệu)\n\nLí do cần TCP: giao thức IP chỉ đảm bảo chuyển dữ liệu từ mạng này đến mạng kia, KHÔNG đảm bảo chuyển dữ liệu đến một ứng dụng cụ thể trên một máy cụ thể; ngoài ra còn cần bảo đảm truyền tin cậy, không sai sót.\n\nNội dung chính:\n1. Mỗi ứng dụng được cấp phát một số hiệu gọi là CỔNG ỨNG DỤNG; các gói dữ liệu được gán nhãn cổng ứng dụng để không lẫn giữa các ứng dụng.\n2. Tại nơi gửi, dữ liệu được CẮT THÀNH NHIỀU GÓI có độ dài xác định. Vì các gói có thể lưu ở router với thời gian khác nhau và đi theo đường khác nhau nên gói gửi sau có thể đến trước; TCP yêu cầu ĐÁNH SỐ các gói theo từng ứng dụng để nơi nhận ráp lại đúng thứ tự.\n3. Quy định một CƠ CHẾ XÁC NHẬN để nơi gửi biết các gói tin đến có sai sót hay thất lạc không, từ đó yêu cầu gửi lại khi cần.\n\nÝ NGHĨA: TCP bảo đảm việc truyền dữ liệu theo từng ứng dụng một cách chính xác, tin cậy và hiệu quả. Việc tách dữ liệu thành nhiều gói còn cho phép nhiều cuộc truyền thực hiện xen kẽ trên cùng một đường truyền vật lí — khác với gọi điện thoại bàn, mỗi cuộc gọi độc chiếm kênh truyền suốt thời gian nói chuyện.\n\n* KẾT LUẬN: hai giao thức IP và TCP xác định cách thức kết nối và trao đổi dữ liệu có tính đặc thù của mạng toàn cầu, vì thế người ta thường coi Internet là mạng toàn cầu hoạt động theo giao thức TCP/IP.",
    },
  ],
};

export default extra;
