"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 glass border-b border-white/10" : "py-8"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-black tracking-[0.2em] neon-glow group"
        >
          MSB
          <span className="text-primary group-hover:text-white transition-colors">
            .
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 hover:text-primary transition-all duration-300 relative group"
              >
                {link.title}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full glass border-b border-white/10 md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center py-10 gap-6">
              {navLinks.map((link) => (
                <li key={link.id} className="w-full text-center">
                  <Link
                    href={link.path}
                    className="text-2xl font-black uppercase tracking-[0.4em] hover:text-primary transition-colors block py-4"
                    onClick={() => setMobileMenu(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
