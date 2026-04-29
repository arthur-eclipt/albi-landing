type Item = { q: string; a: React.ReactNode };

const faqs: Item[] = [
  {
    q: "When is the app launching?",
    a: (
      <>
        Coming soon to iOS and Android.{" "}
        <a
          href="mailto:hello@albiandus.com"
          className="font-medium text-ink underline decoration-brand-pink decoration-2 underline-offset-4 hover:decoration-brand-purple"
        >
          Email us
        </a>{" "}
        to be told first.
      </>
    ),
  },
  {
    q: "What ages is it for?",
    a: "3–5 year olds, with a grown-up alongside. Older children enjoy it too. Younger ones need more help.",
  },
  {
    q: "Will I need an account?",
    a: "Not at launch. Progress is stored on the device.",
  },
  {
    q: "Does the app collect data about my child?",
    a: (
      <>
        No personal data is collected. Activity progress lives on the device.
        See the{" "}
        <a
          href="/privacy"
          className="font-medium text-ink underline decoration-brand-pink decoration-2 underline-offset-4 hover:decoration-brand-purple"
        >
          privacy policy
        </a>{" "}
        for the full breakdown.
      </>
    ),
  },
  {
    q: "Will it cost money?",
    a: "The Original Pack is free to start. Additional packs will be part of an optional subscription.",
  },
  {
    q: "How can I contact you?",
    a: (
      <>
        <a
          href="mailto:hello@albiandus.com"
          className="font-medium text-ink underline decoration-brand-pink decoration-2 underline-offset-4 hover:decoration-brand-purple"
        >
          hello@albiandus.com
        </a>{" "}
        — a real person reads it.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-line/60 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="faq-heading"
          className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl"
        >
          Things people ask.
        </h2>

        <div className="mt-12 max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((item, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-medium text-ink">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line text-mute transition-transform group-open:rotate-45"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M7 1.5v11M1.5 7h11" />
                  </svg>
                </span>
              </summary>
              <div className="pb-6 pr-12 text-mute leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
