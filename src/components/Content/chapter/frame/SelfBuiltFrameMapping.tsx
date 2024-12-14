import { SelfBuiltFrameProps } from "../../../../types/content.type";
import FourImageStyleMapping from "./layout/four-image/FourImageStyle";
import { OneImageLayout } from "./layout/OneImageLayout";
import SixImageLayout from "./layout/SixImageLayout";
import ThreeImageLayout from "./layout/ThreeImageLayout";
import TwoImageLayout from "./layout/TwoImageLayout";

// TODO: custom event / activity frames
// 1. event frame -> instagram
// 2. activity frame -> normal frame

const SelfBuiltFrameMapping = ({
  frame,
  chapterIndex,
  timingInFrame,
  durationInFrames,
  frameIndex,
}: SelfBuiltFrameProps) => {
  const imageCount = frame.images.length;

  switch (imageCount) {
    case 1:
      return (
        <OneImageLayout
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    case 2:
      return (
        <TwoImageLayout
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    case 3:
      return (
        <ThreeImageLayout
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    case 4:
      return (
        <FourImageStyleMapping
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    case 5:
      return (
        <FourImageStyleMapping
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    case 6:
      return (
        <SixImageLayout
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    default:
      return (
        <SixImageLayout
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
  }
};

export default SelfBuiltFrameMapping;
