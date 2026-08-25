import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Devices from "@/components/sections/Devices";
import ChannelsAndVOD from "@/components/sections/ChannelsAndVOD";
import WhatsAppReviews from "@/components/sections/WhatsAppReviews";
import FAQ from "@/components/sections/FAQ";

import { contentFr } from "@/lib/content/fr";

export const metadata: Metadata = {
  title: "StreamVault — IPTV Premium | 20 000+ Chaînes",
  description: "Le cinéma chez vous, sans compromis. 20 000+ chaînes, 40 000+ VOD. Haute qualité d'image, sans coupure, sans engagement.",
};

export default function HomePage() {
  return (
    <>
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
