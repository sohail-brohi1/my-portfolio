"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 35 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 35 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("a, button, [role='button']");
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-9999 flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 60 : 8,
          height: isHovering ? 60 : 8,
          borderWidth: isHovering ? "1px" : "4px",
        }}
        className="rounded-full border-primary bg-primary/0"
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />

      {/* Tiny Core Dot */}
      <motion.div
        animate={{ scale: isHovering ? 0 : 1 }}
        className="absolute w-1 h-1 bg-primary rounded-full"
      />
    </motion.div>
  );
};

export default CustomCursor;
