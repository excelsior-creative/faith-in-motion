import { Facebook, Instagram, type LucideIcon } from "lucide-react";

export type SiteSocialLink = {
  name: string;
  href: string;
  label: string;
  Icon: LucideIcon;
};

export const siteSocialLinks: readonly SiteSocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/RiversideCountyFaithInMotion",
    label: "Faith In Motion on Facebook",
    Icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/faithinmotion_riverside/",
    label: "Faith In Motion on Instagram",
    Icon: Instagram,
  },
];
