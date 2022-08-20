import { useState, useRef, useEffect } from "react";

interface IntersectionHookInit extends IntersectionObserverInit {
  // In case I want to add something
}

type OnIntersection = (isIntersecting: boolean, ob: IntersectionObserver) => boolean | void;

const DefaultOptions: IntersectionHookInit = {
  root: null,
  threshold: 0,
};

// Most of time we only need observer until intersecting, so return false here to disconnect observer.
const DefaultOnIntersection: OnIntersection = (isIntersecting, observer) => {
  if (isIntersecting) return false;
};

export const useIntersectionObserver = (
  onIntersection: OnIntersection = DefaultOnIntersection,
  options: IntersectionHookInit = DefaultOptions,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elemRef = useRef<Element | null>(null);
  const setRefElem = <TElement extends Element | null>(elem: TElement) => {
    elemRef.current = elem;
  };

  useEffect(() => {
    if (!elemRef.current) return;
    let isUnmounted = false;

    if (typeof IntersectionObserver === "undefined") return setIsIntersecting(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (isUnmounted) return;
        const isElementIntersecting = entry.isIntersecting;
        if (onIntersection(isElementIntersecting, observer) === false) {
          observer.disconnect();
        }
        setIsIntersecting(isElementIntersecting);
      },
      { ...options },
    );
    observer.observe(elemRef.current);
    return () => {
      observer && observer.disconnect();
      isUnmounted = true;
    };
  }, [onIntersection, options]);

  return [isIntersecting, setRefElem] as const;
};

export default useIntersectionObserver;
