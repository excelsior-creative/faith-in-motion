import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users, CheckCircle, Phone, Mail, Star } from "lucide-react";
import type { Metadata } from "next";
import { SectionReveal } from "@/components/SectionReveal";
import { FosterAdoptSteps, FosterAdoptStories } from "./FosterAdoptAnimated";

export const metadata: Metadata = {
  title: "Foster & Adopt | Faith In Motion",
  description: "Faith In Motion guides prospective foster and adoptive parents through the process in Riverside County. Learn how to change a child's life.",
};

const steps = [
  {
    number: "01",
    title: "Reach Out to Us",
    description: "Contact Faith In Motion to start your journey. Our team will answer your questions and provide initial information about the process.",
  },
  {
    number: "02",
    title: "Learn About Foster Care",
    description: "We provide comprehensive information about the foster care approval process, what to expect, and how to prepare your family.",
  },
  {
    number: "03",
    title: "Connect with the Right Agency",
    description: "We connect you with the foster family agency that best suits your needs and circumstances in Riverside County.",
  },
  {
    number: "04",
    title: "Complete the Approval Process",
    description: "We guide you through training, home study, background checks, and all requirements to become an approved foster or adoptive parent.",
  },
  {
    number: "05",
    title: "Receive Ongoing Support",
    description: "After placement, Faith In Motion continues to support your family through our network of faith communities and resources.",
  },
];

const stories = [
  {
    name: "Bryanna's Story",
    description: "Adopted as a child and is now in college",
    role: "Adoptee",
  },
  {
    name: "Lara's Story",
    description: "Currently fostering — learn about her journey",
    role: "Foster Parent",
  },
  {
    name: "Mayelli's Story",
    description: "A teenager who was recently adopted",
    role: "Adoptee",
  },
  {
    name: "Noemi's Story",
    description: "Foster mother to 100+ children over the years",
    role: "Foster Parent",
  },
];

const whyItems = [
  { icon: Heart, label: "Compassion", desc: "Children need loving, stable homes" },
  { icon: Users, label: "Support", desc: "You won't be alone in this journey" },
  { icon: Star, label: "Impact", desc: "Change a child's life forever" },
  { icon: CheckCircle, label: "Guidance", desc: "Expert help every step of the way" },
];

export default function FosterAdoptPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#18336B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src="/images/hero-bg.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-heading text-[#FCDB38] text-sm uppercase tracking-widest mb-4 animate-fade-up [animation-delay:80ms]">
            Change A Life
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-6 animate-fade-up [animation-delay:160ms]">
            Change A Child&apos;s Life
          </h1>
          <p className="text-[#CAD9F5] text-lg max-w-2xl mx-auto animate-fade-up [animation-delay:240ms]">
            Every day children and teens are removed from their homes through no fault of their own. 
            You can make a difference by becoming a foster or adoptive parent.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Why Foster/Adopt */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <p className="font-heading text-[#1B6AE3] text-sm uppercase tracking-widest mb-3">
                Why It Matters
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-[#18336B] mb-6">
                Working With Faith in Motion
              </h2>
              <p className="text-[#273C6B]/80 leading-relaxed mb-6">
                Faith In Motion&apos;s team of foster care experts guides prospective foster parents 
                through the foster care system. We provide information on the foster care approval 
                process and then connect you with the foster family agency that best suits your needs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Expert guidance through the entire process",
                  "Connection with approved Riverside County agencies",
                  "Ongoing support from our faith community network",
                  "Free information and resources",
                  "Bilingual support available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#273C6B]">
                    <CheckCircle className="h-5 w-5 text-[#1B6AE3] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F94F1E] text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors"
                >
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:9512285553"
                  className="inline-flex items-center gap-2 border-2 border-[#18336B] text-[#18336B] px-6 py-3 rounded-full font-medium hover:bg-[#18336B] hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call Us Now
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {whyItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-[#18336B]/5 rounded-2xl p-6 text-center">
                      <div className="w-12 h-12 bg-[#1B6AE3] rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="font-heading text-[#18336B] font-semibold mb-1">{item.label}</div>
                      <div className="text-sm text-[#273C6B]/70">{item.desc}</div>
                    </div>
                  );
                })}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-[#18336B]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionReveal className="text-center mb-14">
            <p className="font-heading text-[#FCDB38] text-sm uppercase tracking-widest mb-3">
              The Process
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-white">
              How It Works
            </h2>
            <p className="mt-4 text-[#CAD9F5] max-w-2xl mx-auto">
              Faith In Motion simplifies the path to becoming a foster or adoptive parent. 
              Here&apos;s what to expect when you work with us.
            </p>
          </SectionReveal>

          <FosterAdoptSteps steps={steps} />
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionReveal className="text-center mb-12">
            <p className="font-heading text-[#1B6AE3] text-sm uppercase tracking-widest mb-3">
              Real Families
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#18336B]">
              Foster Care and Adoption Stories
            </h2>
          </SectionReveal>

          <FosterAdoptStories stories={stories} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F94F1E]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl text-white mb-2">
                  Ready to Change a Child&apos;s Life?
                </h2>
                <p className="text-white/80">Contact us today to start your foster or adoption journey.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:9512285553"
                  className="inline-flex items-center gap-2 bg-white text-[#F94F1E] px-6 py-3 rounded-full font-medium hover:bg-[#FCDB38] hover:text-[#18336B] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (951) 228-5553
                </a>
                <a
                  href="mailto:faithinmotion@fosterall.org"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#F94F1E] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
