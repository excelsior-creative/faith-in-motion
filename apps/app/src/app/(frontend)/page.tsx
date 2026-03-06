import React from "react";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ImpactStats />
      <AboutSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
}
