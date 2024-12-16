import { AbsoluteFill, Img, staticFile } from "remotion";
import { BuiltInTransitionProps } from "../../../../../types/content.type";
import BuiltInLayout from "./BuiltInLayout";
import { builtInPath } from "../../../../../constants/constants";
import { Gif } from "@remotion/gif";
import { loadFont } from "@remotion/google-fonts/Itim";
import {
  useOneImageBuiltInFrameAnimation,
  useTwoImageBuiltInFrameAnimation,
} from "../../../../../hooks/built-in-frame-animation/use-built-in-image-frame-animation";

const { fontFamily } = loadFont();

const TwoImageBuiltInFrame = ({
  frame: videoFrame,
  timingInFrame,
}: BuiltInTransitionProps) => {
  const images = videoFrame.images.slice(0, 2);

  const { moveLeft, moveRight, moveDown, moveUp } =
    useOneImageBuiltInFrameAnimation(timingInFrame);

  const { moveUpNote } = useTwoImageBuiltInFrameAnimation(timingInFrame);

  return (
    <BuiltInLayout>
      <AbsoluteFill>
        {/* image layer */}
        <AbsoluteFill>
          <div className="absolute flex top-[15%] rotate-[-5deg]">
            <Img
              className="w-[620px] aspect-[800/523] object-center object-cover"
              src={staticFile(images[0].path)}
            />
            <Img
              className="w-[620px] aspect-[800/523] object-center object-cover"
              src={staticFile(images[1].path)}
            />
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
          <div className="absolute w-[40px] aspect-square left-[50px]">
            <Gif
              width={50}
              loopBehavior="loop"
              fit="contain"
              src={staticFile(builtInPath + "star_few.gif")}
            />
          </div>
          <div className="absolute w-[200px] aspect-[639/663] top-[10%] right-[300px]">
            <Gif
              fit="contain"
              loopBehavior="loop"
              src={staticFile(builtInPath + "star_many.gif")}
            />
          </div>
          {/* caption */}
          <div
            style={{
              bottom: `${moveUpNote}px`,
            }}
            className="absolute -rotate-[5deg] w-[350px] right-20 overflow-hidden rounded-2xl aspect-[800/572]"
          >
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
    </BuiltInLayout>
  );
};

export default TwoImageBuiltInFrame;
