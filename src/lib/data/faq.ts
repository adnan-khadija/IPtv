export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What devices are compatible with StreamVault?",
    answer:
      "StreamVault works on virtually any device with an internet connection. This includes Smart TVs (Samsung, LG, Sony), Amazon Firestick & Fire TV, Android phones and tablets, iPhones and iPads, Windows and Mac computers, MAG boxes, Roku devices, NVIDIA Shield, and Kodi. If your device runs an IPTV player app, it will work with StreamVault.",
  },
  {
    id: "faq-2",
    question: "How quickly will I receive my subscription after payment?",
    answer:
      "Activation is instant! Once your payment is confirmed, your login credentials are sent to your email within 60 seconds. Our automated system works 24/7 — even at 3am on a Sunday. In rare cases (manual review), activation may take up to 15 minutes.",
  },
  {
    id: "faq-3",
    question: "Do you offer a free trial before I commit to a subscription?",
    answer:
      "Yes! We offer a 24-hour free trial on request for new customers. Simply contact us via live chat or WhatsApp before purchasing and we'll set you up with a trial account so you can verify the quality and channel selection for yourself.",
  },
  {
    id: "faq-4",
    question: "How many devices can I use simultaneously?",
    answer:
      "The number of simultaneous connections depends on your plan: Starter (1 Month) allows 1 device, Standard (6 Months) allows 2 devices, and Premium (12 Months) allows up to 4 devices at the same time. You can install the app on as many devices as you like — the limit is concurrent streams.",
  },
  {
    id: "faq-5",
    question: "What is your refund policy?",
    answer:
      "We offer a 7-day money-back guarantee on all plans — no questions asked. If you're not completely satisfied within the first 7 days of your subscription, contact our support team for a full refund. Please note that refunds are not available after 7 days as per our Terms of Service.",
  },
  {
    id: "faq-6",
    question: "What internet speed do I need for streaming?",
    answer:
      "For SD quality: 5 Mbps. For Full HD (1080p): 10 Mbps. For 4K: 25 Mbps. For 4K with multiple streams: 50+ Mbps. We recommend a stable wired (Ethernet) connection for the best experience, though Wi-Fi works well for most users. A minimum of 10 Mbps download speed is required for uninterrupted HD streaming.",
  },
  {
    id: "faq-7",
    question: "Is StreamVault legal to use?",
    answer:
      "StreamVault is a technical streaming service. We recommend checking the content regulations in your country. Our service is used legally by customers worldwide. We provide access to a large variety of channels, including many free-to-air and publicly available channels. As a customer, you are responsible for ensuring your use of the service complies with local laws.",
  },
  {
    id: "faq-8",
    question: "What happens if I have buffering or technical issues?",
    answer:
      "Our 24/7 support team is always available to resolve any issues instantly. Most buffering issues are internet-related (check your speed at fast.com). Our servers have 99.9% uptime and use anti-freeze technology. If you experience persistent issues, our team will troubleshoot in real-time via live chat. We also offer server switches at no extra cost.",
  },
  {
    id: "faq-9",
    question: "Can I renew my subscription before it expires?",
    answer:
      "Yes! You can renew at any time from your customer dashboard. If you renew before expiry, your remaining days are carried over to the new subscription. We also offer auto-renewal to ensure you never miss a day of streaming. You'll receive email reminders 7 days, 3 days, and 1 day before expiration.",
  },
  {
    id: "faq-10",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major payment methods including Visa, Mastercard, American Express, PayPal, and cryptocurrency (Bitcoin, Ethereum, USDT). All payments are processed through secure, encrypted channels (Stripe & PayPal). We do not store your payment information.",
  },
];
