import React from "react";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Faith In Motion",
  description: "Connect with Faith In Motion. Call us at (951) 228-5553 or email faithinmotion@fosterall.org. We're here to help.",
};

export const revalidate = 3600;

export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#18336B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src="/images/hero-bg.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-heading text-[#FCDB38] text-sm uppercase tracking-widest mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">
            We Want to Connect With You!
          </h1>
          <p className="text-[#CAD9F5] text-lg max-w-2xl mx-auto">
            Please call our team, send us an email, or fill out the form below for more information.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl text-[#18336B] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1B6AE3] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-heading text-[#18336B] font-semibold mb-0.5">Phone</div>
                    <a href="tel:9512285553" className="text-[#1B6AE3] text-lg hover:text-[#1F4083] transition-colors font-medium">
                      (951) 228-5553
                    </a>
                    <p className="text-sm text-[#273C6B]/60 mt-0.5">Monday – Friday, 9AM to 5PM PT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1B6AE3] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-heading text-[#18336B] font-semibold mb-0.5">Email</div>
                    <a href="mailto:faithinmotion@fosterall.org" className="text-[#1B6AE3] hover:text-[#1F4083] transition-colors font-medium">
                      faithinmotion@fosterall.org
                    </a>
                    <p className="text-sm text-[#273C6B]/60 mt-0.5">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1B6AE3] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-heading text-[#18336B] font-semibold mb-0.5">Address</div>
                    <p className="text-[#273C6B] font-medium">3752 Elizabeth St</p>
                    <p className="text-[#273C6B]">Ste D2</p>
                    <p className="text-[#273C6B]">Riverside, CA 92506</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1B6AE3] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-heading text-[#18336B] font-semibold mb-0.5">Office Hours</div>
                    <p className="text-[#273C6B]">Monday – Friday</p>
                    <p className="text-[#273C6B]">9:00 AM – 5:00 PM PT</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA Cards */}
              <div className="space-y-4">
                <div className="bg-[#18336B]/5 rounded-2xl p-5 border border-[#18336B]/10">
                  <div className="font-heading text-[#18336B] font-semibold mb-1">
                    Interested in Fostering or Adopting?
                  </div>
                  <p className="text-sm text-[#273C6B]/70">
                    Call us or fill out the form and our foster care experts will guide you through the process.
                  </p>
                </div>
                <div className="bg-[#1B6AE3]/5 rounded-2xl p-5 border border-[#1B6AE3]/10">
                  <div className="font-heading text-[#1B6AE3] font-semibold mb-1">
                    Faith Community Leader?
                  </div>
                  <p className="text-sm text-[#273C6B]/70">
                    Contact us to learn how your congregation can become a Faith Partner and support children in your community.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
              <h2 className="font-heading text-2xl text-[#18336B] mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
