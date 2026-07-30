import type { Metadata } from "next";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import { StatRow, Quote } from "@/components/case-study/Stat";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pawle — Case Study",
  description:
    "Designing one ecosystem for everything a pet owner needs. A 0→1 product design case study: 195 screens, 23 flows, one coherent pet-care platform.",
  alternates: { canonical: "/work/pawle" },
  openGraph: {
    title: "Pawle — Case Study — Rishav Singh",
    description: "Designing one ecosystem for everything a pet owner needs.",
    url: "/work/pawle",
  },
};

const DELIVERABLES = [
  { value: "195", label: "Screens" },
  { value: "23", label: "User flows" },
  { value: "12", label: "Service types" },
  { value: "1", label: "Design system" },
  { value: "6", label: "Months duration" },
  { value: "4", label: "A/B tests run" },
];

const OWNED = [
  "Product Strategy",
  "Product Discovery",
  "User Research",
  "Product Architecture",
  "Design System",
  "UX Design",
  "UI Design",
  "Prototyping",
  "Design QA",
  "Developer Handoff",
];

const STRATEGY_PILLARS = [
  { label: "Market Gap", body: "No dominant pet platform in India's ₹12,000 Cr market." },
  { label: "Network Effects", body: "More pet owners → more service providers → better availability → more owners." },
  { label: "Retention Loops", body: "Book vet → set reminder → health record → next booking. One action pulls the next." },
  { label: "Monetisation", body: "Pawle Plus subscription + service commission + pharmacy margin + shop GMV." },
  {
    label: "North Star Metric",
    body: "Weekly Active Pet Owners — pet owners who use Pawle for at least one action per week.",
  },
];

const COMPETITIVE_TABLE = {
  columns: ["Pawle", "Supertails", "HUFT", "PetKonnect", "Standalone vet apps"],
  rows: [
    { dimension: "Vet Booking", covered: [true, false, false, true, true] },
    { dimension: "Grooming / Services", covered: [true, false, true, false, false] },
    { dimension: "Pet Shop", covered: [true, true, true, false, false] },
    { dimension: "Health Records", covered: [true, false, false, true, false] },
    { dimension: "Mating / Community", covered: [true, false, false, false, false] },
    { dimension: "Subscription Tier", covered: [true, true, false, false, false] },
  ],
};

const RESEARCH_STATS = [
  { value: "87%", label: "struggle to find same-day vet availability" },
  { value: "78%", label: "would pay for one unified pet app" },
  { value: "65%", label: "interested in pet matchmaking or breeding" },
  { value: "71%", label: "would spend ₹2,000+/month on pet care" },
];

const PERSONAS = [
  {
    name: "Priya, 29 · Mumbai · Dog Owner",
    quote: "I just want one place to book, track, and remember everything — without switching apps.",
    needs: ["Booking", "Care"],
  },
  {
    name: "Ravi, 34 · Bangalore · Groomer",
    quote: "If I can manage my schedule and client history in one place, I can focus on the pets.",
    needs: ["Availability", "Appointment", "Relationship"],
  },
];

const NAV_VERSIONS = [
  { version: "V1 — Failed", structure: "Home | Shop+Services | Match | Profile", note: "Services hidden from view" },
  { version: "V2 — Discarded", structure: "Home | Shop | Services+Match | Profile", note: "Match feature buried" },
  { version: "V3 — Shipped", structure: "Home | Shop | Services | Match | Profile", note: "✓ Shipped — 89% task success" },
];

const NAV_DECISIONS = [
  {
    decision: "Why Services became its own tab",
    alternative: "Everything inside Shop.",
    rejected: "Users mentally separate purchasing products from booking appointments.",
    outcome: "Higher discoverability. Lower task completion time.",
  },
  {
    decision: "Why Emergency bypasses the booking flow",
    alternative: "Treat emergency care like every other service.",
    rejected: "Emergency situations require immediate action — not form filling.",
    outcome: "Critical services accessible within seconds.",
  },
  {
    decision: "Why Pawle Match became its own experience",
    alternative: "Treat breeding as another service.",
    rejected: "Pet matchmaking is emotional rather than transactional. Mixing it with utility features confused users during testing.",
    outcome: "The experience feels intentional without disconnecting from the core product.",
  },
];

const COLOR_TOKENS = [
  { name: "Primary Blue", hex: "#3F8CC4", usage: "Main brand, CTAs" },
  { name: "Mating Pink", hex: "#E91E8C", usage: "Matchmaking sub-brand" },
  { name: "Health Green", hex: "#10B981", usage: "Verification, Success" },
  { name: "Action Red", hex: "#E7000B", usage: "Emergency, Critical" },
  { name: "Neutral-900", hex: "#101828", usage: "Primary Typography" },
  { name: "Neutral-600", hex: "#475467", usage: "Secondary labels" },
  { name: "Neutral-100", hex: "#F2F4F7", usage: "Dividers, light bgs" },
  { name: "Pure White", hex: "#FFFFFF", usage: "Card surfaces" },
];

const TYPOGRAPHY_SCALE = [
  {
    name: "Display",
    spec: "36 / 800",
    sample: "Design systems before screens.",
    className: "text-4xl font-extrabold",
  },
  {
    name: "Heading",
    spec: "24 / 600",
    sample: "A consistent hierarchy for every screen.",
    className: "text-2xl font-semibold",
  },
  {
    name: "Body",
    spec: "16 / 400",
    sample:
      "Body text is used for descriptions, helper text, and long-form content. It should be readable and comfortable at typical reading distances.",
    className: "text-base font-normal",
  },
  {
    name: "Caption",
    spec: "12 / 500",
    sample:
      "Caption text is used for metadata, timestamps, and secondary labels. It provides context without competing with primary content.",
    className: "text-xs font-medium",
  },
];

const SPACING_SCALE = [
  { px: 4, label: "xs", usage: "icon gaps" },
  { px: 8, label: "sm", usage: "label spacing" },
  { px: 12, label: "md", usage: "card internals" },
  { px: 16, label: "base", usage: "screen margins" },
  { px: 24, label: "xl", usage: "section breaks" },
  { px: 32, label: "2xl", usage: "component gaps" },
  { px: 48, label: "3xl", usage: "section padding" },
  { px: 64, label: "4xl", usage: "major breaks" },
];

const GRID_BREAKPOINTS = [
  { name: "Desktop", range: "1200px+", columns: 12 },
  { name: "Tablet", range: "768–1199px", columns: 8 },
  { name: "Mobile", range: "<768px", columns: 4 },
];

const COLOR_COMBINATIONS = [
  { name: "Primary Blue", hex: "#3F8CC4", usage: "Primary CTA", body: "Use for primary actions and emphasis.", badge: "✓" },
  { name: "Health Green", hex: "#10B981", usage: "Success state", body: "Use for verification and confirmation.", badge: "✓" },
  { name: "Mating Pink", hex: "#E91E8C", usage: "Match highlight", body: "Use for matchmaking emphasis.", badge: "✓" },
  {
    name: "Neutral-900",
    hex: "#101828",
    usage: "Primary text",
    body: "Use for headings and body copy.",
    badge: "✓",
    ratio: "14.1:1",
  },
  {
    name: "Neutral-600",
    hex: "#475467",
    usage: "Secondary label",
    body: "Use for helper text and metadata.",
    badge: "AA",
    ratio: "5.1:1",
  },
  {
    name: "Neutral-100",
    hex: "#F2F4F7",
    usage: "Divider / surface",
    body: "Use for subtle separation.",
    badge: "Fail",
    ratio: "2.1:1",
  },
];

const A11Y_STANDARDS = [
  { title: "Visible focus states", body: "Interactive elements show a clear focus ring for keyboard navigation." },
  { title: "Color contrast", body: "Text meets WCAG 2.1 AA requirements (4.5:1 normal, 3:1 large)." },
  { title: "Touch targets", body: "Interactive elements meet the 44×44px minimum touch target size." },
  { title: "Semantic HTML", body: "Proper HTML structure and ARIA attributes support assistive technologies." },
];

const PLATFORM_MODULES = [
  {
    number: "01",
    title: "Core Value Proposition",
    tag: "Utility Layer — 12 services. One mental model. Zero re-learning.",
    body: "Every booking flow uses the same wizard skeleton: Browse → Select → Date → Confirm. I designed this pattern first, then applied it to all 12 services. When Pharmacy launched, users already understood the pattern.",
    call: "Emergency Care breaks this pattern entirely — it skips the wizard and goes straight to a phone call. The 1.2-second time-to-action made that the only right answer.",
  },
  {
    number: "02",
    title: "The Differentiator — Pawle Match",
    tag: "The hardest problem wasn't matching pets.",
    body: "Pet matchmaking involves trust, compatibility and emotional decision making. Healthcare, shopping and booking are transactional. Pawle Match became its own contextual environment — a dedicated navigation structure, visual identity and interaction language.",
    call: "In testing, users kept accidentally navigating away during swiping. A dedicated 6-tab Mating nav eliminated this completely. It's not inconsistency — it's intentional context-switching.",
  },
  {
    number: "03",
    title: "First Impression",
    tag: "Acquisition Layer — I removed the biggest drop-off point before the user even signed up.",
    body: "Our original design required account creation before access. I removed it. Added a Skip option. Trust-before-commitment is how modern apps win — users explore first, then invest.",
    call: "Industry data shows mandatory signup gates reduce completion by 30-40%. The skip-first pattern was the single highest-leverage UX change in the project.",
  },
  {
    number: "04",
    title: "AI Prescription Parsing",
    tag: "The feature that differentiated the pharmacy module. AI-first, human-validated.",
    body: "Users photograph a prescription — a scanning animation analyzes it — and the app returns per-medicine confidence scores with editable fields for unrecognized items. Solution: a tiered confidence UI — green/amber/red per medicine.",
    call: "We chose to expose confidence scores instead of hiding them. This creates a clear expectation: the AI suggests, the user confirms.",
  },
  {
    number: "05",
    title: "The Services Pattern System",
    tag: "Designing 12 services with one mental model. Zero re-learning across service types.",
    body: "Every service uses the same 6-stage booking skeleton: Browse → Select → Date → Confirm → Management. Species compatibility, multi-pet rules, and live GPS are handled as optional layers on top of the core pattern, not as separate flows.",
    call: "By keeping the skeleton fixed, we reduced cognitive load and increased completion rates across all 12 services.",
  },
];

const FRICTION_CASES = [
  {
    title: "The GPS Tracking Debate",
    body: "I designed live location tracking for dog walkers — real-time GPS, parent can watch the walk live. Engineering estimated 6 weeks to build it safely. It got cut for v1. But it forced a better design: a live-updating \"walk progress\" card with distance and photos. Users in testing preferred it.",
    takeaway: "Sometimes the constraint makes the product better.",
  },
  {
    title: "The Social Feed I Abandoned",
    body: "There was a whole version of Pawle with a social feed — pet photos, community tips, \"Pets Near You.\" I designed 24 screens for it. Then I asked: what makes this sticky before there are 10,000 users? The answer was nothing. I removed all 24 screens.",
    takeaway: "Cutting features is a product skill. I removed 24 screens and the product got stronger.",
  },
  {
    title: "The Navigation that Tested Wrong",
    body: "Version 1 had 4 tabs. It felt clean. Then 12 users showed me that nobody looked for \"Boarding a dog\" under the shopping icon. I rebuilt the navigation. V2 had 5 tabs. Users found what they needed 4 steps faster.",
    takeaway: "Clean design can be wrong design. User testing saved me from shipping a beautiful mistake.",
  },
];

const REVENUE_DECISIONS = [
  {
    title: "Persistent cart badge in Shop",
    alternative: "Hide cart until checkout is initiated.",
    outcome: "Reduced friction to checkout → higher Shop GMV.",
    takeaway: "Lower friction → higher GMV.",
  },
  {
    title: "Prescription upload flow with AI parsing",
    alternative: "Manual entry only.",
    outcome: "Captures pharmacy margin at highest trust moment → higher conversion.",
    takeaway: "Faster trust → higher margin capture.",
  },
  {
    title: "Service booking confirmation with Add to Calendar + reminder",
    alternative: "Email-only confirmation.",
    outcome: "Drives repeat booking rate → higher service commission.",
    takeaway: "Higher retention → higher commission.",
  },
  {
    title: "Pawle Plus upsell gates on health records and priority vet slots",
    alternative: "Free access to premium features.",
    outcome: "Drives subscription conversion → higher recurring revenue.",
    takeaway: "Clear value → higher conversion.",
  },
];

const AB_TESTS = [
  { hypothesis: "5-tab vs 4-tab navigation", metric: "28% better task success", winner: "5-tab navigation" },
  { hypothesis: "Skip-gate vs hard-gate onboarding", metric: "34% higher activation", winner: "Skip for now option" },
  { hypothesis: "Category chips vs alphabetical list", metric: "4x faster discovery", winner: "Visual category chips" },
  { hypothesis: "Heart icon vs text 'Like'", metric: "94% recognition", winner: "Iconic heart" },
];

const PROJECTED_METRICS = [
  {
    value: "40%",
    label: "Weekly Active Pet Owners",
    body: "Target: 40% of registered users active weekly by month 3 — the strongest signal of value and retention.",
  },
  {
    value: ">72%",
    label: "Service Booking Completion Rate",
    body: "High completion means trust, fewer drop-offs, and more revenue.",
  },
  {
    value: ">55%",
    label: "Month-3 Retention",
    body: "Retention is the best predictor of long-term growth and LTV.",
  },
];

const ROADMAP = [
  {
    phase: "Phase 1 · 3 months",
    title: "Live GPS Walk Tracking",
    body: "The feature engineering scoped at 6 weeks that was cut from v1. Architecture is now in place. Drives daily active usage more than anything else.",
  },
  {
    phase: "Phase 2 · 6 months",
    title: "Community Social Layer",
    body: "Not a feed. A context-aware social graph — pets near you based on location, breed compatibility, and service history. This is where network effects begin.",
  },
  {
    phase: "Phase 3 · 12 months",
    title: "Pawle Plus Tier 2 with AI Health",
    body: "Photo your pet, receive triage guidance and medication recommendations. Turns Pawle from a booking app into a health companion.",
  },
];

const REFLECTIONS = [
  { title: "Systems outperform screens", body: "Every reusable decision compounds over time." },
  { title: "Product architecture is UX", body: "Information architecture influences behaviour long before visual design does." },
  { title: "Great products are defined by exclusion", body: "Removing complexity created a faster, clearer and more scalable experience." },
  { title: "Consistency is the strongest pattern", body: "A consistent system reduces cognitive load and makes the product feel more reliable." },
  {
    title: "Accessibility is a design constraint, not a QA checkbox",
    body: "Designed to WCAG AA from day one — 4.5:1 minimum contrast, 44pt minimum touch targets, iOS safe area compliance, and screen reader-compatible component names.",
  },
];

export default function PawlePage() {
  return (
    <main className="flex-1 bg-paper">
      <CaseStudyHero
        badge="Concept Project · Not in Production"
        eyebrow="PRODUCT DESIGN CASE STUDY · 2025"
        title="Designing one ecosystem for everything a pet owner needs"
        subtitle="Pawle brings veterinary care, pet services, commerce, health records and community into a single product, reducing fragmented experiences across the pet care journey."
        pills={["195 screens", "23 flows", "One coherent product"]}
        meta={[
          { label: "Duration", value: "6 Months" },
          { label: "Platform", value: "iOS" },
          { label: "Scope", value: "0 → 1 Product" },
          { label: "Team", value: "Founders · Engineering · Product" },
        ]}
        heroImage="/images/work-pawle.png"
        heroImageAlt="Pawle pet care app — mobile booking, health overview, and shop screens"
      />

      {/* My Role */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeader eyebrow="00 · My Role" title="I owned every discipline." />
            <p className="mt-6 max-w-[440px] text-base leading-[27px] text-[#555555]">
              Worked closely with the founding team to shape the product from concept to production.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {OWNED.map((item) => (
                <span key={item} className="rounded-full border border-[#dedcd4] px-3.5 py-1.5 text-xs text-[#555555]">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">Deliverables — by the numbers</p>
            <div className="mt-6">
              <StatRow stats={DELIVERABLES} />
            </div>
            <div className="mt-10 rounded-2xl border border-[#dedcd4] bg-white p-6">
              <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">Outcome</p>
              <p className="mt-2 text-base leading-[26px] text-ink">
                Designed and delivered a scalable, production-ready platform that powers the entire pet ecosystem
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breath quote */}
      <section className="bg-ink px-6 py-24 sm:px-10 lg:px-20">
        <p className="mx-auto max-w-[720px] text-center text-2xl font-medium leading-[1.5] text-white sm:text-3xl">
          The opportunity wasn&apos;t another pet app. It was replacing six disconnected experiences with one
          cohesive product.
        </p>
      </section>

      {/* Product Strategy */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="01 · Product Strategy" title="One ecosystem for every pet service, one trusted experience." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#dedcd4] bg-[#dedcd4] sm:grid-cols-2 lg:grid-cols-5">
            {STRATEGY_PILLARS.map((p) => (
              <div key={p.label} className="bg-white p-6">
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#888888]">{p.label}</p>
                <p className="mt-3 text-sm leading-5 text-[#333333]">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-[720px]">
            <Quote text="I added this framework after realising I was designing features without a filter. Every decision had to pass: does this increase weekly active pet owners?" />
          </div>

          <div className="mt-20">
            <SectionHeader eyebrow="Competitive Positioning" title="The only platform that covers every pet need — from vet visits to community." />
            <p className="mt-4 max-w-[640px] text-base leading-[27px] text-[#555555]">
              Existing players focus on one or two verticals. Pawle is the first ecosystem that integrates booking,
              services, commerce, health records, and community — creating a sticky experience that keeps pet owners
              coming back.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-[#dedcd4]">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#dedcd4] bg-[#fafaf9] text-left">
                    <th className="p-4 font-medium text-[#888888]">Dimensions</th>
                    {COMPETITIVE_TABLE.columns.map((c) => (
                      <th key={c} className="p-4 text-center font-semibold text-ink">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPETITIVE_TABLE.rows.map((row) => (
                    <tr key={row.dimension} className="border-b border-[#dedcd4] last:border-0">
                      <td className="p-4 font-medium text-[#333333]">{row.dimension}</td>
                      {row.covered.map((yes, i) => (
                        <td key={i} className="p-4 text-center">
                          {yes ? <span className="text-emerald-600">✓</span> : <span className="text-[#dedcd4]">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#888888]">
              Note: Pawle is the only platform that covers all dimensions — creating a cohesive experience that
              reduces fragmentation and increases retention.
            </p>
          </div>
        </div>
      </section>

      {/* Field Research */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="02 · Field Research" title="Research changed our assumptions." tone="dark" />
        <p className="mt-4 max-w-[560px] text-sm text-white/50">In-depth interviews · 4 cities · 2 weeks</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Quote
            tone="dark"
            text="I have four apps on my phone just for my dog. The vet booking app, the food delivery app, the grooming WhatsApp chat, and one for vaccination records. It's genuinely exhausting."
            attribution="Priya S., 29, Mumbai, Labrador owner"
          />
          <Quote
            tone="dark"
            text="I don't know who to trust. Anyone can make an app and call themselves a verified vet."
            attribution="Arjun M., 24, Bangalore, first-time cat owner"
          />
        </div>

        <div className="mt-14">
          <StatRow tone="dark" stats={RESEARCH_STATS} />
        </div>

        <p className="mt-10 max-w-[760px] text-base leading-[27px] text-white/70">
          The interviews revealed something different. People weren&apos;t looking for another marketplace. They
          were exhausted by switching between disconnected products throughout a pet&apos;s lifecycle. This shifted
          the design challenge from finding better services to creating one trusted operating system.
        </p>

        <div className="mt-16">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">
            - The People I Designed For
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Two very different mental models. One product.</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {PERSONAS.map((persona) => (
              <div key={persona.name} className="rounded-2xl border border-white/10 p-6">
                <p className="text-sm font-semibold text-white">{persona.name}</p>
                <p className="mt-3 text-base italic leading-6 text-white/70">&ldquo;{persona.quote}&rdquo;</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {persona.needs.map((need) => (
                    <span key={need} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">
                      {need}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-[720px] text-sm leading-6 text-white/50">
            By mapping the two journeys, we created a product where every feature serves both sides — without
            duplicating effort or introducing friction.
          </p>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="03 · Information Architecture" title="Architecture became the product." />
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            Most marketplace apps organize features around business categories. Users don&apos;t think that way. Pet
            owners think in moments — &lsquo;My pet needs help&rsquo;, &lsquo;My pet needs food&rsquo;, &lsquo;My pet
            needs a companion&rsquo;. The navigation was organized around user intent, not business verticals.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {NAV_VERSIONS.map((nav) => (
              <div key={nav.version} className="rounded-xl border border-[#dedcd4] bg-white p-5">
                <p className="text-sm font-bold text-ink">{nav.version}</p>
                <p className="mt-3 font-mono text-xs text-[#767676]">{nav.structure}</p>
                <p className="mt-3 text-[13px] text-[#555555]">{nav.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-[760px] text-sm leading-6 text-[#555555]">
            Emergency was never in the booking wizard. I made it a permanent banner. Discovery time dropped from 8
            seconds to 1.2 seconds — a life-safety decision.
          </p>

          <div className="mt-16">
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">- Product Decisions</p>
            <h3 className="mt-4 text-2xl font-semibold text-ink">Every navigation decision had a reason.</h3>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {NAV_DECISIONS.map((d, i) => (
                <div key={d.decision} className="rounded-2xl border border-[#dedcd4] bg-white p-6">
                  <p className="text-xs font-bold text-[#888888]">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-3 text-base font-semibold text-ink">{d.decision}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[#888888]">Alternative</p>
                  <p className="mt-1 text-[13px] text-[#555555]">{d.alternative}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[#888888]">Why rejected</p>
                  <p className="mt-1 text-[13px] text-[#555555]">{d.rejected}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[#888888]">Outcome</p>
                  <p className="mt-1 text-[13px] font-medium text-ink">{d.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="Design System" title="Systems before screens." tone="dark" />
        <p className="mt-4 max-w-[720px] text-base leading-[27px] text-white/60">
          Rather than designing screens independently, the product was built from a reusable system first. Every
          colour became a token. Every spacing value became a scale. Every interaction became reusable — allowing
          191 screens to be designed with minimal visual drift.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COLOR_TOKENS.map((token) => (
            <div key={token.name} className="flex items-center gap-4 rounded-xl border border-white/10 p-4">
              <span
                aria-hidden
                className="h-10 w-10 shrink-0 rounded-lg border border-white/10"
                style={{ backgroundColor: token.hex }}
              />
              <div>
                <p className="text-sm font-medium text-white">{token.name}</p>
                <p className="text-xs text-white/40">
                  {token.hex} · {token.usage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Typography Scale */}
        <div className="mt-16">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- Typography Scale</p>
          <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
            {TYPOGRAPHY_SCALE.map((type) => (
              <div key={type.name} className="p-6">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-[#3F8CC4]">{type.name}</p>
                  <p className="text-xs text-white/40">{type.spec}</p>
                </div>
                <p className={`mt-3 max-w-[720px] text-white ${type.className}`}>{type.sample}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Component Library Sample */}
        <div className="mt-16">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- Component Library Sample</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm font-semibold text-[#3F8CC4]">Primary Button</p>
              <p className="text-xs text-white/40">Default / Pressed / Disabled</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <span className="rounded-xl bg-[#3F8CC4] px-5 py-3 text-sm font-medium text-white">Confirm</span>
                <span className="rounded-xl bg-[#1D4ED8] px-5 py-3 text-sm font-medium text-white">Confirm</span>
                <span className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white/30">Confirm</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm font-semibold text-[#3F8CC4]">Service Card</p>
              <p className="text-xs text-white/40">Available / Booked</p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                  <div>
                    <p className="text-sm font-medium text-white">Nail Trim</p>
                    <p className="text-xs text-white/40">15 min • $25</p>
                  </div>
                  <span className="rounded-full bg-[#10B981]/15 px-3 py-1 text-xs font-medium text-[#10B981]">
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                  <div>
                    <p className="text-sm font-medium text-white">Bath &amp; Brush</p>
                    <p className="text-xs text-white/40">45 min • $65</p>
                  </div>
                  <span className="rounded-full bg-[#E7000B]/15 px-3 py-1 text-xs font-medium text-[#E7000B]">
                    Booked
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm font-semibold text-[#3F8CC4]">Input Field</p>
              <p className="text-xs text-white/40">Empty / Filled / Error</p>
              <div className="mt-5 space-y-3">
                <input
                  disabled
                  placeholder="Email address"
                  className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white/40 placeholder:text-white/40"
                />
                <input
                  disabled
                  value="alex@pawle.com"
                  className="w-full rounded-xl border border-[#3F8CC4] bg-transparent px-4 py-3 text-sm text-white"
                  readOnly
                />
                <div>
                  <input
                    disabled
                    value="invalid"
                    className="w-full rounded-xl border border-[#E7000B] bg-transparent px-4 py-3 text-sm text-white"
                    readOnly
                  />
                  <p className="mt-1.5 text-xs text-[#E7000B]">Please enter a valid email.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm font-semibold text-[#3F8CC4]">Tab Bar</p>
              <p className="text-xs text-white/40">Active / Inactive</p>
              <div className="mt-5 flex gap-2">
                {["Home", "Bookings", "Profile"].map((tab, i) => (
                  <span
                    key={tab}
                    className={`flex-1 rounded-xl py-3 text-center text-xs font-medium ${
                      i === 0 ? "border border-[#3F8CC4] text-[#3F8CC4]" : "text-white/40"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Spacing System */}
        <div className="mt-16">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- Spacing System</p>
          <p className="mt-4 max-w-[640px] text-sm text-white/50">
            A 4px base unit. Every spacing value is a multiple of 4px.
          </p>
          <div className="mt-6 flex flex-wrap items-end gap-6 rounded-2xl border border-white/10 p-6">
            {SPACING_SCALE.map((step) => (
              <div key={step.px} className="flex flex-col items-center gap-2">
                <div
                  aria-hidden
                  className="w-6 rounded-sm bg-[#3F8CC4]"
                  style={{ height: `${Math.min(step.px, 64)}px` }}
                />
                <p className="text-xs text-white/50">{step.px}px</p>
                <p className="text-[10px] uppercase tracking-wide text-white/30">
                  {step.label} · {step.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System — Reference Appendix */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative space-y-16">
          <div>
            <SectionHeader
              eyebrow="Color Accessibility &amp; Combinations"
              title="Pairings are designed to meet WCAG 2.1 AA contrast requirements."
            />
            <p className="mt-4 max-w-[640px] text-base leading-[27px] text-[#555555]">
              Use these combinations for text on backgrounds.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {COLOR_COMBINATIONS.map((combo) => (
                <div key={combo.usage} className="rounded-2xl border border-[#dedcd4] bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="h-8 w-8 shrink-0 rounded-lg border border-[#dedcd4]"
                      style={{ backgroundColor: combo.hex }}
                    />
                    <div>
                      <p className="text-sm font-medium text-ink">{combo.name}</p>
                      <p className="text-xs text-[#888888]">{combo.hex}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-ink">{combo.usage}</p>
                  <p className="mt-1 text-[13px] text-[#555555]">{combo.body}</p>
                  <p
                    className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                      combo.badge === "Fail"
                        ? "bg-red-50 text-red-600"
                        : combo.badge === "AA"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {combo.badge}
                    {combo.ratio && <span className="text-[#888888]">Ratio: {combo.ratio}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Responsive Grid System" title="A 12-column grid that adapts across breakpoints." />
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {GRID_BREAKPOINTS.map((bp) => (
                <div key={bp.name} className="rounded-2xl border border-[#dedcd4] bg-white p-6">
                  <div className="flex items-baseline justify-between">
                    <p className="text-sm font-bold text-ink">{bp.name}</p>
                    <p className="text-xs text-[#888888]">{bp.range}</p>
                  </div>
                  <p className="mt-1 text-xs text-[#888888]">{bp.columns} columns</p>
                  <div className="mt-4 grid gap-1" style={{ gridTemplateColumns: `repeat(${bp.columns}, 1fr)` }}>
                    {Array.from({ length: bp.columns }).map((_, i) => (
                      <span key={i} aria-hidden className="h-8 rounded-sm bg-[#3F8CC4]/20" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Accessibility Standards" title="Key accessibility best practices implemented across the system." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {A11Y_STANDARDS.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-[#dedcd4] bg-white p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-[13px] text-[#555555]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="Platform Modules" title="I want to show you how I think, not just what I made." />
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            I could show you all 23 flows. Instead I&apos;ll show you the five that taught me the most about product
            design.
          </p>
          <div className="mt-10 space-y-5">
            {PLATFORM_MODULES.map((mod) => (
              <article key={mod.number} className="rounded-2xl border border-[#dedcd4] bg-white p-7 sm:p-8">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-xs font-bold text-[#888888]">{mod.number}</span>
                  <h3 className="text-xl font-semibold text-ink">{mod.title}</h3>
                </div>
                <p className="mt-2 text-sm font-medium text-[#767676]">{mod.tag}</p>
                <p className="mt-4 max-w-[760px] whitespace-pre-line text-[15px] leading-[26px] text-[#333333]">
                  {mod.body}
                </p>
                <div className="mt-5 rounded-xl bg-[#fafaf9] p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">Hardest Call</p>
                  <p className="mt-1.5 text-[13px] leading-5 text-[#555555]">{mod.call}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Decisions, tradeoffs & friction */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="Decisions, Tradeoffs & Friction" title="Constraints shaped the product." tone="dark" />
        <p className="mt-4 max-w-[720px] text-base leading-[27px] text-white/60">
          Every decision balanced user needs against technical reality: MVP launch timeline, a small founding team,
          React Native implementation, marketplace complexity and limited engineering bandwidth.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {FRICTION_CASES.map((c, i) => (
            <div key={c.title} className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs font-bold text-white/40">CASE {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{c.body}</p>
              <p className="mt-4 text-sm font-medium text-white/80">→ {c.takeaway}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue decisions */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="Design Decisions That Drove Revenue" title="Great UX and business outcomes aren't in conflict." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {REVENUE_DECISIONS.map((d, i) => (
              <div key={d.title} className="rounded-2xl border border-[#dedcd4] bg-white p-6">
                <p className="text-xs font-bold text-[#888888]">CASE {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-base font-semibold text-ink">{d.title}</h3>
                <p className="mt-3 text-[13px] text-[#555555]">
                  <span className="font-medium text-[#888888]">Alternative:</span> {d.alternative}
                </p>
                <p className="mt-1.5 text-[13px] text-[#555555]">
                  <span className="font-medium text-[#888888]">Outcome:</span> {d.outcome}
                </p>
                <p className="mt-3 text-[13px] font-medium text-ink">→ {d.takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A/B Testing */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="A/B Testing" title="Every hypothesis was a bet." tone="dark" />
        <p className="mt-4 max-w-[640px] text-base leading-[27px] text-white/60">
          I ran four controlled tests. I was wrong once. That wrong answer taught me more than the three right ones.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AB_TESTS.map((t, i) => (
            <div key={t.hypothesis} className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs font-bold text-white/40">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-sm font-medium text-white">{t.hypothesis}</p>
              <p className="mt-4 text-2xl font-bold text-white">{t.metric.split(" ")[0]}</p>
              <p className="text-xs text-white/50">{t.metric.split(" ").slice(1).join(" ")}</p>
              <p className="mt-4 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-center text-[11px] font-medium text-emerald-300">
                Winner: {t.winner}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[720px] text-sm leading-6 text-white/50">
          When I was wrong: I initially argued for a 4-tab navigation on aesthetic grounds — it felt cleaner. The
          data disagreed. I shipped 5 tabs.
        </p>
      </section>

      {/* If this shipped */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="If This Shipped" title="I won't fake metrics. Here is what I expected." />
          <p className="mt-4 max-w-[640px] text-sm leading-6 text-[#767676]">
            This product was not shipped. I designed it as a 0→1 portfolio project — so these are success metrics, not
            vanity metrics, with an explanation of how I&apos;d measure them.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PROJECTED_METRICS.map((m) => (
              <div key={m.label} className="rounded-2xl border border-[#dedcd4] bg-white p-6">
                <p className="text-3xl font-bold text-ink">{m.value}</p>
                <p className="mt-2 text-sm font-medium text-[#555555]">{m.label}</p>
                <p className="mt-2 text-[13px] leading-5 text-[#888888]">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">
              - What comes next (the roadmap)
            </p>
            <p className="mt-4 max-w-[640px] text-sm text-[#767676]">
              These aren&apos;t wishes — they&apos;re the next logical moves given the retention loops Pawle was
              designed to create.
            </p>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {ROADMAP.map((r) => (
                <div key={r.title} className="rounded-2xl border border-[#dedcd4] bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">{r.phase}</p>
                  <h3 className="mt-3 text-base font-semibold text-ink">{r.title}</h3>
                  <p className="mt-3 text-[13px] leading-5 text-[#555555]">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="Reflection" title="What this project taught me." tone="dark" />
        <p className="mt-6 max-w-[720px] text-2xl font-medium leading-[1.5] text-white/90">
          Designing 195 screens wasn&apos;t the challenge. Designing a system capable of producing the next 300
          screens was.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {REFLECTIONS.map((r, i) => (
            <div key={r.title}>
              <p className="text-xs font-bold text-white/30">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-sm font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-white/50">{r.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-[640px] text-base italic text-white/60">
          Good interfaces solve today&apos;s problems. Great systems make tomorrow&apos;s problems easier to solve.
        </p>
      </section>

      <CaseStudyNav currentSlug="pawle" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
