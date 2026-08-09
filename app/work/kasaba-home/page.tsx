import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kasaba Home — Case Study",
  description:
    "A complete brand identity for kasaba Homes — a handcrafted homeware label rooted in heritage craftsmanship, sustainability, and personal expression.",
  alternates: { canonical: "/work/kasaba-home" },
  openGraph: {
    title: "Kasaba Home — Case Study — Rishav Singh",
    description: "Artisanal home brand identity crafted around the concept of timeless living.",
    url: "/work/kasaba-home",
  },
};

// Kasaba Home brand palette, pulled directly from the Figma "Palette" section.
const MAROON = "#5B2427";
const SAND = "#D4C5A9";
const CREAM = "#F5F0E8";
const BROWN = "#3B2316";
const SAGE = "#6B7B4C";

const PILLARS = [
  {
    number: "01",
    title: "Craftsmanship",
    body: "Forged by steady hands. Every glaze pattern on our striped mugs reflects a quiet human devotion to geometry.",
  },
  {
    number: "02",
    title: "Sustainability",
    body: "Working in tandem with Earth. We produce locally in small batches using non-toxic local clays and recycled packaging.",
  },
  {
    number: "03",
    title: "Individuality",
    body: "No two homes are identical. We celebrate raw edges, organic textures, and the beautiful variance of wood firing.",
  },
];

const PALETTE = [
  { number: "01", name: "Deep Maroon", hex: MAROON, usage: "Dominant Brand Accent", text: CREAM },
  { number: "02", name: "Warm Sand", hex: SAND, usage: "Clay Surface Support", text: BROWN },
  { number: "03", name: "Soft Cream", hex: CREAM, usage: "Contrast Canvas", text: BROWN, border: true },
  { number: "04", name: "Dark Brown", hex: BROWN, usage: "Typography Anchor", text: CREAM },
  { number: "05", name: "Olive Sage", hex: SAGE, usage: "Organic Flora Accent", text: CREAM },
];

// "Palette in context" — colors applied to real brand touchpoints
const PALETTE_CONTEXT = [
  { number: "01", hex: MAROON, ring: "#FFFFFF", text: CREAM, img: "palette-context-maroon.png", caption: "Packaging label / accent" },
  { number: "02", hex: SAND, ring: "#FFFFFF", text: BROWN, img: "palette-context-sand.png", caption: "Background / surface" },
  { number: "03", hex: CREAM, ring: BROWN, text: BROWN, img: "palette-context-cream.png", caption: "Contrast canvas / paper" },
  { number: "04", hex: BROWN, ring: "#FFFFFF", text: CREAM, img: "palette-context-brown.png", caption: "Typography anchor / leather" },
  { number: "05", hex: SAGE, ring: "#FFFFFF", text: CREAM, img: "palette-context-olive.png", caption: "Organic accent / flora" },
];

// Social Presence — mock Instagram grid posts, grouped by brand pillar
const SOCIAL_PILLARS = [
  {
    number: "01",
    title: "Craftsmanship",
    subtitle: "(The Ceramic Process)",
    posts: [
      { img: "social-craft-1.png", quote: "The quiet geometry of a steady hand." },
      { img: "social-craft-2.png", quote: "Centering. The moment before form takes shape." },
      { img: "social-craft-3.png", quote: "Every striped cup carries a human devotion." },
    ],
  },
  {
    number: "02",
    title: "Sustainability",
    subtitle: "(Tactile Ecology)",
    posts: [
      { img: "social-sustain-1.png", quote: "Locally sourced, unhurriedly made." },
      { img: "social-sustain-2.png", quote: "Clay returned to the earth, cleanly." },
      { img: "social-sustain-3.png", quote: "Non-toxic glazes. Non-pollutive minds." },
    ],
  },
  {
    number: "03",
    title: "Individuality",
    subtitle: "(Personal Space)",
    posts: [
      { img: "social-individual-1.png", quote: "No two homes are identical." },
      { img: "social-individual-2.png", quote: "Celebrate raw edges and wood firing." },
      { img: "social-individual-3.png", quote: "Your shelf tells your unhurried story." },
    ],
  },
];

// Instagram Stories — 9:16 story mockups
const STORIES = [
  { img: "story-1.png", stamp: "evolving", headline: "Evolving - stay tuned.", sub: "The studio is reshaping. October 2025." },
  { img: "story-2.png", stamp: "restocked", headline: "Sip Between the Lines.", sub: "Our striped mugs are back on shelves." },
  { img: "story-3.png", stamp: "studio", headline: "Mindful Choices.", sub: "Behind-the-scenes with our artisans." },
  { img: "story-4.png", stamp: "feel home", headline: "Feel at Home.", sub: "New homeware arrivals now live online." },
];

function TagIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </svg>
  );
}

function MessageCircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
    </svg>
  );
}

export default function KasabaHomePage() {
  return (
    <main className="flex-1" style={{ backgroundColor: CREAM }}>
      {/* 1 — Hero Cover */}
      <section className="relative flex min-h-[640px] flex-col items-center justify-between overflow-hidden px-6 py-24 text-center sm:px-10 sm:py-28 lg:min-h-[800px] lg:px-[100px] lg:py-[140px]">
        <Image
          src="/images/kasaba-home/hero-cover-photo.png"
          alt="Kasaba Homes — handcrafted stoneware in a warm, sunlit home setting"
          fill
          priority
          className="object-cover"
        />
        <Image
          src="/images/kasaba-home/hero-pattern-overlay-735cef.png"
          alt=""
          aria-hidden
          fill
          className="object-cover opacity-40 mix-blend-overlay"
        />
        <div aria-hidden className="absolute inset-0" style={{ backgroundColor: "rgba(58, 15, 18, 0.85)" }} />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(58, 15, 18, 0.72) 0%, rgba(58, 15, 18, 0.35) 55%, rgba(58, 15, 18, 0) 100%)`,
          }}
        />
        <Nav active="Work" />

        <Image
          src="/images/kasaba-home/kasaba-icon-mark.svg"
          alt="Kasaba Homes"
          width={175}
          height={93}
          className="relative z-10 h-auto w-[110px] sm:w-[140px] lg:w-[175px]"
          priority
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className={`${cormorant.className} max-w-[820px] text-5xl leading-[1.05] text-white sm:text-6xl lg:text-[84px]`}>
            Handcrafted for homes with soul
          </h1>
          <p className="text-sm font-normal uppercase tracking-[0.1667em] sm:text-base lg:text-lg" style={{ color: SAND }}>
            Brand Identity
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <span className="text-[11px] font-normal uppercase tracking-[0.1667em] opacity-80" style={{ color: SAND }}>
            Scroll to explore
          </span>
          <span aria-hidden className="text-sm" style={{ color: SAND, opacity: 0.8 }}>
            ↓
          </span>
        </div>
      </section>

      {/* 2 — Project Overview */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-[100px] lg:py-[100px]" style={{ backgroundColor: CREAM }}>
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-8 lg:flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.1667em]" style={{ color: MAROON }}>
              Project Overview
            </p>
            <p className={`${cormorant.className} text-3xl leading-[1.25] sm:text-4xl lg:text-[44px]`} style={{ color: MAROON }}>
              A complete brand identity for kasaba Homes — a handcrafted homeware label rooted in heritage
              craftsmanship, sustainability, and personal expression. From logo to social media, every touchpoint
              tells the story of objects made with intention.
            </p>
          </div>
          <div className="flex flex-col gap-10 pt-0 lg:w-[360px] lg:flex-shrink-0 lg:pt-11">
            {[
              { label: "Role", value: "Brand Identity, Visual Design, Social Media" },
              { label: "Client", value: "kasaba Homes" },
              { label: "Year", value: "2025" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-3 border-b pb-5" style={{ borderColor: "rgba(59, 35, 22, 0.12)" }}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.0909em]" style={{ color: MAROON, opacity: 0.6 }}>
                  {item.label}
                </p>
                <p className={`${cormorant.className} text-xl font-medium`} style={{ color: BROWN }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 sm:h-[600px] sm:flex-row">
          <div className="relative h-[320px] flex-1 overflow-hidden rounded-2xl sm:h-full">
            <Image src="/images/kasaba-home/overview-mosaic-1.png" alt="Kasaba Homes lifestyle setting" fill className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col gap-6 sm:h-full">
            <div className="relative h-[240px] flex-1 overflow-hidden rounded-2xl">
              <Image src="/images/kasaba-home/overview-mosaic-2.png" alt="Kasaba Homes pottery detail" fill className="object-cover" />
            </div>
            <div className="relative h-[240px] flex-1 overflow-hidden rounded-2xl">
              <Image src="/images/kasaba-home/overview-mosaic-3.png" alt="Kasaba Homes pottery detail" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Brand Story */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-[100px] lg:py-[140px]" style={{ backgroundColor: SAND }}>
        <p className="text-xs font-semibold uppercase tracking-[0.1667em]" style={{ color: MAROON }}>
          Brand Story
        </p>
        <h2 className={`${cormorant.className} mt-4 text-4xl sm:text-5xl`} style={{ color: MAROON }}>
          The Origin
        </h2>

        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <blockquote className={`${cormorant.className} text-3xl italic leading-[1.4] sm:text-4xl lg:flex-1`} style={{ color: BROWN }}>
            &ldquo;I grew up watching people make things by hand. Everyday objects built slowly, intentionally — not
            bought, but earned. That memory shaped Kasaba.&rdquo;
          </blockquote>
          <div className="relative h-[280px] w-[280px] flex-shrink-0 overflow-hidden rounded-full sm:h-[360px] sm:w-[360px] lg:h-[480px] lg:w-[480px]">
            <Image src="/images/kasaba-home/story-portrait.png" alt="Kasaba Homes — the maker at work" fill className="object-cover" />
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.number} className="rounded-2xl p-8" style={{ backgroundColor: CREAM }}>
              <p className="text-base font-semibold" style={{ color: MAROON }}>{p.number}</p>
              <h3 className={`${cormorant.className} mt-3 text-2xl font-medium`} style={{ color: BROWN }}>{p.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: BROWN, opacity: 0.8 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 — Logo Showcase */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-[100px] lg:py-[140px]" style={{ backgroundColor: CREAM }}>
        <p className="text-xs font-semibold uppercase tracking-[0.1667em]" style={{ color: MAROON }}>
          Visual Identity
        </p>
        <h2 className={`${cormorant.className} mt-4 text-4xl sm:text-5xl`} style={{ color: MAROON }}>
          The Logomark
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <div className="flex h-[320px] flex-col items-center justify-between rounded-3xl p-8 sm:h-[420px] lg:h-[500px]" style={{ backgroundColor: SAND }}>
            <span />
            <Image src="/images/kasaba-home/kasaba-icon-mark.svg" alt="Kasaba Homes logomark on sand" width={175} height={93} className="h-auto w-[140px] sm:w-[175px]" />
            <p className="text-[11px] font-normal uppercase tracking-[0.0909em]" style={{ color: MAROON, opacity: 0.6 }}>
              Primary Lockup on Sand
            </p>
          </div>
          <div className="flex h-[320px] flex-col items-center justify-between rounded-3xl p-8 sm:h-[420px] lg:h-[500px]" style={{ backgroundColor: MAROON }}>
            <span />
            <Image src="/images/kasaba-home/kasaba-icon-mark.svg" alt="Kasaba Homes logomark on burgundy" width={175} height={93} className="h-auto w-[140px] sm:w-[175px]" />
            <p className="text-[11px] font-normal uppercase tracking-[0.0909em] text-white/60">
              Reverse Colorway on Burgundy
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-2xl border p-8 sm:p-10" style={{ borderColor: "rgba(59, 35, 22, 0.12)", backgroundColor: "#FFFFFF" }}>
            <p className="text-[11px] font-normal uppercase tracking-[0.0909em]" style={{ color: MAROON, opacity: 0.5 }}>
              Horizontal Lockup
            </p>
            <Image src="/images/kasaba-home/kasaba-horizontal-lockup.svg" alt="Kasaba Homes horizontal lockup" width={350} height={53} className="h-auto w-[220px] sm:w-[280px]" />
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border p-8 sm:p-10" style={{ borderColor: "rgba(59, 35, 22, 0.12)", backgroundColor: "#FFFFFF" }}>
            <p className="text-[11px] font-normal uppercase tracking-[0.0909em]" style={{ color: MAROON, opacity: 0.5 }}>
              Clear Space &amp; Scale Limit
            </p>
            <p className="text-sm leading-[1.4]" style={{ color: BROWN }}>
              Minimum clear space of <strong>X</strong> (equal to 50% of the brand horse symbol&rsquo;s absolute
              height) must border all perimeter sides.
            </p>
            <p className="text-[13px] leading-[1.4]" style={{ color: MAROON }}>
              Minimum digital display size: 48px width.
            </p>
          </div>
        </div>
      </section>

      {/* 6 — Typography */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-[100px] lg:py-[100px]" style={{ backgroundColor: CREAM }}>
        <p className="text-xs font-semibold uppercase tracking-[0.1667em]" style={{ color: MAROON }}>
          Typography
        </p>
        <h2 className={`${cormorant.className} mt-4 text-4xl sm:text-5xl`} style={{ color: MAROON }}>
          Editorial Hierarchy
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-10 rounded-3xl p-8 sm:p-12" style={{ backgroundColor: SAND }}>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.125em]" style={{ color: MAROON }}>Primary Display Font</p>
              <p className={`${cormorant.className} text-3xl sm:text-[44px]`} style={{ color: MAROON }}>Cormorant Garamond</p>
            </div>
            <p className={`${cormorant.className} text-4xl leading-none sm:text-5xl lg:text-[80px]`} style={{ color: BROWN }}>
              Aa Bb Cc Dd Ee Ff Gg Hh
            </p>
            <p className="text-sm leading-[1.5]" style={{ color: BROWN, opacity: 0.8 }}>
              Used exclusively for prominent storytelling headlines, thematic entries (such as &lsquo;The
              Origin&rsquo;), and primary structural markers.
            </p>
          </div>
          <div className="flex flex-col gap-10 rounded-3xl border p-8 sm:p-12" style={{ borderColor: "rgba(59, 35, 22, 0.12)", backgroundColor: "#FFFFFF" }}>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.125em]" style={{ color: MAROON }}>Supporting Body Font</p>
              <p className="text-3xl font-medium sm:text-[44px]" style={{ color: BROWN }}>DM Sans</p>
            </div>
            <p className="text-4xl font-light leading-none sm:text-5xl lg:text-[60px]" style={{ color: BROWN }}>
              Aa Bb Cc Dd Ee Ff
            </p>
            <p className="text-sm leading-[1.5]" style={{ color: BROWN, opacity: 0.8 }}>
              Deployed across all standard metadata blocks, descriptions, technical details, and general body
              reading segments.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border p-8 sm:p-12" style={{ borderColor: "rgba(59, 35, 22, 0.12)" }}>
          {[
            { label: "H1 DISPLAY", node: <p className={`${cormorant.className} text-4xl sm:text-[64px]`} style={{ color: BROWN }}>The Seed &amp; Root</p> },
            { label: "H2 SUBTITLE", node: <p className={`${cormorant.className} text-2xl font-medium sm:text-[32px]`} style={{ color: MAROON }}>Handcrafted with ancient patience</p> },
            { label: "BODY TEXT", node: <p className="text-[15px] leading-[1.6]" style={{ color: BROWN }}>Our materials are harvested in alignment with natural seasons. Every striped cup undergoes a meticulous process of hand-glazing and kiln firing.</p> },
            { label: "MICRO LABEL", node: <p className="text-[11px] uppercase tracking-[0.0909em]" style={{ color: BROWN, opacity: 0.6 }}>Kasaba Homes Portfolio System © 2025</p> },
          ].map((row, i, arr) => (
            <div key={row.label} className={`flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:gap-8 ${i === 0 ? "pt-0" : ""} ${i === arr.length - 1 ? "pb-0" : ""} ${i !== arr.length - 1 ? "border-b" : ""}`} style={{ borderColor: "rgba(59, 35, 22, 0.12)" }}>
              <p className="w-[120px] flex-shrink-0 text-xs" style={{ color: MAROON }}>{row.label}</p>
              {row.node}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 rounded-3xl p-8 sm:p-12" style={{ backgroundColor: SAND }}>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.125em]" style={{ color: MAROON }}>Typography in practice</p>
            <p className={`${cormorant.className} text-2xl font-medium sm:text-[32px]`} style={{ color: MAROON }}>
              How the type system lives on real touchpoints
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-2xl border p-5" style={{ borderColor: "rgba(59, 35, 22, 0.12)", backgroundColor: CREAM }}>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: SAND, color: MAROON }}><TagIcon /></span>
                <p className="text-[11px] font-bold uppercase tracking-[0.0909em]" style={{ color: MAROON }}>Product label</p>
              </div>
              <p className={`${cormorant.className} text-[28px]`} style={{ color: BROWN }}>Hand-thrown Stoneware</p>
              <p className="text-[13px] leading-[1.5]" style={{ color: BROWN, opacity: 0.75 }}>A tactile vessel for morning rituals, finished in a matte glaze that softens with use.</p>
              <div className="flex items-center gap-2">
                <span className="rounded-full px-2.5 py-1.5 text-[11px] font-bold" style={{ backgroundColor: SAND, color: MAROON }}>Limited Batch</span>
                <span className="text-[11px] uppercase tracking-[0.0909em]" style={{ color: BROWN, opacity: 0.6 }}>No. 042</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border p-5" style={{ borderColor: "rgba(59, 35, 22, 0.12)", backgroundColor: CREAM }}>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: SAND, color: MAROON }}><MessageCircleIcon /></span>
                <p className="text-[11px] font-bold uppercase tracking-[0.0909em]" style={{ color: MAROON }}>Social caption</p>
              </div>
              <p className={`${cormorant.className} text-2xl`} style={{ color: BROWN }}>Sunday morning light</p>
              <p className="text-[13px] leading-[1.5]" style={{ color: BROWN, opacity: 0.75 }}>A quiet moment with clay, sand, and the warmth of a home that feels like yours.</p>
              <span className="w-fit rounded-full px-2.5 py-1.5 text-[11px] font-bold text-white" style={{ backgroundColor: SAGE }}>Shop the collection</span>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border p-5" style={{ borderColor: "rgba(59, 35, 22, 0.12)", backgroundColor: CREAM }}>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: SAND, color: MAROON }}><PackageIcon /></span>
                <p className="text-[11px] font-bold uppercase tracking-[0.0909em]" style={{ color: MAROON }}>Packaging detail</p>
              </div>
              <p className={`${cormorant.className} text-[22px]`} style={{ color: BROWN }}>Kasaba Homes</p>
              <p className="text-[13px] leading-[1.5]" style={{ color: BROWN, opacity: 0.75 }}>Handcrafted for homes with soul. Designed to age beautifully.</p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-[0.0909em]" style={{ color: BROWN, opacity: 0.6 }}>Origin: Anatolia</span>
                <span className="text-[11px] uppercase tracking-[0.0909em]" style={{ color: BROWN, opacity: 0.6 }}>Batch: 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Color Palette */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-[100px] lg:py-[140px]" style={{ backgroundColor: CREAM }}>
        <p className="text-xs font-semibold uppercase tracking-[0.1667em]" style={{ color: MAROON }}>
          The Palette
        </p>
        <h2 className={`${cormorant.className} mt-4 text-4xl sm:text-5xl`} style={{ color: MAROON }}>
          Earthy &amp; Anchored
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:overflow-hidden lg:rounded-3xl">
          {PALETTE.map((c) => (
            <div
              key={c.hex}
              className="flex min-h-[280px] flex-col justify-between rounded-2xl px-7 py-10 lg:h-[420px] lg:rounded-none"
              style={{ backgroundColor: c.hex, border: c.border ? "1px solid rgba(59, 35, 22, 0.06)" : undefined }}
            >
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: c.text, opacity: 0.4 }}>{c.number}</p>
                <p className={`${cormorant.className} text-[26px] font-medium`} style={{ color: c.text }}>{c.name}</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[13px] font-bold tracking-[0.0769em]" style={{ color: c.text, opacity: 0.9 }}>{c.hex}</p>
                <p className="text-xs leading-[1.5]" style={{ color: c.text, opacity: 0.55 }}>{c.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Palette in Context */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-[100px] lg:py-[140px]" style={{ backgroundColor: CREAM }}>
        <p className="text-xs font-semibold uppercase tracking-[0.1667em]" style={{ color: MAROON }}>
          Palette in context
        </p>
        <h2 className={`${cormorant.className} mt-4 text-3xl sm:text-4xl`} style={{ color: MAROON }}>
          Colors applied to real brand touchpoints
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PALETTE_CONTEXT.map((c) => (
            <div key={c.number} className="flex flex-col gap-3">
              <div className="relative h-[220px] overflow-hidden rounded-2xl">
                <Image src={`/images/kasaba-home/${c.img}`} alt={c.caption} fill className="object-cover" />
                <span
                  aria-hidden
                  className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ backgroundColor: c.hex, color: c.text, boxShadow: `0 0 0 2px ${c.ring}` }}
                >
                  {c.number}
                </span>
              </div>
              <p className="text-sm" style={{ color: BROWN }}>{c.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Presence */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-[100px] lg:py-[100px]" style={{ backgroundColor: CREAM }}>
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: MAROON }}>
            Social Presence
          </p>
          <h2 className={`${cormorant.className} text-4xl leading-[1.15] sm:text-5xl lg:text-[56px] lg:leading-[64px]`} style={{ color: MAROON }}>
            Earthy Feeds, Mindful Conversations.
          </h2>
          <p className="max-w-[700px] text-base leading-[1.6] sm:text-lg" style={{ color: BROWN, opacity: 0.8 }}>
            Our social strategy transforms transactional posts into editorial essays. High-contrast burgundy
            backgrounds, tactile ceramic imagery, and warm, unhurried typography invite our community to pause.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16">
          {SOCIAL_PILLARS.map((pillar) => (
            <div key={pillar.number} className="flex flex-col gap-6">
              <div className="flex flex-wrap items-baseline gap-3">
                <p className={`${cormorant.className} text-2xl sm:text-[28px]`} style={{ color: MAROON }}>
                  Pillar {pillar.number} —
                </p>
                <p className="text-sm font-semibold uppercase tracking-[0.1429em]" style={{ color: MAROON }}>
                  {pillar.title} {pillar.subtitle}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {pillar.posts.map((post, i) => (
                  <div
                    key={post.img}
                    className="relative flex aspect-square flex-col justify-between overflow-hidden rounded-lg p-8 shadow-[0_8px_16px_0_rgba(0,0,0,0.08)]"
                  >
                    <Image src={`/images/kasaba-home/${post.img}`} alt="" fill aria-hidden className="object-cover" />
                    <div aria-hidden className="absolute inset-0" style={{ backgroundColor: "rgba(91, 36, 39, 0.72)" }} />
                    <div className="relative z-10 flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.1818em]" style={{ color: SAND }}>
                        {pillar.title}
                      </p>
                      <p className="text-[11px]" style={{ color: SAND, opacity: 0.6 }}>{i + 1}/4</p>
                    </div>
                    <p className={`${cormorant.className} relative z-10 text-[28px] leading-[1.15]`} style={{ color: "#FAF8F5" }}>
                      {post.quote}
                    </p>
                    <div className="relative z-10 flex items-center justify-between">
                      <p className="text-xs" style={{ color: SAND }}>@kasabahomes</p>
                      <span className="flex h-4 w-4 items-center justify-center">
                        <Image src="/images/kasaba-home/icon-arrow-right.svg" alt="" width={16} height={16} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Stories */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-[100px] lg:py-[100px]" style={{ backgroundColor: MAROON }}>
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: SAND }}>
            Ephemeral Narrative
          </p>
          <h2 className={`${cormorant.className} text-4xl sm:text-5xl`} style={{ color: CREAM }}>
            Behind the Kiln: Daily Moments
          </h2>
          <p className="max-w-[700px] text-base leading-[1.5]" style={{ color: SAND, opacity: 0.8 }}>
            A cohesive system of 9:16 layout structures utilizing our brand typography, tactile image grids, and
            hand-drawn organic green stamps to communicate daily studio rhythms.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {STORIES.map((story) => (
            <div
              key={story.img}
              className="relative flex h-[462px] w-[260px] flex-col justify-between overflow-hidden rounded-xl border p-6"
              style={{ borderColor: "#FAF8F5" }}
            >
              <Image src={`/images/kasaba-home/${story.img}`} alt="" fill aria-hidden className="object-cover" />
              <div aria-hidden className="absolute inset-0" style={{ backgroundColor: "rgba(91, 36, 39, 0.6)" }} />
              <div className="relative z-10 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: SAND }}>
                  Kasaba Homes
                </p>
                <Image src="/images/kasaba-home/icon-ellipsis.svg" alt="" width={14} height={14} />
              </div>
              <span
                className="absolute left-1/2 top-[37%] -translate-x-1/2 rounded px-4 py-2 text-lg lowercase shadow-[0_2px_6px_0_rgba(0,0,0,0.25)]"
                style={{ backgroundColor: SAGE, color: "#FAF8F5" }}
              >
                {story.stamp}
              </span>
              <div className="relative z-10 flex flex-col gap-2">
                <p className={`${cormorant.className} text-[28px] leading-[1.15]`} style={{ color: "#FAF8F5" }}>
                  {story.headline}
                </p>
                <p className="text-xs" style={{ color: SAND, opacity: 0.8 }}>{story.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Strips */}
      <section className="flex flex-col gap-20 py-20 sm:py-24 lg:py-[100px]" style={{ backgroundColor: CREAM }}>
        <div className="flex flex-col gap-5 px-6 sm:px-10 lg:px-[100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: MAROON }}>
            Product Showcase
          </p>
          <h2 className={`${cormorant.className} text-4xl leading-[1.15] sm:text-5xl lg:text-[56px] lg:leading-[64px]`} style={{ color: MAROON }}>
            Playful copy meets raw torn paper.
          </h2>
          <p className="max-w-[700px] text-base leading-[1.6]" style={{ color: BROWN, opacity: 0.7 }}>
            Full-bleed editorial layouts celebrating the product line - mugs, vases, and vessels - each strip a
            visual composition in its own right.
          </p>
        </div>

        {/* Mugs strip */}
        <div className="relative aspect-[1400/640] w-full overflow-hidden" style={{ backgroundColor: BROWN }}>
          <div className="absolute rounded-lg" style={{ left: "2.86%", top: "6.25%", width: "31.43%", height: "87.5%" }}>
            <Image src="/images/kasaba-home/strip-mugs-left.png" alt="Hand-thrown mugs, close detail" fill className="rounded-lg object-cover" />
          </div>
          <div className="absolute overflow-hidden rounded shadow-[0_6px_14px_0_rgba(0,0,0,0.1)]" style={{ left: "32.46%", top: "9.38%", width: "34.66%", height: "27.6%" }}>
            <Image src="/images/kasaba-home/strip-torn-paper.png" alt="" aria-hidden fill className="object-cover" />
          </div>
          <div
            className="absolute flex flex-col items-center justify-center gap-2 rounded p-4 text-center sm:gap-3 sm:p-6 lg:gap-4 lg:p-12"
            style={{ left: "38.57%", top: "31.25%", width: "30%", height: "50%", backgroundColor: SAGE }}
          >
            <p className="text-base leading-tight sm:text-2xl lg:text-[48px] lg:leading-[44px]" style={{ color: "#FAF8F5" }}>
              Mugs that Speak in Lines and Sips.
            </p>
            <p className="text-[10px] sm:text-xs lg:text-sm" style={{ color: SAND, opacity: 0.8 }}>
              Sip Between the Lines. Feel at Home with Us.
            </p>
          </div>
          <div className="absolute rounded-lg" style={{ left: "71.43%", top: "18.75%", width: "25.71%", height: "62.5%" }}>
            <Image src="/images/kasaba-home/strip-mugs-right.png" alt="Kasaba mugs styled on a shelf" fill className="rounded-lg object-cover" />
          </div>
          <div className="absolute" style={{ left: "28.22%", top: "75%", width: "10.17%", height: "22.24%" }}>
            <Image src="/images/kasaba-home/icon-organic-stamp.svg" alt="" aria-hidden fill className="object-contain" />
          </div>
        </div>

        {/* Vases strip */}
        <div className="relative aspect-[1400/640] w-full overflow-hidden" style={{ backgroundColor: MAROON }}>
          <div className="absolute rounded-lg" style={{ left: "4.29%", top: "18.75%", width: "27.14%", height: "62.5%" }}>
            <Image src="/images/kasaba-home/strip-vases-left.png" alt="Striped vases, styled" fill className="rounded-lg object-cover" />
          </div>
          <div
            className="absolute flex flex-col items-center justify-center gap-2 rounded p-4 text-center sm:gap-3 sm:p-6 lg:gap-4 lg:p-12"
            style={{ left: "34.29%", top: "22.6%", width: "32.21%", height: "52.37%", backgroundColor: SAGE }}
          >
            <p className="text-base leading-tight sm:text-2xl lg:text-[44px] lg:leading-[42px]" style={{ color: "#FAF8F5" }}>
              Add some Stripes to Your Space!
            </p>
            <p className="text-[10px] sm:text-xs lg:text-sm" style={{ color: SAND, opacity: 0.8 }}>
              Who knew a vase could steal the spotlight?
            </p>
          </div>
          <div className="absolute overflow-hidden rounded shadow-[0_6px_14px_0_rgba(0,0,0,0.1)]" style={{ left: "62.86%", top: "10.6%", width: "33.57%", height: "29.95%" }}>
            <Image src="/images/kasaba-home/strip-torn-paper.png" alt="" aria-hidden fill className="object-cover" />
          </div>
          <div className="absolute rounded-lg" style={{ left: "68.57%", top: "6.25%", width: "28.57%", height: "87.5%" }}>
            <Image src="/images/kasaba-home/strip-vases-right.png" alt="Kasaba vase, full length" fill className="rounded-lg object-cover" />
          </div>
          <div className="absolute" style={{ left: "61.43%", top: "63.9%", width: "10.5%", height: "22.96%" }}>
            <Image src="/images/kasaba-home/icon-organic-stamp.svg" alt="" aria-hidden fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Brand Guidelines */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-[100px] lg:py-[100px]" style={{ backgroundColor: CREAM }}>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="flex max-w-[640px] flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: MAROON }}>
              The Blueprint
            </p>
            <h2 className={`${cormorant.className} text-4xl leading-[1.15] sm:text-5xl lg:text-[56px] lg:leading-[64px]`} style={{ color: MAROON }}>
              Brand Guidelines Spread
            </h2>
            <p className="text-base leading-[1.5]" style={{ color: BROWN, opacity: 0.8 }}>
              An editorial layout guidelines document crafted to maintain visual and physical alignment across our
              packaging, partner studios, and visual assets.
            </p>
          </div>
          <span
            className="flex-shrink-0 whitespace-nowrap rounded-lg px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.1818em]"
            style={{ backgroundColor: MAROON, color: "#FAF8F5" }}
          >
            Guidelines v1.0
          </span>
        </div>

        <div className="mt-16 flex gap-6 overflow-x-auto rounded-2xl p-6 sm:p-12" style={{ backgroundColor: SAND }}>
          {/* Page 01 — Cover */}
          <div className="flex h-[320px] w-[240px] flex-shrink-0 flex-col gap-3 rounded p-6 shadow-[2px_4px_12px_0_rgba(59,35,22,0.1)]" style={{ backgroundColor: "#FAF8F5" }}>
            <div className="flex items-center justify-between">
              <p className="text-[8px] font-semibold uppercase tracking-[0.125em]" style={{ color: MAROON }}>Kasaba Homes</p>
              <p className="text-[8px]" style={{ color: BROWN, opacity: 0.5 }}>01</p>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3">
              <p className={`${cormorant.className} text-xl`} style={{ color: MAROON }}>kasaba Homes</p>
              <p className="text-[10px]" style={{ color: BROWN, opacity: 0.6 }}>
                Brand Guidelines, Identity Blueprint and Design System.
              </p>
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: MAROON }}>
                  <Image src="/images/kasaba-home/kasaba-icon-mark.svg" alt="" width={28} height={15} />
                </span>
                <p className={`${cormorant.className} text-sm`} style={{ color: MAROON }}>kasaba Homes</p>
              </div>
            </div>
            <div className="h-px w-full" style={{ backgroundColor: "rgba(59, 35, 22, 0.12)" }} />
          </div>

          {/* Page 02 — Logomark */}
          <div className="flex h-[320px] w-[240px] flex-shrink-0 flex-col gap-3 rounded p-6 shadow-[2px_4px_12px_0_rgba(59,35,22,0.1)]" style={{ backgroundColor: "#FAF8F5" }}>
            <div className="flex items-center justify-between">
              <p className="text-[8px] font-semibold uppercase tracking-[0.125em]" style={{ color: MAROON }}>Kasaba Homes</p>
              <p className="text-[8px]" style={{ color: BROWN, opacity: 0.5 }}>02</p>
            </div>
            <div className="flex flex-1 flex-col items-center gap-3 text-center">
              <p className={`${cormorant.className} text-xl`} style={{ color: MAROON }}>The Logomark</p>
              <Image src="/images/kasaba-home/kasaba-icon-mark.svg" alt="" width={40} height={21} />
              <p className="text-[9px]" style={{ color: BROWN, opacity: 0.6 }}>
                The primary horse emblem represents steady craft. Clear space limits apply.
              </p>
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex h-[80px] w-[80px] items-center justify-center rounded-lg border" style={{ borderColor: "rgba(59, 35, 22, 0.12)" }}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: MAROON }}>
                    <Image src="/images/kasaba-home/kasaba-icon-mark.svg" alt="" width={20} height={11} />
                  </span>
                </div>
                <p className="text-[9px]" style={{ color: BROWN, opacity: 0.6 }}>Minimum clear space: x</p>
              </div>
            </div>
            <div className="h-px w-full" style={{ backgroundColor: "rgba(59, 35, 22, 0.12)" }} />
          </div>

          {/* Page 03 — Color Code */}
          <div className="flex h-[320px] w-[240px] flex-shrink-0 flex-col gap-3 rounded p-6 shadow-[2px_4px_12px_0_rgba(59,35,22,0.1)]" style={{ backgroundColor: "#FAF8F5" }}>
            <div className="flex items-center justify-between">
              <p className="text-[8px] font-semibold uppercase tracking-[0.125em]" style={{ color: MAROON }}>Kasaba Homes</p>
              <p className="text-[8px]" style={{ color: BROWN, opacity: 0.5 }}>03</p>
            </div>
            <p className={`${cormorant.className} text-xl`} style={{ color: MAROON }}>Color Code</p>
            <div className="flex flex-col gap-2">
              {[{ hex: MAROON, label: "#5B2427 Burgundy" }, { hex: SAND, label: "#D4C5A9 Sand Clay" }, { hex: SAGE, label: "#6B7B4C Olive Sage" }].map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <span className="h-5 w-5 flex-shrink-0 rounded-sm" style={{ backgroundColor: c.hex }} />
                  <p className="text-[9px]" style={{ color: BROWN }}>{c.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <p className="text-[9px] font-medium uppercase tracking-[0.1111em]" style={{ color: BROWN, opacity: 0.6 }}>Usage</p>
              {[{ hex: MAROON, label: "Primary / Headings" }, { hex: SAND, label: "Secondary / Background" }, { hex: SAGE, label: "Accent / Stamps" }].map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <span className="h-3 w-3 flex-shrink-0 rounded-sm" style={{ backgroundColor: c.hex }} />
                  <p className="text-[9px]" style={{ color: BROWN, opacity: 0.6 }}>{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Page 04 — Visual Aura */}
          <div className="flex h-[320px] w-[240px] flex-shrink-0 flex-col gap-3 rounded p-6 shadow-[2px_4px_12px_0_rgba(59,35,22,0.1)]" style={{ backgroundColor: "#FAF8F5" }}>
            <div className="flex items-center justify-between">
              <p className="text-[8px] font-semibold uppercase tracking-[0.125em]" style={{ color: MAROON }}>Kasaba Homes</p>
              <p className="text-[8px]" style={{ color: BROWN, opacity: 0.5 }}>04</p>
            </div>
            <p className={`${cormorant.className} text-xl`} style={{ color: MAROON }}>Visual Aura</p>
            <p className="text-[9px]" style={{ color: BROWN, opacity: 0.6 }}>
              Warm, soft atmospheric lighting. Raw clay and tactile, natural fiber backgrounds.
            </p>
            <div className="flex gap-2">
              <div className="relative h-14 w-14 overflow-hidden rounded">
                <Image src="/images/kasaba-home/moodboard-lifestyle.png" alt="" fill className="object-cover" />
              </div>
              <div className="relative h-14 w-14 overflow-hidden rounded">
                <Image src="/images/kasaba-home/strip-torn-paper.png" alt="" fill className="object-cover" />
              </div>
              <div className="relative h-14 w-14 overflow-hidden rounded">
                <Image src="/images/kasaba-home/strip-mugs-left.png" alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You */}
      <section className="flex flex-col items-center gap-10 px-6 py-20 text-center sm:px-10 sm:py-24 lg:px-[100px] lg:pb-20 lg:pt-[100px]" style={{ backgroundColor: MAROON }}>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3636em]" style={{ color: SAND, opacity: 0.6 }}>
              Kasaba Homes · 2025
            </p>
            <h2 className={`${cormorant.className} text-5xl leading-[1.05] sm:text-6xl lg:text-[88px] lg:leading-[90px]`} style={{ color: CREAM }}>
              Thank you for exploring.
            </h2>
          </div>
          <div className="flex items-center gap-6 sm:gap-10">
            <span className="h-px w-16 sm:w-[120px]" style={{ backgroundColor: "rgba(212, 197, 169, 0.25)" }} />
            <span className={`${cormorant.className} text-lg tracking-[0.0556em]`} style={{ color: SAND, opacity: 0.7 }}>✦</span>
            <span className="h-px w-16 sm:w-[120px]" style={{ backgroundColor: "rgba(212, 197, 169, 0.25)" }} />
          </div>
          <p className="text-[13px] uppercase tracking-[0.3077em]" style={{ color: SAND, opacity: 0.6 }}>
            Made slowly · Cherished truly
          </p>
        </div>

        <div className="h-px w-full" style={{ backgroundColor: "rgba(250, 248, 245, 0.03)" }} />

        <div className="flex w-full flex-col items-center gap-8 py-5 sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: SAND, opacity: 0.5 }}>
              Brand Identity &amp; Creative
            </p>
            <p className={`${cormorant.className} text-xl`} style={{ color: CREAM, opacity: 0.8 }}>Rishav Singh</p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: SAND, opacity: 0.5 }}>
              Portfolio System
            </p>
            <p className={`${cormorant.className} text-xl`} style={{ color: CREAM, opacity: 0.5 }}>© 2025 All Rights Reserved</p>
          </div>
        </div>

        <Image src="/images/kasaba-home/kasaba-icon-mark.svg" alt="Kasaba Homes" width={250} height={133} className="h-auto w-[150px] sm:w-[200px]" />
      </section>

      {/* More Branding Work */}
      <section className="px-4 py-20 sm:px-6 lg:py-24" style={{ backgroundColor: BROWN }}>
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- More Branding Work</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.5px] text-white sm:text-4xl">
          Explore the rest of the branding collection
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Link
            href="/work/introducing-india"
            className="group -ml-px -mt-px block border border-white/10 p-6 transition-colors hover:border-white/30 hover:bg-white/[0.03]"
          >
            <p className="text-xs font-medium text-white/40">01</p>
            <h3 className="mt-4 text-xl font-semibold text-white">Introducing India</h3>
            <p className="mt-2 text-sm text-white/50">Cultural brand identity design</p>
            <p className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-white transition-transform group-hover:translate-x-1">
              Read Case Study <span aria-hidden>→</span>
            </p>
          </Link>
          <Link
            href="/work/debtworks"
            className="group -ml-px -mt-px block border border-white/10 p-6 transition-colors hover:border-white/30 hover:bg-white/[0.03]"
          >
            <p className="text-xs font-medium text-white/40">02</p>
            <h3 className="mt-4 text-xl font-semibold text-white">DebtWorks</h3>
            <p className="mt-2 text-sm text-white/50">Fintech brand identity and visual system</p>
            <p className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-white transition-transform group-hover:translate-x-1">
              Read Case Study <span aria-hidden>→</span>
            </p>
          </Link>
        </div>
      </section>

      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
