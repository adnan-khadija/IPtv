import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BASE_URL = "https://tvsuisse.ch";

export const metadata: Metadata = {
  title: {
    default: "StreamVault — Service IPTV Premium | 20 000+ Chaînes HD",
    template: "%s | StreamVault IPTV",
  },
  description:
    "StreamVault : accédez à 20 000+ chaînes IPTV en direct, 40 000+ films & séries VOD. Qualité HD/4K, sans coupure, activation instantanée. Abonnement dès 15 CHF/mois.",
  keywords: [
    "IPTV", "abonnement IPTV", "IPTV France", "IPTV Suisse", "IPTV Maroc",
    "meilleur IPTV", "IPTV pas cher", "chaînes TV en direct", "VOD streaming",
    "IPTV premium", "IPTV HD", "IPTV 4K", "smart IPTV", "IPTV subscription",
    "best IPTV service", "live TV streaming", "IPTV Belgium", "IPTV Canada",
    "StreamVault", "IPTV activation rapide", "IPTV sans engagement",
  ],
  authors: [{ name: "StreamVault", url: BASE_URL }],
  creator: "StreamVault",
  publisher: "StreamVault",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
    languages: {
      "fr": `${BASE_URL}/fr`,
      "en": `${BASE_URL}/en`,
      "x-default": `${BASE_URL}/fr`,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: BASE_URL,
    siteName: "StreamVault IPTV",
    title: "StreamVault — IPTV Premium | 20 000+ Chaînes HD",
    description:
      "20 000+ chaînes IPTV, 40 000+ films VOD. HD/4K sans coupure. Abonnement dès 15 CHF/mois. Activation instantanée via WhatsApp.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "StreamVault — Service IPTV Premium",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamVault — IPTV Premium | 20 000+ Chaînes",
    description: "20 000+ chaînes IPTV en direct, 40 000+ VOD. HD/4K sans coupure. Dès 15 CHF/mois.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@StreamVaultTV",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "votre-code-google-search-console", // ← Remplacer par votre code Google Search Console
  },
  category: "technology",
};

// Schema.org JSON-LD global (Organization + WebSite)
const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "StreamVault",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicon.png`,
        width: 180,
        height: 180,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["French", "English", "Arabic"],
        contactOption: "TollFree",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "StreamVault IPTV",
      description: "Service IPTV premium avec 20 000+ chaînes et 40 000+ VOD",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: ["fr-FR", "en-US"],
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/fr/#channels?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
