"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre FIA", href: "#sobre-fia" },
  { label: "Cursos", href: "#cursos" },
  { label: "Profesores", href: "#profesores" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#1f78ce] to-[#68bfff] shadow-[0_8px_24px_rgba(46,132,216,0.3)]">
            <span className="text-sm font-black text-white">FIA</span>
          </div>
          <div className="leading-none">
            <span className="block text-base font-semibold text-white">FIA</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8fd2ff]">
              Finanzas Intelligence Academy
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-[var(--text-mid)] transition-colors duration-200 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#7ac6ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a href="#cursos" className="btn-primary text-sm">
            Ver Cursos
          </a>
        </nav>

        <button
          className="p-2 text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="mx-4 mt-2 flex flex-col gap-4 rounded-2xl border border-[#7abcf32b] bg-[#060f1ed9] p-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-1 font-medium text-[var(--text-mid)] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cursos"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-1 text-center text-sm"
            >
              Ver Cursos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
