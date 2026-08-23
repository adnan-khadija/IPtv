export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  stat?: string;
}

export const features: Feature[] = [
  {
    id: "quality",
    icon: "Tv2",
    title: "High Quality Picture",
    description:
      "Experience crystal-clear streaming with superior resolution. Enjoy smooth, buffer-free entertainment on any screen.",
    stat: "Full HD",
  },
  {
    id: "channels",
    icon: "Radio",
    title: "20,000+ Live Channels",
    description:
      "Access the world's largest channel library — sports, news, entertainment, movies, and regional channels from 150+ countries.",
    stat: "20,000+",
  },
  {
    id: "vod",
    icon: "Film",
    title: "40,000+ VOD Library",
    description:
      "Endless movies and series on demand. New titles added weekly. Your personal Netflix, but better.",
    stat: "40K+ Titles",
  },
  {
    id: "devices",
    icon: "Smartphone",
    title: "Multi-Device Support",
    description:
      "Stream on Smart TV, Firestick, Android, iOS, PC, MAG boxes, and more. Connect up to 4 devices simultaneously.",
    stat: "10+ Devices",
  },
  {
    id: "uptime",
    icon: "ShieldCheck",
    title: "99.9% Uptime Guarantee",
    description:
      "Our enterprise-grade infrastructure ensures your stream never drops. Backed by redundant servers across 3 continents.",
    stat: "99.9% Uptime",
  },
  {
    id: "support",
    icon: "Headphones",
    title: "24/7 Expert Support",
    description:
      "Our dedicated team is available around the clock via live chat, WhatsApp, and email. Average response time: 2 minutes.",
    stat: "< 2 min Response",
  },
];
