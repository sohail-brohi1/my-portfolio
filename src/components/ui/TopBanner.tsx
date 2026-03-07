"use client";

import { motion } from "framer-motion";

const TopBanner = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="w-full bg-[#0a0a0a] py-2 px-6 flex items-center justify-center gap-4 text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white/5 relative z-50"
    >
      <div className="flex items-center gap-4 relative z-10 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span className="text-white">Build Log 03.08.2024</span>
        </div>

        <span className="w-px h-3 bg-white/10" />

        <div className="flex items-center gap-2">
          <span className="text-primary tracking-[0.4em]">
            Available for projects
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBanner;
