import type { Metadata } from "next";
import { DM_Serif_Display, Libre_Franklin } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casa Orbe | Arte, Cultura y Tecnología - Guadalajara",
  description: "Casa Orbe es un espacio que genera sinergia local y global con creadores, artistas y tecnólogos. Centro de arte, cultura y tecnología en Guadalajara, México.",
  keywords: ["arte", "cultura", "tecnología", "Guadalajara", "impresión 3D", "exposiciones", "artistas", "creadores", "Casa Orbe"],
  openGraph: {
    title: "Casa Orbe | Arte, Cultura y Tecnología",
    description: "Un espacio que genera sinergia local y global con creadores, artistas y tecnólogos.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${dmSerif.variable} ${libreFranklin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
