import { AbsoluteFill, Img, staticFile } from "remotion";
import { NormalImageLayoutProps } from "../../../../../types/content.type";
import { randomColor } from "../../../../../utils/randomColor";
import { loadFont } from "@remotion/google-fonts/Frijole";
import { loadFont as loadTitleFont } from "@remotion/google-fonts/AmaticSC";
import { Gif } from "@remotion/gif";

// TODO: add animation

// 1. not appear if have title transition animation
// 2. not appear if have chapter transition animation

const { fontFamily } = loadFont();

const { fontFamily: titleFontFamily } = loadTitleFont();

// TODO: add location later
export const Layout = ({ children, chapterIndex }: NormalImageLayoutProps) => {
  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Img
          className="object-cover object-center w-full h-full"
          src={staticFile("/images/content/title_2/bg.jpg")}
        />
      </AbsoluteFill>
      <AbsoluteFill>{children}</AbsoluteFill>
      <AbsoluteFill className="overflow-hidden">
        <Img
          className="absolute -top-[320px] -right-[200px] w-[650px] h-auto -rotate-[145deg]"
          src={staticFile("/images/content/normal_frame/corner_1.png")}
        />
        <Img
          className="absolute -bottom-[300px] -left-[190px] w-[650px] h-auto -rotate-[157deg]"
          src={staticFile("/images/content/normal_frame/corner_2.png")}
        />
        <div className="absolute bottom-[28px] left-3 w-[30px] aspect-[364/581]">
          <Gif
            width={30}
            height={(30 * 581) / 364}
            src={staticFile("/images/content/normal_frame/location.gif")}
          />
        </div>
        <div
          style={{
            fontFamily: titleFontFamily,
          }}
          className="absolute text-3xl text-zinc-200 pr-2  w-[150px] h-[60px] bottom-2 left-14 text-left"
        >
          144 Ba Vì, Hà Nội
        </div>
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
                transform: `rotate(10deg)`,
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
