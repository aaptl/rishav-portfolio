import type { Metadata } from "next";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import { StatRow, Quote } from "@/components/case-study/Stat";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobee: Pin-Level Pricing — Case Study",
  description:
    "Killing Mosquitos with Axes — how dynamic, store-level pricing unblocked mission-critical metrics and drove up coverage by 20%.",
  alternates: { canonical: "/work/mobee/pin-level-pricing" },
  openGraph: {
    title: "Mobee: Pin-Level Pricing — Case Study — Rishav Singh",
    description: "How dynamic, store-level pricing drove up mission coverage by 20%.",
    url: "/work/mobee/pin-level-pricing",
  },
};

export default function MobeePinPricingPage() {
  return (
    <main className="flex-1 bg-paper">
      <CaseStudyHero
        eyebrow="UX Design & Product Pricing Strategy · Mobee · Pin Level Pricing"
        title="Killing Mosquitos with Axes"
        subtitle="How implementing dynamic, store-level pricing unblocked mission-critical metrics, empowered operational efficiency, and drove up coverage by 20%."
        pills={["Up to 20% Coverage Increase", "Standard Operating Procedure", "Cost Goals Met"]}
        backHref="/work/mobee"
        backLabel="Back to Mobee"
      />

      {/* Context */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">00 · The Problem</p>
            <p className="mt-3 text-base font-semibold text-ink">Fixed Payout Limits</p>
            <p className="mt-2 text-[13px] leading-5 text-[#555555]">
              Mission Control&apos;s pricing system launched mystery shop missions uniformly. Payouts could not be
              adjusted at a store level, severely limiting pricing flexibility for harder-to-fill areas.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">My Design Mandate</p>
            <p className="mt-3 text-base font-semibold text-ink">Streamline Pricing Controls</p>
            <p className="mt-2 text-[13px] leading-5 text-[#555555]">
              Design a flexible, low-engineering-cost MVP to empower ops team members to configure dynamic,
              pin-level payouts without rebuilding the entire database.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">Product Impact</p>
            <p className="mt-3 text-2xl font-bold text-ink">+20%</p>
            <p className="mt-1 text-[13px] leading-5 text-[#555555]">
              Increase in mission coverage speed — achieved regional completion goals rapidly, often at a lower
              cumulative payout than generic pricing templates.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="01 · The Challenge" title="A rigorous system hampered by uniformity." tone="dark" />
        <p className="mt-4 max-w-[720px] text-base leading-[27px] text-white/60">
          Mission Control has a major structural limitation — payout rates cannot be dynamically controlled at the
          individual store level. Remote, less-desirable stores had identical incentives to high-traffic urban
          venues, leading to massive gaps in coverage. Analyzing user activity densities and store performance logs,
          we discovered that simple geographic averages failed — some stores required distinct incentives to
          attract secret shoppers.
        </p>
        <div className="mt-8 max-w-[640px]">
          <Quote tone="dark" text="Uniform payouts represent an operational bottleneck. To drive consistent brand intelligence, we needed store-level granularity without burdening engineering pipelines." />
        </div>
        <p className="mt-8 text-sm text-white/40">
          Figure: a classic pin-level pricing comparison, reaching 87% coverage with optimized, store-level pricing
          vs 60% with traditional flat rates.
        </p>
      </section>

      {/* Experimentation */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="02 · Experimentation" title="Playing favorites: validating the hypothesis." />
          <p className="mt-4 max-w-[760px] text-base leading-[27px] text-[#555555]">
            We ran a lightweight, manually fragmented pilot test. Selecting Walmart and Target as &lsquo;easy&rsquo;
            stores, and specialty or remote branches like Costco or Petco as &lsquo;hard&rsquo; stores, we launched
            them simultaneously with differentiated payouts. By keeping the average payout at 400 points (350 for
            Walmart, 450 for Costco), the pilot cost exactly the same as uniform pricing — but completion times
            plummeted and coverage rates soared, proving that price elasticity was heavily localized.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-[220px_1fr]">
            <div className="rounded-2xl border border-[#dedcd4] bg-white p-6">
              <p className="text-4xl font-bold text-ink">20%</p>
              <p className="mt-2 text-sm text-[#555555]">Faster — test missions reached completion threshold almost twice as fast, with zero net impact on budget.</p>
            </div>
            <Quote text="The challenge was side-stepping our database boundaries. By shipping a collaborative CSV workaround, we saved weeks of engineering time while streamlining operations." />
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="03 · The Solution" title="A collaborative MVP side-steps platform constraints." tone="dark" />
        <p className="mt-4 max-w-[720px] text-base leading-[27px] text-white/60">
          Our API and database limitations prevented selecting more than 500 pins at a time in the Mission Control
          web interface. Rebuilding the DB wasn&apos;t an option.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-white/40">Prototype 1 · Manual Filtering</p>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Required users to filter pins down to maximum batches of 500, update rates, and repeat. Discarded as
              too labor-intensive and tedious during dry runs.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.04] p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-300">Final Solution · CSV Import Bypass</p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              An operations collaborator proposed updating prices inside the density check CSV directly. This
              bypassed the 500-pin limit, saved 15 sprint points, and simplified the workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="04 · Outcome & Impact" title="A stronger platform: cost goals meets coverage." />
          <div className="mt-10">
            <StatRow
              stats={[
                { value: "90%", label: "Monthly coverage target consistently met since July 2024" },
                { value: "30%", label: "Margin threshold — average payouts kept within budget" },
              ]}
            />
          </div>
          <div className="mt-10 max-w-[640px]">
            <Quote text="The flexibility to dynamically react to local competitive changes and density drops remains critical to satisfying retail client agreements." />
          </div>
        </div>
      </section>

      <CaseStudyNav currentSlug="mobee" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
