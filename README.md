# Ôn luyện Tin học 12 — THPT Phục Hòa

Web ôn luyện Tin học 12 theo SGK **Kết nối tri thức với cuộc sống**,
**định hướng Tin học ứng dụng (ICT)**, của **Trường THPT Phục Hòa, tỉnh Cao
Bằng**, dành cho học sinh tự ôn tập: chọn bài → làm câu hỏi → chấm ngay từng
câu kèm giải thích → xem tổng kết và ôn lại câu sai. Xây bằng Next.js 14 +
Tailwind, **không cần database, không cần đăng nhập** — tiến độ lưu trong
`localStorage` của trình duyệt học sinh.

Chương trình gồm **28 bài / 7 chủ đề / 70 tiết**, lấy theo Kế hoạch giáo dục của
giáo viên năm học 2026-2027 (`tai-lieu/KHGD_Tin_hoc_12_ICT_2026-2027.docx`).
Năm học này khối 12 **không học chuyên đề học tập**, nên web không đưa 15 bài
chuyên đề vào.

Mỗi bài gồm **3 dạng câu hỏi**:

| Dạng | Số lượng mỗi bài |
|---|---|
| Trắc nghiệm 4 phương án | 16-19 câu |
| Đúng/Sai 4 mệnh đề (dạng D2 thi tốt nghiệp) | 3 câu (12 ý) |
| Tự luận có gợi ý đáp án | 2 câu |

**Soạn câu hỏi bài nào thì phải đọc SGK bài đó trước.** SGK là bản scan không có
lớp văn bản — xem `tai-lieu/BAN_DO_TRANG_SGK.md` để biết bài nào ở trang nào và
cách render trang ra ảnh để đọc.

## Tiến độ soạn ngân hàng câu hỏi

| Chủ đề | Bài | Trạng thái |
|---|---|---|
| 1. Máy tính và xã hội tri thức | 1-2 | ✅ xong |
| 2. Mạng máy tính và Internet | 3-5 | ✅ xong |
| 3. Đạo đức, pháp luật và văn hoá trong môi trường số | 6 | ✅ xong |
| 4. Giải quyết vấn đề với sự trợ giúp của máy tính (HTML & CSS) | 7-18 | 🔸 xong Bài 7, **làm tiếp từ Bài 8** |
| 5. Hướng nghiệp với tin học | 19-21 | ⬜ chưa soạn |
| 6. Máy tính và xã hội tri thức | 22 | ⬜ chưa soạn |
| 7. Ứng dụng tin học *(Google Sites)* | 23-28 | ⬜ chưa soạn |

Bài 1–21 là kiến thức cốt lõi chung cho cả hai định hướng ICT và CS; Bài 22–28 mới
là phần riêng của ICT. Vì vậy tên Chủ đề 6 trùng tên Chủ đề 1 — đó là cách SGK đặt,
không phải lỗi. **Bài 23–28 dạy bằng Google Sites, không phải HTML/CSS** — xem
`tai-lieu/BAN_DO_TRANG_SGK.md`.

Đã có chế độ **Thi thử** bấm giờ theo cấu trúc đề tốt nghiệp THPT (QĐ 764) tại
`/thi-thu` — 50 phút, 24 câu trắc nghiệm D1 + 2 câu đúng/sai D2 (**bản rút gọn**:
đề thật có 4 câu D2 nhưng 2 câu lấy từ chủ đề Cơ sở dữ liệu SGK lớp 11, ngân hàng
web này chưa có nội dung đó nên tạm bớt, mỗi câu D2 còn lại tính điểm gấp đôi để
giữ đúng thang 10 điểm).

Chưa làm: phần **nâng cấp giao diện** so với web lớp 10.

## Chạy ở máy local

```bash
npm run dev
```

Mở http://localhost:3002 (web lớp 10 dùng cổng 3001 nên chạy song song được).

## Triển khai lên Vercel

1. Đẩy code lên GitHub repo **private** (repo công khai sẽ lộ đáp án).
2. Vào https://vercel.com → New Project → chọn repo → Deploy.
3. Xong. Không cần cấu hình biến môi trường (web tĩnh hoàn toàn).

## Tính năng

Vào một bài, học sinh chọn một trong ba phần luyện:

**🎯 Trắc nghiệm** — câu hỏi và thứ tự phương án **trộn ngẫu nhiên mỗi lượt**;
chấm ngay từng câu kèm giải thích; kết thúc hiện điểm %, danh sách câu sai để
ôn lại và nút làm lại với đề trộn mới.

**⚖️ Đúng/Sai** — mỗi câu là một tình huống thực tế (lời dẫn 3-5 dòng) kèm 4 ý
a/b/c/d, học sinh đánh giá đúng/sai từng ý. **Chấm điểm theo quy chế thi tốt
nghiệp THPT**: đúng 1 ý được 0,1đ · 2 ý 0,25đ · 3 ý 0,5đ · cả 4 ý 1đ.

**✍️ Tự luận** — có ô nháp để học sinh tự viết câu trả lời trước, sau đó bấm
xem gợi ý đáp án để tự đối chiếu (nội dung nháp không bị lưu lại).

Ngoài ra: tiến độ mỗi bài (điểm cao nhất, số lần làm) lưu trên máy học sinh,
đạt ≥80% nhận sao ⭐ trên trang chủ; hỗ trợ câu hỏi kèm đoạn mã ở cả ba dạng —
rất cần cho phần HTML & CSS từ Bài 7 trở đi.

## Thêm / sửa câu hỏi

**Đọc `CACH_RA_DE.md` trước khi soạn câu hỏi mới.** Đó là quy tắc viết phương án
nhiễu, rút ra từ lỗi phải sửa lại toàn bộ 34 bài ở web lớp 10.

### 1. Trắc nghiệm 4 phương án — `data/questions/bai-XX.ts`

```ts
{
  id: "b1-01",                    // mã câu, duy nhất trong bài
  q: "Nội dung câu hỏi?",
  code: "<p>Xin chào</p>",        // (tuỳ chọn) đoạn mã hiển thị kèm
  options: ["Đáp án đúng", "Sai 1", "Sai 2", "Sai 3"],
  answer: 0,                      // chỉ số đáp án đúng trong options (0-3)
  explain: "Giải thích ngắn.",
},
```

Luôn đặt đáp án đúng ở vị trí 0 cho dễ soát — web tự trộn thứ tự phương án mỗi
lượt làm bài nên học sinh không nhớ được vị trí.

### 2. Đúng/Sai và Tự luận — `data/extra/bai-XX.ts`

```ts
const extra: LessonExtra = {
  tf: [
    {
      id: "b1-tf1",
      context: "Lời dẫn tình huống 3-5 dòng, có ngữ cảnh sinh động…",
      code: "…",                  // (tuỳ chọn) đoạn mã kèm theo
      statements: [               // ĐÚNG 4 ý, mỗi ý độc lập
        { text: "Mệnh đề a…", answer: true,  explain: "Vì sao đúng." },
        { text: "Mệnh đề b…", answer: false, explain: "Vì sao sai." },
        // … đủ 4 ý a, b, c, d
      ],
    },
  ],
  essay: [
    { id: "b1-es1", q: "Đề bài tự luận…", answer: "Gợi ý đáp án, xuống dòng bằng \\n" },
  ],
};
```

Quy ước ra đề Đúng/Sai: **2 ý đúng, 2 ý sai** cho cân đối; ít nhất một ý đánh
vào hiểu lầm phổ biến; các ý phải **độc lập** (sai ý này không kéo theo ý khác);
lời dẫn lấy bối cảnh gần gũi học sinh vùng cao (chợ phiên, hợp tác xã, mùa vụ,
nhóm Zalo của thôn…).

### 3. Thêm một bài mới

1. Tạo `data/questions/bai-XX.ts` và `data/extra/bai-XX.ts`.
2. Đăng ký trong `lib/questions.ts` (`QUESTION_BANK`) và `lib/extras.ts`
   (`EXTRA_BANK`).
3. Trong `data/curriculum.ts`: đổi `available: false` → `true` cho bài đó.
4. Kiểm tra ngay:

```bash
python do_dai.py
```

```bash
npx tsc --noEmit
```

`do_dai.py` đếm số câu có đáp án đúng dài hơn hẳn phương án nhiễu — **mục tiêu
là 0 câu ở mọi bài**. Chạy sau mỗi bài, đừng để soạn xong 20 bài rồi mới đo.

## Cấu trúc thư mục

```
app/
  page.tsx                  Trang chủ
  luyen/[baiId]/page.tsx    Trang một bài (nạp cả 3 dạng câu hỏi)
components/
  HomeClient.tsx            Danh sách chủ đề/bài + tiến độ
  LessonClient.tsx          Menu chọn dạng luyện của một bài
  QuizClient.tsx            Dạng trắc nghiệm: trộn đề, chấm, tổng kết
  TrueFalseQuiz.tsx         Dạng đúng/sai: 4 ý, chấm theo quy chế thi
  EssayViewer.tsx           Dạng tự luận: ô nháp + hiện gợi ý đáp án
lib/
  types.ts                  Kiểu dữ liệu Question, TFQuestion, EssayQuestion…
  questions.ts              Đăng ký ngân hàng trắc nghiệm
  extras.ts                 Đăng ký ngân hàng đúng/sai + tự luận
  progress.ts               Lưu/đọc tiến độ từ localStorage
data/
  curriculum.ts             28 bài / 7 chủ đề theo SGK KNTT lớp 12 (ICT)
  questions/bai-XX.ts       Trắc nghiệm từng bài
  extra/bai-XX.ts           Đúng/sai + tự luận từng bài
tai-lieu/                   Kế hoạch giáo dục, tài liệu tham khảo
do_dai.py                   Script đo cân đối độ dài phương án
```

## Lưu ý khi phát triển

- Không chạy `npm run build` trong lúc `npm run dev` đang chạy — hai lệnh dùng
  chung thư mục `.next` nên sẽ gây lỗi 500 `Cannot find module`. Nếu gặp: dừng
  server, xoá `.next`, chạy lại.
- Dừng hẳn server phải kill theo cổng:
  `Get-NetTCPConnection -LocalPort 3002 -State Listen` rồi `Stop-Process`.
- Khi soạn câu hỏi có phép tính hoặc đếm kí tự, **tự kiểm chứng lại** — lần làm
  lớp 10 có 3 chỗ đáp án mâu thuẫn với phần giải thích do đếm nhầm.
