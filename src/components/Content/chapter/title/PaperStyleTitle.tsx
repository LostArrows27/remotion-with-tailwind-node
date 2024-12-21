import { AbsoluteFill, Img, staticFile } from "remotion";
import { ChapterStyleProps } from "../../../../types/content.type";
import { loadFont } from "@remotion/google-fonts/AmaticSC";
import { loadFont as loadTitleFont } from "@remotion/google-fonts/Itim";
import { chooseLocationTitleNote } from "../../../../utils/choose-random-title-note";

// TODO: add AI title or based-case title

const { fontFamily } = loadFont();

const { fontFamily: titleFontFamily } = loadTitleFont();

const PaperStyleTitle = ({ images, index, title }: ChapterStyleProps) => {
  // TODO: remove local file later

  const newImageURL = images.map((image) =>
    staticFile(
      image.replace(
        "D:/Code Space/AI/image_classification/model/image",
        "/images",
      ),
    ),
  )[1];

  return (
    <AbsoluteFill className="overflow-hidden">
      <AbsoluteFill>
        <Img
          className="-left-20 absolute h-full"
          src={staticFile("/images/content/title/screen.png")}
        />
        <Img
          className="left-[210px] top-4 absolute w-[200px] h-auto -rotate-45"
          src={staticFile("/images/content/title/arrows-2.png")}
        />
        <h1
          style={{
            fontFamily: titleFontFamily,
          }}
          className="absolute leading-[1.3] text-7xl text-center w-[400px]  text-[rgb(93,69,45)] top-[29%] left-4 uppercase"
        >
          Khu cắm trại
        </h1>
        <h1
          style={{
            fontFamily: titleFontFamily,
          }}
          className="absolute text-3xl text-center w-[400px]  top-[59%] left-4 uppercase"
        >
          {["outdoor", "campfire"].map((word, index) => (
            <span key={index} className="ml-7 text-[rgb(93,69,45)]">
              #{word}
            </span>
          ))}
        </h1>
        <div className="absolute bottom-2 aspect-[236/250] w-[200px] left-20">
          <Img
            src={staticFile("/images/content/title/note_yellow.png")}
            className="image-fit-full"
          />
          <h1
            style={{
              fontFamily: titleFontFamily,
            }}
            className="top-14 left-0 right-0 px-4 absolute w-[200px] text-center text-rose-500 text-xl font-medium"
          >
            P/S:{" "}
            {chooseLocationTitleNote(
              `title-${title}-index-${index}-image-${JSON.stringify(images)}`,
            )}
          </h1>
        </div>
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
          />
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
              className="-top-2 relative text-5xl font-bold text-center text-[rgb(93,69,45)]"
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
