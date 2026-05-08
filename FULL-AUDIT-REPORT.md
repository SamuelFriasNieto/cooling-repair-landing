# Full SEO Audit — cooling-repair.com

**URL audited:** https://www.cooling-repair.com/
**Audit date:** 2026-05-08
**Stack:** Next.js 16.2.1 (App Router) + React 19 + Tailwind v4, hosted on Vercel
**Business type:** Local Service (HVAC / AC repair, Valencia, Spain)
**Site scope:** Single-page application (1 indexable URL, anchor-based navigation)

---

## Executive Summary

### Overall SEO Health Score: **42 / 100**

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 45 / 100 | 22% | 9.9 |
| Content Quality | 55 / 100 | 23% | 12.7 |
| On-Page SEO | 50 / 100 | 20% | 10.0 |
| Schema / Structured Data | 0 / 100 | 10% | 0.0 |
| Performance (CWV) | 60 / 100 | 10% | 6.0 |
| AI Search Readiness | 25 / 100 | 10% | 2.5 |
| Images | 35 / 100 | 5% | 1.75 |
| **Total** | | | **42.85 / 100** |

The site is well-designed and fast on TTFB, but it is missing nearly every off-content SEO foundation: no sitemap, no robots.txt, no schema, no Open Graph, no canonical, no language alternates. A single landing page targeting Valencia-area HVAC keywords cannot compete on its own — the architecture is the biggest blocker.

### Top 5 Critical Issues

1. **Public ZIP file exposed on Vercel** — `/Proyecto Cooling Repair (2).zip` returns HTTP 200 (14,827 bytes). Project source artifact in `/public` is being served publicly. **Risk: information disclosure.**
2. **No `robots.txt` and no `sitemap.xml`** — both return 404. Search engines have no indexing guidance and no canonical URL list.
3. **Zero structured data** — 0 JSON-LD blocks. No `LocalBusiness`, `Organization`, `FAQPage`, `Service`, or `BreadcrumbList`. This is the biggest single ranking miss for a local service business.
4. **No Open Graph / Twitter Card meta tags** — link previews on WhatsApp, Facebook, LinkedIn, X, etc. will fall back to title+URL with no image. Critical for a phone-driven local service that gets shared via messaging apps.
5. **NAP inconsistency** — homepage shows two different phone numbers (`+34 615 35 73 74` in header/hero/contact, `+34 605 09 73 74` in sticky nav and footer). Local SEO requires NAP citations to match exactly across every reference.

### Top 5 Quick Wins (under 1 day each)

1. Add a 5-line `robots.txt` and an `app/sitemap.ts` route — Next.js 16 supports both as conventions.
2. Inject a single `LocalBusiness` (or `HVACBusiness`) JSON-LD block in `layout.tsx` covering NAP, geo coordinates, opening hours, areaServed, services, sameAs.
3. Add Open Graph + Twitter meta to `layout.tsx` `Metadata` object (built-in Next.js field — no extra code).
4. Pick one canonical phone number, replace the other call sites (`Header.tsx:102,159`, `Footer.tsx:60`).
5. Delete `public/Proyecto Cooling Repair (2).zip` and remove the language toggle (`Header.tsx:33-41`) until EN content actually exists — currently it's a dead button that signals an incomplete site.

---

## 1. Technical SEO — 45/100

### Crawlability

| Item | Status | Notes |
|---|---|---|
| `robots.txt` | **MISSING (404)** | No crawl directives at all. Googlebot will crawl freely but no `Sitemap:` line. |
| `sitemap.xml` | **MISSING (404)** | Critical even for a 1-page site — accelerates indexation and lets you set `<lastmod>`. |
| Internal links | OK | Anchor-based (`#servicios`, `#ventajas`, `#como-trabajamos`, `#faq`, `#contacto`). No external nav targets. |
| Footer legal links | **BROKEN** | `Footer.tsx:88,91` — Privacy Policy and Terms both point to `href="#"`. |
| Crawl budget | N/A | Single page, irrelevant. |

### Indexability

| Item | Status | Notes |
|---|---|---|
| `<meta robots>` | Missing (default = index,follow) | Acceptable, but explicit `index,follow` is cleaner. |
| Canonical tag | **MISSING** | No `<link rel="canonical">`. Risk if Vercel ever serves a preview deployment URL or if the site adds a query string. |
| `noindex` | Not applied | Correct. |
| HTML rendering | OK | Server-rendered (Next.js prerender; `X-Nextjs-Prerender: 1`). Crawler-safe. |

### Security headers

| Header | Present | Recommendation |
|---|---|---|
| `Strict-Transport-Security` | YES (max-age=63072000) | OK. |
| `Content-Security-Policy` | NO | Add a baseline CSP. |
| `X-Content-Type-Options` | NO | Add `nosniff`. |
| `X-Frame-Options` / `frame-ancestors` | NO | Add `DENY` or `SAMEORIGIN`. |
| `Referrer-Policy` | NO | Add `strict-origin-when-cross-origin`. |
| `Permissions-Policy` | NO | Add a minimal policy disabling camera/mic/geo unless needed. |

### URL structure

| Item | Status | Notes |
|---|---|---|
| HTTPS enforced | YES | HSTS + HTTPS-only. |
| Non-www → www redirect | YES, but uses **307** | Should be **308** (or 301) — permanent redirect signals a canonical host. 307 is temporary. |
| Trailing slash policy | Consistent (no slash) | OK. |
| URL parameters | None | OK. |

### Mobile optimization

| Item | Status | Notes |
|---|---|---|
| Viewport meta | YES | `width=device-width, initial-scale=1`. |
| Mobile menu | YES | `Header.tsx:127-177` — responsive hamburger. |
| Tap targets | OK (visual review) | Phone CTA, buttons sized appropriately. |
| Font loading | OK | DM Sans + Outfit via `next/font/google` with `display: swap`. |

### Core Web Vitals (lab estimates — no field data available)

Performance was not measured against PageSpeed Insights or CrUX in this audit (no API credentials). Lab signals:

- **TTFB**: 158 ms (Vercel edge cache HIT) — excellent.
- **LCP risk**: hero uses `fondo.png` as a CSS `background-image` (`Hero.tsx:14-17`). The file is **626 KB PNG**, served unoptimized, no `<link rel="preload">`, not handled by `next/image`. This is the dominant LCP element on a mobile connection. **Likely LCP: 2.5–4.0 s on 4G.**
- **CLS risk**: Logo `Image` in `Header.tsx:43` uses `fill` inside a fixed-size container — generally safe. Mobile menu modal uses `fixed inset-x-4` overlay — should not shift.
- **INP risk**: Heavy use of `framer-motion` with `whileInView` animations — fine on desktop, but mobile interaction warrants Lighthouse audit.

**Recommendation**: run `npx unlighthouse --site https://www.cooling-repair.com` or PageSpeed Insights and treat hero image optimization as the #1 perf fix.

### Other technical issues

- **Vercel cache headers**: `Cache-Control: public, max-age=0, must-revalidate` on the HTML — meaning the browser revalidates every visit. That's the Next.js default and acceptable, but also worth knowing the page is `X-Vercel-Cache: HIT` at the edge so end-users get the cached response.
- **`Vary` header** includes Next.js router state values — fine.
- **No favicon issues** detected (`icon.svg` exists in `app/` and is served).

---

## 2. Content Quality — 55/100

### E-E-A-T assessment (Sept 2025 QRG criteria)

| Signal | Strength | Evidence |
|---|---|---|
| Experience | **Weak** | "Más de 20 años de experiencia" claimed but no specific case studies, before/after photos, or completed-job count beyond a generic `+500 clientes`. |
| Expertise | **Weak** | "Técnicos certificados" claimed (Stats.tsx:69) but no certification names (e.g., RITE, F-gases, manufacturer-trained), no team bios, no technician photos. |
| Authoritativeness | **Very weak** | No CIF / company registration on page, no verifiable Google Business Profile link, no industry association badges (AFEC, ACAIRE, etc.). |
| Trustworthiness | **Weak** | No customer reviews, no testimonials, no warranty terms detailed, no privacy policy or T&C (links are `#`). |

### Thin content

- **Single page, 8 service "items" rendered as accordion** (`Services.tsx:7-56`) — descriptions are 35–55 words each. By itself OK, but services are not on dedicated URLs, so each one cannot rank for its specific keyword (e.g., "carga gas refrigerante Valencia").
- **3 FAQ items** (`FAQ.tsx:7-23`) — too few. A local services site competing in Valencia should have 8–15 FAQs covering price ranges, service area, brands, emergency/24h availability, warranty length, F-gas regulations, etc.

### Readability

- Spanish copy is clear, professional, conversational. Average sentence length looks reasonable (12–18 words).
- Headings are well-structured: 1 H1, 5 H2s (per WebFetch analysis), service H3s. Good hierarchy.
- No jargon issues. CTAs are explicit ("Solicitar una reparación").

### Duplicate / canonical content

- No duplicate content within site (single page).
- However, there is **no `lang` switching** despite the visible "ES/EN" toggle. The toggle in `Header.tsx:33-41` is a static button with no functionality. If EN visitors click it, nothing happens. Either implement i18n or remove the toggle.

### Missing topical content (for local HVAC SEO)

- No "service area" map or list (`Valencia capital`, `Paterna`, `Torrent`, `Burjassot`, etc.). Just "Comunidad Valenciana".
- No pricing transparency (FAQ says "depends" — fine, but a price-range table beats a vague answer).
- No content on emergency / 24h service (a major HVAC search intent).
- No content on F-gas certification compliance (legally required in Spain — strong trust signal).
- No mention of warranty length (just "garantía").
- No blog / resources section (long-term SEO blocker).

---

## 3. On-Page SEO — 50/100

### Title tag

`Reparación de aire acondicionado en Valencia | Cooling Repair`

- **Length**: 65 chars — within 50–60 char ideal range, slightly long but acceptable.
- **Primary keyword first**: YES.
- **Brand at end**: YES.
- **Verdict**: Good.

### Meta description

`Servicio de reparación y mantenimiento de aire acondicionado en Valencia con técnicos especializados y más de 20 años de experiencia para empresas y particulares.`

- **Length**: 161 chars — within 150–160 ideal range.
- **Includes keyword**: YES.
- **Includes USP**: YES (20 años, técnicos especializados, B2B + B2C).
- **No CTA**: minor miss — could add "Solicita presupuesto sin compromiso" or "Llámanos hoy".
- **Verdict**: Good, minor improvement available.

### Headings

| Tag | Count | Notes |
|---|---|---|
| H1 | 1 | "Servicio de Reparación de Aire Acondicionado en Valencia" — keyword-aligned, good. |
| H2 | 5 | Sections clearly labelled. Spanish copy sometimes ambiguous (e.g., "Más de 20 Años Reparando Aires Acondicionados en Valencia" — H2 instead of supporting H3 risk). OK. |
| H3 | 11 | 8 service titles + 3 FAQ questions. Correct hierarchy. |

### Keyword targeting

- Single page chasing `reparación aire acondicionado Valencia`. With no individual service URLs, the page can rank for the head term only.
- Long-tail capture (e.g., `reparación aerotermia Valencia`, `carga gas refrigerante Valencia precio`, `mantenimiento aire acondicionado oficina`) is **impossible** with the current architecture.
- `keywords` meta tag present but Google has not used it since 2009 — leave or remove, no impact.

### Internal linking

- Every nav/footer link goes to an in-page anchor. There are zero outbound or cross-page internal links — by design (1 page).
- This is the **single biggest architectural limit**: this site can only rank for one query cluster.

### Image alt text

- `Header.tsx:44`: `alt="Logo"` — generic. Should be `alt="Cooling Repair S.L. — Reparación de aire acondicionado en Valencia"` or similar.
- `Header.tsx:85`: `alt=""` — empty alt for the sticky-nav logo. Acceptable as decorative *only if* the previous logo is present in the same DOM, but here the visible logo changes between hero and sticky — empty alt loses screen-reader continuity.
- `Footer.tsx:21`: `alt="Logo"` — same generic issue.
- **Hero background image** (`fondo.png`) is a CSS `background-image` so it has no `alt`. That's correct (decorative), but the image is 626 KB so it's also a perf issue (see Performance section).

### Other on-page

- `objectFit="contain"` prop on `<Image>` (`Header.tsx:44`) is a deprecated Next.js Image API — Next.js 16 uses CSS via `style={{objectFit}}` or `className`. Won't break but generates a deprecation warning and may stop working in a future major. (Reminder: per `AGENTS.md`, this isn't standard Next.js — check `node_modules/next/dist/docs/` before fixing.)

---

## 4. Schema / Structured Data — 0/100

**Result of grep on rendered HTML: 0 occurrences of `application/ld+json`.**

The site has **no structured data at all.** For a local services business, this is the single biggest under-indexed opportunity. Recommended schema (in priority order):

1. **`LocalBusiness`** (or more specific `HVACBusiness`) — required. Include `name`, `image`, `@id`, `url`, `telephone`, `address` (PostalAddress), `geo` (GeoCoordinates), `openingHoursSpecification`, `priceRange`, `areaServed`, `sameAs` (Google Business Profile, Facebook, LinkedIn).
2. **`Organization`** (logo) — optional alongside LocalBusiness if you have a corporate identity beyond the local entity.
3. **`Service`** — one entry per service in `Services.tsx`. Each `Service` should reference the `LocalBusiness` as `provider`.
4. **`FAQPage`** — wrap the 3 FAQs.
   - **Note (per quality gates)**: since Aug 2023, Google only shows FAQ rich results for government/healthcare sites. Adding `FAQPage` markup will **not** earn a rich result here. However, it still provides citation value for AI search engines (ChatGPT, Perplexity, Google AI Overviews). Priority: **Info, not Critical.**
5. **`BreadcrumbList`** — only if/when you add subpages.
6. **`Review` / `AggregateRating`** — once you collect testimonials. Do not invent ratings.

**Do not use `HowTo` schema** for the "Cómo Trabajamos" section — Google deprecated `HowTo` rich results in September 2023.

---

## 5. Performance — 60/100

| Vital | Estimated value | Threshold |
|---|---|---|
| TTFB | ~160 ms (edge HIT) | <800ms — pass |
| LCP | ~2.5–4.0 s (hero PNG) | <2.5s — likely fail mobile |
| CLS | ~0.0 | <0.1 — pass |
| INP | Unmeasured | <200ms — assume pass |

### Resource analysis

| Asset | Size | Issue |
|---|---|---|
| `fondo.png` | **626 KB** | Hero background image, served as raw PNG via CSS background-image. No WebP/AVIF, no responsive sizes, not preloaded. Likely LCP element. |
| HTML payload | 58.9 KB | Reasonable for a Next.js + framer-motion page. |
| Server-side rendered | YES | `X-Nextjs-Prerender: 1`. |

### Recommendations

1. **Convert `fondo.png` → AVIF + WebP at multiple widths** (e.g., 768, 1280, 1920). Use Next.js `<Image>` with `priority` and `fill` instead of CSS `background-image`. Estimated savings: 70–80% (180 KB AVIF for desktop hero is realistic).
2. **Preload the optimized hero image** with `<link rel="preload" as="image" fetchpriority="high">` (Next.js handles this when you use `<Image priority>`).
3. **Audit framer-motion impact**: every section uses `whileInView` triggers. Consider lazy-loading `framer-motion` for below-fold sections, or use CSS `prefers-reduced-motion` checks.
4. Run actual Lighthouse / CrUX measurements before claiming a final number.

---

## 6. AI Search Readiness (GEO) — 25/100

| Factor | Status |
|---|---|
| `llms.txt` | MISSING (404) |
| Citable passage structure | Weak — content is split across non-URL anchors. Each FAQ question is citable, but services are buried in client-side accordions. |
| Brand mention signals | Very weak — no GBP linkage, no review schema, no third-party citations (visible). |
| AI crawler accessibility | OK — no robots.txt blocks, server-rendered content. |
| Topical authority signals | Weak — single page, no depth content, no E-E-A-T signals (see §2). |
| Structured data for entities | 0 — no schema means LLMs cannot extract entity facts (NAP, hours, services) reliably. |

### Recommendations

- Add `app/llms.txt/route.ts` that returns a plain-text summary: business name, services, locations served, phone, email, hours.
- After adding `LocalBusiness` + `FAQPage` schema, AI tools can extract structured facts directly. This single change moves this score from 25 → 50+.
- Build out citable Q&A content (more FAQs, with answers structured as direct, declarative passages).

---

## 7. Images — 35/100

| Issue | Severity |
|---|---|
| Hero image 626 KB unoptimized PNG, used as CSS background | **High** |
| Logo `alt="Logo"` — non-descriptive (Header.tsx:44, Footer.tsx:21) | Medium |
| Sticky-nav logo `alt=""` — empty when visible | Medium |
| No OG image (no social preview) | **High** (links shared on WhatsApp/Facebook will look broken) |
| Public folder leak: `Proyecto Cooling Repair (2).zip` | **Critical** (security/SEO hygiene) |
| `objectFit` prop on `next/image` is deprecated in Next 16 | Low |

---

## 8. Local SEO — additional findings (business-type-specific)

| Signal | Status |
|---|---|
| NAP consistency | **FAIL** — two different phone numbers across the page. |
| Address on page | Partial — only "Valencia, España" (no street address). |
| Google Business Profile link | Not on page. |
| Embedded Google Map | Not on page. |
| Service area definition | Vague — "Comunidad Valenciana" without listing key cities. |
| Hours | Listed in Contact ("Lun–Vie 8:00–20:00"). Saturdays/Sundays/holidays/24h emergency? Unclear. |
| Reviews / testimonials | None visible on page. |
| `LocalBusiness` schema | None. |
| Citations / directories | Cannot verify from on-page audit alone — recommend Páginas Amarillas, Cylex, Yelp, Bing Places, Apple Maps audit (out of scope here). |

---

## 9. Site architecture verdict

This is a **brochure landing page**, not a website. For a local HVAC business in a competitive market like Valencia, that's a strategic ceiling. Recommended next-quarter expansion:

- `/servicios/reparacion-aire-acondicionado-split` (+ one URL per service in `Services.tsx`)
- `/zonas/valencia`, `/zonas/torrent`, `/zonas/paterna`, `/zonas/gandia` (location pages — observe quality gates: ≥60% unique content per page; warning at 30+, hard stop at 50+)
- `/blog/` for long-tail capture and freshness signals
- `/contacto` as a real URL with embedded map and full NAP

Until then, the page can only realistically rank for `cooling repair valencia` (brand) and one or two head-term variations.

