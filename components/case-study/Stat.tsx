export function StatRow({
  stats,
  tone = "light",
}: {
  stats: { value: string; label: string; body?: string }[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className={`text-4xl font-bold tracking-[-1px] ${isDark ? "text-white" : "text-ink"}`}>{stat.value}</p>
          <p className={`mt-2 text-sm font-medium ${isDark ? "text-white/70" : "text-[#555555]"}`}>{stat.label}</p>
          {stat.body && (
            <p className={`mt-1.5 text-[13px] leading-5 ${isDark ? "text-white/40" : "text-[#888888]"}`}>
              {stat.body}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export function Quote({ text, attribution, tone = "light" }: { text: string; attribution?: string; tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <blockquote
      className={`border-l-2 py-1 pl-6 text-xl italic leading-[1.5] ${
        isDark ? "border-white/20 text-white/80" : "border-[#dedcd4] text-[#333333]"
      }`}
    >
      &ldquo;{text}&rdquo;
      {attribution && (
        <footer className={`mt-3 text-sm not-italic ${isDark ? "text-white/40" : "text-[#888888]"}`}>
          — {attribution}
        </footer>
      )}
    </blockquote>
  );
}
