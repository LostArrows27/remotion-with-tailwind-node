import { AbsoluteFill, Img, staticFile } from "remotion";
import { NormalImageProps } from "../../../../../types/content.type";
import { Layout } from "./NormalImageLayout";
import { useOneImageFrameAnimation } from "../../../../../hooks/frame-animation/use-image-frame-animation";

export const OneImageLayout = ({
  frame: videoFrame,
  timingInFrame,
  chapterIndex,
  durationInFrames,
}: NormalImageProps) => {
  // NOTE: simulation 1 images
  const images = videoFrame.images[0];

  const { position: left, scale } = useOneImageFrameAnimation(
    timingInFrame,
    durationInFrames,
  );

  return (
    <Layout chapterIndex={chapterIndex}>
      <AbsoluteFill className="overflow-hidden">
        <div
          style={{
            left: `${left}%`,
          }}
          className="absolute overflow-hidden shadow-2xl rounded-[36px] -translate-x-1/2 w-[800px] aspect-video top-[25%] "
        >
          <Img
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover shadow-2xl object-center w-full h-full rounded-[36px]"
            src={staticFile(images.path)}
          />
        </div>
      </AbsoluteFill>
    </Layout>
  );
};
