"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AutoWriterProps {
  text: string;
  delay?: number;
  className?: string;
  once?: boolean;
}

const AutoWriter: React.FC<AutoWriterProps> = ({
  text,
  delay = 0.05,
  className = "",
  once = true,
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child as any}
          key={index}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AutoWriter;
