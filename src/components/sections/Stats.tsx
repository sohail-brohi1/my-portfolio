"use client";

import { motion } from "framer-motion";
import { stats } from "@/data";

const Stats = () => {
  return (
    <section className="py-24 relative bg-[#050505] border-y border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center md:text-left"
            >
              <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter group-hover:text-primary transition-colors duration-500 leading-none">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em] font-black group-hover:text-gray-400 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
