"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const total = testimonials.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, total]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prev = () => goTo((current - 1 + total) % total);
  const next = () => goTo((current + 1) % total);

  // Get 3 visible testimonials (desktop) or 1 (mobile)
  const visibleIndices = [0, 1, 2].map((offset) => (current + offset) % total);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-xs font-semibold text-yellow-300 uppercase tracking-widest mb-4"
          >
            ★ Customer Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-[var(--color-text-primary)] mb-4"
          >
            Loved by <span className="gradient-text">50,000+ Customers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto"
          >
            Don&apos;t take our word for it — see what our customers are saying.
          </motion.p>
        </div>

        {/* Desktop carousel — show 3 */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10">
          {visibleIndices.map((idx, offset) => {
            const t = testimonials[idx];
            return (
              <motion.div
                key={`${idx}-${offset}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: offset * 0.1 }}
                className="card-glass p-6 flex flex-col gap-4 hover:border-blue-500/20 transition-colors"
              >
                <Quote size={20} className="text-blue-500/40" />
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-text-primary)]">{t.name}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">{t.location} · {t.plan}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile carousel — show 1 */}
        <div className="md:hidden mb-8 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.35 }}
              className="card-glass p-6 flex flex-col gap-4"
            >
              <Quote size={20} className="text-blue-500/40" />
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                &quot;{testimonials[current].text}&quot;
              </p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--color-text-primary)]">{testimonials[current].name}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{testimonials[current].location} · {testimonials[current].plan}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-blue-500/40 hover:bg-white/5 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-[var(--color-border)] hover:bg-blue-500/40"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-blue-500/40 hover:bg-white/5 transition-all"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Aggregate rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 card-glass rounded-2xl max-w-md mx-auto"
        >
          <div className="text-center">
            <div className="text-5xl font-black gradient-text">4.9</div>
            <div className="flex items-center justify-center gap-0.5 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-sm font-semibold text-[var(--color-text-primary)]">Excellent Rating</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-0.5">Based on 12,000+ verified reviews</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-0.5">Trustpilot · Google · Facebook</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
