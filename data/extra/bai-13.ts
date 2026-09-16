import type { LessonExtra } from "@/lib/types";

// Bài 13. Khái niệm, vai trò của CSS — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b13-tf1",
      context:
        "Bạn Mai đang học thiết kế web và muốn thay đổi màu sắc của các thẻ tiêu đề bằng CSS. Mai viết đoạn mã như sau trong tệp HTML:\n\n<style>\n  h1, h2 {\n    color: red;\n  }\n</style>\n\nBạn Lan thắc mắc về cách Mai sử dụng các thành phần của mã CSS này.",
      code: "",
      statements: [
        {
          text: "Đoạn mã của Mai là ví dụ về CSS ngoài (external CSS), vì phần định dạng được viết tách khỏi các thẻ nội dung.",
          answer: false,
          explain:
            "Đây là CSS trong (internal CSS): toàn bộ mẫu định dạng được đưa vào bên trong thẻ <style> đặt ở phần tử head của chính tệp HTML. CSS ngoài là khi các quy định nằm trong một tệp .css riêng rồi liên kết vào trang.",
        },
        {
          text: "Trong đoạn mã trên, phần 'h1, h2' được gọi là bộ chọn (selector).",
          answer: true,
          explain:
            "Bộ chọn xác định các phần tử HTML sẽ được áp dụng định dạng. Bộ chọn có thể là một thẻ hoặc đồng thời nhiều thẻ được viết cách nhau bởi dấu phẩy, như 'h1, h2'.",
        },
        {
          text: "Phần 'color: red;' là một quy định nằm trong vùng mô tả, theo cấu trúc 'thuộc tính: giá trị;'.",
          answer: true,
          explain:
            "Vùng mô tả được nằm trong cặp dấu ngoặc nhọn { }. Mỗi quy định bên trong có cấu trúc: thuộc tính: giá trị; và kết thúc bằng dấu chấm phẩy.",
        },
        {
          text: "Mẫu định dạng này sẽ chỉ áp dụng cho thẻ h1 đầu tiên và bỏ qua tất cả các thẻ h2 trong trang.",
          answer: false,
          explain:
            "Vì sử dụng bộ chọn 'h1, h2' nên mẫu định dạng này sẽ áp dụng cho tất cả các thẻ h1 và tất cả các thẻ h2 trong toàn bộ trang web đó.",
        },
      ],
    },
    {
      id: "b13-tf2",
      context:
        "Thầy giáo giao bài tập lớn yêu cầu xây dựng một website gồm 5 trang HTML khác nhau nhưng có chung một giao diện (màu chữ, kiểu dáng). Bạn Minh tạo một tệp có tên 'styles.css' chứa toàn bộ mã CSS. Sau đó, trong phần <head> của 5 trang HTML, Minh thêm dòng: <link href=\"styles.css\" rel=\"stylesheet\" type=\"text/css\">.",
      code: "",
      statements: [
        {
          text: "Cách làm của Minh được gọi là thiết lập CSS ngoài (external CSS).",
          answer: true,
          explain:
            "Các mẫu định dạng CSS được viết trong một tệp css, bên ngoài tệp HTML được gọi là CSS ngoài. Tệp này sau đó được kết nối vào trang web bằng thẻ <link>.",
        },
        {
          text: "Nếu Minh muốn thay đổi màu chữ chung của cả 5 trang web thì chỉ cần sửa thuộc tính màu chữ một lần bên trong tệp 'styles.css'.",
          answer: true,
          explain:
            "Đây là lợi ích lớn nhất của CSS ngoài: định dạng một lần và áp dụng cho nhiều trang web. Khi cần thay đổi, chỉ cần chỉnh sửa một lần trong tệp định dạng css đó.",
        },
        {
          text: "Muốn dùng CSS ngoài thì bắt buộc phải khai báo bằng thẻ <link>, không còn cách nào khác.",
          answer: false,
          explain:
            "Còn một cách thứ hai: dùng lệnh @import \"styles.css\"; đặt bên trong thẻ <style> nằm ở phần head của trang web. Hai cách cho kết quả tương tự nhau.",
        },
        {
          text: "Với cách làm của Minh, khi người dùng xem mã nguồn HTML của trang, họ sẽ thấy toàn bộ các quy định CSS hiển thị bên trong phần <body>.",
          answer: false,
          explain:
            "Khi dùng CSS ngoài, mã CSS nằm ở tệp 'styles.css'. Trong HTML chỉ có thẻ <link> (nằm ở phần head, không phải body), trình duyệt sẽ tải tệp CSS ngoài về để hiển thị.",
        },
      ],
    },
    {
      id: "b13-tf3",
      context:
        "Bạn Súa được giao sửa lại trang web của câu lạc bộ. Trang có tới 40 thẻ <p>, Súa muốn tất cả cùng màu xanh nên gõ style=\"color: blue\" vào từng thẻ một, làm mất gần cả buổi chiều. Cô giáo xem xong bảo Súa nên gom lại thành một mẫu định dạng đặt trong thẻ <style>, sau này muốn đổi màu chỉ phải sửa một chỗ. Cô nhắc thêm rằng khi ghi chú trong phần CSS thì phải viết đúng kiểu của CSS chứ không dùng được kiểu chú thích của HTML.",
      statements: [
        {
          text: "Cách Súa đang làm chính là CSS nội tuyến (inline CSS): đặt định dạng ngay trong thuộc tính style của từng thẻ.",
          answer: true,
          explain:
            "CSS nội tuyến là cách thiết lập định dạng trực tiếp cho một phần tử thông qua thuộc tính style của chính thẻ đó. Đây là cách Súa đang dùng cho cả 40 thẻ <p>.",
        },
        {
          text: "Chú thích trong phần CSS được viết theo dạng /* nội dung chú thích */.",
          answer: true,
          explain:
            "CSS dùng cặp dấu /* và */ để đánh dấu chú thích. Đây là điểm khác với HTML, nên phải chú ý khi viết mẫu định dạng.",
        },
        {
          text: "Cách làm của Súa là hợp lí nhất, vì mỗi thẻ được định dạng riêng nên trang hiển thị nhanh hơn.",
          answer: false,
          explain:
            "Ngược lại, đây là cách kém hiệu quả nhất: phải gõ lặp lại 40 lần và mỗi lần đổi màu là phải sửa cả 40 chỗ. Gom vào một mẫu định dạng trong thẻ <style> mới đúng vai trò của CSS là tách phần định dạng khỏi phần nội dung.",
        },
        {
          text: "Trong phần CSS có thể dùng dạng <!-- nội dung --> để ghi chú giống hệt như trong HTML.",
          answer: false,
          explain:
            "Dạng <!-- --> là chú thích của HTML, không dùng được trong CSS. Trong CSS phải viết chú thích bằng cặp /* */.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b13-es1",
      q: "Trình bày cấu trúc tổng quát của một mẫu định dạng CSS. Cho một ví dụ thiết lập màu chữ xanh (blue) cho thẻ đoạn văn <p> và giải thích các thành phần trong ví dụ đó.",
      answer:
        "* Cấu trúc tổng quát của một mẫu định dạng CSS gồm hai phần:\n- Bộ chọn (selector): Xác định các phần tử HTML sẽ được áp dụng định dạng. Có thể là một thẻ hoặc nhiều thẻ (cách nhau bằng dấu phẩy).\n- Vùng mô tả (declaration block): Chứa một hoặc nhiều quy định. Vùng này nằm trong cặp dấu ngoặc nhọn { }. Mỗi quy định có cấu trúc: thuộc tính: giá trị; (kết thúc bằng dấu chấm phẩy).\n\n* Ví dụ thiết lập màu xanh cho thẻ <p>:\np {\n  color: blue;\n}\n\n* Giải thích:\n- 'p' là bộ chọn, chỉ định rằng định dạng này áp dụng cho tất cả các thẻ <p> trên trang.\n- { color: blue; } là vùng mô tả.\n- 'color' là thuộc tính quy định màu sắc của văn bản.\n- 'blue' là giá trị màu được gán cho thuộc tính.\n- Dấu chấm phẩy (;) dùng để kết thúc một quy định.",
    },
    {
      id: "b13-es2",
      q: "Nêu các cách thiết lập CSS cho trang web. Dựa trên ưu điểm của mỗi cách, em hãy tư vấn xem nên dùng cách nào khi muốn định dạng thống nhất cho toàn bộ một hệ thống website gồm nhiều trang?",
      answer:
        "* Có 3 cách thiết lập CSS cho trang web:\n1. CSS trong (internal CSS): Đưa các mẫu định dạng vào bên trong thẻ <style> đặt trong phần tử <head> của trang web. Áp dụng cho một trang web cụ thể.\n2. CSS ngoài (external CSS): Viết các định dạng vào một tệp đuôi .css riêng. Sử dụng thẻ <link> hoặc lệnh @import trong phần <head> để kết nối tệp này với các tệp HTML. Áp dụng được cho nhiều trang web.\n3. CSS nội tuyến (inline CSS): Thiết lập trực tiếp thuộc tính style bên trong thẻ HTML (ví dụ: <h1 style=\"color: red;\">). Chỉ áp dụng cho chính thẻ đó.\n\n* Tư vấn khi xây dựng hệ thống website:\n- Nên sử dụng CSS ngoài (external CSS).\n- Lí do: CSS ngoài cho phép thiết lập định dạng một lần và áp dụng thống nhất cho tất cả các trang web trong hệ thống. Khi cần bảo trì, thay đổi giao diện (ví dụ đổi màu thương hiệu), ta chỉ cần sửa duy nhất một tệp .css là toàn bộ website sẽ tự động thay đổi theo. Điều này làm giảm đáng kể công việc và đảm bảo tính nhất quán.",
    },
  ],
};

export default extra;
