import type { Metadata } from "next";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import { StatRow, Quote } from "@/components/case-study/Stat";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trovex.ai — Case Study",
  description:
    "Designing the AI Practice Experience — a zero-to-one AI-powered sales practice platform, from Try Now entry point through live AI simulation to post-session coaching.",
  alternates: { canonical: "/work/trovex-ai" },
  openGraph: {
    title: "Trovex.ai — Case Study — Rishav Singh",
    description: "Designing the AI Practice Experience for an AI-powered sales roleplay platform.",
    url: "/work/trovex-ai",
  },
};

const OWNED = [
  "Product strategy & market positioning",
  "UX/IA, wireframes & high-fidelity flow layouts",
  "Scalable dark-mode design system from scratch",
  "A/B testing setup for 3 critical product hypotheses",
  "In-depth research: 12 sales rep & 6 L&D manager interviews",
];

const CONSTRAINTS = [
  "No existing design language or pattern library",
  "Highly unpredictable LLM latency & conversational quality",
  "Strict 6-month runway to close the first paying customer",
];

const GAPS = [
  {
    title: "Knowledge Does Not Transfer",
    body: "Reps easily absorb static course content, but freeze and fail to access it during high-pressure, live buyer pushback.",
  },
  {
    title: "Roleplay Does Not Scale",
    body: "Live practice requires high-touch 1-on-1 coaching. The average rep receives fewer than two genuine sessions a quarter.",
  },
  {
    title: "Feedback Arrives Too Late",
    body: "Quarterly performance reviews flag mistakes made months prior, making behavior correction extremely sluggish.",
  },
];

const PROBLEM_STATS = [
  { value: "$15B", label: "Addressable market in sales enablement" },
  { value: "87%", label: "Of rep training forgotten within 30 days" },
];

const PERSONAS = [
  {
    name: "Arjun, 28 · Account Executive · Fintech",
    quote: "I know what I should say. I just freeze when the client pushes back.",
    goals: ["Practice cold calls privately without scrutiny", "Build robust, automatic objection-handling muscle", "Get highly specific performance feedback"],
    frustrations: ["Fear of judgment from manager during practice", "Generic training content unrelated to local realities"],
  },
  {
    name: "Priya, 42 · L&D Director · Enterprise",
    quote: "I can build courses all day. Proving behavior change to my VP is where I struggle.",
    goals: ["Deploy highly scalable practice to 200+ reps", "Clearly prove program ROI and skill improvement", "Instantly identify skill gaps across the team"],
    frustrations: ["Zero actual engagement or behavior-change data", "Traditional coaching creates an extreme time bottleneck"],
  },
];

const PRINCIPLES = [
  {
    title: "Commit first, friction second",
    body: "Get users into the interactive practice loop immediately before asking for any personal details. Auth gates belong at peak motivation, not on entry.",
    applied: "Try Now sign-in placement",
  },
  {
    title: "Feedback is coaching, not scoring",
    body: "Every score or rating must map directly to a behavior the learner can actionably change tomorrow. A simple number without next steps is useless.",
    applied: "Post-session feedback report",
  },
  {
    title: "Trust through showing, not telling",
    body: "Users are highly skeptical of AI roleplay. The simulation interface must cleanly demonstrate conversational depth rather than claiming it on a landing page.",
    applied: "Try Now landing hierarchy",
  },
];

const CORE_LOOP = [
  { step: "1", title: "Choose scenario", body: "Browse industry scenarios categorized by distinct sales skill and difficulty level." },
  { step: "2", title: "Meet your persona", body: "Read the contextual background brief, understand target objectives, and constraints." },
  { step: "3", title: "Practice live", body: "Speak directly with the dynamically adaptive AI persona in real time." },
  { step: "4", title: "Get your report", body: "Receive exhaustive timestamped coaching feedback and diagnostic breakdowns." },
  { step: "5", title: "Launch next", body: "Instantly apply one key coaching insight and launch the next adaptive practice session." },
];

const AB_TESTS = [
  {
    title: "CTA Copy",
    result: "+23% LIFT",
    question: "“Practice Now” vs “Start Roleplay”",
    body: "Winner: Start Roleplay. The word \"Roleplay\" signals a structured professional activity with a defined beginning and end, significantly reducing open-ended performance anxiety.",
  },
  {
    title: "Sign-In Gate Placement",
    result: "18% ABANDON",
    question: "Where to place the Auth Wall?",
    body: "On landing: 67% abandonment. After scenario: 34% abandonment. At configuration: 18% abandonment — winner, gating at peak motivation.",
  },
  {
    title: "Simulation Screen Chrome",
    result: "+26PT IMMERSION",
    question: "Immersive V2 vs Ambient V1",
    body: "Removed the heavy, brand-forward gradient header for a clean conversation-first layout with a minimal context bar. Resulted in +26pt felt immersion and +18pt \"felt heard\" scores.",
  },
];

const COACHING_PILLARS = [
  {
    title: "Score with diagnosis",
    body: "Conversion probability indicators mapped across 4 core sub-dimensions: Knowledge, Competency, Confidence, and Persuasion.",
  },
  {
    title: "Personality archetype",
    body: "Reps are matched with dynamic named sales archetypes (e.g. Product Explainer, Trusted Advisor) outlining immediate growth vectors.",
  },
  {
    title: "Critical Moments",
    body: "Highly actionable, timestamped conversational pivots complete with actual transcripts, contextual AI corrections, and projected score gain.",
  },
  {
    title: "60-Sec Coaching Plan",
    body: "Exactly 2 highly customized, bite-sized tactical drills to complete before hopping on their very next live customer call.",
  },
];

const EDGE_CASES = [
  {
    title: "Welcome to Trovex.ai",
    body: "No Courses Assigned Yet — once a course is assigned to you, it will appear here. Your learning journey begins here.",
  },
  {
    title: "No Match Found",
    body: "We couldn't find anything that matches your search. Please try different keywords or adjust your filters.",
  },
  {
    title: "No Practice Courses Yet",
    body: "Once practice material is assigned, it will appear here.",
  },
  {
    title: "No Courses Submitted",
    body: "You haven't submitted any courses yet. Start learning and submit your progress here.",
  },
];

const KEY_TAKEAWAYS = [
  "Designing for AI means designing for uncertainty — every failure state is a trust-building opportunity.",
  "Behavior change requires practice, not information. The shift from quiz-based to conversation-based training drove 5× more engagement.",
  "Building foundations first costs weeks but saves months — the bottom-up architecture enabled consistent scaling across all product surfaces.",
];

const IMPACT_STATS = [
  { value: "45%", label: "Improvement in sales rep performance" },
  { value: "100+", label: "Companies using Trovex to train sales teams" },
  { value: "4.8★", label: "G2 rating with 50+ reviews" },
  { value: "5x", label: "Increase in practice frequency per rep per week" },
];

const SHIPPED = [
  "AI Sales Roleplay simulation end-to-end",
  "AI powered Live Mentor (in-call coaching)",
  "Post-Call Analysis & Coaching Reports",
  "Interactive Course Creation Wizard",
  "Leaderboards & Team Performance Tracking",
];

const BACKLOG = [
  "Mobile-responsive conversation interface",
  "AI Post-Sales Roleplays module",
  "Advanced compliance scoring dashboard",
  "AI Real Call Scoring integration",
];

export default function TrovexAiPage() {
  return (
    <main className="flex-1 bg-paper">
      <CaseStudyHero
        badge="Concept Case Study · Web Desktop"
        eyebrow="AI/ML Product / B2B SaaS · Product Design Case Study · 2025-2026"
        title="Designing the AI Practice Experience"
        subtitle="Led the zero-to-one design of an AI-powered sales practice platform — from public Try Now entry point through live AI simulation to post-session coaching report. Shipped to early access with measurable behavior change."
        pills={["2024-2025", "Web Desktop", "AI/ML Product, B2B SaaS, Zero-to-One"]}
        meta={[
          { label: "Role", value: "Lead Product Designer" },
          { label: "Team", value: "1 PM · 2 Devs · 1 AI Dev · CEO" },
          { label: "Verdict", value: "Shipped — “Behavior-Changing”" },
        ]}
        heroImage="/images/work-trovex.png"
        heroImageAlt="Trovex.ai — AI roleplay training platform hero with dashboard and live call UI"
      />

      {/* Role & Scope */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader eyebrow="00 · My Role & Scope" title="Lead Product Designer" />
            <p className="mt-4 max-w-[480px] text-base leading-[27px] text-[#555555]">
              Full end-to-end design ownership from public Try Now entry point through complex real-time AI
              conversation simulation to the interactive post-session feedback report.
            </p>
            <div className="mt-8 rounded-2xl border border-[#dedcd4] bg-white p-6">
              <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">Performance Verdict</p>
              <p className="mt-2 text-lg font-semibold text-ink">SHIPPED — &ldquo;Behavior-Changing&rdquo;</p>
              <p className="mt-2 text-[13px] leading-5 text-[#555555]">
                Validated via robust quantitative metrics in active early access cohorts. Reps averaged 5x more
                practice sessions per week compared to traditional coaching methods.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">What I Owned</p>
              <ul className="mt-4 space-y-2.5">
                {OWNED.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-[#333333]">
                    <span className="text-emerald-600">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">The Constraints</p>
              <ul className="mt-4 space-y-2.5">
                {CONSTRAINTS.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-[#333333]">
                    <span>⚠️</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="01 · The Problem" title="Sales training has not changed in 20 years. Practice is still missing." tone="dark" />
        <div className="mt-8 max-w-[640px]">
          <Quote tone="dark" text="I watch the training video, score 95% on the quiz, then blank completely on my next call." attribution="Amar Krishna, Founding Member at AI" />
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {GAPS.map((gap, i) => (
            <div key={gap.title} className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs font-bold text-white/40">GAP {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-base font-semibold text-white">{gap.title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-white/60">{gap.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <StatRow tone="dark" stats={PROBLEM_STATS} />
        </div>
      </section>

      {/* Field Research */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="02 · Field Research" title="Who we designed for, and what we learned." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PERSONAS.map((persona) => (
              <div key={persona.name} className="rounded-2xl border border-[#dedcd4] bg-white p-6">
                <p className="text-sm font-semibold text-ink">{persona.name}</p>
                <p className="mt-3 text-base italic leading-6 text-[#555555]">&ldquo;{persona.quote}&rdquo;</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[#888888]">Goals</p>
                <ul className="mt-1.5 space-y-1 text-[13px] text-[#555555]">
                  {persona.goals.map((g) => (
                    <li key={g}>• {g}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[#888888]">Frustrations</p>
                <ul className="mt-1.5 space-y-1 text-[13px] text-[#555555]">
                  {persona.frustrations.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-[#dedcd4] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">Key Research Insight</p>
            <p className="mt-2 text-base leading-6 text-ink">
              Psychological safety is the number 1 barrier. Reps hate roleplaying with managers because admitting
              failure threatens compensation. AI simulation completely removes fear of judgment.
            </p>
          </div>
          <p className="mt-4 text-xs text-[#888888]">
            Research note: 12 in-depth sales rep interviews · 6 enterprise L&amp;D manager interviews · exhaustive
            competitor analysis · 4 alternative tools audited
          </p>
        </div>
      </section>

      {/* Design Approach */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="03 · Design Approach" title="Three principles that shaped every decision." tone="dark" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs font-bold text-white/40">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-white/60">{p.body}</p>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-wide text-white/40">
                Applied to: {p.applied}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Loop */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="04 · The Core Loop" title="From choosing a scenario to receiving a coaching plan." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {CORE_LOOP.map((step) => (
              <div key={step.step} className="rounded-xl border border-[#dedcd4] bg-white p-5">
                <p className="text-xs font-bold text-[#888888]">{step.step}</p>
                <h3 className="mt-3 text-sm font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#555555]">{step.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#767676]">
            The entire loop runs in under 10 minutes. Most active reps complete 3 full sessions per week.
          </p>
        </div>
      </section>

      {/* A/B Testing */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="05 · A/B Testing & Data" title="Three experiments that shaped the product." tone="dark" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {AB_TESTS.map((test) => (
            <div key={test.title} className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-white/40">{test.title}</p>
              <p className="mt-3 text-2xl font-bold text-white">{test.result}</p>
              <p className="mt-2 text-sm font-medium text-white/70">{test.question}</p>
              <p className="mt-3 text-[13px] leading-5 text-white/50">{test.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coaching Feedback */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="06 · Coaching Feedback" title="Feedback that coaches, not just scores." />
          <p className="mt-4 max-w-[680px] text-base leading-[27px] text-[#555555]">
            We redesigned the post-session report around one question: what can the learner do differently tomorrow?
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COACHING_PILLARS.map((pillar, i) => (
              <div key={pillar.title} className="rounded-xl border border-[#dedcd4] bg-white p-5">
                <p className="text-xs font-bold text-[#888888]">{i + 1}</p>
                <h3 className="mt-3 text-sm font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#555555]">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Cases & System Resilience */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader
            eyebrow="07 · Edge Cases & System Resilience"
            title="Designing for the moments AI breaks."
          />
          <p className="mt-4 max-w-[680px] text-base leading-[27px] text-[#555555]">
            Every failure state was treated as a product moment — an opportunity to reassure, recover, or convert.
          </p>
          <div className="mt-8 rounded-2xl border border-[#dedcd4] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">Decision</p>
            <p className="mt-2 text-[15px] leading-6 text-ink">
              Every AI failure state was designed as a trust-building moment. Instead of hiding errors, we made
              recovery visible and coached users through uncertainty.
            </p>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {EDGE_CASES.map((state) => (
              <div key={state.title} className="rounded-xl border border-[#dedcd4] bg-white p-5">
                <h3 className="text-sm font-semibold text-ink">{state.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#555555]">{state.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-[#dedcd4] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">Trade-off</p>
            <p className="mt-2 text-[15px] leading-6 text-ink">
              We accepted higher latency on feedback generation to ensure accuracy. Users tolerated 2-3 second delays
              when the output quality was visibly better.
            </p>
          </div>
        </div>
      </section>

      {/* Impact & Outcomes */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="08 · Impact & Outcomes" title="What shipped, what moved." tone="dark" />
        <div className="mt-10">
          <StatRow tone="dark" stats={IMPACT_STATS} />
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">What Shipped</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-white/70">
              {SHIPPED.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">Still in Backlog</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-white/50">
              {BACKLOG.map((item) => (
                <li key={item}>○ {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 max-w-[640px]">
          <Quote
            tone="dark"
            text="Trovex has truly transformed our sales team's performance. With its AI-based role play simulator, our sales reps have honed their skills, tackled realistic scenarios, and received valuable feedback."
            attribution="Avinash Saurabh, Early Access Partner"
          />
        </div>
      </section>

      {/* Reflection */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="09 · Reflection" title="What I would do differently." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#dedcd4] bg-white p-6">
              <p className="text-sm font-bold text-ink">💡 What Worked</p>
              <p className="mt-3 text-[13px] leading-5 text-[#555555]">
                Leading with highly interactive simulation screens in early stakeholder reviews anchored our
                collective design vision. The &ldquo;commit first, friction second&rdquo; onboarding structure
                yielded massive conversion wins.
              </p>
            </div>
            <div className="rounded-2xl border border-[#dedcd4] bg-white p-6">
              <p className="text-sm font-bold text-ink">⚠️ What I Missed</p>
              <p className="mt-3 text-[13px] leading-5 text-[#555555]">
                Underinvested in the empty state experience for users who run through all available free trials.
                This dead-end screen accounted for 34% of all non-converting visitors.
              </p>
            </div>
            <div className="rounded-2xl border border-[#dedcd4] bg-white p-6">
              <p className="text-sm font-bold text-ink">🚀 What is Next</p>
              <p className="mt-3 text-[13px] leading-5 text-[#555555]">
                Designing a highly shareable performance summary &ldquo;badge card&rdquo; that empowers free tier
                users to organically showcase high scores on social platforms.
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-[640px] text-xl italic leading-[1.6] text-[#333333]">
            &ldquo;The best AI product design problem I have worked on was not the AI — it was the human on the
            other side of it.&rdquo;
          </p>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-ink px-6 py-16 sm:px-10 lg:px-20">
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- Key Takeaways</p>
        <ul className="mt-6 space-y-4">
          {KEY_TAKEAWAYS.map((item) => (
            <li key={item} className="max-w-190 text-lg leading-[1.6] text-white/80">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CaseStudyNav currentSlug="trovex-ai" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
