import Reveal from "@/components/motion/Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <Reveal className="max-w-[720px]">
      <p className={`text-[11px] font-medium uppercase tracking-[1px] ${isDark ? "text-white/40" : "text-[#888888]"}`}>
        - {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold leading-[1.2] tracking-[-0.5px] sm:text-4xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
