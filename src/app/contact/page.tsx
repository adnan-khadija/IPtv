import type { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";

const BASE_URL = "https://tvsuisse.ch";

export const metadata: Metadata = {
  title: "Kontakt | 24/7 IPTV Schweiz Support",
  description: "Kontaktieren Sie unser IPTV-Schweiz-Support-Team direkt auf WhatsApp. Schnelle Antwort in unter 2 Minuten, 24 Stunden am Tag, 7 Tage die Woche.",
  keywords: ["IPTV Support Schweiz", "IPTV Kontakt", "IPTV WhatsApp", "IPTV Kundendienst Schweiz"],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Kontakt | 24/7 IPTV Schweiz Support",
    description: "Kontaktieren Sie unser IPTV-Schweiz-Support-Team direkt auf WhatsApp. Schnelle Antwort in unter 2 Minuten.",
    url: `${BASE_URL}/contact`,
    locale: "de_CH",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "IPTV Schweiz Support" }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE_URL}/contact#webpage`,
  url: `${BASE_URL}/contact`,
  name: "Kontakt — StreamVault Support",
  description: "Support rund um die Uhr via WhatsApp für StreamVault IPTV Schweiz.",
  inLanguage: "de-CH",
  isPartOf: { "@id": `${BASE_URL}/#website` },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <ContactContent />
    </>
  );
}
