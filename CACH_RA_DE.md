# Cách viết phương án nhiễu (bắt buộc đọc trước khi sửa câu hỏi)

## Lỗi đang khắc phục

Đợt soạn đầu tiên mắc lỗi ra đề nghiêm trọng: **đáp án đúng dài hơn hẳn các
phương án nhiễu**, nên học sinh đoán mò bằng mẹo "chọn đáp án dài nhất" là
trúng mà không cần hiểu bài.

Số liệu ban đầu (388 câu): 180 câu (46%) có đáp án đúng dài hơn phương án dài
nhì từ 10 kí tự trở lên. Độ dài trung bình: đáp án đúng 36 kí tự, nhiễu 17 kí tự.

Nguyên nhân gốc **không chỉ là độ dài**: đáp án đúng được viết thành câu giải
thích đầy đủ, còn phương án nhiễu thì cụt lủn và ngô nghê — kiểu "Bán máy tính",
"Chăn nuôi", "Có giọng hát hay" — nên bị loại trừ ngay từ cái nhìn đầu tiên.

## Nguyên tắc viết phương án nhiễu

1. **Phải hợp lí** — mỗi phương án nhiễu nên là một trong ba loại:
   - Mô tả **đúng một khái niệm gần kề** (ví dụ: hỏi vai trò lập trình viên thì
     nhiễu là mô tả đúng việc của kĩ sư kiểm thử, chuyên viên phân tích, quản
     trị dự án — học sinh phải phân biệt được mới chọn đúng);
   - Một **hiểu lầm có thật** của học sinh (ví dụ: "nghề lập trình cần gõ phím
     thật nhanh và thuộc lòng cú pháp");
   - Một phát biểu **đúng một nửa** rồi sai ở chi tiết then chốt.
2. **Cân độ dài** — chênh lệch giữa phương án dài nhất và ngắn nhất nên dưới
   10 kí tự. Đừng cắt ngắn đáp án đúng (mất chính xác chuyên môn) mà hãy viết
   phương án nhiễu đầy đặn hơn.
3. **Tránh tuyệt đối**: các phương án buồn cười, lạc đề, hoặc chứa từ khẳng
   định tuyệt đối ("luôn luôn", "không bao giờ", "duy nhất") vì học sinh biết
   mẹo loại trừ chúng.
4. **Tận dụng phần giải thích** — nêu rõ vì sao từng phương án nhiễu sai, đó
   mới là chỗ học sinh học được nhiều nhất.

## Vị trí đáp án đúng

Luôn đặt đáp án đúng ở **vị trí 0** (`answer: 0`) cho dễ soát. Không cần lo học
sinh nhớ vị trí vì web **tự trộn thứ tự 4 phương án mỗi lượt làm bài**
(xem hàm `prepare` trong `components/QuizClient.tsx`).

## Cách đo lại sau khi sửa

Chạy script kiểm tra (đặt trong thư mục dự án khi cần):

```python
# do_dai.py — đếm số câu có đáp án đúng dài hơn hẳn
import glob, io, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
NGUONG = 10
obj = re.compile(r'options:\s*\[(.*?)\]\s*,\s*answer:\s*(\d)', re.S)
st = re.compile(r'"((?:[^"\\]|\\.)*)"')
tong = hon = 0
theo_bai = {}
for f in sorted(glob.glob('data/questions/bai-*.ts')):
    s = open(f, encoding='utf-8').read(); n = h = 0
    for m in obj.finditer(s):
        o = st.findall(m.group(1))
        if len(o) != 4: continue
        i = int(m.group(2)); L = [len(x) for x in o]
        nhieu = [l for j, l in enumerate(L) if j != i]
        tong += 1; n += 1
        if L[i] - max(nhieu) >= NGUONG: hon += 1; h += 1
    theo_bai[os.path.basename(f)[:-3]] = (h, n)
print(f"{hon}/{tong} câu có đáp án đúng dài hơn hẳn ({hon*100//tong}%)")
for t, (h, n) in sorted(theo_bai.items(), key=lambda x: -x[1][0]):
    if h: print(f"  {t}: {h}/{n}")
```

Mục tiêu: **0 câu** ở mọi bài.

## Tiến độ sửa

- [x] bài 09 — xong (trước: 12/12 câu lỗi)
- [x] bài 14 — xong (trước: 9/10)
- [x] bài 34 — xong (trước: 10/10)
- [x] **ĐÃ SỬA XONG TOÀN BỘ 34/34 BÀI**

Kết quả cuối: từ **180/388 câu (46%)** mắc lỗi xuống còn **0 câu**.
Độ dài trung bình: đáp án đúng 38 kí tự, phương án nhiễu 36 kí tự — gần như
cân bằng (ban đầu là 36 so với 17).

Lưu ý khi chạy lại script đo: script đếm sai với các đáp án là **mã lệnh viết
trong nháy đơn** chứa dấu nháy kép bên trong, ví dụ `'["a", "b", "c"]'` trong
bài 25. Ba câu bài 25 bị script báo là "dài hơn hẳn" thực chất cân đối — đây
là báo động giả, không cần sửa.

Sửa xong bài nào thì đánh dấu vào đây, chạy `npx tsc --noEmit` kiểm tra rồi
commit đẩy lên (Vercel tự build lại).
