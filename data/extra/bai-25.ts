import type { LessonExtra } from "@/lib/types";

// Bài 25. Xây dựng phần thân và chân trang web — Google Sites — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b25-tf1",
      context:
        "Nhóm bạn Thảo tìm hiểu bảng chọn Chèn theo Nhiệm vụ 1 trước khi bắt tay dựng phần thân trang. Thảo ghi chú lại vài ý, bạn Huy đọc và đối chiếu với SGK.",
      code: "",
      statements: [
        {
          text: "Ở khung bên phải cửa sổ thiết kế trang web có ba bảng chọn: Chèn, Trang và Giao diện.",
          answer: true,
          explain: "Đúng theo Hình 25.1 và hướng dẫn Bước 1 của SGK.",
        },
        {
          text: "Lệnh Drive trong bảng chọn Chèn dùng để chèn thông tin (văn bản, hình ảnh, video...) được tạo bằng các ứng dụng của Google, lưu trên Google Drive.",
          answer: true,
          explain: "Đúng theo SGK: nếu muốn chèn thông tin từ Google Drive thì nháy chuột vào Drive.",
        },
        {
          text: "Nhóm lệnh thứ hai của bảng chọn Chèn (Các thành phần nội dung) chỉ dùng để đổi màu nền của toàn bộ trang web, không liên quan tới cấu trúc khối.",
          answer: false,
          explain: "Sai. Nhóm lệnh thứ hai cho phép tạo phần thân trang theo kiến trúc khối, với các mẫu bố cục được hỗ trợ sẵn — không phải để đổi màu nền.",
        },
        {
          text: "Muốn chèn bản đồ, video YouTube, mục lục, băng chuyển hình ảnh, bắt buộc phải dùng lệnh Nhúng ở nhóm lệnh đầu tiên, không thể tìm thấy ở nhóm nào khác.",
          answer: false,
          explain: "Sai. Các đối tượng này nằm ở nhóm lệnh thứ BA (Các đối tượng khác) của bảng chọn Chèn — không phải nhóm đầu tiên (Hộp văn bản, Hình ảnh, Nhúng, Drive).",
        },
      ],
    },
    {
      id: "b25-tf2",
      context:
        "Sang Nhiệm vụ 2 và 3, nhóm bạn Kiên tạo phần thân trang hai khối rồi thêm bản đồ vị trí Thung Nham. Kiên kể lại thao tác, bạn Oanh kiểm tra lại từng bước.",
      code: "",
      statements: [
        {
          text: "Để thêm ảnh vào mỗi khối nội dung, Kiên nháy chuột vào biểu tượng dấu cộng (+) trong khối đó.",
          answer: true,
          explain: "Đúng theo Bước 2, Nhiệm vụ 2: đối với mỗi khối, nháy chuột vào biểu tượng dấu cộng (+) để thêm ảnh vào trang web.",
        },
        {
          text: "Việc thêm bản đồ vào trang web thực chất là nhúng ứng dụng bản đồ (như Google Maps) vào trang, không phải chèn một tệp ảnh chụp bản đồ.",
          answer: true,
          explain: "Đúng theo SGK Nhiệm vụ 3: thêm bản đồ vào trang web thực chất là nhúng ứng dụng bản đồ vào trang web.",
        },
        {
          text: "Muốn nhúng Google Maps, Kiên bắt buộc phải dùng lệnh Nhúng ở nhóm lệnh đầu tiên, Google Sites không có lối tắt nào khác.",
          answer: false,
          explain: "Sai. SGK nêu: nếu muốn nhúng Google Maps thì chỉ cần chọn Bản đồ ở nhóm thứ ba của bảng chọn Chèn — nhanh hơn dùng lệnh Nhúng tổng quát.",
        },
        {
          text: "Trong cửa sổ Chọn bản đồ, cách duy nhất để xác định địa điểm là gõ chính xác toạ độ kinh độ, vĩ độ dạng số, không hỗ trợ nhập tên địa danh.",
          answer: false,
          explain: "Sai. SGK nêu (Hình 25.4): có thể nhập TÊN vào ô Nhập vị trí rồi xác định địa điểm, hoặc chọn Đặt dấu vị trí để xác định bằng cách nháy chuột — không cần gõ toạ độ số.",
        },
      ],
    },
    {
      id: "b25-tf3",
      context:
        "Cuối buổi thực hành, nhóm bạn Vân chỉnh sửa lại các đối tượng đã chèn (Nhiệm vụ 4) rồi thiết lập chân trang (Nhiệm vụ 5). Vân báo cáo lại, cô giáo nêu vài nhận định để cả lớp kiểm tra.",
      code: "",
      statements: [
        {
          text: "Muốn sao chép hay xoá một đối tượng đã chọn, chỉ cần quan sát bảng chọn tắt xuất hiện kèm theo và nháy nút lệnh sao chép hoặc xoá tương ứng.",
          answer: true,
          explain: "Đúng theo SGK (Hình 25.7): chọn đối tượng và quan sát bảng chọn tắt tương ứng, trong đó có các nút lệnh sao chép và xoá.",
        },
        {
          text: "Google Sites không hỗ trợ hoàn tác (undo) hay làm lại (redo) bất kì lệnh nào đã thực hiện trên trang web.",
          answer: false,
          explain: "Sai. SGK nêu rõ có thể huỷ bỏ một lệnh vừa thực hiện (undo) hay thực hiện lại một lệnh trước đó (redo), thể hiện bằng hai biểu tượng ở góc trên cửa sổ (Hình 25.8).",
        },
        {
          text: "Để thêm không gian cho phần chân trang, cần di chuyển xuống cuối trang rồi nháy vào nút \"Thêm chân trang\".",
          answer: true,
          explain: "Đúng theo hướng dẫn Nhiệm vụ 5: di chuyển xuống cuối trang, nháy vào nút Thêm chân trang để không gian cho phần chân trang xuất hiện.",
        },
        {
          text: "Phần chân trang chỉ có thể chứa duy nhất văn bản thuần tuý, hoàn toàn không thể chèn liên kết tới các trang mạng xã hội.",
          answer: false,
          explain: "Sai. SGK nêu: cũng có thể chèn liên kết đến mạng xã hội của chủ thể trang web bằng cách nháy Đường liên kết đến mạng xã hội, sau đó nhập địa chỉ liên kết (Hình 25.10).",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b25-es1",
      q: "Trình bày ba nhóm lệnh của bảng chọn Chèn trong giao diện tạo phần thân trang web trên Google Sites (Nhiệm vụ 1), nêu chức năng của từng nhóm.",
      answer:
        "Bảng chọn Chèn có ba nhóm lệnh:\n\n1. Nhóm lệnh đầu tiên: Hộp văn bản, Hình ảnh, Nhúng, Drive.\n- Hộp văn bản, Hình ảnh: chèn văn bản hay hình ảnh trực tiếp vào trang web.\n- Drive: chèn thông tin từ Google Drive (văn bản, hình ảnh, video, các tư liệu được tạo bằng ứng dụng của Google).\n- Nhúng: chèn các dữ liệu nhúng từ những ứng dụng Internet khác, ví dụ thời tiết, âm nhạc.\n\n2. Nhóm lệnh thứ hai: Các thành phần nội dung.\n- Cho phép tạo phần thân trang theo kiến trúc khối, với các mẫu bố cục được Google Sites hỗ trợ sẵn.\n\n3. Nhóm lệnh thứ ba: Các đối tượng khác.\n- Cho phép chèn các đối tượng như khối văn bản có thể thu gọn, mục lục, băng chuyển hình ảnh, bản đồ, đoạn video từ YouTube, liên kết...",
    },
    {
      id: "b25-es2",
      q: "Trình bày các bước thêm bản đồ vào trang web (Nhiệm vụ 3) và các thao tác chỉnh sửa đối tượng đã có, thiết lập chân trang (Nhiệm vụ 4, 5).",
      answer:
        "* Thêm bản đồ vào trang web (Nhiệm vụ 3):\n1. Chèn bản đồ: thêm bản đồ thực chất là nhúng ứng dụng bản đồ vào trang web. Có thể dùng lệnh Nhúng trong bảng chọn Chèn, hoặc nhanh hơn là chọn Bản đồ ở nhóm thứ ba nếu muốn nhúng Google Maps. Trong cửa sổ Chọn bản đồ, nhập tên vào ô Nhập vị trí hoặc chọn Đặt dấu vị trí để xác định địa điểm bằng cách nháy chuột, sau đó nháy nút Chọn để thêm bản đồ vào trang.\n2. Thay đổi kích thước và di chuyển bản đồ: chọn bản đồ rồi kéo thả chuột tại các nút trên khung để đổi kích thước; kéo thả chuột để di chuyển bản đồ vào vị trí mong muốn.\n\n* Chỉnh sửa các đối tượng đã có (Nhiệm vụ 4):\n- Thay đổi kích thước, di chuyển các đối tượng (khối văn bản, hình ảnh, bản đồ...) đều thực hiện tương tự bản đồ: chọn đối tượng và kéo thả chuột.\n- Muốn sao chép hay xoá một đối tượng: chọn đối tượng, quan sát bảng chọn tắt xuất hiện kèm theo (có nút sao chép và xoá), nháy nút lệnh tương ứng.\n- Có thể huỷ bỏ lệnh vừa thực hiện (undo) hay thực hiện lại lệnh trước đó (redo).\n\n* Thiết lập chân trang (Nhiệm vụ 5):\n- Di chuyển xuống cuối trang, nháy nút Thêm chân trang để không gian chân trang xuất hiện.\n- Chèn khối văn bản và sắp xếp theo ý muốn — nội dung phổ biến nhất là tuyên bố bản quyền, thông tin liên lạc (email, số điện thoại).\n- Có thể chèn liên kết đến mạng xã hội bằng cách nháy Đường liên kết đến mạng xã hội rồi nhập địa chỉ liên kết.",
    },
  ],
};

export default extra;
