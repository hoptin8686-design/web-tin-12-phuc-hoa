"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { EssayQuestion, LessonTheory, Question, TFQuestion } from "@/lib/types";
import { getLessonProgress, theoryKey } from "@/lib/progress";
import QuizClient from "@/components/QuizClient";
import TrueFalseQuiz from "@/components/TrueFalseQuiz";
import EssayViewer from "@/components/EssayViewer";
import TheoryViewer from "@/components/TheoryViewer";

type Mode = "menu" | "theory" | "mcq" | "tf" | "essay" | "sgk";

export default function LessonClient({
  lessonId,
  lessonTitle,
  topicName,
  theory,
  mcq,
  tf,
  essay,
  sgkUrl,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  theory: LessonTheory | null;
  mcq: Question[];
  tf: TFQuestion[];
  essay: EssayQuestion[];
  sgkUrl?: string | null;
}) {
  const [mode, setMode] = useState<Mode>("menu");
  const [bestMcq, setBestMcq] = useState<number | null>(null);
  const [bestTf, setBestTf] = useState<number | null>(null);
  const [readTheory, setReadTheory] = useState(false);

  useEffect(() => {
    if (mode === "menu") {
      setBestMcq(getLessonProgress(lessonId)?.best ?? null);
      setBestTf(getLessonProgress(`${lessonId}:ds`)?.best ?? null);
      setReadTheory(getLessonProgress(theoryKey(lessonId)) !== null);
    }
  }, [mode, lessonId]);

  // Rời khỏi bài lí thuyết (bài đó cuộn dài) thì đưa trang về đầu, tránh mở
  // phần luyện tập ở lưng chừng màn hình.
  function leaveTheory(next: Mode) {
    window.scrollTo({ top: 0 });
    setMode(next);
  }

  if (mode === "sgk" && sgkUrl) {
    return (
      <div className="fixed inset-0 z-50 bg-[#05070b]">
        <button
          onClick={() => setMode("menu")}
          className="fixed left-3 top-3 z-10 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 font-mono text-xs text-white backdrop-blur transition hover:border-white/40"
        >
          ← Quay lại
        </button>
        <iframe
          src={sgkUrl}
          title={`SGK · ${lessonTitle}`}
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  if (mode === "theory" && theory) {
    return (
      <main className="playground min-h-screen pb-16">
        <TheoryViewer
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          topicName={topicName}
          theory={theory}
          onBack={() => leaveTheory("menu")}
          onGoQuiz={() => leaveTheory("mcq")}
        />
      </main>
    );
  }

  if (mode === "mcq") {
    // QuizClient tự bọc <main> riêng nên không bọc thêm ở đây
    return (
      <QuizClient
        lessonId={lessonId}
        lessonTitle={lessonTitle}
        topicName={topicName}
        questions={mcq}
        onBack={() => setMode("menu")}
      />
    );
  }

  if (mode === "tf") {
    return (
      <main className="playground min-h-screen pb-16">
        <TrueFalseQuiz
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          questions={tf}
          onBack={() => setMode("menu")}
        />
      </main>
    );
  }

  if (mode === "essay") {
    return (
      <main className="playground min-h-screen pb-16">
        <EssayViewer
          lessonTitle={lessonTitle}
          questions={essay}
          onBack={() => setMode("menu")}
        />
      </main>
    );
  }

  const options = [
    {
      key: "theory" as Mode,
      emoji: "📖",
      name: "Lý thuyết",
      desc: theory
        ? `~${theory.minutes} phút đọc · ${theory.sections.length} mục, có hình vẽ và ví dụ minh hoạ`
        : "",
      best: null,
      done: readTheory,
      enabled: theory !== null,
    },
    ...(sgkUrl
      ? [
          {
            key: "sgk" as Mode,
            emoji: "📘",
            name: "SGK",
            desc: "Sách điện tử — xem nguyên bài trong sách giáo khoa",
            best: null,
            done: false,
            enabled: true,
          },
        ]
      : []),
    {
      key: "mcq" as Mode,
      emoji: "🎯",
      name: "Trắc nghiệm",
      desc: `${mcq.length} câu · chọn 1 trong 4 phương án, chấm ngay từng câu`,
      best: bestMcq,
      done: false,
      enabled: mcq.length > 0,
    },
    {
      key: "tf" as Mode,
      emoji: "⚖️",
      name: "Đúng / Sai",
      desc: `${tf.length} câu tình huống · mỗi câu 4 ý, chấm điểm như thi tốt nghiệp`,
      best: bestTf,
      done: false,
      enabled: tf.length > 0,
    },
    {
      key: "essay" as Mode,
      emoji: "✍️",
      name: "Tự luận",
      desc: `${essay.length} câu · tự trả lời rồi đối chiếu gợi ý đáp án`,
      best: null,
      done: false,
      enabled: essay.length > 0,
    },
  ];

  return (
    <main className="playground min-h-screen pb-16">
      <div className="mx-auto max-w-2xl px-5 pt-10 sm:px-8">
        <Link
          href="/"
          className="rounded-full border border-star/10 bg-void-card px-3 py-1.5 font-mono text-xs text-star-soft transition hover:border-sea/40 hover:text-sea-deep"
        >
          ← Trang chủ
        </Link>
        <h1 className="mt-5 font-display text-2xl font-bold leading-snug text-star">
          {lessonTitle}
        </h1>
        <p className="mt-1 font-mono text-xs text-star-soft/60">{topicName}</p>

        <div className="mt-6 space-y-3">
          {options
            .filter((o) => o.enabled)
            .map((o) => (
              <button
                key={o.key}
                onClick={() => setMode(o.key)}
                className="group flex w-full items-start gap-4 rounded-2xl border border-star/5 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-0.5 hover:border-sea/30 hover:shadow-card-hover"
              >
                <span className="shrink-0 text-3xl leading-none">{o.emoji}</span>
                {/* Huy hiệu nằm CÙNG HÀNG với tên phần và được phép xuống dòng,
                    còn dòng mô tả chiếm trọn bề ngang. Trước đây huy hiệu đứng
                    riêng một cột nên trên điện thoại nó bóp dòng mô tả còn vài
                    kí tự, chữ tràn thành cả chục dòng. */}
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-display text-base font-semibold text-star group-hover:text-sea-deep">
                      {o.name}
                    </span>
                    {o.done && (
                      <span className="rounded-full bg-leaf/15 px-2.5 py-0.5 font-mono text-xs font-medium text-leaf-deep">
                        ✓ đã đọc
                      </span>
                    )}
                    {o.best !== null && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-xs font-medium ${
                          o.best >= 80
                            ? "bg-leaf/15 text-leaf-deep"
                            : o.best >= 50
                              ? "bg-gold/15 text-gold-deep"
                              : "bg-berry/10 text-berry"
                        }`}
                      >
                        {o.best >= 80 ? "⭐ " : ""}
                        {o.best}%
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-star-soft">{o.desc}</span>
                </span>
                <span className="shrink-0 self-center text-star-soft/40 transition group-hover:translate-x-0.5 group-hover:text-sea">
                  →
                </span>
              </button>
            ))}
        </div>
      </div>
    </main>
  );
}
