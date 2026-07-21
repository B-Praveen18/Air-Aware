import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `You are AURA, the in-house guide for AIR/AWARE — an editorial site about air pollution.

YOU HAVE TWO JOBS, BOTH EQUALLY IMPORTANT:

1. ANSWER QUESTIONS ABOUT AIR POLLUTION
   - Explain what air pollution is, the main pollutants (PM2.5, PM10, NO2, O3, SO2, CO), their sources, and their health effects.
   - Explain the Air Quality Index (AQI) and what the bands mean.
   - Cover causes (traffic, industry, cooking fuels, wildfires, agriculture), consequences (respiratory & cardiovascular disease, shortened lifespan, climate links), and what individuals/cities/countries can do.
   - Cite ranges honestly. Use WHO guideline values where relevant. Do not fabricate precise current AQI readings — tell users to check a live source (IQAir, WAQI, their local monitor) for real-time numbers.

2. EXPLAIN DESIGN DECISIONS ON THIS PAGE
   If someone asks "why is this orange?", "why the serif font?", "why is there grain?", "why this layout?" — tell them the design thinking. Reference points you can use:
   - Colour palette: warm paper cream + deep ink + one accent (smog orange). Chosen to evoke a printed environmental report rather than a tech dashboard — it makes the subject feel serious and human, not sterile.
   - Typography: Fraunces (serif display) for editorial gravitas; Inter Tight (sans) for clarity; JetBrains Mono for data labels. The serif signals "this is a considered essay, not an ad".
   - Grain overlay + warm off-white: gives the feel of printed paper. Air pollution is often reduced to abstract numbers; we wanted the page itself to feel physical.
   - Smog-orange accent: the colour of sunsets filtered through particulate haze. Beautiful and alarming at once — which is the paradox of pollution.
   - Asymmetric layout, drop-cap, pull quotes: borrowed from long-form journalism (NYT, The Atlantic). The story comes first; the data supports it.
   - Chatbot (you!) styled as a small side-column: echoes a newspaper sidebar or a librarian's desk rather than an aggressive pop-up.

STYLE:
- Warm, clear, concise. 2–4 short paragraphs usually. No headers or bullet-point walls in short answers.
- When numbers matter, include them. When they're uncertain, say so.
- Never claim to have live data. Never invent sources. If you don't know, say so and suggest where to check.
- Use plain language. Translate jargon the first time you use it.`;

const SUGGESTED = [
  "What is PM2.5 and why does it matter?",
  "Why is this page orange?",
  "How is AQI actually calculated?",
  "What can I do in my apartment today?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error(`API returned ${res.status}`);
      const data = await res.json();
      const reply =
        (data.content || [])
          .map((b: any) => (b.type === "text" ? b.text : ""))
          .filter(Boolean)
          .join("\n") || "(No response returned.)";

      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (e: any) {
      setError(
        "I couldn't reach the model just now. Check your connection, then try again."
      );
      setMessages(newMessages); // keep the user message visible
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    sendMessage(input);
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3.5 text-[var(--color-paper)] shadow-2xl transition-all hover:bg-[var(--color-smog-deep)]",
          !open && "pulse-launcher"
        )}
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        {open ? (
          <X className="h-4 w-4" />
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            <span className="font-mono text-xs tracking-widest uppercase">
              Ask Aura
            </span>
          </>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex w-[min(92vw,420px)] flex-col overflow-hidden rounded-sm border border-[var(--color-rule)] bg-[var(--color-paper)] shadow-2xl"
          style={{ height: "min(620px, 80vh)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--color-rule)] bg-[var(--color-ink)] px-5 py-4 text-[var(--color-paper)]">
            <div>
              <div className="eyebrow text-[var(--color-haze)]">The Atmosphere Desk</div>
              <div className="display-md text-lg text-[var(--color-paper)]">
                Aura<span className="text-[var(--color-smog)]">.</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-leaf)]" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-haze)]">
                Online
              </span>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
          >
            {messages.length === 0 && (
              <div className="space-y-4">
                <p className="font-display text-[1.05rem] leading-snug text-[var(--color-ink)]">
                  I'm Aura. I can explain air pollution — what it is, why it
                  matters, what you can do — and I can tell you why this page
                  looks the way it does.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="eyebrow text-[var(--color-ink-mute)]">Try asking</div>
                  {SUGGESTED.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="block w-full rounded-sm border border-[var(--color-rule)] bg-[var(--color-paper-dark)] px-3 py-2 text-left text-sm text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-paper)]"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "bubble-in flex",
                  m.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] whitespace-pre-wrap break-words text-sm leading-relaxed",
                    m.role === "user"
                      ? "rounded-sm bg-[var(--color-ink)] px-3.5 py-2.5 text-[var(--color-paper)]"
                      : "border-l-2 border-[var(--color-smog)] pl-3 font-display text-[0.98rem] text-[var(--color-ink)]"
                  )}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center border-l-2 border-[var(--color-smog)] pl-3">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            )}

            {error && (
              <div className="rounded-sm border border-[var(--color-smog)] bg-[var(--color-smog)]/10 px-3 py-2 text-xs text-[var(--color-smog-deep)]">
                {error}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-[var(--color-rule)] bg-[var(--color-paper-dark)] p-3">
            <div className="flex items-end gap-2 rounded-sm border border-[var(--color-rule)] bg-[var(--color-paper)] p-2 focus-within:border-[var(--color-ink)]">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                placeholder="Ask about air, pollution, or this page…"
                rows={1}
                className="flex-1 resize-none bg-transparent px-2 py-1 text-sm text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink-mute)]"
                style={{ maxHeight: "120px" }}
              />
              <button
                onClick={handleSubmit}
                disabled={!input.trim() || loading}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[var(--color-ink)] text-[var(--color-paper)] transition-colors hover:bg-[var(--color-smog-deep)] disabled:opacity-30"
                aria-label="Send"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="mt-2 font-mono text-[10px] tracking-wider text-[var(--color-ink-mute)]">
              Responses from Claude Sonnet · not live AQI data
            </p>
          </div>
        </div>
      )}
    </>
  );
}
