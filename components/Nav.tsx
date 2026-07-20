import { nav } from "@/lib/content";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactModalTrigger } from "@/components/ContactModalTrigger";
import { hoverLift } from "@/lib/hover";

const linkClass = `inline-block font-mono text-[11px] uppercase tracking-widest text-muted underline decoration-1 decoration-transparent underline-offset-4 ${hoverLift} hover:text-accent hover:decoration-accent`;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-subtle/60 backdrop-blur-md [background:var(--nav-bg)]">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#main"
          className={`inline-block font-mono text-[11px] font-bold uppercase tracking-widest ${hoverLift} hover:text-accent`}
        >
          Jeffrey De La Cruz
        </a>
        <div className="flex items-center gap-5 sm:gap-8">
          {nav.map((item) =>
            item.href === "#contact" ? (
              <ContactModalTrigger
                key={item.href}
                href={item.href}
                className={linkClass}
              >
                {item.label}
              </ContactModalTrigger>
            ) : (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            )
          )}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
