"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end overflow-hidden bg-navy"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
        <Image
          src="/fondo.png"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-center scale-[1.25]"
        />
      </motion.div>
      {/* Multi-layer overlay for depth (kept static, outside parallax) */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/30 to-navy/75 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-transparent pointer-events-none" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-20 sm:pb-28 pt-40 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-800 text-white leading-[1.05] tracking-[-0.03em]"
            >
              Servicio de Reparación
              <br />
              de Aire Acondicionado
              <br />
              <span className="text-blue-light">en Valencia</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 text-[17px] text-white/55 max-w-lg leading-relaxed font-body"
            >
              Profesionales certificados con más de 20 años de experiencia
              ofreciendo un servicio profesional y garantía en todos nuestros
              trabajos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="#contacto" size="lg">
                Solicitar una reparación
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowDown size={13} className="-rotate-90" />
                </span>
              </Button>
              <Button href="#contacto" variant="secondary" size="lg">
                Solicitar un presupuesto
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
