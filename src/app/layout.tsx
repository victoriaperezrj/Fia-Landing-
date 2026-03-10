import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Script from "next/script";
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
        <Script id="facebook-pixel" strategy="beforeInteractive">
          {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '26184605661169036');
      fbq('track', 'PageView');
    `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=26184605661169036&ev=PageView&noscript=1" alt="" />
        </noscript>
        {children}
      </body>
    </html>
  );
}
