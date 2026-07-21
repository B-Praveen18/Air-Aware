export function Header() {
  return (
    <header className="relative z-10 border-b border-[var(--color-rule)] bg-[var(--color-paper)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="flex items-baseline gap-2">
          <span className="display-lg text-xl tracking-tight">AIR</span>
          <span className="font-mono text-xs text-[var(--color-smog)]">/</span>
          <span className="display-lg text-xl tracking-tight italic text-[var(--color-ink-soft)]">aware</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["01", "The Report"],
            ["02", "Pollutants"],
            ["03", "Impact"],
            ["04", "Action"],
          ].map(([n, l]) => (
            <a
              key={n}
              href={`#section-${n}`}
              className="group flex items-baseline gap-1.5 text-sm text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-smog)]"
            >
              <span className="font-mono text-[10px] tracking-wider text-[var(--color-ink-mute)] group-hover:text-[var(--color-smog)]">
                {n}
              </span>
              <span>{l}</span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)] md:inline">
            Vol. 01 · Issue 04
          </span>
          <span className="h-2 w-2 rounded-full bg-[var(--color-leaf)]" />
        </div>
      </div>
    </header>
  );
}
