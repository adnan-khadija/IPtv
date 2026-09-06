"use client";

import { motion } from "framer-motion";
import type { SVGProps } from "react";

const WHATSAPP_NUMBER = "212699105831";

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(37,211,102,0.08) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 hero-grid opacity-20" />

      <div className="relative z-10 max-w-xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-sm font-semibold text-[#25D366] uppercase tracking-widest mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          Support available 24/7
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight"
        >
          Contact us on{" "}
          <span style={{ color: "#25D366" }}>WhatsApp</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 max-w-sm mx-auto"
        >
          Our team replies in under 2 minutes. Ask questions, place an order or get help directly on WhatsApp.
        </motion.p>

        {/* WhatsApp Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#141414] border border-[#25D366]/20 rounded-2xl p-8 mb-8 shadow-[0_0_40px_rgba(37,211,102,0.08)]"
        >
          <div className="w-20 h-20 rounded-full bg-[#25D366]/15 flex items-center justify-center mx-auto mb-6">
            <WhatsAppIcon className="w-10 h-10 text-[#25D366]" />
          </div>

          <p className="text-white font-bold text-xl mb-1">StreamVault Support</p>
          <p className="text-gray-500 text-sm mb-6">+{WHATSAPP_NUMBER.replace(/(\d{3})(\d{2})(\d{2})(\d{2})(\d{3})(\d{3})/, "$1 $2 $3 $4 $5 $6")}</p>

          <a
            id="whatsapp-contact-btn-en"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I have a question about your IPTV offers.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)]"
            style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
          >
            <WhatsAppIcon className="w-6 h-6" />
            Contact us on WhatsApp
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 text-center"
        >
          {[
            { value: "< 2 min", label: "Response time" },
            { value: "24/7", label: "Availability" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-[#25D366] font-black text-xl">{stat.value}</p>
              <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
