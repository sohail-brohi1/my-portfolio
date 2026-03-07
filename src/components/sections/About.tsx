"use client";

import { motion } from "framer-motion";
import { personalInfo, education } from "@/data";
import Text3D from "@/components/ui/Text3D";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container-custom [perspective:1000px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <Text3D tiltStrength={10}>
              <span className="text-secondary font-mono tracking-[0.4em] block mb-4 uppercase text-xs md:text-sm">
                My Story
              </span>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
                I'M A <span className="text-secondary">FULL-STACK</span> <br />
                <span className="text-white">DEVELOPER</span> <br />
                FROM PAKISTAN.
              </h2>
            </Text3D>

            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-xl">
              I'm {personalInfo.name}, a passionate developer based in{" "}
              {personalInfo.location}. My journey in the tech world has been
              driven by a relentless desire to create innovative solutions that
              bridge the gap between complex problems and user-friendly digital
              experiences.
            </p>
            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-medium max-w-xl">
              With a strong foundation in the MERN stack and hands-on experience
              in Next.js, I focus on building robust applications. Currently,
              I'm contributing my skills at CodeBotX and constantly pushing the
              boundaries of what's possible in the IT landscape.
            </p>

            <div className="space-y-12">
              <div className="flex flex-wrap gap-12">
                <div className="group cursor-default">
                  <span className="text-4xl font-black text-primary block mb-2 group-hover:scale-110 transition-transform duration-300 uppercase">
                    MERN
                  </span>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">
                    Core Stack
                  </p>
                </div>
                <div className="group cursor-default">
                  <span className="text-4xl font-black text-secondary block mb-2 group-hover:scale-110 transition-transform duration-300 uppercase">
                    Next.js
                  </span>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">
                    Frontend
                  </p>
                </div>
                <div className="group cursor-default">
                  <span className="text-4xl font-black text-accent block mb-2 group-hover:scale-110 transition-transform duration-300 uppercase">
                    Mobile
                  </span>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">
                    Development
                  </p>
                </div>
              </div>

              <div className="pt-12 border-t border-white/10">
                <h4 className="text-xs font-black text-gray-600 uppercase tracking-[0.5em] mb-8">
                  Education
                </h4>
                {education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="flex gap-6 items-start group"
                  >
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
                    <div>
                      <p className="text-2xl font-black group-hover:text-primary transition-colors duration-300">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">
                        {edu.degree} · {edu.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3D Visual/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[650px] flex items-center justify-center order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-secondary/15 blur-[150px] rounded-full" />
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative z-10 w-full h-full flex items-center justify-center p-12"
            >
              <div className="w-96 h-96 glass rounded-5xl flex items-center justify-center p-10 animate-float shadow-[0_0_80px_rgba(112,0,255,0.25)] group">
                <div className="w-full h-full border-2 border-primary/20 rounded-4xl flex items-center justify-center font-black text-[12rem] text-primary/5 select-none transition-all duration-700 group-hover:text-primary/15 group-hover:scale-110">
                  MS
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
