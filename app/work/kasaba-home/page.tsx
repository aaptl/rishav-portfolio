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
const HERO_WASH = "#3A0F12"; // deep maroon wash used only behind the hero photo

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

const APPLICATIONS = [
  { src: "/images/kasaba-home/pottery-1.png", w: 853, h: 1280, title: "Hand-thrown Stoneware", body: "A tactile vessel for morning rituals, finished in a matte glaze that softens with use." },
  { src: "/images/kasaba-home/mugs.png", w: 1024, h: 1024, title: "Sunday morning light", body: "A quiet moment with clay, sand, and the warmth of a home that feels like yours." },
  { src: "/images/kasaba-home/pottery-2.png", w: 2731, h: 4096, title: "Kasaba Homes", body: "Handcrafted for homes with soul. Designed to age beautifully." },
  { src: "/images/kasaba-home/vases-left.png", w: 1024, h: 1024, title: "Add some stripes", body: "Who knew a vase could steal the spotlight?" },
  { src: "/images/kasaba-home/vases-right.png", w: 864, h: 1184, title: "Mugs that speak in lines and sips", body: "Sip between the lines. Feel at home with us." },
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

      {/* Applications */}
      <section className="px-4 pb-24 sm:px-6" style={{ backgroundColor: CREAM }}>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[1.5px]" style={{ color: MAROON }}>
            Product Showcase
          </p>
          <h2 className={`${cormorant.className} mt-4 text-4xl sm:text-5xl`} style={{ color: BROWN }}>
            Playful copy meets tactile craft.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {APPLICATIONS.map((app) => (
              <div key={app.src} className="overflow-hidden rounded-2xl border bg-white" style={{ borderColor: SAND }}>
                <Image src={app.src} alt={app.title} width={app.w} height={app.h} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <p className={`${cormorant.className} text-xl`} style={{ color: MAROON }}>{app.title}</p>
                  <p className="mt-2 text-[13px] leading-5 opacity-70" style={{ color: BROWN }}>{app.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-4 py-24 text-center sm:px-6" style={{ backgroundColor: MAROON }}>
        <p className="text-[11px] font-medium uppercase tracking-[3px] text-white/60">Kasaba Homes · 2025</p>
        <p className={`${cormorant.className} mx-auto mt-6 max-w-[640px] text-4xl italic leading-[1.4] text-white sm:text-5xl`}>
          Made slowly · Cherished truly
        </p>
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
