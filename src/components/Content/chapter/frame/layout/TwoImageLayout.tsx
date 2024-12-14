import { AbsoluteFill, Img, staticFile } from "remotion";
import { NormalImageProps } from "../../../../../types/content.type";
import { Layout } from "./NormalImageLayout";
import { useTwoImageFrameAnimation } from "../../../../../hooks/frame-animation/use-image-frame-animation";

const TwoImageLayout = ({
  frame: videoFrame,
  timingInFrame,
  chapterIndex,
  durationInFrames,
}: NormalImageProps) => {
  // NOTE: similation 2 images
  const images = videoFrame.images.slice(0, 2);

  const { position, scale } = useTwoImageFrameAnimation(
    timingInFrame,
    durationInFrames,
  );

  return (
    <Layout chapterIndex={chapterIndex}>
      <AbsoluteFill className="overflow-hidden">
        <div
          style={{
            left: `${position}px`,
          }}
          className="absolute overflow-hidden w-[500px] top-1/4 h-[460px] rounded-[36px]"
        >
          <Img
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover shadow-2xl object-center w-full h-full rounded-[36px]"
            src={staticFile(images[0].path)}
          />
        </div>
        <div
          style={{
            right: `${position}px`,
          }}
          className="absolute overflow-hidden w-[500px] top-1/4 h-[460px] rounded-[36px]"
        >
          <Img
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover shadow-2xl object-center w-full h-full rounded-[36px]"
            src={staticFile(images[1].path)}
          />
        </div>
      </AbsoluteFill>
    </Layout>
  );
};

export default TwoImageLayout;
