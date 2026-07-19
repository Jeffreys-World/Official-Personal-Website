"use client";

import { motion, useReducedMotion } from "motion/react";
import { experience } from "@/lib/content";
import { fadeUp, fadeOnly, stagger, viewport } from "@/lib/motion";

export function Experience() {
  const reduced = useReducedMotion();
  const item = reduced ? fadeOnly : fadeUp;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8"
    >
      <h2
        id="experience-heading"
        className="mb-12 text-sm font-bold uppercase tracking-[0.25em] text-muted"
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
            className="grid gap-1 py-6 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <p className="text-sm text-muted">
              {entry.period}
              {entry.current && (
                <span className="ml-2 inline-block rounded-full border border-accent px-2 py-0.5 text-xs font-medium text-accent">
                  Now
                </span>
              )}
            </p>
            <div>
              <h3 className="text-lg font-semibold">
                {entry.role}
                <span className="text-muted"> · {entry.org}</span>
              </h3>
              {entry.detail && (
                <p className="mt-1 text-sm leading-relaxed text-muted">
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
