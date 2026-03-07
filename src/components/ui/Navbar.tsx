"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import TopBanner from "./TopBanner";
import Logo from "./Logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <TopBanner />
      <nav
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
            : "py-8"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Logo />

          {/* Minimalist Desktop Menu */}
          <ul className="hidden md:flex gap-12">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-all duration-500 relative group"
                >
                  {link.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[80px] w-full bg-[#050505] md:hidden z-40 px-10 pt-20"
            >
              <ul className="flex flex-col gap-10">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className="text-5xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors block"
                      onClick={() => setMobileMenu(false)}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-20 pt-10 border-t border-white/5 flex flex-col gap-4">
                <span className="text-[10px] font-mono text-gray-700 tracking-[0.4em] uppercase">
                  SohailForge Studio
                </span>
                <span className="text-xs text-gray-500">
                  sohailbrohi93@gmail.com
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
