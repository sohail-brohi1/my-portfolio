import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Process />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
