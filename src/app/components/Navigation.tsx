"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Entradas", href: "#entradas" },
  { label: "Próximo vuelo", href: "#proximo-vuelo" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-sm border-b border-cream/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 text-cream">
              <Plane className="w-5 h-5 rotate-[-45deg]" />
              <span className="font-bold tracking-wider uppercase text-sm">
                Volando
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden sm:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.15em] text-cream/70 hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#entradas"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-cream text-navy text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors duration-300"
            >
              <Plane className="w-3 h-3 rotate-[-45deg]" />
              Comprar
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden text-cream p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy pt-20 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-cream uppercase tracking-wider"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#entradas"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 bg-cream text-navy font-semibold uppercase tracking-wider"
              >
                <Plane className="w-4 h-4 rotate-[-45deg]" />
                Comprar entrada
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
