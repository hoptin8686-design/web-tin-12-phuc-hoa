# Web luyện trắc nghiệm Tin học 12 — hướng dẫn bắt đầu

> **[05/8/2026] Bản giao việc này đã được thực hiện — xem `README.md` để biết
> tình trạng hiện tại.** Bốn câu hỏi bỏ ngỏ ở mục 7 đều đã được giáo viên trả lời:
>
> 1. Định hướng: **Tin học ứng dụng (ICT)**, không làm nhánh Khoa học máy tính.
> 2. Bộ sách: **Kết nối tri thức**; danh sách 28 bài lấy theo KHGD trong `tai-lieu/`.
>    Khối 12 năm nay **không học chuyên đề học tập** nên không đưa 15 bài chuyên đề vào.
> 3. Giao diện: **nâng cấp đẹp hơn lớp 10** (chưa làm).
> 4. Chế độ **Thi thử** bấm giờ theo QĐ 764: **có làm** trong đợt này (chưa làm).
>
> Giữ file này lại để tra cứu bối cảnh và các bẫy kỹ thuật ở mục 6.

Đây là bản giao việc để phiên Claude Code mới bắt tay vào làm ngay mà không
phải hỏi lại từ đầu.

**Việc cần làm:** dựng web luyện trắc nghiệm Tin học 12 cho Trường THPT Na Rì,
tỉnh Thái Nguyên — tương tự web lớp 10 đã chạy thật.

---

## 1. Đọc dự án mẫu trước khi làm bất cứ điều gì

Dự án lớp 10 đã hoàn chỉnh và đang chạy tại **https://luyen-trac-nghiem-tin-10.vercel.app**

Mã nguồn: `E:\du-an\luyen-trac-nghiem-tin-10`

Hai file BẮT BUỘC đọc trước:
- `README.md` — kiến trúc, cách thêm câu hỏi, cấu trúc thư mục
- `CACH_RA_DE.md` — **quan trọng nhất**, quy tắc viết phương án nhiễu

Cách nhanh nhất để khởi động: sao chép toàn bộ dự án lớp 10 sang đây (trừ
`node_modules`, `.next`, `.git`), rồi thay dữ liệu câu hỏi và phần thương hiệu.

---

## 2. Kiến trúc đã chốt (giữ nguyên, đừng đổi)

- **Next.js 14 + Tailwind, web tĩnh hoàn toàn** — không database, không đăng nhập
- Tiến độ học sinh lưu trong `localStorage` của trình duyệt
- Mỗi bài có **3 dạng câu hỏi**, vào bài sẽ hiện menu chọn:
  - 🎯 Trắc nghiệm 4 phương án (10-12 câu/bài) — trộn câu và trộn đáp án mỗi lượt
  - ⚖️ Đúng/Sai 4 mệnh đề (3 câu/bài) — chấm theo quy chế thi tốt nghiệp:
    đúng 1 ý 0,1đ · 2 ý 0,25đ · 3 ý 0,5đ · cả 4 ý 1đ
  - ✍️ Tự luận (2 câu/bài) — có ô nháp rồi bấm xem gợi ý đáp án
- Dữ liệu: `data/questions/bai-XX.ts` (trắc nghiệm) và `data/extra/bai-XX.ts`
  (đúng/sai + tự luận); đăng ký ở `lib/questions.ts` và `lib/extras.ts`
- Sau khi chọn đáp án, trang **tự cuộn** tới phần giải thích (quan trọng khi
  dùng trên điện thoại) — xem `scrollIntoViewIfNeeded` trong `QuizClient.tsx`

**Đổi port:** lớp 10 dùng 3001. Lớp 12 phải đổi sang **3002** trong
`package.json` (cả `dev` và `start`) để chạy song song được hai dự án.

---

## 3. Khác biệt lớn nhất so với lớp 10 — PHẢI HỎI GIÁO VIÊN TRƯỚC

Chương trình GDPT 2018 quy định lớp 11 và 12 chia thành **hai định hướng**,
học sinh chọn một:
- **Khoa học máy tính (CS)**
- **Tin học ứng dụng (ICT)**

Lớp 10 không có chuyện này (chương trình chung cho tất cả), nên web lớp 10
không cần xử lý. Web lớp 12 thì có, và điều này ảnh hưởng tới thiết kế:

- Trang chủ có cần cho học sinh **chọn định hướng** trước không?
- Hay hiển thị cả hai nhánh, mỗi nhánh một nhóm chủ đề riêng?
- Trường THPT Na Rì dạy định hướng nào, hay dạy cả hai?

**Hỏi giáo viên câu này trước khi dựng `data/curriculum.ts`.** Đừng tự đoán.

Ngoài ra cần xác nhận: lớp 12 dùng **bộ sách nào** (lớp 10 dùng Kết nối tri
thức) và danh sách bài chính xác theo sách giáo khoa đang dạy.

---

## 4. Quy tắc ra đề — đọc kỹ, đây là bài học đắt giá

Bộ 388 câu của lớp 10 lúc đầu mắc lỗi nghiêm trọng: **46% số câu có đáp án
đúng dài hơn hẳn phương án nhiễu** (trung bình 36 so với 17 kí tự), học sinh
đoán mò bằng mẹo "chọn đáp án dài nhất" là trúng. Phải rà lại và viết lại
toàn bộ 34 bài mới khắc phục xong.

**Đọc `E:\du-an\luyen-trac-nghiem-tin-10\CACH_RA_DE.md`** để lấy:
- Bốn nguyên tắc viết phương án nhiễu
- Script Python đo tỉ lệ "đáp án đúng dài hơn hẳn" (mục tiêu: 0 câu)
- Cảnh báo báo động giả với đáp án dạng mã lệnh

Tóm tắt nguyên tắc: nhiễu phải **hợp lí** (mô tả đúng một khái niệm gần kề,
hoặc một hiểu lầm có thật, hoặc đúng một nửa), **cân độ dài** (chênh dưới 10
kí tự), tránh phương án buồn cười và các từ tuyệt đối ("luôn luôn", "duy nhất").

**Chạy script đo NGAY SAU KHI soạn xong mỗi bài**, đừng để soạn hết 30+ bài
rồi mới đo — sửa lại rất tốn công.

Lời dẫn câu Đúng/Sai phải **từ 3 dòng trở lên, có ngữ cảnh sinh động**, lấy
bối cảnh gần gũi học sinh vùng cao (chợ phiên, hợp tác xã, mùa vụ, trải nghiệm
ở địa phương) như đã làm ở lớp 10.

---

## 5. Thương hiệu và triển khai

- Huy hiệu trang chủ, footer và thẻ tiêu đề đều ghi **Trường THPT Na Rì, tỉnh
  Thái Nguyên** (xem `components/HomeClient.tsx` và `app/layout.tsx` của lớp 10)
- GitHub: tài khoản `nongchuchuyen2021-svg`, tạo repo **private** (repo công
  khai sẽ lộ đáp án cho học sinh tìm thấy). Windows đã lưu sẵn thông tin đăng
  nhập nên `git push` không cần nhập mật khẩu.
- Vercel: tài khoản đã liên kết GitHub, gói Hobby. Import repo → Deploy, không
  cần cấu hình biến môi trường.

---

## 6. Bẫy kỹ thuật đã gặp — tránh lặp lại

- **KHÔNG chạy `npm run build` khi `npm run dev` đang chạy** — hai lệnh dùng
  chung thư mục `.next`, gây lỗi 500 `Cannot find module`. Nếu gặp: dừng server,
  xoá `.next`, chạy lại.
- `TaskStop` không diệt hết tiến trình node giữ port. Phải kill theo port:
  `Get-NetTCPConnection -LocalPort 3002 -State Listen` rồi `Stop-Process`.
- Trong Bash tool đừng dùng cú pháp here-string của PowerShell (`@'...'@`) —
  commit message sẽ dính kí tự `@` thừa. Dùng heredoc `<<'EOF'` thay thế.
- Khi soạn câu hỏi có phép tính hoặc đếm kí tự, **tự kiểm chứng lại** — lần
  làm lớp 10 đã có 3 chỗ đáp án mâu thuẫn với phần giải thích do đếm nhầm.

---

## 7. Câu hỏi còn bỏ ngỏ, nên hỏi giáo viên

1. Định hướng CS hay ICT (mục 3) — **bắt buộc hỏi trước**
2. Bộ sách giáo khoa lớp 12 đang dạy
3. Có muốn **giao diện đẹp hơn lớp 10** không, và đẹp theo hướng nào? Giáo viên
   có nhắc tới ý này nhưng chưa nói rõ. Gợi ý hỏi: màu sắc tươi hơn, hình nền
   theo chủ đề, hiệu ứng động khi trả lời đúng, hay huy hiệu/thành tích?
4. Có cần thêm chế độ "thi thử" bấm giờ theo cấu trúc đề tốt nghiệp không?
   (Lớp 12 là khối thi nên nhu cầu này thực tế hơn lớp 10 nhiều — tham khảo
   skill `on-thi-thpt-tin` về cấu trúc 24 câu D1 + 4 câu D2 theo QĐ 764.)
