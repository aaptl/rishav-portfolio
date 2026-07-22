import type { Metadata } from "next";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import { StatRow } from "@/components/case-study/Stat";
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
  { title: "Foundations", body: "Color, typography, spacing" },
  { title: "Components", body: "Buttons, inputs, navigation elements" },
  { title: "Patterns", body: "Layouts and interaction flows" },
  { title: "Product-level", body: "Implementations" },
];

const COMPONENT_FEATURES = [
  "States & Variants — hover, active, disabled, and error states",
  "Responsive Patterns — adaptive layouts across all device sizes",
  "Clear naming conventions for cross-team clarity",
  "Flexibility to handle multiple use cases",
];

export default function WiserSolutionsPage() {
  return (
    <main className="flex-1 bg-paper">
      <CaseStudyHero
        eyebrow="Case Study · Design Systems / SaaS Infrastructure"
        title="Wiser Design System"
        subtitle="A scalable UI component system designed to unify multiple products and improve design and development efficiency."
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Scope", value: "Design System / Multi-product SaaS" },
          { label: "Year", value: "2024" },
        ]}
        heroImage="/images/work-wiser.png"
        heroImageAlt="Pet health overview dashboard on a tablet — wellness scores and health metrics"
      />

      <section className="relative bg-paper px-6 py-16 sm:px-10 lg:px-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <StatRow stats={OUTCOME_STATS} />
        </div>
      </section>

      {/* Context */}
      <section className="relative bg-paper px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="Context" title="Multiple products, no shared visual language." />
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            Wiser Solutions operates multiple products built over time using different design patterns, UI styles,
            and code bases. As these products evolved independently, inconsistencies began to impact usability,
            brand perception, and development efficiency — creating a growing need for a unified design system that
            could scale across products while maintaining consistency and flexibility.
          </p>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="Problems Identified" title="Six core inconsistencies were holding the product ecosystem back." tone="dark" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem, i) => (
            <div key={problem} className="rounded-xl border border-white/10 p-5">
              <p className="text-xs font-bold text-white/30">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-sm leading-5 text-white/70">{problem}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Goal + Approach */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader eyebrow="Goal" title="Establish a unified system that ensures consistency, reduces duplication, and creates a scalable foundation." />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">- Approach</p>
            <h3 className="mt-4 text-2xl font-semibold text-ink">
              Atomic design methodology, built iteratively with real use cases.
            </h3>
            <ul className="mt-6 space-y-3">
              {APPROACH.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[#555555]">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#888888]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="System Architecture" title="The design system was structured into four distinct layers." tone="dark" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {ARCHITECTURE_LAYERS.map((layer, i) => (
            <div key={layer.title} className="bg-ink p-6">
              <p className="text-xs font-bold text-white/30">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-base font-semibold text-white">{layer.title}</h3>
              <p className="mt-2 text-[13px] text-white/50">{layer.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Component System */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader eyebrow="Component System" title="200+ components built with modularity and consistency in mind." />
            <p className="mt-4 max-w-[520px] text-base leading-[27px] text-[#555555]">
              From foundational elements like typography and colors to complex UI components, the system provides
              everything needed to build cohesive product experiences.
            </p>
          </div>
          <ul className="space-y-4 self-center">
            {COMPONENT_FEATURES.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-[#dedcd4] bg-white p-4 text-sm leading-6 text-[#555555]">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Slot-based + Scalable Foundations */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader eyebrow="Slot-Based Architecture" title="Reduce complexity while increasing flexibility through composition." tone="dark" />
            <p className="mt-4 max-w-[480px] text-base leading-[27px] text-white/60">
              Instead of creating multiple variations of components, internal elements were made configurable,
              allowing the same component to adapt to different scenarios without duplication.
            </p>
          </div>
          <div>
            <SectionHeader eyebrow="Scalable Foundations" title="The system is fully powered by variables." tone="dark" />
            <ul className="mt-4 space-y-2 text-sm leading-6 text-white/60">
              <li>· Colour, typography, and spacing tokens</li>
              <li>· Support for dark and light themes</li>
              <li>· Consistent border radius, spacing, and layout rules</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="Collaboration & Implementation" title="Built in close collaboration with developers to ensure alignment between design and code." />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Components were validated during implementation", "Documentation supported adoption", "QA ensured design accuracy in production"].map(
              (item) => (
                <div key={item} className="rounded-xl border border-[#dedcd4] bg-white p-5 text-sm leading-6 text-[#555555]">
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="Outcome" title="A single source of truth for UI across all Wiser products." tone="dark" />
        <div className="mt-10">
          <StatRow tone="dark" stats={OUTCOME_STATS} />
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Consistent user experience across multiple products", "Faster design and development cycles", "Reduced redundancy", "Improved collaboration between teams"].map(
            (item) => (
              <li key={item} className="rounded-xl border border-white/10 p-4 text-[13px] leading-5 text-white/60">
                {item}
              </li>
            ),
          )}
        </ul>
        <p className="mt-8 max-w-[640px] text-sm text-white/50">
          The system is now used across all Wiser products, with 200+ components actively maintained and documented.
        </p>
      </section>

      {/* Reflection */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative mx-auto max-w-[720px] text-center">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">- Reflection</p>
          <h2 className="mt-4 text-2xl font-semibold leading-[1.4] text-ink sm:text-3xl">
            Design systems are not just UI libraries; they are foundational infrastructure for product scalability.
          </h2>
          <p className="mt-5 text-base leading-[27px] text-[#555555]">
            Balancing flexibility with consistency was key to ensuring adoption across teams. The success of this
            system demonstrated that investing in design infrastructure pays dividends in speed, quality, and team
            alignment.
          </p>
        </div>
      </section>

      <CaseStudyNav currentSlug="wiser-solutions" />
      <CtaStrip outlineButton />
      <Footer variant="home" />
    </main>
  );
}
