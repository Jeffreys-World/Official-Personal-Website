type Listener = () => void;

const listeners = new Set<Listener>();

/** Fired by any trigger (nav link, footer button) to open the contact modal. */
export function openContactModal() {
  for (const listener of listeners) listener();
}

/** The mounted ContactModal subscribes here. Returns an unsubscribe fn. */
export function subscribeContactModalOpen(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
