import HeroVisual from "../src/components/sections/HeroVisual";
import Experience from "../src/components/sections/Experience";
import Projects from "../src/components/sections/Projects";
import Contact from "../src/components/sections/Contact";
import SkillsMarquee from "../src/components/sections/SkillsMarquee";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <HeroVisual />
      <SkillsMarquee />
      <Experience /> 
      <Projects />
      <Contact />
      
      <div className="h-screen"></div> {/* Espacio temporal */}
    </main>
  );
}