import { random } from "remotion";
import { NormalImageProps } from "../../../../../../types/content.type";
import FiveImageStyle1 from "./FiveImageStyle1";
import FiveImageStyle2 from "./FiveImageStyle2";

const FiveImageLayoutMapping = ({
  frame: videoFrame,
  timingInFrame,
  chapterIndex,
  durationInFrames,
  frameIndex,
}: NormalImageProps) => {
  const index = Math.floor(
    random(
      `four-image-chapter-${chapterIndex}-frame-${frameIndex}-JSON-${JSON.stringify(videoFrame)}`,
    ) * 2,
  );

  switch (index) {
    case 1:
      return (
        <FiveImageStyle2
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={videoFrame}
          chapterIndex={chapterIndex}
        />
      );

    case 2:
      return (
        <FiveImageStyle2
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={videoFrame}
          chapterIndex={chapterIndex}
        />
      );
    default:
      return (
        <FiveImageStyle2
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={videoFrame}
          chapterIndex={chapterIndex}
        />
      );
  }
};

export default FiveImageLayoutMapping;
