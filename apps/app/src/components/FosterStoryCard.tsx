"use client";

import { m } from "framer-motion";
import type { FosterStory } from "@/data/fosterStories";
import { fadeUp, transition } from "@/lib/motion";
import { StoryVideo } from "./StoryVideo";

export function FosterStoryCard({
  story,
  shouldReduceMotion,
  index,
}: {
  story: FosterStory;
  shouldReduceMotion: boolean | null;
  index: number;
}) {
  return (
    <m.article
      className="bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-100 shadow-sm"
      variants={fadeUp}
      transition={transition(index * 0.07)}
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
  );
}
