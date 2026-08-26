"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Tv } from "lucide-react";

interface DevicesProps {
  content?: {
    title: string;
    subtitle: string;
  };
}

export default function Devices({ content }: DevicesProps) {
  if (!content) return null;
  const c = content;

  return (
    <section id="devices" className="section-padding relative overflow-hidden bg-[#050505] border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-16"
        >
          {c.subtitle}
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-20 opacity-70">
          <div className="flex flex-col items-center gap-3">
            <Tv size={48} strokeWidth={1} className="text-gray-300" />
            <span className="text-sm font-bold text-gray-400">Smart TV</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Monitor size={48} strokeWidth={1} className="text-gray-300" />
            <span className="text-sm font-bold text-gray-400">Computer</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Smartphone size={48} strokeWidth={1} className="text-gray-300" />
            <span className="text-sm font-bold text-gray-400">Mobile & Tablet</span>
          </div>
        </div>
      </div>
    </section>
  );
}
