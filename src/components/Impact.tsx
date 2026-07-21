import { impacts } from "@/lib/data";

export function Impact() {
  return (
    <section id="section-03" className="relative z-10 border-b border-[var(--color-rule)] bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-16 max-w-3xl">
          <div className="font-mono text-xs tracking-widest uppercase text-[var(--color-smog)]">
            § 03 · The Ledger
          </div>
          <h2 className="mt-3 display-lg text-5xl lg:text-7xl text-[var(--color-paper)]">
            What it costs —
            <br />
            <em className="text-[var(--color-haze)]">in lungs and years</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-paper)]/80">
            The figures below are conservative, and they are not abstract. Each one is a stand-in for a heart that thickened, a developing lung that did not quite develop, a breath that came shallower than it should have.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--color-ink-soft)] md:grid-cols-2 lg:grid-cols-4">
          {impacts.map((m, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-[var(--color-ink)] p-8 transition-colors hover:bg-[var(--color-smog-deep)]"
            >
              <div className="absolute right-4 top-4 font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)] group-hover:text-[var(--color-paper)]/50">
                0{i + 1}
              </div>
              <div className="font-display text-7xl font-bold leading-none tracking-tight text-[var(--color-paper)]">
                {m.figure}
              </div>
              <div className="mt-2 font-mono text-xs tracking-widest uppercase text-[var(--color-smog)] group-hover:text-[var(--color-paper)]">
                {m.unit}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[var(--color-paper)]/80">
                {m.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--color-ink-soft)] pt-6 font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)]">
          Sources · WHO Ambient Air Quality Database · AQLI, Univ. of Chicago · Health Effects Institute
        </div>
      </div>
    </section>
  );
}
