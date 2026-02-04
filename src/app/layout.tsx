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
  metadataBase: new URL("https://casaorbe.ai"),
  title: "Casa Orbe | Arte, Cultura y Tecnología - Guadalajara",
  description: "Casa Orbe es un espacio que genera sinergia local y global con creadores, artistas y tecnólogos. Centro de arte, cultura y tecnología en Guadalajara, México.",
  keywords: ["arte", "cultura", "tecnología", "Guadalajara", "impresión 3D", "exposiciones", "artistas", "creadores", "Casa Orbe"],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Casa Orbe | Arte, Cultura y Tecnología",
    description: "Un espacio que genera sinergia local y global con creadores, artistas y tecnólogos. Reforma 617, Centro Histórico de Guadalajara.",
    type: "website",
    locale: "es_MX",
    url: "https://casaorbe.ai",
    siteName: "Casa Orbe",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Orbe - Arte, Cultura y Tecnología en Guadalajara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Orbe | Arte, Cultura y Tecnología",
    description: "Un espacio que genera sinergia local y global con creadores, artistas y tecnólogos.",
    images: ["/og-image.jpg"],
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
