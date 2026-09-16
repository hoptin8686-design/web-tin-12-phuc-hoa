"""Render một khoảng trang của SGK (bản scan) ra ảnh PNG để đọc.

    python tai-lieu/render_sgk.py <trang_pdf_dau> <trang_pdf_cuoi>

Nhớ quy đổi: trang PDF = trang sách - 1. Xem tai-lieu/BAN_DO_TRANG_SGK.md.
Ảnh ghi vào thư mục tạm của phiên làm việc, không nằm trong dự án.
"""
import os
import sys

import fitz

PDF = os.path.join(os.path.dirname(os.path.abspath(__file__)), "TIN12-SGK-ICT.pdf")
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "sgk-pages")


def main() -> None:
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
    dau, cuoi = int(sys.argv[1]), int(sys.argv[2])
    os.makedirs(OUT, exist_ok=True)
    doc = fitz.open(PDF)
    for i in range(dau - 1, min(cuoi, doc.page_count)):
        f = os.path.join(OUT, f"p{i + 1:03d}.png")
        doc[i].get_pixmap(dpi=110).save(f)
        print(f"{f}  (sách trang {i + 2})")


if __name__ == "__main__":
    main()
