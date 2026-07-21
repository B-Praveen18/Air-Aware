export function Report() {
  return (
    <section id="section-01" className="relative z-10 border-b border-[var(--color-rule)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="sticky top-10">
              <div className="font-mono text-xs tracking-widest uppercase text-[var(--color-smog)]">
                § 01
              </div>
              <h2 className="mt-3 display-lg text-4xl">
                What we are
                <br />
                actually
                <br />
                <em>breathing</em>.
              </h2>
              <div className="mt-6 rule border-t pt-4 font-mono text-[11px] tracking-wider text-[var(--color-ink-mute)]">
                BY THE ATMOSPHERE DESK
                <br />
                FILED · SPRING 2026
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <p className="dropcap text-lg leading-relaxed text-[var(--color-ink-soft)]">
              Air, from a chemist's desk, is an almost tidy thing — seventy-eight parts nitrogen, twenty-one parts oxygen, the rest a garnish of argon and carbon dioxide. Yet the air that actually enters our lungs carries a second, invisible inventory: particles smaller than a red blood cell, reactive gases cooked by sunlight, metals evaporated from brake pads and coal seams. <em>This is the air we inherit.</em>
            </p>

            <p className="mt-8 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              Air pollution is the continuous leaking of these extras — from engines, power plants, factories, forests on fire, and kitchens burning solid fuels — into the common atmosphere. Some of them were once proud signatures of progress; the black smoke over a textile mill, the plume above a refinery. Others are newer and quieter: the invisible ultrafine particulates of a gas stove on a winter morning.
            </p>

            <figure className="my-14 border-y-2 border-[var(--color-ink)] py-10">
              <blockquote className="display-md text-3xl leading-tight text-[var(--color-ink)]">
                "Air does not stop at the border. Neither, therefore, can any honest account of it."
              </blockquote>
              <figcaption className="mt-5 font-mono text-xs tracking-widest uppercase text-[var(--color-ink-mute)]">
                — Editorial, Vol. 01
              </figcaption>
            </figure>

            <p className="text-lg leading-relaxed text-[var(--color-ink-soft)]">
              What follows is a brief field report in four parts: the pollutants themselves, the way we measure them, the damage they do, and — because despair is a poor guide — the actions that demonstrably help. It is not comprehensive. It is an invitation to look up.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--color-rule)] pt-6">
              {[
                ["78%", "Nitrogen"],
                ["21%", "Oxygen"],
                ["<1%", "Everything else"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-semibold text-[var(--color-ink)]">{v}</div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)]">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
