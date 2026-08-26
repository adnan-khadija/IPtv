"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, Video, MoreVertical, Smile, Paperclip, Mic, MessageCircle } from "lucide-react";

interface WhatsAppMessage {
  sender: string;
  text: string;
}

interface WhatsAppReview {
  name: string;
  avatar: string;
  messages: WhatsAppMessage[];
}

interface WhatsAppReviewsProps {
  content?: {
    title: string;
    subtitle: string;
    agentName?: string;
    statusOnline: string;
    placeholderMessage: string;
    today: string;
    reviews: WhatsAppReview[];
  };
}

export default function WhatsAppReviews({ content }: WhatsAppReviewsProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const total = content?.reviews?.length || 0;

  useEffect(() => {
    if (!content || !isAutoPlaying || total === 0) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, total, content]);

  if (!content) return null;
  const c = content;

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => goTo((current - 1 + total) % total);
  const next = () => goTo((current + 1) % total);

  // Get visible reviews for desktop (shows 2 cards for a balanced side-by-side look)
  const visibleIndices = [0, 1].map((offset) => (current + offset) % total);

  return (
    <section id="reviews" className="section-padding relative overflow-hidden bg-[#0a0a0a]">
      {/* Background radial glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,211,102,0.03) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-xs font-semibold text-green-400 uppercase tracking-widest mb-4"
          >
            <MessageCircle size={13} className="fill-green-400 text-green-400" />
            ★ WhatsApp Reviews
          </motion.div>
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

        {/* Desktop Carousel - displays 2 mockup screens side-by-side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {visibleIndices.map((idx, offset) => {
            const review = c.reviews[idx];
            return (
              <motion.div
                key={`${idx}-${offset}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: offset * 0.1 }}
                className="w-full max-w-[380px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0b141a] flex flex-col h-[520px]"
              >
                {/* WhatsApp header */}
                <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between shrink-0 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">{review.name}</h4>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] text-green-400 font-medium">{c.statusOnline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#aebac1]">
                    <Video size={18} className="cursor-pointer hover:text-white transition-colors" />
                    <Phone size={16} className="cursor-pointer hover:text-white transition-colors" />
                    <MoreVertical size={18} className="cursor-pointer hover:text-white transition-colors" />
                  </div>
                </div>

                {/* WhatsApp Chat Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#0b141a] relative"
                     style={{
                       backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22%3E%3Cg fill=%22%2325D366%22 fill-opacity=%220.015%22%3E%3Cpath d=%22M0 0h40v40H0zm40 40h40v40H40z%22/%3E%3C/g%3E%3C/svg%3E')"
                     }}>
                  {/* Date Badge */}
                  <div className="flex justify-center my-2">
                    <span className="bg-[#182229] text-[#8696a0] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {c.today}
                    </span>
                  </div>

                  {/* Messages Bubble Flow */}
                  {review.messages.map((msg: WhatsAppMessage, mIdx: number) => {
                    const isClient = msg.sender === "client";
                    return (
                      <div
                        key={mIdx}
                        className={`flex w-full ${isClient ? "justify-start" : "justify-end"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-md relative ${
                            isClient
                              ? "bg-[#202c33] text-white rounded-tl-none"
                              : "bg-[#005c4b] text-white rounded-tr-none"
                          }`}
                        >
                          <p className="leading-relaxed pr-8 whitespace-pre-wrap">{msg.text}</p>
                          <div className="absolute bottom-1 right-2 flex items-center gap-1">
                            <span className="text-[9px] text-[#8696a0]">14:2{mIdx}</span>
                            {!isClient && (
                              <span className="text-[#53bdeb] text-[10px] font-bold leading-none">✓✓</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* WhatsApp Chat Footer Mock */}
                <div className="bg-[#202c33] px-3 py-2.5 flex items-center gap-2.5 shrink-0">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-3.5 py-2 flex items-center gap-2 text-[#8696a0]">
                    <Smile size={20} className="cursor-pointer hover:text-white transition-colors" />
                    <span className="text-sm select-none truncate flex-1">{c.placeholderMessage}</span>
                    <Paperclip size={18} className="cursor-pointer hover:text-white transition-colors rotate-45" />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-md">
                    <Mic size={18} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / Tablet Carousel - displays 1 mockup screen */}
        <div className="lg:hidden mb-10 max-w-[380px] mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.35 }}
              className="w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0b141a] flex flex-col h-[520px]"
            >
              {/* WhatsApp header */}
              <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between shrink-0 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                    {c.reviews[current].avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{c.reviews[current].name}</h4>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] text-green-400 font-medium">{c.statusOnline}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[#aebac1]">
                  <Video size={18} />
                  <Phone size={16} />
                  <MoreVertical size={18} />
                </div>
              </div>

              {/* WhatsApp Chat Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#0b141a] relative"
                   style={{
                     backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22%3E%3Cg fill=%22%2325D366%22 fill-opacity=%220.015%22%3E%3Cpath d=%22M0 0h40v40H0zm40 40h40v40H40z%22/%3E%3C/g%3E%3C/svg%3E')"
                   }}>
                {/* Date Badge */}
                <div className="flex justify-center my-2">
                  <span className="bg-[#182229] text-[#8696a0] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {c.today}
                  </span>
                </div>

                {/* Messages Bubble Flow */}
                {c.reviews[current].messages.map((msg: WhatsAppMessage, mIdx: number) => {
                  const isClient = msg.sender === "client";
                  return (
                    <div
                      key={mIdx}
                      className={`flex w-full ${isClient ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-md relative ${
                          isClient
                            ? "bg-[#202c33] text-white rounded-tl-none"
                            : "bg-[#005c4b] text-white rounded-tr-none"
                        }`}
                      >
                        <p className="leading-relaxed pr-8">{msg.text}</p>
                        <div className="absolute bottom-1 right-2 flex items-center gap-1">
                          <span className="text-[9px] text-[#8696a0]">14:2{mIdx}</span>
                          {!isClient && (
                            <span className="text-[#53bdeb] text-[10px] font-bold leading-none">✓✓</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp Chat Footer Mock */}
              <div className="bg-[#202c33] px-3 py-2.5 flex items-center gap-2.5 shrink-0">
                <div className="flex-1 bg-[#2a3942] rounded-full px-3.5 py-2 flex items-center gap-2 text-[#8696a0]">
                  <Smile size={20} />
                  <span className="text-sm select-none truncate flex-1">{c.placeholderMessage}</span>
                  <Paperclip size={18} className="rotate-45" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Mic size={18} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-green-500/40 hover:bg-green-500/5 transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 bg-green-500"
                    : "bg-[var(--color-border)] hover:bg-green-500/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-green-500/40 hover:bg-green-500/5 transition-all"
            aria-label="Next review"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
