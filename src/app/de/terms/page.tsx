import type { Metadata } from "next";

export const metadata: Metadata = { title: "Allgemeine Geschäftsbedingungen" };

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
          <h1 className="text-4xl font-black text-[var(--color-text-primary)] mb-2">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-sm text-[var(--color-text-muted)]">Zuletzt aktualisiert: 2025</p>
        </div>
        <div className="card-glass rounded-2xl p-8">
          <Section title="1. Zustimmung zu den Bedingungen">
            <p>Durch den Zugriff auf die Dienste von StreamVault erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen einverstanden. Unser Support-Team steht Ihnen rund um die Uhr per WhatsApp zur Verfügung.</p>
          </Section>
          <Section title="2. Leistungsbeschreibung">
            <p>StreamVault bietet einen Premium-IPTV-Streaming-Dienst, der Zugang zu Live-TV-Sendern und Video-on-Demand (VOD)-Inhalten bietet.</p>
          </Section>
          <Section title="3. Abonnement & Aktivierung">
            <p>Alle Abonnements und Aktivierungsanfragen werden direkt über unseren sofortigen WhatsApp-Kundensupport abgewickelt.</p>
          </Section>
          <Section title="4. Support & Kontakt">
            <p>Unser einziger offizieller Kanal für Kundensupport und technische Hilfe ist unser WhatsApp-Kanal.</p>
            <p className="pt-2">
              <a
                href="https://wa.me/212699105831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-sm hover:bg-[#20ba5a] transition-all shadow-lg"
              >
                Hilfe auf WhatsApp anfordern
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
