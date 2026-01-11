"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVisual() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const maskWrapperRef = useRef(null);
  const overlayRectRef = useRef(null);
  const contentRef = useRef(null);
  const bgImageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // En Chrome, las máscaras SVG + pin por transform pueden dar recortes raros al hacer scrub reverse.
      // Forzamos pinType "fixed" para evitar transforms en el contenedor pineado.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%", // Longitud del scroll (ajusta si quieres que dure más o menos)
          scrub: 1,      // Suavidad (1 o 1.5 es bueno)
          pin: true,     // Mantiene el hero fijo mientras ocurre la magia
          anticipatePin: 1, // Ayuda a evitar parpadeos al iniciar el pin
          pinType: "fixed",
          invalidateOnRefresh: true,
        },
      });

      tl
      // 1. Zoom in masivo a la máscara (entrar por el texto)
      .to(maskWrapperRef.current, {
        scale: 100, // Escala exagerada para asegurar que las letras salgan de pantalla
        duration: 5,
        ease: "power2.inOut",
        transformOrigin: "50% 50%",
      })
      // 2. Desvanecer la máscara justo antes de terminar el zoom
      // En vez de ocultar el SVG (Chrome glitch), ocultamos SOLO el overlay negro.
      .to(overlayRectRef.current, {
        opacity: 0,
        duration: 1,
      }, "-=1.5") // Se solapa con el final del zoom
      // 3. Importante: Hacer que el contenedor del contenido suba suavemente
      .to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out"
      }, "-=2");
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
      
      {/* CAPA 1: FONDO (Imagen/Video) */}
      <div ref={bgImageRef} className="absolute inset-0 z-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-br from-black via-emerald-950 to-slate-950" />
      </div>

      {/* CAPA 2: MÁSCARA SVG (Texto GaboSandoval) */}
      <div ref={maskWrapperRef} className="absolute inset-0 z-10 pointer-events-none will-change-transform">
        <svg 
          ref={svgRef}
          className="absolute inset-0 w-full h-full"
          style={{ overflow: "visible" }}
          // ViewBox ajustado: 300 de ancho para texto largo, 100 de alto
          viewBox="0 0 300 100" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask
              id="hero-mask"
              // Mantener TODO en el mismo sistema de coordenadas del viewBox (300x100)
              // para que Chrome no recorte la máscara en scrub reverse.
              maskUnits="userSpaceOnUse"
              maskContentUnits="userSpaceOnUse"
              x="-10"
              y="-10"
              width="320"
              height="120"
            >
              <rect x="-10" y="-10" width="320" height="120" fill="white" />

              {/* Texto centrado en el ViewBox de 300x100 */}
              <text 
                x="150" 
                y="50" 
                fontSize="25" // Ajustado para que quepa "GaboSandoval"
                textAnchor="middle" 
                dominantBaseline="middle" 
                fill="black" 
                fontWeight="900"
                fontFamily="var(--font-hero-display), ui-sans-serif, system-ui, sans-serif"
                letterSpacing="2"
              >
                GaboSandova1
              </text>
            </mask>
          </defs>

          {/* El rectángulo negro que cubre la pantalla */}
          <rect 
            // Debe coincidir con el sistema del viewBox (y un poquito de overscan)
            x="-10" 
            y="-10" 
            width="320" 
            height="120" 
            fill="#0a0a0a" 
            mask="url(#hero-mask)" 
            ref={overlayRectRef}
          />
        </svg>
      </div>

      {/* CAPA 3: TU CONTENIDO (Título Gabriel Sandoval) */}
      <div 
        ref={contentRef} 
        className="relative z-20 flex flex-col items-center justify-center h-full opacity-0 translate-y-20 pointer-events-none"
      >
        <span className="text-emerald-400 font-mono tracking-[0.2em] mb-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
            FULL STACK DEVELOPER
        </span>
        <h2 className="text-6xl md:text-8xl font-black text-gray-50 text-center drop-shadow-2xl">
          GABRIEL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300">
            SANDOVAL
          </span>
        </h2>
        <p className="mt-6 text-gray-100 text-lg max-w-xl text-center bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
          Ingeniero en Computación y experto en automatización con Python.
        </p>
      </div>

    </div>
  );
}