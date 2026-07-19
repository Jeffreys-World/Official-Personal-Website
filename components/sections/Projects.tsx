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
      className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8"
    >
      <Pigeon className="absolute right-6 top-12 w-14 rotate-3 opacity-60 sm:w-16" />
      <h2
        id="projects-heading"
        className="mb-12 font-mono text-xs uppercase tracking-[0.3em] text-muted"
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
        {projects.map((project, i) => (
          <motion.li key={project.title} variants={item}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-3 py-10 sm:grid-cols-[4rem_1fr_auto] sm:gap-8 sm:py-14"
            >
              <span className="font-mono text-xs text-muted sm:pt-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-3xl font-bold tracking-tight transition-colors group-hover:text-accent sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                  {project.tag} · {project.year}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <span className="sr-only">(opens GitHub repository in new tab)</span>
              </div>
              <ArrowUpRight
                width={28}
                height={28}
                className="hidden self-start text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent sm:block sm:pt-3"
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
