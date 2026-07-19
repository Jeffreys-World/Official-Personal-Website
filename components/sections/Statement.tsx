import { statement } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { HeartMark } from "@/components/stickers";

export function Statement() {
  return (
    <section
      aria-labelledby="statement-heading"
      className="relative mx-auto w-full max-w-5xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <HeartMark className="absolute -top-2 right-8 w-14 rotate-6 opacity-70 sm:w-16" />
      <Reveal>
        <h2
          id="statement-heading"
          className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight tracking-tight"
        >
          {statement.title}
        </h2>
        <p className="mt-4 text-[clamp(1.1rem,3vw,1.75rem)] font-medium text-accent">
          {statement.subtitle}
        </p>
      </Reveal>
    </section>
  );
}
