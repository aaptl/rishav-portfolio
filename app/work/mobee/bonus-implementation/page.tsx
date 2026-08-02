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

type Iteration = {
  badge: string;
  badgeColor: string;
  badgeBg: string;
  label: string;
  chip: string;
  title: string;
  body: string;
  focusTag: string;
  focusBg: string;
  screens: string[];
  boxes: { title: string; body: string; bg: string; border: string; titleColor: string }[];
  footer: string;
  final?: boolean;
};

const ITERATIONS: Iteration[] = [
  {
    badge: "Iteration A", badgeColor: "#D97706", badgeBg: "#FEF3C7",
    label: "Dollar amounts shown", chip: "Explicit",
    title: "Explicit Rewards",
    body: "Show exact bonus amounts and highlight featured missions to drive action.",
    focusTag: "Payout amount", focusBg: "#FEF9C3",
    screens: ["Mission screen", "Bonus detail", "Featured view"],
    boxes: [
      { title: "Works", body: "Strong incentive clarity motivates users.", bg: "#F0FDF4", border: "#BBF7D0", titleColor: "#166534" },
      { title: "Not ideal", body: "Too many elements compete for attention (visual noise).", bg: "#FFF7ED", border: "#FED7AA", titleColor: "#9A3412" },
    ],
    footer: "This version prioritizes explicit payout values and detailed bonus rules. It creates a clear hierarchy but risks adding visual noise.",
  },
  {
    badge: "Iteration B", badgeColor: "#DC2626", badgeBg: "#FEE2E2",
    label: "Simplified bonus tags", chip: "Simplified",
    title: "Simplified Hierarchy",
    body: "Reduce secondary details and visual weight to improve scanability and comparison.",
    focusTag: "Bonus tag only", focusBg: "#FEE2E2",
    screens: ["Mission screen", "Tag view", "Bonus detail"],
    boxes: [
      { title: "Works", body: "Cleaner interface, easier to scan and compare.", bg: "#F0FDF4", border: "#BBF7D0", titleColor: "#166534" },
      { title: "Not ideal", body: "Less context about featured status and expiry reduces urgency.", bg: "#FFF7ED", border: "#FED7AA", titleColor: "#9A3412" },
    ],
    footer: "This version uses simplified bonus tags and removes secondary details to reduce cognitive load and improve scanability.",
  },
  {
    badge: "Iteration C", badgeColor: "#16A34A", badgeBg: "#F0FDF4",
    label: "Final: balanced hierarchy", chip: "Final", final: true,
    title: "Balanced Hierarchy",
    body: "Combine clarity, motivation and urgency with a clean structure and progressive disclosure.",
    focusTag: "Bonus tag + deadline", focusBg: "#F0FDF4",
    screens: ["Mission screen", "Deadline view", "Bonus detail"],
    boxes: [
      { title: "Works", body: "Clear reward visibility · Featured badge · Countdown for urgency · Clean, scannable layout", bg: "#F0FDF4", border: "#BBF7D0", titleColor: "#166534" },
      { title: "Result", body: "Best balance of clarity, motivation and speed — reduces friction and drives more action.", bg: "#EFF6FF", border: "#BFDBFE", titleColor: "#1E40AF" },
    ],
    footer: "The final iteration balances clarity with brevity: explicit payout amounts are shown only when necessary, while deadlines are surfaced prominently.",
  },
];

function SectionNumber({ n }: { n: string }) {
  return (
    <span aria-hidden className="pointer-events-none absolute right-10 top-10 text-[160px] font-extrabold leading-none text-[#0F172A]/[0.03] sm:right-20">
      {n}
    </span>
  );
}

function PhonePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="h-[192px] w-[94px] rounded-[16px] border border-white/10 bg-[#111111] shadow-[0_16px_32px_-4px_rgba(0,0,0,0.25)]" />
      <p className="text-[11px] font-semibold text-[#94A3B8]">{label}</p>
    </div>
  );
}

export default function MobeeBonusImplementationPage() {
  return (
    <main className="flex-1 bg-white">
      <MobeeHero
        badge="Product Design & User Research Case Study"
        chapter="Mobee · Bonus Implementation"
        title="Money Talks: Fueling Mission Completion with Active In-App Bonuses"
        subtitle="Increased incentives are core to getting secret shopper missions completed quickly. We designed and validated an active, contextually-relevant in-app reward highlight system that directly targets user motivation when they are near stores."
        meta={["⏱ 4 Weeks", "👤 User Surveys & Live Panel", "🚀 Scheduled Q4 2024"]}
        visuals={[{ src: "/images/mobee/hero-bonus-implementation.png", alt: "Mobee — in-app bonus highlight mockup", width: 1536, height: 1024 }]}
      />
      <MobeeChapterNav current="bonus-implementation" />

      {/* Context */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <p className="text-base font-bold uppercase tracking-wide text-[#F58220]">00 - Context</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-[#475569]">My Role</p>
              <p className="mt-2 text-lg font-bold text-[#0F172A]">Lead Product Designer & Researcher</p>
              <p className="mt-2 text-[15px] leading-6 text-[#475569]">
                Led the visual design of the in-app bonus indicators, structured the A/B testing variations,
                executed the user validation surveys, and facilitated cross-functional panels.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-[#475569]">The Mission</p>
              <p className="mt-2 text-lg font-bold text-[#0F172A]">Targeted Incentive Awareness</p>
              <p className="mt-2 text-[15px] leading-6 text-[#475569]">
                Bridge the communication gap between off-site notifications and highly active, in-the-moment
                shopper decisions.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-[#F58220] bg-[#F58220]/10 p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-[#F58220]">Performance Verdict</p>
            <p className="mt-3 text-3xl font-extrabold text-[#F58220]">Highly Enticing</p>
            <p className="mt-2 text-sm leading-6 text-[#475569]">
              Bonus tags successfully triggered a clear association with organic price increases, making them the
              most claimed mission type in clinical panels.
            </p>
          </div>
        </div>
      </section>

      {/* 01 · Challenge */}
      <section className="relative border-y border-[#e2e8f0] bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="01" />
        <div className="relative">
          <SectionHeader eyebrow="01 · The Challenge" title="Passive notifications fail to inspire in-store action." />
          <p className="mt-4 max-w-[760px] text-base leading-[27px] text-[#555555]">
            Increased incentives are the primary lever to get secret shopper missions completed quickly. But
            notifying users (bees) is extremely difficult when they are on the move — traditional methods like
            broadcast emails and simple push notifications fall short. Because people are often not in a physical
            position to complete a mission when they read their emails, we needed a robust, highly active, and
            contextual in-app mechanism to capture their attention right at the point of decision.
          </p>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row">
            <div className="flex flex-col items-center gap-3 lg:w-[300px] lg:shrink-0">
              <div className="relative h-[366px] w-[300px] max-w-full overflow-hidden rounded-xl border border-[#bdbdbd] bg-white p-2.5 shadow-[0_4px_10px_rgba(95,95,95,0.25)]">
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image src="/images/mobee/bonus-email-exhibit.png" alt="Standard email broadcast for bonus rates" fill className="object-cover" />
                </div>
              </div>
              <p className="text-xs italic text-[#475569]">
                <strong className="font-bold not-italic">Exhibit 1.1: </strong>Standard email broadcast notifying
                user bases of ongoing localized bonus rates.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-5">
              <div className="rounded-2xl bg-[#0F172A] p-7">
                <p className="text-xl font-extrabold leading-[1.3] text-[#F8FAFC]">No Contextual Relevancy</p>
                <p className="mt-2 text-[15px] leading-6 text-[#94A3B8]">
                  &ldquo;Emails aren&apos;t contextually relevant — users might not be near a store when they see
                  the alert. We need a live indicator directly integrated on the active map and mission briefs.&rdquo;
                </p>
              </div>
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
                <p className="text-base italic leading-6 text-[#475569]">
                  The objective was clear: establish a visual system capable of co-existing with the legacy
                  &ldquo;Featured&rdquo; tags while highlighting bonus parameters (such as reward increments and
                  deadlines) dynamically.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-[#e2e8f0] pt-14">
            <p className="flex items-center gap-2.5 text-sm font-bold uppercase text-[#F58220]">
              <span aria-hidden className="h-2 w-2 rounded-full bg-[#F58220]" /> Research &amp; Discovery
            </p>
            <p className="mt-3 max-w-[720px] text-3xl font-extrabold leading-[1.15] text-[#0F172A] sm:text-4xl">
              Understanding the Bonus Landscape
            </p>
            <div className="mt-8 overflow-hidden rounded-lg border border-[#e6e6e6] shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <div className="relative h-[220px] sm:h-[340px] lg:h-[460px]">
                <Image src="/images/mobee/bonus-discovery-board.png" alt="Bonus ecosystem discovery board" fill className="object-cover" />
              </div>
            </div>
            <p className="mt-3 text-[13px] italic leading-6 text-[#475569]">
              <strong className="font-bold not-italic">Figure 4: </strong>Bonus ecosystem discovery board — mapping
              payout rules, automation coverage, and average reward values across mission types.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                { value: "$16,744", label: "Invested in bonuses over 6 months" },
                { value: "50%", label: "Of missions had automated bonus payouts" },
                { value: "50 pts", label: "Average bonus payout per mission" },
              ].map((s) => (
                <div key={s.label} className="rounded-[20px] border border-[#e2e8f0] bg-white p-6">
                  <p className="text-4xl font-extrabold leading-[1.1] text-[#0F172A]">{s.value}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#475569]">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[#F58220] bg-[#0F172A] p-7 shadow-[0_8px_24px_rgba(15,23,42,0.15)]">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase text-[#F58220]">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#F58220]" /> Insight
              </p>
              <p className="mt-2 text-xl font-extrabold leading-[1.3] text-[#F8FAFC]">
                Despite significant bonus investment, user awareness was inconsistent. The data confirmed we needed
                an in-app solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · Design Iterations */}
      <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="03" />
        <div className="relative">
          <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <div className="max-w-[720px]">
              <p className="flex items-center gap-2.5 text-sm font-bold uppercase text-[#F58220]">
                <span aria-hidden className="h-2 w-2 rounded-full bg-[#F58220]" /> Design Iterations
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-[#0F172A] sm:text-4xl lg:text-[44px]">
                Seeing is Believing: Structuring the Visual Hierarchy
              </h2>
              <p className="mt-4 text-base leading-[1.65] text-[#475569]">
                Instead of asking &ldquo;Which screen looks better?&rdquo; we asked{" "}
                <strong className="font-bold text-[#0F172A]">&ldquo;What information deserves attention
                first?&rdquo;</strong>
              </p>
            </div>
            <div className="w-full shrink-0 rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-5 lg:w-[220px]">
              <p className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6] text-white">🎯</span>
                Goal
              </p>
              <p className="mt-2 text-[13px] leading-6 text-[#475569]">
                Help users quickly identify valuable missions and their payouts without cognitive overload.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col divide-y divide-[#e2e8f0]">
            {ITERATIONS.map((it) => (
              <div key={it.badge} className="flex flex-col gap-6 py-10 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full px-3 py-1 text-[11px] font-bold uppercase" style={{ backgroundColor: it.badgeBg, color: it.badgeColor }}>
                    {it.badge}
                  </span>
                  {it.final && (
                    <span className="rounded-full bg-[#16A34A] px-2.5 py-1 text-[11px] font-bold uppercase text-white">Final</span>
                  )}
                  <p className="text-sm font-semibold text-[#64748B]">{it.label}</p>
                  <span className="ml-auto rounded-full px-3 py-1.5 text-[11px] font-bold uppercase" style={{ backgroundColor: it.badgeBg, color: it.badgeColor }}>
                    {it.chip}
                  </span>
                </div>
                <div className="flex flex-col gap-8 lg:flex-row">
                  <div className="flex flex-col gap-4 lg:w-[220px] lg:shrink-0">
                    <p className="text-2xl font-extrabold leading-[1.2] text-[#0F172A]">{it.title}</p>
                    <p className="text-[13px] leading-[1.65] text-[#475569]">{it.body}</p>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[11px] font-bold uppercase text-[#94A3B8]">Major focus</p>
                      <span className="w-fit rounded-lg px-3 py-1.5 text-[11px] font-bold" style={{ backgroundColor: it.focusBg, color: it.badgeColor }}>
                        {it.focusTag}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 lg:flex-1">
                    {it.screens.map((s) => (
                      <PhonePlaceholder key={s} label={s} />
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 lg:w-[220px] lg:shrink-0">
                    {it.boxes.map((b) => (
                      <div key={b.title} className="rounded-xl border p-4" style={{ backgroundColor: b.bg, borderColor: b.border }}>
                        <p className="text-[11px] font-bold uppercase" style={{ color: b.titleColor }}>{b.title}</p>
                        <p className="mt-1.5 text-xs leading-[1.6]" style={{ color: b.titleColor }}>{b.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[13px] leading-[1.65] text-[#64748B]">{it.footer}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 border-t border-[#e2e8f0] pt-6 text-sm italic leading-6 text-[#475569]">
            <strong className="font-bold not-italic">Figure 2.1: </strong>Evolution of the bonus tag states.
            Iteration testing focused on balancing clarity (displaying exact bonuses + time limits) against
            interface clutter.
          </p>

          <div className="mt-12">
            <p className="flex items-center gap-2.5 text-sm font-bold uppercase text-[#F58220]">
              <span aria-hidden className="h-2 w-2 rounded-full bg-[#F58220]" /> Key Insights
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">Decision 1 · Organic Valuation</p>
                <p className="mt-2 text-[13px] leading-5 text-[#555555]">
                  Users intuitively linked the stylized &ldquo;Bonus&rdquo; label with a payout increase — even when
                  the precise numerical payout was omitted.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">Decision 2 · Expiration Deadlines</p>
                <p className="mt-2 text-[13px] leading-5 text-[#555555]">
                  Introducing expiration countdowns injected an organic sense of urgency, boosting completion speeds
                  for short-fused tasks.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F58220] text-white">💡</span>
              <div>
                <p className="text-sm font-bold text-[#C2410C]">Key takeaway</p>
                <p className="mt-1.5 text-[13px] leading-[1.65] text-[#9A3412]">
                  Good hierarchy isn&apos;t about showing more — it&apos;s about showing what matters, when it
                  matters. The final design surfaces the right information at the right time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · Validation */}
      <section className="relative border-y border-[#e2e8f0] bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="04" />
        <div className="relative">
          <SectionHeader eyebrow="04 · Validation & Research" title="A/B surveying & live panels prove effectiveness." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[20px] border border-[#e2e8f0] bg-white p-6 shadow-[0_4px_10px_rgba(95,95,95,0.13)]">
              <p className="text-lg font-bold text-[#0F172A]">Survey Validation &amp; Enticement</p>
              <div className="relative mt-4 h-[220px] overflow-hidden rounded-lg">
                <Image src="/images/mobee/bonus-survey-results.png" alt="Survey validation results" fill className="object-contain" />
              </div>
              <p className="mt-4 border-t border-[#e2e8f0] pt-4 text-[13px] italic leading-5 text-[#475569]">
                <strong className="font-bold not-italic">Figure 3.1: </strong>Quantitative testing proved users
                favored bonus missions over normal and featured options across all primary price points.
              </p>
            </div>
            <div className="rounded-[20px] border border-[#e2e8f0] bg-white p-6 shadow-[0_4px_10px_rgba(95,95,95,0.13)]">
              <p className="text-lg font-bold text-[#0F172A]">Live User Panels &amp; Focus Group</p>
              <div className="relative mt-4 h-[220px] overflow-hidden rounded-lg">
                <Image src="/images/mobee/bonus-user-panel.png" alt="Live user panel session" fill className="object-contain" />
              </div>
              <p className="mt-4 border-t border-[#e2e8f0] pt-4 text-[13px] italic leading-5 text-[#475569]">
                <strong className="font-bold not-italic">Figure 3.2: </strong>Live panel documenting mission
                selection thought process and bonus design effectiveness.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-5 rounded-2xl bg-[#0F172A] p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F58220] text-xl">📈</span>
            <div>
              <p className="text-[11px] font-bold uppercase text-[#F58220]">Key Insight</p>
              <p className="mt-1 text-lg font-bold leading-[1.4] text-white">
                A clear price-increase signal triggers immediate cognitive enticement
              </p>
              <p className="mt-1.5 text-[13px] leading-6 text-[#94A3B8]">
                Shoppers consistently prioritized missions styled with active &ldquo;Bonus&rdquo; labels — even over
                higher baseline payouts lacking designated active-state highlights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 · Outcome */}
      <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="05" />
        <div className="relative">
          <SectionHeader eyebrow="05 · Outcome & Impact" title="Scheduled deployment: Q4 2024." />
          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-[#dedcd4] bg-[#F8FAFC] p-5">
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
          <div className="mt-8 rounded-[20px] border border-[#e2e8f0] bg-white p-8">
            <p className="text-xl font-bold text-[#0F172A]">Deployment Plan</p>
            <p className="mt-3 text-base leading-[1.6] text-[#475569]">
              With qualitative focus groups and quantitative surveying backing our design selections, the unified
              bonus presentation was integrated into the core product specification. The complete feature is slated
              to ship to our global &ldquo;bee&rdquo; user base in the fourth quarter of 2024.
            </p>
          </div>
        </div>
      </section>

      <CaseStudyNav currentSlug="mobee" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
