"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plane, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Dónde compro mi entrada?",
    answer: "Puedes comprarla a través del link oficial de Events. También puedes acceder desde el botón 'Comprar entradas' en esta web.",
  },
  {
    question: "¿La fiesta es +18?",
    answer: "Sí, el acceso es exclusivo para mayores de 18 años. Es obligatorio presentar documento de identidad válido en la entrada.",
  },
  {
    question: "¿Dónde se celebra?",
    answer: "La fiesta se celebra en Indiana Valencia (Calle de San Vicente Mártir, 95, 46007 Valencia). Consulta la sección 'Próximo vuelo' para más detalles.",
  },
  {
    question: "¿Hay que llevar DNI?",
    answer: "Sí, es obligatorio llevar documento de identidad. Puedes presentarlo físico o en foto desde el móvil. Sin DNI no se permitirá el acceso, sin excepciones.",
  },
  {
    question: "¿Puedo entrar si llego tarde?",
    answer: "El acceso estará sujeto al horario y aforo de la sala. Recomendamos llegar con antelación para garantizar la entrada.",
  },
  {
    question: "¿Hay dress code?",
    answer: "Ven arreglado, cómodo y preparado para despegar. No es necesario ir de traje, pero sí con buen rollo y ganas de pasarlo bien.",
  },
  {
    question: "¿Dónde veo las fotos?",
    answer: "Las fotos y contenido de la fiesta se publicarán en Instagram. Síguenos en @volandovalencia para no perderte nada.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-navy/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-navy font-medium pr-4 group-hover:text-navy-light transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-navy/50 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-navy/70 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-5 h-5 text-navy/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-navy/60 font-medium">
              Preguntas frecuentes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight">
            FAQ / Información
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-navy/10 p-6 sm:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </motion.div>

        {/* Decorative element */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="flex-1 h-px dashed-line opacity-30" />
          <Plane className="w-4 h-4 text-navy/30 rotate-[-45deg]" />
          <div className="flex-1 h-px dashed-line opacity-30" />
        </div>
      </div>
    </section>
  );
}
