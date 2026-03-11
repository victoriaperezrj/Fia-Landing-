import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import FacebookPixel from "@/components/FacebookPixel";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FIA - Finanzas Intelligence Academy",
  description:
    "Aprende a invertir con confianza. Academia de finanzas con profesores expertos del mercado de capitales argentino.",
  keywords:
    "finanzas, inversiones, mercado de capitales, analisis tecnico, renta fija, renta variable, Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${sora.variable}`}>
      <body className="antialiased">
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
