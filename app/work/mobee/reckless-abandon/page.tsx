import type { Metadata } from "next";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import { StatRow, Quote } from "@/components/case-study/Stat";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobee: Reckless Abandon — Case Study",
  description:
    "Mission abandonment back to normal levels after a 40% high — systematic root-cause analysis and cross-functional alignment rescued user retention.",
  alternates: { canonical: "/work/mobee/reckless-abandon" },
  openGraph: {
    title: "Mobee: Reckless Abandon — Case Study — Rishav Singh",
    description: "How systematic root-cause analysis rescued user retention after a 40% abandonment spike.",
    url: "/work/mobee/reckless-abandon",
  },
};

const HYPOTHESES = [
  "Hidden bugs introduced during the Survey Engine Rewrite",
  "OS-specific device compatibility / rendering issues",
  "Wifi and cellular packet-loss during massive image uploads",
  "Intentional exits due to changes in physical mission complexity",
  "Subtle changes in overall marketplace user behavior",
  "Submission failures where users assumed completion but the app dropped the queue",
  "Interference from botting or location-spoofing accounts",
];

const STREAMS = [
  {
    title: "UX Research & Design",
    body: "I established automated post-abandonment triggers prompting exit surveys. Over 50% of surveyed users reported leaving intentionally due to UI friction and sheer exhaustion, rather than random crash bugs.",
  },
  {
    title: "Engineering Systems",
    body: "Crashlytics parsing revealed two dozen critical upload and network timeout bugs that were systematically dropping valid survey files, forcing silent failures at the final submission gate.",
  },
  {
    title: "Operations Analysis",
    body: "Even long-standing, untouched legacy tasks saw abandonment double, confirming that the new unified survey engine container was applying systemic friction across the board.",
  },
];

export default function MobeeRecklessAbandonPage() {
  return (
    <main className="flex-1 bg-paper">
      <CaseStudyHero
        eyebrow="UX Research & Cross-Functional Leadership · Mobee · Reckless Abandon"
        title="Mission Abandonment Back to Normal Levels After 40% High"
        subtitle="How systematic root-cause analysis, cross-functional alignment, and critical user-flow refactoring successfully rescued user retention and brought mission abandonment back to baseline."
        pills={["📉 Back to 20% Normal Rate", "🤝 Cross-Functional Workshop", "🔧 50+ Fixes Shipped"]}
        backHref="/work/mobee"
        backLabel="Back to Mobee"
      />

      {/* Context */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">00 · The Challenge</p>
            <p className="mt-3 text-base font-semibold text-ink">Post-Release Drop Spikes</p>
            <p className="mt-2 text-[13px] leading-5 text-[#555555]">
              Following a major update, mission abandonment surged to an unsustainable 40%. Traditional bug reports
              showed no clear technical culprits, prompting a dedicated discovery effort.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">What Is Abandonment?</p>
            <p className="mt-3 text-base font-semibold text-ink">The 3-Hour Reservation Window</p>
            <p className="mt-2 text-[13px] leading-5 text-[#555555]">
              When a user reserves a mystery shop, they have 3 hours to submit the results. If they fail to finish,
              the task is abandoned and re-released, slowing real-time brand intelligence.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">Recovery Target</p>
            <p className="mt-3 text-2xl font-bold text-ink">40% → 20%</p>
            <p className="mt-1 text-[13px] leading-5 text-[#555555]">
              Through progressive optimizations and bug fixes, the target was to halve the overall abandonment rate
              back to standard healthy levels.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="01 · The Challenge" title="The post-release slump." tone="dark" />
        <p className="mt-4 max-w-[720px] text-base leading-[27px] text-white/60">
          We rolled out our ambitious &ldquo;Survey Engine Rewrite&rdquo; with clean QA runs, but immediately saw
          user completion rates fall off a cliff. Veteran mystery shoppers were abandoning tasks at twice their
          usual frequency, and our critical retail intelligence queues were backing up. Because abandonment can be
          triggered by a hard app crash, an obscure submission loop bug, or simply a user losing patience, the team
          was operating in the dark.
        </p>
        <div className="mt-8 max-w-[640px]">
          <Quote tone="dark" text="The rewrite looked flawless on paper, but in the field, we were bleeding 40% of active sessions. We had to find out if shoppers were encountering bugs, or if they were just giving up." />
        </div>
      </section>

      {/* Brainstorm */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="02 · The Brainstorm" title="Formulating hypotheses." />
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            I brought engineering, UX, and operational coordinators into an intensive workshop. We mapped out seven
            potential hypotheses for the sudden surge:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {HYPOTHESES.map((h) => (
              <li key={h} className="flex gap-2.5 rounded-xl border border-[#dedcd4] bg-white p-4 text-[13px] leading-5 text-[#555555]">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#888888]" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8 max-w-[640px]">
            <Quote text="We discovered that exactly 50% of the abandonment was entirely intentional behavior, driven by massive structural friction in our upload fallback system." />
          </div>
        </div>
      </section>

      {/* Hunting for truth */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="03 · Hunting for Truth" title="Triangulating quantitative and qualitative data." tone="dark" />
        <p className="mt-4 max-w-[720px] text-base leading-[27px] text-white/60">
          To validate our hypotheses, we split investigation streams across departments.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {STREAMS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-white/40">{s.title}</p>
              <p className="mt-3 text-sm leading-6 text-white/60">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <StatRow
            tone="dark"
            stats={[
              { value: "50%", label: "Intentional Dropouts", body: "Driven by exhausting in-store camera steps." },
              { value: "20+", label: "Edge Bugs Fixed", body: "Obscure photo pipeline crashes squashed." },
            ]}
          />
        </div>
      </section>

      {/* Solutions */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="04 · The Solutions" title="Refactoring the save-for-later flow." />
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            In massive physical stores, unstable cellular signals made live image uploads highly error-prone. While
            the old app silently logged a timeout failure as an abandon, the new design optimizes offline
            capabilities.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-[#dedcd4] bg-white p-5">
              <h3 className="text-sm font-semibold text-ink">The Save-for-Later Revamp</h3>
              <p className="mt-2 text-[13px] leading-5 text-[#555555]">
                We redesigned the save-for-later flow to act as an explicit offline vault. The app clearly
                emphasizes that the task is stored safely, and adds ticking visual timers to create a gentle sense
                of expiration urgency before the 3-hour window closes.
              </p>
            </div>
            <div className="rounded-xl border border-[#dedcd4] bg-white p-5">
              <h3 className="text-sm font-semibold text-ink">The Urgency UI Model</h3>
              <p className="mt-2 text-[13px] leading-5 text-[#555555]">
                By presenting at-risk point values prominently in the persistent drawer, we activated loss aversion.
                Shoppers who previously forgot to upload after leaving the store were now reminded of the literal
                cash reward waiting for submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="05 · Outcome" title="Stabilization at baseline levels." tone="dark" />
        <div className="mt-10">
          <StatRow
            tone="dark"
            stats={[
              { value: "20%", label: "Baseline Recovery", body: "Abandonment rates returned to our normal target baseline by December 2025." },
              { value: "-90%", label: "Product Quality", body: "Reported photo timeout tickets dropped dramatically following our offline retry mechanism." },
              { value: "2 Hours", label: "Uptime Recovered", body: "Reducing the reservation window from 3 to 2 hours unblocked idle tasks faster." },
            ]}
          />
        </div>
        <p className="mt-10 max-w-[720px] text-base leading-[27px] text-white/60">
          We never found a single &ldquo;boulder-sized&rdquo; issue during our multi-month discovery. Instead, the
          rewrite applied dozens of &ldquo;pebble and sand-sized&rdquo; friction points across devices, edge bugs,
          and messaging models. By progressively optimizing the interface and squashing minor timeout bugs, we
          successfully stabilized abandonment back to our normal 20% mark.
        </p>
        <div className="mt-8 max-w-[640px]">
          <Quote tone="dark" text="The lesson was clear: beautiful software is useless if cellular data loss silently locks your users out. Prioritizing resilience over cosmetic perfection saved our launch." />
        </div>
      </section>

      <CaseStudyNav currentSlug="mobee" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
