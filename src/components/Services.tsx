"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  X,
  Snowflake,
  Wind,
  AirVent,
  Thermometer,
  Layers,
  Gauge,
  Sparkles,
  Flame,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

type Service = {
  title: string;
  tag: string | null;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Reparación de Aire Acondicionado Split",
    tag: "Más solicitado",
    icon: Snowflake,
    description:
      "Diagnóstico y reparación de averías en equipos split domésticos. Solucionamos problemas de enfriamiento, ruidos, fugas de gas y fallos eléctricos en todas las marcas del mercado.",
  },
  {
    title: "Sistema de Climatización por Zonas",
    tag: null,
    icon: Layers,
    description:
      "Instalación, configuración y reparación de sistemas de climatización multizona. Optimizamos el rendimiento de cada zona para un confort uniforme en todo el espacio.",
  },
  {
    title: "Reparación de Aire Acondicionado Conductos",
    tag: null,
    icon: Wind,
    description:
      "Servicio especializado en sistemas de conductos ocultos. Reparamos fugas, problemas de distribución de aire y fallos en la unidad central de forma rápida y limpia.",
  },
  {
    title: "Reparación de Sistemas de Aerotermia",
    tag: null,
    icon: Thermometer,
    description:
      "Mantenimiento y reparación de bombas de calor aerotérmicas. Garantizamos el correcto funcionamiento tanto en modo calefacción como refrigeración y ACS.",
  },
  {
    title: "Reparación de Aire Acondicionado Multisplit",
    tag: null,
    icon: AirVent,
    description:
      "Reparación de sistemas multisplit para múltiples estancias. Diagnosticamos y solucionamos problemas en la unidad exterior y en cada una de las unidades interiores.",
  },
  {
    title: "Carga de Gas Refrigerante",
    tag: null,
    icon: Gauge,
    description:
      "Recarga y detección de fugas de gas refrigerante con equipos de última generación. Utilizamos gases ecológicos y certificados según la normativa vigente.",
  },
  {
    title: "Mantenimiento de Aire Acondicionado",
    tag: "Preventivo",
    icon: Sparkles,
    description:
      "Mantenimiento preventivo para alargar la vida útil de tu equipo. Limpieza de filtros, revisión de presiones, comprobación eléctrica y desinfección antibacteriana.",
  },
  {
    title: "Reparación de Sistemas de Calefacción",
    tag: null,
    icon: Flame,
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
  service: Service;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = service.icon;
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
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
              isOpen
                ? "bg-blue text-white"
                : "bg-warm-gray text-slate group-hover:bg-blue/10 group-hover:text-blue"
            }`}
          >
            <Icon size={18} strokeWidth={1.8} />
          </div>
          <span className="text-[11px] font-bold text-slate-light font-display tabular-nums w-6 hidden sm:inline-block">
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

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
        aria-hidden={!isOpen}
      >
        <p className="pl-14 sm:pl-[5.5rem] pr-14 pb-6 text-slate text-[15px] leading-[1.7]">
          {service.description}
        </p>
      </motion.div>
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

            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-700 text-navy leading-[1.1] tracking-[-0.015em]">
              Todo lo que tu Aire
              <br className="hidden sm:block" />
              Acondicionado{" "}
              <span className="text-blue">Necesita</span>
            </h2>

            <p className="mt-6 text-slate text-[16px] leading-relaxed max-w-sm">
              Ofrecemos soluciones profesionales para mantener tu sistema de
              climatización en perfecto estado durante todo el año.
            </p>

            <div className="relative w-full max-w-[420px] aspect-[4/5] mt-10 rounded-2xl overflow-hidden border border-border-light shadow-xl shadow-navy/[0.04]">
              <Image
                src="/services.jpg"
                alt="Herramientas profesionales de reparación de aire acondicionado"
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 100vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right column – expandable service list */}
          <div className="lg:col-span-7 self-center">
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
