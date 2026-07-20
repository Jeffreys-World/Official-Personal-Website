/**
 * Site-wide hover treatment: 3% scale + gold accent, 200ms ease-out.
 * Compose with `hover:text-accent` / `hover:border-accent` /
 * `hover:decoration-accent` at the call site as appropriate.
 *
 * transition-property is scoped (deliberately no `transform`) so this is
 * safe on motion-animated elements whose entrance animates translateY —
 * a CSS transform transition would fight the JS-driven animation.
 */
export const hoverLift =
  "transition-[scale,color,border-color,text-decoration-color] duration-200 ease-out motion-safe:hover:scale-[1.03]";
