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
          <p className="text-sm text-[var(--color-text-muted)]">Last updated: 2025</p>
        </div>
        <div className="card-glass rounded-2xl p-8">
          <Section title="1. Data Protection">
            <p>StreamVault is committed to protecting your privacy. We only collect the minimal information strictly required to activate and maintain your IPTV subscription.</p>
          </Section>
          <Section title="2. Privacy Requests & Contact">
            <p>For any inquiries regarding your privacy or data, please contact our support team exclusively via WhatsApp.</p>
            <p className="pt-2">
              <a
                href="https://wa.me/212699105831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-sm hover:bg-[#20ba5a] transition-all shadow-lg"
              >
                Contact us on WhatsApp
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
