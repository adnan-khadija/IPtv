import type { Metadata } from "next";
import { waLink } from "@/lib/whatsapp";

const BASE_URL = "https://tvsuisse.ch";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Wie wir Ihre personenbezogenen Daten erheben, nutzen und schützen: welche Daten, wozu, wie lange, an wen weitergegeben, Cookies und Ihre Rechte.",
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
  openGraph: {
    title: "Datenschutzerklärung",
    description: "Wie wir Ihre personenbezogenen Daten erheben, nutzen und schützen: welche Daten, wozu, wie lange, an wen weitergegeben, Cookies und Ihre Rechte.",
    url: `${BASE_URL}/privacy`,
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8 last:mb-0">
      <h2 className="mb-3 text-xl font-bold text-[var(--color-text-primary)]">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <header className="mb-10">
          <h1 className="mb-2 text-4xl font-black text-[var(--color-text-primary)]">
            Datenschutzerklärung
          </h1>
          <p className="text-sm text-[var(--color-text-muted)]">Letzte Aktualisierung: September 2026</p>
        </header>

        <p className="mb-8 text-base leading-relaxed text-[var(--color-text-secondary)]">
          Der Schutz Ihrer Privatsphäre ist uns wichtig. Diese Erklärung beschreibt, welche Daten wir verarbeiten, warum, und welche Rechte Sie geltend machen können.
        </p>

        <div className="card-glass rounded-2xl p-8">
          <Section title="1. Datensparsamkeit">
            <p>Wir erheben nur die Daten, die für die Bereitstellung Ihres Abonnements zwingend erforderlich sind. Ihre personenbezogenen Daten werden niemals verkauft, vermietet oder getauscht.</p>
          </Section>
          <Section title="2. Welche Daten wir verarbeiten">
            <p>Kontaktdaten: Ihre WhatsApp-Nummer und gegebenenfalls Ihre E-Mail-Adresse, um Ihnen Ihre Zugänge zu senden und Sie zu unterstützen.</p>
            <p>Abonnementdaten: gewähltes Paket, Aktivierungsdatum und Ablaufdatum.</p>
            <p>Technische Daten: Ihre Zugangsdaten zum Dienst sowie die für die Fehlerbehebung nötigen Mindestangaben (Gerätetyp, verwendete App).</p>
            <p>Wir erheben keine Ausweisdokumente, Postadressen oder Bankdaten — Zahlungen werden von unseren Dienstleistern (PayPal, Kartenanbieter) abgewickelt, die uns keine Kartennummern übermitteln.</p>
          </Section>
          <Section title="3. Zwecke der Verarbeitung">
            <p>Ihre Daten dienen ausschliesslich dazu, Ihr Abonnement zu aktivieren und zu betreuen, technischen Support zu leisten, Rückerstattungen zu bearbeiten und unsere gesetzlichen Pflichten zu erfüllen.</p>
            <p>Für Werbeprofile verwenden wir Ihre Daten nicht.</p>
          </Section>
          <Section title="4. Rechtsgrundlage">
            <p>Die Verarbeitung stützt sich auf die Erfüllung unseres Vertrags mit Ihnen (Bereitstellung des Abonnements), auf unser berechtigtes Interesse an der Sicherheit des Dienstes sowie auf Ihre Einwilligung, soweit diese erforderlich ist.</p>
          </Section>
          <Section title="5. Weitergabe an Dritte">
            <p>Ihre Daten werden nur an die für den Betrieb unerlässlichen Dienstleister weitergegeben: Zahlungsdienstleister und Anbieter der Serverinfrastruktur.</p>
            <p>Diese erhalten nur die für ihre Aufgabe nötigen Daten und sind zur Vertraulichkeit verpflichtet. Eine Weitergabe zu kommerziellen Zwecken findet nicht statt.</p>
          </Section>
          <Section title="6. Aufbewahrungsdauer">
            <p>Abonnementdaten werden für die Dauer Ihres Abonnements aufbewahrt und danach so lange, wie es unsere buchhalterischen und gesetzlichen Pflichten verlangen.</p>
            <p>Anschliessend werden sie gelöscht oder anonymisiert.</p>
          </Section>
          <Section title="7. Sicherheit">
            <p>Wir treffen angemessene technische und organisatorische Massnahmen, um Ihre Daten vor Verlust, unbefugtem Zugriff und Offenlegung zu schützen, darunter verschlüsselte Kommunikation und beschränkter Systemzugang.</p>
            <p>Da kein System unfehlbar ist, können wir keine absolute Sicherheit garantieren.</p>
          </Section>
          <Section title="8. Cookies und Reichweitenmessung">
            <p>Unsere Website verwendet nur die für den Betrieb notwendigen Cookies sowie gegebenenfalls aggregierte Zugriffsstatistiken.</p>
            <p>Werbe-Cookies zur individuellen Nachverfolgung setzen wir nicht ein. Sie können Cookies in Ihrem Browser ablehnen.</p>
          </Section>
          <Section title="9. Ihre Rechte">
            <p>Nach dem revidierten Schweizer Datenschutzgesetz (revDSG) und, soweit anwendbar, der DSGVO haben Sie Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch sowie ein Recht auf Datenübertragbarkeit.</p>
            <p>Zur Ausübung kontaktieren Sie uns über unseren offiziellen WhatsApp-Kanal. Wir antworten so rasch wie möglich, spätestens innerhalb von 30 Tagen.</p>
          </Section>
          <Section title="10. Kontakt">
            <p>Bei Fragen zu dieser Erklärung oder zur Verarbeitung Ihrer Daten erreichen Sie unser Team rund um die Uhr über WhatsApp.</p>
          </Section>

          <div className="mt-10 border-t border-white/10 pt-6">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-black shadow-lg transition-all hover:bg-[#20ba5a]"
            >
              WhatsApp-Support 24/7 kontaktieren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
