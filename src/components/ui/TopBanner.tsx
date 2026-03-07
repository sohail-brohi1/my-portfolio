"use client";

import { motion } from "framer-motion";

const TopBanner = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full glass py-2 px-6 flex items-center justify-center gap-3 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase border-b border-white/5 relative z-50 overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="flex items-center gap-3 relative z-10 text-gray-400">
        <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(0,242,255,0.8)] animate-pulse" />

        <span className="bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded text-[9px] font-black tracking-[0.2em] uppercase">
          Early Access
        </span>

        <span>
          Exploring Beta v1
          <span className="mx-3 text-white/5">|</span>
          <span className="text-primary neon-glow">Stable coming soon!</span>
        </span>
      </div>
    </motion.div>
  );
};

export default TopBanner;
