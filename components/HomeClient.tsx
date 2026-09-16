"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { getProgress, getErrorStats } from "@/lib/progress";
import { chuDeCanOnLai, type ChuDeCanOnLai } from "@/lib/onLai";
import type { LessonCounts, ProgressMap } from "@/lib/types";

function ScoreBadge({ best }: { best: number }) {
  if (best >= 80) {
    return (
      <span className="rounded-full bg-leaf/15 px-2.5 py-1 font-mono text-xs font-medium text-leaf-deep">
        ⭐ {best}%
      </span>
    );
  }
  if (best >= 50) {
    return (
      <span className="rounded-full bg-gold/15 px-2.5 py-1 font-mono text-xs font-medium text-gold-deep">
        {best}%
      </span>
    );
  }
  return (
    <span className="rounded-full bg-berry/10 px-2.5 py-1 font-mono text-xs font-medium text-berry">
      {best}%
    </span>
  );
}

export default function HomeClient({ counts }: { counts: Record<string, LessonCounts> }) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [canOnLai, setCanOnLai] = useState<ChuDeCanOnLai[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProgress(getProgress());
    setCanOnLai(chuDeCanOnLai(getErrorStats()));
    setLoaded(true);
  }, []);

  const availableLessons = CURRICULUM.flatMap((t) => t.lessons).filter((l) => l.available);
  const doneCount = availableLessons.filter((l) => (progress[l.id]?.best ?? 0) >= 80).length;

  return (
    <main className="playground min-h-screen pb-16">
      <div className="mx-auto max-w-3xl px-5 pt-12 sm:px-8">
        <header className="text-center">
          <p className="inline-block rounded-full bg-gradient-to-r from-sea to-coral px-5 py-2 font-display text-base font-semibold text-white shadow-card sm:px-6 sm:py-2.5 sm:text-xl">
            🏫 Trường THPT Phục Hòa - Tỉnh Cao Bằng
          </p>
          <p className="mt-5 text-5xl">📚✨</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-star sm:text-4xl">
            Ôn luyện{" "}
            <span className="bg-gradient-to-r from-sea to-coral bg-clip-text text-transparent">
              Tin học 12
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-star-soft">
            Mỗi bài có phần lý thuyết tự học kèm hình vẽ minh hoạ, rồi tới trắc nghiệm,
            đúng/sai và tự luận — làm đến đâu chấm đến đó, có giải thích từng câu. Đạt từ
            80% trở lên sẽ nhận sao ⭐. Tiến độ được lưu ngay trên máy của em.
          </p>
          {loaded && (
            <p className="mt-4 inline-block rounded-full border border-sea/20 bg-void-card px-4 py-1.5 font-mono text-sm text-sea-deep shadow-card">
              🏆 Đã chinh phục {doneCount}/{availableLessons.length} bài
            </p>
          )}
        </header>

        <Link
          href="/thi-thu"
          className="mt-8 flex items-center justify-between gap-4 rounded-2xl border-2 border-coral/30 bg-gradient-to-r from-coral/10 to-sea/10 p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover sm:p-6"
        >
          <div>
            <p className="font-display text-lg font-bold text-star">
              🎯 Thi thử theo cấu trúc đề tốt nghiệp THPT
            </p>
            <p className="mt-1 text-sm text-star-soft">
              Bấm giờ 50 phút, đúng cấu trúc QĐ 764 — trộn đề mới mỗi lần làm
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-gradient-to-r from-sea to-coral px-4 py-2 text-sm font-medium text-white">
            Bắt đầu →
          </span>
        </Link>

        {/* Gợi ý ôn lại: chỉ hiện khi học sinh đã làm đủ số câu để tỉ lệ sai có
            ý nghĩa (xem ngưỡng trong lib/onLai.ts). Máy chỉ nêu chỗ còn yếu và
            dẫn về bài tương ứng, việc học lại thế nào vẫn do học sinh quyết. */}
        {loaded && canOnLai.length > 0 && (
          <section className="mt-8 rounded-2xl border-2 border-gold/40 bg-gold/[0.08] p-5 shadow-card sm:p-6">
            <h2 className="font-display text-lg font-bold text-gold-deep">
              🎯 Chỗ em cần ôn lại
            </h2>
            <p className="mt-1 text-sm text-star-soft">
              Dựa trên những câu em đã làm, đây là phần em còn sai nhiều. Đọc lại lý
              thuyết rồi luyện lại, tỉ lệ này sẽ giảm dần.
            </p>
            <ul className="mt-4 space-y-3">
              {canOnLai.map((cd) => (
                <li key={cd.id} className="rounded-xl border border-star/10 bg-void-card p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-display text-sm font-semibold leading-snug text-star">
                      {cd.emoji} {cd.name}
                    </p>
                    <span className="shrink-0 rounded-full bg-berry/15 px-2.5 py-1 font-mono text-xs font-medium text-berry">
                      sai {cd.tyLeSai}%
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-star-soft/60">
                    đã làm {cd.soCauDaLam} câu · sai {cd.soCauSai} câu
                  </p>
                  {cd.bai.length > 0 && (
                    <ul className="mt-2.5 space-y-1.5">
                      {cd.bai.map((b) => (
                        <li key={b.id}>
                          <Link
                            href={`/luyen/${b.id}`}
                            className="group flex items-center justify-between gap-2 rounded-lg bg-star/5 px-3 py-2 transition hover:bg-sea/10"
                          >
                            <span className="text-sm leading-snug text-star-soft group-hover:text-sea-deep">
                              {b.title}
                            </span>
                            <span className="shrink-0 font-mono text-xs text-berry">
                              {b.tyLeSai}%
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-8 space-y-8">
          {CURRICULUM.map((topic) => {
            const hasAvailable = topic.lessons.some((l) => l.available);
            return (
              <section key={topic.id}>
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-star">
                  <span>{topic.emoji}</span> {topic.name}
                </h2>
                <ul className="mt-3 space-y-2">
                  {topic.lessons.map((lesson) => {
                    const p = progress[lesson.id];
                    if (!lesson.available) {
                      return (
                        <li
                          key={lesson.id}
                          className="flex items-center justify-between rounded-xl border border-dashed border-star/10 bg-void-card/40 px-4 py-3 text-sm text-star-soft/50"
                        >
                          <span>{lesson.title}</span>
                          <span className="shrink-0 font-mono text-xs">sắp có</span>
                        </li>
                      );
                    }
                    // Dòng thông tin phụ ghép từ các mảnh có thật, ngăn nhau
                    // bởi dấu chấm giữa — bài nào thiếu dạng nào thì bỏ qua
                    // mảnh đó chứ không hiện "0 tự luận".
                    const c = counts[lesson.id];
                    const meta = [
                      `${c.mcq} trắc nghiệm`,
                      c.tf > 0 ? `${c.tf} đúng/sai` : "",
                      c.essay > 0 ? `${c.essay} tự luận` : "",
                      c.theory ? "📖 có lý thuyết" : "",
                      p ? `đã làm ${p.attempts} lần` : "",
                    ]
                      .filter(Boolean)
                      .join(" · ");
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={`/luyen/${lesson.id}`}
                          className="group flex items-center justify-between gap-3 rounded-xl border border-star/5 bg-void-card px-4 py-3 shadow-card transition hover:-translate-y-0.5 hover:border-sea/30 hover:shadow-card-hover"
                        >
                          {/* Tên bài để tự xuống dòng, KHÔNG cắt bằng truncate —
                              trên điện thoại tên bài dài bị cắt còn "Bài 1. L…" */}
                          <div className="min-w-0">
                            <p className="text-sm font-medium leading-snug text-star group-hover:text-sea-deep">
                              {lesson.title}
                            </p>
                            <p className="mt-0.5 font-mono text-xs leading-relaxed text-star-soft/70">
                              {meta}
                            </p>
                          </div>
                          <div className="flex shrink-0 items-center gap-2">
                            {loaded && p && <ScoreBadge best={p.best} />}
                            <span className="text-star-soft/40 transition group-hover:translate-x-0.5 group-hover:text-sea">
                              →
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {!hasAvailable && null}
              </section>
            );
          })}
        </div>

        <footer className="mt-12 space-y-1 text-center font-mono text-xs text-star-soft/50">
          <p>Tổ Toán - Tin, trường THPT Phục Hòa, tỉnh Cao Bằng</p>
          <p>SGK Kết nối tri thức với cuộc sống · Tiến độ lưu trên trình duyệt của bạn</p>
        </footer>
      </div>
    </main>
  );
}
