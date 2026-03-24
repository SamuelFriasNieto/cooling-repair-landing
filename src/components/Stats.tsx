"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 20,
    prefix: "+",
    suffix: "",
    label: "Años de experiencia",
    description: "Más de dos décadas resolviendo problemas de climatización",
  },
  {
    value: 500,
    prefix: "+",
    suffix: "",
    label: "Clientes satisfechos",
    description: "Hogares y negocios que confían en nuestro servicio",
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Técnicos certificados",
    description: "Todo nuestro equipo cuenta con formación oficial",
  },
];

export default function Stats() {
  return (
    <section id="ventajas" className="relative py-28 sm:py-36 bg-navy overflow-hidden noise">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "1px 80px",
            backgroundPosition: "50% 0",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-blue" />
              <span className="text-blue text-[11px] font-bold tracking-[0.25em] uppercase font-display">
                Ventajas
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-800 text-white leading-[1.1] tracking-[-0.02em]">
              Más de 20 Años Reparando
              <br className="hidden sm:block" />
              Aires Acondicionados en{" "}
              <span className="text-blue-light">Valencia</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-navy-light/50 backdrop-blur-sm p-10 sm:p-12 text-center group hover:bg-navy-light/80 transition-colors"
            >
              <div className="font-display text-[clamp(3.5rem,8vw,5.5rem)] font-800 text-white leading-none tracking-[-0.03em]">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-3 text-[13px] font-bold tracking-[0.15em] uppercase text-blue-light font-display">
                {stat.label}
              </p>
              <p className="mt-3 text-sm text-white/35 leading-relaxed max-w-[220px] mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
