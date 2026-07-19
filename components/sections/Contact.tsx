import { contact } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { GitHub, LinkedIn, Mail } from "@/components/icons";
import { WaterTower } from "@/components/stickers";

const iconMap = {
  github: GitHub,
  linkedin: LinkedIn,
  mail: Mail,
} as const;

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" aria-labelledby="contact-heading" className="relative">
      <div className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
        <WaterTower className="absolute right-8 top-10 w-16 -rotate-6 opacity-70 sm:w-20" />
        <Reveal>
          <h2
            id="contact-heading"
            className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight tracking-tight"
          >
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {contact.blurb}
          </p>
        </Reveal>
        <div className="mt-16 flex flex-col gap-6 border-t border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${contact.email}`}
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            {contact.email}
          </a>
          <ul className="flex items-center gap-5">
            {contact.links.map((link) => {
              const Icon = iconMap[link.icon];
              const external = link.href.startsWith("http");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-subtle text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mt-10 text-xs text-muted">
          © {year} Jeffrey De La Cruz · Built with Next.js in New York City
        </p>
      </div>
    </footer>
  );
}
