import { VIDEO_WIDTH } from "../../constants/constants";
import { FrameTransitionTiming } from "../../types/content.type";
import {
  useImageMoveAnimation,
  useImageScaleAnimation,
} from "./use-image-frame-template";

export const useOneImageFrameAnimation = (
  timingInFrame: FrameTransitionTiming,
  durationInFrames: number,
) => {
  const { position } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -32,
    50,
    132,
  );

  const { scale } = useImageScaleAnimation(timingInFrame, durationInFrames);

  return { position, scale };
};

export const useTwoImageFrameAnimation = (
  timingInFrame: FrameTransitionTiming,
  durationInFrames: number,
) => {
  const { position } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -500,
    128,
  );

  const { scale } = useImageScaleAnimation(timingInFrame, durationInFrames);

  return {
    position,
    scale,
  };
};

export const useFourImageFrameAnimationStyle1 = (
  timingInFrame: FrameTransitionTiming,
  durationInFrames: number,
) => {
  const { position: positionFirstRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -500,
    128,
    VIDEO_WIDTH,
  );

  const { position: positionSecondRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -500,
    652,
    VIDEO_WIDTH,
  );

  const { scale } = useImageScaleAnimation(timingInFrame, durationInFrames);

  return {
    positionFirstRow,
    positionSecondRow,
    scale,
  };
};

export const useFourImageFrameAnimationStyle2 = (
  timingInFrame: FrameTransitionTiming,
  durationInFrames: number,
) => {
  const { position: positionFirstRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -340,
    120,
    VIDEO_WIDTH,
  );

  const { position: positionSecondRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -320,
    480,
    VIDEO_WIDTH,
  );

  const { position: positionThirdRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -340,
    812,
    VIDEO_WIDTH,
  );

  const { scale } = useImageScaleAnimation(timingInFrame, durationInFrames);

  return {
    positionFirstRow,
    positionSecondRow,
    positionThirdRow,
    scale,
  };
};

export const useFourImageFrameAnimationStyle3 = (
  timingInFrame: FrameTransitionTiming,
  durationInFrames: number,
) => {
  const { position: positionFirstRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -280,
    59,
    VIDEO_WIDTH,
  );

  const { position: positionSecondRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -280,
    353,
    VIDEO_WIDTH,
  );

  const { position: positionThirdRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -280,
    647,
    VIDEO_WIDTH,
  );

  const { position: positionForthRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -280,
    941,
    VIDEO_WIDTH,
  );

  const { scale } = useImageScaleAnimation(timingInFrame, durationInFrames);

  return {
    positionFirstRow,
    positionSecondRow,
    positionThirdRow,
    positionForthRow,
    scale,
  };
};

export const useSixImageFrameAnimationStyle3 = (
  timingInFrame: FrameTransitionTiming,
  durationInFrames: number,
) => {
  const { position: positionFirstRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -390,
    120,
    VIDEO_WIDTH,
  );

  const { position: positionSecondRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -220,
    530,
    VIDEO_WIDTH,
  );

  const { position: positionThirdRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    -390,
    770,
    VIDEO_WIDTH,
  );

  const { position: positionForthRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    VIDEO_WIDTH + 250,
    120,
    -250,
  );

  const { position: positionFifthRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    VIDEO_WIDTH + 500,
    390,
    -500,
  );

  const { position: positionSixthRow } = useImageMoveAnimation(
    timingInFrame,
    durationInFrames,
    VIDEO_WIDTH + 250,
    910,
    -250,
  );

  const { scale } = useImageScaleAnimation(timingInFrame, durationInFrames);

  return {
    positionFirstRow,
    positionSecondRow,
    positionThirdRow,
    positionForthRow,
    positionFifthRow,
    positionSixthRow,
    scale,
  };
};
