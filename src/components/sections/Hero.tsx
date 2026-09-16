"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Star, Zap } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

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
  /** Pricing content — used to build the 12-month WhatsApp order link. */
  pricing?: {
    durations: Record<number | string, string>;
    prices: Record<string, { normal: number; promo: number }>;
    whatsappMessage?: string;
  };
}

export default function Hero({ content, pricing }: HeroProps) {
  const c = content || {
    title: "Le cinéma chez vous, sans compromis.",
    subtitle: "Accédez à plus de 20 000 chaînes en direct et 40 000+ films & séries en VOD. Haute qualité d'image, sans coupure, sans engagement.",
    cta1: "Voir les offres",
    cta2: "Découvrir les chaînes",
    reassurance: "Activation en moins de 2h • Sans engagement • Support 24/7"
  };

  const reassurances = c.reassurance.split('•').map((s: string) => s.trim());

  // Primary CTA orders the 12-month plan over WhatsApp, matching the pricing cards.
  const annual = pricing?.prices?.["12"];
  const orderAnnualHref = annual
    ? waLink(
        (pricing?.whatsappMessage ?? "Bonjour, je suis intéressé(e) par l'offre {plan} à {price} CHF. Je souhaite souscrire.")
          .replace("{plan}", String(pricing?.durations?.[12] ?? "12"))
          .replace("{price}", String(annual.promo))
      )
    : null;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#050505]">
      {/* Cinematic backdrop video. Decorative only — muted, looping, no controls. */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-40 motion-reduce:hidden"
        src="/hero.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Still frame for reduced-motion users (and while the video buffers) */}
      <div
        className="absolute inset-0 z-0 hidden bg-cover bg-center opacity-40 motion-reduce:block"
        style={{ backgroundImage: "url('/hero-poster.jpg')" }}
        aria-hidden="true"
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
          {orderAnnualHref ? (
            <a
              href={orderAnnualHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 text-lg font-bold text-white rounded bg-[var(--color-accent)] hover:bg-[#b20710] shadow-lg glow-red-hover transition-all duration-300"
            >
              {c.cta1}
            </a>
          ) : (
            <Link
              href="#pricing"
              className="group flex items-center gap-2 px-8 py-4 text-lg font-bold text-white rounded bg-[var(--color-accent)] hover:bg-[#b20710] shadow-lg glow-red-hover transition-all duration-300"
            >
              {c.cta1}
            </Link>
          )}
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
