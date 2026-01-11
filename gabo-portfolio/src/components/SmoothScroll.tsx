"use client";
import { useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";

function InfiniteLoopController() {
  const lenis = useLenis();
  const isJumpingRef = useRef(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!lenis) return;

    const BUFFER_PX = 80;
    const FADE_MS = 160;

    const fadeJumpTo = (target: number) => {
      if (isJumpingRef.current) return;
      isJumpingRef.current = true;

      setIsFading(true);

      window.setTimeout(() => {
        lenis.scrollTo(target, { immediate: true });

        // Deja que el browser “pinte” en la nueva posición y luego revela
        requestAnimationFrame(() => {
          setIsFading(false);
        });

        // Unlock después de terminar el fade-out
        window.setTimeout(() => {
          isJumpingRef.current = false;
        }, FADE_MS + 60);
      }, FADE_MS);
    };

    const onScroll = (e: any) => {
      if (isJumpingRef.current) return;

      const scroll = typeof e?.scroll === "number" ? e.scroll : lenis.scroll;
      const limit = typeof e?.limit === "number" ? e.limit : lenis.limit;
      const direction = typeof e?.direction === "number" ? e.direction : 0;

      if (!Number.isFinite(scroll) || !Number.isFinite(limit) || limit <= 0) return;

      // Abajo -> saltar arriba
      if (scroll >= limit - BUFFER_PX && direction >= 0) {
        fadeJumpTo(BUFFER_PX);
        return;
      }

      // Arriba -> saltar abajo
      if (scroll <= BUFFER_PX && direction <= 0) {
        fadeJumpTo(Math.max(0, limit - BUFFER_PX));
      }
    };

    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <div
      aria-hidden
      className={
        "pointer-events-none fixed inset-0 z-[9999] bg-[#0a0a0a] transition-opacity duration-200 " +
        (isFading ? "opacity-100" : "opacity-0")
      }
    />
  );
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1, // Suavidad del movimiento
      duration: 1.5, // Tiempo de frenado
      smoothWheel: true 
    }}>
      <InfiniteLoopController />
      {children}
    </ReactLenis>
  );
}