# Full SEO Audit — cooling-repair.com

**URL audited:** https://www.cooling-repair.com/
**Audit date:** 2026-05-08
**Stack:** Next.js 16.2.1 (App Router) + React 19 + Tailwind v4, hosted on Vercel
**Business type:** Local Service / SAB — HVAC & AC repair, Valencia (ES)
**Site scope:** Single-page application (1 indexable URL, anchor-based navigation)

---

## Executive Summary

### Overall SEO Health Score: **71 / 100**

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 82 / 100 | 22% | 18.0 |
| Content Quality | 55 / 100 | 23% | 12.7 |
| On-Page SEO | 75 / 100 | 20% | 15.0 |
| Schema / Structured Data | 88 / 100 | 10% | 8.8 |
| Performance (CWV — lab estimate) | 70 / 100 | 10% | 7.0 |
| AI Search Readiness | 72 / 100 | 10% | 7.2 |
| Images | 50 / 100 | 5% | 2.5 |
| **Total** | | | **71.2 / 100** |

The site has been rebuilt to a strong technical foundation since the previous audit: robots.txt, sitemap.xml, llms.txt, full Open Graph + Twitter meta, HVACBusiness + FAQPage JSON-LD, GSC verification, security headers, 308 redirects, and consistent NAP are all in place. Three issues now cap the ceiling: (1) the OG/Twitter image is an SVG that most social platforms refuse to render; (2) initial-load HTML omits all eight service descriptions and two of three FAQ answers because they sit inside conditionally-mounted accordion bodies; (3) the single-URL architecture is the keyword-coverage ceiling for a service that advertises six cities and eight services.

### Top 5 Critical Issues

1. **`og:image` and `twitter:image` point to `/logo.svg`** ([layout.tsx:54](src/app/layout.tsx#L54), [layout.tsx:65](src/app/layout.tsx#L65)). Facebook, LinkedIn, WhatsApp, Slack, Discord, X, and most messaging apps will not render SVG OG images, so link previews fall back to a blank/black card. Declared dimensions `1200×630` also don't match the actual SVG. **For a phone-driven local service that converts on shared links, this kills warm-share conversion.**
2. **Hidden accordion content — service descriptions never reach the DOM on first paint** ([Services.tsx:119-133](src/components/Services.tsx#L119-L133)). The `{isOpen && (...)}` guard means only service *titles* are server-rendered; all 8 description paragraphs (≈800 words) are absent from the HTML response. Same pattern in [FAQ.tsx:84-99](src/components/FAQ.tsx#L84-L99) hides answers 2 and 3. Verified: `curl … | grep "Diagnóstico y reparación de averías"` returns **0 hits**. Google will index the on-page text it sees, not the source.
3. **Spanish legal compliance gap — no Aviso Legal, no Privacy Policy, no Cookie banner.** LSSI-CE Article 10 (Spain) requires a legal notice with company identifier (CIF), registered address, and contact details. RGPD requires a privacy policy whenever a contact form collects personal data — this form collects name, phone, email, problem description ([Contact.tsx:230-316](src/components/Contact.tsx#L230-L316)). The footer currently has no legal links at all ([Footer.tsx](src/components/Footer.tsx)). **Risk: AEPD fines, plus E-E-A-T signal loss.**
4. **No street address in schema or on page** ([layout.tsx:85-90](src/app/layout.tsx#L85-L90)). `PostalAddress` has `addressLocality: "Valencia"` but no `streetAddress` or `postalCode`. Google's Local Pack ranking is driven by GBP + matching NAP. Without a verified street and a Google Business Profile, the site cannot enter the map pack — even with perfect HVACBusiness schema.
5. **Single-page architecture caps keyword coverage.** Schema advertises 8 services and 7 areas (Valencia, Torrent, Paterna, Burjassot, Gandía, Sagunto, Comunidad Valenciana) but every link is an anchor on `/`. There is no way to rank for `"reparación aire acondicionado torrent"`, `"carga gas refrigerante valencia"`, etc. without dedicated URLs. This is the structural ceiling on organic growth.

### Top 5 Quick Wins (under 1 day each)

1. Generate a 1200×630 PNG OG image (hero composite + logo + tagline) → place at `/public/og-image.png` → update [layout.tsx:54](src/app/layout.tsx#L54) and [layout.tsx:65](src/app/layout.tsx#L65). Validate at https://www.opengraph.xyz/url/ and https://cards-dev.twitter.com/validator. *(2–3 hours including image creation.)*
2. Render accordion contents always in the DOM, hide visually with CSS/`max-height` + `overflow:hidden` — keeps the animation, fixes crawlability. Or convert to native `<details>` elements (still animatable, fully indexable). *(45 minutes, one-line change per accordion.)*
3. Pre-compress `public/fondo.png` from **626 KB** to ≤180 KB AVIF master (or generate one via `npx @squoosh/cli` / `sharp`). `next/image` already optimizes per-request, but the source is the upper bound for LCP on first edge-cache miss. *(30 minutes.)*
4. Add a minimal `/aviso-legal` and `/politica-privacidad` page (Spanish-LSSI compliant) and a cookie consent banner if/when analytics get installed. Even placeholder pages with the company NAP/CIF unblock the legal gap. *(1–2 hours; plenty of free generators for the boilerplate text.)*
5. Add `sameAs` to the HVACBusiness schema once the Google Business Profile, Facebook, or Instagram URLs are available — even one entry strengthens entity disambiguation for both Google and AI engines. *(5 minutes after URLs exist.)*

---

## 1. Technical SEO — 82/100

### Crawlability

| Item | Status | Evidence |
|---|---|---|
| `robots.txt` | **OK** | `User-Agent: *` / `Allow: /` / `Sitemap:` line present. ([robots.ts](src/app/robots.ts)) |
| `sitemap.xml` | **OK** | Single URL, `<lastmod>` is the build time, `<priority>1</priority>`. Adequate for 1-page site. ([sitemap.ts](src/app/sitemap.ts)) |
| `llms.txt` | **OK** | Well-structured at `/llms.txt` with NAP, services, hours, area. Strong AI-engine signal. ([llms.txt/route.ts](src/app/llms.txt/route.ts)) |
| Internal links | OK | Header + footer use anchor links (`#servicios`, `#ventajas`, `#como-trabajamos`, `#faq`, `#contacto`). All match section IDs. |
| Footer legal links | **MISSING** | No Aviso Legal, no Privacy Policy, no Cookies link in [Footer.tsx](src/components/Footer.tsx). Spanish LSSI compliance gap. |

### Indexability

| Item | Status | Notes |
|---|---|---|
| `<meta robots>` | **OK** | `index, follow` + `max-image-preview:large, max-snippet:-1, max-video-preview:-1` for googlebot. |
| Canonical | **OK** | `<link rel="canonical" href="https://www.cooling-repair.com/">` (via Next `metadataBase` + `alternates.canonical: "/"`). |
| GSC verification | **OK** | `<meta name="google-site-verification" content="…">` present. |
| HTML rendering | **OK** | Server-rendered (`X-Nextjs-Prerender: 1`). |

### Security headers (live response)

| Header | Status |
|---|---|
| `Strict-Transport-Security` | **OK** — `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | **OK** — `nosniff` |
| `X-Frame-Options` | **OK** — `DENY` |
| `Permissions-Policy` | **OK** — `camera=(), microphone=(), geolocation=(), interest-cohort=()` |
| `Referrer-Policy` | **OK** — `strict-origin-when-cross-origin` |
| `Content-Security-Policy` | **MISSING** | Not blocking SEO. Add a minimal CSP only when a comprehensive list of allowed origins is known (Google fonts, vercel.live, etc.). |

### URL & redirects

- HTTPS enforced ✓
- Non-www → www redirect: **308 (permanent)** ✓ (verified live)
- Trailing slash policy: consistent (no trailing slash) ✓
- No URL parameters ✓

### Mobile

- Viewport `width=device-width, initial-scale=1` ✓
- Responsive header with hamburger ([Header.tsx:127-181](src/components/Header.tsx#L127-L181)) ✓
- Tap targets sized adequately ✓
- Fonts use `next/font/google` with `display: swap` ([layout.tsx:5-17](src/app/layout.tsx#L5-L17)) ✓

### Core Web Vitals (lab estimate — no field data)

- **TTFB**: 93 ms (`time_starttransfer`) measured via curl, with `X-Vercel-Cache: HIT` — excellent.
- **HTML payload**: 73 KB ✓
- **LCP risk**: hero `fondo.png` is **626 KB** at source ([Hero.tsx:24-32](src/components/Hero.tsx#L24-L32)). Requested through `next/image` → on a cold edge cache, the optimizer returns 277 KB PNG (or smaller WebP/AVIF when the browser sends the right `Accept` header). With `priority` + parallax + `scale-[1.25]`, this is the dominant LCP element. Compress the source PNG (or replace with AVIF) to keep first-paint under 200 KB on 4G.
- **CLS risk**: low — `fill` images have explicit container dimensions.
- **INP risk**: low at homepage scale; framer-motion animations are throttled by `useScroll`/`whileInView`. Verify on a low-end Android in the field.

**Action:** run PageSpeed Insights to capture real LCP/INP/CLS numbers. CrUX field data not yet available (likely insufficient origin traffic for inclusion).

---

## 2. Content Quality — 55/100

### What the crawler actually sees vs. what the source code contains

This is the audit's biggest finding. The Services and FAQ accordions both render their bodies inside `{isOpen && (<motion.div>…</motion.div>)}`. On initial render:

- `Services` initial state: `openIndex = null` ([Services.tsx:139](src/components/Services.tsx#L139)) → **0 of 8 service descriptions in HTML.**
- `FAQ` initial state: `openIndex = 0` ([FAQ.tsx:104](src/components/FAQ.tsx#L104)) → only 1 of 3 answers in HTML.

Verified via raw HTML grep:
```
$ curl -s https://www.cooling-repair.com/ | grep -c "Diagnóstico y reparación de averías"
0
$ curl -s https://www.cooling-repair.com/ | grep -c "Mantenimiento preventivo para alargar"
0
```

Estimated content actually visible to Googlebot:
- Headings: H1 + 5 H2 + ~15 H3 = good structure
- Body prose: hero subheading (35 words) + section subheadings (~80 words) + 1 FAQ answer (~50 words) = **~165 words of prose**.

That is well below the 300-word floor for a competing local-service homepage and is closer to thin-content territory.

**Why it matters for AI search:** the FAQPage JSON-LD does include all three Q&A pairs, so ChatGPT/Perplexity-style scrapers that prefer JSON-LD will still see them. But the OfferCatalog only contains service *names*, not descriptions — so the 8 descriptions are invisible everywhere.

**Fix patterns (pick one):**
- Render the body always, animate `max-height` from 0 → auto via framer's layout animations.
- Use the native `<details>`/`<summary>` element (semantic, indexable, animatable with CSS).
- Drop the accordion entirely — for an 8-item list with short copy, a static cards/grid pays back the lost UX with significantly better content visibility.

### E-E-A-T (Sept 2025 QRG)

| Signal | Strength | Evidence |
|---|---|---|
| Experience | **Medium** | "más de 20 años de experiencia" stated in hero, stats section, and footer. No case studies, no before/after photos, no service date stamps. |
| Expertise | **Medium-low** | "Técnicos certificados", "100% técnicos certificados" in stats. No certifications named, no technician bios, no RITE/F-Gas accreditation evidence. |
| Authoritativeness | **Low** | No press mentions, no `sameAs` links to GBP/Facebook/LinkedIn, no client logos, no review platform integration. |
| Trustworthiness | **Low** | NAP visible ✓ but no street, no CIF, no Aviso Legal, no privacy policy, no review widgets, no "Política de garantía" page. |

Quick lifts: surface the F-Gas/RITE certification number, add 1–3 Google review snippets (with `Review` schema once on a verified GBP), publish technician bios (1 paragraph each), add real photos of work.

### Thin content / duplication

No duplicate content concerns (single page). The risk is the opposite — too little body prose given the breadth of services claimed in schema.

---

## 3. On-Page SEO — 75/100

| Element | Live value | Verdict |
|---|---|---|
| `<title>` | "Reparación de aire acondicionado en Valencia \| Cooling Repair" | **Good** — primary keyword first, brand last, 65 chars (under SERP truncation). |
| `<meta description>` | 198 chars, contains "Valencia", "20 años", "técnicos especializados" | **Good** — within 155–170 ideal, but lengthy descriptions can truncate on mobile. Consider trimming to ~155 chars for mobile SERPs. |
| H1 | "Servicio de Reparación de Aire Acondicionado en Valencia" | **Good** — single H1, exact-match commercial intent. |
| H2 hierarchy | 5 H2s mapping to Services / Ventajas / Cómo Trabajamos / FAQ / Contacto | **Good.** |
| H3 hierarchy | 8 service cards + 4 process steps + 3 FAQ items | **Good** structurally, but 8 of those H3s have empty body text on first render (see §2). |
| Internal links | All in-page anchors | **Adequate** for single-page site, becomes a constraint as soon as additional pages are added. |
| Image alt | Logo: descriptive ✓; hero `fondo.png`: `alt=""` (decorative) ✓ | Acceptable — hero is a styled background; explicit empty alt is correct. |
| URL structure | `/` only | n/a |
| Anchor text | Buttons say "Solicitar una reparación" / "Solicitar un presupuesto" — clear intent. | Good. |

### Missing on-page elements

- No `<address>` element wrapping NAP — minor semantic miss.
- No phone number link in the hero CTA area — only the header has `tel:` link. Adding a click-to-call near the H1 would lift mobile conversion (and is a positive ranking signal for SAB businesses).

---

## 4. Schema / Structured Data — 88/100

### Detected

**Block 1 — `HVACBusiness`** ([layout.tsx:73-136](src/app/layout.tsx#L73-L136))
- `@id`, `name`, `url`, `telephone`, `email`, `image`, `logo`, `priceRange`, `description` ✓
- `address.PostalAddress` — has `addressLocality`, `addressRegion`, `addressCountry`; **missing `streetAddress` and `postalCode`**.
- `geo.GeoCoordinates` — Valencia city centroid (39.4699, -0.3763). If the business operates from a specific address, replace with the actual coordinates.
- `openingHoursSpecification` — Mon–Fri 08:00–20:00 ✓
- `areaServed` — 6 cities + Comunidad Valenciana ✓
- `knowsLanguage: ["es"]` ✓
- `hasOfferCatalog.OfferCatalog` with 8 `Offer.Service` items ✓ — well-structured.

**Block 2 — `FAQPage`** ([layout.tsx:138-167](src/app/layout.tsx#L138-L167))
- 3 `Question` entries with `acceptedAnswer.Answer.text` ✓ — valid structure.
- **Note:** Google restricts FAQ rich results to government/health sites (Aug 2023). FAQPage on a commercial site **will not show as a Google rich result**, but it remains valuable for AI engines (ChatGPT, Perplexity, Claude search) that ingest JSON-LD — keep it.

### Missing / recommended

| Schema | Why | Effort |
|---|---|---|
| `streetAddress` + `postalCode` in `PostalAddress` | Required for Google Local Pack candidacy. | 2 min after data is collected |
| `sameAs: [...]` on HVACBusiness | Disambiguation for Google + AI. Add GBP, Facebook, Instagram, LinkedIn URLs once they exist. | 2 min |
| `aggregateRating` + `Review` (subtypes of HVACBusiness) | Rich snippet stars in SERP. Only add when reviews are verifiable (pulled from GBP API or shown on-page). | 30 min once reviews exist |
| `BreadcrumbList` | n/a for single-page; revisit when sub-pages launch |
| `Organization` (separate `@id`) | Duplicates HVACBusiness for a single-location business — **not recommended**. HVACBusiness extends LocalBusiness which extends Organization, so all entity properties are inherited. |
| `WebSite` + `SearchAction` | Site is single-URL; no internal search to expose. **Skip.** |

### Validation

Run https://search.google.com/test/rich-results and https://validator.schema.org/ on the live URL after each change.

---

## 5. Performance (CWV) — 70/100

| Metric | Lab estimate | Threshold | Verdict |
|---|---|---|---|
| TTFB | **93 ms** | < 600 ms good | Excellent |
| HTML size | 73 KB | < 100 KB good | Good |
| LCP | likely 2.0–3.5 s on 4G mobile (hero image dominant) | < 2.5 s good | At risk |
| CLS | Likely < 0.1 | < 0.1 good | Likely good |
| INP | Untested | < 200 ms good | Verify with PSI |

**Single recommendation that moves the needle:** compress `fondo.png` to AVIF or 80%-quality WebP at source. The current 626 KB PNG is pre-compressed by `next/image` per request, but the master file is still inefficient and many CDN cache misses serve heavier-than-needed bytes. Targeting ≤180 KB at 1920w AVIF is realistic.

Secondary: framer-motion is loaded for all components. For an 8-item accordion + 3 FAQ + parallax, this is fine. Don't pre-optimize.

**Action:** publish on Vercel, then run https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.cooling-repair.com%2F&form_factor=mobile and capture LCP/INP/CLS numbers. Re-score after image fix.

---

## 6. AI Search Readiness (GEO) — 72/100

| Signal | Status |
|---|---|
| `llms.txt` present and well-structured | **OK** — covers NAP, services, hours, areaServed. |
| HVACBusiness JSON-LD with rich entity description | **OK** — high citability for AI engines. |
| FAQPage JSON-LD with concrete Q&A | **OK** — perfect for citation in ChatGPT/Perplexity answer cards. |
| Brand mention signals | **Low** — no GBP, no Facebook page, no review platform presence visible. AI engines correlate brand mentions across the open web for trust scoring. |
| Crawler accessibility | **OK** — robots.txt allows all; no UA blocks. |
| Passage-level citability | **Limited** — service descriptions hidden in accordion bodies (see §2). Even though they're not in JSON-LD, AI scrapers that don't parse JSON-LD will miss them. Fix the accordion to lift this score. |
| Structured Q&A | **OK** — FAQPage covers 3 evergreen queries; consider adding 5–10 more (cost ranges, timing, brands repaired, F-Gas certification, warranty terms, emergency availability). |
| Authority/citation signals | **Low** — no inbound mentions or citations on the open web (testable via `link:cooling-repair.com` after launch). |

**Quick AI-search lifts:**
1. Fix accordion content (also helps Google).
2. Add 5–10 more FAQ entries to FAQPage schema covering long-tail intents.
3. Get the GBP listed and link `sameAs` — AI engines crosscheck NAP between site schema and Google's Knowledge Graph.

---

## 7. Images — 50/100

| Asset | Size | Format | Issue |
|---|---|---|---|
| `public/fondo.png` (hero) | **626 KB** | PNG | Heavy source. Optimized at 1920w to ~277 KB PNG (smaller for WebP/AVIF). Compress source to AVIF or ≤80% JPEG for a hero photo. |
| `public/logo.svg` | 5.7 KB | SVG | OK on-page, **but used as `og:image`** — see Critical Issue #1. |
| `public/logo-white.svg` | 5.5 KB | SVG | OK |
| `public/logo-icono.svg` | 2 KB | SVG | OK |
| `public/image-logo.png` | 14 KB | PNG | Unused on the page? Verify or delete. |
| Favicon | `/icon.svg` 200 OK; `/favicon.ico` 404 | SVG only | Some legacy clients (older Outlook, IE-style mail clients, certain Slack channels) still expect `.ico`. Add a 32×32 `/public/favicon.ico` for full coverage. |

**Missing:** no dedicated **OG image** (1200×630 PNG/JPG). This is the single most important image fix — see Critical Issue #1.

Alt-text audit: hero is decorative (`alt=""` ✓), all logos are descriptive ✓, no `<img>` tags missing alt detected.

---

## 8. Local SEO (specific findings)

The site presents as a SAB (Service-Area Business) with no public storefront, which is fine — but the schema and on-page signals don't match a verified Local Pack candidate:

| Local ranking factor | Status |
|---|---|
| NAP on every page | **OK** — phone, email, locality, hours all on homepage and footer. |
| NAP consistency across header/footer/contact | **OK** — single phone `+34 615 35 73 74` everywhere (verified). |
| Google Business Profile | **Unknown / likely missing** — no `sameAs` GBP link in schema, no embedded GBP review widget. **This is the #1 local-SEO gap.** Without a verified GBP, the site is locked out of Map Pack rankings entirely. |
| Citations on directories (Páginas Amarillas, QDQ, Tuugo, Yelp ES, etc.) | Not verified in this audit. |
| Reviews | None on site. Once GBP exists, embed 3–5 recent reviews + add `aggregateRating` schema (only if pulled from a verified source). |
| Service-area + city pages | **None** — schema lists 6 cities but there are 0 city URLs. Build a `/zonas/[ciudad]` route with city-specific copy (200–400 words each, real local references) — this is the highest-leverage growth move. |
| Industry-specific signals | F-Gas certification, RITE habilitation, manufacturer authorizations (Daikin, Mitsubishi, etc.) — none surfaced. |

---

## 9. Search Experience Optimization (SXO)

| Persona | Likely query | Current page meets need? |
|---|---|---|
| Homeowner with a broken split unit, looking now | "reparación aire acondicionado valencia urgente" | Partial — page surfaces phone, WhatsApp, form, but no "available today / emergency" signal; service descriptions hidden. |
| Homeowner shopping prices | "cuánto cuesta reparar aire acondicionado" | Partial — FAQ #1 answers but only 1 of 3 FAQ answers visible without click. |
| Property manager scheduling preventive maintenance | "mantenimiento aire acondicionado empresas valencia" | Weak — no B2B-specific copy or contracts CTA. |
| User comparing technicians | "técnicos certificados aire acondicionado valencia" | Weak — claims certifications but doesn't name them; no credentials displayed. |

The page-type matches the queries (commercial intent → service landing). The intent mismatch is **content depth**, not page type.

---

## 10. Internationalization

- `<html lang="es">` ✓
- `og:locale = es_ES` ✓
- `knowsLanguage: ["es"]` in schema ✓
- No `hreflang` (correct for a single-language site)
- LSSI Article 10 information page should also be available in Spanish

If an English version is ever added, every page will need `hreflang` tags + content parity, not just a language toggle.

---

## Summary of changes since previous audit (delta from 2026-04-XX)

The previous report (`FULL-AUDIT-REPORT.md` superseded) flagged 11 issues, of which **9 are now resolved**:

| Previous issue | Status |
|---|---|
| Public ZIP file in `/public/` | RESOLVED — verified absent. |
| No `robots.txt` | RESOLVED — `app/robots.ts` ships valid output. |
| No `sitemap.xml` | RESOLVED — `app/sitemap.ts` ships. |
| Zero structured data | RESOLVED — HVACBusiness + FAQPage live. |
| No Open Graph / Twitter | RESOLVED — full set in `metadata` object (image format issue remains, see Critical #1). |
| Phone NAP mismatch | RESOLVED — single number across all components. |
| 307 (temp) non-www redirect | RESOLVED — now 308. |
| Missing security headers | RESOLVED — HSTS, XFO, XCTO, Permissions-Policy, Referrer-Policy all present. |
| Missing canonical | RESOLVED — `alternates.canonical: "/"` ships. |
| Hero image 626 KB | PARTIAL — source still 626 KB; `next/image` mitigates. |
| FAQPage rich results expectation | KEPT (no Google rich result for commercial, but useful for AI). |

**New issues surfaced in this audit:**
- Accordion content not in initial DOM (Services/FAQ).
- OG/Twitter image is SVG.
- Spanish legal compliance gap (Aviso Legal / Privacy / Cookies).
- No street address in schema; no GBP linkage.
- Single-page architecture remains the keyword ceiling.
