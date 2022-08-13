import useEventListener from "./useEventListener";
import { isBrowser } from "@app/utils";
import { RefObject } from "react";

export default function useClickOutside<T extends RefObject<Element>>(
  ref: T,
  cb: (event: Event) => void,
) {
  const handleEvent = (event: Event) => {
    if (ref.current == null || ref.current.contains(event.target as Node)) return;
    cb(event);
  };
  useEventListener("click", handleEvent, isBrowser() ? window.document : null);
}
