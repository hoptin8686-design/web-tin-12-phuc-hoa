import type { LessonExtra } from "@/lib/types";

// Bài 18. Thực hành tổng hợp thiết kế trang web — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b18-tf1",
      context:
        "Nhóm bạn Lam đang làm Nhiệm vụ 1 của Bài 18: tạo tệp CSS để trình bày website câu lạc bộ theo Hình 18.2. Lam viết đoạn CSS cho phần banner như sau, rồi khoe với Kiên là banner đã có ảnh nền phủ kín, chữ căn giữa, màu đỏ đậm, không lo bị mẫu CSS nào khác ghi đè mất.",
      code: '.banner {\n  background: url("../assets/img/bg-masthead.jpg") no-repeat center center;\n  background-size: cover;\n  padding-top: 12rem;\n  padding-bottom: 12rem;\n  text-align: center !important;\n  color: darkred !important;\n}',
      statements: [
        {
          text: "Thuộc tính background-size: cover giúp ảnh nền phóng to vừa đủ để phủ kín khung banner, giữ nguyên tỉ lệ ảnh gốc.",
          answer: true,
          explain: "Đúng như SGK mô tả: background-size: cover khiến ảnh nền phủ kín toàn bộ vùng chứa, có thể cắt bớt phần thừa để giữ tỉ lệ.",
        },
        {
          text: "no-repeat trong dòng background nghĩa là ảnh nền sẽ được lặp lại liên tục cho tới khi lấp đầy toàn bộ khung banner.",
          answer: false,
          explain: "no-repeat có nghĩa ngược lại: ảnh nền KHÔNG được lặp lại, chỉ hiển thị đúng một lần — nhờ có thêm background-size: cover nên vẫn phủ kín khung.",
        },
        {
          text: "Việc thêm !important vào text-align và color giúp hai thuộc tính này luôn được áp dụng, không bị mẫu CSS khác có trọng số cao hơn ghi đè.",
          answer: true,
          explain: "Theo mức ưu tiên CSS đã học ở Bài 17, !important có mức ưu tiên cao nhất trong bảy mức, nên chắc chắn được áp dụng dù có xung đột với mẫu khác.",
        },
        {
          text: "Nhận xét của Lam là đúng hoàn toàn: một khi đã dùng !important, banner sẽ không thể bị bất kì đoạn CSS nào khác trong toàn bộ website ghi đè nữa, kể cả !important khác viết sau.",
          answer: false,
          explain: "Chưa hoàn toàn đúng: nếu có một mẫu CSS khác cũng dùng !important cho cùng thuộc tính và có trọng số bộ chọn cao hơn (hoặc viết sau, cùng trọng số), mẫu đó vẫn có thể thắng.",
        },
      ],
    },
    {
      id: "b18-tf2",
      context:
        "Vẫn ở Nhiệm vụ 1, đến phần slogan (Hình 18.3), Kiên viết ba khối <div class=\"block_3\"> lồng trong một <div class=\"row\">, nhưng khi mở trình duyệt thì ba ô lại xếp chồng theo chiều dọc chứ không nằm ngang như hình mẫu. Kiên hỏi Lam nên sửa CSS của lớp nào.",
      code: '.row {\n  display: flex;\n  flex-wrap: wrap;\n}\n.block_3 {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}',
      statements: [
        {
          text: "Nguyên nhân ba ô ban đầu xếp dọc là vì thẻ div là phần tử khối (block), mặc định chiếm hết chiều ngang nên phần tử sau tự xuống dòng.",
          answer: true,
          explain: "Đúng như SGK giải thích: div là phần tử block, nếu không có CSS bố cục riêng thì các div con sẽ tự động xếp chồng theo chiều dọc.",
        },
        {
          text: "Thêm display: flex vào lớp .row là bước mấu chốt để các div con (ba ô block_3) xếp cạnh nhau theo hàng ngang.",
          answer: true,
          explain: "display: flex thiết lập bố cục linh hoạt (flexbox), khiến các phần tử con mặc định xếp thành một hàng ngang thay vì xuống dòng.",
        },
        {
          text: "width: 33.33333333% trong lớp .block_3 khiến mỗi ô chiếm đúng 1/2 chiều ngang của hàng, tức là chỉ vừa đủ cho hai ô.",
          answer: false,
          explain: "33,33333333% xấp xỉ 1/3, nên ba ô cộng lại vừa đúng 100% chiều ngang — đúng như mô tả slogan có 3 ô bằng nhau trong SGK.",
        },
        {
          text: "flex-wrap: wrap không có tác dụng gì trong trường hợp slogan chỉ có 3 ô, nên có thể bỏ dòng này mà kết quả hiển thị không đổi.",
          answer: false,
          explain: "flex-wrap: wrap vẫn có vai trò cho phép các ô tự xuống hàng khi màn hình hẹp không đủ chỗ chứa hết 3 ô trên một hàng — bỏ đi có thể khiến ô bị co ép, không hiển thị đúng trên màn hình nhỏ.",
        },
      ],
    },
    {
      id: "b18-tf3",
      context:
        "Sau khi hoàn thành tệp CSS, nhóm chuyển sang Nhiệm vụ 2: tạo các tệp index.html, thethao.html và nghethuat.html. Lam viết khối banner cho trang chủ bằng đoạn mã dưới đây, rồi định thêm phần Luyện tập: tạo trang dang_ki.html có biểu mẫu đăng kí.",
      code: '<div class="banner">\n  <h2>CLB ngoại khoá trường THPT Nguyễn Bỉnh Khiêm</h2>\n</div>',
      statements: [
        {
          text: "Khối div trên nhận được định dạng của lớp .banner đã tạo ở Nhiệm vụ 1 vì thuộc tính class của nó trùng tên với lớp CSS đó.",
          answer: true,
          explain: "Đúng cơ chế CSS: thẻ có class=\"banner\" sẽ được áp dụng mọi quy tắc định dạng khai báo trong bộ chọn .banner của tệp CSS đã liên kết.",
        },
        {
          text: "Theo Luyện tập của bài, liên kết tới trang dang_ki.html cần được đặt ở phần cuối trang (footer) của tất cả các trang trong website.",
          answer: true,
          explain: "SGK yêu cầu rõ: bổ sung liên kết tới trang đăng kí trong phần cuối trang của tất cả các trang, không phải chỉ riêng trang chủ.",
        },
        {
          text: "Website câu lạc bộ trong ví dụ SGK chỉ gồm đúng một trang duy nhất, không có khái niệm trang thành viên.",
          answer: false,
          explain: "SGK thiết kế website với ba thành viên trang: trang chủ, trang câu lạc bộ thể thao và trang câu lạc bộ nghệ thuật — không phải một trang duy nhất.",
        },
        {
          text: "Phần Vận dụng của bài yêu cầu chuyển hẳn website đã tạo sang xây dựng lại bằng công cụ Google Sites, thay vì tiếp tục dùng HTML/CSS.",
          answer: false,
          explain: "Sai. Vận dụng yêu cầu đưa ra một thiết kế khác cho website đã tạo, viết định dạng CSS theo thiết kế mới rồi chuyển toàn bộ website sang định dạng mới — vẫn dùng HTML/CSS, không liên quan Google Sites (nội dung đó thuộc Bài 23–28).",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b18-es1",
      q: "Trình bày các bước thực hiện Nhiệm vụ 1 (tạo tệp CSS) của Bài 18 theo bố cục Hình 18.2, nêu vai trò của các lớp CSS chính: banner, slogan, row, block_3.",
      answer:
        "* Các bước thực hiện:\n1. Phân tích bố cục website theo Hình 18.2: đầu trang (banner + slogan), phần nội dung chính (các ô ảnh/nội dung), cuối trang.\n2. Với mỗi thành phần trong bố cục, định nghĩa một lớp CSS riêng (hoặc dùng chung lớp nếu cùng định dạng).\n3. Viết CSS cho banner: đặt ảnh nền phủ kín (background, background-size: cover), căn giữa chữ, chọn màu chữ nổi bật, dùng !important nếu cần đảm bảo áp dụng đúng.\n4. Viết CSS cho slogan (3 ô hàng ngang, Hình 18.3): tạo lớp .row với display: flex; flex-wrap: wrap; để các ô nằm ngang cạnh nhau; tạo lớp .block_3 với width: 33.33333333% để mỗi ô chiếm đúng 1/3 chiều ngang.\n5. Làm tương tự cho phần nội dung chính và cuối trang.\n6. Lưu tệp với tên style.css.\n\n* Vai trò từng lớp:\n- .banner: định dạng phần ảnh nền và tiêu đề trang.\n- .slogan: bao ngoài, định dạng nền và khoảng cách của cả khối khẩu hiệu.\n- .row: tạo bố cục flexbox để các ô con xếp hàng ngang, tự xuống dòng khi cần.\n- .block_3: định dạng từng ô con, quy định độ rộng bằng 1/3 hàng.",
    },
    {
      id: "b18-es2",
      q: "Trình bày cách kết hợp HTML và CSS đã tạo để hoàn thành website câu lạc bộ ở Nhiệm vụ 2, và các yêu cầu bổ sung trong phần Luyện tập, Vận dụng.",
      answer:
        "* Kết hợp HTML và CSS (Nhiệm vụ 2):\n- Tạo các tệp HTML: index.html (trang chủ), thethao.html, nghethuat.html.\n- Dùng thẻ <div> với thuộc tính class trùng tên lớp CSS đã định nghĩa (ví dụ <div class=\"banner\">) để mỗi khối HTML nhận đúng định dạng tương ứng.\n- Với khối slogan: lồng đúng cấu trúc ba lớp — <div class=\"slogan\"> chứa <div class=\"row\">, bên trong là ba <div class=\"block_3\"> (mỗi block có tiêu đề h3 và đoạn văn bản).\n- Thực hiện tương tự cho ba tệp HTML.\n- Chuẩn bị hình ảnh, video hoạt động của lớp/trường để chèn vào từng trang.\n- Tạo liên kết từ trang chủ tới hai trang còn lại, và đặt liên kết tới các trang khác ở phần cuối trang.\n\n* Luyện tập: tạo thêm trang dang_ki.html chứa biểu mẫu đăng kí câu lạc bộ, bổ sung liên kết tới trang này ở phần cuối trang của TẤT CẢ các trang; thay đổi định dạng, màu sắc phông chữ của các vùng khi di chuyển chuột qua (dùng lớp giả :hover).\n\n* Vận dụng: đưa ra một thiết kế khác cho website đã tạo, viết định dạng CSS theo thiết kế mới và chuyển toàn bộ website sang định dạng mới đó.",
    },
  ],
};

export default extra;
