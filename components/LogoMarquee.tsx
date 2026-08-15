import Image from "next/image";

const LOGOS = [
  { src: "/images/logos/logo-01.png", alt: "The Dental Van", width: 40, height: 40 },
  { src: "/images/logos/logo-02.png", alt: "Pawle", width: 106, height: 40 },
  { src: "/images/logos/logo-03.png", alt: "Kasaba Home", width: 128, height: 40 },
  { src: "/images/logos/logo-04.png", alt: "SlideCoach", width: 100, height: 40 },
  { src: "/images/logos/logo-05.png", alt: "Trovex.ai", width: 149, height: 40 },
  { src: "/images/logos/logo-06.png", alt: "DebtWorks", width: 114, height: 40 },
  { src: "/images/logos/logo-07.png", alt: "Australian Smile Group", width: 40, height: 40 },
  { src: "/images/logos/logo-08.png", alt: "Lilx Studio", width: 39, height: 40 },
  { src: "/images/logos/logo-09.png", alt: "Datrix", width: 200, height: 40 },
  { src: "/images/logos/logo-10.svg", alt: "Client logo", width: 79, height: 40 },
  { src: "/images/logos/logo-11.svg", alt: "Western Yoddha Productions", width: 148, height: 40 },
];

/** Scrolling strip of client logos: The Dental Van, Pawle, Kasaba Home, SlideCoach, Trovex.ai, DebtWorks, Australian Smile Group, Lilx Studio, Datrix, and Western Yoddha Productions. */
export default function LogoMarquee() {
  return (
    <section aria-label="Selected clients" className="overflow-hidden bg-[#161617] py-[30px]">
      <span className="sr-only">
        Client logos: {LOGOS.map((logo) => logo.alt).join(", ")}
      </span>
      <div aria-hidden className="marquee-mask mx-auto max-w-[1200px] overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-12">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-12">
              {LOGOS.map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  className="h-10 w-auto shrink-0 opacity-[0.55]"
                  priority={false}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
