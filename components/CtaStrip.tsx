import { CONTACT_EMAIL } from "@/lib/site";

/** Closing call-to-action band used on the homepage and work page. */
export default function CtaStrip({ outlineButton = false }: { outlineButton?: boolean }) {
  return (
    <section className="dark-wash relative overflow-hidden">
      <div className="relative flex flex-col items-center gap-10 px-6 py-24 text-center sm:px-10 lg:px-33">
        <div className="flex max-w-210 flex-col items-center gap-4">
          <h2 className="text-5xl font-bold leading-[1.05] tracking-[-1.5px] text-white sm:text-6xl lg:text-[72px]">
            Building something ambitious?
          </h2>
          <p className="max-w-125 text-[13px] text-white/50">
            Building something ambitious? I&apos;d love to help turn complex ideas into products people genuinely
            enjoy using.
          </p>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium transition-all ${
            outlineButton
              ? "border border-white/20 text-white hover:border-white/60"
              : "bg-white text-ink shadow-lg hover:bg-white/90"
          }`}
        >
          Get in touch
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
