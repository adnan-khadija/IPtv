"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, Search, Tv, Globe, Loader2 } from "lucide-react";
import { channelCountries, type ChannelCountry } from "@/lib/data/channel-countries";

interface CountryFile {
  prefix: string;
  categories: { label: string; channels: string[] }[];
}

export interface ChannelsBrowserStrings {
  searchPlaceholder: string;
  back: string;
  channels: string;
  categories: string;
  loading: string;
  error: string;
  noResults: string;
  resultsCapped: string;
}

const MAX_RESULTS = 300;

/** Self-hosted SVG flag, or a neutral globe for non-country groups (4K, EXYU, KU). */
function Flag({ c, size }: { c: ChannelCountry; size: string }) {
  if (!c.iso) {
    return (
      <span className={`${size} rounded-[3px] bg-white/10 ring-1 ring-white/15 flex items-center justify-center`}>
        <Globe size={14} className="text-gray-300" />
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/flags/${c.iso}.svg`}
      alt=""
      loading="lazy"
      className={`${size} rounded-[3px] object-cover shadow-md ring-1 ring-white/15`}
    />
  );
}

export default function ChannelsBrowser({
  lang,
  strings,
}: {
  lang: "fr" | "en" | "de";
  strings: ChannelsBrowserStrings;
}) {
  const [selected, setSelected] = useState<ChannelCountry | null>(null);
  const [data, setData] = useState<CountryFile | null>(null);
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [query, setQuery] = useState("");

  // Resetting on selection belongs to the event, not the effect.
  const selectCountry = (c: ChannelCountry | null) => {
    setSelected(c);
    setData(null);
    setQuery("");
    setState(c ? "loading" : "idle");
  };

  // Load the selected country's channel file on demand.
  useEffect(() => {
    if (!selected) return;
    let cancelled = false;

    fetch(`/playlist/${selected.slug}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((json: CountryFile) => {
        if (cancelled) return;
        setData(json);
        setState("idle");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });

    return () => {
      cancelled = true;
    };
  }, [selected]);

  const search = query.trim().toLowerCase();
  const results = useMemo(() => {
    const hits: { group: string; name: string }[] = [];
    let capped = false;
    if (data && search.length >= 2) {
      for (const g of data.categories) {
        for (const name of g.channels) {
          if (!name.toLowerCase().includes(search)) continue;
          if (hits.length >= MAX_RESULTS) { capped = true; break; }
          hits.push({ group: g.label, name });
        }
        if (capped) break;
      }
      return { hits, capped, active: true };
    }
    return { hits, capped, active: false };
  }, [data, search]);

  /* ---------------------------------------------------- country grid */
  if (!selected) {
    return (
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {channelCountries.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => selectCountry(c)}
              className="group flex items-center gap-3 text-left rounded-xl bg-[#141414] border border-white/5 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:bg-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              <Flag c={c} size="w-9 h-6 shrink-0" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-white truncate group-hover:text-[var(--color-accent)] transition-colors">
                  {c.name[lang]}
                </span>
                <span className="block text-[11px] text-gray-500 mt-0.5">
                  {c.count.toLocaleString(lang)} {strings.channels}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  /* ------------------------------------------------- single country */
  return (
    <div>
      <button
        type="button"
        onClick={() => selectCountry(null)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-white transition-colors mb-6"
      >
        <ChevronLeft size={16} />
        {strings.back}
      </button>

      <div className="flex items-center gap-4 mb-6">
        <Flag c={selected} size="w-14 h-10 shrink-0" />
        <div className="min-w-0">
          <h2 className="text-2xl sm:text-3xl font-black font-title text-white uppercase tracking-tight truncate">
            {selected.name[lang]}
          </h2>
          <p className="text-sm text-gray-400">
            {selected.count.toLocaleString(lang)} {strings.channels} · {selected.groups} {strings.categories}
          </p>
        </div>
      </div>

      <div className="relative mb-6">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={strings.searchPlaceholder}
          className="w-full rounded-xl bg-[#141414] border border-white/10 py-3 pl-11 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-accent)]/60"
        />
      </div>

      {state === "loading" && (
        <div className="flex items-center justify-center gap-2 py-16 text-gray-400 text-sm">
          <Loader2 size={18} className="animate-spin" />
          {strings.loading}
        </div>
      )}

      {state === "error" && (
        <p className="py-16 text-center text-sm text-gray-400">{strings.error}</p>
      )}

      {/* search results across the whole country */}
      {data && results.active && (
        <div>
          {results.hits.length === 0 ? (
            <p className="py-12 text-center text-sm text-gray-400">{strings.noResults}</p>
          ) : (
            <>
              <ul className="divide-y divide-white/5 rounded-xl border border-white/5 bg-[#141414] overflow-hidden">
                {results.hits.map((h, i) => (
                  <li key={`${h.name}-${i}`} className="flex items-start gap-3 px-4 py-2.5">
                    <Tv size={14} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200 break-words min-w-0">{h.name}</span>
                    <span className="ml-auto text-[11px] text-gray-500 shrink-0 hidden sm:block">{h.group}</span>
                  </li>
                ))}
              </ul>
              {results.capped && (
                <p className="mt-3 text-xs text-gray-500 text-center">{strings.resultsCapped}</p>
              )}
            </>
          )}
        </div>
      )}

      {/* every category of the country, all open at once */}
      {data && !results.active && (
        <div className="space-y-4">
          {data.categories.map((g) => (
            <section key={g.label} className="rounded-xl border border-white/5 bg-[#141414] overflow-hidden">
              <header className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <h3 className="text-sm font-bold text-white flex-1 min-w-0 break-words">{g.label}</h3>
                <span className="text-[11px] font-semibold text-gray-400 bg-white/5 rounded-full px-2 py-0.5 shrink-0">
                  {g.channels.length}
                </span>
              </header>
              <ul className="divide-y divide-white/5">
                {g.channels.map((name, i) => (
                  <li
                    key={`${name}-${i}`}
                    className="relative px-4 py-2.5 pl-8 text-sm text-gray-200 break-words
                               before:absolute before:left-4 before:top-[1.15em] before:h-1.5 before:w-1.5
                               before:-translate-y-1/2 before:rounded-full before:bg-[var(--color-accent)]"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
