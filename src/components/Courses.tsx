"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

/* ── Types & data ─────────────────────────────────────────── */

type NivelColor = "light" | "mid" | "deep";

type CourseData = {
  id: number;
  title: string;
  price: string;
  priceValue: number;
  originalPrice: string;
  badge: string | null;
  description: string;
  topics: readonly string[];
  stats: readonly string[];
  nivel: string;
  nivelColor: NivelColor;
  highlight: boolean;
  icon: string;
  mpLink: string;
};

const courses: CourseData[] = [
  {
    id: 1,
    title: "Mercado para No Financieros",
    price: "$25.000",
    priceValue: 25000,
    originalPrice: "$35.000",
    badge: null,
    description:
      "El punto de partida ideal para entender cómo funciona el mercado y cómo empezar a participar.",
    topics: ["Qué es el mercado de capitales", "Tipos de inversores", "Cómo operar", "Primeros pasos"],
    stats: ["⏱ 8 horas", "📱 On demand", "📜 Certificado"],
    nivel: "Nivel Básico",
    nivelColor: "light",
    highlight: false,
    icon: "📈",
    mpLink: "https://mpago.la/2tfkasZ",
  },
  {
    id: 2,
    title: "Renta Fija y Renta Variable",
    price: "$25.000",
    priceValue: 25000,
    originalPrice: "$35.000",
    badge: null,
    description:
      "Dominá los instrumentos más usados y aprendé a estructurar carteras con lógica de riesgo/retorno.",
    topics: ["Bonos y acciones", "Instrumentos de cobertura", "Lectura de activos", "Armado de cartera"],
    stats: ["⏱ 10 horas", "📱 On demand", "📜 Certificado"],
    nivel: "Nivel Intermedio",
    nivelColor: "mid",
    highlight: false,
    icon: "💹",
    mpLink: "https://mpago.la/1Evr6aY",
  },
  {
    id: 3,
    title: "Análisis Técnico y Fundamental",
    price: "$25.000",
    priceValue: 25000,
    originalPrice: "$35.000",
    badge: null,
    description:
      "Mejorá tus decisiones de inversión con herramientas de lectura de precio, balances e indicadores clave.",
    topics: ["Ratios financieros", "Medias móviles", "Indicadores clave", "Lectura de gráficos"],
    stats: ["⏱ 10 horas", "📱 On demand", "📜 Certificado"],
    nivel: "Nivel Intermedio",
    nivelColor: "mid",
    highlight: false,
    icon: "📊",
    mpLink: "https://mpago.la/33x8w31",
  },
  {
    id: 4,
    title: "Curso Full Finanzas Inteligentes",
    price: "$75.000",
    priceValue: 75000,
    originalPrice: "$100.000",
    badge: "OFERTA LIMITADA",
    description:
      "Programa completo con contenido integrado, 4 profesores expertos y acompañamiento para aplicar todo.",
    topics: ["7 módulos completos", "14 temas en profundidad", "14 horas de contenido", "4 profesores expertos"],
    stats: ["⏱ 14 horas", "🎓 7 módulos", "👥 4 profesores"],
    nivel: "Nivel Completo",
    nivelColor: "deep",
    highlight: true,
    icon: "🏆",
    mpLink: "https://mpago.li/2a2i4Je",
  },
];

/* All nivel variants stay in the blue family */
const NIVEL_STYLES: Record<NivelColor, string> = {
  light: "border-[#60a5fa]/30 bg-[#60a5fa]/[0.1] text-[#93c5fd]",
  mid:   "border-[#3b82f6]/30 bg-[#3b82f6]/[0.1] text-[#7eb8fb]",
  deep:  "border-[#1d4ed8]/30 bg-[#1d4ed8]/[0.1] text-[#5a9cf8]",
};

function fireInitiateCheckout(course: CourseData) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq?.("track", "AddToCart", {
      content_name: course.title,
      value: course.priceValue,
      currency: "ARS",
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq?.("track", "InitiateCheckout", {
      value: course.priceValue,
      currency: "ARS",
      content_name: course.title,
    });
  } catch {
    // never block payment flow
  }
}

/* ── Card ─────────────────────────────────────────────────── */

function CourseCard({ course }: { course: CourseData }) {
  const num = String(course.id).padStart(2, "0");

  function handleEnroll() {
    fireInitiateCheckout(course);
    window.open(course.mpLink, "_blank", "noopener,noreferrer");
  }

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`card-spotlight course-card course-${course.id}${course.highlight ? " course-premium" : ""} flex h-full flex-col overflow-hidden rounded-2xl`}
      style={
        course.highlight
          ? { border: "1px solid rgba(99,160,255,0.35)", background: "#0c1830" }
          : { border: "1px solid rgba(255,255,255,0.08)", background: "#0c1830" }
      }
    >
      {/* ── Gradient header ─────────────────────────────── */}
      <div className="card-header relative h-[150px] flex-shrink-0 overflow-hidden">
        {/* Top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        {/* Dot mesh pattern */}
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <pattern
              id={`mesh-${course.id}`}
              x="0" y="0" width="22" height="22"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1" fill="white" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#mesh-${course.id})`} />
        </svg>

        {/* Watermark number */}
        <span
          className="pointer-events-none absolute -bottom-5 -right-3 select-none leading-none"
          style={{ fontSize: "9rem", opacity: 0.08, letterSpacing: "-0.04em", fontWeight: 900, color: "#FFFFFF" }}
          aria-hidden
        >
          {num}
        </span>

        {/* Top-left: course label */}
        <span className="absolute left-4 top-4 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/60">
          CURSO {num}
        </span>

        {/* Top-right: OFERTA LIMITADA badge */}
        {course.badge && (
          <span
            className="absolute right-4 top-[14px] rounded-full px-3 py-[5px] text-[0.6rem] font-black uppercase tracking-[0.14em] text-white"
            style={{ background: "#F59E0B", boxShadow: "0 4px 14px rgba(245,158,11,0.5)" }}
          >
            {course.badge}
          </span>
        )}
        {/* Bottom-left: MÁS ELEGIDO tag for highlighted course */}
        {course.highlight && (
          <span
            className="absolute bottom-3 left-4 rounded-full px-2.5 py-[3px] text-[0.55rem] font-black uppercase tracking-[0.14em]"
            style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#f59e0b" }}
          >
            ⭐ Más elegido
          </span>
        )}

        {/* Centered icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="select-none text-[2.8rem] leading-none"
            style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.55))", marginTop: "10px" }}
            aria-hidden
          >
            {course.icon}
          </span>
        </div>
      </div>

      {/* ── Card body ───────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-6">

        <h3 className="text-[1.22rem] font-bold leading-snug text-white">
          {course.title}
        </h3>

        {/* Nivel badge — blue family only */}
        <div className="mt-2">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-[3px] text-[0.67rem] font-semibold tracking-wide ${NIVEL_STYLES[course.nivelColor]}`}
          >
            {course.nivel}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[#8aa4c2]">
          {course.description}
        </p>

        {/* Stats row */}
        <div className="mt-3 flex items-center text-[0.72rem] text-[#5a7a9a]">
          {course.stats.map((stat, i) => (
            <span key={stat} className="flex items-center">
              {i > 0 && <span className="mx-2.5 text-white/10">|</span>}
              {stat}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-2">
          {course.topics.map((topic) => (
            <li key={topic} className="flex items-center gap-2.5 text-[0.9rem] text-[#7090b0]">
              <span className="h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#2882e0]" />
              {topic}
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        {/* Price + CTA */}
        <div className="mt-5 border-t border-white/[0.07] pt-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#4a6a90]">
                Inversión
              </p>
              <p className="text-xs leading-none text-[#4a6a90] line-through">
                {course.originalPrice}
              </p>
              <p className="mt-0.5 text-[2.1rem] font-extrabold leading-none text-white">
                {course.price}
              </p>
              <p className="mt-1.5 text-[0.62rem] text-[#3a5a7a]">
                ✓ Acceso inmediato · ✓ Certificado incluido · ✓ Soporte docente
              </p>
            </div>

          <motion.button
            whileHover={{ scale: 1.06, boxShadow: "0 8px 28px rgba(0,102,204,0.65)" }}
            whileTap={{ scale: 0.97 }}
            onClick={handleEnroll}
            className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#0066CC] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0077ee]"
            style={{ boxShadow: "0 4px 18px rgba(0,102,204,0.4)" }}
          >
            Inscribirme <span aria-hidden>→</span>
          </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Section ──────────────────────────────────────────────── */

export default function Courses() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).fbq("track", "ViewContent", { content_name: "cursos-fia" });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="cursos" className="section-shell overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(94,177,255,0.2),transparent_64%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center">
          <span className="section-label">Formación</span>
          <Reveal>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.04] text-white sm:text-4xl md:text-[3.2rem]">
              Nuestros <span className="text-gradient">Cursos</span>
            </h2>
          </Reveal>
          <p className="mx-auto mt-4 max-w-[58ch] text-base leading-relaxed text-[var(--text-mid)] sm:text-[1.05rem]">
            Elegí el programa que mejor se adapta a tu punto de partida y a tus objetivos de inversión.
          </p>
        </div>

        {/* Single Reveal for all 4 cards — 1 IO instead of 4 */}
        <Reveal delay={0.08}>
          <div className="mt-11 grid gap-5 sm:grid-cols-2">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </Reveal>

        <motion.p
          className="mt-10 text-center text-sm text-[var(--text-soft)]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          ¿Tenés dudas? Escribinos por{" "}
          <a
            href="https://instagram.com/academiafiaok"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#88d1ff] underline underline-offset-4 transition-opacity hover:opacity-80"
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              if (typeof (window as any).fbq === "function") {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).fbq("trackCustom", "InstagramClick", { page: window.location.pathname });
              }
            }}
          >
            Instagram
          </a>{" "}
          y te asesoramos sin cargo.
        </motion.p>
      </div>
    </section>
  );
}
