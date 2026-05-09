"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Quote } from "lucide-react";

// Replace these placeholders with real verified Google reviews before publishing.
// Each review must have written consent from the customer.
const reviews = [
  {
    name: "Carolina Castillo",
    location: "Benimaclet, Valencia",
    rating: 5,
    text:
      "Empresa solvente y de máxima competencia profesional. Desde hace muchos años Juanmi nos gestiona el mantenimiento anual de todas nuestras instalaciones de aire acondicionado en nuestras dos residencias con resultado óptimo. Soluciona cualquier cuestión que surja y la atención personal es excelente. Absolutamente recomendable y con la máxima valoración.",
    initials: " CC",
  },
  {
    name: "Andrés Ortiz",
    location: "Torrent",
    rating: 5,
    text:
      "Empresa muy seria y confiable, me repararon mi viejo aire acondicionado sin gastarme un dineral",
    initials: "AO",
  },
  {
    name: "Antonio Robledillo",
    location: "Paterna",
    rating: 5,
    text:
      "Fui afectado por la DANA y necesitaba urgentemente instalar un nuevo aire acondicionado. Me puse en contacto con Cooling Repair y la experiencia fue excelente. El servicio fue rápido, profesional y muy limpio. Gracias especialmente a Juan por su eficacia y buen trato. Muy recomendable.",
    initials: "AR",
  },
  {
    name: "Maria Monteagudo",
    location: "Ruzafa, Valencia",
    rating: 5,
    text:
      "Tuve una avería en el aire acondicionado en plena ola de calor y Cooling Repair respondió con mucha rapidez. Juan Miguel, el técnico que vino, fue puntual, muy amable y explicó claramente cuál era el problema y cómo lo iba a solucionar. En menos de una hora ya estaba todo funcionando como nuevo. Se nota que tiene experiencia y se preocupa por hacer un buen trabajo.💯 recomendado",
    initials: "MM",
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
                  5.0
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
                14 reseñas verificadas en Google
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
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
