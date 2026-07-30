import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "A career spent aligning design vision with measurable business outcomes — full professional timeline, skills, and credentials.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume — Rishav Singh",
    description: "Full professional timeline, skills, and credentials.",
    url: "/resume",
  },
};

const SKILLS = [
  "Product Strategy",
  "UX Research",
  "Rapid Prototyping",
  "A/B Testing",
  "Design Strategy",
  "Component Design",
  "UI/UX",
  "Data-Driven Design",
  "Figma",
  "Framer",
  "React",
  "TypeScript",
];

const EDUCATION = [
  { title: "Google UX Foundation Course", date: "", org: "Coursera" },
  { title: "Bachelor of Technology (Mechanical Engineering)", date: "2018 - 2022", org: "DIT University (DIT)" },
];

const ROLES = [
  {
    title: "Independent Product Design Consultant",
    secondary: "Remote",
    date: "March 2025 - Present",
    description:
      "Partnered with startups across Australia, Canada and India to define product strategy, validate ideas, prototype solutions and launch products across AI, healthcare, marketplaces and consumer technology.",
    achievements: [
      "Team Ws3 (Canada) - Lead Product Designer | Feb 2028 - Present: Leading product development for Paale from 0→1 - defining product architecture, intelligent workflows, marketplace experiences, onboarding, and mobile interactions.",
      "Australian Smile Group (Australia) - Product Design Consultant | Oct 2025 - Present: Led redesign of digital patient journeys across websites and acquisition funnels.",
      "Suchama AI: Defined intelligent workflow strategy and dashboard experiences for an early-stage SaaS product.",
      "7Winds Media (India) - Product Designer & No-Code Developer | Mar 2026 - Present: Delivering and shipping responsive brand websites using Framer.",
      "Western Yodha: Rebuilt the responsive web experience with focus on accessibility, usability, and brand consistency.",
    ],
  },
  {
    title: "Senior Product Designer",
    secondary: "Trovex AI",
    date: "June 2025 - December 2025",
    description: "Bangalore, India",
    achievements: [
      "Owned end-to-end product design for an AI-powered sales enablement platform, partnering closely with founders, product managers, and engineering to define product direction from discovery through implementation.",
      "Increased DAU by 48%",
      "Reduced workflow completion time from 15 min to 4 min",
      "Reduced design handoff by 50%",
    ],
  },
  {
    title: "Product Designer",
    secondary: "Campus Ready",
    date: "January 2025 - June 2025",
    description: "Germany • Remote",
    achievements: [
      "Led UX strategy for SlideCoach AI, an intelligent presentation coaching tool - collaborating with PMs and engineering to define end-to-end learning experiences from concept to production.",
      "Built modular learning dashboards that improved learner engagement by 15%, balancing adaptive content with intuitive navigation.",
      "Built reusable UI patterns to support scalable product development across multiple learning workflows.",
    ],
  },
  {
    title: "Product Designer",
    secondary: "UIUX Studio Pvt. Ltd",
    date: "June 2023 - December 2024",
    description: "Mohali, India",
    achievements: [
      "Led end-to-end product design across enterprise SaaS, healthcare, and dashboard products for global clients.",
      "Optimised mobile checkout experience - increasing conversion rates by 22% through targeted flow restructuring and iterative usability testing.",
      "Improved perceived application performance by 15% by partnering with engineering to define micro-interaction and animation systems.",
      "Scaled component systems built on Material Design and Ant Design Frameworks across Wiser Solutions and Mobee.",
      "Drove 30% improvement in onboarding completion and 48% increase in retention for Mobee through systematic UX restructuring.",
    ],
  },
  {
    title: "Product Designer",
    secondary: "India Designs (UNO MINDA Group)",
    date: "September 2022 - Mar 2023",
    description: "Pune, India",
    achievements: [
      "Defined information architecture and interaction model for HMI cockpit experiences on next-generation automotive products.",
      "Conducted ADAS usability evaluations, validating interaction models for safety-critical workflow scenarios.",
      "Contributed to an HMI cockpit experience recognised with India's Best Design Award.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="flex-1 bg-paper">
      {/* Hero */}
      <section className="dark-wash relative overflow-hidden">
        <HeroBackdrop />
        <Nav active="Resume" />
        <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center px-6 pb-20 pt-32 text-center">
          <p className="text-sm font-semibold text-[#99a1af]">RESUME &amp; RECORD</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-[-1.5px] text-white sm:text-5xl lg:text-[64px]">
            A career spent aligning design vision with measurable business outcomes.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#99a1af]">
            Over 3+ years shipping production-ready systems for startups, enterprise platforms, and industrial
            giants. Below is a full summary of my professional timeline and core capabilities.
          </p>
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-medium text-[#111112] transition-transform hover:scale-[1.03]"
          >
            Download Full CV (PDF)
          </a>
        </div>
      </section>

      {/* Section header */}
      <div className="px-6 pt-16 sm:px-10 lg:px-20">
        <h2 className="text-2xl font-bold text-ink">Experience</h2>
        <p className="mt-2 max-w-[640px] text-sm leading-relaxed text-[#4b5563]">
          Portfolio highlights - concise impact, clean outcomes, and the most important wins.
        </p>
      </div>

      {/* Skills & Education */}
      <section className="mt-10 flex flex-col gap-14 bg-[#f3f3f2] px-6 py-10 sm:px-10 lg:flex-row lg:gap-20 lg:px-20">
        <div className="flex flex-col gap-8 lg:w-[520px] lg:shrink-0">
          <h3 className="text-2xl font-bold text-[#141414]">Skills &amp; Toolkit</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#ececec] bg-white px-5 py-2.5 text-sm font-medium text-[#141414]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold text-[#141414]">Education &amp; Credentials</h3>
          <div className="flex flex-col">
            {EDUCATION.map((item, i) => (
              <div
                key={item.title}
                className={`flex flex-col gap-2 py-6 ${i < EDUCATION.length - 1 ? "border-b border-[#ececec]" : ""} ${i === 0 ? "pt-0" : ""}`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-lg font-bold text-[#141414]">{item.title}</p>
                  {item.date && <p className="shrink-0 text-sm font-medium text-[#666666]">{item.date}</p>}
                </div>
                <p className="text-[15px] text-[#666666]">{item.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="flex flex-col gap-6 px-6 py-20 sm:px-10 lg:px-20">
        {ROLES.map((role, i) => (
          <div key={`${role.title}-${role.date}`} className="flex items-stretch gap-4">
            <div className="flex w-6 shrink-0 flex-col items-center self-stretch">
              <span className="h-3 w-3 shrink-0 rounded-full bg-[#111827]" />
              {i < ROLES.length - 1 && <span className="mt-1 w-0.5 flex-1 rounded-full bg-[#e5e7eb]" />}
            </div>
            <div className="flex flex-1 flex-col gap-2.5 rounded-2xl border border-[#e5e7eb] bg-white p-4 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)]">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div className="flex flex-col gap-0.5">
                  <p className="text-base font-bold text-[#111827]">{role.title}</p>
                  <p className="text-[13px] font-semibold text-[#4b5563]">{role.secondary}</p>
                </div>
                <p className="text-xs font-semibold text-[#9ca3af]">{role.date}</p>
              </div>
              <p className="text-[13px] leading-[1.5] text-[#4b5563]">{role.description}</p>
              <div className="flex flex-col gap-1.5">
                {role.achievements.map((achievement) => (
                  <div key={achievement} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111827]" />
                    <p className="text-[13px] font-semibold text-[#111827]">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="dark-wash relative overflow-hidden">
        <div className="relative flex flex-col items-center gap-10 px-6 py-24 text-center sm:px-10 lg:px-33">
          <div className="flex max-w-[600px] flex-col items-center gap-4">
            <h2 className="text-5xl font-bold leading-[1.05] tracking-[-1.5px] text-white sm:text-6xl lg:text-[72px]">
              Building something ambitious?
            </h2>
            <p className="text-base leading-relaxed text-white/50">
              I partner with ambitious product leaders and founders to turn complex ideas into refined,
              production-ready systems. Let&apos;s make it real.
            </p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-9 py-4 text-base font-semibold text-ink shadow-lg transition-all hover:bg-white/90"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
