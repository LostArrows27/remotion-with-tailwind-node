import { AbsoluteFill, Img, staticFile } from "remotion";
import { BuiltInTransitionProps } from "../../../../../types/content.type";
import BuiltInLayout from "./BuiltInLayout";
import { builtInPath } from "../../../../../constants/constants";
import { Gif } from "@remotion/gif";
import { useThreeImageBuiltInFrameAnimation } from "../../../../../hooks/built-in-frame-animation/use-built-in-image-frame-animation";
import { loadFont } from "@remotion/google-fonts/Itim";

const { fontFamily } = loadFont();

const ThreeImageBuiltInFrame = ({
  frame: videoFrame,
  timingInFrame,
}: BuiltInTransitionProps) => {
  const images = videoFrame.images.slice(0, 3);

  const { moveUpNote, goDown, rotateImage, opacity, starOpacity } =
    useThreeImageBuiltInFrameAnimation(timingInFrame);

  return (
    <BuiltInLayout bg="dark">
      {/* image layer */}
      <AbsoluteFill>
        <div
          style={{
            transform: `translateX(-50%) rotate(${rotateImage}deg)`,
            opacity,
          }}
          className="absolute flex top-[15%] w-[1484px] bg-red-500 aspect-[1600/431]  left-1/2"
        >
          <Img
            className="object-cover object-center w-1/3 h-full"
            src={staticFile(images[0].path)}
          />
          <Img
            className="object-cover object-center w-1/3 h-full"
            src={staticFile(images[1].path)}
          />
          <Img
            className="object-cover object-center w-1/3 h-full"
            src={staticFile(images[2].path)}
          />
          <Img
            src={staticFile(builtInPath + "3 frame H.png")}
            className="absolute w-full h-full"
          />
        </div>
        <div
          style={{
            opacity: starOpacity,
          }}
          className="absolute w-[40px] aspect-square top-[10%] right-[150px]"
        >
          <Gif
            width={50}
            loopBehavior="loop"
            fit="contain"
            src={staticFile(builtInPath + "star_few.gif")}
          />
        </div>
        <div
          style={{
            opacity: starOpacity,
          }}
          className="absolute w-[150px] aspect-[639/663] bottom-[160px] left-[220px] "
        >
          <Gif
            fit="contain"
            loopBehavior="loop"
            src={staticFile(builtInPath + "star_many.gif")}
          />
        </div>
      </AbsoluteFill>
      {/* asset layer */}
      <AbsoluteFill>
        <Img
          className="w-[180px] -rotate-6 h-auto top-20 -right-[136px] absolute"
          src={staticFile(builtInPath + "paper_2.png")}
        />
        <div
          style={{
            top: `${goDown}px`,
          }}
          className="w-[150px] aspect-[853/254] rotate-[5deg] top-20 right-1/4 absolute"
        >
          <Img
            className="absolute z-[1] w-[200px] -left-4 -top-4 min-w-[200px] max-w-[200px] h-auto rotate-6"
            src={staticFile(builtInPath + "tape_2.png")}
          />
          <Gif
            fit="contain"
            width={150}
            height={(150 / 853) * 254}
            loopBehavior="loop"
            style={{
              position: "absolute",
              zIndex: 5,
            }}
            src={staticFile(builtInPath + "wow.gif")}
          />
        </div>
        {/* caption layer */}
        <div
          style={{
            bottom: `${moveUpNote}px`,
          }}
          className="absolute w-[350px] right-1/4 aspect-[800/572]"
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
    </BuiltInLayout>
  );
};

export default ThreeImageBuiltInFrame;
