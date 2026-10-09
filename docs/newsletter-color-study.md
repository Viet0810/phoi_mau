# Bài tập phối màu newsletter

## Cấu trúc

- `newsletter_version1.html` — phiên bản **Coastal**, cảm giác bình tĩnh, tươi mới và hợp tác.
- `newsletter_version2.html` — phiên bản **Sunset**, cảm giác sáng tạo, ấm áp và giàu năng lượng.
- `css/newsletter.css` — bố cục responsive Bootstrap 5.3.3 và hai bộ CSS custom properties.

Hai bản tin dùng chung nội dung và cấu trúc để so sánh tác động của màu sắc. Nhãn hiệu Board Brief và nội dung minh họa được viết riêng cho bài thực hành, không phải bản sao email hay giao diện chính thức của Trello.

## Bảng màu

Các màu được chọn theo hướng tương đồng/analogous và cân bằng màu nhấn, phù hợp để nhập và tinh chỉnh bằng các quy tắc trong Adobe Color. Tỷ lệ hiển thị được phân cấp: nền sáng chiếm diện tích lớn, màu chính dẫn hướng CTA và màu nhấn chỉ dùng cho chi tiết cần chú ý.

| Vai trò | Coastal | Sunset |
|---|---|---|
| Màu chữ/đậm | `#17324D` | `#392A48` |
| Màu chính | `#0F766E` | `#7653A6` |
| Màu chính đậm | `#115E59` | `#5B3E88` |
| Màu nền phụ | `#D9F0E9` | `#EFE6F6` |
| Màu nhấn | `#F4A261` | `#EF9F68` |
| Nền trang | `#F4F8F7` | `#FBF7FC` |

## Phân tích trải nghiệm

- Cùng một nội dung, thứ tự đọc, CTA và bố cục để việc so sánh màu sắc trực tiếp, không bị nhiễu bởi thay đổi cấu trúc.
- Coastal dùng xanh teal cùng xanh bạc hà và cam ấm: hướng đến cảm giác tin cậy, bình tĩnh, dễ tập trung.
- Sunset dùng tím mận, lavender và cam đào: hướng đến cảm giác sáng tạo, gần gũi và giàu năng lượng hơn.
- Chữ trên CTA tối/ trắng tùy nền đậm; màu phụ pastel được dành cho nền và minh họa. Liên kết có gạch chân khi tương tác, CTA có trạng thái hover/focus.
- Bootstrap cung cấp hệ lưới cho các thẻ bài viết; CSS custom properties điều khiển màu, còn media query xếp nội dung một cột trên màn hình nhỏ.
- Các hình minh họa được dựng bằng CSS và hình khối, do đó không phụ thuộc ảnh mẫu hay logo Trello.

## Wireframe

```text
+------------------------------------------------------+
| BOARD BRIEF · BẢN TIN                       ĐỔI MÀU |
| logo                                      số/tháng  |
+------------------------------------------------------+
| Tiêu đề newsletter                  Minh họa bảng   |
| Mô tả ngắn                                           |
| [Khám phá số này]                                    |
+------------------------------------------------------+
| Lời chào + phần giới thiệu                           |
+------------------------------------------------------+
| [Bài nổi bật + minh họa lớn]                         |
| [Bài ngắn + hình]            [Bài ngắn + hình]       |
+------------------------------------------------------+
| CTA cuối bản tin                                     |
+------------------------------------------------------+
| Logo · ghi chú bản tin · liên kết · bản quyền        |
+------------------------------------------------------+
```

Mở từng HTML trong trình duyệt để xem/chụp ảnh. Có thể mở hai tab cạnh nhau để so sánh Coastal và Sunset.
