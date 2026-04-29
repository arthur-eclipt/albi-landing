import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://albiandus.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Albi&Us — Little Adventures, Big Moments Together",
  description:
    "An activity card app for little explorers aged 3–5 and their favourite grown-up. Coming soon to iOS and Android.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Albi&Us",
    title: "Albi&Us — Little Adventures, Big Moments Together",
    description:
      "An activity card app for little explorers aged 3–5 and their favourite grown-up. Coming soon to iOS and Android.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Albi&Us — Little Adventures, Big Moments Together",
    description:
      "An activity card app for little explorers aged 3–5 and their favourite grown-up. Coming soon to iOS and Android.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
