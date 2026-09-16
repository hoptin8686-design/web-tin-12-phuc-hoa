import type { LessonTheory } from "@/lib/types";

// Bài 20. Nhóm nghề quản trị thuộc ngành Công nghệ thông tin — SGK Tin học 12
// (ICT, Kết nối tri thức), trang 110–112. Chủ đề 5 (Hướng nghiệp với Tin học).

const theory: LessonTheory = {
  minutes: 9,

  intro:
    "Bài này tìm hiểu nhóm nghề **quản trị** thuộc ngành Công nghệ thông tin — quản trị mạng, bảo mật hệ thống thông tin, quản trị và bảo trì hệ thống: công việc cụ thể, kiến thức và kĩ năng cần có, nhu cầu nhân lực và ngành học liên quan.",

  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "nhom-nghe-quan-tri",
      emoji: "🛡️",
      heading: "Nhóm nghề quản trị thuộc ngành Công nghệ thông tin",
      blocks: [
        {
          kind: "text",
          text: "Cuộc cách mạng số hoá đang diễn ra trên phạm vi toàn cầu khiến các doanh nghiệp, tổ chức ngày càng sử dụng và phụ thuộc nhiều hơn vào các hệ thống máy tính, hệ thống thông tin, ứng dụng hay cơ sở dữ liệu. Điều này cũng đồng nghĩa với việc phải đối mặt với những sự cố và tình huống bất ngờ.",
        },
        {
          kind: "cards",
          tone: "berry",
          items: [
            {
              emoji: "🦠",
              title: "WannaCry (5/2017)",
              text: "Một trong những phần mềm độc hại đáng chú ý nhất lịch sử máy tính, tấn công có tính toàn cầu.",
            },
            {
              emoji: "✈️",
              title: "British Airways",
              text: "Cùng thời điểm với WannaCry, hệ thống máy tính gặp sự cố nghiêm trọng, phải ngừng hoạt động nhiều ngày, huỷ hàng nghìn chuyến bay.",
            },
            {
              emoji: "🎮",
              title: "Sony (2014)",
              text: "Hệ thống máy tính của hãng điện tử Nhật Bản bị một nhóm tin tặc tấn công, thông tin quan trọng bị rò rỉ, thiệt hại nghiêm trọng tới uy tín.",
            },
          ],
        },
        {
          kind: "text",
          text: "Những sự việc trên cho thấy nhu cầu phải có những chuyên gia **quản trị hệ thống thông tin, bảo mật và quản trị mạng** — những người làm việc trong lĩnh vực quản trị của ngành Công nghệ thông tin, với ba công việc chính:",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "🌐",
              title: "Quản trị mạng",
              text: "Quản lí và duy trì hệ thống mạng máy tính của tổ chức: cài đặt, cấu hình và bảo mật mạng, theo dõi hiệu suất, xử lí sự cố mạng, đảm bảo mạng luôn hoạt động ổn định.",
            },
            {
              emoji: "🔒",
              title: "Bảo mật hệ thống thông tin",
              text: "Bảo mật dữ liệu và hệ thống của tổ chức khỏi các mối đe doạ, tấn công mạng: phát triển, triển khai biện pháp bảo mật, giám sát mạng để phát hiện xâm nhập trái phép, xử lí các vụ việc liên quan.",
            },
            {
              emoji: "🖥️",
              title: "Quản trị và bảo trì hệ thống",
              text: "Quản lí và duy trì toàn bộ hệ thống thông tin của tổ chức, gồm cả phần cứng và phần mềm: cài đặt, cập nhật, xử lí sự cố để đảm bảo hệ thống ổn định, hiệu suất cao.",
            },
          ],
        },
        {
          kind: "note",
          text: "Nhóm nghề quản trị trong ngành Công nghệ thông tin thực hiện những công việc nhằm đảm bảo hệ thống công nghệ thông tin của các tổ chức và doanh nghiệp hoạt động một cách **hiệu quả và an toàn**.",
        },
        {
          kind: "check",
          q: "Công việc cài đặt, cấu hình, theo dõi hiệu suất và xử lí sự cố để mạng máy tính của tổ chức luôn hoạt động ổn định là nhiệm vụ chính của nghề nào?",
          options: [
            "Quản trị mạng",
            "Bảo mật hệ thống thông tin",
            "Quản trị và bảo trì hệ thống",
            "Sửa chữa và bảo trì máy tính",
          ],
          answer: 0,
          explain:
            "Chuyên gia quản trị mạng có nhiệm vụ quản lí và duy trì hệ thống mạng máy tính của tổ chức, gồm cài đặt, cấu hình, bảo mật mạng, theo dõi hiệu suất và xử lí sự cố mạng.",
        },
        {
          kind: "text",
          text: "Để thực hiện được những công việc như vậy, người làm việc trong nhóm nghề quản trị cần có những kiến thức sau:",
        },
        {
          kind: "cards",
          tone: "coral",
          items: [
            {
              emoji: "🌐",
              title: "Mạng máy tính",
              text: "Nắm được cấu trúc và hoạt động của mạng máy tính, gồm giao thức mạng, phân tích lưu lượng mạng và các thiết bị mạng như router, firewall.",
            },
            {
              emoji: "🛡️",
              title: "Bảo mật thông tin",
              text: "Nắm được các phương thức tấn công mạng (từ chối dịch vụ DoS, dò lỗ hổng…); biết triển khai, quản lí hệ thống phát hiện xâm nhập (IDS) và phòng thủ tường lửa.",
            },
            {
              emoji: "⚙️",
              title: "Quản lí hệ thống",
              text: "Có kiến thức sâu về quản lí hệ điều hành, gồm cài đặt, cấu hình, duy trì hệ thống; xử lí hiệu quả sự cố, lỗi phần mềm và phần cứng.",
            },
            {
              emoji: "⚖️",
              title: "Luật pháp và tuân thủ quy định",
              text: "Hiểu biết và tuân thủ luật pháp, các quy định cũng như tiêu chuẩn quốc tế hiện hành về bảo mật thông tin và an ninh mạng.",
            },
          ],
        },
        {
          kind: "cards",
          tone: "gold",
          items: [
            {
              emoji: "💬",
              title: "Kĩ năng giao tiếp",
              text: "Trao đổi rõ ràng với đồng nghiệp, người dùng khi triển khai hệ thống hoặc xử lí sự cố.",
            },
            {
              emoji: "⏱️",
              title: "Kĩ năng quản lí thời gian",
              text: "Sắp xếp công việc để xử lí kịp thời các sự cố, đáp ứng yêu cầu vận hành liên tục của hệ thống.",
            },
            {
              emoji: "📚",
              title: "Kĩ năng tự nghiên cứu, học hỏi",
              text: "**Đặc biệt cần thiết** để cập nhật kiến thức, giúp bắt kịp các xu hướng mới, công nghệ mới.",
            },
          ],
        },
        {
          kind: "note",
          text: "Người làm việc trong nhóm nghề quản trị trong ngành Công nghệ thông tin cần một số kiến thức cơ bản về **mạng máy tính, bảo mật thông tin, quản lí hệ thống** và cả kiến thức về **luật pháp**. Một số kĩ năng mềm khác sẽ giúp họ nâng cao hiệu quả làm việc.",
        },
        {
          kind: "check",
          q: "Kiến thức về các phương thức tấn công mạng (như tấn công từ chối dịch vụ DoS), cách triển khai hệ thống phát hiện xâm nhập (IDS) và phòng thủ tường lửa thuộc nhóm kiến thức nào?",
          options: [
            "Bảo mật thông tin",
            "Mạng máy tính",
            "Quản lí hệ thống",
            "Luật pháp và tuân thủ quy định",
          ],
          answer: 0,
          explain:
            "SGK liệt kê: kiến thức về Bảo mật thông tin gồm nắm được các phương thức tấn công mạng như DoS, dò lỗ hổng, biết triển khai và quản lí hệ thống phát hiện xâm nhập (IDS) và hệ thống phòng thủ tường lửa.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "nhu-cau-nhan-luc-nganh-hoc",
      emoji: "📈",
      heading: "Nhu cầu nhân lực và ngành học liên quan",
      blocks: [
        {
          kind: "text",
          text: "Nhu cầu về nhân lực của nhóm nghề quản trị trong ngành Công nghệ thông tin đang gia tăng ở cả Việt Nam và trên thế giới. Với sự bùng nổ của công nghệ thông tin và sự lan toả mạnh mẽ của số hoá, các tổ chức đang đặc biệt quan tâm, chú trọng vào việc quản lí và bảo vệ thông tin của họ.",
        },
        {
          kind: "cards",
          tone: "leaf",
          items: [
            {
              emoji: "🌐",
              title: "Quản trị mạng",
              text: "Sự phổ biến của IoT làm tăng số lượng thiết bị kết nối mạng. Làm việc từ xa, dịch vụ trực tuyến (lưu trữ đám mây, thương mại điện tử…) đòi hỏi cao về sự ổn định, an toàn mạng.",
            },
            {
              emoji: "🔒",
              title: "Bảo mật hệ thống thông tin",
              text: "Nguy cơ tấn công mạng ngày càng phức tạp, đa dạng; chuyển đổi số làm tăng nhu cầu dùng dịch vụ đám mây; các tổ chức, cơ quan ngày càng chú trọng tuân thủ quy định an ninh thông tin.",
            },
            {
              emoji: "🖥️",
              title: "Quản trị và bảo trì hệ thống",
              text: "Chuyển đổi số kéo theo sự gia tăng số lượng, chủng loại thiết bị công nghệ thông tin — từ máy tính cá nhân đến thiết bị IoT — đặt ra yêu cầu mới về quản lí, bảo trì từ xa, tận dụng AI.",
            },
          ],
        },
        {
          kind: "text",
          text: "Nhiều ngành học liên quan tới nhóm nghề quản trị trong lĩnh vực công nghệ thông tin được đào tạo tại các cơ sở giáo dục và đào tạo trong cả nước:",
        },
        {
          kind: "list",
          items: [
            "Quản trị mạng máy tính",
            "Quản trị hệ thống",
            "An ninh mạng",
            "Hệ thống thông tin",
            "Mạng máy tính và truyền thông dữ liệu",
          ],
        },
        {
          kind: "note",
          text: "Cùng với sự phát triển của quá trình chuyển đổi số, nhu cầu về nguồn nhân lực trong lĩnh vực quản trị trong ngành Công nghệ thông tin đang ngày càng tăng cao. Một số ngành học liên quan tới nhóm nghề này là **Quản trị mạng máy tính; Quản trị hệ thống; An ninh mạng; Hệ thống thông tin; Mạng máy tính và truyền thông dữ liệu**.",
        },
        {
          kind: "check",
          q: "Sự phổ biến ngày càng tăng của các thiết bị IoT (Internet vạn vật), làm tăng số lượng thiết bị kết nối mạng, chủ yếu làm tăng nhu cầu nhân lực cho nghề nào?",
          options: [
            "Quản trị mạng",
            "Bảo mật hệ thống thông tin",
            "Quản trị và bảo trì hệ thống",
            "Sửa chữa và bảo trì máy tính",
          ],
          answer: 0,
          explain:
            "SGK nêu: đối với Quản trị mạng, sự phổ biến của IoT đã dẫn đến sự gia tăng về số lượng thiết bị kết nối mạng, cùng với mô hình làm việc từ xa và dịch vụ trực tuyến, làm tăng nhu cầu chuyên gia quản trị mạng.",
        },
      ],
    },
  ],

  summary: [
    "Nhóm nghề quản trị trong ngành Công nghệ thông tin gồm ba nghề chính: **Quản trị mạng, Bảo mật hệ thống thông tin, Quản trị và bảo trì hệ thống** — đảm bảo hệ thống công nghệ thông tin của tổ chức hoạt động **hiệu quả và an toàn**.",
    "Các sự cố thực tế như **WannaCry (2017), British Airways, Sony (2014)** cho thấy vai trò sống còn của nhóm nghề này.",
    "Cần kiến thức về **mạng máy tính, bảo mật thông tin, quản lí hệ thống, luật pháp và tuân thủ quy định**; cùng kĩ năng mềm, đặc biệt là **tự nghiên cứu, học hỏi, cập nhật**.",
    "Nhu cầu nhân lực tăng cao do IoT bùng nổ, làm việc từ xa, dịch vụ trực tuyến và quá trình chuyển đổi số. Ngành học liên quan: Quản trị mạng máy tính, Quản trị hệ thống, An ninh mạng, Hệ thống thông tin, Mạng máy tính và truyền thông dữ liệu.",
  ],
};

export default theory;
