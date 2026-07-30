import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me what you're building. Based in New Delhi, available for freelance and full-time product design work — usually responds within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Rishav Singh",
    description: "Tell me what you're building — I usually respond within 24 hours.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#f8f8f6]">
      {/* Hero */}
      <section className="dark-wash relative min-h-[360px] overflow-hidden pb-20">
        <HeroBackdrop />
        <Nav active="Contact" />
        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[760px] flex-col items-center justify-center px-6 pb-10 pt-32 text-center">
          <h1 className="text-5xl font-bold leading-[1.1] tracking-[-1px] text-white sm:text-6xl lg:text-[64px]">
            Tell me what you&apos;re building.
          </h1>
          <p className="mt-6 text-lg leading-[30px] text-white/60 sm:text-xl">
            Based in New Delhi · Available for freelance &amp; full-time · Usually responds within 24h
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-gradient-to-b from-[#f8f8f6] to-white px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 rounded-3xl bg-white p-8 shadow-[0px_8px_24px_-10px_rgba(0,0,0,0.05)] lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-12">
          {/* Illustration side */}
          <div className="flex flex-col">
            <Image
              src="/images/portrait.png"
              alt="Portrait of Rishav Singh"
              width={480}
              height={432}
              className="h-[280px] w-full rounded-2xl object-cover sm:h-[360px] lg:h-108"
            />
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-ink">Nice to meet you, I&apos;m Rishav.</h2>
              <p className="mt-2 text-sm text-[#555555]">
                I help teams design meaningful products that solve real problems.
              </p>
              <p className="mt-4 text-[13px] text-[#767676]">
                Available for <span className="font-bold text-ink">AI Products · Enterprise SaaS · Design Systems</span>
              </p>
            </div>
          </div>

          {/* Form card */}
          <form
            action={`mailto:${CONTACT_EMAIL}`}
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-6 rounded-2xl border border-[#e5e7eb] p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-[#6b7280]">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="E.g. Harry Potter"
                  className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-[#f9fafb] px-4 text-sm text-ink placeholder:text-[#9ca3af] focus:border-ink/40 focus:outline-none"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-[#6b7280]">
                  Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-[#f9fafb] px-4 text-sm text-ink placeholder:text-[#9ca3af] focus:border-ink/40 focus:outline-none"
                />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-[#6b7280]">
                Tell me about the challenge
              </span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Describe the system, timeline, and current bottlenecks..."
                className="h-40 w-full resize-none rounded-xl border border-[#e5e7eb] bg-[#f9fafb] px-4 py-4 text-sm text-ink placeholder:text-[#9ca3af] focus:border-ink/40 focus:outline-none"
              />
            </label>

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#111827] text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                Start the conversation <span aria-hidden>→</span>
              </button>

              <p className="inline-flex items-center justify-center gap-1.5 text-[13px] text-[#9ca3af]">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3 shrink-0"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Your details are safe with me. I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
