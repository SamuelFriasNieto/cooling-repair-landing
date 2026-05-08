import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MessageCircle, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const SITE_URL = "https://www.cooling-repair.com";

type CityContent = {
  slug: string;
  name: string;
  postalCodes: string;
  neighborhoods: string[];
  intro: string;
  climate: string;
  demand: string;
  geo: { lat: number; lng: number };
};

const cities: Record<string, CityContent> = {
  valencia: {
    slug: "valencia",
    name: "Valencia",
    postalCodes: "46001 a 46026",
    neighborhoods: [
      "Ciutat Vella",
      "Ruzafa",
      "Benimaclet",
      "Campanar",
      "El Cabanyal",
      "Patraix",
      "Algirós",
      "Quatre Carreres",
    ],
    intro:
      "Reparamos aire acondicionado en toda la ciudad de Valencia, desde el centro histórico hasta los barrios periféricos. Nuestro servicio cubre los 19 distritos y todos los códigos postales de la capital, con desplazamiento el mismo día siempre que tengamos disponibilidad.",
    climate:
      "Valencia tiene un clima mediterráneo con veranos largos y húmedos: en julio y agosto las temperaturas máximas superan con frecuencia los 32°C y la humedad relativa se mantiene alta, lo que somete a los equipos de aire acondicionado a un trabajo continuado de muchas horas al día. Esto se traduce en averías típicas como pérdidas de gas, condensadores saturados de polvo y suciedad y bombas de condensados al límite.",
    demand:
      "El pico de avisos en Valencia se concentra entre junio y septiembre, cuando un equipo que no se ha revisado tras el invierno empieza a fallar justo en la primera ola de calor. Si tu split, multisplit o conductos no enfrían igual que el año pasado, hace ruidos extraños o gotea agua en interior, podemos diagnosticar y reparar en una sola visita.",
    geo: { lat: 39.4699, lng: -0.3763 },
  },
  torrent: {
    slug: "torrent",
    name: "Torrent",
    postalCodes: "46900",
    neighborhoods: ["El Vedat", "Parque Central", "Xenillet", "La Cotxera", "Mas del Jutge"],
    intro:
      "Servicio de reparación de aire acondicionado en Torrent y todo el área metropolitana sur. Atendemos viviendas unifamiliares en El Vedat, bloques en el centro y locales comerciales en la zona industrial.",
    climate:
      "Torrent comparte el clima mediterráneo de la comarca de l'Horta Sud, con veranos secos y calurosos. La proximidad al área metropolitana hace que los equipos trabajen muchas horas seguidas en periodos de calor extremo, especialmente en viviendas con orientación sur o sin aislamiento moderno. Las averías más frecuentes son pérdidas de gas y problemas de drenaje.",
    demand:
      "En Torrent atendemos tanto a particulares con equipos split o multisplit como a comunidades de propietarios con sistemas centralizados. Si vives en un chalet de El Vedat o en un piso del centro y necesitas un técnico que llegue rápido, llámanos al 615 35 73 74.",
    geo: { lat: 39.4365, lng: -0.4661 },
  },
  paterna: {
    slug: "paterna",
    name: "Paterna",
    postalCodes: "46980, 46988",
    neighborhoods: [
      "Centro de Paterna",
      "La Canyada",
      "La Coma",
      "Lloma Llarga",
      "Polígono Fuente del Jarro",
    ],
    intro:
      "Reparación e instalación de aire acondicionado en Paterna, con cobertura tanto en zonas residenciales como en el Polígono Fuente del Jarro y el Parque Tecnológico. Trabajamos con particulares, comunidades de vecinos y empresas.",
    climate:
      "Paterna presenta veranos especialmente exigentes para los equipos de climatización por la combinación de altas temperaturas y aire seco que llega del interior. Esto acelera el envejecimiento de los condensadores exteriores expuestos al sol directo y aumenta la probabilidad de fugas de gas en las uniones de las tuberías.",
    demand:
      "En el Polígono Fuente del Jarro y el Parque Tecnológico de Paterna atendemos contratos de mantenimiento periódico para naves industriales, oficinas y centros de datos donde la climatización es crítica para la operación. Para particulares en La Canyada o el casco urbano, ofrecemos diagnóstico, reparación y carga de gas refrigerante.",
    geo: { lat: 39.5028, lng: -0.4422 },
  },
  burjassot: {
    slug: "burjassot",
    name: "Burjassot",
    postalCodes: "46100",
    neighborhoods: ["Centro de Burjassot", "Empalme", "Camino de Liria", "300 Viviendas"],
    intro:
      "Servicio técnico de aire acondicionado en Burjassot, con experiencia en pisos antiguos del centro y en bloques modernos del entorno del Campus de Burjassot de la Universitat de València.",
    climate:
      "Burjassot, integrado en el área metropolitana de Valencia, comparte el patrón de veranos largos y calurosos. En los pisos del centro, frecuentemente con instalaciones de aire acondicionado de más de 10 años, las averías típicas son fallos de la placa electrónica, fugas de gas y bombas de condensados que dejan de funcionar.",
    demand:
      "Atendemos averías urgentes en el día siempre que llamemos en horario laboral. Si tu equipo de Burjassot ha dejado de enfriar, hace ruidos o pierde agua, te visitamos, diagnosticamos y te damos presupuesto sin compromiso antes de hacer ningún trabajo.",
    geo: { lat: 39.5095, lng: -0.4136 },
  },
  gandia: {
    slug: "gandia",
    name: "Gandía",
    postalCodes: "46700, 46701, 46702, 46730",
    neighborhoods: ["Casco Urbano", "Grau de Gandía", "Playa de Gandía", "Marxuquera", "Beniopa"],
    intro:
      "Reparación de aire acondicionado en Gandía, tanto en el casco urbano como en la zona del puerto y la playa. Trabajamos con particulares y con apartamentos turísticos que necesitan los equipos a punto en temporada alta.",
    climate:
      "El clima costero de la Safor combina temperaturas elevadas con humedad muy alta durante el verano, lo que somete a los aires acondicionados a un esfuerzo extra. La salinidad ambiental del Grau y la Playa de Gandía acelera la corrosión de las unidades exteriores: revisar y limpiar el condensador al menos una vez al año es clave para alargar su vida útil.",
    demand:
      "En Gandía vemos un repunte de avisos a partir de junio, cuando los apartamentos de playa se vuelven a abrir y los equipos llevan meses parados. Si gestionas un alquiler turístico o vives todo el año en Gandía, te ofrecemos diagnóstico y reparación rápida y, si lo necesitas, contratos de mantenimiento preventivo.",
    geo: { lat: 38.9683, lng: -0.1816 },
  },
  sagunto: {
    slug: "sagunto",
    name: "Sagunto",
    postalCodes: "46500, 46520",
    neighborhoods: ["Casco Antiguo", "Puerto de Sagunto", "Almardà", "Corinto", "Malvarrosa"],
    intro:
      "Servicio de reparación de aire acondicionado en Sagunto y el Puerto de Sagunto. Atendemos viviendas, comercios y naves industriales en toda la comarca del Camp de Morvedre.",
    climate:
      "Sagunto une el clima mediterráneo continental del casco histórico con la influencia marítima del Puerto y las playas de Almardà y Corinto. La cercanía al mar y la actividad industrial hacen que las unidades exteriores acumulen suciedad, sal y partículas con mayor rapidez que en Valencia interior, lo que reduce la eficiencia y aumenta el consumo eléctrico.",
    demand:
      "Atendemos también avisos en el polígono industrial del Puerto de Sagunto, donde la climatización de oficinas y vestuarios es esencial para la actividad diaria. Para viviendas, ofrecemos reparación de splits, multisplits y aerotermia con presupuesto cerrado y garantía por escrito.",
    geo: { lat: 39.6770, lng: -0.2731 },
  },
};

const services = [
  "Reparación de splits domésticos",
  "Reparación de multisplit",
  "Reparación de aire por conductos",
  "Carga de gas refrigerante",
  "Reparación de aerotermia",
  "Mantenimiento preventivo",
];

export function generateStaticParams() {
  return Object.keys(cities).map((ciudad) => ({ ciudad }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ciudad: string }>;
}): Promise<Metadata> {
  const { ciudad } = await params;
  const city = cities[ciudad];
  if (!city) return {};

  const title = `Reparación de aire acondicionado en ${city.name} | Cooling Repair`;
  const description = `Servicio técnico de aire acondicionado en ${city.name}: reparación, mantenimiento y carga de gas. Técnicos certificados, presupuesto sin compromiso. Llámanos al 615 35 73 74.`;

  return {
    title,
    description,
    alternates: { canonical: `/zonas/${city.slug}` },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: `${SITE_URL}/zonas/${city.slug}`,
      siteName: "Cooling Repair",
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `Cooling Repair — Reparación de aire acondicionado en ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ ciudad: string }>;
}) {
  const { ciudad } = await params;
  const city = cities[ciudad];
  if (!city) notFound();

  const otherCities = Object.values(cities).filter((c) => c.slug !== city.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/zonas/${city.slug}#service`,
    name: `Reparación de aire acondicionado en ${city.name}`,
    description: `Servicio profesional de reparación, mantenimiento y carga de gas en aire acondicionado para particulares, empresas y comunidades en ${city.name}.`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "City",
      name: city.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.geo.lat,
        longitude: city.geo.lng,
      },
    },
    serviceType: "HVAC Repair",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Zonas",
        item: `${SITE_URL}/zonas/${city.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `${SITE_URL}/zonas/${city.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="bg-warm-white">
        {/* Hero */}
        <section className="relative bg-navy overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/fondo.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              quality={95}
              className="object-cover object-center"
            />
          </div>
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/50 to-navy/85 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-transparent to-transparent pointer-events-none" />
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-40 pb-20">
            <nav aria-label="breadcrumb" className="text-[12px] text-white/40 mb-6">
              <ol className="flex items-center gap-2 font-display tracking-wider uppercase">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li className="text-white/30">/</li>
                <li>Zonas</li>
                <li className="text-white/30">/</li>
                <li className="text-white">{city.name}</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-blue-light" />
              <span className="text-blue-light text-[11px] font-bold tracking-[0.25em] uppercase font-display">
                Zona de servicio
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-800 text-white leading-[1.05] tracking-[-0.02em] max-w-4xl">
              Reparación de Aire Acondicionado
              <br />
              en <span className="text-blue-light">{city.name}</span>
            </h1>

            <p className="mt-7 text-[17px] text-white/55 max-w-2xl leading-relaxed">
              {city.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/#contacto" size="lg">
                Solicitar reparación en {city.name}
              </Button>
              <Button href="tel:+34615357374" variant="secondary" size="lg">
                <Phone size={16} />
                <span>(+34) 615 35 73 74</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Body content */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-800 text-navy leading-tight tracking-[-0.02em]">
                  Climatización en {city.name}: por qué los equipos fallan
                </h2>
                <p className="mt-5 text-slate text-[16px] leading-[1.8]">
                  {city.climate}
                </p>
              </div>

              <div>
                <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-800 text-navy leading-tight tracking-[-0.02em]">
                  Cómo trabajamos en {city.name}
                </h2>
                <p className="mt-5 text-slate text-[16px] leading-[1.8]">
                  {city.demand}
                </p>
              </div>

              <div>
                <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-800 text-navy leading-tight tracking-[-0.02em]">
                  Servicios disponibles en {city.name}
                </h2>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-3 text-slate text-[15px] leading-relaxed"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-blue mt-0.5 shrink-0"
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-800 text-navy leading-tight tracking-[-0.02em]">
                  Zonas y barrios cubiertos en {city.name}
                </h2>
                <p className="mt-5 text-slate text-[16px] leading-[1.8]">
                  Damos servicio en los códigos postales {city.postalCodes} y, en
                  particular, en barrios como{" "}
                  {city.neighborhoods.slice(0, -1).join(", ")} y{" "}
                  {city.neighborhoods.slice(-1)}. Si tu zona no aparece en la lista,
                  llámanos: cubrimos toda la Comunidad Valenciana.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 bg-white rounded-3xl p-7 shadow-xl shadow-navy/[0.04] border border-border-light">
                <h3 className="font-display text-lg font-700 text-navy mb-5">
                  Servicio en {city.name}
                </h3>
                <div className="space-y-4 text-[14px] text-slate">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-blue mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold text-slate-light uppercase tracking-wider font-display mb-1">
                        Cobertura
                      </p>
                      <p className="text-navy">{city.name} y alrededores</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-blue mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold text-slate-light uppercase tracking-wider font-display mb-1">
                        Horario
                      </p>
                      <p className="text-navy">Lun-Vie 8:00-20:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-blue mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold text-slate-light uppercase tracking-wider font-display mb-1">
                        Teléfono
                      </p>
                      <a
                        href="tel:+34615357374"
                        className="text-navy font-semibold hover:text-blue transition-colors"
                      >
                        (+34) 615 35 73 74
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-7 space-y-3">
                  <Button
                    href="/#contacto"
                    size="md"
                    className="w-full rounded-xl"
                  >
                    Solicitar presupuesto
                  </Button>
                  <Button
                    href={`https://wa.me/34615357374?text=${encodeURIComponent(
                      `Hola, necesito reparar mi aire acondicionado en ${city.name}.`
                    )}`}
                    variant="dark"
                    size="md"
                    className="w-full rounded-xl"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Other cities */}
        <section className="bg-warm-gray py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-800 text-navy leading-tight tracking-[-0.02em] mb-10">
              Otras zonas donde trabajamos
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/zonas/${c.slug}`}
                    className="group flex items-center justify-between bg-white rounded-2xl p-5 border border-border-light hover:border-blue/30 hover:shadow-lg hover:shadow-navy/[0.04] transition-all"
                  >
                    <div>
                      <p className="font-display text-navy font-700 text-[15px]">
                        {c.name}
                      </p>
                      <p className="text-slate-light text-[12px] mt-0.5">
                        Reparación de aire acondicionado
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-slate-light group-hover:text-blue group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
