"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

export function Hud({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-[11px] uppercase tracking-widest text-muted ${className ?? ""}`}
    >
      <span suppressHydrationWarning>{time ?? "--:--:--"} EST·NYC</span>
      <span>40.7128°N × 74.0060°W</span>
    </div>
  );
}
