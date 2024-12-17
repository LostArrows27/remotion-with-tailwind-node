import { AbsoluteFill, Img, staticFile } from "remotion";
import { BuiltInTransitionProps } from "../../../../../types/content.type";
import BuiltInLayout from "./BuiltInLayout";
import { builtInPath } from "../../../../../constants/constants";
import { loadFont } from "@remotion/google-fonts/Itim";
import {
  useFourImageBuiltInFrameStyle1Animation,
  useSixImageBuiltInFrameAnimation,
} from "../../../../../hooks/built-in-frame-animation/use-built-in-image-frame-animation";
import { Gif } from "@remotion/gif";

const { fontFamily } = loadFont();

// NOTE: re-use 3 image layout:)
const SixImageBuiltInFrame = ({
  frame: videoFrame,
  timingInFrame,
  durationInFrames,
}: BuiltInTransitionProps) => {
  const images = videoFrame.images.slice(0, 6);

  const { moveUp, moveDown, opacity, scale } =
    useFourImageBuiltInFrameStyle1Animation(timingInFrame, durationInFrames);

  const { moveInLeft1, moveInLeft2, starOpacity } =
    useSixImageBuiltInFrameAnimation(timingInFrame);

  return (
    <BuiltInLayout bg="dark">
      {/* image layer */}
      <AbsoluteFill>
        <div className="rotate-[5deg] absolute w-[500px] h-[100%] top-1/2 right-8 -translate-y-1/2">
          <div
            style={{
              top: `${moveUp}%`,
            }}
            className="h-4/5 absolute left-0 w-1/2"
          >
            <Img
              style={{
                opacity,
              }}
              src={staticFile(builtInPath + "mark.png")}
              className="w-[80px] scale-x-[-1] h-auto absolute -rotate-180 -top-12 -left-10"
            />
            <div className="h-1/2 w-full overflow-hidden">
              <Img
                style={{
                  transform: `scale(${scale})`,
                }}
                src={staticFile(images[0].path)}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="h-1/2 w-full overflow-hidden">
              <Img
                style={{
                  transform: `scale(${scale})`,
                }}
                src={staticFile(images[1].path)}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <Img
              src={staticFile(builtInPath + "2 frame V.png")}
              className="absolute top-0 object-cover object-center w-full h-full"
            />
          </div>
          <div
            style={{
              top: `${moveDown}%`,
            }}
            className="h-4/5 absolute right-0 w-1/2"
          >
            <Img
              style={{
                opacity,
              }}
              src={staticFile(builtInPath + "mark.png")}
              className="w-[80px] scale-x-[-1] h-auto absolute -bottom-12 -right-8"
            />
            <div className="h-1/2 w-full overflow-hidden">
              <Img
                style={{
                  transform: `scale(${scale})`,
                }}
                src={staticFile(images[2].path)}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="h-1/2 w-full overflow-hidden">
              <Img
                style={{
                  transform: `scale(${scale})`,
                }}
                src={staticFile(images[3].path)}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <Img
              src={staticFile(builtInPath + "2 frame V.png")}
              className="absolute top-0 object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </AbsoluteFill>
      {/* 5th image layer */}
      <AbsoluteFill>
        <div
          style={{
            left: `${moveInLeft1}px`,
          }}
          className="w-[250px] -rotate-12 -top-4 absolute aspect-[520/800]"
        >
          <div className="w-full h-full overflow-hidden">
            <Img
              style={{
                transform: `scale(${scale})`,
              }}
              src={staticFile(images[4].path)}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <Img
            src={staticFile(builtInPath + "1 frame dark V.png")}
            className="absolute top-0 object-cover object-center w-full h-full"
          />
        </div>
      </AbsoluteFill>
      {/* 6th image layer */}
      <AbsoluteFill>
        <div
          style={{
            left: `${moveInLeft2}px`,
          }}
          className="w-[250px] rotate-12 -bottom-10 absolute aspect-[520/800]"
        >
          <div className="w-full h-full overflow-hidden">
            <Img
              style={{
                transform: `scale(${scale})`,
              }}
              src={staticFile(images[4].path)}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <Img
            src={staticFile(builtInPath + "1 frame dark V.png")}
            className="absolute top-0 object-cover object-center w-full h-full"
          />
        </div>
      </AbsoluteFill>
      <AbsoluteFill>
        <AbsoluteFill>
          <div
            style={{
              bottom: `${200}px`,
              left: `${400}px`,
              opacity,
            }}
            className="absolute w-[340px] left-32 aspect-[800/572]"
          >
            <Img
              className="object-cover absolute -top-8 -left-8 object-center z-20 rotate-90 w-[100px] h-auto "
              src={staticFile(builtInPath + "tape.png")}
            />
            <Img
              className="absolute object-cover object-center w-full h-full rotate-180"
              src={staticFile(builtInPath + "note.png")}
            />
            <div
              className="absolute flex-col center text-4xl text-center z-[10] w-full h-[80%] p-5"
              style={{
                fontFamily,
              }}
            >
              <h1 className="mb-5">This is our caption. Replace later</h1>
              <div style={{ fontFamily }} className="flex gap-4">
                {["fire_camp", "holiday"].map((text, index) => (
                  <span key={index} className="text-2xl">
                    #{text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </AbsoluteFill>
      {/* asset layer */}
      <AbsoluteFill>
        <div
          style={{
            opacity: starOpacity,
          }}
          className="absolute w-[40px] aspect-square top-[12%] right-[250px]"
        >
          <Gif
            width={50}
            loopBehavior="loop"
            fit="contain"
            src={staticFile(builtInPath + "star_few.gif")}
          />
        </div>
      </AbsoluteFill>
      <AbsoluteFill>
        <div
          style={{
            opacity: starOpacity,
          }}
          className="absolute w-[150px] aspect-[639/663] bottom-[250px] left-[120px] "
        >
          <Gif
            fit="contain"
            loopBehavior="loop"
            src={staticFile(builtInPath + "star_many.gif")}
          />
        </div>
      </AbsoluteFill>
    </BuiltInLayout>
  );
};

export default SixImageBuiltInFrame;
