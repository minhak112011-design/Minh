import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const FACEBOOK = 'https://www.facebook.com/profile.php?id=61594074891915&locale=vi_VN';

test('main page contains all visitor journeys and contact navigation', async () => {
  const html = await read('../index.html');
  for (const id of ['home', 'services', 'work', 'process', 'about', 'faq', 'contact']) {
    assert.match(html, new RegExp(`id=["']${id}["']`), `missing section ${id}`);
    assert.match(html, new RegExp(`href=["']#${id}["']`), `missing navigation to ${id}`);
  }
});

test('Facebook link uses the exact owner-supplied profile and opens safely', async () => {
  const html = await read('../index.html');
  assert.ok(html.includes(FACEBOOK.replace('&', '&amp;')));
  assert.match(html, /target=["']_blank["']/);
  assert.match(html, /rel=["'][^"']*noopener[^"']*["']/);
});

test('content does not fabricate social proof or mention excluded topics', async () => {
  const html = await read('../index.html');
  assert.match(html, /Concept tự thực hiện/);
  assert.doesNotMatch(html, /Discord|Minecraft|\b\d+ khách hàng\b|\b\d+ dự án đã hoàn thành\b|testimonial giả/i);
  assert.match(html, /không phải dự án khách hàng/i);
});

test('page has responsive metadata, semantic landmarks, and accessible inquiry fields', async () => {
  const html = await read('../index.html');
  assert.match(html, /name=["']viewport["']/);
  assert.match(html, /<main\b/);
  assert.match(html, /<nav\b/);
  assert.match(html, /aria-expanded/);
  assert.match(html, /aria-live/);
  assert.match(html, /<label\b/);
  const css = await read('../assets/css/site.css');
  assert.match(css, /prefers-reduced-motion/i);
});

test('all linked concept demos exist and are labelled honestly', async () => {
  const pages = ['../demos/personal.html', '../demos/business.html', '../demos/landing.html'];
  for (const path of pages) {
    const html = await read(path);
    assert.match(html, /Concept tự thực hiện/i, `${path} lacks concept label`);
  }
});
