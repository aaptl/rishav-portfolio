import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { CASE_STUDIES } from "@/lib/case-studies";

const MOBEE_CHAPTERS = ["letter-of-authorization", "pin-level-pricing", "reckless-abandon", "bonus-implementation"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const caseStudyUrls: MetadataRoute.Sitemap = CASE_STUDIES.flatMap((study) => {
    if (study.slug === "mobee") {
      return [
        { url: `${SITE_URL}/work/mobee`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
        ...MOBEE_CHAPTERS.map((chapter) => ({
          url: `${SITE_URL}/work/mobee/${chapter}`,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        })),
      ];
    }
    return [{ url: `${SITE_URL}/work/${study.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 }];
  });

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/work`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...caseStudyUrls,
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/archive`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
