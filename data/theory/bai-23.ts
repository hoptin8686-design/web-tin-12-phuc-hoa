import type { LessonTheory } from "@/lib/types";

// Bài 23. Chuẩn bị xây dựng trang web — SGK Tin học 12 (ICT, Kết nối tri
// thức), trang 126–133. Chủ đề 7 (Ứng dụng tin học) — bài mở đầu cho mạch
// Bài 23–28 dạy bằng GOOGLE SITES (không phải cú pháp HTML/CSS của Chủ đề 4).

const theory: LessonTheory = {
  minutes: 12,

  intro:
    "Bài này tìm hiểu **những đặc điểm chung** của một trang web (đầu trang, thân trang, chân trang) và **các bước cần chuẩn bị** trước khi bắt tay xây dựng một trang web thật — nền tảng cho các bài thực hành dựng trang web bằng Google Sites tiếp theo.",

  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "dac-diem-chung-trang-web",
      emoji: "🧩",
      heading: "Những đặc điểm chung của trang web",
      blocks: [
        {
          kind: "text",
          text: "Dễ nhận thấy mỗi trang web đầy đủ nhất đều có cấu trúc gồm **ba phần chính**: phần đầu trang (header) với những thông tin chung nhất về trang, phần thân trang (body) chứa nội dung của trang, và phần chân trang (footer) chứa các thông tin ngắn gọn về chủ thể, bản quyền.",
        },
        {
          kind: "text",
          text: "**a) Phần đầu trang.** Phần đầu trang có vai trò như trang bìa thu gọn của một cuốn sách, hay là phần trình bày đầu mỗi chương sách: có hình nền và những thông tin nổi bật trên đó như logo, tên trang, thanh điều hướng (bao gồm bảng chọn các chức năng; chức năng tìm kiếm có thể tách riêng ra khỏi bảng chọn), tiêu đề và thông tin tóm tắt của trang hay là thông tin mới cập nhật.",
        },
        {
          kind: "figure",
          diagram: "cau-truc-dau-trang",
          caption: "Hình 23.1 SGK — đầu trang của trang web Harvard University: logo, tên trang, bảng chọn, tìm kiếm, tiêu đề, tóm tắt",
        },
        {
          kind: "list",
          items: [
            "Khi trang web được tải lên bởi một trình duyệt web, tên của nó sẽ được hiển thị tại tiêu đề của tab, phía sau một logo nhỏ, gọi là **favicon** (viết tắt của *favorite icon*). Favicon có thể không phải được thu gọn từ logo của trang mà được tạo dựng riêng, **không phải chỉ cho một trang mà cho cả website**, chứa nhiều trang web liên quan đến nhau.",
            "Mỗi trang web hay website trên Internet có một địa chỉ truy cập dạng **URL** (Uniform Resource Locator) để người dùng đọc chúng qua một trình duyệt web như Firefox, Chrome, Edge hay Safari.",
            "Tuỳ theo thiết kế mà đôi khi người ta dành ra một vài dòng trước phần đầu trang để đưa ra những thông báo quan trọng, ví dụ như trang đang được xây dựng hay bảo trì; phần này gọi là **phần thông báo**.",
          ],
        },
        {
          kind: "text",
          text: "**b) Phần thân trang.** Thân trang là phần chứa nội dung của trang web, thường được bố cục thành các khối hình chữ nhật, mỗi khối trình bày một nội dung với **tiêu đề riêng**.",
        },
        {
          kind: "figure",
          diagram: "cau-truc-than-trang",
          caption: "Hình 23.2 SGK — cấu trúc phần thân trang: bố cục thành các khối hình chữ nhật",
        },
        {
          kind: "text",
          text: "Mỗi khối nội dung có thể chứa các thông tin dạng văn bản, hình ảnh, âm thanh, biểu mẫu nhập dữ liệu hay là các ứng dụng nhúng khác nhau (ví dụ: ứng dụng bản đồ, ứng dụng dự báo thời tiết).",
        },
        {
          kind: "text",
          text: "**c) Phần chân trang.** Phần này có thể bao gồm những thông tin về thương hiệu, bản quyền, bảo mật, tóm tắt những thông tin cần nhấn mạnh thêm, thông tin liên hệ và những liên kết tới các trang mạng xã hội liên quan.",
        },
        {
          kind: "note",
          text: "Một trang web đầy đủ gồm ba phần chính: **đầu trang, thân trang và chân trang**. Phần đầu trang là nơi hiển thị logo, tên trang, thanh điều hướng gồm bảng chọn các chức năng, tiêu đề và thông tin tóm tắt của trang. **Favicon** là biểu tượng đại diện cho tất cả các trang web trong một website, hiển thị trước địa chỉ trang web trên tab của trình duyệt. Phần thân trang được tổ chức theo cấu trúc nhiều khối hình chữ nhật, mỗi khối giới thiệu một nội dung. Phần chân trang được dành để đưa những thông tin về thương hiệu, bản quyền, bảo mật, thông tin liên hệ và những liên kết tới các trang mạng xã hội liên quan.",
        },
        {
          kind: "check",
          q: "Phần nào của trang web đóng vai trò như trang bìa thu gọn của một cuốn sách, chứa logo, tên trang và thanh điều hướng?",
          options: ["Phần đầu trang (header)", "Phần thân trang (body)", "Phần chân trang (footer)", "Phần thông báo"],
          answer: 0,
          explain:
            "SGK ví phần đầu trang có vai trò như trang bìa thu gọn của một cuốn sách hay là phần trình bày đầu mỗi chương sách, chứa logo, tên trang, thanh điều hướng, tiêu đề và thông tin tóm tắt.",
        },
        {
          kind: "check",
          q: "Vì sao favicon thường không nhất thiết được thu gọn trực tiếp từ logo của một trang cụ thể?",
          options: [
            "Vì favicon là biểu tượng đại diện chung cho cả website, không phải chỉ riêng một trang",
            "Vì trình duyệt web không cho phép hiển thị logo có nhiều màu sắc ở vị trí tiêu đề của tab đang mở",
            "Vì logo của trang chỉ được phép xuất hiện duy nhất một lần ở giữa phần đầu trang, không lặp lại",
            "Vì kích thước tệp của logo luôn quá lớn nên bắt buộc phải thiết kế lại hoàn toàn từ đầu",
          ],
          answer: 0,
          explain:
            "SGK nêu rõ: favicon có thể không phải được thu gọn từ logo của trang mà được tạo dựng riêng, không phải chỉ cho một trang mà cho cả website chứa nhiều trang web liên quan đến nhau.",
        },
        {
          kind: "check",
          q: "Bố cục phần thân trang được tổ chức chủ yếu theo hình thức nào?",
          options: [
            "Các khối hình chữ nhật, mỗi khối trình bày một nội dung với tiêu đề riêng",
            "Một cột văn bản dài duy nhất, không chia nhỏ thành từng phần khác nhau",
            "Bảng biểu dạng lưới cố định luôn đúng 3 hàng và 3 cột như nhau",
            "Danh sách các liên kết xếp dọc, không có hình ảnh hay tiêu đề kèm theo",
          ],
          answer: 0,
          explain:
            "SGK mô tả: thân trang thường được bố cục thành các khối hình chữ nhật, mỗi khối trình bày một nội dung với tiêu đề riêng (Hình 23.2).",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "cac-buoc-chuan-bi",
      emoji: "🧭",
      heading: "Các bước chuẩn bị để xây dựng trang web",
      blocks: [
        {
          kind: "text",
          text: "Việc xây dựng trang web cần bắt đầu với việc **phân tích, xác lập định hướng** về mục đích của trang web và đối tượng người dùng. Mỗi trang web phải bắt nguồn từ một nhu cầu cụ thể — cần xác định đối tượng người đọc (người dùng), khả năng và mong muốn của họ, từ đó xác định mục đích, đối tượng, các yêu cầu về trang web trước khi đi vào chi tiết thiết kế nội dung và hình thức.",
        },
        {
          kind: "steps",
          items: [
            {
              label: "1",
              title: "Định hình ý tưởng",
              text: "Xác định **mục đích** và **đối tượng phục vụ** của trang web. Thiết lập các **yêu cầu** cần đạt được cả về nội dung và hình thức.",
            },
            {
              label: "2",
              title: "Xây dựng thiết kế",
              text: "Xây dựng **dàn ý**; xây dựng kiến trúc nội dung, thiết kế mĩ thuật — chọn **bảng màu, phông chữ**…",
            },
            {
              label: "3",
              title: "Chuẩn bị tư liệu, lựa chọn phần mềm",
              text: "**Lựa chọn phần mềm** để xây dựng trang web. Chuẩn bị thông tin cho phần đầu trang (logo, favicon, ảnh nền, tên trang); chuẩn bị tư liệu cho phần thân và chân trang.",
            },
          ],
        },
        {
          kind: "note",
          text: "**Lưu ý:** cần phân biệt việc xây dựng **trang web** đơn giản với xây dựng **website**. Công việc chuẩn bị xây dựng website có thể đòi hỏi thêm một số bước khác, đặc biệt là cách tổ chức vận hành và quản trị website.",
        },
        {
          kind: "text",
          text: "**a) Định hình ý tưởng.** Nội dung chính của bước này là xác định mục đích, đối tượng và các yêu cầu cần đạt được — tìm câu trả lời tường minh cho các câu hỏi: Mục đích của trang web là gì? Lớp người dùng nào sẽ quan tâm thường xuyên đến trang web này? Để đạt mục đích và đáp ứng nhu cầu người dùng thì trang web phải đạt yêu cầu như thế nào về nội dung, kiến trúc và mĩ thuật?",
        },
        {
          kind: "example",
          title: "Ví dụ SGK — dự án \"Việt Nam – Vẻ đẹp tiềm ẩn\"",
          text: "Một nhóm thiện nguyện tâm huyết muốn quảng bá vẻ đẹp thiên nhiên, văn hoá, con người Việt Nam. **Mục đích:** giới thiệu vẻ đẹp thiên nhiên, văn hoá, con người Việt Nam. **Đối tượng:** những người yêu thích phong cảnh thiên nhiên, văn hoá nghệ thuật, ẩm thực các vùng miền — kể cả người nước ngoài. **Yêu cầu nội dung, hình thức:** nội dung phản ánh nét đẹp riêng của mỗi vùng miền; định dạng đa dạng (văn bản, hình ảnh, âm thanh); có bản đồ, đường đi, mùa đẹp nhất kèm theo; hình thức dễ theo dõi, đẹp, trang nhã về màu sắc; có tương tác với người dùng để biết thêm nhu cầu của họ.",
        },
        {
          kind: "text",
          text: "**b) Thiết kế.** Bước này cần bắt đầu với việc xây dựng **dàn ý tổng thể**, từ đó xây dựng bố cục của trang và đưa ra những chỉ định về thiết kế mĩ thuật. Việc xây dựng dàn ý giúp hình dung toàn bộ nội dung sẽ giới thiệu và cách sắp xếp sao cho ấn tượng, mạch lạc, dễ tiếp cận và dễ hiểu nhất.",
        },
        {
          kind: "text",
          text: "**Thiết kế mĩ thuật** là thiết kế hình thức của trang web sao cho có vẻ đẹp phù hợp với thẩm mĩ người dùng và nội dung. Ở mức thiết kế chung, công việc này giới hạn trong phạm vi lựa chọn **định dạng chữ** và **bảng màu**, cần nhất quán và hài hoà giữa các phần của trang web.",
        },
        {
          kind: "compare",
          left: {
            emoji: "🔤",
            title: "Phông Sans Serif (không chân)",
            items: [
              "Hẹp ngang, dễ đọc, tiết kiệm diện tích — dùng cho bảng chọn trên thanh điều hướng (ví dụ Arial Condensed)",
              "Dùng cho phần nội dung bài viết: Calibri, Arial, Verdana, Tahoma…",
            ],
          },
          right: {
            emoji: "🖋️",
            title: "Phông Serif (có chân)",
            items: [
              "Ví dụ: Times New Roman",
              "Rất ít dùng để trình bày nội dung vì khó nhận diện trên màn hình",
              "Chỉ dùng trong trường hợp cỡ chữ lớn, như tiêu đề",
            ],
          },
        },
        {
          kind: "text",
          text: "Kiểu chữ **đậm** có ý nghĩa nhấn mạnh, thường dùng cho tiêu đề. Kiểu chữ *nghiêng* có ý nghĩa phân biệt, thường dùng khi muốn phân biệt từ ngữ, câu chữ hay phần chú thích.",
        },
        {
          kind: "cards",
          tone: "gold",
          items: [
            { emoji: "🔎", title: "Cỡ nhỏ nhất", text: "Chỉ dùng cho chú thích không cần nhấn mạnh, như ở chân trang." },
            { emoji: "📝", title: "Cỡ thường", text: "Dùng cho phần nội dung bài viết." },
            { emoji: "🔠", title: "Cỡ lớn", text: "Dùng cho tiêu đề." },
            { emoji: "🔥", title: "Cỡ rất lớn", text: "Dùng cho những tiêu đề nổi bật." },
          ],
        },
        {
          kind: "text",
          text: "Về **bảng màu**: một trang web với những màu sắc tương phản quá gắt hay không hài hoà sẽ gây phản cảm với người đọc. Vì vậy cần chọn một số màu có độ tương phản nhẹ nhàng và hài hoà. Mỗi bảng màu thường có **5 màu** pha trộn giữa các màu gam ấm, lạnh và trung tính, chưa kể hai màu trắng và đen.",
        },
        {
          kind: "text",
          text: "**c) Lựa chọn phần mềm, chuẩn bị tư liệu.** Hiện nay có nhiều phần mềm hỗ trợ làm trang web trực quan, nhưng hầu hết là phần mềm thương mại. Google cung cấp miễn phí một phần mềm làm trang web với giao diện hoàn toàn trực quan, dễ sử dụng và kết nối dễ dàng với các phần mềm khác của Google như Docs, Sheets, Slides, Maps, Photos, YouTube. Trang web làm xong được lưu trên Google Drive, có thể chia sẻ, xuất bản ngay với một địa chỉ URL do Google hỗ trợ — chỉ cần người dùng có tài khoản Google Mail.",
        },
        {
          kind: "note",
          text: "Việc chuẩn bị tư liệu cho trang web kéo dài suốt thời gian thực hiện dự án, bắt đầu từ việc thiết kế favicon, logo, lựa chọn hình nền cho phần đầu trang, thực hiện các bài viết cho từng nội dung, lựa chọn hình ảnh minh hoạ.",
        },
        {
          kind: "check",
          q: "Bước nào trong quy trình chuẩn bị xây dựng trang web có nhiệm vụ xác định mục đích và đối tượng phục vụ của trang web?",
          options: ["Định hình ý tưởng", "Xây dựng thiết kế", "Chuẩn bị tư liệu, lựa chọn phần mềm", "Xuất bản trang web"],
          answer: 0,
          explain:
            "Bước Định hình ý tưởng có nội dung chính là xác định mục đích và đối tượng phục vụ của trang web, cùng các yêu cầu cần đạt được về nội dung và hình thức.",
        },
        {
          kind: "check",
          q: "Phông chữ nào được khuyến nghị dùng cho các bảng chọn trên thanh điều hướng, vì hẹp ngang, dễ đọc và tiết kiệm diện tích hiển thị?",
          options: [
            "Phông Sans Serif hẹp ngang, ví dụ Arial Condensed",
            "Phông Serif có chân, ví dụ Times New Roman",
            "Phông viết tay có trang trí cầu kì, nhiều nét uốn lượn",
            "Phông chỉ gồm toàn chữ in hoa, không phân biệt hoa thường",
          ],
          answer: 0,
          explain:
            "SGK nêu: phông chữ dùng cho các bảng chọn trên thanh điều hướng nên là các phông Sans Serif (không có chân), hẹp ngang, dễ đọc và tiết kiệm diện tích hiển thị, như phông Arial Condensed.",
        },
      ],
    },
  ],

  summary: [
    "Một trang web đầy đủ gồm **ba phần chính**: đầu trang (logo, tên trang, thanh điều hướng, tiêu đề, tóm tắt), thân trang (các khối hình chữ nhật, mỗi khối một tiêu đề riêng) và chân trang (thương hiệu, bản quyền, liên hệ, mạng xã hội).",
    "**Favicon** là biểu tượng đại diện cho cả website, hiển thị trên tab trình duyệt — không nhất thiết thu gọn từ logo của một trang cụ thể.",
    "Ba bước chuẩn bị xây dựng trang web: **Định hình ý tưởng** (mục đích, đối tượng, yêu cầu) → **Xây dựng thiết kế** (dàn ý, bố cục, mĩ thuật) → **Chuẩn bị tư liệu, lựa chọn phần mềm**.",
    "Thiết kế mĩ thuật gồm **định dạng chữ** (Sans Serif cho bảng chọn/nội dung, Serif hạn chế dùng cho tiêu đề cỡ lớn; 4 cỡ chữ theo mức độ nhấn mạnh) và **bảng màu** (thường 5 màu, tương phản hài hoà).",
    "Sách sẽ dùng phần mềm làm web **miễn phí, trực quan của Google**, tích hợp với hệ sinh thái Google, lưu trên Google Drive và xuất bản bằng một địa chỉ URL do Google hỗ trợ.",
  ],
};

export default theory;
