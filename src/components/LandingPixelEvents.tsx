"use client";

import { useEffect } from "react";

export default function LandingPixelEvents() {
  useEffect(() => {
    // ── Scroll depth ─────────────────────────────────────────
    const fired = new Set<number>();

    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = (scrolled / total) * 100;

      for (const threshold of [25, 50, 75, 100]) {
        if (pct >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (typeof (window as any).fbq === "function") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).fbq("trackCustom", "ScrollDepth", { percentage: threshold });
          }
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Time on page ─────────────────────────────────────────
    const t30 = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof (window as any).fbq === "function") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).fbq("trackCustom", "TimeOnPage", { seconds: 30 });
      }
    }, 30000);

    const t60 = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof (window as any).fbq === "function") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).fbq("trackCustom", "TimeOnPage", { seconds: 60 });
      }
    }, 60000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t30);
      clearTimeout(t60);
    };
  }, []);

  return null;
}
