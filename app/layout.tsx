import type { Metadata } from "next";
import { Baloo_2, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Baloo_2({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ôn luyện Tin học 12 — THPT Phục Hòa",
  description:
    "Web ôn luyện Tin học 12 (Kết nối tri thức, định hướng Tin học ứng dụng) của Trường THPT Phục Hòa, tỉnh Cao Bằng — lý thuyết tự học có hình minh hoạ, luyện trắc nghiệm tự chấm, xem giải thích, theo dõi tiến độ theo từng bài.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body text-star antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
