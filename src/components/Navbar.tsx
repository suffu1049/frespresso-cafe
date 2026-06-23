"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-lg border-b border-coffee/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded" aria-label="Go to homepage">
          <span className="font-heading text-xl md:text-2xl font-bold text-gold tracking-wider">
            FRESPRESSO
          </span>
          <span className="font-body text-[10px] md:text-[11px] text-cream/50 tracking-[0.3em] uppercase -mt-0.5">
            Cafe
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-cream/70 hover:text-gold transition-colors duration-300 tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              document
                .getElementById("reservation")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:inline-block bg-coffee text-cream text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-coffee/80 transition-all duration-300 shadow-lg shadow-coffee/20"
            aria-label="Book Now - Reserve Table"
          >
            Book Now
          </button>
          <button
            className="md:hidden text-cream p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-dark/95 backdrop-blur-lg border-t border-coffee/10"
          >
            <ul className="flex flex-col items-center gap-5 py-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-cream/80 hover:text-gold transition-colors duration-300 text-lg tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <button
                  onClick={() => {
                    setOpen(false);
                    document
                      .getElementById("reservation")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-block bg-coffee text-cream font-semibold px-8 py-3 rounded-full hover:bg-coffee/80 transition-all duration-300 shadow-lg shadow-coffee/20"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
