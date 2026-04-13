"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { Play } from "lucide-react";
import type { FosterStory } from "@/data/fosterStories";
import { EASE } from "@/lib/motion";

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
              className="relative flex h-14 w-14 items-center justify-center rounded-full border-0 bg-transparent text-white transition-transform duration-300 ease-out hover:scale-105 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:scale-100 md:h-16 md:w-16"
              style={{ boxShadow: "0 0 0 2px white" }}
              aria-hidden
            >
              <Play
                className="h-7 w-7 translate-x-0.5 drop-shadow md:h-8 md:w-8"
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
