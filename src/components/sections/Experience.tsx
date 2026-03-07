"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data";

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-primary font-mono tracking-[0.4em] block mb-4 uppercase">
            My Journey
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            WHAT I'VE DONE.
          </h2>
        </motion.div>

        <div className="relative mt-20 pointer-events-auto">
          {/* Vertical line for the timeline */}
          <div className="absolute top-0 left-0 md:left-1/2 w-1 h-full bg-linear-to-b from-primary via-secondary to-accent opacity-20 transform md:translate-x-[-1/2]" />

          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="relative mb-24 last:mb-0"
            >
              {/* Timeline marker/node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-0 left-[-4px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-white rounded-full z-10 neon-glow"
              />

              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}
                >
                  <span className="text-sm font-black text-primary uppercase tracking-[0.3em] font-mono mb-2 block">
                    {exp.duration}
                  </span>
                  <h3 className="text-3xl font-black mb-1 neon-glow">
                    {exp.company}
                  </h3>
                  <h4 className="text-lg font-bold text-gray-400 mb-6 uppercase tracking-widest">
                    {exp.role}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed md:ml-auto md:mr-0 inline-block font-medium">
                    {exp.description}
                  </p>
                </motion.div>

                {/* Empty side for spacing */}
                <div className="hidden md:block col-start-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
