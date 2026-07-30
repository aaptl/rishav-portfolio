import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import LogoMarquee from "@/components/LogoMarquee";
import CtaStrip from "@/components/CtaStrip";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Product & Systems Designer`,
  description:
    "The gap between good and great is almost always a design decision. Independent product & systems designer for AI products, SaaS platforms, and every system in between.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — Product & Systems Designer`,
    description:
      "Independent product & systems designer turning complexity into clarity across AI products and SaaS platforms.",
    url: "/",
  },
};

const EXPERTISE_CARDS = [
  {
    title: "Brand Identity",
    body: "Visual identity systems that build recognition before a single word is read.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
        <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
        <path d="m2.3 2.3 7.286 7.286" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "UX & Web Design",
    body: "Experiences that reduce friction, earn trust, and make complex products feel obvious.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M14 4.1 12 6" />
        <path d="m5.1 8-2.9-.8" />
        <path d="m6 12-1.9 2" />
        <path d="M7.2 2.2 8 5.1" />
        <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
      </svg>
    ),
  },
  {
    title: "No-Code & Social",
    body: "Framer and Webflow builds paired with social content that earns attention - shipped without a single handoff.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const WORK_PROJECTS = [
  {
    tag: "01 / UX DESIGN / MOBILE APP / BRAND",
    title: "Pawle",
    body: "Designing a connected pet ecosystem combining commerce, care services, health management, and personalised experiences into one scalable platform.",
    image: "/images/card-pawle.png",
    imageAlt: "Pawle pet care app — mobile screens for booking, health tracking, and shopping",
    imageLeft: true,
  },
  {
    tag: "02 / UX DESIGN / WEB / SAAS",
    title: "Wiser Solutions",
    body: "Unifying multiple products under one scalable design system — 200+ components built for consistency and speed.",
    image: "/images/card-mobee.png",
    imageAlt: "Wiser design system — component library and multi-product UI foundations",
    imageLeft: false,
  },
  {
    tag: "03 / UX DESIGN / AI / WEB PRODUCT",
    title: "Suchamai AI",
    body: "Designing AI-powered manufacturing planning experiences that simplify operational complexity and improve production visibility.",
    image: "/images/card-suchama.png",
    imageAlt: "Suchama AI — supply chain planning product website and assistant UI",
    imageLeft: true,
  },
];

const FULL_RANGE = [
  {
    title: "UX Design",
    body: "Crafting intuitive and meaningful experiences.",
    icon: <path d="M3 3h18v18H3zM3 9h18M9 9v12" />,
  },
  {
    title: "Brand Identity",
    body: "Building memorable brands that stand out.",
    icon: (
      <path d="M12 22a10 10 0 1 1 10-10c0 2-1.5 3.5-3.5 3.5H16a2 2 0 0 0-2 2v.5c0 1.1-.9 2-2 2zM7.5 10.5h.01M12 7h.01M16.5 10.5h.01" />
    ),
  },
  {
    title: "Website Design",
    body: "Designing modern, responsive web experiences.",
    icon: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />,
  },
  {
    title: "Social Media",
    body: "Creating content that connects and converts.",
    icon: (
      <path d="M18 8a3 3 0 1 0-2.83-4M18 8a3 3 0 1 1-2.83 4M6 15a3 3 0 1 0 2.83-4M6 15a3 3 0 1 1 2.83 4m6.34-11-6.34 3m0 4 6.34 3" />
    ),
  },
  {
    title: "No-Code Development",
    body: "Building fast, scalable solutions without code.",
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />,
  },
  {
    title: "& More",
    body: "Custom solutions tailored to your unique needs.",
    icon: <path d="M12 5v14M5 12h14" />,
  },
];

export default function HomePage() {
  return (
    <main id="top" className="flex-1">
      {/* Hero */}
      <section className="dark-wash relative min-h-[820px] overflow-hidden">
        <HeroBackdrop />
        <Nav active="Work" />
        <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1160px] flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
          <h1 className="text-5xl leading-[1.1] tracking-[-2px] text-white sm:text-6xl lg:text-[80px]">
            The gap between good and great is almost always a design decision.
          </h1>
          <p className="mt-8 max-w-[933px] text-lg leading-relaxed text-[#99a1af] sm:text-xl">
            I&apos;m Rishav — an independent product &amp; systems designer who turns complexity into clarity across AI
            products, SaaS platforms, and every system in between.
          </p>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-2.5">
            <Link
              href="/work"
              className="rounded-full bg-white px-8 py-4 text-base font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              Explore Work
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full border border-white/50 bg-navy/30 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-navy/60"
            >
              Let&apos;s Connect
            </a>
          </div>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6a7282"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-16 h-6 w-6 animate-bounce"
          >
            <path d="M12 5v14m0 0-7-7m7 7 7-7" />
          </svg>
        </div>
        <p className="absolute bottom-12 left-6 z-10 flex items-center gap-2 text-[11px] font-medium tracking-[0.2px] text-white/40 sm:left-10 lg:left-[72px]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2ed473]" />
          Currently designing AI products &nbsp;·&nbsp; Open to collaboration
        </p>
      </section>

      {/* Client logos */}
      <LogoMarquee />

      {/* Expertise */}
      <section className="relative bg-paper px-6 py-16 sm:px-10 lg:px-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative space-y-8">
          <div>
            <p className="text-[11px] font-medium tracking-[1.3px] text-[#999999]">- Expertise</p>
            <h2 className="mt-1 max-w-[1142px] text-3xl font-medium leading-[1.2] sm:text-4xl lg:text-5xl">
              <span className="text-[#9ca3af]">I&apos;ll help you to </span>
              <span className="text-ink">create clarity on what matters and the confidence to act on it.</span>
            </h2>
          </div>
          <div className="grid gap-6 border-t border-[#d8d0c3] pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {EXPERTISE_CARDS.map((card) => (
              <article key={card.title} className="rounded-lg border border-[#d0d0d0]/35 bg-white p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d0d0d] text-white">
                  {card.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink">{card.title}</h3>
                <p className="mt-3 text-base leading-snug text-[#555555]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="dark-wash relative overflow-hidden px-6 pb-16 pt-20 sm:px-10 lg:px-[72px] lg:pt-24">
        <HeroBackdrop />
        <div className="relative z-10">
          <p className="text-[10px] font-medium tracking-[3px] text-white/50">FEATURED CASE STUDY</p>
          <div className="mt-11 grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="max-w-[606px] text-3xl font-semibold leading-[1.33] tracking-[-0.5px] text-white sm:text-4xl lg:text-5xl lg:leading-[64px]">
                I recently led design at Trovex.ai — shaping the AI roleplay experience from strategy through
                production.
              </h2>
              <Image
                src="/images/trovex-logo.png"
                alt="Trovex.ai"
                width={165}
                height={42}
                className="mt-12 h-10 w-auto"
              />
              <p className="mt-6 text-[13px] text-white/50">Lead Designer · UX, Systems &amp; Brand</p>
              <p className="mt-3 max-w-[629px] text-base leading-6 text-white/70">
                Trovex.ai helps teams master sales through AI-powered role-play and real-time coaching. As lead
                designer, I owned product strategy, UX architecture, visual systems, and interaction design end-to-end.
              </p>
              <p className="mt-8 text-[11px] font-medium tracking-[0.6px] text-white/40">
                Lead Designer &nbsp;·&nbsp; UX Strategy &nbsp;·&nbsp; Design Systems &nbsp;·&nbsp; Product Strategy
              </p>
            </div>
            <Image
              src="/images/trovex-featured.png"
              alt="Trovex.ai product — AI roleplay training platform dashboard and live call UI"
              width={692}
              height={478}
              className="w-full rounded-[32px] border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="relative bg-paper px-6 py-16 sm:px-10 lg:px-20 lg:py-[72px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <h2 className="text-4xl font-medium tracking-[-0.5px] text-ink lg:text-5xl">Work.</h2>
          <p className="mt-3 text-lg text-[#aaaaaa]">
            Projects selected for what they demanded of me — not just what they delivered.
          </p>
          <div className="mt-16 space-y-16 lg:space-y-[72px]">
            {WORK_PROJECTS.map((project) => (
              <article
                key={project.title}
                className={`flex flex-col items-center gap-10 lg:flex-row ${
                  project.imageLeft ? "" : "lg:flex-row-reverse"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={695}
                  height={495}
                  className="w-full max-w-[695px] rounded-[32px] lg:w-1/2"
                />
                <div className="lg:w-1/2 lg:max-w-[580px]">
                  <p className="text-xs font-bold tracking-wide text-[#575f4e]">{project.tag}</p>
                  <h3 className="mt-5 text-3xl font-semibold text-ink lg:text-[40px]">{project.title}</h3>
                  <p className="mt-5 text-lg leading-[26px] text-[#454841]">{project.body}</p>
                  <Link
                    href="/work"
                    className="dark-wash mt-8 inline-flex items-center gap-2 rounded-full px-11 py-3.5 text-[13px] font-medium text-white transition-opacity hover:opacity-85"
                  >
                    Explore Project
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The full range */}
      <section className="bg-navy px-6 py-16 sm:px-10 lg:px-[72px] lg:py-[72px]">
        <div className="rounded-2xl bg-[#141414] p-4 sm:p-8">
          <div className="grid items-center gap-12 rounded-2xl p-4 sm:p-8 lg:grid-cols-[550px_1fr]">
            <div className="grid grid-cols-2 sm:grid-cols-3">
              {FULL_RANGE.map((cell) => (
                <div key={cell.title} className="border border-white/[0.06] p-5 sm:min-h-[200px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                    aria-hidden
                  >
                    {cell.icon}
                  </svg>
                  <h3 className="mt-4 text-[11px] font-bold uppercase tracking-wide text-white">{cell.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">{cell.body}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-4xl font-medium text-white lg:text-5xl">The Full Range.</h2>
              <p className="mt-4 text-lg text-white/70">
                From first principles to final pixel — every discipline under one roof.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="rounded-full bg-white px-8 py-3.5 text-base font-medium text-ink transition-transform hover:scale-[1.03]"
                >
                  How I Work
                </Link>
                <Link
                  href="/archive"
                  className="rounded-full border border-white/40 px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white"
                >
                  View Playbook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
      <Footer />
    </main>
  );
}
