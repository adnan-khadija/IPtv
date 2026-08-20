"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Send } from "lucide-react";
import { contentFr } from "@/lib/content/fr";
import { contentEn } from "@/lib/content/en";

const socialLinks = [
  {
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "#",
    label: "Twitter",
  },
  {
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
      </svg>
    ),
    href: "#",
    label: "Facebook",
  },
  {
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    href: "#",
    label: "Instagram",
  },
  {
    icon: (props: any) => (
      <Send {...props} />
    ),
    href: "#",
    label: "Telegram",
  },
];

export default function Footer() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const lang = isEn ? "en" : "fr";
  const c = isEn ? contentEn : contentFr;

  const footerLinks = {
    product: [
      { label: c.nav.features, href: `/${lang}/#features` },
      { label: c.nav.pricing, href: `/${lang}/#pricing` },
      { label: c.nav.devices, href: `/${lang}/#devices` },
      { label: c.nav.faq, href: `/${lang}/#faq` },
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
              <span className="text-2xl font-black font-title text-[var(--color-accent)] uppercase tracking-tight">
                StreamVault
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {c.footer.description}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded bg-[#141414] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/10 transition-all"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
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
