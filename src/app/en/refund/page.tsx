import type { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{title}</h2>
      <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function RefundPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-[var(--color-text-primary)] mb-2">Refund Policy</h1>
          <p className="text-sm text-[var(--color-text-muted)]">Last updated: January 1, 2025</p>
        </div>
        <div className="card-glass rounded-2xl p-8">
          <div className="mb-8 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
            <p className="text-sm font-semibold text-green-400">✅ 7-Day Money-Back Guarantee</p>
            <p className="text-xs text-green-300/80 mt-1">If you&apos;re not satisfied within the first 7 days, we&apos;ll give you a full refund — no questions asked.</p>
          </div>
          <Section title="Eligibility for Refund">
            <p>You are eligible for a full refund if you request it within 7 calendar days of your initial subscription purchase.</p>
            <p>Refund requests for renewal subscriptions will be considered on a case-by-case basis.</p>
          </Section>
          <Section title="Non-Refundable Situations">
            <p>Refunds will not be issued if the subscription has been active for more than 7 days, if the account has been suspended due to Terms of Service violations, or for remaining time on a partially-used subscription beyond the 7-day window.</p>
          </Section>
          <Section title="How to Request a Refund">
            <p>1. Contact us at refunds@streamvault.tv or via our <a href="/contact" className="text-blue-400 hover:text-blue-300">contact page</a>.</p>
            <p>2. Include your order number and email address used to sign up.</p>
            <p>3. We will process your refund within 1–2 business days.</p>
            <p>4. Funds will appear in your account within 5–10 business days depending on your bank.</p>
          </Section>
          <Section title="Contact Us">
            <p>For refund requests, reach out at refunds@streamvault.tv. Our team is available 24/7.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
