import { CONTACT_EMAIL } from "@/lib/site";

/** Closing call-to-action band used on the homepage and work page. */
export default function CtaStrip({ outlineButton = false }: { outlineButton?: boolean }) {
  return (
    <section className="dark-wash relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-dark" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(68,107,255,0.15),transparent_70%)] blur-2xl"
      />
      <div className="relative flex flex-col gap-10 px-6 py-24 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20">
        <div className="max-w-[840px] space-y-5">
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-1.5px] text-white sm:text-5xl lg:text-[64px]">
            Let&apos;s build something that actually works.
          </h2>
          <p className="border-b border-white/10 pb-6 text-[13px] text-white/40">
            Whether you&apos;re building something new or fixing something broken — I&apos;m interested in the hard
            problems.
          </p>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
            outlineButton
              ? "border border-white/20 text-white hover:border-white/60"
              : "bg-white text-ink shadow-lg hover:bg-white/90"
          }`}
        >
          Start a conversation
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
