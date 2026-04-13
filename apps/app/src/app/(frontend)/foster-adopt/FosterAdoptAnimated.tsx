"use client";

import { m, useReducedMotion } from "framer-motion";
import { fosterStories } from "@/data/fosterStories";
import { FosterStoryCard } from "@/components/FosterStoryCard";
import {
  fadeUp,
  staggerContainer,
  transition,
  VIEWPORT_MARGIN,
} from "@/lib/motion";

type Step = {
  number: string;
  title: string;
  description: string;
};

export function FosterAdoptSteps({ steps }: { steps: Step[] }) {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <div className="relative">
      <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-white/20" />
      <m.div
        className="grid md:grid-cols-5 gap-6 relative z-10"
        initial={initial}
        whileInView="visible"
        viewport={{ once: true, margin: VIEWPORT_MARGIN }}
        variants={staggerContainer}
      >
        {steps.map((step) => (
          <m.div
            key={step.number}
            className="text-center"
            variants={fadeUp}
            transition={transition(0)}
          >
            <div className="w-16 h-16 bg-[#1B6AE3] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-heading text-lg">
              {step.number}
            </div>
            <h3 className="font-heading text-white text-sm mb-2">{step.title}</h3>
            <p className="text-[#CAD9F5] text-xs leading-relaxed">{step.description}</p>
          </m.div>
        ))}
      </m.div>
    </div>
  );
}

export function FosterAdoptStories() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
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
  );
}
