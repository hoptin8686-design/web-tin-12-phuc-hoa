import type { Question, TFQuestion } from "@/lib/types";

// Ngân hàng câu hỏi chủ đề "11E — Giới thiệu các hệ cơ sở dữ liệu", SGK Tin
// học 11 ICT (Kết nối tri thức): CSDL_MCQ bám Bài 10–15 (trang 49–77),
// CSDL_TF_THUC_HANH bám Bài 17 (trang 81–85, MySQL/HeidiSQL).
//
// Soạn RIÊNG cho tính năng Thi thử QĐ 764 (xem lib/thithu.ts) — đây là chủ đề
// duy nhất trong ma trận D1/D2 mà web này (chỉ dạy lớp 12) không có sẵn.
// KHÔNG đăng ký vào data/curriculum.ts / lib/questions.ts / lib/extras.ts vì
// không phải một bài luyện tập độc lập của chương trình lớp 12 — chỉ dùng
// làm nguồn trộn đề cho /thi-thu, không hiện thành thẻ bài trên trang chủ.
//
// Quy mô "vừa đủ dùng" (đã bàn với giáo viên 2026-08-07): không soạn đầy đủ
// từng bài theo khuôn 16-19 câu/bài như lớp 12, mà gộp thành một ngân hàng
// chung đủ đa dạng để trộn ngẫu nhiên 4 câu D1 và 1 câu D2 mỗi lần thi.

export const CSDL_MCQ: Question[] = [
  {
    id: "csdl-01",
    q: "Theo SGK, cơ sở dữ liệu (CSDL) là gì?",
    options: [
      "Tập dữ liệu liên quan, lưu trữ có tổ chức trên máy tính",
      "Phần mềm chuyên dụng dùng để quản lí và khai thác dữ liệu",
      "Toàn bộ các tệp văn bản được lưu trữ trên máy tính cá nhân",
      "Một ngôn ngữ lập trình dùng riêng để truy vấn dữ liệu",
    ],
    answer: 0,
    explain:
      "SGK định nghĩa: **CSDL là một tập hợp dữ liệu có liên quan với nhau, được lưu trữ một cách có tổ chức trên hệ thống máy tính**. Phần mềm quản lí dữ liệu là hệ quản trị CSDL, không phải CSDL.",
  },
  {
    id: "csdl-02",
    q: "Hạn chế việc lưu trữ trùng lặp cùng một dữ liệu ở nhiều nơi thể hiện thuộc tính nào của CSDL?",
    options: ["Tính độc lập dữ liệu", "Tính không dư thừa", "Tính toàn vẹn", "Tính nhất quán"],
    answer: 1,
    explain:
      "**Tính không dư thừa** yêu cầu hạn chế lưu trữ dữ liệu trùng lặp — dữ liệu trùng lặp vừa tốn dung lượng vừa dễ dẫn tới ghi nhầm, sai lệch giữa các bản sao.",
  },
  {
    id: "csdl-03",
    q: "Khả năng phần mềm ứng dụng không cần sửa lại khi cách tổ chức, lưu trữ dữ liệu bên trong CSDL thay đổi, gọi là gì?",
    options: ["Tính cấu trúc", "Tính toàn vẹn", "Tính độc lập dữ liệu", "Tính bảo mật"],
    answer: 2,
    explain:
      "**Tính độc lập dữ liệu**: các mô đun phần mềm ứng dụng không cần biết chi tiết kĩ thuật lưu trữ, nên không phải sửa lại khi cách tổ chức dữ liệu bên trong CSDL thay đổi.",
  },
  {
    id: "csdl-04",
    q: "Yêu cầu \"điểm đánh giá phải là số không âm và nhỏ hơn hoặc bằng 10\" là ví dụ của thuộc tính nào?",
    options: ["Tính nhất quán", "Tính toàn vẹn", "Tính cấu trúc", "Tính không dư thừa"],
    answer: 1,
    explain:
      "**Tính toàn vẹn** yêu cầu các giá trị dữ liệu lưu trữ phải thoả mãn những ràng buộc cụ thể tuỳ thực tế mà nó phản ánh — như giới hạn điểm số không âm và không vượt quá thang điểm.",
  },
  {
    id: "csdl-05",
    q: "Hiện tượng tiền đã bị trừ ở tài khoản chuyển đi nhưng chưa cộng vào tài khoản nhận là vi phạm thuộc tính nào?",
    options: ["Tính nhất quán", "Tính độc lập dữ liệu", "Tính cấu trúc", "Tính bảo mật và an toàn"],
    answer: 0,
    explain:
      "**Tính nhất quán** đòi hỏi dữ liệu phải đúng đắn sau các thao tác cập nhật, kể cả khi có sự cố xảy ra giữa chừng — ví dụ giao dịch chuyển tiền phải hoàn tất trọn vẹn ở cả hai tài khoản.",
  },
  {
    id: "csdl-06",
    q: "Việc chỉ cho phép người có thẩm quyền mới được truy xuất, sửa đổi số dư tài khoản ngân hàng thể hiện thuộc tính nào của CSDL?",
    options: ["Tính bảo mật và an toàn", "Tính không dư thừa", "Tính cấu trúc", "Tính độc lập dữ liệu"],
    answer: 0,
    explain:
      "**Tính bảo mật và an toàn** yêu cầu dữ liệu được bảo vệ, ngăn chặn truy xuất trái phép; đồng thời dữ liệu phải được bảo vệ để không dễ bị sai lạc, mất mát.",
  },
  {
    id: "csdl-07",
    q: "Hệ quản trị CSDL (hệ QTCSDL) là gì?",
    options: [
      "Là chính bản thân tập dữ liệu được lưu trữ trong hệ thống",
      "Là phần mềm chuyên dụng hỗ trợ tạo lập, cập nhật và truy xuất CSDL",
      "Là một mô hình tổ chức dữ liệu dưới dạng các bảng có quan hệ",
      "Là thiết bị phần cứng chuyên dùng để lưu trữ cơ sở dữ liệu",
    ],
    answer: 1,
    explain:
      "Hệ QTCSDL (Database Management System) là **phần mềm chuyên dụng** giúp người dùng tạo lập, cập nhật, truy xuất, bảo mật và an toàn CSDL — không phải bản thân dữ liệu hay thiết bị lưu trữ.",
  },
  {
    id: "csdl-08",
    q: "Cho phép khai báo CSDL, tạo lập và sửa đổi cấu trúc bên trong mỗi CSDL là công việc của nhóm chức năng nào?",
    options: [
      "Nhóm chức năng định nghĩa dữ liệu",
      "Nhóm chức năng cập nhật, truy xuất dữ liệu",
      "Nhóm chức năng bảo mật, an toàn CSDL",
      "Nhóm chức năng giao diện lập trình ứng dụng",
    ],
    answer: 0,
    explain:
      "**Nhóm chức năng định nghĩa dữ liệu** cho phép khai báo CSDL, tạo lập và sửa đổi kiến trúc bên trong mỗi CSDL, cùng cài đặt các ràng buộc để kiểm soát tính đúng đắn của dữ liệu.",
  },
  {
    id: "csdl-09",
    q: "Chức năng thêm, xoá, sửa dữ liệu và lấy dữ liệu ra theo các tiêu chí khác nhau thuộc nhóm nào của hệ QTCSDL?",
    options: [
      "Nhóm chức năng định nghĩa dữ liệu",
      "Nhóm chức năng cập nhật, truy xuất dữ liệu",
      "Nhóm chức năng bảo mật, an toàn CSDL",
      "Nhóm chức năng giao diện lập trình ứng dụng",
    ],
    answer: 1,
    explain:
      "**Nhóm chức năng cập nhật, truy xuất dữ liệu** gồm chức năng cập nhật dữ liệu (thêm, xoá, sửa) và chức năng truy xuất dữ liệu theo những tiêu chí khác nhau.",
  },
  {
    id: "csdl-10",
    q: "Cung cấp phương tiện sao lưu dự phòng (backup) để khôi phục dữ liệu khi có sự cố là chức năng thuộc nhóm nào?",
    options: [
      "Nhóm chức năng định nghĩa dữ liệu",
      "Nhóm chức năng giao diện lập trình ứng dụng",
      "Nhóm chức năng cập nhật, truy xuất dữ liệu",
      "Nhóm chức năng bảo mật, an toàn CSDL",
    ],
    answer: 3,
    explain:
      "**Nhóm chức năng bảo mật, an toàn CSDL** kiểm soát quyền truy cập, kiểm soát giao dịch tranh chấp, và cung cấp phương tiện sao lưu dự phòng để khôi phục dữ liệu khi cần.",
  },
  {
    id: "csdl-11",
    q: "Một hệ CSDL gồm những thành phần nào?",
    options: [
      "Chỉ gồm duy nhất bản thân tập dữ liệu được lưu trữ",
      "CSDL, hệ quản trị CSDL và các phần mềm ứng dụng CSDL",
      "Chỉ gồm hệ quản trị CSDL và phần cứng máy chủ",
      "Máy chủ lưu trữ, mạng máy tính và người quản trị hệ thống",
    ],
    answer: 1,
    explain:
      "SGK nêu: một hệ thống gồm **ba thành phần — CSDL, hệ quản trị CSDL (hệ QTCSDL) và các phần mềm ứng dụng CSDL** — được gọi là một hệ CSDL.",
  },
  {
    id: "csdl-12",
    q: "Hệ CSDL mà toàn bộ CSDL được lưu trữ tập trung trên một máy tính, được gọi là gì?",
    options: ["Hệ CSDL phân tán", "Hệ CSDL tập trung", "Hệ CSDL trực tuyến", "Hệ CSDL cục bộ"],
    answer: 1,
    explain:
      "**Hệ CSDL tập trung** là hệ CSDL mà CSDL được lưu trữ tập trung trên một máy tính — bao gồm cả các CSDL một người dùng như CSDL của Microsoft Access.",
  },
  {
    id: "csdl-13",
    q: "So với hệ CSDL tập trung, hệ CSDL phân tán có ưu điểm nổi bật nào?",
    options: [
      "Chi phí duy trì luôn thấp hơn hẳn hệ CSDL tập trung",
      "Không bao giờ xảy ra sự cố mất dữ liệu ở bất kì trạm nào",
      "Dễ dàng mở rộng, tính sẵn sàng và độ tin cậy được nâng cao",
      "Việc bảo đảm tính nhất quán dữ liệu trở nên đơn giản hơn",
    ],
    answer: 2,
    explain:
      "Hệ CSDL phân tán **dễ dàng mở rộng** (bổ sung trạm mới mà không ảnh hưởng trạm đang hoạt động) và có **tính sẵn sàng, độ tin cậy cao hơn** nhờ dữ liệu được sao lưu ở nhiều trạm khác nhau.",
  },
  {
    id: "csdl-14",
    q: "Trong CSDL quan hệ, mỗi hàng của một bảng được gọi là gì?",
    options: ["Trường (field)", "Bản ghi (record)", "Khoá chính", "Kiểu dữ liệu"],
    answer: 1,
    explain:
      "Mỗi hàng của bảng được gọi là một **bản ghi (record)** — tập hợp các thông tin về một đối tượng cụ thể. Mỗi cột mới là **trường (field)**, thể hiện một thuộc tính.",
  },
  {
    id: "csdl-15",
    q: "Trường hay nhóm trường có giá trị không trùng nhau tại các bản ghi, dùng để xác định duy nhất một bản ghi, được gọi là gì?",
    options: ["Khoá ngoài của bảng", "Kiểu dữ liệu của trường", "Khoá của bảng", "Liên kết dữ liệu"],
    answer: 2,
    explain:
      "SGK định nghĩa: trường hay nhóm trường mà giá trị của chúng tại các bản ghi không trùng nhau, xác định duy nhất một bản ghi, được gọi là **khoá của bảng**.",
  },
  {
    id: "csdl-16",
    q: "Trường hay nhóm trường của một bảng A trở thành khoá chính ở một bảng B khác, được gọi là gì đối với bảng A?",
    options: ["Khoá chính của bảng A", "Khoá ngoài của bảng A", "Bản ghi của bảng A", "Kiểu dữ liệu của bảng A"],
    answer: 1,
    explain:
      "Khi trường (hay nhóm trường) của bảng A làm thành khoá chính ở một bảng khác (B), trường đó được gọi là **khoá ngoài** của bảng A. Nhờ khoá ngoài, hai bảng A và B có quan hệ với nhau.",
  },
  {
    id: "csdl-17",
    q: "Việc dùng khoá ngoài để ghép nối dữ liệu giữa hai bảng trong CSDL quan hệ được gọi là gì?",
    options: ["Chuẩn hoá dữ liệu", "Sao lưu dữ liệu", "Liên kết (join) dữ liệu", "Phân quyền dữ liệu"],
    answer: 2,
    explain:
      "Việc dùng khoá ngoài của bảng để ghép nối dữ liệu giữa các bảng với nhau được gọi là **liên kết (join) dữ liệu theo khoá**.",
  },
  {
    id: "csdl-18",
    q: "Ngôn ngữ truy vấn có cấu trúc dùng phổ biến để định nghĩa, cập nhật, truy xuất dữ liệu trong các hệ QTCSDL quan hệ có tên gọi là gì?",
    options: ["HTML", "SQL", "CSS", "Python"],
    answer: 1,
    explain:
      "**SQL (Structured Query Language)** là ngôn ngữ truy vấn chuẩn được hầu hết các hệ QTCSDL quan hệ sử dụng, gồm ba thành phần: DDL (định nghĩa dữ liệu), DML (thao tác dữ liệu) và DCL (kiểm soát dữ liệu).",
  },
  {
    id: "csdl-19",
    q: "Trong SQL, câu lệnh nào dùng để khai báo khoá chính cho một bảng?",
    options: ["FOREIGN KEY", "SELECT", "PRIMARY KEY", "DELETE FROM"],
    answer: 2,
    explain:
      "**PRIMARY KEY** dùng để khai báo khoá chính. `FOREIGN KEY … REFERENCES …` dùng khai báo khoá ngoài, `SELECT` để truy xuất dữ liệu, `DELETE FROM` để xoá dòng dữ liệu.",
  },
  {
    id: "csdl-20",
    q: "Câu lệnh SQL nào dùng để thêm một dòng dữ liệu mới vào bảng?",
    options: ["UPDATE … SET", "DELETE FROM", "INSERT INTO … VALUES", "CREATE TABLE"],
    answer: 2,
    explain:
      "**INSERT INTO <tên bảng> VALUES <danh sách giá trị>** thêm dữ liệu mới vào bảng. `UPDATE` dùng để sửa, `DELETE FROM` dùng để xoá, `CREATE TABLE` dùng để khởi tạo bảng mới.",
  },
  {
    id: "csdl-21",
    q: "Trong câu lệnh SELECT của SQL, mệnh đề WHERE có tác dụng gì?",
    options: [
      "Sắp xếp các dòng kết quả theo thứ tự chỉ định",
      "Chỉ định chọn ra các dòng thoả mãn điều kiện xác định",
      "Liên kết dữ liệu các bảng theo khoá tương ứng",
      "Chỉ định tên bảng cần lấy dữ liệu ra",
    ],
    answer: 1,
    explain:
      "**WHERE <điều kiện chọn>** chỉ định chọn ra chỉ các dòng thoả mãn điều kiện xác định. Sắp xếp là việc của `ORDER BY`, liên kết bảng là `INNER JOIN`, còn tên bảng khai báo ở `FROM`.",
  },
  {
    id: "csdl-22",
    q: "Trong SQL, cặp câu lệnh nào dùng để cấp quyền và thu hồi quyền truy cập CSDL của người dùng?",
    options: ["SELECT và DELETE", "CREATE và ALTER", "GRANT và REVOKE", "INSERT và UPDATE"],
    answer: 2,
    explain:
      "Thành phần DCL của SQL dùng **GRANT** (cấp quyền cho người dùng) và **REVOKE** (thu hồi quyền đối với người dùng) để kiểm soát quyền truy cập CSDL.",
  },
  {
    id: "csdl-23",
    q: "Xây dựng chính sách phân quyền: một số người chỉ được xem dữ liệu, một số khác được thêm/sửa/xoá, là biện pháp thuộc nội dung nào?",
    options: ["Bảo mật hệ CSDL", "Chuẩn hoá cấu trúc bảng", "Tối ưu hoá truy vấn dữ liệu", "Sao lưu dữ liệu định kì"],
    answer: 0,
    explain:
      "Xây dựng danh sách nhóm người dùng với quyền hạn khác nhau (chỉ xem, được thêm, được xoá/sửa, toàn quyền) chính là công việc **xây dựng chính sách bảo mật CSDL**.",
  },
  {
    id: "csdl-24",
    q: "Vì sao các hệ CSDL cần được sao lưu dữ liệu định kì?",
    options: [
      "Để tăng tốc độ truy vấn dữ liệu của hệ QTCSDL",
      "Để phòng ngừa mất dữ liệu khi thiết bị lưu trữ gặp sự cố",
      "Để giảm dung lượng lưu trữ mà CSDL đang chiếm dụng",
      "Để tự động cấp quyền truy cập cho người dùng mới",
    ],
    answer: 1,
    explain:
      "Thiết bị lưu trữ có thể gặp sự cố (quá tuổi thọ, hư hỏng…) khiến dữ liệu khó khôi phục. **Sao lưu định kì** ra thiết bị dự phòng giúp phục hồi dữ liệu từ bản sao lưu gần nhất khi sự cố xảy ra.",
  },
];

// Dùng riêng cho Câu 2 (phần chung) — nội dung khái niệm CSDL / hệ QTCSDL,
// bám Bài 10–15.
export const CSDL_TF_LY_THUYET: TFQuestion[] = [
  {
    id: "csdl-tf-01",
    context:
      "Trường học đang chuyển từ ghi sổ điểm giấy sang lưu điểm trên máy tính bằng một phần mềm quản lí điểm. Cô giáo chủ nhiệm thắc mắc: phần mềm mới có thực sự khác gì so với việc gõ lại sổ điểm thành một tệp Word không? Nhà trường giải thích rằng phần mềm được xây dựng dựa trên một cơ sở dữ liệu (CSDL) điểm, có hệ quản trị CSDL đứng phía sau.",
    statements: [
      {
        text: "CSDL điểm chỉ đơn thuần là việc chuyển sổ điểm giấy thành một tệp văn bản trên máy tính.",
        answer: false,
        explain: "Sai. SGK nêu rõ việc tổ chức dữ liệu theo CSDL không đơn thuần là chuyển văn bản giấy thành tệp văn bản trên máy — mà phải tổ chức lưu trữ khoa học, hạn chế dư thừa và không nhất quán.",
      },
      {
        text: "Hệ quản trị CSDL là phần mềm chuyên dụng hỗ trợ tạo lập, cập nhật và truy xuất CSDL điểm.",
        answer: true,
        explain: "Đúng. Hệ QTCSDL là phần mềm chuyên dụng với các nhóm chức năng định nghĩa dữ liệu, cập nhật/truy xuất dữ liệu, bảo mật và giao diện lập trình ứng dụng.",
      },
      {
        text: "Nếu hai giáo viên cùng lúc sửa điểm một học sinh mà hệ thống không kiểm soát, dữ liệu có thể mất tính nhất quán.",
        answer: true,
        explain: "Đúng. Đây chính là vấn đề tranh chấp dữ liệu mà nhóm chức năng bảo mật, an toàn của hệ QTCSDL phải kiểm soát để bảo đảm tính nhất quán.",
      },
      {
        text: "Vì đã dùng hệ QTCSDL, trường không còn cần sao lưu dữ liệu điểm định kì nữa.",
        answer: false,
        explain: "Sai. Hệ QTCSDL hỗ trợ chức năng sao lưu nhưng việc sao lưu định kì vẫn phải được thực hiện — thiết bị lưu trữ vẫn có thể hỏng, cần bản sao để khôi phục.",
      },
    ],
  },
  {
    id: "csdl-tf-02",
    context:
      "Một cửa hàng sách xây dựng CSDL quản lí gồm bảng Sách (mã sách, tên sách, giá) và bảng HoaDon (mã hoá đơn, mã sách, số lượng). Trường \"mã sách\" trong bảng HoaDon dùng để tham chiếu tới bảng Sách. Chủ cửa hàng muốn mỗi mã sách chỉ đại diện cho đúng một cuốn sách duy nhất, không được trùng.",
    statements: [
      {
        text: "Trường \"mã sách\" trong bảng Sách có thể chọn làm khoá chính của bảng này.",
        answer: true,
        explain: "Đúng. Khoá của bảng là trường có giá trị không trùng nhau tại các bản ghi, xác định duy nhất một bản ghi — \"mã sách\" là duy nhất cho mỗi cuốn sách nên có thể làm khoá chính.",
      },
      {
        text: "Trường \"mã sách\" trong bảng HoaDon là khoá ngoài, vì nó là khoá chính ở bảng Sách.",
        answer: true,
        explain: "Đúng. Trường của một bảng (HoaDon) trở thành khoá chính ở bảng khác (Sách) thì được gọi là khoá ngoài của bảng chứa nó.",
      },
      {
        text: "Mỗi hàng trong bảng Sách được gọi là một trường, còn mỗi cột được gọi là một bản ghi.",
        answer: false,
        explain: "Sai, bị đảo ngược. Mỗi hàng là một bản ghi (record), mỗi cột là một trường (field) thể hiện một thuộc tính.",
      },
      {
        text: "Muốn biết tên sách ứng với từng hoá đơn, có thể liên kết hai bảng Sách và HoaDon theo trường \"mã sách\".",
        answer: true,
        explain: "Đúng. Đây chính là liên kết (join) dữ liệu theo khoá — dùng khoá ngoài \"mã sách\" của bảng HoaDon để ghép nối với khoá chính cùng tên ở bảng Sách.",
      },
    ],
  },
];

// Dùng riêng cho Câu 6 (nhánh Tin học ứng dụng, phần riêng) — nội dung thực
// hành tạo/khai thác CSDL bằng MySQL, HeidiSQL và SQL, bám Bài 14, 17.
export const CSDL_TF_THUC_HANH: TFQuestion[] = [
  {
    id: "csdl-tf-03",
    context:
      "Bạn An được giao thực hành tạo cơ sở dữ liệu quản lí thư viện trên máy tính bằng MySQL. An mở cửa sổ dòng lệnh, gõ lệnh để đăng nhập, sau đó dùng các câu lệnh SQL để khởi tạo cơ sở dữ liệu và bảng dữ liệu theo đúng hướng dẫn trong SGK.",
    statements: [
      {
        text: "MySQL là hệ quản trị CSDL có mã nguồn mở và miễn phí.",
        answer: true,
        explain: "Đúng. SGK nêu trong số các hệ QTCSDL phổ biến (Oracle, MySQL, Microsoft SQL Server…), chỉ MySQL là sản phẩm mã nguồn mở, miễn phí.",
      },
      {
        text: "Câu lệnh CREATE DATABASE dùng để khởi tạo một CSDL mới.",
        answer: true,
        explain: "Đúng. Theo Bảng câu truy vấn DDL trong SGK, CREATE DATABASE có ý nghĩa khởi tạo CSDL; CREATE TABLE dùng để khởi tạo bảng.",
      },
      {
        text: "Lệnh \"mysql -u root -p\" dùng để xoá toàn bộ dữ liệu trong CSDL hiện tại.",
        answer: false,
        explain: "Sai. Đây là lệnh mở cửa sổ làm việc của MySQL bằng dòng lệnh, đăng nhập với tên người dùng root (u = user) và có nhập mật khẩu (p = password) — không liên quan tới việc xoá dữ liệu.",
      },
      {
        text: "HeidiSQL là phần mềm giao diện đồ hoạ giúp thao tác với MySQL thuận tiện hơn dùng dòng lệnh.",
        answer: true,
        explain: "Đúng. SGK giới thiệu HeidiSQL là phần mềm mã nguồn mở, miễn phí, dùng giao diện đồ hoạ để kết nối và làm việc với các hệ QTCSDL như MySQL, thuận tiện hơn cho người dùng mới so với mysql.exe dòng lệnh.",
      },
    ],
  },
  {
    id: "csdl-tf-04",
    context:
      "Trong CSDL quản lí bán hàng, bạn Bình cần viết các câu truy vấn SQL để: lấy ra danh sách sản phẩm có giá trên 100 nghìn đồng, thêm một sản phẩm mới vào bảng, và xoá một sản phẩm đã ngừng kinh doanh.",
    statements: [
      {
        text: "Muốn lấy dữ liệu thoả mãn điều kiện giá > 100000, Bình cần dùng SELECT kết hợp với WHERE.",
        answer: true,
        explain: "Đúng. Cấu trúc SELECT <dữ liệu cần lấy> FROM <tên bảng> WHERE <điều kiện chọn> dùng để truy xuất các dòng thoả mãn điều kiện xác định.",
      },
      {
        text: "Câu lệnh DELETE FROM <tên bảng> WHERE <điều kiện> dùng để xoá các dòng thoả mãn điều kiện trong bảng.",
        answer: true,
        explain: "Đúng. Theo Bảng câu truy vấn cập nhật dữ liệu trong SGK, DELETE FROM ... WHERE ... xoá các dòng trong bảng thoả mãn điều kiện chỉ định.",
      },
      {
        text: "Để thêm sản phẩm mới, Bình phải dùng câu lệnh UPDATE kèm theo từ khoá VALUES.",
        answer: false,
        explain: "Sai. Thêm dữ liệu mới dùng INSERT INTO <tên bảng> VALUES <danh sách giá trị>. UPDATE ... SET ... dùng để cập nhật giá trị cho bản ghi đã có sẵn, không dùng để thêm mới.",
      },
      {
        text: "Kiểu dữ liệu VARCHAR(n) trong SQL dùng cho xâu kí tự có độ dài thay đổi, không vượt quá n kí tự.",
        answer: true,
        explain: "Đúng. Theo bảng kiểu dữ liệu SQL trong SGK, VARCHAR(n) là xâu kí tự có độ dài thay đổi, không vượt quá n kí tự — khác với CHAR(n) là xâu có độ dài cố định n kí tự.",
      },
    ],
  },
];
