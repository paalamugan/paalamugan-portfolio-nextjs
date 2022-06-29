import { useEffect, useState } from "react";

export default function useOnScreen<T extends Record<string, any>>(ref: T, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (current == null) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      rootMargin,
    });
    observer.observe(current);
    return () => {
      if (current == null) return;
      observer.unobserve(current);
    };
  }, [ref, rootMargin]);

  return isVisible;
}
