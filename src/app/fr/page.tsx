import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Devices from "@/components/sections/Devices";
import ChannelsAndVOD from "@/components/sections/ChannelsAndVOD";
import WhatsAppReviews from "@/components/sections/WhatsAppReviews";
import FAQ from "@/components/sections/FAQ";

import { contentFr } from "@/lib/content/fr";

const BASE_URL = "https://tvsuisse.ch";

export const metadata: Metadata = {
  title: "StreamVault",
  description:
    "Meilleur service IPTV en France, Suisse, Belgique et Maroc. 20 000+ chaînes HD/4K en direct, 40 000+ films & séries VOD. Sans coupure, activation instantanée par WhatsApp. Dès 15 CHF/mois.",
  keywords: [
    "abonnement IPTV", "IPTV France", "IPTV Suisse", "IPTV Belgique", "IPTV Maroc",
    "meilleur IPTV 2024", "IPTV pas cher", "chaînes IPTV HD", "IPTV 4K",
    "VOD IPTV", "smart IPTV abonnement", "IPTV sans engagement",
    "IPTV activation WhatsApp", "StreamVault IPTV",
  ],
  alternates: {
    canonical: `${BASE_URL}/fr`,
    languages: {
      "fr": `${BASE_URL}/fr`,
      "en": `${BASE_URL}/en`,
      "x-default": `${BASE_URL}/fr`,
    },
  },
  openGraph: {
    title: "StreamVault — Abonnement IPTV | 20 000+ Chaînes HD",
    description: "20 000+ chaînes IPTV, 40 000+ films VOD. HD/4K sans coupure. Activation via WhatsApp. Dès 15 CHF/mois.",
    url: `${BASE_URL}/fr`,
    locale: "fr_FR",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "StreamVault IPTV Premium" }],
  },
};

// Schema.org — Page d'accueil FR : Offre + FAQ
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/fr/#webpage`,
      url: `${BASE_URL}/fr`,
      name: "StreamVault — Abonnement IPTV Premium",
      description: "Meilleur service IPTV 20 000+ chaînes HD/4K. Activation instantanée.",
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@type": "ItemList",
      name: "Offres IPTV StreamVault",
      description: "Abonnements IPTV premium disponibles",
      itemListElement: [
        {
          "@type": "Offer",
          position: 1,
          name: "Abonnement IPTV 1 Mois",
          price: "15",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 2,
          name: "Abonnement IPTV 3 Mois",
          price: "30",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 3,
          name: "Abonnement IPTV 6 Mois",
          price: "50",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 4,
          name: "Abonnement IPTV 12 Mois",
          price: "79",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: contentFr.faq.questions.map((item: { q: string; a: string }) => ({
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
      <Hero content={contentFr.hero} />
      <ChannelsAndVOD content={contentFr.sliders} />
      <Features content={contentFr.features} />
      <Pricing content={contentFr.pricing} />
      <Devices content={contentFr.devices} />
      <WhatsAppReviews content={contentFr.whatsappReviews} />
      <FAQ content={contentFr.faq} />
    </>
  );
}
