import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{title}</h2>
      <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-[var(--color-text-primary)] mb-2">Terms of Service</h1>
          <p className="text-sm text-[var(--color-text-muted)]">Last updated: January 1, 2025</p>
        </div>
        <div className="card-glass rounded-2xl p-8">
          <Section title="1. Acceptance of Terms">
            <p>By accessing or using StreamVault services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
          </Section>
          <Section title="2. Service Description">
            <p>StreamVault provides an IPTV streaming service that allows subscribers to access live television channels and video-on-demand content. The service is provided on a subscription basis.</p>
          </Section>
          <Section title="3. Subscription & Payment">
            <p>Subscriptions are billed in advance. All prices are listed in USD. Payment is processed securely through Stripe or PayPal. By providing payment information, you authorize us to charge the applicable subscription fees.</p>
          </Section>
          <Section title="4. Refund Policy">
            <p>We offer a 7-day money-back guarantee for new subscriptions. Refund requests must be submitted within 7 days of purchase. Refunds will be processed to the original payment method within 5–10 business days.</p>
          </Section>
          <Section title="5. Acceptable Use">
            <p>You may not share, resell, or redistribute your subscription credentials. You may not use the service for any unlawful purpose. Violation of these terms may result in immediate account termination without refund.</p>
          </Section>
          <Section title="6. Limitation of Liability">
            <p>StreamVault is not liable for any indirect, incidental, or consequential damages arising from use of the service. Our total liability shall not exceed the amount paid for your subscription in the past 30 days.</p>
          </Section>
          <Section title="7. Changes to Terms">
            <p>We reserve the right to update these Terms at any time. Continued use of the service after changes constitutes acceptance of the new Terms.</p>
          </Section>
          <Section title="8. Contact">
            <p>For questions about these Terms, contact us at legal@streamvault.tv or through our <a href="/contact" className="text-blue-400 hover:text-blue-300">contact page</a>.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
