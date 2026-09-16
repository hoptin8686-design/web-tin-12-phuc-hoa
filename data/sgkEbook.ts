// Bản đồ sách điện tử (SGK) theo từng bài — file HTML tĩnh đặt trong public/sgk/.
// Muốn thêm SGK cho bài mới: bỏ file .html vào public/sgk/ rồi đăng ký thêm dòng dưới đây.
export const SGK_EBOOK: Record<string, string> = {
  "bai-01": "/sgk/bai-01.html",
};

export function getSgkUrl(lessonId: string): string | null {
  return SGK_EBOOK[lessonId] ?? null;
}
