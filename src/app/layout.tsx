import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
