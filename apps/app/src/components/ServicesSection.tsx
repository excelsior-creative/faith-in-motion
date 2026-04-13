"use client";

import Link from "next/link";
import { ArrowRight, Users, Heart, CheckCircle } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  transition,
  VIEWPORT_MARGIN,
} from "@/lib/motion";

const faithLeaderBenefits = [
  "Host informational sessions about foster care",
  "Organize donation drives for children in need",
  "Mobilize your congregation to volunteer",
  "Join the county dialogue on foster care",
  "Celebrate milestones with foster youth and families",
];

const familyBenefits = [
  "Expert guidance through the entire approval process",
  "Connected to the right Riverside County agency for you",
  "Free information — no cost to families",
  "Bilingual support available",
  "Ongoing support from our faith community network",
];

export const ServicesSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <section className="py-20 md:py-28 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section header */}
        <m.div
          className="text-center mb-12 md:mb-16"
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: VIEWPORT_MARGIN }}
          variants={fadeUp}
          transition={transition(0)}
        >
          <p className="text-[#1B6AE3] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Two Ways to Get Involved
          </p>
          <h2 className="font-display font-bold text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] text-[#18336B]">
            How Faith In Motion works for you
          </h2>
          <p className="mt-4 text-[#273C6B]/65 max-w-xl mx-auto">
            Whether you lead a congregation or are considering opening your home,
            we are your guide — at every step.
          </p>
        </m.div>

        {/* Two-path cards */}
        <m.div
          className="grid md:grid-cols-2 gap-5 md:gap-6"
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: VIEWPORT_MARGIN }}
          variants={staggerContainer}
        >

          {/* Faith Leaders card */}
          <m.div
            className="relative rounded-3xl bg-[#18336B] p-8 md:p-10 overflow-hidden flex flex-col"
            variants={fadeUp}
            transition={transition(0.08)}
          >
            {/* Background decoration */}
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-56 h-56 bg-[#1B6AE3]/20 rounded-full"
            />

            <div className="w-11 h-11 bg-[#FCDB38] rounded-xl flex items-center justify-center mb-6 shrink-0">
              <Users className="h-5 w-5 text-[#18336B]" />
            </div>

            <p className="text-[#FCDB38] text-xs font-semibold uppercase tracking-[0.18em] mb-2">
              For Faith Leaders
            </p>
            <h3 className="font-display font-bold text-white text-2xl md:text-[1.75rem] leading-tight mb-4">
              Mobilize your congregation
            </h3>
            <p className="text-[#CAD9F5] leading-relaxed mb-7 text-[0.9375rem]">
              Join our collaborative network and give your congregation a meaningful
              way to serve children in foster care across Riverside County.
            </p>

            <ul className="space-y-2.5 mb-8 flex-grow">
              {faithLeaderBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#CAD9F5]">
                  <CheckCircle className="h-4 w-4 text-[#FCDB38] shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>

            <Link
              href="/faith-partners"
              className="group inline-flex items-center gap-2 bg-[#FCDB38] text-[#18336B] px-5 py-3 rounded-xl font-semibold text-sm self-start hover:bg-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCDB38] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18336B]"
            >
              Get My Faith Community Involved
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </m.div>

          {/* Foster/Adopt card */}
          <m.div
            className="relative rounded-3xl bg-white border border-gray-100 p-8 md:p-10 overflow-hidden flex flex-col shadow-sm"
            variants={fadeUp}
            transition={transition(0.16)}
          >
            {/* Background decoration */}
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-56 h-56 bg-[#F94F1E]/6 rounded-full"
            />

            <div className="w-11 h-11 bg-[#F94F1E] rounded-xl flex items-center justify-center mb-6 shrink-0">
              <Heart className="h-5 w-5 text-white" />
            </div>

            <p className="text-[#F94F1E] text-xs font-semibold uppercase tracking-[0.18em] mb-2">
              For Families
            </p>
            <h3 className="font-display font-bold text-[#18336B] text-2xl md:text-[1.75rem] leading-tight mb-4">
              Give a child a loving home
            </h3>
            <p className="text-[#273C6B]/70 leading-relaxed mb-7 text-[0.9375rem]">
              Our foster care experts guide you through every step of the process —
              for free — and connect you with the agency that&apos;s right for your family.
            </p>

            <ul className="space-y-2.5 mb-8 flex-grow">
              {familyBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#273C6B]">
                  <CheckCircle className="h-4 w-4 text-[#1B6AE3] shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>

            <Link
              href="/foster-adopt"
              className="group inline-flex items-center gap-2 bg-[#F94F1E] text-white px-5 py-3 rounded-xl font-semibold text-sm self-start hover:bg-[#18336B] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F94F1E] focus-visible:ring-offset-2"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </m.div>

        </m.div>
      </div>
    </section>
  );
};
