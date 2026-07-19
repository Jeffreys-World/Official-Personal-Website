"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content";
import { fadeUp, fadeOnly, stagger } from "@/lib/motion";
import { SubwayToken } from "@/components/stickers";

export function Hero() {
  const reduced = useReducedMotion();
  const item = reduced ? fadeOnly : fadeUp;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto flex min-h-[85svh] w-full max-w-5xl flex-col justify-center px-5 py-24 sm:px-8"
    >
      <SubwayToken className="absolute right-6 top-20 w-16 -rotate-12 opacity-70 sm:right-10 sm:top-24 sm:w-20" />
      <motion.div variants={stagger} initial="hidden" animate="visible">
        <motion.p
          variants={item}
          className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-accent"
        >
          Software Engineering · AI Automation
        </motion.p>
        <motion.h1
          variants={item}
          id="hero-heading"
          className="max-w-4xl text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.02] tracking-tight"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {hero.bio}
        </motion.p>
      </motion.div>
    </section>
  );
}
