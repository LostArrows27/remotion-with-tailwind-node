import OneImageBuiltInFrame from "./built-in-frame/OneImageBuiltInFrame";
import { BuiltInTransitionProps } from "../../../../types/content.type";
import TwoImageBuiltInTransition from "./built-in-frame/TwoImageBuiltInFrame";

/* NOTE:
- 1 image -> 1 frame H
- 2 image -> 2 frame H
- 3 image -> 3 frame H
- 4 image -> 4 frame V / 3 frame H + 1 frame H
- 5 image -> 3 frame H + 2 frame H / 3 frame H + 1 frame H + 1 frame H
- 6 image -> 3 frame H + 3 frame H  
*/

const RemotionTransitionFrameMapping = ({
  frame,
  timingInFrame,
  chapterIndex,
  durationInFrames,
  frameIndex,
}: BuiltInTransitionProps) => {
  const imageCount = frame.images.length;

  switch (imageCount) {
    case 1:
      return (
        <OneImageBuiltInFrame
          frame={frame}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          durationInFrames={durationInFrames}
          frameIndex={frameIndex}
        />
      );

    case 2:
      return (
        <TwoImageBuiltInTransition
          frame={frame}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          durationInFrames={durationInFrames}
          frameIndex={frameIndex}
        />
      );

    case 3:
      return (
        <TwoImageBuiltInTransition
          frame={frame}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          durationInFrames={durationInFrames}
          frameIndex={frameIndex}
        />
      );

    case 4:
      return (
        <TwoImageBuiltInTransition
          frame={frame}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          durationInFrames={durationInFrames}
          frameIndex={frameIndex}
        />
      );

    case 5:
      return (
        <TwoImageBuiltInTransition
          frame={frame}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          durationInFrames={durationInFrames}
          frameIndex={frameIndex}
        />
      );

    case 6:
      return (
        <TwoImageBuiltInTransition
          frame={frame}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          durationInFrames={durationInFrames}
          frameIndex={frameIndex}
        />
      );

    default:
      return (
        <TwoImageBuiltInTransition
          frame={frame}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          durationInFrames={durationInFrames}
          frameIndex={frameIndex}
        />
      );
  }
};

export default RemotionTransitionFrameMapping;
