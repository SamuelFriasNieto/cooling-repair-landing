# Action Plan — cooling-repair.com SEO

Pendientes después de la pasada de fixes del 2026-05-08. Todo el bloque CRITICAL y la mayoría de HIGH/MEDIUM/LOW del plan original ya está aplicado en código (ver commits y `next.config.ts`, `src/app/layout.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/llms.txt/route.ts`).

---

## MEDIUM (1 mes)

### M3. Ampliar FAQ de 3 a 8–12 entradas

**File**: `src/components/FAQ.tsx`
**Sugerencias**:
- ¿Trabajáis con marcas como Daikin, Mitsubishi, Fujitsu, LG?
- ¿Hacéis instalaciones nuevas o solo reparaciones?
- ¿Qué incluye el mantenimiento preventivo?
- ¿Tenéis certificación F-Gas y RITE?
- ¿Cuál es el rango de precios típico de una reparación?
- ¿Trabajáis en festivos o emergencias 24h?
- ¿Damos garantía y por cuánto tiempo?
- ¿Qué zonas de la Comunidad Valenciana cubrís?

**Recordatorio**: cuando se añadan, hay que reflejarlas también en el `faqSchema` dentro de `src/app/layout.tsx`.

**Effort**: 2–3 horas (redacción).

### M5. Listado / mapa de zonas de servicio

**Action**: reemplazar el genérico "Comunidad Valenciana" por una lista visible de ciudades cubiertas (Valencia capital, Torrent, Paterna, Gandía, Sagunto, Burjassot, etc.). Opcional: embeber un Google Map en la sección de Contacto.

Las ciudades ya están listadas en `areaServed` del `businessSchema` (`layout.tsx`); falta exponerlas en la UI.

**Effort**: 1 hora.

### M6. Reforzar señales E-E-A-T

- Añadir 3–5 testimonios con nombre + barrio (ej. "Luis — Russafa").
- Añadir sección de equipo con 1–2 frases por técnico + certificaciones.
- Listar explícitamente certificaciones del sector (RITE, F-Gas, fabricantes).
- Añadir CIF / nº de registro mercantil al Footer (obligatorio bajo LSSI-CE).
- Enlazar el Google Business Profile de forma destacada.
- Añadir páginas reales de Política de Privacidad y Términos de Uso (los enlaces se eliminaron del Footer; vuelven a añadirse cuando existan las páginas; obligatorio bajo LSSI-CE porque el formulario procesa datos personales).

**Effort**: 1 día.

### M7. Re-medir performance tras los fixes

Ejecutar PageSpeed Insights / Lighthouse / WebPageTest sobre la URL de producción una vez desplegado. Mejora esperada de LCP móvil: 1.5–2.5s gracias al cambio de `next/image` en el hero.

**Effort**: 30 minutos.

---

## LOW (backlog)

### L1. Expansión arquitectónica a sitio multi-página

A largo plazo: pasar de landing única a multi-página (ver §9 del audit). Es prerrequisito para rankear long-tail (`reparación aerotermia Paterna`, etc.). Cuando se implemente, hay que actualizar `src/app/sitemap.ts` para que incluya las nuevas URLs.

**Effort**: 2–4 semanas de diseño + contenido + desarrollo.

### L2. Construir `/blog/` para content marketing

Empezar con 1 post / mes sobre temas prácticos de HVAC (ej. "¿Cuándo cambiar el gas refrigerante de tu aire acondicionado?", "Cómo elegir un instalador certificado en Valencia").

**Effort**: continuo.

### L3. Alta en directorios locales

Páginas Amarillas, Cylex España, Yelp, Bing Places, Apple Maps Connect, directorio AFEC si aplica. Siempre con NAP idéntico al del sitio (`+34 615 35 73 74`, dirección, etc.).

**Effort**: 2–3 horas (one-time).

---

## Roadmap

| Fase | Items |
|---|---|
| Inmediato | H4, H5 |
| Mes 1 | M3, M5, M6, M7, L3 |
| Roadmap | L1, L2 |

Tras H4 + H5: previews sociales correctos y señal canónica de host limpia.
Tras Mes 1: Health Score esperado **75 → 85**.
