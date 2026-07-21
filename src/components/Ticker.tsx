export function Ticker() {
  const items = [
    "PM2.5 — 2.5 micrometers or smaller",
    "99% of humanity breathes air exceeding WHO limits",
    "Air pollution shortens the average life by 2.2 years",
    "7 million deaths linked to polluted air each year",
    "1 in 8 global deaths · ambient + household sources",
    "Delhi · Dhaka · Lahore · N'Djamena — 2024's most polluted capitals",
  ];
  const content = [...items, ...items];

  return (
    <div className="relative z-10 overflow-hidden border-b border-[var(--color-rule)] bg-[var(--color-ink)] py-2.5 text-[var(--color-paper)]">
      <div className="marquee-track flex gap-10 whitespace-nowrap">
        {content.map((t, i) => (
          <span key={i} className="font-mono text-[11px] tracking-widest uppercase flex items-center gap-10">
            {t}
            <span className="text-[var(--color-smog)]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
