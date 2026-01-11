"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    particlesJS?: (tagId: string, params: unknown) => void;
    pJSDom?: Array<unknown>;
  }
}

const PARTICLES_CONFIG = {
  particles: {
    number: {
      value: 160,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#00a36c" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 4 },
    },
    opacity: {
      value: 0.28,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 1.9,
      random: true,
      anim: { enable: false, speed: 1, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
} as const;

export default function ParticlesBackground() {
  useEffect(() => {
    let cancelled = false;
    const containerId = "particles-js";

    const init = async () => {
      await import("particles.js");
      if (cancelled) return;

      const container = document.getElementById(containerId);
      if (!container) return;

      // Clean up any previous canvas (Fast Refresh / route transitions)
      container.querySelector("canvas")?.remove();

      if (typeof window.particlesJS === "function") {
        window.particlesJS(containerId, PARTICLES_CONFIG);
      }
    };

    void init();

    return () => {
      cancelled = true;
      const container = document.getElementById(containerId);
      container?.querySelector("canvas")?.remove();
    };
  }, []);

  return (
    <div
      id="particles-js"
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10 opacity-70 mix-blend-screen"
    />
  );
}
