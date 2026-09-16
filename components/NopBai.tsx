"use client";

import { useEffect, useState } from "react";
import { getHocSinh, saveHocSinh, hopLe, chuanHoa, MAX_HO_TEN, MAX_LOP } from "@/lib/hocsinh";

type TrangThai = "nhap" | "sansang" | "danggui" | "xong" | "loi";

export default function NopBai({
  baiId,
  tenBai,
  dang,
  diem,
  soCauDung,
  tongSoCau,
}: {
  baiId: string;
  tenBai: string;
  dang: "Trắc nghiệm" | "Đúng/Sai";
  diem: number;
  soCauDung: number;
  tongSoCau: number;
}) {
  const [trangThai, setTrangThai] = useState<TrangThai>("nhap");
  const [hoTen, setHoTen] = useState("");
  const [lop, setLop] = useState("");
  const [loi, setLoi] = useState("");

  // Đã từng nộp trên máy này thì điền sẵn, khỏi gõ lại mỗi lần.
  useEffect(() => {
    const hs = getHocSinh();
    if (hs) {
      setHoTen(hs.hoTen);
      setLop(hs.lop);
      setTrangThai("sansang");
    }
  }, []);

  const dayDu = hopLe({ hoTen, lop });

  async function nop() {
    if (!dayDu) return;
    // Chuẩn hoá NGAY vào ô nhập luôn, không chỉ chuẩn hoá lúc gửi. Ô nhập chỉ
    // trông như in hoa nhờ CSS, nếu không đồng bộ lại thì thẻ xác nhận sẽ hiện
    // "lớp 12a1" trong khi bảng tính đã ghi "12A1".
    const sach = chuanHoa({ hoTen, lop });
    setHoTen(sach.hoTen);
    setLop(sach.lop);
    saveHocSinh(sach);
    setTrangThai("danggui");
    setLoi("");
    try {
      const res = await fetch("/api/nop-bai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hoTen: sach.hoTen,
          lop: sach.lop,
          baiId,
          tenBai,
          dang,
          diem,
          soCauDung,
          tongSoCau,
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; loi?: string } | null;
      if (res.ok && data?.ok) {
        setTrangThai("xong");
      } else {
        setLoi(data?.loi ?? "Chưa gửi được, em thử lại nhé");
        setTrangThai("loi");
      }
    } catch {
      setLoi("Máy không kết nối được mạng, em kiểm tra rồi thử lại nhé");
      setTrangThai("loi");
    }
  }

  if (trangThai === "xong") {
    return (
      <div className="mt-4 animate-pop-in rounded-2xl border-2 border-leaf/40 bg-leaf/[0.08] p-5 text-center">
        <p className="text-3xl">📨</p>
        <p className="mt-1.5 font-display text-base font-semibold text-leaf-deep">
          Đã nộp cho thầy cô rồi!
        </p>
        <p className="mt-1 text-sm text-star-soft">
          {hoTen} · lớp {lop} · {dang} · {diem}%
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-2xl border border-star/10 bg-void-card p-5 text-left shadow-card">
      <p className="text-center font-display text-base font-semibold text-star">
        📨 Nộp kết quả cho thầy cô
      </p>
      <p className="mt-1 text-center text-sm text-star-soft">
        Chỉ những lượt em bấm nộp mới được gửi đi. Luyện nháp thì cứ thoải mái.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="font-mono text-xs text-star-soft">Họ và tên</span>
          <input
            value={hoTen}
            onChange={(e) => setHoTen(e.target.value)}
            maxLength={MAX_HO_TEN}
            placeholder="Nông Thị Mai"
            disabled={trangThai === "danggui"}
            className="mt-1 w-full rounded-xl border border-star/15 bg-void-card px-3.5 py-2.5 text-[15px] placeholder:text-star-soft/40 focus:border-sea disabled:opacity-60"
          />
        </label>
        <label className="block sm:w-28">
          <span className="font-mono text-xs text-star-soft">Lớp</span>
          <input
            value={lop}
            onChange={(e) => setLop(e.target.value)}
            maxLength={MAX_LOP}
            placeholder="12A1"
            disabled={trangThai === "danggui"}
            className="mt-1 w-full rounded-xl border border-star/15 bg-void-card px-3.5 py-2.5 text-[15px] uppercase placeholder:text-star-soft/40 focus:border-sea disabled:opacity-60"
          />
        </label>
      </div>

      {trangThai === "loi" && (
        <p className="mt-3 rounded-xl bg-berry/10 px-3.5 py-2.5 text-sm text-berry">⚠️ {loi}</p>
      )}

      <button
        onClick={nop}
        disabled={!dayDu || trangThai === "danggui"}
        className="mt-4 w-full rounded-full bg-gradient-to-r from-sea to-coral px-5 py-2.5 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {trangThai === "danggui" ? "Đang gửi…" : trangThai === "loi" ? "Thử nộp lại" : "Nộp cho thầy 📨"}
      </button>

      {!dayDu && (hoTen !== "" || lop !== "") && (
        <p className="mt-2 text-center font-mono text-xs text-star-soft/70">
          Em ghi đủ họ và tên (có dấu cách) và lớp, ví dụ 12A1
        </p>
      )}
    </div>
  );
}
