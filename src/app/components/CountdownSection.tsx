"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Timer, Plane } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const targetDate = new Date("2026-05-15T23:30:00");

function calculateTimeLeft(): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const phrases = [
  "El vuelo está a punto de cerrar puertas.",
  "Última llamada para embarcar.",
  "Cuando el contador llegue a cero, Valencia despega.",
  "No llegues tarde al embarque.",
];

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-navy text-cream w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
        <span className="text-2xl sm:text-4xl md:text-5xl font-bold font-mono-nums tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
        {/* Ticket notches */}
        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-6 bg-cream rounded-r-full" />
        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-6 bg-cream rounded-l-full" />
      </div>
      <span className="mt-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-navy/70 font-medium">
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const phraseTimer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(phraseTimer);
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-cream px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Timer className="w-5 h-5 text-navy/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-navy/60 font-medium">
              Próximo despegue
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Próximo despegue en:
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-2 sm:gap-6 md:gap-8 mb-12"
        >
          <CountdownUnit value={mounted ? timeLeft.days : 0} label="Días" />
          <CountdownUnit value={mounted ? timeLeft.hours : 0} label="Horas" />
          <CountdownUnit value={mounted ? timeLeft.minutes : 0} label="Minutos" />
          <CountdownUnit value={mounted ? timeLeft.seconds : 0} label="Segundos" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p
            key={phraseIndex}
            className="text-lg text-navy/70 italic transition-opacity duration-500"
          >
            {phrases[phraseIndex]}
          </p>
        </motion.div>

        {/* Decorative dashed line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px dashed-line opacity-30" />
          <Plane className="w-4 h-4 text-navy/30 rotate-[-45deg]" />
          <div className="flex-1 h-px dashed-line opacity-30" />
        </div>
      </div>
    </section>
  );
}
