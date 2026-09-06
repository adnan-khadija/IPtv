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
          <p className="text-sm text-[var(--color-text-muted)]">Last updated: 2025</p>
        </div>
        <div className="card-glass rounded-2xl p-8">
          <Section title="1. Acceptance of Terms">
            <p>By accessing or using StreamVault services, you agree to be bound by these Terms of Service. For any support or inquiries, our team is available 24/7 via WhatsApp.</p>
          </Section>
          <Section title="2. Service Description">
            <p>StreamVault provides a premium IPTV streaming service providing access to live television channels and video-on-demand (VOD) content.</p>
          </Section>
          <Section title="3. Subscription & Activation">
            <p>All subscription orders and instant account activations are handled directly via our official WhatsApp customer support.</p>
          </Section>
          <Section title="4. Support & Contact">
            <p>Our official and only support channel for customer assistance, orders, and technical support is WhatsApp.</p>
            <p className="pt-2">
              <a
                href="https://wa.me/212699105831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-sm hover:bg-[#20ba5a] transition-all shadow-lg"
              >
                Contact 24/7 WhatsApp Support
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
