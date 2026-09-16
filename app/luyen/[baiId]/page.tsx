import { notFound } from "next/navigation";
import { findLesson, CURRICULUM } from "@/data/curriculum";
import { getQuestions } from "@/lib/questions";
import { getTF, getEssay } from "@/lib/extras";
import { getTheory } from "@/lib/theory";
import { getSgkUrl } from "@/data/sgkEbook";
import LessonClient from "@/components/LessonClient";

export function generateStaticParams() {
  return CURRICULUM.flatMap((t) => t.lessons)
    .filter((l) => l.available)
    .map((l) => ({ baiId: l.id }));
}

export default function LuyenPage({ params }: { params: { baiId: string } }) {
  const found = findLesson(params.baiId);
  const questions = getQuestions(params.baiId);

  if (!found || !found.lesson.available || questions.length === 0) notFound();

  return (
    <LessonClient
      lessonId={found.lesson.id}
      lessonTitle={found.lesson.title}
      topicName={found.topic.name}
      theory={getTheory(params.baiId)}
      mcq={questions}
      tf={getTF(params.baiId)}
      essay={getEssay(params.baiId)}
      sgkUrl={getSgkUrl(params.baiId)}
    />
  );
}
