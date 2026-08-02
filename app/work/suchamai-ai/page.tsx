import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeader from "@/components/case-study/SectionHeader";
import { StatRow, Quote } from "@/components/case-study/Stat";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Suchamai AI — Case Study",
  description:
    "Designing AI systems that turn complex supply chains into decisions. An enterprise B2B case study for manufacturing planning and scheduling.",
  alternates: { canonical: "/work/suchamai-ai" },
  openGraph: {
    title: "Suchamai AI — Case Study — Rishav Singh",
    description: "Designing AI systems that turn complex supply chains into decisions.",
    url: "/work/suchamai-ai",
  },
};

/* ------------------------------------------------------------------ */
/* Product-screen mockups — hand-built browser-chrome UI recreations, */
/* not exported images. Reused across the Solution Framework, Key    */
/* Experience, and Product Screens sections.                         */
/* ------------------------------------------------------------------ */

type MockupType = "login" | "chat" | "output" | "dashboard";

function TrafficLights() {
  return (
    <span className="flex items-center gap-[5px]" aria-hidden>
      <span className="h-[9px] w-[9px] rounded-full bg-[#FF5F57]" />
      <span className="h-[9px] w-[9px] rounded-full bg-[#FFBD2E]" />
      <span className="h-[9px] w-[9px] rounded-full bg-[#28C840]" />
    </span>
  );
}

function BrowserChrome({ address, children }: { address: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_16px_48px_0_rgba(94,80,232,0.12)]">
      <div className="flex items-center gap-2 border-b border-[#E8E8E8] bg-[#F5F5F5] px-3 py-[7px]">
        <TrafficLights />
        <div className="flex-1 truncate rounded-full border border-[#E0E0E0] bg-white px-3 py-[3px] text-center font-mono text-[9px] text-[#999999]">
          {address}
        </div>
      </div>
      {children}
    </div>
  );
}

function SAISidebar() {
  return (
    <div className="flex w-16 shrink-0 flex-col gap-3 bg-[#5E50E8] py-3 sm:w-20 sm:py-4">
      <div className="flex items-center gap-1.5 px-3">
        <Image src="/images/suchamai-logo.png" alt="" width={32} height={32} className="h-3.5 w-3.5" />
        <span className="truncate text-[7px] font-semibold text-white">Suchama.ai</span>
      </div>
      <div className="mx-3 h-px bg-white/20" />
      <div className="flex flex-col gap-1.5 px-2">
        <div className="flex items-center gap-1 rounded-md border border-white/10 px-1.5 py-1">
          <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-white/40" />
          <span className="truncate text-[6px] font-semibold text-[#F3F3F3]">Suchama.ai</span>
        </div>
        <p className="mt-1 px-1.5 text-[6px] font-semibold uppercase tracking-wide text-white/70">Planning</p>
        <div className="space-y-[3px]">
          <div className="rounded bg-white/20 px-1.5 py-[3px] text-[6px] font-semibold text-[#F5F5F5]">
            July Week 4
          </div>
          <div className="px-1.5 py-[3px] text-[6px] text-white/80">RM Visibility</div>
          <div className="px-1.5 py-[3px] text-[6px] text-white/80">Planning SOP</div>
        </div>
      </div>
      <div className="mx-3 h-px bg-white/20" />
      <div className="px-3 text-[6px] font-semibold text-white/90">Scheduling</div>
      <div className="mt-auto px-3 text-[6px] text-white/60">Settings</div>
    </div>
  );
}

function LoginMock() {
  return (
    <BrowserChrome address="app.suchama.ai/login">
      <div className="flex h-[220px] sm:h-[260px]">
        <div
          className="flex flex-1 flex-col justify-center gap-2 p-5"
          style={{ background: "linear-gradient(180deg, #EBF2FF 43%, #EEEBFF 100%)" }}
        >
          <div className="flex items-center gap-2">
            <Image src="/images/suchamai-logo.png" alt="" width={40} height={40} className="h-6 w-6" />
            <span className="text-sm font-bold text-[#2C6ACE]">Suchama AI</span>
          </div>
          <p className="max-w-[190px] text-[10px] leading-snug text-[#1E1E1E]">
            Simplifying Manufacturing Supply Chain Planning &amp; Scheduling Operations.
          </p>
          <span className="mt-1 inline-block w-fit text-[9px] font-medium text-[#1E1E1E] underline underline-offset-2">
            Learn more about Suchama AI
          </span>
        </div>
        <div className="flex w-[40%] flex-col justify-center gap-1.5 bg-[#F5F9FE] p-4">
          <p className="text-[9px] text-[#646464]">Welcome back!</p>
          <p className="text-[11px] font-semibold text-[#1E1E1E]">Login to get started</p>
          <label className="mt-1 block text-[7px] font-medium text-[#1E1E1E]">Username</label>
          <div className="rounded border border-[#D9D9D9] bg-white px-2 py-1 text-[7px] text-[#B3B3B3]">
            Enter Username
          </div>
          <label className="mt-1 block text-[7px] font-medium text-[#1E1E1E]">Password</label>
          <div className="rounded border border-[#D9D9D9] bg-white px-2 py-1 text-[7px] text-[#B3B3B3]">
            ••••••••••
          </div>
          <button
            type="button"
            tabIndex={-1}
            className="mt-2 rounded bg-[#2C2C2C] py-1.5 text-center text-[8px] font-medium text-[#F5F5F5]"
          >
            Sign In
          </button>
          <span className="text-[7px] text-[#1E1E1E] underline underline-offset-2">Forgot password?</span>
        </div>
      </div>
    </BrowserChrome>
  );
}

function AvatarDot() {
  return (
    <span
      className="h-5 w-5 shrink-0 rounded-full"
      style={{ background: "linear-gradient(135deg, #C8956C 0%, #A06040 100%)" }}
      aria-hidden
    />
  );
}

function AIChatMock() {
  return (
    <BrowserChrome address="app.suchama.ai/chat">
      <div className="flex h-[260px] sm:h-[300px]">
        <SAISidebar />
        <div className="flex flex-1 flex-col bg-[#F5F5F5]">
          <div className="flex items-center justify-end gap-2 border-b border-[#F3F3F3] bg-white px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-[#F0F0F0]" />
            <span className="h-3 w-3 rounded-full bg-[#F0F0F0]" />
            <AvatarDot />
          </div>
          <div className="flex flex-1 flex-col justify-end gap-2 p-3">
            <div className="flex items-end gap-1.5">
              <span className="h-5 w-5 shrink-0 rounded-full border border-[#F3F3F3] bg-white" />
              <div className="max-w-[70%] rounded-2xl rounded-tl-none bg-[#5E50E8] px-2.5 py-1.5 text-[8px] leading-snug text-white">
                Which batches are at risk for July Week 4?
              </div>
            </div>
            <div className="flex items-end justify-end gap-1.5">
              <div className="max-w-[75%] rounded-2xl rounded-tr-none border border-[#D9D9D9] bg-white px-2.5 py-1.5 text-[8px] leading-snug text-[#1E1E1E]">
                3 batches are behind schedule on Cylinder machines. Want the breakdown?
              </div>
              <AvatarDot />
            </div>
            <div className="flex items-end gap-1.5">
              <span className="h-5 w-5 shrink-0 rounded-full border border-[#F3F3F3] bg-white" />
              <div className="rounded-2xl rounded-tl-none border border-[#F0F0F0] bg-white px-2.5 py-1.5 text-[8px] text-[#1E1E1E]">
                Show batch breakdown →
              </div>
            </div>
          </div>
          <div className="mx-3 mb-3 flex items-center justify-between rounded border border-[#D9D9D9] bg-white px-2 py-1.5">
            <span className="text-[8px] text-[#B3B3B3]">Ask me anything ...</span>
            <span className="h-2 w-2 rounded-full bg-[#D9D9D9]" />
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

const PLAN_ROWS = [
  { type: "G&P", fg: "GT4531", batch: "R4568", size: "127", machine: "Ach" },
  { type: "VP", fg: "XR1392", batch: "K5239", size: "218", machine: "Cylinder" },
  { type: "G&P", fg: "DJ4867", batch: "R4596", size: "338", machine: "Ach" },
  { type: "G&P", fg: "TR9015", batch: "R4974", size: "592", machine: "Chanel" },
];

function PlanOutputMock() {
  return (
    <BrowserChrome address="app.suchama.ai/plans/2891">
      <div className="flex h-[260px] sm:h-[300px]">
        <SAISidebar />
        <div className="flex flex-1 flex-col bg-[#F5F5F5]">
          <div className="flex items-center justify-end gap-2 border-b border-[#F3F3F3] bg-white px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-[#F0F0F0]" />
            <AvatarDot />
          </div>
          <div className="flex flex-col gap-2 p-3">
            <div className="flex items-end gap-1.5">
              <span className="h-5 w-5 shrink-0 rounded-full border border-[#F3F3F3] bg-white" />
              <div className="max-w-[65%] rounded-2xl rounded-tl-none bg-[#5E50E8] px-2.5 py-1.5 text-[8px] leading-snug text-white">
                Build the production plan for GT4531 &amp; XR1392.
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-[#F0F0F0] bg-white">
              <div className="grid grid-cols-5 gap-1 border-b border-[#F0F0F0] bg-[#FAFAFA] px-2 py-1 text-[6.5px] font-semibold text-[#1E1E1E]">
                <span>Type</span>
                <span>FG Code</span>
                <span>Batch No.</span>
                <span>Batch Sz</span>
                <span>Machine</span>
              </div>
              {PLAN_ROWS.map((row) => (
                <div
                  key={row.fg}
                  className="grid grid-cols-5 gap-1 border-b border-[#F5F5F5] px-2 py-1 font-mono text-[6.5px] text-[#1E1E1E] last:border-b-0"
                >
                  <span>{row.type}</span>
                  <span>{row.fg}</span>
                  <span>{row.batch}</span>
                  <span>{row.size}</span>
                  <span>{row.machine}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-3 mb-3 mt-auto flex items-center justify-between rounded border border-[#D9D9D9] bg-white px-2 py-1.5">
            <span className="text-[8px] text-[#B3B3B3]">Ask me anything ...</span>
            <span className="h-2 w-2 rounded-full bg-[#D9D9D9]" />
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

const DASHBOARD_STATS = [
  { label: "Open Orders", value: "128" },
  { label: "On-Time", value: "94%" },
  { label: "Active Batches", value: "42" },
  { label: "Alerts", value: "3" },
];

function DashboardMock() {
  return (
    <BrowserChrome address="app.suchama.ai/dashboard">
      <div className="flex h-[300px] sm:h-[360px]">
        <SAISidebar />
        <div className="flex flex-1 flex-col bg-[#F5F5F5]">
          <div className="flex items-center justify-between bg-[#5E50E8] px-4 py-2">
            <span className="text-[9px] font-semibold text-white">Planning Dashboard</span>
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="flex items-center gap-2 border-b border-[#F0F0F0] bg-white px-3 py-2">
            <span className="text-[7px] text-[#888888]">July Week 4 · Live</span>
          </div>
          <div className="flex gap-1.5 border-b border-[#F0F0F0] bg-white px-3 py-2">
            <span className="rounded bg-[#F5A623]/20 px-2 py-[3px] text-[6.5px] font-medium text-[#B36A00]">
              On Track
            </span>
            <span className="rounded bg-[#CCCCCC]/30 px-2 py-[3px] text-[6.5px] font-medium text-[#666666]">
              Pending
            </span>
            <span className="rounded bg-[#F5A623]/10 px-2 py-[3px] text-[6.5px] font-medium text-[#B36A00]">
              At Risk
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 border-b border-[#F0F0F0] bg-white px-3 py-2">
            {DASHBOARD_STATS.map((s) => (
              <div key={s.label}>
                <p className="text-[10px] font-semibold text-[#0F1B2D]">{s.value}</p>
                <p className="text-[6px] text-[#888888]">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-1 gap-2 p-3">
            <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-[#F0F0F0] bg-white p-2">
              <div className="flex h-10 items-end gap-1">
                {[40, 65, 30, 80, 55, 70].map((h, idx) => (
                  <span key={idx} className="w-1.5 rounded-t bg-[#5E50E8]/70" style={{ height: `${h}%` }} />
                ))}
              </div>
              <p className="text-[6px] text-[#888888]">Batch Throughput</p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-[#F0F0F0] bg-white p-2">
              <div
                className="h-10 w-10 rounded-full"
                style={{ background: "conic-gradient(#5E50E8 0deg 220deg, #EEEAFF 220deg 360deg)" }}
              />
              <p className="text-[6px] text-[#888888]">Capacity Used</p>
            </div>
            <div className="hidden flex-1 rounded-lg border border-[#F0F0F0] bg-white p-2 sm:block">
              <p className="mb-1 text-[6px] font-semibold text-[#888888]">Machine Utilisation</p>
              <div className="space-y-1">
                {["Ach", "Cylinder", "Chanel"].map((m, idx) => (
                  <div key={m} className="flex items-center gap-1">
                    <span className="w-8 shrink-0 text-[6px] text-[#888888]">{m}</span>
                    <span className="h-1.5 flex-1 rounded-full bg-[#F0F0F0]">
                      <span
                        className="block h-1.5 rounded-full bg-[#5E50E8]/70"
                        style={{ width: `${[72, 58, 90][idx]}%` }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={className} aria-hidden>
      <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className={className} aria-hidden>
      <path
        d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 11.25C9.57107 11.25 11.25 9.57107 11.25 7.5C11.25 5.42893 9.57107 3.75 7.5 3.75C5.42893 3.75 3.75 5.42893 3.75 7.5C3.75 9.57107 5.42893 11.25 7.5 11.25Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 8.75C8.19036 8.75 8.75 8.19036 8.75 7.5C8.75 6.80964 8.19036 6.25 7.5 6.25C6.80964 6.25 6.25 6.80964 6.25 7.5C6.25 8.19036 6.80964 8.75 7.5 8.75Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className={className} aria-hidden>
      <path
        d="M7.5005 3.12467C7.50124 2.87468 7.45198 2.62708 7.35563 2.39642C7.25927 2.16575 7.11776 1.95668 6.93942 1.78151C6.76108 1.60633 6.54952 1.46859 6.31716 1.37637C6.08481 1.28416 5.83637 1.23934 5.58644 1.24455C5.33651 1.24976 5.09015 1.30489 4.86184 1.40671C4.63353 1.50852 4.42789 1.65496 4.25701 1.83742C4.08612 2.01987 3.95345 2.23466 3.86679 2.46914C3.78012 2.70362 3.74123 2.95306 3.75238 3.20279C3.385 3.29725 3.04394 3.47407 2.75502 3.71986C2.4661 3.96565 2.2369 4.27396 2.08478 4.62145C1.93266 4.96893 1.8616 5.34647 1.877 5.72549C1.89239 6.1045 1.99383 6.47504 2.17363 6.80904C1.85749 7.06587 1.6089 7.39606 1.44947 7.77087C1.29004 8.14569 1.2246 8.55379 1.25886 8.95966C1.29311 9.36553 1.42601 9.75688 1.64601 10.0997C1.866 10.4425 2.16642 10.7263 2.52113 10.9265C2.47733 11.2654 2.50347 11.6097 2.59793 11.9381C2.6924 12.2665 2.85319 12.5721 3.07037 12.8359C3.28755 13.0997 3.55651 13.3162 3.86064 13.472C4.16477 13.6278 4.49761 13.7196 4.83861 13.7417C5.17961 13.7639 5.52153 13.7159 5.84325 13.6007C6.16496 13.4855 6.45965 13.3056 6.7091 13.072C6.95856 12.8385 7.15749 12.5563 7.29361 12.2428C7.42972 11.9294 7.50014 11.5914 7.5005 11.2497V3.12467Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50001 3.12467C7.49927 2.87468 7.54853 2.62708 7.64489 2.39642C7.74124 2.16575 7.88275 1.95668 8.06109 1.78151C8.23943 1.60633 8.451 1.46859 8.68335 1.37637C8.9157 1.28416 9.16415 1.23934 9.41407 1.24455C9.664 1.24976 9.91036 1.30489 10.1387 1.40671C10.367 1.50852 10.5726 1.65496 10.7435 1.83742C10.9144 2.01987 11.0471 2.23466 11.1337 2.46914C11.2204 2.70362 11.2593 2.95306 11.2481 3.20279C11.6155 3.29725 11.9566 3.47407 12.2455 3.71986C12.5344 3.96565 12.7636 4.27396 12.9157 4.62145C13.0679 4.96893 13.1389 5.34647 13.1235 5.72549C13.1081 6.1045 13.0067 6.47504 12.8269 6.80904C13.143 7.06587 13.3916 7.39606 13.551 7.77087C13.7105 8.14569 13.7759 8.55379 13.7417 8.95966C13.7074 9.36553 13.5745 9.75688 13.3545 10.0997C13.1345 10.4425 12.8341 10.7263 12.4794 10.9265C12.5232 11.2654 12.497 11.6097 12.4026 11.9381C12.3081 12.2665 12.1473 12.5721 11.9301 12.8359C11.713 13.0997 11.444 13.3162 11.1399 13.472C10.8357 13.6278 10.5029 13.7196 10.1619 13.7417C9.8209 13.7639 9.47898 13.7159 9.15727 13.6007C8.83555 13.4855 8.54086 13.3056 8.29141 13.072C8.04195 12.8385 7.84302 12.5563 7.70691 12.2428C7.57079 11.9294 7.50037 11.5914 7.50001 11.2497V3.12467Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.375 8.125C8.85028 7.94041 8.39207 7.60437 8.05833 7.15938C7.72458 6.71438 7.53028 6.18042 7.5 5.625C7.46972 6.18042 7.27542 6.71438 6.94167 7.15938C6.60793 7.60437 6.14972 7.94041 5.625 8.125"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className={className} aria-hidden>
      <path
        d="M13.75 4.375L8.4375 9.6875L5.3125 6.5625L1.25 10.625"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 4.375H13.75V8.125" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScreenPrincipleIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M9.99935 1.33398H3.99935C3.64573 1.33398 3.30659 1.47446 3.05654 1.72451C2.80649 1.97456 2.66602 2.3137 2.66602 2.66732V13.334C2.66602 13.6876 2.80649 14.0267 3.05654 14.2768C3.30659 14.5268 3.64573 14.6673 3.99935 14.6673H11.9993C12.353 14.6673 12.6921 14.5268 12.9422 14.2768C13.1922 14.0267 13.3327 13.6876 13.3327 13.334V4.66732L9.99935 1.33398Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33398 1.33398V4.00065C9.33398 4.35427 9.47446 4.69341 9.72451 4.94346C9.97456 5.19351 10.3137 5.33398 10.6673 5.33398H13.334"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.66732 6H5.33398" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6673 8.66602H5.33398" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6673 11.334H5.33398" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepPill({ num, label }: { num: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-[#2C6ACE]/[0.03] px-3 py-1.5">
      <span className="text-[9px] text-[#0D0D0D]/70">{num}</span>
      <span className="text-xs text-[#0F1B2D]">{label}</span>
    </span>
  );
}

function ScreenMockup({ type }: { type: MockupType }) {
  switch (type) {
    case "login":
      return <LoginMock />;
    case "chat":
      return <AIChatMock />;
    case "output":
      return <PlanOutputMock />;
    case "dashboard":
      return <DashboardMock />;
  }
}

const PROBLEMS = [
  { title: "Disconnected tools", body: "Excel, ERP, custom dashboards: none talk to each other." },
  { title: "High manual effort", body: "Analysts spend 60–80% of time cleaning, not deciding." },
  { title: "No actionable insights", body: "Data exists. Clarity doesn't. Outputs are reports, not decisions." },
  { title: "Slow decision cycles", body: "By the time the analysis lands, the planning window has closed." },
];

const PROBLEM_STATS = [
  { value: "6–8", label: "tools an analyst navigates per planning cycle" },
  { value: "4 hrs", label: "average time to generate one production plan manually" },
  { value: "0", label: "platforms that connected data, AI reasoning, and decision output in one flow" },
];

const PROCESS = [
  { title: "Discovery", body: "6 stakeholder interviews · 3 enterprise sites · contextual observation" },
  { title: "Synthesis", body: "Affinity mapping of pain points · journey mapping · insight clustering" },
  { title: "Ideation", body: "Design sprint with founders · 40+ concepts · rapid prototype sessions" },
  { title: "Iteration", body: "4 rounds of usability testing · weekly feedback loops with pilot users" },
];

const RESEARCH_QUOTES = [
  {
    text: "I spend the first two hours just getting the data into one place. By the time I can actually think, the window for the decision has passed.",
    attribution: "Senior Production Manager, Tier 1 Manufacturer",
  },
  {
    text: "We have dashboards, but they show me history. What I need is something that tells me what to do next.",
    attribution: "Operations Director, Manufacturing Group",
  },
  {
    text: "The AI tool we tried gave paragraphs. I need a table. I need a number. Something I can put in front of the board.",
    attribution: "Supply Chain Analyst, Enterprise Client",
  },
];

const RESEARCH_STATS = [
  { value: "18", label: "Interviews conducted" },
  { value: "6wk", label: "Research phase" },
  { value: "3", label: "Enterprise pilots" },
  { value: "40+", label: "Concepts explored" },
];

const FRAMEWORK_LAYERS: {
  step: string;
  title: string;
  tag: string;
  body: string;
  mockup: MockupType;
  checklist?: string[];
}[] = [
  {
    step: "Layer 01",
    title: "Login & Setup",
    tag: "Get Started Instantly",
    body: "A clean, enterprise login experience. No complex onboarding — sign in with your credentials and SAI is ready to assist with production planning from the first session.",
    mockup: "login",
  },
  {
    step: "Layer 02",
    title: "AI Conversation",
    tag: "Talk to SAI",
    body: "SAI understands domain-specific language. Ask in plain language about production schedules, inventory constraints, or back-order prioritisation — and get structured responses instantly.",
    mockup: "chat",
  },
  {
    step: "Layer 03",
    title: "Structured Output",
    tag: "Decisions, Not Documents",
    body: "SAI converts conversational requests into structured production plans: batch numbers, machine assignments, norms, and manhour allocations — exported and linked for immediate action.",
    mockup: "output",
    checklist: [
      "Batch numbers, machine assignments, and manhour norms — all structured",
      "Every plan links to source data, shareable via one click",
      "Output ready to act on without needing re-interpretation",
    ],
  },
];

const KEY_EXPERIENCE_STEPS: {
  step: string;
  title: string;
  body: string;
  mockup: MockupType;
  progress: string;
  progressPct: number;
}[] = [
  {
    step: "Step 01",
    title: "Brand-first onboarding experience",
    body: "The login screen reflects the Suchama AI brand identity — gradient background, clear logo, and a minimal form that gets users to SAI with zero friction.",
    mockup: "login",
    progress: "1 / 3",
    progressPct: 33,
  },
  {
    step: "Step 02",
    title: "Conversational AI for planning",
    body: "SAI's chat interface makes complex production planning feel like a conversation. Users describe their constraints in plain language; SAI handles the structure.",
    mockup: "chat",
    progress: "2 / 3",
    progressPct: 66,
  },
  {
    step: "Step 03",
    title: "Structured plans ready to execute",
    body: "Production plans are surfaced as editable tables — batch numbers, machine types, norms, manhours — linked to source data and shareable with one click.",
    mockup: "output",
    progress: "3 / 3",
    progressPct: 100,
  },
];

const DESIGN_DECISIONS = [
  {
    title: "Structured AI Output",
    body: "AI responses are never freeform paragraphs. Every output is broken into typed blocks: risk, impact, recommendation, and source, allowing users to scan, not read.",
    quote: "Structure creates trust. Freeform creates doubt.",
  },
  {
    title: "Cognitive Load Reduction",
    body: "The interface surfaces only what's needed at each decision point. Data density is managed through progressive disclosure: summary first, detail on demand.",
    quote: "A decision-maker's attention is the most finite resource.",
  },
  {
    title: "Progressive Disclosure",
    body: "Users see the risk summary first. Clicking any item reveals the affected SKUs. Clicking a SKU shows the raw data. The system rewards curiosity without punishing speed.",
    quote: "Not everyone needs every detail. Everyone needs the right summary.",
  },
];

const SCREENS: { label: string; tag: string; mockup: MockupType }[] = [
  { label: "01 · Login & Brand", tag: "Onboarding · Brand-first design", mockup: "login" },
  { label: "02 · SAI Chat", tag: "AI layer · Conversational planning", mockup: "chat" },
  { label: "03 · Plan Output", tag: "Structured table · Shareable link", mockup: "output" },
];

const SCREEN_PRINCIPLE_POINTS = [
  "Login screen: Onboard with brand clarity",
  "Chat screen: Ask SAI in plain language",
  "Output screen: Act on structured plans",
];

const BRAND_COLORS = [
  { name: "Brand Blue", hex: "#2C6ACE", usage: "Primary · CTAs · Links" },
  { name: "Ice Blue", hex: "#EBF2FF", usage: "Light surface · Brand bg" },
  { name: "Soft Violet", hex: "#EEEAFF", usage: "Accent gradient · Hover" },
  { name: "Deep Navy", hex: "#0F1B2D", usage: "Headings · Display text" },
];

const TYPOGRAPHY_SPECIMENS = [
  {
    label: "Display / Headings",
    sample: "Sora Bold",
    sampleClass: "text-3xl font-bold text-[#0F1B2D]",
    usage: "Product headlines · Section titles · Hero copy",
  },
  {
    label: "UI / Interface",
    sample: "Inter Regular",
    sampleClass: "text-xl text-ink",
    usage: "Body copy · Labels · Navigation · Data",
  },
  {
    label: "Monospace",
    sample: "SKU-2891 · 94% · Q3",
    sampleClass: "font-mono text-base text-[#555555]",
    usage: "Data values · SKUs · Codes · Timestamps",
  },
];

const OUTCOMES: { title: string; body: string; icon: ReactNode; color: string }[] = [
  {
    title: "Simplified complex workflows",
    body: "Analysts moved from 4-hour cycles to sub-20-minute decision outputs.",
    icon: <TargetIcon />,
    color: "#2C6ACE",
  },
  {
    title: "Improved clarity of AI outputs",
    body: "Structured output format reduced re-querying rate by removing ambiguity.",
    icon: <SparkleIcon />,
    color: "#7C6ACE",
  },
  {
    title: "Enabled faster decision-making",
    body: "Production decision velocity improved significantly across enterprise teams.",
    icon: <TrendIcon />,
    color: "#2CA8CE",
  },
];

const PROJECT_META = [
  { label: "Project", value: "Suchama AI" },
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "Feb – Oct 2025" },
  { label: "Domain", value: "Enterprise SaaS" },
];

export default function SuchamaiAiPage() {
  return (
    <main className="flex-1 bg-paper">
      <CaseStudyHero
        eyebrow="AI Systems · Enterprise · B2B"
        title="Designing AI systems that turn complex supply chains into decisions."
        subtitle="Led end-to-end design for Suchama AI, transforming manufacturing data into structured, actionable insights for enterprise supply chain teams."
        pills={["AI-led planning", "Reduced manual workflows", "Faster decision cycles"]}
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Period", value: "Feb – Oct 2025" },
          { label: "Scope", value: "End-to-end" },
        ]}
        heroImage="/images/work-suchamai.png"
        heroImageAlt="Suchama AI — supply chain planning website and AI assistant interface"
      />

      {/* Problem */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="01 · Problem" title="Manufacturing decisions are buried in data." />
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            Enterprise supply chain teams sit on enormous datasets, but they&apos;re scattered across disconnected
            tools, formatted inconsistently, and never synthesised into a decision.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="rounded-xl border border-[#dedcd4] bg-white p-5">
                <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#555555]">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <StatRow stats={PROBLEM_STATS} />
          </div>
        </div>
      </section>

      {/* Research & Process */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="02 · Research & Process" title="Understanding the enterprise supply chain workflow." />
          <p className="mt-4 max-w-[760px] text-base leading-[27px] text-[#555555]">
            Research spanned six weeks of contextual interviews with production managers, supply chain analysts, and
            operations directors across three manufacturing enterprises — to understand not just the tools they use,
            but the mental models they rely on when making decisions.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <div key={p.title} className="rounded-xl border border-[#dedcd4] bg-white p-5">
                <p className="text-xs font-bold text-[#888888]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-sm font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#555555]">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#888888]">- Key Research Findings</p>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {RESEARCH_QUOTES.map((q) => (
                <Quote key={q.attribution} text={q.text} attribution={q.attribution} />
              ))}
            </div>
          </div>

          <div className="mt-14">
            <StatRow stats={RESEARCH_STATS} />
          </div>
        </div>
      </section>

      {/* Core UX Challenge */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- 03 · Core UX Challenge</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.3] tracking-[-0.5px] text-white sm:text-4xl">
            How do you make AI outputs clear enough to trust and act on?
          </h2>
          <p className="mt-6 text-base leading-[27px] text-white/60">
            Most AI tools produce verbose summaries. The real challenge was designing structured, explainable outputs
            that an operations director could act on in under two minutes, without needing to re-read the source
            data.
          </p>
        </div>
      </section>

      {/* Solution Framework */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="04 · Solution Framework" title="How SAI turns complexity into clarity." />
          <p className="mt-4 max-w-[720px] text-base leading-[27px] text-[#555555]">
            Three layers working in sequence — from raw manufacturing data to structured, actionable decisions — all
            through a single conversational interface.
          </p>
          <div className="mt-10 space-y-14">
            {FRAMEWORK_LAYERS.map((layer, i) => (
              <div
                key={layer.step}
                className={`flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="rounded-2xl border border-[#dedcd4] bg-white p-6 lg:flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">{layer.step}</p>
                  <h3 className="mt-3 text-lg font-semibold text-ink">{layer.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[#555555]">{layer.tag}</p>
                  <p className="mt-3 text-[13px] leading-5 text-[#555555]">{layer.body}</p>
                  {layer.checklist && (
                    <ul className="mt-5 space-y-2.5">
                      {layer.checklist.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] leading-5 text-[#555555]">
                          <ChevronIcon className="mt-1 shrink-0 text-[#2C6ACE]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="lg:flex-1">
                  <ScreenMockup type={layer.mockup} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Experience */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader eyebrow="05 · Key Experience" title="From data to decisions." />
            <div className="flex items-center gap-2">
              <StepPill num="01" label="Login" />
              <ChevronIcon className="text-[#A8BFCE]" />
              <StepPill num="02" label="Chat" />
              <ChevronIcon className="text-[#A8BFCE]" />
              <StepPill num="03" label="Output" />
            </div>
          </div>
          <div className="mt-10 space-y-14">
            {KEY_EXPERIENCE_STEPS.map((step, i) => (
              <div
                key={step.step}
                className={`flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="rounded-2xl border border-[#dedcd4] bg-white p-6 lg:flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#888888]">{step.step}</p>
                  <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-160 text-[13px] leading-5 text-[#555555]">{step.body}</p>
                  <div className="mt-6 border-t border-black/10 pt-4">
                    <div className="flex items-center justify-between text-[9px] text-[#646464]">
                      <span>Flow progress</span>
                      <span>{step.progress}</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-[#2C6ACE]/[0.07]">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-[#2C6ACE] to-[#7C6ACE]"
                        style={{ width: `${step.progressPct}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:flex-1">
                  <ScreenMockup type={step.mockup} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Decisions */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <SectionHeader eyebrow="06 · Design Decisions" title="Three decisions that shaped the system." tone="dark" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {DESIGN_DECISIONS.map((d, i) => (
            <div key={d.title} className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs font-bold text-white/40">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-base font-semibold text-white">{d.title}</h3>
              <p className="mt-3 text-[13px] leading-5 text-white/60">{d.body}</p>
              <p className="mt-4 border-l-2 border-white/20 pl-3 text-[13px] italic text-white/50">
                &ldquo;{d.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Screens */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="07 · Product Screens" title="Curated product moments." />
          <p className="mt-4 max-w-[640px] text-base leading-[27px] text-[#555555]">
            Each screen earns its place. The system thinking is visible in their progression, not their quantity.
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SCREENS.map((s) => (
              <div key={s.label}>
                <ScreenMockup type={s.mockup} />
                <p className="mt-4 text-sm font-semibold text-ink">{s.label}</p>
                <p className="mt-1 text-xs text-[#888888]">{s.tag}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-stretch">
            <div>
              <ScreenMockup type="dashboard" />
              <p className="mt-4 text-sm font-semibold text-ink">04 · Planning Dashboard</p>
              <p className="mt-1 text-xs text-[#888888]">Executive view · AI active · Live KPIs</p>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-[#dedcd4] bg-white/75 p-8">
              <div>
                <div className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-black/10 bg-[#2C6ACE]/[0.06]">
                  <ScreenPrincipleIcon className="text-[#2C6ACE]" />
                </div>
                <p className="mt-5 text-[10px] font-medium uppercase tracking-[1px] text-[#767676]">
                  Screen Design Principle
                </p>
                <p className="mt-3 text-lg font-semibold text-ink">
                  Every screen has one primary action and one primary insight.
                </p>
                <p className="mt-3 text-sm leading-6 text-[#555555]">
                  Multi-purpose screens fragment attention. Each Suchama view is designed around a single decision
                  moment.
                </p>
              </div>
              <ul className="mt-6 space-y-3 border-t border-[#dedcd4] pt-6">
                {SCREEN_PRINCIPLE_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs text-[#646464]">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#2C6ACE]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="relative bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative">
          <SectionHeader eyebrow="08 · Brand Identity" title="The Suchama AI brand language." />
          <p className="mt-4 max-w-[640px] text-base leading-[27px] text-[#555555]">
            A brand built for enterprise trust. The visual system balances technical credibility with approachable
            clarity.
          </p>

          {/* Logo lockups */}
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div>
              <div className="flex items-center justify-center rounded-2xl border border-[#dedcd4] bg-gradient-to-b from-[#ebf2ff] to-[#eeebff] px-8 py-16">
                <Image
                  src="/images/suchamai-logo.png"
                  alt="Suchama AI — primary logotype"
                  width={220}
                  height={220}
                  className="h-24 w-24"
                />
              </div>
              <p className="mt-3 text-xs font-medium text-[#0F1B2D]">Primary logotype</p>
              <p className="mt-0.5 text-[11px] text-[#767676]">Light background · Brand blue #2C6ACE</p>
            </div>
            <div>
              <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#0E1220] px-8 py-14">
                <div className="rounded-xl bg-white p-4">
                  <Image
                    src="/images/suchamai-logo.png"
                    alt="Suchama AI — reversed logotype"
                    width={220}
                    height={220}
                    className="h-16 w-16"
                  />
                </div>
              </div>
              <p className="mt-3 text-xs font-medium text-[#0F1B2D]">Reversed logotype</p>
              <p className="mt-0.5 text-[11px] text-[#767676]">Dark background · White wordmark</p>
            </div>
          </div>

          {/* Colour system + typography */}
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#dedcd4] bg-white/75 p-7">
              <p className="text-[10px] font-medium uppercase tracking-[1px] text-[#767676]">Colour System</p>
              <div className="mt-5 space-y-4">
                {BRAND_COLORS.map((c) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="h-9 w-9 shrink-0 rounded-full border border-black/10"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div>
                      <p className="text-sm font-medium text-ink">{c.name}</p>
                      <p className="text-xs text-[#888888]">
                        {c.hex} · {c.usage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[#dedcd4] bg-white/75 p-7">
              <p className="text-[10px] font-medium uppercase tracking-[1px] text-[#767676]">Typography</p>
              <div className="mt-5 divide-y divide-[#e5e3dc]">
                {TYPOGRAPHY_SPECIMENS.map((t) => (
                  <div key={t.label} className="py-4 first:pt-0 last:pb-0">
                    <p className="text-[9px] font-medium uppercase tracking-[1px] text-[#767676]">{t.label}</p>
                    <p className={`mt-1 ${t.sampleClass}`}>{t.sample}</p>
                    <p className="mt-1 text-xs text-[#888888]">{t.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section
        className="px-6 py-20 sm:px-10 lg:px-20 lg:py-24"
        style={{ background: "linear-gradient(270deg, #1A2332 0%, rgba(0,0,0,0.9) 100%)" }}
      >
        <SectionHeader eyebrow="09 · Outcome" title="From data to decisions, at enterprise scale." tone="dark" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {OUTCOMES.map((o) => (
            <div key={o.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-black/10"
                style={{ backgroundColor: `${o.color}0F` }}
              >
                <span style={{ color: o.color }}>{o.icon}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">{o.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">{o.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 max-w-[720px]">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- Reflection</p>
          <p className="mt-4 text-xl leading-[1.6] text-white/80">
            The hardest part of AI product design is not making the AI smarter. It&apos;s making its outputs
            structured enough that humans will act on them without second-guessing. Suchama proved that formatting
            is a UX decision — the system&apos;s intelligence was already there. What the design added was a
            framework for presenting that intelligence as decisions, not documents.
          </p>
        </div>
        <div className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 sm:grid-cols-4">
          {PROJECT_META.map((m) => (
            <div key={m.label}>
              <p className="text-[10px] font-medium uppercase tracking-[1px] text-white/50">{m.label}</p>
              <p className="mt-1.5 text-sm font-medium text-white/90">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      <CaseStudyNav currentSlug="suchamai-ai" />
      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
