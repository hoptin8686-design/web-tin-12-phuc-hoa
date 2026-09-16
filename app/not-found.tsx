import Link from "next/link";

export default function NotFound() {
  return (
    <main className="playground flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-6xl">🔍</p>
      <h1 className="font-display text-2xl font-bold text-star">Không tìm thấy trang</h1>
      <p className="text-star-soft">Bài luyện tập này không tồn tại hoặc chưa có câu hỏi.</p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-sea px-6 py-2.5 font-medium text-white transition hover:opacity-90"
      >
        Về trang chủ
      </Link>
    </main>
  );
}
