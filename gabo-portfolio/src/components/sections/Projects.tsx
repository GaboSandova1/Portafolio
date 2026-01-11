"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code2, Database, Layout } from "lucide-react";

const projects = [
  {
    title: "Sistema Farmacia",
    category: "Full Stack",
    description: "Gestión de inventario y control de usuarios en tiempo real.",
    tags: ["Vue.js", "Node.js", "MySQL"],
    color: "bg-[#0f172a]", // Azul oscuro
    links: { github: "#", demo: "#" },
  },
  {
    title: "Spotify Clone",
    category: "Mobile App",
    description: "Streaming de música con navegación fluida y consumo de datos.",
    tags: ["React Native", "TypeScript"],
    color: "bg-[#052e16]", // Verde oscuro
    links: { github: "#", demo: "#" },
  },
  {
    title: "Fábrica Wonka",
    category: "Web Platform",
    description: "Plataforma dinámica con módulos de gestión interna.",
    tags: ["Node.js", "SQLite"],
    color: "bg-[#271a0c]", // Marrón oscuro
    links: { github: "#", demo: "#" },
  },
  {
    title: "Gym Web App",
    category: "Management",
    description: "Control de rutinas y autenticación de usuarios.",
    tags: ["Laravel", "MySQL"],
    color: "bg-[#1e1b4b]", // Índigo oscuro
    links: { github: "#", demo: "#" },
  },
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transformamos el scroll vertical (0 a 1) en movimiento horizontal (-1% a -75%)
  // Ajusta el -75% dependiendo de cuántas tarjetas tengas.
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a]">
      {/* Contenedor Sticky: Se queda pegado mientras haces scroll */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-10 px-10">
          
          {/* Título Grande al inicio del scroll */}
          <div className="flex flex-col justify-center min-w-[400px] px-8">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter">
              Proyectos <br />
              <span className="text-emerald-500 font-mono text-4xl md:text-6xl">Seleccionados</span>
            </h2>
            <p className="text-gray-400 max-w-sm text-xl mt-4">
              Desliza para explorar mi trabajo de ingeniería y diseño.
            </p>
          </div>

          {/* Tarjetas de Proyectos */}
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative h-[60vh] w-[80vw] md:w-[600px] rounded-3xl p-8 flex flex-col justify-between border border-white/10 overflow-hidden group ${project.color}`}
            >
              {/* Contenido */}
              <div className="z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-white uppercase tracking-wider">
                    {project.category}
                  </span>
                  <Code2 className="text-white/20 w-12 h-12" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-lg">{project.description}</p>
              </div>

              {/* Tags y Links */}
              <div className="z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-emerald-300 text-sm font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="group relative inline-flex items-center justify-center px-6 py-2 rounded-full font-bold overflow-hidden border border-emerald-400/50 text-emerald-300 transition-colors duration-500 hover:border-emerald-500 hover:text-black before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-1/2 before:bg-emerald-500 before:-translate-x-[110%] before:transition-transform before:duration-500 after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-1/2 after:bg-emerald-500 after:translate-x-[110%] after:transition-transform after:duration-500 hover:before:translate-x-0 hover:after:translate-x-0">
                    <span className="relative z-10">Ver Código</span>
                  </button>
                </div>
              </div>

              {/* Efecto de fondo sutil */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-500" />
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}