import Link from "next/link";

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/resume" },
  { label: "About", href: "/about" },
  { label: "Archive", href: "/archive" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Nav({
  active,
  blur = true,
}: {
  active?: "Work" | "Resume" | "Archive" | "About" | "Contact";
  blur?: boolean;
}) {
  return (
    <header className={`absolute inset-x-0 top-0 z-20 ${blur ? "backdrop-blur-sm" : ""}`}>
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
        </nav>
      </div>
    </header>
  );
}
