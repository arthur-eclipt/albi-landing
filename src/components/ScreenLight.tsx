export function ScreenLight() {
  return (
    <section
      aria-labelledby="screenlight-heading"
      className="border-t border-line/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="screenlight-heading"
          className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl"
        >
          Built for grown-ups too.
        </h2>

        <div className="mt-10 grid max-w-3xl gap-5 text-lg leading-relaxed text-mute">
          <p>
            We wanted something a 3-year-old could do alongside us, not instead
            of us. Most kids&rsquo; apps want eyeballs. This one wants the
            opposite — open it, pick something, close it.
          </p>
          <p>
            Activities use stuff already in your house. No kits to buy. No
            printables to print. If you&rsquo;ve got flour, tape, and a garden
            patch, you&rsquo;re set.
          </p>
          <p>
            The app is meant to be closed, not stared at. If we&rsquo;ve done
            our job, the screen lights up for thirty seconds and then sits in a
            drawer for the next hour.
          </p>
        </div>
      </div>
    </section>
  );
}
