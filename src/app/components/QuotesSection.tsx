"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const quotes = [
  "MODO AVIÓN: ACTIVATED",
  "VAMOS A VOLAR ALTO.",
  "DESTINO: DESCONEXIÓN",
  "NO DESTINATION, JUST VIBES",
  "PREPÁRATE PARA DESPEGAR.",
  "ÚLTIMA LLAMADA PARA VOLANDO.",
  "BOARDING PASS READY.",
  "ESTA NOCHE NO SE ATERRIZA.",
  "DESPEGAMOS EN VALENCIA.",
  "TU VUELO FAVORITO SALE DE NOCHE.",
  "CHECK-IN ABIERTO.",
  "EMBARQUE INMEDIATO.",
  "ALTURA, MÚSICA Y DESCONEXIÓN.",
  "FASTEN YOUR SEATBELT.",
  "VALENCIA IS TAKING OFF.",
  "NOS VEMOS EN LA TERMINAL.",
  "SOLO PARA LOS QUE VUELAN ALTO.",
  "HOY NO HAY DESTINO, SOLO FIESTA.",
  "EL PLAN: DESPEGAR.",
  "VOLANDO NO SE EXPLICA, SE VIVE.",
];

export default function QuotesSection() {
  return (
    <section className="py-20 sm:py-28 bg-navy overflow-hidden px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Plane className="w-5 h-5 text-cream/60 rotate-[-45deg]" />
            <span className="text-xs uppercase tracking-[0.3em] text-cream/60 font-medium">
              Señales del aeropuerto
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight">
            Frases de altura
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="group"
            >
              <div className="h-full p-5 border border-cream/10 hover:border-cream/30 transition-colors duration-300 bg-cream/5 hover:bg-cream/10">
                <div className="flex items-start gap-3">
                  <span className="text-xs text-cream/30 font-mono mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm sm:text-base font-medium text-cream/80 tracking-wide uppercase leading-relaxed">
                    {quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
