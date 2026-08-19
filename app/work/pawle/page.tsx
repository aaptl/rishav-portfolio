import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
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
  { label: "Market Gap", body: "No dominant pet platform in India's ₹12,000 Cr market.", accent: true },
  { label: "Network Effects", body: "More pet owners → more service providers → better availability → more owners.", accent: false },
  { label: "Retention Loops", body: "Book vet → set reminder → health record → next booking. One action pulls the next.", accent: false },
  { label: "Monetisation", body: "Pawle Plus subscription + service commission + pharmacy margin + shop GMV.", accent: false },
  {
    label: "North Star Metric",
    body: "Weekly Active Pet Owners — pet owners who use Pawle for at least one action per week.",
    accent: true,
    starred: true,
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
    color: "blue" as const,
  },
  {
    name: "Ravi, 34 · Bangalore · Groomer",
    quote: "If I can manage my schedule and client history in one place, I can focus on the pets.",
    needs: ["Availability", "Appointment", "Relationship"],
    color: "pink" as const,
  },
];

const IA_VERSIONS = [
  {
    version: "V1 - Failed",
    tone: "failed" as const,
    structure: "Home | Shop+Services | Match | Profile",
    note: "Services hidden from view",
  },
  {
    version: "V2 - Discarded",
    tone: "discarded" as const,
    structure: "Home | Shop | Services+Match | Profile",
    note: "Match feature buried",
    faded: true,
  },
  {
    version: "V3 - Shipped",
    tone: "shipped" as const,
    structure: "Home | Shop | Services | Match | Profile",
    note: "✓ Shipped - 89% task success",
  },
];

const IA_NOTES = [
  "Why Mating has its own sub-nav: “When users enter Match, they enter a different emotional context. Pink accent, different tabs. This isn't inconsistency - it's intentional product design.”",
  "Emergency was never in the booking wizard. I made it a permanent banner. Discovery time dropped from 8 seconds to 1.2 seconds. That's a life-safety decision.",
];

const SERVICE_PILLS = ["Vet", "Grooming", "Walking", "Boarding", "Training", "Emergency", "Taxi", "Day Care", "Vaccination", "More"];

const PRODUCT_DECISIONS = [
  {
    number: "01",
    color: "blue" as const,
    icon: "store" as const,
    title: "Why Services became its own tab",
    alternative: "Everything inside Shop.",
    rejected: "Users mentally separate purchasing products from booking appointments.",
    outcome: "Higher discoverability. Lower task completion time.",
  },
  {
    number: "02",
    color: "blue2" as const,
    icon: "truck" as const,
    title: "Why Emergency bypasses the booking flow",
    alternative: "Treat emergency care like every other service.",
    rejected: "Emergency situations require immediate action - not form filling.",
    outcome: "Critical services accessible within seconds.",
  },
  {
    number: "03",
    color: "green" as const,
    icon: "heart" as const,
    title: "Why Pawle Match became its own experience",
    alternative: "Treat breeding as another service.",
    rejected: "Pet matchmaking is emotional rather than transactional. Mixing it with utility features confused users during testing.",
    outcome: "The experience feels intentional without disconnecting from the core product.",
  },
];

const SYSTEM_CARDS = [
  {
    number: "01",
    color: "blue" as const,
    icon: "layout" as const,
    title: "Task-First Navigation",
    body: "Five key tabs designed around how users think, not how services are categorized.",
  },
  {
    number: "02",
    color: "pink" as const,
    icon: "user" as const,
    title: "Context-aware Personalization",
    body: "Pawle learns your pet profile, history and preferences to deliver better results over time.",
  },
  {
    number: "03",
    color: "green" as const,
    icon: "share" as const,
    title: "Smart Information Architecture",
    body: "Designed service into 4 key verticals, easy to scan and navigate without confusion.",
  },
  {
    number: "04",
    color: "amber" as const,
    icon: "box" as const,
    title: "Consistent Patterns",
    body: "Built a scalable design system for unified experience across all modules.",
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
  { name: "Display", spec: "36 / 800", sample: "Design systems before screens.", className: "text-4xl font-extrabold" },
  { name: "Heading", spec: "24 / 600", sample: "A consistent hierarchy for every screen.", className: "text-2xl font-semibold" },
  {
    name: "Body",
    spec: "16 / 400",
    sample: "Body text is used for descriptions, helper text, and long-form content. It should be readable and comfortable at typical reading distances.",
    className: "text-base font-normal",
  },
  {
    name: "Caption",
    spec: "12 / 500",
    sample: "Caption text is used for metadata, timestamps, and secondary labels. It provides context without competing with primary content.",
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

const SPACING_SCALE_COMPACT = [
  { px: 4, label: "xs", usage: "icon gaps" },
  { px: 8, label: "sm", usage: "label spacing" },
  { px: 12, label: "md", usage: "card internals" },
  { px: 16, label: "base", usage: "screen margins" },
  { px: 20, label: "lg", usage: "headers" },
  { px: 24, label: "xl", usage: "section breaks" },
];

const GRID_BREAKPOINTS = [
  { name: "Desktop", range: "1200px+", columns: 12 },
  { name: "Tablet", range: "768–1199px", columns: 8 },
  { name: "Mobile", range: "<768px", columns: 4 },
];

const COLOR_COMBINATIONS = [
  { name: "Primary Blue", hex: "#3F8CC4", usage: "Primary CTA", body: "Use for primary actions and emphasis.", badge: "AAA", ratio: "7.3:1" },
  { name: "Health Green", hex: "#10B981", usage: "Success state", body: "Use for verification and confirmation.", badge: "AAA", ratio: "7.1:1" },
  { name: "Mating Pink", hex: "#E91E8C", usage: "Match highlight", body: "Use for matchmaking emphasis.", badge: "AAA", ratio: "6.8:1" },
  { name: "Neutral-900", hex: "#101828", usage: "Primary text", body: "Use for headings and body copy.", badge: "AAA", ratio: "14.1:1" },
  { name: "Neutral-600", hex: "#475467", usage: "Secondary label", body: "Use for helper text and metadata.", badge: "AA", ratio: "5.1:1" },
  { name: "Neutral-100", hex: "#F2F4F7", usage: "Divider / surface", body: "Use for subtle separation.", badge: "Fail", ratio: "2.1:1" },
];

const A11Y_STANDARDS = [
  { title: "Visible focus states", body: "Interactive elements show a clear focus ring for keyboard navigation." },
  { title: "Color contrast", body: "Text meets WCAG 2.1 AA requirements (4.5:1 normal, 3:1 large)." },
  { title: "Touch targets", body: "Interactive elements meet the 44×44px minimum touch target size." },
  { title: "Semantic HTML", body: "Proper HTML structure and ARIA attributes support assistive technologies." },
];

const DEEP_DIVE_FEATURES = [
  {
    number: "01",
    eyebrow: "Core Value Proposition",
    bg: "white" as const,
    title: "Utility Layer - 12 services. One mental model. ",
    titleAccent: "Zero re-learning.",
    body: "Every booking flow uses the same wizard skeleton: Browse → Select → Date → Confirm. I designed this pattern first, then applied it to all 12 services.\n\nWhen Pharmacy launched, users already understood the pattern.",
    callout: {
      tone: "blue" as const,
      label: "Hardest Call",
      text: "Emergency Care breaks this pattern entirely - it skips the wizard and goes straight to a phone call. The 1.2-second time-to-action made that the only right answer.",
    },
    stats: [
      { value: "78", label: "screens" },
      { value: "12", label: "service types" },
      { value: "1", label: "reusable pattern" },
    ],
    images: ["/images/pawle/deep-dive/feature-a.png"],
  },
  {
    number: "02",
    eyebrow: "The Differentiator",
    bg: "white" as const,
    title: "The hardest problem ",
    titleAccent: "wasn't matching pets.",
    body: "It was designing an experience that emotionally felt different without feeling disconnected from the rest of the product. Pet matchmaking involves trust, compatibility and emotional decision making. Healthcare, shopping and booking are transactional.\n\nInstead of introducing another application, Pawle Match became its own contextual environment - a dedicated navigation structure, visual identity and interaction language that creates a clear emotional transition while preserving a single product ecosystem.",
    callout: {
      tone: "quote" as const,
      label: "Why a separate nav",
      text: "In testing, users kept accidentally navigating away during swiping. A dedicated 6-tab Mating nav eliminated this completely. It's not inconsistency - it's intentional context-switching.",
    },
    images: ["/images/pawle/deep-dive/feature-b-1.png", "/images/pawle/deep-dive/feature-b-2.png", "/images/pawle/deep-dive/feature-b-3.png"],
  },
  {
    number: "03",
    eyebrow: "First Impression",
    bg: "cream" as const,
    title: "Acquisition Layer - I removed the biggest ",
    titleAccent: "drop-off point before the user even signed up.",
    body: "Our original design required account creation before access. I removed it. Added a Skip option.\n\nThis sounds small. It isn't. Trust-before-commitment is how modern apps win. Users explore first, then invest.",
    callout: {
      tone: "amber" as const,
      label: "Estimated Impact",
      text: "Industry data shows mandatory signup gates reduce completion by 30-40%. The skip-first pattern was the single highest-leverage UX change in the project.",
    },
    images: ["/images/pawle/deep-dive/feature-c-1.png", "/images/pawle/deep-dive/feature-c-2.png", "/images/pawle/deep-dive/feature-c-3.png"],
  },
  {
    number: "04",
    eyebrow: "AI Prescription Parsing",
    bg: "white" as const,
    title: "The feature that differentiated the pharmacy module. ",
    titleAccent: "AI-first, human-validated.",
    body: "Users photograph a prescription - a scanning animation analyzes it - and the app returns per-medicine confidence scores with editable fields for unrecognized items.\n\nThe UX challenge: how to show AI uncertainty without eroding trust. Solution: a tiered confidence UI - green/amber/red per medicine - so users validate rather than blindly accept. No other pet app in India has this flow.",
    callout: {
      tone: "blue" as const,
      label: "Hardest Call",
      text: "We chose to expose confidence scores instead of hiding them. This creates a clear expectation: the AI suggests, the user confirms.",
    },
    stats: [
      { value: "3", label: "screens" },
      { value: "1", label: "module" },
      { value: "3", label: "confidence tiers" },
    ],
    images: ["/images/pawle/deep-dive/feature-a.png"],
  },
  {
    number: "05",
    eyebrow: "The Services Pattern System",
    bg: "cream" as const,
    title: "Designing 12 services with one mental model. ",
    titleAccent: "Zero re-learning across service types.",
    body: "Every service uses the same 6-stage booking skeleton: Browse → Select → Date → Confirm → Management. I designed this pattern first, validated it on Vet Booking, then applied it to all 12 services.\n\nThe result: zero re-learning across service types. Users who book a vet appointment already know how to book grooming, walking, training. Species compatibility, multi-pet rules, and live GPS (for walking) are handled as optional layers on top of the core pattern, not as separate flows.",
    callout: {
      tone: "amber" as const,
      label: "Estimated Impact",
      text: "By keeping the skeleton fixed, we reduced cognitive load and increased completion rates across all 12 services.",
    },
    images: ["/images/pawle/deep-dive/feature-c-1.png", "/images/pawle/deep-dive/feature-c-2.png", "/images/pawle/deep-dive/feature-c-3.png"],
  },
];

const FRICTION_CASES = [
  {
    case: "CASE 01",
    color: "blue" as const,
    icon: "mapPin" as const,
    title: "The GPS Tracking Debate",
    body: "I designed live location tracking for dog walkers - real-time GPS, parent can watch the walk live. Engineering estimated 6 weeks to build it safely. It got cut for v1. I was disappointed.\n\nBut it forced a better design: live-updating “walk progress” card with distance and photos. Lower engineering cost. Users in testing preferred it.",
    takeaway: "Sometimes the constraint makes the product better.",
  },
  {
    case: "CASE 02",
    color: "red" as const,
    icon: "heart" as const,
    title: "The Social Feed I Abandoned",
    body: "There was a whole version of Pawle with a social feed - pet photos, community tips, “Pets Near You”. I designed 24 screens for it.\n\nThen I asked: what makes this sticky before there are 10,000 users? The answer was nothing. I removed all 24 screens.",
    takeaway: "Cutting features is a product skill. I removed 24 screens and the product got stronger.",
  },
  {
    case: "CASE 03",
    color: "green" as const,
    icon: "compass" as const,
    title: "The Navigation that Tested Wrong",
    body: "Version 1 had 4 tabs. It felt clean. Then 12 users showed me that nobody looked for “Boarding a dog” under the shopping icon.\n\nI rebuilt the navigation. V2 had 5 tabs. Users found what they needed 4 steps faster.",
    takeaway: "Clean design can be wrong design. User testing saved me from shipping a beautiful mistake.",
  },
];

const CONSTRAINT_CHIPS = [
  { icon: "clock" as const, label: "MVP Launch Timeline" },
  { icon: "users" as const, label: "Small Founding Team" },
  { icon: "code" as const, label: "React Native Implementation" },
  { icon: "shoppingCart" as const, label: "Marketplace Complexity" },
  { icon: "barChart" as const, label: "Limited Engineering Bandwidth" },
];

const REVENUE_DECISIONS = [
  {
    case: "CASE 01",
    color: "blue" as const,
    icon: "shoppingCart" as const,
    title: "Persistent cart badge in Shop",
    alternative: "Hide cart until checkout is initiated.",
    outcome: "Reduced friction to checkout → higher Shop GMV (Shop GMV revenue lever).",
    takeaway: "Lower friction → higher GMV.",
  },
  {
    case: "CASE 02",
    color: "red" as const,
    icon: "fileText" as const,
    title: "Prescription upload flow with AI parsing",
    alternative: "Manual entry only.",
    outcome: "Captures pharmacy margin at highest trust moment → higher conversion (Pharmacy margin lever).",
    takeaway: "Faster trust → higher margin capture.",
  },
  {
    case: "CASE 03",
    color: "green" as const,
    icon: "calendar" as const,
    title: "Service booking confirmation with Add to Calendar + reminder",
    alternative: "Email-only confirmation.",
    outcome: "Drives repeat booking rate → higher service commission (Service commission lever).",
    takeaway: "Higher retention → higher commission.",
  },
  {
    case: "CASE 04",
    color: "amber" as const,
    icon: "star" as const,
    title: "Pawle Plus upsell gates on health records and priority vet slots",
    alternative: "Free access to premium features.",
    outcome: "Drives subscription conversion → higher recurring revenue (Subscription revenue lever).",
    takeaway: "Clear value → higher conversion.",
  },
];

const AB_TESTS = [
  {
    number: "01",
    color: "blue" as const,
    icon: "layoutGrid" as const,
    hypothesis: "5-tab vs 4-tab navigation",
    metricValue: "28%",
    metricLabel: "better task success",
    versionA: "4-tab navigation",
    winner: "5-tab navigation",
  },
  {
    number: "02",
    color: "violet" as const,
    icon: "skipForward" as const,
    hypothesis: "Skip-gate vs hard-gate onboarding",
    metricValue: "34%",
    metricLabel: "higher activation",
    versionA: "Mandatory signup",
    winner: "Skip for now option",
  },
  {
    number: "03",
    color: "teal" as const,
    icon: "list" as const,
    hypothesis: "Category chips vs alphabetical list",
    metricValue: "4x",
    metricLabel: "faster discovery",
    versionA: "A-Z Service List",
    winner: "Visual Category Chips",
  },
  {
    number: "04",
    color: "rose" as const,
    icon: "heart" as const,
    hypothesis: "Heart icon vs text 'Like'",
    metricValue: "94%",
    metricLabel: "recognition",
    versionA: "Text link",
    winner: "Iconic heart",
  },
];

const PROJECTED_METRICS = [
  {
    value: "40%",
    label: "Weekly Active Pet Owners",
    body: "Target: 40% of registered users active weekly by month 3.",
    why: "Why it matters: consistent usage is the strongest signal of value and retention.",
  },
  {
    value: ">72%",
    label: "Service Booking Completion Rate",
    body: "Target: funnel completion rate above 72%.",
    why: "Why it matters: high completion means trust, fewer drop-offs, and more revenue.",
  },
  {
    value: ">55%",
    label: "Month-3 Retention",
    body: "Target: more than 55% users return within 30 days.",
    why: "Why it matters: retention is the best predictor of long-term growth and LTV.",
  },
];

const ROADMAP = [
  {
    phase: "Phase 1 · 3 months",
    title: "Live GPS Walk Tracking",
    body: "The feature engineering scoped at 6 weeks that was cut from v1. Architecture is now in place. Drives daily active usage more than anything else.",
    takeaway: "→ Drives daily active usage · High retention impact",
  },
  {
    phase: "Phase 2 · 6 months",
    title: "Community Social Layer",
    body: "Not a feed. A context-aware social graph - pets near you based on location, breed compatibility, and service history. This is where network effects begin.",
    takeaway: "→ Activates network effects · Product defensibility",
  },
  {
    phase: "Phase 3 · 12 months",
    title: "Pawle Plus Tier 2 with AI Health",
    body: "Photo your pet, receive triage guidance and medication recommendations. Turns Pawle from a booking app into a health companion.",
    takeaway: "→ Premium revenue · Reduces user anxiety",
  },
];

const REFLECTIONS = [
  { title: "Systems outperform screens", body: "Every reusable decision compounds over time.", icon: "trendingUp" as const, color: "blue" as const },
  { title: "Product architecture is UX", body: "Information architecture influences behaviour long before visual design does.", icon: "layout" as const, color: "violet" as const },
  { title: "Great products are defined by exclusion", body: "Removing complexity created a faster, clearer and more scalable experience.", icon: "filter" as const, color: "green" as const },
  { title: "Consistency is the strongest pattern", body: "A consistent system reduces cognitive load and makes the product feel more reliable.", icon: "layers" as const, color: "gray" as const },
  {
    title: "Accessibility is a design constraint, not a QA checkbox",
    body: "Designed to WCAG AA from day one — 4.5:1 minimum contrast, 44pt minimum touch targets, iOS safe area compliance, and screen reader-compatible component names.",
    icon: "accessibility" as const,
    color: "gray" as const,
  },
];

const MOBILE_SCREENS = [
  { src: "/images/pawle/showcase/screen-home.png", label: "Home" },
  { src: "/images/pawle/showcase/screen-services.png", label: "Services" },
  { src: "/images/pawle/showcase/screen-discover-match.png", label: "Discover Match" },
  { src: "/images/pawle/showcase/screen-shop.png", label: "Shop" },
  { src: "/images/pawle/showcase/screen-pharmacy.png", label: "Pharmacy" },
  { src: "/images/pawle/showcase/screen-booking.png", label: "Booking" },
];

const DESKTOP_SCREENS = [
  { src: "/images/pawle/showcase/screen-partner-dashboard.png", label: "Partner Dashboard" },
  { src: "/images/pawle/showcase/screen-analytics-insights.png", label: "Analytics & Insights" },
];

function RoleIcon({ kind }: { kind: "calendar" | "smartphone" | "target" | "users" | "rocket" }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "#3F8CC4", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "calendar":
      return <svg {...common}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
    case "smartphone":
      return <svg {...common}><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></svg>;
    case "target":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>;
    case "users":
      return <svg {...common}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6M17 8.5a3 3 0 1 1 1 5.8M21.5 19.5c0-2.7-2-4.8-4.5-5.4" /></svg>;
    case "rocket":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3F8CC4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
  }
}

type IconName =
  | "zap" | "monitor" | "grid" | "copy" | "alertTriangle" | "store" | "truck" | "heart" | "layout" | "user"
  | "share" | "box" | "mapPin" | "compass" | "clock" | "users" | "code" | "shoppingCart" | "barChart" | "calendar"
  | "star" | "fileText" | "trophy" | "layoutGrid" | "skipForward" | "list" | "trendingUp" | "layers" | "filter"
  | "check" | "x" | "lightbulb" | "wrench" | "sparkles" | "accessibility" | "pawPrint" | "sun";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className };
  switch (name) {
    case "zap":
      return <svg {...common}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" /></svg>;
    case "monitor":
      return <svg {...common}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>;
    case "grid":
    case "layoutGrid":
      return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>;
    case "copy":
      return <svg {...common}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>;
    case "alertTriangle":
      return <svg {...common}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /><path d="M12 9v4M12 17h.01" /></svg>;
    case "store":
      return <svg {...common}><path d="M3 9 4 4h16l1 5" /><path d="M4 9v11h16V9" /><path d="M9 20v-6h6v6" /></svg>;
    case "truck":
      return <svg {...common}><rect x="1" y="6" width="14" height="10" rx="1" /><path d="M15 10h4l3 3v3h-7z" /><circle cx="6" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></svg>;
    case "heart":
      return <svg {...common}><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" /></svg>;
    case "layout":
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>;
    case "user":
      return <svg {...common}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" /></svg>;
    case "share":
      return <svg {...common}><circle cx="18" cy="5" r="2.3" /><circle cx="6" cy="12" r="2.3" /><circle cx="18" cy="19" r="2.3" /><path d="m8.1 10.7 7.8-4.4M8.1 13.3l7.8 4.4" /></svg>;
    case "box":
      return <svg {...common}><path d="M21 8 12 3 3 8l9 5 9-5Z" /><path d="M3 8v8l9 5 9-5V8M12 13v8" /></svg>;
    case "mapPin":
      return <svg {...common}><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "compass":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m15 9-2 6-6 2 2-6 6-2Z" /></svg>;
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>;
    case "users":
      return <svg {...common}><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c0-3.4 3-6 6.5-6s6.5 2.6 6.5 6" /><path d="M17 8.3a2.8 2.8 0 1 1 .8 5.5M21.5 20c0-2.6-2-4.7-4.5-5.3" /></svg>;
    case "code":
      return <svg {...common}><path d="m9 8-4 4 4 4M15 8l4 4-4 4" /></svg>;
    case "shoppingCart":
      return <svg {...common}><circle cx="9" cy="20" r="1.3" /><circle cx="18" cy="20" r="1.3" /><path d="M2 3h2l2.6 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6" /></svg>;
    case "barChart":
      return <svg {...common}><path d="M5 21V10M12 21V4M19 21v-7" /></svg>;
    case "calendar":
      return <svg {...common}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
    case "star":
      return <svg {...common}><path d="m12 2 3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14.5l-5-5 7-1L12 2Z" /></svg>;
    case "fileText":
      return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" /><path d="M14 2v6h6M8 13h8M8 17h8" /></svg>;
    case "trophy":
      return <svg {...common}><path d="M8 21h8M12 17v4" /><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" /><path d="M7 5H4a3 3 0 0 0 3 5M17 5h3a3 3 0 0 1-3 5" /></svg>;
    case "skipForward":
      return <svg {...common}><path d="M5 4v16l10-8L5 4Z" /><path d="M19 5v14" /></svg>;
    case "list":
      return <svg {...common}><path d="M8 6h13M8 12h13M8 18h13" /><circle cx="3.5" cy="6" r="1" fill="currentColor" /><circle cx="3.5" cy="12" r="1" fill="currentColor" /><circle cx="3.5" cy="18" r="1" fill="currentColor" /></svg>;
    case "trendingUp":
      return <svg {...common}><path d="m3 17 6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>;
    case "layers":
      return <svg {...common}><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></svg>;
    case "filter":
      return <svg {...common}><path d="M4 4h16l-6.5 8v6l-3 2v-8L4 4Z" /></svg>;
    case "check":
      return <svg {...common}><path d="M20 6 9 17l-5-5" /></svg>;
    case "x":
      return <svg {...common}><path d="M18 6 6 18M6 6l12 12" /></svg>;
    case "lightbulb":
      return <svg {...common}><path d="M9 18h6M10 22h4" /><path d="M12 2a6 6 0 0 0-3.5 10.9c.6.5.9 1.2.9 2.1h5.2c0-.9.3-1.6.9-2.1A6 6 0 0 0 12 2Z" /></svg>;
    case "wrench":
      return <svg {...common}><path d="M14.7 6.3a4 4 0 1 1-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4L15 12l-2-2 1.7-3.7Z" /></svg>;
    case "sparkles":
      return <svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2 2M15.5 15.5l2 2M6.5 17.5l2-2M15.5 8.5l2-2" /></svg>;
    case "accessibility":
      return <svg {...common}><circle cx="12" cy="4.5" r="1.8" /><path d="M4.5 8.5h15M12 8.5v5m0 0-4.5 8m4.5-8 4.5 8M8 13h8" /></svg>;
    case "pawPrint":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <circle cx="7.5" cy="9.5" r="2.3" />
          <circle cx="12" cy="6.5" r="2.3" />
          <circle cx="16.5" cy="9.5" r="2.3" />
          <ellipse cx="12" cy="15.5" rx="5.2" ry="4.2" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </svg>
      );
    default:
      return null;
  }
}

const COLOR_MAP = {
  blue: { text: "text-[#3677A7]", bg: "bg-[#EFF6FF]", border: "border-[#DBEAFE]", bar: "bg-[#3F8CC4]" },
  blue2: { text: "text-[#0D0D0D]/70", bg: "bg-[#FEF2F2]", border: "border-[#FECACA]", bar: "bg-[#EF4444]" },
  red: { text: "text-[#D0000A]", bg: "bg-[#FEF2F2]", border: "border-[#FECACA]", bar: "bg-[#EF4444]" },
  green: { text: "text-[#0B815A]", bg: "bg-[#ECFDF5]", border: "border-[#D1FAE5]", bar: "bg-[#10B981]" },
  amber: { text: "text-[#9F6707]", bg: "bg-[#FFFBEB]", border: "border-[#FDE68A]", bar: "bg-[#F59E0B]" },
  pink: { text: "text-[#DD1D85]", bg: "bg-[#FFF0F7]", border: "border-[#FBCFE8]", bar: "bg-[#E91E8C]" },
  violet: { text: "text-[#7637E1]", bg: "bg-[#F5F3FF]", border: "border-[#DDD6FE]", bar: "bg-[#7C3AED]" },
  teal: { text: "text-[#0B7F74]", bg: "bg-[#F0FDFA]", border: "border-[#99F6E4]", bar: "bg-[#0D9488]" },
  rose: { text: "text-[#CF3650]", bg: "bg-[#FFF1F2]", border: "border-[#FECDD3]", bar: "bg-[#F43F5E]" },
  gray: { text: "text-[#767676]", bg: "bg-[#F3F4F6]", border: "border-[#E5E7EB]", bar: "bg-[#9CA3AF]" },
};

export default function PawlePage() {
  return (
    <main className="flex-1 bg-paper">
      {/* Hero */}
      <section className="pawle-blue-wash relative flex flex-col-reverse gap-12 overflow-hidden px-6 pb-16 pt-24 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:pb-20 lg:pt-24">
        <Nav active="Work" />

        <div className="flex max-w-[610px] flex-col gap-8">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#cfe3f3]">
            Product Design Case Study · 2026
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-[76px]">
            Designing one ecosystem for everything a pet owner needs
          </h1>
          <p className="max-w-[590px] text-lg leading-[1.5] text-white/60 sm:text-xl">
            Pawle brings veterinary care, pet services, commerce, health records and community into a single
            product, reducing fragmented experiences across the pet care journey.
          </p>
          <p className="text-base font-bold text-white/50">195 screens. 23 flows. One coherent product.</p>
        </div>

        <Image
          src="/images/pawle/hero-phones.png"
          alt="Pawle pet care app — mobile booking, health overview, and matching screens"
          width={1892}
          height={1618}
          priority
          className="mx-auto h-auto w-full max-w-[420px] lg:mx-0 lg:max-w-[520px]"
        />
      </section>

      {/* My Role */}
      <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-[100px] lg:py-24">
        <p className="flex items-center gap-4 text-xs font-bold uppercase text-[#3F8CC4]">
          00 - <span>My Role</span>
        </p>

        <div className="mt-6 flex flex-col gap-5">
          <div className="overflow-hidden rounded-[20px] border border-[#d1d6de] bg-[#f7f8fa]">
            <div className="flex flex-col divide-y divide-black/5 sm:flex-row sm:divide-x sm:divide-y-0">
              {[
                { icon: "calendar" as const, label: "Duration", value: "6 Months" },
                { icon: "smartphone" as const, label: "Platform", value: "iOS" },
                { icon: "target" as const, label: "Scope", value: "0 → 1 Product" },
              ].map((item) => (
                <div key={item.label} className="flex flex-1 items-center gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3F8CC4]/[0.13]">
                    <RoleIcon kind={item.icon} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase text-ink/35">{item.label}</p>
                    <p className="mt-0.5 text-xl font-bold text-ink">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="flex flex-1 items-center gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3F8CC4]/[0.13]">
                  <RoleIcon kind="users" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase text-ink/35">Team</p>
                  <p className="mt-0.5 text-sm font-bold text-ink">Founders · Engineering · Product</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#3F8CC4]/[0.07] px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#3F8CC4]/[0.13]">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#3F8CC4]" />
              </span>
              <p className="text-[13px] italic leading-[1.7] text-ink/50">
                Worked closely with the founding team to shape the product from concept to production.
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px] bg-[#f7f8fa]">
              <div className="flex flex-col gap-2.5 p-7 pb-6">
                <p className="text-xs font-bold uppercase text-ink/40">I Owned</p>
                <p className="text-2xl font-extrabold text-[#3F8CC4]">Every discipline.</p>
              </div>
              <div className="h-px bg-black/5" />
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 p-7 pt-2">
                {OWNED.map((item) => (
                  <div key={item} className="flex items-center gap-3.5 py-3">
                    <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-[#3F8CC4]" />
                    <p className="text-sm font-medium text-ink/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[20px] bg-[#f7f8fa]">
              <div className="flex flex-col gap-1.5 p-7 pb-6">
                <p className="text-xs font-bold uppercase text-ink/40">Deliverables</p>
                <p className="text-2xl font-extrabold text-[#3F8CC4]">By the numbers.</p>
              </div>
              <div className="h-px bg-black/5" />
              <div className="grid grid-cols-2 gap-3 p-5">
                {DELIVERABLES.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white px-6 py-4">
                    <p className="text-5xl font-extrabold text-[#3F8CC4]">{stat.value}</p>
                    <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 rounded-2xl border border-[#3F8CC4]/20 bg-[#3F8CC4]/[0.06] px-8 py-7">
            <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-[#3F8CC4]/[0.13]">
              <RoleIcon kind="rocket" />
            </span>
            <p className="font-extrabold text-[#3F8CC4]">Outcome</p>
            <span aria-hidden className="hidden h-7 w-px bg-[#3F8CC4]/25 sm:block" />
            <p className="text-sm leading-[1.6] text-ink/70">
              Designed and delivered a scalable, production-ready platform that powers the entire pet ecosystem
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Breath quote */}
      <section className="pawle-blue-wash px-6 py-24 sm:px-10 lg:px-20">
        <p className="mx-auto max-w-[720px] text-center text-2xl font-medium leading-[1.5] text-white sm:text-3xl">
          The opportunity wasn&apos;t another pet app. It was replacing six disconnected experiences with one
          cohesive product.
        </p>
      </section>

      {/* Product Strategy */}
      <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <p aria-hidden className="pointer-events-none absolute right-10 top-16 hidden select-none text-[180px] font-extrabold leading-none text-[#101010]/[0.06] lg:block">
          01
        </p>
        <div className="relative flex flex-col gap-14">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#3F8CC4]" />
              <p className="text-xs font-bold uppercase tracking-wide text-[#3677A7]">Product Strategy</p>
            </div>
            <h2 className="mt-4 max-w-[900px] text-4xl font-extrabold leading-[1.15] text-[#101222] sm:text-5xl lg:text-[56px]">
              One ecosystem for every pet service, <span className="text-[#E91E8C]">One trusted experience.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">
            {STRATEGY_PILLARS.map((p, i) => (
              <div key={p.label} className="flex flex-1 items-stretch">
                <div
                  className={`flex flex-1 flex-col gap-3 rounded-[20px] p-6 ${
                    p.starred ? "border border-[#3F8CC4] bg-[#3F8CC4]/[0.08]" : "bg-[#F7F8FA]"
                  }`}
                >
                  <span aria-hidden className={`block h-[3px] w-9 rounded-full ${p.accent ? "bg-[#3F8CC4]" : "bg-black/5"}`} />
                  <p className={`text-xs font-extrabold uppercase tracking-wide ${p.starred ? "text-[#3677A7]" : "text-ink/60"}`}>
                    {p.label}
                  </p>
                  <p className="text-sm leading-[1.6] text-ink/60">{p.body}</p>
                </div>
                {i < STRATEGY_PILLARS.length - 1 && (
                  <span aria-hidden className="hidden h-px w-9 shrink-0 self-center bg-[#3F8CC4] lg:block" />
                )}
              </div>
            ))}
          </div>

          <div className="max-w-[720px] border-l-[3px] border-[#3F8CC4] pl-5">
            <p className="text-sm italic leading-[1.7] text-ink/60">
              &lsquo;I added this framework after realising I was designing features without a filter. Every
              decision had to pass: does this increase weekly active pet owners?&rsquo;
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#3F8CC4]" />
              <p className="text-xs font-bold uppercase tracking-wide text-[#3677A7]">Competitive Positioning</p>
            </div>
            <h3 className="mt-4 max-w-[820px] text-3xl font-extrabold leading-[1.15] text-ink sm:text-4xl">
              The only platform that covers every pet need — from vet visits to community.
            </h3>
            <p className="mt-4 max-w-[720px] text-base leading-[1.7] text-ink/60">
              Existing players focus on one or two verticals. Pawle is the first ecosystem that integrates booking,
              services, commerce, health records, and community — creating a sticky experience that keeps pet
              owners coming back.
            </p>
            <div className="mt-8 overflow-x-auto rounded-[20px] border border-[#D1D6DE]">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#D1D6DE] bg-[#F7F8FA] text-left">
                    <th className="p-4 text-xs font-bold uppercase text-ink/60">Dimensions</th>
                    {COMPETITIVE_TABLE.columns.map((c, i) => (
                      <th
                        key={c}
                        className={`p-4 text-center text-[13px] font-bold ${
                          i === 0 ? "border-l border-[#3F8CC4] bg-[#3F8CC4]/[0.08] text-[#3677A7]" : "text-ink/60"
                        }`}
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPETITIVE_TABLE.rows.map((row) => (
                    <tr key={row.dimension} className="border-b border-[#D1D6DE] last:border-0">
                      <td className="p-4 text-sm font-bold text-ink/60">{row.dimension}</td>
                      {row.covered.map((yes, i) => (
                        <td key={i} className={`p-4 text-center ${i === 0 ? "border-l border-[#3F8CC4] bg-[#3F8CC4]/[0.08]" : ""}`}>
                          {yes ? (
                            <Icon name="check" className={`mx-auto h-4 w-4 ${i === 0 ? "text-[#3F8CC4]" : "text-ink/40"}`} />
                          ) : (
                            <Icon name="x" className="mx-auto h-4 w-4 text-ink/15" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[13px] leading-[1.6] text-ink/60">
              Note: Pawle is the only platform that covers all dimensions — creating a cohesive experience that
              reduces fragmentation and increases retention.
            </p>
          </div>
        </div>
      </section>

      {/* Field Research */}
      <section className="pawle-blue-wash relative overflow-hidden px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <p aria-hidden className="pointer-events-none absolute right-10 top-16 hidden select-none text-[180px] font-extrabold leading-none text-white/[0.12] lg:block">
          02
        </p>
        <div className="relative flex flex-col gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#E91E8C]" />
              <p className="text-sm font-bold uppercase tracking-wide text-white">Field Research</p>
            </div>
            <h2 className="mt-5 max-w-[820px] text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-[56px]">
              Research changed our <span className="text-[#E91E8C]">assumptions.</span>
            </h2>
            <p className="mt-4 text-lg text-white/80">- in-depth interviews · 4 cities · 2 weeks</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div className="border-l-4 border-[#F59E0B] pl-8">
              <p className="text-2xl italic leading-[1.35] text-white sm:text-[28px]">
                &lsquo;&ldquo;I have four apps on my phone just for my dog. The vet booking app, the food delivery
                app, the grooming WhatsApp chat, and one for vaccination records. It&apos;s genuinely
                exhausting.&rdquo;&rsquo;
              </p>
              <p className="mt-6 text-base text-white/90">- Priya S., 29, Mumbai, Labrador owner</p>
            </div>
            <div className="border-l-4 border-[#F59E0B] pl-8">
              <p className="text-2xl italic leading-[1.35] text-white sm:text-[28px]">
                &lsquo;&ldquo;I don&apos;t know who to trust. Anyone can make an app and call themselves a verified
                vet.&rdquo;&rsquo;
              </p>
              <p className="mt-6 text-[13px] text-white/90">- Arjun M., 24, Bangalore, first-time cat owner</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESEARCH_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-6 rounded-[20px] bg-white p-6">
                <div className="flex flex-col gap-2">
                  <p className="text-5xl font-extrabold text-[#3F8CC4]">{stat.value}</p>
                  <p className="text-[13px] leading-[1.6] text-ink/60">{stat.label}</p>
                </div>
                <div className="h-1 rounded-full bg-black/[0.08]">
                  <div className="h-full rounded-full bg-[#3F8CC4]" style={{ width: stat.value }} />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[20px] border-t border-[#E91E8C] bg-white px-8 py-8 sm:px-14">
            <p className="mx-auto max-w-[820px] text-center text-lg italic leading-[1.7] text-[#3677A7]">
              The interviews revealed something different. People weren&apos;t looking for another marketplace.
              They were exhausted by switching between disconnected products throughout a pet&apos;s lifecycle.
              This shifted the design challenge from finding better services to creating one trusted operating
              system.
            </p>
          </div>
        </div>
      </section>

      {/* People I Designed For */}
      <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="relative flex flex-col gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#3F8CC4]" />
              <p className="text-xs font-bold uppercase tracking-wide text-[#3677A7]">The People I Designed For</p>
            </div>
            <h2 className="mt-4 max-w-[900px] text-4xl font-extrabold leading-[1.15] text-[#101222] sm:text-5xl lg:text-[56px]">
              Two very different mental models. <span className="text-[#E91E8C]">One product.</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-extrabold leading-[1.15] text-ink sm:text-3xl">
                Designed for two people who&apos;d never meet.
              </h3>
              <p className="text-lg leading-[1.6] text-ink/60">
                Pet owners and service providers have opposing mental models: one is focused on care and
                convenience, while the other is focused on availability and relationships. The challenge was to
                design a single product that bridges these two worlds without compromising either experience.
              </p>
              <div className="flex flex-col gap-4">
                {PERSONAS.map((persona) => (
                  <div key={persona.name} className="flex gap-4 rounded-[20px] border border-[#DBEAFE] bg-[#F8FAFF] p-6">
                    <span aria-hidden className={`w-1.5 shrink-0 rounded-full ${persona.color === "pink" ? "bg-[#E91E8C]" : "bg-[#3F8CC4]"}`} />
                    <div className="flex flex-col gap-2.5">
                      <p className="text-base font-bold text-ink">{persona.name}</p>
                      <p className="text-base italic leading-[1.5] text-ink/60">&ldquo;{persona.quote}&rdquo;</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-[20px] border border-[#1F2937] bg-[#0D1117] p-6">
              <p className="text-2xl font-extrabold leading-[1.15] text-white">One product. Two truths.</p>
              <div className="flex items-center gap-2">
                <div className="flex min-w-0 flex-1 flex-col gap-2.5 rounded-2xl border border-[#1F2937] bg-[#0B1220] p-3.5">
                  <p className="whitespace-nowrap text-[12px] font-bold uppercase tracking-tight text-[#3F8CC4]">Pet Parent</p>
                  <div className="flex flex-col gap-2">
                    {["Needs", "Booking", "Care"].map((step) => (
                      <div key={step} className="flex items-center gap-2">
                        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3F8CC4]" />
                        <p className="whitespace-nowrap text-sm text-white/60">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-[#1F2937] bg-[#0B1220] p-3">
                  <Icon name="share" className="h-5 w-5 text-white" />
                  <p className="whitespace-nowrap text-[13px] font-bold text-white">Pawle</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2.5 rounded-2xl border border-[#1F2937] bg-[#0B1220] p-3.5">
                  <p className="whitespace-nowrap text-[12px] font-bold uppercase tracking-tight text-[#E91E8C]">Service Provider</p>
                  <div className="flex flex-col gap-2">
                    {["Availability", "Appointment", "Relationship"].map((step) => (
                      <div key={step} className="flex items-center gap-2">
                        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E91E8C]" />
                        <p className="whitespace-nowrap text-sm text-white/60">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-[1.6] text-white/50">
                By mapping the two journeys, we created a product where every feature serves both sides — without
                duplicating effort or introducing friction.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-2 text-[13px] font-semibold text-[#32709D]">
              User-Centered
            </span>
            <span className="rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-2 text-[13px] font-semibold text-[#32709D]">
              Trust-First
            </span>
            <span className="rounded-full border border-[#BBF7D0] bg-[#F0FDF4] px-4 py-2 text-[13px] font-semibold text-[#0B815A]">
              Scalable
            </span>
            <span className="rounded-full border border-[#FED7AA] bg-[#FFF7ED] px-4 py-2 text-[13px] font-semibold text-[#AE510F]">
              Delightful
            </span>
          </div>
        </div>
      </section>

      {/* A Turning Point */}
      <section className="pawle-blue-wash flex flex-col items-center px-6 py-20 text-center sm:px-10 lg:px-20">
        <p className="flex items-center gap-3 text-xs font-bold uppercase text-white">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber-400" />A Turning Point
        </p>
        <p className="mt-10 text-3xl italic leading-[1.25] tracking-[-0.5px] text-white sm:text-4xl lg:text-5xl">
          &ldquo;Halfway through the project, I realised I wasn&apos;t designing screens anymore. I was designing
          rules. Once the system clicked, the remaining 120 screens became predictable instead of overwhelming.&rdquo;
        </p>
        <div className="mt-10 flex items-center gap-3">
          <span aria-hidden className="h-px w-6 bg-white/40" />
          <p className="text-[13px] text-white/60">- Me, six weeks into the project, at 11pm</p>
        </div>
      </section>

      {/* Platform Modules header */}
      <section className="pawle-blue-wash flex flex-col items-center px-6 py-20 text-center sm:px-10 lg:px-20">
        <p className="flex items-center gap-2.5 text-xs font-bold uppercase text-white">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#3F8CC4]" />
          Platform Modules
        </p>
        <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
          I want to show you how I think, not just what I made.
        </h2>
        <p className="mt-4 text-lg italic leading-[1.7] text-white/60">
          I could show you all 23 flows. Instead I&apos;ll show you the five that taught me the most about product
          design.
        </p>
      </section>

      {/* Information Architecture */}
      <section className="relative overflow-hidden bg-[#FAFBFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="relative flex flex-col gap-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5">
                <span aria-hidden className="h-[3px] w-8 rounded-full bg-[#3F8CC4]" />
                <p className="text-sm font-bold uppercase tracking-wide text-[#3677A7]">Information Architecture</p>
              </div>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.1] text-[#0D1117] sm:text-5xl lg:text-[56px]">
                Architecture became <span className="text-[#E91E8C]">the product</span>.
              </h2>
            </div>
            <p aria-hidden className="hidden select-none text-[90px] font-extrabold leading-none text-[#919191] sm:block lg:text-[110px]">
              03
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_308px] lg:items-start">
            <div className="border-l-[3px] border-[#3F8CC4] bg-[#F0F7FF] p-6 shadow-[0px_8px_32px_0px_rgba(63,140,196,0.03)] sm:p-8">
              <ul className="flex flex-col gap-2.5 text-base leading-[1.6] text-[#555555]">
                <li className="flex gap-2.5">
                  <span aria-hidden>•</span>
                  Most marketplace apps organize features around business categories. Users don&apos;t think that
                  way.
                </li>
                <li className="flex gap-2.5">
                  <span aria-hidden>•</span>
                  Pet owners think in moments — &lsquo;My pet needs help&rsquo;, &lsquo;My pet needs food&rsquo;,
                  &lsquo;My pet needs a companion&rsquo;.
                </li>
                <li className="flex gap-2.5">
                  <span aria-hidden>•</span>
                  The navigation was organized around user intent, not business verticals.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              {IA_NOTES.map((note, i) => (
                <div
                  key={note}
                  className={`rounded-lg border border-[#DBEAFE] bg-white p-4 shadow-[2px_4px_12px_0px_rgba(0,0,0,0.06)] ${
                    i % 2 === 0 ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  <p className="text-xs leading-[1.55] text-[#555555]">{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {IA_VERSIONS.map((nav) => (
              <div key={nav.version} className="flex flex-col gap-2.5" style={nav.faded ? { opacity: 0.75 } : undefined}>
                <span
                  className={`inline-flex w-fit items-center rounded px-2.5 py-1 text-[11px] font-bold uppercase ${
                    nav.tone === "failed"
                      ? "bg-[#FEF2F2] text-[#32709D]"
                      : nav.tone === "discarded"
                        ? "bg-[#F3F4F6] text-[#6A6A6A]"
                        : "bg-[#EFF8FF] text-[#32709D]"
                  }`}
                >
                  {nav.tone === "shipped" && "✓ "}
                  {nav.version}
                </span>
                <div
                  className={`flex flex-col gap-2.5 rounded-lg p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.03)] ${
                    nav.tone === "shipped"
                      ? "border border-[#BBF7D0] bg-[#EFF8FF] shadow-[0px_4px_16px_0px_rgba(16,185,129,0.07)]"
                      : "border border-[#FECACA] bg-white"
                  }`}
                >
                  <p className={`text-[13px] ${nav.tone === "shipped" ? "font-bold text-[#707070]" : "font-mono text-[#767676]"}`}>{nav.structure}</p>
                  <div className="h-px bg-[#FECACA]/60" />
                  <p className={`text-xs italic ${nav.tone === "shipped" ? "font-medium not-italic text-[#32709D]" : "text-[#3677A7]"}`}>{nav.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {SERVICE_PILLS.map((pill) =>
              pill === "Emergency" ? (
                <span key={pill} className="rounded-full bg-[#3F8CC4] px-4 py-2 text-sm font-bold text-white">
                  {pill}
                </span>
              ) : (
                <span key={pill} className="rounded-full border border-[#D1D5DB] bg-white px-4 py-2 text-sm font-medium text-[#555555]">
                  {pill}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Product Decisions */}
      <section className="pawle-blue-wash px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-[3px] w-8 rounded-full bg-[#E91E8C]" />
          <p className="text-sm font-bold uppercase tracking-wide text-white">Product Decisions</p>
        </div>
        <div className="mt-5 flex flex-col items-end gap-3 sm:flex-row">
          <h2 className="max-w-[680px] text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[64px]">
            Every navigation decision had <span className="text-[#E91E8C]">a reason.</span>
          </h2>
        </div>
        <p className="mt-3 max-w-[640px] text-sm leading-[1.65] text-white/70">
          Key decisions that shaped Pawle into a more intuitive, empathetic and purpose driven experience.
        </p>

        <div className="mt-10 flex flex-col gap-5">
          {PRODUCT_DECISIONS.map((d) => {
            const c = COLOR_MAP[d.color];
            return (
              <div key={d.number} className={`rounded-2xl border-l-4 border-y border-r bg-white p-9 shadow-[0px_2px_16px_0px_rgba(15,23,42,0.02)] ${c.border}`}>
                <div className="flex flex-wrap items-center gap-5 pb-6">
                  <div className="flex w-16 flex-col gap-0.5">
                    <p className={`text-5xl font-extrabold leading-none ${c.text}`}>{d.number}</p>
                    <p className="text-xs font-bold uppercase text-[#747474]">Decision</p>
                  </div>
                  <span className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl ${c.bg}`}>
                    <Icon name={d.icon} className={c.text} />
                  </span>
                  <h3 className="flex-1 text-xl font-bold leading-[1.3] text-ink sm:text-[22px]">{d.title}</h3>
                </div>
                <div className="h-px bg-[#F1F5F9]" />
                <div className="grid gap-6 pt-6 sm:grid-cols-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]" />
                      <p className="text-xs font-bold uppercase text-[#747474]">Alternative</p>
                    </div>
                    <p className="text-[13px] leading-[1.65] text-[#555555]">{d.alternative}</p>
                  </div>
                  <div className="flex flex-col gap-2 border-t border-[#E2E8F0] pt-4 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                    <div className="flex items-center gap-1.5">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]" />
                      <p className="text-xs font-bold uppercase text-[#747474]">Why Rejected</p>
                    </div>
                    <p className="text-[13px] leading-[1.65] text-[#555555]">{d.rejected}</p>
                  </div>
                  <div className="flex flex-col gap-2 border-t border-[#E2E8F0] pt-4 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                    <div className="flex items-center gap-1.5">
                      <span aria-hidden className={`h-3 w-0.5 rounded-full ${c.bar}`} />
                      <p className={`text-xs font-bold uppercase ${c.text}`}>Outcome</p>
                    </div>
                    <p className="text-[13px] font-medium leading-[1.65] text-[#555555]">{d.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5">
          <div className="flex items-center gap-2 text-white/70">
            <Icon name="zap" className="h-3.5 w-3.5" />
            <p className="text-[13px]">Decision log v2.4 (Q1 2025)</p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            {["User Testing", "Architecture", "Accessibility", "Scalability"].map((tag) => (
              <div key={tag} className="flex items-center gap-1.5 text-white/70">
                <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-white/50" />
                <p className="text-[13px]">{tag}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The System */}
        <div className="mt-20 rounded-2xl bg-white p-8 sm:p-14">
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="h-[3px] w-8 rounded-full bg-[#3F8CC4]" />
            <p className="text-sm font-bold uppercase tracking-wide text-[#3677A7]">The System</p>
          </div>
          <h3 className="mt-5 text-3xl font-extrabold leading-[1.1] text-ink sm:text-4xl">
            The system behind <span className="text-[#3F8CC4]">every decision.</span>
          </h3>
          <p className="mt-4 max-w-[640px] text-sm leading-[1.7] text-[#767676]">
            A unified navigation system designed to make the product easy to learn, effortless to use and consistent
            across every touchpoint.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SYSTEM_CARDS.map((card) => {
              const c = COLOR_MAP[card.color];
              return (
                <div key={card.number} className="flex flex-col gap-4 rounded-2xl border border-[#E8ECF2] p-8 shadow-[0px_2px_16px_0px_rgba(15,23,42,0.02)]">
                  <div className="flex items-center justify-between">
                    <p className={`text-xl font-extrabold ${c.text}`}>{card.number}</p>
                    <span className={`flex h-12 w-12 items-center justify-center rounded-[10px] ${c.bg}`}>
                      <Icon name={card.icon} className={c.text} />
                    </span>
                  </div>
                  <span aria-hidden className={`h-[3px] w-8 rounded-full ${c.bar}`} />
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-bold leading-[1.3] text-ink">{card.title}</p>
                    <p className="text-[13px] leading-[1.65] text-[#767676]">{card.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design System — hero */}
      <section className="relative overflow-hidden bg-[#F0F6FF] px-6 pb-12 pt-16 sm:px-10 sm:pb-14 sm:pt-20 lg:px-24 lg:pb-16 lg:pt-20">
        <div className="relative flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex max-w-[560px] flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <Icon name="layers" className="h-[18px] w-[18px] text-[#3F8CC4]" />
              <span aria-hidden className="h-0.5 w-7 rounded-full bg-[#3F8CC4]" />
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#32709D]">The System</p>
            </div>
            <h2 className="text-[40px] font-extrabold leading-[1.05] text-[#111111] sm:text-5xl lg:text-[56px]">
              Systems before screens<span className="text-[#3F8CC4]">.</span>
            </h2>
            <p className="text-base leading-[1.7] text-[#555555]">
              Rather than designing screens independently, the product was built from a reusable system first. Every
              colour became a token. Every spacing value became a scale. Every interaction became reusable.
            </p>
            <div className="flex items-center gap-4 rounded-xl border-l-4 border-[#3F8CC4] bg-[#E8F2FB] py-4 pl-4 pr-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#3F8CC4]">
                <Icon name="wrench" className="h-[18px] w-[18px] text-white" />
              </span>
              <p className="text-[15px] leading-[1.65] text-[#444444]">
                This allowed <strong className="font-bold text-[#3F8CC4]">191 screens</strong> to be designed with
                minimal visual drift while making future product expansion significantly easier.
              </p>
            </div>
          </div>

          {/* Phone mockup — built at Figma's exact 580×700 canvas, uniformly scaled per breakpoint */}
          <div className="relative mx-auto h-[420px] w-[348px] max-w-full shrink-0 sm:h-[560px] sm:w-[464px] lg:mx-0 lg:h-[700px] lg:w-[580px]">
            <div className="absolute left-0 top-0 h-[700px] w-[580px] origin-top-left scale-[0.6] sm:scale-[0.8] lg:scale-100">
              {/* soft blob + glows behind the phone */}
              <div aria-hidden className="absolute left-[80px] top-[60px] h-[580px] w-[480px] rounded-[80px] bg-[#C5DCF0]/85" />
              <div aria-hidden className="absolute left-[60px] top-[60px] h-[580px] w-[460px] rounded-full bg-[#B8D4EC]/50 blur-[30px]" />
              <div aria-hidden className="absolute left-[20px] top-[200px] h-[300px] w-[300px] rounded-full bg-[#7FBBE0]/25 blur-[20px]" />
              <div aria-hidden className="absolute left-[280px] top-[300px] h-[200px] w-[200px] rounded-full border border-dashed border-[#3F8CC4]/50" />
              <div aria-hidden className="absolute left-[88.7px] top-[28px] h-[500px] w-[500px] rounded-full bg-[#3F8CC4]/15 blur-[40px]" />

              {/* phone body */}
              <div className="absolute left-[178.7px] top-[28px] h-[640px] w-[320px] overflow-hidden rounded-[60px] bg-[#0F172A] shadow-[0_40px_80px_-10px_rgba(0,0,0,0.25)]">
                <div className="absolute left-[12px] top-[12px] h-[616px] w-[296px] overflow-hidden rounded-[48px] opacity-80">
                  <Image
                    src="/images/pawle/deep-dive/design-system-phone-dog.png"
                    alt="Pawle app screen showing a puppy photo"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
                <span aria-hidden className="absolute left-[110.6px] top-[12px] h-[24px] w-[98.7px] rounded-b-2xl bg-[#1E293B]" />
                <div className="absolute left-[28px] top-[92px] flex h-[66px] w-[264px] items-center gap-3 rounded-2xl bg-white/90 px-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3F8CC4]">
                    <Icon name="pawPrint" className="h-4 w-4 text-white" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-bold text-ink">Pawle Match</p>
                    <p className="truncate text-[11px] text-[#767676]">A new Goldie is nearby</p>
                  </div>
                  <p className="shrink-0 self-start text-[10px] text-[#9CA3AF]">NOW</p>
                </div>
              </div>
              {/* bezel outline, drawn on top of the body */}
              <div aria-hidden className="absolute left-[178.7px] top-[28px] h-[640px] w-[320px] rounded-[60px] border-[12px] border-[#1E293B]" />

              {/* floating badges */}
              <div className="absolute left-[470px] top-[280px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.13)]">
                <Icon name="pawPrint" className="h-[30px] w-[30px] text-[#3F8CC4]" />
              </div>
              <div className="absolute left-[510px] top-[200px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white opacity-90 shadow-[0_4px_16px_rgba(0,0,0,0.09)]">
                <Icon name="sun" className="h-8 w-8 text-[#F59E0B]" />
              </div>
              <div className="absolute left-[548px] top-[228px] flex items-center gap-1">
                <span aria-hidden className="h-[2px] w-[12px] rounded-full bg-[#3F8CC4]/70" />
                <span aria-hidden className="h-[2px] w-[8px] rounded-full bg-[#3F8CC4]/50" />
              </div>
              <div className="absolute left-[490px] top-[255px] flex h-5 w-5 items-center justify-center opacity-80">
                <Icon name="sun" className="h-4 w-4 text-[#3F8CC4]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System — colour tokens / component anatomy / spacing */}
      <section className="relative bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative grid gap-12 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-[#F1F5F9]">
          {/* Colour Tokens */}
          <div className="lg:pr-10">
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="h-2 w-2 rounded-full bg-[#E91E8C]" />
              <p className="text-xs font-bold uppercase text-ink/60">Colour Tokens</p>
            </div>
            <div className="mt-5 divide-y divide-[#F1F5F9]">
              {COLOR_TOKENS.map((token) => (
                <div key={token.name} className="flex items-center justify-between gap-4 py-3.5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      aria-hidden
                      className="h-8 w-8 shrink-0 rounded-lg border border-[#dedcd4]"
                      style={{ backgroundColor: token.hex }}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-ink">{token.name}</p>
                      <p className="text-xs text-[#888888]">{token.hex}</p>
                    </div>
                  </div>
                  <p className="shrink-0 text-right text-xs text-[#767676]">{token.usage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Component Anatomy */}
          <div className="lg:px-10">
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="h-2 w-2 rounded-full bg-[#10B981]" />
              <p className="text-xs font-bold uppercase text-ink/60">Component Anatomy</p>
            </div>
            <div className="relative mt-5 flex h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-[#E8EEFF] bg-[#F8FAFF]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.05) 0%, rgba(255,255,255,0) 70%)",
                }}
              />
              <span className="relative flex h-14 w-[180px] items-center justify-center rounded-[14px] bg-[#3F8CC4] text-sm font-semibold text-white shadow-[0_8px_28px_rgba(37,99,235,0.25)]">
                Confirm Order
              </span>
              <p className="absolute left-[9%] top-[36%] text-[11px] text-[#767676]">Height: 56dp</p>
              <p className="absolute right-[10%] top-[58%] text-[11px] text-[#767676]">Radius: 14dp</p>
              <p className="absolute bottom-[13%] left-1/2 -translate-x-1/2 text-[11px] text-[#767676]">
                Manrope SemiBold 16sp
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4 border-t border-[#F1F5F9] pt-5">
              {[
                { icon: "layers" as const, label: "Reusable" },
                { icon: "grid" as const, label: "Consistent" },
                { icon: "code" as const, label: "Scalable" },
                { icon: "sparkles" as const, label: "Future-proof" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#EBF3FF] text-[#3F8CC4]">
                    <Icon name={item.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <p className="text-xs font-medium text-[#555555]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Spacing System (compact) */}
          <div className="lg:pl-10">
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="h-2 w-2 rounded-full bg-[#E7000B]" />
              <p className="text-xs font-bold uppercase text-ink/60">Spacing System</p>
            </div>
            <p className="mt-3 text-[13px] leading-[1.5] text-[#767676]">The 4px base unit. Everything is a multiple.</p>
            <div className="mt-5 flex flex-col gap-4">
              {SPACING_SCALE_COMPACT.map((step) => (
                <div key={step.px} className="flex items-center gap-3 text-sm">
                  <span aria-hidden className="h-4 w-1 shrink-0 rounded-full bg-[#3F8CC4]" />
                  <span className="w-10 shrink-0 text-ink">{step.px}px</span>
                  <span className="w-9 shrink-0 text-xs font-bold text-[#3F8CC4]">{step.label}</span>
                  <span className="text-xs text-[#767676]">{step.usage}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-4 border-t border-[#F1F5F9] pt-5">
              {[
                { icon: "check" as const, title: "Durable", body: "Built to last across versions" },
                { icon: "zap" as const, title: "Faster audit", body: "Tokens reduce review cycles" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EBF3FF] text-[#3F8CC4]">
                    <Icon name={item.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <p className="text-xs text-[#888888]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden className="h-1 w-full" style={{ background: "linear-gradient(90deg, #2563EB 0%, #E91E8C 50%, #10B981 100%)" }} />

      {/* Typography Scale */}
      <section className="relative bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-2 w-2 rounded-full bg-[#10B981]" />
          <p className="text-xs font-bold uppercase text-ink/60">Typography Scale</p>
        </div>
        <div className="mt-6 divide-y divide-[#dedcd4] rounded-2xl border border-[#dedcd4]">
          {TYPOGRAPHY_SCALE.map((type) => (
            <div key={type.name} className="p-6">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-[#3F8CC4]">{type.name}</p>
                <p className="text-xs text-[#888888]">{type.spec}</p>
              </div>
              <p className={`mt-3 max-w-[720px] text-ink ${type.className}`}>{type.sample}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Component Library Sample */}
      <section className="relative border-t border-[#F1F5F9] bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-2 w-2 rounded-full bg-[#10B981]" />
          <p className="text-xs font-bold uppercase text-ink/60">Component Library Sample</p>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#dedcd4] p-6">
            <p className="text-sm font-semibold text-[#3F8CC4]">Primary Button</p>
            <p className="text-xs text-[#888888]">Default / Pressed / Disabled</p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="rounded-xl bg-[#3F8CC4] px-5 py-3 text-sm font-medium text-white">Confirm</span>
              <span className="rounded-xl bg-[#1D4ED8] px-5 py-3 text-sm font-medium text-white">Confirm</span>
              <span className="rounded-xl bg-[#F2F4F7] px-5 py-3 text-sm font-medium text-[#888888]">
                Confirm
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-[#dedcd4] p-6">
            <p className="text-sm font-semibold text-[#3F8CC4]">Service Card</p>
            <p className="text-xs text-[#888888]">Available / Booked</p>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-[#fafaf9] p-4">
                <div>
                  <p className="text-sm font-medium text-ink">Nail Trim</p>
                  <p className="text-xs text-[#888888]">15 min • $25</p>
                </div>
                <span className="rounded-full bg-[#10B981]/15 px-3 py-1 text-xs font-medium text-[#10B981]">
                  Available
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-[#fafaf9] p-4">
                <div>
                  <p className="text-sm font-medium text-ink">Bath &amp; Brush</p>
                  <p className="text-xs text-[#888888]">45 min • $65</p>
                </div>
                <span className="rounded-full bg-[#E7000B]/15 px-3 py-1 text-xs font-medium text-[#E7000B]">
                  Booked
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#dedcd4] p-6">
            <p className="text-sm font-semibold text-[#3F8CC4]">Input Field</p>
            <p className="text-xs text-[#888888]">Empty / Filled / Error</p>
            <div className="mt-5 space-y-3">
              <input
                disabled
                placeholder="Email address"
                className="w-full rounded-xl border border-[#dedcd4] bg-transparent px-4 py-3 text-sm text-[#888888] placeholder:text-[#888888]"
              />
              <input
                disabled
                value="alex@pawle.com"
                className="w-full rounded-xl border border-[#3F8CC4] bg-transparent px-4 py-3 text-sm text-ink"
                readOnly
              />
              <div>
                <input
                  disabled
                  value="invalid"
                  className="w-full rounded-xl border border-[#E7000B] bg-transparent px-4 py-3 text-sm text-ink"
                  readOnly
                />
                <p className="mt-1.5 text-xs text-[#E7000B]">Please enter a valid email.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#dedcd4] p-6">
            <p className="text-sm font-semibold text-[#3F8CC4]">Tab Bar</p>
            <p className="text-xs text-[#888888]">Active / Inactive</p>
            <div className="mt-5 flex gap-2">
              {["Home", "Bookings", "Profile"].map((tab, i) => (
                <span
                  key={tab}
                  className={`flex-1 rounded-xl py-3 text-center text-xs font-medium ${
                    i === 0 ? "border border-[#3F8CC4] text-[#3F8CC4]" : "text-[#888888]"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacing System (full scale) */}
      <section className="relative border-t border-[#F1F5F9] bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-2 w-2 rounded-full bg-[#E7000B]" />
          <p className="text-xs font-bold uppercase text-ink/60">Spacing System</p>
        </div>
        <p className="mt-4 max-w-[640px] text-sm text-[#767676]">
          A 4px base unit. Every spacing value is a multiple of 4px.
        </p>
        <div className="mt-6 flex flex-wrap items-end gap-6 rounded-2xl border border-[#dedcd4] p-6">
          {SPACING_SCALE.map((step) => (
            <div key={step.px} className="flex flex-col items-center gap-2">
              <div
                aria-hidden
                className="w-6 rounded-sm bg-[#3F8CC4]"
                style={{ height: `${Math.min(step.px, 64)}px` }}
              />
              <p className="text-xs text-[#767676]">{step.px}px</p>
              <p className="text-[10px] uppercase tracking-wide text-[#888888]">
                {step.label} · {step.usage}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div aria-hidden className="h-1 w-full" style={{ background: "linear-gradient(90deg, #2563EB 0%, #E91E8C 50%, #10B981 100%)" }} />

      {/* Deep Dive / Platform Modules */}
      <section>
        {DEEP_DIVE_FEATURES.map((feature) => (
          <article
            key={feature.number}
            className={`border-t border-[#E2E8E4] px-6 py-16 sm:px-10 lg:px-20 lg:py-20 ${
              feature.bg === "cream" ? "bg-[#FAFAFA]" : "bg-white"
            }`}
          >
            <div className="relative mx-auto max-w-[1200px]">
              <div className="flex items-end justify-between gap-4">
                <p aria-hidden className="pointer-events-none select-none text-[90px] font-extrabold leading-none text-[#3C85BA]/[0.18] sm:text-[130px]">
                  {feature.number}
                </p>
                <div className="flex items-center gap-2.5 pb-4">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#3F8CC4]" />
                  <p className="text-xs font-bold uppercase tracking-wide text-[#3677A7]">{feature.eyebrow}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="flex flex-col gap-6">
                  <h3 className="text-3xl font-extrabold leading-[1.2] text-[#0D1117] sm:text-[40px]">
                    {feature.title}
                    <span className="text-[#2563EB]">{feature.titleAccent}</span>
                  </h3>
                  <p className="whitespace-pre-line text-base leading-[1.75] text-[#555555]">{feature.body}</p>

                  {feature.callout.tone === "quote" ? (
                    <div className="pawle-blue-wash rounded border-l-[3px] border-[#3F8CC4] p-6">
                      <p className="text-sm italic leading-[1.65] text-white">
                        <strong className="not-italic">{feature.callout.label.toUpperCase()}: </strong>
                        {feature.callout.text}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={`flex items-start gap-3.5 rounded border-l-[3px] p-5 ${
                        feature.callout.tone === "blue"
                          ? "border-[#E2E8F0] bg-[#F7F8FA]"
                          : "border-[#F59E0B] bg-[#FFFBF0]"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${
                          feature.callout.tone === "blue" ? "border-[#E2E8F0] bg-white text-[#3F8CC4]" : "bg-[#FEF3C7] text-[#AE5F05]"
                        }`}
                      >
                        <Icon name={feature.callout.tone === "blue" ? "zap" : "alertTriangle"} className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wide ${feature.callout.tone === "blue" ? "text-[#3677A7]" : "text-[#AE5F05]"}`}>
                          {feature.callout.label}
                        </p>
                        <p className={`mt-1 text-[13px] leading-[1.65] ${feature.callout.tone === "blue" ? "text-[#555555]" : "italic text-[#78350F]"}`}>
                          {feature.callout.text}
                        </p>
                      </div>
                    </div>
                  )}

                  {feature.stats && (
                    <div className="flex flex-wrap items-center gap-6 border-t border-[#E2E8E4] pt-6">
                      {feature.stats.map((stat, i) => (
                        <div key={stat.label} className="flex items-center gap-6">
                          {i > 0 && <span aria-hidden className="hidden h-10 w-px bg-[#E2E8E4] sm:block" />}
                          <div>
                            <p className="text-[28px] font-extrabold text-ink">{stat.value}</p>
                            <div className="mt-1 flex items-center gap-1.5 text-[#68747E]">
                              <Icon name="monitor" className="h-3 w-3" />
                              <p className="text-xs font-bold uppercase">{stat.label}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {feature.images.length === 1 ? (
                  <div className="overflow-hidden rounded-2xl shadow-[0px_16px_40px_0px_rgba(13,17,23,0.13)]">
                    <Image
                      src={feature.images[0]}
                      alt={`Pawle — ${feature.eyebrow} screen`}
                      width={520}
                      height={296}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center gap-4">
                    {feature.images.map((src, i) => (
                      <div
                        key={src + i}
                        className={`w-1/3 shrink-0 overflow-hidden rounded-2xl shadow-[0px_16px_40px_0px_rgba(13,17,23,0.13)] ${
                          i === 1 ? "-translate-y-4" : ""
                        }`}
                      >
                        <Image src={src} alt={`Pawle — ${feature.eyebrow} screen ${i + 1}`} width={167} height={368} className="h-auto w-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Decisions, tradeoffs & friction */}
      <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <div className="flex items-center gap-2">
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-[#3F8CC4]" />
            <p className="text-xs font-bold uppercase tracking-wide text-[#3677A7]">Decisions, Tradeoffs &amp; Friction</p>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl lg:text-[64px]">Constraints shaped the product.</h2>
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            Every decision balanced user needs against technical reality. Constraints included MVP launch timeline,
            small founding team, React Native implementation, marketplace complexity and limited engineering
            bandwidth. These constraints forced prioritization and made the product stronger.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {FRICTION_CASES.map((c) => {
              const colors = COLOR_MAP[c.color];
              return (
                <div key={c.title} className="flex flex-col gap-5 rounded-xl border-l-4 border-y border-r border-[#E5E7EB] bg-white p-7 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)]" style={{ borderLeftColor: undefined }}>
                  <div className="flex items-center gap-2">
                    <span aria-hidden className={`h-0.5 w-5 rounded-full ${colors.bar}`} />
                    <p className={`text-xs font-bold uppercase ${colors.text}`}>{c.case}</p>
                  </div>
                  <span className={`flex h-[52px] w-[52px] items-center justify-center rounded-xl ${colors.bg}`}>
                    <Icon name={c.icon} className={colors.text} />
                  </span>
                  <h3 className="text-xl font-bold text-ink">{c.title}</h3>
                  <p className="whitespace-pre-line text-sm leading-6 text-[#767676]">{c.body}</p>
                  <p className={`text-[13px] font-bold ${colors.text}`}>→ {c.takeaway}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span aria-hidden className="h-0.5 w-6 rounded-full bg-[#9CA3AF]" />
              <p className="text-xs font-bold uppercase text-[#747474]">Constraints</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {CONSTRAINT_CHIPS.map((chip) => (
                <span key={chip.label} className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-[13px] font-medium text-[#555555] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]">
                  <Icon name={chip.icon} className="h-3.5 w-3.5 text-[#555555]" />
                  {chip.label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-8 flex flex-col gap-6 overflow-hidden rounded-2xl border border-[#DBEAFE] bg-[#F0F7FF] p-8 sm:flex-row sm:p-12">
            <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-[#3F8CC4]" />
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#DBEAFE] text-[#3F8CC4]">
              <Icon name="users" className="h-8 w-8" />
            </span>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold text-ink">Cross-functional Collaboration</p>
              <p className="text-sm leading-[1.65] text-[#555555]">
                Throughout the project I partnered closely with founders and engineering to align product strategy,
                technical feasibility and user needs.
                <br />
                Rather than designing screens in isolation, product decisions were continuously validated through
                discussion, prototyping and implementation feedback.
                <br />
                This created a design process that was fast, grounded in reality and aligned across the team —
                reducing rework and ensuring the product could actually be built to the timelines we had.
              </p>
              <p className="text-sm font-bold text-[#32709D]">→ Faster delivery. Fewer surprises. Stronger alignment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue decisions */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <div className="flex items-center gap-2">
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-[#3F8CC4]" />
            <p className="text-xs font-bold uppercase tracking-wide text-[#3677A7]">Design Decisions That Drove Revenue</p>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl lg:text-[64px]">
            Great UX and business outcomes aren&apos;t in conflict.
          </h2>
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            These four decisions were made with both the user and the revenue model in mind. Each connects a UX
            choice directly to a monetization lever — reducing friction, capturing margin, driving repeat bookings,
            and converting subscriptions.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {REVENUE_DECISIONS.map((d) => {
              const colors = COLOR_MAP[d.color];
              return (
                <div key={d.title} className="flex flex-col gap-4 rounded-xl border-l-4 border-y border-r border-[#E5E7EB] bg-white p-7 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-2">
                    <span aria-hidden className={`h-0.5 w-5 rounded-full ${colors.bar}`} />
                    <p className={`text-xs font-bold uppercase ${colors.text}`}>{d.case}</p>
                  </div>
                  <span className={`flex h-[52px] w-[52px] items-center justify-center rounded-xl ${colors.bg}`}>
                    <Icon name={d.icon} className={colors.text} />
                  </span>
                  <h3 className="text-lg font-bold text-ink">{d.title}</h3>
                  <p className="text-[13px] leading-6 text-[#767676]">
                    <span className="font-medium text-[#888888]">Alternative:</span> {d.alternative}
                  </p>
                  <p className="text-[13px] leading-6 text-[#767676]">
                    <span className="font-medium text-[#888888]">Outcome:</span> {d.outcome}
                  </p>
                  <p className={`text-[13px] font-bold ${colors.text}`}>→ {d.takeaway}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* A/B Testing */}
      <section className="bg-[#EEF2FF] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="flex items-center gap-2">
          <span aria-hidden className="h-0.5 w-7 rounded-full bg-[#3F8CC4]" />
          <p className="text-xs font-bold uppercase tracking-wide text-[#32709D]">A/B Testing</p>
        </div>
        <h2 className="mt-4 max-w-[720px] text-4xl font-extrabold leading-[1.1] text-[#0F172A] sm:text-5xl">
          Every hypothesis was a bet. Here is what I <span className="text-[#14B8A6]">won</span> and{" "}
          <span className="text-[#F43F5E]">lost.</span>
        </h2>
        <div className="mt-4 flex items-start gap-3 border-t-2 border-[#E91E8C]/40 pt-3">
          <span aria-hidden className="text-3xl font-extrabold leading-[0.7] text-[#E91E8C]">
            &ldquo;
          </span>
          <p className="text-sm leading-[1.6] text-[#555555]">
            I ran four controlled tests. I was wrong once. That wrong answer taught me more than the three right
            ones.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2">
          {AB_TESTS.map((t) => {
            const c = COLOR_MAP[t.color];
            return (
              <div key={t.hypothesis} className="flex flex-col items-stretch gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)] sm:flex-row sm:items-center">
                <div className="flex w-full items-center gap-2 sm:w-[90px] sm:flex-col sm:items-center">
                  <p className={`text-4xl font-extrabold leading-none ${c.text}`}>{t.number}</p>
                  <span className={`flex h-9 w-11 items-center justify-center rounded-lg ${c.bg}`}>
                    <Icon name={t.icon} className={c.text} />
                  </span>
                  <p className={`text-xs font-bold uppercase ${c.text} sm:hidden`}>Hypothesis</p>
                </div>
                <span aria-hidden className="hidden h-14 w-px bg-[#E2E8F0] sm:block" />
                <div className="flex-1 sm:px-5">
                  <p className="text-xl font-bold text-ink">{t.hypothesis}</p>
                </div>
                <span aria-hidden className="hidden h-14 w-px bg-[#E2E8F0] sm:block" />
                <div className="sm:px-5">
                  <p className="text-xs font-bold uppercase text-[#747474]">Metric Impact</p>
                  <p className={`text-[28px] font-extrabold leading-none ${c.text}`}>{t.metricValue}</p>
                  <p className={`text-[13px] font-medium ${c.text}`}>{t.metricLabel}</p>
                </div>
                <span aria-hidden className="hidden h-14 w-px bg-[#E2E8F0] sm:block" />
                <div className="sm:px-5">
                  <p className="text-xs font-bold uppercase text-[#747474]">Version A</p>
                  <p className="text-sm text-[#767676]">{t.versionA}</p>
                </div>
                <span aria-hidden className="hidden h-14 w-px bg-[#E2E8F0] sm:block" />
                <div className="flex items-center gap-3 sm:pl-5">
                  <div>
                    <p className={`text-xs font-bold uppercase ${c.text}`}>Version B · Winner</p>
                    <p className="text-base font-bold text-ink">{t.winner}</p>
                  </div>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${c.bg}`}>
                    <Icon name="trophy" className={`h-[18px] w-[18px] ${c.text}`} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)]">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#3F8CC4]">
            <Icon name="lightbulb" />
          </span>
          <p className="text-[15px] italic leading-[1.7] text-[#475569]">
            &ldquo;When I was wrong: I initially argued for a 4-tab navigation on aesthetic grounds — it felt
            cleaner. The data disagreed. <strong className="font-bold not-italic text-[#2563EB]">I shipped 5 tabs.</strong>&rdquo;
          </p>
        </div>
      </section>

      {/* If this shipped */}
      <section className="pawle-blue-wash px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="flex items-center gap-2">
          <span aria-hidden className="h-0.5 w-8 rounded-full bg-[#E91E8C]" />
          <p className="text-xs font-bold uppercase tracking-wide text-[#F9A8D4]">If This Shipped</p>
        </div>
        <h2 className="mt-4 max-w-[720px] text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
          I won&apos;t fake metrics. Here is what I expected.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {PROJECTED_METRICS.map((m) => (
            <div key={m.label} className="rounded-xl border border-[#DBEAFE] bg-white p-5 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)]">
              <p className="text-[13px] font-bold uppercase text-[#3677A7]">{m.label}</p>
              <p className="mt-2 text-5xl font-extrabold text-ink">{m.value}</p>
              <p className="mt-2 text-sm leading-[1.5] text-[#767676]">{m.body}</p>
              <p className="mt-2 text-[13px] font-bold leading-[1.5] text-[#555555]">{m.why}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-[#DBEAFE] bg-[#F0F7FF] p-9">
          <p className="mx-auto max-w-[720px] text-center text-base leading-[1.75] text-[#555555]">
            This product was not shipped. I designed it as a 0→1 portfolio project. So I&apos;ll give you success
            metrics — not vanity metrics — and explain how I&apos;d measure them.
          </p>
        </div>

        <div className="mt-16">
          <p className="text-3xl font-extrabold leading-[1.1] text-white">What comes next (the roadmap)</p>
          <p className="mt-3 max-w-[640px] text-lg leading-[1.5] text-white/80">
            These aren&apos;t wishes — they&apos;re the next logical moves given the retention loops Pawle was
            designed to create.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {ROADMAP.map((r) => (
              <div key={r.title} className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white p-5 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] sm:flex-row">
                <div className="flex shrink-0 flex-col gap-2.5 sm:w-[220px]">
                  <span className="inline-flex w-fit items-center rounded-full border border-[#3F8CC4]/25 bg-[#3F8CC4]/10 px-3.5 py-1.5 text-[13px] font-bold text-[#3677A7]">
                    {r.phase}
                  </span>
                  <p className="text-xl font-bold text-ink">{r.title}</p>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <p className="text-sm leading-[1.65] text-[#767676]">{r.body}</p>
                  <p className="text-[13px] font-bold text-[#767676]">{r.takeaway}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="bg-[#F0F2F8] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-[#3F8CC4]" />
            <p className="text-xs font-bold uppercase tracking-wide text-[#32709D]">Reflection</p>
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-[#3F8CC4]" />
          </div>
          <h2 className="text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl">What this project taught me.</h2>
          <div className="flex max-w-[820px] items-start gap-4">
            <span aria-hidden className="text-6xl font-bold leading-[0.6] text-[#3C85BA]/[0.6]">
              &ldquo;
            </span>
            <p className="text-xl italic leading-[1.45] text-[#555555]/[0.9] sm:text-[26px]">
              Designing 195 screens wasn&apos;t the challenge.
              <br />
              Designing a system capable of producing the next 300 screens was.&rdquo;
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {REFLECTIONS.map((r, i) => {
            const c = COLOR_MAP[r.color];
            return (
              <div key={r.title} className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]">
                <span className={`flex h-11 w-11 items-center justify-center rounded-[10px] ${c.bg}`}>
                  <Icon name={r.icon} className={c.text} />
                </span>
                <p className={`text-[40px] font-extrabold leading-none ${c.text}`}>{String(i + 1).padStart(2, "0")}</p>
                <span aria-hidden className={`h-[3px] w-8 rounded-full ${c.bar}`} />
                <h3 className="text-lg font-bold leading-[1.25] text-ink">{r.title}</h3>
                <p className="text-sm leading-[1.65] text-[#767676]">{r.body}</p>
                <span aria-hidden className={`absolute inset-x-0 bottom-0 h-1 ${c.bar}`} />
              </div>
            );
          })}
        </div>

        <div className="mt-14 mx-auto flex max-w-[720px] items-center gap-5 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-[#7C3AED]">
            <Icon name="star" className="h-5 w-5" />
          </span>
          <p className="text-lg italic leading-[1.5] text-[#374151]">
            <strong className="font-bold not-italic text-[#2563EB]">Good interfaces</strong> solve today&apos;s
            problems. <strong className="font-bold not-italic text-[#059669]">Great systems</strong> make
            tomorrow&apos;s problems easier to solve.
          </p>
        </div>
      </section>

      {/* Color Accessibility & Combinations */}
      <section className="bg-[#0A0E1A] px-6 py-16 sm:px-10 lg:px-20">
        <div className="flex items-center gap-2">
          <span aria-hidden className="h-2 w-2 rounded-full bg-[#3F8CC4]" />
          <p className="text-xs font-bold uppercase text-white/80">Color Accessibility &amp; Combinations</p>
        </div>
        <span aria-hidden className="mt-1.5 block h-0.5 w-6 rounded-full bg-[#3F8CC4]" />
        <p className="mt-6 max-w-[640px] text-[13px] leading-[1.5] text-white/70">
          Pairings are designed to meet WCAG 2.1 AA contrast requirements. Use these combinations for text on
          backgrounds.
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {COLOR_COMBINATIONS.map((combo) => (
            <div key={combo.usage} className="flex flex-col items-stretch gap-3 rounded-2xl border border-white/10 bg-[#101828] p-4 sm:flex-row sm:items-center">
              <div className="flex w-full items-center gap-2.5 sm:w-[220px]">
                <span aria-hidden className="h-9 w-9 shrink-0 rounded-lg" style={{ backgroundColor: combo.hex }} />
                <div>
                  <p className="text-[13px] font-bold text-white">{combo.name}</p>
                  <p className="text-xs text-white/60">{combo.hex}</p>
                </div>
              </div>
              <p className="text-xs text-white/60 sm:hidden">Text on white</p>
              <div className="flex-1 rounded-xl bg-white p-3">
                <p className="text-base font-semibold" style={{ color: combo.hex }}>
                  {combo.usage}
                </p>
                <p className="mt-0.5 text-[13px] text-[#475467]">{combo.body}</p>
              </div>
              <div className="flex w-full items-center justify-between gap-1.5 sm:w-[120px] sm:flex-col sm:items-end">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${
                    combo.badge === "Fail" ? "bg-[#E91E8C]/10 text-[#E91E8C]" : "bg-[#10B981]/10 text-[#10B981]"
                  }`}
                >
                  <Icon name={combo.badge === "Fail" ? "x" : "check"} className="h-3.5 w-3.5" />
                  {combo.badge}
                </span>
                <p className="text-xs text-white/60">Ratio: {combo.ratio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Responsive Grid System */}
      <section className="bg-white px-6 py-16 sm:px-10 lg:px-20">
        <div className="flex items-center gap-2">
          <span aria-hidden className="h-2 w-2 rounded-full bg-[#3F8CC4]" />
          <p className="text-xs font-bold uppercase text-[#555555]">Responsive Grid System</p>
        </div>
        <span aria-hidden className="mt-1.5 block h-0.5 w-6 rounded-full bg-[#3F8CC4]" />
        <p className="mt-6 max-w-[720px] text-[13px] leading-[1.5] text-[#767676]">
          A 12-column grid that adapts across breakpoints. Desktop uses 12 columns, Tablet uses 8 columns, and
          Mobile uses 4 columns.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {GRID_BREAKPOINTS.map((bp) => (
            <div key={bp.name} className="rounded-2xl border border-[#E8EEFF] bg-[#F8FAFF] p-4">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-bold text-ink">{bp.name}</p>
                <p className="text-xs text-[#747474]">{bp.range}</p>
              </div>
              <p className="mt-1 text-xs text-[#747474]">{bp.columns} columns</p>
              <div className="mt-3 flex h-11 gap-1 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
                {Array.from({ length: bp.columns }).map((_, i) => (
                  <span key={i} aria-hidden className="h-full flex-1 bg-[#3F8CC4]/10" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accessibility Standards */}
      <section className="bg-[#0A0E1A] px-6 py-16 sm:px-10 lg:px-20">
        <div className="flex items-center gap-2">
          <span aria-hidden className="h-2 w-2 rounded-full bg-[#3F8CC4]" />
          <p className="text-xs font-bold uppercase text-white/80">Accessibility Standards</p>
        </div>
        <span aria-hidden className="mt-1.5 block h-0.5 w-6 rounded-full bg-[#3F8CC4]" />
        <p className="mt-6 max-w-[640px] text-[13px] leading-[1.5] text-white/70">
          Key accessibility best practices implemented across the system.
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {A11Y_STANDARDS.map((item) => (
            <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#101828] p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#10B981]/10 text-[#10B981]">
                <Icon name="check" className="h-[18px] w-[18px]" />
              </span>
              <div>
                <p className="text-[13px] font-bold text-white">{item.title}</p>
                <p className="mt-0.5 text-xs text-white/60">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Final Product */}
      <section className="relative bg-[#F7FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <p className="text-[13px] font-medium uppercase tracking-[0.3em] text-[#1A73D1]">The Final Product</p>
        <h2 className="mt-4 max-w-[600px] text-4xl font-extrabold leading-[1.1] text-[#1A1A1F] sm:text-5xl">
          The product that shipped.
        </h2>
        <p className="mt-4 max-w-[700px] text-base leading-[1.6] text-[#6B707D]">
          15 mobile screens and 10 responsive web pages — every touchpoint from onboarding to booking, shopping, and
          social matching. Built from one unified design system.
        </p>

        <div className="mt-14">
          <p className="text-xl font-bold text-[#333338]">Mobile Experience</p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MOBILE_SCREENS.map((screen) => (
              <div key={screen.label} className="flex flex-col items-center gap-4">
                <div className="w-full max-w-[380px] overflow-hidden rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
                  <Image
                    src={screen.src}
                    alt={`Pawle app — ${screen.label} screen`}
                    width={380}
                    height={842}
                    className="h-auto w-full"
                  />
                </div>
                <p className="text-[13px] font-medium text-[#696D77]">{screen.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="text-xl font-bold text-[#333338]">Desktop Platform</p>
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="w-full overflow-hidden rounded-xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)]">
              <Image
                src="/images/pawle/showcase/screen-homepage.png"
                alt="Pawle web — Homepage"
                width={1280}
                height={672}
                className="h-auto w-full"
              />
            </div>
            <p className="text-[13px] font-medium text-[#696D77]">Homepage</p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {DESKTOP_SCREENS.map((screen) => (
              <div key={screen.label} className="flex flex-col items-center gap-4">
                <div className="w-full overflow-hidden rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)]">
                  <Image
                    src={screen.src}
                    alt={`Pawle web — ${screen.label}`}
                    width={625}
                    height={335}
                    className="h-auto w-full"
                  />
                </div>
                <p className="text-[13px] font-medium text-[#696D77]">{screen.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyNav currentSlug="pawle" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
