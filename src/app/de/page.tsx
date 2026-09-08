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
  title: "StreamVault",
  description:
    "Bester IPTV-Service in der Schweiz, Deutschland und Österreich. 20.000+ HD/4K-Live-Sender, 40.000+ VOD-Filme & Serien. Ohne Unterbrechung, sofortige Aktivierung per WhatsApp. Ab 15 CHF/Monat.",
  keywords: [
    "IPTV-Abonnement", "IPTV Schweiz", "IPTV Deutschland", "IPTV Österreich",
    "bestes IPTV 2024", "günstiges IPTV", "HD IPTV-Sender", "4K IPTV",
    "VOD IPTV", "smart IPTV Abonnement", "IPTV ohne Vertragsbindung",
    "IPTV WhatsApp Aktivierung", "StreamVault IPTV",
  ],
  alternates: {
    canonical: `${BASE_URL}/de`,
    languages: {
      "fr": `${BASE_URL}/fr`,
      "en": `${BASE_URL}/en`,
      "de": `${BASE_URL}/de`,
      "x-default": `${BASE_URL}/fr`,
    },
  },
  openGraph: {
    title: "StreamVault — IPTV-Abonnement | 20.000+ HD-Sender",
    description: "20.000+ IPTV-Sender, 40.000+ VOD-Filme. HD/4K ohne Unterbrechung. Aktivierung über WhatsApp. Ab 15 CHF/Monat.",
    url: `${BASE_URL}/de`,
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
      "@id": `${BASE_URL}/de/#webpage`,
      url: `${BASE_URL}/de`,
      name: "StreamVault — Premium IPTV-Abonnement",
      description: "Bester IPTV-Service 20.000+ HD/4K-Sender. Sofortige Aktivierung.",
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
          price: "15",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 2,
          name: "IPTV-Abonnement 3 Monate",
          price: "30",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 3,
          name: "IPTV-Abonnement 6 Monate",
          price: "50",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 4,
          name: "IPTV-Abonnement 12 Monate",
          price: "79",
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
      <Hero content={contentDe.hero} />
      <ChannelsAndVOD content={contentDe.sliders} />
      <Features content={contentDe.features} />
      <Pricing content={contentDe.pricing} />
      <Devices content={contentDe.devices} />
      <WhatsAppReviews content={contentDe.whatsappReviews} />
      <FAQ content={contentDe.faq} />
    </>
  );
}
