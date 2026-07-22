import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import HeroBackdrop from "@/components/HeroBackdrop";

type Meta = { label: string; value: string };

export default function CaseStudyHero({
  badge,
  eyebrow,
  title,
  subtitle,
  pills,
  meta,
  heroImage,
  heroImageAlt,
  backHref = "/work",
  backLabel = "Back to Work",
}: {
  badge?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  pills?: string[];
  meta?: Meta[];
  heroImage?: string;
  heroImageAlt?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <section className="dark-wash relative overflow-hidden">
      <HeroBackdrop />
      <Nav active="Work" />
      <div className="relative z-10 mx-auto flex max-w-[860px] flex-col items-center px-6 py-32 text-center sm:px-10 lg:px-20">
        {badge && (
          <span className="mb-5 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-[11px] font-medium text-amber-200">
            {badge}
          </span>
        )}
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- {eyebrow}</p>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.15] tracking-[-1px] text-white sm:text-5xl lg:text-[64px]">
          {title}
        </h1>
        <p className="mt-6 max-w-[640px] text-lg leading-[29px] text-white/70">{subtitle}</p>

        {pills && pills.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/15 px-4 py-2 text-[13px] font-medium text-white/80"
              >
                {pill}
              </span>
            ))}
          </div>
        )}

        {meta && meta.length > 0 && (
          <div className="mt-12 grid w-full grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label} className="text-left sm:text-center">
                <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>
        )}

        <Link
          href={backHref}
          className="mt-12 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white"
        >
          <span aria-hidden>←</span> {backLabel}
        </Link>
      </div>

      {heroImage && (
        <div className="relative z-10 mx-auto max-w-[1040px] px-6 pb-20 sm:px-10 lg:px-20">
          <Image
            src={heroImage}
            alt={heroImageAlt ?? title}
            width={1000}
            height={700}
            className="w-full rounded-2xl border border-white/10"
            priority
          />
        </div>
      )}
    </section>
  );
}
