import { ContentProps } from "../../types/video.type";
import {
  CHAPTER_TRANSITION_TIME,
  OUTRO_FADE_TIME,
  OUTRO_PREV_PART_TOTAL_LENGTH,
} from "../../constants/constants";
import { Fragment } from "react/jsx-runtime";
import VideoChapter from "./chapter";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { Easing } from "remotion";
import OutroPrevPast from "../Outro/OutroPrevPart";

const MainScene = ({ data, titleStyle }: ContentProps) => {
  return (
    <TransitionSeries>
      {data.map((chapter, index) => {
        return (
          <Fragment key={index}>
            {index !== 0 && (
              <TransitionSeries.Transition
                presentation={slide({
                  direction: "from-right",
                })}
                timing={linearTiming({
                  durationInFrames: CHAPTER_TRANSITION_TIME,
                  easing: Easing.inOut(Easing.poly(4)),
                })}
              />
            )}
            <TransitionSeries.Sequence
              durationInFrames={chapter.durationInFrames}
            >
              <VideoChapter
                title={chapter.title}
                transition={chapter.transition}
                durationInFrames={chapter.durationInFrames}
                frame={chapter.frame}
                index={index}
                titleStyle={titleStyle}
              />
            </TransitionSeries.Sequence>
            {index === data.length - 1 && (
              <>
                <TransitionSeries.Transition
                  presentation={slide({
                    direction: "from-right",
                  })}
                  timing={linearTiming({
                    durationInFrames: OUTRO_FADE_TIME,
                    easing: Easing.inOut(Easing.poly(4)),
                  })}
                />
                <TransitionSeries.Sequence
                  durationInFrames={OUTRO_PREV_PART_TOTAL_LENGTH}
                >
                  <OutroPrevPast />
                </TransitionSeries.Sequence>
              </>
            )}
          </Fragment>
        );
      })}
    </TransitionSeries>
  );
};

export default MainScene;
