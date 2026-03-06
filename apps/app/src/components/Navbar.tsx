"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";

const navbarItems = [
  { name: "Faith Partners", path: "/faith-partners" },
  { name: "Foster/Adopt", path: "/foster-adopt" },
  { name: "Events", path: "/events" },
  { name: "Contact Us", path: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Faith In Motion"
              width={200}
              height={40}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navbarItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "font-heading text-sm font-medium transition-colors relative group",
                  pathname === item.path
                    ? "text-[#1B6AE3]"
                    : "text-[#273C6B] hover:text-[#1B6AE3]"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-[#1B6AE3] transition-all duration-300",
                  pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:9512285553"
              className="flex items-center gap-2 bg-[#1B6AE3] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1F4083] transition-colors"
            >
              <Phone className="h-4 w-4" />
              (951) 228-5553
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#273C6B]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4 max-w-7xl mx-auto">
              {navbarItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-heading text-lg py-2 border-b border-gray-100",
                    pathname === item.path
                      ? "text-[#1B6AE3] font-semibold"
                      : "text-[#273C6B]"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:9512285553"
                className="flex items-center justify-center gap-2 bg-[#1B6AE3] text-white py-3 rounded-full font-medium mt-2"
              >
                <Phone className="h-4 w-4" />
                (951) 228-5553
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
