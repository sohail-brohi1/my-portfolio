"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { personalInfo } from "@/data";
import Text3D from "@/components/ui/Text3D";
import AutoWriter from "@/components/ui/AutoWriter";
import Typewriter from "@/components/ui/Typewriter";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden">
      <div className="container-custom z-10 [perspective:1200px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Text3D tiltStrength={12} className="relative z-10">
            <div className="max-w-6xl">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-primary font-mono tracking-[0.4em] mb-4 uppercase text-sm md:text-base font-bold"
              >
                {personalInfo.role}
              </motion.p>

              <div className="text-6xl md:text-9xl font-black leading-[0.85] mb-8 tracking-tighter cursor-default select-none">
                <div className="flex flex-wrap items-center">
                  <AutoWriter text="HI, I'M&nbsp;" className="text-white" />
                  <AutoWriter
                    text={personalInfo.name.split(" ")[0].toUpperCase()}
                    className="text-primary"
                    delay={0.1}
                  />
                  <AutoWriter text="." className="text-primary" />
                </div>

                <div className="min-h-[1.1em] py-2">
                  <Typewriter
                    texts={["INNOVATING", "BUILDING", "SCALING", "CRAFTING"]}
                    className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-accent neon-glow leading-normal"
                    delay={150}
                    pause={2500}
                  />
                </div>

                <Typewriter
                  texts={[
                    "SOLUTIONS.",
                    "THE FUTURE.",
                    "WEB APPS.",
                    "EXPERIENCES.",
                  ]}
                  className="text-white"
                  delay={150}
                  pause={2500}
                  cursor={false}
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-medium"
              >
                {personalInfo.headline}. Specializing in building scalable web
                and mobile applications with cutting-edge tech.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-wrap gap-8"
              >
                <a
                  href="#projects"
                  className="bg-primary text-background px-12 py-5 rounded-full font-black text-sm tracking-widest uppercase flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(0,242,255,0.4)] hover:shadow-[0_0_50px_rgba(0,242,255,0.6)] group"
                >
                  View Work{" "}
                  <MoveRight
                    size={22}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white/20 px-12 py-5 rounded-full font-black text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 hover:border-white"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </Text3D>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.6em] text-gray-500 font-black animate-pulse">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-24 bg-linear-to-b from-primary via-secondary to-transparent"
        />
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[180px] rounded-full -z-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[180px] rounded-full -z-1" />
    </section>
  );
};

export default Hero;
