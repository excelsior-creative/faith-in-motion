export const EASE = [0.22, 1, 0.36, 1] as const;
export const DURATION = 0.55;
export const STAGGER = 0.07;
export const VIEWPORT_MARGIN = "-80px";

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER },
  },
};

export function transition(delay = 0) {
  return { duration: DURATION, delay, ease: EASE };
}
