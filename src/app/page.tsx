import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhatItIs } from "@/components/WhatItIs";
import { Categories } from "@/components/Categories";
import { HowItWorks } from "@/components/HowItWorks";
import { ScreenLight } from "@/components/ScreenLight";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Squiggle, Dotted, Burst } from "@/components/Decoration";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />

        <div aria-hidden="true" className="relative mx-auto max-w-6xl px-6">
          <Squiggle className="ml-auto h-6 w-32 text-brand-orange/70" />
        </div>

        <WhatItIs />
        <Categories />

        <div aria-hidden="true" className="relative mx-auto max-w-6xl px-6">
          <Burst className="h-10 w-10 text-brand-yellow" />
        </div>

        <HowItWorks />
        <ScreenLight />
        <About />

        <div aria-hidden="true" className="relative mx-auto max-w-6xl px-6">
          <Dotted className="ml-auto h-12 w-12 text-brand-purple/60" />
        </div>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
