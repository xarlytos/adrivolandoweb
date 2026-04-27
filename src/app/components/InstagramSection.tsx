"use client";

import { motion } from "framer-motion";
import { Instagram, Plane, ExternalLink } from "lucide-react";

export default function InstagramSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-5 h-5 text-navy/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-navy/60 font-medium">
              Redes sociales
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-6">
            Síguenos antes del despegue
          </h2>

          <p className="text-lg text-navy/70 max-w-xl mx-auto mb-10">
            Toda la información, fotos, sorteos y próximos vuelos están en nuestro Instagram.
          </p>

          {/* Instagram card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block bg-navy p-8 sm:p-10 text-cream"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-cream/30 flex items-center justify-center mb-6">
                <Instagram className="w-10 h-10 text-cream" />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-cream/60 mb-2">
                Tripulación oficial
              </p>

              <a
                href="https://instagram.com/volandovalencia"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-2xl sm:text-3xl font-bold hover:text-sky-muted transition-colors duration-300"
              >
                @volandovalencia
                <ExternalLink className="w-5 h-5 text-cream/40 group-hover:text-sky-muted transition-colors duration-300" />
              </a>

              <div className="mt-6 flex items-center gap-2 text-sm text-cream/50">
                <Plane className="w-4 h-4 rotate-[-45deg]" />
                <span>Valencia, España</span>
              </div>
            </div>
          </motion.div>

          {/* Mini feed preview placeholders */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-2 max-w-2xl mx-auto"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-navy/10 border border-navy/10 flex items-center justify-center hover:bg-navy/20 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-navy/20" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
