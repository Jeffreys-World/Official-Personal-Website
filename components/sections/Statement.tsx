import { statement } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { HeartMark } from "@/components/stickers";

export function Statement() {
  return (
    <section
      aria-labelledby="statement-heading"
      className="relative mx-auto w-full max-w-6xl px-5 py-28 sm:px-8 sm:py-40"
    >
      <HeartMark className="absolute right-8 top-6 w-14 rotate-6 opacity-60 sm:w-16" />
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          {statement.subtitle}
        </p>
        <h2
          id="statement-heading"
          className="max-w-[14ch] text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.02em]"
        >
          {statement.title}
        </h2>
      </Reveal>
    </section>
  );
}
