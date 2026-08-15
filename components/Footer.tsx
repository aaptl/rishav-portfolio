import Image from "next/image";
import Link from "next/link";

const SOCIALS = [
  { label: "Behance", href: "https://www.behance.net/rishavsingh46", icon: "/icons/behance.svg", size: 24 },
  { label: "Dribbble", href: "https://dribbble.com/rishavdesign", icon: "/icons/dribbble.svg", size: 18 },
  { label: "WhatsApp", href: "https://wa.me/qr/BWEYWAGY7CQZB1", icon: "/icons/whatsapp.svg", size: 18 },
];

export default function Footer() {
  return (
    <footer className="dark-wash px-6 pb-14 pt-0 sm:px-10 lg:px-20">
      <div className="h-px w-full bg-white/8" />
      <div className="flex flex-col items-center gap-10 pt-14">
        <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2.5">
            <p className="text-base font-semibold text-white">Rishav Singh</p>
            <p className="text-xs text-white/70">Product Designer &amp; Design Strategist</p>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <Link href="/work" className="text-xs font-medium text-white/70 transition-colors hover:text-white">
              Work
            </Link>
            <Link href="/archive" className="text-xs font-medium text-white/70 transition-colors hover:text-white">
              Archive
            </Link>
            <Link href="/about" className="text-xs font-medium text-white/70 transition-colors hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-xs font-medium text-white/70 transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SOCIALS.map(({ label, href, icon, size }) => (
            <a
              key={label}
              href={href}
              target={href === "#" ? undefined : "_blank"}
              rel={href === "#" ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3.5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/25"
            >
              <Image src={icon} alt="" width={size} height={size} />
              {label}
            </a>
          ))}
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-[13px] text-white/50">© 2026 Rishav Singh</p>
          <p className="text-[13px] text-white/50">Design Thinker · 3+ yrs</p>
        </div>
      </div>
    </footer>
  );
}
