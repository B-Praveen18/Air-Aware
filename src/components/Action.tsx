import { actions } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Action() {
  return (
    <section id="section-04" className="relative z-10 border-b border-[var(--color-rule)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs tracking-widest uppercase text-[var(--color-smog)]">
              § 04 · What helps
            </div>
            <h2 className="mt-3 display-lg text-5xl lg:text-6xl">
              Despair is a
              <br />
              <em>poor guide</em><span className="text-[var(--color-smog)]">.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-16">
            <p className="font-display text-xl italic leading-snug text-[var(--color-ink-soft)]">
              The problem is vast, but the interventions — at home, on the move, as a citizen — are small, specific, and cumulative. A list of starting points follows. It is not exhaustive. It is a beginning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-3">
          {actions.map((group, gi) => (
            <div key={group.title} className="bg-[var(--color-paper)] p-8">
              <div className="flex items-baseline justify-between border-b-2 border-[var(--color-ink)] pb-3">
                <div className="font-display text-2xl font-semibold text-[var(--color-ink)]">
                  {group.title}
                </div>
                <div className="font-mono text-xs tracking-widest uppercase text-[var(--color-smog)]">
                  0{gi + 1}
                </div>
              </div>
              <ol className="mt-6 space-y-5">
                {group.items.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-xs text-[var(--color-ink-mute)] pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t-2 border-[var(--color-ink)] pt-10 md:flex-row md:items-center">
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)]">
              Check your air
            </div>
            <div className="mt-2 font-display text-2xl text-[var(--color-ink)]">
              Find your local AQI before you plan your day.
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              ["IQAir", "https://www.iqair.com/"],
              ["WAQI", "https://waqi.info/"],
              ["AirNow (US)", "https://www.airnow.gov/"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 border border-[var(--color-ink)] bg-[var(--color-paper)] px-4 py-2.5 text-sm text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
              >
                {label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
