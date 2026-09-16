import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Bảng màu lớp 12 — bản giao diện TỐI (dark), phong cách giống web
      // Toán 12 (nền "void" gần đen + chữ "star" gần trắng + màu nhấn rực).
      // ink/ink-soft/cream vẫn giữ giá trị sáng gốc vì ba tên này còn được
      // dùng làm màu CHỮ TRONG các hình minh hoạ SGK (Diagram.tsx) và khối
      // xem trước trình duyệt (luôn có nền trắng thật) — đổi sẽ làm hỏng
      // các chỗ đó. sea/coral/leaf/gold/berry giữ nguyên vì đã dùng làm NỀN
      // nút bấm/nhãn (chữ trắng lên trên) nên không đổi được sắc độ; chỉ có
      // bản "-deep" (chỉ dùng làm CHỮ) là đảo ngược từ đậm sang SÁNG để đọc
      // được trên nền tối.
      colors: {
        ink: "#12212B",
        "ink-soft": "#4C5D6B",
        cream: "#0B1922", // nền thanh sticky + nhãn khối mã — giờ là tông tối
        void: "#0A1720", // nền trang
        "void-card": "#102631", // nền thẻ/hộp (thay cho bg-white cũ)
        sea: "#0D7C86", // màu chủ đạo — dùng làm NỀN (nút, badge)
        "sea-deep": "#5EEAD4", // dùng làm CHỮ trên nền tối (đảo từ đậm → sáng)
        coral: "#F2683C", // màu nhấn
        leaf: "#0E9F6E", // trả lời đúng — dùng làm NỀN
        "leaf-deep": "#6EE7B7", // dùng làm CHỮ trên nền tối
        gold: "#EFA31D", // sao, thành tích — dùng làm NỀN
        "gold-deep": "#FCD34D", // dùng làm CHỮ trên nền tối
        berry: "#DC2626", // trả lời sai
        star: "#EAF3F5", // chữ chính trên nền tối
        "star-soft": "#94B3BC", // chữ phụ trên nền tối
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(30,36,56,0.05), 0 8px 24px rgba(30,36,56,0.08)",
        "card-hover": "0 2px 4px rgba(30,36,56,0.06), 0 14px 34px rgba(30,36,56,0.14)",
      },
      keyframes: {
        "pop-in": {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.25s ease-out both",
        wiggle: "wiggle 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
