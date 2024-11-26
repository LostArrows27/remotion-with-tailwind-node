import { Img, staticFile } from "remotion";
import {
  IMAGE_FRAME_SCALE_DURATION,
  IMAGE_FRAME_WIDTH,
} from "../../constants/constants";
import useImageFrameAnimation from "../../hooks/useImageFrameAnimation";

type ImageFrameProps = {
  url: string;
  rotation: number;
  width?: number;
  height?: number;
  className?: string;
  animated?: boolean;
};

const ImageFrame = ({
  url,
  rotation,
  width = IMAGE_FRAME_WIDTH,
  height = (width * 2) / 3,
  className = "",
  animated = false,
}: ImageFrameProps) => {
  const { opacity, scale, imageScale } = useImageFrameAnimation(
    IMAGE_FRAME_SCALE_DURATION,
    animated,
  );

  return (
    <div
      className={"box-border border-[10px] border-white " + className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `rotate(${rotation}deg)${animated ? ` scale(${scale})` : ""}`,
        opacity: animated ? opacity : 1,
        overflow: "hidden",
      }}
    >
      <Img
        src={staticFile(url)}
        style={{
          transform: `scale(${imageScale})`,
        }}
        alt="Image Frame"
        className="w-full h-full"
      />
    </div>
  );
};

export default ImageFrame;
