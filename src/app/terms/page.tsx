import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Albi&Us",
  description:
    "The terms that apply to the Albi&Us app and the albiandus.com website.",
  alternates: { canonical: "https://albiandus.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mute">
          Last updated 29 April 2026
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Terms of Service
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-mute">
          <p>
            These are the terms for using the Albi&amp;Us mobile app and the
            albiandus.com website. Both are made by Albi &amp; Us LTD, a
            company registered in England.
          </p>
          <p>
            By using the app or this website, you agree to these terms. If you
            don&rsquo;t agree, please don&rsquo;t use them.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            Use of the app
          </h2>
          <p>
            The app is intended for personal, non-commercial use by parents,
            carers, and the children they are with. Don&rsquo;t redistribute
            the app, its content, or its activity cards as your own.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            As-is
          </h2>
          <p>
            The app and website are provided as-is, without warranty of any
            kind. Activities should be done with adult supervision and a
            sensible eye on safety — ovens are hot, scissors are sharp, and
            small parts go in small mouths. You are responsible for choosing
            activities that are appropriate for your child and your
            environment.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            Liability
          </h2>
          <p>
            To the extent permitted by law, Albi &amp; Us LTD is not liable for
            any indirect or incidental loss arising from use of the app or
            website. Nothing in these terms limits liability that cannot be
            limited under English law.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            Changes
          </h2>
          <p>
            We may update these terms over time. Check this page; the date at
            the top changes when the terms do.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            Governing law
          </h2>
          <p>
            These terms are governed by the law of England and Wales, and any
            dispute will be heard in the courts of England and Wales.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            Contact
          </h2>
          <p>
            <a
              href="mailto:hello@albiandus.com"
              className="font-medium text-ink underline decoration-brand-pink decoration-2 underline-offset-4 hover:decoration-brand-purple"
            >
              hello@albiandus.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
