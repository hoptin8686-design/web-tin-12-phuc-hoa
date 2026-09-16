import type { LessonTheory } from "@/lib/types";

// Bài 5. Thực hành chia sẻ tài nguyên trên mạng — SGK Tin học 12 (ICT, Kết nối
// tri thức), trang 26–33. Bài thực hành nên phần lớn nội dung là các bước thao
// tác; giữ nguyên tên các mục menu tiếng Anh đúng như trên giao diện Windows
// (Advanced Sharing Settings, Network discovery, Everyone, Read/Write…) vì học
// sinh phải tìm đúng chữ đó trên màn hình.
//
// SGK minh hoạ theo giao diện Windows 11; các phiên bản thấp hơn giao diện có
// thể khác.

const theory: LessonTheory = {
  minutes: 12,
  intro:
    "Bài này trả lời một câu rất thực tế: **làm sao để máy này mở được thư mục nằm trên máy kia**, và **làm sao cả phòng máy in chung một máy in**. Đây là bài thực hành nên em vừa đọc vừa làm theo trên máy sẽ nhớ lâu hơn — nhưng nhớ được thứ tự các bước và ý nghĩa từng bước thì làm bài kiểm tra cũng đủ.",

  sections: [
    {
      id: "khai-niem",
      emoji: "🔑",
      heading: "Chia sẻ là gì?",
      blocks: [
        {
          kind: "note",
          text: "**Tài nguyên** của một máy tính trên mạng có thể là **dữ liệu, phần mềm hay thiết bị**. **Chia sẻ tài nguyên** trong mạng cục bộ là cho phép một người từ một máy tính có thể **“nhìn thấy” và sử dụng tài nguyên trên một máy tính khác** trong mạng.",
        },
        {
          kind: "text",
          text: "Việc chia sẻ **có thể gây rủi ro**: dữ liệu có thể bị truy cập với mục đích xấu hay bị làm hỏng bởi một người dùng trên mạng. Vì thế luôn cần các **cơ chế bảo mật và cấp phép** khi chia sẻ tài nguyên.",
        },
        {
          kind: "compare",
          left: {
            emoji: "❌",
            title: "KHÔNG cần những thứ này",
            items: [
              "Không cần **“kết bạn”** với nhau như trên mạng xã hội",
              "Không cần **đề xuất yêu cầu và trả phí** truy cập",
            ],
          },
          right: {
            emoji: "✅",
            title: "Chỉ cần đúng hai điều kiện",
            items: [
              "**Kết nối** hai máy tính với nhau qua mạng",
              "Người chia sẻ phải **cấp quyền truy cập** tài nguyên — được xem, được sửa, được xoá…",
            ],
          },
        },
        {
          kind: "text",
          text: "Lí do rất đơn giản: chia sẻ tài nguyên trong mạng cục bộ là **công việc có tính kĩ thuật, phục vụ công việc nội bộ** của tổ chức sở hữu mạng cục bộ đó. Nó được thực hiện **theo yêu cầu công việc** và cần được **người chủ tài nguyên cấp phép** thông qua các biện pháp kĩ thuật trên hệ điều hành.",
        },
        {
          kind: "check",
          q: "Để hai máy tính có thể chia sẻ tài nguyên qua mạng cục bộ, cần những điều kiện nào?",
          options: [
            "Kết nối hai máy qua mạng, và người chia sẻ cấp quyền truy cập",
            "Hai người phải “kết bạn” với nhau như trên mạng xã hội",
            "Người được chia sẻ phải đề xuất yêu cầu và trả phí truy cập",
            "Hai máy phải cùng đăng nhập một tài khoản Microsoft",
          ],
          answer: 0,
          explain:
            "Chỉ cần **kết nối mạng** và **cấp quyền truy cập**. Chia sẻ trong LAN là việc kĩ thuật phục vụ công việc nội bộ, nên **không có yêu cầu “kết bạn” hay “trả phí”**.",
        },
      ],
    },

    {
      id: "chuan-bi",
      emoji: "🛠️",
      heading: "Chuẩn bị máy",
      blocks: [
        {
          kind: "text",
          text: "Các phiên bản Windows sau này đều **kiểm soát chặt chẽ về an ninh**, nên trước khi chia sẻ dữ liệu cần **nới lỏng các hạn chế**. Có ba việc phải làm.",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "🏠",
              title: "1. Đặt chế độ mạng riêng",
              text: "Windows từ phiên bản 10 cho phép cài đặt **mạng riêng (Private)** hoặc **mạng công cộng (Public)**. Mạng công cộng thường đặt ở nhà ga, sân bay, quán cà phê… nhằm **hạn chế nguy cơ lộ thông tin**. Mạng riêng là mạng của nhóm người dùng **có độ tin cậy cao hơn**, có thể chia sẻ tài nguyên với nhau.",
            },
            {
              emoji: "👀",
              title: "2. Cho nhìn thấy và cho chia sẻ",
              text: "Bật cho phép các máy khác **nhìn thấy (discoverable)** và cho phép **chia sẻ tệp và máy in (file and printer sharing)**.",
            },
            {
              emoji: "🧱",
              title: "3. Tắt tạm thời tường lửa",
              text: "**Tường lửa (firewall)** là phần mềm kiểm soát truy cập máy tính từ bên ngoài, ngăn ngừa nguy cơ xâm nhập và tấn công từ Internet. Ở Windows 10 và 11, tường lửa **Defender mặc định được kích hoạt** — nên **tạm dừng trong thời gian chia sẻ**.",
            },
          ],
        },
        {
          kind: "steps",
          items: [
            {
              label: "B1",
              title: "Mở chức năng thiết lập chia sẻ nâng cao",
              text: "**Control Panel → Network and Internet → Network and Sharing Center → Advanced Sharing Settings**. Trong hộp thoại, kéo con trượt **Network discovery** và **File and printer sharing** sang **On**. Khi được nhìn thấy, tên máy sẽ xuất hiện trên giao diện của File Browser.",
            },
            {
              label: "B2",
              title: "Thiết lập chia sẻ thư mục công cộng",
              text: "Windows có sẵn thư mục **Public** ở **This PC → System (C:) → Users → Public**, gồm các thư mục con Public Documents, Public Downloads, Public Music, Public Pictures, Public Videos. Dữ liệu trong Public **mặc định là không chia sẻ**; bật **Public folder sharing** thì mọi người dùng trên mạng nhìn thấy toàn bộ những gì có trong Public.",
            },
            {
              label: "B3",
              title: "Dừng tạm thời tường lửa",
              text: "**Privacy and Security → Windows Security → FireWall Network Protection → Private Network**, rồi kéo con trượt **Microsoft Defender Firewall** về **Off**. Khi máy hỏi *“Do you want to allow this app to make change to your device?”* — mặc định là **No** — hãy chọn **Yes** để cho phép.",
            },
          ],
        },
      ],
    },

    {
      id: "chia-se-thu-muc",
      emoji: "📁",
      heading: "Chia sẻ thư mục",
      blocks: [
        {
          kind: "text",
          text: "Mở ứng dụng quản lí tệp **File Explorer**, nháy chuột vào **Network** ở phía dưới bên trái cửa sổ — danh sách những máy tính tham gia mạng cục bộ sẽ hiển thị ra.",
        },
        {
          kind: "figure",
          diagram: "chia-se-thu-muc",
          caption: "Chia sẻ thư mục SÁCH LỚP 12 trên MAY_1 cho tất cả người dùng trong mạng",
        },
        {
          kind: "steps",
          items: [
            {
              label: "B1",
              title: "Mở cửa sổ Properties",
              text: "Nháy **nút phải chuột** lên biểu tượng thư mục cần chia sẻ để mở bảng chọn các công việc, rồi chọn **Properties** (Thuộc tính).",
            },
            {
              label: "B2",
              title: "Vào thẻ Sharing",
              text: "Trong cửa sổ Properties, nháy chuột vào **Sharing** (Chia sẻ). Giao diện có ba mục: **Network File and Folder Sharing** (chia sẻ tệp thư mục trên mạng), **Advanced Sharing** (chia sẻ nâng cao) và **Password Protection** (bảo vệ bằng mật khẩu). Nháy vào nút **Share…**",
            },
            {
              label: "B3",
              title: "Chọn người được chia sẻ và mức quyền",
              text: "Trên một máy tính có thể có nhiều người dùng, ví dụ user11, user12. Chọn người dùng rồi bấm **Add** (Thêm); cũng có thể tạo người dùng mới bằng **Create a new user…**. Bài này chỉ giới hạn chia sẻ cho **tất cả người dùng — Everyone**. Chọn xong bấm **Share** để hoàn tất.",
            },
            {
              label: "B4",
              title: "Truy cập từ máy khác",
              text: "Nháy đúp chuột vào biểu tượng của một máy (ví dụ MAY_1) sẽ thấy tất cả thư mục đã chia sẻ. Người dùng có thể **làm việc với thư mục và tệp trên mạng bình thường như trên máy tính riêng**.",
            },
          ],
        },
        {
          kind: "note",
          text: "Everyone được thêm vào danh sách **mặc định có quyền Read** — chỉ được **đọc, xem mà không được sửa (write)**. Muốn cho sửa thì nháy vào hình tam giác nhỏ cạnh chữ Read rồi chọn **Read/Write**. Chọn **Remove** để huỷ chia sẻ đối với người dùng này.",
        },
        {
          kind: "example",
          title: "Chia sẻ thư mục cũng là chia sẻ thiết bị lưu trữ",
          text: "Về phương diện lưu trữ, có thể xem **toàn bộ một ổ đĩa là thư mục lớn nhất** chứa các thư mục khác. Vì vậy có thể **chia sẻ cả ổ đĩa** giống như chia sẻ thư mục: nháy nút phải chuột vào biểu tượng ổ đĩa, chọn Properties rồi làm y hệt các bước trên.",
        },
        {
          kind: "check",
          q: "Máy A chia sẻ một thư mục cho Everyone nhưng để nguyên mức quyền mặc định. Máy B mở tệp trong thư mục đó thì làm được gì?",
          options: [
            "Vừa xem vừa sửa được nội dung tệp",
            "Chỉ xem được, không sửa được",
            "Không mở được vì chưa nhập mật khẩu",
            "Xoá được tệp nhưng không sửa được",
          ],
          answer: 1,
          explain:
            "Mức quyền mặc định của Everyone là **Read** — chỉ cho **xem mà không được sửa**. Muốn máy B sửa được thì máy A phải đổi mức quyền sang **Read/Write**.",
        },
      ],
    },

    {
      id: "huy-chia-se",
      emoji: "🚫",
      heading: "Huỷ chia sẻ",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "B1",
              title: "Mở cửa sổ Advanced Sharing",
              text: "Chọn thư mục cần huỷ chia sẻ, lần lượt thực hiện **các bước giống hệt như khi chia sẻ** (nháy phải chuột → Properties → Sharing), sau đó nháy chuột chọn nút **Advanced Sharing…**",
            },
            {
              label: "B2",
              title: "Bỏ dấu tích Share this folder",
              text: "Trong cửa sổ Advanced Sharing, nếu thư mục **đang được chia sẻ** thì có **dấu tích ✓ ở ô Share this folder**. Muốn huỷ thì nháy chuột vào ô đó để **bỏ dấu tích**, rồi chọn **OK** hoặc **Apply**.",
            },
          ],
        },
      ],
    },

    {
      id: "chia-se-may-in",
      emoji: "🖨️",
      heading: "Chia sẻ máy in",
      blocks: [
        {
          kind: "example",
          title: "Không chia sẻ thì bất tiện thế nào?",
          text: "Trong phòng làm việc của một cơ quan, các máy tính đều nối trong một LAN nhưng **chỉ có một máy in** nối với một máy tính. Nếu máy in không được chia sẻ qua mạng thì **mỗi lần cần in lại phải sao chép dữ liệu đem sang máy tính có máy in** — vừa mất thời gian vừa dễ nhầm lẫn.",
        },
        {
          kind: "figure",
          diagram: "may-in-mang",
          caption: "Các máy gửi lệnh in về một máy chủ, máy chủ xếp hàng đợi rồi điều khiển máy in in lần lượt",
        },
        {
          kind: "text",
          text: "Máy tính cung cấp dịch vụ in sẽ **nhận yêu cầu gửi đến từ các máy tính khác trong mạng, xếp thành hàng đợi**. Khi máy in sẵn sàng, nó **điều khiển máy in in lần lượt** các tài liệu được gửi tới. Như vậy, việc chia sẻ máy in thực chất là **biến máy tính có máy in đó thành một máy chủ cung cấp dịch vụ in (Print Server)**.",
        },
        {
          kind: "note",
          text: "Để chia sẻ máy in cần **hai điều kiện**: (1) thiết lập được **máy tính cung cấp dịch vụ in** trên mạng — máy in nối với máy này sẽ trở thành **máy in mạng**; (2) máy tính cung cấp dịch vụ in phải **cài đặt máy in bình thường như cài máy in riêng**, sau đó **thiết lập chế độ chia sẻ**. Các máy tính khác **chỉ cần khai báo sử dụng máy in mạng**.",
        },
        {
          kind: "text",
          text: "**a) Thiết lập máy cung cấp dịch vụ in** — làm trên máy có máy in cắm vào:",
        },
        {
          kind: "steps",
          items: [
            {
              label: "B1",
              title: "Mở danh sách máy in",
              text: "**Control Panel → Hardware and Sound – View device and printers → Printers & scanners**.",
            },
            {
              label: "B2",
              title: "Chọn máy in mạng",
              text: "Nháy chuột vào tên máy in muốn chia sẻ, ví dụ máy **Canon LBP2900**.",
            },
            {
              label: "B3",
              title: "Đặt làm máy in mặc định",
              text: "Nháy chuột chọn **Set as default** để đặt máy in thành mặc định.",
            },
            {
              label: "B4",
              title: "Mở cửa sổ thiết lập chia sẻ",
              text: "Chọn **Printer properties**.",
            },
            {
              label: "B5",
              title: "Chia sẻ máy in",
              text: "Trong cửa sổ Properties, chọn thẻ **Sharing**. Nên **đặt lại tên máy in cho gợi nhớ** — thay vì tên mặc định “Canon LBP2900” có thể đặt là “Máy in mạng Canon LBP2900” để người dùng trên mạng dễ nhận biết. Chọn **OK** và **Apply** để xác nhận.",
            },
          ],
        },
        {
          kind: "text",
          text: "**b) Kết nối với máy in mạng từ các máy tính khác:**",
        },
        {
          kind: "steps",
          items: [
            {
              label: "B1",
              title: "Tìm máy in mạng",
              text: "Vào **Printers & scanners** như trên, chọn **Add device** — nút này chuyển thành **Refresh** (làm mới danh sách). Nếu không thấy máy in muốn kết nối, nháy vào **The printer that I want isn’t listed**, rồi ở cửa sổ tìm máy in chọn nút **Browse…**. Các máy tính trong mạng sẽ hiện ra; nháy vào máy chia sẻ máy in (ví dụ MAY_1) thì **danh sách máy in của máy đó hiện ra ở khung bên phải**.",
            },
            {
              label: "B2",
              title: "Thêm máy in mạng",
              text: "Chọn tên máy in cần kết nối rồi nháy **Select** (chọn). Hộp thoại xác nhận xuất hiện — chọn **Next** để chuyển sang công việc tiếp theo.",
            },
            {
              label: "B3",
              title: "Sử dụng máy in mạng",
              text: "Mở ứng dụng soạn thảo văn bản rồi in thử một trang bằng máy in mạng — trong hộp thoại Print, chọn đúng tên máy in vừa thêm.",
            },
          ],
        },
        {
          kind: "check",
          q: "Nói “chia sẻ máy in” thực chất là làm gì?",
          options: [
            "Nối máy in trực tiếp vào bộ định tuyến bằng cáp mạng",
            "Biến máy tính có máy in thành máy chủ cung cấp dịch vụ in (Print Server)",
            "Sao chép trình điều khiển máy in sang tất cả các máy trong mạng",
            "Đặt máy in ở giữa phòng để mọi người cùng dùng",
          ],
          answer: 1,
          explain:
            "Máy tính cung cấp dịch vụ in **nhận yêu cầu từ các máy khác, xếp thành hàng đợi**, rồi khi máy in sẵn sàng thì **điều khiển máy in in lần lượt** từng tài liệu. Nói cách khác, chia sẻ máy in là biến máy tính đó thành một **Print Server**.",
        },
      ],
    },
  ],

  summary: [
    "**Tài nguyên** trên mạng có thể là **dữ liệu, phần mềm hay thiết bị**. Chia sẻ là cho phép người ở máy này **nhìn thấy và sử dụng** tài nguyên trên máy khác trong mạng.",
    "Chỉ cần **hai điều kiện**: máy được **kết nối mạng** và người chủ **cấp quyền truy cập** — không cần “kết bạn” hay trả phí.",
    "Chuẩn bị máy: đặt **mạng riêng (Private)**, bật **Network discovery** và **File and printer sharing**, **tạm tắt tường lửa** trong thời gian chia sẻ.",
    "Chia sẻ thư mục: nháy phải chuột → **Properties → Sharing → Share…** → chọn **Everyone**. Mức quyền mặc định là **Read** (chỉ xem); muốn sửa phải đổi sang **Read/Write**.",
    "Huỷ chia sẻ: vào **Advanced Sharing** rồi **bỏ dấu tích ở ô Share this folder**.",
    "Chia sẻ máy in là **biến máy tính có máy in thành máy chủ cung cấp dịch vụ in (Print Server)**: nó nhận yêu cầu, xếp hàng đợi rồi điều khiển máy in in lần lượt.",
  ],
};

export default theory;
