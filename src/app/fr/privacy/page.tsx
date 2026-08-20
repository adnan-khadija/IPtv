import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{title}</h2>
      <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-[var(--color-text-primary)] mb-2">Privacy Policy</h1>
          <p className="text-sm text-[var(--color-text-muted)]">Last updated: January 1, 2025</p>
        </div>
        <div className="card-glass rounded-2xl p-8">
          <Section title="1. Information We Collect">
            <p>We collect information you provide directly: name, email address, and payment information (processed securely by Stripe/PayPal — we never store full card details).</p>
            <p>We also collect usage data including IP address, device type, and streaming activity for service quality purposes.</p>
          </Section>
          <Section title="2. How We Use Your Information">
            <p>We use your information to provide, maintain, and improve our service; process transactions; send account-related communications; and provide customer support.</p>
          </Section>
          <Section title="3. Data Sharing">
            <p>We do not sell, rent, or share your personal data with third parties for marketing purposes. We share data only with service providers necessary to operate the service (payment processors, infrastructure providers).</p>
          </Section>
          <Section title="4. Data Security">
            <p>We implement industry-standard security measures including 256-bit SSL encryption. However, no method of transmission over the internet is 100% secure.</p>
          </Section>
          <Section title="5. Cookies">
            <p>We use cookies to maintain your session, remember preferences, and analyze usage. You can control cookies through your browser settings.</p>
          </Section>
          <Section title="6. Your Rights">
            <p>You have the right to access, correct, or delete your personal data. Contact us at privacy@streamvault.tv to exercise these rights.</p>
          </Section>
          <Section title="7. Contact">
            <p>For privacy concerns, contact us at privacy@streamvault.tv or through our <a href="/contact" className="text-blue-400 hover:text-blue-300">contact page</a>.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
