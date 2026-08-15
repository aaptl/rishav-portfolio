import type { Metadata } from "next";
import Image from "next/image";
import MobeeHero from "@/components/case-study/MobeeHero";
import MobeeChapterNav from "@/components/case-study/MobeeChapterNav";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobee: Letter of Authorization — Case Study",
  description:
    "Reducing retail survey abandonment through trust-first UX. A simple authorization letter reduced hesitation and improved mission completion by 5–15%.",
  alternates: { canonical: "/work/mobee" },
  openGraph: {
    title: "Mobee: Letter of Authorization — Case Study — Rishav Singh",
    description: "Reducing retail survey abandonment through trust-first UX.",
    url: "/work/mobee",
  },
};

const WHAT_LOA_DOES = [
  { title: "Outlines purpose", body: "Clearly states the goal of the survey: to ensure great service and a better shopping experience.", tag: "Reduces ambiguity", bg: "#FFF7ED", tagColor: "#EA580C" },
  { title: "Introduces the company", body: "Names Wiser Solutions as the organizing entity, providing institutional credibility on the shopper's behalf.", tag: "Institutional backing", bg: "#EFF6FF", tagColor: "#3B82F6" },
  { title: "Explains the shopper's presence", body: "Grants no actual legal access — yet gives shoppers the psychological confidence to operate with authority inside the store.", tag: "Confidence amplifier", bg: "#F0FDF4", tagColor: "#16A34A" },
  { title: "Always accessible in-app", body: "Available one tap away via the document icon — printable too, for shoppers who prefer a physical copy.", tag: "Zero-friction retrieval", bg: "#FAF5FF", tagColor: "#9333EA" },
];

const UPLIFTS = [
  { label: "USER ACTION", color: "#F58220", value: "58%", shift: "Anxiety → Confidence", body: "stated the LOA positively influenced their final decision to accept and perform the mission." },
  { label: "ACTIVATION", color: "#EE8E14", value: "11%", shift: "Avoidance → Action", body: "of users explicitly stated they would not have attempted the mission at all without the LOA." },
  { label: "CONFIDENCE", color: "#D97706", value: "70%", shift: "Uncertainty → Clarity", body: "reported a vastly higher subjective confidence level while performing store operations." },
];

function SectionNumber({ n }: { n: string }) {
  return (
    <span aria-hidden className="pointer-events-none absolute right-10 top-10 text-[160px] font-extrabold leading-none text-[#0F172A]/[0.03] sm:right-20">
      {n}
    </span>
  );
}

function StepBadge({ text, color, bg }: { text: string; color: string; bg: string }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase" style={{ backgroundColor: bg, color }}>
      {text}
    </span>
  );
}

function PhoneMockup({ src, alt, w = 220, h = 448 }: { src: string; alt: string; w?: number; h?: number }) {
  return (
    <div
      className="overflow-hidden rounded-[36px] border border-white/10 bg-[#1A1A1A] shadow-[0_20px_40px_-4px_rgba(0,0,0,0.27)]"
      style={{ width: w, maxWidth: "100%" }}
    >
      <Image src={src} alt={alt} width={w} height={h} className="h-auto w-full" />
    </div>
  );
}

export default function MobeePage() {
  return (
    <main className="flex-1 bg-white">
      <MobeeHero
        badge="UX Research & Product Strategy Case Study"
        badgeIcon
        chapter="Mobee · Letter of Authorization"
        title="Reducing Retail Survey Abandonment Through Trust-First UX"
        titleAccent="Trust-First UX"
        divider
        dotPattern
        subtitle="Retail survey participants frequently abandoned missions after being questioned by store employees. Rather than redesigning the survey itself, we redesigned trust. A simple authorization letter reduced hesitation, increased confidence and significantly improved mission completion."
        stats={[
          { icon: "clock", value: "6 Weeks" },
          { icon: "user", value: "10,000+", label: "Active Shoppers" },
          { icon: "trend", value: "+5-15%", label: "Coverage Speed" },
        ]}
        visuals={[
          { src: "/images/mobee/hero-loa-left.png", alt: "Mobee — mission brief screen", width: 430, height: 932 },
          { src: "/images/mobee/hero-loa-center.png", alt: "Mobee — survey screen", width: 860, height: 1852 },
          { src: "/images/mobee/hero-loa.png", alt: "Mobee — Letter of Authorization screen", width: 860, height: 1864 },
        ]}
      />
      <MobeeChapterNav current="letter-of-authorization" />

      {/* Context */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <p className="text-base font-bold uppercase tracking-wide text-[#F58220]">00 - Context</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-[#475569]">My Role</p>
              <p className="mt-2 text-lg font-bold text-[#0F172A]">Lead Product Researcher & Strategist</p>
              <p className="mt-2 text-[15px] leading-6 text-[#475569]">
                Designed the post-abandonment surveys, conducted shopper interviews, validated core user anxieties,
                and proposed the structural placebo solution.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-[#475569]">The Product</p>
              <p className="mt-2 text-lg font-bold text-[#0F172A]">Mobee (Secret Shopping App)</p>
              <p className="mt-2 text-[15px] leading-6 text-[#475569]">
                A crowdsourced retail intelligence application where independent users complete in-store
                photographic missions.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-[#F58220] bg-[#F58220]/10 p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-[#F58220]">Key Outcome</p>
            <p className="mt-3 text-5xl font-extrabold text-[#F58220]">+5% to 15%</p>
            <p className="mt-3 text-base font-bold text-[#0F172A]">Increase in mission coverage speed</p>
            <p className="mt-2 text-sm leading-6 text-[#475569]">
              By removing friction and anxiety, missions were claimed and executed significantly faster.
            </p>
          </div>
        </div>
      </section>

      {/* 01 · Challenge */}
      <section className="relative border-y border-[#e2e8f0] bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="01" />
        <div className="relative">
          <SectionHeader eyebrow="01 · The Challenge" title="Fear of employee confrontation prevented mission attempts." />
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            Mobee shoppers enter retail stores to photograph shelf inventories. They frequently expressed intense
            anxiety about being confronted by store employees — support tickets overflowed with stories of shoppers
            feeling uncomfortable, awkward, or even being asked to leave. We set up automated post-abandonment
            surveys and interviews to determine if actual confrontations were causing high abandonment, only to
            uncover a completely different root problem.
          </p>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row">
            <div className="flex flex-col items-center gap-3 lg:w-[300px] lg:shrink-0">
              <PhoneMockup src="/images/mobee/hero-loa-left.png" alt="Mission brief screen" />
              <p className="text-xs font-semibold uppercase text-[#F58220]">Mission Brief Screen</p>
              <p className="text-xs text-[#94A3B8]">Letter of Authorization section at bottom</p>
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <div className="rounded-2xl bg-[#0F172A] p-7">
                <p className="text-4xl font-bold text-[#F8FAFC]">3%</p>
                <p className="mt-2 text-base font-semibold text-[#F8FAFC]">of abandonments were due to actual confrontation</p>
                <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
                  Post-abandonment surveys revealed that real confrontations were nearly non-existent — the problem
                  was entirely psychological.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5">
                <div className="relative h-[200px] overflow-hidden rounded-xl">
                  <Image src="/images/mobee/loa-fig1-chart.png" alt="Survey results on LOA impact" fill className="object-cover" />
                </div>
                <div className="mt-3 border-t border-[#e2e8f0] pt-3">
                  <p className="text-[13px] italic leading-5 text-[#475569]">
                    <strong className="font-bold not-italic">Figure 1: </strong>Survey results validated that a vast
                    majority of users indicated they would be significantly more likely to complete missions if
                    provided an LOA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-5 overflow-hidden rounded-2xl bg-[#FFF7ED]">
            <span aria-hidden className="w-1.5 shrink-0 bg-[#F58220]" />
            <div className="flex flex-col gap-3 py-7 pr-7">
              <p className="flex items-center gap-2 text-xs font-bold uppercase text-[#D97706]">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                The Insight
              </p>
              <p className="text-xl font-bold leading-[1.3] text-[#92400E]">The real issue was fear, not reality.</p>
              <p className="border-l-2 border-[#D97706] pl-5 text-base italic leading-[1.6] text-[#78350F]">
                &ldquo;The core blocker wasn&apos;t people actually being thrown out. It was the crushing anxiety of
                potentially being confronted, which stopped shoppers from ever starting.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · Data Breakthrough */}
      <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="02" />
        <div className="relative">
          <SectionHeader eyebrow="02 · Data Breakthrough" title="Most users weren't abandoning because the survey was difficult. They were abandoning because they didn't trust us." />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#dedcd4] bg-white p-6">
              <StepBadge text="Step 1 · Rare Reality" color="#92400E" bg="#FEF3C7" />
              <p className="mt-4 text-base font-semibold text-ink">Confrontation accounted for only 3% of abandons</p>
              <p className="mt-2 text-[13px] leading-5 text-[#555555]">
                Survey results analyzing reasons for mission abandonment revealed that being &ldquo;asked to
                leave&rdquo; was incredibly rare.
              </p>
            </div>
            <div className="rounded-2xl border border-[#dedcd4] bg-white p-6">
              <StepBadge text="Step 2 · Widespread Fear" color="#991B1B" bg="#FEE2E2" />
              <p className="mt-4 text-base font-semibold text-ink">
                Why users avoided locations: &ldquo;Keeping a low profile&rdquo;
              </p>
              <p className="mt-2 text-[13px] leading-5 text-[#555555]">
                Shoppers avoided stores entirely where keeping a low profile felt too difficult — the barrier was
                psychological, not procedural.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-5 rounded-2xl bg-[#0F172A] p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F58220] text-xl">💡</span>
            <div>
              <p className="text-[11px] font-bold uppercase text-[#F58220]">Connected Insight</p>
              <p className="mt-1 text-lg font-bold leading-[1.4] text-white">
                The real problem wasn&apos;t confrontation — it was the fear of confrontation
              </p>
              <p className="mt-1.5 text-[13px] leading-6 text-[#94A3B8]">
                Only 3% were ever asked to leave, yet &ldquo;keeping a low profile&rdquo; was the single biggest
                reason shoppers avoided stores entirely. The barrier was psychological, not procedural.
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-[#e2e8f0]" />
            <StepBadge text="Discovery Artifacts" color="#64748B" bg="#F1F5F9" />
            <span aria-hidden className="h-px flex-1 bg-[#e2e8f0]" />
          </div>
          <div className="mt-6 rounded-[20px] border border-[#e2e8f0] bg-[#F8FAFC] p-8">
            <p className="text-xs font-bold uppercase text-[#64748B]">Research Process</p>
            <p className="mt-1 text-xl font-bold text-[#0F172A]">From Raw Data to Design Direction</p>
            <p className="mt-2 max-w-[720px] text-sm leading-[1.65] text-[#475569]">
              The discovery board below captures the multi-source research synthesis that reframed the abandonment
              problem — from a task difficulty issue to a trust and fear-of-confrontation issue.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-[#cbd5e1]">
              <div className="relative h-[220px] sm:h-[320px] lg:h-[420px]">
                <Image src="/images/mobee/loa-discovery-board.png" alt="Research discovery board" fill className="object-cover" />
              </div>
              <div className="bg-[#F1F5F9] px-5 py-3 text-xs text-[#64748B]">
                Multi-source research board: retail vs. convenience-store abandonment, survey verbatims, and the LOA
                artifact itself.
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#e2e8f0] bg-white p-4">
                <p className="text-xs font-medium text-[#64748B]">Retail stores responded 3× better to an LOA than convenience stores.</p>
              </div>
              <div className="rounded-xl border border-[#e2e8f0] bg-white p-4">
                <p className="text-xs font-medium text-[#64748B]">Cross-referencing abandonment data with store-type avoidance confirmed fear, not difficulty, as root cause.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-[#e2e8f0]" />
            <StepBadge text="Step 3 · The Design Response" color="#16A34A" bg="#F0FDF4" />
            <span aria-hidden className="h-px flex-1 bg-[#e2e8f0]" />
          </div>
          <div className="mt-6 flex flex-col items-center gap-9 rounded-[20px] border border-[#e2e8f0] bg-white p-9 lg:flex-row">
            <PhoneMockup src="/images/mobee/hero-loa-center.png" alt="Survey screen with LOA banner" />
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-xl font-bold text-[#0F172A]">What Users Actually Do Inside the Store</p>
              <p className="text-[15px] leading-[1.65] text-[#475569]">
                Once a shopper accepts a mission and enters the store, they are presented with structured survey
                questions — like counting bottle facings on a shelf. This is the core task that generates retail
                intelligence data for brand clients.
              </p>
              <p className="text-[15px] leading-[1.65] text-[#475569]">
                Crucially, the LOA banner is visible at the top of the mission screen, giving shoppers persistent
                access to the document at the exact moment they might need it — a key design decision that
                reinforced confidence throughout the task.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Turning insight */}
      <section className="bg-[#0B0F19] px-6 py-24 sm:px-10 lg:px-20">
        <p className="mx-auto max-w-[720px] text-center text-2xl italic leading-[1.6] text-white sm:text-3xl">
          &ldquo;The ultimate solution wasn&apos;t getting formal retail permissions. It was designing a physical
          artifact that converted vulnerability into absolute confidence.&rdquo;
        </p>
      </section>

      {/* 03 · Solution */}
      <section className="relative border-y border-[#e2e8f0] bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="03" />
        <div className="relative">
          <SectionHeader eyebrow="03 · The Solution" title="The Letter of Authorization: a placebo that powered UX." />

          <div className="mt-10 flex flex-col items-center gap-10 lg:flex-row lg:items-stretch">
            <div className="flex flex-col gap-5 lg:w-[360px] lg:shrink-0">
              <div className="rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-7">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase text-[#EA580C]">
                  <span aria-hidden className="h-2 w-2 rounded-sm bg-[#EA580C]" /> The Problem
                </p>
                <p className="mt-3 text-xl font-extrabold leading-[1.25] text-[#0F172A]">
                  User Anxiety &amp; Hesitation at the Store Entrance
                </p>
                <p className="mt-3 text-sm leading-[1.65] text-[#78350F]">
                  Retail audits are fully legitimate — but the inherent ambiguity left shoppers feeling uncertain,
                  exposed, and unable to act with authority.
                </p>
              </div>
              <p className="text-[15px] leading-[1.6] text-[#475569]">
                We created a formal, printable and in-app <strong className="text-[#0F172A]">Letter of
                Authorization (LOA)</strong> — a psychological placebo that armed users with the confidence to
                navigate stores authoritatively.
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[60px] lg:shrink-0">
              <span className="text-2xl text-[#94A3B8]">→</span>
            </div>
            <div className="flex flex-1 justify-center">
              <PhoneMockup src="/images/mobee/hero-loa.png" alt="Letter of Authorization screen" />
            </div>
          </div>

          <div className="mt-14">
            <p className="flex items-center gap-2 text-xs font-bold uppercase text-[#F58220]">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#F58220]" /> What the LOA does
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHAT_LOA_DOES.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-5">
                  <h3 className="text-sm font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-[#475569]">{item.body}</p>
                  <span
                    className="mt-3 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-bold"
                    style={{ backgroundColor: item.bg, color: item.tagColor }}
                  >
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-5">
            <div className="relative h-[220px] overflow-hidden rounded-xl border border-[#e2e8f0] sm:h-[320px]">
              <Image src="/images/mobee/loa-fig4-letter.png" alt="Letter of Authorization document layout" fill className="object-cover" />
            </div>
            <p className="mt-3 text-[13px] italic leading-5 text-[#475569]">
              <strong className="font-bold not-italic">Figure 4: </strong>The official layout of the Letter of
              Authorization implemented directly inside the user journey.
            </p>
          </div>
        </div>
      </section>

      {/* 04 · Outcome */}
      <section className="relative bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionNumber n="04" />
        <div className="relative">
          <SectionHeader eyebrow="04 · Outcome & Impact" title="Confidence is king: measured uplifts in performance." />

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {UPLIFTS.map((u) => (
              <div key={u.shift} className="rounded-2xl border border-[#e2e8f0] bg-white p-7">
                <p className="text-xs font-bold uppercase" style={{ color: u.color }}>{u.label}</p>
                <p className="mt-2 text-5xl font-extrabold" style={{ color: u.color }}>{u.value}</p>
                <p className="mt-3 text-sm font-semibold text-[#0F172A]">→ {u.shift}</p>
                <p className="mt-2 text-[13px] leading-5 text-[#475569]">{u.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[20px] border border-[#e2e8f0] bg-white p-8">
            <p className="text-xl font-bold text-[#0F172A]">Post-Experiment Survey Results</p>
            <div className="mt-4 overflow-hidden rounded-xl">
              <div className="relative h-[220px] sm:h-[320px] lg:h-[400px]">
                <Image src="/images/mobee/loa-fig5-chart.png" alt="Post-experiment survey results chart" fill className="object-cover" />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 border-t border-[#e2e8f0] pt-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] px-3 py-1.5 text-xs font-bold text-[#0F172A]">
                <span aria-hidden className="h-2 w-2 rounded-sm bg-[#F58220]" /> 58% influenced decision
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] px-3 py-1.5 text-xs font-bold text-[#0F172A]">
                <span aria-hidden className="h-2 w-2 rounded-sm bg-[#EE8E14]" /> 11% wouldn&apos;t have attempted
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] px-3 py-1.5 text-xs font-bold text-[#0F172A]">
                <span aria-hidden className="h-2 w-2 rounded-sm bg-[#D97706]" /> 70% higher confidence
              </span>
            </div>
            <p className="mt-4 text-sm italic leading-6 text-[#475569]">
              <strong className="font-bold not-italic">Figure 5: </strong>Comprehensive experiment outcomes. Only
              15% of users actually had to present the letter to store staff, validating that the LOA acted
              primarily as an internal confidence-boosting mechanism.
            </p>
          </div>
        </div>
      </section>

      <CaseStudyNav currentSlug="mobee" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
