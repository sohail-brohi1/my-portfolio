"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  delay?: number;
  pause?: number;
  className?: string;
  cursor?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  delay = 100,
  pause = 2000,
  className = "",
  cursor = true,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      const fullText = texts[currentTextIndex];

      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          // Pause before deleting
          timeout = setTimeout(() => setIsDeleting(true), pause);
        } else {
          timeout = setTimeout(type, delay);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          timeout = setTimeout(type, 500); // Small pause before next word
        } else {
          timeout = setTimeout(type, delay / 2);
        }
      }
    };

    timeout = setTimeout(type, delay);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, delay, pause]);

  return (
    <span className={className}>
      {currentText}
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[4px] h-[0.9em] bg-primary ml-2 align-middle"
        />
      )}
    </span>
  );
};

export default Typewriter;
