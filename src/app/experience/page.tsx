"use client";

import { motion } from "framer-motion";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/ui/Footer";
import Text3D from "@/components/ui/Text3D";

export default function ExperiencePage() {
  return (
    <div className="pt-32">
      <div className="container-custom py-20 text-center [perspective:1000px]">
        <Text3D tiltStrength={10}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase"
          >
            CAREER <span className="text-secondary">TIMELINE</span>
          </motion.h1>
        </Text3D>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          A progression of growth, professional dedication, and technological
          mastery.
        </motion.p>
      </div>

      <Experience />

      <section className="py-32 border-t border-white/5 mx-auto max-w-[1400px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-6">
                Work Ethics
              </h4>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-snug">
                COMMITTED TO <br />
                <span className="text-secondary neon-glow">
                  PROFESSIONAL
                </span>{" "}
                INTEGRITY.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
                My professional journey has been defined by a deep-rooted
                commitment to exceptional work ethics and collaborative
                innovation. Working at CodeBotX allowed me to sharpen my
                approach to the agile methodology while maintaining top-tier
                code quality standards.
              </p>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                I believe that professional growth is a continuous cycle of
                learning, implementing, and refining. Whether as an ASE or a
                Full Stack Engineer, my core mission remains providing scalable
                solutions that outperform and outlast the status quo.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-10">
              <div className="glass p-10 rounded-4xl hover:border-secondary/40 transition-all cursor-default">
                <div className="text-3xl font-black mb-4 group inline-flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xl">
                    1
                  </div>
                  AGILE
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                  Sprints / Scrums / Efficient Delivery
                </p>
              </div>
              <div className="glass p-10 rounded-4xl hover:border-primary/40 transition-all cursor-default">
                <div className="text-3xl font-black mb-4 group inline-flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl">
                    2
                  </div>
                  TEAMWORK
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                  Collaborative Coding / Knowledge Sharing
                </p>
              </div>
              <div className="glass p-10 rounded-4xl hover:border-accent/40 transition-all cursor-default">
                <div className="text-3xl font-black mb-4 group inline-flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl">
                    3
                  </div>
                  GROWTH
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                  Continuous Self-Improvement / R&D Focus
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
