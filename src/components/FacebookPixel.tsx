"use client";

import { useEffect } from "react";

export default function FacebookPixel() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).fbq) return; // already initialized

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const n: any = function (...args: any[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    };
    (window as any).fbq = n;
    (window as any)._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    n("init", "26184605661169036");
    n("track", "PageView");
  }, []);

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=26184605661169036&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
}
