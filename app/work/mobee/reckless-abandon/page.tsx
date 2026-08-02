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
  "OS-specific device compatibility/rendering issues",
  "Wifi and Cellular packet-loss during massive image uploads",
  "Intentional exits due to changes in physical mission complexity",
  "Subtle changes in overall marketplace user behavior",
  "Submission failures where users assumed completion but the app dropped the queue",
  "Interference from botting or location-spoofing accounts",
];

const DEPARTMENTS = [
  { title: "UX Research & Design", body: "I established automated post-abandonment triggers prompting exit surveys. Over 50% of surveyed users reported leaving intentionally due to UI friction and sheer exhaustion, rather than random crash bugs." },
  { title: "Engineering Systems", body: "Crashlytics parsing revealed two dozen critical upload and network timeout bugs that were systematically dropping valid survey files, forcing silent failures at the final submission gate." },
  { title: "Operations Analysis", body: "Even long-standing, untouched legacy tasks saw abandonment double, confirming that the new unified survey engine container was applying systemic friction across the board." },
];

function SectionNumber({ n }: { n: string }) {
  return (
    <span aria-hidden className="pointer-events-none absolute right-10 top-10 text-[160px] font-extrabold leading-none text-[#0F172A]/[0.03] sm:right-20">
      {n}
    </span>
  );
}

export default function MobeeRecklessAbandonPage() {
  return (
    <main className="flex-1 bg-white">
      <MobeeHero
        badge="UX Research & Cross-Functional Leadership Case Study"
        chapter="Mobee · Reckless Abandon"
        title="Mission Abandonment Back to Normal Levels After 40% High"
        subtitle="How systematic root-cause analysis, cross-functional alignment, and critical user-flow refactoring successfully rescued user retention and brought mission abandonment back to baseline."
        meta={["📉 Back to 20% Normal Rate", "🤝 Cross-Functional Workshop", "🔧 50+ Fixes Shipped"]}
        visuals={[
          { src: "/images/mobee/hero-reckless-abandon-back.png", alt: "Mobee — rewards screen", width: 1176, height: 1562 },
          { src: "/images/mobee/hero-reckless-abandon-37211f.png", alt: "Mobee — achievements screen", width: 656, height: 1337 },
        ]}
      />
      <MobeeChapterNav current="reckless-abandon" />

      {/* Context */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <p className="flex items-center gap-2.5 text-sm font-bold uppercase text-[#F58220]">
          <span aria-hidden className="h-2 w-2 rounded-full bg-[#F58220]" /> 00 - Context
        </p>
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.2] text-[#0F172A] sm:text-4xl">
          The Spiking Abandonment Dilemma
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-[#475569]">The Challenge</p>
              <p className="mt-2 text-lg font-bold text-[#0F172A]">Post-Release Drop Spikes</p>
              <p className="mt-2 text-[15px] leading-6 text-[#475569]">
                Following a major update, mission abandonment surged to an unsustainable 40%. Traditional bug
                reports showed no clear technical culprits, prompting a dedicated discovery effort.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-[#475569]">What Is Abandonment?</p>
              <p className="mt-2 text-lg font-bold text-[#0F172A]">The 3-Hour Reservation Window</p>
              <p className="mt-2 text-[15px] leading-6 text-[#475569]">
                When a user reserves a mystery shop, they have 3 hours to submit the results. If they fail to
                finish, the task is abandoned and re-released, slowing real-time brand intelligence.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-[#F58220] bg-[#F58220]/10 p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-[#F58220]">Recovery Target</p>
            <p className="mt-3 text-5xl font-extrabold text-[#F58220]">40% → 20%</p>
            <p className="mt-3 text-base font-bold text-[#0F172A]">Halving abandonment back to baseline</p>
            <p className="mt-2 text-sm leading-6 text-[#475569]">
              Through progressive optimizations and bug fixes, the target was to halve the overall abandonment rate
              back to standard healthy levels.
            </p>
          </div>
        </div>
      </section>

      {/* 01 · Challenge */}
      <section className="relative border-y border-[#e2e8f0] bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="01" />
        <div className="relative">
          <SectionHeader eyebrow="01 · The Challenge" title="The post-release slump." />
          <div className="mt-10 flex flex-col items-center gap-10 lg:flex-row">
            <div className="flex flex-1 flex-col gap-5">
              <p className="text-lg leading-[1.6] text-[#0F172A]">
                We rolled out our ambitious &ldquo;Survey Engine Rewrite&rdquo; with clean QA runs, but immediately
                saw user completion rates fall off a cliff. Veteran mystery shoppers were abandoning tasks at twice
                their usual frequency, and our critical retail intelligence queues were backing up.
              </p>
              <p className="text-base leading-[1.6] text-[#475569]">
                Because abandonment can be triggered by either a hard app crash, an obscure submission loop bug, or
                simply a user losing patience and walking out of a physical store, the team was operating in the
                dark. We needed a systematic approach to segregate technical failure from behavioral friction.
              </p>
              <p className="border-l-4 border-[#D97706] pl-6 text-lg italic leading-[1.5] text-[#475569]">
                &ldquo;The rewrite looked flawless on paper, but in the field, we were bleeding 40% of active
                sessions. We had to find out if shoppers were encountering bugs, or if they were just giving
                up.&rdquo;
              </p>
            </div>
            <div className="w-full max-w-[420px] shrink-0 rounded-2xl border border-[#e2e8f0] bg-white p-5">
              <div className="relative h-[180px] overflow-hidden rounded-lg">
                <Image src="/images/mobee/reckless-fig1-chart.png" alt="Abandonment rate spike after May 2023 release" fill className="object-cover" />
              </div>
              <p className="mt-3 border-t border-[#e2e8f0] pt-3 text-[13px] italic leading-5 text-[#475569]">
                <strong className="font-bold not-italic">Figure 1: </strong>Abandonment rate increased dramatically
                following the May 2023 release, spiking to an unprecedented 40% before discovery launched.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · Brainstorm */}
      <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="02" />
        <div className="relative">
          <SectionHeader eyebrow="02 · The Brainstorm" title="Formulating hypotheses." />
          <div className="mt-10 flex flex-col-reverse items-center gap-10 lg:flex-row">
            <div className="w-full max-w-[420px] shrink-0 rounded-2xl border border-[#e2e8f0] bg-white p-5">
              <div className="relative h-[190px] overflow-hidden rounded-lg">
                <Image src="/images/mobee/reckless-fig2-matrix.png" alt="Cross-functional hypothesis mapping matrix" fill className="object-cover" />
              </div>
              <p className="mt-3 border-t border-[#e2e8f0] pt-3 text-[13px] italic leading-5 text-[#475569]">
                <strong className="font-bold not-italic">Figure 2: </strong>Cross-functional hypothesis mapping
                matrix utilized by our product, engineering, and operations teams to guide the quantitative
                discovery.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-5">
              <p className="text-lg leading-[1.6] text-[#0F172A]">
                I brought engineering, UX, and operational coordinators into an intensive workshop. We mapped out
                seven potential hypotheses for the sudden surge:
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {HYPOTHESES.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-[15px] leading-5 text-[#475569]">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F58220]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Turning insight */}
      <section className="bg-[#0B0F19] px-6 py-24 sm:px-10 lg:px-20">
        <p className="mx-auto max-w-[720px] text-center text-2xl italic leading-[1.6] text-white sm:text-3xl">
          &ldquo;We discovered that exactly 50% of the abandonment was entirely intentional behavior, driven by
          massive structural friction in our upload fallback system.&rdquo;
        </p>
      </section>

      {/* 03 · Hunting for truth */}
      <section className="relative border-y border-[#e2e8f0] bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="03" />
        <div className="relative">
          <SectionHeader eyebrow="03 · Hunting for Truth" title="Triangulating quantitative and qualitative data." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_480px]">
            <div className="flex flex-col gap-5">
              <p className="text-lg font-bold text-[#0F172A]">Collaborative Triangulation</p>
              <p className="text-base leading-[1.6] text-[#475569]">
                To validate our hypotheses, we split investigation streams across departments:
              </p>
              <div className="flex flex-col gap-5">
                {DEPARTMENTS.map((d) => (
                  <div key={d.title}>
                    <p className="text-sm font-bold text-[#F58220]">{d.title.toUpperCase()}</p>
                    <p className="mt-1.5 text-sm leading-[1.5] text-[#475569]">{d.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[20px] border border-[#e2e8f0] bg-[#F8FAFC] p-6">
              <p className="text-lg font-bold text-[#0F172A]">Key Insights Discovered</p>
              <div className="mt-4 flex flex-col divide-y divide-[#e2e8f0]">
                <div className="flex items-center gap-3 py-4 first:pt-0">
                  <p className="text-2xl font-extrabold text-[#F58220]">50%</p>
                  <p className="text-sm leading-5 text-[#475569]">Intentional Dropouts — driven by exhausting in-store camera steps.</p>
                </div>
                <div className="flex items-center gap-3 py-4 last:pb-0">
                  <p className="text-2xl font-extrabold text-[#D97706]">20+</p>
                  <p className="text-sm leading-5 text-[#475569]">Edge Bugs Fixed — obscure photo pipeline crashes squashed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · Solutions */}
      <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="04" />
        <div className="relative">
          <SectionHeader eyebrow="04 · The Solutions" title="Refactoring the save-for-later flow." />
          <p className="mt-4 max-w-[760px] text-lg leading-[1.6] text-[#0F172A]">
            Our primary behavioral discovery centered on the &ldquo;Save-for-Later&rdquo; option. In massive
            physical stores, unstable cellular signals made live image uploads highly error-prone. While the old
            app silently logged a timeout failure (abandon), the new design optimizes off-line capabilities:
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
              <p className="text-lg font-bold text-[#0F172A]">The Save-for-Later Revamp</p>
              <div className="relative mt-4 h-[160px] overflow-hidden rounded-lg">
                <Image src="/images/mobee/reckless-save-for-later.png" alt="Save-for-later offline vault redesign" fill className="object-cover" />
              </div>
              <p className="mt-4 text-sm leading-[1.5] text-[#475569]">
                We redesigned the save-for-later flow to act as an explicit off-line vault. The app clearly
                emphasizes that the task is stored safely, and adds ticking visual timers to create a gentle sense
                of expiration urgency before the 3-hour window closes.
              </p>
            </div>
            <div className="rounded-2xl border border-[#F58220] bg-[#FFF7ED] p-6">
              <p className="text-lg font-bold text-[#92400E]">The Urgency UI Model</p>
              <div className="relative mt-4 h-[160px] overflow-hidden rounded-lg">
                <Image src="/images/mobee/reckless-urgency-ui.png" alt="Urgency UI model with at-risk point values" fill className="object-cover" />
              </div>
              <p className="mt-4 text-sm leading-[1.5] text-[#92400E]">
                By presenting at-risk point values prominently in the persistent drawer, we activated loss aversion.
                Shoppers who previously forgot to upload after leaving the store were now reminded of the literal
                cash reward waiting for submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 · Outcome */}
      <section className="relative border-y border-[#e2e8f0] bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="05" />
        <div className="relative">
          <SectionHeader eyebrow="05 · Outcome" title="Stabilization at baseline levels." />
          <div className="mt-10 rounded-[20px] border border-[#e2e8f0] bg-white p-8">
            <p className="text-xl font-bold text-[#0F172A]">Steady Stabilization and Multi-Month Trajectory</p>
            <div className="mt-6 flex flex-col items-center gap-8 lg:flex-row">
              <div className="relative h-[220px] w-full overflow-hidden rounded-xl lg:h-[260px] lg:w-[420px] lg:shrink-0">
                <Image src="/images/mobee/reckless-stabilization-chart.png" alt="Multi-month abandonment stabilization chart" fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <p className="text-lg font-bold text-[#0F172A]">The Power of Minor Fixes</p>
                <p className="text-[15px] leading-[1.6] text-[#475569]">
                  We never found a single &ldquo;boulder-sized&rdquo; issue during our multi-month discovery.
                  Instead, we realized that the rewrite applied dozens of &ldquo;pebble and sand-sized&rdquo;
                  friction points across devices, edge bugs, and messaging models. By progressively optimizing the
                  interface and squashing minor timeout bugs, we successfully stabilized abandonment back to our
                  normal 20% mark.
                </p>
                <p className="text-sm italic leading-[1.5] text-[#475569]">
                  &ldquo;The lesson was clear: beautiful software is useless if cellular data loss silently locks
                  your users out. Prioritizing resilience over cosmetic perfection saved our launch.&rdquo;
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <StatRow
              stats={[
                { value: "20%", label: "Baseline Recovery", body: "Abandonment rates returned to our normal target baseline by December 2025." },
                { value: "-90%", label: "Product Quality", body: "Reported photo timeout tickets dropped dramatically following our offline retry mechanism." },
                { value: "2 Hours", label: "Uptime Recovered", body: "Reducing the reservation window from 3 to 2 hours unblocked idle tasks faster." },
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
