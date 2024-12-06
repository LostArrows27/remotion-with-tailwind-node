import { AbsoluteFill } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { ContentProps } from "../../types/video.type";
import { CHAPTER_TRANSITION_TIME } from "../../constants/constants";
import { Fragment } from "react/jsx-runtime";

// TODO: random presentation function

// NOTE: chapter = title + transition + (content = frame + transition)
const MainScene = ({ data }: ContentProps) => {
  return (
    <TransitionSeries>
      {data.map((chapter, index) => {
        return (
          <Fragment key={index}>
            <TransitionSeries.Sequence
              durationInFrames={chapter.durationInFrames}
            >
              <Letter color="white">
                {chapter.title + " " + chapter.frame.length}
              </Letter>
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              presentation={slide({
                direction: "from-right",
              })}
              timing={linearTiming({
                durationInFrames: CHAPTER_TRANSITION_TIME,
              })}
            />
          </Fragment>
        );
      })}
    </TransitionSeries>
  );
};

const Letter: React.FC<{ color: string; children: React.ReactNode }> = ({
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
