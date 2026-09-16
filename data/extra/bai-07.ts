import type { LessonExtra } from "@/lib/types";

// Bài 7. HTML và cấu trúc trang web — câu đúng/sai + tự luận (SGK trang 39-45)
const extra: LessonExtra = {
  tf: [
    {
      id: "b7-tf1",
      context:
        "Bạn Mai mở phần mềm Notepad++, gõ đoạn mã dưới đây rồi lưu thành tệp trang-cua-toi.html và nháy đúp để mở bằng trình duyệt Cốc Cốc. Trang hiện ra có một dòng chữ to ở trên, một dòng kẻ ngang và một dòng chữ thường bên dưới. Mai thắc mắc hai điều: vì sao mình gõ tận năm dấu cách giữa hai chữ mà trên trình duyệt chỉ thấy có một dấu cách, và vì sao dòng chữ \"Trang của tôi\" lại không hiện ra giữa trang.",
      code:
        "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset = \"utf-8\">\n    <title>Trang của tôi</title>\n  </head>\n  <body>\n    <h1>Chào các bạn</h1>\n    <hr>\n    <p>Đây     là dòng cuối</p>\n  </body>\n</html>",
      statements: [
        {
          text: "Dòng <!DOCTYPE html> ở đầu tệp không được xem là một phần tử HTML.",
          answer: true,
          explain:
            "Dòng này mang ý nghĩa đặc biệt là thông báo cho trình duyệt biết đây là tệp có định dạng html — có thể coi là dòng khai báo html của tệp văn bản, và sách nói rõ nó không được coi là phần tử HTML.",
        },
        {
          text: "Phần tử <html> là phần tử gốc, ở đây chứa hai phần tử con là <head> và <body>.",
          answer: true,
          explain:
            "Phần tử <html> là bắt buộc, là phần tử gốc (root) và chứa tất cả các phần tử HTML còn lại; nó thường chứa hai phần tử con là <head> và <body> — đúng như đoạn mã của Mai.",
        },
        {
          text: "Năm dấu cách Mai gõ giữa hai chữ sẽ được trình duyệt hiển thị đủ cả năm dấu cách.",
          answer: false,
          explain:
            "HTML và trình duyệt không nhận biết được nhiều dấu cách; gõ bao nhiêu dấu cách máy cũng chỉ hiểu là một. Trình duyệt cũng không nhận biết dấu xuống dòng khi nhấn phím Enter.",
        },
        {
          text: "Dòng chữ \"Trang của tôi\" sẽ hiện to nhất ở giữa trang vì nó nằm trong thẻ <title>.",
          answer: false,
          explain:
            "Phần tử <title> nằm trong <head>, mô tả tên của trang web hiện thời chứ không phải nội dung hiển thị giữa trang. Tên này xuất hiện ở tiêu đề trang và trong danh sách kết quả tìm kiếm. Dòng hiện to nhất giữa trang là <h1>Chào các bạn</h1>.",
        },
      ],
    },
    {
      id: "b7-tf2",
      context:
        "Bạn Páo tập soạn HTML trên một trang hỗ trợ soạn thảo trực tuyến: gõ mã vào khung bên trái rồi bấm nút Run để xem kết quả ở khung bên phải. Páo gõ dòng mã dưới đây và thấy cả dòng hiện màu đỏ, riêng cụm chữ \"lớp 12A\" thì in nghiêng. Sau đó Páo thử viết <hr></hr> thay cho <hr> thì trang vẫn hiện dòng kẻ ngang bình thường, nên Páo kết luận rằng thẻ nào cũng phải có thẻ kết thúc.",
      code: "<p style = \"color : red\">Xin chào <em>lớp 12A</em> thân mến</p>",
      statements: [
        {
          text: "Thẻ <em> được lồng bên trong thẻ <p>, đây là hai thẻ lồng nhau.",
          answer: true,
          explain:
            "Các thẻ HTML có thể lồng nhau; sách lấy đúng ví dụ thẻ <em> lồng bên trong thẻ <p>. Quan hệ lồng nhau này chính là quan hệ cha – con giữa các nút của cây HTML.",
        },
        {
          text: "Cả dòng có màu đỏ là do thuộc tính màu chữ được gán thêm cho thẻ <p>.",
          answer: true,
          explain:
            "Mỗi thẻ có thể đi kèm các thông tin thuộc tính. Ở đây thuộc tính màu chữ được gán cho thẻ <p> nên toàn bộ đoạn văn bản trong cặp thẻ đó có màu đỏ.",
        },
        {
          text: "Kết luận của Páo là đúng: thẻ nào trong HTML cũng bắt buộc phải có thẻ kết thúc.",
          answer: false,
          explain:
            "Phần lớn các thẻ là thẻ đôi, nhưng có một số thẻ đơn chỉ có thẻ bắt đầu, dạng <tên thẻ> hoặc <tên thẻ/> — ví dụ <hr/> (dòng kẻ ngang) và <br/> (ngắt xuống dòng). Việc trang vẫn chạy không chứng minh được kết luận của Páo.",
        },
        {
          text: "Muốn soạn thảo HTML trực tuyến như Páo đang làm thì máy tính không cần kết nối Internet.",
          answer: false,
          explain:
            "Cách soạn thảo trực tuyến yêu cầu máy tính có kết nối Internet và cài đặt trình duyệt chuẩn như Cốc cốc, FireFox, Chrome hay Microsoft Edge. Muốn soạn thảo khi không có mạng thì dùng Notepad, Notepad++ hoặc Sublime Text.",
        },
      ],
    },
    {
      id: "b7-tf3",
      context:
        "Cô giáo cho lớp 12A đoạn văn bản HTML dưới đây và yêu cầu vẽ sơ đồ cây thông tin của nó, sau đó trả lời xem cây có bao nhiêu phần tử gốc. Bạn Dín vẽ ra một cây có nút trên cùng là <p>, bên dưới có ba nhánh. Bạn Mai thì vẽ ba nhánh nối tiếp nhau thành một chuỗi từ trên xuống, vì bạn cho rằng thẻ nào viết trước thì là cha của thẻ viết sau.",
      code: "<p>Thông tin này in <b>đậm</b>, in <i>nghiêng</i>, in <u>gạch dưới</u>, in bình thường.</p>",
      statements: [
        {
          text: "Cây HTML của đoạn văn bản này có đúng một phần tử gốc là <p>.",
          answer: true,
          explain:
            "Gốc của cây HTML là phần tử bao ngoài chứa tất cả các phần tử còn lại. Ở đoạn này, mọi thẻ đều nằm trong cặp <p>…</p> nên <p> là phần tử gốc duy nhất.",
        },
        {
          text: "Ba phần tử <b>, <i> và <u> đều là con của phần tử <p>.",
          answer: true,
          explain:
            "Cả ba đều nằm trực tiếp bên trong cặp thẻ <p>…</p> nên đều là nút con của <p> — cách vẽ của bạn Dín là đúng.",
        },
        {
          text: "Ba phần tử <b>, <i> và <u> lồng vào nhau theo quan hệ cha – con như bạn Mai vẽ.",
          answer: false,
          explain:
            "Ba phần tử này rời nhau, mỗi phần tử đóng lại trước khi phần tử sau mở ra, nên chúng cùng cấp chứ không lồng nhau. Thứ tự viết trước – sau không tạo ra quan hệ cha – con; chỉ sự lồng nhau mới tạo ra quan hệ đó.",
        },
        {
          text: "Cây HTML của một tệp html hoàn chỉnh có thể có nhiều phần tử gốc khác nhau.",
          answer: false,
          explain:
            "Mỗi tệp html hoàn chỉnh chỉ có một phần tử gốc duy nhất là <html>, chứa tất cả các phần tử HTML còn lại của trang web.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b7-es1",
      q: "Nêu sự giống nhau và khác nhau giữa thẻ HTML và phần tử HTML. Cho ví dụ minh hoạ.",
      answer:
        "* GIỐNG NHAU\n- Cả hai đều là những khái niệm cơ bản của ngôn ngữ HTML, dùng để thiết lập cấu trúc và định dạng nội dung của trang web.\n- Đều được viết trong tệp văn bản nguồn có phần mở rộng .html hoặc .htm.\n- Tên thẻ và tên phần tử trùng nhau (ví dụ thẻ <p> ứng với phần tử <p>).\n\n* KHÁC NHAU\n\nTHẺ HTML (tag)\n- Là các kí tự đánh dấu đặc biệt nằm trong hai dấu \"<\" và \">\".\n- Chỉ là phần ĐÁNH DẤU, không bao gồm nội dung.\n- Thông thường mỗi thẻ gồm thẻ bắt đầu (opening tag) và thẻ kết thúc (closing tag) — thẻ kết thúc có thêm dấu \"/\", ví dụ </p>. Một số ít là thẻ đơn, chỉ có thẻ bắt đầu, ví dụ <hr/>, <br/>.\n- Mỗi thẻ có thể đi kèm các thông tin thuộc tính, ví dụ <p style = \"color : red\">.\n\nPHẦN TỬ HTML (element)\n- Là TOÀN BỘ phần thẻ VÀ nội dung của thẻ: thẻ bắt đầu + nội dung nằm giữa + thẻ kết thúc.\n- Là khái niệm cơ bản của trang html; mỗi tệp HTML là tập hợp các phần tử HTML.\n- Các phần tử có thể độc lập, rời nhau hoặc lồng nhau, tạo thành cây HTML với quan hệ cha – con.\n- Lưu ý: các thẻ đơn cùng với nội dung của nó cũng được gọi là phần tử HTML.\n\n* VÍ DỤ\nTrong dòng mã: <p>Đây là đoạn văn bản.</p>\n- THẺ là <p> và </p> (chỉ riêng hai cụm kí tự đánh dấu).\n- PHẦN TỬ là cả cụm <p>Đây là đoạn văn bản.</p> (gồm cả hai thẻ và nội dung ở giữa).\n\nMột ví dụ về lồng nhau: <p> Trang này được lập bởi <em>nhóm bạn bè</em> thân thiết </p> — phần tử <em> là con của phần tử <p>.\n\n* LƯU Ý THÊM: dòng <!DOCTYPE html> ở đầu tệp KHÔNG được xem là phần tử HTML.",
    },
    {
      id: "b7-es2",
      q: "Trình bày cấu trúc cơ bản của một tệp HTML và vai trò của từng phần tử chính. Kể tên các cách soạn thảo tệp HTML.",
      answer:
        "* CẤU TRÚC CƠ BẢN CỦA MỘT TỆP HTML\n\n1. <!DOCTYPE html> — dòng đầu tiên, KHÔNG được coi là phần tử HTML. Mang ý nghĩa thông báo cho trình duyệt biết đây là tệp có định dạng html; có thể coi là dòng khai báo html của tệp văn bản.\n\n2. <html> — phần tử BẮT BUỘC, là phần tử gốc (root) và chứa tất cả các phần tử HTML còn lại của trang web. Trong sơ đồ cây HTML, đây là nút gốc. Thường chứa hai phần tử con là <head> và <body>.\n\n3. <head> — chứa các phần tử có liên quan chung đến toàn bộ trang web. Trong <head> thường có <title>; ngoài ra còn có thể có <meta>, <style> và <script>.\n\n4. <body> — chứa tất cả các phần tử còn lại là thông tin của trang web (phần nội dung hiển thị).\n\n5. <meta> — nằm trong <head>, dùng để mô tả các thông tin bổ sung của trang web như cách mã hoá Unicode, từ khoá dùng để tìm kiếm trang, tên tác giả. Ví dụ <meta charset = \"utf-8\"> mô tả cách mã hoá văn bản theo mã UTF-8.\n\n6. <title> — nằm trong <head>, mô tả tên của trang web hiện thời; tên này sẽ xuất hiện trong danh sách kết quả tìm kiếm. Nội dung phải là văn bản thường và không được phép chứa các phần tử con.\n\n7. Các thẻ định dạng văn bản thường dùng: các thẻ tiêu đề theo thứ tự giảm cấp dần <h1>, <h2>, <h3>, <h4>, <h5>, <h6>; thẻ <p> mô tả một đoạn văn bản hoàn chỉnh.\n\n* CÂY HTML: cấu trúc chung của trang web có dạng một cây thông tin các phần tử HTML có quan hệ cha – con (lồng nhau), nút gốc là phần tử <html>.\n\n* LƯU Ý: văn bản HTML không nhận biết kí tự xuống dòng (nhấn phím Enter) để kết thúc đoạn văn bản, cũng không nhận biết nhiều dấu cách liên tiếp.\n\n* CÁC CÁCH SOẠN THẢO TỆP HTML\n\n1. Dùng phần mềm soạn thảo văn bản đơn giản: Notepad có sẵn trên Windows (trên MacOS có TextEdit tương tự). Soạn thảo văn bản không định dạng, chỉ có một số chức năng chỉnh sửa cơ bản.\n\n2. Dùng phần mềm soạn thảo HTML chuyên nghiệp nguồn mở:\n- Notepad++ — phần mềm soạn thảo chương trình đa năng, hỗ trợ nhiều ngôn ngữ trong đó có HTML; miễn phí, mã nguồn mở. Cần thực hiện lệnh Language → H → HTML để chọn ngôn ngữ HTML.\n- Sublime Text — tương tự Notepad++, có phiên bản cơ bản miễn phí. Cần thực hiện lệnh View → Syntax → HTML.\n\n3. Dùng trang web hỗ trợ soạn thảo HTML trực tuyến: yêu cầu máy tính có kết nối Internet và trình duyệt chuẩn (Cốc cốc, FireFox, Chrome, Microsoft Edge). Soạn thảo ở khung bên trái, nháy nút Run để kiểm tra kết quả hiển thị ở khung bên phải. Ví dụ: w3schools.com, tutorialspoint.com.",
    },
  ],
};

export default extra;
