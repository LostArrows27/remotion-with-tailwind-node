import { staticFile } from "remotion";
import { Img } from "remotion";
import { AbsoluteFill } from "remotion";
import { NormalImageProps } from "../../../../../../types/content.type";
import { Layout } from "../NormalImageLayout";
import { useFourImageFrameAnimationStyle2 } from "../../../../../../hooks/frame-animation/use-image-frame-animation";

const FourImageStyle2 = ({
  frame: videoFrame,
  timingInFrame,
  chapterIndex,
  durationInFrames,
}: NormalImageProps) => {
  const images = videoFrame.images.slice(0, 4);

  const { positionFirstRow, positionSecondRow, positionThirdRow, scale } =
    useFourImageFrameAnimationStyle2(timingInFrame, durationInFrames);

  return (
    <Layout chapterIndex={chapterIndex}>
      <AbsoluteFill className="overflow-hidden">
        <div
          style={{
            left: `${positionFirstRow}px`,
          }}
          className="overflow-hidden absolute rounded-[28px] top-[23%] w-[340px] h-[460px]"
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
          className="overflow-hidden flex flex-col gap-y-3 w-[320px] absolute top-[23%] h-[460px]"
        >
          <div className="h-1/2 w-full overflow-hidden rounded-[28px]">
            <Img
              src={staticFile(images[1].path)}
              style={{
                transform: `scale(${scale})`,
              }}
              className="object-cover object-center w-full h-full rounded-[28px]"
            />
          </div>
          <div className="h-1/2 w-full overflow-hidden rounded-[28px]">
            <Img
              src={staticFile(images[2].path)}
              style={{
                transform: `scale(${scale})`,
              }}
              className="object-cover object-center w-full h-full rounded-[28px]"
            />
          </div>
        </div>
        <div
          style={{
            left: `${positionThirdRow}px`,
          }}
          className="overflow-hidden absolute rounded-[28px] top-[23%] w-[340px] h-[460px]"
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

export default FourImageStyle2;
