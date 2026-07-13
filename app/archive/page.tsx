import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "The complete record — every project Rishav Singh has shipped, contributed to, or learned from. 14 entries spanning 2020 to present.",
  alternates: { canonical: "/archive" },
  openGraph: {
    title: "Archive — Rishav Singh",
    description: "Every project shipped, contributed to, or learned from since 2020.",
    url: "/archive",
  },
};

type Status =
  | { kind: "case-study"; label: "Case Study Available" }
  | { kind: "lead"; label: "Lead Designer" }
  | { kind: "muted"; label: string; note?: string };

const ENTRIES: { index: string; project: string; discipline: string; year: string; status: Status }[] = [
  { index: "01", project: "Pawle", discipline: "UX Design · Mobile · Brand", year: "2024", status: { kind: "case-study", label: "Case Study Available" } },
  { index: "02", project: "Wiser Solutions", discipline: "UX Design · Web · SaaS", year: "2024", status: { kind: "case-study", label: "Case Study Available" } },
  { index: "03", project: "Suchamai AI", discipline: "AI Product · Web", year: "2024", status: { kind: "case-study", label: "Case Study Available" } },
  { index: "04", project: "Trovex.ai", discipline: "AI Product · Systems · Brand", year: "2024–Present", status: { kind: "lead", label: "Lead Designer" } },
  { index: "05", project: "SELECTR", discipline: "Brand · Web Design · No-Code", year: "2023", status: { kind: "case-study", label: "Case Study Available" } },
  { index: "06", project: "Mobee", discipline: "Consumer App · UX", year: "2023", status: { kind: "muted", label: "Archived" } },
  { index: "07", project: "Qapital Dashboard", discipline: "SaaS · UX Audit", year: "2023", status: { kind: "muted", label: "Confidential" } },
  { index: "08", project: "Brand System — QLIRO", discipline: "Brand Identity", year: "2022", status: { kind: "muted", label: "Archived" } },
  { index: "09", project: "PayPal UX Exploration", discipline: "UX Research · Interaction", year: "2022", status: { kind: "muted", label: "Speculative", note: "(Personal)" } },
  { index: "10", project: "Readly Redesign", discipline: "UX Design · Mobile", year: "2022", status: { kind: "muted", label: "Concept" } },
  { index: "11", project: "Zettle POS Flows", discipline: "UX · Service Design", year: "2021", status: { kind: "muted", label: "Confidential" } },
  { index: "12", project: "Trustly Onboarding", discipline: "UX · Web", year: "2021", status: { kind: "muted", label: "Archived" } },
  { index: "13", project: "Spotify Social Layer", discipline: "Interaction Design", year: "2021", status: { kind: "muted", label: "Speculative", note: "(Personal)" } },
  { index: "14", project: "Freelance Brand Work", discipline: "Brand Identity", year: "2020–2021", status: { kind: "muted", label: "Archived" } },
];

function StatusCell({ status }: { status: Status }) {
  if (status.kind === "case-study") {
    return (
      <span className="inline-flex items-center gap-2 text-xs font-medium text-ink">
        {status.label}
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
        >
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </span>
    );
  }
  if (status.kind === "lead") {
    return <span className="text-xs font-medium text-[#2ed473]">{status.label}</span>;
  }
  return (
    <span className="text-xs text-[#999999]">
      {status.label} {status.note && <span className="text-[10px]">{status.note}</span>}
    </span>
  );
}

export default function ArchivePage() {
  return (
    <main className="flex-1 bg-paper">
      {/* Hero */}
      <section className="dark-wash relative min-h-[440px] overflow-hidden">
        <HeroBackdrop />
        <Nav active="Archive" />
        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-[640px] flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- The complete record</p>
          <h1 className="mt-3 text-6xl leading-none text-white lg:text-[80px]">Archive.</h1>
          <p className="mt-4 text-lg leading-[29px] text-white/60">
            Every project I&apos;ve shipped, contributed to, or learned from.
          </p>
        </div>
      </section>

      {/* Table */}
      <section className="px-6 py-10 sm:px-10 lg:px-[150px]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="border-b border-black/10">
                {["Index", "Project", "Discipline", "Year", "Status"].map((heading) => (
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
              {ENTRIES.map((entry, i) => (
                <tr key={entry.index} className={i % 2 === 1 ? "bg-black/[0.02]" : ""}>
                  <td className="w-20 py-6 pr-4 text-sm text-ink">{entry.index}</td>
                  <td className="w-[400px] py-6 pr-4 text-sm text-ink">{entry.project}</td>
                  <td className="w-[340px] py-6 pr-4 text-sm text-ink">{entry.discipline}</td>
                  <td className="w-[120px] py-6 pr-4 text-sm text-ink">{entry.year}</td>
                  <td className="py-6">
                    <StatusCell status={entry.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-16 w-fit border-y border-black/10 px-6 py-3 text-xs text-[#888888]">
          14 entries &nbsp;·&nbsp; 2020–Present &nbsp;·&nbsp; Sorted by recency
        </p>
        <div className="h-16" />
      </section>

      <Footer variant="archive" />
    </main>
  );
}
