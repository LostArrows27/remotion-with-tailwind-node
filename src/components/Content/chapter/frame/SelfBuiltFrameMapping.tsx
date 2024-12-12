import { SelfBuiltFrameProps } from "../../../../types/content.type";
import { OneImageLayout } from "./layout/NormalImageLayout";

// TODO: custom event / activity frames
// 1. event frame -> instagram
// 2. activity frame -> normal frame

const SelfBuiltFrameMapping = ({
  frame,
  chapterIndex,
  timingInFrame,
  durationInFrames,
}: SelfBuiltFrameProps) => {
  const imageCount = frame.images.length;

  switch (imageCount) {
    case 1:
      return (
        <OneImageLayout
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    case 2:
      return (
        <OneImageLayout
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    case 3:
      return (
        <OneImageLayout
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    case 4:
      return (
        <OneImageLayout
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    case 5:
      return (
        <OneImageLayout
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    case 6:
      return (
        <OneImageLayout
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
    default:
      return (
        <OneImageLayout
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={frame}
          chapterIndex={chapterIndex}
        />
      );
  }
};

export default SelfBuiltFrameMapping;
