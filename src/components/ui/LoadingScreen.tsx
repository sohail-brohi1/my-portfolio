"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-99999 bg-background flex flex-col items-center justify-center p-6"
        >
          <div className="text-center mb-10 overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="text-4xl md:text-6xl font-black neon-glow tracking-widest leading-snug"
            >
              QUANTUM<span className="text-primary italic">.</span>
            </motion.h2>
          </div>

          <div className="w-full max-w-md h-px bg-white/10 relative overflow-hidden mb-6">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(0,242,255,0.8)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between w-full max-w-md text-[10px] font-mono tracking-widest text-gray-400 uppercase">
            <span>Loading Engine</span>
            <span>{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
