import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#040656]">
      <div className="absolute inset-0">
        <Image
          src="/images/fim-website-elements.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      {/* Matches live site: linear-gradient(90deg, #1c6ae3, #040656) @ 0.8 opacity */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[#1c6ae3]/80 to-[#040656]/80"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="py-[calc(4rem+50px)] md:py-22 md:min-h-[calc(46vh+100px)] flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5 animate-fade-up [animation-delay:80ms]">
            <div className="h-px w-6 bg-[#FCDB38] shrink-0" aria-hidden />
            <span className="text-[#FCDB38] text-xs font-semibold uppercase tracking-[0.2em]">
              Riverside County Official Program
            </span>
            <div className="h-px w-6 bg-[#FCDB38] shrink-0" aria-hidden />
          </div>

          {/* Headline */}
          <h1
            className="text-white font-display font-bold text-[clamp(2.25rem,4.5vw+0.5rem,4.25rem)] leading-[1.06] tracking-[-0.025em] mb-4 text-balance animate-fade-up [animation-delay:160ms]"
          >
            When faith communities unite,{" "}
            <em className="not-italic text-[#FCDB38]">children find families.</em>
          </h1>

          {/* Sub */}
          <p className="text-[#CAD9F5] text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-pretty animate-fade-up [animation-delay:240ms]">
            Faith in Motion is a collaborative of faith communities across
            Riverside County working together for the wellbeing of children in
            foster care and prospective families.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto animate-fade-up [animation-delay:280ms]">
            <Link
              href="/faith-partners"
              className="group inline-flex items-center justify-center gap-2 min-h-[44px] bg-[#FCDB38] text-[#18336B] px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-black/25 hover:bg-white hover:shadow-xl transition-[background-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCDB38] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040656]"
            >
              I&apos;m a Faith Leader
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/foster-adopt"
              className="group inline-flex items-center justify-center gap-2 min-h-[44px] bg-[#F94F1E] text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-black/25 border border-[#ff7a52]/45 hover:bg-[#ff5c2e] hover:border-[#ff9a72]/55 transition-[background-color,border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#040656]"
            >
              I Want to Foster or Adopt
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
