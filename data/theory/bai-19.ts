import type { LessonTheory } from "@/lib/types";

// Bài 19. Dịch vụ sửa chữa và bảo trì máy tính — SGK Tin học 12 (ICT, Kết nối
// tri thức), trang 106–109. Chủ đề 5 (Hướng nghiệp với Tin học) — bài hướng
// nghiệp, không có cú pháp kĩ thuật, không cần hình vẽ SVG minh hoạ cơ chế.

const theory: LessonTheory = {
  minutes: 9,

  intro:
    "Bài này tìm hiểu một nghề dịch vụ thuộc ngành Công nghệ thông tin: **sửa chữa và bảo trì máy tính** — công việc cụ thể gồm những gì, cần kiến thức và kĩ năng gì, và học ngành nào để làm nghề này.",

  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "cong-viec-sua-chua-bao-tri",
      emoji: "🛠️",
      heading: "Dịch vụ sửa chữa và bảo trì máy tính",
      blocks: [
        {
          kind: "text",
          text: "Các nghề dịch vụ thuộc ngành Công nghệ thông tin có nhiệm vụ hỗ trợ, phát triển và duy trì các hệ thống công nghệ thông tin cho cá nhân, doanh nghiệp và tổ chức. Trong số đó, **sửa chữa, bảo trì máy tính** là nghề dịch vụ có vai trò quan trọng: duy trì sự ổn định của máy tính và các thiết bị liên quan, giúp người dùng được hỗ trợ kĩ thuật khi cần.",
        },
        {
          kind: "text",
          text: "Máy tính và các thiết bị công nghệ thông tin chỉ hoạt động được cùng với phần mềm, trong những điều kiện môi trường phù hợp. Vì vậy, **sửa chữa, bảo trì phần cứng không tách rời khỏi việc duy trì phần mềm** đi kèm và đảm bảo môi trường hoạt động cho cả hệ thống.",
        },
        {
          kind: "text",
          text: "Người làm nghề sửa chữa và bảo trì máy tính cần thực hiện ba nhóm công việc chính:",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "🔧",
              title: "Liên quan tới phần cứng",
              text: "Kiểm soát, duy trì hoạt động; xác định và khắc phục lỗi; lắp đặt, sửa chữa, thay thế linh kiện hỏng; nâng cấp ổ cứng, RAM, màn hình, mainboard theo yêu cầu.",
            },
            {
              emoji: "💾",
              title: "Liên quan tới phần mềm",
              text: "Cài đặt, cập nhật driver; cài đặt, cấu hình hệ điều hành và ứng dụng văn phòng; cập nhật phiên bản mới; đảm bảo kết nối mạng; quét mã độc, cấu hình phần mềm phòng chống virus.",
            },
            {
              emoji: "🙋",
              title: "Hỗ trợ người dùng",
              text: "Hướng dẫn người dùng sử dụng máy tính, thiết bị công nghệ thông tin đúng cách, hiệu quả; hướng dẫn sử dụng các phần mềm thông dụng.",
            },
          ],
        },
        {
          kind: "note",
          text: "Nghề sửa chữa và bảo trì máy tính bao gồm những công việc nhằm **duy trì sự ổn định** của máy tính cũng như các thiết bị liên quan tới máy tính, **giúp người dùng được hỗ trợ kĩ thuật khi cần**.",
        },
        {
          kind: "check",
          q: "Vì sao sửa chữa, bảo trì phần cứng không thể tách rời việc duy trì phần mềm đi kèm?",
          options: [
            "Vì máy tính, thiết bị công nghệ thông tin chỉ hoạt động được cùng phần mềm, trong môi trường phù hợp",
            "Vì kĩ thuật viên phần cứng bắt buộc phải có chứng chỉ lập trình phần mềm mới được hành nghề sửa chữa",
            "Vì phần mềm luôn được nhà sản xuất bán kèm miễn phí mỗi khi khách hàng mua một linh kiện phần cứng mới",
            "Vì mọi lỗi phần cứng đều do phần mềm gây ra, sửa xong phần mềm thì phần cứng tự động hoạt động lại",
          ],
          answer: 0,
          explain:
            "SGK nêu rõ: máy tính và các thiết bị công nghệ thông tin chỉ có thể hoạt động cùng với phần mềm trong những điều kiện môi trường phù hợp, nên sửa chữa/bảo trì phần cứng không tách rời việc duy trì phần mềm đi kèm.",
        },
        {
          kind: "text",
          text: "Thiết bị công nghệ thông tin và phần mềm rất đa dạng, không ai có khả năng sửa chữa và bảo trì **tất cả** các thiết bị. Vì vậy trong thực tế, các đơn vị dịch vụ thường **phân công chuyên trách** — mỗi chuyên viên phụ trách chuyên sâu một số mảng thiết bị, phần mềm cụ thể. Dưới đây là những kiến thức và kĩ năng chung cần có để làm nghề này.",
        },
        {
          kind: "cards",
          tone: "coral",
          items: [
            {
              emoji: "🖥️",
              title: "Kiến thức về phần cứng",
              text: "Hiểu biết về các thành phần cơ bản của máy tính. Biết cách kiểm tra, tháo lắp, sửa chữa, thay thế phần cứng khi cần thiết.",
            },
            {
              emoji: "🧩",
              title: "Kiến thức về phần mềm",
              text: "Thực hiện được việc cài đặt, cấu hình, sửa chữa hệ điều hành, phần mềm văn phòng, trình duyệt web; biết phát hiện, loại bỏ virus và phần mềm độc hại.",
            },
            {
              emoji: "🌐",
              title: "Kiến thức về mạng",
              text: "Có kiến thức cơ bản về mạng máy tính, gồm các phương pháp kết nối và cấu hình mạng cục bộ cũng như mạng Internet.",
            },
          ],
        },
        {
          kind: "cards",
          tone: "gold",
          items: [
            {
              emoji: "📚",
              title: "Kĩ năng học hỏi, cập nhật kiến thức",
              text: "Theo dõi, cập nhật để hiểu biết về công nghệ mới.",
            },
            {
              emoji: "🧠",
              title: "Kĩ năng giải quyết vấn đề",
              text: "Phân tích, giải quyết vấn đề kĩ thuật; biết tìm kiếm, tra cứu tài liệu hướng dẫn, thông tin hữu ích trên Internet để khắc phục lỗi.",
            },
            {
              emoji: "💬",
              title: "Kĩ năng giao tiếp",
              text: "Giao tiếp tốt với người dùng để hiểu yêu cầu của họ và giải thích, tư vấn giải pháp kĩ thuật một cách dễ hiểu.",
            },
            {
              emoji: "⏱️",
              title: "Kĩ năng quản lí thời gian",
              text: "Quản lí thời gian để hoàn thành dự án sửa chữa, bảo trì đúng thời gian quy định, đáp ứng yêu cầu khách hàng.",
            },
          ],
        },
        {
          kind: "note",
          text: "Người làm nghề sửa chữa và bảo trì máy tính cần phải có **kiến thức về phần cứng, phần mềm, mạng máy tính** và **một số kĩ năng mềm** để nâng cao hiệu quả, năng suất làm việc.",
        },
        {
          kind: "check",
          q: "Một khách hàng mô tả sự cố bằng ngôn ngữ không chuyên, kĩ thuật viên cần giải thích nguyên nhân và cách khắc phục sao cho khách hàng dễ hiểu. Đây là biểu hiện của kĩ năng nào?",
          options: [
            "Kĩ năng giao tiếp",
            "Kĩ năng quản lí thời gian",
            "Kiến thức về phần cứng",
            "Kiến thức về mạng máy tính",
          ],
          answer: 0,
          explain:
            "Kĩ năng giao tiếp là khả năng giao tiếp tốt với người dùng để hiểu yêu cầu của họ và giải thích, tư vấn cho họ các giải pháp kĩ thuật một cách dễ hiểu.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "nhu-cau-nhan-luc-nganh-hoc",
      emoji: "🎓",
      heading: "Nhu cầu nhân lực và ngành học liên quan",
      blocks: [
        {
          kind: "text",
          text: "Cuộc cách mạng công nghiệp 4.0 dẫn đến sự phổ biến của máy tính, thiết bị kĩ thuật số cũng như sự bùng nổ của các thiết bị kết nối, đặt ra thách thức cho việc duy trì và sửa chữa các hệ thống này. Mô hình làm việc từ xa và sự gia tăng dịch vụ trực tuyến đòi hỏi người làm nghề phải có kĩ năng **chẩn đoán và sửa lỗi từ xa**, đồng thời phải nắm vững các biện pháp **bảo mật thông tin và an toàn**.",
        },
        {
          kind: "note",
          text: "Trong tương lai gần, nhu cầu nhân lực cho nghề sửa chữa và bảo trì máy tính, **đặc biệt là nhân lực trình độ cao**, sẽ ngày càng tăng cả về số lượng lẫn chất lượng.",
        },
        {
          kind: "text",
          text: "Ở Việt Nam, các cơ sở giáo dục và đào tạo đều có ngành đào tạo liên quan tới nghề này, ví dụ:",
        },
        {
          kind: "list",
          items: [
            "Kĩ thuật sửa chữa, lắp ráp máy tính",
            "Công nghệ kĩ thuật phần cứng máy tính",
            "Công nghệ kĩ thuật phần mềm máy tính",
            "Công nghệ thông tin",
          ],
        },
        {
          kind: "compare",
          left: {
            emoji: "🎓",
            title: "Bậc Cao đẳng",
            items: [
              "Điều kiện thực hành nhiều hơn",
              "Chú trọng **mức độ thành thạo** kĩ năng sửa chữa thiết bị cụ thể — yếu tố quan trọng nhất với nghề này",
            ],
          },
          right: {
            emoji: "🏛️",
            title: "Bậc Đại học",
            items: [
              "Kĩ năng sửa chữa thiết bị cụ thể ít được chú ý hơn",
              "Được đào tạo tốt về **nguyên lí hoạt động** của máy tính và thiết bị công nghệ thông tin",
              "Có thể giải quyết vấn đề phức tạp, tìm hiểu thiết bị mới đòi hỏi kiến thức cao hơn",
            ],
          },
        },
        {
          kind: "text",
          text: "Dù học ở bậc nào, môi trường công ti cũng góp phần giúp người sửa chữa, bảo trì học hỏi được thêm từ thực tiễn và từ đồng nghiệp.",
        },
        {
          kind: "note",
          text: "Nhu cầu nhân lực, đặc biệt là nhân lực trình độ cao, cho dịch vụ sửa chữa và bảo trì máy tính ngày càng tăng cao. Một số ngành học liên quan tới nhóm nghề này là **Kĩ thuật sửa chữa, lắp ráp máy tính; Công nghệ kĩ thuật phần cứng máy tính; Công nghệ kĩ thuật phần mềm máy tính; Công nghệ thông tin**.",
        },
        {
          kind: "check",
          q: "Theo SGK, yếu tố nào là quan trọng nhất đối với việc sửa chữa, bảo trì máy tính, và bậc học nào thường có điều kiện tốt hơn để rèn yếu tố đó?",
          options: [
            "Mức độ thành thạo trong công việc — bậc Cao đẳng thường có điều kiện thực hành nhiều hơn",
            "Bằng cấp học thuật cao nhất có thể đạt được — bậc Đại học luôn thành thạo tay nghề hơn Cao đẳng",
            "Khả năng lập trình phần mềm — chỉ đào tạo ở ngành Công nghệ kĩ thuật phần mềm máy tính",
            "Chứng chỉ ngoại ngữ quốc tế — yêu cầu bắt buộc trước khi được nhận vào bất kì cơ sở đào tạo nào",
          ],
          answer: 0,
          explain:
            "SGK nêu: đối với việc sửa chữa, bảo trì thì mức độ thành thạo trong công việc là yếu tố quan trọng nhất; các trường dạy nghề bậc Cao đẳng thường có điều kiện nhiều hơn để đảm bảo điều này.",
        },
      ],
    },
  ],

  summary: [
    "Nghề sửa chữa, bảo trì máy tính gồm ba nhóm công việc: **liên quan tới phần cứng** (kiểm soát, khắc phục lỗi, thay thế, nâng cấp), **liên quan tới phần mềm** (cài đặt, cập nhật, diệt virus, đảm bảo kết nối mạng) và **hỗ trợ người dùng**.",
    "Sửa chữa, bảo trì phần cứng **không tách rời** việc duy trì phần mềm đi kèm, vì thiết bị chỉ hoạt động được cùng phần mềm trong điều kiện môi trường phù hợp.",
    "Cần **kiến thức** về phần cứng, phần mềm, mạng máy tính; và **kĩ năng mềm**: học hỏi cập nhật, giải quyết vấn đề, giao tiếp, quản lí thời gian.",
    "Nhu cầu nhân lực trình độ cao ngày càng tăng. Ngành học liên quan: Kĩ thuật sửa chữa/lắp ráp máy tính, Công nghệ kĩ thuật phần cứng/phần mềm máy tính, Công nghệ thông tin.",
    "**Mức độ thành thạo công việc** là yếu tố quan trọng nhất — bậc Cao đẳng chú trọng thực hành tay nghề, bậc Đại học chú trọng nguyên lí hoạt động để xử lí vấn đề phức tạp hơn.",
  ],
};

export default theory;
