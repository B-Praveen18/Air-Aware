import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { aqiTrend, aqiBands } from "@/lib/data";

export function AQIScale() {
  return (
    <section className="relative z-10 border-b border-[var(--color-rule)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs tracking-widest uppercase text-[var(--color-smog)]">
              § 02.5 · The Scale
            </div>
            <h2 className="mt-3 display-lg text-5xl">
              Reading
              <br />
              <em>the index</em>.
            </h2>
            <p className="mt-6 max-w-md text-[var(--color-ink-soft)]">
              The Air Quality Index is a deliberately crude translator — turning a dozen pollutants into a single number any commuter can read between the coffee and the bus. Higher is worse. A number below 50 means the air is effectively a non-event. Above 150, it begins to treat every lung alike.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-2">
              {aqiBands.map((b) => (
                <div
                  key={b.label}
                  className="group flex items-center gap-4 border border-[var(--color-rule)] bg-[var(--color-paper)] px-4 py-3 transition-colors hover:border-[var(--color-ink)]"
                >
                  <div
                    className="h-10 w-2 shrink-0 transition-all group-hover:w-3"
                    style={{ background: b.color }}
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-base font-semibold text-[var(--color-ink)]">
                        {b.label}
                      </span>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)]">
                        AQI {b.range}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-[var(--color-ink-soft)]">
                      {b.meaning}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="border-t-2 border-[var(--color-ink)] pt-10">
          <div className="mb-6 flex items-end justify-between border-b border-[var(--color-rule)] pb-4">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)]">
                Figure 01
              </div>
              <div className="mt-1 font-display text-2xl text-[var(--color-ink)]">
                Monthly AQI across four cities
              </div>
            </div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-ink-mute)]">
              Illustrative · based on 2023 annual patterns
            </div>
          </div>

          <div className="h-[380px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={aqiTrend} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="2 4" stroke="var(--color-rule)" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "var(--color-ink-soft)", fontFamily: "JetBrains Mono", fontSize: 11 }}
                  stroke="var(--color-rule)"
                />
                <YAxis
                  tick={{ fill: "var(--color-ink-soft)", fontFamily: "JetBrains Mono", fontSize: 11 }}
                  stroke="var(--color-rule)"
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-paper)",
                    border: "1px solid var(--color-ink)",
                    borderRadius: 0,
                    fontFamily: "JetBrains Mono",
                    fontSize: 12,
                  }}
                />
                <Legend
                  wrapperStyle={{
                    fontFamily: "JetBrains Mono",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                />
                <Line type="monotone" dataKey="delhi" stroke="#d4512a" strokeWidth={2.5} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="beijing" stroke="#a8391a" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="mumbai" stroke="#c4a572" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="london" stroke="#4a6b7c" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
