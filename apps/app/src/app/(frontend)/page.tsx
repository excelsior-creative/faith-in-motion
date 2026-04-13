import React from "react";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { StoriesSection } from "@/components/StoriesSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ImpactStats />
      <ServicesSection />
      <AboutSection />
      <StoriesSection />
      <CTASection />
    </div>
  );
}
