"use client";

import { motion } from "framer-motion";
import { Play, Tv, Film, Star } from "lucide-react";

interface ChannelItem {
  name: string;
  logoText: string;
  logoBg: string;
  logoFg: string;
  genre: string;
  /** Optional real logo file, e.g. "/channels/srf1.svg". Falls back to the wordmark tile. */
  logoSrc?: string;
}

interface VodItem {
  title: string;
  image: string;
  /** Omitted when no public score exists yet (e.g. a brand-new release). */
  rating?: string;
  genre: string;
  year: string;
  platform: string;
}

// Swiss line-up ordered by national audience share (SRG SSR / Statista) interleaved with
// the international streaming platforms subscribers ask for, shown in one continuous slider.
const CHANNELS: ChannelItem[] = [
  { name: "SRF 1 HD", logoText: "SRF 1", logoBg: "bg-[#141414] border border-white/20", logoFg: "text-white", genre: "Généraliste · N°1 Suisse alémanique" },
  { name: "Netflix", logoText: "NETFLIX", logoBg: "bg-black border border-white/15", logoFg: "text-[#e50914]", genre: "Séries & Films originaux" },
  { name: "RTS 1 HD", logoText: "RTS 1", logoBg: "bg-[#e2001a]", logoFg: "text-white", genre: "Généraliste · N°1 Romandie" },
  { name: "Apple TV+", logoText: "Apple TV+", logoBg: "bg-[#0d0d0d] border border-white/20", logoFg: "text-white", genre: "Originals & Cinéma" },
  { name: "SRF zwei HD", logoText: "SRF 2", logoBg: "bg-[#2b2b2b] border border-white/15", logoFg: "text-white", genre: "Sport & Séries" },
  { name: "Disney+", logoText: "Disney+", logoBg: "bg-[#0c1a4d]", logoFg: "text-white", genre: "Disney · Marvel · Star Wars" },
  { name: "RTS 2 HD", logoText: "RTS 2", logoBg: "bg-[#a4000f]", logoFg: "text-white", genre: "Sport & Jeunesse" },
  { name: "Prime Video", logoText: "prime", logoBg: "bg-[#00a8e1]", logoFg: "text-white", genre: "Films, Séries & Sport" },
  { name: "RSI LA 1 HD", logoText: "RSI 1", logoBg: "bg-[#d81f26]", logoFg: "text-white", genre: "Généraliste · Suisse italienne" },
  { name: "HBO Max", logoText: "HBO MAX", logoBg: "bg-[#0a0a2a] border border-white/15", logoFg: "text-white", genre: "Séries premium HBO" },
  { name: "SRF info HD", logoText: "SRF info", logoBg: "bg-[#1f1f1f] border border-white/15", logoFg: "text-white", genre: "News & Documentaires" },
  { name: "Paramount+", logoText: "P+", logoBg: "bg-[#0064ff]", logoFg: "text-white", genre: "Films & Séries" },
  { name: "blue Sport 1 HD", logoText: "blue SPORT", logoBg: "bg-[#0b1f6b]", logoFg: "text-white", genre: "Champions League & Super League" },
  { name: "Canal+", logoText: "CANAL+", logoBg: "bg-black border border-white/25", logoFg: "text-white", genre: "Cinéma & Sport premium" },
  { name: "MySports One HD", logoText: "MySports", logoBg: "bg-[#00b3a4]", logoFg: "text-black", genre: "National League & NHL" },
  { name: "beIN Sports", logoText: "beIN", logoBg: "bg-[#5b2a86]", logoFg: "text-white", genre: "Football international" },
  { name: "TF1 Suisse HD", logoText: "TF1", logoBg: "bg-[#12235e]", logoFg: "text-white", genre: "Généraliste" },
  { name: "DAZN", logoText: "DAZN", logoBg: "bg-[#0f0f0f] border border-white/25", logoFg: "text-white", genre: "Sport en direct" },
  { name: "M6 Suisse HD", logoText: "M6", logoBg: "bg-[#e0004d]", logoFg: "text-white", genre: "Divertissement" },
  { name: "Sky Sport", logoText: "sky sport", logoBg: "bg-[#0072c9]", logoFg: "text-white", genre: "Premier League & F1" },
];

const VOD_DATA: VodItem[] = [
  { title: "The Odyssey", image: "/films/theOdyssey.jpg", genre: "Action, Adventure", year: "2026", platform: "Universal" },
  { title: "Dune: Part Two", image: "/films/dunepart2.png", rating: "4.9", genre: "Action, Sci-Fi", year: "2024", platform: "Cinema" },
  { title: "Interstellar", image: "/films/interstellar.png", rating: "4.9", genre: "Sci-Fi, Adventure", year: "2014", platform: "Paramount" },
  { title: "House of the Dragon", image: "/films/hoseOfDragon.png", rating: "4.8", genre: "Drama, Fantasy", year: "2024", platform: "HBO Max" },
  { title: "Gladiator II", image: "/films/gladiator2.png", rating: "4.7", genre: "Action, Drama", year: "2024", platform: "Cinema" },
  { title: "The Last of Us", image: "/films/theLastOfUs.png", rating: "4.8", genre: "Action, Adventure", year: "2023", platform: "HBO Max" },
  { title: "Stranger Things", image: "/films/strangerThings.png", rating: "4.9", genre: "Drama, Fantasy", year: "2024", platform: "Netflix" },
  { title: "Wednesday", image: "/films/wednesday.png", rating: "4.6", genre: "Comedy, Fantasy", year: "2022", platform: "Netflix" },
  { title: "Oppenheimer", image: "/films/oppenheimer.png", rating: "4.9", genre: "Biography, Drama", year: "2023", platform: "Universal" },

];

interface ChannelsAndVODProps {
  content?: {
    title: string;
    subtitle: string;
    live: string;
    moviesTitle: string;
    moviesSubtitle: string;
    tvTitle: string;
    tvSubtitle: string;
  };
}

export default function ChannelsAndVOD({ content }: ChannelsAndVODProps) {
  if (!content) return null;
  const c = content;

  // Duplicate items for seamless marquee scroll effect
  const doubledChannels = [...CHANNELS, ...CHANNELS, ...CHANNELS, ...CHANNELS];
  const doubledVod = [...VOD_DATA, ...VOD_DATA, ...VOD_DATA, ...VOD_DATA];

  return (
    <section id="channels" className="relative py-20 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* CSS Styles for marquee scrolling */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }
      `}} />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black font-title text-white uppercase mb-4 tracking-tighter">
            {c.title}
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] font-medium">
            {c.subtitle}
          </p>
        </div>
      </div>

      {/* ================= SECTION 1: LIVE TV CHANNELS ================= */}
      <div className="mb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
                <Tv size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">{c.tvTitle}</h3>
                <p className="text-sm text-gray-400 mt-0.5">{c.tvSubtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Single combined slider: Swiss channels + international platforms */}
        <div className="w-full relative select-none overflow-hidden py-4">
          {/* Shadow gradients for fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] gap-4">
              {doubledChannels.map((chan, idx) => (
                <div
                  key={`${chan.name}-${idx}`}
                  className="w-[280px] shrink-0 bg-[#141414] border border-white/5 hover:border-[var(--color-accent)]/30 hover:bg-[#1c1c1c] transition-all duration-300 rounded-xl p-4 flex items-center gap-4 cursor-pointer group"
                >
                  {/* Channel logo box */}
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden ${chan.logoBg} font-title text-center text-[13px] leading-tight font-black tracking-tighter ${chan.logoFg} shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {chan.logoSrc ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={chan.logoSrc}
                        alt={`${chan.name} logo`}
                        className="w-full h-full object-contain p-1.5"
                        loading="lazy"
                      />
                    ) : (
                      <span className="px-1">{chan.logoText}</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                      <span className="text-xs font-bold text-green-500 uppercase tracking-widest">{c.live}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white truncate group-hover:text-[var(--color-accent)] transition-colors duration-300">{chan.name}</h4>
                    <p className="text-[11px] text-gray-400 truncate mt-0.5">{chan.genre}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: MOVIES & SERIES (VOD) ================= */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-3 border-b border-white/5 pb-6">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
              <Film size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">{c.moviesTitle}</h3>
              <p className="text-sm text-gray-400 mt-0.5">{c.moviesSubtitle}</p>
            </div>
          </div>
        </div>

        {/* Movies Marquee Slider (Moves in opposite direction) */}
        <div className="w-full relative select-none overflow-hidden py-4">
          {/* Shadow gradients for fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] gap-5">
            {doubledVod.map((movie, idx) => (
              <div
                key={`${movie.title}-${idx}`}
                className="w-[180px] sm:w-[200px] shrink-0 bg-[#141414] border border-white/5 hover:border-[var(--color-accent)]/30 transition-all duration-300 rounded-xl overflow-hidden cursor-pointer group"
              >
                {/* Poster container */}
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Backdrop Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shadow-lg"
                    >
                      <Play size={18} fill="white" className="ml-1" />
                    </motion.div>
                  </div>
                  {/* Platform Badge */}
                  <span className="absolute top-2 left-2 text-[9px] font-black uppercase bg-black/75 backdrop-blur px-2 py-1 rounded text-white border border-white/10 tracking-wider">
                    {movie.platform}
                  </span>
                  {/* Resolution Badge */}
                  <span className="absolute bottom-2 right-2 text-[9px] font-bold bg-[var(--color-accent)] px-1.5 py-0.5 rounded text-white tracking-wide">
                    Haute Qualité
                  </span>
                </div>

                {/* Details */}
                <div className="p-3">
                  <div className="flex items-center gap-1 mb-1 min-h-[16px]">
                    {movie.rating && (
                      <>
                        <Star size={11} className="fill-yellow-500 text-yellow-500" />
                        <span className="text-xs font-bold text-yellow-400">{movie.rating}</span>
                      </>
                    )}
                    <span className="text-[10px] text-gray-500 ml-auto">{movie.year}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-[var(--color-accent)] transition-colors duration-300">{movie.title}</h4>
                  <p className="text-[10px] text-gray-500 truncate mt-0.5">{movie.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
