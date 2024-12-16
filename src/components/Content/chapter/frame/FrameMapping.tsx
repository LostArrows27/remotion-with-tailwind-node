import { FrameMappingProps } from "../../../../types/content.type";
import RemotionTransitionFrameMapping from "./RemotionTransitionFrameMapping";
import SelfBuiltFrameMapping from "./SelfBuiltFrameMapping";

// TODO: add location style la

const FrameMapping = ({
  type,
  frame,
  chapterIndex,
  timingInFrame,
  durationInFrames,
  frameIndex,
}: FrameMappingProps) => {
  switch (type) {
    case "remotion-transitions":
      return (
        <RemotionTransitionFrameMapping
          frameIndex={frameIndex}
          durationInFrames={durationInFrames}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          frame={frame}
        />
      );
    case "self-built":
      return (
        <SelfBuiltFrameMapping
          frameIndex={frameIndex}
          durationInFrames={durationInFrames}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          frame={frame}
        />
      );
    default:
      return (
        <RemotionTransitionFrameMapping
          // TODO: turn to self-built after done building built-in
          frameIndex={frameIndex}
          durationInFrames={durationInFrames}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          frame={frame}
        />
      );
  }
};

export default FrameMapping;
