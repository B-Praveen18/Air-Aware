export function Hero() {
  return (
    <section className="relative z-10 border-b border-[var(--color-rule)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center gap-3 rise" style={{ animationDelay: "0.05s" }}>
              <span className="h-px w-8 bg-[var(--color-smog)]" />
              <span className="eyebrow text-[var(--color-smog)]">A field report</span>
              <span className="font-mono text-[10px] tracking-wider text-[var(--color-ink-mute)]">
                / 2026
              </span>
            </div>

            <h1 className="display-xl text-[clamp(3.5rem,9vw,8.5rem)] rise" style={{ animationDelay: "0.1s" }}>
              The atmosphere
              <br />
              we inherit
              <span className="text-[var(--color-smog)]">.</span>
            </h1>

            <p
              className="mt-10 max-w-xl font-display text-xl italic leading-snug text-[var(--color-ink-soft)] rise"
              style={{ animationDelay: "0.25s" }}
            >
              Every breath is an inheritance and a bequest —
              from the industries that preceded us,
              to the lungs that come after.
            </p>
          </div>

          <aside
            className="flex flex-col justify-end gap-6 border-l border-[var(--color-rule)] pl-6 lg:col-span-4 rise"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <div className="eyebrow text-[var(--color-ink-mute)]">Dispatches from</div>
              <div className="mt-1 font-display text-lg text-[var(--color-ink)]">
                Delhi · Beijing · London · Mumbai
              </div>
            </div>
            <div className="rule border-t pt-4">
              <div className="eyebrow text-[var(--color-ink-mute)]">Reading time</div>
              <div className="mt-1 font-display text-lg text-[var(--color-ink)]">
                ≈ 6 minutes, one breath
              </div>
            </div>
            <div className="rule border-t pt-4">
              <div className="eyebrow text-[var(--color-ink-mute)]">Accompanied by</div>
              <div className="mt-1 font-display text-lg text-[var(--color-ink)]">
                Aura, resident guide<span className="text-[var(--color-smog)]">.</span>
              </div>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
                Tap <em>Ask Aura</em> at any point. She'll explain the science — and the reasoning behind this page's design.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
