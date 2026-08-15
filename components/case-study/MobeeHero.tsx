import Image from "next/image";
import Link from "next/link";

type Visual = { src: string; alt: string; width: number; height: number };
type Stat = { icon: "clock" | "user" | "trend"; value: string; label?: string };

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

function TrendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 6h6v6" />
    </svg>
  );
}

const STAT_ICONS = { clock: ClockIcon, user: UserIcon, trend: TrendIcon };

function DotGrid({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={className}
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)",
        backgroundSize: "22px 22px",
      }}
    />
  );
}

export default function MobeeHero({
  badge,
  badgeIcon = false,
  chapter,
  title,
  titleAccent,
  subtitle,
  meta,
  stats,
  divider = false,
  dotPattern = false,
  visuals,
  visualStyle = "phone",
  backHref = "/work",
  backLabel = "Back to Work",
}: {
  badge: string;
  badgeIcon?: boolean;
  chapter: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  meta?: string[];
  stats?: Stat[];
  divider?: boolean;
  dotPattern?: boolean;
  visuals?: Visual[];
  visualStyle?: "phone" | "browser";
  backHref?: string;
  backLabel?: string;
}) {
  const accentIndex = titleAccent ? title.lastIndexOf(titleAccent) : -1;

  return (
    <section
      className="relative flex flex-col gap-16 overflow-hidden px-6 py-24 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #C45E06 0%, #E2720A 35%, #EE8E14 65%, #F4A623 100%)" }}
    >
      <span aria-hidden className="pointer-events-none absolute -right-[100px] -top-[150px] h-[900px] w-[900px] rounded-full bg-white/[0.03]" />
      <span aria-hidden className="pointer-events-none absolute right-[60px] top-[60px] h-[600px] w-[600px] rounded-full bg-white/[0.02]" />
      <span aria-hidden className="pointer-events-none absolute right-[220px] top-[210px] h-[300px] w-[300px] rounded-full bg-white/[0.03]" />
      {dotPattern && (
        <>
          <DotGrid className="pointer-events-none absolute right-10 top-10 hidden h-[110px] w-[150px] sm:block" />
          <DotGrid className="pointer-events-none absolute bottom-8 left-8 hidden h-[90px] w-[110px] opacity-60 lg:block" />
        </>
      )}

      <Link
        href={backHref}
        className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:text-white sm:left-10 sm:top-8 lg:left-20"
      >
        <span aria-hidden>←</span> {backLabel}
      </Link>

      <div className="relative z-10 flex max-w-[580px] flex-col gap-8 pt-10">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/[0.09] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.02em] text-white/85 backdrop-blur-sm">
          {badgeIcon && <AwardIcon className="h-3.5 w-3.5 text-white/80" />}
          {badge}
        </span>
        <div className="flex flex-col gap-3">
          <p className="text-[13px] font-bold uppercase tracking-[0.02em] text-white/70">{chapter}</p>
          <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[54px]">
            {accentIndex >= 0 ? (
              <>
                {title.slice(0, accentIndex)}
                <span className="text-ink">{title.slice(accentIndex)}</span>
              </>
            ) : (
              title
            )}
          </h1>
          {divider && <span aria-hidden className="mt-1 h-1 w-14 rounded-full bg-[#FBBF24]" />}
        </div>
        <p className="max-w-[560px] text-lg leading-[1.6] text-white/80">{subtitle}</p>
        {stats ? (
          <div className="flex flex-wrap items-center gap-3">
            {stats.map((s) => {
              const Icon = STAT_ICONS[s.icon];
              return (
                <div key={s.value} className="flex items-center gap-3 rounded-2xl border border-white/25 px-5 py-3.5">
                  <Icon className="h-5 w-5 shrink-0 text-[#FBBF24]" />
                  <div className="flex flex-col">
                    <span className="text-base font-extrabold leading-tight text-white">{s.value}</span>
                    {s.label && <span className="text-xs text-white/80">{s.label}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            {meta?.map((item) => (
              <span key={item} className="rounded-lg border border-white/20 bg-white/[0.13] px-4 py-2 text-[13px] font-bold text-white">
                {item}
              </span>
            ))}
          </div>
        )}
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
