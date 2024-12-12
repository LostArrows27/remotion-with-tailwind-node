import { AbsoluteFill, Img, random, staticFile } from "remotion";
import {
  NormalImageLayoutProps,
  NormalImageProps,
} from "../../../../../types/content.type";
import { randomColor } from "../../../../../utils/randomColor";
import { loadFont } from "@remotion/google-fonts/Frijole";
import { loadFont as loadTitleFont } from "@remotion/google-fonts/AmaticSC";
import { useOneImageFrameAnimation } from "../../../../../hooks/frame-animation/use-one-image-frame-animation";

// TODO: add animation

// 1. not appear if have title transition animation
// 2. not appear if have chapter transition animation

const { fontFamily } = loadFont();

const { fontFamily: titleFontFamily } = loadTitleFont();

const ChapterGraphic = ({ chapterIndex }: { chapterIndex: number }) => {
  const graphicArrays = String(chapterIndex + 1).split("");

  return (
    <div className="right-10 bottom-10 absolute">
      <div>
        <div className="gap-x-1 flex items-center w-full h-full">
          <Img
            className="w-10 h-auto"
            src={staticFile("/images/content/normal_frame/c.png")}
          />
          <Img
            className="w-10 h-auto"
            src={staticFile("/images/content/normal_frame/h.png")}
          />
          <Img
            className="w-10 h-auto"
            src={staticFile("/images/content/normal_frame/a.png")}
          />
          <Img
            className="w-10 h-auto"
            src={staticFile("/images/content/normal_frame/p.png")}
          />
          <Img
            className="w-10 h-auto"
            src={staticFile("/images/content/normal_frame/t.png")}
          />
          <Img
            className="w-10 h-auto"
            src={staticFile("/images/content/normal_frame/e.png")}
          />
          <Img
            className="w-10 h-auto"
            src={staticFile("/images/content/normal_frame/r.png")}
          />
          {graphicArrays.map((item, index) => (
            <span
              key={index}
              style={{
                background: randomColor(chapterIndex),
                transform: `rotate(${Math.floor(random(`letter-${chapterIndex}`) * 20) - 10}deg)`,
                fontFamily,
              }}
              className="center w-10 h-12 ml-2 text-2xl font-bold text-white rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Layout = ({ children, chapterIndex }: NormalImageLayoutProps) => {
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `url(${staticFile("/images/content/title_2/bg.jpg")})`,
        }}
        className="bg-center bg-cover"
      >
        <div className="hidden">bga</div>
      </AbsoluteFill>
      <AbsoluteFill>{children}</AbsoluteFill>
      <AbsoluteFill className="overflow-hidden">
        <Img
          className="absolute -top-[320px] -right-[200px] w-[650px] h-auto -rotate-[145deg]"
          src={staticFile("/images/content/normal_frame/corner_1.png")}
        />
        <Img
          className="absolute -bottom-[300px] -left-[200px] w-[650px] h-auto -rotate-[157deg]"
          src={staticFile("/images/content/normal_frame/corner_2.png")}
        />
        <ChapterGraphic chapterIndex={chapterIndex} />
      </AbsoluteFill>
      <AbsoluteFill>
        <div className="w-full center h-[200px] tracking-[0.15em] text-6xl absolute top-0 right-0 left-0">
          <h1
            className="uppercase font-bold text-center text-[rgb(93,69,45)]"
            style={{
              fontFamily: titleFontFamily,
            }}
          >
            Kỉ niệm bên lửa trại
          </h1>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const OneImageLayout = ({
  frame: videoFrame,
  timingInFrame,
  chapterIndex,
  durationInFrames,
}: NormalImageProps) => {
  // NOTE: simulation 1 images
  const images = videoFrame.images[0];

  const { left, scale } = useOneImageFrameAnimation(
    timingInFrame,
    durationInFrames,
  );

  return (
    <Layout chapterIndex={chapterIndex}>
      <AbsoluteFill className="overflow-hidden">
        <div
          style={{
            left: `${left}%`,
          }}
          className="absolute overflow-hidden shadow-xl rounded-[36px] -translate-x-1/2 w-[800px] aspect-video top-[25%] "
        >
          <Img
            style={{
              transform: `scale(${scale})`,
            }}
            className="object-cover shadow-2xl object-center w-full h-full rounded-[36px]"
            src={staticFile(images.path)}
          />
        </div>
      </AbsoluteFill>
    </Layout>
  );
};
