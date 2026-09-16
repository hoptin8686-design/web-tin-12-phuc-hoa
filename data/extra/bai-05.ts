import type { LessonExtra } from "@/lib/types";

// Bài 5. Thực hành chia sẻ tài nguyên trên mạng — câu đúng/sai + tự luận
// (SGK trang 26-33)
const extra: LessonExtra = {
  tf: [
    {
      id: "b5-tf1",
      context:
        "Thầy giáo hướng dẫn lớp 12A thực hành chia sẻ thư mục giữa hai máy MAY_1 và MAY_2 trong phòng thực hành. Trước khi bắt đầu, thầy yêu cầu cả lớp kiểm tra ba việc: đặt mạng của phòng về chế độ Private, kéo Network discovery và File and printer sharing sang On, rồi tạm tắt Microsoft Defender Firewall. Bạn Mai thắc mắc vì sao đang yên lành lại phải tắt tường lửa, còn bạn Páo thì lo tắt xong máy sẽ nhiễm virus ngay lập tức.",
      statements: [
        {
          text: "Kéo Network discovery sang On là để các máy khác trong mạng nhìn thấy được máy này.",
          answer: true,
          explain:
            "Bật Network discovery cho phép các máy tính khác trong mạng \"nhìn thấy\" máy này; khi đó tên máy sẽ xuất hiện trên giao diện của File Browser, ví dụ MAY_1 và MAY_2.",
        },
        {
          text: "Tường lửa là phần mềm kiểm soát truy cập máy tính từ bên ngoài nhằm ngăn ngừa xâm nhập, tấn công.",
          answer: true,
          explain:
            "Đúng định nghĩa trong sách. Tường lửa ngăn ngừa các nguy cơ xâm nhập, tấn công từ bên ngoài như từ Internet; ở Windows 10 và 11 là tường lửa Defender, mặc định được kích hoạt.",
        },
        {
          text: "Phải đặt mạng của phòng về chế độ Public thì các máy mới chia sẻ được tài nguyên cho nhau.",
          answer: false,
          explain:
            "Ngược lại. Mạng công cộng (Public) được dùng ở nhà ga, sân bay, quán cà phê nhằm hạn chế nguy cơ lộ thông tin. Muốn chia sẻ tài nguyên thì phải đặt về mạng riêng (Private).",
        },
        {
          text: "Tường lửa luôn ngăn chặn mọi truy cập tài nguyên từ bên ngoài, kể cả của người đã được cấp tài khoản.",
          answer: false,
          explain:
            "Sách nói rõ tường lửa không ngăn chặn việc truy cập tài nguyên nếu người sử dụng được đánh giá là tin cậy, ví dụ khi người dùng được cấp tài khoản trên máy có tài nguyên. Việc tạm tắt chỉ để thao tác chia sẻ được thuận lợi.",
        },
      ],
    },
    {
      id: "b5-tf2",
      context:
        "Trên máy MAY_1, bạn Dín chia sẻ thư mục SÁCH LỚP 12 cho Everyone. Bạn Mai ngồi ở MAY_2 mở File Explorer, nháy vào Network rồi nháy đúp vào biểu tượng MAY_1 và nhìn thấy thư mục đó, biểu tượng có hình chữ nhật màu xanh. Mai mở được các tệp bên trong ra đọc, nhưng khi sửa vài chữ rồi lưu lại thì máy báo không lưu được. Dín quay lại cửa sổ thiết lập chia sẻ, đổi một mục rồi bảo Mai thử lại thì lần này lưu được.",
      statements: [
        {
          text: "Hình chữ nhật màu xanh trên biểu tượng tượng trưng cho dây cáp mạng, cho biết thư mục nằm trên máy khác.",
          answer: true,
          explain:
            "Đó là dấu hiệu nhận biết thư mục được chia sẻ từ một máy tính khác trên mạng, phân biệt với thư mục nằm ngay trên máy của mình.",
        },
        {
          text: "Ban đầu Mai không lưu được vì Everyone mặc định chỉ có quyền Read.",
          answer: true,
          explain:
            "Everyone được thêm vào danh sách với quyền mặc định là read — chỉ cho phép xem mà không được sửa (write). Đó đúng là hiện tượng Mai gặp phải.",
        },
        {
          text: "Để Mai sửa được, Dín buộc phải xoá thư mục đi rồi chia sẻ lại từ đầu.",
          answer: false,
          explain:
            "Chỉ cần nháy vào hình tam giác nhỏ cạnh chữ Read rồi chọn Read/Write để cấp quyền cả đọc và sửa — không phải xoá và chia sẻ lại.",
        },
        {
          text: "Vì thư mục nằm trên máy khác nên Mai chỉ xem được chứ không bao giờ sửa được, dù được cấp quyền gì.",
          answer: false,
          explain:
            "Với quyền Read/Write, người dùng có thể làm việc với thư mục và tệp trên mạng bình thường như trên máy tính riêng của mình.",
        },
      ],
    },
    {
      id: "b5-tf3",
      context:
        "Phòng hội đồng của trường có sáu máy tính nối trong một mạng cục bộ nhưng chỉ có một chiếc máy in Canon LBP2900 cắm vào máy của cô thư kí. Trước đây, mỗi lần cần in, các thầy cô phải chép tệp vào USB rồi mang sang máy cô thư kí. Sau khi được hướng dẫn, cô thư kí vào Printers & scanners, chọn máy in rồi mở Printer properties, sang thẻ Sharing và đặt lại tên gợi nhớ là \"Máy in mạng Canon LBP2900\". Từ hôm đó các thầy cô in thẳng từ máy của mình.",
      statements: [
        {
          text: "Việc chia sẻ máy in thực chất đã biến máy của cô thư kí thành máy chủ cung cấp dịch vụ in.",
          answer: true,
          explain:
            "Đúng bản chất của việc chia sẻ máy in: máy tính có máy in trở thành Print Server, còn máy in kết nối với nó trở thành máy in mạng dùng chung cho cả phòng.",
        },
        {
          text: "Nên đặt lại tên máy in thành tên gợi nhớ để người dùng trên mạng dễ nhận biết.",
          answer: true,
          explain:
            "Sách khuyến nghị đúng như vậy: thay vì để tên mặc định \"Canon LBP2900\" thì đặt là \"Máy in mạng Canon LBP2900\" để người dùng trên mạng dễ nhận ra.",
        },
        {
          text: "Sau khi chia sẻ, các thầy cô vẫn phải chép tệp vào USB mang sang máy cô thư kí mới in được.",
          answer: false,
          explain:
            "Chép dữ liệu đem sang máy có máy in chính là cách phải làm KHI CHƯA chia sẻ. Chia sẻ xong thì mọi máy trong mạng đều gửi lệnh in thẳng tới máy in mạng.",
        },
        {
          text: "Nếu nhiều thầy cô cùng gửi lệnh in một lúc thì máy in sẽ in đè các tài liệu lên nhau.",
          answer: false,
          explain:
            "Máy tính cung cấp dịch vụ in nhận các yêu cầu và xếp thành hàng đợi; khi máy in sẵn sàng, nó điều khiển in lần lượt từng tài liệu được gửi tới.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b5-es1",
      q: "Vì sao trước khi chia sẻ tệp và máy in trong mạng cục bộ lại phải thiết lập môi trường chia sẻ? Nêu các việc phải làm và ý nghĩa của từng việc.",
      answer:
        "* LÍ DO: các phiên bản Windows về sau được kiểm soát rất chặt chẽ về an ninh, nên trước khi chia sẻ dữ liệu cần phải nới lỏng bớt các hạn chế thì các máy mới thấy và dùng được tài nguyên của nhau.\n\n* BA VIỆC PHẢI LÀM:\n\n1. THIẾT LẬP CHẾ ĐỘ MẠNG RIÊNG (Private)\n- Windows từ phiên bản 10 cho phép đặt mạng riêng (Private) hoặc mạng công cộng (Public).\n- Mạng công cộng thường dùng ở nhà ga, sân bay, quán cà phê… nhằm hạn chế nguy cơ lộ thông tin.\n- Mạng riêng là mạng của nhóm người dùng có độ tin cậy cao hơn, có thể chia sẻ tài nguyên với nhau.\n\n2. CHO PHÉP NHÌN THẤY VÀ CHO PHÉP CHIA SẺ\n- Vào Control Panel → Network and Internet → Network and Sharing Center → Advanced Sharing Settings.\n- Kéo Network discovery sang On: cho các máy khác trong mạng \"nhìn thấy\" máy này; khi đó tên máy xuất hiện trên File Browser.\n- Kéo File and printer sharing sang On: cho phép chia sẻ tệp và máy in.\n- (Nếu muốn chia sẻ thư mục công cộng thì bật thêm Public folder sharing; dữ liệu trong thư mục Public mặc định là KHÔNG chia sẻ.)\n\n3. TẠM DỪNG TƯỜNG LỬA (firewall)\n- Tường lửa là phần mềm kiểm soát truy cập máy tính từ bên ngoài nhằm ngăn ngừa nguy cơ xâm nhập, tấn công từ bên ngoài như từ Internet.\n- Lưu ý: tường lửa KHÔNG ngăn chặn việc truy cập tài nguyên nếu người sử dụng được đánh giá là tin cậy, ví dụ khi người dùng được cấp tài khoản truy cập trên máy có tài nguyên.\n- Dù vậy, để việc chia sẻ thuận lợi thì nên tạm dừng tường lửa trong thời gian chia sẻ: Privacy and Security → Windows Security → FireWall Network Protection → Private Network, kéo Microsoft Defender Firewall về Off.\n\n* LƯU Ý CHUNG: việc chia sẻ có thể gây rủi ro — dữ liệu bị truy cập với mục đích xấu hoặc bị làm hỏng bởi một người dùng trên mạng. Vì thế luôn cần các cơ chế bảo mật và cấp phép khi chia sẻ tài nguyên, và nên bật lại tường lửa sau khi xong việc.",
    },
    {
      id: "b5-es2",
      q: "Trình bày các bước chia sẻ một thư mục cho mọi người dùng trong mạng cục bộ và cách huỷ bỏ chia sẻ. Chia sẻ máy in trong mạng có lợi ích gì và cần những điều kiện nào?",
      answer:
        "* CHIA SẺ MỘT THƯ MỤC (ví dụ thư mục SÁCH LỚP 12 trên máy MAY_1)\n\nBước 1. Nháy nút phải chuột lên biểu tượng thư mục, chọn Properties để mở cửa sổ Properties.\n\nBước 2. Nháy chuột vào thẻ Sharing (Chia sẻ). Giao diện gồm ba mục: Network File and Folder Sharing (chia sẻ tệp, thư mục trên mạng), Advanced Sharing (chia sẻ nâng cao) và Password Protection (bảo vệ bằng mật khẩu). Nháy nút Share… để mở cửa sổ thiết lập người được chia sẻ.\n\nBước 3. Thiết lập chế độ chia sẻ.\n- Nháy nút mũi tên để mở danh sách người dùng (ví dụ user11, user12, Everyone, Create a new user…).\n- Chọn Everyone rồi chọn Add để thêm vào danh sách người được chia sẻ.\n- Everyone có quyền mặc định (Permission Level) là read — chỉ được xem, không được sửa.\n- Muốn cho sửa thì nháy hình tam giác nhỏ cạnh chữ Read rồi chọn Read/Write. Chọn Remove để huỷ chia sẻ với người dùng đó.\n- Nháy nút Share để hoàn tất.\n\nBước 4. Truy cập từ máy khác: mở File Explorer → Network → nháy đúp vào biểu tượng máy (ví dụ MAY_1) sẽ thấy các thư mục đã chia sẻ. Biểu tượng của chúng có hình chữ nhật màu xanh tượng trưng cho dây cáp mạng.\n\n* HUỶ BỎ CHIA SẺ\n- Chọn thư mục cần huỷ, lần lượt làm như khi chia sẻ để mở Properties → Sharing, sau đó nháy nút Advanced Sharing…\n- Trong cửa sổ Advanced Sharing, nếu thư mục đang được chia sẻ thì ô Share this folder có dấu tích. Nháy vào ô đó để huỷ dấu tích, rồi chọn OK hoặc Apply.\n\n* CHIA SẺ MÁY IN\n\nLợi ích: nếu máy in không được chia sẻ thì mỗi lần cần in phải sao chép dữ liệu đem sang máy tính có máy in. Chia sẻ máy in cho phép mọi máy trong mạng đều in được từ chỗ ngồi của mình bằng một chiếc máy in chung. Máy tính cung cấp dịch vụ in nhận yêu cầu từ các máy khác, xếp thành hàng đợi và điều khiển in lần lượt khi máy in sẵn sàng.\n\nBản chất: chia sẻ máy in thực chất là biến máy tính có máy in đó thành một máy chủ cung cấp dịch vụ in (Print Server).\n\nHai điều kiện cần:\n1. Thiết lập máy tính cung cấp dịch vụ in trên mạng; máy in kết nối với máy này sẽ trở thành máy in chung trên mạng, gọi là máy in mạng.\n2. Máy tính cung cấp dịch vụ in phải cài đặt máy in mạng bình thường như cài máy in riêng, sau đó thiết lập chế độ chia sẻ (Printer properties → thẻ Sharing). Còn các máy tính khác chỉ cần khai báo sử dụng máy in mạng.",
    },
  ],
};

export default extra;
