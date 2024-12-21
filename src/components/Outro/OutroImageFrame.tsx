import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import {
  OUTRO_IMAGE_FRAME_FADE_TIME,
  outroAssetPath,
} from "../../constants/constants";

type OutroImageFrameProps = {
  path: string;
  startFrame: number;
};

const OutroImageFrame = ({ path, startFrame }: OutroImageFrameProps) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [startFrame, startFrame + OUTRO_IMAGE_FRAME_FADE_TIME],
    [0, 1],

    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const imagePath = staticFile(
    path.replace(
      "D:/Code Space/AI/image_classification/model/image",
      "/images",
    ),
  );

  return (
    <div
      style={{
        opacity,
      }}
      className="relative w-[350px] aspect-[769/800]"
    >
      <div className="absolute overflow-hidden w-[288px] h-[268.5px] top-[19.6px] left-[38px]">
        <Img src={imagePath} className="image-fit-full" />
      </div>
      <Img
        src={staticFile(outroAssetPath + "frame.png")}
        className="image-fit-full"
      />
    </div>
  );
};

export default OutroImageFrame;
