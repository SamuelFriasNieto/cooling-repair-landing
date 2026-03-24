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
  title: "Cooling Repair - Reparación de Aire Acondicionado en Valencia",
  description:
    "Profesionales certificados con más de 20 años de experiencia en reparación e instalación de aires acondicionados en Valencia. Servicio profesional y garantía.",
  keywords: [
    "reparación aire acondicionado",
    "Valencia",
    "climatización",
    "aire acondicionado split",
    "mantenimiento",
  ],
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
