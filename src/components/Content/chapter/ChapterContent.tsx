import { AbsoluteFill } from "remotion";
import { Frame } from "../../../types/frame.type";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import {
  CHAPTER_TRANSITION_TIME,
  FRAME_TRANSITION_TIME,
  TITLE_TRANSITION_TIME,
} from "../../../constants/constants";
import { Fragment } from "react/jsx-runtime";
import { calculateFrameDuration } from "../../../utils/calculate-video-timeline";
import { Letter } from "../../Test/Letter";

const ChapterContent = ({ frames }: { frames: Frame[] }) => {
  return (
    <TransitionSeries>
      {frames.map((frame, index) => {
        const frameTotalDuration =
          calculateFrameDuration(frame, index, frames.length) +
          (index === 0 ? TITLE_TRANSITION_TIME : 0) +
          (index === frames.length - 1 ? CHAPTER_TRANSITION_TIME : 0);

        return (
          <Fragment key={index}>
            <TransitionSeries.Sequence durationInFrames={frameTotalDuration}>
              <AbsoluteFill key={index}>
                <Letter color="black">
                  {frame.images.length +
                    "-" +
                    frame.category +
                    "-" +
                    frame.type}
                </Letter>
              </AbsoluteFill>
            </TransitionSeries.Sequence>
            {index !== frames.length - 1 && (
              <TransitionSeries.Transition
                presentation={slide({
                  direction: "from-right",
                })}
                timing={linearTiming({
                  durationInFrames: FRAME_TRANSITION_TIME,
                })}
              />
            )}
          </Fragment>
        );
      })}
    </TransitionSeries>
  );
};

export default ChapterContent;
