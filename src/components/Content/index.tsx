import { AbsoluteFill } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { ContentProps } from "../../types/video.type";
import { CHAPTER_TRANSITION_TIME } from "../../constants/constants";
import { Fragment } from "react/jsx-runtime";
import VideoChapter from "./chapter";

// TODO: random presentation function

// NOTE: chapter = title + transition + (content = frame + transition)
const MainScene = ({ data }: ContentProps) => {
  return (
    <TransitionSeries>
      {data.map((chapter, index) => {
        return (
          <Fragment key={index}>
            <TransitionSeries.Transition
              presentation={slide({
                direction: "from-right",
              })}
              timing={linearTiming({
                durationInFrames: CHAPTER_TRANSITION_TIME,
              })}
            />
            <TransitionSeries.Sequence
              durationInFrames={chapter.durationInFrames}
            >
              <VideoChapter
                index={index}
                title={chapter.title}
                transition={chapter.transition}
                durationInFrames={chapter.durationInFrames}
                frame={chapter.frame}
              />
            </TransitionSeries.Sequence>
            {index === data.length - 1 && (
              <TransitionSeries.Transition
                presentation={slide({
                  direction: "from-right",
                })}
                timing={linearTiming({
                  durationInFrames: CHAPTER_TRANSITION_TIME,
                })}
              />
            )}
          </Fragment>
        );
      })}
    </TransitionSeries>
  );
};

export const Letter: React.FC<{ color: string; children: React.ReactNode }> = ({
  color,
  children,
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color, fontSize: 200 }}>{children}</h1>
    </AbsoluteFill>
  );
};

export default MainScene;
