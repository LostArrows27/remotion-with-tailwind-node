import { AbsoluteFill, Img, staticFile } from "remotion";
import { NormalImageProps } from "../../../../../../types/content.type";
import { Layout } from "../NormalImageLayout";
import { useFourImageFrameAnimationStyle3 } from "../../../../../../hooks/frame-animation/use-image-frame-animation";

const FourImageStyle3 = ({
  frame: videoFrame,
  timingInFrame,
  chapterIndex,
  durationInFrames,
}: NormalImageProps) => {
  const images = videoFrame.images.slice(0, 4);

  const {
    positionFirstRow,
    positionSecondRow,
    positionForthRow,
    positionThirdRow,
    scale,
  } = useFourImageFrameAnimationStyle3(timingInFrame, durationInFrames);

  return (
    <Layout chapterIndex={chapterIndex}>
      <AbsoluteFill className="overflow-hidden">
        <div
          style={{
            left: `${positionFirstRow}px`,
          }}
          className="overflow-hidden absolute rounded-[28px] top-[23%] w-[280px] h-[460px]"
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
            left: `${positionSecondRow}px`,
          }}
          className="overflow-hidden absolute rounded-[28px] top-[23%] w-[280px] h-[460px]"
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
            left: `${positionThirdRow}px`,
          }}
          className="overflow-hidden absolute rounded-[28px] top-[23%] w-[280px] h-[460px]"
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
            left: `${positionForthRow}px`,
          }}
          className="overflow-hidden absolute rounded-[28px] top-[23%] w-[280px] h-[460px]"
        >
          <Img
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover object-center w-full h-full rounded-[28px]"
            src={staticFile(images[1].path)}
          />
        </div>
      </AbsoluteFill>
    </Layout>
  );
};

export default FourImageStyle3;
