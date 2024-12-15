import { AbsoluteFill, Img, staticFile } from "remotion";
import { NormalImageProps } from "../../../../../../types/content.type";
import { Layout } from "../NormalImageLayout";
import { useFiveImageFrameAnimationStyle2 } from "../../../../../../hooks/frame-animation/use-image-frame-animation";

const FiveImageStyle2 = ({
  frame: videoFrame,
  timingInFrame,
  chapterIndex,
  durationInFrames,
  frameIndex,
}: NormalImageProps) => {
  const images = videoFrame.images.slice(0, 5);

  const {
    positionFirstEle,
    positionSecondEle,
    positionThirdEle,
    positionForthEle,
    scale,
  } = useFiveImageFrameAnimationStyle2(
    timingInFrame,
    durationInFrames,
    `random-animation--JSON-${JSON.stringify(videoFrame)}-chapter-${chapterIndex}-frame-${frameIndex}}`,
  );

  return (
    <Layout chapterIndex={chapterIndex}>
      <AbsoluteFill className="overflow-hidden">
        {/* first col - up */}
        <div
          style={{
            left: `${positionFirstEle}px`,
          }}
          className="h-[210px] top-[23%] w-[680px] overflow-hidden rounded-[20px] absolute"
        >
          <Img
            src={staticFile(images[0].path)}
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover object-center w-full h-full rounded-[20px]"
          />
        </div>
        {/* first col - down */}
        <div
          style={{
            left: `${positionSecondEle}px`,
          }}
          className="top-[calc(23%+226px)] absolute overflow-hidden rounded-[20px] w-[330px] h-[274px]"
        >
          <Img
            src={staticFile(images[1].path)}
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover object-center w-full h-full rounded-[20px]"
          />
        </div>
        <div
          style={{
            left: `${positionThirdEle}px`,
          }}
          className="top-[calc(23%+226px)] absolute overflow-hidden rounded-[20px] w-[330px] h-[274px]"
        >
          <Img
            src={staticFile(images[1].path)}
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover object-center w-full h-full rounded-[20px]"
          />
        </div>
        {/* second col */}
        <div
          style={{
            left: `${positionForthEle}px`,
          }}
          className="overflow-hidden flex flex-col gap-y-4 w-[340px] absolute top-[23%] h-[500px]"
        >
          <div className="h-[56%] w-full overflow-hidden rounded-[20px]">
            <Img
              src={staticFile(images[3].path)}
              style={{
                transform: `scale(${scale})`,
              }}
              className="object-cover object-center w-full h-full  rounded-[20px]"
            />
          </div>

          <div className="h-[44%] w-full overflow-hidden rounded-[20px]">
            <Img
              src={staticFile(images[4].path)}
              style={{
                transform: `scale(${scale})`,
              }}
              className="object-cover object-center w-full h-full  rounded-[20px]"
            />
          </div>
        </div>
      </AbsoluteFill>
    </Layout>
  );
};

export default FiveImageStyle2;
