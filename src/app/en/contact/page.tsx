"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Send, CheckCircle2, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 hero-grid opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-semibold text-blue-300 uppercase tracking-widest mb-4"
          >
            Contact & Support
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-[var(--color-text-primary)] mb-4"
          >
            We&apos;re Here to <span className="gradient-text">Help You</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto"
          >
            Our support team is available 24/7. Typical response time is under 2 minutes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                desc: "Chat with us in real-time",
                detail: "Available 24/7",
                action: "Start Chat",
                color: "from-green-500/20 to-emerald-500/20",
                iconColor: "text-green-400",
              },
              {
                icon: Mail,
                title: "Email Support",
                desc: "support@streamvault.tv",
                detail: "Response within 2 hours",
                action: "Send Email",
                color: "from-blue-500/20 to-indigo-500/20",
                iconColor: "text-blue-400",
              },
              {
                icon: Phone,
                title: "WhatsApp",
                desc: "+1 (555) 000-0000",
                detail: "Mon–Sun, 24/7",
                action: "Message Now",
                color: "from-purple-500/20 to-violet-500/20",
                iconColor: "text-purple-400",
              },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 rounded-2xl hover:border-blue-500/30 transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon size={20} className={item.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)]">{item.title}</h3>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">{item.desc}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock size={10} className="text-[var(--color-text-muted)]" />
                      <span className="text-xs text-[var(--color-text-muted)]">{item.detail}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 px-4 text-xs font-semibold text-blue-400 rounded-lg border border-blue-500/25 hover:bg-blue-500/10 transition-all">
                  {item.action}
                </button>
              </div>
            ))}

            {/* Live chat widget placeholder */}
            <div className="card-glass p-5 rounded-2xl border-green-500/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-400">Live Chat Online</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mb-3">
                Our agents are online right now. Click below to chat instantly.
              </p>
              <button
                id="live-chat-button"
                className="w-full py-3 px-4 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-lg shadow-green-500/20 transition-all"
                onClick={() => alert("Live chat widget would open here")}
              >
                Start Live Chat Now →
              </button>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 card-glass rounded-2xl p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-72 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
                >
                  <CheckCircle2 size={32} className="text-green-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Message Sent!</h3>
                <p className="text-sm text-[var(--color-text-secondary)] max-w-sm">
                  Thanks for reaching out! We&apos;ll get back to you within 2 hours. Check your email for confirmation.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">Subject</label>
                    <select
                      id="contact-subject"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                    >
                      <option value="" className="bg-[#12121f]">Select a topic...</option>
                      <option value="technical" className="bg-[#12121f]">Technical Support</option>
                      <option value="billing" className="bg-[#12121f]">Billing & Payments</option>
                      <option value="activation" className="bg-[#12121f]">Account Activation</option>
                      <option value="upgrade" className="bg-[#12121f]">Plan Upgrade</option>
                      <option value="refund" className="bg-[#12121f]">Refund Request</option>
                      <option value="other" className="bg-[#12121f]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">Message</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
                      placeholder="Describe your issue or question in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={14} />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
