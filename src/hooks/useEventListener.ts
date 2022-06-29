import { useEffect, useRef } from "react";

export default function useEventListener<T1, T2 extends Event, T3>(
  eventType: T1,
  callback: (event: T2) => void,
  element: T3 | any = window,
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (event: T2) => callbackRef.current(event);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
