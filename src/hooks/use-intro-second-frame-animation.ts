import { useCurrentFrame, interpolate, Easing } from "remotion";
import { INTRO_SECOND_SCENE_TRANSITION_TIME } from "../constants/constants";

export const useIntroSecondFrameAnimation = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, INTRO_SECOND_SCENE_TRANSITION_TIME],
    [0, 1],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    },
  );

  const scale = interpolate(
    frame,
    [0, INTRO_SECOND_SCENE_TRANSITION_TIME],
    [0.6, 1],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: Easing.out(Easing.poly(5)),
    },
  );

  return { opacity, scale };
};
