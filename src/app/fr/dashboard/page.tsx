"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap, Calendar, Clock, RefreshCw, Settings, LogOut,
  Tv2, Film, Wifi, Star, ChevronRight, Bell,
} from "lucide-react";

// Mock user data
const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  plan: "12 Mois — 1 Appareil",
  startDate: "Jan 15, 2025",
  expiryDate: "Jan 15, 2026",
  daysLeft: 151,
  totalDays: 365,
  connections: 1,
  activeConnections: 1,
  status: "active",
};

const quickStats = [
  { icon: Tv2, label: "Chaînes", value: "20 000+" },
  { icon: Film, label: "Films & Séries", value: "40 000+" },
  { icon: Wifi, label: "Appareil", value: "1 / 1" },
  { icon: Star, label: "Abonnement", value: "12 Mois" },
];

export default function DashboardPage() {
  const progressPercent = Math.round((mockUser.daysLeft / mockUser.totalDays) * 100);

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-64" style={{ background: "linear-gradient(180deg, rgba(99,102,241,0.08) 0%, transparent 100%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                {mockUser.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-black text-[var(--color-text-primary)]">
                  Welcome back, {mockUser.name.split(" ")[0]}! 👋
                </h1>
                <p className="text-sm text-[var(--color-text-muted)]">{mockUser.email}</p>
              </div>
            </div>
          </motion.div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-white/5 transition-all">
              <Bell size={18} />
            </button>
            <button className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-white/5 transition-all">
              <Settings size={18} />
            </button>
            <Link
              href="/"
              className="flex items-center gap-1.5 px-4 py-2 text-sm text-[var(--color-text-muted)] rounded-lg border border-[var(--color-border)] hover:border-red-500/30 hover:text-red-400 hover:bg-red-500/5 transition-all"
            >
              <LogOut size={15} />
              Sign Out
            </Link>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-glass p-5 rounded-2xl hover:border-blue-500/25 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <stat.icon size={16} className="text-blue-400" />
                </div>
                <span className="text-xs text-[var(--color-text-muted)] font-medium">{stat.label}</span>
              </div>
              <div className="text-2xl font-black gradient-text">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Main subscription card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="card-glass rounded-2xl p-6 mb-6 border-blue-500/20"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Zap size={18} className="text-white fill-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[var(--color-text-primary)]">{mockUser.plan}</h2>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-medium text-green-400">Active</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={14} className="text-[var(--color-text-muted)]" />
                  <div>
                    <span className="text-[var(--color-text-muted)]">Started: </span>
                    <span className="font-medium text-[var(--color-text-primary)]">{mockUser.startDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={14} className="text-[var(--color-text-muted)]" />
                  <div>
                    <span className="text-[var(--color-text-muted)]">Expires: </span>
                    <span className="font-medium text-[var(--color-text-primary)]">{mockUser.expiryDate}</span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] mb-2">
                  <span>{mockUser.daysLeft} days remaining</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="h-2 rounded-full bg-[var(--color-bg-secondary)] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:min-w-40">
              <Link
                href="/fr/checkout?plan=12m-1s"
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white rounded-xl bg-[var(--color-accent)] hover:bg-red-700 shadow-lg shadow-[var(--color-accent)]/20 transition-all hover:-translate-y-0.5"
              >
                <RefreshCw size={14} />
                Renouveler
              </Link>
              <Link
                href="/fr#pricing"
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[var(--color-text-secondary)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:bg-white/5 transition-all"
              >
                Voir les abonnements
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Two column row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Connection info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="card-glass rounded-2xl p-6"
          >
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-4">Your Credentials</h3>
            <div className="space-y-3">
              {[
                { label: "Portal URL", value: "http://portal.tvsuisse.ch" },
                { label: "Username", value: mockUser.email },
                { label: "Password", value: "••••••••" },
                { label: "M3U URL", value: "Available in settings" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm py-2 border-b border-[var(--color-border)] last:border-0">
                  <span className="text-[var(--color-text-muted)]">{item.label}</span>
                  <span className="text-[var(--color-text-primary)] font-medium font-mono text-xs">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="card-glass rounded-2xl p-6"
          >
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-4">Quick Actions</h3>
            <div className="space-y-2">
              {[
                { label: "Setup Guides", desc: "Configure on any device", icon: Tv2, href: "#" },
                { label: "Contact Support", desc: "24/7 expert assistance", icon: Bell, href: "/contact" },
                { label: "Billing History", desc: "View past invoices", icon: Calendar, href: "#" },
                { label: "Account Settings", desc: "Update your profile", icon: Settings, href: "#" },
              ].map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--color-bg-card-hover)] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/15 to-purple-500/15 flex items-center justify-center">
                    <action.icon size={16} className="text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[var(--color-text-primary)]">{action.label}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">{action.desc}</div>
                  </div>
                  <ChevronRight size={14} className="text-[var(--color-text-muted)] group-hover:text-blue-400 transition-colors" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
