export function Footer() {
  return (
    <footer className="relative z-10 bg-[var(--color-paper-dark)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-baseline gap-2">
              <span className="display-xl text-6xl">AIR</span>
              <span className="font-mono text-sm text-[var(--color-smog)]">/</span>
              <span className="display-lg text-5xl italic text-[var(--color-ink-soft)]">aware</span>
            </div>
            <p className="mt-6 max-w-md font-display text-lg italic leading-snug text-[var(--color-ink-soft)]">
              An independent field report on the atmosphere we inherit — and the one we pass on.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)]">
              Sections
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["01", "The Report", "#section-01"],
                ["02", "Pollutants", "#section-02"],
                ["03", "Impact", "#section-03"],
                ["04", "Action", "#section-04"],
              ].map(([n, l, href]) => (
                <li key={n}>
                  <a href={href} className="flex items-baseline gap-2 text-[var(--color-ink-soft)] hover:text-[var(--color-smog)]">
                    <span className="font-mono text-[10px] text-[var(--color-ink-mute)]">{n}</span>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)]">
              Colophon
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              Set in Fraunces and Inter Tight. Data labels in JetBrains Mono. Figures are illustrative; consult WHO and your local monitoring agency for live readings.
            </p>
            <p className="mt-4 text-sm text-[var(--color-ink-soft)]">
              Built as a demonstration. Aura is powered by Claude Sonnet.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-rule)] pt-6 font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)] md:flex-row md:items-center">
          <span>© 2026 · Vol. 01 · Issue 04</span>
          <span>A single page, read at one breath per paragraph.</span>
        </div>
      </div>
    </footer>
  );
}
