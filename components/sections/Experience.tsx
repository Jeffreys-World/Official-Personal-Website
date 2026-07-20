"use client";

import { motion, useReducedMotion } from "motion/react";
import { experience } from "@/lib/content";
import { fadeUp, fadeOnly, stagger, viewport } from "@/lib/motion";
import { hoverLift } from "@/lib/hover";

export function Experience() {
  const reduced = useReducedMotion();
  const item = reduced ? fadeOnly : fadeUp;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-6xl px-5 pt-24 pb-12 sm:px-8"
    >
      <h2
        id="experience-heading"
        className="mb-12 font-mono text-xs uppercase tracking-[0.3em] text-muted"
      >
        Experience
      </h2>
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="divide-y divide-subtle border-y border-subtle"
      >
        {experience.map((entry) => (
          <motion.li
            key={`${entry.org}-${entry.role}`}
            variants={item}
            className={`grid gap-1 py-7 sm:grid-cols-[12rem_1fr] sm:gap-8 ${hoverLift} hover:text-accent`}
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted sm:pt-1.5">
              {entry.period}
              {entry.current && (
                <span className="ml-2 inline-block border border-accent px-1.5 py-0.5 text-[10px] font-bold text-accent">
                  NOW
                </span>
              )}
            </p>
            <div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {entry.role}
                <span className="text-muted"> · {entry.org}</span>
              </h3>
              {entry.detail && (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {entry.detail}
                </p>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
