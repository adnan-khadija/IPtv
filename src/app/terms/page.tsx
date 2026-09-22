import type { Metadata } from "next";
import { waLink } from "@/lib/whatsapp";

const BASE_URL = "https://tvsuisse.ch";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen für unser IPTV-Abonnement: Abschluss, Aktivierung, Zahlung, zulässige Nutzung, Verfügbarkeit und Haftung.",
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
  openGraph: {
    title: "Allgemeine Geschäftsbedingungen",
    description: "Allgemeine Geschäftsbedingungen für unser IPTV-Abonnement: Abschluss, Aktivierung, Zahlung, zulässige Nutzung, Verfügbarkeit und Haftung.",
    url: `${BASE_URL}/terms`,
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

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <header className="mb-10">
          <h1 className="mb-2 text-4xl font-black text-[var(--color-text-primary)]">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-sm text-[var(--color-text-muted)]">Letzte Aktualisierung: September 2026</p>
        </header>

        <p className="mb-8 text-base leading-relaxed text-[var(--color-text-secondary)]">
          Diese Bedingungen regeln den Zugang zu unserem IPTV-Dienst und dessen Nutzung. Mit dem Abschluss eines Abonnements bestätigen Sie, sie vollständig gelesen und akzeptiert zu haben.
        </p>

        <div className="card-glass rounded-2xl p-8">
          <Section title="1. Annahme der Bedingungen">
            <p>Mit dem Zugriff auf unsere Dienste oder dem Abschluss eines Abonnements erklären Sie sich mit diesen Bedingungen einverstanden. Wenn Sie sie nicht akzeptieren, dürfen Sie den Dienst nicht nutzen.</p>
            <p>Wir können diese Bedingungen jederzeit anpassen. Massgebend ist die auf dieser Seite veröffentlichte Fassung; wesentliche Änderungen kündigen wir über unseren offiziellen WhatsApp-Kanal an.</p>
          </Section>
          <Section title="2. Beschreibung des Dienstes">
            <p>Wir bieten einen technischen IPTV-Streamingdienst mit Zugang zu Live-Fernsehsendern und einem Video-on-Demand-Katalog über kompatible Drittanbieter-Apps (IPTV Smarters Pro, IBO Player, Set IPTV, MAG-Portal, Xtream Codes und weitere).</p>
            <p>Wir stellen den technischen Zugang zum Stream bereit. Die von den Sendern ausgestrahlten Inhalte produzieren, redigieren und kontrollieren wir nicht; der Katalog kann sich je nach verfügbaren Quellen ohne Vorankündigung ändern.</p>
          </Section>
          <Section title="3. Abschluss und Aktivierung">
            <p>Abonnements werden über unseren WhatsApp-Support abgeschlossen. Nach Zahlungsbestätigung erhalten Sie Ihre Zugangsdaten, in der Regel innerhalb von zwei Stunden.</p>
            <p>Sie verpflichten sich, korrekte Angaben zu machen. Ein Abonnement ist persönlich und für die private, nicht gewerbliche Nutzung bestimmt.</p>
          </Section>
          <Section title="4. Preise und Zahlung">
            <p>Die Preise sind in Schweizer Franken (CHF) angegeben, gegebenenfalls inklusive Steuern. Wir akzeptieren PayPal und Kreditkarten (Visa, Mastercard).</p>
            <p>Jedes Abonnement wird einmalig für die gewählte Laufzeit bezahlt. Es gibt keine wiederkehrende Abbuchung, keine automatische Verlängerung und keine Mindestlaufzeit.</p>
          </Section>
          <Section title="5. Laufzeit und Verlängerung">
            <p>Das Abonnement beginnt mit der Aktivierung Ihrer Zugangsdaten und endet automatisch am Ende der gebuchten Laufzeit.</p>
            <p>Eine Verlängerung erfolgt freiwillig: Kontaktieren Sie uns einfach vor Ablauf. Ohne Ihre ausdrückliche Zustimmung wird nichts belastet.</p>
          </Section>
          <Section title="6. Zulässige Nutzung">
            <p>Sofern nicht anders angegeben, erlaubt ein Abonnement einen gleichzeitigen Stream. Sie können Ihre Zugangsdaten auf mehreren Geräten hinterlegen (Smart TV, Smartphone, Tablet, Computer), es kann jedoch nur eines gleichzeitig wiedergeben.</p>
            <p>Das Teilen, der Weiterverkauf, die Weitergabe oder die öffentliche Wiedergabe Ihrer Zugangsdaten sind untersagt und führen zur sofortigen Sperrung ohne Rückerstattung.</p>
          </Section>
          <Section title="7. Zugangsdaten und Kontosicherheit">
            <p>Sie sind für die Vertraulichkeit Ihrer Zugangsdaten und für sämtliche über Ihr Konto durchgeführten Aktivitäten verantwortlich.</p>
            <p>Bei Verlust, Diebstahl oder unbefugter Nutzung informieren Sie uns bitte umgehend, damit wir Ihre Zugänge neu ausstellen können.</p>
          </Section>
          <Section title="8. Verfügbarkeit und Wartung">
            <p>Wir setzen alles daran, einen stabilen und durchgehenden Dienst zu gewährleisten; eine unterbrechungsfreie Verfügbarkeit kann jedoch nicht garantiert werden.</p>
            <p>Unterbrechungen können bei Wartungsarbeiten, bei Ausfällen vorgelagerter Anbieter oder aus Gründen ausserhalb unseres Einflusses auftreten. Wir halten sie so gering wie möglich und informieren Sie, wo dies möglich ist.</p>
          </Section>
          <Section title="9. Technische Voraussetzungen">
            <p>Für Full HD empfehlen wir eine stabile Internetverbindung von mindestens 15 Mbit/s, für höchste Qualität 30 Mbit/s. Eine Kabelverbindung (Ethernet) liefert die besten Ergebnisse.</p>
            <p>Die Wiedergabequalität hängt von Ihrer Verbindung, Ihrer Hardware und Ihrem Internetanbieter ab. Diese Faktoren liegen ausserhalb unseres Einflussbereichs.</p>
          </Section>
          <Section title="10. Sperrung und Kündigung">
            <p>Bei Verstössen gegen diese Bedingungen können wir den Zugang sperren oder beenden, insbesondere bei geteilten Zugangsdaten, versuchtem Weiterverkauf oder missbräuchlicher Nutzung.</p>
            <p>Sie können die Nutzung jederzeit einstellen. Die Bedingungen für Rückerstattungen finden Sie in unserer Rückerstattungsrichtlinie.</p>
          </Section>
          <Section title="11. Haftungsbeschränkung">
            <p>Der Dienst wird „wie besehen“ bereitgestellt. Soweit gesetzlich zulässig, ist unsere Haftung auf den für das betreffende Abonnement tatsächlich bezahlten Betrag beschränkt.</p>
            <p>Für indirekte Schäden haften wir nicht, insbesondere nicht für Nutzungsausfälle infolge einer Dienstunterbrechung, Ihrer Internetverbindung oder Ihrer Geräte.</p>
          </Section>
          <Section title="12. Inhalte und Verantwortung des Nutzers">
            <p>Es liegt in Ihrer Verantwortung sicherzustellen, dass Ihre Nutzung des Dienstes dem Recht Ihres Wohnsitzlandes entspricht.</p>
            <p>Alle genannten Marken, Sender und Inhalte bleiben Eigentum ihrer jeweiligen Inhaber. Eine Verbindung oder Billigung wird nicht behauptet.</p>
          </Section>
          <Section title="13. Anwendbares Recht">
            <p>Diese Bedingungen unterstehen Schweizer Recht. Für Streitigkeiten sind die zuständigen Gerichte am Sitz des Betreibers zuständig, vorbehaltlich zwingender Verbraucherschutzbestimmungen.</p>
          </Section>
          <Section title="14. Support und Kontakt">
            <p>Unser offizieller WhatsApp-Kanal ist der einzige Weg zu Kundendienst und technischem Support. Unser Team antwortet rund um die Uhr, 7 Tage die Woche.</p>
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
