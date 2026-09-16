"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Question, TFQuestion } from "@/lib/types";
import { saveAttempt, getLessonProgress } from "@/lib/progress";
import { scrollIntoViewIfNeeded } from "@/components/QuizClient";
import {
  taoDeThiThu,
  diemMotCauD2,
  THOI_GIAN_GIAY,
  DIEM_MOI_CAU_D1,
  DIEM_TOI_DA_D1,
  DIEM_TOI_DA_D2,
  DIEM_TOI_DA,
  TEN_CHU_DE_D1,
  TEN_CHU_DE_D2,
  type DeThiThu,
} from "@/lib/thithu";

const KHOA_TIEN_DO = "thi-thu-764";
const OPTION_LABELS = ["A", "B", "C", "D"];
const Y_LABELS = ["a", "b", "c", "d"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type CauD1DaTron = Question & { shuffledOptions: string[]; correctIndex: number };

function tronDe(de: DeThiThu): { d1: CauD1DaTron[]; d2: TFQuestion[] } {
  const d1 = de.d1.map((q) => {
    const order = shuffle([0, 1, 2, 3]);
    return {
      ...q,
      shuffledOptions: order.map((i) => q.options[i]),
      correctIndex: order.indexOf(q.answer),
    };
  });
  return { d1, d2: de.d2 };
}

// Số thập phân kiểu Việt Nam dùng dấu phẩy, không dùng dấu chấm.
function vn(n: number, chuSo = 1): string {
  return n.toFixed(chuSo).replace(".", ",");
}

function dinhDangGio(giay: number): string {
  const m = Math.floor(giay / 60);
  const s = giay % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ThiThuClient() {
  const [giaiDoan, setGiaiDoan] = useState<"gioi-thieu" | "dang-lam" | "da-nop">("gioi-thieu");
  const [de, setDe] = useState<{ d1: CauD1DaTron[]; d2: TFQuestion[] } | null>(null);
  const [dapAnD1, setDapAnD1] = useState<(number | null)[]>([]);
  const [dapAnD2, setDapAnD2] = useState<(boolean | null)[][]>([]);
  const [cauHienTai, setCauHienTai] = useState(0);
  const [giayConLai, setGiayConLai] = useState(THOI_GIAN_GIAY);
  const [hoiXacNhanNop, setHoiXacNhanNop] = useState(false);
  const [kyLuc, setKyLuc] = useState<number | null>(null);
  const cauHoiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setKyLuc(getLessonProgress(KHOA_TIEN_DO)?.best ?? null);
  }, []);

  // Đồng hồ đếm ngược — hết giờ thì tự nộp bài, không cần bấm.
  useEffect(() => {
    if (giaiDoan !== "dang-lam") return;
    const id = setInterval(() => {
      setGiayConLai((g) => {
        if (g <= 1) {
          clearInterval(id);
          return 0;
        }
        return g - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [giaiDoan]);

  useEffect(() => {
    if (giaiDoan === "dang-lam" && giayConLai === 0) nopBai();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [giayConLai, giaiDoan]);

  useEffect(() => {
    scrollIntoViewIfNeeded(cauHoiRef.current);
  }, [cauHienTai]);

  function batDau() {
    const bo = tronDe(taoDeThiThu());
    setDe(bo);
    setDapAnD1(bo.d1.map(() => null));
    setDapAnD2(bo.d2.map(() => [null, null, null, null]));
    setCauHienTai(0);
    setGiayConLai(THOI_GIAN_GIAY);
    setHoiXacNhanNop(false);
    setGiaiDoan("dang-lam");
  }

  const tongSoCau = de ? de.d1.length + de.d2.length : 0;
  const soCauChuaLam = useMemo(() => {
    if (!de) return 0;
    const thieuD1 = dapAnD1.filter((a) => a === null).length;
    const thieuD2 = dapAnD2.filter((y) => y.some((a) => a === null)).length;
    return thieuD1 + thieuD2;
  }, [de, dapAnD1, dapAnD2]);

  function chonD1(cauIndex: number, phuongAn: number) {
    setDapAnD1((prev) => prev.map((a, i) => (i === cauIndex ? phuongAn : a)));
  }

  function chonD2(cauIndex: number, yIndex: number, giaTri: boolean) {
    setDapAnD2((prev) =>
      prev.map((cau, i) => (i === cauIndex ? cau.map((a, j) => (j === yIndex ? giaTri : a)) : cau)),
    );
  }

  function nopBai() {
    if (!de) return;
    const soCauDungD1 = de.d1.filter((q, i) => dapAnD1[i] === q.correctIndex).length;
    const diemD1 = soCauDungD1 * DIEM_MOI_CAU_D1;
    const diemD2 = de.d2.reduce((tong, q, i) => {
      const soYDung = q.statements.filter((st, j) => dapAnD2[i][j] === st.answer).length;
      return tong + diemMotCauD2(soYDung);
    }, 0);
    const diemTong = diemD1 + diemD2;
    const phanTram = Math.round((diemTong / DIEM_TOI_DA) * 100);
    saveAttempt(KHOA_TIEN_DO, phanTram);
    setKyLuc((k) => Math.max(k ?? 0, phanTram));
    setGiaiDoan("da-nop");
  }

  function bamNop() {
    if (soCauChuaLam > 0 && !hoiXacNhanNop) {
      setHoiXacNhanNop(true);
      return;
    }
    nopBai();
  }

  // ───────────────────────── Màn giới thiệu ─────────────────────────
  if (giaiDoan === "gioi-thieu") {
    return (
      <main className="playground min-h-screen pb-16">
        <div className="mx-auto max-w-2xl px-5 pt-12 sm:px-8">
          <Link
            href="/"
            className="rounded-full border border-star/10 bg-void-card px-3 py-1.5 font-mono text-xs text-star-soft transition hover:border-sea/40 hover:text-sea-deep"
          >
            ← Trang chủ
          </Link>

          <div className="mt-6 rounded-2xl border border-star/5 bg-void-card p-6 shadow-card sm:p-8">
            <p className="text-4xl">🎯</p>
            <h1 className="mt-3 font-display text-2xl font-bold text-star">
              Thi thử theo cấu trúc đề tốt nghiệp THPT
            </h1>
            <p className="mt-1 font-mono text-xs text-star-soft/70">
              Theo Quyết định 764/QĐ-BGDĐT · định hướng Tin học ứng dụng (ICT)
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-sea/20 bg-sea/[0.05] p-4">
                <p className="font-display text-sm font-semibold text-sea-deep">
                  Phần I · {vn(DIEM_TOI_DA_D1)} điểm
                </p>
                <p className="mt-1 text-sm text-star-soft">
                  24 câu trắc nghiệm 4 phương án, mỗi câu 0,25đ.
                </p>
                <p className="mt-1.5 font-mono text-xs text-star-soft/60">
                  Lấy từ: {TEN_CHU_DE_D1.join(" · ")}
                </p>
              </div>
              <div className="rounded-xl border border-coral/20 bg-coral/[0.05] p-4">
                <p className="font-display text-sm font-semibold text-coral">
                  Phần II · {vn(DIEM_TOI_DA_D2)} điểm
                </p>
                <p className="mt-1 text-sm text-star-soft">
                  4 câu Đúng/Sai (mỗi câu 4 ý), tính theo bảng điểm không tuyến tính.
                </p>
                <p className="mt-1.5 font-mono text-xs text-star-soft/60">
                  Lấy từ: {TEN_CHU_DE_D2.join(" · ")}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-leaf/25 bg-leaf/[0.06] p-4">
              <p className="font-display text-sm font-semibold text-leaf-deep">
                ✅ Đủ cấu trúc như đề thật
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-star-soft">
                Phần II gồm đủ <strong>4 câu</strong>: Câu 1–2 là phần chung (Mạng, Cơ sở dữ liệu),
                Câu 5–6 là phần riêng nhánh <strong>Tin học ứng dụng</strong> (Web, thực hành CSDL)
                — đúng vị trí và cách chấm điểm của đề tốt nghiệp thật.
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-sea/5 px-4 py-3">
              <p className="text-sm text-star-soft">⏱️ Thời gian làm bài</p>
              <p className="font-display text-lg font-bold text-sea-deep">50 phút</p>
            </div>

            {kyLuc !== null && (
              <p className="mt-3 text-center font-mono text-sm text-star-soft">
                🏆 Kỉ lục của em: {kyLuc}%
              </p>
            )}

            <button
              onClick={batDau}
              className="mt-5 w-full rounded-full bg-gradient-to-r from-sea to-coral px-5 py-3 font-medium text-white shadow-card transition hover:opacity-90"
            >
              Bắt đầu làm bài — bấm giờ ngay 🚀
            </button>
            <p className="mt-2 text-center text-xs text-star-soft/60">
              Đồng hồ chạy ngay khi bấm, không tạm dừng được — hết giờ tự động nộp bài.
            </p>
          </div>
        </div>
      </main>
    );
  }

  // ───────────────────────── Màn kết quả ─────────────────────────
  if (giaiDoan === "da-nop" && de) {
    const soCauDungD1 = de.d1.filter((q, i) => dapAnD1[i] === q.correctIndex).length;
    const diemD1 = soCauDungD1 * DIEM_MOI_CAU_D1;
    const diemD2CacCau = de.d2.map((q, i) => {
      const soYDung = q.statements.filter((st, j) => dapAnD2[i][j] === st.answer).length;
      return { soYDung, diem: diemMotCauD2(soYDung) };
    });
    const diemD2 = diemD2CacCau.reduce((s, x) => s + x.diem, 0);
    const diemTong = diemD1 + diemD2;
    const emoji = diemTong >= 8 ? "🎉" : diemTong >= 5 ? "💪" : "📖";

    return (
      <main className="playground min-h-screen pb-16">
        <div className="mx-auto max-w-2xl px-5 pt-12 sm:px-8">
          <div className="animate-pop-in rounded-2xl border border-star/5 bg-void-card p-8 text-center shadow-card">
            <p className="text-6xl">{emoji}</p>
            <h1 className="mt-3 font-display text-3xl font-bold text-star">
              {vn(diemTong, 2)} / {vn(DIEM_TOI_DA)} điểm
            </h1>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-sea/5 p-3.5">
                <p className="font-display text-sm font-semibold text-sea-deep">
                  Phần I: {vn(diemD1, 2)}/{vn(DIEM_TOI_DA_D1)}đ
                </p>
                <p className="mt-0.5 text-xs text-star-soft">Đúng {soCauDungD1}/{de.d1.length} câu</p>
              </div>
              <div className="rounded-xl bg-coral/5 p-3.5">
                <p className="font-display text-sm font-semibold text-coral">
                  Phần II: {vn(diemD2, 2)}/{vn(DIEM_TOI_DA_D2)}đ
                </p>
                <p className="mt-0.5 text-xs text-star-soft">
                  {diemD2CacCau.map((x) => `${x.soYDung}/4 ý`).join(" · ")}
                </p>
              </div>
            </div>
            {kyLuc !== null && (
              <p className="mt-3 font-mono text-sm text-star-soft">🏆 Kỉ lục: {kyLuc}%</p>
            )}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={batDau}
                className="rounded-full bg-gradient-to-r from-sea to-coral px-6 py-2.5 font-medium text-white shadow-card transition hover:opacity-90"
              >
                Làm đề mới
              </button>
              <Link
                href="/"
                className="rounded-full border border-star/10 bg-void-card px-6 py-2.5 font-medium text-star-soft transition hover:border-sea/40 hover:text-sea-deep"
              >
                ← Trang chủ
              </Link>
            </div>
          </div>

          <section className="mt-8">
            <h2 className="font-display text-lg font-semibold text-star">
              📋 Xem lại toàn bộ {tongSoCau} câu
            </h2>

            <div className="mt-3 space-y-3">
              <p className="font-mono text-xs font-semibold text-star-soft">PHẦN I — Trắc nghiệm</p>
              {de.d1.map((q, i) => {
                const dung = dapAnD1[i] === q.correctIndex;
                return (
                  <div
                    key={q.id}
                    className={`rounded-xl border p-4 shadow-card ${
                      dung ? "border-leaf/20 bg-void-card" : "border-berry/20 bg-void-card"
                    }`}
                  >
                    <p className="text-sm font-medium text-star">
                      Câu {i + 1}. {q.q}
                    </p>
                    {q.code && q.code !== "?" && (
                      <pre className="mt-2 overflow-x-auto rounded-lg bg-ink/95 p-3 font-mono text-xs leading-relaxed text-green-300">
                        {q.code}
                      </pre>
                    )}
                    <p className={`mt-2 text-sm ${dung ? "text-leaf-deep" : "text-berry"}`}>
                      {dung ? "✔ Em chọn đúng" : "✕ Em chưa chọn đúng"} — đáp án:{" "}
                      {q.shuffledOptions[q.correctIndex]}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-star-soft">{q.explain}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 space-y-3">
              <p className="font-mono text-xs font-semibold text-star-soft">PHẦN II — Đúng/Sai</p>
              {de.d2.map((q, i) => (
                <div key={q.id} className="rounded-xl border border-star/5 bg-void-card p-4 shadow-card">
                  <p className="whitespace-pre-wrap text-sm text-star">{q.context}</p>
                  <p className="mt-2 text-sm font-medium text-sea-deep">
                    Được {diemD2CacCau[i].diem.toString().replace(".", ",")} điểm (
                    {diemD2CacCau[i].soYDung}/4 ý đúng)
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {q.statements.map((st, j) => {
                      const dung = dapAnD2[i][j] === st.answer;
                      return (
                        <li key={j} className="text-sm">
                          <span className={dung ? "text-leaf-deep" : "text-berry"}>
                            {Y_LABELS[j]}) {dung ? "✔" : "✕"}
                          </span>{" "}
                          <span className="text-star">{st.text}</span>
                          <span className="block pl-5 text-xs text-star-soft">
                            Đáp án: {st.answer ? "Đúng" : "Sai"} — {st.explain}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    );
  }

  // ───────────────────────── Màn đang làm bài ─────────────────────────
  if (!de) return null;
  const laD1 = cauHienTai < de.d1.length;
  const chiSoD2 = cauHienTai - de.d1.length;
  const gapNguy = giayConLai <= 300; // còn dưới 5 phút

  return (
    <main className="playground min-h-screen pb-24">
      <div className="sticky top-0 z-20 border-b border-star/5 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <p
            className={`font-mono text-lg font-bold tabular-nums ${
              gapNguy ? "animate-wiggle text-berry" : "text-sea-deep"
            }`}
          >
            ⏱️ {dinhDangGio(giayConLai)}
          </p>
          <button
            onClick={bamNop}
            className="rounded-full bg-gradient-to-r from-sea to-coral px-4 py-1.5 text-sm font-medium text-white shadow-card transition hover:opacity-90"
          >
            Nộp bài
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-5 pt-5 sm:px-8">
        {/* Lưới điều hướng */}
        <div className="grid grid-cols-8 gap-1.5 sm:grid-cols-13">
          {de.d1.map((_, i) => {
            const daLam = dapAnD1[i] !== null;
            const dangXem = cauHienTai === i;
            return (
              <button
                key={i}
                onClick={() => setCauHienTai(i)}
                className={`rounded-lg py-1.5 font-mono text-xs font-semibold transition ${
                  dangXem
                    ? "bg-sea text-white"
                    : daLam
                      ? "bg-leaf/20 text-leaf-deep"
                      : "bg-star/5 text-star-soft"
                }`}
              >
                {i + 1}
              </button>
            );
          })}
          {de.d2.map((_, i) => {
            const daLam = dapAnD2[i]?.every((a) => a !== null);
            const idx = de.d1.length + i;
            const dangXem = cauHienTai === idx;
            return (
              <button
                key={`d2-${i}`}
                onClick={() => setCauHienTai(idx)}
                className={`rounded-lg py-1.5 font-mono text-xs font-semibold transition ${
                  dangXem
                    ? "bg-coral text-white"
                    : daLam
                      ? "bg-leaf/20 text-leaf-deep"
                      : "bg-star/5 text-star-soft"
                }`}
              >
                ĐS{i + 1}
              </button>
            );
          })}
        </div>

        {soCauChuaLam > 0 && (
          <p className="mt-2 text-center font-mono text-xs text-star-soft/70">
            Còn {soCauChuaLam} câu chưa làm
          </p>
        )}

        {/* Câu hỏi hiện tại */}
        <div ref={cauHoiRef} key={cauHienTai} className="mt-5 animate-pop-in">
          {laD1 ? (
            <>
              <div className="rounded-2xl border border-star/5 bg-void-card p-5 shadow-card sm:p-6">
                <p className="font-mono text-xs text-star-soft/60">
                  Phần I · Câu {cauHienTai + 1}/{de.d1.length}
                </p>
                <p className="mt-1.5 text-base font-medium leading-relaxed text-star">
                  {de.d1[cauHienTai].q}
                </p>
                {de.d1[cauHienTai].code && de.d1[cauHienTai].code !== "?" && (
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-ink/95 p-3.5 font-mono text-sm leading-relaxed text-green-300">
                    {de.d1[cauHienTai].code}
                  </pre>
                )}
              </div>
              <div className="mt-4 space-y-2.5">
                {de.d1[cauHienTai].shuffledOptions.map((option, i) => {
                  const daChon = dapAnD1[cauHienTai] === i;
                  return (
                    <button
                      key={i}
                      onClick={() => chonD1(cauHienTai, i)}
                      className={`flex w-full items-start gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm transition ${
                        daChon
                          ? "border-sea bg-sea/10"
                          : "border-star/10 bg-void-card hover:border-sea/50 hover:bg-sea/5"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold ${
                          daChon ? "bg-sea text-white" : "bg-star/5 text-star-soft"
                        }`}
                      >
                        {OPTION_LABELS[i]}
                      </span>
                      <span className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-star sm:text-sm">
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="rounded-2xl border border-star/5 bg-void-card p-5 shadow-card sm:p-6">
                <p className="font-mono text-xs text-star-soft/60">
                  Phần II · Câu Đúng/Sai {chiSoD2 + 1}/{de.d2.length}
                </p>
                <p className="mt-1.5 whitespace-pre-wrap text-[15px] leading-relaxed text-star">
                  {de.d2[chiSoD2].context}
                </p>
                {de.d2[chiSoD2].code && (
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-ink/95 p-3.5 font-mono text-sm leading-relaxed text-green-300">
                    {de.d2[chiSoD2].code}
                  </pre>
                )}
              </div>
              <div className="mt-4 space-y-3">
                {de.d2[chiSoD2].statements.map((st, j) => {
                  const chosen = dapAnD2[chiSoD2]?.[j] ?? null;
                  return (
                    <div key={j} className="rounded-xl border-2 border-star/10 bg-void-card p-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-star/5 font-mono text-xs font-semibold text-star-soft">
                          {Y_LABELS[j]}
                        </span>
                        <p className="min-w-0 flex-1 text-sm leading-relaxed text-star">{st.text}</p>
                      </div>
                      <div className="mt-2.5 flex items-center gap-2 pl-9">
                        <button
                          onClick={() => chonD2(chiSoD2, j, true)}
                          className={`rounded-full border-2 px-4 py-1 text-xs font-semibold transition ${
                            chosen === true
                              ? "border-sea bg-sea text-white"
                              : "border-star/15 bg-void-card text-star-soft hover:border-sea/50"
                          }`}
                        >
                          Đúng
                        </button>
                        <button
                          onClick={() => chonD2(chiSoD2, j, false)}
                          className={`rounded-full border-2 px-4 py-1 text-xs font-semibold transition ${
                            chosen === false
                              ? "border-coral bg-coral text-white"
                              : "border-star/15 bg-void-card text-star-soft hover:border-coral/50"
                          }`}
                        >
                          Sai
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              onClick={() => setCauHienTai((c) => Math.max(0, c - 1))}
              disabled={cauHienTai === 0}
              className="rounded-full border border-star/10 bg-void-card px-4 py-2 text-sm font-medium text-star-soft transition hover:border-sea/40 disabled:opacity-30"
            >
              ← Câu trước
            </button>
            <button
              onClick={() => setCauHienTai((c) => Math.min(tongSoCau - 1, c + 1))}
              disabled={cauHienTai === tongSoCau - 1}
              className="rounded-full border border-star/10 bg-void-card px-4 py-2 text-sm font-medium text-star-soft transition hover:border-sea/40 disabled:opacity-30"
            >
              Câu sau →
            </button>
          </div>
        </div>
      </div>

      {/* Hộp xác nhận khi nộp mà còn thiếu câu */}
      {hoiXacNhanNop && (
        <div className="fixed inset-0 z-30 flex items-end justify-center bg-ink/40 p-5 sm:items-center">
          <div className="w-full max-w-sm animate-pop-in rounded-2xl bg-void-card p-5 text-center shadow-card-hover">
            <p className="text-3xl">🤔</p>
            <p className="mt-2 font-display text-base font-semibold text-star">
              Còn {soCauChuaLam} câu chưa làm
            </p>
            <p className="mt-1 text-sm text-star-soft">Em chắc chắn muốn nộp bài luôn chứ?</p>
            <div className="mt-4 flex gap-2.5">
              <button
                onClick={() => setHoiXacNhanNop(false)}
                className="flex-1 rounded-full border border-star/10 bg-void-card px-4 py-2.5 text-sm font-medium text-star-soft"
              >
                Làm tiếp
              </button>
              <button
                onClick={nopBai}
                className="flex-1 rounded-full bg-gradient-to-r from-sea to-coral px-4 py-2.5 text-sm font-medium text-white"
              >
                Nộp luôn
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
