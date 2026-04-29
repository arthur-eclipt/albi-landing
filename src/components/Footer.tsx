import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl font-bold tracking-tight text-ink">
              Albi
              <span className="bg-gradient-to-r from-brand-green via-brand-orange to-brand-purple bg-clip-text text-transparent">
                &amp;
              </span>
              Us
            </div>
            <p className="mt-3 max-w-xs text-sm text-mute">
              Little adventures, big moments, together.
            </p>
            <p className="mt-6 text-sm text-mute">
              &copy; 2026 Albi &amp; Us LTD
            </p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mute/80">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#activities" className="text-ink hover:text-brand-orange">
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-ink hover:text-brand-orange"
                >
                  How it works
                </a>
              </li>
              <li>
                <a href="#about" className="text-ink hover:text-brand-orange">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="text-ink hover:text-brand-orange">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mute/80">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hello@albiandus.com"
                  className="text-ink hover:text-brand-orange"
                >
                  hello@albiandus.com
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-ink hover:text-brand-orange">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-ink hover:text-brand-orange">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-12 h-1 w-full rounded-full bg-gradient-to-r from-brand-green via-brand-yellow via-brand-orange via-brand-pink to-brand-purple opacity-70"
        />

        <p className="mt-8 text-center font-display text-sm italic text-mute">
          Little adventures, big moments, together.
        </p>
      </div>
    </footer>
  );
}
