import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-[#18336B] overflow-hidden min-h-[600px] flex items-center">
      {/* Background illustration */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <p className="text-[#FCDB38] font-heading text-sm uppercase tracking-widest mb-4">
              Riverside County Faith Program
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Faith in Motion is a collaborative of faith communities working together for children
            </h1>
            <p className="text-[#CAD9F5] text-lg mb-8 leading-relaxed">
              Over 100 faith communities across Riverside County have united to serve 
              the thousands of children in foster care and families in need of support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/faith-partners"
                className="inline-flex items-center gap-2 bg-[#1B6AE3] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1F4083] transition-colors"
              >
                Faith Leaders
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/foster-adopt"
                className="inline-flex items-center gap-2 bg-[#F94F1E] text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors"
              >
                Foster/Adopt Info
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="hidden md:flex justify-center items-center">
            <Image
              src="/images/hero-illustration.png"
              alt="Faith In Motion - Supporting children in foster care"
              width={500}
              height={400}
              className="w-full max-w-md object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
