import Link from "next/link";

const links = [
  { href: "#activities", label: "Activities" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-ink"
        >
          Albi
          <span className="bg-gradient-to-r from-brand-green via-brand-orange to-brand-purple bg-clip-text text-transparent">
            &amp;
          </span>
          Us
        </Link>

        <div className="hidden items-center gap-7 text-sm sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-mute transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@albiandus.com"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-ink/85"
          >
            hello@albiandus.com
          </a>
        </div>

        <a
          href="mailto:hello@albiandus.com"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-canvas sm:hidden"
        >
          Email
        </a>
      </nav>
    </header>
  );
}
