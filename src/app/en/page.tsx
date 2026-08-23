import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Devices from "@/components/sections/Devices";

import { contentEn } from "@/lib/content/en";

export const metadata: Metadata = {
  title: "StreamVault — Premium IPTV Service | 20,000+ Channels",
  description: "Cinematic experience at home. 20,000+ live channels, 40,000+ VOD movies & series. High quality picture, no buffering, no contract.",
};

export default function HomePage() {
  return (
    <>
      <Hero content={contentEn.hero} />
      <Features content={contentEn.features} />
      <Pricing content={contentEn.pricing} />
      <Devices content={contentEn.devices} />
    </>
  );
}
