import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wiser Solutions — Case Study",
  description:
    "A scalable UI component system designed to unify multiple products and improve design and development efficiency. 200+ components, +35% user efficiency.",
  alternates: { canonical: "/work/wiser-solutions" },
  openGraph: {
    title: "Wiser Solutions — Case Study — Rishav Singh",
    description: "A scalable design system that unified multiple products and improved efficiency.",
    url: "/work/wiser-solutions",
  },
};

const EYEBROW = "#999999";
const HEADLINE_LIGHT = "#9CA3AF";
const BODY_LIGHT = "#555555";
const BODY_DARK = "#99A1AF";
const DOT = "#7B3DE4";
const GRADIENT_STYLE = {
  backgroundImage: "linear-gradient(135deg, #7B3DE4 0%, #9B5FF5 100%)",
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  color: "transparent",
};

const OUTCOME_STATS = [
  { value: "200+", label: "Components" },
  { value: "+35%", label: "User Efficiency" },
  { value: "+20%", label: "Data Accuracy" },
];

const PROBLEMS = [
  "Colour inconsistency across products created confusion and weakened brand identity",
  "Navigation patterns varied, increasing cognitive load for users",
  "Typography usage lacked standardization, reducing readability and cohesion",
  "Multiple code bases (ANT, Material, Backbone) caused fragmentation",
  "No centralized design system existed to guide UI decisions",
  "Icons and visual elements were inconsistent across products",
];

const APPROACH = [
  "Identifying common patterns across products",
  "Building reusable components iteratively",
  "Aligning closely with developers for implementation",
  "Continuously refining components based on real use cases",
];

const ARCHITECTURE_LAYERS = [
  { title: "Foundations", body: "color, typography, spacing" },
  { title: "Components", body: "buttons, inputs, navigation elements" },
  { title: "Patterns", body: "layouts and interaction flows" },
  { title: "Product-level", body: "implementations" },
];

const COMPONENT_HIGHLIGHTS = [
  { image: "/images/wiser-solutions/states-variants.png", title: "States & Variants", body: "Multiple component states including hover, active, disabled, and error states" },
  { image: "/images/wiser-solutions/responsive-patterns.png", title: "Responsive Patterns", body: "Adaptive layouts and components that work seamlessly across all device sizes" },
];

const COMPONENT_FEATURES = [
  "Clear naming conventions for cross-team clarity",
  "Defined states and variants for all components",
  "Responsive behavior across all devices",
  "Flexibility to handle multiple use cases",
];

const FOUNDATIONS = [
  "colors, typography, and spacing tokens",
  "support for dark and light themes",
  "consistent border radius, spacing, and layout rules",
];

const IMPLEMENTATION = [
  "components were validated during implementation",
  "documentation supported adoption",
  "QA ensured design accuracy in production",
];

const OUTCOME_POINTS = [
  "consistent user experience across multiple products",
  "faster design and development cycles",
  "reduced redundancy",
  "improved collaboration between teams",
];

const DOCUMENTATION = [
  "detailed component documentation",
  "usage guidelines and best practices",
  "API documentation for developers",
];

function Dot() {
  return <span aria-hidden className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: DOT }} />;
}

export default function WiserSolutionsPage() {
  return (
    <main className="flex-1 bg-paper">
      {/* Hero */}
      <section className="dark-wash relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-dark" />
        <Nav active="Work" />
        <div className="relative flex flex-col items-center gap-16 px-6 pb-20 pt-28 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:pb-24 lg:pt-32">
          <div className="flex max-w-[620px] flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">- Case Study</p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-[#7B3DE4]/20 bg-[#9B5FF5]/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.05em] text-[#9B9EFF]">
                Design Systems / SaaS Infrastructure
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="whitespace-pre-line text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[80px] lg:leading-[88px]">
                {"Wiser\nDesign System"}
              </h1>
              <p className="max-w-[560px] text-lg leading-[1.6] text-[#99A1AF] sm:text-xl">
                A scalable UI component system designed to unify multiple products and improve design and
                development efficiency.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {OUTCOME_STATS.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4">
                  <p className="text-[28px] font-bold leading-[36px]" style={GRADIENT_STYLE}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.05em] text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-10">
              {[
                { label: "Role", value: "Product Designer" },
                { label: "Scope", value: "Design System / Multi-product SaaS" },
                { label: "Year", value: "2024" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <p className="text-[10px] font-medium uppercase tracking-[0.06em] text-white/25">{item.label}</p>
                  <p className="text-base text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-[420px] shrink-0 lg:max-w-[500px]">
            <span
              aria-hidden
              className="absolute -inset-8 rounded-full bg-[#9B5FF5]/20 blur-3xl"
            />
            <Image
              src="/images/wiser-solutions/hero-box.png"
              alt="Wiser design system — component library preview"
              width={1174}
              height={1027}
              priority
              className="relative h-auto w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
              - Context
            </p>
            <h2 className="max-w-[820px] text-3xl font-medium leading-[1.2] sm:text-4xl lg:text-5xl" style={{ color: HEADLINE_LIGHT }}>
              Wiser Solutions operates multiple products built over time using{" "}
              <span className="text-ink">different design patterns, UI styles, and code bases.</span>
            </h2>
          </div>
          <p className="max-w-[720px] text-lg leading-[29px]" style={{ color: BODY_LIGHT }}>
            As these products evolved independently, inconsistencies began to impact usability, brand perception,
            and development efficiency. This created a growing need for a unified design system that could scale
            across products while maintaining consistency and flexibility.
          </p>
        </div>
      </section>

      {/* Problems */}
      <section className="dark-wash relative px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-dark" />
        <div className="relative flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
              - Problems Identified
            </p>
            <h2 className="max-w-[820px] text-3xl font-medium leading-[1.2] text-white sm:text-4xl lg:text-5xl">
              Six core inconsistencies were holding the product ecosystem back.
            </h2>
          </div>
          <div className="flex flex-wrap gap-8">
            {PROBLEMS.map((problem) => (
              <div key={problem} className="flex w-full max-w-[600px] flex-1 items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
                <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: DOT }} />
                <p className="text-base leading-[26px]" style={{ color: BODY_DARK }}>{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal */}
      <section className="bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
              - Goal
            </p>
            <h2 className="max-w-[820px] text-3xl font-medium leading-[1.2] sm:text-4xl lg:text-5xl" style={{ color: HEADLINE_LIGHT }}>
              Establish a unified system that{" "}
              <span className="text-ink">ensures consistency, reduces duplication, and creates a scalable foundation.</span>
            </h2>
          </div>
          <div className="rounded-2xl border border-[#d0d0d0] bg-white p-8 sm:p-12">
            <p className="text-xl leading-[38px] text-ink sm:text-2xl">
              The goal was to establish a unified design system that ensures consistency across products, reduces
              duplication in design and development efforts, and creates a scalable foundation for future product
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="dark-wash relative px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-dark" />
        <div className="relative flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
              - Approach
            </p>
            <h2 className="max-w-[720px] text-3xl font-medium leading-[1.2] text-white sm:text-4xl">
              Atomic design methodology, built iteratively with real use cases.
            </h2>
          </div>
          <p className="max-w-[720px] text-lg leading-[29px]" style={{ color: BODY_DARK }}>
            The system was built using an atomic design methodology, focusing on creating reusable components and
            patterns that could scale across multiple products.
          </p>
          <ul className="flex flex-col gap-4">
            {APPROACH.map((item) => (
              <li key={item} className="flex items-center gap-4 text-lg leading-[29px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                <Dot />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* System Architecture */}
      <section className="bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
                - System Architecture
              </p>
              <h2 className="max-w-[720px] text-3xl font-medium leading-[1.2] sm:text-4xl" style={{ color: HEADLINE_LIGHT }}>
                The design system was <span className="text-ink">structured into four distinct layers.</span>
              </h2>
            </div>
            <p className="max-w-[720px] text-lg leading-[29px]" style={{ color: BODY_LIGHT }}>
              The design system was structured into layers, each building on the one before it to create a cohesive
              and scalable architecture.
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            {ARCHITECTURE_LAYERS.map((layer) => (
              <div key={layer.title} className="flex w-full max-w-[600px] flex-1 flex-col gap-4 rounded-2xl border border-[#d0d0d0] bg-white p-8">
                <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d0d0d]" />
                <h3 className="text-xl font-bold text-ink">{layer.title}</h3>
                <p className="text-[15px] leading-[22px] text-[#6a7282]">{layer.body}</p>
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/wiser-solutions/system-architecture.png"
              alt="Wiser design system — foundations, components, patterns, and product layers"
              width={3768}
              height={3456}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Component System */}
      <section className="dark-wash relative px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-dark" />
        <div className="relative flex flex-col gap-14">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
                - Component System
              </p>
              <h2 className="max-w-[720px] text-3xl font-medium leading-[1.2] text-white sm:text-4xl">
                200+ components built with modularity and consistency in mind.
              </h2>
            </div>
            <p className="max-w-[720px] text-lg leading-[29px]" style={{ color: BODY_DARK }}>
              From foundational elements like typography and colors to complex UI components, the system provides
              everything needed to build cohesive product experiences.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <Image
              src="/images/wiser-solutions/component-system.png"
              alt="Wiser design system — component library overview"
              width={4096}
              height={976}
              className="h-auto w-full"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {COMPONENT_HIGHLIGHTS.map((item) => (
              <div key={item.title} className="flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
                <div className="h-[220px] overflow-hidden rounded-xl">
                  <Image src={item.image} alt={item.title} width={1920} height={1920} className="h-full w-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-[15px] leading-[22px]" style={{ color: BODY_DARK }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {COMPONENT_FEATURES.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
                <span aria-hidden className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: DOT }} />
                <p className="text-[15px] text-[#d1d5dc]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slot-Based Architecture */}
      <section className="bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
              - Slot-Based Architecture
            </p>
            <h2 className="max-w-[720px] text-3xl font-medium leading-[1.2] sm:text-4xl" style={{ color: HEADLINE_LIGHT }}>
              Reduce complexity while <span className="text-ink">increasing flexibility through composition.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-[#d0d0d0] bg-white p-8 sm:p-12">
            <p className="text-xl leading-[32px] text-ink">
              A slot-based composition model was introduced to reduce component complexity while increasing
              flexibility.
            </p>
            <p className="text-lg leading-[29px]" style={{ color: BODY_LIGHT }}>
              Instead of creating multiple variations of components, internal elements were made configurable,
              allowing the same component to adapt to different scenarios without duplication.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/wiser-solutions/slot-architecture.png"
              alt="Wiser design system — slot-based composition model"
              width={2640}
              height={1752}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Scalable Foundations */}
      <section className="dark-wash relative px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-dark" />
        <div className="relative flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
              - Scalable Foundations
            </p>
            <h2 className="max-w-[720px] text-3xl font-medium leading-[1.2] text-white sm:text-4xl">
              The system is fully powered by variables.
            </h2>
          </div>
          <ul className="flex flex-col gap-4">
            {FOUNDATIONS.map((item) => (
              <li key={item} className="flex items-center gap-4 text-lg leading-[29px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                <Dot />
                {item}
              </li>
            ))}
          </ul>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/wiser-solutions/design-tokens.png"
              alt="Wiser design system — design tokens"
              width={2880}
              height={1002}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Collaboration & Implementation */}
      <section className="bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
              - Collaboration &amp; Implementation
            </p>
            <h2 className="max-w-[820px] text-3xl font-medium leading-[1.2] sm:text-4xl" style={{ color: HEADLINE_LIGHT }}>
              Built in close collaboration with developers to ensure{" "}
              <span className="text-ink">alignment between design and code.</span>
            </h2>
          </div>
          <ul className="flex flex-col gap-4">
            {IMPLEMENTATION.map((item) => (
              <li key={item} className="flex items-center gap-4 text-lg leading-[29px]" style={{ color: BODY_LIGHT }}>
                <Dot />
                {item}
              </li>
            ))}
          </ul>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/wiser-solutions/multi-device.png"
              alt="Wiser design system — implementation across devices"
              width={2436}
              height={866}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="dark-wash relative px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-dark" />
        <div className="relative flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
              - Outcome
            </p>
            <h2 className="max-w-[720px] text-3xl font-medium leading-[1.2] text-white sm:text-4xl">
              A single source of truth for UI across all Wiser products.
            </h2>
          </div>
          <div className="flex flex-wrap gap-6">
            {OUTCOME_STATS.map((stat) => (
              <div key={stat.label} className="min-w-[180px] flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
                <p className="text-[40px] font-bold leading-[56px]" style={GRADIENT_STYLE}>{stat.value}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.04em] text-white/25">{stat.label}</p>
              </div>
            ))}
          </div>
          <ul className="flex flex-col gap-4">
            {OUTCOME_POINTS.map((item) => (
              <li key={item} className="flex items-center gap-4 text-lg leading-[29px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                <Dot />
                {item}
              </li>
            ))}
          </ul>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/wiser-solutions/wiser-products.png"
              alt="Wiser design system — used across all Wiser products"
              width={2828}
              height={1032}
              className="h-auto w-full"
            />
          </div>
          <p className="max-w-[720px] text-lg leading-[29px]" style={{ color: BODY_DARK }}>
            The system is now used across all Wiser products, with 200+ components actively maintained and
            documented.
          </p>
        </div>
      </section>

      {/* Documentation */}
      <section className="bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
              - Documentation
            </p>
            <h2 className="max-w-[820px] text-3xl font-medium leading-[1.2] sm:text-4xl" style={{ color: HEADLINE_LIGHT }}>
              Comprehensive documentation to support <span className="text-ink">adoption and maintenance.</span>
            </h2>
          </div>
          <ul className="flex flex-col gap-4">
            {DOCUMENTATION.map((item) => (
              <li key={item} className="flex items-center gap-4 text-lg leading-[29px]" style={{ color: BODY_LIGHT }}>
                <Dot />
                {item}
              </li>
            ))}
          </ul>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/wiser-solutions/documentation.png"
              alt="Wiser design system — documentation"
              width={1350}
              height={1168}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="dark-wash relative px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-dark" />
        <div className="relative flex flex-col gap-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: EYEBROW }}>
            - Reflection
          </p>
          <div className="flex flex-col gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12">
            <p className="text-3xl font-semibold leading-[1.3] text-white sm:text-4xl">
              Design systems are not just UI libraries; they are foundational infrastructure for product
              scalability.
            </p>
            <p className="text-lg leading-[29px]" style={{ color: BODY_DARK }}>
              Balancing flexibility with consistency was key to ensuring adoption across teams. The success of this
              system demonstrated that investing in design infrastructure pays dividends in speed, quality, and team
              alignment.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <p className="text-5xl font-bold text-white sm:text-6xl">Thank You</p>
            <p className="text-xl sm:text-2xl" style={{ color: BODY_DARK }}>
              For taking the time to explore this case study
            </p>
          </div>
        </div>
      </section>

      <CaseStudyNav currentSlug="wiser-solutions" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
