import { AbsoluteFill } from "remotion";
import { BuiltInTransitionProps } from "../../../../../types/content.type";
import BuiltInLayout from "./BuiltInLayout";
import { useOneImageBuiltInFrameAnimation } from "../../../../../hooks/built-in-frame-animation/use-built-in-image-frame-animation";
import { memo } from "react";
import ImageLayerOne from "./one-image/ImageLayerOne";
import AssetLayerOne from "./one-image/AssetLayerOne";

const OneImageBuiltInFrame = ({
  frame: videoFrame,
  timingInFrame,
  durationInFrames,
}: BuiltInTransitionProps) => {
  const images = videoFrame.images.slice(0, 1);

  const {
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
    moveInImage,
    moveInImage2,
    scale,
  } = useOneImageBuiltInFrameAnimation(timingInFrame, durationInFrames);

  return (
    <BuiltInLayout bg="light">
      <AbsoluteFill>
        {/* image layer */}
        <ImageLayerOne
          moveInImage2={moveInImage2}
          images={images}
          moveInImage={moveInImage}
          scale={scale}
        />
        {/* asset layer */}
        <AssetLayerOne
          moveDown={moveDown}
          moveLeft={moveLeft}
          moveRight={moveRight}
          moveUp={moveUp}
        />
      </AbsoluteFill>
    </BuiltInLayout>
  );
};

export default memo(OneImageBuiltInFrame);
