import { AbsoluteFill, Img, staticFile } from "remotion";
import { BuiltInTransitionProps } from "../../../../../types/content.type";
import BuiltInLayout from "./BuiltInLayout";
import { builtInPath } from "../../../../../constants/constants";
import { Gif } from "@remotion/gif";
import { loadFont } from "@remotion/google-fonts/Itim";
import { useOneImageBuiltInFrameAnimation } from "../../../../../hooks/built-in-frame-animation/use-built-in-image-frame-animation";

const { fontFamily } = loadFont();

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
        <AbsoluteFill>
          <div
            style={{
              transform: `translate(${moveInImage}px, ${moveInImage2}px) rotate(-5deg)`,
            }}
            className="absolute flex top-[15%]"
          >
            <div className="w-[620px] bg-slate-800 relative aspect-[800/523]">
              {/* <Img
                className="absolute object-cover object-center w-full h-full"
                src={staticFile(builtInPath + "bg_dark.png")}
              /> */}
              <div className="absolute center text-white text-center flex-col w-full h-full py-[70px] px-[90px]">
                <h1 style={{ fontFamily }} className="mb-10 text-5xl font-bold">
                  This is our caption. Replace later
                </h1>
                <div
                  style={{ fontFamily }}
                  className="flex justify-between gap-4"
                >
                  {["fire_camp", "holiday"].map((text, index) => (
                    <span key={index} className="text-2xl">
                      #{text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[620px] overflow-hidden aspect-[800/523]">
              <Img
                style={{
                  transform: `scale(${scale})`,
                }}
                className="object-cover object-center w-full h-full"
                src={staticFile(images[0].path)}
              />
            </div>
          </div>
        </AbsoluteFill>
        {/* asset layer */}
        <AbsoluteFill>
          <div className="absolute flex top-[15%] rotate-[-5deg]">
            <Img
              className="w-[620px] aspect-[800/523] object-center object-cover"
              src={staticFile(builtInPath + "1 frame dark H.png")}
            />
            <Img
              className="w-[620px] aspect-[800/523] object-center object-cover"
              src={staticFile(builtInPath + "1 frame dark H.png")}
            />
          </div>
          <Img
            style={{
              left: `${moveLeft}px`,
            }}
            src={staticFile(builtInPath + "paper_1.png")}
            className="w-[400px] h-auto absolute top-[15%]"
          />
          <Img
            style={{
              right: `${moveRight}px`,
            }}
            src={staticFile(builtInPath + "paper_2.png")}
            className="w-[180px] rotate-[-5deg] h-auto absolute top-[7.5%]"
          />
          <Img
            style={{
              top: `${moveDown}%`,
            }}
            src={staticFile(builtInPath + "tape.png")}
            className="-rotate-[47deg] absolute w-[180px] h-auto left-[40%]"
          />
          <Img
            style={{
              top: `${moveUp}%`,
            }}
            className="-rotate-[5deg] absolute w-[360px] h-auto  left-[35%]"
            src={staticFile(builtInPath + "paper_3.png")}
          />
          <div className="absolute w-[40px] aspect-square bottom-[125px] left-[40px]">
            <Gif
              width={50}
              loopBehavior="loop"
              fit="contain"
              src={staticFile(builtInPath + "star_few.gif")}
            />
          </div>
          <div className="absolute w-[200px] aspect-[639/663] top-[9%] right-[300px]">
            <Gif
              fit="contain"
              loopBehavior="loop"
              src={staticFile(builtInPath + "star_many.gif")}
            />
          </div>
        </AbsoluteFill>
      </AbsoluteFill>
    </BuiltInLayout>
  );
};

export default OneImageBuiltInFrame;
