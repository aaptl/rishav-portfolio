import type { Metadata } from "next";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import { StatRow, Quote } from "@/components/case-study/Stat";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobee: Bonus Implementation — Case Study",
  description:
    "Money talks: fueling mission completion with active in-app bonuses. A contextually-relevant reward highlight system that lifted mission selection by 62%.",
  alternates: { canonical: "/work/mobee/bonus-implementation" },
  openGraph: {
    title: "Mobee: Bonus Implementation — Case Study — Rishav Singh",
    description: "Fueling mission completion with active, contextually-relevant in-app bonuses.",
    url: "/work/mobee/bonus-implementation",
  },
};

const ITERATIONS = [
  { name: "Iteration A", tag: "Explicit", body: "Dollar amounts shown. Prioritizes explicit payout values and detailed bonus rules — clear hierarchy, but risks visual noise." },
  { name: "Iteration B", tag: "Simplified", body: "Simplified bonus tags. Removes secondary details to reduce cognitive load and improve scanability." },
  { name: "Iteration C", tag: "Final", body: "Balances clarity with brevity: explicit payout amounts shown only when necessary, deadlines surfaced prominently." },
];

export default function MobeeBonusImplementationPage() {
  return (
    <main className="flex-1 bg-paper">
      <CaseStudyHero
        eyebrow="Product Design & User Research Case Study · Mobee · Bonus Implementation"
        title="Money Talks: Fueling Mission Completion with Active In-App Bonuses"
        subtitle="Increased incentives are core to getting secret shopper missions completed quickly. We designed and validated an active, contextually-relevant in-app reward highlight system that directly targets user motivation when they are near stores."
        pills={["⏱ 4 Weeks", "👤 User Surveys & Live Panel", "🚀 Scheduled Q4 2024"]}
        backHref="/work/mobee"
        backLabel="Back to Mobee"
      />

      {/* Context */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">00 · My Role</p>
            <p className="mt-3 text-base font-semibold text-ink">Lead Product Designer & Researcher</p>
            <p className="mt-2 text-[13px] leading-5 text-[#555555]">
              Led the visual design of the in-app bonus indicators, structured the A/B testing variations, executed
              the user validation surveys, and facilitated cross-functional panels.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">The Mission</p>
            <p className="mt-3 text-base font-semibold text-ink">Targeted Incentive Awareness</p>
            <p className="mt-2 text-[13px] leading-5 text-[#555555]">
              Bridge the communication gap between off-site notifications and highly active, in-the-moment shopper
              decisions.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">Performance Verdict</p>
            <p className="mt-3 text-lg font-bold text-ink">Highly Enticing</p>
            <p className="mt-1 text-[13px] leading-5 text-[#555555]">
              Bonus tags successfully triggered a clear association with organic price increases, making them the
              most claimed mission type in clinical panels.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="01 · The Challenge" title="Passive notifications fail to inspire in-store action." tone="dark" />
        <p className="mt-4 max-w-[720px] text-base leading-[27px] text-white/60">
          Increased incentives are the primary lever to get secret shopper missions completed quickly. But notifying
          users (bees) is extremely difficult when they are on the move — traditional methods like broadcast emails
          and simple push notifications fall short. Because people are often not in a physical position to complete
          a mission when they read their emails, we needed a robust, highly active, and contextual in-app mechanism
          to capture their attention right at the point of decision.
        </p>
        <div className="mt-8 max-w-[640px]">
          <Quote tone="dark" text="Emails aren't contextually relevant - users might not be near a store when they see the alert. We need a live indicator directly integrated on the active map and mission briefs." />
        </div>
        <div className="mt-10">
          <StatRow
            tone="dark"
            stats={[
              { value: "$16,744", label: "Invested in bonuses over 6 months" },
              { value: "50%", label: "Of missions had automated bonus payouts" },
              { value: "50 pts", label: "Average bonus payout per mission" },
            ]}
          />
        </div>
        <p className="mt-8 max-w-[640px] text-sm leading-6 text-white/50">
          Despite significant bonus investment, user awareness was inconsistent — the data confirmed we needed an
          in-app solution.
        </p>
      </section>

      {/* Design Iterations */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="02 · Design Iterations" title="Seeing is believing: structuring the visual hierarchy." />
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            My team produced several iterations exploring combinations of standard layouts, highlighted promotional
            badges, detailed pricing spikes, and deadline indicators.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {ITERATIONS.map((it) => (
              <div key={it.name} className="rounded-xl border border-[#dedcd4] bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">{it.name} · {it.tag}</p>
                <p className="mt-3 text-[13px] leading-5 text-[#555555]">{it.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-[#fafaf9] p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">Decision 1 · Organic Valuation</p>
              <p className="mt-2 text-[13px] leading-5 text-[#555555]">
                Users intuitively linked the stylized &ldquo;Bonus&rdquo; label with a payout increase — even when
                the precise numerical payout was omitted.
              </p>
            </div>
            <div className="rounded-xl bg-[#fafaf9] p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">Decision 2 · Expiration Deadlines</p>
              <p className="mt-2 text-[13px] leading-5 text-[#555555]">
                Introducing expiration countdowns injected an organic sense of urgency, boosting completion speeds
                for short-fused tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="03 · Validation & Research" title="A/B surveying & live panels prove effectiveness." tone="dark" />
        <div className="mt-8 max-w-[720px] rounded-2xl border border-white/10 p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-white/40">Key Insight</p>
          <p className="mt-2 text-lg text-white/80">A clear price-increase signal triggers immediate cognitive enticement.</p>
          <p className="mt-2 text-sm leading-6 text-white/50">
            Shoppers consistently prioritized missions styled with active &ldquo;Bonus&rdquo; labels — even over
            higher baseline payouts lacking designated active-state highlights.
          </p>
        </div>
      </section>

      {/* Outcome */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="04 · Outcome & Impact" title="Scheduled deployment: Q4 2024." />
          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-[#dedcd4] bg-white p-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">Before</p>
              <p className="mt-1 text-sm font-medium text-ink">Passive email blasts with low engagement</p>
            </div>
            <span aria-hidden className="text-[#aaaaaa]">→</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">After</p>
              <p className="mt-1 text-sm font-medium text-ink">Active in-app bonus highlights driving completion</p>
            </div>
          </div>
          <div className="mt-8">
            <StatRow
              stats={[
                { value: "62%", label: "Preferred by Users", body: "Bonus-tagged missions chosen over non-bonus at a higher rate." },
                { value: "18%", label: "Completion Speed", body: "Faster completion when the bonus highlight is visible." },
                { value: "100%", label: "Scheduled Q4 2024", body: "Feature greenlit for production — fully approved for global rollout." },
              ]}
            />
          </div>
          <p className="mt-10 max-w-[720px] text-sm leading-6 text-[#767676]">
            With qualitative focus groups and quantitative surveying backing our design selections, the unified
            bonus presentation was integrated into the core product specification, slated to ship to our global
            &ldquo;bee&rdquo; user base in Q4 2024.
          </p>
        </div>
      </section>

      <CaseStudyNav currentSlug="mobee" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
