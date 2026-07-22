import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobee — Case Study",
  description:
    "A cashback rewards platform connecting shoppers and retailers through intelligent location-based discovery. Four chapters: trust, pricing, retention, and incentives.",
  alternates: { canonical: "/work/mobee" },
  openGraph: {
    title: "Mobee — Case Study — Rishav Singh",
    description: "Retail intelligence & cashback rewards, told across four product design chapters.",
    url: "/work/mobee",
  },
};

const CHAPTERS = [
  {
    slug: "letter-of-authorization",
    number: "01",
    title: "Letter of Authorization",
    headline: "Reducing Retail Survey Abandonment Through Trust-First UX",
    body: "Retail survey participants abandoned missions after being questioned by store employees. Rather than redesigning the survey, we redesigned trust.",
    tag: "UX Research & Product Strategy",
  },
  {
    slug: "pin-level-pricing",
    number: "02",
    title: "Pin-Level Pricing",
    headline: "Killing Mosquitos with Axes",
    body: "How implementing dynamic, store-level pricing unblocked mission-critical metrics and drove up coverage by 20%.",
    tag: "Product & Pricing Strategy",
  },
  {
    slug: "reckless-abandon",
    number: "03",
    title: "Reckless Abandon",
    headline: "Mission Abandonment Back to Normal Levels After 40% High",
    body: "Systematic root-cause analysis and cross-functional alignment rescued user retention and brought abandonment back to baseline.",
    tag: "UX Research & Cross-Functional Leadership",
  },
  {
    slug: "bonus-implementation",
    number: "04",
    title: "Bonus Implementation",
    headline: "Money Talks: Fueling Mission Completion with Active In-App Bonuses",
    body: "Designing and validating a contextually-relevant in-app reward highlight system that targets user motivation in the moment.",
    tag: "Product Design & User Research",
  },
];

export default function MobeePage() {
  return (
    <main className="flex-1 bg-paper">
      <CaseStudyHero
        eyebrow="Consumer App · UX · Brand"
        title="Mobee — Retail Intelligence & Cashback Rewards"
        subtitle="A crowdsourced secret-shopping platform connecting independent shoppers with retail brands. This case study is told across four chapters — each solving a distinct product problem inside the same live system."
        pills={["🐝 Mobee", "Lead Product Designer", "End-to-End, 0→1"]}
        heroImage="/images/work-mobee.png"
        heroImageAlt="Mobee — cashback shopping app screens with map-based nearby offers"
      />

      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="Chapters" title="Four problems. One product." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {CHAPTERS.map((chapter) => (
              <Link
                key={chapter.slug}
                href={`/work/mobee/${chapter.slug}`}
                className="group flex flex-col rounded-2xl border border-[#dedcd4] bg-white p-7 transition-colors hover:border-ink/30"
              >
                <p className="text-xs font-bold text-[#888888]">{chapter.number} · {chapter.tag}</p>
                <h3 className="mt-4 text-xl font-semibold text-ink">{chapter.title}</h3>
                <p className="mt-2 text-sm font-medium text-[#767676]">{chapter.headline}</p>
                <p className="mt-3 text-[13px] leading-5 text-[#888888]">{chapter.body}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-ink transition-transform group-hover:translate-x-1">
                  Read Chapter <span aria-hidden>→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyNav currentSlug="mobee" />
      <CtaStrip outlineButton />
      <Footer variant="home" />
    </main>
  );
}
