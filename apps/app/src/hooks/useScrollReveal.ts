"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(options?: {
  margin?: string;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("motion-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("motion-revealed");
          observer.disconnect();
        }
      },
      { rootMargin: options?.margin ?? "-80px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.margin]);

  return ref;
}
