"use client";

import { motion } from "framer-motion";
import { Plane, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-cream" />
        <div className="absolute bottom-32 right-16 w-96 h-96 rounded-full border border-cream" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full border border-cream" />
      </div>

      {/* Flight path dotted line */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M -10 60 Q 30 20, 50 50 T 110 40"
          fill="none"
          stroke="#F5F1E8"
          strokeWidth="0.3"
          strokeDasharray="2 2"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Small top label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-6"
        >
          <Plane className="w-4 h-4 text-sky-muted rotate-[-45deg]" />
          <span className="text-sky-muted text-sm tracking-[0.3em] uppercase font-medium">
            Valencia Airport
          </span>
          <Plane className="w-4 h-4 text-sky-muted rotate-[135deg]" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-cream mb-4"
        >
          VOLANDO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl text-cream/80 font-light tracking-wide mb-1"
        >
          VALENCIA
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm sm:text-base text-cream/50 tracking-[0.2em] uppercase mb-2"
        >
          Indiana Valencia
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-24 h-px bg-cream/40 my-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-lg sm:text-xl text-cream/70 tracking-wide mb-12"
        >
          Modo avión activado. Esta noche despegamos.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#entradas"
            className="group relative px-8 py-4 bg-cream text-navy font-semibold tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
          >
            <span className="flex items-center gap-2">
              <Plane className="w-4 h-4 rotate-[-45deg]" />
              Comprar entradas
            </span>
          </a>
          <a
            href="#proximo-vuelo"
            className="px-8 py-4 border border-cream/40 text-cream font-medium tracking-wider uppercase text-sm hover:bg-cream/10 transition-colors duration-300"
          >
            Ver próximo vuelo
          </a>
        </motion.div>

        {/* Flight code badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 px-6 py-3 border border-cream/20 text-cream/60 text-xs tracking-[0.2em] uppercase"
        >
          Vuelo VOLANDO · VLC-001 · Destino: Desconexión
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-cream/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
