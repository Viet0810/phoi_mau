# Thiết kế UI/UX trang đăng ký

## Mục tiêu và tham khảo

Luồng đăng ký dùng các mẫu tương tác quen thuộc trên những biểu mẫu tài khoản phổ biến: một tác vụ chính trên mỗi màn hình, nhãn luôn hiển thị cạnh trường nhập, nút tiếp tục nổi bật, trợ giúp đặt gần trường liên quan, và xác nhận rõ ràng sau khi hoàn tất. Đây là các quy ước giao diện tổng quát, không phải bản sao giao diện hay nhận diện thương hiệu của Google, Facebook hoặc X.

## Wireframe

### Trang 1 — tạo tài khoản

```text
+------------------------------------------------------+
| [Logo CodeGym]                      Đã có tài khoản? |
|                                                      |
|          BẮT ĐẦU HÀNH TRÌNH                          |
|          Tạo tài khoản của bạn                       |
|          Điền thông tin để bắt đầu học tập.           |
|                                                      |
|          Họ và tên *                                 |
|          [ Ví dụ: Nguyễn Minh Anh                  ] |
|                                                      |
|          Email *                                     |
|          [ ban@example.com                         ] |
|          Dùng email bạn thường truy cập...           |
|                                                      |
|          Mật khẩu *                                  |
|          [ Tạo mật khẩu                       Hiện ] |
|          Ít nhất 8 ký tự...                          |
|                                                      |
|          Xác nhận mật khẩu *                         |
|          [ Nhập lại mật khẩu                 Hiện ] |
|                                                      |
|          [             Tạo tài khoản              ] |
|          Điều khoản sử dụng · Chính sách bảo mật     |
|                         ← Quay lại trang chủ         |
+------------------------------------------------------+
```

### Trang 2 — đăng ký thành công

```text
+------------------------------------------------------+
| [Logo CodeGym]                                       |
|                                                      |
|                    ( ✓ )                             |
|          HOÀN TẤT                                    |
|          Tạo tài khoản thành công!                   |
|          Tài khoản đã sẵn sàng.                      |
|                                                      |
|          [           Khám phá trang chủ           ] |
|                     Tạo tài khoản khác              |
+------------------------------------------------------+
```

## Luồng người dùng

1. Chọn **Tạo tài khoản mới** từ chân trang.
2. Điền họ tên, email, mật khẩu và xác nhận mật khẩu.
3. Nếu có trường thiếu, email sai định dạng, mật khẩu quá ngắn hoặc xác nhận không khớp, trang hiện hướng dẫn ngay dưới trường và đưa con trỏ tới lỗi đầu tiên.
4. Khi dữ liệu hợp lệ, chuyển tới `success.html`; người dùng có thể về trang chủ hoặc tạo tài khoản khác.

## Ghi chú UI/UX

- **Dễ hiểu:** nhãn trường luôn hiển thị, dấu `*` đánh dấu bắt buộc; ví dụ email và hướng dẫn độ dài mật khẩu đặt sát ô nhập.
- **Phòng tránh lỗi:** email dùng kiểm tra định dạng, mật khẩu tối thiểu 8 ký tự, xác nhận so khớp tức thời khi sửa; lỗi cụ thể xuất hiện cạnh trường.
- **Quyền kiểm soát:** nút Hiện/Ẩn cho từng mật khẩu; liên kết quay lại trang chủ và luồng tạo tài khoản mới.
- **Fitts' Law:** nút chính rộng hết card, cao tối thiểu 52px; các nút hiện mật khẩu có vùng bấm tối thiểu 64×40px.
- **Khả năng tiếp cận:** thứ tự tab tự nhiên, nhãn liên kết bằng `for`, trạng thái lỗi qua `aria-invalid`, thông báo lỗi được đọc bằng `aria-live`, focus có viền rõ và màu không phải dấu hiệu duy nhất.
- **Responsive:** card giới hạn độ rộng trên màn lớn, co giãn theo viewport và giảm padding trên điện thoại; không cần cuộn ngang để điền form.
- **Nhất quán thương hiệu:** sử dụng bảng màu xanh CodeGym và biến thể xanh lá hiện có; bề mặt sáng, chữ tối để giữ tương phản.
- **Riêng tư và phạm vi demo:** form chỉ minh họa giao diện phía trình duyệt, không gửi dữ liệu đến máy chủ và không lưu mật khẩu.

## Cách chạy và chụp ảnh

Mở `signup.html` để chụp trang form; sau khi nhập dữ liệu hợp lệ sẽ chuyển đến `success.html` để chụp trang xác nhận. Thêm `?theme=forest` vào URL để xem cùng giao diện với bảng màu xanh lá.
