import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "/images/information.png",
    title: "Information",
    description:
      "We provide comprehensive information about foster care and adoption processes in Riverside County to help faith communities understand how they can help.",
    href: "/faith-partners",
  },
  {
    icon: "/images/donation.png",
    title: "Donations",
    description:
      "Faith communities can support children in foster care through targeted donation drives and resource collections that make a direct difference.",
    href: "/faith-partners",
  },
  {
    icon: "/images/guidance.png",
    title: "Guidance",
    description:
      "Our team of foster care experts guides prospective foster parents through the system and connects them with the right agencies for their needs.",
    href: "/foster-adopt",
  },
  {
    icon: "/images/volunteer.png",
    title: "Volunteers",
    description:
      "Mobilize your congregation to volunteer with children and families in need. We connect faith communities with meaningful service opportunities.",
    href: "/faith-partners",
  },
  {
    icon: "/images/community.png",
    title: "Connection",
    description:
      "Join our network of 100+ faith communities united to take an active role in changing the lives of children in foster care across Riverside County.",
    href: "/faith-partners",
  },
  {
    icon: "/images/celebrate.png",
    title: "Celebration",
    description:
      "We celebrate every milestone — from successful adoptions to family reunifications. Every child deserves to be celebrated and loved.",
    href: "/events",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#18336B]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-heading text-[#FCDB38] text-sm uppercase tracking-widest mb-3">
            How We Help
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white">
            We Are Your Guide To Making A Difference In A Child&apos;s Life.
          </h2>
          <p className="mt-4 text-[#CAD9F5] max-w-2xl mx-auto">
            Faith In Motion provides multiple pathways for faith communities to engage and 
            support children in foster care throughout Riverside County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group border border-white/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 flex-shrink-0 bg-white/20 rounded-xl flex items-center justify-center p-2">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="font-heading text-xl text-white mt-2">{service.title}</h3>
              </div>
              <p className="text-[#CAD9F5] text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-1 text-[#FCDB38] text-sm font-medium group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
