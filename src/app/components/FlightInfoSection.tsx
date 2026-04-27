"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, Music, Shirt, IdCard, Plane } from "lucide-react";

const flightDetails = [
  { icon: MapPin, label: "Destino", value: "Desconexión" },
  { icon: MapPin, label: "Ciudad", value: "Valencia" },
  { icon: Calendar, label: "Fecha", value: "15 de mayo, 2026" },
  { icon: Clock, label: "Hora de salida", value: "00:30h" },
  { icon: Clock, label: "Hora de llegada", value: "07:00h" },
  { icon: MapPin, label: "Terminal", value: "Indiana Valencia" },
  { icon: Shirt, label: "Dress code", value: "Volar alto" },
  { icon: IdCard, label: "Edad mínima", value: "+18" },
  { icon: Music, label: "Música", value: "Reggaeton / Hits / Urbana" },
];

export default function FlightInfoSection() {
  return (
    <section id="proximo-vuelo" className="py-20 sm:py-28 bg-cream px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Plane className="w-5 h-5 text-navy/60 rotate-[-45deg]" />
            <span className="text-xs uppercase tracking-[0.3em] text-navy/60 font-medium">
              Información de vuelo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Próximo vuelo
          </h2>
        </motion.div>

        {/* Boarding pass style card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-navy text-cream relative"
        >
          {/* Ticket notches top */}
          <div className="absolute -left-3 top-1/3 w-6 h-6 bg-cream rounded-full" />
          <div className="absolute -right-3 top-1/3 w-6 h-6 bg-cream rounded-full" />

          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-cream/20">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cream/60 mb-1">
                  Vuelo
                </p>
                <p className="text-2xl font-bold">VOLANDO VLC-001</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-cream/60 mb-1">
                  Estado
                </p>
                <p className="text-lg font-bold text-emerald-400">ON TIME</p>
              </div>
            </div>
          </div>

          {/* Flight route */}
          <div className="px-6 sm:px-8 py-6 border-b border-cream/20">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <p className="text-2xl sm:text-4xl font-bold">VLC</p>
                <p className="text-sm text-cream/60 mt-1">Valencia</p>
              </div>

              <div className="flex-1 mx-2 sm:mx-8 flex items-center gap-2">
                <div className="flex-1 h-px border-t-2 border-dashed border-cream/40" />
                <Plane className="w-5 h-5 text-cream/60 rotate-[-45deg] shrink-0" />
                <div className="flex-1 h-px border-t-2 border-dashed border-cream/40" />
              </div>

              <div className="text-center">
                <p className="text-2xl sm:text-4xl font-bold">DSC</p>
                <p className="text-sm text-cream/60 mt-1">Desconexión</p>
              </div>
            </div>
          </div>

          {/* Details grid */}
          <div className="p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {flightDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <detail.icon className="w-3.5 h-3.5 text-cream/40" />
                  <p className="text-xs uppercase tracking-wider text-cream/50">
                    {detail.label}
                  </p>
                </div>
                <p className="font-semibold text-cream">{detail.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-6 sm:px-8 py-4 bg-cream/5 border-t border-cream/10">
            <p className="text-sm text-cream/60 text-center">
              Puertas abiertas desde las 00:30h · Embarque prioritario disponible
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
