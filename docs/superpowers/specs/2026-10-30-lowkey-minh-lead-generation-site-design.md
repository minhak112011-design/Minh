# LOWKEY MINH — Lead-generation website design

## Intent
Create a Vietnamese-first personal service website that turns visitors into qualified conversations for small website-development projects. The brand is early-stage, so trust comes from clear scope, honest concept demos, a transparent process, and direct contact—not fabricated client proof.

## Audience and primary job
People who need a personal website, small-business introduction site, landing page, or gift/occasion website. The primary action is to understand the service and contact Nhật Minh on the supplied Facebook profile.

## Goals
- Explain who Minh is and what kinds of websites he can build.
- Help visitors identify the right service and see three clearly labelled self-initiated concept demos.
- Explain scope, workflow, cost factors, and limitations before contact.
- Give visitors an accessible brief composer that copies a message and opens Facebook.
- Work on low-powered devices and mobile widths from 360px upward.

## Non-goals
- No fake testimonials, clients, awards, sales metrics, years of experience, fixed pricing, or delivery guarantees.
- No Discord or Minecraft references.
- No backend, analytics, tracking, external API, authentication, or database.
- No heavy WebGL scene, autoplay video, stock portrait, or paid asset dependency.

## Brand and visual direction
- Direction: quiet editorial workshop, not an agency template.
- Palette tokens: ink `#0D0D0C`, panel `#171715`, raised `#20201D`, paper `#F1EEE7`, muted `#AAA69E`, line `#383630`, single accent `#B9664E`.
- Typography: Be Vietnam Pro with system fallback for Vietnamese body text; Georgia/system serif for selected display phrases. Avoid loading multiple font families or weights.
- Signature: a typographic LM monogram inside a perspective frame, built with CSS transforms and layered extrusion; no stock orb or arbitrary gradient.
- Layout: editorial asymmetry in the hero, alternating service and demo compositions, a compact process timeline, then a focused contact panel.
- Motion: one restrained intro reveal and pointer-responsive CSS 3D tilt on capable desktop pointers. Disable on `prefers-reduced-motion`, touch/small screens, or when JavaScript is unavailable.

## Information architecture
1. Home: direct offer, audience, and contact/view-services CTAs.
2. Services: personal, business, landing page, gift, and custom creative websites.
3. Concept demos: personal, business, and product landing concept pages, explicitly marked as self-initiated examples.
4. Process: brief, scope/quote, build/preview, review/handover.
5. About: honest background and current stage.
6. FAQ: pricing, content readiness, domain/hosting, scope and post-handover support.
7. Contact: short project brief composer, Facebook link, footer.

## Contact behaviour
The brief composer accepts service, goal, and optional notes/budget. It formats a message locally, copies it when clipboard access is available, opens the exact supplied Facebook profile, and displays accessible instructions. No data is sent or stored by the site.

## Technical choices
Plain HTML, CSS and vanilla JavaScript; no build step and no runtime packages. CSS 3D rather than Three.js because it better fits the low-cost performance target and the mark is typographic, not an explorable 3D scene. Use native links/buttons, semantic sections, visible focus, reduced motion, lazy/deferred non-critical resources, responsive images only if real ones are later supplied.

## Content truth rules
- Use Nguyễn Hữu Nhật Minh / Mr_lowkey / LOWKEY MINH as supplied.
- Do not publish private information beyond the supplied name/brand and Facebook link.
- Concept demos must be labelled "Concept tự thực hiện", not client work.
- Price and delivery time are confirmed only after requirements are discussed.
- Don't promise SEO ranking, unlimited revisions, hosting forever, or unsupported integrations.
