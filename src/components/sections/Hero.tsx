"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Shield, Star, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

interface HeroProps {
  content?: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    reassurance: string;
  };
}

export default function Hero({ content }: HeroProps) {
  const c = content || {
    title: "Le cinéma chez vous, sans compromis.",
    subtitle: "Accédez à plus de 20 000 chaînes en direct et 40 000+ films & séries en VOD. Haute qualité d'image, sans coupure, sans engagement.",
    cta1: "Voir les offres",
    cta2: "Découvrir les chaînes",
    reassurance: "Activation en moins de 2h • Sans engagement • Support 24/7"
  };

  const reassurances = c.reassurance.split('•').map((s: string) => s.trim());

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#050505]">
      {/* Cinematic Backdrop Image/Gradient */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Dark gradient fade at bottom */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent" />
      
      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:w-2/3 ml-0 md:ml-10">
        
        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-title tracking-tighter leading-[1.1] mb-6 text-white uppercase drop-shadow-2xl"
        >
          {c.title}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl md:text-2xl text-[var(--color-text-secondary)] mb-10 leading-relaxed font-medium drop-shadow-lg max-w-3xl"
        >
          {c.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-start gap-4 mb-10"
        >
          <Link
            href="#pricing"
            className="group flex items-center gap-2 px-8 py-4 text-lg font-bold text-white rounded bg-[var(--color-accent)] hover:bg-[#b20710] shadow-lg glow-red-hover transition-all duration-300"
          >
            <Play size={20} className="fill-white" />
            {c.cta1}
          </Link>
          <Link 
            href="#features"
            className="flex items-center gap-2 px-8 py-4 text-lg font-bold text-white rounded bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all duration-300"
          >
            {c.cta2}
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-secondary)] font-medium"
        >
          {reassurances[0] && (
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-[var(--color-accent)]" />
              <span>{reassurances[0]}</span>
            </div>
          )}
          {reassurances[1] && (
            <>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />
                <span>{reassurances[1]}</span>
              </div>
            </>
          )}
          {reassurances[2] && (
            <>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-[var(--color-accent)]" />
                <span>{reassurances[2]}</span>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
