import { Img, staticFile, useCurrentFrame } from "remotion";
import { AbsoluteFill, interpolate } from "remotion";
import { ChapterStyleProps } from "../../../../types/content.type";
import { FIRST_CHAPTER_IN_TRANSITION_TIME } from "../../../../constants/constants";
import { loadFont } from "@remotion/google-fonts/AmaticSC";
import { loadFont as loadSubFont } from "@remotion/google-fonts/DancingScript";

// TODO: add AI title or based-case title

const { fontFamily } = loadFont();

const { fontFamily: subFontFamily } = loadSubFont();

const BeigeStyleTitle = ({ images, index }: ChapterStyleProps) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, FIRST_CHAPTER_IN_TRANSITION_TIME],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  // TODO: remove local file later
  const newImageURL = images.map((image) =>
    staticFile(
      image.replace(
        "D:/Code Space/AI/image_classification/model/image",
        "/images",
      ),
    ),
  );

  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Img
          style={{
            opacity: index === 0 ? opacity : 1,
          }}
          src={staticFile("/images/content/title_2/bg.jpg")}
          className="object-cover object-center w-full h-full"
        />
      </AbsoluteFill>
      <AbsoluteFill>
        <AbsoluteFill>
          <div className="top-1/3 left-10 absolute w-[450px] center">
            <h1
              style={{
                fontFamily: subFontFamily,
              }}
              className="text-7xl text-center leading-[1.5] uppercase text-[rgb(93,69,45)]"
            >
              Khu cắm trại
            </h1>
          </div>
        </AbsoluteFill>
        <AbsoluteFill>
          {/* NOTE: 2 leaf later */}
          <AbsoluteFill>
            <Img
              className="w-[200px] h-auto absolute right-20 top-1 rotate-12"
              src={staticFile("/images/content/title_2/leaf_s.png")}
            />
          </AbsoluteFill>
          <AbsoluteFill>
            <Img
              className="w-[150px] h-auto absolute right-[49%] bottom-1 -rotate-[30deg]"
              src={staticFile("/images/content/title_2/leaf_t.png")}
            />
          </AbsoluteFill>
        </AbsoluteFill>
        <AbsoluteFill>
          <Img
            className="w-[550px] absolute right-36 top-1/4 h-auto"
            src={staticFile("/images/content/title_2/paper.png")}
          />
        </AbsoluteFill>
        <AbsoluteFill>
          <div
            style={{}}
            className="w-[300px] aspect-[0.855] absolute right-[35%] top-[18%]"
          >
            <Img
              className="object-cover object-center w-full h-full"
              src={newImageURL[0]}
            />
            <Img
              className="!w-[320px] -top-1 absolute h-[370px] max-h-[370px] -left-1 max-w-[320px]"
              src={staticFile("/images/content/title_2/frame_v.png")}
            />
            <Img
              className="absolute -top-[55px] w-[45px] right-1/3 h-auto -rotate-90"
              src={staticFile("/images/content/title_2/tape.png")}
            />

            <div className="top-[5%] -right-[105%] w-[360px] max-w-[360px] h-[300px] absolute">
              <Img
                className="absolute w-full scale-[1.04] h-auto"
                src={staticFile("/images/content/title_2/frame_h.png")}
              />
              <Img
                className="object-cover object-center w-full h-full"
                src={newImageURL[1]}
              />
              <Img
                className="absolute -bottom-[55px] w-[60px] -right-6 h-auto"
                src={staticFile("/images/content/title_2/tape.png")}
              />
            </div>
          </div>
        </AbsoluteFill>
        <AbsoluteFill>
          <div
            style={{
              fontFamily,
            }}
            className="w-[550px] px-5 pl-10 items-center pb-5 flex absolute right-36 top-[64%] h-[130px]"
          >
            <div className="mr-32 text-4xl text-[rgb(93,69,45)] font-bold">
              #camp_fire
            </div>
            <div className="text-4xl font-bold text-[rgb(93,69,45)]">
              #our_holiday
            </div>
          </div>
        </AbsoluteFill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default BeigeStyleTitle;
