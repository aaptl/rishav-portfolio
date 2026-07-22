import type { Metadata } from "next";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import { StatRow, Quote } from "@/components/case-study/Stat";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobee: Letter of Authorization — Case Study",
  description:
    "Reducing retail survey abandonment through trust-first UX. A simple authorization letter reduced hesitation and improved mission completion by 5–15%.",
  alternates: { canonical: "/work/mobee/letter-of-authorization" },
  openGraph: {
    title: "Mobee: Letter of Authorization — Case Study — Rishav Singh",
    description: "Reducing retail survey abandonment through trust-first UX.",
    url: "/work/mobee/letter-of-authorization",
  },
};

const OUTCOME_STATS = [
  { value: "58%", label: "Anxiety → Confidence", body: "Stated the LOA positively influenced their decision to accept and perform the mission." },
  { value: "11%", label: "Avoidance → Action", body: "Explicitly said they would not have attempted the mission at all without the LOA." },
  { value: "70%", label: "Uncertainty → Clarity", body: "Reported vastly higher subjective confidence while performing store operations." },
];

const WHAT_LOA_DOES = [
  { title: "Outlines purpose", body: "Clearly states the goal of the survey: to ensure great service and a better shopping experience." },
  { title: "Introduces the company", body: "Names Wiser Solutions as the organizing entity, providing institutional credibility on the shopper's behalf." },
  { title: "Explains the shopper's presence", body: "Grants no actual legal access — yet gives shoppers the psychological confidence to operate with authority." },
  { title: "Always accessible in-app", body: "Available one tap away via the document icon — printable too, for shoppers who prefer a physical copy." },
];

export default function MobeeLoaPage() {
  return (
    <main className="flex-1 bg-paper">
      <CaseStudyHero
        eyebrow="UX Research & Product Strategy Case Study · Mobee · Letter of Authorization"
        title="Reducing Retail Survey Abandonment Through Trust-First UX"
        subtitle="Retail survey participants frequently abandoned missions after being questioned by store employees. Rather than redesigning the survey itself, we redesigned trust — a simple authorization letter reduced hesitation, increased confidence and significantly improved mission completion."
        pills={["⏱ 6 Weeks", "👤 10,000+ Active Shoppers", "📈 +5–15% Coverage Speed"]}
        backHref="/work/mobee"
        backLabel="Back to Mobee"
      />

      {/* Context */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">00 · My Role</p>
            <p className="mt-3 text-base font-semibold text-ink">Lead Product Researcher & Strategist</p>
            <p className="mt-2 text-[13px] leading-5 text-[#555555]">
              Designed the post-abandonment surveys, conducted shopper interviews, validated core user anxieties, and
              proposed the structural placebo solution.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">The Product</p>
            <p className="mt-3 text-base font-semibold text-ink">Mobee (Secret Shopping App)</p>
            <p className="mt-2 text-[13px] leading-5 text-[#555555]">
              A crowdsourced retail intelligence application where independent users complete in-store photographic
              missions.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">Key Outcome</p>
            <p className="mt-3 text-2xl font-bold text-ink">+5% to 15%</p>
            <p className="mt-1 text-[13px] leading-5 text-[#555555]">
              Increase in mission coverage speed — by removing friction and anxiety, missions were claimed and
              executed significantly faster.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="01 · The Challenge" title="Fear of employee confrontation prevented mission attempts." tone="dark" />
        <p className="mt-4 max-w-[720px] text-base leading-[27px] text-white/60">
          Mobee shoppers enter retail stores to photograph shelf inventories. They frequently expressed intense
          anxiety about being confronted by store employees — support tickets overflowed with stories of shoppers
          feeling uncomfortable, awkward, or even being asked to leave. We set up automated post-abandonment surveys
          and interviews to determine if actual confrontations were causing high abandonment, only to uncover a
          completely different root problem.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-[220px_1fr]">
          <div className="rounded-2xl border border-white/10 p-6">
            <p className="text-4xl font-bold text-white">3%</p>
            <p className="mt-2 text-sm text-white/60">of abandonments were due to actual confrontation</p>
          </div>
          <Quote tone="dark" text="The core blocker wasn't people actually being thrown out. It was the crushing anxiety of potentially being confronted, which stopped shoppers from ever starting." />
        </div>
      </section>

      {/* Data Breakthrough */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="02 · Data Breakthrough" title="Most users weren't abandoning because the survey was difficult. They were abandoning because they didn't trust us." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#dedcd4] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">Step 1 · Rare Reality</p>
              <p className="mt-3 text-base font-semibold text-ink">Confrontation accounted for only 3% of abandons</p>
              <p className="mt-2 text-[13px] leading-5 text-[#555555]">
                Survey results analyzing reasons for mission abandonment revealed that being &ldquo;asked to
                leave&rdquo; was incredibly rare.
              </p>
            </div>
            <div className="rounded-2xl border border-[#dedcd4] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">Step 2 · Widespread Fear</p>
              <p className="mt-3 text-base font-semibold text-ink">
                Why users avoided locations: &ldquo;Keeping a low profile&rdquo;
              </p>
              <p className="mt-2 text-[13px] leading-5 text-[#555555]">
                Shoppers avoided stores entirely where keeping a low profile felt too difficult — the barrier was
                psychological, not procedural.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-[760px] text-sm leading-6 text-[#555555]">
            Retail stores responded 3× better to an LOA than convenience stores, cross-referencing abandonment data
            with store-type avoidance patterns confirmed fear — not difficulty — as the root cause. Shoppers see the
            LOA banner at the top of every mission screen — accessible at the exact moment they need it, persisting
            throughout the entire in-store mission, not just the mission brief.
          </p>
          <p className="mt-6 max-w-[640px] text-lg italic leading-[1.6] text-[#333333]">
            The ultimate solution wasn&apos;t getting formal retail permissions. It was designing a physical artifact
            that converted vulnerability into absolute confidence.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="03 · The Solution" title="The Letter of Authorization: a placebo that powered UX." tone="dark" />
        <p className="mt-4 max-w-[720px] text-base leading-[27px] text-white/60">
          Retail audits are fully legitimate — but the inherent ambiguity left shoppers feeling uncertain, exposed,
          and unable to act with authority. We created a formal, printable and in-app Letter of Authorization (LOA)
          — a psychological placebo that armed users with the confidence to navigate stores authoritatively.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_LOA_DOES.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 p-5">
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-white/50">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="04 · Outcome & Impact" title="Confidence is king: measured uplifts in performance." />
          <div className="mt-10">
            <StatRow stats={OUTCOME_STATS} />
          </div>
          <p className="mt-8 max-w-[720px] text-sm leading-6 text-[#767676]">
            Only 15% of users actually had to present the letter to store staff — validating that the LOA acted
            primarily as an internal confidence-boosting mechanism, not a legal necessity.
          </p>
        </div>
      </section>

      <CaseStudyNav currentSlug="mobee" />
      <CtaStrip outlineButton />
      <Footer variant="home" />
    </main>
  );
}
