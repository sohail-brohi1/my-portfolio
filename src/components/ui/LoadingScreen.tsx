"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const loadingSteps = [
    "Establishing Brand Identity...",
    "Compiling Modular Components...",
    "Optimizing User Interface...",
    "Rendering Visual Assets...",
    "Launching Studio Port...",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(prev + diff, 100);
      });
    }, 180);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const p = Math.floor((progress / 100) * loadingSteps.length);
    setPhase(p >= loadingSteps.length ? loadingSteps.length - 1 : p);
  }, [progress, loadingSteps.length]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-9999 bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center">
            {/* Minimal Logo Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20 scale-125 md:scale-150"
            >
              <Logo className="flex-col gap-4! text-center items-center pointer-events-none" />
            </motion.div>

            {/* Grounded Progress Section */}
            <div className="w-48 md:w-64 space-y-4">
              <div className="h-[2px] w-full bg-white/5 relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[8px] font-mono tracking-[0.3em] uppercase">
                <motion.span
                  key={phase}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-500"
                >
                  {loadingSteps[phase]}
                </motion.span>
                <span className="text-white/40">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>

          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
