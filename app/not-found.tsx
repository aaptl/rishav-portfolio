import Link from "next/link";
import Nav from "@/components/Nav";

export default function NotFound() {
  return (
    <main className="flex-1 bg-[#f8f8f6]">
      <section className="relative min-h-[112px] overflow-hidden bg-[rgba(17,17,17,0.92)] backdrop-blur-sm">
        <Nav />
      </section>

      <div className="mx-auto flex max-w-[1160px] flex-col items-center px-6 py-20 text-center sm:px-10">
        <div className="relative w-full max-w-[960px] overflow-hidden rounded-[28px] border border-black/5 bg-ink">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 grid-lines-dark" />
            {[
              { top: "18%", left: "12%" },
              { top: "30%", left: "82%" },
              { top: "62%", left: "8%" },
              { top: "75%", left: "70%" },
              { top: "22%", left: "48%" },
              { top: "50%", left: "92%" },
            ].map((pos, i) => (
              <span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white/40"
                style={{ top: pos.top, left: pos.left }}
              />
            ))}
            <div
              className="absolute right-[10%] top-[20%] h-24 w-24 rounded-full"
              style={{ background: "radial-gradient(circle at 35% 35%, #FDE68A, #B45309 75%)" }}
            />
            <div
              className="absolute right-[6%] top-[26%] h-32 w-40 -rotate-12 rounded-full border border-white/20"
              aria-hidden
            />
          </div>

          <div className="relative flex min-h-[420px] flex-col items-center justify-center gap-6 px-6 py-16 sm:min-h-[560px] sm:px-10">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EF4444]" />
                Signal weak
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-white/70">
                COORDINATES / 404.0° N / LOST
              </span>
            </div>

            <p className="select-none text-[100px] font-extrabold leading-none text-white/[0.08] sm:text-[140px]">
              404
            </p>

            <h1 className="max-w-[560px] text-3xl font-extrabold leading-[1.2] text-white sm:text-4xl">
              Oops, you&apos;ve drifted into the void.
            </h1>
            <p className="max-w-[480px] text-base leading-[27px] text-white/60">
              The page you&apos;re looking for has been relocated, refactored, or archived. Don&apos;t worry — let&apos;s
              get you back on course.
            </p>

            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              Back to Home <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
