"use client";

import { motion } from "framer-motion";
import { Smartphone, Tablet, Cpu, Zap } from "lucide-react";

const MobileShowcase = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#080808]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-mono tracking-[0.4em] block mb-4 uppercase text-xs">
              Mobile Engineering
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter text-white">
              NATIVE <span className="text-secondary">EXPERIENCE.</span> <br />
              ANY DEVICE.
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl font-medium">
              Specializing in React Native and Expo to build high-performance, 
              cross-platform mobile applications that feel truly native. 
              From smooth gestures to complex state management.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Zap className="text-secondary" />, title: "High Performance", desc: "60FPS animations" },
                { icon: <Cpu className="text-secondary" />, title: "Native Modules", desc: "Custom bridges" },
                { icon: <Smartphone className="text-secondary" />, title: "iOS & Android", desc: "Shared codebase" },
                { icon: <Tablet className="text-secondary" />, title: "Responsive", desc: "Adaptive layouts" },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/2 rounded-3xl hover:bg-white/5 transition-colors group">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Abstract 3D Phone Mockup */}
            <div className="w-72 h-[580px] bg-[#111] rounded-[3rem] border-4 border-[#222] relative shadow-[0_0_100px_rgba(112,0,255,0.2)] overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-2xl z-20" /> {/* Dynamic Island */}
               
               {/* "App" Interface */}
               <div className="absolute inset-2 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[2.2rem] p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-2xl" />
                  <div className="w-full h-4 bg-white/5 rounded-full" />
                  <div className="w-2/3 h-4 bg-white/5 rounded-full" />
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="h-32 bg-white/5 rounded-2xl animate-pulse" />
                    <div className="h-32 bg-white/5 rounded-2xl" />
                    <div className="h-32 bg-secondary/10 rounded-2xl border border-secondary/20" />
                    <div className="h-32 bg-white/5 rounded-2xl" />
                  </div>
                  <div className="mt-auto w-full h-12 bg-secondary rounded-2xl flex items-center justify-center font-black text-[10px] tracking-widest uppercase text-black">
                    Get Started
                  </div>
               </div>
            </div>

            {/* Background elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileShowcase;
