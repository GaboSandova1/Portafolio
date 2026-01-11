"use client";
import { motion } from "framer-motion";
import { personalInfo } from "../../lib/data"; 
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-[#0a0a0a] text-white">
      
      {/* Fondo con un degradado sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/90 z-0 pointer-events-none" />
      
      {/* Contenido Principal */}
      <div className="z-10 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-emerald-400 font-mono text-sm tracking-widest mb-4 block"
        >
          HOLA, SOY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-6"
        >
          {personalInfo.name.split(" ")[0]} <span className="text-gray-500">{personalInfo.name.split(" ")[2]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {personalInfo.role} especializado en crear experiencias digitales fluidas y escalables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a 
            href="#proyectos" 
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium overflow-hidden border border-emerald-400/50 text-emerald-300 transition-colors duration-500 hover:border-emerald-500 hover:text-black before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-1/2 before:bg-emerald-500 before:-translate-x-[110%] before:transition-transform before:duration-500 after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-1/2 after:bg-emerald-500 after:translate-x-[110%] after:transition-transform after:duration-500 hover:before:translate-x-0 hover:after:translate-x-0"
          >
            <span className="relative z-10">Ver Proyectos</span>
            <ArrowDown className="relative z-10 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Elemento decorativo de fondo (Círculo difuminado) */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10"
      />
    </section>
  );
}