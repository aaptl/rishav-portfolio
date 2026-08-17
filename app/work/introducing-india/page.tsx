import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Introducing India — Case Study",
  description:
    "A cultural brand identity celebrating India's rich heritage through contemporary design language and visual storytelling.",
  alternates: { canonical: "/work/introducing-india" },
  openGraph: {
    title: "Introducing India — Case Study — Rishav Singh",
    description: "A cultural brand identity celebrating India's rich heritage, told through visual storytelling.",
    url: "/work/introducing-india",
  },
};

const GALLERY = [
  { src: "/images/introducing-india/02.png", alt: "Introducing India — visual identity study", w: 1920, h: 1152 },
  { src: "/images/introducing-india/03.png", alt: "Introducing India — visual identity study", w: 1920, h: 1152 },
  { src: "/images/introducing-india/04.png", alt: "Introducing India — brand detail", w: 1728, h: 632 },
  { src: "/images/introducing-india/05-78f21b.png", alt: "Introducing India — heritage motif study", w: 1614, h: 927 },
  { src: "/images/introducing-india/06.png", alt: "Introducing India — full spread", w: 2800, h: 1398 },
  { src: "/images/introducing-india/07.gif", alt: "Introducing India — visual identity study", w: 1480, h: 928 },
  { src: "/images/introducing-india/08-508b29.png", alt: "Introducing India — brand application", w: 1908, h: 920 },
  { src: "/images/introducing-india/09-2dfda2.png", alt: "Introducing India — brand application", w: 1898, h: 920 },
  { src: "/images/introducing-india/10-66527d.png", alt: "Introducing India — brand application", w: 1920, h: 1357 },
  { src: "/images/introducing-india/11.png", alt: "Introducing India — closing detail", w: 1663, h: 316 },
];

export default function IntroducingIndiaPage() {
  return (
    <main className="flex-1 bg-paper">
      {/* Hero — full-bleed cover image, no intro text box */}
      <section className="relative" style={{ backgroundColor: "#061f22" }}>
        <Nav active="Work" blur={false} />
        <Image
          src="/images/introducing-india/01.png"
          alt="Introducing India — cultural brand identity design"
          width={1920}
          height={1254}
          className="w-full"
          priority
        />
      </section>

      {/* Visual story — full-bleed gallery */}
      <section className="relative bg-paper">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines-light" />
        <div className="relative flex flex-col">
          {GALLERY.map((image, i) =>
            image.src.endsWith(".gif") ? (
              // eslint-disable-next-line @next/next/no-img-element -- native <img> so the browser animates the GIF itself, bypassing next/image entirely
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.w}
                height={image.h}
                loading="lazy"
                className="w-full"
              />
            ) : (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.w}
                height={image.h}
                className="w-full"
                priority={i === 0}
              />
            ),
          )}
        </div>
      </section>

      {/* More Branding Work */}
      <section className="bg-ink px-4 py-20 sm:px-6 lg:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/40">- More Branding Work</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.5px] text-white sm:text-4xl">
          Explore the rest of the branding collection
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Link
            href="/work/kasaba-home"
            className="group -ml-px -mt-px block border border-white/10 p-6 transition-colors hover:border-white/30 hover:bg-white/[0.03]"
          >
            <p className="text-xs font-medium text-white/40">01</p>
            <h3 className="mt-4 text-xl font-semibold text-white">Kasaba Home</h3>
            <p className="mt-2 text-sm text-white/50">Artisanal home brand identity</p>
            <p className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-white transition-transform group-hover:translate-x-1">
              Read Case Study <span aria-hidden>→</span>
            </p>
          </Link>
          <Link
            href="/work/debtworks"
            className="group -ml-px -mt-px block border border-white/10 p-6 transition-colors hover:border-white/30 hover:bg-white/[0.03]"
          >
            <p className="text-xs font-medium text-white/40">02</p>
            <h3 className="mt-4 text-xl font-semibold text-white">DebtWorks</h3>
            <p className="mt-2 text-sm text-white/50">Fintech brand identity and visual system</p>
            <p className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-white transition-transform group-hover:translate-x-1">
              Read Case Study <span aria-hidden>→</span>
            </p>
          </Link>
        </div>
      </section>

      <CtaStrip outlineButton />
      <Footer />
    </main>
  );
}
