"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, Wrench, ThumbsUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Contáctanos",
    description:
      "Cuéntanos cuál es el problema. Dinos la marca de tu aire acondicionado y qué problemas tiene para que podamos ayudarte de la mejor manera.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Elige una Cita",
    description:
      "Selecciona el día y la hora que mejor te convenga. Nos adaptamos a tu horario para causarte las mínimas molestias.",
    icon: CalendarCheck,
  },
  {
    number: "03",
    title: "Reparación",
    description:
      "Nuestro técnico certificado acudirá a tu domicilio con todas las herramientas y repuestos necesarios para solucionar la avería.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "¡Listo!",
    description:
      "Tu aire acondicionado funcionará como nuevo. Te ofrecemos garantía en todas nuestras reparaciones para tu tranquilidad.",
    icon: ThumbsUp,
  },
];

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="relative py-28 sm:py-36 bg-warm-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue/[0.02] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-blue" />
              <span className="text-blue text-[11px] font-bold tracking-[0.25em] uppercase font-display">
                Cómo Trabajamos
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-700 text-navy leading-[1.1] tracking-[-0.015em]">
              De la Avería a la Solución
              <br className="hidden sm:block" />
              en <span className="text-blue">Pocos Pasos</span>
            </h2>
            <p className="mt-6 text-slate text-[16px] leading-relaxed max-w-md">
              Nuestro proceso está pensado para diagnosticar y solucionar
              cualquier avería de forma rápida y profesional.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-border-light hover:border-blue/20 hover:shadow-xl hover:shadow-blue/[0.06] transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Step number watermark */}
                <span className="absolute -top-2 -right-1 text-[7rem] font-display font-900 text-navy/[0.03] group-hover:text-blue/[0.06] transition-colors duration-500 leading-none select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative w-12 h-12 rounded-xl bg-navy group-hover:bg-blue flex items-center justify-center mb-7 transition-colors duration-500">
                  <Icon
                    size={20}
                    className="text-white"
                    strokeWidth={1.8}
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-blue/0 group-hover:bg-blue/20 blur-xl transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-[11px] font-bold text-blue font-display tracking-wider">
                      Paso {step.number}
                    </span>
                    {i < steps.length - 1 && (
                      <span className="hidden lg:block w-4 h-px bg-border" />
                    )}
                  </div>
                  <h3 className="font-display font-700 text-navy text-lg mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-slate text-[14px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
