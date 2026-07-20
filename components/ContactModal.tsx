"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { contact } from "@/lib/content";
import { subscribeContactModalOpen } from "@/lib/contact-modal";
import { Close } from "@/components/icons";
import { hoverLift } from "@/lib/hover";

const COGNITO_SRC = "https://www.cognitoforms.com/f/seamless.js";
const COGNITO_KEY = "eRS9IqBGSkivusQhZtgBbg";
const COGNITO_FORM = "2";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])';

type FormStatus = "loading" | "ready" | "error";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  // Applied only after the close fade-out finishes, so the overlay is
  // visibility:hidden at rest but never at the moment focus() runs on open.
  const [fullyHidden, setFullyHidden] = useState(false);
  const [status, setStatus] = useState<FormStatus>("loading");
  const reduced = useReducedMotion();

  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const injectedRef = useRef(false);

  useEffect(() => {
    return subscribeContactModalOpen(() => {
      openerRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      setHasOpened(true);
      setOpen(true);
      setFullyHidden(false);
    });
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    openerRef.current?.focus();
    openerRef.current = null;
  }, []);

  // document.currentScript IS set for dynamically-appended classic scripts, so
  // seamless.js renders the form where this tag sits — inside this container.
  // injectedRef survives StrictMode's dev double-effect, so this runs once.
  useEffect(() => {
    const container = formContainerRef.current;
    if (!hasOpened || injectedRef.current || !container) return;
    injectedRef.current = true;
    const script = document.createElement("script");
    script.src = COGNITO_SRC;
    script.setAttribute("data-key", COGNITO_KEY);
    script.setAttribute("data-form", COGNITO_FORM);
    script.addEventListener("load", () => setStatus("ready"));
    script.addEventListener("error", () => setStatus("error"));
    container.appendChild(script);
  }, [hasOpened]);

  // Body scroll lock with scrollbar-width compensation (no layout shift).
  useEffect(() => {
    if (!open) return;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [open]);

  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
  }, [open]);

  // Escape to close + minimal Tab containment.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE)
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      const inside = active instanceof Node && panel.contains(active);
      if (e.shiftKey && (active === first || !inside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !inside)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  // Stay mounted after first open (hidden) so the injected Cognito form and
  // any typed input — or a post-submit confirmation — survive close/reopen.
  // No AnimatePresence: exit-unmount would destroy the injected form DOM.
  if (!hasOpened) return null;

  // visibility is handled outside the variants (see fullyHidden): putting it
  // in the hidden variant would apply at first mount and block the initial
  // focus() on the close button.
  const overlayVariants: Variants = {
    hidden: { opacity: 0, transition: { duration: 0.2, ease: "easeOut" } },
    visible: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
  };

  const panelVariants: Variants = {
    hidden: {
      y: reduced ? 0 : 12,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    visible: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  };

  return createPortal(
    <motion.div
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      variants={overlayVariants}
      inert={open ? undefined : true}
      aria-hidden={open ? undefined : true}
      onAnimationComplete={(definition) => {
        if (definition === "hidden") setFullyHidden(true);
      }}
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 ${
        open ? "" : "pointer-events-none"
      } ${!open && fullyHidden ? "invisible" : ""}`}
    >
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        variants={panelVariants}
        className="relative max-h-[85svh] w-full max-w-xl overflow-y-auto border border-subtle bg-background p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {contact.modal.eyebrow}
            </p>
            <h2
              id="contact-modal-title"
              className="mt-3 text-2xl font-bold tracking-[-0.02em]"
            >
              {contact.modal.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Close contact form"
            className={`flex h-10 w-10 shrink-0 items-center justify-center border border-subtle text-muted ${hoverLift} hover:border-accent hover:text-accent`}
          >
            <Close />
          </button>
        </div>

        <div className="mt-8 min-h-64">
          {status === "loading" && (
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {contact.modal.loading}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm leading-relaxed text-muted">
              {contact.modal.error}{" "}
              <a
                href={`mailto:${contact.email}`}
                className={`inline-block font-mono text-xs uppercase tracking-widest underline decoration-1 decoration-transparent underline-offset-4 ${hoverLift} hover:text-accent hover:decoration-accent`}
              >
                {contact.email}
              </a>
            </p>
          )}
          <div ref={formContainerRef} className="cognito-embed" />
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
