"use client";

import { useState } from "react";

type ExperienceItem = {
  company: string;
  role: string;
  years: string;
  summary: string;
  highlights: string[];
  clients?: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Independent Product Design Consultant",
    role: "Product Design Consultant",
    years: "2025 — Present",
    summary:
      "Partnering with founders and product teams across AI, healthcare, marketplaces, SaaS, and consumer technology to design products from strategy through execution.",
    highlights: [
      "Leading end-to-end product design for multiple international startups.",
      "Defining product strategy, information architecture, and scalable design systems.",
      "Designing AI-powered experiences, marketplaces, enterprise dashboards, and customer platforms.",
    ],
    clients: [
      "Team We3 (Canada) — Lead Product Designer (Pawle)",
      "Australian Smile Group (Australia)",
      "Suchama AI",
      "7Wrlds Media",
      "Western Yodhha",
    ],
  },
  {
    company: "Trovex AI",
    role: "Senior Product Designer",
    years: "2025",
    summary:
      "Designed an AI-powered sales enablement platform helping sales teams practice, coach and improve performance through conversational AI.",
    highlights: [
      "Owned end-to-end redesign across dashboard, workflow engine and coaching experiences.",
      "Redesigned core architecture resulting in a 48% increase in Daily Active Users.",
      "Built a scalable component system reducing design-to-development handoff by 30%.",
      "Designed AI-powered workflows reducing average task completion time from 15 minutes to 4 minutes.",
    ],
  },
  {
    company: "UIUX Studio Pvt. Ltd.",
    role: "Product Designer",
    years: "2023 — 2025",
    summary: "Worked across enterprise SaaS, healthcare, marketplaces and consumer products for global clients.",
    highlights: [
      "Led design initiatives for Wiser Solutions, Mobee and multiple enterprise platforms.",
      "Built scalable design systems using Material Design and Ant Design.",
      "Increased onboarding completion by 30% for Mobee.",
      "Improved user retention by 48% through UX redesign.",
      "Collaborated directly with engineering teams to improve implementation quality.",
    ],
  },
  {
    company: "UNO MINDA (Initia Designs)",
    role: "UX/UI Designer",
    years: "2022 — 2023",
    summary: "Designed Human Machine Interface (HMI) experiences for next-generation automotive systems.",
    highlights: [
      "Designed digital cockpit interfaces.",
      "Conducted ADAS usability evaluations.",
      "Created interaction models for safety-critical systems.",
      "Contributed to an award-winning HMI experience recognised with India's Best Design Award.",
    ],
  },
];

export default function ExperienceAccordion() {
  const [openCompany, setOpenCompany] = useState<string | null>(null);

  return (
    <div>
      {EXPERIENCE.map((item) => {
        const isOpen = openCompany === item.company;
        return (
          <div key={item.company} className="border-b border-[#ececec]">
            <button
              type="button"
              onClick={() => setOpenCompany(isOpen ? null : item.company)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-8 text-left"
            >
              <div>
                <h3 className="text-[22px] font-bold text-ink">{item.company}</h3>
                <p className="mt-1 text-base text-[#767676]">{item.role}</p>
              </div>
              <span className="flex shrink-0 items-center gap-2 text-base font-medium text-[#767676]">
                {item.years}
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="pb-8">
                <p className="max-w-[720px] text-base leading-[27px] text-[#767676]">{item.summary}</p>

                <h4 className="mt-6 text-sm font-semibold text-ink">Highlights</h4>
                <ul className="mt-3 space-y-2.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-base leading-[27px] text-[#767676]">
                      <span aria-hidden className="mt-[13px] h-1 w-1 shrink-0 rounded-full bg-[#767676]" />
                      {h}
                    </li>
                  ))}
                </ul>

                {item.clients && (
                  <>
                    <h4 className="mt-6 text-sm font-semibold text-ink">Selected Clients</h4>
                    <div className="mt-3 space-y-1.5">
                      {item.clients.map((c) => (
                        <p key={c} className="text-base text-[#767676]">
                          {c}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
