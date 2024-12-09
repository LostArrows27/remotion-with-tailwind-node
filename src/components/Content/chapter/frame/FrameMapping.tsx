import { FrameMappingProps } from "../../../../types/content.type";
import RemotionTransitionFrame from "./RemotionTransitionFrame";
import SelfBuiltFrameMapping from "./SelfBuiltFrameMapping";

// TODO: add location style la

const FrameMapping = ({
  type,
  frame,
  chapterIndex,
  timingInFrame,
  durationInFrames,
}: FrameMappingProps) => {
  switch (type) {
    case "remotion-transitions":
      return <RemotionTransitionFrame frame={frame} />;
    case "self-built":
      return (
        <SelfBuiltFrameMapping
          durationInFrames={durationInFrames}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          frame={frame}
        />
      );
    default:
      return (
        <SelfBuiltFrameMapping
          durationInFrames={durationInFrames}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          frame={frame}
        />
      );
  }
};

export default FrameMapping;
