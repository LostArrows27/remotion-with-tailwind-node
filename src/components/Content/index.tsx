import { AbsoluteFill } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { none } from "@remotion/transitions/none";

const MainScene = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={40}>
        <Letter color="#0b84f3">A</Letter>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={none()}
        timing={linearTiming({ durationInFrames: 30 })}
      />
      <TransitionSeries.Sequence durationInFrames={60}>
        <Letter color="pink">B</Letter>
      </TransitionSeries.Sequence>
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
        backgroundColor: "transparent ",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color, fontSize: 200 }}>{children}</h1>
    </AbsoluteFill>
  );
};

export default MainScene;
