# LOWKEY MINH Lead-generation Website Implementation Plan

> **For agentic workers:** Execute inline. Steps use checkbox syntax for tracking.

**Goal:** Build a fast, honest Vietnamese personal service website that helps prospective clients understand LOWKEY MINH's website services and start a Facebook conversation.

**Architecture:** A static, multi-page HTML site with vanilla CSS and JavaScript. The main landing page contains service information, concept demos, workflow, FAQs, and a local brief composer; three standalone concept pages provide concrete previews.

**Tech Stack:** HTML5, CSS, vanilla JavaScript, Node built-in test runner, Python HTTP server for local verification. No runtime dependencies.

**Spec:** `docs/superpowers/specs/2026-10-30-lowkey-minh-lead-generation-site-design.md`

## Global Constraints
- No fabricated client proof, ratings, metrics, projects represented as paid work, prices, or delivery promises.
- No Discord or Minecraft content.
- Contact link must exactly match the Facebook URL in the user brief.
- No paid assets, API, database, build system, or third-party runtime package.
- Mobile minimum width target is 360 CSS px; test 360, 390, 430, 768, 1024, 1440.
- CSS 3D must not block page scroll or content access and must have a static fallback.

## Review Focus
- Long Vietnamese text and narrow screens do not overflow.
- Mobile menu remains keyboard operable and closes on Escape/navigation.
- Clipboard denial still leaves a visible message to copy manually.
- Reduced-motion preference removes automatic and pointer-driven motion.
- Every demo is clearly identified as a concept, not a client project.

---

### Task 1: Project inquiry message utility

**Files:**
- Create: `assets/js/inquiry.js`
- Test: `tests/inquiry.test.mjs`

- [ ] Write tests for service/goal composition, optional details, empty fallback, and no contact-data fabrication.
- [ ] Run `node --test tests/inquiry.test.mjs` and observe expected failure because the utility is not implemented.
- [ ] Implement `buildInquiryMessage(formValues)` as a pure function.
- [ ] Re-run tests and verify all pass.

### Task 2: Main lead-generation page

**Files:**
- Create: `index.html`
- Create: `assets/css/site.css`
- Create: `assets/js/site.js`
- Create: `assets/js/inquiry-ui.js`
- Test: `tests/site-contract.test.mjs`

- [ ] Write site-contract tests for primary nav anchors, truthful concept labels, exact Facebook URL, absence of prohibited content, semantic contact fields, viewport and SEO metadata.
- [ ] Run tests and observe expected failure before creating the page.
- [ ] Implement the main page with all sections and accessible menu/contact composer.
- [ ] Re-run automated tests.

### Task 3: Standalone concept demonstrations

**Files:**
- Create: `demos/personal.html`
- Create: `demos/business.html`
- Create: `demos/landing.html`
- Create: `assets/css/demos.css`

- [ ] Extend contract tests to ensure all three links resolve and each page labels itself as a concept.
- [ ] Run tests and observe failure before creating the demo files.
- [ ] Build three lightweight, distinct sample pages with no invented clients or results.
- [ ] Re-run tests.

### Task 4: Documentation and deployment

**Files:**
- Create: `README.md`
- Create: `netlify.toml`
- Modify tests only if a regression test is needed.

- [ ] Document local preview and Netlify drag-and-drop deployment.
- [ ] Add secure static hosting headers and sensible cache defaults.
- [ ] Run complete test suite.
- [ ] Run a local browser smoke test at desktop and mobile widths; inspect screenshots and console output.
- [ ] Check keyboard navigation, menu, form clipboard/fallback path, Facebook links, and no horizontal overflow.
