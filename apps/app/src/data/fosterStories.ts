export const fosterStories = [
  {
    name: "Bryanna",
    title: "Bryanna's Story",
    role: "Adoptee",
    tagline: "Adopted as a child and is now in college",
    accent: "#1B6AE3",
    poster:
      "https://faithinmotionrivco.org/wp-content/uploads/2022/03/Screen-Shot-2022-03-10-at-4.02.12-PM.png",
    src: "https://faithinmotionrivco.org/wp-content/uploads/2022/03/fosterall_bryanna_100_nosubtitles_nowebsite-1080p.mp4",
  },
  {
    name: "Lara",
    title: "Lara's Story",
    role: "Foster parent",
    tagline: "Currently fostering — learn about her journey",
    accent: "#F94F1E",
    poster:
      "https://faithinmotionrivco.org/wp-content/uploads/2022/03/Screen-Shot-2022-03-10-at-4.03.22-PM.png",
    src: "https://faithinmotionrivco.org/wp-content/uploads/2022/03/fosterall_lara_100_nosubtitles_nowebsite-1080p.mp4",
  },
  {
    name: "Mayelli",
    title: "Mayelli's Story",
    role: "Adoptee",
    tagline: "A teenager who was recently adopted",
    accent: "#1B6AE3",
    poster:
      "https://faithinmotionrivco.org/wp-content/uploads/2022/03/Screen-Shot-2022-03-10-at-4.04.46-PM.png",
    src: "https://faithinmotionrivco.org/wp-content/uploads/2022/03/fosterall_mayelli_100_nosubtitles_nowebsite-1080p.mp4",
  },
  {
    name: "Noemi",
    title: "Noemi's Story",
    role: "Foster parent",
    tagline: "Foster mother to 100+ children over the years",
    accent: "#18336B",
    poster:
      "https://faithinmotionrivco.org/wp-content/uploads/2022/03/WIP-Social-Media-Post-3.png",
    src: "https://faithinmotionrivco.org/wp-content/uploads/2022/03/foster_care_stories_-_noemi.mp4-1080p.mp4",
  },
] as const;

export type FosterStory = (typeof fosterStories)[number];
