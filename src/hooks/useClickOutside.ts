import useEventListener from "./useEventListener";

export default function useClickOutside(ref: Record<string, any>, cb: (event: Event) => void) {
  const handleEvent = (event: Event) => {
    if (ref.current == null || ref.current.contains(event.target)) return;
    cb(event);
  };
  useEventListener("click", handleEvent, typeof window !== "undefined" ? window.document : null);
}
