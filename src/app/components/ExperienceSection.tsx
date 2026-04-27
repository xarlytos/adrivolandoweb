"use client";

import { motion } from "framer-motion";
import { Plane, Sparkles, Music, Wine, Users } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Música",
    description: "Los mejores DJs y sonido que te hará vibrar toda la noche.",
  },
  {
    icon: Sparkles,
    title: "Ambiente",
    description: "Luces, efectos y una atmósfera que te transporta.",
  },
  {
    icon: Wine,
    title: "Copas",
    description: "Barra premium con cócteles y bebidas para todos los gustos.",
  },
  {
    icon: Users,
    title: "Gente",
    description: "La mejor tripulación de Valencia vuela en este vuelo.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Plane className="w-5 h-5 text-navy/60 rotate-[-45deg]" />
            <span className="text-xs uppercase tracking-[0.3em] text-navy/60 font-medium">
              La experiencia
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-6">
            Una fiesta para desconectar de tierra
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Volando no es solo una fiesta. Es el punto de salida para una noche de música, gente, energía y desconexión. Un vuelo nocturno donde el destino no importa: lo importante es cómo se vive el trayecto.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border border-navy/10 bg-white/50 hover:bg-white transition-colors duration-300"
            >
              <feature.icon className="w-8 h-8 text-navy mb-4" />
              <h3 className="text-lg font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-navy/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Young version text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 border-2 border-navy/10 relative"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cream px-4">
            <span className="text-xs uppercase tracking-[0.2em] text-navy/50 font-medium">
              Así de simple
            </span>
          </div>
          <p className="text-lg text-navy/80 italic">
            Llegas, haces check-in, entras en modo avión y te olvidas de todo. Música, luces, copas y una noche que despega desde Valencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
