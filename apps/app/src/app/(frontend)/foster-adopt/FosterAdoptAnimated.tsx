"use client";

import React from "react";
import { m, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
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

type Story = {
  name: string;
  description: string;
  role: string;
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

export function FosterAdoptStories({ stories }: { stories: Story[] }) {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <m.div
      className="grid md:grid-cols-2 gap-8"
      initial={initial}
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={staggerContainer}
    >
      {stories.map((story) => (
        <m.div
          key={story.name}
          className="bg-[#18336B]/5 rounded-2xl p-8 border border-[#18336B]/10"
          variants={fadeUp}
          transition={transition(0)}
        >
          <div className="w-12 h-12 bg-[#1B6AE3] rounded-full flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div className="font-heading text-xl text-[#18336B] mb-2">{story.name}</div>
          <p className="text-[#273C6B]/80 leading-relaxed mb-3">{story.description}</p>
          <span className="inline-block bg-[#1B6AE3]/10 text-[#1B6AE3] text-sm px-3 py-1 rounded-full">
            {story.role}
          </span>
        </m.div>
      ))}
    </m.div>
  );
}
