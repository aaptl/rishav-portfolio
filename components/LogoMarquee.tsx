import Image from "next/image";

/** Scrolling strip of client logos (Doktor24, Spotify, Qapital, Zettle, PayPal, QLIRO, Trustly, Readly, Klarna). */
export default function LogoMarquee() {
  return (
    <section aria-label="Selected clients" className="overflow-hidden bg-[#161617] py-2.5">
      <div className="marquee-mask mx-auto max-w-[1200px] overflow-hidden">
        <div className="marquee-track flex w-max">
          {[0, 1].map((i) => (
            <Image
              key={i}
              src="/images/logos-loop.png"
              alt={i === 0 ? "Client logos: Doktor24, Spotify, Qapital, Zettle, PayPal, QLIRO, Trustly, Readly, Klarna" : ""
              }
              aria-hidden={i === 1}
              width={1295}
              height={80}
              className="h-20 w-auto max-w-none"
              priority={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
