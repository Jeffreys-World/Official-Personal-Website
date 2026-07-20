"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { hoverLift } from "@/lib/hover";

const emptySubscribe = () => () => {};

// True after hydration only — server snapshot stays false, so the first client
// render matches SSR and next-themes' resolvedTheme is safe to read.
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={
        mounted
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle theme"
      }
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-block font-mono text-[11px] uppercase tracking-widest text-muted ${hoverLift} hover:text-accent`}
    >
      THEME[{mounted ? (isDark ? "D" : "L") : "·"}]
    </button>
  );
}
