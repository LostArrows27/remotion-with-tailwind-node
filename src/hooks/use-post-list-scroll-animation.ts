// 1 post length = 238px
// speed -> 3 -> total can scroll 180 * 3 = 540px
// -> total can see 3-4 image in a row
// -> for 7 rows need at least 6 image in view = 6 * 7 = 42 image

// up -> stick to top -> translateY decrease
// down -> stick to bottom -> translateY increase

import { useCurrentFrame } from "remotion";
import {
  INTRO_POST_SCROLL_DOWN_INIT,
  INTRO_POST_SCROLL_SPEED,
} from "../constants/constants";

export const usePostListScrollAnimation = (direction: "up" | "down") => {
  const frame = useCurrentFrame();

  if (direction === "up") {
    return `translateY(${INTRO_POST_SCROLL_DOWN_INIT + frame * INTRO_POST_SCROLL_SPEED}px)`;
  }

  return `translateY(-${frame * INTRO_POST_SCROLL_SPEED}px)`;
};
