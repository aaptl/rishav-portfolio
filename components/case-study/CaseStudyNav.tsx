import Link from "next/link";
import { otherCaseStudies } from "@/lib/case-studies";

export default function CaseStudyNav({ currentSlug }: { currentSlug: string }) {
  const items = otherCaseStudies(currentSlug);

  return (
    <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- More Case Studies</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.5px] text-white sm:text-4xl">
            Explore the full collection of work
          </h2>
        </div>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={item.slug === "mobee" ? "/work/mobee" : `/work/${item.slug}`}
            className="group -ml-px -mt-px block border border-white/10 p-6 transition-colors hover:border-white/30 hover:bg-white/[0.03]"
          >
            <p className="text-xs font-medium text-white/40">{item.number}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-white/50">{item.blurb}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-white transition-transform group-hover:translate-x-1">
              Read Case Study <span aria-hidden>→</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
