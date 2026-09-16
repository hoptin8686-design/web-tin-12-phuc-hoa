import type { LessonExtra } from "@/lib/types";

// Bài 11. Chèn tệp tin đa phương tiện và khung nội tuyến — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b11-tf1",
      context:
        "Nhóm học sinh lớp 12A trường THPT Phục Hòa đang làm trang web giới thiệu lễ hội truyền thống của địa phương. Bạn Lùng viết đoạn mã dưới đây để chèn ảnh lễ hội vào trang. Bạn Páo nhận xét rằng nếu bỏ thuộc tính alt thì trang web vẫn chạy bình thường, nên không cần viết. Bạn Sình góp ý thêm: ảnh định dạng TIFF sẽ hiển thị tốt vì TIFF có chất lượng cao hơn PNG.",
      code: '<img src="images/le_hoi.png"\n     alt="Lễ hội mùa xuân của người dân Phục Hòa"\n     width="400" height="250">',
      statements: [
        {
          text: "Đoạn mã của Lùng chèn ảnh đúng cú pháp: thẻ đơn <img> với thuộc tính src bắt buộc, alt và kích thước.",
          answer: true,
          explain:
            "Thẻ <img> là thẻ đơn (không có thẻ kết thúc). Thuộc tính src là bắt buộc. Thuộc tính alt nên được sử dụng kèm. Thuộc tính width và height giúp trình duyệt giữ đúng không gian khi ảnh đang tải. Cú pháp hoàn toàn đúng.",
        },
        {
          text: "Thẻ <img> là thẻ đôi nên sau phần khai báo ảnh bắt buộc phải có thẻ kết thúc </img>.",
          answer: false,
          explain:
            "<img> là thẻ đơn, không có và không cần thẻ kết thúc. Toàn bộ thông tin về ảnh được đặt trong các thuộc tính của chính thẻ đó: src (bắt buộc), alt, width, height.",
        },
        {
          text: "Nhận xét của Páo không hoàn toàn đúng: bỏ alt trang vẫn chạy, nhưng alt nên có để hỗ trợ khi ảnh lỗi.",
          answer: true,
          explain:
            "Thuộc tính alt cung cấp văn bản thay thế khi việc hiển thị ảnh bị lỗi, giúp người đọc hình dung nội dung bức ảnh. Dù không bắt buộc, SGK khuyến nghị nên sử dụng alt.",
        },
        {
          text: "Góp ý của Sình là đúng: ảnh TIFF có chất lượng cao hơn nên trình duyệt sẽ hiển thị tốt hơn PNG.",
          answer: false,
          explain:
            "Theo SGK, các ảnh có định dạng như TIFF, EPS,... cần được chuyển đổi sang định dạng được hỗ trợ trước khi dùng trên web. Trình duyệt không hỗ trợ TIFF — dù chất lượng cao, ảnh TIFF sẽ không hiển thị được trên trang web.",
        },
      ],
    },
    {
      id: "b11-tf2",
      context:
        "Cô giáo giao bài: tạo trang web CLB âm nhạc có chèn video biểu diễn (định dạng mp4) và bài hát nền (định dạng mp3). Bạn Mai viết đoạn mã dưới đây. Bạn Dín xem và nói rằng thẻ <audio> cũng có thuộc tính poster để hiện ảnh bìa album khi bài hát chưa phát, còn bạn Súa thì nghĩ thẻ <video> không cần autoplay vì Chrome sẽ tự động phát.",
      code: '<video src="videos/bieu_dien.mp4"\n       width="640" height="360"\n       controls poster="images/biaalbum.jpg">\n</video>\n<audio src="audio/bai_hat.mp3" controls autoplay></audio>',
      statements: [
        {
          text: "Thuộc tính controls trong cả <video> và <audio> đúng vai trò: hiện các nút phát/tạm dừng, âm lượng.",
          answer: true,
          explain:
            "Thuộc tính controls là thuộc tính boolean, dùng để trình duyệt hiển thị các thành phần điều khiển như nút phát/tạm dừng, điều khiển âm lượng,... Nên dùng để người xem có thể điều khiển trong quá trình phát.",
        },
        {
          text: "Thuộc tính poster=\"images/biaalbum.jpg\" trong thẻ <video> hiện ảnh khi video chưa phát — dùng đúng.",
          answer: true,
          explain:
            "Thuộc tính poster cung cấp đường dẫn đến tệp ảnh dùng để hiển thị khi chưa chạy video — giống ảnh thumbnail/bìa video. Cách dùng của Mai là đúng.",
        },
        {
          text: "Nhận xét của Dín là đúng: thẻ <audio> cũng có thuộc tính poster để hiển thị ảnh bìa bài hát.",
          answer: false,
          explain:
            "Dín nhầm. Sách nêu rõ thẻ <audio> không có các thuộc tính width, height và poster — đây chính là điểm khác biệt so với thẻ <video>.",
        },
        {
          text: "Ý kiến của Súa là đúng: Chrome sẽ tự động phát video ngay khi trang mở nếu không có thuộc tính autoplay.",
          answer: false,
          explain:
            "Theo SGK, autoplay là thuộc tính cho phép video chạy ngay khi hiển thị. Tuy nhiên, một số trình duyệt như Google Chrome thường không cho video chạy ngay, hoặc chỉ cho phép nếu kết hợp với thuộc tính muted. Không có autoplay thì video không tự chạy.",
        },
      ],
    },
    {
      id: "b11-tf3",
      context:
        "Bạn Páo xây dựng trang web giới thiệu CLB Thể thao trường Phục Hòa. Trang có hai liên kết dẫn tới nội dung khác nhau và một khung nội tuyến để hiển thị. Đoạn mã dưới đây được viết trong tệp index.html. Bạn Lùng góp ý: nếu muốn nhấn vào ảnh thể thao để mở trang the_thao.html thay vì chuyển toàn bộ trang, phải thêm thuộc tính autoplay vào thẻ <a>.",
      code: '<iframe id="khung" src="the_thao.html"\n        width="80%" height="500"></iframe>\n<a href="the_thao.html" target="khung">\n  <img src="images/thethao.png"\n       alt="Hoạt động thể thao">\n</a>\n<a href="nghe_thuat.html" target="khung">Nghệ thuật</a>',
      statements: [
        {
          text: "Thẻ <iframe> trong đoạn mã tạo khung nội tuyến ban đầu hiển thị nội dung trang the_thao.html.",
          answer: true,
          explain:
            "Thẻ <iframe src=\"the_thao.html\"> tạo khung nội tuyến và hiển thị tài nguyên web chỉ định trong src — ở đây là trang the_thao.html.",
        },
        {
          text: "Thuộc tính target=\"khung\" trong thẻ <a> dùng để mở tài liệu liên kết vào iframe có id=\"khung\".",
          answer: true,
          explain:
            "Thuộc tính target của thẻ <a> dùng để chỉ định nơi mở tài liệu được liên kết. Khi đặt target bằng id của iframe, nhấn liên kết sẽ mở nội dung vào trong khung nội tuyến đó.",
        },
        {
          text: "Khi nhấn vào ảnh thể thao, trình duyệt sẽ rời trang hiện tại và chuyển hẳn sang trang the_thao.html.",
          answer: false,
          explain:
            "Không phải. Đoạn mã đặt <img> bên trong thẻ <a href=\"the_thao.html\" target=\"khung\">; nhờ target=\"khung\" trỏ tới id của iframe nên nội dung mở ngay trong khung nội tuyến, người dùng vẫn ở lại trang hiện tại.",
        },
        {
          text: "Góp ý của Lùng về thuộc tính autoplay trong thẻ <a> là đúng.",
          answer: false,
          explain:
            "Thuộc tính target (không phải autoplay) trong thẻ <a> mới là thuộc tính dùng để chỉ định nơi mở tài liệu. autoplay là thuộc tính của thẻ <video> và <audio>, không phải thẻ <a>. Đoạn mã đã dùng đúng target=\"khung\".",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b11-es1",
      q: "Trình bày cách chèn ảnh vào trang web HTML: thẻ sử dụng, các thuộc tính quan trọng, lưu ý về định dạng và kích thước. Cho ví dụ mã HTML minh hoạ.",
      answer:
        "* CHÈN ẢNH VÀO TRANG WEB\n\nThẻ dùng: <img> — là thẻ đơn (không có thẻ kết thúc).\n\nCú pháp:\n<img src=\"đường_dẫn_tới_tệp_tin_ảnh\" alt=\"đoạn văn bản thay thế\">\n\n* CÁC THUỘC TÍNH QUAN TRỌNG\n\n1. src (bắt buộc): đường dẫn tới tệp ảnh (tuyệt đối hoặc tương đối).\n   Lưu ý: nên dùng đường dẫn tương đối để tránh lỗi khi ảnh trên mạng bị thay đổi.\n\n2. alt (nên có): văn bản thay thế khi hiển thị ảnh bị lỗi. Giúp người đọc hình dung nội dung bức ảnh.\n\n3. width và height: kích thước hiển thị của ảnh (đơn vị pixel).\n   - Dùng cả hai: trình duyệt giữ đúng không gian trong bố cục khi ảnh đang tải → hiển thị trang nhanh hơn.\n   - Dùng một trong hai: chiều còn lại tự tính theo tỉ lệ ảnh gốc.\n\n* ĐỊNH DẠNG ẢNH HỢP LỆ\nCác định dạng được trình duyệt hỗ trợ: PNG, JPEG, GIF và một số định dạng mới như JPEG-XR, WebP.\nCác định dạng không hỗ trợ (cần chuyển đổi): TIFF, EPS,...\n\n* VÍ DỤ\n<p>Tôi muốn uống một cốc\n<img src=\"images/coffee.png\"> ngay bây giờ.</p>\n→ Ảnh được chèn ngay trong dòng văn bản.\n\n<img src=\"images/le_hoi.png\"\n     alt=\"Lễ hội mùa xuân tại Phục Hòa\"\n     width=\"400\" height=\"250\">\n→ Ảnh hiển thị đúng 400×250px, có văn bản thay thế.\n\n* TẠO LIÊN KẾT CHO ẢNH\nĐặt thẻ <img> bên trong cặp thẻ <a>:\n<a href=\"thong_tin.html\">\n  <img src=\"images/sun.png\" alt=\"Mặt Trời\">\n</a>\n→ Khi nhấn vào ảnh, trình duyệt mở trang thong_tin.html.",
    },
    {
      id: "b11-es2",
      q: "Trình bày cách chèn video, âm thanh vào trang web HTML và cách tạo khung nội tuyến (iframe). Nêu điểm khác biệt giữa <video> và <audio>. Cho ví dụ mã minh hoạ.",
      answer:
        "* CHÈN VIDEO: thẻ <video>\n\nCú pháp:\n<video src=\"đường_dẫn\" width=\"...\" height=\"...\" controls></video>\n\nCác thuộc tính:\n- src: đường dẫn tệp video. Định dạng phổ biến: mp4 (tốt nhất), webm.\n- width, height: kích thước khung phát video.\n- controls: (boolean) hiển thị nút phát/tạm dừng, thanh âm lượng,...\n- autoplay: (boolean) tự động phát khi trang mở. Lưu ý: Chrome có thể không phát ngay, trừ khi có thêm muted.\n- poster: đường dẫn ảnh hiển thị khi chưa chạy video.\n\nVí dụ:\n<video src=\"videos/bieu_dien.mp4\" width=\"640\" height=\"360\"\n       controls poster=\"images/biaalbum.jpg\">\n</video>\n\nDùng nhiều định dạng với <source>:\n<video width=\"320\" height=\"240\" controls>\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  <source src=\"movie.ogg\" type=\"video/ogg\">\n  Trình duyệt của bạn không hỗ trợ HTML video\n</video>\n→ Trình duyệt tự chọn định dạng nó hỗ trợ.\n\n* CHÈN ÂM THANH: thẻ <audio>\n\nCú pháp:\n<audio src=\"đường_dẫn\" controls></audio>\n\nĐịnh dạng phổ biến: mp3, wav, ogg.\nĐiểm khác biệt với <video>:\n- Không có thuộc tính width, height (không hiển thị khung hình).\n- Không có thuộc tính poster.\n- Có controls và autoplay tương tự <video>.\n\nVí dụ:\n<audio src=\"audio/quoc_ca.mp3\" controls autoplay></audio>\n\n* KHUNG NỘI TUYẾN: thẻ <iframe>\n\nKhung nội tuyến (inline frame) là một khung nhìn chứa tài nguyên web khác trong trang web hiện tại. Dùng khi cần nhúng nội dung từ YouTube, Google Maps, trang web khác,...\n\nCú pháp:\n<iframe src=\"đường_dẫn\" width=\"...\" height=\"...\"></iframe>\n\nCác thuộc tính thường dùng:\n- src: đường dẫn tới nội dung hiển thị trong khung.\n- width, height: kích thước khung nội tuyến.\n- id: đặt mã định danh để thẻ <a> có thể mở liên kết vào đây.\n\nKết hợp với thẻ <a> (thuộc tính target):\nĐặt target của <a> bằng id của iframe để mở nội dung liên kết vào trong khung:\n<iframe id=\"khung\" src=\"the_thao.html\" width=\"80%\" height=\"500\"></iframe>\n<a href=\"nghe_thuat.html\" target=\"khung\">Nghệ thuật</a>\n→ Nhấn vào \"Nghệ thuật\" sẽ tải nghe_thuat.html vào trong iframe, không chuyển toàn bộ trang.",
    },
  ],
};

export default extra;
