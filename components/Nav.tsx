import { nav } from "@/lib/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-subtle/60 backdrop-blur-md [background:var(--nav-bg)]">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#main"
          className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent"
        >
          Jeffrey De La Cruz
        </a>
        <div className="flex items-center gap-5 sm:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
