import type { Metadata } from "next";
import Footer from "@/components/Footer";
import CtaStrip from "@/components/CtaStrip";
import WorkExplorer from "./WorkExplorer";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design projects — AI products, SaaS platforms, consumer apps, and brand systems. Every project here demanded something different.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Rishav Singh",
    description: "Selected product design projects across AI, SaaS, mobile, and brand.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <main className="flex-1 bg-paper">
      <WorkExplorer />

      {/* Behance banner */}
      <section className="px-6 pb-16 sm:px-10 lg:px-20">
        <div className="flex flex-col items-start gap-8 rounded-3xl border border-[#e5e7eb] bg-white p-10 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center sm:justify-between lg:px-20 lg:py-16">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#6b7280]">Portfolio</p>
            <h2 className="text-2xl font-semibold tracking-[-0.5px] text-[#111827] sm:text-[28px]">
              Explore my full portfolio on Behance
            </h2>
            <p className="text-sm leading-[22px] text-[#6b7280]">
              More case studies, design systems, and product explorations.
            </p>
          </div>
          <a
            href="https://www.behance.net/rishavsingh46"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-[#111827] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.08)] transition-opacity hover:opacity-90"
          >
            See more on Behance →
          </a>
        </div>
      </section>

      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
