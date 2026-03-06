import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <>
      {/* Faith Partners CTA */}
      <section className="py-20 bg-[#1B6AE3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              Join Our Network of Faith Communities
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Over 100 faith communities in Riverside County have united to serve 
              the thousands of children in foster care and families in need of support. 
              Your community can make a difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/faith-partners"
                className="inline-flex items-center gap-2 bg-white text-[#1B6AE3] px-8 py-3 rounded-full font-medium hover:bg-[#FCDB38] hover:text-[#18336B] transition-colors"
              >
                Become a Faith Partner
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/foster-adopt"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#1B6AE3] transition-colors"
              >
                Foster or Adopt
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="font-heading text-[#18336B] text-lg font-semibold mb-1">Build &amp; Support Local Community</p>
              <p className="text-[#273C6B]/70 text-sm">Faith In Motion Collaborative</p>
            </div>
            <div className="flex items-center gap-3 text-[#273C6B]">
              <div className="w-10 h-10 bg-[#1B6AE3]/10 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-[#1B6AE3]" />
              </div>
              <div>
                <div className="text-xs text-[#273C6B]/60">Phone</div>
                <a href="tel:9512285553" className="font-medium hover:text-[#1B6AE3] transition-colors">
                  (951) 228-5553
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[#273C6B]">
              <div className="w-10 h-10 bg-[#1B6AE3]/10 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-[#1B6AE3]" />
              </div>
              <div>
                <div className="text-xs text-[#273C6B]/60">Email</div>
                <a href="mailto:faithinmotion@fosterall.org" className="font-medium hover:text-[#1B6AE3] transition-colors">
                  faithinmotion@fosterall.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
