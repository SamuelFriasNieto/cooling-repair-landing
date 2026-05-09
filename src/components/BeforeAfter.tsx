"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Case = {
  title: string;
  subtitle: string;
  before: string;
  after: string;
  hasAssets?: boolean;
};

const cases: Case[] = [
  {
    title: "Limpieza profunda de unidad split",
    subtitle: "Vivienda · Benimaclet, Valencia",
    before: "/before-after/01-before.jpg",
    after: "/before-after/01-after.jpg",
  },
  {
    title: "Sustitución de placa electrónica",
    subtitle: "Oficina · Torrent",
    before: "/before-after/02-before.jpg",
    after: "/before-after/02-after.jpg",
  },
  {
    title: "Reparación de unidad exterior",
    subtitle: "Comunidad · Paterna",
    before: "/before-after/03-before.jpg",
    after: "/before-after/03-after.jpg",
  },
  {
    title: "Mantenimiento de conductos",
    subtitle: "Local comercial · Ruzafa",
    before: "/before-after/04-before.jpg",
    after: "/before-after/04-after.jpg",
  },
];

function Slider({ item }: { item: Case }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  function setFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }

  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-light bg-warm-gray select-none touch-pan-y"
        onPointerDown={(e) => {
          draggingRef.current = true;
          (e.target as Element).setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (!draggingRef.current) return;
          setFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          draggingRef.current = false;
        }}
        onPointerCancel={() => {
          draggingRef.current = false;
        }}
      >
        {/* AFTER (base layer) */}
        <PlaceholderImage src={item.after} alt={`Después: ${item.title}`} variant="after" />

        {/* BEFORE (clipped layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <PlaceholderImage src={item.before} alt={`Antes: ${item.title}`} variant="before" />
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-coral/95 text-white text-[10px] font-bold tracking-wider uppercase font-display">
          Antes
        </span>
        <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-blue/95 text-white text-[10px] font-bold tracking-wider uppercase font-display">
          Después
        </span>

        {/* Slider line + handle */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="text-navy"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 15 12 9 6" transform="translate(6 0)" />
            </svg>
          </div>
        </div>

        {/* Range input for accessibility */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Comparar antes y después: ${item.title}`}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>

      <figcaption className="mt-4">
        <h3 className="font-display font-700 text-navy text-[16px]">
          {item.title}
        </h3>
        <p className="mt-1 text-[13px] text-slate">{item.subtitle}</p>
      </figcaption>
    </motion.figure>
  );
}

/**
 * Placeholder shown when /public/before-after/*.jpg files do not exist yet.
 * The <Image> sits underneath in case the real file is provided later.
 * The colored gradient block is the fallback the user sees today.
 */
function PlaceholderImage({
  src,
  alt,
  variant,
}: {
  src: string;
  alt: string;
  variant: "before" | "after";
}) {
  return (
    <div className="absolute inset-0">
      <div
        className={`absolute inset-0 ${
          variant === "before"
            ? "bg-gradient-to-br from-coral/15 via-warm-gray to-coral/30"
            : "bg-gradient-to-br from-blue/20 via-warm-white to-blue/40"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-display font-700 text-navy/40 text-[11px] tracking-[0.25em] uppercase">
            {variant === "before" ? "Foto antes" : "Foto después"}
          </p>
          <p className="mt-1.5 text-[10px] text-navy/30 font-mono break-all">
            {src}
          </p>
        </div>
      </div>
      {/* Real image renders on top if file exists. Use unoptimized to avoid build error if missing. */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
        unoptimized
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section
      id="trabajos"
      className="relative py-28 sm:py-36 bg-warm-gray overflow-hidden"
    >
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue/[0.04] rounded-full blur-3xl translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-blue" />
              <span className="text-blue text-[11px] font-bold tracking-[0.25em] uppercase font-display">
                Trabajos realizados
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-700 text-navy leading-[1.1] tracking-[-0.015em]">
              Antes y después de
              <br className="hidden sm:block" /> nuestras{" "}
              <span className="text-blue">reparaciones</span>
            </h2>
            <p className="mt-6 text-slate text-[16px] leading-relaxed max-w-md">
              Desliza para ver el resultado. Trabajos reales con autorización
              expresa de nuestros clientes.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {cases.map((c, i) => (
            <Slider key={i} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
