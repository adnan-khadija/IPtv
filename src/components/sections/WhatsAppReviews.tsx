"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Maximize2, X, ShieldCheck, ZoomIn, CheckCheck } from "lucide-react";

// ✅ Screenshots WhatsApp (images déposées dans public/whatsapp-screenshots/)
const SCREENSHOTS = [
  "/whatsapp-screenshots/image.png",
  "/whatsapp-screenshots/image2.png",
];

interface WhatsAppReviewsProps {
  content?: {
    title: string;
    subtitle: string;
    agentName?: string;
    statusOnline: string;
    placeholderMessage: string;
    today: string;
    reviews: unknown[];
  };
}

export default function WhatsAppReviews({ content }: WhatsAppReviewsProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const total = SCREENSHOTS.length;

  useEffect(() => {
    if (!isAutoPlaying || total <= 1 || lightboxOpen) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, total, lightboxOpen]);

  // Fermer la modal avec Echap / Flèches clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (lightboxOpen && e.key === "ArrowLeft") prev();
      if (lightboxOpen && e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, current]);

  if (!content) return null;
  const c = content;

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const prev = () => goTo((current - 1 + total) % total);
  const next = () => goTo((current + 1) % total);

  return (
    <section id="reviews" className="section-padding relative overflow-hidden bg-[#0a0a0a]">
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,211,102,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4"
          >
            <MessageCircle size={14} className="fill-emerald-400 text-emerald-400" />
            <span>Avis Clients Authentiques</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-title text-white uppercase mb-4 tracking-tighter"
          >
            {c.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto"
          >
            {c.subtitle}
          </motion.p>
        </div>

        {/* WhatsApp Frame Container */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md sm:max-w-xl mx-auto"
          >
            {/* Ambient outer glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-emerald-500/20 to-green-600/5 blur-xl pointer-events-none" />

            {/* Main WhatsApp Card Container */}
            <div className="relative rounded-3xl bg-[#0b141a] border border-emerald-500/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Card Top Header */}
              <div className="bg-[#111b21] px-5 py-3.5 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600/20 border border-emerald-500/30 text-emerald-400">
                    <MessageCircle size={20} className="fill-emerald-400 text-emerald-400" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#111b21]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-semibold text-white tracking-wide">
                        StreamVault Support
                      </h3>
                      <ShieldCheck size={14} className="text-emerald-400 fill-emerald-400/20" />
                    </div>
                    <p className="text-[11px] text-emerald-400/90 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      Captures d'écran WhatsApp réelles
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    title="Agrandir la capture d'écran"
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>
              </div>

              {/* Display Area for Screenshot (Flexible Height, Natural Ratio) */}
              <div className="relative p-4 sm:p-6 bg-[#0b141a] min-h-[350px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 50 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative flex items-center justify-center w-full group cursor-pointer"
                    onClick={() => setLightboxOpen(true)}
                  >
                    {/* Natural Ratio Screenshot Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[480px] sm:max-h-[540px]">
                      <img
                        src={SCREENSHOTS[current]}
                        alt={`Capture d'écran WhatsApp ${current + 1}`}
                        className="w-auto h-auto max-h-[480px] sm:max-h-[540px] max-w-full object-contain mx-auto block"
                      />

                      {/* Hover Overlay Zoom Prompt */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-4 py-2 rounded-full bg-emerald-500 text-black text-xs font-bold tracking-wide flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Maximize2 size={14} />
                          Agrandir la capture
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card Footer Bar */}
              <div className="bg-[#111b21] px-5 py-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1 text-emerald-400/80 font-medium">
                  <CheckCheck size={15} /> Message d'origine vérifié
                </span>
                <span className="text-[11px] text-gray-500 font-mono">
                  {current + 1} / {total}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          {total > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                aria-label="Capture précédente"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Thumbnails */}
              <div className="flex items-center gap-2">
                {SCREENSHOTS.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`relative rounded-lg overflow-hidden border transition-all duration-300 ${
                      i === current
                        ? "w-10 h-10 border-emerald-500 scale-105 shadow-md shadow-emerald-500/20"
                        : "w-8 h-8 border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
                    }`}
                    aria-label={`Aller à la capture ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Miniature ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                aria-label="Capture suivante"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>

              {/* Lightbox Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0b141a]"
              >
                <img
                  src={SCREENSHOTS[current]}
                  alt={`Capture grand format ${current + 1}`}
                  className="max-h-[80vh] w-auto max-w-full object-contain block mx-auto"
                />
              </motion.div>

              {/* Lightbox Navigation */}
              {total > 1 && (
                <div className="flex items-center gap-6 mt-6">
                  <button
                    onClick={prev}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Précédent"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <span className="text-sm font-medium text-white/80">
                    {current + 1} / {total}
                  </span>
                  <button
                    onClick={next}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Suivant"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
