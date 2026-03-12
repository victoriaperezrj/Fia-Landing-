"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    </svg>
  );
}

export default function Payment() {
  return (
    <section id="inscripcion" className="section-shell overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(94,177,255,0.18),transparent_66%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-lg text-center">
        <Reveal>
          <span className="section-label">Inscripción</span>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.04] text-white sm:text-4xl md:text-[3.05rem]">
            ¿Listo para <span className="text-gradient">empezar?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[var(--text-mid)] sm:text-lg">
            Elegí tu curso, realizá el pago y activá acceso inmediato.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <motion.a
            href="#cursos"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0066cc] to-[#0099ff] px-10 py-4 text-base font-bold text-white shadow-[0_12px_28px_rgba(0,102,204,0.38)] sm:px-12 sm:py-5"
          >
            Ver cursos y elegir el tuyo <span aria-hidden>→</span>
          </motion.a>
        </Reveal>

        <Reveal delay={0.22}>
          <motion.a
            href="https://wa.me/5426646595978"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, opacity: 0.85 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-[#5aaf7a] transition-opacity"
          >
            <WhatsAppIcon />
            ¿Tenés dudas? Consultanos por WhatsApp
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
