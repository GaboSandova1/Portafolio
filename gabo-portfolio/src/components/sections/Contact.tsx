"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../../lib/data"; // Usamos tus datos centralizados

export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          ¿Listo para trabajar juntos?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Actualmente busco oportunidades para aportar soluciones como Full Stack Developer.
          ¡Hablemos sobre tu próximo proyecto!
        </motion.p>

        {/* Botones de Acción */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href={`mailto:${personalInfo.email}`}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg overflow-hidden border border-emerald-400/50 text-emerald-300 transition-all duration-500 hover:scale-105 hover:border-emerald-500 hover:text-black before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-1/2 before:bg-emerald-500 before:-translate-x-[110%] before:transition-transform before:duration-500 after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-1/2 after:bg-emerald-500 after:translate-x-[110%] after:transition-transform after:duration-500 hover:before:translate-x-0 hover:after:translate-x-0"
          >
            <Mail className="relative z-10 w-5 h-5" />
            <span className="relative z-10">Envíame un correo</span>
          </a>

          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/gabo-sandoval-378961394/" 
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-emerald-500/50 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            <a 
              href="https://github.com/GaboSandova1" 
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-emerald-500/50 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Footer Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/5 text-gray-600 text-sm"
        >
          <p>© {new Date().getFullYear()} Gabriel Sandoval. Creado con Next.js & Tailwind.</p>
        </motion.div>
      </div>
    </section>
  );
}