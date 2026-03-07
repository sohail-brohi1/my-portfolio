"use client";

import { motion } from "framer-motion";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/ui/Footer";
import Text3D from "@/components/ui/Text3D";

export default function SkillsPage() {
  return (
    <div className="pt-32">
      <div className="container-custom py-20 text-center [perspective:1000px]">
        <Text3D tiltStrength={10}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase"
          >
            THE <span className="text-primary">STACK</span>
          </motion.h1>
        </Text3D>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          A curated ecosystem of modern technologies, focusing on MERN,
          Scalability, and immersive Graphics.
        </motion.p>
      </div>

      <Skills />

      <section className="py-32 border-t border-white/5 mx-auto max-w-[1400px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-6">
                Development Philosophy
              </h4>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-snug">
                I DON'T JUST WRITE CODE, <br />I CRAFT{" "}
                <span className="text-primary">EXPERIENCES</span>.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
                My approach to software engineering centers around
                maintainability and state-of-the-art performance. I believe in
                the "Write Once, Run Everywhere" with robust TypeScript and
                React Native architectures that minimize technical debt.
              </p>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                Leveraging Next.js for SSR and Three.js for client-side
                engagement creates a high-conversion, visually stunning user
                experience that puts your brand at the forefront of innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-10">
              <div className="glass p-10 rounded-4xl hover:border-primary/40 transition-all cursor-default">
                <div className="text-3xl font-black mb-4 group inline-flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl">
                    1
                  </div>
                  CLEAN CODE
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                  Modular / Reusable / Tested
                </p>
              </div>
              <div className="glass p-10 rounded-4xl hover:border-secondary/40 transition-all cursor-default">
                <div className="text-3xl font-black mb-4 group inline-flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xl">
                    2
                  </div>
                  PERFORMANCE
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                  Fast-loading / Optimized / Lightweight
                </p>
              </div>
              <div className="glass p-10 rounded-4xl hover:border-accent/40 transition-all cursor-default">
                <div className="text-3xl font-black mb-4 group inline-flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl">
                    3
                  </div>
                  USER FOCUS
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                  Engaging Animations / Intuitive UX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
