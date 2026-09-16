import type { LessonExtra } from "@/lib/types";

// Bài 15. Tạo màu cho chữ và nền — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b15-tf1",
      context:
        "Học sinh A viết mã CSS để thiết lập màu nền cho thẻ <div> và màu chữ cho đoạn văn bản <p> bên trong nó:\n\ndiv {\n  background-color: blue;\n  border: 2px solid black;\n}\np {\n  color: white;\n}",
      code: "",
      statements: [
        {
          text: "Màu chữ của đoạn văn bản <p> sẽ hiển thị màu trắng (white).",
          answer: true,
          explain:
            "Do thẻ <p> được thiết lập định dạng màu chữ trực tiếp là color: white, nên đoạn văn bản sẽ hiển thị màu trắng.",
        },
        {
          text: "Thẻ <p> sẽ không có nền màu xanh (blue) vì thuộc tính background-color không có tính kế thừa.",
          answer: false,
          explain:
            "Theo SGK bài 15, thuộc tính màu nền (background-color) CÓ tính kế thừa. Thẻ <p> nằm trong thẻ <div> nên sẽ được kế thừa màu nền xanh từ thẻ <div> (nếu nó không được thiết lập background-color ghi đè). Thêm nữa, nền mặc định của phần tử con là transparent (trong suốt) nên nó cũng cho phép nhìn xuyên qua nền xanh của thẻ cha.",
        },
        {
          text: "Đoạn văn bản <p> cũng sẽ có khung viền màu đen (black) do kế thừa thuộc tính border từ thẻ <div>.",
          answer: false,
          explain:
            "Thuộc tính border KHÔNG có tính kế thừa. Vì vậy, chỉ có thẻ <div> mới có khung viền màu đen, thẻ <p> bên trong sẽ không có khung viền.",
        },
        {
          text: "Học sinh A có thể thay thế giá trị 'blue' bằng 'rgb(0, 0, 255)' để đạt được kết quả màu sắc tương tự.",
          answer: true,
          explain:
            "Màu blue trong tiếng Anh tương đương với giá trị RGB(0, 0, 255), trong đó kênh Blue đạt tối đa (255) và Red, Green bằng 0.",
        },
      ],
    },
    {
      id: "b15-tf2",
      context:
        "Bạn B đang tìm hiểu về các bộ chọn tổ hợp trong CSS. Bạn B có một đoạn HTML như sau:\n\n<div class=\"box\">\n  <p>Văn bản 1</p>\n  <section>\n    <p>Văn bản 2</p>\n  </section>\n</div>\n<p>Văn bản 3</p>\n\nBạn B viết CSS: div > p { color: red; }",
      code: "",
      statements: [
        {
          text: "Bộ chọn 'div > p' thể hiện mối quan hệ cha con trực tiếp.",
          answer: true,
          explain:
            "Cú pháp E > F dùng để chọn phần tử F là con trực tiếp của phần tử E. Trong trường hợp này, p phải là con trực tiếp của div.",
        },
        {
          text: "Với đoạn CSS trên, 'Văn bản 1' sẽ có chữ màu đỏ.",
          answer: true,
          explain:
            "Thẻ <p> chứa 'Văn bản 1' nằm trực tiếp ngay bên trong thẻ <div> (không bị bọc bởi thẻ nào khác), do đó thỏa mãn điều kiện 'div > p'.",
        },
        {
          text: "Với đoạn CSS trên, 'Văn bản 2' cũng sẽ có chữ màu đỏ.",
          answer: false,
          explain:
            "Thẻ <p> chứa 'Văn bản 2' nằm trong thẻ <section>, rồi <section> mới nằm trong <div>. Thẻ <p> này là cháu của <div>, không phải con trực tiếp, nên không khớp với bộ chọn div > p.",
        },
        {
          text: "Hai bộ chọn 'div > p' và 'div p' có ý nghĩa hoàn toàn giống nhau, chỉ khác nhau ở cách viết.",
          answer: false,
          explain:
            "Hai bộ chọn này khác nhau về phạm vi. 'div > p' chỉ chọn các thẻ <p> là con TRỰC TIẾP của <div>. Còn 'div p' (quan hệ con cháu) chọn mọi thẻ <p> nằm bên trong <div> ở bất kì cấp nào — nếu đổi sang 'div p' thì cả Văn bản 1 và Văn bản 2 đều có màu đỏ.",
        },
      ],
    },
    {
      id: "b15-tf3",
      context:
        "Bạn Páo chọn màu cho trang web của hợp tác xã bằng đoạn CSS dưới đây: nền trang màu vàng nhạt, chữ trong thẻ <div> màu nâu. Mở trình duyệt lên, Páo thấy lạ là các thẻ <p> nằm bên trong <div> cũng tự có màu nâu, dù Páo không hề đặt màu riêng cho chúng. Bạn Sình ngồi cạnh thì bảo: muốn ra màu xám thuần thì cứ đặt ba tham số của hàm rgb() khác nhau là được, càng khác nhau càng xám.",
      code: "body { background-color: hsl(50, 100%, 90%); }\ndiv { color: rgb(101, 67, 33); }",
      statements: [
        {
          text: "Các thẻ <p> trong <div> tự có màu nâu là do thuộc tính color có tính kế thừa từ phần tử cha.",
          answer: true,
          explain:
            "color là thuộc tính có tính kế thừa: khi đặt màu chữ cho phần tử cha thì các phần tử con bên trong tự nhận màu đó nếu không được đặt màu riêng.",
        },
        {
          text: "Trong hệ màu HSL, ba tham số lần lượt là màu sắc (Hue), độ bão hoà (Saturation) và độ sáng (Lightness).",
          answer: true,
          explain:
            "Đúng thứ tự ba thông số của hệ HSL. Riêng Lightness nếu đặt 0% sẽ cho màu đen và đặt 100% sẽ cho màu trắng, bất kể hai tham số còn lại.",
        },
        {
          text: "Nhận xét của Sình là đúng: đặt ba tham số của rgb() khác nhau sẽ cho ra màu xám thuần.",
          answer: false,
          explain:
            "Ngược lại mới đúng. Muốn có màu xám thuần (kể cả trắng và đen) thì ba tham số của rgb() phải BẰNG NHAU, ví dụ rgb(128, 128, 128). Ba tham số khác nhau sẽ cho ra một màu có sắc, như rgb(101, 67, 33) là màu nâu trong đoạn mã.",
        },
        {
          text: "Thuộc tính background-color cũng có tính kế thừa nên mọi phần tử con của body đều tự nhận nền vàng nhạt.",
          answer: false,
          explain:
            "background-color KHÔNG có tính kế thừa. Nền của các phần tử con mặc định là trong suốt nên ta nhìn xuyên qua và thấy nền của body, chứ bản thân chúng không được gán màu nền đó.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b15-es1",
      q: "Phân biệt các hệ màu RGB, HSL và Tên màu (Color names) được hỗ trợ trong HTML và CSS. Nêu ví dụ cách biểu diễn cùng một màu Đỏ (Red) bằng 3 cách trên.",
      answer:
        "* Phân biệt:\n1. Hệ màu RGB: Biểu diễn màu bằng tổ hợp 3 màu cơ bản Red (đỏ), Green (xanh lá), Blue (xanh dương). Giá trị mỗi kênh từ 0-255, hoặc từ 0-100%, hoặc dùng mã thập lục phân (hexa) #rrggbb.\n2. Hệ màu HSL: Biểu diễn màu qua Hue (vòng tròn màu 0-360 độ), Saturation (độ bão hòa 0-100%), và Lightness (độ sáng 0-100%). Dễ hình dung hơn khi muốn tăng giảm độ sáng hoặc nhạt của màu.\n3. Tên màu: CSS hỗ trợ sẵn 140 tên màu tiếng Anh (như black, white, red, magenta...) để lập trình viên sử dụng nhanh mà không cần nhớ mã số.\n\n* Ví dụ biểu diễn màu Đỏ:\n- Tên màu: red\n- Hệ RGB: rgb(255, 0, 0) hoặc #ff0000 hoặc rgb(100%, 0%, 0%)\n- Hệ HSL: hsl(0, 100%, 50%) (Hue=0 là màu đỏ, bão hòa 100% để màu rực rỡ nhất, độ sáng 50% để giữ đúng màu gốc).",
    },
    {
      id: "b15-es2",
      q: "Trình bày 4 loại bộ chọn tổ hợp các phần tử có quan hệ (Combinators) trong CSS. Ký hiệu và ý nghĩa của từng loại là gì?",
      answer:
        "* 4 loại bộ chọn tổ hợp các phần tử có quan hệ:\n1. Quan hệ con cháu (E F): Sử dụng khoảng trắng. Áp dụng cho phần tử F là con hoặc cháu của phần tử E (nằm bên trong E ở bất kỳ cấp độ nào). Ví dụ: div p { ... }\n2. Quan hệ cha con trực tiếp (E > F): Sử dụng dấu lớn hơn. Áp dụng cho phần tử F là con trực tiếp (ngay cấp dưới) của phần tử E. Ví dụ: div > p { ... }\n3. Quan hệ anh em liền kề (E + F): Sử dụng dấu cộng. Áp dụng cho phần tử F nằm liền kề ngay sau phần tử E (có cùng phần tử cha). Ví dụ: h1 + p { ... }\n4. Quan hệ anh em (E ~ F): Sử dụng dấu ngã. Áp dụng cho phần tử F nằm ở phía sau phần tử E (không nhất thiết phải liền kề) và cả hai phải có cùng một phần tử cha. Ví dụ: h1 ~ p { ... }",
    },
  ],
};

export default extra;
