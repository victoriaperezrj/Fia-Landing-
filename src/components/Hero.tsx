"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/CountUp";

const stats = [
  { to: 4,  suffix: "",  label: "Profesores expertos" },
  { to: 14, suffix: "h", label: "Contenido aplicado"  },
  { to: 4,  suffix: "",  label: "Programas activos"   },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-36 pb-20">
      {/* ── Static background — no JS scroll hooks ────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(94,177,255,0.18),transparent_45%),radial-gradient(circle_at_85%_78%,rgba(74,126,209,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(130,173,245,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(130,173,245,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35" />
        {/* Breathing glow — opacity only, GPU-composited */}
        <div className="hero-glow-animate absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(94,177,255,0.18),transparent_52%)]" />
      </div>

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-4 pt-6 text-center sm:px-6 md:pt-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#79beff55] bg-[#0e1f3b9e] px-4 py-2 text-xs font-semibold tracking-[0.08em] text-[#9dd9ff] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#70cbff]" />
            Mercado de capitales argentino
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mx-auto mt-8 max-w-[15.5ch] text-balance text-[2.65rem] font-semibold leading-[0.98] text-white sm:text-[3.4rem] md:text-[4.3rem] lg:text-[5.15rem]">
            Dejá de mirar el mercado
            <br />
            <span className="text-gradient">desde afuera</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-[58ch] text-pretty text-[1.02rem] leading-relaxed text-[var(--text-mid)] sm:text-lg md:text-[1.22rem]">
            Formación real en mercado de capitales argentino, con profesionales registrados en CNV que operan activamente.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <motion.a
              href="#cursos"
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver cursos
              <span aria-hidden>→</span>
            </motion.a>
            <motion.a
              href="#sobre-fia"
              className="btn-secondary"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Conocer FIA
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3.5 sm:gap-[1.125rem]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="surface-card rounded-2xl px-4 py-5 text-center sm:px-6 sm:py-6"
              >
                <div className="text-[1.7rem] font-semibold leading-none text-gradient sm:text-[2rem]">
                  <CountUp to={stat.to} suffix={stat.suffix} duration={1.4} />
                </div>
                <div className="mt-2 text-[0.72rem] leading-tight tracking-[0.02em] text-[var(--text-soft)] sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div
            className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium text-[#93d4ff]"
            style={{
              background: "rgba(0, 102, 204, 0.15)",
              border: "1px solid rgba(0, 102, 204, 0.4)",
            }}
          >
            <span className="pulse-dot h-2 w-2 flex-shrink-0 rounded-full bg-[#ef4444]" />
            Inscripciones abiertas · Cupos limitados por cohorte
          </div>
        </Reveal>
      </div>
    </section>
  );
}
