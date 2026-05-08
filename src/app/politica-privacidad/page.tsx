import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Cooling Repair",
  description:
    "Política de privacidad de Cooling Repair S.L. — Tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "/politica-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header />
      <main className="bg-warm-white">
        <section className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 pt-40 pb-24">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-800 text-navy leading-[1.1] tracking-[-0.02em] mb-10">
            Política de Privacidad
          </h1>

          <div className="prose-content text-slate text-[15px] leading-[1.8] space-y-6">
            <p>
              En Cooling Repair S.L. nos comprometemos a proteger la privacidad y
              los datos personales de los usuarios de nuestro sitio web conforme al
              Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección
              de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              1. Responsable del tratamiento
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Identidad:</strong> Cooling Repair S.L. — CIF B56965148
              </li>
              <li>
                <strong>Dirección postal:</strong> Calle Ballester 5-A, Bajo 1
                Izquierda, 46200 Paiporta (Valencia), España
              </li>
              <li>
                <strong>Correo electrónico:</strong>{" "}
                <a
                  href="mailto:cooling-repair@outlook.es"
                  className="text-blue hover:underline"
                >
                  cooling-repair@outlook.es
                </a>
              </li>
              <li>
                <strong>Teléfono:</strong>{" "}
                <a href="tel:+34615357374" className="text-blue hover:underline">
                  (+34) 615 35 73 74
                </a>
              </li>
            </ul>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              2. Finalidad del tratamiento
            </h2>
            <p>
              Tratamos los datos personales que el usuario facilita a través del
              formulario de contacto con la finalidad de:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Atender la solicitud de información, presupuesto o reparación.</li>
              <li>
                Mantener la comunicación con el cliente o potencial cliente para la
                prestación del servicio.
              </li>
              <li>Cumplir con las obligaciones legales que sean aplicables.</li>
            </ul>
            <p>
              No se realizan decisiones automatizadas ni elaboración de perfiles con
              los datos facilitados.
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              3. Legitimación
            </h2>
            <p>
              La base legal para el tratamiento de los datos es:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                El consentimiento del usuario al cumplimentar voluntariamente el
                formulario de contacto (art. 6.1.a RGPD).
              </li>
              <li>
                La ejecución de un contrato o medidas precontractuales solicitadas
                por el interesado (art. 6.1.b RGPD).
              </li>
              <li>
                El cumplimiento de obligaciones legales aplicables al responsable
                (art. 6.1.c RGPD).
              </li>
            </ul>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              4. Conservación de los datos
            </h2>
            <p>
              Los datos se conservarán mientras se mantenga la relación comercial o
              durante los años necesarios para cumplir con las obligaciones legales.
              Una vez finalizada dicha finalidad, los datos se conservarán
              debidamente bloqueados durante los plazos de prescripción legalmente
              establecidos.
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              5. Destinatarios
            </h2>
            <p>
              Los datos no se cederán a terceros salvo obligación legal. Para el
              envío de comunicaciones por correo electrónico podemos emplear
              proveedores de servicios (encargados del tratamiento) que garantizan
              un nivel de protección adecuado, como Resend (con sede en EE.UU.,
              acogido a las Cláusulas Contractuales Tipo de la Comisión Europea).
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              6. Derechos del usuario
            </h2>
            <p>
              Cualquier persona tiene derecho a obtener confirmación sobre si
              estamos tratando datos personales que les conciernan. Las personas
              interesadas pueden ejercer los siguientes derechos:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Acceso a sus datos personales.</li>
              <li>Rectificación de los datos inexactos o incompletos.</li>
              <li>Supresión de los datos cuando ya no sean necesarios.</li>
              <li>Oposición al tratamiento de los datos.</li>
              <li>Limitación del tratamiento.</li>
              <li>Portabilidad de los datos.</li>
              <li>Retirar el consentimiento prestado en cualquier momento.</li>
            </ul>
            <p>
              Estos derechos se pueden ejercer enviando una solicitud por correo
              electrónico a{" "}
              <a
                href="mailto:cooling-repair@outlook.es"
                className="text-blue hover:underline"
              >
                cooling-repair@outlook.es
              </a>{" "}
              o por correo postal a la dirección indicada en el apartado 1,
              acompañando copia del DNI o documento equivalente.
            </p>
            <p>
              Asimismo, el usuario tiene derecho a presentar una reclamación ante la
              Agencia Española de Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline"
              >
                www.aepd.es
              </a>
              ) si considera que el tratamiento de sus datos no se ajusta a la
              normativa vigente.
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              7. Seguridad de los datos
            </h2>
            <p>
              Hemos adoptado las medidas técnicas y organizativas necesarias para
              garantizar la seguridad e integridad de los datos personales y para
              evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              8. Cookies
            </h2>
            <p>
              Este sitio web no instala cookies de seguimiento ni de publicidad. Si
              en el futuro se incorporan herramientas de analítica o publicidad que
              empleen cookies no esenciales, se solicitará el consentimiento previo
              del usuario mediante un banner de cookies y se publicará la
              correspondiente política de cookies.
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              9. Modificaciones
            </h2>
            <p>
              Cooling Repair S.L. se reserva el derecho a modificar la presente
              política para adaptarla a novedades legislativas o a las prácticas de
              su actividad. La fecha de la última actualización aparece al final de
              este documento.
            </p>

            <p className="mt-8">
              Para más información sobre las condiciones de uso del sitio, consulta
              también nuestro{" "}
              <Link href="/aviso-legal" className="text-blue hover:underline">
                Aviso Legal
              </Link>
              .
            </p>

            <p className="text-slate-light text-sm mt-12">
              Última actualización: {new Date().toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
