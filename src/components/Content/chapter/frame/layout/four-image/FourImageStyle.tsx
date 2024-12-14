import { random } from "remotion";
import { NormalImageProps } from "../../../../../../types/content.type";
import FourImageStyle1 from "./FourImageStyle1";
import FourImageStyle2 from "./FourImageStyle2";
import FourImageStyle3 from "./FourImageStyle3";

const FourImageStyleMapping = ({
  frame: videoFrame,
  timingInFrame,
  chapterIndex,
  frameIndex,
  durationInFrames,
}: NormalImageProps) => {
  const index = Math.floor(
    random(
      `four-image-chapter-${chapterIndex}-frame-${frameIndex}-JSON-${JSON.stringify(videoFrame)}`,
    ) * 3,
  );

  switch (index) {
    case 0:
      return (
        <FourImageStyle1
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={videoFrame}
          chapterIndex={chapterIndex}
        />
      );

    case 1:
      return (
        <FourImageStyle2
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={videoFrame}
          chapterIndex={chapterIndex}
        />
      );
    case 2:
      return (
        <FourImageStyle3
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={videoFrame}
          chapterIndex={chapterIndex}
        />
      );

    default:
      return (
        <FourImageStyle3
          frameIndex={frameIndex}
          timingInFrame={timingInFrame}
          durationInFrames={durationInFrames}
          frame={videoFrame}
          chapterIndex={chapterIndex}
        />
      );
  }
};

export default FourImageStyleMapping;
