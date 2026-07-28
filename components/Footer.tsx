import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink px-6 pb-10 pt-16 sm:px-10 lg:px-20">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <p className="text-base font-semibold text-white">Rishav Singh</p>
            <p className="text-xs text-white/60">Product Designer &amp; Design Strategist</p>
          </div>
          <div className="flex flex-wrap items-center gap-10">
            <Link href="/work" className="text-xs font-medium text-white transition-colors hover:text-white/70">
              Work
            </Link>
            <Link href="/archive" className="text-xs font-medium text-white transition-colors hover:text-white/70">
              Archive
            </Link>
            <Link href="/about" className="text-xs font-medium text-white transition-colors hover:text-white/70">
              About
            </Link>
            <Link href="/contact" className="text-xs font-medium text-white transition-colors hover:text-white/70">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-8">
            {SOCIALS.map(({ label, href }) => (
              <a key={label} href={href} className="text-xs text-white/50 transition-colors hover:text-white">
                {label}
              </a>
            ))}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs text-white/50 transition-colors hover:text-white">
              Email
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-white/40">© 2026 Rishav Singh</p>
          <p className="text-[11px] text-white/40">Design Thinker · 3+ yrs</p>
        </div>
      </div>
    </footer>
  );
}
