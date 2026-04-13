"use client";

import { m, useReducedMotion } from "framer-motion";
import { fosterStories } from "@/data/fosterStories";
import {
  fadeUp,
  staggerContainer,
  transition,
  VIEWPORT_MARGIN,
} from "@/lib/motion";
import { FosterStoryCard } from "./FosterStoryCard";

export const StoriesSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <section className="py-20 md:py-28 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <m.div
          className="mb-12 md:mb-14"
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: VIEWPORT_MARGIN }}
          variants={fadeUp}
          transition={transition(0)}
        >
          <p className="text-[#1B6AE3] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Real Families
          </p>
          <h2 className="font-display font-bold text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] text-[#18336B] max-w-xl text-balance">
            Stories that make the work real
          </h2>
          <p className="mt-4 text-[#273C6B]/70 text-sm md:text-base max-w-2xl text-pretty">
            Hear directly from families in Riverside County — the same videos
            featured on our foster and adopt page.
          </p>
        </m.div>

        <m.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: VIEWPORT_MARGIN }}
          variants={staggerContainer}
        >
          {fosterStories.map((story, i) => (
            <FosterStoryCard
              key={story.name}
              story={story}
              shouldReduceMotion={shouldReduceMotion}
              index={i}
            />
          ))}
        </m.div>
      </div>
    </section>
  );
};
