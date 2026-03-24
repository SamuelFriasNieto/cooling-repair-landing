"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactForm = {
  nombre: string;
  telefono: string;
  email: string;
  marca: string;
  problema: string;
};

type ActionResult =
  | { success: true }
  | { success: false; error: string };

export async function sendContactEmail(data: ContactForm): Promise<ActionResult> {
  if (!data.nombre.trim() || !data.telefono.trim() || !data.problema.trim()) {
    return { success: false, error: "Faltan campos obligatorios." };
  }

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "El servicio de email no está configurado." };
  }

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0C1B33; border-bottom: 2px solid #2563EB; padding-bottom: 12px;">
        Nueva solicitud de reparación
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #64748B; width: 140px;">Nombre</td>
          <td style="padding: 10px 0; color: #0C1B33;">${escapeHtml(data.nombre)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Teléfono</td>
          <td style="padding: 10px 0; color: #0C1B33;">${escapeHtml(data.telefono)}</td>
        </tr>
        ${data.email ? `
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Email</td>
          <td style="padding: 10px 0; color: #0C1B33;">${escapeHtml(data.email)}</td>
        </tr>
        ` : ""}
        ${data.marca ? `
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Marca</td>
          <td style="padding: 10px 0; color: #0C1B33;">${escapeHtml(data.marca)}</td>
        </tr>
        ` : ""}
      </table>
      <div style="margin-top: 20px; padding: 16px; background: #F8F9FC; border-radius: 8px;">
        <p style="font-weight: bold; color: #64748B; margin: 0 0 8px 0;">Problema descrito</p>
        <p style="color: #0C1B33; margin: 0; white-space: pre-wrap;">${escapeHtml(data.problema)}</p>
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.CONTACT_EMAIL ?? "cooling-repair@outlook.es",
    subject: `Nueva solicitud de reparación - ${data.nombre}`,
    html,
    replyTo: data.email || undefined,
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "No se pudo enviar el email. Inténtalo de nuevo." };
  }

  return { success: true };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
