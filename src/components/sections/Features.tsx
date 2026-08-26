"use client";

import { motion } from "framer-motion";
import {
  Tv2, Radio, Film, Smartphone,
} from "lucide-react";

const defaultIcons = [Tv2, Radio, Film, Smartphone];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

interface FeatureItem {
  title: string;
  description: string;
}

interface FeaturesProps {
  content?: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
}

export default function Features({ content }: FeaturesProps) {
  if (!content) return null;
  const c = content;

  return (
    <section id="features" className="section-padding relative overflow-hidden bg-[#0a0a0a]">
      {/* Background glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(229,9,20,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-black font-title text-white mb-4 uppercase tracking-tighter"
          >
            {c.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
          >
            {c.subtitle}
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.items.map((feature: FeatureItem, i: number) => {
            const Icon = defaultIcons[i] || Tv2;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-[#141414] border border-white/5 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent rounded-bl-3xl rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col gap-4">
                  {/* Icon */}
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/30 transition-all">
                    <Icon size={24} strokeWidth={1.5} className="text-gray-400 group-hover:text-[var(--color-accent)] transition-colors" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
