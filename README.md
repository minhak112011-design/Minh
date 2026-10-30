# LOWKEY MINH — Website giới thiệu dịch vụ

Website tĩnh tiếng Việt dành cho thương hiệu cá nhân LOWKEY MINH. Mục tiêu là giúp khách hiểu các loại website Minh có thể thực hiện, xem concept minh họa, đọc quy trình và liên hệ qua Facebook.

## Chạy thử trên máy

Yêu cầu Python 3 hoặc Node.js đã có sẵn. Không cần cài package bên ngoài.

```bash
python -m http.server 4173
```

Mở `http://localhost:4173` trong trình duyệt. Có thể dừng server bằng `Ctrl + C`.

Hoặc dùng lệnh có sẵn trong `package.json`:

```bash
npm run preview
```

## Kiểm thử

```bash
npm test
```

Bài kiểm thử dùng Node.js built-in test runner; không cần `npm install`.

## Đưa website lên Netlify miễn phí

1. Giải nén ZIP.
2. Đăng nhập Netlify và chọn thêm site mới bằng cách deploy thủ công.
3. Kéo thả toàn bộ thư mục `lowkey-minh-website` (thư mục chứa `index.html`, `assets/`, `demos/` và `netlify.toml`) vào vùng deploy.
4. Đợi Netlify tạo địa chỉ `*.netlify.app`, sau đó mở thử cả trang chính và ba trang trong thư mục `demos/`.
5. Có thể đổi phần tên site trong cài đặt Netlify nếu tên còn trống.

Gói miễn phí có giới hạn sử dụng và điều khoản có thể thay đổi; hãy kiểm tra trang giá/usage của Netlify trước khi triển khai dự án có lưu lượng cao. Tên miền riêng không nằm trong gói miễn phí và thường phải mua riêng.

## Cấu trúc

```text
index.html
assets/
  css/site.css
  css/demos.css
  js/site.js
  js/inquiry.js
  js/inquiry-ui.js
  media/mark.svg
demos/
  personal.html
  business.html
  landing.html
tests/
docs/
netlify.toml
```

## Nội dung cần cập nhật trước khi quảng bá

- Kiểm tra tên hiển thị và đường dẫn Facebook ở `index.html` và `assets/js/inquiry-ui.js`.
- Thay nội dung concept bằng dự án thật khi có sản phẩm được phép công khai. Ba trang hiện tại được gắn nhãn concept, không phải dự án khách hàng.
- Cập nhật phần dịch vụ theo khả năng và phạm vi thực tế của Minh.
- Báo giá, thời gian và phạm vi chỉnh sửa cần thống nhất riêng cho từng yêu cầu; website không tự đưa ra cam kết cố định.

## Quyền riêng tư

Form liên hệ tạo tin nhắn ngay trên trình duyệt, thử sao chép vào clipboard rồi mở trang Facebook. Website không có backend, không lưu thông tin form, không gọi API và không dùng analytics.
