import { Wash } from "./Decoration";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] opacity-70"
      >
        <Wash className="h-full w-full" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mute">
          Coming soon to iOS and Android
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[88px]">
          Little adventures.{" "}
          <span className="text-brand-orange">Big moments.</span>{" "}
          <span className="text-brand-purple">Together.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-mute sm:text-xl">
          An activity card app for little explorers aged 3–5 and their
          favourite grown-up.
        </p>

        <p className="mt-4 max-w-2xl text-mute">
          Parent and child pick a card, do the activity in real life, then mark
          it complete in the app. The collection fills up. The phone goes back
          in the drawer.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:hello@albiandus.com"
            className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 font-medium text-canvas shadow-sm transition-all hover:bg-ink/85 hover:shadow-md"
          >
            Email us
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-line bg-card px-7 py-3.5 font-medium text-ink transition-colors hover:border-ink/30"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
