import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "Archive", href: "/archive" },
  { label: "About", href: "/about" },
] as const;

export default function Nav({ active }: { active?: "Work" | "Archive" | "About" }) {
  return (
    <header className="absolute inset-x-0 top-0 z-20 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-8 sm:px-10 lg:px-20">
        <Link href="/" className="text-[17px] text-white">
          Rishav Singh
        </Link>
        <nav className="flex items-center gap-6 sm:gap-12">
          {LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`pb-1 text-xs font-medium tracking-[0.2px] transition-colors ${
                active === label
                  ? "border-b border-white text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="pb-1 text-xs font-medium tracking-[0.2px] text-white/40 transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
