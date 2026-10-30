import { buildInquiryMessage } from './inquiry.js';

const form = document.querySelector('#project-inquiry');
const status = document.querySelector('#inquiry-status');
const fallbackField = document.querySelector('#message-fallback');
const facebookUrl = 'https://www.facebook.com/profile.php?id=61594074891915&locale=vi_VN';

if (form && status && fallbackField) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const values = Object.fromEntries(new FormData(form).entries());
    const message = buildInquiryMessage(values);

    // Open the profile directly during the user gesture so popup blockers do not
    // reject it after the asynchronous clipboard request.
    window.open(facebookUrl, '_blank', 'noopener,noreferrer');

    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(message);
      status.textContent = 'Đã sao chép nội dung. Bạn chỉ cần dán vào cuộc trò chuyện Facebook vừa mở.';
      fallbackField.hidden = true;
      fallbackField.value = '';
    } catch {
      fallbackField.value = message;
      fallbackField.hidden = false;
      fallbackField.focus();
      fallbackField.select();
      status.textContent = 'Trình duyệt chưa cho phép sao chép tự động. Nội dung đã hiện bên dưới — hãy sao chép và dán vào Facebook.';
    }
  });
}
