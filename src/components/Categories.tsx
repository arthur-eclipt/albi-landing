type Category = {
  name: string;
  description: string;
  count: string;
  stripe: string;
};

const categories: Category[] = [
  {
    name: "Cooking",
    description: "Snail cookies, butterfly pastries, things you can eat after.",
    count: "6 cards",
    stripe: "bg-brand-green",
  },
  {
    name: "Craft",
    description: "Jellyfish puzzles, racing spiders, suncatchers for the window.",
    count: "6 cards",
    stripe: "bg-brand-yellow",
  },
  {
    name: "Nature",
    description: "Leaf rubbings, bird snacks, sandbowls full of weather.",
    count: "6 cards",
    stripe: "bg-brand-orange",
  },
  {
    name: "Science",
    description: "Dancing fire, glittery galaxies, magic that's actually physics.",
    count: "6 cards",
    stripe: "bg-brand-pink",
  },
  {
    name: "Movement",
    description: "Balloon bashes, paper rings, footy in the hallway.",
    count: "6 cards",
    stripe: "bg-brand-purple",
  },
];

export function Categories() {
  return (
    <section
      id="activities"
      aria-labelledby="categories-heading"
      className="border-t border-line/60 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="categories-heading"
          className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl"
        >
          Five ways to play.
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <li
              key={cat.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-shadow hover:shadow-md"
            >
              <div className={`h-2 ${cat.stripe}`} aria-hidden="true" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                  {cat.name}
                </h3>
                <p className="mt-3 flex-1 text-mute leading-relaxed">
                  {cat.description}
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-mute/80">
                  {cat.count}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-mute">
          30 activities in the Original Pack. More packs coming.
        </p>
      </div>
    </section>
  );
}
