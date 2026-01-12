# Portafolio

Este proyecto es un portafolio personal desarrollado principalmente con **TypeScript** utilizando el framework **Next.js** (v16). La carpeta principal del proyecto es `gabo-portfolio/`. Aquí encontrarás la estructura, tecnologías y dependencias principales empleadas.

## Tecnologías y Lenguajes

- **Frontend**:
  - **React** (v19)
  - **Next.js** (v16) — generación SSR/SSG y estructura de app moderna
  - **TypeScript** — tipado estricto y componentes `.tsx`
- **Estilos**:
  - **Tailwind CSS** (v4) — utility-first CSS framework
  - **PostCSS** — procesamiento CSS moderno
- **Animaciones**:
  - **Framer Motion**
  - **GSAP**
  - **Lenis** — smooth scrolling
  - **particles.js** — animaciones de partículas
- **Iconografía**:
  - **Lucide React**

## Estructura principal

- `gabo-portfolio/app/`: estructura de Next.js App Router.
  - `globals.css`: estilos globales con Tailwind.
  - `layout.tsx` y `page.tsx`: entry points de Next.js con JSX+TS.
- `gabo-portfolio/src/components/`: componentes reutilizables, principalmente en `.tsx`.
  - Ejemplo: `ParticlesBackground.tsx`, `SmoothScroll.tsx`.
- `gabo-portfolio/src/lib/` y `gabo-portfolio/src/types/`: librerías y tipos TypeScript propios.
- `public/`: imágenes, íconos y archivos estáticos.
- Configuración avanzada por archivos:
  - `next.config.ts`
  - `eslint.config.mjs`
  - `postcss.config.mjs`
  - `tsconfig.json`

## Scripts útiles

- `npm run dev`: levanta el servidor local en modo desarrollo.
- `npm run build`: compila la aplicación para producción.
- `npm run start`: ejecuta la app ya compilada.
- `npm run lint`: ejecuta ESLint para verificar calidad y estilo del código.

## Instalación y primer uso

```bash
npm install
npm run dev
```
Luego abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Despliegue

El despliegue recomendado es con **Vercel**, plataforma compatible nativamente con Next.js.

---

**Tecnologías principales usadas confirmadas y presentes en el código:**
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis
- particles.js
- Lucide React
