"use client";

import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/lib/content";
import { fadeUp, fadeOnly, stagger, viewport } from "@/lib/motion";
import { ArrowUpRight } from "@/components/icons";
import { Pigeon } from "@/components/stickers";

export function Projects() {
  const reduced = useReducedMotion();
  const item = reduced ? fadeOnly : fadeUp;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative mx-auto w-full max-w-5xl px-5 py-24 sm:px-8"
    >
      <Pigeon className="absolute right-6 top-12 w-14 rotate-3 opacity-70 sm:w-16" />
      <h2
        id="projects-heading"
        className="mb-12 text-sm font-bold uppercase tracking-[0.25em] text-muted"
      >
        Projects
      </h2>
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="divide-y divide-subtle border-y border-subtle"
      >
        {projects.map((project) => (
          <motion.li key={project.title} variants={item}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-2 py-8 transition-colors sm:grid-cols-[10rem_1fr_auto] sm:gap-6"
            >
              <p className="text-sm text-muted">
                {project.year} · {project.tag}
              </p>
              <div>
                <h3 className="text-xl font-semibold transition-colors group-hover:text-accent sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <span className="sr-only">(opens GitHub repository in new tab)</span>
              </div>
              <ArrowUpRight
                width={24}
                height={24}
                className="hidden self-start text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent sm:block"
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
