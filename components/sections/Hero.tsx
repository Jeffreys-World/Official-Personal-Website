"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content";
import { fadeUp, fadeOnly, stagger } from "@/lib/motion";
import { Hud } from "@/components/Hud";
import { SubwayToken } from "@/components/stickers";

export function Hero() {
  const reduced = useReducedMotion();
  const item = reduced ? fadeOnly : fadeUp;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto flex min-h-[90svh] w-full max-w-6xl flex-col justify-center px-5 py-24 sm:px-8"
    >
      <SubwayToken className="absolute right-6 top-24 w-16 -rotate-12 opacity-60 sm:right-10 sm:w-20" />
      <motion.div variants={stagger} initial="hidden" animate="visible">
        <motion.div variants={item}>
          <Hud className="mb-10" />
        </motion.div>
        <motion.p
          variants={item}
          className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted"
        >
          Software Engineering & AI Automation
        </motion.p>
        <motion.h1
          variants={item}
          id="hero-heading"
          className="max-w-[15ch] text-[clamp(3rem,10.5vw,8.5rem)] font-bold leading-[0.95] tracking-[-0.03em]"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {hero.bio}
        </motion.p>
      </motion.div>
    </section>
  );
}
