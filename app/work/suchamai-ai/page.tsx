import type { Metadata } from "next";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import { StatRow, Quote } from "@/components/case-study/Stat";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Suchamai AI — Case Study",
  description:
    "Designing AI systems that turn complex supply chains into decisions. An enterprise B2B case study for manufacturing planning and scheduling.",
  alternates: { canonical: "/work/suchamai-ai" },
  openGraph: {
    title: "Suchamai AI — Case Study — Rishav Singh",
    description: "Designing AI systems that turn complex supply chains into decisions.",
    url: "/work/suchamai-ai",
  },
};

const PROBLEMS = [
  { title: "Disconnected tools", body: "Excel, ERP, custom dashboards: none talk to each other." },
  { title: "High manual effort", body: "Analysts spend 60–80% of time cleaning, not deciding." },
  { title: "No actionable insights", body: "Data exists. Clarity doesn't. Outputs are reports, not decisions." },
  { title: "Slow decision cycles", body: "By the time the analysis lands, the planning window has closed." },
];

const PROBLEM_STATS = [
  { value: "6–8", label: "tools an analyst navigates per planning cycle" },
  { value: "4 hrs", label: "average time to generate one production plan manually" },
  { value: "0", label: "platforms that connected data, AI reasoning, and decision output in one flow" },
];

const PROCESS = [
  { title: "Discovery", body: "6 stakeholder interviews · 3 enterprise sites · contextual observation" },
  { title: "Synthesis", body: "Affinity mapping of pain points · journey mapping · insight clustering" },
  { title: "Ideation", body: "Design sprint with founders · 40+ concepts · rapid prototype sessions" },
  { title: "Iteration", body: "4 rounds of usability testing · weekly feedback loops with pilot users" },
];

const RESEARCH_QUOTES = [
  {
    text: "I spend the first two hours just getting the data into one place. By the time I can actually think, the window for the decision has passed.",
    attribution: "Senior Production Manager, Tier 1 Manufacturer",
  },
  {
    text: "We have dashboards, but they show me history. What I need is something that tells me what to do next.",
    attribution: "Operations Director, Manufacturing Group",
  },
  {
    text: "The AI tool we tried gave paragraphs. I need a table. I need a number. Something I can put in front of the board.",
    attribution: "Supply Chain Analyst, Enterprise Client",
  },
];

const RESEARCH_STATS = [
  { value: "18", label: "Interviews conducted" },
  { value: "6wk", label: "Research phase" },
  { value: "3", label: "Enterprise pilots" },
  { value: "40+", label: "Concepts explored" },
];

const FRAMEWORK_LAYERS = [
  {
    step: "Layer 01",
    title: "Login & Setup",
    tag: "Get Started Instantly",
    body: "A clean, enterprise login experience. No complex onboarding — sign in with your credentials and SAI is ready to assist with production planning from the first session.",
  },
  {
    step: "Layer 02",
    title: "AI Conversation",
    tag: "Talk to SAI",
    body: "SAI understands domain-specific language. Ask in plain language about production schedules, inventory constraints, or back-order prioritisation — and get structured responses instantly.",
  },
  {
    step: "Layer 03",
    title: "Structured Output",
    tag: "Decisions, Not Documents",
    body: "SAI converts conversational requests into structured production plans: batch numbers, machine assignments, norms, and manhour allocations — exported and linked for immediate action.",
  },
];

const KEY_EXPERIENCE_STEPS = [
  {
    step: "Step 01",
    title: "Brand-first onboarding experience",
    body: "The login screen reflects the Suchama AI brand identity — gradient background, clear logo, and a minimal form that gets users to SAI with zero friction.",
  },
  {
    step: "Step 02",
    title: "Conversational AI for planning",
    body: "SAI's chat interface makes complex production planning feel like a conversation. Users describe their constraints in plain language; SAI handles the structure.",
  },
  {
    step: "Step 03",
    title: "Structured plans ready to execute",
    body: "Production plans are surfaced as editable tables — batch numbers, machine types, norms, manhours — linked to source data and shareable with one click.",
  },
];

const DESIGN_DECISIONS = [
  {
    title: "Structured AI Output",
    body: "AI responses are never freeform paragraphs. Every output is broken into typed blocks: risk, impact, recommendation, and source, allowing users to scan, not read.",
    quote: "Structure creates trust. Freeform creates doubt.",
  },
  {
    title: "Cognitive Load Reduction",
    body: "The interface surfaces only what's needed at each decision point. Data density is managed through progressive disclosure: summary first, detail on demand.",
    quote: "A decision-maker's attention is the most finite resource.",
  },
  {
    title: "Progressive Disclosure",
    body: "Users see the risk summary first. Clicking any item reveals the affected SKUs. Clicking a SKU shows the raw data. The system rewards curiosity without punishing speed.",
    quote: "Not everyone needs every detail. Everyone needs the right summary.",
  },
];

const SCREENS = [
  { label: "01 · Login & Brand", tag: "Onboarding · Brand-first design" },
  { label: "02 · SAI Chat", tag: "AI layer · Conversational planning" },
  { label: "03 · Plan Output", tag: "Structured table · Shareable link" },
  { label: "04 · Planning Dashboard", tag: "Executive view · AI active · Live KPIs" },
];

const BRAND_COLORS = [
  { name: "Brand Blue", hex: "#2C6ACE", usage: "Primary · CTAs · Links" },
  { name: "Ice Blue", hex: "#EBF2FF", usage: "Light surface · Brand bg" },
  { name: "Soft Violet", hex: "#EEEAFF", usage: "Accent gradient · Hover" },
  { name: "Deep Navy", hex: "#0F1B2D", usage: "Headings · Display text" },
];

const OUTCOMES = [
  {
    title: "Simplified complex workflows",
    body: "Analysts moved from 4-hour cycles to sub-20-minute decision outputs.",
  },
  {
    title: "Improved clarity of AI outputs",
    body: "Structured output format reduced re-querying rate by removing ambiguity.",
  },
  {
    title: "Enabled faster decision-making",
    body: "Production decision velocity improved significantly across enterprise teams.",
  },
];

export default function SuchamaiAiPage() {
  return (
    <main className="flex-1 bg-paper">
      <CaseStudyHero
        eyebrow="AI Systems · Enterprise · B2B"
        title="Designing AI systems that turn complex supply chains into decisions."
        subtitle="Led end-to-end design for Suchama AI, transforming manufacturing data into structured, actionable insights for enterprise supply chain teams."
        pills={["AI-led planning", "Reduced manual workflows", "Faster decision cycles"]}
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Period", value: "Feb – Oct 2025" },
          { label: "Scope", value: "End-to-end" },
        ]}
        heroImage="/images/work-suchamai.png"
        heroImageAlt="Suchama AI — supply chain planning website and AI assistant interface"
      />

      {/* Problem */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="01 · Problem" title="Manufacturing decisions are buried in data." />
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            Enterprise supply chain teams sit on enormous datasets, but they&apos;re scattered across disconnected
            tools, formatted inconsistently, and never synthesised into a decision.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="rounded-xl border border-[#dedcd4] bg-white p-5">
                <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#555555]">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <StatRow stats={PROBLEM_STATS} />
          </div>
        </div>
      </section>

      {/* Research & Process */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="02 · Research & Process" title="Understanding the enterprise supply chain workflow." tone="dark" />
        <p className="mt-4 max-w-[760px] text-base leading-[27px] text-white/60">
          Research spanned six weeks of contextual interviews with production managers, supply chain analysts, and
          operations directors across three manufacturing enterprises — to understand not just the tools they use,
          but the mental models they rely on when making decisions.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <div key={p.title} className="rounded-xl border border-white/10 p-5">
              <p className="text-xs font-bold text-white/40">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-sm font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-white/50">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- Key Research Findings</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {RESEARCH_QUOTES.map((q) => (
              <Quote key={q.attribution} tone="dark" text={q.text} attribution={q.attribution} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <StatRow tone="dark" stats={RESEARCH_STATS} />
        </div>
      </section>

      {/* Core UX Challenge */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative mx-auto max-w-[720px] text-center">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">- 03 · Core UX Challenge</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.3] tracking-[-0.5px] text-ink sm:text-4xl">
            How do you make AI outputs clear enough to trust and act on?
          </h2>
          <p className="mt-6 text-base leading-[27px] text-[#555555]">
            Most AI tools produce verbose summaries. The real challenge was designing structured, explainable outputs
            that an operations director could act on in under two minutes, without needing to re-read the source
            data.
          </p>
        </div>
      </section>

      {/* Solution Framework */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="04 · Solution Framework" title="How SAI turns complexity into clarity." tone="dark" />
        <p className="mt-4 max-w-[720px] text-base leading-[27px] text-white/60">
          Three layers working in sequence — from raw manufacturing data to structured, actionable decisions — all
          through a single conversational interface.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {FRAMEWORK_LAYERS.map((layer) => (
            <div key={layer.step} className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-white/40">{layer.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{layer.title}</h3>
              <p className="mt-1 text-sm font-medium text-white/50">{layer.tag}</p>
              <p className="mt-3 text-[13px] leading-5 text-white/60">{layer.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Experience */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="05 · Key Experience" title="From data to decisions." />
          <div className="mt-10 space-y-5">
            {KEY_EXPERIENCE_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-2 rounded-2xl border border-[#dedcd4] bg-white p-6 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <p className="shrink-0 text-xs font-bold uppercase tracking-wide text-[#888888] sm:w-20">
                  {step.step}
                </p>
                <div>
                  <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-160 text-[13px] leading-5 text-[#555555]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Decisions */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="06 · Design Decisions" title="Three decisions that shaped the system." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {DESIGN_DECISIONS.map((d, i) => (
              <div key={d.title} className="rounded-2xl border border-[#dedcd4] bg-white p-6">
                <p className="text-xs font-bold text-[#888888]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-base font-semibold text-ink">{d.title}</h3>
                <p className="mt-3 text-[13px] leading-5 text-[#555555]">{d.body}</p>
                <p className="mt-4 border-l-2 border-[#dedcd4] pl-3 text-[13px] italic text-[#767676]">
                  &ldquo;{d.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Screens */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="07 · Product Screens" title="Curated product moments." tone="dark" />
        <p className="mt-4 max-w-[640px] text-base leading-[27px] text-white/60">
          Each screen earns its place. The system thinking is visible in their progression, not their quantity.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SCREENS.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 p-5">
              <p className="text-sm font-semibold text-white">{s.label}</p>
              <p className="mt-2 text-xs text-white/40">{s.tag}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[640px] text-sm leading-6 text-white/50">
          Every screen has one primary action and one primary insight. Multi-purpose screens fragment attention —
          each Suchama view is designed around a single decision moment.
        </p>
      </section>

      {/* Brand Identity */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="08 · Brand Identity" title="The Suchama AI brand language." />
          <p className="mt-4 max-w-[640px] text-base leading-[27px] text-[#555555]">
            A brand built for enterprise trust. The visual system balances technical credibility with approachable
            clarity.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BRAND_COLORS.map((c) => (
              <div key={c.name} className="flex items-center gap-3 rounded-xl border border-[#dedcd4] bg-white p-4">
                <span
                  aria-hidden
                  className="h-9 w-9 shrink-0 rounded-lg border border-[#dedcd4]"
                  style={{ backgroundColor: c.hex }}
                />
                <div>
                  <p className="text-sm font-medium text-ink">{c.name}</p>
                  <p className="text-xs text-[#888888]">
                    {c.hex} · {c.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#767676]">
            Typography: <span className="font-semibold text-ink">Sora Bold</span> for display &amp; headlines,{" "}
            <span className="font-semibold text-ink">Inter Regular</span> for UI &amp; body copy, and a monospace
            face for data values, SKUs and timestamps.
          </p>
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="09 · Outcome" title="From data to decisions, at enterprise scale." tone="dark" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {OUTCOMES.map((o) => (
            <div key={o.title}>
              <h3 className="text-base font-semibold text-white">{o.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">{o.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 max-w-[720px]">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- Reflection</p>
          <p className="mt-4 text-xl leading-[1.6] text-white/80">
            The hardest part of AI product design is not making the AI smarter. It&apos;s making its outputs
            structured enough that humans will act on them without second-guessing. Suchama proved that formatting
            is a UX decision — the system&apos;s intelligence was already there. What the design added was a
            framework for presenting that intelligence as decisions, not documents.
          </p>
        </div>
      </section>

      <CaseStudyNav currentSlug="suchamai-ai" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
