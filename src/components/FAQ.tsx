"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  {
    q: "¿Necesito conocimientos previos?",
    a: "No. El recorrido inicia desde cero y avanza con lógica progresiva para que ganes criterio real.",
  },
  {
    q: "¿Cómo accedo tras el pago?",
    a: "Enviás el comprobante por WhatsApp y activamos tu acceso de inmediato.",
  },
  {
    q: "¿Los cursos tienen certificado?",
    a: "Sí. Todos incluyen certificado de finalización al completar el programa.",
  },
  {
    q: "¿Puedo estudiar a mi ritmo?",
    a: "Sí, tenés acceso on-demand 24/7 para avanzar según tu agenda.",
  },
  {
    q: "¿Qué pasa si tengo dudas?",
    a: "Tenés soporte directo por WhatsApp con respuesta en menos de 24 horas.",
  },
  {
    q: "¿Por cuánto tiempo tengo acceso?",
    a: "Acceso de por vida desde la compra.",
  },
  {
    q: "¿Tiene garantía?",
    a: "Sí. Si dentro de los primeros 7 días sentís que el curso no es para vos, te devolvemos el 100% de tu inversión. Sin preguntas.",
  },
  {
    q: "¿Los precios van a subir?",
    a: "Sí. Los precios actuales son promocionales por lanzamiento. Una vez que se completen los cupos de esta cohorte, el precio aumenta.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-shell">
      <div className="section-divider mb-12 opacity-35 md:mb-16" />

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="section-label">FAQ</span>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.04] text-white sm:text-4xl md:text-[3.15rem]">
            Preguntas <span className="text-gradient">frecuentes</span>
          </h2>
        </Reveal>

        {/* Single Reveal for the entire list — 1 IO instead of 6 */}
        <Reveal delay={0.1}>
          <div className="mt-10 border-t border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div key={faq.q} className="border-b border-white/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="pr-2 text-base font-semibold text-white transition-colors hover:text-[#aadfff]">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-[#7ec8ff2d] text-[#8fd3ff]" : "bg-white/7 text-gray-400"
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-8 text-sm leading-relaxed text-[var(--text-mid)] sm:text-base">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
