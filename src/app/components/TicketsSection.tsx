"use client";

import { motion } from "framer-motion";
import { Ticket, ExternalLink } from "lucide-react";

export default function TicketsSection() {
  return (
    <section id="entradas" className="py-20 sm:py-28 bg-navy px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Ticket visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-cream p-6 sm:p-8 relative">
              {/* Ticket notches */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-navy rounded-full" />
              <div className="absolute -right-3 top-8 w-6 h-6 bg-navy rounded-full" />
              <div className="absolute -left-3 bottom-8 w-6 h-6 bg-navy rounded-full" />
              <div className="absolute -right-3 bottom-8 w-6 h-6 bg-navy rounded-full" />

              {/* Perforation line */}
              <div className="absolute top-1/2 left-4 right-4 border-t-2 border-dashed border-navy/20" />

              <div className="pb-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-navy/60 mb-1">
                      Boarding Pass
                    </p>
                    <p className="text-2xl font-bold text-navy">VOLANDO</p>
                  </div>
                  <PlaneIcon className="w-8 h-8 text-navy" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-navy/50 text-xs uppercase tracking-wider mb-1">Pasajero</p>
                    <p className="font-semibold text-navy">TÚ</p>
                  </div>
                  <div>
                    <p className="text-navy/50 text-xs uppercase tracking-wider mb-1">Vuelo</p>
                    <p className="font-semibold text-navy">VLC-001</p>
                  </div>
                  <div>
                    <p className="text-navy/50 text-xs uppercase tracking-wider mb-1">Salida</p>
                    <p className="font-semibold text-navy">VALENCIA</p>
                  </div>
                  <div>
                    <p className="text-navy/50 text-xs uppercase tracking-wider mb-1">Destino</p>
                    <p className="font-semibold text-navy">DESCONEXIÓN</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-navy/60 mb-1">
                      Estado
                    </p>
                    <p className="text-lg font-bold text-navy">EMBARQUE ABIERTO</p>
                  </div>
                  <div className="w-16 h-16 border-2 border-navy rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-navy">VALID</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Ticket className="w-5 h-5 text-cream/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-cream/60 font-medium">
                Entradas
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-6">
              Consigue tu
              <br />
              boarding pass
            </h2>

            <p className="text-cream/70 text-lg mb-4">
              Las entradas para el próximo vuelo ya están disponibles. Reserva tu sitio antes de que cierre el embarque.
            </p>

            <p className="text-cream/50 italic mb-8">
              Tu entrada es tu billete. Tu destino: Volando.
            </p>

            <a
              href="https://www.fourvenues.com/volando-valencia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-cream text-navy font-semibold tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <Ticket className="w-4 h-4" />
              Comprar entrada en Events
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-cream/40">
              <span className="uppercase tracking-wider">Boarding pass</span>
              <span>·</span>
              <span className="uppercase tracking-wider">Reservar vuelo</span>
              <span>·</span>
              <span className="uppercase tracking-wider">Entrar en lista</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20" />
      <path d="M13 2l4 10-4 10" />
      <path d="M17 12H9.5a2.5 2.5 0 0 1 0-5H14" />
    </svg>
  );
}
