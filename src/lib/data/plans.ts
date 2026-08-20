export interface Plan {
  id: string;         // matches URL param: "1m-1s" | "3m-1s" | "6m-1s" | "12m-1s"
  months: number;
  name: string;
  duration: string;
  price: number;      // promo price (CHF)
  originalPrice: number; // normal price (CHF)
  featured: boolean;
  badge?: string;
  savings: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "1m-1s",
    months: 1,
    name: "1 Month",
    duration: "1 Month — 1 Device",
    price: 14,
    originalPrice: 18,
    savings: "Save 4 CHF",
    featured: false,
    features: [
      "20,000+ Live Channels",
      "40,000+ VOD Movies & Series",
      "Full HD & 4K Quality",
      "1 Device Connection",
      "EPG TV Guide",
      "Anti-Freeze Technology",
      "24/7 Customer Support",
      "Instant Activation",
    ],
  },
  {
    id: "3m-1s",
    months: 3,
    name: "3 Months",
    duration: "3 Months — 1 Device",
    price: 35,
    originalPrice: 45,
    savings: "Save 10 CHF",
    featured: false,
    features: [
      "20,000+ Live Channels",
      "40,000+ VOD Movies & Series",
      "Full HD & 4K Quality",
      "1 Device Connection",
      "EPG TV Guide",
      "Anti-Freeze Technology",
      "7-Day Replay / Catch-up",
      "24/7 Customer Support",
      "Instant Activation",
    ],
  },
  {
    id: "6m-1s",
    months: 6,
    name: "6 Months",
    duration: "6 Months — 1 Device",
    price: 55,
    originalPrice: 75,
    savings: "Save 20 CHF",
    featured: false,
    badge: "Popular",
    features: [
      "20,000+ Live Channels",
      "40,000+ VOD Movies & Series",
      "Full HD & 4K Quality",
      "1 Device Connection",
      "EPG TV Guide",
      "Anti-Freeze Technology",
      "7-Day Replay / Catch-up",
      "24/7 Priority Support",
      "Instant Activation",
    ],
  },
  {
    id: "12m-1s",
    months: 12,
    name: "12 Months",
    duration: "12 Months — 1 Device",
    price: 79,
    originalPrice: 130,
    savings: "Save 51 CHF",
    featured: true,
    badge: "Best Value",
    features: [
      "20,000+ Live Channels",
      "40,000+ VOD Movies & Series",
      "Full HD & 4K Quality",
      "1 Device Connection",
      "EPG TV Guide",
      "Anti-Freeze Technology",
      "7-Day Replay / Catch-up",
      "24/7 VIP Priority Support",
      "Instant Activation",
    ],
  },
];

/** Resolve a URL ?plan= param to a Plan object. Defaults to 1-month plan. */
export function getPlanFromParam(param: string | null): Plan {
  if (!param) return plans[0];
  const found = plans.find((p) => p.id === param);
  return found ?? plans[0];
}
