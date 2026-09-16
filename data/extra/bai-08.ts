import type { LessonExtra } from "@/lib/types";

// Bài 8. Định dạng văn bản — câu đúng/sai + tự luận (SGK trang 46-51)
const extra: LessonExtra = {
  tf: [
    {
      id: "b8-tf1",
      context:
        "Bạn Lùng đang học HTML và thử viết một đoạn mã để trình bày bài thơ 'Vội vàng' của Xuân Diệu. Lùng muốn tên bài thơ hiện to và đậm ở trên cùng, các câu thơ hiện bình thường bên dưới. Bạn viết đoạn mã dưới đây và mở bằng trình duyệt Cốc Cốc trên máy tính của mình.",
      code: '<h1>Vội vàng</h1>\n<p>Tôi muốn tắt nắng đi</p>\n<p>Cho màu đừng <strong>nhạt mắt</strong>;</p>\n<p>Tôi muốn buộc gió lại</p>\n<p>Cho hương đừng bay đi.</p>',
      statements: [
        {
          text: "Dòng chữ \"Vội vàng\" sẽ hiện to nhất vì nằm trong thẻ <h1> — tiêu đề cấp cao nhất.",
          answer: true,
          explain:
            "Thẻ <h1> là tiêu đề cấp 1, độ quan trọng cao nhất trong 6 mức tiêu đề <h1>–<h6>. Trình duyệt sẽ hiển thị nội dung của <h1> với cỡ chữ lớn nhất so với các mức còn lại.",
        },
        {
          text: "Hai chữ \"nhạt mắt\" sẽ được in đậm vì nằm trong thẻ <strong>.",
          answer: true,
          explain:
            "Thẻ <strong> dùng để định dạng chữ đậm. Vì thẻ <strong> bao quanh cụm \"nhạt mắt\" nên chỉ cụm từ đó được in đậm, phần còn lại trong cặp thẻ <p> hiển thị bình thường.",
        },
        {
          text: "Bốn thẻ <p> sẽ hiển thị bốn câu thơ nối tiếp nhau trên cùng một dòng.",
          answer: false,
          explain:
            "Mỗi cặp thẻ <p>...</p> sẽ hiển thị nội dung trên một dòng mới kèm khoảng trống nhỏ trước và sau đoạn. Bốn thẻ <p> sẽ tạo ra bốn đoạn riêng biệt, không nối trên cùng một dòng.",
        },
        {
          text: "Nếu Lùng muốn câu thơ thứ nhất in nghiêng, chỉ cần thay thẻ <p> bằng thẻ <em>.",
          answer: false,
          explain:
            "Thẻ <em> dùng để in nghiêng một cụm từ ngắn bên trong đoạn văn, không thay thế được vai trò của thẻ <p> (tạo đoạn văn bản). Đúng ra Lùng vẫn dùng <p> để tạo đoạn, rồi thêm <em> bên trong để in nghiêng nội dung.",
        },
      ],
    },
    {
      id: "b8-tf2",
      context:
        "Nhóm học sinh lớp 12A đang làm bài thực hành HTML trên máy tính phòng bộ môn. Bạn Sình được giao nhiệm vụ viết đoạn mã hiển thị công thức tính diện tích hình tròn S = πr² và phương trình ax² + bx + c = 0. Sình thắc mắc không biết dùng thẻ nào để viết số mũ 2 nhỏ ở trên, còn bạn Páo thì đề xuất dùng thẻ <strong> vì thấy nó cho chữ to hơn.",
      code: '<p>Diện tích hình tròn: S = πr<sup>2</sup></p>\n<p>Phương trình: ax<sup>2</sup> + bx + c = 0</p>',
      statements: [
        {
          text: "Thẻ <sup> trong đoạn mã của Sình sẽ hiển thị số 2 ở vị trí chỉ số trên (số mũ).",
          answer: true,
          explain:
            "Thẻ <sup> dùng để viết chỉ số trên (superscript), tức là số mũ. Nội dung bên trong <sup> sẽ được hiển thị nhỏ hơn và nằm cao hơn so với dòng chữ chính — đúng với yêu cầu viết số mũ 2.",
        },
        {
          text: "Đề xuất dùng thẻ <strong> để viết số mũ của Páo là sai, vì <strong> chỉ in đậm.",
          answer: true,
          explain:
            "Thẻ <strong> chỉ làm chữ đậm hơn, không có tác dụng tạo chỉ số trên. Để viết số mũ đúng cách phải dùng thẻ <sup>; còn nếu cần chỉ số dưới thì dùng thẻ <sub>.",
        },
        {
          text: "Nếu muốn viết H₂O (chỉ số dưới), Sình nên dùng thẻ <sup> giống như với số mũ.",
          answer: false,
          explain:
            "Thẻ <sup> dùng cho chỉ số trên (số mũ). Để viết chỉ số dưới như trong H₂O, phải dùng thẻ <sub>. Hai thẻ này có tác dụng ngược nhau: <sup> đưa chữ lên trên, <sub> đưa chữ xuống dưới.",
        },
        {
          text: "Đoạn mã của Sình sẽ hiển thị cả hai công thức trên cùng một dòng vì cùng nằm trong các thẻ <p> liên tiếp.",
          answer: false,
          explain:
            "Mỗi cặp thẻ <p>...</p> sẽ hiển thị nội dung trên một dòng mới, kèm khoảng trống nhỏ trước và sau. Hai thẻ <p> liên tiếp sẽ tạo ra hai đoạn riêng biệt, không hiển thị trên cùng một dòng.",
        },
      ],
    },
    {
      id: "b8-tf3",
      context:
        "Cô giáo tin học yêu cầu cả lớp viết trang web giới thiệu sản phẩm của hợp tác xã rau sạch Phục Hòa. Bạn Dín viết đoạn mã dưới đây. Sau khi mở bằng trình duyệt, Dín thấy tên sản phẩm hiện to, mô tả hiện bình thường, còn giá khuyến mãi muốn gạch bỏ giá cũ thì chưa biết dùng thẻ gì. Bạn Súa đề xuất rằng để thay đổi màu chữ phần mô tả thành màu xanh lá cây, chỉ cần thêm thuộc tính color=\"green\" trực tiếp vào thẻ <p>.",
      code: '<h2>Rau cải Phục Hòa hữu cơ</h2>\n<p style="font-family:Arial;font-size:14px">Rau sạch, trồng không thuốc trừ sâu, thu hoạch mỗi sáng sớm.</p>\n<p>Giá niêm yết: <del>35.000đ</del>/kg &nbsp; Giá hôm nay: <strong>28.000đ</strong>/kg</p>',
      statements: [
        {
          text: "Thẻ <h2> dùng đúng chỗ: tên sản phẩm nên là tiêu đề cấp 2 trong trang đã có tiêu đề cấp 1.",
          answer: true,
          explain:
            "Sách hướng dẫn dùng <h1> cho tiêu đề chung của cả văn bản; các tiêu đề ở mức thấp hơn dùng <h2> và tiếp tục với các mức tiếp theo. Dùng <h2> cho tên sản phẩm trong một trang đã có <h1> là hợp lí về cấu trúc.",
        },
        {
          text: "Muốn gạch bỏ giá cũ thì Dín nên dùng thẻ <u>, vì thẻ này tạo nét gạch ngang giữa chữ.",
          answer: false,
          explain:
            "Thẻ tạo nét gạch giữa chữ để đánh dấu nội dung đã bị xoá là <del> — đúng thẻ đã dùng trong đoạn mã. Còn <u> là gạch chân (gạch phía dưới chữ); hơn nữa HTML5 không còn hỗ trợ <u>, muốn gạch chân thì dùng text-decoration trong thuộc tính style.",
        },
        {
          text: "Đề xuất của Súa là đúng: thêm color=\"green\" vào thẻ <p> sẽ đổi màu chữ thành xanh lá.",
          answer: false,
          explain:
            "Trong HTML5, cách đúng để đặt màu chữ là dùng thuộc tính style với cú pháp style=\"color:green\". Cú pháp color=\"green\" là của HTML4 cũ, không được khuyến khích và không hoạt động đúng trong HTML5.",
        },
        {
          text: "Phần style trong thẻ <p> đầu tiên đặt đúng phông Arial và cỡ chữ 14px, ngăn cách nhau bởi dấu chấm phẩy.",
          answer: true,
          explain:
            "Đoạn mã dùng style=\"font-family:Arial;font-size:14px\" — đây là cú pháp đúng: đặt nhiều định dạng phông đồng thời bằng cách ngăn cách các cặp tên:giá_trị bằng dấu chấm phẩy.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b8-es1",
      q: "Nêu các thẻ HTML dùng để định dạng kiểu chữ (đậm, nghiêng, gạch chân, v.v.). Phân biệt thẻ <strong> với thẻ <b>, thẻ <em> với thẻ <i>. Cho ví dụ minh hoạ.",
      answer:
        "* CÁC THẺ ĐỊNH DẠNG KIỂU CHỮ (theo Bảng 8.1 SGK)\n\n| Kiểu chữ | Thẻ |\n|---|---|\n| Chữ đậm | <strong>; <b> |\n| Chữ nghiêng | <em>; <i> |\n| Gạch chân | <u> (lưu ý: HTML5 không hỗ trợ — dùng text-decoration trong style) |\n| Đánh dấu (highlight) | <mark> |\n| Giảm cỡ chữ | <small> |\n| Chỉ số trên (số mũ) | <sup> |\n| Chỉ số dưới | <sub> |\n| Đánh dấu xoá | <del> |\n\n* PHÂN BIỆT <strong> VÀ <b>\n- Cả hai đều hiển thị chữ đậm trên trình duyệt.\n- <b> chỉ có tác dụng định dạng hiển thị (in đậm về mặt trực quan).\n- <strong> có ý nghĩa nhấn mạnh vào ngữ nghĩa của nội dung — được khuyến khích sử dụng nhiều hơn trong định dạng văn bản.\n\n* PHÂN BIỆT <em> VÀ <i>\n- Cả hai đều hiển thị chữ nghiêng trên trình duyệt.\n- <i> chỉ có tác dụng định dạng hiển thị (in nghiêng về mặt trực quan).\n- <em> có ý nghĩa nhấn mạnh vào ngữ nghĩa của nội dung — được khuyến khích sử dụng nhiều hơn trong định dạng văn bản.\n\n* VÍ DỤ MINH HOẠ\n<p>Môn <em>Tin học</em> rất hay.</p>\n→ Chữ \"Tin học\" in nghiêng, nhấn mạnh đây là tên môn học.\n\n<p>Môn Tin học <em>rất</em> hay.</p>\n→ Chữ \"rất\" in nghiêng, nhấn mạnh mức độ.\n\n<p>Công thức: ax<sup>2</sup> + bx + c = 0</p>\n→ Số 2 hiển thị ở vị trí chỉ số trên (số mũ).\n\n<p>Giá cũ: <del>50.000đ</del> &nbsp; Giá mới: <strong>35.000đ</strong></p>\n→ Giá cũ bị gạch ngang, giá mới in đậm.\n\n* LƯU Ý: HTML5 không hỗ trợ thẻ <big> và <u> — để điều khiển cỡ chữ dùng font-size, để gạch chân dùng text-decoration trong thuộc tính style.",
    },
    {
      id: "b8-es2",
      q: "Trình bày cách định dạng phông chữ trong HTML bằng thuộc tính style. Nêu các thuộc tính phông thường dùng, cú pháp viết nhiều thuộc tính đồng thời, và các cách xác định màu sắc. Cho ví dụ minh hoạ.",
      answer:
        "* ĐỊNH DẠNG PHÔNG CHỮ BẰNG THUỘC TÍNH STYLE\n\nĐể định dạng phông chữ ta sử dụng thuộc tính style. Thuộc tính style nằm trong thẻ bắt đầu, sau tên thẻ.\n\n* CÁC THUỘC TÍNH PHÔNG THƯỜNG DÙNG\n\n1. Màu sắc chữ:\n   <p style=\"color:màu\">Nội dung.</p>\n   Ví dụ: <p style=\"color:red\">Chữ màu đỏ.</p>\n\n2. Phông chữ:\n   <p style=\"font-family:tên_phông\">Nội dung.</p>\n   Ví dụ: <p style=\"font-family:Arial\">Chữ phông Arial.</p>\n\n3. Cỡ chữ:\n   <p style=\"font-size:cỡ\">Nội dung.</p>\n   Có nhiều cách xác định cỡ chữ:\n   - Dùng số kèm đơn vị: px (pixel), mm, cm,... Ví dụ: font-size:15px\n   - Dùng cỡ thông dụng: small, medium, large,...\n\n* CÚ PHÁP VIẾT NHIỀU THUỘC TÍNH PHÔNG ĐỒNG THỜI\n\nKhi muốn thực hiện nhiều định dạng phông đồng thời, ta đặt các cặp tên:giá_trị trong phần giá trị của thuộc tính style, ngăn cách nhau bởi dấu chấm phẩy \";\".\n\nVí dụ: <p style=\"color:red;font-family:Tahoma;font-size:15px;text-decoration:underline\">\n→ Đặt đồng thời: chữ màu đỏ, phông Tahoma, cỡ 15px, có gạch chân.\n\n* CÁC CÁCH XÁC ĐỊNH MÀU SẮC\n\n1. Theo tên màu tiếng Anh: red, green, blue, grey, yellow, black, brown,...\n   Ví dụ: color:blue → chữ màu xanh lam.\n\n2. Theo giá trị màu trong hệ RGB (Red-Green-Blue):\n   Cú pháp: color:rgb(R,G,B) trong đó R, G, B là số từ 0 đến 255.\n   Ví dụ: color:rgb(255,0,0) → tương đương màu đỏ (red).\n   Ví dụ: color:rgb(205,0,0) → màu đỏ đậm hơn một chút.\n\n* LƯU Ý: Thuộc tính style là cách định dạng nội tuyến (inline), áp dụng ngay tại vị trí phần tử được viết. Bài 13–17 sẽ giới thiệu cách định dạng tập trung hơn thông qua CSS.",
    },
  ],
};

export default extra;
