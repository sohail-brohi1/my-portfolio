"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center gap-4 group ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center border-2 border-white/10 group-hover:border-primary transition-colors duration-500 overflow-hidden">
        {/* Dynamic geometric mark */}
        <motion.div
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-full bg-primary/10 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        />
        <span className="absolute text-white font-black text-xl z-10 transition-colors duration-500 group-hover:text-black">
          S
        </span>
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-[-0.05em] text-white">
          SOHAIL
          <span className="text-primary tracking-normal font-black">FORGE</span>
        </span>
        <span className="text-[10px] font-medium tracking-[0.2em] text-gray-600 uppercase pt-1">
          Creative Engineering
        </span>
      </div>
    </Link>
  );
};

export default Logo;
