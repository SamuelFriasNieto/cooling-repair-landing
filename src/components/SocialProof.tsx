"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Quote } from "lucide-react";

// Replace these placeholders with real verified Google reviews before publishing.
// Each review must have written consent from the customer.
const reviews = [
  {
    name: "María G.",
    location: "Benimaclet, Valencia",
    rating: 5,
    text:
      "Vinieron el mismo día, detectaron la fuga de gas y dejaron el aire perfecto. Muy profesionales y limpios. Sin sorpresas en el presupuesto.",
    initials: "MG",
  },
  {
    name: "Javier R.",
    location: "Torrent",
    rating: 5,
    text:
      "Llamé un sábado por la tarde con 35 grados en casa y vinieron el lunes a primera hora. Repararon el split y me explicaron todo lo que habían hecho.",
    initials: "JR",
  },
  {
    name: "Comunidad El Pilar",
    location: "Paterna",
    rating: 5,
    text:
      "Llevan el mantenimiento de los conductos del edificio desde hace 3 años. Muy serios con la facturación y el certificado RITE.",
    initials: "CP",
  },
  {
    name: "Lucía M.",
    location: "Ruzafa, Valencia",
    rating: 5,
    text:
      "Otro técnico me había dicho que necesitaba cambiar la unidad entera. Cooling Repair detectó que era la placa, la cambió y ahorré 1.200 €.",
    initials: "LM",
  },
];

// Brand wordmarks (placeholder text-only). Replace with /public/brands/*.svg files when available.
const brands = [
  "Daikin",
  "Mitsubishi",
  "LG",
  "Fujitsu",
  "Panasonic",
  "Samsung",
  "Bosch",
  "Hitachi",
  "Toshiba",
];

export default function SocialProof() {
  return (
    <section
      id="reseñas"
      className="relative py-24 sm:py-32 bg-warm-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue/[0.03] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-blue" />
              <span className="text-blue text-[11px] font-bold tracking-[0.25em] uppercase font-display">
                Lo que dicen nuestros clientes
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-700 text-navy leading-[1.1] tracking-[-0.015em]">
              Más de 2.400 reparaciones,
              <br className="hidden sm:block" /> avaladas en{" "}
              <span className="text-blue">Google</span>
            </h2>
          </motion.div>

          <motion.a
            href="https://g.page/cooling-repair-valencia"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex items-center gap-5 p-5 rounded-2xl bg-white border border-border-light shadow-sm hover:shadow-md hover:border-blue/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-warm-gray flex items-center justify-center shrink-0 group-hover:bg-blue/10 transition-colors">
              <span className="font-display font-700 text-navy text-xl">G</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-display font-700 text-navy text-[28px] leading-none tabular-nums">
                  4.8
                </span>
                <div className="flex" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-action text-action"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-1 text-[13px] text-slate font-medium">
                127 reseñas verificadas en Google
              </p>
            </div>
            <span className="text-[12px] font-bold uppercase tracking-wider text-blue font-display group-hover:underline">
              Ver →
            </span>
          </motion.a>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {reviews.map((review, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative bg-white rounded-2xl p-7 border border-border-light hover:shadow-lg hover:shadow-navy/[0.04] hover:border-blue/20 transition-all duration-300"
            >
              <Quote
                size={28}
                className="absolute top-6 right-6 text-blue/15"
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div
                className="flex gap-0.5 mb-4"
                aria-label={`${review.rating} estrellas`}
              >
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star
                    key={s}
                    size={15}
                    className="fill-action text-action"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="text-navy text-[14.5px] leading-[1.6] font-medium">
                “{review.text}”
              </blockquote>

              <figcaption className="mt-5 pt-5 border-t border-border-light flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center shrink-0">
                  <span className="text-[12px] font-700 font-display text-blue tabular-nums">
                    {review.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-700 text-navy font-display truncate">
                    {review.name}
                  </p>
                  <p className="text-[12px] text-slate truncate">
                    {review.location}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Brand strip + certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white border border-border-light p-7 sm:p-9"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-10">
            {/* Certifications */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue/[0.06] border border-blue/15">
                <ShieldCheck
                  size={16}
                  className="text-blue"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="text-[12px] font-700 tracking-wider text-blue-dark font-display">
                  F-GAS
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue/[0.06] border border-blue/15">
                <ShieldCheck
                  size={16}
                  className="text-blue"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="text-[12px] font-700 tracking-wider text-blue-dark font-display">
                  RITE
                </span>
              </div>
            </div>

            <span
              className="hidden lg:inline-block w-px h-10 bg-border-light"
              aria-hidden="true"
            />

            {/* Brands */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-700 tracking-[0.2em] uppercase text-slate-light font-display mb-3">
                Reparamos todas las marcas
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="font-display font-600 text-slate text-[15px] tracking-tight grayscale opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
