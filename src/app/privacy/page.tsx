import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Albi&Us",
  description:
    "How Albi & Us LTD handles data in the Albi&Us app and on albiandus.com.",
  alternates: { canonical: "https://albiandus.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mute">
          Last updated 29 April 2026
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Privacy Policy
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-mute">
          <p>
            This is the privacy policy for the Albi&amp;Us mobile app and the
            albiandus.com website. Both are made by Albi &amp; Us LTD, a small
            company registered in England.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            What the app collects
          </h2>
          <p>
            At launch, Albi&amp;Us does not collect personal data from you or
            your child. There are no user accounts. Activity progress — which
            cards you&rsquo;ve completed — is stored locally on the device.
          </p>
          <p>
            The app uses Firebase (Google Cloud Platform) for backend
            infrastructure. Firebase may receive technical data such as device
            type and a randomly generated installation identifier. This helps
            the app function and helps us fix crashes. It is not used to
            identify you. You can read{" "}
            <a
              href="https://policies.google.com/privacy"
              className="font-medium text-ink underline decoration-brand-pink decoration-2 underline-offset-4 hover:decoration-brand-purple"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google&rsquo;s privacy policy
            </a>{" "}
            for details on how they handle that data.
          </p>
          <p>
            We do not use third-party advertising SDKs. We do not use
            third-party analytics. We do not sell or share data for marketing.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            What this website collects
          </h2>
          <p>
            Nothing. albiandus.com sets no cookies, runs no analytics, and has
            no forms. Your visit is not logged beyond the standard server
            request logs kept briefly by our hosting provider.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            Children&rsquo;s data
          </h2>
          <p>
            Albi&amp;Us is designed for children aged 3–5 to use alongside an
            adult. The app does not require an account, does not ask for
            personal information, and does not collect personal data from
            children.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            Third parties
          </h2>
          <p>
            Firebase, provided by Google Cloud, is the only third-party service
            used by the app. The website uses no third-party services.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            Your rights
          </h2>
          <p>
            Because no personal data is collected, there&rsquo;s nothing for us
            to look up, export, or delete on your behalf. You can clear all
            stored activity progress by deleting the app from your device.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            Changes
          </h2>
          <p>
            If this policy changes, we&rsquo;ll update the date at the top.
            Material changes will be flagged in the app.
          </p>

          <h2 className="pt-6 font-display text-2xl font-bold tracking-tight text-ink">
            Contact
          </h2>
          <p>
            Questions or requests:{" "}
            <a
              href="mailto:hello@albiandus.com"
              className="font-medium text-ink underline decoration-brand-pink decoration-2 underline-offset-4 hover:decoration-brand-purple"
            >
              hello@albiandus.com
            </a>
            .
          </p>
          <p>Albi &amp; Us LTD, registered in England.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
