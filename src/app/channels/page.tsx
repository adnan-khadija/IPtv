import type { Metadata } from "next";
import ChannelsBrowser from "@/components/sections/ChannelsBrowser";
import { contentDe } from "@/lib/content/de";
import { channelCountries } from "@/lib/data/channel-countries";

const BASE_URL = "https://tvsuisse.ch";

export const metadata: Metadata = {
  title: "IPTV Senderliste",
  description: "Entdecken Sie die vollständige IPTV-Senderliste: über 41'000 Live-Sender aus 40 Ländern, von der Schweiz bis in die USA. Sport, Kino, News und VOD.",
  keywords: ["IPTV Senderliste", "IPTV Sender Schweiz", "Senderliste IPTV", "IPTV Kanäle Liste", "IPTV Länder"],
  alternates: {
    canonical: `${BASE_URL}/channels`,
  },
  openGraph: {
    title: "IPTV Senderliste",
    description: "Entdecken Sie die vollständige IPTV-Senderliste: über 41'000 Live-Sender aus 40 Ländern, von der Schweiz bis in die USA. Sport, Kino, News und VOD.",
    url: `${BASE_URL}/channels`,
    locale: "de_CH",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "IPTV Senderliste" }],
  },
};

const c = contentDe.channelsPage;

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${BASE_URL}/channels#webpage`,
  url: `${BASE_URL}/channels`,
  name: c.title,
  description: c.subtitle,
  inLanguage: "de-CH",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  mainEntity: {
    "@type": "ItemList",
    name: c.title,
    numberOfItems: channelCountries.length,
    itemListElement: channelCountries.map((country, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${country.name.de} — ${country.count} ${c.channels}`,
    })),
  },
};

export default function ChannelsPage() {
  return (
    <div className="min-h-screen pt-16 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black font-title text-white uppercase tracking-tighter mb-4">
            {c.title}
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <ChannelsBrowser
          lang="de"
          strings={{
            searchPlaceholder: c.searchPlaceholder,
            back: c.back,
            channels: c.channels,
            categories: c.categories,
            loading: c.loading,
            error: c.error,
            noResults: c.noResults,
            resultsCapped: c.resultsCapped,
          }}
        />
      </div>
    </div>
  );
}
