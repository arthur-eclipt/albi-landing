export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-line/60 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="about-heading"
          className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl"
        >
          Made by Albi &amp; Us LTD.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mute">
          A small UK business building screen-light tools for parents and young
          children. We&rsquo;re working on this carefully, in the open, with
          our own kids in the room.
        </p>
      </div>
    </section>
  );
}
