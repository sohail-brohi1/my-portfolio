"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "I begin by understanding your business goals, target audience, and the technical challenges we need to overcome.",
    icon: "SEARCH",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "Designing scalable system architectures and pixel-perfect interfaces that prioritize user experience and performance.",
    icon: "LAYERS",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Crafting clean, maintainable code with modern tech stacks like Next.js, React Native, and robust backend systems.",
    icon: "CODE",
  },
  {
    number: "04",
    title: "Testing & Deployment",
    description:
      "Rigorous testing and automated CI/CD pipelines ensure a flawless launch and long-term system stability.",
    icon: "SHIP",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-40 relative bg-[#050505]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-px bg-primary" />
              <span className="text-primary font-mono text-xs tracking-[0.4em] uppercase font-bold">
                Methodology
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]"
            >
              HOW I BRING <br />
              <span className="text-gray-800">IDEAS TO LIFE.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#050505] p-12 transition-all duration-500 hover:bg-[#0a0a0a]"
            >
              <div className="relative z-10">
                <span className="text-[6rem] font-black text-white/2 absolute -top-10 -left-6 group-hover:text-primary/5 transition-colors duration-500 leading-none">
                  {step.number}
                </span>

                <div className="text-[10px] font-mono text-primary tracking-[0.4em] mb-12 uppercase font-black">
                  Step {step.number}
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-10 group-hover:text-gray-400 transition-colors">
                  {step.description}
                </p>

                {/* Visual Connector */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[2px] bg-white/5 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
                  <span className="text-[10px] font-mono text-gray-800 group-hover:text-primary transition-colors">
                    {step.icon}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
