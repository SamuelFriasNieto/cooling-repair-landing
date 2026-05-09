"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Button from "./Button";
import Image from "next/image";

const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Ventajas", href: "/#ventajas" },
  { label: "Proceso", href: "/#como-trabajamos" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Hero-overlay header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-0">
          <div className="flex items-center justify-center sm:justify-between h-20 lg:h-24">
            <a
              href="/"
              className="shrink-0"
              aria-label="Cooling Repair - Inicio"
            >
              <Image
                src="/logo-white.svg"
                alt="Cooling Repair — Reparación de aire acondicionado en Valencia"
                width={585}
                height={105}
                priority
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </a>

            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:+34615357374"
                className="flex items-center gap-2 text-[13px] text-white/75 hover:text-white transition-colors font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <Phone size={13} />
                </div>
                <span>(+34) 615 35 73 74</span>
              </a>
              <Button href="/#contacto" size="md">
                Solicitar una reparación
              </Button>
            </div>

            <button
              className="md:hidden text-white/90 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Sticky navbar on scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ y: -72, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -72, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border-light"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
              <div className="flex items-center justify-between h-16">
                <Image
                  src="/logo.svg"
                  alt="Cooling Repair — Reparación de aire acondicionado en Valencia"
                  width={585}
                  height={105}
                  className="h-9 w-auto"
                />

                <div className="hidden md:flex items-center gap-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-[13px] font-medium text-slate hover:text-navy transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue group-hover:w-full transition-all duration-300" />
                    </a>
                  ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                  <a
                    href="tel:+34615357374"
                    className="flex items-center gap-2 text-[13px] text-slate hover:text-blue transition-colors font-medium"
                  >
                    <Phone size={14} />
                    <span>(+34) 615 35 73 74</span>
                  </a>
                  <Button href="/#contacto" variant="dark" size="sm">
                    Contactar
                  </Button>
                </div>

                <button
                  className="md:hidden text-navy"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Menú"
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile slide-down */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`fixed inset-x-4 z-50 bg-white rounded-2xl shadow-2xl shadow-navy/20 md:hidden ${
                scrolled ? "top-20" : "top-24"
              }`}
            >
              <div className="p-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[15px] font-medium text-navy hover:text-blue py-3 px-4 rounded-xl hover:bg-warm-gray transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="border-border-light my-2" />
                <a
                  href="tel:+34615357374"
                  className="flex items-center gap-3 text-[14px] text-slate py-3 px-4"
                >
                  <Phone size={16} />
                  <span>(+34) 615 35 73 74</span>
                </a>
                <Button
                  href="/#contacto"
                  size="md"
                  className="w-full rounded-xl mt-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Solicitar una reparación
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
