import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "StreamVault — Premium IPTV Service | 20,000+ Channels",
    template: "%s | StreamVault",
  },
  description:
    "StreamVault delivers 20,000+ live channels, 40,000+ VOD titles, and high quality streaming. Starting at $14.99/month. Instant activation. 7-day money-back guarantee.",
  keywords: [
    "IPTV",
    "live TV streaming",
    "high quality streaming",
    "IPTV subscription",
    "cheap IPTV",
    "best IPTV service",
    "VOD streaming",
    "streaming service",
  ],
  authors: [{ name: "StreamVault" }],
  creator: "StreamVault",
  publisher: "StreamVault",
  metadataBase: new URL("https://streamvault.tv"),
  alternates: {
    languages: {
      'en': '/en',
      'fr': '/fr',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://streamvault.tv",
    siteName: "StreamVault",
    title: "StreamVault — Premium IPTV Service | 20,000+ Channels",
    description:
      "StreamVault delivers 20,000+ live channels, 40,000+ VOD titles, and high quality streaming. Starting at $14.99/month.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StreamVault IPTV Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamVault — Premium IPTV Service",
    description: "20,000+ live channels, 40,000+ VOD titles, high quality streaming from $14.99/month.",
    images: ["/og-image.png"],
    creator: "@StreamVaultTV",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
