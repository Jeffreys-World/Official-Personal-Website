import { contact } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { ContactModalTrigger } from "@/components/ContactModalTrigger";
import { hoverLift } from "@/lib/hover";
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
      <div className="mx-auto w-full max-w-6xl px-5 py-28 sm:px-8 sm:py-40">
        <WaterTower className="absolute right-8 top-10 w-16 -rotate-6 opacity-60 sm:w-20" />
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="max-w-[18ch] text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.02em]"
          >
            {contact.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {contact.blurb}
          </p>
        </Reveal>
        <div className="mt-20 flex flex-col gap-6 border-t border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <ContactModalTrigger
              className={`inline-flex items-center justify-center border border-subtle px-5 py-3 font-mono text-xs uppercase tracking-widest ${hoverLift} hover:border-accent hover:text-accent`}
            >
              {contact.cta}
            </ContactModalTrigger>
            <a
              href={`mailto:${contact.email}`}
              className={`inline-block font-mono text-xs uppercase tracking-widest underline decoration-1 decoration-transparent underline-offset-4 ${hoverLift} hover:text-accent hover:decoration-accent`}
            >
              {contact.email}
            </a>
          </div>
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
                    className={`flex h-10 w-10 items-center justify-center border border-subtle text-muted ${hoverLift} hover:border-accent hover:text-accent`}
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-widest text-muted">
          © {year} Jeffrey De La Cruz · 40.7128°N × 74.0060°W · NYC
        </p>
      </div>
    </footer>
  );
}
