"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "34615357374";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() {
      // Show after the user has scrolled past the hero (~70% of first viewport)
      const past = window.scrollY > window.innerHeight * 0.7;

      // Hide when the contact form is in view to avoid covering it
      const contact = document.getElementById("contacto");
      let nearContact = false;
      if (contact) {
        const rect = contact.getBoundingClientRect();
        nearContact = rect.top < window.innerHeight && rect.bottom > 0;
      }

      // Hide near footer
      const footer = document.querySelector("footer");
      let nearFooter = false;
      if (footer) {
        const rect = footer.getBoundingClientRect();
        nearFooter = rect.top < window.innerHeight - 80;
      }

      setVisible(past && !nearContact && !nearFooter);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 pointer-events-none"
        >
          <div className="pointer-events-auto flex gap-2 p-1.5 rounded-full bg-navy/95 backdrop-blur-md shadow-2xl shadow-navy/30 border border-white/10">
            <a
              href="tel:+34615357374"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-action text-white font-semibold text-[14px] font-display active:scale-[0.97] transition-transform"
              aria-label="Llamar a Cooling Repair"
            >
              <Phone size={16} strokeWidth={2.2} />
              <span>Llamar ahora</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-whatsapp text-white font-semibold text-[14px] font-display active:scale-[0.97] transition-transform"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle size={16} strokeWidth={2.2} />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
