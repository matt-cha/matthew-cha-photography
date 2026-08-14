"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit;

const DEFAULT_OPTIONS: UseInViewOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
};

export const useInView = <T extends HTMLElement>(
  options: UseInViewOptions = DEFAULT_OPTIONS,
) => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);
  const threshold = options.threshold ?? DEFAULT_OPTIONS.threshold;
  const rootMargin = options.rootMargin ?? DEFAULT_OPTIONS.rootMargin;
  const root = options.root ?? DEFAULT_OPTIONS.root;

  useEffect(() => {
    const node = ref.current;
    if (!node || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin, root },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isInView, threshold, rootMargin, root]);

  return { ref, isInView };
};
