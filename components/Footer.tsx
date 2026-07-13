import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

type Variant = "home" | "about" | "archive";

export default function Footer({ variant = "home" }: { variant?: Variant }) {
  if (variant === "about") {
    return (
      <footer className="border-t border-white/5 bg-ink px-6 py-14 sm:px-10 lg:px-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-white">Rishav Singh</p>
            <div className="flex items-center gap-8">
              {["Twitter", "LinkedIn", "Dribbble"].map((label) => (
                <a key={label} href="#" className="text-xs text-white/50 transition-colors hover:text-white">
                  {label}
                </a>
              ))}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs text-white/50 transition-colors hover:text-white">
                Email
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-white/30">© 2024 Rishav Singh. Built with precision.</p>
            <a href="#top" className="text-[11px] text-white/30 transition-colors hover:text-white">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    );
  }

  const bottomLeft =
    variant === "archive" ? "© 2024 Rishav Singh. All rights reserved." : "© 2026 Rishav Singh";
  const bottomRight = variant === "archive" ? "Built with intent." : "Design Leader · 4+ yrs";

  return (
    <footer className="border-t border-white/5 bg-ink px-6 pb-10 pt-16 sm:px-10 lg:px-20">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <p className="text-base font-semibold text-white">Rishav Singh</p>
            <p className="text-xs text-white/60">Product & Systems Designer</p>
          </div>
          <div className="flex items-center gap-10">
            <Link href="/work" className="text-xs font-medium text-white transition-colors hover:text-white/70">
              Work
            </Link>
            <Link href="/about" className="text-xs font-medium text-white transition-colors hover:text-white/70">
              About
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-xs font-medium text-white transition-colors hover:text-white/70"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-white/40">{bottomLeft}</p>
          <p className="text-[11px] text-white/40">{bottomRight}</p>
        </div>
      </div>
    </footer>
  );
}
