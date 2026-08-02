import type { Metadata } from "next";
import Image from "next/image";
import MobeeHero from "@/components/case-study/MobeeHero";
import MobeeChapterNav from "@/components/case-study/MobeeChapterNav";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import { StatRow } from "@/components/case-study/Stat";
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

function SectionNumber({ n }: { n: string }) {
  return (
    <span aria-hidden className="pointer-events-none absolute right-10 top-10 text-[160px] font-extrabold leading-none text-[#0F172A]/[0.03] sm:right-20">
      {n}
    </span>
  );
}

export default function MobeePinPricingPage() {
  return (
    <main className="flex-1 bg-white">
      <MobeeHero
        badge="UX Design & Product Pricing Strategy"
        chapter="Mobee · Pin Level Pricing"
        title="Killing Mosquitos with Axes"
        subtitle="How implementing dynamic, store-level pricing unblocked mission-critical metrics, empowered operational efficiency, and drove up coverage by 20%."
        meta={["Up to 20% Coverage Increase", "Standard Operating Procedure", "Cost Goals Met"]}
        visualStyle="browser"
        visuals={[
          { src: "/images/mobee/hero-pricing-laptop-back.png", alt: "Mission Control pricing dashboard", width: 3840, height: 2664 },
          { src: "/images/mobee/hero-pricing-laptop-front.png", alt: "Mission Control pin-level pricing table", width: 3840, height: 2664 },
        ]}
      />
      <MobeeChapterNav current="pin-level-pricing" />

      {/* Context */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <p className="text-base font-bold uppercase tracking-wide text-[#F58220]">00 - Context &amp; Challenge</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-[#475569]">The Problem</p>
              <p className="mt-2 text-lg font-bold text-[#0F172A]">Fixed Payout Limits</p>
              <p className="mt-2 text-[15px] leading-6 text-[#475569]">
                Mission Control&apos;s pricing system launched mystery shop missions uniformly. Payouts could not be
                adjusted at a store level, severely limiting pricing flexibility for harder-to-fill areas.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-[#475569]">My Design Mandate</p>
              <p className="mt-2 text-lg font-bold text-[#0F172A]">Streamline Pricing Controls</p>
              <p className="mt-2 text-[15px] leading-6 text-[#475569]">
                Design a flexible, low-engineering-cost MVP to empower ops team members to configure dynamic,
                pin-level payouts without rebuilding the entire database.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-[#F58220] bg-[#F58220]/10 p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-[#F58220]">Product Impact</p>
            <p className="mt-3 text-5xl font-extrabold text-[#F58220]">+20%</p>
            <p className="mt-3 text-base font-bold text-[#0F172A]">Increase in mission coverage speed</p>
            <p className="mt-2 text-sm leading-6 text-[#475569]">
              Achieved regional completion goals rapidly, often at a lower cumulative payout than generic pricing
              templates.
            </p>
          </div>
        </div>
      </section>

      {/* 01 · Challenge */}
      <section className="relative border-y border-[#e2e8f0] bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="01" />
        <div className="relative">
          <SectionHeader eyebrow="01 · The Challenge" title="A rigorous system hampered by uniformity." />
          <div className="mt-10 flex flex-col items-center gap-10 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-5">
              <p className="text-lg leading-[1.6] text-[#0F172A]">
                Mission Control has a major structural limitation — payout rates cannot be dynamically controlled at
                the individual store level. This meant remote, less-desirable stores had identical incentives to
                high-traffic urban venues, leading to massive gaps in coverage.
              </p>
              <p className="text-base leading-[1.6] text-[#475569]">
                By analyzing user activity densities and store performance logs, we discovered that simple
                geographic averages failed. Some stores required distinct incentives to attract secret shoppers.
              </p>
              <p className="border-l-4 border-[#D97706] pl-6 text-lg italic leading-[1.5] text-[#475569]">
                &ldquo;Uniform payouts represent an operational bottleneck. To drive consistent brand intelligence,
                we needed store-level granularity without burdening engineering pipelines.&rdquo;
              </p>
            </div>
            <div className="w-full max-w-[420px] shrink-0 rounded-2xl border border-[#e2e8f0] bg-white p-5">
              <div className="relative h-[180px] overflow-hidden rounded-lg">
                <Image src="/images/mobee/pricing-fig1-chart.png" alt="Pin-level pricing coverage comparison" fill className="object-cover" />
              </div>
              <p className="mt-3 border-t border-[#e2e8f0] pt-3 text-[13px] italic leading-5 text-[#475569]">
                <strong className="font-bold not-italic">Figure 1: </strong>A classic pin-level pricing comparison
                (Advocating Adventurously mission), reaching 87% coverage with optimized, store-level pricing vs 60%
                with traditional flat rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · Experimentation */}
      <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="02" />
        <div className="relative">
          <SectionHeader eyebrow="02 · Experimentation" title="Playing favorites: validating the hypothesis." />
          <div className="mt-10 flex flex-col gap-10 lg:flex-row">
            <div className="flex flex-1 flex-col gap-5">
              <p className="text-lg leading-[1.6] text-[#0F172A]">
                We ran a lightweight, manually fragmented pilot test. Selecting Walmart and Target as &lsquo;easy&rsquo;
                stores, and specialty or remote branches like Costco or Petco as &lsquo;hard&rsquo; stores, we
                launched them simultaneously with differentiated payouts.
              </p>
              <p className="text-base leading-[1.6] text-[#475569]">
                By keeping the average payout at 400 points (350 for Walmart, 450 for Costco), the pilot cost
                exactly the same as uniform pricing. However, completion times plummeted and coverage rates soared,
                proving that price elasticity was heavily localized.
              </p>
            </div>
            <div className="w-full shrink-0 rounded-2xl bg-[#FFF7ED] p-7 lg:w-[380px]">
              <p className="text-xs font-bold uppercase text-[#F58220]">Pilot Results</p>
              <p className="mt-2 text-3xl font-extrabold text-[#F58220]">20% Faster</p>
              <p className="mt-3 text-[15px] leading-[1.5] text-[#92400E]">
                Test missions reached their completion threshold almost twice as fast, with zero net impact on
                budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Turning insight */}
      <section className="bg-[#0B0F19] px-6 py-24 sm:px-10 lg:px-20">
        <p className="mx-auto max-w-[720px] text-center text-2xl italic leading-[1.6] text-white sm:text-3xl">
          &ldquo;Price elasticity was heavily localized — a uniform system was solving the wrong problem entirely.&rdquo;
        </p>
      </section>

      {/* 03 · Solution */}
      <section className="relative border-y border-[#e2e8f0] bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="03" />
        <div className="relative">
          <SectionHeader eyebrow="03 · The Solution" title="A collaborative MVP side-steps platform constraints." />
          <p className="mt-4 max-w-[720px] text-lg leading-[1.6] text-[#0F172A]">
            Our API and database limitations prevented selecting more than 500 pins at a time in the Mission Control
            web interface. Rebuilding the DB wasn&apos;t an option.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
              <p className="text-lg font-bold text-[#0F172A]">Prototype 1: Manual Filtering</p>
              <div className="relative mt-4 h-[160px] overflow-hidden rounded-lg">
                <Image src="/images/mobee/pricing-proto-screen.png" alt="Manual pin filtering prototype" fill className="object-cover" />
              </div>
              <p className="mt-4 text-sm leading-[1.5] text-[#475569]">
                Required users to filter pins down to maximum batches of 500, update rates, and repeat. Discarded as
                too labor-intensive and tedious during dry runs.
              </p>
            </div>
            <div className="rounded-2xl border border-[#F58220] bg-[#FFF7ED] p-6">
              <p className="text-lg font-bold text-[#92400E]">Final Solution: CSV Import Bypass</p>
              <div className="relative mt-4 h-[160px] overflow-hidden rounded-lg">
                <Image src="/images/mobee/pricing-proto-screen.png" alt="CSV import bypass solution" fill className="object-cover" />
              </div>
              <p className="mt-4 text-sm leading-[1.5] text-[#92400E]">
                An operations collaborator proposed updating prices inside the density check CSV directly. This
                bypassed the 500-pin limit, saved 15 sprint points, and simplified the workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · Outcome */}
      <section className="relative bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="04" />
        <div className="relative">
          <SectionHeader eyebrow="04 · Outcome & Impact" title="A stronger platform: cost goals meets coverage." />
          <div className="mt-10 rounded-[20px] border border-[#e2e8f0] bg-white p-8">
            <p className="text-xl font-bold text-[#0F172A]">Optimized Operational Metrics Since Launch</p>
            <div className="mt-6 flex flex-col items-center gap-8 lg:flex-row">
              <div className="relative h-[220px] w-full overflow-hidden rounded-xl lg:h-[260px] lg:w-[420px] lg:shrink-0">
                <Image src="/images/mobee/pricing-metrics-chart.png" alt="Coverage and margin metrics chart" fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <p className="text-lg font-bold text-[#0F172A]">Sustained Performance Gains</p>
                <p className="text-[15px] leading-[1.6] text-[#475569]">
                  Since deploying the integrated store-level pricing in July 2024, Mobee has consistently met its
                  monthly coverage target of 90% while keeping average payouts within the 30% margin threshold.
                </p>
                <p className="text-sm italic leading-[1.5] text-[#475569]">
                  &ldquo;The flexibility to dynamically react to local competitive changes and density drops remains
                  critical to satisfying retail client agreements.&rdquo;
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <StatRow
              stats={[
                { value: "90%", label: "Monthly coverage target consistently met since July 2024" },
                { value: "30%", label: "Margin threshold — average payouts kept within budget" },
              ]}
            />
          </div>
        </div>
      </section>

      <CaseStudyNav currentSlug="mobee" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
