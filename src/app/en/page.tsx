import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Devices from "@/components/sections/Devices";
import ChannelsAndVOD from "@/components/sections/ChannelsAndVOD";
import WhatsAppReviews from "@/components/sections/WhatsAppReviews";
import FAQ from "@/components/sections/FAQ";

import { contentEn } from "@/lib/content/en";

const BASE_URL = "https://tvsuisse.ch";

export const metadata: Metadata = {
  title: "StreamVault",
  description:
    "Best IPTV service in Europe & worldwide. 20,000+ live HD/4K channels, 40,000+ VOD movies & series. No buffering, instant activation via WhatsApp. Starting at 15 CHF/month.",
  keywords: [
    "best IPTV service", "IPTV subscription 2024", "IPTV UK", "IPTV USA",
    "IPTV Canada", "IPTV Europe", "cheap IPTV", "IPTV HD channels",
    "IPTV 4K streaming", "IPTV no buffering", "VOD IPTV", "smart IPTV",
    "IPTV instant activation", "StreamVault IPTV",
  ],
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      "fr": `${BASE_URL}/fr`,
      "en": `${BASE_URL}/en`,
      "x-default": `${BASE_URL}/fr`,
    },
  },
  openGraph: {
    title: "StreamVault — Best IPTV Service | 20,000+ HD Channels",
    description: "20,000+ IPTV channels, 40,000+ VOD. HD/4K no buffering. WhatsApp activation. From 15 CHF/month.",
    url: `${BASE_URL}/en`,
    locale: "en_US",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "StreamVault Premium IPTV" }],
  },
};

// Schema.org — EN Home Page: Offer + FAQ
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/en/#webpage`,
      url: `${BASE_URL}/en`,
      name: "StreamVault — Best IPTV Subscription",
      description: "Best IPTV service 20,000+ HD/4K channels. Instant activation.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@type": "ItemList",
      name: "StreamVault IPTV Plans",
      description: "Premium IPTV subscription plans available",
      itemListElement: [
        {
          "@type": "Offer",
          position: 1,
          name: "1 Month IPTV Subscription",
          price: "15",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 2,
          name: "3 Months IPTV Subscription",
          price: "30",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 3,
          name: "6 Months IPTV Subscription",
          price: "50",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
        {
          "@type": "Offer",
          position: 4,
          name: "12 Months IPTV Subscription",
          price: "79",
          priceCurrency: "CHF",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "StreamVault" },
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: contentEn.faq.questions.map((item: { q: string; a: string }) => ({
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
      <Hero content={contentEn.hero} />
      <ChannelsAndVOD content={contentEn.sliders} />
      <Features content={contentEn.features} />
      <Pricing content={contentEn.pricing} />
      <Devices content={contentEn.devices} />
      <WhatsAppReviews content={contentEn.whatsappReviews} />
      <FAQ content={contentEn.faq} />
    </>
  );
}
