import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "100+ faith communities united for children",
  "Expert guidance through the foster care system",
  "Connection with the right foster family agencies",
  "Ongoing support for foster and adoptive families",
  "Community events and celebration of milestones",
];

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/images/recruit-photo.png"
                alt="Faith community working together for foster children"
                width={600}
                height={500}
                className="w-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#FCDB38] rounded-2xl p-4 shadow-lg">
              <div className="font-heading text-[#18336B]">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm">Faith Communities</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-heading text-[#1B6AE3] text-sm uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#18336B] mb-6">
              Faith in Motion is a faith-based organization working in Riverside County
            </h2>
            <p className="text-[#273C6B]/80 leading-relaxed mb-6">
              We help faith communities take an active role in supporting children in foster care. 
              From the days of the Orphan Trains to today, faith communities have always stepped 
              up to care for children in need. We continue that tradition.
            </p>
            <p className="text-[#273C6B]/80 leading-relaxed mb-8">
              The Department of Public Social Services (DPSS) instituted the Faith In Motion 
              Collaborative in 2013. It has grown in size, outreach, and resources with faith 
              partners who have provided support activities across the county.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#273C6B]">
                  <CheckCircle className="h-5 w-5 text-[#1B6AE3] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/faith-partners"
              className="inline-flex items-center gap-2 bg-[#18336B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1F4083] transition-colors"
            >
              Join Our Network
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
