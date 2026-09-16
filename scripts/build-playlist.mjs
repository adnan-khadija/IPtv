/**
 * Turns playlist/*.json (15 MB, not shipped) into the data the channels page needs:
 *   src/lib/data/channel-countries.ts   ordered country index (small, imported directly)
 *   public/playlist/<prefix>.json       one file per country, fetched on demand
 *
 * Country order follows first appearance in "category group.json" (Switzerland first).
 * Re-run with:  node scripts/build-playlist.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "playlist");
const OUT_JSON = join(ROOT, "public", "playlist");
const OUT_TS = join(ROOT, "src", "lib", "data", "channel-countries.ts");

// prefix -> ISO 3166-1 alpha-2 (for the flag) + display names.
// null iso = not a country, rendered with a neutral badge.
const META = {
  CH:   { iso: "ch", fr: "Suisse",            en: "Switzerland",        de: "Schweiz" },
  DE:   { iso: "de", fr: "Allemagne",         en: "Germany",            de: "Deutschland" },
  AT:   { iso: "at", fr: "Autriche",          en: "Austria",            de: "Österreich" },
  FR:   { iso: "fr", fr: "France",            en: "France",             de: "Frankreich" },
  NL:   { iso: "nl", fr: "Pays-Bas",          en: "Netherlands",        de: "Niederlande" },
  UK:   { iso: "gb", fr: "Royaume-Uni",       en: "United Kingdom",     de: "Vereinigtes Königreich" },
  IE:   { iso: "ie", fr: "Irlande",           en: "Ireland",            de: "Irland" },
  BE:   { iso: "be", fr: "Belgique",          en: "Belgium",            de: "Belgien" },
  "4K": { iso: null, fr: "4K Ultra HD",       en: "4K Ultra HD",        de: "4K Ultra HD" },
  IT:   { iso: "it", fr: "Italie",            en: "Italy",              de: "Italien" },
  ES:   { iso: "es", fr: "Espagne",           en: "Spain",              de: "Spanien" },
  PT:   { iso: "pt", fr: "Portugal",          en: "Portugal",           de: "Portugal" },
  PL:   { iso: "pl", fr: "Pologne",           en: "Poland",             de: "Polen" },
  GR:   { iso: "gr", fr: "Grèce",             en: "Greece",             de: "Griechenland" },
  CY:   { iso: "cy", fr: "Chypre",            en: "Cyprus",             de: "Zypern" },
  LV:   { iso: "lv", fr: "Lettonie",          en: "Latvia",             de: "Lettland" },
  SE:   { iso: "se", fr: "Suède",             en: "Sweden",             de: "Schweden" },
  DK:   { iso: "dk", fr: "Danemark",          en: "Denmark",            de: "Dänemark" },
  NO:   { iso: "no", fr: "Norvège",           en: "Norway",             de: "Norwegen" },
  FI:   { iso: "fi", fr: "Finlande",          en: "Finland",            de: "Finnland" },
  IS:   { iso: "is", fr: "Islande",           en: "Iceland",            de: "Island" },
  HU:   { iso: "hu", fr: "Hongrie",           en: "Hungary",            de: "Ungarn" },
  RO:   { iso: "ro", fr: "Roumanie",          en: "Romania",            de: "Rumänien" },
  AL:   { iso: "al", fr: "Albanie",           en: "Albania",            de: "Albanien" },
  AU:   { iso: "au", fr: "Australie",         en: "Australia",          de: "Australien" },
  NZ:   { iso: "nz", fr: "Nouvelle-Zélande",  en: "New Zealand",        de: "Neuseeland" },
  MA:   { iso: "ma", fr: "Maroc",             en: "Morocco",            de: "Marokko" },
  CZ:   { iso: "cz", fr: "Tchéquie",          en: "Czechia",            de: "Tschechien" },
  EXYU: { iso: null, fr: "Ex-Yougoslavie",    en: "Ex-Yugoslavia",      de: "Ex-Jugoslawien" },
  SR:   { iso: "rs", fr: "Serbie",            en: "Serbia",             de: "Serbien" },
  BH:   { iso: "ba", fr: "Bosnie-Herzégovine",en: "Bosnia & Herzegovina",de: "Bosnien-Herzegowina" },
  HR:   { iso: "hr", fr: "Croatie",           en: "Croatia",            de: "Kroatien" },
  MK:   { iso: "mk", fr: "Macédoine du Nord", en: "North Macedonia",    de: "Nordmazedonien" },
  SI:   { iso: "si", fr: "Slovénie",          en: "Slovenia",           de: "Slowenien" },
  CG:   { iso: "me", fr: "Monténégro",        en: "Montenegro",         de: "Montenegro" },
  BG:   { iso: "bg", fr: "Bulgarie",          en: "Bulgaria",           de: "Bulgarien" },
  TR:   { iso: "tr", fr: "Turquie",           en: "Turkey",             de: "Türkei" },
  KU:   { iso: null, fr: "Kurde",             en: "Kurdish",            de: "Kurdisch" },
  CA:   { iso: "ca", fr: "Canada",            en: "Canada",             de: "Kanada" },
  US:   { iso: "us", fr: "États-Unis",        en: "United States",      de: "Vereinigte Staaten" },
};

// Small-capital letters have no Unicode compatibility decomposition, so map them by hand.
const SMALL_CAPS = {
  "ᴀ":"A","ʙ":"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F","ɢ":"G",
  "ʜ":"H","ɪ":"I","ᴊ":"J","ᴋ":"K","ʟ":"L","ᴍ":"M","ɴ":"N",
  "ᴏ":"O","ᴘ":"P","ꞯ":"Q","ʀ":"R","ꜱ":"S","ᴛ":"T","ᴜ":"U",
  "ᴠ":"V","ᴡ":"W","ʏ":"Y","ᴢ":"Z",
  "ғ":"F", // Cyrillic ghe-with-stroke used as a small-cap F in some names
};

/** Superscript/modifier letters -> ASCII (NFKC), then small caps, then tidy. */
function normaliseText(s) {
  return s
    .normalize("NFKC")
    .replace(/[ᴀ-ᴢɢɴʀʙʜʟɪʏꜰꜱꞯғ]/g,
      (ch) => SMALL_CAPS[ch] || ch)
    .replace(/[☀-➿⬀-⯿■-◿�⁦-⁩]/g, "") // ☼ ★ ◉ and friends
    .replace(/\s+/g, " ")
    .trim();
}

/** Playlists use "##### NAME #####" rows as visual dividers, not real channels. */
function isSeparator(name) {
  return /#{3,}|={3,}|\*{3,}|-{5,}/.test(name);
}

/** Strip the "XX| " prefix from a category label. */
function cleanCategory(name) {
  return normaliseText(name.replace(/^[^|]+\|\s*/, "")) || name;
}

/** Channel names are prefixed with the country code, e.g. "CH: SRF 1 HD". */
function cleanChannel(name) {
  const stripped = name.replace(/^[A-Z0-9]{2,5}\s*[:|]\s*/i, "");
  return normaliseText(stripped) || normaliseText(name);
}

const cats = JSON.parse(readFileSync(join(SRC, "category group.json"), "utf8"));
const chans = JSON.parse(readFileSync(join(SRC, "all channels.json"), "utf8"));

// category_id -> { prefix, label }, and the country order as first seen
const catInfo = new Map();
const order = [];
for (const c of cats) {
  const m = c.category_name.match(/^([^|]+)\|/);
  const prefix = m ? m[1].trim() : "OTHER";
  catInfo.set(String(c.category_id), { prefix, label: cleanCategory(c.category_name) || c.category_name });
  if (!order.includes(prefix)) order.push(prefix);
}

// bucket channels: prefix -> category label -> [names]
const buckets = new Map();
for (const ch of chans) {
  const info = catInfo.get(String(ch.category_id));
  if (!info) continue;
  if (isSeparator(ch.name)) continue;
  if (!buckets.has(info.prefix)) buckets.set(info.prefix, new Map());
  const groups = buckets.get(info.prefix);
  if (!groups.has(info.label)) groups.set(info.label, []);
  groups.get(info.label).push(cleanChannel(ch.name));
}

mkdirSync(OUT_JSON, { recursive: true });
for (const f of readdirSync(OUT_JSON)) if (f.endsWith(".json")) rmSync(join(OUT_JSON, f));

const index = [];
let totalBytes = 0;
for (const prefix of order) {
  const groups = buckets.get(prefix);
  if (!groups) continue;
  const meta = META[prefix] || { iso: null, fr: prefix, en: prefix, de: prefix };
  const categories = [...groups.entries()].map(([label, channels]) => ({ label, channels }));
  const count = categories.reduce((n, g) => n + g.channels.length, 0);

  const slug = prefix.toLowerCase().replace(/[^a-z0-9]/g, "");
  const payload = JSON.stringify({ prefix, categories });
  writeFileSync(join(OUT_JSON, `${slug}.json`), payload);
  totalBytes += payload.length;

  index.push({ slug, prefix, iso: meta.iso, name: { fr: meta.fr, en: meta.en, de: meta.de }, count, groups: categories.length });
}

const ts = `// GENERATED by scripts/build-playlist.mjs — do not edit by hand.
// Channel lists live in public/playlist/<slug>.json and are fetched on demand.

export interface ChannelCountry {
  slug: string;
  prefix: string;
  iso: string | null;
  name: { fr: string; en: string; de: string };
  count: number;
  groups: number;
}

export const channelCountries: ChannelCountry[] = ${JSON.stringify(index, null, 2)};

export const totalChannels = ${index.reduce((n, c) => n + c.count, 0)};
`;
writeFileSync(OUT_TS, ts);

console.log(`countries: ${index.length}`);
console.log(`channels:  ${index.reduce((n, c) => n + c.count, 0)}`);
console.log(`per-country JSON total: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
const big = [...index].sort((a, b) => b.count - a.count).slice(0, 3);
console.log("largest:", big.map((b) => `${b.slug}=${b.count}`).join(" "));
console.log("first 3 (order check):", index.slice(0, 3).map((c) => c.prefix).join(" -> "));
