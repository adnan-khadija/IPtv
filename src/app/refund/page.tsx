import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const BASE_URL = "https://tvsuisse.ch";

export const metadata: Metadata = {
  title: "Rückerstattungsrichtlinie",
  description: "1-Tages-Garantie: Funktioniert der Dienst auf Ihrem Gerät nicht, erhalten Sie den vollen Betrag zurück. Bedingungen, Ablauf und Bearbeitungszeit.",
  alternates: {
    canonical: `${BASE_URL}/refund`,
  },
  openGraph: {
    title: "Rückerstattungsrichtlinie",
    description: "1-Tages-Garantie: Funktioniert der Dienst auf Ihrem Gerät nicht, erhalten Sie den vollen Betrag zurück. Bedingungen, Ablauf und Bearbeitungszeit.",
    url: `${BASE_URL}/refund`,
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

export default function RefundPage() {
  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <header className="mb-10">
          <h1 className="mb-2 text-4xl font-black text-[var(--color-text-primary)]">
            Rückerstattungsrichtlinie
          </h1>
          <p className="text-sm text-[var(--color-text-muted)]">Letzte Aktualisierung: September 2026</p>
        </header>

        <p className="mb-8 text-base leading-relaxed text-[var(--color-text-secondary)]">
          Der Dienst soll bei Ihnen funktionieren, auf Ihrer eigenen Hardware. Tut er das nicht, erhalten Sie den vollen Betrag zurück.
        </p>

        {/* Headline guarantee */}
        <div className="mb-8 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/[0.07] p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#25D366]" />
            <div>
              <h2 className="mb-1 text-lg font-bold text-white">1-Tages-Garantie — volle Rückerstattung</h2>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Funktioniert der Dienst auf Ihrem Gerät nicht, haben Sie ab Aktivierung Ihrer Zugangsdaten 1 Tag (24 Stunden) Zeit, eine vollständige Rückerstattung zu verlangen. Es werden keine Gebühren einbehalten.
              </p>
            </div>
          </div>
        </div>

        <div className="card-glass rounded-2xl p-8">
          <Section title="1. Die Garantie in Kürze">
            <p>Nach der Aktivierung Ihres Abonnements haben Sie 24 Stunden Zeit zu prüfen, ob der Dienst auf Ihrem Gerät einwandfrei läuft.</p>
            <p>Kann der Dienst in dieser Zeit auf Ihrer Hardware nicht funktionieren und konnte unser technisches Team das Problem nicht lösen, erhalten Sie den bezahlten Betrag vollständig zurück.</p>
          </Section>
          <Section title="2. Voraussetzungen">
            <p>Der Antrag muss innerhalb von 24 Stunden nach Aktivierung Ihrer Zugangsdaten gestellt werden.</p>
            <p>Sie müssen uns die Gelegenheit gegeben haben zu helfen: Unser Team muss einen Lösungsversuch unternehmen können (Serverwechsel, andere App, Prüfung der Einstellungen).</p>
            <p>Die Störung muss beim Dienst selbst liegen und nicht an einer äusseren Ursache wie einer unzureichenden Internetverbindung oder einem defekten Gerät.</p>
          </Section>
          <Section title="3. So beantragen Sie eine Rückerstattung">
            <p>Schreiben Sie uns auf WhatsApp mit dem Namen der Bestellung, dem Aktivierungsdatum, dem verwendeten Gerät und der App sowie einer kurzen Beschreibung des Problems.</p>
            <p>Ein Screenshot oder ein kurzes Video beschleunigt die Bearbeitung erheblich.</p>
          </Section>
          <Section title="4. Bearbeitungszeit">
            <p>Anträge werden innerhalb von 24 bis 48 Stunden geprüft. Nach Genehmigung wird der Betrag über das ursprüngliche Zahlungsmittel zurückerstattet.</p>
            <p>Wie schnell er erscheint, hängt von Ihrer Bank oder von PayPal ab, in der Regel 3 bis 10 Werktage.</p>
          </Section>
          <Section title="5. Nicht erstattungsfähig">
            <p>Anträge, die mehr als 24 Stunden nach der Aktivierung gestellt werden.</p>
            <p>Konten, die wegen geteilter Zugangsdaten, versuchtem Weiterverkauf oder missbräuchlicher Nutzung gesperrt wurden.</p>
            <p>Probleme, die ausschliesslich auf Ihre Internetverbindung, Ihren Anbieter oder defekte Geräte zurückgehen.</p>
            <p>Die vorübergehende Nichtverfügbarkeit eines einzelnen Senders, da sich der Katalog je nach Quellen ändert.</p>
            <p>Die Weigerung, unseren technischen Support einen Lösungsversuch unternehmen zu lassen.</p>
          </Section>
          <Section title="6. Nach den ersten 24 Stunden">
            <p>Danach ist das Abonnement nicht mehr erstattungsfähig, Sie stehen aber nicht allein da: Unser Support bleibt rund um die Uhr verfügbar, um technische Probleme zu lösen, Server zu wechseln oder Ihre App neu einzurichten — ohne Zusatzkosten.</p>
          </Section>
          <Section title="7. Vor dem Kauf testen">
            <p>Um Schwierigkeiten zu vermeiden, bieten wir vor dem Kauf einen kostenlosen Test an. Wir empfehlen dringend, ihn zu nutzen, um die Kompatibilität mit Ihrem Gerät zu prüfen.</p>
          </Section>
          <Section title="8. Kontakt">
            <p>Alle Rückerstattungsanträge laufen über unseren offiziellen WhatsApp-Kanal, rund um die Uhr an 7 Tagen die Woche erreichbar.</p>
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
