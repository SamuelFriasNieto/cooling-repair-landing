# Action Plan — cooling-repair.com

Generated: 2026-05-08. Health score baseline: **71/100**.
Priorities: Critical → High → Medium → Low. Effort estimates assume one mid-level dev/designer.

---

## Critical (fix immediately)

### C1. Replace `og:image` with a 1200×630 raster PNG/JPG
**Effort:** 2–3 hrs (includes design)
**Files:** [src/app/layout.tsx:54](src/app/layout.tsx#L54), [src/app/layout.tsx:65](src/app/layout.tsx#L65), `public/og-image.png` (new)

**Why:** Facebook, LinkedIn, WhatsApp, Slack, Discord, Telegram, X all reject SVG OG images or render them blank. Declared `og:image:width 1200 / height 630` doesn't match the SVG. For a phone-driven local service that converts on shared links, this kills warm-share conversion.

**How:** Generate a 1200×630 PNG with hero photo composite + logo + tagline ("Reparación de aire acondicionado en Valencia · 20 años de experiencia"). Save to `public/og-image.png`. Update layout:
```ts
images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "..." }]
```
**Validate:** https://www.opengraph.xyz/url/, https://cards-dev.twitter.com/validator, https://developers.facebook.com/tools/debug/

### C2. Move accordion content to initial DOM
**Effort:** 30–45 min
**Files:** [src/components/Services.tsx:119-133](src/components/Services.tsx#L119-L133), [src/components/FAQ.tsx:84-99](src/components/FAQ.tsx#L84-L99)

**Why:** All 8 service descriptions and 2 of 3 FAQ answers are absent from server-rendered HTML — verified via `curl … | grep` (0 hits on description text). Roughly 800 words of body copy invisible to Google.

**How (preferred):** Convert from `{isOpen && (...)}` to always-mounted with animated max-height, OR use native `<details>`/`<summary>` (semantic, indexable, animatable with CSS-only). Quick patch:
```tsx
<motion.div
  initial={false}
  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
  style={{ overflow: "hidden" }}
>
  <p className="...">{service.description}</p>
</motion.div>
```
This keeps the animation while ensuring the `<p>` is always in the DOM tree.

**Validate:** `curl -s https://… | grep "Diagnóstico y reparación"` should return ≥1 hit.

### C3. Add Aviso Legal + Privacy Policy + Cookie banner
**Effort:** 2–4 hrs (writing + review)
**Files:** `src/app/aviso-legal/page.tsx` (new), `src/app/politica-privacidad/page.tsx` (new), [src/components/Footer.tsx](src/components/Footer.tsx) (link them), optional cookie banner

**Why:** Spanish LSSI-CE Article 10 requires a legal notice with company identifier (CIF), registered address, registry data. RGPD requires a privacy policy whenever personal data is collected — the contact form collects name, phone, email, problem description. Currently the footer has no legal links at all.

**How:**
1. Collect: company CIF, registered address (which can differ from service area), registry data.
2. Use any reputable Spanish boilerplate (AEPD provides free templates) and customize.
3. Add `/aviso-legal` and `/politica-privacidad` to `app/sitemap.ts`.
4. Link both from footer.
5. Defer the cookie banner until analytics or a tracking script is added — until then the site sets no non-essential cookies. (Resend/server-action emails do not require consent.)

---

## High (fix within 1 week)

### H1. Add `streetAddress` + `postalCode` to schema; verify Google Business Profile
**Effort:** 30 min on schema + ~2 weeks for GBP verification
**Files:** [src/app/layout.tsx:85-90](src/app/layout.tsx#L85-L90)

**Why:** Without a street address and a verified GBP, the site cannot enter the Local Pack — even with perfect HVACBusiness schema. SAB businesses can hide their address from public display in GBP but must verify one with Google.

**How:** Add `streetAddress` and `postalCode` to `PostalAddress`; replace `geo.latitude/longitude` with the actual operations base if different from city centroid. Submit GBP for verification (postcard or video). After verification, add `sameAs: ["https://maps.google.com/?cid=…"]` to schema.

### H2. Compress hero image source
**Effort:** 30 min
**Files:** `public/fondo.png`

**Why:** 626 KB master PNG. `next/image` mitigates per-request but the source is the upper bound on cold cache misses; a heavier source also costs more CPU per optimization.

**How:**
```bash
npx @squoosh/cli --avif '{"quality":60}' public/fondo.png
# or
npx sharp-cli -i public/fondo.png -o public/fondo.avif --avif --quality 60
```
Aim for ≤180 KB at 1920w AVIF. Update `Image src` if the filename changes, or keep `.png` source and rely on `next/image` to serve AVIF/WebP from a smaller original.

### H3. Build city/service landing pages
**Effort:** 1–2 days for scaffolding + 1 day per landing page
**Files:** `src/app/zonas/[ciudad]/page.tsx`, `src/app/servicios/[servicio]/page.tsx` (or static routes per city)

**Why:** Schema advertises 6 cities and 8 services; site has 1 URL. Cannot rank for `"reparación aire acondicionado torrent"`, `"carga gas refrigerante valencia"`, etc.

**Recommended scope:**
- 6 city pages: `/zonas/valencia`, `/torrent`, `/paterna`, `/burjassot`, `/gandia`, `/sagunto`. 300–500 unique words each, real local references (postcodes, neighbourhoods, climate notes), NAP, internal link to relevant service.
- 8 service pages: `/servicios/reparacion-split`, `/servicios/aerotermia`, etc. 400–600 unique words each, FAQ specific to that service.
- Update sitemap to include all new URLs.
- Internal linking: nav, footer, and contextual cross-links.

**Watch out for the quality gate:** never spawn 50+ thin pages. 6 + 8 = 14 unique pages is well below the warning line — but each must be genuinely unique (not template-with-{city}-replace).

### H4. Trim meta description to ≤155 chars for mobile
**Effort:** 5 min
**Files:** [src/app/layout.tsx:21-22](src/app/layout.tsx#L21-L22)

**Why:** Current description is 198 chars; will truncate on mobile SERPs.

**How:** Tighten to e.g. *"Reparación y mantenimiento de aire acondicionado en Valencia. Técnicos certificados, más de 20 años de experiencia. Presupuesto sin compromiso."* (~150 chars.)

---

## Medium (fix within 1 month)

### M1. Expand FAQPage schema to 8–12 entries
**Effort:** 1–2 hrs
**Files:** [src/components/FAQ.tsx:7-23](src/components/FAQ.tsx#L7-L23), [src/app/layout.tsx:138-167](src/app/layout.tsx#L138-L167)

**Why:** AI engines cite passage-level FAQ answers heavily. 3 questions covers basic intent; 8–12 unlocks long-tail.

**Add:** F-Gas / RITE certification, brands repaired (Daikin, Mitsubishi, LG, Fujitsu, Panasonic…), warranty length, emergency availability, contracts for empresas, payment methods, areas served outside Valencia city, what to do if the unit leaks water, why the AC is not cooling.

### M2. Add `sameAs` to schema as social/profile URLs come online
**Effort:** 5 min after URLs exist
**Files:** [src/app/layout.tsx:73-136](src/app/layout.tsx#L73-L136)

**Why:** Disambiguates entity for Google + AI, cross-validates NAP.

**How:** `sameAs: ["https://maps.google.com/?cid=…", "https://www.facebook.com/…", "https://www.instagram.com/…"]`

### M3. Display real review snippets + `aggregateRating`
**Effort:** 2–4 hrs (depends on source)
**Files:** new component + schema update

**Why:** Star-rich snippets in SERP and significant trust lift. **Only display ratings sourced from a verified third party** (GBP, Trustpilot, Houzz). Inventing them violates Google's structured data policy.

**How:** Once 5+ GBP reviews exist, embed via the Places API or display as static markup with `Review` schema. Do not display fake/seeded reviews.

### M4. Add `<address>` element + click-to-call near hero CTA
**Effort:** 15 min
**Files:** [src/components/Hero.tsx](src/components/Hero.tsx), [src/components/Footer.tsx](src/components/Footer.tsx)

**Why:** Semantic HTML + better mobile-conversion + minor ranking signal.

### M5. Generate a `/favicon.ico` for legacy clients
**Effort:** 5 min
**Files:** `public/favicon.ico` (new)

**Why:** `/icon.svg` works in modern browsers; `.ico` covers older mail clients and some chat embed previews.

### M6. PageSpeed Insights field-data run + INP audit
**Effort:** 30 min
**Files:** none (analysis)

**Why:** Lab estimate only in this audit. Validate LCP/INP/CLS on real device profiles. Add Vercel Analytics or PSI-only — but if Vercel Analytics is added, see C3 (cookie banner becomes mandatory).

---

## Low (backlog)

### L1. Add a Content Security Policy header
Add a baseline `Content-Security-Policy` once allowed origins are mapped (Google Fonts, Resend, Vercel telemetry).

### L2. Surface F-Gas / RITE certification numbers on-page
E-E-A-T expertise lift. 1 line under stats or in a new "credenciales" subsection.

### L3. Plan a content blog (`/blog`) for long-tail and AI citation
Topics: "cómo limpiar filtros aire acondicionado", "qué hacer si pierde gas", "diferencia split vs multisplit", "cuándo llamar a un técnico". Ties to the H3 city pages via internal links. Defer until the 14 city/service pages are live and indexed.

### L4. Microcopy: B2B path
"Empresas / mantenimiento contratado" CTA on homepage and a dedicated `/empresas` page targeting facility managers and property administrators.

### L5. Image gallery of past work (with `Photograph` or `ImageObject` schema)
Real before/after photos lift Experience signal sharply. Tag with location to support city pages.

---

## Implementation roadmap (recommended sequence)

**Week 1 — unblock SEO floor**
- Day 1: C1 (OG image), C2 (accordion content), H4 (meta length).
- Day 2: H2 (compress hero), M5 (favicon.ico), C3 prep (collect CIF/address).
- Day 3–5: C3 (legal pages), H1 (schema street/postal + start GBP).

**Week 2–4 — content & local**
- M1 (FAQ expansion).
- H3 design + scaffold city/service pages; ship 2–3 cities and 2–3 services.
- M4 (semantic NAP), M3 (review embed once GBP populates).

**Month 2+ — growth**
- Finish remaining city/service pages.
- L3 (blog) once core landing pages indexed.
- M6 (CWV monitoring), M2 (`sameAs` once profiles created).

---

## Re-scoring after Week 1

If C1+C2+C3+H1+H2+H4 ship cleanly, projected SEO Health Score: **84–87 / 100**.
The remaining gap is content depth (H3 city/service pages) and authority signals (M3 reviews, M2 sameAs).
