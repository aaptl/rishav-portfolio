import Link from "next/link";

const CHAPTERS = [
  { slug: "letter-of-authorization", label: "Letter of Authorization" },
  { slug: "pin-level-pricing", label: "Pin Level Pricing" },
  { slug: "reckless-abandon", label: "Reckless Abandon" },
  { slug: "bonus-implementation", label: "Bonus Implementation" },
] as const;

export default function MobeeChapterNav({ current }: { current: (typeof CHAPTERS)[number]["slug"] }) {
  return (
    <div className="border-b border-[#e2e8f0] bg-white px-6 py-6 sm:px-10 lg:px-20">
      <div className="flex flex-wrap items-center gap-6 sm:gap-8">
        {CHAPTERS.map((chapter) => {
          const isActive = chapter.slug === current;
          return (
            <Link
              key={chapter.slug}
              href={chapter.slug === "letter-of-authorization" ? "/work/mobee" : `/work/mobee/${chapter.slug}`}
              className="flex flex-col items-center gap-2"
            >
              <span className={`text-sm font-bold ${isActive ? "text-[#0f172a]" : "text-[#475569]"}`}>
                {chapter.label}
              </span>
              <span className={`h-[3px] w-[120px] max-w-full rounded-full ${isActive ? "bg-[#F58220]" : "bg-[#E2E8F0]"}`} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
