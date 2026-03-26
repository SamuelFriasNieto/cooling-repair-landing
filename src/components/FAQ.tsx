"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto cuesta reparar un aire acondicionado?",
    answer:
      "El coste de la reparación depende del tipo de avería y el modelo del equipo. Ofrecemos un diagnóstico inicial para evaluar el problema y proporcionarte un presupuesto detallado sin compromiso antes de realizar cualquier trabajo. Nuestros precios son competitivos y transparentes.",
  },
  {
    question: "¿Cuánto tarda la reparación del aire acondicionado?",
    answer:
      "La mayoría de las reparaciones se completan en el mismo día de la visita. Para averías más complejas o que requieran piezas específicas, el plazo puede ser de 24 a 48 horas. Siempre te informamos del tiempo estimado antes de comenzar el trabajo.",
  },
  {
    question: "¿Qué tipos de aire acondicionado reparáis?",
    answer:
      "Reparamos todo tipo de sistemas de climatización: split, multisplit, conductos, cassette, suelo-techo, sistemas VRV/VRF, bombas de calor y aerotermia. También realizamos mantenimiento preventivo y cargas de gas refrigerante para todo tipo de equipos.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`rounded-2xl transition-all duration-300 ${
        isOpen
          ? "bg-white shadow-lg shadow-navy/[0.04] border border-blue/10"
          : "bg-transparent border border-transparent hover:bg-white/60"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 sm:p-7 text-left group"
      >
        <div className="flex items-center gap-5">
          <span
            className={`text-[13px] font-bold font-display tabular-nums transition-colors ${
              isOpen ? "text-blue" : "text-slate-light"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={`font-display font-600 transition-colors text-[16px] sm:text-[17px] ${
              isOpen
                ? "text-navy"
                : "text-navy/80 group-hover:text-navy"
            }`}
          >
            {faq.question}
          </h3>
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
            isOpen
              ? "bg-blue text-white rotate-0"
              : "bg-warm-gray text-slate group-hover:bg-blue/10 group-hover:text-blue"
          }`}
        >
          {isOpen ? <X size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 sm:px-7 pb-7 pl-[4.25rem] text-slate text-[15px] leading-[1.7]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 sm:py-36 bg-warm-gray overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue/[0.03] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-blue" />
              <span className="text-blue text-[11px] font-bold tracking-[0.25em] uppercase font-display">
                FAQ
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-800 text-navy leading-[1.1] tracking-[-0.02em]">
              Preguntas
              <br />
              <span className="text-blue">Frecuentes</span>
            </h2>
            <p className="mt-6 text-slate text-[16px] leading-relaxed">
              Resolvemos las dudas más comunes sobre nuestros servicios de
              reparación e instalación.
            </p>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
