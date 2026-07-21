import { pollutants } from "@/lib/data";

export function Pollutants() {
  return (
    <section id="section-02" className="relative z-10 border-b border-[var(--color-rule)] bg-[var(--color-paper-dark)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-14 flex items-end justify-between gap-6 border-b border-[var(--color-rule)] pb-8">
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-[var(--color-smog)]">
              § 02 · Dramatis Personae
            </div>
            <h2 className="mt-3 display-lg text-5xl lg:text-6xl">
              Four main
              <br />
              characters<span className="text-[var(--color-smog)]">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--color-ink-soft)]">
            Pollution is plural. These are the compounds that do most of the visible — and invisible — harm. Each has its own sources, behaviours, and preferred organs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pollutants.map((p, i) => (
            <article
              key={p.symbol}
              className="group relative flex flex-col justify-between overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-ink)] hover:shadow-xl"
            >
              <div
                className="absolute left-0 top-0 h-1 w-full transition-all group-hover:h-2"
                style={{ background: p.color }}
              />
              <div>
                <div className="flex items-start justify-between">
                  <div className="font-mono text-xs tracking-widest text-[var(--color-ink-mute)]">
                    0{i + 1}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)]">
                    {p.size}
                  </div>
                </div>
                <div
                  className="mt-6 font-display text-5xl font-semibold leading-none tracking-tight"
                  style={{ color: p.color }}
                >
                  {p.symbol}
                </div>
                <div className="mt-2 font-display text-lg italic text-[var(--color-ink)]">
                  {p.name}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {p.note}
                </p>
              </div>
              <div className="mt-6 border-t border-[var(--color-rule)] pt-4">
                <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)]">
                  Chief sources
                </div>
                <ul className="mt-2 space-y-1">
                  {p.sources.map((s) => (
                    <li key={s} className="text-xs text-[var(--color-ink-soft)]">
                      <span className="mr-2 text-[var(--color-smog)]">·</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
