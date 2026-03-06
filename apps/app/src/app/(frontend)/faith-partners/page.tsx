import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Heart, BookOpen, Gift, MessageCircle, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith Partners | Faith In Motion",
  description: "Join our network of 100+ faith communities across Riverside County working together to support children in foster care.",
};

const ways = [
  {
    icon: BookOpen,
    title: "Information",
    description: "Host informational sessions about foster care for your congregation. We provide speakers, materials, and resources to help your community understand the needs of children in foster care.",
  },
  {
    icon: Gift,
    title: "Donations",
    description: "Organize donation drives for children in foster care. Items like hygiene products, clothing, school supplies, and household goods make a direct impact on children's lives.",
  },
  {
    icon: Users,
    title: "Volunteers",
    description: "Mobilize your congregation to volunteer with children and families. From tutoring to mentorship to practical help, your community members can make lasting connections.",
  },
  {
    icon: Heart,
    title: "Support Groups",
    description: "Host support groups for foster and adoptive families at your facility. Providing a welcoming space for families builds community and reduces isolation.",
  },
  {
    icon: MessageCircle,
    title: "Connection",
    description: "Become part of the dialogue about foster care with the County of Riverside. Faith partners have a voice in shaping how children in foster care are served.",
  },
  {
    icon: Star,
    title: "Celebration",
    description: "Celebrate milestones with foster youth and families — birthdays, adoptions, graduations. Your community can be the support system every child deserves.",
  },
];

export default function FaithPartnersPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#18336B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src="/images/hero-bg.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-heading text-[#FCDB38] text-sm uppercase tracking-widest mb-4">
            Get Involved
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">
            We Provide Ways for Faith Communities to Take an Active Role
            <br className="hidden md:block" />
            <span className="text-[#FCDB38]"> in the Lives of Children in Your Community</span>
          </h1>
          <p className="text-[#CAD9F5] text-lg max-w-2xl mx-auto">
            Join our Faith Partner Collaborative and make a difference in a child&apos;s life!
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="text-center">
              <div className="font-heading text-4xl text-[#1B6AE3]">100+</div>
              <div className="text-[#273C6B]/70 text-sm">Faith Communities Have United</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#18336B]/20" />
            <div className="text-center max-w-lg">
              <p className="text-[#273C6B]">
                Become a part of the dialogue about foster care with the County of Riverside 
                to take an active role in changing the lives of children in foster care.
              </p>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#18336B]/20" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1B6AE3] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1F4083] transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Examples of Collaboration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-[#1B6AE3] text-sm uppercase tracking-widest mb-3">
              How You Can Help
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#18336B]">
              Examples of Faith Partner Collaboration
            </h2>
            <p className="mt-4 text-[#273C6B]/70 max-w-2xl mx-auto">
              Explore how your faith community can get involved below. There are many ways 
              to make a meaningful difference in the lives of children in foster care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ways.map((way) => {
              const Icon = way.icon;
              return (
                <div
                  key={way.title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#18336B]/5"
                >
                  <div className="w-12 h-12 bg-[#1B6AE3]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#1B6AE3]" />
                  </div>
                  <h3 className="font-heading text-xl text-[#18336B] mb-3">{way.title}</h3>
                  <p className="text-[#273C6B]/70 leading-relaxed">{way.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Riverside County Partnership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-[#18336B]/5 rounded-3xl p-8 md:p-12">
            <div className="flex-shrink-0">
              <Image
                src="/images/riverside-county.png"
                alt="Riverside County"
                width={160}
                height={160}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <h3 className="font-heading text-2xl text-[#18336B] mb-3">
                Official Riverside County Partnership
              </h3>
              <p className="text-[#273C6B]/80 leading-relaxed">
                Faith In Motion is an official collaborative with the Riverside County Department 
                of Public Social Services (DPSS). Since 2013, we have been the bridge between 
                faith communities and county foster care services, ensuring children and families 
                receive the support they need.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Official DPSS Partner", "Since 2013", "Riverside County Certified"].map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5 bg-[#1B6AE3]/10 text-[#1B6AE3] px-3 py-1 rounded-full text-sm">
                    <CheckCircle className="h-3.5 w-3.5" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B6AE3]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to learn how your faith community can become a Faith Partner 
            and start changing the lives of children in Riverside County.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1B6AE3] px-8 py-3 rounded-full font-medium hover:bg-[#FCDB38] hover:text-[#18336B] transition-colors"
          >
            Contact Us Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
