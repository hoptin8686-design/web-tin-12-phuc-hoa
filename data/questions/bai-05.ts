import type { Question } from "@/lib/types";

// Bài 5. Thực hành chia sẻ tài nguyên trên mạng (SGK trang 26-33)
// 1. Chia sẻ tệp và thư mục: thiết lập môi trường chia sẻ (mạng riêng,
//    Network discovery, File and printer sharing, tạm tắt tường lửa),
//    chia sẻ thư mục và cấp quyền Read / Read-Write, huỷ bỏ chia sẻ.
// 2. Chia sẻ máy in: máy chủ cung cấp dịch vụ in, máy in mạng, kết nối từ máy khác.
const questions: Question[] = [
  {
    id: "b5-01",
    q: "Tài nguyên của một máy tính trên mạng có thể là những gì?",
    options: [
      "Dữ liệu, phần mềm hay thiết bị của máy tính đó trên mạng",
      "Chỉ các tệp văn bản và thư mục chứa chúng trên ổ đĩa cứng",
      "Chỉ các thiết bị phần cứng như máy in, ổ đĩa và máy quét",
      "Chỉ dung lượng bộ nhớ còn trống của máy tính trong mạng đó",
    ],
    answer: 0,
    explain:
      "Tài nguyên của một máy tính trên mạng có thể là dữ liệu, phần mềm hay thiết bị. Bài này tìm hiểu hai loại tài nguyên thường gặp nhất được thiết kế sẵn trong hệ điều hành: chia sẻ tệp và chia sẻ máy in.",
  },
  {
    id: "b5-02",
    q: "Chia sẻ tài nguyên trong mạng cục bộ nghĩa là gì?",
    options: [
      "Cho phép người ở máy này nhìn thấy và dùng tài nguyên máy khác",
      "Sao chép toàn bộ dữ liệu của máy này sang tất cả các máy khác",
      "Gửi tệp qua thư điện tử cho những người cùng làm việc chung phòng",
      "Tải dữ liệu của tất cả các máy lên một dịch vụ lưu trữ đám mây",
    ],
    answer: 0,
    explain:
      "Chia sẻ tài nguyên trong mạng cục bộ là cho phép một người từ một máy tính có thể \"nhìn thấy\" và sử dụng tài nguyên trên một máy tính khác trong mạng — dữ liệu vẫn nằm nguyên ở máy chủ tài nguyên chứ không bị sao chép đi.",
  },
  {
    id: "b5-03",
    q: "Để hai máy tính chia sẻ được tài nguyên qua mạng cục bộ cần những điều kiện nào?",
    options: [
      "Kết nối hai máy qua mạng và người chia sẻ phải cấp quyền truy cập",
      "Hai người dùng phải kết bạn với nhau tương tự như trên mạng xã hội",
      "Người được chia sẻ phải đề xuất yêu cầu và trả phí truy cập tài nguyên",
      "Hai máy phải cùng cài đặt một phần mềm chia sẻ của một bên thứ ba",
    ],
    answer: 0,
    explain:
      "Chia sẻ tài nguyên trong mạng cục bộ là công việc kĩ thuật phục vụ công việc nội bộ của tổ chức sở hữu mạng, nên không có yêu cầu \"kết bạn\" hay \"trả phí\". Việc chia sẻ được thực hiện theo yêu cầu công việc và cần người chủ tài nguyên cấp phép.",
  },
  {
    id: "b5-04",
    q: "Vì sao trước khi chia sẻ cần đặt máy về chế độ mạng riêng (Private)?",
    options: [
      "Vì mạng riêng là mạng của nhóm người dùng có độ tin cậy cao hơn",
      "Vì mạng riêng có tốc độ truyền dữ liệu nhanh hơn mạng công cộng",
      "Vì mạng công cộng chỉ dùng được ở nhà ga, sân bay và quán cà phê",
      "Vì mạng riêng không cần mật khẩu nên thao tác chia sẻ nhanh hơn",
    ],
    answer: 0,
    explain:
      "Mạng công cộng (Public) thường được thiết lập ở nhà ga, sân bay, quán cà phê… nhằm hạn chế nguy cơ lộ thông tin. Mạng riêng (Private) được hiểu là mạng của nhóm người dùng có độ tin cậy cao hơn, có thể chia sẻ tài nguyên với nhau.",
  },
  {
    id: "b5-05",
    q: "Tường lửa (firewall) là gì?",
    options: [
      "Phần mềm kiểm soát truy cập máy tính từ bên ngoài để ngăn xâm nhập",
      "Thiết bị phần cứng đặt giữa modem và router để lọc dữ liệu vào ra",
      "Phần mềm quét và diệt các tệp chứa mã độc trên ổ đĩa của máy tính",
      "Bức tường ngăn cách phòng đặt máy chủ với các phòng làm việc khác",
    ],
    answer: 0,
    explain:
      "Tường lửa là phần mềm dùng để kiểm soát truy cập máy tính từ bên ngoài nhằm ngăn ngừa các nguy cơ xâm nhập, tấn công từ bên ngoài như từ Internet. Ở Windows 10 và 11, tường lửa Defender được mặc định kích hoạt.",
  },
  {
    id: "b5-06",
    q: "Vì sao nên tạm dừng tường lửa trong thời gian chia sẻ tài nguyên?",
    options: [
      "Để việc chia sẻ tài nguyên được thuận lợi trong thời gian chia sẻ",
      "Vì tường lửa luôn ngăn chặn mọi truy cập tài nguyên từ bên ngoài",
      "Vì tường lửa làm chậm tốc độ truyền dữ liệu giữa các máy trong LAN",
      "Vì tường lửa chỉ hoạt động được khi máy tính không nối vào mạng nào",
    ],
    answer: 0,
    explain:
      "Sách nói rõ tường lửa KHÔNG ngăn chặn việc truy cập tài nguyên nếu người sử dụng được đánh giá là tin cậy, ví dụ khi người dùng được cấp tài khoản truy cập trên máy có tài nguyên. Dù vậy, để việc chia sẻ thuận lợi thì nên tạm dừng tường lửa trong thời gian chia sẻ.",
  },
  {
    id: "b5-07",
    q: "Trong cửa sổ Advanced sharing settings, cần chuyển hai mục nào sang On để chia sẻ được?",
    options: [
      "Network discovery và File and printer sharing đều chuyển sang On",
      "Password protected sharing và Caching đều được chuyển sang On",
      "Microsoft Defender Firewall và Private Network chuyển sang On",
      "Set as default và Render print jobs on client computers bật lên",
    ],
    answer: 0,
    explain:
      "Kéo con trượt Network discovery sang On để các máy khác trong mạng \"nhìn thấy\" máy này, và File and printer sharing sang On để cho phép chia sẻ tệp và máy in. Khi được nhìn thấy, tên máy sẽ xuất hiện trên giao diện của File Browser.",
  },
  {
    id: "b5-08",
    q: "Thư mục Public trên Windows nằm ở đâu và mặc định được chia sẻ như thế nào?",
    options: [
      "Ở This PC → System (C:) → Users → Public, mặc định không chia sẻ",
      "Ở This PC → System (C:) → Users → Public, mặc định đã chia sẻ sẵn",
      "Ở ổ đĩa DATA (D:) do người dùng tự tạo, mặc định không chia sẻ",
      "Ở thư mục Network trong File Explorer, mặc định đã chia sẻ sẵn",
    ],
    answer: 0,
    explain:
      "Windows thiết lập sẵn thư mục Public ở This PC → System (C:) → Users → Public với các thư mục con Public Documents, Public Downloads, Public Music… Dữ liệu trong Public mặc định là không chia sẻ; chỉ khi bật Public folder sharing lên On thì mọi người trên mạng mới nhìn thấy.",
  },
  {
    id: "b5-09",
    q: "Khi thêm Everyone vào danh sách người được chia sẻ, quyền mặc định là gì?",
    options: [
      "Read — chỉ được xem dữ liệu chứ không được sửa (write)",
      "Read/Write — vừa được xem vừa được sửa dữ liệu đó",
      "Owner — có toàn quyền với thư mục được chia sẻ đó",
      "Remove — bị huỷ chia sẻ cho tới khi được cấp lại quyền",
    ],
    answer: 0,
    explain:
      "Everyone được thêm vào danh sách người dùng với quyền mặc định (Permission Level) là read — chỉ được đọc dữ liệu. Quyền read chỉ cho phép xem mà không được sửa (write).",
  },
  {
    id: "b5-10",
    q: "Muốn người được chia sẻ có thể sửa được dữ liệu trong thư mục thì làm thế nào?",
    options: [
      "Chọn Read/Write trong danh sách Permission Level của người đó",
      "Chọn Remove trong danh sách Permission Level của người dùng đó",
      "Chọn Create a new user để tạo một tài khoản mới cho người đó",
      "Chọn Set as default trong cửa sổ Properties của thư mục đó",
    ],
    answer: 0,
    explain:
      "Nháy chuột vào hình tam giác nhỏ cạnh chữ Read rồi chọn Read/Write để chỉ định quyền cả đọc và sửa. Chọn Remove là để huỷ chia sẻ với người dùng đó, còn Create a new user là tạo người dùng mới.",
  },
  {
    id: "b5-11",
    q: "Nhìn vào đâu để biết một thư mục đang nằm trên máy tính khác trên mạng?",
    options: [
      "Biểu tượng có hình chữ nhật màu xanh tượng trưng cho dây cáp mạng",
      "Biểu tượng có hình ổ khoá màu vàng tượng trưng cho quyền truy cập",
      "Biểu tượng có hình mũi tên cong tượng trưng cho lối tắt tới thư mục",
      "Biểu tượng có hình đám mây tượng trưng cho dữ liệu lưu trên đám mây",
    ],
    answer: 0,
    explain:
      "Biểu tượng của các thư mục được chia sẻ có hình chữ nhật màu xanh, tượng trưng cho dây cáp mạng, cho biết đó là thư mục trên một máy tính khác trên mạng. Nháy đúp chuột vào để mở và xem các tệp, thư mục con bên trong.",
  },
  {
    id: "b5-12",
    q: "Muốn huỷ bỏ việc chia sẻ một thư mục thì làm thế nào?",
    options: [
      "Vào Advanced Sharing rồi bỏ dấu tích ở ô Share this folder",
      "Vào Advanced Sharing rồi đặt Limit the number of users về 0",
      "Xoá thư mục đó đi rồi tạo lại một thư mục mới cùng tên như cũ",
      "Tắt máy tính chứa thư mục đó để các máy khác không truy cập được",
    ],
    answer: 0,
    explain:
      "Mở Properties → Sharing → Advanced Sharing… Nếu thư mục đang được chia sẻ thì ô Share this folder có dấu tích; nháy chuột vào ô đó để huỷ dấu tích rồi chọn OK hoặc Apply.",
  },
  {
    id: "b5-13",
    q: "Việc chia sẻ máy in trong mạng thực chất là gì?",
    options: [
      "Biến máy tính có máy in thành máy chủ cung cấp dịch vụ in",
      "Nối máy in trực tiếp vào switch bằng một sợi cáp mạng riêng",
      "Cài đặt trình điều khiển máy in lên tất cả các máy trong mạng",
      "Sao chép tài liệu cần in sang máy tính có nối máy in để in ra",
    ],
    answer: 0,
    explain:
      "Việc chia sẻ máy in thực chất là biến máy tính có máy in đó thành một máy chủ cung cấp dịch vụ in (Print Server). Máy in kết nối với máy này sẽ trở thành máy in chung trên mạng, hay gọi là máy in mạng.",
  },
  {
    id: "b5-14",
    q: "Máy tính cung cấp dịch vụ in xử lí các yêu cầu in gửi tới như thế nào?",
    options: [
      "Xếp thành hàng đợi rồi điều khiển in lần lượt khi máy sẵn sàng",
      "In đồng thời tất cả tài liệu nhận được để tiết kiệm thời gian chờ",
      "Chỉ nhận in tài liệu của máy tính được cấp quyền Read/Write",
      "Gửi trả tài liệu về máy gửi nếu máy in đang bận in việc khác",
    ],
    answer: 0,
    explain:
      "Máy tính cung cấp dịch vụ in nhận yêu cầu gửi đến từ các máy khác trong mạng và xếp thành hàng đợi. Khi máy in sẵn sàng, nó điều khiển máy in lần lượt các tài liệu được gửi tới.",
  },
  {
    id: "b5-15",
    q: "Ở máy tính muốn dùng máy in mạng, nếu tìm mà không thấy máy in trong danh sách thì làm gì?",
    options: [
      "Chọn The printer that I want isn't listed rồi nháy Browse để tìm",
      "Chọn Set as default để đặt máy in đó thành máy in mặc định",
      "Chọn Printer properties rồi mở thẻ Sharing để chia sẻ máy in",
      "Chọn Run the troubleshooter để hệ điều hành tự sửa lỗi kết nối",
    ],
    answer: 0,
    explain:
      "Nếu không thấy máy in mạng muốn kết nối, hãy chọn The printer that I want isn't listed để mở cửa sổ tìm máy in mạng, rồi nháy Browse… để duyệt các máy tính trong mạng và chọn máy có chia sẻ máy in.",
  },
  {
    id: "b5-16",
    q: "Chia sẻ máy in trong mạng cục bộ mang lại lợi ích gì?",
    options: [
      "Mọi máy trong mạng đều in được mà không phải chép dữ liệu đi",
      "Máy in sẽ in nhanh hơn nhiều lần so với khi chỉ nối vào một máy",
      "Tài liệu in ra có chất lượng cao hơn nhờ được xử lí trên mạng",
      "Máy in tự động sao lưu mọi tài liệu đã in vào máy chủ của mạng",
    ],
    answer: 0,
    explain:
      "Nếu máy in không được chia sẻ qua mạng thì mỗi lần cần in phải sao chép dữ liệu đem sang máy tính có máy in — vừa mất công vừa mất thời gian. Chia sẻ máy in giúp một chiếc máy in phục vụ được cả phòng làm việc.",
  },
];

export default questions;
