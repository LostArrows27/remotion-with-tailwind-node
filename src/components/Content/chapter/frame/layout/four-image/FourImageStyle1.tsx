import { AbsoluteFill, Img, staticFile } from "remotion";
import { NormalImageProps } from "../../../../../../types/content.type";
import { Layout } from "../NormalImageLayout";
import { useFourImageFrameAnimationStyle1 } from "../../../../../../hooks/frame-animation/use-image-frame-animation";

const FourImageStyle1 = ({
  frame: videoFrame,
  timingInFrame,
  chapterIndex,
  durationInFrames,
}: NormalImageProps) => {
  const images = videoFrame.images.slice(0, 4);

  const { positionFirstRow, positionSecondRow, scale } =
    useFourImageFrameAnimationStyle1(timingInFrame, durationInFrames);

  return (
    <Layout chapterIndex={chapterIndex}>
      <AbsoluteFill className="overflow-hidden">
        <div
          style={{
            left: `${positionFirstRow}px`,
          }}
          className="overflow-hidden absolute rounded-[28px] top-[23%] w-[500px] h-[240px]"
        >
          <Img
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover object-center w-full h-full rounded-[28px]"
            src={staticFile(images[0].path)}
          />
        </div>
        <div
          style={{
            right: `${positionFirstRow}px`,
          }}
          className="overflow-hidden shadow-2xl absolute rounded-[28px] top-[calc(23%+252px)] w-[500px] h-[240px]"
        >
          <Img
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover object-center w-full h-full rounded-[28px]"
            src={staticFile(images[1].path)}
          />
        </div>
        <div
          style={{
            left: `${positionSecondRow}px`,
          }}
          className="overflow-hidden absolute rounded-[28px] top-[23%] w-[500px] h-[240px]"
        >
          <Img
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover object-center w-full h-full rounded-[28px]"
            src={staticFile(images[2].path)}
          />
        </div>
        <div
          style={{
            right: `${positionSecondRow}px`,
          }}
          className="overflow-hidden absolute rounded-[28px] top-[calc(23%+252px)] w-[500px] h-[240px]"
        >
          <Img
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover object-center w-full h-full rounded-[28px]"
            src={staticFile(images[3].path)}
          />
        </div>
      </AbsoluteFill>
    </Layout>
  );
};

export default FourImageStyle1;
