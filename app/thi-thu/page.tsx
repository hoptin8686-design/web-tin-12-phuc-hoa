import type { Metadata } from "next";
import ThiThuClient from "@/components/ThiThuClient";

export const metadata: Metadata = {
  title: "Thi thử QĐ 764 — Ôn luyện Tin học 12",
};

export default function ThiThuPage() {
  return <ThiThuClient />;
}
