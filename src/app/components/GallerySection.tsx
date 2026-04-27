"use client";

import { motion } from "framer-motion";
import { Plane, Camera } from "lucide-react";

const galleryPhrases = [
  "Así se vuela en Valencia.",
  "Noches que despegan.",
  "Tripulación completa.",
  "Recuerdos desde la cabina.",
  "El aftermovie empieza aquí.",
];

const galleryItems = [
  { aspect: "aspect-[4/3]", label: "MODO AVIÓN" },
  { aspect: "aspect-[3/4]", label: "DESPEGUE" },
  { aspect: "aspect-square", label: "ALTURA" },
  { aspect: "aspect-[3/4]", label: "NOCHE" },
  { aspect: "aspect-[4/3]", label: "ENERGÍA" },
  { aspect: "aspect-square", label: "VIBES" },
];

export default function GallerySection() {
  return (
    <section className="py-20 sm:py-28 bg-navy px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-5 h-5 text-cream/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-cream/60 font-medium">
              Galería
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-4">
            Momentos en altura
          </h2>
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            {galleryPhrases[0]}
          </p>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`${item.aspect} relative bg-navy-light overflow-hidden group`}
            >
              {/* Placeholder with blue filter effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy" />
              <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors duration-500" />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Plane className="w-8 h-8 text-cream/20 mb-3 rotate-[-45deg] group-hover:text-cream/40 transition-colors duration-500" />
                <p className="text-cream/40 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">
                  {item.label}
                </p>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cream/20" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-cream/20" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-cream/20" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-cream/20" />
            </motion.div>
          ))}
        </div>

        {/* Phrases row */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {galleryPhrases.slice(1).map((phrase) => (
            <span
              key={phrase}
              className="px-4 py-2 border border-cream/20 text-cream/50 text-xs uppercase tracking-wider"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
