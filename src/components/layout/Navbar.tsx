"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { contentFr } from "@/lib/content/fr";
import { contentEn } from "@/lib/content/en";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || "";
  
  const isEn = pathname.startsWith("/en");
  const currentLang = isEn ? "en" : "fr";
  const content = isEn ? contentEn.nav : contentFr.nav;

  const navLinks = [
    { href: `/${currentLang}/#features`, label: content.features },
    { href: `/${currentLang}/#pricing`, label: content.pricing },
    { href: `/${currentLang}/#devices`, label: content.devices },
    { href: `/${currentLang}/#faq`, label: content.faq },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLang = isEn ? "fr" : "en";
  const otherLangFlag = isEn ? "🇫🇷 FR" : "🇬🇧 EN";
  // Simple regex to replace current lang in path
  const switchLangHref = pathname.replace(`/${currentLang}`, `/${otherLang}`);

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-[var(--color-accent)] text-white text-center py-2 text-sm font-bold tracking-wide">
        {content.promoBanner}
      </div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/95 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href={`/${currentLang}`} className="flex items-center gap-2 group">
              <span className="text-2xl font-black font-title tracking-tight text-[var(--color-accent)] uppercase">
                StreamVault
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                href={switchLangHref || `/${otherLang}`}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                {otherLangFlag}
              </Link>
              
              <Link
                href={`/${currentLang}/#pricing`}
                className="flex items-center gap-1.5 px-6 py-2 text-sm font-bold text-white rounded bg-[var(--color-accent)] hover:bg-[#b20710] shadow-lg glow-red-hover transition-all duration-200"
              >
                {content.getStarted} <ChevronRight size={14} />
              </Link>
            </div>

            {/* Mobile buttons */}
            <div className="flex md:hidden items-center gap-4">
              <Link 
                href={switchLangHref || `/${otherLang}`}
                className="text-sm font-medium text-gray-400"
              >
                {otherLangFlag.split(' ')[0]} {/* Just the flag on mobile */}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded text-gray-300 hover:bg-white/5 transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[104px] z-40 bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
                <Link
                  href={`/${currentLang}/#pricing`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-bold text-white rounded bg-[var(--color-accent)]"
                >
                  {content.getStarted} <ChevronRight size={14} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
