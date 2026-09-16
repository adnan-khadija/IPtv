import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Devices from "@/components/sections/Devices";
import ChannelsAndVOD from "@/components/sections/ChannelsAndVOD";
import WhatsAppReviews from "@/components/sections/WhatsAppReviews";
import FAQ from "@/components/sections/FAQ";

import { contentDe } from "@/lib/content/de";

const BASE_URL = "https://tvsuisse.ch";

export const metadata: Metadata = {
  title: { absolute: "IPTV Schweiz | Premium IPTV-Abo ab 11.99 CHF" },
  description:
    "IPTV Schweiz Premium: 30 000+ Live-TV-Sender und 90 000+ Filme & Serien. HD/4K ohne Unterbrechung, sofortige Aktivierung. Ab 11.99 CHF/Monat.",
  keywords: [
    "iptv schweiz", "iptv abo schweiz", "bestes iptv schweiz", "iptv schweiz günstig", "iptv schweiz 4k", "iptv abonnement", "schweizer sender iptv", "iptv zürich", "iptv bern", "iptv basel", "iptv ohne unterbrechung",
  ],
  alternates: {
    canonical: `${BASE_URL}`,
  },
  openGraph: {
    title: "IPTV Schweiz | Premium IPTV-Abonnement 30 000+ Sender",
    description: "IPTV Schweiz Premium: 30 000+ Live-Sender, 90 000+ Filme & Serien. HD/4K ohne Unterbrechung. Ab 11.99 CHF/Monat.",
    url: `${BASE_URL}`,
    locale: "de_CH",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "StreamVault Premium IPTV" }],
  },
};

// Schema.org — Startseite DE: Angebot + FAQ
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: `${BASE_URL}`,
      name: "IPTV Schweiz — Premium IPTV-Abonnement",
      description: "IPTV Schweiz Premium: 30 000+ HD/4K-Sender und 90 000+ VOD. Sofortige Aktivierung, ohne Unterbrechung.",
      inLanguage: "de-CH",
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@type": "ItemList",
      name: "StreamVault IPTV-Angebote",
      description: "Verfügbare Premium-IPTV-Abonnements",
      itemListElement: [
        {
          "@type": "Offer",
          position: 1,
          name: "IPTV-Abonnement 1 Monat",
          price: "11.99",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 2,
          name: "IPTV-Abonnement 3 Monate",
          price: "19.99",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 3,
          name: "IPTV-Abonnement 6 Monate",
          price: "30.99",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 4,
          name: "IPTV-Abonnement 12 Monate",
          price: "45.99",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: contentDe.faq.questions.map((item: { q: string; a: string }) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Hero content={contentDe.hero} pricing={contentDe.pricing} />
      <ChannelsAndVOD content={contentDe.sliders} />
      <Features content={contentDe.features} />
      <Pricing content={contentDe.pricing} />
      <Devices content={contentDe.devices} />
      <WhatsAppReviews content={contentDe.whatsappReviews} />
      <FAQ content={contentDe.faq} />
    </>
  );
}
