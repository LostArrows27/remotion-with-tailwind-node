import {
  AbsoluteFill,
  Img,
  interpolate,
  random,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { ChapterStyleProps } from "../../../../types/content.type";
import { loadFont } from "@remotion/google-fonts/AmaticSC";
import { loadFont as loadTitleFont } from "@remotion/google-fonts/Mansalva";
import { FIRST_CHAPTER_IN_TRANSITION_TIME } from "../../../../constants/constants";

// TODO: add AI title or based-case title

const { fontFamily } = loadFont();

const { fontFamily: titleFontFamily } = loadTitleFont();

const PaperStyleTitle = ({ images, index }: ChapterStyleProps) => {
  const frame = useCurrentFrame();

  // console.log("title: " + title);

  const opacity = interpolate(
    frame,
    [0, FIRST_CHAPTER_IN_TRANSITION_TIME],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const newImageURL = images.map((image) =>
    staticFile(
      image.replace(
        "D:/Code Space/AI/image_classification/model/image",
        "/images",
      ),
    ),
  )[Math.floor(random("title-image") * 2)];

  return (
    <AbsoluteFill
      style={{
        opacity: index === 0 ? opacity : 1,
      }}
    >
      <AbsoluteFill>
        <Img
          className="-left-20 absolute h-full"
          src={staticFile("/images/content/title/screen.png")}
        />
        <Img
          className="left-[210px] top-4 absolute w-[200px] h-auto -rotate-45"
          src={staticFile("/images/content/title/arrows-2.svg")}
        />
        <h1
          style={{
            fontFamily: titleFontFamily,
          }}
          className="absolute text-7xl text-border-white text-center w-[400px] text-blue-600 top-[40%] left-4 uppercase"
        >
          Khu cắm trại
        </h1>
        <h1
          style={{
            fontFamily,
          }}
          className="absolute font-bold text-4xl text-center w-[400px]  top-[70%] left-4 uppercase"
        >
          {["outdoor", "campfire"].map((word, index) => (
            <span key={index} className="ml-7 text-blue-500">
              #{word}
            </span>
          ))}
        </h1>
      </AbsoluteFill>
      <AbsoluteFill>
        <div className="absolute top-[15%] left-[35%] aspect-[800/655] w-[650px]">
          <Img
            src={staticFile("/images/content/title/frame.png")}
            className="z-[1] absolute object-cover w-full h-full"
          />
          <Img
            className="absolute z-0 object-cover object-center w-full h-full"
            src={newImageURL}
          />
          <Img
            src={staticFile("/images/content/title/tape.png")}
            className="z-[2] absolute -right-24 -top-12 rotate-[30deg]  object-cover w-[220px] h-auto"
          />{" "}
          <Img
            src={staticFile("/images/content/title/tape.png")}
            className="z-[2] absolute -left-24 rotate-[30deg] -bottom-12 object-cover w-[220px] h-auto"
          />
        </div>
      </AbsoluteFill>
      <AbsoluteFill>
        <div className="absolute z-10 w-[400px] right-[10%] bottom-[3%] -rotate-6 aspect-[720/268]">
          <Img
            src={staticFile("/images/content/title/paper.png")}
            className="z-5 absolute object-cover object-center w-full h-full"
          />
          <div className="center absolute w-full h-full">
            <h1
              style={{
                fontFamily,
              }}
              className="-top-2 relative text-5xl text-center text-black"
            >
              {`Chương ${index + 1}`}
            </h1>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default PaperStyleTitle;
