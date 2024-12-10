import { ContentProps } from "../../types/video.type";
import { CHAPTER_TRANSITION_TIME } from "../../constants/constants";
import { Fragment } from "react/jsx-runtime";
import VideoChapter from "./chapter";
import { springTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { random } from "remotion";

const MainScene = ({ data }: ContentProps) => {
  // NOTE: choose a style for all titles
  const titleStyle = Math.floor(random(null) * 2);

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
                timing={springTiming({
                  config: {
                    damping: 200,
                  },
                  durationInFrames: CHAPTER_TRANSITION_TIME,
                  durationRestThreshold: 0.001,
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
              <TransitionSeries.Transition
                presentation={slide({
                  direction: "from-right",
                })}
                timing={springTiming({
                  config: {
                    damping: 200,
                  },
                  durationInFrames: CHAPTER_TRANSITION_TIME,
                  durationRestThreshold: 0.001,
                })}
              />
            )}
          </Fragment>
        );
      })}
    </TransitionSeries>
  );
};

export default MainScene;
