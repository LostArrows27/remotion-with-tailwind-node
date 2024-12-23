import { FrameMappingProps } from "../../../../types/content.type";
import RemotionTransitionFrameMapping from "./RemotionTransitionFrameMapping";
import SelfBuiltFrameMapping from "./SelfBuiltFrameMapping";
import { useMemo } from "react";

const FrameMapping = ({
  type,
  frame,
  chapterIndex,
  timingInFrame,
  durationInFrames,
  frameIndex,
}: FrameMappingProps) => {
  // NOTE: add dev dep if error:))
  const processedFrame = useMemo(() => {
    const processedImages = frame.images.map((image) => ({
      ...image,
      path: image.path.replace(
        "D:/Code Space/AI/image_classification/model/image",
        "/images",
      ),
    }));
    return { ...frame, images: processedImages };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  switch (type) {
    case "remotion-transitions":
      return (
        <RemotionTransitionFrameMapping
          frameIndex={frameIndex}
          durationInFrames={durationInFrames}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          frame={processedFrame}
        />
      );
    case "self-built":
      return (
        <RemotionTransitionFrameMapping
          frameIndex={frameIndex}
          durationInFrames={durationInFrames}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          frame={processedFrame}
        />
      );
    default:
      return (
        <SelfBuiltFrameMapping
          frameIndex={frameIndex}
          durationInFrames={durationInFrames}
          timingInFrame={timingInFrame}
          chapterIndex={chapterIndex}
          frame={processedFrame}
        />
      );
  }
};

export default FrameMapping;
