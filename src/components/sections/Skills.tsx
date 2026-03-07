"use client";

import { motion } from "framer-motion";
import { skills } from "@/data";

const Skills = () => {
  // Triple the skills array to ensure seamless infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section
      id="skills"
      className="py-40 relative bg-[#050505] overflow-hidden"
    >
      <div className="container-custom mb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary font-mono text-[10px] tracking-[0.4em] uppercase font-black">
              Verified Stack
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none mb-10"
          >
            TECHNICAL <br />
            <span className="text-gray-900 uppercase">Production.</span>
          </motion.h2>
          <p className="text-gray-500 text-lg font-medium max-w-xl">
            A production-ready ecosystem of technologies optimized for
            performance, scalability, and exceptional user experience.
          </p>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Marquee */}
      <div className="relative group border-y border-white/5 py-12 bg-[#080808]">
        <motion.div
          className="flex gap-12 px-6"
          animate={{ x: [0, -100 * skills.length - 12 * skills.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="shrink-0 w-[320px] md:w-[450px] p-12 md:p-16 border border-white/5 bg-[#0a0a0a] group/card hover:bg-[#0f0f0f] transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle architectural details */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary/20" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary/20" />

              <span className="absolute top-8 right-8 text-5xl font-black text-white/2 group-hover/card:text-primary/10 transition-colors duration-500">
                {((index % skills.length) + 1).toString().padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="flex flex-col gap-10">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/2 border border-white/5 flex items-center justify-center text-white/20 font-black text-2xl group-hover/card:bg-primary group-hover/card:text-black group-hover/card:border-primary transition-all duration-500">
                      {skill.name[0]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                        {skill.name}
                      </h3>
                      <div className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase opacity-40 group-hover/card:opacity-100 transition-opacity">
                        Core Module
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 text-base leading-relaxed font-medium min-h-[5rem]">
                    {skill.desc}
                  </p>

                  <div className="pt-8 border-t border-white/5 flex justify-between items-center opacity-40 group-hover/card:opacity-100 transition-opacity">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                      v2.0.4 stable
                    </span>
                    <div className="flex gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-primary/20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Noise Texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container-custom mt-20 flex justify-between items-center text-[9px] font-mono tracking-[0.4em] text-gray-700 uppercase">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1 h-1 bg-gray-800" />
            ))}
          </div>
          <span>Automatic Ecosystem Scan</span>
        </div>
        <span>SohailForge Production © Q1 2024</span>
      </div>
    </section>
  );
};

export default Skills;
