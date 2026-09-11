"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Check, Shield, Zap, Monitor, Clock } from "lucide-react";

// WhatsApp Business number (digits only, with country code, no +)
const WHATSAPP_NUMBER = "212699105831";

interface PricingProps {
  content?: {
    title: string;
    subtitle: string;
    prices: Record<string, { normal: number; promo: number }>;
    badges: {
      bestSeller: string;
      save: string;
      perMonth: string;
    };
    durations: Record<number | string, string>;
    featuresList: string[];
    cta: string;
    whatsappMessage?: string;
    reassurance: string[];
  };
}

export default function Pricing({ content }: PricingProps) {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const isDe = pathname.startsWith("/de");
  const lang = isEn ? "en" : isDe ? "de" : "fr";
  void lang;

  if (!content) return null;

  const c = content;
  const durations = [1, 3, 6, 12];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden bg-[#050505]">
      {/* Background glow */}
      <div className="absolute top-0 inset-x-0 flex justify-center">
        <div className="w-full max-w-3xl h-64 bg-[var(--color-accent)]/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl sm:text-5xl font-black font-title text-white uppercase mb-4 tracking-tighter drop-shadow-lg">
            {c.title}
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] font-medium max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>


        {/* Cards Grid — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {durations.map((months, i) => {
            const data = c.prices[String(months)];
            const isBestSeller = months === 12;
            const savings = data.normal - data.promo;
            const perMonth = (data.promo / months).toFixed(2);

            return (
              <motion.div
                key={months}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-xl overflow-hidden bg-[#141414] border transition-all duration-300 hover:-translate-y-2 ${
                  isBestSeller
                    ? "border-[var(--color-accent)] shadow-[0_0_30px_rgba(229,9,20,0.18)] lg:scale-105 z-10"
                    : "border-white/5 hover:border-white/20 z-0"
                }`}
              >
                {isBestSeller && (
                  <div className="absolute top-0 inset-x-0 flex justify-center">
                    <div className="bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-b shadow-lg">
                      {c.badges.bestSeller}
                    </div>
                  </div>
                )}

                <div className={`p-6 flex-1 flex flex-col ${isBestSeller ? "pt-10" : "pt-6"}`}>
                  {/* Duration title */}
                  <h3 className="text-lg font-bold text-white mb-4">{c.durations[months]}</h3>

                  {/* Promo price */}
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-black text-white font-title tracking-tight">
                      {data.promo}
                      <span className="text-xl ml-1">CHF</span>
                    </span>
                  </div>

                  {/* Original price & per-month */}
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="text-sm text-gray-500 line-through">{data.normal} CHF</span>
                    <span className="text-[var(--color-accent)] font-bold text-xs bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">
                      {c.badges.save} {savings} CHF
                    </span>
                  </div>

                  {/* Per-month breakdown */}
                  {months > 1 && (
                    <p className="text-gray-400 text-xs font-medium mb-5 -mt-2">
                      {c.badges.perMonth.replace("{price}", perMonth)}
                    </p>
                  )}

                  {/* Features list */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {c.featuresList.map((feat: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <Check size={15} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      (c.whatsappMessage ?? `Bonjour, je suis intéressé(e) par l'offre {plan} à {price} CHF. Je souhaite souscrire.`)
                        .replace("{plan}", c.durations[months])
                        .replace("{price}", String(data.promo))
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded text-center font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                      isBestSeller
                        ? "bg-[var(--color-accent)] text-white hover:bg-[#b20710] glow-red-hover"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    <Zap size={16} className={isBestSeller ? "fill-white" : ""} />
                    {c.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto border-t border-white/10 pt-12">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <Shield className="text-[var(--color-accent)]" size={24} />
            </div>
            <span className="text-sm text-gray-300 font-medium leading-tight">{c.reassurance[0]}</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <Zap className="text-[var(--color-accent)]" size={24} />
            </div>
            <span className="text-sm text-gray-300 font-medium leading-tight">{c.reassurance[1]}</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <Clock className="text-[var(--color-accent)]" size={24} />
            </div>
            <span className="text-sm text-gray-300 font-medium leading-tight">{c.reassurance[2]}</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <Monitor className="text-[var(--color-accent)]" size={24} />
            </div>
            <span className="text-sm text-gray-300 font-medium leading-tight">{c.reassurance[3]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
