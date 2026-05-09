"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto cuesta reparar un aire acondicionado?",
    answer:
      "El coste de la reparación depende del tipo de avería y el modelo del equipo. Ofrecemos un diagnóstico inicial para evaluar el problema y proporcionarte un presupuesto detallado sin compromiso antes de realizar cualquier trabajo. Nuestros precios son competitivos y transparentes.",
  },
  {
    question: "¿Qué tipos de aire acondicionado reparáis?",
    answer:
      "Reparamos todo tipo de sistemas de climatización: split, multisplit, conductos, cassette, suelo-techo, sistemas VRV/VRF, bombas de calor y aerotermia. También realizamos mantenimiento preventivo y cargas de gas refrigerante para todo tipo de equipos.",
  },
  {
    question: "¿Qué marcas de aire acondicionado reparáis?",
    answer:
      "Trabajamos con todas las marcas principales del mercado: Daikin, Mitsubishi, LG, Fujitsu, Panasonic, Samsung, Bosch, Hitachi, Toshiba, Hisense y muchas otras. Nuestros técnicos están formados para diagnosticar y reparar cualquier sistema sin importar el fabricante.",
  },
  {
    question: "¿Estáis certificados para manipular gases fluorados (F-Gas)?",
    answer:
      "Sí. Cumplimos la normativa F-Gas (Reglamento UE 517/2014) y RITE para la manipulación de gases refrigerantes. Todas las cargas, recuperaciones y reparaciones que afectan al circuito frigorífico las realizan técnicos habilitados con certificado oficial.",
  },
  {
    question: "¿Ofrecéis garantía en las reparaciones?",
    answer:
      "Sí, todos nuestros trabajos incluyen garantía. La duración depende del tipo de reparación y de las piezas sustituidas, y siempre se especifica por escrito en la factura. Si el mismo problema reaparece dentro del período de garantía, lo resolvemos sin coste adicional.",
  },
  {
    question: "¿Atendéis averías urgentes o el mismo día?",
    answer:
      "Sí, dentro del horario laboral (lun-vie 8:00-19:30) atendemos avisos urgentes en Valencia y municipios cercanos en el mismo día siempre que tengamos disponibilidad. Llámanos al 615 35 73 74 o escríbenos por WhatsApp para confirmar tiempo de llegada.",
  },
  {
    question: "¿Trabajáis con empresas y comunidades de propietarios?",
    answer:
      "Sí. Realizamos contratos de mantenimiento periódico para empresas, oficinas, locales comerciales y comunidades de vecinos. Adaptamos la frecuencia de revisiones y el alcance del servicio a las necesidades de cada cliente, con factura y certificado de mantenimiento.",
  },
  {
    question: "¿Por qué mi aire acondicionado no enfría?",
    answer:
      "Las causas más habituales son: filtros sucios, falta de gas refrigerante por una fuga, condensador exterior obstruido, problemas en el compresor o avería en la placa electrónica. El diagnóstico requiere medir presiones y revisar el circuito; nosotros lo hacemos en la primera visita.",
  },
  {
    question: "¿Por qué mi aire acondicionado pierde agua?",
    answer:
      "Suele deberse a un desagüe obstruido, la bomba de condensados averiada o la unidad mal nivelada. También puede aparecer agua si los filtros están sucios y forman hielo en el evaporador que luego se descongela. Es una avería habitual y la resolvemos rápidamente.",
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
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
        aria-hidden={!isOpen}
      >
        <p className="px-6 sm:px-7 pb-7 pl-[4.25rem] text-slate text-[15px] leading-[1.7]">
          {faq.answer}
        </p>
      </motion.div>
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
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-700 text-navy leading-[1.1] tracking-[-0.015em]">
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
