# Análisis de diseño · Cooling Repair (Valencia)

**Fecha:** 2026-05-09
**Sector:** Servicios técnicos del hogar — HVAC / Reparación de aire acondicionado
**Patrón recomendado:** Conversion-Optimized + Trust & Authority
**Estilo recomendado:** Trust & Authority (Flat Design + Trust)

---

## Resumen ejecutivo

La página actual tiene **muy buen craft visual** (parallax, scroll-driven, micro-interacciones, jerarquía tipográfica) pero está diseñada con **lenguaje editorial / agencia creativa**, no con el de su sector. En servicios técnicos del hogar el patrón ganador es **Conversion-Optimized + Trust & Authority**: señales de confianza visibles desde el hero, urgencia explícita, prueba social fuerte (Google reviews + testimonios + antes/después), y CTAs orientados a llamada / WhatsApp.

> **El problema central:** la página parece de un estudio de arquitectura o marca de lujo, no de un servicio que el usuario llama con prisa porque tiene 33 °C en casa.

Los **3 cambios con mayor ROI**:

1. **Sistema de color** → reemplazar el azul periwinkle desaturado (`#6C7EB9`) por azul confianza saturado (`#0369A1`) y añadir un **naranja acción** (`#EA580C`) reservado a CTAs urgentes.
2. **Trust signals en el hero** → chip de disponibilidad ("Servicio mismo día"), rating Google ⭐ 4.8, sellos F-Gas / RITE, teléfono prominente.
3. **Sección Antes/Después + Reseñas** → es el formato que más convierte en HVAC local.

---

## Diagnóstico — gap vs líderes del sector

| Área | Cómo está hoy | Cómo lo hacen los líderes |
|---|---|---|
| **Color de acento** | `#6C7EB9` (periwinkle desaturado) | Azul confianza saturado + naranja seguridad para CTAs |
| **Hero CTA** | Botón pill periwinkle, baja prominencia | Teléfono GIGANTE + CTA naranja "Pide presupuesto gratis" |
| **Señales de urgencia** | Inexistentes | Badge "Servicio mismo día", "Respuesta < 2h", chip 24/7 |
| **Trust signals** | Solo cifras animadas | Google rating ⭐ 4.8, sellos F-Gas, RITE, logos marcas reparadas |
| **Prueba social** | Ninguna sección de testimonios | Reseñas con foto + estrellas Google embebidas |
| **Caras humanas** | 0 fotos de técnicos | Foto del equipo, furgoneta, técnico en obra |
| **Antes/Después** | No existe | Galería before/after — formato 100% del sector |
| **Cobertura geo** | Lista de zonas en footer | Mapa interactivo o ilustración de área de servicio |
| **Transparencia precio** | Solo en FAQ | Badge "Diagnóstico gratuito" / "Sin coste de desplazamiento" |
| **Tono tipografía** | Editorial elegante (display 800, tracking -0.03em) | Sans humanista profesional — fiable, no de revista |
| **Hero copy** | "Servicio de reparación…" | Promesa con SLA: "Reparamos tu aire en 24h" |

---

## Recomendaciones priorizadas

### 🔴 P1 · Cambios que aumentan conversión inmediatamente

#### 1. Recolocar el sistema de color
- Mantener `--color-navy` como autoridad.
- Sustituir `--color-blue: #6C7EB9` por **`#0369A1`** (azul confianza saturado, AAA con blanco).
- Añadir **`--color-action: #EA580C`** (naranja seguridad) **solo** para CTAs primarios y badges de urgencia.
- Añadir **`--color-whatsapp: #25D366`** y **`--color-whatsapp-dark: #128C7E`** para el botón de WhatsApp.

#### 2. Hero — re-jerarquizar para conversión
- **Chip arriba del H1**: `● Disponible hoy en Valencia · Respuesta en < 2h`
- **Trust row** debajo de los CTAs: `★★★★★ 4.8 · 127 reseñas Google` + sellos `F-Gas` `RITE` + `+2.400 reparaciones`
- **CTA primario** pasa a naranja acción.
- **Teléfono** debe ser visualmente pesado, no un botón secondary discreto.
- **Body text contrast** sobre vídeo: subir a `text-white/75` y añadir `text-shadow` para asegurar 4.5:1.
- **Copy con SLA**: `Reparación de aire acondicionado en Valencia · Mismo día`.

#### 3. Sección nueva: Prueba Social
Entre `Stats` y `HowWeWork`:
- 3-4 testimonios reales (nombre + foto + barrio + ⭐ Google).
- Logos de marcas reparadas en escala de grises.
- Sellos: "Empresa habilitada F-Gas · Reg. RITE".

#### 4. Sección nueva: Antes / Después
Galería con sliders comparativos. Es el formato más persuasivo en HVAC.

#### 5. Sticky CTA flotante en móvil
Botón fijo bottom-right "Llamar ahora" (típico del sector, conversión +15-25%).

#### 6. Form Contacto — WhatsApp primario en verde
- WhatsApp como CTA primario verde (`#25D366`), no azul.
- Email como secundario.

---

### 🟡 P2 · Polish visual sectorial

#### 7. Hero — limpiar decoración
La rejilla de 80px al 4% es lenguaje SaaS. Sustituir por:
- Overlay diagonal `#0369A1 → navy` más limpio.
- Mantener el video pero con menos elementos competiendo.

#### 8. Tipografía — bajar el tono editorial
- Mantener `font-display` (Outfit) pero usar `font-700` en lugar de `font-800`.
- `tracking-[-0.015em]` en lugar de `-0.03em`.
- Resultado: más "ingeniería profesional", menos "couture".

#### 9. Stats — añadir credibilidad
- "+20 años" → añade "Desde 2005".
- "+500 clientes" → cambiar por "+2.400 reparaciones" o "4.8★ Google".
- "100% técnicos certificados" → mostrar icono del certificado F-Gas.

#### 10. Services — añadir icono por servicio
Cada servicio gana lectura visual con un icono Lucide (`Snowflake`, `Wind`, `Wrench`, `Flame`, `Gauge`, `Droplet`).

---

### 🟢 P3 · Mejoras de UX / a11y

11. **CTA secundario teléfono** en hero — borde más visible (`border-white/30`).
12. **FAQ** — el primero ya está abierto por defecto, bien. El resto podría tener teaser truncado.
13. **Mapa de zonas en Footer** — sustituir lista textual por mini-mapa SVG.
14. **Schema markup** — `LocalBusiness` ya está. Añadir `Review` aggregateRating cuando haya reseñas reales.

---

## Sistema de colores aplicado

```css
@theme inline {
  /* Mantener */
  --color-navy: #0C1B33;
  --color-navy-light: #162D50;
  --color-warm-white: #FAF8F5;
  --color-warm-gray: #F3F0EC;

  /* CAMBIAR — azul confianza saturado */
  --color-blue: #0369A1;        /* antes #6C7EB9 */
  --color-blue-light: #38BDF8;  /* antes #8998C7 */
  --color-blue-dark: #075985;   /* antes #566183 */

  /* AÑADIR — naranja acción / urgencia */
  --color-action: #EA580C;
  --color-action-light: #F97316;
  --color-action-dark: #C2410C;

  /* AÑADIR — verde WhatsApp / éxito */
  --color-whatsapp: #25D366;
  --color-whatsapp-dark: #1DA851;
  --color-success: #16A34A;
}
```

---

## Plan de implementación (lo aplicado en este pase)

| # | Cambio | Archivo | Estado |
|---|---|---|---|
| 1 | Sistema de color (tokens) | `globals.css` | ✅ |
| 2 | Variantes `action` y `whatsapp` en botón | `Button.tsx` | ✅ |
| 3 | Hero: chip urgencia + trust row + CTA naranja + contraste | `Hero.tsx` | ✅ |
| 4 | Stats: copy con verificación | `Stats.tsx` | ✅ |
| 5 | Services: icono por servicio | `Services.tsx` | ✅ |
| 6 | Sección Prueba Social (logos + sellos + reviews) | `SocialProof.tsx` (nuevo) | ✅ |
| 7 | Sección Antes/Después | `BeforeAfter.tsx` (nuevo) | ✅ |
| 8 | Sticky CTA móvil | `StickyMobileCTA.tsx` (nuevo) | ✅ |
| 9 | Contact: WhatsApp como primario verde | `Contact.tsx` | ✅ |
| 10 | Header: ajustar acento azul | `Header.tsx` | ✅ |
| 11 | Footer: mantener limpio, ajustar acentos | `Footer.tsx` | ✅ |
| 12 | Mapa de zonas SVG | `Footer.tsx` | ⏳ pendiente (P3) |

---

## Assets que necesitas proporcionar

Los placeholders quedan visibles en la página y se sustituyen por archivos reales en `/public`:

### Imprescindibles (P1)
1. **Logos de marcas reparadas** (1 SVG monocromo por marca):
   `/public/brands/daikin.svg`, `mitsubishi.svg`, `lg.svg`, `fujitsu.svg`, `panasonic.svg`, `samsung.svg`, `bosch.svg`, `hitachi.svg`, `toshiba.svg`
   *Ahora se renderizan como wordmarks tipográficos placeholder.*
2. **Sellos certificación**:
   `/public/badges/fgas.svg`, `/public/badges/rite.svg`
   *Ahora se renderizan como badges tipográficos.*
3. **Reseñas reales — 4 testimonios**:
   - Nombre real (o autorizado), barrio, foto opcional `/public/reviews/{nombre}.jpg`
   - Rating ⭐ y texto del testimonio
   - URL al perfil público de Google Reviews del negocio (para link "Ver en Google")
   - **Hoy hay 4 testimonios placeholder** con datos verosímiles que **debes sustituir por reseñas reales** antes de publicar.
4. **Antes/Después — mínimo 4 pares**:
   `/public/before-after/01-before.jpg` + `01-after.jpg` … hasta `04`
   Formato 4:3 o 1:1, ~1200×900 px.
   *Ahora se renderizan placeholders con gradiente.*

### Recomendables (P2)
5. **Foto real del equipo / técnico** para Services (sustituye `/services.jpg` actual si quieres una foto humana en lugar de herramientas).
6. **Logo Google ⭐** (puede ser texto + estrella SVG, ya implementado).

### Datos a confirmar
- **Número real de reseñas Google y rating medio** → ahora muestra `4.8 · 127 reseñas` como placeholder.
- **Número real de reparaciones** → ahora muestra `+2.400` como placeholder.
- **URL del perfil de Google Business** → `https://g.page/cooling-repair-valencia` ahora es placeholder.

---

## Checklist pre-publicación

- [ ] Sustituir testimonios placeholder por reseñas reales con permiso
- [ ] Subir 4+ pares antes/después en `/public/before-after/`
- [ ] Subir logos de marcas en `/public/brands/`
- [ ] Confirmar rating Google y nº reseñas reales en `Hero.tsx` y `SocialProof.tsx`
- [ ] Confirmar URL Google Business en CTAs de reseñas
- [ ] Test móvil 375 px y desktop 1440 px
- [ ] Test contraste hero text sobre vídeo en frame más claro
- [ ] Verificar que sticky CTA móvil no oculta contenido
- [ ] `prefers-reduced-motion` desactiva parallax y autoplay vídeo (ya implementado)
