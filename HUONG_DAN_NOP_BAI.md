# Hướng dẫn bật chức năng "Nộp bài cho thầy"

Web đã có sẵn nút **Nộp cho thầy 📨** ở cuối phần Trắc nghiệm và Đúng/Sai.
Nhưng nút đó chỉ chạy được sau khi thầy làm xong **6 bước dưới đây** — vì phải
có một bảng tính để ghi vào và một khoá để web được phép ghi.

Làm một lần duy nhất, khoảng 10–15 phút. **Khoá bí mật thầy tự tạo và tự dán
vào Vercel, không đưa cho ai, kể cả gửi qua tin nhắn.**

---

## Bước 1. Tạo bảng tính

1. Vào https://sheets.google.com, tạo một bảng tính mới.
2. Đặt tên, ví dụ **"Kết quả luyện tập Tin 12"**.
3. Gõ vào **dòng 1** đúng 9 tiêu đề cột sau (mỗi ô một tiêu đề):

   | A | B | C | D | E | F | G | H | I |
   |---|---|---|---|---|---|---|---|---|
   | Thời gian | Họ tên | Lớp | Mã bài | Tên bài | Dạng | Điểm % | Số câu (ý) đúng | Tổng số câu (ý) |

4. Nhìn lên thanh địa chỉ, lấy đoạn ID giữa `/d/` và `/edit`:

   ```
   https://docs.google.com/spreadsheets/d/1AbC...XyZ/edit
                                          ^^^^^^^^^^ đây là SHEET ID
   ```

   Ghi lại đoạn đó, lát nữa dùng.

---

## Bước 2. Tạo dự án trên Google Cloud

1. Vào https://console.cloud.google.com
2. Bấm ô chọn dự án ở trên cùng → **New project** → đặt tên, ví dụ
   `on-luyen-tin-12` → **Create**.
3. Đợi vài giây cho dự án được tạo xong rồi chọn đúng dự án đó.

---

## Bước 3. Bật Google Sheets API

1. Trong dự án vừa tạo, vào menu **APIs & Services → Library**.
2. Gõ tìm **Google Sheets API** → bấm vào kết quả → bấm **Enable**.

---

## Bước 4. Tạo tài khoản dịch vụ và khoá

1. Vào **APIs & Services → Credentials**.
2. Bấm **Create credentials → Service account**.
3. Đặt tên, ví dụ `ghi-ket-qua` → **Create and continue** → **Done**
   (không cần cấp vai trò gì ở bước giữa).
4. Bấm vào tài khoản dịch vụ vừa tạo → thẻ **Keys** → **Add key → Create new
   key** → chọn **JSON** → **Create**.
5. Máy sẽ tải về một tệp `.json`. **Đây là khoá bí mật** — giữ như giữ mật
   khẩu, không đưa lên GitHub, không gửi cho ai.
6. Mở tệp đó bằng Notepad, tìm hai dòng:
   - `"client_email": "ghi-ket-qua@....iam.gserviceaccount.com"`
   - `"private_key": "-----BEGIN PRIVATE KEY-----\n....\n-----END PRIVATE KEY-----\n"`

---

## Bước 5. Cho tài khoản dịch vụ quyền ghi vào bảng tính

Quay lại bảng tính ở Bước 1:

1. Bấm nút **Chia sẻ** (góc trên bên phải).
2. Dán **địa chỉ `client_email`** ở Bước 4 vào ô mời.
3. Chọn quyền **Người chỉnh sửa (Editor)** → **Gửi**.

Bỏ qua bước này thì web sẽ báo *"Chưa gửi được lên bảng tính"* — vì tài khoản
dịch vụ không có quyền ghi.

---

## Bước 6. Dán vào Vercel

1. Vào https://vercel.com → chọn dự án **luyen-trac-nghiem-tin-12**.
2. **Settings → Environment Variables**.
3. Thêm **3 biến** sau (chọn cả ba môi trường Production, Preview, Development):

   | Tên biến | Giá trị dán vào |
   |---|---|
   | `GOOGLE_SERVICE_ACCOUNT_EMAIL` | đúng chuỗi `client_email` ở Bước 4 |
   | `GOOGLE_PRIVATE_KEY` | đúng chuỗi `private_key` ở Bước 4, **giữ nguyên cả `-----BEGIN...` và các `\n`** |
   | `GOOGLE_SHEET_ID` | đoạn ID lấy ở Bước 1 |

4. Vào thẻ **Deployments** → bản mới nhất → **Redeploy**.
   Biến môi trường chỉ có tác dụng sau khi triển khai lại.

---

## Kiểm tra

Vào https://luyen-trac-nghiem-tin-12.vercel.app, làm thử một phần Trắc nghiệm,
gõ họ tên và lớp rồi bấm **Nộp cho thầy**.

- Hiện **"Đã nộp cho thầy cô rồi!"** → mở bảng tính sẽ thấy một dòng mới.
- Hiện **"Máy chủ chưa được cấu hình"** → thiếu hoặc sai một trong 3 biến ở
  Bước 6, hoặc chưa Redeploy.
- Hiện **"Chưa gửi được lên bảng tính"** → thường là quên Bước 5 (chưa chia sẻ
  bảng tính cho tài khoản dịch vụ). Xem log chi tiết ở Vercel →
  **Deployments → bản mới nhất → Functions → /api/nop-bai**.

---

## Những điều nên biết

**Địa chỉ API là công khai.** Ai biết đường dẫn cũng có thể thử gửi dữ liệu.
Web đã có bốn lớp chặn: chỉ nhận yêu cầu từ tên miền của web, kiểm tra chặt
mọi trường dữ liệu, giới hạn 20 lượt nộp trong 10 phút cho mỗi máy, và chặn
kiểu chèn công thức vào ô họ tên. Đây là mức đủ cho một web luyện tập của
trường, **không phải mức bảo mật của hệ thống quản lí điểm chính thức** — thầy
đừng dùng bảng này làm sổ điểm gốc.

**Học sinh tự gõ tên nên có thể gõ tên bạn khác.** Nếu sau này thầy cần chắc
chắn hơn, hai hướng nâng cấp: phát mã riêng cho từng em, hoặc cho đăng nhập
bằng tài khoản Google.

**Chỉ những lượt học sinh bấm nộp mới được ghi.** Các em luyện nháp bao nhiêu
lần cũng không vào bảng tính.

**Dữ liệu thu tối thiểu:** thời gian, họ tên, lớp, bài, dạng, điểm. Không thu
thập gì thêm.

**Muốn thêm tên miền riêng về sau:** thêm biến `MIEN_CHO_PHEP_THEM` trong
Vercel, giá trị là tên miền (nhiều tên miền thì ngăn nhau bởi dấu phẩy),
ví dụ `tinhoc.thptnari.edu.vn`.
