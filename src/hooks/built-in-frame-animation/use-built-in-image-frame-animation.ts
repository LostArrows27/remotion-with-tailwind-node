import { Easing, interpolate, useCurrentFrame } from "remotion";
import { BUILT_IN_FADE_IN_TIME } from "../../constants/constants";
import { FrameTransitionTiming } from "../../types/content.type";

export const useOneImageBuiltInFrameAnimation = (
  timingInFrame: FrameTransitionTiming,
) => {
  const frame = useCurrentFrame();

  const moveLeft = interpolate(
    frame,
    [0, timingInFrame.in - 20, timingInFrame.in + BUILT_IN_FADE_IN_TIME - 20],
    [-700, -700, -40],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: Easing.out(Easing.sin),
    },
  );

  const moveRight = interpolate(
    frame,
    [0, timingInFrame.in - 15, timingInFrame.in + BUILT_IN_FADE_IN_TIME - 15],
    [-500, -500, -96],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: Easing.out(Easing.sin),
    },
  );

  const moveDown = interpolate(
    frame,
    [0, timingInFrame.in - 16, timingInFrame.in + BUILT_IN_FADE_IN_TIME - 16],

    [-30, -30, 1],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: Easing.out(Easing.sin),
    },
  );

  const moveUp = interpolate(
    frame,
    [0, timingInFrame.in - 16, timingInFrame.in + BUILT_IN_FADE_IN_TIME - 16],

    [90, 90, 65],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: Easing.out(Easing.sin),
    },
  );

  const moveInImage = interpolate(
    frame,
    [0, timingInFrame.in - 10, timingInFrame.in + BUILT_IN_FADE_IN_TIME - 10],
    [-1240, -1240, 0],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: Easing.out(Easing.sin),
    },
  );

  const yValue = 108.5;

  const moveInImage2 = interpolate(
    frame,
    [0, timingInFrame.in - 10, timingInFrame.in + BUILT_IN_FADE_IN_TIME - 10],
    [yValue, yValue, 0],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: Easing.out(Easing.sin),
    },
  );

  return {
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
    moveInImage,
    moveInImage2,
  };
};

export const useTwoImageBuiltInFrameAnimation = (
  timingInFrame: FrameTransitionTiming,
) => {
  const frame = useCurrentFrame();

  const moveUpNote = interpolate(
    frame,
    [0, timingInFrame.in - 16, timingInFrame.in + BUILT_IN_FADE_IN_TIME - 16],

    [-400, -400, 40],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    },
  );

  return {
    moveUpNote,
  };
};
