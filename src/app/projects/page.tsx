"use client";

import { motion } from "framer-motion";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/ui/Footer";
import Text3D from "@/components/ui/Text3D";

export default function ProjectsPage() {
  return (
    <div className="pt-32">
      <div className="container-custom py-20 text-center [perspective:1000px]">
        <Text3D tiltStrength={10}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase"
          >
            PORTFOLIO <span className="text-accent">WORK</span>
          </motion.h1>
        </Text3D>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          A curated selection of projects that showcase technical depth and
          aesthetic precision.
        </motion.p>
      </div>

      <Projects />

      <section className="py-32 border-t border-white/5 bg-background">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              LOOKING TO BUILD <br />
              <span className="text-primary tracking-widest uppercase neon-glow">
                Something Large?
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              I specialize in complex, high-traffic web applications and mobile
              solutions for the modern digital era. Let's create an MVP that
              actually converts.
            </p>
            <a
              href="/contact"
              className="px-12 py-5 bg-white font-black text-xs text-background uppercase tracking-[0.4em] rounded-full hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
