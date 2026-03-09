"use client";

import { Reveal } from "@/components/motion/Reveal";

const features = [
  {
    icon: "🎯",
    title: "Comenzá al instante",
    desc: "Acceso inmediato tras el pago. Sin esperas ni fricción innecesaria.",
  },
  {
    icon: "📱",
    title: "On demand 24/7",
    desc: "Estudiá cuando y donde quieras, con control total de tu ritmo.",
  },
  {
    icon: "💬",
    title: "Soporte WhatsApp",
    desc: "Respuesta del equipo docente en menos de 24 horas.",
  },
  {
    icon: "📜",
    title: "Certificado incluido",
    desc: "Diploma de finalización al completar cada programa.",
  },
];

export default function Features() {
  return (
    <section className="section-shell py-16">
      <div className="mx-auto max-w-7xl">
        {/* Single Reveal for the whole grid — 1 IntersectionObserver instead of 4 */}
        <Reveal>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group surface-card premium-hover h-full rounded-2xl p-5 text-center sm:p-6"
              >
                <span className="mb-3 block text-3xl transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-125 sm:text-4xl">
                  {feature.icon}
                </span>
                <h3 className="text-sm font-semibold text-white sm:text-[15px]">{feature.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-soft)] sm:text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
