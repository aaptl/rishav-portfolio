export type CaseStudySummary = {
  number: string;
  slug: string;
  title: string;
  blurb: string;
};

/** The five top-level case studies, in display order. Used to drive the "More Case Studies" nav. */
export const CASE_STUDIES: CaseStudySummary[] = [
  { number: "01", slug: "pawle", title: "Pawle", blurb: "AI-first pet ecosystem & health platform" },
  { number: "02", slug: "wiser-solutions", title: "Wiser Solutions", blurb: "Enterprise design systems & data" },
  { number: "03", slug: "suchamai-ai", title: "Suchamai AI", blurb: "AI manufacturing planning & visibility" },
  { number: "04", slug: "trovex-ai", title: "Trovex.ai", blurb: "AI sales practice & role-play" },
  { number: "05", slug: "mobee", title: "Mobee", blurb: "Retail intelligence & cashback rewards" },
];

/** Returns the next 3 case studies after `slug`, wrapping around — mirrors the source design's rotation. */
export function otherCaseStudies(slug: string): CaseStudySummary[] {
  const i = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const base = i === -1 ? CASE_STUDIES.length - 1 : i;
  return [1, 2, 3].map((offset) => CASE_STUDIES[(base + offset) % CASE_STUDIES.length]);
}
