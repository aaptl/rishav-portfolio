"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import HeroBackdrop from "@/components/HeroBackdrop";
import { CONTACT_EMAIL } from "@/lib/site";

type Project = {
  tag: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
  href: string | null;
};

const PRODUCT_PROJECTS: Project[] = [
  {
    tag: "01 / UX DESIGN / MOBILE APP / AI",
    title: "Pawle",
    body: "A connected pet ecosystem combining commerce, care, and health management into one scalable platform.",
    image: "/images/work-pawle.png",
    imageAlt: "Pawle pet care app — mobile booking, health overview, and shop screens",
    imageLeft: true,
    href: "/work/pawle",
  },
  {
    tag: "02 / UX DESIGN / WEB / SAAS",
    title: "Wiser Solutions",
    body: "Reimagining pet health management through data-driven, empathic design for the modern pet owner.",
    image: "/images/work-wiser.png",
    imageAlt: "Wiser design system — component library and multi-product UI foundations",
    imageLeft: false,
    href: "/work/wiser-solutions",
  },
  {
    tag: "03 / CONSUMER APP / UX / BRAND",
    title: "Mobee",
    body: "A cashback rewards platform connecting shoppers and retailers through intelligent location-based discovery.",
    image: "/images/work-mobee.png",
    imageAlt: "Mobee — cashback shopping app screens with map-based nearby offers",
    imageLeft: false,
    href: "/work/mobee",
  },
  {
    tag: "04 / UX DESIGN / AI / WEB PRODUCT",
    title: "Suchamai AI",
    body: "Manufacturing planning experiences that simplify operational complexity and improve production visibility.",
    image: "/images/work-suchamai.png",
    imageAlt: "Suchama AI — supply chain planning website and AI assistant interface",
    imageLeft: true,
    href: "/work/suchamai-ai",
  },
  {
    tag: "05 / AI PRODUCT / UX / SYSTEMS",
    title: "Trovex.ai",
    body: "AI-powered sales role-play platform. Led design across product strategy, UX architecture, and visual systems.",
    image: "/images/work-trovex.png",
    imageAlt: "Trovex.ai — AI roleplay training platform hero with dashboard and live call UI",
    imageLeft: false,
    href: "/work/trovex-ai",
  },
  {
    tag: "06 / BRAND / WEB DESIGN / NO-CODE",
    title: "Slide Coach Ai",
    body: "A minimalist shopping ecosystem centred around intentionality and high-end artisanal goods.",
    image: "/images/work-selectr.png",
    imageAlt: "Slide Coach Ai — brand and web design showcase",
    imageLeft: true,
    href: null,
  },
];

const BRAND_PROJECTS: Project[] = [
  {
    tag: "01 / BRAND IDENTITY / CULTURAL DESIGN",
    title: "Introducing India",
    body: "A cultural brand identity celebrating India's rich heritage through contemporary design language and visual storytelling.",
    image: "/images/work-introducing-india.png",
    imageAlt: "Introducing India — cultural brand identity design",
    imageLeft: true,
    href: null,
  },
  {
    tag: "02 / BRAND IDENTITY / HOME & LIFESTYLE",
    title: "Kasaba Home",
    body: "Artisanal home brand identity crafted around the concept of timeless living — handcrafted textiles and decor designed to inspire.",
    image: "/images/work-kasaba-home.png",
    imageAlt: "Kasaba Home — artisanal home brand identity",
    imageLeft: false,
    href: null,
  },
  {
    tag: "03 / BRAND IDENTITY / FINTECH",
    title: "DebtWorks",
    body: "Brand identity and visual system for a unified corporate debt management platform. Precision meets clarity.",
    image: "/images/work-debtworks.png",
    imageAlt: "DebtWorks — fintech brand identity and visual system",
    imageLeft: true,
    href: null,
  },
];

const TABS = [
  {
    id: "product",
    label: "Product Design",
    heroTitle: "My Work.",
    heroSubtitle: "Every project here demanded something different of me.",
    exploreLabel: "Explore more on Behance →",
    projects: PRODUCT_PROJECTS,
  },
  {
    id: "branding",
    label: "Branding",
    heroTitle: "Branding.",
    heroSubtitle: "A selection of brand identity and visual design projects.",
    exploreLabel: "Explore more branding work on Behance →",
    projects: BRAND_PROJECTS,
  },
] as const;

export default function WorkExplorer() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("product");
  const tab = TABS.find((t) => t.id === activeTab)!;

  return (
    <>
      {/* Hero */}
      <section className="dark-wash relative min-h-[600px] overflow-hidden">
        <HeroBackdrop />
        <Nav active="Work" />
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[800px] flex-col items-center justify-center px-6 py-32 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- Selected Projects</p>
          <h1 className="mt-4 text-6xl leading-tight text-white lg:text-[80px]">{tab.heroTitle}</h1>
          <p className="mt-6 max-w-[400px] text-lg leading-[27px] text-white/60">{tab.heroSubtitle}</p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="border-b border-black/10 bg-paper px-6 py-10 sm:px-10 lg:px-20">
        <div className="flex flex-wrap items-center gap-3">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              aria-pressed={t.id === activeTab}
              className={`rounded-full px-4 py-2.5 text-[13px] font-medium transition-colors ${
                t.id === activeTab
                  ? "bg-[#111827] text-white"
                  : "border border-[#e5e7eb] bg-white text-[#111827] hover:border-[#111827]/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <a href="#" className="mt-4 inline-block text-[13px] text-[#6b7280] transition-colors hover:text-ink">
          {tab.exploreLabel}
        </a>
      </div>

      {/* Projects */}
      <section className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          {tab.projects.map((project) => (
            <article
              key={project.title}
              className={`flex flex-col items-center gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:gap-20 lg:px-20 lg:py-[100px] ${
                project.imageLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={640}
                height={480}
                className="w-full max-w-[679px] rounded-3xl lg:w-1/2"
              />
              <div className="lg:w-1/2 lg:max-w-[560px]">
                <p className="text-xs font-bold tracking-wide text-[#888888]">{project.tag}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-1px] text-ink lg:text-[40px]">
                  {project.title}
                </h2>
                <p className="mt-4 text-lg leading-[29px] text-[#555555]">{project.body}</p>
                {project.href ? (
                  <Link
                    href={project.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-85"
                  >
                    Explore Project <span aria-hidden>→</span>
                  </Link>
                ) : (
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-85"
                  >
                    Explore Project <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
