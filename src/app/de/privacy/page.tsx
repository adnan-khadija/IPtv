import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutzerklärung" };

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
          <h1 className="text-4xl font-black text-[var(--color-text-primary)] mb-2">Datenschutzerklärung</h1>
          <p className="text-sm text-[var(--color-text-muted)]">Zuletzt aktualisiert: 2025</p>
        </div>
        <div className="card-glass rounded-2xl p-8">
          <Section title="1. Datenschutz">
            <p>StreamVault verpflichtet sich zum Schutz Ihrer Privatsphäre. Wir erfassen nur die Informationen, die für die Bereitstellung Ihres IPTV-Abonnements unbedingt erforderlich sind.</p>
          </Section>
          <Section title="2. Support & Datenschutzanfragen">
            <p>Bei Fragen zu Ihren Daten oder zum Datenschutz können Sie uns direkt über unseren offiziellen WhatsApp-Kanal kontaktieren.</p>
            <p className="pt-2">
              <a
                href="https://wa.me/212699105831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-sm hover:bg-[#20ba5a] transition-all shadow-lg"
              >
                Kontakt auf WhatsApp
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
