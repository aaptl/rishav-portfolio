import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES, otherCaseStudies } from "@/lib/case-studies";

export default function CaseStudyNav({ currentSlug }: { currentSlug: string }) {
  const items = otherCaseStudies(currentSlug);
  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === currentSlug);
  const position = currentIndex === -1 ? CASE_STUDIES.length : currentIndex + 1;

  return (
    <section className="bg-paper px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-[#94A3B8]">- More Case Studies</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.5px] text-ink sm:text-4xl">
            Explore the full collection of work
          </h2>
        </div>
        <span className="hidden shrink-0 rounded-full border border-[#e2e8f0] px-4 py-1.5 text-xs font-medium text-[#64748B] sm:inline-block">
          {position} / {CASE_STUDIES.length}
        </span>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group flex flex-col rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-[0_4px_10px_rgba(15,23,42,0.04)] transition-colors hover:border-ink/20"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-[#e2e8f0] px-2.5 py-1 text-[11px] font-semibold text-[#64748B]">
                {item.number}
              </span>
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ink" />
            </div>
            <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F1F5F9]">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-1 text-sm text-[#64748B]">{item.blurb}</p>
            <p className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white transition-opacity group-hover:opacity-85">
              Read Case Study <span aria-hidden>→</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
