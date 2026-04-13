"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  transition,
  VIEWPORT_MARGIN,
  EASE,
} from "@/lib/motion";

const stories = [
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

type Story = (typeof stories)[number];

function StoryVideo({
  story,
  shouldReduceMotion,
}: {
  story: Story;
  shouldReduceMotion: boolean | null;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const revealAndPlay = useCallback(() => {
    setShowOverlay(false);
    const el = videoRef.current;
    if (el) void el.play();
  }, []);

  const exitDuration = shouldReduceMotion ? 0 : 0.35;

  return (
    <div className="relative aspect-video shrink-0 bg-[#0a1628]">
      <video
        ref={videoRef}
        className={
          showOverlay
            ? "pointer-events-none absolute inset-0 h-full w-full object-contain"
            : "absolute inset-0 h-full w-full object-contain"
        }
        controls={!showOverlay}
        controlsList="nodownload"
        preload="metadata"
        playsInline
        onPlay={() => setShowOverlay(false)}
        aria-label={`${story.title}: ${story.tagline}`}
      >
        <source src={story.src} type="video/mp4" />
      </video>

      <AnimatePresence>
        {showOverlay && (
          <m.button
            key="overlay"
            type="button"
            aria-label={`Play video: ${story.title}`}
            className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center border-0 p-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: exitDuration,
              ease: EASE,
            }}
            onClick={revealAndPlay}
          >
            <span className="absolute inset-0">
              <span className="relative block h-full w-full">
                <Image
                  src={story.poster}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  loading="lazy"
                />
              </span>
            </span>
            <span
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20"
              aria-hidden
            />
            <span
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#18336B] shadow-lg ring-1 ring-white/30 transition-transform duration-300 ease-out hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B6AE3] motion-reduce:transition-none motion-reduce:hover:scale-100 md:h-16 md:w-16"
              aria-hidden
            >
              <Play
                className="h-7 w-7 translate-x-0.5 md:h-8 md:w-8"
                strokeWidth={2}
                aria-hidden
              />
            </span>
          </m.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export const StoriesSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <section className="py-20 md:py-28 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <m.div
          className="mb-12 md:mb-14"
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: VIEWPORT_MARGIN }}
          variants={fadeUp}
          transition={transition(0)}
        >
          <p className="text-[#1B6AE3] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Real Families
          </p>
          <h2 className="font-display font-bold text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] text-[#18336B] max-w-xl text-balance">
            Stories that make the work real
          </h2>
          <p className="mt-4 text-[#273C6B]/70 text-sm md:text-base max-w-2xl text-pretty">
            Hear directly from families in Riverside County — the same videos
            featured on our foster and adopt page.
          </p>
        </m.div>

        <m.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: VIEWPORT_MARGIN }}
          variants={staggerContainer}
        >
          {stories.map((story, i) => (
            <m.article
              key={story.name}
              className="bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-100 shadow-sm"
              variants={fadeUp}
              transition={transition(i * 0.07)}
            >
              <StoryVideo story={story} shouldReduceMotion={shouldReduceMotion} />

              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <div
                  className="h-1 w-10 rounded-full mb-4 shrink-0"
                  style={{ backgroundColor: story.accent }}
                  aria-hidden
                />
                <h3 className="font-display font-bold text-[#18336B] text-base leading-tight">
                  {story.title}
                </h3>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mt-1"
                  style={{ color: story.accent }}
                >
                  {story.role}
                </p>
                <p className="text-[#273C6B]/65 text-sm leading-relaxed mt-3 text-pretty italic">
                  {story.tagline}
                </p>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
};
