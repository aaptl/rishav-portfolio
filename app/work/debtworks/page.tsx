import type { Metadata } from "next";
import { Outfit, Spline_Sans_Mono, Raleway, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });
const splineMono = Spline_Sans_Mono({ subsets: ["latin"], weight: ["400", "500", "600"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "DebtWorks — Case Study",
  description:
    "Brand identity and visual system for a unified corporate debt management platform. Precision meets clarity.",
  alternates: { canonical: "/work/debtworks" },
  openGraph: {
    title: "DebtWorks — Case Study — Rishav Singh",
    description: "Fintech brand identity and visual system for a unified corporate debt platform.",
    url: "/work/debtworks",
  },
};

// DebtWorks brand palette, pulled directly from the Figma "Chromatic System" section.
const GREEN = "#457D5B";
const BLACK = "#111111";
const MINT = "#F8FAF8";
const MINT_LINE = "#E8EBE9";
const MINT_SOFT = "#F0F5F2";
const MINT_CARD = "#F5F7F5";
const GRAY = "#666666";
const GRAY_2 = "#555555";
const GRAY_MUTED = "#888888";

const CULTURE_CODE = [
  { name: "Empathy", body: "Rooted in deep curiosity, understanding, and appreciation of our clients' unique daily financial struggles." },
  { name: "Courtesy", body: "Built on kindness, generous terms of service, and deep thoughtfulness in all financial mediations." },
  { name: "Playfulness", body: "Ensuring the platform is inviting, highly receptive, and creative with structuring capital rules." },
  { name: "Solidarity", body: "We stand firmly beside businesses, ensuring our platforms mitigate instead of compounding systemic friction." },
  { name: "Thriving", body: "Unlocking business growth and operational capacity through modern debt structures." },
  { name: "Curiosity", body: "We ask the right questions to uncover hidden opportunities in your financial model and unlock better outcomes." },
];

const PRIMARY_COLORS = [
  { name: "Primary Green", hex: GREEN },
  { name: "Rich Black", hex: "#000000" },
  { name: "Absolute White", hex: "#FFFFFF" },
];

const SUPPORTING_COLORS = [
  { name: "Active", hex: "#02B96E" },
  { name: "Soft", hex: "#65967E" },
  { name: "Mid Ground", hex: "#2D603E" },
  { name: "Deepest Forest", hex: "#18522B" },
  { name: "Muted Edge", hex: "#CECECE" },
  { name: "Muted Text", hex: "#7F7E7E" },
];

const APPLICATIONS = [
  { src: "/images/debtworks/signage.png", title: "Environmental Branding" },
  { src: "/images/debtworks/mobile.png", title: "Digital Interface" },
  { src: "/images/debtworks/office.png", title: "Natural Daylight Photography" },
  { src: "/images/debtworks/hands.png", title: "Collaborative Spaces" },
];

const SHAPE_GRADIENT = "linear-gradient(135deg, rgba(69, 125, 91, 1) 0%, rgba(17, 17, 17, 1) 100%)";
const SHAPE_GRADIENT_FLIPPED = "linear-gradient(315deg, rgba(69, 125, 91, 1) 0%, rgba(17, 17, 17, 1) 100%)";

const SHAPES_ROW_1: { label: string; node: React.ReactNode }[] = [
  { label: "180° Half Arc", node: <div className="h-[90px] w-[45px] rounded-l-full" style={{ background: SHAPE_GRADIENT }} /> },
  {
    label: "Growth Staircase",
    node: (
      <div className="flex h-[90px] items-end gap-1">
        {[30, 50, 70, 90].map((h) => (
          <span key={h} className="w-3.5 rounded-t-sm" style={{ height: h, background: SHAPE_GRADIENT }} />
        ))}
      </div>
    ),
  },
  { label: "90° Segment", node: <div className="h-[90px] w-[90px] rounded-tl-full" style={{ background: SHAPE_GRADIENT }} /> },
  { label: "Solid Core Sphere", node: <div className="h-[90px] w-[90px] rounded-full" style={{ background: SHAPE_GRADIENT }} /> },
  {
    label: "Torus Ring",
    node: (
      <div className="relative h-[90px] w-[90px] rounded-full" style={{ background: SHAPE_GRADIENT }}>
        <div className="absolute inset-[18px] rounded-full bg-white" />
      </div>
    ),
  },
];

const SHAPES_ROW_2: { label: string; node: React.ReactNode }[] = [
  { label: "Inverted Arc", node: <div className="h-[90px] w-[45px] rounded-r-full" style={{ background: SHAPE_GRADIENT_FLIPPED }} /> },
  {
    label: "Flipped Growth",
    node: (
      <div className="flex h-[90px] items-end gap-1">
        {[90, 70, 50, 30].map((h) => (
          <span key={h} className="w-3.5 rounded-t-sm" style={{ height: h, background: SHAPE_GRADIENT_FLIPPED }} />
        ))}
      </div>
    ),
  },
  { label: "Opposite Segment", node: <div className="h-[90px] w-[90px] rounded-br-full" style={{ background: SHAPE_GRADIENT_FLIPPED }} /> },
  { label: "Rotated Sphere", node: <div className="h-[90px] w-[90px] rounded-full" style={{ background: SHAPE_GRADIENT_FLIPPED }} /> },
  {
    label: "Offset Torus",
    node: (
      <div className="relative h-[100px] w-[100px] rounded-full" style={{ background: SHAPE_GRADIENT_FLIPPED }}>
        <div className="absolute inset-[16px] rounded-full bg-white" />
      </div>
    ),
  },
];

const VOICE_ATTRIBUTES = [
  { name: "Confident", body: "Never cocky. We speak with quiet competence, backed by verified financial mechanics." },
  { name: "Witty", body: "But never silly. Light-hearted and human, yet constantly mindful of business gravity." },
  { name: "Conversational", body: "Concise, human-first, and highly approachable. Jargon is stripped down instantly." },
  { name: "Helpful", body: "Always clear, purposeful, and collaborative. Focused entirely on resolving real capital friction." },
];

const TRAIT_PILLS = ["Creative", "Professional", "Thoughtful", "Respectful", "Purposeful", "Curious", "Smart", "Humble", "Hardworking", "Collaborative"];

const PHOTOGRAPHY = [
  { src: "/images/debtworks/photo-office-space.png", alt: "DebtWorks — natural daylight office space", radius: "40px" },
  { src: "/images/debtworks/photo-whiteboard.png", alt: "DebtWorks — team at the whiteboard", radius: "100px" },
  { src: "/images/debtworks/photo-meeting.png", alt: "DebtWorks — collaborative meeting", radius: "40px" },
  { src: "/images/debtworks/photo-hands.png", alt: "DebtWorks — collaborative hands", radius: "100px" },
];

function Icon({ kind }: { kind: string }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "chart-bar-increasing":
      return <svg {...common}><path d="M3 21h18M7 21V10M12 21V6M17 21v-8" /></svg>;
    case "blocks":
      return <svg {...common}><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></svg>;
    case "vault":
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></svg>;
    case "circle-x":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m9 9 6 6M15 9l-6 6" /></svg>;
    case "arrow-up-right":
      return <svg {...common}><path d="M7 17 17 7M8 7h9v9" /></svg>;
    case "chart-network":
      return <svg {...common}><circle cx="12" cy="5" r="2.2" /><circle cx="5" cy="19" r="2.2" /><circle cx="19" cy="19" r="2.2" /><path d="m10.6 6.6-4 10.8M13.4 6.6l4 10.8M7.5 19h9" /></svg>;
    case "calculator":
      return <svg {...common}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" /></svg>;
    case "package":
      return <svg {...common}><path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5M12 22V12" /></svg>;
    case "box":
      return <svg {...common}><path d="M21 8.5V16a1 1 0 0 1-.5.87l-8 4.62a1 1 0 0 1-1 0l-8-4.62A1 1 0 0 1 3 16V8.5M21 8.5 12 3l-9 5.5M21 8.5l-9 5.5-9-5.5" /></svg>;
    case "database":
      return <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" /></svg>;
    case "banknote":
      return <svg {...common}><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="3" /><path d="M6 10v.01M18 14v.01" /></svg>;
    case "chart-column-stacked":
      return <svg {...common}><path d="M3 3v18h18" /><rect x="7" y="13" width="3" height="5" /><rect x="7" y="9" width="3" height="3" /><rect x="13" y="15" width="3" height="3" /><rect x="13" y="8" width="3" height="6" /></svg>;
    case "scale-3d":
      return <svg {...common}><path d="M12 3v18M6 8l-3 6a3 3 0 0 0 6 0zM21 8l-3 6a3 3 0 0 0 6 0zM3 8h6M15 8h6" /></svg>;
    case "mouse-pointer":
      return <svg {...common}><path d="M4 4 20 11l-7 1-3 7Z" /></svg>;
    case "credit-card":
      return <svg {...common}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="9" /></svg>;
  }
}

const ICON_GRID = [
  { kind: "chart-bar-increasing", label: "Growth Chart" },
  { kind: "blocks", label: "Building Blocks" },
  { kind: "vault", label: "Data Vault" },
  { kind: "circle-x", label: "Currency Shield" },
  { kind: "arrow-up-right", label: "Trend Arrow" },
  { kind: "chart-network", label: "Network Cube" },
  { kind: "calculator", label: "Calculator Grid" },
  { kind: "package", label: "Package Box" },
  { kind: "chart-network", label: "Core Structure" },
  { kind: "box", label: "Foundation Slab" },
  { kind: "database", label: "Storage Unit" },
  { kind: "banknote", label: "Cash Stack" },
  { kind: "chart-column-stacked", label: "Bar Analytics" },
  { kind: "scale-3d", label: "Balance Scale" },
  { kind: "mouse-pointer", label: "Send Arrow" },
  { kind: "credit-card", label: "ATM Terminal" },
];

export default function DebtWorksPage() {
  return (
    <main className={`${outfit.className} flex-1 bg-white`}>
      {/* 1 — Hero Cover */}
      <section
        className="relative flex min-h-[520px] flex-col overflow-hidden sm:min-h-[640px] lg:min-h-[890px]"
        style={{ background: "linear-gradient(180deg, rgba(66, 118, 80, 1) 0%, rgba(6, 64, 43, 1) 50%, rgba(13, 26, 22, 1) 97%)" }}
      >
        <Nav active="Work" />
        <div className="flex flex-1 items-center justify-center px-8 py-16">
          <Image
            src="/images/debtworks/hero-wordmark.svg"
            alt="DebtWorks"
            width={834}
            height={200}
            className="h-auto w-[260px] sm:w-[420px] lg:w-[600px]"
            priority
          />
        </div>
        <div className="flex items-end justify-between px-6 pb-10 sm:px-10 sm:pb-14 lg:px-[72px] lg:pb-[110px]">
          <p className="text-2xl font-light text-white sm:text-3xl lg:text-5xl">Brand Identity</p>
          <Image src="/images/debtworks/hero-w-icon.svg" alt="" aria-hidden width={128} height={100} className="h-auto w-14 sm:w-20 lg:w-[100px]" />
        </div>
      </section>

      {/* 2 — Project Overview */}
      <section className="border-y px-4 py-20 sm:px-6 sm:py-24 lg:px-[100px] lg:py-[140px]" style={{ backgroundColor: MINT, borderColor: MINT_LINE }}>
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-8 lg:flex-1">
            <p className={`${splineMono.className} text-[14px] uppercase tracking-[0.25em]`} style={{ color: GREEN }}>
              01 / Overview
            </p>
            <h1 className="text-4xl font-bold leading-[1.15] text-[#111111] sm:text-5xl">The One-Stop Platform</h1>
            <p className="max-w-[640px] text-lg leading-[1.7] sm:text-xl" style={{ color: GRAY }}>
              A complete brand identity system designed from the ground up for DebtWorks - a modern fintech pioneer
              offering custom, one-stop debt solutions for businesses. The system replaces old, dense financial
              tropes with clean premium minimalism, communicating trust, absolute transparency, and frictionless
              forward momentum.
            </p>
          </div>
          <div className="flex flex-col gap-6 border-t pt-6 lg:w-[320px] lg:flex-shrink-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0" style={{ borderColor: MINT_LINE }}>
            {[
              { label: "Role", value: "Brand Identity, Visual System" },
              { label: "Client", value: "DebtWorks International" },
              { label: "Year", value: "2025" },
            ].map((item) => (
              <div key={item.label}>
                <p className={`${splineMono.className} text-[11px] font-semibold uppercase tracking-[0.15em]`} style={{ color: GREEN }}>
                  {item.label}
                </p>
                <p className="mt-1.5 text-base font-semibold text-[#111111]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Strategic Shift / Culture Code */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-[100px] lg:py-[120px]">
        <p className={`${splineMono.className} text-[14px] uppercase tracking-[0.25em]`} style={{ color: GREEN }}>
          02 / Strategic Shift
        </p>
        <h2 className="mt-4 max-w-[720px] text-4xl font-bold leading-[1.15] text-[#111111] sm:text-5xl">
          Consolidating Fragmented FinTech Landscapes
        </h2>
        <p className={`${roboto.className} mt-6 max-w-[640px] text-base leading-[27px]`} style={{ color: GRAY }}>
          Various debt providers target specific industries with single products. Consequently, growing companies
          struggle to identify which solution fits their dynamic models, resulting in critical capital loss and
          friction.
        </p>

        <p className={`${splineMono.className} mt-16 text-[11px] uppercase tracking-[0.2em]`} style={{ color: GRAY_MUTED }}>
          03 / Culture Code — Six strategic values
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CULTURE_CODE.map((v) => (
            <div key={v.name} className="rounded-2xl border p-6" style={{ backgroundColor: MINT, borderColor: MINT_LINE }}>
              <h4 className="text-lg font-bold text-[#111111]">{v.name}</h4>
              <p className={`${roboto.className} mt-3 text-sm leading-6`} style={{ color: GRAY }}>{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-xl p-8 sm:flex-row sm:items-center sm:justify-between" style={{ backgroundColor: BLACK }}>
          <p className="text-xl font-semibold text-white">Strategic Outcome</p>
          <p className={`${roboto.className} max-w-[420px] text-base`} style={{ color: MINT_SOFT }}>
            A larger scope for growth without diluting your capital and equity.
          </p>
        </div>
      </section>

      {/* 4 — Core Mark / Hero Identity */}
      <section className="border-y px-4 py-20 sm:px-6 sm:py-24 lg:px-[96px] lg:py-[96px]" style={{ backgroundColor: MINT, borderColor: MINT_LINE }}>
        <p className={`${splineMono.className} text-[14px] uppercase tracking-[0.25em]`} style={{ color: GREEN }}>
          04 / Core Mark
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-[1.15] text-[#111111] sm:text-5xl">The Hero Identity</h2>
        <p className={`${roboto.className} mt-6 max-w-[640px] text-base leading-[27px]`} style={{ color: GRAY }}>
          Designed to stand confidently on high-contrast white surfaces. The green squiggle W flows like growth
          while retaining strict geometry.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-6 rounded-2xl border bg-white p-10 sm:p-16" style={{ borderColor: MINT_LINE }}>
            <Image src="/images/debtworks/wordmark-showcase.png" alt="DebtWorks primary wordmark" width={420} height={420} className="h-auto w-full max-w-[280px]" />
            <p className={`${splineMono.className} text-center text-xs uppercase tracking-[0.15em]`} style={{ color: GRAY }}>
              Primary Wordmark on White (Hero)
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-6 rounded-2xl border bg-white p-10" style={{ borderColor: MINT_LINE }}>
              <Image src="/images/debtworks/icon-mark.png" alt="DebtWorks standalone W icon mark" width={220} height={220} className="h-[110px] w-[110px]" />
              <p className={`${splineMono.className} text-xs uppercase tracking-[0.15em]`} style={{ color: GRAY }}>
                Standalone W Icon Mark
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: MINT_SOFT, border: `1px solid ${GREEN}` }}>
              <p className="text-xl font-bold" style={{ color: GREEN }}>W Icon Mark</p>
              <p className={`${roboto.className} mt-2 text-sm leading-5`} style={{ color: GREEN }}>
                A flowing double-curve shape that represents the DebtWorks brand mark.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-6 rounded-2xl p-10 sm:p-16" style={{ backgroundColor: MINT_CARD }}>
          <p className="text-5xl font-medium tracking-[0.1em] sm:text-6xl lg:text-7xl">
            <span style={{ color: "#262626" }}>DEBT</span>
            <span style={{ color: GREEN }}>W</span>
            <span style={{ color: "#262626" }}>ORKS</span>
            <span className="align-top text-lg font-light" style={{ color: "#262626" }}>™</span>
          </p>
          <p className={`${outfit.className} text-[13px] font-light uppercase tracking-[0.15em]`} style={{ color: GRAY_MUTED }}>
            Primary Wordmark
          </p>
        </div>
      </section>

      {/* 5 — Chromatic System / Color Strategy */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-[100px] lg:py-[140px]">
        <p className={`${splineMono.className} text-[14px] uppercase tracking-[0.25em]`} style={{ color: GREEN }}>
          05 / Chromatic System
        </p>
        <h2 className="mt-4 text-4xl font-bold text-[#111111] sm:text-5xl">Color Strategy</h2>
        <p className={`${roboto.className} mt-4 max-w-[600px] text-base leading-[27px]`} style={{ color: GRAY }}>
          A precise fintech palette. The W icon is advised to always lock natively into the primary sage green.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {PRIMARY_COLORS.map((c) => (
            <div key={c.hex} className="overflow-hidden rounded-2xl border" style={{ borderColor: MINT_LINE }}>
              <span aria-hidden className="block h-24 w-full border-b" style={{ backgroundColor: c.hex, borderColor: MINT_LINE }} />
              <div className="p-4">
                <p className="text-sm font-bold text-[#111111]">{c.name}</p>
                <p className={`${splineMono.className} mt-1 text-xs`} style={{ color: GRAY_MUTED }}>{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={`${splineMono.className} mt-10 text-[11px] uppercase tracking-[0.2em]`} style={{ color: GRAY_MUTED }}>
          Supporting Chromatics
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {SUPPORTING_COLORS.map((c) => (
            <div key={c.hex} className="overflow-hidden rounded-xl border" style={{ borderColor: MINT_LINE }}>
              <span aria-hidden className="block h-14 w-full" style={{ backgroundColor: c.hex }} />
              <div className="p-3">
                <p className="text-xs font-medium text-[#111111]">{c.name}</p>
                <p className={`${splineMono.className} mt-0.5 text-[11px]`} style={{ color: GRAY_MUTED }}>{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6 — Verbal Identity / Typography */}
      <section className="border-t px-4 py-20 sm:px-6 sm:py-24 lg:px-[100px] lg:py-[80px]" style={{ borderColor: MINT_LINE }}>
        <p className={`${splineMono.className} text-[14px] uppercase tracking-[0.25em]`} style={{ color: GREEN }}>
          05 / Verbal Identity
        </p>
        <h2 className="mt-4 text-4xl font-bold text-[#111111] sm:text-5xl">The Typographic Landscape</h2>
        <p className={`${roboto.className} mt-4 max-w-[680px] text-base leading-[27px]`} style={{ color: GRAY_2 }}>
          A beautifully balanced sans-serif system selected to establish premium clarity, accessibility, and
          architectural structure across print, software interfaces, and modern marketing collaterals.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border p-8" style={{ borderColor: MINT_LINE }}>
              <p className={`${splineMono.className} text-[11px] uppercase tracking-[0.15em]`} style={{ color: GRAY_MUTED }}>
                Primary Display Font
              </p>
              <p className={`${raleway.className} mt-4 text-5xl font-bold text-[#111111]`}>Raleway</p>
              <p className={`${roboto.className} mt-5 text-[13px] leading-5`} style={{ color: GRAY }}>
                Used for main section headers, hero callouts, and key statements. Bold, premium, structural.
              </p>
            </div>
            <div className="rounded-2xl border p-8" style={{ borderColor: MINT_LINE }}>
              <p className={`${splineMono.className} text-[11px] uppercase tracking-[0.15em]`} style={{ color: GRAY_MUTED }}>
                Supporting Body Font
              </p>
              <p className={`${roboto.className} mt-4 text-5xl font-light text-[#111111]`}>Roboto</p>
              <p className={`${roboto.className} mt-5 text-[13px] leading-5`} style={{ color: GRAY }}>
                Designed for body text, fine labels, and user interfaces. Optimizes legibility at smaller scales.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border p-8" style={{ backgroundColor: MINT, borderColor: MINT_LINE }}>
              <p className={`${splineMono.className} text-[11px] uppercase tracking-[0.15em]`} style={{ color: GREEN }}>Type Hierarchy</p>
              <div className="mt-4 flex flex-col gap-1">
                <p className={`${raleway.className} text-3xl font-bold text-[#111111]`}>H1 Heading (Raleway Bold)</p>
                <p className={`${roboto.className} text-xs`} style={{ color: GRAY_MUTED }}>32px / Bold</p>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <p className={`${raleway.className} text-2xl font-semibold text-[#111111]`}>H2 Subheader (Raleway Medium)</p>
                <p className={`${roboto.className} text-xs`} style={{ color: GRAY_MUTED }}>24px / SemiBold</p>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <p className={`${roboto.className} text-base leading-[1.6]`} style={{ color: GRAY_2 }}>
                  Body text (Roboto Regular). Clean premium minimalism, communicating trust, absolute transparency,
                  and frictionless forward momentum.
                </p>
                <p className={`${roboto.className} text-xs`} style={{ color: GRAY_MUTED }}>16px / Regular</p>
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: MINT_SOFT }}>
              <p className={`${splineMono.className} text-[11px] uppercase tracking-[0.15em]`} style={{ color: GREEN }}>Type in Practice</p>
              <p className={`${raleway.className} mt-3 text-2xl font-bold`} style={{ color: GREEN }}>&ldquo;Future-forward innovation.&rdquo;</p>
              <p className={`${roboto.className} mt-3 text-base leading-[1.5]`} style={{ color: GREEN }}>
                Create the future with us. Simplifying multi-layer corporate debt parameters in one highly
                intelligent workspace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Visual Language */}
      <section className="border-t px-4 py-20 sm:px-6 sm:py-24 lg:px-[100px] lg:py-[100px]" style={{ borderColor: MINT_LINE }}>
        <p className={`${splineMono.className} text-[14px] uppercase tracking-[0.25em]`} style={{ color: GREEN }}>
          06 / Visual Language
        </p>
        <h2 className="mt-4 text-4xl font-bold text-[#111111] sm:text-5xl">Elements, Shapes &amp; Illustrations</h2>
        <p className={`${roboto.className} mt-4 max-w-[680px] text-base leading-[27px]`} style={{ color: GRAY_2 }}>
          The building blocks of our layout system. Geometric, pure, and distinct. Always use elements in the green
          and black colour pattern from the logo to retain consistent visual logic.
        </p>

        <div className="mt-12 flex flex-col gap-10">
          {[SHAPES_ROW_1, SHAPES_ROW_2].map((row, i) => (
            <div key={i} className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              {row.map((s) => (
                <div key={s.label} className="flex flex-col items-center justify-center gap-4 rounded-2xl border p-8" style={{ borderColor: MINT_LINE }}>
                  {s.node}
                  <p className={`${splineMono.className} text-center text-xs`} style={{ color: GRAY_MUTED }}>{s.label}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 6B — Brand Elements / Iconography */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-[100px] lg:py-[80px]">
        <p className={`${splineMono.className} text-[14px] uppercase tracking-[0.25em]`} style={{ color: GREEN }}>
          06B / Brand Elements
        </p>
        <h2 className="mt-4 text-4xl font-bold text-[#2D2D2D] sm:text-5xl">Iconography &amp; Resource Library</h2>
        <p className={`${roboto.className} mt-4 max-w-[680px] text-base leading-[27px]`} style={{ color: GRAY }}>
          A comprehensive isometric icon set built for the DebtWorks ecosystem. Each icon follows the brand&rsquo;s
          geometric precision and green accent palette.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {ICON_GRID.map((icon, i) => (
            <div key={`${icon.kind}-${i}`} className="flex flex-col items-center justify-center gap-4 rounded-2xl p-8" style={{ backgroundColor: "#F5F5F5" }}>
              <span style={{ color: "#2D2D2D" }}><Icon kind={icon.kind} /></span>
              <p className={`${splineMono.className} text-center text-[13px]`} style={{ color: "#2D2D2D" }}>{icon.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span aria-hidden className="h-px w-10" style={{ backgroundColor: GREEN }} />
          <p className={`${splineMono.className} text-xs`} style={{ color: GRAY }}>
            Additional icons for usage across digital and print collateral.
          </p>
        </div>
      </section>

      {/* 7B — Brand Voice */}
      <section className="border-t px-4 py-20 sm:px-6 sm:py-24 lg:px-[100px] lg:py-[80px]" style={{ borderColor: MINT_LINE }}>
        <p className={`${splineMono.className} text-[14px] uppercase tracking-[0.25em]`} style={{ color: GREEN }}>
          07 / Brand Voice
        </p>
        <h2 className="mt-4 text-4xl font-bold text-[#111111] sm:text-5xl">Tone of Voice &amp; Personality Traits</h2>
        <p className={`${roboto.className} mt-4 max-w-[680px] text-base leading-[27px]`} style={{ color: GRAY_2 }}>
          Our verbal principles dictate how we communicate, explain complex financial procedures, and welcome our
          global audience. Transparent, human-centered language always overrides dense industry jargon.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            {VOICE_ATTRIBUTES.map((v) => (
              <div key={v.name} className="rounded-xl border p-6" style={{ backgroundColor: MINT, borderColor: MINT_LINE }}>
                <p className={`${raleway.className} text-xl font-bold`} style={{ color: GREEN }}>{v.name}</p>
                <p className={`${roboto.className} mt-2 text-[15px] leading-[1.5]`} style={{ color: GRAY_2 }}>{v.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8 rounded-2xl border p-8 sm:p-12" style={{ backgroundColor: MINT_SOFT, borderColor: GREEN }}>
            <div>
              <p className={`${splineMono.className} text-xs uppercase tracking-[0.15em]`} style={{ color: GREEN }}>Character Code</p>
              <p className="mt-2 text-3xl font-bold text-[#111111]">Core Persona Traits</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {TRAIT_PILLS.map((t) => (
                <span key={t} className={`${roboto.className} rounded-full border bg-white px-4.5 py-2.5 text-sm font-medium`} style={{ borderColor: GREEN, color: GREEN }}>
                  {t}
                </span>
              ))}
            </div>
            <hr style={{ borderColor: MINT_LINE }} />
            <div>
              <p className={`${roboto.className} text-sm`} style={{ color: GREEN }}>OUR HIGHEST DIRECTIVE</p>
              <p className={`${raleway.className} mt-2 text-xl italic leading-[1.4] text-[#111111]`}>
                &ldquo;Make the system look and feel exactly like what it is: the cleanest, most trustworthy future
                of financial solutions.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Brand Applications */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-[100px] lg:py-[120px]">
        <p className={`${splineMono.className} text-[14px] uppercase tracking-[0.25em]`} style={{ color: GREEN }}>
          08 / Brand Applications
        </p>
        <h2 className="mt-4 text-4xl font-bold text-[#111111] sm:text-5xl">Print &amp; Digital Collaterals</h2>
        <p className={`${roboto.className} mt-4 max-w-[600px] text-base leading-[27px]`} style={{ color: GRAY }}>
          Experiencing the brand identity in physical environments, architectural spaces, and device screens.
          Bridging digital precision with sophisticated corporate presence.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {APPLICATIONS.map((app) => (
            <div key={app.src} className="overflow-hidden rounded-2xl border" style={{ borderColor: MINT_LINE }}>
              <Image src={app.src} alt={app.title} width={1024} height={1024} className="h-64 w-full object-cover" />
              <p className={`${splineMono.className} p-5 text-sm text-[#111111]`}>{app.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 — Photography Direction */}
      <section className="border-t px-4 py-20 sm:px-6 sm:py-24 lg:px-[100px] lg:py-[120px]" style={{ borderColor: MINT_LINE }}>
        <p className={`${splineMono.className} text-[14px] uppercase tracking-[0.25em]`} style={{ color: GREEN }}>
          09 / Photography Direction
        </p>
        <h2 className="mt-4 text-4xl font-bold text-[#111111] sm:text-5xl">Natural Daylight &amp; Professional Spaces</h2>
        <p className={`${roboto.className} mt-4 max-w-[680px] text-base leading-[27px]`} style={{ color: GRAY_2 }}>
          Use only high quality, raw daylight imagery. Avoid pixelated, artificial studio setups or heavily
          compressed files. True business momentum happens in daylight hours, with real collaboration and light.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PHOTOGRAPHY.map((p) => (
            <div key={p.src} className="relative h-[220px] overflow-hidden sm:h-[340px] lg:h-[450px]" style={{ borderRadius: p.radius }}>
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Outro */}
      <section className="border-t px-4 py-24 text-center sm:px-6" style={{ borderColor: MINT_LINE }}>
        <Image src="/images/debtworks/closing-logo.png" alt="DebtWorks" width={250} height={250} className="mx-auto h-24 w-24 sm:h-32 sm:w-32" />
        <p className={`${raleway.className} mx-auto mt-8 text-3xl font-bold text-[#111111] sm:text-4xl`}>Thank you for viewing.</p>
        <p className={`${roboto.className} mx-auto mt-3 max-w-[560px] text-lg`} style={{ color: GRAY_2 }}>
          Made with intention. Built for trust.
        </p>
      </section>

      {/* More Branding Work */}
      <section className="bg-ink px-4 py-20 sm:px-6 lg:py-24">
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
            href="/work/kasaba-home"
            className="group -ml-px -mt-px block border border-white/10 p-6 transition-colors hover:border-white/30 hover:bg-white/[0.03]"
          >
            <p className="text-xs font-medium text-white/40">02</p>
            <h3 className="mt-4 text-xl font-semibold text-white">Kasaba Home</h3>
            <p className="mt-2 text-sm text-white/50">Artisanal home brand identity</p>
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
