import { ContentProps } from "../../types/video.type";
import { CHAPTER_TRANSITION_TIME } from "../../constants/constants";
import { Fragment } from "react/jsx-runtime";
import VideoChapter from "./chapter";
import TransitionSeries from "remotion-transition-series";
import { FadeThroughColor } from "./transition/FadeThroughColor";

const MainScene = ({ data }: ContentProps) => {
  return (
    <TransitionSeries>
      {data.map((chapter, index) => {
        return (
          <Fragment key={index}>
            {index !== 0 && (
              <TransitionSeries.Transition
                transitionComponent={FadeThroughColor}
                durationInFrames={CHAPTER_TRANSITION_TIME}
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
              />
            </TransitionSeries.Sequence>
            {index === data.length - 1 && (
              <TransitionSeries.Transition
                transitionComponent={FadeThroughColor}
                durationInFrames={CHAPTER_TRANSITION_TIME}
              />
            )}
          </Fragment>
        );
      })}
    </TransitionSeries>
  );
};

export default MainScene;
