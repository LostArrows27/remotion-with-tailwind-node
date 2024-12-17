import { random } from "remotion";
import { FrameMappingProps } from "../../../../types/content.type";
import RemotionTransitionFrameMapping from "./RemotionTransitionFrameMapping";
import SelfBuiltFrameMapping from "./SelfBuiltFrameMapping";

// TODO: add location style later

const FrameMapping = ({
  type,
  frame,
  chapterIndex,
  timingInFrame,
  durationInFrames,
  frameIndex,
}: FrameMappingProps) => {
  const randomIndex = Math.floor(
    random(
      `random-frame-style-${JSON.stringify(frame)}-chapter-${chapterIndex}-frame-${frameIndex}`,
    ) * 2,
  );

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
      if (randomIndex === 0) {
        return (
          <RemotionTransitionFrameMapping
            frameIndex={frameIndex}
            durationInFrames={durationInFrames}
            timingInFrame={timingInFrame}
            chapterIndex={chapterIndex}
            frame={frame}
          />
        );
      }
      return (
        <SelfBuiltFrameMapping
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
