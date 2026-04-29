type Step = {
  num: string;
  title: string;
  body: string;
  color: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Pick a card together",
    body: "Open the app, scroll the grid, agree on something. The hardest part.",
    color: "text-brand-orange",
  },
  {
    num: "02",
    title: "Do the activity in real life",
    body: "Put the iPad down. Get the flour out, or the leaves, or the cardboard.",
    color: "text-brand-pink",
  },
  {
    num: "03",
    title: "Mark it complete",
    body: "Tap the checkmark. The card colours in. The collection fills up. Repeat.",
    color: "text-brand-purple",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="border-t border-line/60 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="how-it-works-heading"
          className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl"
        >
          Three steps. That&rsquo;s the whole thing.
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.num} className="flex flex-col">
              <span
                className={`font-display text-7xl font-bold tracking-tight ${step.color}`}
                aria-hidden="true"
              >
                {step.num}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-mute leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
