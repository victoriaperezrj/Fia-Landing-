"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const professors = [
  {
    name: "Daniel Rosales",
    photo: "/foto dani.png",
    instagram: "https://www.instagram.com/danielrosales.finanzas/",
    credentials: [
      "Magister en Finanzas (UCEMA)",
      "Contador Público",
      "Docente Universitario",
      "Ex Gerente Zonal Supervielle",
    ],
  },
  {
    name: "Nicolás Borra",
    photo: "/foto nico.png",
    instagram: "https://www.instagram.com/nicolasborra/",
    credentials: [
      "Asesor Financiero (CNV)",
      "Asesoría Financiera Independiente (INVIU)",
      "Analista Técnico de Mercado",
      "Diplomatura en Finanzas Inteligentes",
    ],
  },
  {
    name: "Federico Caporali",
    photo: "/foto fede.png",
    instagram: "https://www.instagram.com/caporalifinanzas/",
    credentials: [
      "Asesor Financiero (CNV)",
      "Asesoría Financiera Independiente (INVIU)",
      "Contador Público (UADE)",
      "Docente Universitario",
    ],
  },
  {
    name: "Cristian Sindoni",
    photo: "/foto cristian 2.png",
    instagram: "https://www.instagram.com/cristian_sindoni/",
    credentials: ["Magister en Finanzas (San Andrés)", "Lic. en Economía (UNRC)", "Docente Universitario"],
  },
  {
    name: "Juan Frencia",
    photo: "/foto juan frencia.jpeg",
    instagram: null,
    credentials: [
      "Master en Finanzas (Universidad Austral)",
      "Lic. en Economía (UNC)",
      "Head of Research y Educación - SJB Finanzas Expertas",
      "Inversor Profesional del Mercado de Valores (ICB)",
    ],
  },
];

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Professors() {
  return (
    <section id="profesores" className="section-shell">
      <div className="section-divider mb-12 opacity-35 md:mb-16" />

      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <span className="section-label">Equipo docente</span>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.04] text-white sm:text-4xl md:text-[3.1rem]">
            Aprendé de los <span className="text-gradient">mejores</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-base leading-relaxed text-[var(--text-mid)] sm:text-[1.05rem]">
            Todos registrados en CNV y operando activamente en el mercado argentino.
          </p>
        </Reveal>

        {/* Single Reveal for all 5 cards — 1 IO instead of 5 + 5 HoverScale wrappers */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {professors.map((professor) => (
              <article
                key={professor.name}
                className="surface-card premium-hover flex h-full flex-col items-center rounded-3xl p-6 text-center sm:p-7"
              >
                <div className="relative mb-5" style={{ width: 120, height: 120 }}>
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-[#2d8fe2] to-[#79c7ff] p-[2.5px]">
                    <div className="h-full w-full overflow-hidden rounded-full bg-[#0a1628]">
                      <Image
                        src={professor.photo}
                        alt={professor.name}
                        width={120}
                        height={120}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white">{professor.name}</h3>

                <ul className="mt-4 flex w-full flex-1 flex-col gap-1.5 text-left">
                  {professor.credentials.map((credential) => (
                    <li key={credential} className="flex items-start gap-2 text-xs text-[var(--text-mid)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8ad0ff]" />
                      {credential}
                    </li>
                  ))}
                </ul>

                {professor.instagram && (
                  <a
                    href={professor.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4f5bd5] via-[#d62976] to-[#f77737] px-4 py-2 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <InstagramIcon />
                    Instagram
                  </a>
                )}
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
