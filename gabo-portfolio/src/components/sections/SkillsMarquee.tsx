"use client";
import { motion } from "framer-motion";

const skills = [
  "PYTHON", "REACT", "NEXT.JS", "DATA SCRAPING", "AUTOMATION", 
  "TYPESCRIPT", "TAILWIND", "NODE.JS", "SQL", "FRAMER MOTION", 
  "GIT", "LARAVEL", "DJANGO"
];

export default function SkillsMarquee() {
  return (
    <section className="py-8 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 120 }}
          className="flex gap-3 items-center min-w-max"
        >
          {[...skills, ...skills, ...skills, ...skills,].map((skill, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-4xl md:text-6xl font-bold text-transparent stroke-text hover:text-emerald-500 transition-colors duration-300 cursor-default font-mono">
                {skill}
              </span>
              <span className="w-3 h-3 bg-emerald-500 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Estilo para el texto hueco (Stroke) */}
      <style jsx>{`
        .stroke-text {
          /* Hollow text with stable outline (avoids -webkit-text-stroke glitches on some glyphs) */
          -webkit-text-fill-color: transparent;
          text-shadow:
            1px 0 rgba(255, 255, 255, 0.2),
            -1px 0 rgba(255, 255, 255, 0.2),
            0 1px rgba(255, 255, 255, 0.2),
            0 -1px rgba(255, 255, 255, 0.2);
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }
        .stroke-text:hover {
          text-shadow: none;
          -webkit-text-fill-color: currentColor;
        }
      `}</style>
    </section>
  );
}