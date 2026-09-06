import type { Metadata } from "next";

export const metadata: Metadata = { title: "Conditions d'utilisation" };

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
          <h1 className="text-4xl font-black text-[var(--color-text-primary)] mb-2">Conditions d'utilisation</h1>
          <p className="text-sm text-[var(--color-text-muted)]">Dernière mise à jour : 2025</p>
        </div>
        <div className="card-glass rounded-2xl p-8">
          <Section title="1. Acceptation des conditions">
            <p>En accédant aux services StreamVault, vous acceptez d'être lié par ces conditions d'utilisation. Pour toute assistance, notre équipe est à votre disposition 24/7 via WhatsApp.</p>
          </Section>
          <Section title="2. Description du service">
            <p>StreamVault propose un service de streaming IPTV premium permettant d'accéder à des chaînes de télévision en direct et du contenu vidéo à la demande (VOD).</p>
          </Section>
          <Section title="3. Souscription & Activation">
            <p>Toutes les souscriptions et demandes d'activation s'effectuent directement via notre support client WhatsApp instantané.</p>
          </Section>
          <Section title="4. Support & Contact unique">
            <p>Le seul moyen officiel de contacter notre service client et notre support technique est notre canal WhatsApp officiel.</p>
            <p className="pt-2">
              <a
                href="https://wa.me/212699105831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-sm hover:bg-[#20ba5a] transition-all shadow-lg"
              >
                Contacter le support WhatsApp 24/7
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
