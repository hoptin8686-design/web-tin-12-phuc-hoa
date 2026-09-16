import type { LessonExtra } from "@/lib/types";

// Bài 14. Định dạng văn bản bằng CSS — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b14-tf1",
      context:
        "Bạn Hùng viết đoạn mã CSS sau để định dạng văn bản cho trang web của lớp:\n\nbody {\n  font-family: Arial, \"Times New Roman\", serif;\n  font-size: 14px;\n  line-height: 1.5;\n}\nh1 {\n  font-family: \"Comic Sans MS\";\n  color: blue;\n  text-align: center;\n}",
      code: "",
      statements: [
        {
          text: "Trong bộ chọn body, trình duyệt luôn dùng phông serif, bỏ qua Arial và Times New Roman.",
          answer: false,
          explain:
            "Trình duyệt sẽ tìm từ trái sang phải: đầu tiên tìm Arial, nếu không có mới tìm \"Times New Roman\", cuối cùng mới dùng phông serif mặc định. Không phải luôn dùng serif.",
        },
        {
          text: "Tên phông \"Times New Roman\" và \"Comic Sans MS\" phải đặt trong dấu nháy vì có chứa dấu cách.",
          answer: true,
          explain:
            "SGK lưu ý: Nếu tên phông chữ có chứa dấu cách thì cần đặt trong hai dấu nháy kép (hoặc nháy đơn). Các phông không có dấu cách (như Arial) thì không cần.",
        },
        {
          text: "Thuộc tính line-height: 1.5; thiết lập chiều cao dòng bằng 1.5 lần kích thước phông chữ hiện tại (14px).",
          answer: true,
          explain:
            "Thuộc tính line-height thiết lập chiều cao dòng. Giá trị 1.5 là số đo tương đối (bằng 1.5 lần font-size). Giá trị mặc định của CSS là 2em.",
        },
        {
          text: "Phần tử h1 không được kế thừa kích thước phông chữ 14px và chiều cao dòng 1.5 từ phần tử body.",
          answer: false,
          explain:
            "CSS có tính kế thừa. Các thuộc tính định dạng chữ như font-size, line-height được thiết lập cho thẻ cha (body) sẽ tự động áp dụng cho các phần tử con (như h1) trừ khi h1 có thiết lập riêng ghi đè lên.",
        },
      ],
    },
    {
      id: "b14-tf2",
      context:
        "Bạn Linh đang thiết kế lại giao diện trang tin tức và gặp phải sự cố xung đột CSS. Linh có đoạn mã sau:\n\np { color: black; }\n...\n* { color: green; }\np { color: red !important; }\np { color: blue; }",
      code: "",
      statements: [
        {
          text: "Dấu * là bộ chọn áp dụng cho mọi phần tử, có mức ưu tiên thấp nhất trong các quy tắc CSS.",
          answer: true,
          explain:
            "Kí hiệu * dùng trong bộ chọn có ý nghĩa là phần tử bất kì. Mức độ ưu tiên của * là thấp nhất, chỉ áp dụng khi không có mẫu định dạng nào khác cho phần tử đó.",
        },
        {
          text: "Theo cascading, quy định p { color: black; } viết trước sẽ ghi đè p { color: blue; } viết sau.",
          answer: false,
          explain:
            "Ngược lại mới đúng. Khi có nhiều mẫu định dạng cạnh tranh ở cùng mức ưu tiên, trình duyệt áp dụng mẫu được viết CUỐI CÙNG. Do đó blue ghi đè black chứ không phải black ghi đè blue.",
        },
        {
          text: "Văn bản trong thẻ <p> sẽ có màu xanh lá (green) vì bộ chọn * ghi đè mọi định dạng cụ thể.",
          answer: false,
          explain:
            "Sai hoàn toàn. Bộ chọn * có mức ưu tiên thấp nhất. Quy định cụ thể (p) luôn ưu tiên cao hơn (*).",
        },
        {
          text: "Văn bản trong thẻ <p> sẽ có màu đỏ (red) vì quy định đó có !important, mức ưu tiên cao nhất.",
          answer: true,
          explain:
            "Kí hiệu !important mang lại mức ưu tiên cao nhất mà không phụ thuộc vào vị trí của mẫu trong CSS. Vì vậy, color: red !important; sẽ thắng color: blue; dù blue viết sau.",
        },
      ],
    },
    {
      id: "b14-tf3",
      context:
        "Bạn Mai định dạng bài giới thiệu trường bằng đoạn CSS dưới đây. Mở trình duyệt lên, Mai thấy chữ hiện đúng phông, hai lề trái phải đều thẳng tắp, dòng đầu mỗi đoạn thụt vào trông rất gọn. Riêng dòng tiêu đề thì Mai muốn có nét gạch ngang ở giữa chữ nhưng chưa biết dùng giá trị nào. Bạn Dín nhìn đoạn mã rồi nhận xét: tên phông Times New Roman có dấu cách nên bắt buộc phải để trong cặp dấu nháy thì trình duyệt mới hiểu.",
      code: "p {\n  font-family: \"Times New Roman\", Georgia, serif;\n  font-size: 14px;\n  text-align: justify;\n  text-indent: 20px;\n}",
      statements: [
        {
          text: "Nhận xét của Dín là đúng: tên phông chữ có chứa dấu cách phải đặt trong cặp dấu nháy.",
          answer: true,
          explain:
            "Khi tên phông có dấu cách như Times New Roman, phải viết trong cặp dấu nháy để trình duyệt hiểu đó là một tên phông duy nhất chứ không phải nhiều tên rời nhau.",
        },
        {
          text: "Giá trị justify của thuộc tính text-align làm văn bản thẳng đều cả lề trái lẫn lề phải.",
          answer: true,
          explain:
            "text-align: justify; căn đều hai bên — đúng như hiện tượng Mai quan sát được là hai lề trái phải đều thẳng tắp.",
        },
        {
          text: "Muốn tạo nét gạch ngang ở giữa chữ cho dòng tiêu đề, Mai dùng text-decoration: underline;",
          answer: false,
          explain:
            "Giá trị underline tạo đường kẻ phía dưới chữ (gạch chân). Muốn có nét gạch giữa dòng chữ thì phải dùng text-decoration: line-through;",
        },
        {
          text: "Trình duyệt chỉ dùng đúng phông Times New Roman; nếu máy không cài phông này thì phần chữ sẽ bị bỏ trống.",
          answer: false,
          explain:
            "font-family nhận cả một danh sách phông. Trình duyệt duyệt lần lượt từ trái sang phải và dùng phông đầu tiên có trên máy — ở đây nếu không có Times New Roman thì chuyển sang Georgia, không có nữa thì dùng một phông serif bất kì. Chữ không bao giờ bị bỏ trống.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b14-es1",
      q: "Trình bày các thuộc tính CSS cơ bản dùng để định dạng kí tự (phông chữ, kích thước, độ đậm, kiểu nghiêng, màu sắc). Cho ví dụ một mẫu định dạng áp dụng tất cả các thuộc tính trên cho thẻ <h1>.",
      answer:
        "* Các thuộc tính CSS định dạng kí tự:\n1. Phông chữ (font-family): Chọn phông chữ. Giá trị là danh sách phông ưu tiên. Phông có dấu cách phải nằm trong nháy kép.\n2. Kích thước (font-size): Chọn cỡ chữ. Đơn vị tuyệt đối (px, pt, cm) hoặc tương đối (em, %, rem) hoặc các mức (small, large).\n3. Độ dày/đậm (font-weight): Giá trị là normal, bold, hoặc từ 100 đến 900.\n4. Kiểu chữ (font-style): Giá trị là normal (bình thường) hoặc italics (in nghiêng).\n5. Màu sắc (color): Tên màu (red, blue, black...) hoặc mã màu.\n\n* Ví dụ áp dụng cho <h1>:\nh1 {\n  font-family: \"Times New Roman\", serif;\n  font-size: 2em;\n  font-weight: bold;\n  font-style: italics;\n  color: red;\n}",
    },
    {
      id: "b14-es2",
      q: "Tính kế thừa và tính ưu tiên (cascading) trong CSS là gì? Hãy giải thích và cho ví dụ minh hoạ việc sử dụng kí hiệu !important để can thiệp vào thứ tự ưu tiên.",
      answer:
        "* Tính kế thừa (Inheritance):\n- CSS cho phép các phần tử con kế thừa định dạng (đặc biệt là định dạng văn bản như màu sắc, phông chữ) từ phần tử cha trong mô hình cây HTML.\n- Ví dụ: Nếu thiết lập body { color: blue; } thì mọi văn bản trong các thẻ <p>, <h1> nằm trong body cũng sẽ có màu xanh mà không cần thiết lập lại.\n\n* Tính ưu tiên (Cascading):\n- Khi một phần tử bị chi phối bởi nhiều mẫu định dạng CSS xung đột (cùng thiết lập một thuộc tính), trình duyệt phải quyết định mẫu nào được áp dụng.\n- Quy tắc cơ bản: Nếu các mẫu có cùng mức độ ưu tiên, mẫu nào được viết sau cùng (ở vị trí cuối) sẽ được áp dụng.\n\n* Can thiệp bằng !important:\n- Kí hiệu !important được đặt ngay sau giá trị thuộc tính (trước dấu ;). Nó giúp thuộc tính đó có mức độ ưu tiên cao nhất, bất chấp vị trí viết.\n- Ví dụ:\n  p { color: red !important; }\n  p { color: blue; }\n  -> Dù mẫu color: blue viết sau, văn bản thẻ <p> vẫn có màu đỏ (red) vì thuộc tính red có !important.",
    },
  ],
};

export default extra;
