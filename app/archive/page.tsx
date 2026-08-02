import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "The complete project archive — every product, system, and brand Rishav Singh has designed, contributed to, or explored.",
  alternates: { canonical: "/archive" },
  openGraph: {
    title: "Archive — Rishav Singh",
    description: "Every product, system, and brand designed, contributed to, or explored.",
    url: "/archive",
  },
};

const STATS = [
  { value: "05", label: "Published Case Studies" },
  { value: "04", label: "Industries" },
  { value: "14", label: "Products & Projects" },
  { value: "03", label: "Design Systems" },
];

type Status = { label: string; color: string; arrow?: boolean };

const STATUS = {
  caseStudy: { label: "View Case Study", color: "text-ink", arrow: true },
  inProgress: { label: "In Progress", color: "text-[#F97316]" },
  archived: { label: "Archived", color: "text-[#737373]" },
  confidential: { label: "Confidential", color: "text-[#9CA3AF]" },
  playground: { label: "Playground", color: "text-[#8B5CF6]", arrow: true },
} satisfies Record<string, Status>;

const ENTRIES: { project: string; discipline: string; year: string; status: Status; href?: string }[] = [
  { project: "Pawle", discipline: "Product Design · Mobile · Marketplace", year: "2025", status: STATUS.caseStudy, href: "/work/pawle" },
  { project: "Suchamai AI", discipline: "AI Product · Enterprise SaaS", year: "2025", status: STATUS.caseStudy, href: "/work/suchamai-ai" },
  { project: "Wiser Design System", discipline: "Design Systems · Enterprise", year: "2025", status: STATUS.caseStudy, href: "/work/wiser-solutions" },
  { project: "Trovex AI", discipline: "AI Sales Platform · Product Design", year: "2025", status: STATUS.caseStudy, href: "/work/trovex-ai" },
  { project: "Mobee", discipline: "UX Research · Retail Intelligence", year: "2024", status: STATUS.caseStudy, href: "/work/mobee" },
  { project: "Selectr", discipline: "Consumer Product · Social Discovery", year: "2026", status: STATUS.inProgress },
  { project: "Debtworks", discipline: "Brand Identity, Website Design and Wix Dev.", year: "2026", status: STATUS.archived },
  { project: "Donate2Impact", discipline: "Non-Profit · Dashboard & Platform", year: "2026", status: STATUS.archived },
  { project: "Australian Smile Group", discipline: "Healthcare · Website Design", year: "2025", status: STATUS.archived },
  { project: "The Dental Van", discipline: "Healthcare · Brand & Website", year: "2025", status: STATUS.archived },
  { project: "Campus Ready LMS", discipline: "EdTech · AI Learning Platform", year: "2025", status: STATUS.confidential },
  { project: "UNO Minda HMI Concepts", discipline: "Automotive UX · HMI", year: "2022-2023", status: STATUS.confidential },
  { project: "Independent Brand Identity Work", discipline: "Brand Identity · Visual Design", year: "2022-2024", status: STATUS.archived },
  { project: "UI Explorations & Product Concepts", discipline: "Interaction Design · Experiments", year: "Ongoing", status: STATUS.playground },
];

function StatusCell({ status, href }: { status: Status; href?: string }) {
  const content = (
    <span className={`inline-flex items-center gap-2 text-xs font-medium ${status.color}`}>
      {status.label}
      {status.arrow && <span aria-hidden>→</span>}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="transition-opacity hover:opacity-70">
        {content}
      </Link>
    );
  }
  return content;
}

export default function ArchivePage() {
  return (
    <main className="flex-1 bg-paper">
      {/* Hero */}
      <section className="dark-wash relative min-h-[440px] overflow-hidden">
        <HeroBackdrop />
        <Nav active="Archive" />
        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-[640px] flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- Complete Project Archive</p>
          <h1 className="mt-3 text-6xl leading-none text-white lg:text-[80px]">Archive.</h1>
          <p className="mt-4 text-lg leading-[29px] text-white/60">
            A complete record of products, systems, experiments, and brands I&apos;ve designed, contributed to, or
            explored over the years.
          </p>
        </div>
      </section>

      {/* Table (stats appear as the first row, per Figma) */}
      <section className="px-6 py-10 sm:px-10 lg:px-[150px]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="border-b border-black/10">
                {["Project", "Discipline", "Year", "Status"].map((heading) => (
                  <th
                    key={heading}
                    className="pb-3 pt-6 pr-4 text-[10px] font-medium uppercase tracking-wide text-[#888888]"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/10">
                {STATS.map((stat, i) => (
                  <td key={stat.label} className={i === 0 ? "w-[400px] py-6 pr-4" : i === 1 ? "w-[340px] py-6 pr-4" : i === 2 ? "w-[120px] py-6 pr-4" : "py-6"}>
                    <p className="text-sm font-medium text-ink">{stat.value}</p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#888888]">{stat.label}</p>
                  </td>
                ))}
              </tr>
              {ENTRIES.map((entry, i) => (
                <tr key={entry.project} className={`border-b border-black/10 ${i % 2 === 1 ? "bg-black/[0.02]" : ""}`}>
                  <td className="w-[400px] py-6 pr-4 text-sm text-ink">{entry.project}</td>
                  <td className="w-[340px] py-6 pr-4 text-sm text-ink">{entry.discipline}</td>
                  <td className="w-[120px] py-6 pr-4 text-sm text-ink">{entry.year}</td>
                  <td className="py-6">
                    <StatusCell status={entry.status} href={entry.href} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-16 w-fit border-y border-black/10 px-6 py-3 text-xs text-[#888888]">
          14 Projects &nbsp;·&nbsp; 4 Industries &nbsp;·&nbsp; 3 Design Systems &nbsp;·&nbsp; 5 Product Case Studies
        </p>
        <div className="h-16" />
      </section>

      <CtaStrip />
      <Footer />
    </main>
  );
}
