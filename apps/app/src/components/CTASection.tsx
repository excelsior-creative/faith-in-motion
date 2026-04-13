"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { fadeUp, transition, VIEWPORT_MARGIN } from "@/lib/motion";

export const CTASection = () => {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <section className="pt-20 md:pt-28 pb-24 md:pb-32 bg-[#18336B] relative overflow-hidden">
      {/* Gold accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FCDB38]" />

      {/* Subtle dot texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] bg-dot-pattern-white"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">

          {/* Left: CTA copy */}
          <m.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, margin: VIEWPORT_MARGIN }}
            variants={fadeUp}
            transition={transition(0)}
          >
            <p className="text-[#FCDB38] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Get Involved
            </p>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3vw+0.5rem,3rem)] text-white mb-4">
              Your community can change a child&apos;s life.
            </h2>
            <p className="text-[#CAD9F5] leading-relaxed max-w-lg mb-8">
              Over 100 faith communities have already said yes. Join our collaborative —
              or start your own journey toward fostering or adoption.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/faith-partners"
                className="group inline-flex items-center justify-center gap-2 bg-[#FCDB38] text-[#18336B] px-5 py-3 rounded-xl font-semibold text-sm hover:bg-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCDB38] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18336B]"
              >
                Become a Faith Partner
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/foster-adopt"
                className="group inline-flex items-center justify-center gap-2 border border-white/25 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#18336B]"
              >
                Foster or Adopt
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </m.div>

          {/* Right: Contact card */}
          <m.div
            className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-6 md:p-7 space-y-5"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, margin: VIEWPORT_MARGIN }}
            variants={fadeUp}
            transition={transition(0.12)}
          >
            <p className="font-display font-semibold text-white text-sm">Contact Us</p>

            <div className="space-y-4">
              <a
                href="tel:9512285553"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 bg-[#1B6AE3] rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-[#CAD9F5]/55 text-xs font-medium">Phone</div>
                  <div className="text-white font-semibold text-sm group-hover:text-[#FCDB38] transition-colors">
                    (951) 228-5553
                  </div>
                </div>
              </a>

              <a
                href="mailto:faithinmotion@fosterall.org"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 bg-[#1B6AE3] rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-[#CAD9F5]/55 text-xs font-medium">Email</div>
                  <div className="text-white font-semibold text-sm group-hover:text-[#FCDB38] transition-colors truncate">
                    faithinmotion@fosterall.org
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#1B6AE3] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-[#CAD9F5]/55 text-xs font-medium">Address</div>
                  <div className="text-[#CAD9F5] text-sm leading-snug mt-0.5">
                    3752 Elizabeth St
                    <br />
                    Ste D2
                    <br />
                    Riverside, CA 92506
                  </div>
                </div>
              </div>
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
};
