"use client";

import { motion } from "framer-motion";
import About from "@/components/sections/About";
import Footer from "@/components/ui/Footer";
import Text3D from "@/components/ui/Text3D";

export default function AboutPage() {
  return (
    <div className="pt-32">
      <div className="container-custom py-20 text-center [perspective:1000px]">
        <Text3D tiltStrength={10}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-10 tracking-tighter"
          >
            ABOUT <span className="text-secondary">ME</span>
          </motion.h1>
        </Text3D>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          Discover the journey, the vision, and the passion behind the craft. A
          story of technology meeting creativity.
        </motion.p>
      </div>

      <About />

      <section className="py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-4xl"
            >
              <h3 className="text-2xl font-black mb-6 text-primary">
                MY VISION
              </h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                To bridge the gap between human emotion and digital interfaces.
                Creating software that doesn't just work, but resonates with the
                user on an aesthetic and functional level.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-4xl"
            >
              <h3 className="text-2xl font-black mb-6 text-secondary">
                MY MISSION
              </h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                Consistently delivering high-performance, accessible, and
                visually stunning web solutions for businesses that want to
                stand out in the digital landscape.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-4xl"
            >
              <h3 className="text-2xl font-black mb-6 text-accent">MY CORE</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                Integrity, innovation, and an obsession with detail. I believe
                that the smallest micro-interaction can define the entire
                professional experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
