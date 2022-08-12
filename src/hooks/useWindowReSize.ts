import { useState } from "react";
import useEventListener from "./useEventListener";
import { isBrowser } from "@app/utils";

export default function useWindowReSize() {
  const [windowSize, setWindowSize] = useState({
    width: isBrowser() ? window.innerWidth : 0,
    height: isBrowser() ? window.innerHeight : 0,
  });

  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return windowSize;
}
