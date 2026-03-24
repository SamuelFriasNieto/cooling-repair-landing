"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const services = [
  {
    title: "Reparación de Aire Acondicionado Split",
    tag: "Más solicitado",
    description:
      "Diagnóstico y reparación de averías en equipos split domésticos. Solucionamos problemas de enfriamiento, ruidos, fugas de gas y fallos eléctricos en todas las marcas del mercado.",
  },
  {
    title: "Sistema de Climatización por Zonas",
    tag: null,
    description:
      "Instalación, configuración y reparación de sistemas de climatización multizona. Optimizamos el rendimiento de cada zona para un confort uniforme en todo el espacio.",
  },
  {
    title: "Reparación de Aire Acondicionado Conductos",
    tag: null,
    description:
      "Servicio especializado en sistemas de conductos ocultos. Reparamos fugas, problemas de distribución de aire y fallos en la unidad central de forma rápida y limpia.",
  },
  {
    title: "Reparación de Sistemas de Aerotermia",
    tag: null,
    description:
      "Mantenimiento y reparación de bombas de calor aerotérmicas. Garantizamos el correcto funcionamiento tanto en modo calefacción como refrigeración y ACS.",
  },
  {
    title: "Reparación de Aire Acondicionado Multisplit",
    tag: null,
    description:
      "Reparación de sistemas multisplit para múltiples estancias. Diagnosticamos y solucionamos problemas en la unidad exterior y en cada una de las unidades interiores.",
  },
  {
    title: "Carga de Gas Refrigerante",
    tag: null,
    description:
      "Recarga y detección de fugas de gas refrigerante con equipos de última generación. Utilizamos gases ecológicos y certificados según la normativa vigente.",
  },
  {
    title: "Mantenimiento de Aire Acondicionado",
    tag: "Preventivo",
    description:
      "Mantenimiento preventivo para alargar la vida útil de tu equipo. Limpieza de filtros, revisión de presiones, comprobación eléctrica y desinfección antibacteriana.",
  },
  {
    title: "Reparación de Sistemas de Calefacción",
    tag: null,
    description:
      "Reparación de calderas, radiadores y sistemas de calefacción central. Diagnóstico completo y solución de averías para mantener tu hogar cálido en invierno.",
  },
];

function ServiceItem({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: (typeof services)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`border-b border-border first:border-t transition-colors ${
        isOpen ? "border-blue/30" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="group w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer"
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <span className="text-[11px] font-bold text-slate-light font-display tabular-nums w-6">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={`font-display font-600 transition-colors text-[15px] sm:text-[17px] ${
              isOpen ? "text-blue" : "text-navy group-hover:text-blue"
            }`}
          >
            {service.title}
          </h3>
          {service.tag && (
            <span className="hidden sm:inline-flex px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-blue/10 text-blue rounded-full">
              {service.tag}
            </span>
          )}
        </div>
        <div
          className={`ml-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
            isOpen
              ? "bg-blue text-white"
              : "bg-warm-gray text-slate group-hover:bg-blue/10 group-hover:text-blue"
          }`}
        >
          {isOpen ? (
            <X size={14} strokeWidth={2.5} />
          ) : (
            <Plus size={14} strokeWidth={2.5} />
          )}
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
            <p className="pl-10 pr-14 pb-6 text-slate text-[15px] leading-[1.7]">
              {service.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="servicios"
      className="relative py-28 sm:py-36 bg-warm-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-blue" />
              <span className="text-blue text-[11px] font-bold tracking-[0.25em] uppercase font-display">
                Nuestros Servicios
              </span>
            </div>

            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-800 text-navy leading-[1.1] tracking-[-0.02em]">
              Todo lo que tu Aire
              <br className="hidden sm:block" />
              Acondicionado{" "}
              <span className="text-blue">Necesita</span>
            </h2>

            <p className="mt-6 text-slate text-[16px] leading-relaxed max-w-sm">
              Ofrecemos soluciones profesionales para mantener tu sistema de
              climatización en perfecto estado durante todo el año.
            </p>
          </motion.div>

          {/* Right column – expandable service list */}
          <div className="lg:col-span-7">
            {services.map((service, i) => (
              <ServiceItem
                key={i}
                service={service}
                index={i}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
