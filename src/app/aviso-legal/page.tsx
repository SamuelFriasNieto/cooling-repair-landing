import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso Legal | Cooling Repair",
  description:
    "Aviso legal de Cooling Repair S.L. — Información de la empresa según la Ley 34/2002 (LSSI-CE).",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegal() {
  return (
    <>
      <Header />
      <main className="bg-warm-white">
        <section className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 pt-40 pb-24">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-800 text-navy leading-[1.1] tracking-[-0.02em] mb-10">
            Aviso Legal
          </h1>

          <div className="prose-content text-slate text-[15px] leading-[1.8] space-y-6">
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
              Servicios de la Sociedad de la Información y de Comercio Electrónico
              (LSSI-CE), se informa a los usuarios de los siguientes datos:
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              1. Datos identificativos del titular
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Denominación social:</strong> Cooling Repair S.L.
              </li>
              <li>
                <strong>CIF:</strong> B56965148
              </li>
              <li>
                <strong>Domicilio social:</strong> Calle Ballester 5-A, Bajo 1
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
              <li>
                <strong>Datos registrales:</strong> Inscrita en el Registro Mercantil
                de Valencia.
              </li>
            </ul>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              2. Objeto y ámbito de aplicación
            </h2>
            <p>
              El presente aviso legal regula el uso del sitio web{" "}
              <a href="https://www.cooling-repair.com" className="text-blue hover:underline">
                www.cooling-repair.com
              </a>{" "}
              (en adelante, «el sitio web»), del que es titular Cooling Repair S.L.
              La navegación por el sitio atribuye la condición de usuario e implica
              la aceptación plena de las disposiciones incluidas en este aviso legal.
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              3. Condiciones de uso
            </h2>
            <p>
              El usuario se compromete a utilizar el sitio web, sus contenidos y
              servicios conforme a la ley, las buenas costumbres y el orden público.
              Asimismo, se compromete a no utilizar el sitio web con fines o efectos
              ilícitos, contrarios al contenido del presente aviso legal, lesivos de
              los intereses o derechos de terceros, o que de cualquier forma puedan
              dañar, inutilizar o sobrecargar el sitio web, o impedir su normal
              utilización.
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              4. Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los contenidos del sitio web (textos, fotografías, gráficos,
              imágenes, iconos, tecnología, software, así como su diseño gráfico y
              códigos fuente) son propiedad intelectual de Cooling Repair S.L. o de
              terceros, sin que puedan entenderse cedidos al usuario ninguno de los
              derechos de explotación reconocidos por la normativa vigente en materia
              de propiedad intelectual sobre los mismos.
            </p>
            <p>
              Las marcas, nombres comerciales o signos distintivos son titularidad de
              Cooling Repair S.L. o de terceros, sin que pueda entenderse que el
              acceso al sitio web atribuya ningún derecho sobre los mismos.
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              5. Exención de responsabilidad
            </h2>
            <p>
              Cooling Repair S.L. no se responsabiliza, en ningún caso, de los daños
              y perjuicios de cualquier naturaleza que pudieran ocasionar, a título
              enunciativo: errores u omisiones en los contenidos, falta de
              disponibilidad del sitio web o la transmisión de virus o programas
              maliciosos en los contenidos, a pesar de haber adoptado todas las
              medidas tecnológicas necesarias para evitarlo.
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              6. Modificaciones
            </h2>
            <p>
              Cooling Repair S.L. se reserva el derecho de efectuar sin previo aviso
              las modificaciones que considere oportunas en su sitio web, pudiendo
              cambiar, suprimir o añadir tanto los contenidos y servicios que se
              presten a través del mismo como la forma en la que éstos aparezcan
              presentados o localizados.
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              7. Legislación aplicable y jurisdicción
            </h2>
            <p>
              La relación entre Cooling Repair S.L. y el usuario se regirá por la
              normativa española vigente y cualquier controversia se someterá a los
              Juzgados y Tribunales de Valencia, salvo que la ley aplicable disponga
              otra cosa.
            </p>

            <h2 className="font-display text-2xl font-700 text-navy mt-10 mb-3">
              8. Protección de datos
            </h2>
            <p>
              El tratamiento de los datos personales que el usuario facilite a través
              del sitio web se rige por nuestra{" "}
              <Link href="/politica-privacidad" className="text-blue hover:underline">
                Política de Privacidad
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
