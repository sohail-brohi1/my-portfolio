"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { personalInfo } from "@/data";
import Text3D from "@/components/ui/Text3D";
import AutoWriter from "@/components/ui/AutoWriter";
import Typewriter from "@/components/ui/Typewriter";
import Magnetic from "@/components/ui/Magnetic";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden bg-transparent">
      <div className="container-custom z-10 perspective-distant">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Text3D tiltStrength={12} className="relative z-10">
            <div className="max-w-6xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="w-8 h-px bg-primary" />
                <p className="text-primary font-mono tracking-[0.4em] uppercase text-[10px] md:text-xs font-black">
                  {personalInfo.role}
                </p>
              </motion.div>

              <div className="text-6xl md:text-[10rem] font-black leading-[0.8] mb-12 tracking-[-0.04em] cursor-default select-none text-white">
                <div className="flex flex-wrap items-center">
                  <AutoWriter
                    text="HI, I'M&nbsp;"
                    className="text-white opacity-20"
                  />
                  <AutoWriter
                    text={personalInfo.name.split(" ")[1].toUpperCase()}
                    className="text-white"
                    delay={0.1}
                  />
                  <AutoWriter text="." className="text-primary" />
                </div>

                <div className="min-h-[1.1em] py-4">
                  <Typewriter
                    texts={[
                      "ARCHITECTING",
                      "ENGINEERING",
                      "PRODUCTION",
                      "INTERFACE",
                    ]}
                    className="text-white"
                    delay={100}
                    pause={2000}
                  />
                </div>

                <Typewriter
                  texts={["SYSTEMS.", "SOLUTIONS.", "SOFTWARE.", "EXPERIENCE."]}
                  className="text-gray-800"
                  delay={100}
                  pause={2000}
                  cursor={false}
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-gray-500 text-lg md:text-xl max-w-2xl mb-16 leading-relaxed font-medium"
              >
                Independent software engineer focusing on building
                high-performance web architectures and immersive digital
                experiences for contemporary brands.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-wrap gap-12"
              >
                <Magnetic>
                  <a
                    href="#projects"
                    className="relative group flex items-center gap-4 text-white font-black text-xs tracking-widest uppercase overflow-hidden p-4"
                  >
                    <span className="pb-1 border-b-2 border-primary group-hover:border-white transition-colors duration-500">
                      Explore Work
                    </span>
                    <MoveRight
                      size={16}
                      className="group-hover:translate-x-2 transition-transform duration-500"
                    />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-white font-black text-xs tracking-widest uppercase transition-colors duration-500 p-4"
                  >
                    Contact Studio
                  </a>
                </Magnetic>
              </motion.div>
            </div>
          </Text3D>
        </motion.div>
      </div>

      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      {/* Refined Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
