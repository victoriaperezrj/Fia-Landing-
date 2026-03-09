"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="shrink-0">
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
            href="https://wa.me/5426646595978"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.04, boxShadow: "0 20px 48px rgba(37,211,102,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#22c760] to-[#159c75] px-8 py-4 text-base font-bold text-white shadow-[0_12px_28px_rgba(37,211,102,0.32)] sm:px-11 sm:py-5"
          >
            <WhatsAppIcon />
            Consultar por WhatsApp
          </motion.a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="surface-card mx-auto mt-8 flex max-w-md items-start gap-4 rounded-2xl border-[#f8ca6360] bg-[#241e0d78] p-5 text-left sm:p-6">
            <span className="mt-0.5 text-2xl">💳</span>
            <div>
              <p className="text-sm font-semibold text-white">¿Cómo activar tu acceso?</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-mid)]">
                Cuando completes el pago, enviá tu comprobante al WhatsApp{" "}
                <span className="font-semibold text-white">+54 266 465-9578</span> para habilitar acceso inmediato.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
