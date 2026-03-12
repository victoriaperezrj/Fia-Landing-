"use client";

import { Reveal } from "@/components/motion/Reveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#8ac6ff22] bg-[#050a14] px-4 sm:px-6">
      <div className="mx-auto max-w-7xl pt-14 md:pt-[4.5rem]">
        <Reveal>
          <div className="mb-11 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1f78ce] to-[#6ec0ff]">
                  <span className="text-sm font-black text-white">FIA</span>
                </div>
                <div className="leading-none">
                  <span className="block text-base font-semibold text-white">FIA</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8fd2ff]">Finanzas Intelligence Academy</span>
                </div>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-[var(--text-soft)]">
                Formación en finanzas e inversiones para operar con criterio en el mercado argentino.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">Navegación</h4>
              <ul className="space-y-2.5 text-sm text-[var(--text-mid)]">
                {[
                  { label: "Inicio", href: "#inicio" },
                  { label: "Sobre FIA", href: "#sobre-fia" },
                  { label: "Cursos", href: "#cursos" },
                  { label: "Profesores", href: "#profesores" },
                  { label: "Preguntas frecuentes", href: "#faq" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition-colors duration-200 hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">Contacto</h4>
              <a
                href="https://instagram.com/academiafiaok"
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-4 inline-flex items-center gap-3"
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  if (typeof (window as any).fbq === "function") {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (window as any).fbq("trackCustom", "InstagramClick", { page: window.location.pathname });
                  }
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#4f5bd5] via-[#d62976] to-[#f77737] transition-transform duration-300 group-hover:scale-105">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white transition-colors group-hover:text-[#9cd8ff]">@academiafiaok</div>
                  <div className="text-xs text-[var(--text-soft)]">Instagram</div>
                </div>
              </a>
              <p className="max-w-xs text-sm leading-relaxed text-[var(--text-soft)]">
                Seguinos y escribinos para más información sobre programas e inscripciones.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/8 py-5 sm:flex-row">
          <p className="text-center text-xs text-[var(--text-soft)] sm:text-left">
            © {new Date().getFullYear()} FIA - Finanzas Intelligence Academy. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[var(--text-soft)]">Mercado de Capitales Argentino</p>
        </div>
      </div>

      <div className="border-t border-white/6 py-5">
        <div className="mx-auto max-w-7xl">
          <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-[var(--text-soft)]">
            <span className="font-semibold uppercase tracking-[0.1em] text-[var(--text-mid)]">Contenido educativo.</span>{" "}
            FIA no brinda recomendaciones de inversión personalizadas. Invertir implica riesgos y cada decisión es responsabilidad del inversor.
          </p>
        </div>
      </div>
    </footer>
  );
}
