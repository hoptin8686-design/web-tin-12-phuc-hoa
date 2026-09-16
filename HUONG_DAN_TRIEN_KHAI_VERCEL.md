# Hướng dẫn triển khai Web Ôn luyện Tin học 12 — THPT Phục Hòa

Trang web này được xây dựng bằng **Next.js 14** và **Tailwind CSS**. Học sinh có thể ôn lý thuyết, làm trắc nghiệm, đúng/sai, tự luận, thi thử và lưu tiến độ trực tiếp trên trình duyệt (không cần database hay đăng nhập).

---

## 1. Chạy thử trên máy tính cá nhân (Local)

### Yêu cầu:
- Đã cài đặt **Node.js** (khuyến nghị bản 18 hoặc 20 LTS trở lên): tải tại [nodejs.org](https://nodejs.org).

### Các bước thực hiện:
1. Mở thư mục này trong terminal hoặc VS Code.
2. Cài đặt các thư viện phụ thuộc:
   ```bash
   npm install
   ```
3. Chạy máy chủ phát triển:
   ```bash
   npm run dev
   ```
4. Mở trình duyệt web và truy cập địa chỉ:
   ```
   http://localhost:3002
   ```

---

## 2. Đẩy mã nguồn lên GitHub

1. Đăng nhập vào [GitHub](https://github.com) và tạo một **New Repository** (ví dụ đặt tên: `web-tin-12-phuc-hoa`), để chế độ Public hoặc Private tùy ý.
2. Mở terminal tại thư mục này và chạy lần lượt các lệnh:
   ```bash
   git init
   git add .
   git commit -m "Khởi tạo web ôn luyện Tin học 12 THPT Phục Hòa"
   git branch -M main
   git remote add origin https://github.com/<TEN-TAI-KHOAN-GITHUB>/web-tin-12-phuc-hoa.git
   git push -u origin main
   ```
   *(Thay `<TEN-TAI-KHOAN-GITHUB>` bằng tên tài khoản GitHub của trường hoặc thầy/cô)*.

---

## 3. Triển khai lên Vercel (Miễn phí, 100% tự động)

1. Truy cập [vercel.com](https://vercel.com) và chọn **Sign Up / Log In** bằng chính tài khoản **GitHub**.
2. Trên màn hình Dashboard của Vercel, bấm nút **Add New...** → chọn **Project**.
3. Tìm đến kho lưu trữ `web-tin-12-phuc-hoa` vừa đẩy lên và bấm **Import**.
4. Các thông số cấu hình:
   - **Framework Preset**: Next.js (Vercel tự nhận diện)
   - **Root Directory**: `./` (để mặc định)
   - Không cần sửa cấu hình Build hay Environment Variables nếu dùng chế độ tự học căn bản.
5. Bấm nút **Deploy**.
6. Chờ khoảng 1 - 2 phút, Vercel sẽ cấp một đường link tên miền miễn phí (dạng `https://web-tin-12-phuc-hoa.vercel.app`) để gửi cho học sinh toàn trường sử dụng!

---

## 4. Cấu hình tính năng nộp bài vào Google Sheets (Tùy chọn)

Nếu nhà trường muốn thu thập kết quả làm bài của học sinh về Google Trang tính:
- Xem hướng dẫn chi tiết từng bước tại tệp `HUONG_DAN_NOP_BAI.md`.
- Cấu hình 3 biến môi trường trên Vercel:
  - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
  - `GOOGLE_PRIVATE_KEY`
  - `GOOGLE_SHEET_ID`
