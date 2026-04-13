"use client";

import type { FosterStory } from "@/data/fosterStories";
import { EASE } from "@/lib/motion";
import { AnimatePresence, m } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export function StoryVideo({
  story,
  shouldReduceMotion,
}: {
  story: FosterStory;
  shouldReduceMotion: boolean | null;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const revealAndPlay = useCallback(() => {
    setShowOverlay(false);
  }, []);

  // Play after video mounts (when overlay is dismissed)
  useEffect(() => {
    if (!showOverlay && videoRef.current) {
      void videoRef.current.play();
    }
  }, [showOverlay]);

  const exitDuration = shouldReduceMotion ? 0 : 0.35;

  return (
    <div className="relative aspect-video shrink-0 bg-[#0a1628]">
      {/* Only mount the video after the overlay is dismissed —
          no <video> in the DOM means Chrome can't attach its native play overlay */}
      {!showOverlay && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-contain"
          controls
          controlsList="nodownload"
          playsInline
          aria-label={`${story.title}: ${story.tagline}`}
        >
          <source src={story.src} type="video/mp4" />
        </video>
      )}

      <AnimatePresence>
        {showOverlay && (
          <m.button
            key="overlay"
            type="button"
            aria-label={`Play video: ${story.title}`}
            className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center border-0 bg-[#0a1628] p-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: exitDuration, ease: EASE }}
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
                  loading="eager"
                />
              </span>
            </span>
            <span
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20"
              aria-hidden
            />
            <span
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#18336B] shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:scale-100 md:h-16 md:w-16"
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
