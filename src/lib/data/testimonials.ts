export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  plan: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus J.",
    location: "United States",
    avatar: "MJ",
    rating: 5,
    text: "StreamVault is hands down the best IPTV service I've ever used. Crystal clear 4K streams, zero buffering, and their support team responds within minutes. Cancelled my cable subscription the same day!",
    plan: "12 Month Premium",
    date: "January 2025",
  },
  {
    id: "2",
    name: "Sarah K.",
    location: "United Kingdom",
    avatar: "SK",
    rating: 5,
    text: "I was skeptical at first but after the trial I was completely blown away. The channel selection is massive — I get all my local UK channels plus international ones. Setup took less than 5 minutes.",
    plan: "6 Month Standard",
    date: "February 2025",
  },
  {
    id: "3",
    name: "Ahmed R.",
    location: "Canada",
    avatar: "AR",
    rating: 5,
    text: "Been a subscriber for over a year now. The VOD library is incredible — thousands of movies and series. Picture quality on my 4K TV is stunning. Highly recommend the annual plan for the savings.",
    plan: "12 Month Premium",
    date: "March 2025",
  },
  {
    id: "4",
    name: "Elena M.",
    location: "Germany",
    avatar: "EM",
    rating: 5,
    text: "Finally found an IPTV provider that actually delivers what they promise. Stable streams, regular updates, and a huge sports package. The EPG guide is accurate and very easy to navigate.",
    plan: "6 Month Standard",
    date: "March 2025",
  },
  {
    id: "5",
    name: "James T.",
    location: "Australia",
    avatar: "JT",
    rating: 4,
    text: "Great service overall. The anti-freeze technology really works — I had buffer issues with other providers but StreamVault is rock solid. The customer support is also excellent and very responsive.",
    plan: "12 Month Premium",
    date: "April 2025",
  },
  {
    id: "6",
    name: "Priya S.",
    location: "United Arab Emirates",
    avatar: "PS",
    rating: 5,
    text: "Amazing selection of international channels including all South Asian content. I can watch all my favourite shows from back home without any issues. The quality is always perfect.",
    plan: "6 Month Standard",
    date: "April 2025",
  },
];
