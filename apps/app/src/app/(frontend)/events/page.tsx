import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Faith In Motion",
  description: "Find upcoming foster care and adoption information events in Riverside County hosted by Faith In Motion.",
};

const upcomingEvents = [
  {
    date: "May 19, 2025",
    day: "19",
    month: "MAY",
    time: "6:00 PM",
    title: "Foster Care and Adoption Info Event – Riverside County",
    location: "Our Lady of The Valley Church",
    address: "Riverside County, CA",
    description: "Join us for an informational evening about foster care and adoption in Riverside County. Learn about the process, requirements, and how Faith In Motion can support you.",
    language: "English",
    featured: true,
  },
  {
    date: "May 12, 2025",
    day: "12",
    month: "MAY",
    time: "6:00 PM",
    title: "Evento informativo sobre adopción y crianza temporal – Coachella Valley",
    location: "Southwest Church",
    address: "Coachella Valley, CA",
    description: "Únase a nosotros para una noche informativa sobre crianza temporal y adopción en el Condado de Riverside. Aprenda sobre el proceso y cómo Faith In Motion puede apoyarle.",
    language: "Español",
    featured: false,
  },
  {
    date: "Upcoming",
    day: "TBD",
    month: "",
    time: "To Be Announced",
    title: "Evento informativo sobre adopción y crianza temporal – Riverside County",
    location: "Riverside County",
    address: "Riverside County, CA",
    description: "Un evento informativo en español sobre crianza temporal y adopción en el Condado de Riverside.",
    language: "Español",
    featured: false,
  },
];

export default function EventsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#18336B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src="/images/hero-bg.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-heading text-[#FCDB38] text-sm uppercase tracking-widest mb-4">
            Community Events
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">
            Upcoming Events
          </h1>
          <p className="text-[#CAD9F5] text-lg max-w-2xl mx-auto">
            Find foster care and adoption information events in your area. 
            All events are free and open to the community.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Event Filter Tabs */}
      <section className="py-8 bg-white border-b border-[#18336B]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-3">
            <button className="bg-[#1B6AE3] text-white px-4 py-2 rounded-full text-sm font-medium">
              All Events
            </button>
            <button className="bg-[#18336B]/10 text-[#18336B] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#18336B]/20 transition-colors">
              Upcoming
            </button>
            <button className="bg-[#18336B]/10 text-[#18336B] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#18336B]/20 transition-colors">
              Past Events
            </button>
            <button className="bg-[#18336B]/10 text-[#18336B] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#18336B]/20 transition-colors">
              En Español
            </button>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="space-y-6">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border ${event.featured ? 'border-[#1B6AE3]/30' : 'border-[#18336B]/5'}`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Date Block */}
                  <div className={`flex-shrink-0 ${event.featured ? 'bg-[#1B6AE3]' : 'bg-[#18336B]'} text-white p-6 flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px]`}>
                    {event.month && (
                      <div className="font-heading text-xs uppercase tracking-widest opacity-80 mb-1">
                        {event.month}
                      </div>
                    )}
                    <div className="font-heading text-4xl md:text-5xl">
                      {event.day}
                    </div>
                    {event.language !== "English" && (
                      <div className="text-xs mt-2 bg-white/20 px-2 py-0.5 rounded-full">
                        {event.language}
                      </div>
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="flex-grow p-6 md:p-8">
                    {event.featured && (
                      <span className="inline-block bg-[#FCDB38] text-[#18336B] text-xs font-heading px-3 py-1 rounded-full mb-3">
                        Featured Event
                      </span>
                    )}
                    <h3 className="font-heading text-xl md:text-2xl text-[#18336B] mb-3">
                      {event.title}
                    </h3>
                    <p className="text-[#273C6B]/70 leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-[#273C6B]/60">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-[#1B6AE3]" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-[#1B6AE3]" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-[#1B6AE3]" />
                        {event.date}
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex-shrink-0 p-6 md:p-8 flex items-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#1B6AE3] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1F4083] transition-colors whitespace-nowrap"
                    >
                      RSVP
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No More Events */}
          <div className="mt-12 text-center py-12 bg-white rounded-2xl border border-[#18336B]/5">
            <Calendar className="h-12 w-12 text-[#1B6AE3]/30 mx-auto mb-4" />
            <h3 className="font-heading text-xl text-[#18336B] mb-2">More Events Coming Soon</h3>
            <p className="text-[#273C6B]/60 mb-6">
              Sign up to be notified about upcoming events in your area.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#18336B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1F4083] transition-colors"
            >
              Get Notified
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Host an Event CTA */}
      <section className="py-16 bg-[#18336B]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Want to Host an Event at Your Church?
          </h2>
          <p className="text-[#CAD9F5] max-w-xl mx-auto mb-8">
            Faith In Motion can bring an informational event to your faith community. 
            Contact us to schedule a presentation about foster care and adoption.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:9512285553"
              className="inline-flex items-center gap-2 bg-white text-[#18336B] px-6 py-3 rounded-full font-medium hover:bg-[#FCDB38] transition-colors"
            >
              <Phone className="h-4 w-4" />
              (951) 228-5553
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#18336B] transition-colors"
            >
              Request an Event
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
