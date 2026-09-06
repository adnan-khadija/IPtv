"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { getPlanFromParam } from "@/lib/data/plans";
import { Shield, Lock, Check, CreditCard, Zap, ChevronLeft, Monitor } from "lucide-react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const FR_NAMES: Record<string, string> = {
  "1m-1s": "1 Mois",
  "3m-1s": "3 Mois",
  "6m-1s": "6 Mois",
  "12m-1s": "12 Mois",
};

const FR_DURATIONS: Record<string, string> = {
  "1m-1s": "1 Mois — 1 Appareil",
  "3m-1s": "3 Mois — 1 Appareil",
  "6m-1s": "6 Mois — 1 Appareil",
  "12m-1s": "12 Mois — 1 Appareil",
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const plan = getPlanFromParam(searchParams.get("plan"));

  const planName = FR_NAMES[plan.id] ?? plan.name;
  const planDuration = FR_DURATIONS[plan.id] ?? plan.duration;

  const [step, setStep] = useState<"payment" | "success">("payment");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [loading, setLoading] = useState(false);
  const [cardForm, setCardForm] = useState({ number: "", expiry: "", cvv: "", name: "" });
  const [email, setEmail] = useState("");

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const savings = plan.originalPrice - plan.price;
  const perMonth = (plan.price / plan.months).toFixed(2);

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setStep("success");
  };

  // ── Écran succès ───────────────────────────────────────────────────────────
  if (step === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center card-glass rounded-2xl p-10"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <Check size={36} className="text-green-400" />
          </div>
          <h2 className="text-2xl font-black text-[var(--color-text-primary)] mb-3">
            Paiement réussi ! 🎉
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            Votre abonnement <strong>{planName}</strong> est maintenant actif. Vérifiez votre e-mail (<strong>{email}</strong>) pour vos identifiants.
          </p>
          <div className="bg-[var(--color-bg-secondary)] rounded-xl p-4 text-left mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[var(--color-text-muted)]">Abonnement</span>
              <span className="font-bold text-[var(--color-text-primary)]">{planDuration}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--color-text-muted)]">Appareil</span>
              <span className="font-bold text-[var(--color-text-primary)]">1 Appareil</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--color-text-muted)]">Montant payé</span>
              <span className="font-bold text-[var(--color-text-primary)]">{plan.price} CHF</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--color-text-muted)]">Statut</span>
              <span className="font-bold text-green-400">Actif</span>
            </div>
          </div>
          <Link
            href="/fr/dashboard"
            className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-white rounded-xl bg-[var(--color-accent)] hover:opacity-90 transition-all"
          >
            <Zap size={14} className="fill-white" />
            Accéder à mon espace
          </Link>
        </motion.div>
      </div>
    );
  }

  // ── Écran paiement ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(229,9,20,0.07) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/fr#pricing"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] mb-8 transition-colors"
        >
          <ChevronLeft size={16} />
          Retour aux abonnements
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* ── Récapitulatif ──────────────────────────────────────────── */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-glass rounded-2xl p-6 sticky top-24"
            >
              <h2 className="text-base font-bold text-[var(--color-text-primary)] mb-5">Récapitulatif</h2>

              {/* Plan header */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <Zap size={16} className="text-white fill-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--color-text-primary)]">IPTV — {planName}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{planDuration}</div>
                </div>
              </div>

              {/* Appareil */}
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] mb-4 p-3 rounded-lg bg-white/5">
                <Monitor size={13} className="text-[var(--color-accent)] shrink-0" />
                <span>1 Appareil · 1 Écran — tous les appareils compatibles</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {plan.features.slice(0, 5).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                    <Check size={12} className="text-[var(--color-accent)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Prix */}
              <div className="border-t border-[var(--color-border)] pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-muted)]">Prix habituel</span>
                  <span className="text-[var(--color-text-muted)] line-through">{plan.originalPrice} CHF</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-400 font-semibold">Réduction</span>
                  <span className="text-green-400 font-semibold">−{savings} CHF</span>
                </div>
                {plan.months > 1 && (
                  <div className="flex justify-between text-xs text-[var(--color-text-muted)]">
                    <span>Par mois</span>
                    <span>{perMonth} CHF / mois</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-black pt-1 border-t border-[var(--color-border)]">
                  <span className="text-[var(--color-text-primary)]">Total</span>
                  <span className="text-[var(--color-accent)]">{plan.price} CHF</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <Shield size={11} className="text-green-400" />
                <span>Satisfait ou remboursé 7 jours</span>
              </div>
            </motion.div>
          </div>

          {/* ── Formulaire paiement ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-3"
          >
            <div className="card-glass rounded-2xl p-6">
              {/* Adresse e-mail client */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5 font-semibold">
                  Adresse e-mail (Pour la livraison des accès)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/60 focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all"
                  placeholder="vous@example.com"
                />
              </div>

              {/* Méthode de paiement */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {(["card", "paypal"] as const).map((method) => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                      paymentMethod === method
                        ? "border-[var(--color-accent)]/60 bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                        : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/30"
                    }`}
                  >
                    {method === "card" ? (
                      <><CreditCard size={16} /> Carte bancaire</>
                    ) : (
                      <><span className="font-black text-blue-500">Pay</span><span className="font-black text-blue-300">Pal</span></>
                    )}
                  </button>
                ))}
              </div>

              {paymentMethod === "card" ? (
                <form onSubmit={handlePay} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                      Nom sur la carte
                    </label>
                    <input
                      type="text"
                      required
                      value={cardForm.name}
                      onChange={(e) => setCardForm({ ...cardForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/60 focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                      Numéro de carte
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={19}
                      value={cardForm.number}
                      onChange={(e) =>
                        setCardForm({
                          ...cardForm,
                          number: e.target.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim(),
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/60 focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all font-mono tracking-wider"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                        Date d&apos;expiration
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={5}
                        value={cardForm.expiry}
                        onChange={(e) =>
                          setCardForm({
                            ...cardForm,
                            expiry: e.target.value.replace(/\D/g, "").replace(/(.{2})/, "$1/"),
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/60 focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all font-mono"
                        placeholder="MM/AA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                        CVV
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={4}
                        value={cardForm.cvv}
                        onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value.replace(/\D/g, "") })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/60 focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all font-mono"
                        placeholder="•••"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] py-2">
                    <Lock size={12} className="text-green-400" />
                    <span>Vos données sont chiffrées en SSL 256 bits. Nous ne stockons jamais vos coordonnées bancaires.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 text-sm font-bold text-white rounded-xl bg-[var(--color-accent)] hover:bg-red-700 shadow-lg shadow-[var(--color-accent)]/25 transition-all disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Traitement du paiement...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Lock size={14} />
                        Payer {plan.price} CHF — Activer maintenant
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-4">
                  <p className="text-sm text-[var(--color-text-secondary)] mb-6 text-center">
                    Payez en toute sécurité avec PayPal ou par Carte bancaire via la passerelle ci-dessous :
                  </p>
                  
                  {isEmailValid ? (
                    <PayPalButtons
                      style={{ layout: "vertical", label: "pay", color: "blue", shape: "rect" }}
                      createOrder={async () => {
                        try {
                          const res = await fetch("/api/checkout/paypal/create-order", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ planId: plan.id, email }),
                          });
                          
                          if (!res.ok) {
                            throw new Error("Order creation failed");
                          }
                          
                          const data = await res.json();
                          return data.orderId;
                        } catch (err) {
                          console.error(err);
                          alert("Échec de l'initialisation de la transaction PayPal.");
                          throw err;
                        }
                      }}
                      onApprove={async (data) => {
                        setLoading(true);
                        try {
                          const res = await fetch("/api/checkout/paypal/capture-order", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ orderId: data.orderID }),
                          });
                          
                          const captureData = await res.json();
                          if (captureData.success) {
                            setStep("success");
                          } else {
                            alert("La vérification du paiement a échoué : " + (captureData.error || "Erreur inconnue"));
                          }
                        } catch (err) {
                          console.error(err);
                          alert("Une erreur s'est produite lors de la vérification du paiement.");
                        } finally {
                          setLoading(false);
                        }
                      }}
                      onError={(err) => {
                        console.error("PayPal Error:", err);
                        alert("Une erreur s'est produite lors de la transaction PayPal.");
                      }}
                    />
                  ) : (
                    <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-sm text-blue-400 text-center font-medium">
                      Veuillez entrer une adresse e-mail valide ci-dessus pour débloquer les options de paiement.
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
        currency: "CHF",
        intent: "capture",
      }}
    >
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-[var(--color-accent)]/30 border-t-[var(--color-accent)] rounded-full animate-spin" />
          </div>
        }
      >
        <CheckoutContent />
      </Suspense>
    </PayPalScriptProvider>
  );
}
