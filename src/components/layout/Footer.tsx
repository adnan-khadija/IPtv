"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contentFr } from "@/lib/content/fr";
import { contentEn } from "@/lib/content/en";

import type { SVGProps } from "react";

// WhatsApp Business number (digits only, with country code, no +)
const WHATSAPP_NUMBER = "212699105831";

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const lang = isEn ? "en" : "fr";
  const c = isEn ? contentEn : contentFr;

  const footerLinks = {
    product: [
      { label: c.nav.home, href: `/${lang}/` },
      { label: c.nav.channels, href: `/${lang}/#channels` },
      { label: c.nav.faq, href: `/${lang}/#faq` },
      { label: c.nav.contact, href: `/${lang}/contact` },
    ],
    legal: [
      { label: c.footer.terms, href: `/${lang}/terms` },
      { label: c.footer.privacy, href: `/${lang}/privacy` },
      { label: c.footer.refund, href: `/${lang}/refund` },
    ],
  };

  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${lang}`} className="flex items-center gap-2 mb-4 group">
              <svg className="w-8 h-8 text-[var(--color-accent)] fill-[var(--color-accent)]/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
                <path d="M17 2H7L12 5L17 2Z" fill="currentColor"/>
                <polygon points="10 9 15 12 10 15 10 9" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span className="text-2xl font-black font-title text-[var(--color-accent)] uppercase tracking-tight">
                StreamVault
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {c.footer.description}
            </p>
            {/* WhatsApp Business */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all text-sm font-semibold"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">{c.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">{c.footer.legal}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} StreamVault. {c.footer.rights}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>🔒 Secure payments</span>
            <span className="hidden sm:inline">•</span>
            <span>256-bit SSL Encryption</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
