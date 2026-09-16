// Bản đồ sách điện tử (SGK) theo từng bài — file HTML tĩnh đặt trong public/sgk/.
export const SGK_EBOOK: Record<string, string> = {
  "bai-01": "/sgk/bai-01.html",
  "bai-02": "/sgk/bai-02.html",
  "bai-03": "/sgk/bai-03.html",
  "bai-04": "/sgk/bai-04.html",
  "bai-05": "/sgk/bai-05.html",
  "bai-06": "/sgk/bai-06.html",
  "bai-07": "/sgk/bai-07.html",
  "bai-08": "/sgk/bai-08.html",
  "bai-09": "/sgk/bai-09.html",
  "bai-10": "/sgk/bai-10.html",
  "bai-11": "/sgk/bai-11.html",
  "bai-12": "/sgk/bai-12.html",
  "bai-13": "/sgk/bai-13.html",
  "bai-14": "/sgk/bai-14.html",
  "bai-15": "/sgk/bai-15.html",
  "bai-16": "/sgk/bai-16.html",
  "bai-17": "/sgk/bai-17.html",
  "bai-18": "/sgk/bai-18.html",
  "bai-19": "/sgk/bai-19.html",
  "bai-20": "/sgk/bai-20.html",
  "bai-21": "/sgk/bai-21.html",
  "bai-22": "/sgk/bai-22.html",
  "bai-23": "/sgk/bai-23.html",
  "bai-24": "/sgk/bai-24.html",
  "bai-25": "/sgk/bai-25.html",
  "bai-26": "/sgk/bai-26.html",
  "bai-27": "/sgk/bai-27.html",
  "bai-28": "/sgk/bai-28.html",
};

export function getSgkUrl(lessonId: string): string | null {
  return SGK_EBOOK[lessonId] ?? null;
}
