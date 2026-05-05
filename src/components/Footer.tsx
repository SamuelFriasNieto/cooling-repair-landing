import { Mail, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
const quickLinks = [
  { label: "Nuestros servicios", href: "#servicios" },
  { label: "Ventajas", href: "#ventajas" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="h-20 relative w-full">
              <Image src="/logo-white.svg" alt="Logo" fill className="object-cover object-left" />
            </div>

            <p className="mt-5 text-[15px] text-white/40 leading-relaxed max-w-xs">
              Profesionales de sistemas de climatización dedicados a la
              reparación y montaje en toda la Comunidad Valenciana.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/25 mb-6 font-display">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group text-[14px] text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-light"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/25 mb-6 font-display">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+34605097374"
                className="flex items-center gap-3 text-[14px] text-white/50 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center">
                  <Phone size={14} className="text-white/50" />
                </div>
                (+34) 605 09 73 74
              </a>
              <a
                href="mailto:cooling-repair@outlook.es"
                className="flex items-center gap-3 text-[14px] text-white/50 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center">
                  <Mail size={14} className="text-white/50" />
                </div>
                cooling-repair@outlook.es
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/25 font-medium">
            &copy; {new Date().getFullYear()} Cooling Repair S.L. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-8 text-[12px] text-white/25 font-medium">
            <a href="#" className="hover:text-white/50 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
