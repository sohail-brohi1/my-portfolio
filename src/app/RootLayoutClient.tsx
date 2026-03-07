"use client";

import { useLenis } from "@/hooks/useLenis";
import { useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-110 origin-left"
        style={{ scaleX }}
      />
      {children}
    </>
  );
}
