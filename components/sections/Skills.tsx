"use client";

import { motion, useReducedMotion } from "motion/react";
import { skills } from "@/lib/content";
import { fadeUp, fadeOnly, stagger, viewport } from "@/lib/motion";

export function Skills() {
  const reduced = useReducedMotion();
  const item = reduced ? fadeOnly : fadeUp;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8"
    >
      <h2
        id="skills-heading"
        className="mb-12 font-mono text-xs uppercase tracking-[0.3em] text-muted"
      >
        Skills
      </h2>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-12 border-y border-subtle py-10 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-subtle sm:py-12"
      >
        <motion.div variants={item} className="sm:pr-12">
          <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Execution Principles
          </h3>
          <ul className="mt-6 space-y-4">
            {skills.principles.map((line) => (
              <li key={line} className="max-w-md text-sm leading-relaxed">
                {line}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={item} className="sm:pl-12">
          <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Technical Skills
          </h3>
          <ul className="mt-6 divide-y divide-subtle">
            {skills.technical.map((skill) => (
              <li
                key={skill.name}
                className="flex items-baseline justify-between gap-4 py-2.5 text-sm"
              >
                <span className="font-medium">{skill.name}</span>
                {skill.meta && (
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    {skill.meta}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
