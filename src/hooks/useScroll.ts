import useEventListener from "./useEventListener";
import { throttle } from "@app/utils";

export default function useScroll(cb: (event: Event) => void) {
  useEventListener("scroll", throttle(cb));
}
