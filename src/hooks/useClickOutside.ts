import useEventListener from "./useEventListener";
import { isBrowser } from "@app/utils";

export default function useClickOutside(ref: Record<string, any>, cb: (event: Event) => void) {
  const handleEvent = (event: Event) => {
    if (ref.current == null || ref.current.contains(event.target)) return;
    cb(event);
  };
  useEventListener("click", handleEvent, isBrowser() ? window.document : null);
}
