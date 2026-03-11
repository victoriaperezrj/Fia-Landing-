"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WA_URL =
  "https://wa.me/5426646595978?text=Hola!%20Acabo%20de%20pagar%20un%20curso%20de%20FIA.%20Te%20env%C3%ADo%20el%20comprobante%20para%20activar%20mi%20acceso.";

const steps = [
  { icon: "✅", label: "Pagaste", done: true },
  { icon: "📤", label: "Enviá el comprobante", done: false },
  { icon: "🎓", label: "Recibís acceso en menos de 24hs", done: false },
];

export default function GraciasPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const curso = params.get("curso") || "curso-fia";
    const valor = parseFloat(params.get("valor") || "25000");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).fbq("track", "Purchase", {
        value: valor,
        currency: "ARS",
        content_name: curso,
        content_type: "product",
      });
    }
  }, []);

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] pt-28 pb-20">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(94,177,255,0.13),transparent_50%),radial-gradient(circle_at_75%_80%,rgba(74,126,209,0.13),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">

          {/* Animated checkmark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.1 }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full"
            style={{
              background: "linear-gradient(135deg, #16a34a, #22c55e)",
              boxShadow: "0 0 60px rgba(34,197,94,0.4), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <motion.svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.35 }}
            >
              <motion.path
                d="M8 22L18 32L36 14"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.35 }}
              />
            </motion.svg>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          >
            ¡Gracias por tu compra!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mt-5 max-w-[48ch] text-lg leading-relaxed text-[var(--text-mid)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          >
            Tu pago fue procesado con éxito. Ahora envianos tu comprobante por WhatsApp para activar tu acceso.
          </motion.p>

          {/* WhatsApp button */}
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
            whileHover={{ y: -2, boxShadow: "0 20px 48px rgba(37,211,102,0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-lg font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #128c3e, #25d366)",
              boxShadow: "0 12px 32px rgba(37,211,102,0.38)",
            }}
          >
            <WhatsAppIcon />
            Enviar comprobante por WhatsApp →
          </motion.a>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
            className="mt-14 rounded-3xl border border-white/[0.08] p-8"
            style={{ background: "rgba(12, 24, 46, 0.72)" }}
          >
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#8ad0ff]">
              Próximos pasos
            </p>
            <div className="flex flex-col items-center gap-0 sm:flex-row sm:items-start sm:justify-center sm:gap-0">
              {steps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center sm:flex-row sm:items-start">
                  {/* Step card */}
                  <div className="flex w-44 flex-col items-center gap-3 text-center">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                      style={{
                        background: step.done
                          ? "linear-gradient(135deg, #16a34a22, #22c55e22)"
                          : "rgba(255,255,255,0.05)",
                        border: step.done
                          ? "1px solid rgba(34,197,94,0.35)"
                          : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {step.icon}
                    </div>
                    <p className="text-sm leading-snug text-[var(--text-mid)]">
                      <span className="block font-bold text-white">{i + 1}.</span>
                      {step.label}
                    </p>
                  </div>

                  {/* Arrow between steps */}
                  {i < steps.length - 1 && (
                    <div className="my-2 flex h-8 items-center justify-center text-[#2d5a8a] sm:my-0 sm:h-14 sm:w-8">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="rotate-90 sm:rotate-0">
                        <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer hint */}
          <motion.p
            className="mt-8 text-sm text-[var(--text-soft)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            ¿Tuviste algún problema con el pago?{" "}
            <a
              href="https://instagram.com/academiafiaok"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#88d1ff] underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              Escribinos por Instagram
            </a>
          </motion.p>
        </div>
      </main>

      <Footer />
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
