export const transitionEffects = [
  {
    in: "slide-from-left",
    out: "slide-to-right",
  },
  {
    in: "slide-in-from-2-side",
    out: "slide-out-from-2-side",
  },
  {
    in: "zoom-in",
    out: "zoom-out",
  },
] as const;

export const MIN_CONFIDENCE = 0.2;

export const MAX_IMAGE_PER_FRAME = 6;

export const MAX_EVENT_FRAME = 2;
