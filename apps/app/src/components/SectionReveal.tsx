"use client";

import { m, useReducedMotion } from "framer-motion";
import React from "react";
import { fadeUp, transition, VIEWPORT_MARGIN } from "@/lib/motion";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const SectionReveal = ({
  children,
  className,
  delay = 0,
}: SectionRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={fadeUp}
      transition={transition(delay / 1000)}
      className={className}
    >
      {children}
    </m.div>
  );
};
