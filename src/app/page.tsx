import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import MobileShowcase from "@/components/sections/MobileShowcase";
import Footer from "@/components/ui/Footer";
import { VelocityScroll } from "@/components/ui/VelocityScroll";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-20 opacity-10">
        <VelocityScroll text="Sohail Forge • Innovation • Performance •" />
      </div>
      <About />
      <Stats />
      <div className="py-20">
        <VelocityScroll text="Next.js • React • Three.js • GSAP • Framer Motion •" default_velocity={-2} className="text-primary/20" />
      </div>
      <Skills />
      <MobileShowcase />
      <Process />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
