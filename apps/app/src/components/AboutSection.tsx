"use client";

import {
  fadeUp,
  scaleIn,
  staggerContainer,
  transition,
  VIEWPORT_MARGIN,
} from "@/lib/motion";
import { m, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Expert guidance through the foster care system",
  "Connection with the right Riverside County agencies",
  "Ongoing support from 100+ faith communities",
  "Community celebration of every milestone",
];

export const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <m.div
          className="mx-auto max-w-3xl"
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: VIEWPORT_MARGIN }}
          variants={staggerContainer}
          transition={transition(0.1)}
        >
          <m.p
            className="text-[#1B6AE3] text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            variants={fadeUp}
            transition={transition(0.1)}
          >
            About Us
          </m.p>
          <m.div
            className="mb-8 inline-block rounded-2xl bg-[#FCDB38] px-5 py-4 shadow-lg"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, margin: VIEWPORT_MARGIN }}
            variants={scaleIn}
            transition={transition(0.12)}
          >
            <div className="font-display font-bold text-[#18336B] text-xs uppercase tracking-tight leading-snug">
              Official DPSS Partner
            </div>
            <div className="text-[#18336B]/65 text-xs mt-0.5">
              Riverside County · Since 2013
            </div>
          </m.div>
          <m.h2
            className="font-display font-bold text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] text-[#18336B] mb-5"
            variants={fadeUp}
            transition={transition(0.17)}
          >
            Faith communities have always cared for children in need
          </m.h2>
          <m.p
            className="text-[#273C6B]/75 leading-relaxed mb-8"
            variants={fadeUp}
            transition={transition(0.24)}
          >
            From the days of the Orphan Trains to today, faith communities have
            stepped up when children needed them most. Faith In Motion
            formalizes that calling — connecting Riverside County congregations
            with children in foster care, and with families who need a community
            around them.
          </m.p>

          <m.ul className="space-y-3 mb-10" variants={staggerContainer}>
            {highlights.map((item, i) => (
              <m.li
                key={item}
                className="flex items-start gap-3 text-[#273C6B]"
                variants={fadeUp}
                transition={transition(0.31 + i * 0.06)}
              >
                <CheckCircle className="h-4 w-4 text-[#1B6AE3] shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </m.li>
            ))}
          </m.ul>

          <m.div variants={fadeUp} transition={transition(0.55)}>
            <Link
              href="/faith-partners"
              className="group inline-flex items-center gap-2 bg-[#18336B] text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[#1B6AE3] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18336B] focus-visible:ring-offset-2"
            >
              Join Our Network
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};
