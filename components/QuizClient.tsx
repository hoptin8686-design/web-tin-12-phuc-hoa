"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Question } from "@/lib/types";
import { getLessonProgress, saveAttempt, saveErrorStats } from "@/lib/progress";
import NopBai from "@/components/NopBai";

// Cuộn phần vừa hiện ra vào tầm nhìn. Trên điện thoại, ô giải thích nằm dưới
// đáy màn hình nên không tự thấy được; gọi hàm này để học sinh khỏi vuốt tay
// sau mỗi câu. Máy tính màn hình rộng đã thấy sẵn thì "nearest" không cuộn gì.
export function scrollIntoViewIfNeeded(el: HTMLElement | null) {
  if (!el) return;
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
}

// Một câu hỏi sau khi trộn thứ tự phương án
type ShuffledQuestion = Question & {
  shuffledOptions: string[];
  correctIndex: number; // vị trí đáp án đúng trong shuffledOptions
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepare(questions: Question[]): ShuffledQuestion[] {
  return shuffle(questions).map((q) => {
    const order = shuffle([0, 1, 2, 3]);
    return {
      ...q,
      shuffledOptions: order.map((i) => q.options[i]),
      correctIndex: order.indexOf(q.answer),
    };
  });
}

const OPTION_LABELS = ["A", "B", "C", "D"];

export default function QuizClient({
  lessonId,
  lessonTitle,
  topicName,
  questions,
  onBack,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  questions: Question[];
  onBack?: () => void;
}) {
  const [quiz, setQuiz] = useState<ShuffledQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  // Trộn câu hỏi ở client để tránh lệch giữa server render và client
  useEffect(() => {
    setQuiz(prepare(questions));
    setBest(getLessonProgress(lessonId)?.best ?? null);
  }, [questions, lessonId]);

  useEffect(() => {
    if (picked !== null) scrollIntoViewIfNeeded(feedbackRef.current);
  }, [picked]);

  const q = quiz[current];
  const scorePercent = quiz.length ? Math.round((correctCount / quiz.length) * 100) : 0;

  const wrongQuestions = useMemo(
    () => quiz.filter((item) => wrongIds.includes(item.id)),
    [quiz, wrongIds]
  );

  function pick(index: number) {
    if (picked !== null || !q) return;
    setPicked(index);
    if (index === q.correctIndex) {
      setCorrectCount((c) => c + 1);
    } else {
      setWrongIds((ids) => [...ids, q.id]);
    }
  }

  function next() {
    if (current + 1 >= quiz.length) {
      const finalCorrect = correctCount;
      const percent = Math.round((finalCorrect / quiz.length) * 100);
      saveAttempt(lessonId, percent);
      saveErrorStats(lessonId, quiz.length - finalCorrect, quiz.length);
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  }

  function retry() {
    setQuiz(prepare(questions));
    setCurrent(0);
    setPicked(null);
    setCorrectCount(0);
    setWrongIds([]);
    setFinished(false);
    setBest(getLessonProgress(lessonId)?.best ?? null);
  }

  if (quiz.length === 0) {
    return (
      <main className="playground flex min-h-screen items-center justify-center">
        <p className="font-mono text-sm text-star-soft">Đang chuẩn bị câu hỏi…</p>
      </main>
    );
  }

  // ===== Màn hình kết quả =====
  if (finished) {
    const emoji = scorePercent >= 80 ? "🎉" : scorePercent >= 50 ? "💪" : "📖";
    const message =
      scorePercent >= 80
        ? "Xuất sắc! Em đã nắm chắc bài này."
        : scorePercent >= 50
          ? "Khá lắm! Xem lại các câu sai rồi thử lại nhé."
          : "Đừng nản! Đọc lại bài rồi luyện thêm lần nữa nhé.";

    return (
      <main className="playground min-h-screen pb-16">
        <div className="mx-auto max-w-2xl px-5 pt-12 sm:px-8">
          <div className="animate-pop-in rounded-2xl border border-star/5 bg-void-card p-8 text-center shadow-card">
            <p className="text-6xl">{emoji}</p>
            <h1 className="mt-3 font-display text-2xl font-bold text-star">
              {correctCount}/{quiz.length} câu đúng · {scorePercent}%
            </h1>
            <p className="mt-2 text-star-soft">{message}</p>
            {best !== null && scorePercent > best && (
              <p className="mt-2 font-mono text-sm font-medium text-leaf-deep">
                🚀 Kỉ lục mới! (trước đó: {best}%)
              </p>
            )}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={retry}
                className="rounded-full bg-gradient-to-r from-sea to-coral px-6 py-2.5 font-medium text-white shadow-card transition hover:opacity-90"
              >
                Làm lại (trộn đề mới)
              </button>
              {onBack ? (
                <button
                  onClick={onBack}
                  className="rounded-full border border-star/10 bg-void-card px-6 py-2.5 font-medium text-star-soft transition hover:border-sea/40 hover:text-sea-deep"
                >
                  ← Chọn phần khác
                </button>
              ) : (
                <Link
                  href="/"
                  className="rounded-full border border-star/10 bg-void-card px-6 py-2.5 font-medium text-star-soft transition hover:border-sea/40 hover:text-sea-deep"
                >
                  Chọn bài khác
                </Link>
              )}
            </div>
          </div>

          <NopBai
            baiId={lessonId}
            tenBai={lessonTitle}
            dang="Trắc nghiệm"
            diem={scorePercent}
            soCauDung={correctCount}
            tongSoCau={quiz.length}
          />

          {wrongQuestions.length > 0 && (
            <section className="mt-8">
              <h2 className="font-display text-lg font-semibold text-star">
                📌 Xem lại {wrongQuestions.length} câu sai
              </h2>
              <ul className="mt-3 space-y-3">
                {wrongQuestions.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-xl border border-berry/20 bg-void-card p-4 shadow-card"
                  >
                    <p className="text-sm font-medium text-star">{item.q}</p>
                    {item.code && item.code !== "?" && (
                      <pre className="mt-2 overflow-x-auto rounded-lg bg-ink/95 p-3 font-mono text-xs leading-relaxed text-green-300">
                        {item.code}
                      </pre>
                    )}
                    <p className="mt-2 text-sm text-leaf-deep">
                      ✔ Đáp án đúng: {item.options[item.answer]}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-star-soft">{item.explain}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
    );
  }

  // ===== Màn hình làm bài =====
  const progressPercent = Math.round((current / quiz.length) * 100);

  return (
    <main className="playground min-h-screen pb-16">
      <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8">
        <header>
          <div className="flex items-center justify-between gap-3">
            {onBack ? (
              <button
                onClick={onBack}
                className="rounded-full border border-star/10 bg-void-card px-3 py-1.5 font-mono text-xs text-star-soft transition hover:border-sea/40 hover:text-sea-deep"
              >
                ← Quay lại
              </button>
            ) : (
              <Link
                href="/"
                className="rounded-full border border-star/10 bg-void-card px-3 py-1.5 font-mono text-xs text-star-soft transition hover:border-sea/40 hover:text-sea-deep"
              >
                ← Trang chủ
              </Link>
            )}
            <p className="font-mono text-xs text-star-soft">
              Câu {current + 1}/{quiz.length}
              {best !== null && ` · kỉ lục ${best}%`}
            </p>
          </div>
          <h1 className="mt-3 font-display text-lg font-semibold leading-snug text-star">
            {lessonTitle}
          </h1>
          <p className="font-mono text-xs text-star-soft/60">{topicName}</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-star/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sea to-coral transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </header>

        <div key={q.id} className="mt-6 animate-pop-in">
          <div className="rounded-2xl border border-star/5 bg-void-card p-5 shadow-card sm:p-6">
            <p className="text-base font-medium leading-relaxed text-star">{q.q}</p>
            {q.code && q.code !== "?" && (
              <pre className="mt-3 overflow-x-auto rounded-lg bg-ink/95 p-3.5 font-mono text-sm leading-relaxed text-green-300">
                {q.code}
              </pre>
            )}
          </div>

          <div className="mt-4 space-y-2.5">
            {q.shuffledOptions.map((option, i) => {
              const isPicked = picked === i;
              const isCorrect = i === q.correctIndex;
              let cls =
                "border-star/10 bg-void-card hover:border-sea/50 hover:bg-sea/5";
              if (picked !== null) {
                if (isCorrect) {
                  cls = "border-leaf bg-leaf/10";
                } else if (isPicked) {
                  cls = "border-berry bg-berry/10 animate-wiggle";
                } else {
                  cls = "border-star/5 bg-void-card/60 opacity-60";
                }
              }
              return (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  disabled={picked !== null}
                  className={`flex w-full items-start gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm transition ${cls}`}
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold ${
                      picked !== null && isCorrect
                        ? "bg-leaf text-white"
                        : picked !== null && isPicked
                          ? "bg-berry text-white"
                          : "bg-star/5 text-star-soft"
                    }`}
                  >
                    {picked !== null && isCorrect
                      ? "✓"
                      : picked !== null && isPicked
                        ? "✕"
                        : OPTION_LABELS[i]}
                  </span>
                  <span className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-star sm:text-sm">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {picked !== null && (
            <div
              ref={feedbackRef}
              className="mt-4 animate-pop-in rounded-xl border border-star/5 bg-void-card p-4 shadow-card"
            >
              <p
                className={`font-display text-sm font-semibold ${
                  picked === q.correctIndex ? "text-leaf-deep" : "text-berry"
                }`}
              >
                {picked === q.correctIndex ? "🎯 Chính xác!" : "😅 Chưa đúng rồi"}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-star-soft">{q.explain}</p>
              <button
                onClick={next}
                className="mt-3 w-full rounded-full bg-gradient-to-r from-sea to-coral px-5 py-2.5 font-medium text-white transition hover:opacity-90"
              >
                {current + 1 >= quiz.length ? "Xem kết quả 🏁" : "Câu tiếp theo →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
