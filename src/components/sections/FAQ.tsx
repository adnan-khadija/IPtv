"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ content }: { content?: any }) {
  const [openId, setOpenId] = useState<number | null>(null);

  if (!content) return null;
  const c = content;

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="section-padding relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(229,9,20,0.03) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black font-title text-white uppercase mb-4 tracking-tighter"
          >
            {c.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto"
          >
            {c.subtitle}
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {c.questions.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                openId === i
                  ? "border-[var(--color-accent)]/40 bg-[#141414]"
                  : "border-white/5 bg-[#141414] hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openId === i}
              >
                <span className="text-sm font-semibold text-white pr-2">
                  {item.q}
                </span>
                <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${openId === i ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10' : 'border-white/10 bg-white/5'}`}>
                  {openId === i ? (
                    <Minus size={12} className="text-[var(--color-accent)]" />
                  ) : (
                    <Plus size={12} className="text-gray-400" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openId === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
