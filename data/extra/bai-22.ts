import type { LessonExtra } from "@/lib/types";

// Bài 22. Thực hành kết nối các thiết bị số — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b22-tf1",
      context:
        "Trước buổi thực hành, thầy giáo ôn lại lí thuyết mục 1a với cả lớp về thiết bị hiển thị và bluetooth. Bạn Nam phát biểu vài nhận định, cả lớp cùng nhận xét đúng, sai.",
      code: "",
      statements: [
        {
          text: "Thiết bị hiển thị là các thiết bị điện tử dùng để hiển thị hình ảnh, văn bản hoặc thông tin trực quan trên màn hình cho người dùng quan sát.",
          answer: true,
          explain: "Đúng theo định nghĩa của SGK về thiết bị hiển thị, ví dụ ti vi, máy chiếu, bảng cảm ứng, bảng LED.",
        },
        {
          text: "Cổng VGA và cổng HDMI là hai loại cổng kết nối phổ biến của các thiết bị hiển thị được SGK nêu tên.",
          answer: true,
          explain: "Đúng, SGK nêu: phần lớn thiết bị hiển thị có nhiều loại cổng kết nối như VGA (Vector Graphic Arrays), HDMI (High-Definition Multimedia Interface).",
        },
        {
          text: "Bluetooth là công nghệ kết nối có dây, chỉ hoạt động khi hai thiết bị được nối trực tiếp bằng cáp tín hiệu.",
          answer: false,
          explain: "Sai. Bluetooth là công nghệ kết nối KHÔNG DÂY qua sóng vô tuyến điện, dùng để truyền tải dữ liệu giữa các thiết bị số ở khoảng cách gần, không cần dây cáp.",
        },
        {
          text: "Theo SGK, chỉ có điện thoại di động mới hỗ trợ kết nối bluetooth, các thiết bị khác như tai nghe, loa, bàn phím đều không hỗ trợ.",
          answer: false,
          explain: "Sai. SGK nêu: ngày nay các thiết bị số như điện thoại di động, máy tính, tai nghe, loa, bàn phím, chuột và nhiều thiết bị khác đều hỗ trợ kết nối công nghệ bluetooth.",
        },
      ],
    },
    {
      id: "b22-tf2",
      context:
        "Nhóm bạn Hà tìm hiểu về nhà thông minh (mục 1b) trước khi làm Nhiệm vụ 3. Hà tóm tắt lại vài ý cho nhóm, bạn Phúc phản biện một số điểm.",
      code: "",
      statements: [
        {
          text: "Nhà thông minh là loại nhà được trang bị thiết bị và hệ thống công nghệ thông minh để tăng cường tiện ích, hiệu suất, bảo mật và khả năng quản lí.",
          answer: true,
          explain: "Đúng theo định nghĩa Nhà thông minh (Smart Home) trong SGK.",
        },
        {
          text: "Hệ thống điều khiển nhà thông minh phổ biến nhất giao tiếp với người dùng qua giao diện ứng dụng trên điện thoại thông minh hoặc máy tính bảng.",
          answer: true,
          explain: "Đúng, SGK nêu: hệ thống điều khiển có thể giao tiếp qua bảng cảm ứng hoặc web, nhưng phổ biến hơn cả là qua ứng dụng trên điện thoại thông minh hay máy tính bảng.",
        },
        {
          text: "Lần đầu thiết lập kết nối thiết bị thông minh, điện thoại kết nối thẳng với thiết bị qua Internet, không cần bất kì kết nối gần nào trước đó.",
          answer: false,
          explain: "Sai. SGK nêu ngược lại: lần đầu tiên phải dùng điện thoại kết nối GẦN với thiết bị thông minh qua bluetooth hoặc sóng Wi-Fi, không dùng Internet — sau đó mới thiết lập kết nối thiết bị với Internet qua router.",
        },
        {
          text: "Cùng với việc kết nối lần đầu, phần mềm sẽ lưu thiết bị của nhà thông minh vào danh bạ liên hệ của điện thoại, không liên quan gì tới cơ sở dữ liệu đám mây.",
          answer: false,
          explain: "Sai. SGK nêu: phần mềm sẽ đăng kí thiết bị vào cơ sở dữ liệu trên đám mây (Cloud) của nhà cung cấp dịch vụ, để thiết bị thường xuyên cập nhật trạng thái lên đó — không phải lưu vào danh bạ điện thoại.",
        },
      ],
    },
    {
      id: "b22-tf3",
      context:
        "Trong giờ thực hành Nhiệm vụ 1 và 2, bạn Long thao tác trên máy tính của mình rồi kể lại cho bạn Vy nghe những gì đã làm. Vy nghe xong đưa ra vài nhận định để cùng kiểm tra lại.",
      code: "",
      statements: [
        {
          text: "Long dùng tổ hợp phím Windows + P để mở giao diện thiết lập chế độ hiển thị màn hình mở rộng, đúng như hướng dẫn ở Nhiệm vụ 1.",
          answer: true,
          explain: "Đúng theo SGK: nhấn tổ hợp phím Windows + P để làm xuất hiện giao diện thiết lập chế độ hiển thị màn hình mở rộng (Hình 22.3).",
        },
        {
          text: "Long chọn chế độ Extend nên màn hình mở rộng chỉ là bản sao giống hệt màn hình máy tính, không kéo thả cửa sổ qua lại được.",
          answer: false,
          explain: "Sai, Long nhầm với chế độ Duplicate. Ở chế độ Extend, màn hình mở rộng là phần TIẾP NỐI của màn hình máy tính, có thể kéo thả cửa sổ ứng dụng qua lại giữa hai màn hình.",
        },
        {
          text: "Vì máy tính của Long là máy tính xách tay nên có sẵn khả năng kết nối bluetooth, không cần cắm thêm bảng mạch mở rộng.",
          answer: true,
          explain: "Đúng theo SGK: máy tính xách tay thường có sẵn khả năng kết nối bluetooth, khác với máy tính để bàn thường không có sẵn, phải cắm thêm bảng mạch mở rộng.",
        },
        {
          text: "Để ghép đôi bluetooth, Long chỉ cần bật bluetooth trên máy tính, còn điện thoại không cần bật bluetooth thì hai máy vẫn tìm thấy nhau bình thường.",
          answer: false,
          explain: "Sai. Cả hai thiết bị đều phải bật bluetooth (Bước 1) thì máy tính mới quét tìm thấy điện thoại; sau đó mới thực hiện Show Bluetooth Devices → Add a Device để ghép đôi.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b22-es1",
      q: "Trình bày khái niệm nhà thông minh (Smart Home) và giải thích cách thức đặc biệt để thiết lập kết nối lần đầu giữa điện thoại với một thiết bị trong nhà thông minh (như ổ điện thông minh, camera thông minh) qua Internet.",
      answer:
        "* Khái niệm: Nhà thông minh (Smart Home) là loại nhà được trang bị các thiết bị và hệ thống công nghệ thông minh để tăng cường tiện ích, hiệu suất, bảo mật và khả năng quản lí. Các thiết bị, hệ thống trong nhà có khả năng tự động hoá hoặc được kiểm soát từ xa thông qua thiết bị di động hoặc máy tính. Mục tiêu là tạo môi trường sống thoải mái, tiết kiệm năng lượng và an toàn hơn.\n\n* Cách thức thiết lập kết nối đặc biệt: Vì hầu hết thiết bị thông minh không có giao diện làm việc trực tiếp, nên:\n1. Lần đầu tiên, dùng chính điện thoại đã cài phần mềm điều khiển nhà thông minh để kết nối GẦN với thiết bị thông minh mà KHÔNG dùng Internet — thực hiện kết nối qua bluetooth hoặc sóng Wi-Fi.\n2. Khi đã kết nối được, dùng giao diện phần mềm trên điện thoại để thiết lập kết nối giữa thiết bị thông minh với mạng cục bộ, từ đó thiết bị kết nối được với Internet qua router của mạng cục bộ.\n3. Cùng với việc kết nối này, phần mềm sẽ đăng kí thiết bị vào cơ sở dữ liệu trên đám mây (Cloud) của nhà cung cấp dịch vụ — để thiết bị thường xuyên cập nhật trạng thái của mình lên cơ sở dữ liệu.\n4. Những lần sau, khi làm việc, phần mềm điều khiển trên điện thoại sẽ truy cập tới cơ sở dữ liệu để lấy thông tin trạng thái của thiết bị rồi thiết lập kết nối, mà không cần lặp lại bước kết nối gần ban đầu.",
    },
    {
      id: "b22-es2",
      q: "Trình bày các bước thực hành kết nối điện thoại với thiết bị trong nhà thông minh qua Internet (Nhiệm vụ 3), lấy ví dụ công tắc đèn bảo vệ có hẹn giờ tự động.",
      answer:
        "* Bước 1. Cài đặt phần mềm: Chọn và cài đặt một app nhà thông minh phù hợp với thiết bị (ví dụ Vhome, Rangdong Smart, FPT Life, Mi Home...) từ CH Play (Android) hay Apple Store (iOS). Khi cài đặt, app yêu cầu đăng kí tài khoản (thường bằng số điện thoại hoặc địa chỉ thư điện tử) và mật khẩu.\n\n* Bước 2. Kết nối thiết bị lần đầu: Cấp nguồn cho bộ công tắc thông minh, kết nối điện thoại với Wi-Fi do công tắc phát ra để truy cập Internet (đặt điện thoại, công tắc và bộ phát Wi-Fi WAP gần nhau). Trên app, chọn chức năng Thêm thiết bị, chọn đúng loại thiết bị (ví dụ Công tắc Wi-Fi). Xác nhận đèn báo trên thiết bị đang nhấp nháy (trạng thái chờ kết nối), sau đó chọn WAP nhà có Internet và nhập mật khẩu Wi-Fi để thiết bị tự thiết lập kết nối Internet. Hoàn tất sẽ có thông báo \"Thêm thiết bị thành công\".\n\n* Bước 3. Thiết lập chế độ làm việc và điều khiển thiết bị: Chạm vào biểu tượng thiết bị trên app để mở giao diện cấu hình, điều khiển riêng của thiết bị đó (ví dụ 3 phím công tắc ảo tương ứng 3 công tắc thực). Có thể đặt tên dễ nhớ cho từng công tắc (ví dụ \"Đèn bảo vệ\", \"Van nước tưới cây\"). Dùng chức năng Hẹn giờ để thiết lập lịch tự động: ví dụ bật đèn bảo vệ lúc 18 giờ 30 phút các ngày từ thứ Hai đến thứ Sáu, tắt đèn lúc 5 giờ sáng các ngày từ thứ Ba đến thứ Bảy.\n\nCác thiết bị thông minh khác (van nước, camera...) cũng được kết nối và điều khiển theo cách tương tự, chỉ khác giao diện app tuỳ nhà cung cấp.",
    },
  ],
};

export default extra;
