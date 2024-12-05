export const transitionEffects = [
  {
    in: "slide-from-left",
    out: "slide-to-right",
    type: "self-built",
  },
  {
    in: "slide-in-from-2-side",
    out: "slide-out-from-2-side",
    type: "self-built",
  },
  {
    in: "zoom-in",
    out: "zoom-out",
    type: "self-built",
  },

  // remotion-transitions
  // 1. slide()
  {
    in: "slide-from-left",
    out: "slide-to-right",
    type: "remotion-transitions",
  },
  {
    in: "slide-from-right",
    out: "slide-to-left",
    type: "remotion-transitions",
  },
  {
    in: "slide-from-top",
    out: "slide-to-bottom",
    type: "remotion-transitions",
  },
  {
    in: "slide-from-bottom",
    out: "slide-to-top",
    type: "remotion-transitions",
  },
  // 2. Fadethroughcolor -> remotion-transition-series
  {
    in: "fade-through-color",
    out: "fade-through-color",
    type: "remotion-transitions",
  },
  // 3. light leak
  {
    in: "light-leak",
    out: "light-leak",
    type: "remotion-transitions",
  },
] as const;

export const MIN_CONFIDENCE = 0.2;

export const MAX_IMAGE_PER_FRAME = 6;

export const MAX_EVENT_FRAME = 2;
