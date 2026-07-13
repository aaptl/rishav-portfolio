import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import CtaStrip from "@/components/CtaStrip";
import { CONTACT_EMAIL } from "@/lib/site";

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

const FILTERS = ["All", "UX Design", "Brand", "AI Products", "No-Code"];

const PROJECTS = [
  {
    tag: "01 / UX DESIGN / MOBILE APP / AI",
    title: "Pawle",
    body: "A connected pet ecosystem combining commerce, care, and health management into one scalable platform.",
    image: "/images/work-pawle.png",
    imageAlt: "Pawle pet care app — mobile booking, health overview, and shop screens",
    imageLeft: true,
  },
  {
    tag: "02 / UX DESIGN / WEB / SAAS",
    title: "Wiser Solutions",
    body: "Reimagining pet health management through data-driven, empathic design for the modern pet owner.",
    image: "/images/work-wiser.png",
    imageAlt: "Pet health overview dashboard on a tablet — wellness scores and health metrics",
    imageLeft: false,
  },
  {
    tag: "03 / UX DESIGN / AI / WEB PRODUCT",
    title: "Suchamai AI",
    body: "Manufacturing planning experiences that simplify operational complexity and improve production visibility.",
    image: "/images/work-suchamai.png",
    imageAlt: "Suchama AI — supply chain planning website and AI assistant interface",
    imageLeft: true,
  },
  {
    tag: "04 / BRAND / WEB DESIGN / NO-CODE",
    title: "Slide Coach Ai",
    body: "A minimalist shopping ecosystem centred around intentionality and high-end artisanal goods.",
    image: "/images/work-selectr.png",
    imageAlt: "Slide Coach Ai — brand and web design showcase",
    imageLeft: false,
  },
  {
    tag: "05 / AI PRODUCT / UX / SYSTEMS",
    title: "Trovex.ai",
    body: "AI-powered sales role-play platform. Led design across product strategy, UX architecture, and visual systems.",
    image: "/images/work-trovex.png",
    imageAlt: "Trovex.ai — AI roleplay training platform hero with dashboard and live call UI",
    imageLeft: true,
  },
  {
    tag: "06 / CONSUMER APP / UX / BRAND",
    title: "Mobee",
    body: "A cashback rewards platform connecting shoppers and retailers through intelligent location-based discovery.",
    image: "/images/work-mobee.png",
    imageAlt: "Mobee — cashback shopping app screens with map-based nearby offers",
    imageLeft: false,
  },
];

export default function WorkPage() {
  return (
    <main className="flex-1 bg-paper">
      {/* Hero */}
      <section className="dark-wash relative min-h-[600px] overflow-hidden">
        <HeroBackdrop />
        <Nav active="Work" />
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[800px] flex-col items-center justify-center px-6 py-32 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- Selected Projects</p>
          <h1 className="mt-4 text-6xl leading-tight text-white lg:text-[80px]">My Work.</h1>
          <p className="mt-6 max-w-[400px] text-lg leading-[27px] text-white/60">
            Every project here demanded something different of me.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="border-b border-black/10 bg-paper px-6 sm:px-10 lg:px-20">
        <div className="flex items-center justify-between py-5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-8">
            {FILTERS.map((filter, i) => (
              <span key={filter} className="flex items-center gap-4 sm:gap-8">
                <span className="text-[13px] font-medium text-ink">{filter}</span>
                {i < FILTERS.length - 1 && <span aria-hidden className="text-[13px] text-[#888888]">/</span>}
              </span>
            ))}
          </div>
          <p className="hidden text-xs text-[#888888] sm:block">6 projects</p>
        </div>
      </div>

      {/* Projects */}
      <section className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          {PROJECTS.map((project) => (
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
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-85"
                >
                  Explore Project <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip outlineButton />
      <Footer variant="home" />
    </main>
  );
}
