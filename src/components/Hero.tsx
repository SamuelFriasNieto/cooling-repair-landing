"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Phone, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      const v = videoRef.current;
      if (!v) return;
      if (mq.matches) v.pause();
      else void v.play().catch(() => {});
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end overflow-hidden bg-navy"
    >
      {/* Background media with parallax. Poster acts as both LCP image and fallback if sources 404. */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
        <Image
          src="/fondo.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-center scale-[1.25]"
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/fondo.jpg"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.25]"
        >
          <source src="/hero-loop.webm" type="video/webm" />
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Stronger overlay for text legibility (contrast >= 4.5:1 on any video frame) */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/45 to-navy/85 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-20 sm:pb-28 pt-40 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-700 text-white leading-[1.05] tracking-[-0.02em] hero-text-shadow"
            >
              Reparación de Aire
              <br />
              Acondicionado en{" "}
              <span className="text-blue-light">Valencia</span>
              <br />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-7 text-[17px] text-white/80 max-w-xl leading-relaxed font-body hero-text-shadow"
            >
              Técnicos certificados con más de 20 años de experiencia.
              Diagnóstico sin compromiso, garantía por escrito y atención
              urgente en Valencia y alrededores.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4 items-center"
            >
              <Button href="#contacto" variant="action" size="lg">
                Pide presupuesto gratis
                <span className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                  <ArrowDown size={13} className="-rotate-90" />
                </span>
              </Button>
              <Button href="tel:+34615357374" variant="secondary" size="lg">
                <Phone size={16} />
                <span>(+34) 615 35 73 74</span>
              </Button>
            </motion.div>

            {/* Trust signals row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 text-white/85"
            >
              {/* Google rating */}
              <a
                href="https://g.page/cooling-repair-valencia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
                aria-label="Reseñas de Cooling Repair en Google"
              >
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      size={15}
                      className="fill-action-light text-action-light"
                    />
                  ))}
                </div>
                <span className="text-[13px] font-semibold font-display">
                  <span className="text-white">4.8</span>
                  <span className="text-white/55"> · 127 reseñas Google</span>
                </span>
              </a>

              {/* Divider */}
              <span className="hidden sm:inline-block w-px h-4 bg-white/20" />

              {/* Certifications */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/15">
                  <ShieldCheck size={13} className="text-blue-light" />
                  <span className="text-[11px] font-bold tracking-wider text-white font-display">
                    F-GAS
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/15">
                  <ShieldCheck size={13} className="text-blue-light" />
                  <span className="text-[11px] font-bold tracking-wider text-white font-display">
                    RITE
                  </span>
                </div>
              </div>

              <span className="hidden sm:inline-block w-px h-4 bg-white/20" />

              <span className="text-[13px] text-white/70 font-medium">
                <span className="text-white font-semibold">+2.400</span>{" "}
                reparaciones realizadas
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/25 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
