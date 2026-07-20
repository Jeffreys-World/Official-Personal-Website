"use client";

import { openContactModal } from "@/lib/contact-modal";

type Props = {
  /** When set, renders an <a> whose href is the no-JS fallback (e.g. "#contact"). */
  href?: string;
  className?: string;
  children: React.ReactNode;
};

export function ContactModalTrigger({ href, className, children }: Props) {
  if (href) {
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          openContactModal();
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={className} onClick={() => openContactModal()}>
      {children}
    </button>
  );
}
