import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Faith Partners", path: "/faith-partners" },
  { name: "Foster/Adopt", path: "/foster-adopt" },
  { name: "Events", path: "/events" },
  { name: "Contact Us", path: "/contact" },
];

const resources = [
  { name: "Riverside County DPSS", path: "https://www.rivcodpss.org/", external: true },
  { name: "Foster Family Agencies", path: "/foster-adopt" },
  { name: "Donate", path: "/faith-partners" },
  { name: "Volunteer", path: "/faith-partners" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#18336B] text-[#CAD9F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Faith In Motion"
              width={200}
              height={40}
              className="h-12 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-[#CAD9F5]/80 text-sm leading-relaxed mb-6 max-w-sm">
              Faith In Motion is a collaborative of faith communities across Riverside County 
              working together for the wellbeing of children in foster care and prospective families.
            </p>
            <div className="space-y-3">
              <a href="tel:9512285553" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-[#1B6AE3]" />
                (951) 228-5553
              </a>
              <a href="mailto:faithinmotion@fosterall.org" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-[#1B6AE3]" />
                faithinmotion@fosterall.org
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-[#1B6AE3] flex-shrink-0 mt-0.5" />
                <span>3752 Elizabeth St, Ste D2, Riverside, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm text-[#CAD9F5]/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading text-white text-sm uppercase tracking-widest mb-5">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-[#CAD9F5]/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Riverside County Logo */}
            <div className="mt-8">
              <p className="text-xs text-[#CAD9F5]/50 mb-3 uppercase tracking-widest">Official Partner</p>
              <Image
                src="/images/riverside-county.png"
                alt="Riverside County"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#CAD9F5]/50 text-center md:text-left">
            © {new Date().getFullYear()} Faith In Motion. All rights reserved. | An official collaborative with Riverside County DPSS.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="text-[#CAD9F5]/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#CAD9F5]/50 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
