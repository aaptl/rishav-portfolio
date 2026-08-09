import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import CtaStrip from "@/components/CtaStrip";
import ExperienceAccordion from "./ExperienceAccordion";

export const metadata: Metadata = {
  title: "About",
  description:
    "Precision is not a style — it is the standard. Product & systems designer with 4+ years across enterprise SaaS, AI products, healthcare, marketplaces and consumer applications.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Rishav Singh",
    description:
      "Product & systems designer combining product strategy, systems thinking and thoughtful execution.",
    url: "/about",
  },
};

const SKILLS = [
  {
    title: "AI Product Design",
    body: "Designing AI experiences that feel explainable, trustworthy and genuinely useful—not just intelligent.",
  },
  {
    title: "Product Strategy",
    body: "Connecting user needs, business goals and technical feasibility into clear product direction.",
  },
  {
    title: "Enterprise UX",
    body: "Simplifying complex workflows into interfaces that improve speed, confidence and adoption.",
  },
  {
    title: "Design Systems",
    body: "Building reusable foundations that help teams ship consistently across products and platforms.",
  },
  {
    title: "Information Architecture",
    body: "Turning fragmented ecosystems into intuitive navigation structures and scalable product architecture.",
  },
  {
    title: "No-Code Development",
    body: "Shipping production-ready marketing websites and product experiences using Framer and modern no-code workflows.",
  },
];

const PROCESS = [
  {
    step: "01 - Discover",
    title: "Discover",
    body: "Understand users, business goals, technical constraints and market context before proposing solutions.",
  },
  {
    step: "02 - Define",
    title: "Define",
    body: "Frame the right problem through research, systems thinking and stakeholder alignment.",
  },
  {
    step: "03 - Design",
    title: "Design",
    body: "Design scalable experiences using prototypes, design systems and continuous validation.",
  },
  {
    step: "04 - Deliver",
    title: "Deliver",
    body: "Partner closely with engineering to ensure every design ships with quality—not just intent.",
  },
];

const PERSONAL = [
  { label: "Photography", body: "Training myself to notice composition, light and the details most people overlook." },
  { label: "Travel", body: "Every new place challenges assumptions and broadens the way I think about people and products." },
  { label: "Mountains", body: "Some of my clearest thinking happens far away from notifications and deadlines." },
  {
    label: "Systems Thinking",
    body: "Whether it's software, architecture or everyday life, I'm always looking for patterns that simplify complexity.",
  },
];

export default function AboutPage() {
  return (
    <main id="top" className="flex-1 bg-ink">
      {/* Hero */}
      <section className="dark-wash relative min-h-[680px] overflow-hidden">
        <HeroBackdrop />
        <Nav active="About" />
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[640px] flex-col items-center justify-center px-6 py-32 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/50">
            Product Designer • AI Systems • Design Systems
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            Precision is not a style.
            <br />
            It is the standard.
          </h1>
          <p className="mt-9 text-lg leading-[29px] text-white/80">
            I design AI products, enterprise platforms, and scalable design systems that transform complexity into
            intuitive experiences. My work combines product strategy, systems thinking, and execution to help teams
            build products people trust.
          </p>
        </div>
        <p className="absolute bottom-12 left-6 z-10 flex items-center gap-2.5 text-[13px] font-medium text-white sm:left-10 lg:left-20">
          <span className="inline-block h-2 w-2 rounded-full bg-[#22c55e]" />
          Currently designing AI products · New Delhi, India
        </p>
      </section>

      {/* Bio */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-[120px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative grid gap-14 lg:grid-cols-[560px_1fr] lg:gap-20">
          <div>
            <Image
              src="/images/portrait.png"
              alt="Portrait of Rishav Singh"
              width={560}
              height={646}
              className="w-full grayscale rounded-xl border border-dashed border-[#dedcd4] object-cover"
              priority
            />
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">- Bio</p>
          </div>
          <div className="max-w-[620px]">
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">- Bio</p>
            <div className="mt-10 space-y-8 text-base leading-[27px] text-[#333333]">
              <p>
                I didn&apos;t begin my career in design, I began by asking why products become difficult to use as
                they grow.
              </p>
              <p>
                That curiosity took me from Mechanical Engineering into Product Design, where I discovered that the
                hardest problems rarely come from interfaces. They come from complexity, fragmented systems, and
                unclear decisions.
              </p>
              <p>
                Over the last four years, I&apos;ve worked across AI products, enterprise SaaS, healthcare,
                marketplaces, and consumer applications. Whether I&apos;m partnering with founders on a 0→1 product
                or refining enterprise workflows used by thousands, I enjoy simplifying complexity into experiences
                that feel effortless.
              </p>
              <p>
                I believe great products aren&apos;t remembered because they&apos;re beautiful. They&apos;re
                remembered because they quietly make difficult things feel obvious.
              </p>
              <p>
                Outside of work you&apos;ll usually find me travelling, hiking through mountains, taking photographs,
                or sketching ideas. Those moments away from the screen often shape the way I think about products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative bg-paper px-6 py-16 sm:px-10 lg:px-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative grid gap-14 lg:grid-cols-[480px_1fr] lg:gap-[120px]">
          <div>
            <span className="inline-block rounded border border-[#ececec] px-3 py-1.5 text-[11px] text-[#767676]">
              EXPERIENCE
            </span>
            <h2 className="mt-8 text-4xl font-extrabold leading-[1.3] text-ink lg:text-5xl">Career Journey</h2>
          </div>
          <ExperienceAccordion />
        </div>
      </section>

      {/* Expertise */}
      <section className="dark-wash px-6 py-20 sm:px-10 lg:px-20 lg:py-[120px]">
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/50">- Expertise</p>
        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_580px] lg:gap-20">
          <h2 className="max-w-[700px] text-4xl font-semibold leading-[1.2] tracking-[-0.5px] text-white lg:text-5xl">
            Design decisions are strongest when they&apos;re backed by systems, not assumptions.
          </h2>
          <div className="grid sm:grid-cols-3">
            {SKILLS.map((skill) => (
              <div key={skill.title} className="-ml-px -mt-px border border-white/10 p-6">
                <h3 className="text-base font-medium text-white">{skill.title}</h3>
                <p className="mt-2 text-xs leading-4 text-white/50">{skill.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#fafafa] px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <span className="inline-block rounded border border-[#ececec] px-3 py-1 text-[11px] text-[#767676]">
          PROCESS
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-ink">How I approach product design.</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item) => (
            <article key={item.step} className="rounded-xl border border-[#ececec]/60 bg-white p-6">
              <p className="text-sm font-extrabold text-navy">{item.step}</p>
              <h3 className="mt-8 text-base font-bold text-[#1c1b1b]">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-[#767676]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Personal */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-[120px]">
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/50">- Personal</p>
        <h2 className="mt-6 text-4xl font-semibold tracking-[-1px] text-white lg:text-5xl">Beyond the screen.</h2>
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          {PERSONAL.map((item) => (
            <div key={item.label}>
              <h3 className="text-[10px] font-bold uppercase tracking-wide text-white/40">{item.label}</h3>
              <p className="mt-4 text-sm leading-[22px] text-white/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaStrip />
      <Footer />
    </main>
  );
}
