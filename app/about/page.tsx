import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import { CONTACT_EMAIL } from "@/lib/site";

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

const EXPERIENCE = [
  { company: "Independent Product Design Consultant", role: "Product Design Consultant", years: "2025 - Present" },
  { company: "Trovex AI", role: "Senior Product Designer", years: "2025" },
  { company: "UIUX Studio Pvt. Ltd.", role: "Product Designer", years: "2023 - 2025" },
  { company: "UNO MINDA (Initia Designs)", role: "UX/UI Designer", years: "2022 - 2023" },
];

const SKILLS = [
  {
    title: "AI Product Design",
    body: "Designing AI-powered experiences that balance intelligence, usability and trust.",
  },
  {
    title: "Product Strategy",
    body: "Turning ambiguous ideas into clear product direction, roadmaps and measurable outcomes.",
  },
  {
    title: "Enterprise UX",
    body: "Simplifying complex workflows without sacrificing capability or scalability.",
  },
  {
    title: "Design Systems",
    body: "Building reusable systems that accelerate delivery while improving consistency.",
  },
  {
    title: "Information Architecture",
    body: "Creating structures that help users find clarity instead of complexity.",
  },
  {
    title: "No-Code Development",
    body: "Transforming validated ideas into production-ready experiences using modern no-code tools.",
  },
];

const PROCESS = [
  {
    step: "01 - Discover",
    title: "Discover",
    body: "Understand the business, users and constraints before exploring solutions.",
  },
  {
    step: "02 - Define",
    title: "Define",
    body: "Frame the right problem through research, product thinking and collaboration.",
  },
  {
    step: "03 - Design",
    title: "Design",
    body: "Create scalable experiences supported by systems, prototypes and iterative validation.",
  },
  {
    step: "04 - Deliver",
    title: "Deliver",
    body: "Partner closely with engineering to ship products that work in the real world.",
  },
];

const PERSONAL = [
  { label: "Curiosity", body: "The best product ideas usually begin outside the screen." },
  { label: "Adventure", body: "Mountains, long walks and new places remind me that perspective changes everything." },
  {
    label: "Photography",
    body: "I enjoy documenting details most people overlook. Observation is part of my design process.",
  },
  {
    label: "Building",
    body: "Whether it's an AI product or a personal side project, I enjoy turning ideas into working systems.",
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
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/50">- About</p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            Precision is not a style.
            <br />
            It is the standard.
          </h1>
          <p className="mt-9 text-lg leading-[29px] text-white/80">
            I design AI-powered products, enterprise systems and scalable design systems that help people make better
            decisions. My work combines product strategy, systems thinking and thoughtful execution to create software
            that earns trust over time.
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
              height={620}
              className="w-full rounded-xl border border-[#dedcd4] object-cover"
              priority
            />
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">- Bio</p>
          </div>
          <div className="max-w-[620px]">
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">- Bio</p>
            <div className="mt-10 space-y-8 text-base leading-[27px] text-[#333333]">
              <p>
                I didn&apos;t begin my career in design-I began by asking why products become difficult to use as they
                grow.
              </p>
              <p>
                That curiosity led me from mechanical engineering into product design, where I discovered that the
                hardest problems rarely come from interfaces. They come from complexity.
              </p>
              <p>
                Over the past four years, I&apos;ve worked across enterprise SaaS, AI products, healthcare, marketplaces
                and consumer applications, partnering with founders, engineers and product teams to design systems that
                remain intuitive as products evolve.
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
            <h2 className="mt-8 text-4xl font-extrabold leading-[1.3] text-ink lg:text-5xl">
              Where I&apos;ve grown, designed and contributed
            </h2>
          </div>
          <div>
            {EXPERIENCE.map((item) => (
              <div
                key={item.company}
                className="flex items-center justify-between gap-6 border-b border-[#ececec] py-8"
              >
                <div>
                  <h3 className="text-[22px] font-bold text-ink">{item.company}</h3>
                  <p className="mt-1 text-base text-[#767676]">{item.role}</p>
                </div>
                <p className="flex shrink-0 items-center gap-2 text-base font-medium text-[#767676]">
                  {item.years}
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-[120px]">
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/50">- Expertise</p>
        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_580px] lg:gap-20">
          <h2 className="max-w-[700px] text-4xl font-semibold leading-[1.2] tracking-[-0.5px] text-white lg:text-5xl">
            What I bring to every engagement.
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
        <h2 className="mt-4 text-3xl font-extrabold text-ink">A simple process for building great products.</h2>
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
        <h2 className="mt-6 text-4xl font-semibold tracking-[-1px] text-white lg:text-5xl">
          The rest of the picture.
        </h2>
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          {PERSONAL.map((item) => (
            <div key={item.label}>
              <h3 className="text-[10px] font-bold uppercase tracking-wide text-white/40">{item.label}</h3>
              <p className="mt-4 text-sm leading-[22px] text-white/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-ink px-6 py-14 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
          <h2 className="text-5xl font-bold tracking-[-1.5px] text-white sm:text-6xl lg:text-7xl">
            Let&apos;s work together.
          </h2>
          <p className="mt-5 max-w-[500px] text-[13px] leading-[17px] text-white/50">
            I&apos;m always interested in designing AI products, enterprise software and ambitious digital experiences
            with teams that value thoughtful execution.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            Get in touch <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
