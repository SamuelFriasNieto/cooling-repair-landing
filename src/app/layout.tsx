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

export const metadata: Metadata = {
  title: "Reparación de aire acondicionado en Valencia | Cooling Repair",
  description:
    "Servicio de reparación y mantenimiento de aire acondicionado en Valencia con técnicos especializados y más de 20 años de experiencia para empresas y particulares.",
  keywords: [
    "reparación aire acondicionado",
    "Valencia",
    "climatización",
    "aire acondicionado split",
    "mantenimiento",
  ],
  verification: {
    google: "1jYpBmRmeF10L2aydE4rzpf6C4oGYAE2jmgbU52PcdA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
