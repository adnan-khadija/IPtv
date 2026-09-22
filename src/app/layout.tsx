import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const BASE_URL = "https://tvsuisse.ch";

export const metadata: Metadata = {
  title: {
    default: "IPTV Schweiz | Premium IPTV-Abo ab 11.99 CHF",
    template: "%s | TV Schweiz",
  },
  description:
    "IPTV Schweiz Premium: 30 000+ Live-TV-Sender und 90 000+ Filme & Serien. HD/4K ohne Unterbrechung, sofortige Aktivierung. Ab 11.99 CHF/Monat.",
  keywords: [
    "IPTV", "IPTV Schweiz", "IPTV Abo Schweiz", "bestes IPTV Schweiz",
    "IPTV Schweiz günstig", "IPTV Schweiz 4K", "IPTV Abonnement",
    "Schweizer Sender IPTV", "IPTV Zürich", "IPTV Bern", "IPTV Basel",
    "IPTV ohne Unterbrechung", "TV Schweiz", "Smart IPTV Schweiz",
  ],
  authors: [{ name: "TV Schweiz", url: BASE_URL }],
  creator: "TV Schweiz",
  publisher: "TV Schweiz",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: BASE_URL,
    siteName: "TV Schweiz IPTV",
    title: "IPTV Schweiz — Premium IPTV-Abonnement | 30 000+ Sender HD",
    description:
      "30 000+ Live-TV-Sender, 90 000+ Filme & Serien. HD/4K ohne Unterbrechung. Ab 11.99 CHF/Monat. Sofortige Aktivierung via WhatsApp.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TV Schweiz — Premium IPTV Dienst",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Schweiz — Premium IPTV-Abonnement",
    description: "30 000+ Live-TV-Sender, 90 000+ VOD. HD/4K ohne Unterbrechung. Ab 11.99 CHF/Monat.",
    images: ["/og-image.png"],
    creator: "@TVSuisseIPTV",
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
    google: "google5f0cc2c6c7874bec",
  },
  category: "technology",
};

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "TV Schweiz",
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
        availableLanguage: ["German"],
        contactOption: "TollFree",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "TV Schweiz IPTV",
      description: "Premium IPTV Dienst mit über 30 000 Sendern und 90 000+ VOD",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: ["de-DE", "de-CH"],
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/channels?q={search_term_string}` },
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
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
