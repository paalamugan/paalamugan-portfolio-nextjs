import { useState, useEffect } from "react";

export default function useReSize<T extends Record<string, any>>(ref: T) {
  const [size, setSize] = useState<DOMRectReadOnly | {}>({});

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}
