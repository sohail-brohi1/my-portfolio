"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative bg-background">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-black mb-10 tracking-[0.3em] uppercase transition-all duration-300 hover:tracking-[0.5em] cursor-default">
            {personalInfo.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 mb-16">
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/skills"
              className="hover:text-secondary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="hover:text-accent transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-gray-600 uppercase tracking-[0.6em] text-[10px] font-bold">
            © 2026 DESIGNED & DEVELOPED BY {personalInfo.name.toUpperCase()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
