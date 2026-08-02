import Image from "next/image";
import Link from "next/link";

type Visual = { src: string; alt: string; width: number; height: number };

export default function MobeeHero({
  badge,
  chapter,
  title,
  subtitle,
  meta,
  visuals,
  visualStyle = "phone",
  backHref = "/work",
  backLabel = "Back to Work",
}: {
  badge: string;
  chapter: string;
  title: string;
  subtitle: string;
  meta: string[];
  visuals?: Visual[];
  visualStyle?: "phone" | "browser";
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <section
      className="relative flex flex-col gap-16 overflow-hidden px-6 py-24 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #C45E06 0%, #E2720A 35%, #EE8E14 65%, #F4A623 100%)" }}
    >
      <span aria-hidden className="pointer-events-none absolute -right-[100px] -top-[150px] h-[900px] w-[900px] rounded-full bg-white/[0.03]" />
      <span aria-hidden className="pointer-events-none absolute right-[60px] top-[60px] h-[600px] w-[600px] rounded-full bg-white/[0.02]" />
      <span aria-hidden className="pointer-events-none absolute right-[220px] top-[210px] h-[300px] w-[300px] rounded-full bg-white/[0.03]" />

      <Link
        href={backHref}
        className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:text-white sm:left-10 sm:top-8 lg:left-20"
      >
        <span aria-hidden>←</span> {backLabel}
      </Link>

      <div className="relative z-10 flex max-w-[580px] flex-col gap-8 pt-10">
        <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/[0.09] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.02em] text-white/85 backdrop-blur-sm">
          {badge}
        </span>
        <div className="flex flex-col gap-3">
          <p className="text-[13px] font-bold uppercase tracking-[0.02em] text-white/70">{chapter}</p>
          <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[54px]">{title}</h1>
        </div>
        <p className="max-w-[560px] text-lg leading-[1.6] text-white/80">{subtitle}</p>
        <div className="flex flex-wrap items-center gap-3">
          {meta.map((item) => (
            <span key={item} className="rounded-lg border border-white/20 bg-white/[0.13] px-4 py-2 text-[13px] font-bold text-white">
              {item}
            </span>
          ))}
        </div>
      </div>

      {visuals && visualStyle === "browser" && visuals.length === 2 && (
        <div className="relative z-10 h-[280px] w-full max-w-[460px] shrink-0 sm:h-[340px] lg:h-[380px] lg:max-w-[560px]">
          <div className="absolute left-0 top-0 w-[76%] overflow-hidden rounded-2xl border border-white/20 shadow-[0_20px_44px_-6px_rgba(0,0,0,0.33)]">
            <div className="flex items-center gap-1.5 bg-[#111111] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
            </div>
            <Image src={visuals[0].src} alt={visuals[0].alt} width={visuals[0].width} height={visuals[0].height} className="h-auto w-full" priority />
          </div>
          <div className="absolute bottom-0 right-0 z-10 w-[68%] overflow-hidden rounded-2xl border-2 border-white/30 shadow-[0_28px_56px_-6px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-1.5 bg-[#111111] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
            </div>
            <Image src={visuals[1].src} alt={visuals[1].alt} width={visuals[1].width} height={visuals[1].height} className="h-auto w-full" priority />
          </div>
          <span aria-hidden className="absolute -bottom-3 left-1/2 h-6 w-4/5 -translate-x-1/2 rounded-full bg-black/20 blur-xl" />
        </div>
      )}

      {visuals && visualStyle === "phone" && visuals.length === 1 && (
        <div className="relative z-10 w-full max-w-[320px] shrink-0 lg:max-w-[380px]">
          <div className="overflow-hidden rounded-[36px] border border-white/30 shadow-[0_28px_56px_-4px_rgba(0,0,0,0.33)]">
            <Image src={visuals[0].src} alt={visuals[0].alt} width={visuals[0].width} height={visuals[0].height} className="h-auto w-full" priority />
          </div>
          <span aria-hidden className="absolute -bottom-3 left-1/2 h-6 w-4/5 -translate-x-1/2 rounded-full bg-black/20 blur-xl" />
        </div>
      )}

      {visuals && visualStyle === "phone" && visuals.length === 2 && (
        <div className="relative z-10 h-[380px] w-full max-w-[360px] shrink-0 sm:h-[440px] lg:h-[480px] lg:max-w-[440px]">
          <div className="absolute left-0 top-[6%] w-[52%] -rotate-6 overflow-hidden rounded-[28px] border border-white/25 shadow-[0_20px_44px_-6px_rgba(0,0,0,0.33)]">
            <Image src={visuals[0].src} alt={visuals[0].alt} width={visuals[0].width} height={visuals[0].height} className="h-auto w-full" priority />
          </div>
          <div className="absolute right-0 top-[12%] z-10 w-[56%] rotate-3 overflow-hidden rounded-[30px] border-2 border-white/30 shadow-[0_28px_56px_-6px_rgba(0,0,0,0.38)]">
            <Image src={visuals[1].src} alt={visuals[1].alt} width={visuals[1].width} height={visuals[1].height} className="h-auto w-full" priority />
          </div>
          <span aria-hidden className="absolute bottom-2 left-1/2 h-6 w-4/5 -translate-x-1/2 rounded-full bg-black/20 blur-xl" />
        </div>
      )}

      {visuals && visuals.length === 3 && (
        <div className="relative z-10 h-[380px] w-full max-w-[380px] shrink-0 sm:h-[440px] lg:h-[480px] lg:max-w-[460px]">
          <div className="absolute left-0 top-[8%] w-[42%] -rotate-6 overflow-hidden rounded-[26px] border border-white/25 shadow-[0_18px_40px_-6px_rgba(0,0,0,0.3)]">
            <Image src={visuals[0].src} alt={visuals[0].alt} width={visuals[0].width} height={visuals[0].height} className="h-auto w-full" priority />
          </div>
          <div className="absolute right-0 top-[16%] w-[44%] rotate-6 overflow-hidden rounded-[26px] border border-white/25 shadow-[0_18px_40px_-6px_rgba(0,0,0,0.3)]">
            <Image src={visuals[2].src} alt={visuals[2].alt} width={visuals[2].width} height={visuals[2].height} className="h-auto w-full" priority />
          </div>
          <div className="absolute left-1/2 top-0 z-10 w-[38%] -translate-x-1/2 overflow-hidden rounded-[30px] border-2 border-white/30 shadow-[0_28px_56px_-6px_rgba(0,0,0,0.4)]">
            <Image src={visuals[1].src} alt={visuals[1].alt} width={visuals[1].width} height={visuals[1].height} className="h-auto w-full" priority />
          </div>
          <span aria-hidden className="absolute bottom-2 left-1/2 h-6 w-4/5 -translate-x-1/2 rounded-full bg-black/20 blur-xl" />
        </div>
      )}
    </section>
  );
}
