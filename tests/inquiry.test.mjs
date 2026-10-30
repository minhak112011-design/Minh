import test from 'node:test';
import assert from 'node:assert/strict';
import { buildInquiryMessage } from '../assets/js/inquiry.js';

test('builds a clear inquiry with the chosen service and project goal', () => {
  const message = buildInquiryMessage({
    service: 'Website cá nhân',
    goal: 'Giới thiệu bản thân và nhận dự án thiết kế',
    details: '',
    budget: 'Chưa xác định',
  });
  assert.match(message, /Website cá nhân/);
  assert.match(message, /Giới thiệu bản thân và nhận dự án thiết kế/);
  assert.match(message, /LOWKEY MINH/);
});

test('includes optional details and budget only when supplied', () => {
  const message = buildInquiryMessage({
    service: 'Landing page',
    goal: 'Giới thiệu sản phẩm mới',
    details: 'Mình đã có nội dung và hình ảnh.',
    budget: 'Dưới 1 triệu',
  });
  assert.match(message, /Mình đã có nội dung và hình ảnh/);
  assert.match(message, /Dưới 1 triệu/);
});

test('does not invent phone, email, price, or delivery time', () => {
  const message = buildInquiryMessage({ service: 'Website cửa hàng', goal: 'Giới thiệu cửa hàng' });
  assert.doesNotMatch(message, /\b\d{9,11}\b/);
  assert.doesNotMatch(message, /\b\S+@\S+\.\S+\b/);
  assert.doesNotMatch(message, /bàn giao trong \d+ ngày/i);
  assert.doesNotMatch(message, /giá cố định/i);
});
