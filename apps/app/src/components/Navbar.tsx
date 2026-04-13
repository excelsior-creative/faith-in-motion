"use client";

import { DURATION, EASE } from "@/lib/motion";
import { siteSocialLinks } from "@/lib/siteSocialLinks";
import { cn } from "@/lib/utils";
import { AnimatePresence, m } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navbarItems = [
  { name: "Faith Partners", path: "/faith-partners" },
  { name: "Foster/Adopt", path: "/foster-adopt" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
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
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-4">
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
                aria-current={pathname === item.path ? "page" : undefined}
                className={cn(
                  "font-display text-sm font-semibold transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6AE3] focus-visible:ring-offset-2 rounded-sm",
                  pathname === item.path
                    ? "text-[#1B6AE3]"
                    : "text-[#273C6B] hover:text-[#1B6AE3]",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-[#1B6AE3] transition-all duration-300",
                    pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Social + phone */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-0.5 pr-1 border-r border-gray-200 mr-1">
              {siteSocialLinks.map(({ name, href, label, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-[#273C6B] hover:text-[#1B6AE3] hover:bg-[#1B6AE3]/8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6AE3] focus-visible:ring-offset-2"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
            <a
              href="tel:9512285553"
              className="flex items-center gap-2 bg-[#1B6AE3] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1F4083] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6AE3] focus-visible:ring-offset-2"
            >
              <Phone className="h-4 w-4 shrink-0" />
              (951) 228-5553
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#273C6B] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6AE3]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
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
            transition={{ duration: DURATION * 0.7, ease: EASE }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4 max-w-7xl mx-auto">
              {navbarItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === item.path ? "page" : undefined}
                  className={cn(
                    "font-display text-lg py-2 border-b border-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6AE3] rounded-sm",
                    pathname === item.path
                      ? "text-[#1B6AE3] font-bold"
                      : "text-[#273C6B] font-semibold",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-center gap-1 pt-2">
                {siteSocialLinks.map(({ name, href, label, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    onClick={() => setIsOpen(false)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-[#273C6B] hover:text-[#1B6AE3] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6AE3] focus-visible:ring-offset-2"
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </a>
                ))}
              </div>
              <a
                href="tel:9512285553"
                className="flex items-center justify-center gap-2 bg-[#1B6AE3] text-white py-3 rounded-xl font-semibold mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6AE3] focus-visible:ring-offset-2"
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
