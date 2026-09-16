# do_dai.py — đếm số câu có đáp án đúng dài hơn hẳn phương án nhiễu.
# Mục tiêu: 0 câu ở mọi bài. Chạy ngay sau khi soạn xong mỗi bài.
#
# Quét CẢ HAI nơi có câu trắc nghiệm 4 phương án:
#   - data/questions/  : ngân hàng câu hỏi chính
#   - data/theory/     : câu "check" xen giữa bài lí thuyết
# (Trước 2026-08-06 chỉ quét data/questions/ nên phần lí thuyết chưa bao giờ
# được đo — thêm vào sau khi rà Bài 11 phát hiện 14/40 câu bị lệch.)
import glob, io, os, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
NGUONG = 10
obj = re.compile(r"options:\s*\[(.*?)\]\s*,\s*answer:\s*(\d)", re.S)


def cac_chuoi(body):
    """Tách các chuỗi TS trong options: [...].

    Phải tự quét chứ không dùng regex một dòng, vì phương án có thể viết bằng
    nháy đơn và bên trong lại chứa nháy kép, ví dụ:  'href="index.html"'
    """
    out, i, n = [], 0, len(body)
    while i < n:
        ch = body[i]
        if ch in "\"'":
            quote, i, buf = ch, i + 1, []
            while i < n:
                if body[i] == "\\":          # bỏ dấu \ , giữ kí tự thật
                    buf.append(body[i + 1])
                    i += 2
                    continue
                if body[i] == quote:
                    i += 1
                    break
                buf.append(body[i])
                i += 1
            out.append("".join(buf))
        else:
            i += 1
    return out


def quet(mau, ten_nhom):
    tong = hon = 0
    theo_bai = {}
    tong_dung = tong_nhieu = 0
    for f in sorted(glob.glob(mau)):
        s = open(f, encoding="utf-8").read()
        n = h = 0
        for m in obj.finditer(s):
            o = cac_chuoi(m.group(1))
            if len(o) != 4:
                continue
            i = int(m.group(2))
            L = [len(x) for x in o]
            nhieu = [l for j, l in enumerate(L) if j != i]
            tong += 1
            n += 1
            tong_dung += L[i]
            tong_nhieu += sum(nhieu) / 3
            if L[i] - max(nhieu) >= NGUONG:
                hon += 1
                h += 1
                print(f"  ⚠ {os.path.basename(f)[:-3]} câu {n}: đúng {L[i]} kí tự, nhiễu dài nhất {max(nhieu)}")
        if n:
            theo_bai[os.path.basename(f)[:-3]] = (h, n)
    print(f"\n── {ten_nhom} ──")
    if not tong:
        print("  (chưa có câu nào)")
        return 0, 0
    print(f"{hon}/{tong} câu có đáp án đúng dài hơn hẳn ({hon * 100 // tong}%)")
    print(f"Độ dài trung bình: đáp án đúng {tong_dung / tong:.0f} kí tự, nhiễu {tong_nhieu / tong:.0f} kí tự")
    for t, (h, n) in sorted(theo_bai.items()):
        print(f"  {t}: {h}/{n} lỗi")
    return hon, tong


h1, t1 = quet("data/questions/bai-*.ts", "Ngân hàng câu hỏi (data/questions)")
h2, t2 = quet("data/theory/bai-*.ts", "Câu kiểm tra nhanh trong lí thuyết (data/theory)")
h3, t3 = quet("data/thithu-csdl.ts", "Ngân hàng CSDL cho Thi thử (data/thithu-csdl.ts)")

tong_hon, tong_tat_ca = h1 + h2 + h3, t1 + t2 + t3
print(f"\n═══ TỔNG CỘNG: {tong_hon}/{tong_tat_ca} câu cần sửa ═══")
sys.exit(1 if tong_hon else 0)
