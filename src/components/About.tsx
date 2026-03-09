"use client";

import { Reveal } from "@/components/motion/Reveal";

const features = [
  {
    icon: "🎓",
    title: "Profesores del mercado real",
    desc: "Docentes que operan activamente en el mercado de capitales argentino.",
  },
  {
    icon: "📊",
    title: "Contenido práctico",
    desc: "Aprendizaje orientado a decisiones, con instrumentos y escenarios reales.",
  },
  {
    icon: "⚡",
    title: "A tu ritmo",
    desc: "Accedé al material cuando quieras y avanzá según tu disponibilidad.",
  },
  {
    icon: "🇦🇷",
    title: "Foco en Argentina",
    desc: "Formación 100% orientada al contexto local y sus oportunidades.",
  },
];

export default function About() {
  return (
    <section id="sobre-fia" className="section-shell">
      <div className="section-divider mb-12 opacity-35 md:mb-16" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column — one Reveal */}
        <Reveal>
          <span className="section-label">Sobre FIA</span>
          <h2 className="mt-5 max-w-[14ch] text-3xl font-semibold leading-[1.03] text-white sm:text-4xl md:text-[3.2rem]">
            Finanzas Intelligence
            <br />
            <span className="text-gradient">Academy</span>
          </h2>
          <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-[var(--text-mid)] sm:text-[1.08rem]">
            FIA es una academia especializada en educación financiera y mercado de capitales.
            Enseñamos desde experiencia real, no desde teoría aislada.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-soft)] sm:text-base">
            Diseñamos programas que van desde fundamentos hasta estrategia avanzada, para que pases de entender el mercado a actuar con criterio.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#cursos" className="btn-primary text-sm">
              Empezar ahora
            </a>
            <a href="#profesores" className="text-sm font-semibold text-[#93d4ff] transition-opacity hover:opacity-80">
              Conocer al equipo →
            </a>
          </div>
        </Reveal>

        {/* Right grid — one Reveal for all 4 cards instead of 4 separate ones */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group surface-card premium-hover h-full rounded-2xl p-4 sm:p-5"
              >
                <span className="mb-3 block text-2xl transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 sm:text-3xl">
                  {feature.icon}
                </span>
                <h3 className="text-xs font-semibold text-white sm:text-sm">{feature.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-soft)]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
