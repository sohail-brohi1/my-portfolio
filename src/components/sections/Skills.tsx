"use client";

import { motion } from "framer-motion";
import { skills } from "@/data";

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-secondary font-mono tracking-[0.4em] block mb-4 uppercase">
            My Stack
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            WHAT I USE TO BUILD.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass p-10 flex flex-col items-center justify-center rounded-3xl group transition-all duration-300 border-white/5 hover:border-primary/30"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-primary group-hover:drop-shadow-[0_0_15px_rgba(0,242,255,0.5)] transition-all duration-300">
                <div className="w-full h-full bg-white/5 rounded-2xl flex items-center justify-center text-3xl font-black text-gray-500 group-hover:text-primary">
                  {skill.name[0]}
                </div>
              </div>
              <h3 className="text-lg font-bold tracking-widest text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
