"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Code2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "KreaciaLabs",
      role: "Software Developer",
      period: "2025 – Actual",
      location: "Remoto, México",
      description: [
        "Desarrollo de scrapers en Python para la extracción automatizada de noticias y contenido multimedia.",
        "Normalización y procesamiento de datos para garantizar la integridad en la plataforma Brif.",
        "Automatización de procesos de carga diaria, optimizando el acceso a la información.",
        "Análisis de estructuras DOM para mantener la estabilidad de los sistemas de extracción."
      ],
      tech: ["Python", "Automation", "Scraping", "Data Processing"]
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-4 bg-[#0a0a0a] text-white relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Título de la sección con animación */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px bg-emerald-500/50 flex-1" />
          <h2 className="text-3xl font-mono font-bold text-emerald-400 flex items-center gap-2">
            <Briefcase className="w-6 h-6" /> EXPERIENCIA
          </h2>
          <div className="h-px bg-emerald-500/50 flex-1" />
        </motion.div>

        {/* Lista de Experiencias */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-8 border-l border-emerald-500/20"
            >
              {/* Decoración de la línea de tiempo */}
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
              
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <span className="flex items-center gap-2 text-gray-400 text-sm mt-1 sm:mt-0">
                  <Calendar className="w-4 h-4" /> {exp.period}
                </span>
              </div>
              
              <h4 className="text-xl text-emerald-300 mb-4">{exp.company} <span className="text-gray-500 text-sm">| {exp.location}</span></h4>
              
              <ul className="space-y-2 mb-6 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500/50 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Etiquetas de Tecnologías */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-300 flex items-center gap-1">
                    <Code2 className="w-3 h-3" /> {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}