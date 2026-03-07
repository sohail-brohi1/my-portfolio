"use client";

import { motion } from "framer-motion";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import Text3D from "@/components/ui/Text3D";

export default function ContactPage() {
  return (
    <div className="pt-32">
      <div className="container-custom py-20 text-center [perspective:1000px]">
        <Text3D tiltStrength={10}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase"
          >
            SAY <span className="text-secondary">HELLO</span>
          </motion.h1>
        </Text3D>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          I'm always looking for new opportunities and ambitious projects. Let's
          make something happen.
        </motion.p>
      </div>

      <Contact />

      <Footer />
    </div>
  );
}
