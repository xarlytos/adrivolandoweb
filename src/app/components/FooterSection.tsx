"use client";

import { motion } from "framer-motion";
import { Instagram, Ticket, Mail, Plane, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Instagram", href: "https://instagram.com/volandovalencia", icon: Instagram },
  { label: "Events / Entradas", href: "#entradas", icon: Ticket },
  { label: "Contacto", href: "mailto:info@volandovalencia.com", icon: Mail },
];

export default function FooterSection() {
  return (
    <footer className="bg-navy text-cream px-4 pt-20 pb-8">
      <div className="max-w-4xl mx-auto">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Plane className="w-6 h-6 rotate-[-45deg]" />
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              VOLANDO
            </span>
          </div>
          <p className="text-cream/60 text-lg mb-1">VALENCIA</p>
          <p className="text-cream/50 text-sm tracking-[0.15em] uppercase mb-2">Indiana Valencia</p>
          <p className="text-cream/40 italic">
            Modo avión activado. Próximo destino: desconexión.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-16"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-2 px-5 py-3 border border-cream/20 hover:border-cream/40 hover:bg-cream/5 transition-all duration-300"
            >
              <link.icon className="w-4 h-4 text-cream/60 group-hover:text-cream transition-colors" />
              <span className="text-sm uppercase tracking-wider text-cream/80 group-hover:text-cream transition-colors">
                {link.label}
              </span>
              {link.href.startsWith("http") && (
                <ArrowUpRight className="w-3 h-3 text-cream/40 group-hover:text-cream transition-colors" />
              )}
            </a>
          ))}
        </motion.div>

        {/* Legal links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-12 text-xs text-cream/40 uppercase tracking-wider"
        >
          <a href="#" className="hover:text-cream/60 transition-colors">
            Política de privacidad
          </a>
          <a href="#" className="hover:text-cream/60 transition-colors">
            Aviso legal
          </a>
          <a href="#" className="hover:text-cream/60 transition-colors">
            Cookies
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30 uppercase tracking-wider">
            © 2026 Volando Valencia. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-cream/30">
            <Plane className="w-3 h-3 rotate-[-45deg]" />
            <span className="uppercase tracking-wider">VLC · Destino: Desconexión</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
