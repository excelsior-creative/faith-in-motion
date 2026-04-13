"use client";

import React, { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, transition, VIEWPORT_MARGIN } from "@/lib/motion";

const stats = [
  { value: 100, suffix: "+", label: "Faith Communities" },
  { value: 13, suffix: "+", label: "Years Serving Riverside County" },
  { value: "1,000s", suffix: "", label: "Children & Families Supported" },
];

function useCountUp(target: number, enabled: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!enabled) {
      setCount(target);
      return;
    }

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, enabled]);

  return count;
}

function StatItem({
  stat,
  delay,
  shouldReduceMotion,
}: {
  stat: (typeof stats)[number];
  delay: number;
  shouldReduceMotion: boolean | null;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = typeof stat.value === "number" ? stat.value : null;
  const count = useCountUp(numericValue ?? 0, inView && !shouldReduceMotion && numericValue !== null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const displayValue = numericValue !== null
    ? `${count}${stat.suffix}`
    : `${stat.value}${stat.suffix}`;

  return (
    <m.div
      ref={ref}
      className="text-center"
      variants={fadeUp}
      transition={transition(delay)}
    >
      <div className="font-display font-bold text-2xl md:text-3xl text-[#18336B]">
        {inView || shouldReduceMotion ? displayValue : numericValue !== null ? `0${stat.suffix}` : displayValue}
      </div>
      <div className="text-xs md:text-sm text-[#273C6B]/55 mt-0.5 font-medium">
        {stat.label}
      </div>
    </m.div>
  );
}

export const ImpactStats = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-10 md:py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <m.div
          className="flex flex-wrap justify-center gap-8 md:gap-12"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: VIEWPORT_MARGIN }}
          variants={staggerContainer}
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <StatItem
                stat={stat}
                delay={i * 0.07}
                shouldReduceMotion={shouldReduceMotion}
              />
              {i < stats.length - 1 && (
                <m.div
                  className="hidden md:block w-px h-8 self-center bg-gray-200"
                  variants={fadeUp}
                  transition={transition(i * 0.07 + 0.04)}
                />
              )}
            </React.Fragment>
          ))}
        </m.div>
      </div>
    </section>
  );
};
