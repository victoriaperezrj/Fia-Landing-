"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export function CountUp({ to, suffix = "", duration = 1.4 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || started.current) return;
    started.current = true;

    // Skip animation for users who prefer reduced motion
    if (prefersReducedMotion) {
      el.textContent = `${to}${suffix}`;
      return;
    }

    const ms = duration * 1000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = Math.min((now - startTime) / ms, 1);
      const eased = 1 - (1 - elapsed) ** 3; // easeOutCubic
      // Direct DOM write — no React setState, no re-renders
      el!.textContent = `${Math.round(eased * to)}${suffix}`;
      if (elapsed < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, to, suffix, duration, prefersReducedMotion]);

  // Static initial content rendered on server/first paint
  return <span ref={ref}>{to}{suffix}</span>;
}
