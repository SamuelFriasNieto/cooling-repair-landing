import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://www.cooling-repair.com";
const TITLE = "Reparación de aire acondicionado en Valencia | Cooling Repair";
const DESCRIPTION =
  "Reparación y mantenimiento de aire acondicionado en Valencia. Técnicos certificados, más de 20 años de experiencia. Presupuesto sin compromiso.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Cooling Repair",
  authors: [{ name: "Cooling Repair S.L." }],
  generator: "Next.js",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Cooling Repair",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/image-logo.png",
        width: 1200,
        height: 630,
        alt: "Cooling Repair — Reparación de aire acondicionado en Valencia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/image-logo.png"],
  },
  verification: {
    google: "1jYpBmRmeF10L2aydE4rzpf6C4oGYAE2jmgbU52PcdA",
  },
  category: "HVAC",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Cooling Repair S.L.",
  legalName: "Cooling Repair S.L.",
  taxID: "B56965148",
  vatID: "ESB56965148",
  url: SITE_URL,
  telephone: "+34615357374",
  email: "cooling-repair@outlook.es",
  image: `${SITE_URL}/image-logo.png`,
  logo: `${SITE_URL}/logo.svg`,
  priceRange: "€€",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Ballester 5-A, Bajo 1 Izquierda",
    addressLocality: "Paiporta",
    addressRegion: "Valencia",
    postalCode: "46200",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.4271,
    longitude: -0.4173,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Valencia" },
    { "@type": "City", name: "Torrent" },
    { "@type": "City", name: "Paterna" },
    { "@type": "City", name: "Burjassot" },
    { "@type": "City", name: "Gandía" },
    { "@type": "City", name: "Sagunto" },
    { "@type": "City", name: "Paiporta" },
    { "@type": "AdministrativeArea", name: "Comunidad Valenciana" },
  ],
  knowsLanguage: ["es"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de climatización",
    itemListElement: [
      "Reparación de aire acondicionado split",
      "Sistema de climatización por zonas",
      "Reparación de aire acondicionado por conductos",
      "Reparación de sistemas de aerotermia",
      "Reparación de aire acondicionado multisplit",
      "Carga de gas refrigerante",
      "Mantenimiento preventivo de aire acondicionado",
      "Reparación de sistemas de calefacción",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "AdministrativeArea", name: "Comunidad Valenciana" },
      },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta reparar un aire acondicionado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El coste de la reparación depende del tipo de avería y el modelo del equipo. Ofrecemos un diagnóstico inicial para evaluar el problema y proporcionarte un presupuesto detallado sin compromiso antes de realizar cualquier trabajo. Nuestros precios son competitivos y transparentes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda la reparación del aire acondicionado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de las reparaciones se completan en el mismo día de la visita. Para averías más complejas o que requieran piezas específicas, el plazo puede ser de 24 a 48 horas. Siempre te informamos del tiempo estimado antes de comenzar el trabajo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipos de aire acondicionado reparáis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reparamos todo tipo de sistemas de climatización: split, multisplit, conductos, cassette, suelo-techo, sistemas VRV/VRF, bombas de calor y aerotermia. También realizamos mantenimiento preventivo y cargas de gas refrigerante para todo tipo de equipos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué marcas de aire acondicionado reparáis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos con todas las marcas principales del mercado: Daikin, Mitsubishi, LG, Fujitsu, Panasonic, Samsung, Bosch, Hitachi, Toshiba, Hisense y muchas otras. Nuestros técnicos están formados para diagnosticar y reparar cualquier sistema sin importar el fabricante.",
      },
    },
    {
      "@type": "Question",
      name: "¿Estáis certificados para manipular gases fluorados (F-Gas)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cumplimos la normativa F-Gas (Reglamento UE 517/2014) y RITE para la manipulación de gases refrigerantes. Todas las cargas, recuperaciones y reparaciones que afectan al circuito frigorífico las realizan técnicos habilitados con certificado oficial.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ofrecéis garantía en las reparaciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, todos nuestros trabajos incluyen garantía. La duración depende del tipo de reparación y de las piezas sustituidas, y siempre se especifica por escrito en la factura. Si el mismo problema reaparece dentro del período de garantía, lo resolvemos sin coste adicional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atendéis averías urgentes o el mismo día?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, dentro del horario laboral (lun-vie 8:00-19:30) atendemos avisos urgentes en Valencia y municipios cercanos en el mismo día siempre que tengamos disponibilidad. Llámanos al 615 35 73 74 o escríbenos por WhatsApp para confirmar tiempo de llegada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajáis con empresas y comunidades de propietarios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Realizamos contratos de mantenimiento periódico para empresas, oficinas, locales comerciales y comunidades de vecinos. Adaptamos la frecuencia de revisiones y el alcance del servicio a las necesidades de cada cliente, con factura y certificado de mantenimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué mi aire acondicionado no enfría?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las causas más habituales son: filtros sucios, falta de gas refrigerante por una fuga, condensador exterior obstruido, problemas en el compresor o avería en la placa electrónica. El diagnóstico requiere medir presiones y revisar el circuito; nosotros lo hacemos en la primera visita.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué mi aire acondicionado pierde agua?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suele deberse a un desagüe obstruido, la bomba de condensados averiada o la unidad mal nivelada. También puede aparecer agua si los filtros están sucios y forman hielo en el evaporador que luego se descongela. Es una avería habitual y la resolvemos rápidamente.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
