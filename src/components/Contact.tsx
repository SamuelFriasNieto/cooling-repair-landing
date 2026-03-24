"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Loader2 } from "lucide-react";
import Button from "./Button";
import { sendContactEmail } from "@/app/actions/contact";

const WHATSAPP_NUMBER = "34615357374";
const EMAIL_ADDRESS = "cooling-repair@outlook.es";

const contactItems = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "(+34) 615 35 73 74",
    href: "tel:+34615357374",
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Valencia, España",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 8:00 - 20:00",
  },
];

type ContactFormData = {
  nombre: string;
  telefono: string;
  email: string;
  marca: string;
  problema: string;
};

const initialForm: ContactFormData = {
  nombre: "",
  telefono: "",
  email: "",
  marca: "",
  problema: "",
};

function buildWhatsAppMessage(data: ContactFormData): string {
  const lines = [
    `Hola, me gustaría solicitar una reparación.`,
    ``,
    `*Nombre:* ${data.nombre}`,
    `*Teléfono:* ${data.telefono}`,
    data.email ? `*Email:* ${data.email}` : null,
    data.marca ? `*Marca del equipo:* ${data.marca}` : null,
    ``,
    `*Problema:*`,
    data.problema,
  ];
  return lines.filter((l) => l !== null).join("\n");
}

const inputClass =
  "w-full px-4 py-3.5 rounded-xl border border-border bg-warm-white text-navy placeholder:text-slate-light/70 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all text-[14px]";

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  function update(field: keyof ContactFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (emailError) setEmailError(null);
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!form.telefono.trim()) newErrors.telefono = "El teléfono es obligatorio";
    if (!form.problema.trim()) newErrors.problema = "Describe el problema";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleWhatsApp(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!validate()) return;

    const message = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  async function handleEmail() {
    if (!validate()) return;

    setSending(true);
    setEmailError(null);

    const result = await sendContactEmail(form);

    setSending(false);

    if (result.success) {
      setSent(true);
    } else {
      setEmailError(result.error);
    }
  }

  function resetForm() {
    setForm(initialForm);
    setSent(false);
    setSending(false);
    setEmailError(null);
    setErrors({});
  }

  return (
    <section id="contacto" className="relative py-28 sm:py-36 bg-warm-white overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue/[0.02] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-blue" />
              <span className="text-blue text-[11px] font-bold tracking-[0.25em] uppercase font-display">
                Contacto
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-800 text-navy leading-[1.1] tracking-[-0.02em]">
              ¿Necesitas ayuda
              <br className="hidden sm:block" />
              con tu <span className="text-blue">aire acondicionado</span>?
            </h2>
            <p className="mt-6 text-slate text-[16px] leading-relaxed max-w-sm">
              Cuéntanos tu problema y te contactaremos lo antes posible con la
              mejor solución.
            </p>

            <div className="mt-12 space-y-5">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const Tag = item.href ? "a" : "div";
                return (
                  <Tag
                    key={i}
                    {...(item.href ? { href: item.href } : {})}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-xl bg-navy/[0.05] group-hover:bg-blue/10 flex items-center justify-center shrink-0 transition-colors">
                      <Icon size={18} className="text-navy/60 group-hover:text-blue transition-colors" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-light uppercase tracking-wider font-display">
                        {item.label}
                      </p>
                      <p className="mt-0.5 font-medium text-navy text-[15px]">
                        {item.value}
                      </p>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            {sent ? (
              <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl shadow-navy/[0.04] border border-border-light text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="font-display text-2xl font-700 text-navy mb-3">
                  Solicitud enviada
                </h3>
                <p className="text-slate text-[15px] leading-relaxed max-w-sm mx-auto mb-8">
                  Hemos recibido tu solicitud. Te contactaremos lo antes posible
                  para resolver tu problema.
                </p>
                <button
                  onClick={resetForm}
                  className="text-blue font-semibold text-[14px] hover:underline cursor-pointer font-display"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleWhatsApp}
                className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl shadow-navy/[0.04] border border-border-light"
              >
                <h3 className="font-display text-xl font-700 text-navy mb-2">
                  Solicitar una reparación
                </h3>
                <p className="text-slate text-sm mb-8">
                  Rellena el formulario y te responderemos en menos de 24h.
                </p>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-navy mb-2 font-display">
                        Nombre <span className="text-coral">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        value={form.nombre}
                        onChange={(e) => update("nombre", e.target.value)}
                        className={`${inputClass} ${errors.nombre ? "border-coral ring-2 ring-coral/20" : ""}`}
                      />
                      {errors.nombre && (
                        <p className="mt-1.5 text-coral text-[12px] font-medium">{errors.nombre}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-navy mb-2 font-display">
                        Teléfono <span className="text-coral">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Tu teléfono"
                        value={form.telefono}
                        onChange={(e) => update("telefono", e.target.value)}
                        className={`${inputClass} ${errors.telefono ? "border-coral ring-2 ring-coral/20" : ""}`}
                      />
                      {errors.telefono && (
                        <p className="mt-1.5 text-coral text-[12px] font-medium">{errors.telefono}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-navy mb-2 font-display">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.com (opcional)"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-navy mb-2 font-display">
                      Marca del equipo
                    </label>
                    <select
                      value={form.marca}
                      onChange={(e) => update("marca", e.target.value)}
                      className={`${inputClass} appearance-none`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="">Selecciona una marca (opcional)</option>
                      <option>Daikin</option>
                      <option>Fujitsu</option>
                      <option>LG</option>
                      <option>Samsung</option>
                      <option>Panasonic</option>
                      <option>Bosch</option>
                      <option>Otra</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-navy mb-2 font-display">
                      Describe el problema <span className="text-coral">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Cuéntanos qué le ocurre a tu aire acondicionado..."
                      value={form.problema}
                      onChange={(e) => update("problema", e.target.value)}
                      className={`${inputClass} resize-none ${errors.problema ? "border-coral ring-2 ring-coral/20" : ""}`}
                    />
                    {errors.problema && (
                      <p className="mt-1.5 text-coral text-[12px] font-medium">{errors.problema}</p>
                    )}
                  </div>

                  {emailError && (
                    <div className="bg-coral/10 text-coral text-[13px] font-medium px-4 py-3 rounded-xl">
                      {emailError}
                    </div>
                  )}

                  {/* Two send options */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Button type="submit" size="lg" className="w-full rounded-xl">
                      <MessageCircle size={18} />
                      <span>WhatsApp</span>
                    </Button>
                    <Button
                      type="button"
                      variant="dark"
                      size="lg"
                      className="w-full rounded-xl"
                      onClick={handleEmail}
                      disabled={sending}
                    >
                      {sending ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <Mail size={18} />
                      )}
                      <span>{sending ? "Enviando..." : "Email"}</span>
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
