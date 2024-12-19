import { AbsoluteFill, Img, staticFile } from "remotion";
import { EventTitleProps } from "../../../../types/content.type";
import { eventAssetPath } from "../../../../constants/constants";
import { loadFont } from "@remotion/google-fonts/Itim";
import { useImageScaleAnimation } from "../../../../hooks/use-image-scale-animation";
import { chooseEventTitleNote } from "../../../../utils/choose-random-title-note";

const { fontFamily } = loadFont();

const EventPostTitle = ({ images, index, duration }: EventTitleProps) => {
  const newImageURL = images.map((image) =>
    staticFile(
      image.replace(
        "D:/Code Space/AI/image_classification/model/image",
        "/images",
      ),
    ),
  );

  const scale = useImageScaleAnimation(duration);

  return (
    <AbsoluteFill className="overflow-hidden">
      <AbsoluteFill>
        <Img
          src={staticFile(eventAssetPath + "bg.jpg")}
          className="image-fit-full"
        />
      </AbsoluteFill>
      {/* caption layer */}
      <AbsoluteFill>
        <div className="w-[380px] aspect-[717/800] absolute bottom-[20%] right-[10%]">
          <Img
            src={staticFile(eventAssetPath + "note.png")}
            className="image-fit-full"
          />

          <div
            style={{
              fontFamily,
            }}
            className="absolute center flex-col  top-[38px] h-[calc(100%-38px)] w-full px-6 py-8"
          >
            <h1 className="text-5xl font-bold leading-normal text-center">
              Event Chapter {index + 1}
            </h1>

            <div className="mt-7 flex justify-between w-full">
              {["event", "holiday", "rewind", "chapter"].map((word, index2) => (
                <span key={index2} className="text-xl">
                  #{word}
                </span>
              ))}
            </div>
            <div className="mt-7 text-rose-500 underline-offset-4 w-full text-lg font-bold text-center underline">
              {chooseEventTitleNote(
                `event-${index}-duration-${duration}-image-${JSON.stringify(images)}`,
              )}
            </div>
          </div>
        </div>
      </AbsoluteFill>
      {/* asset layer */}
      <AbsoluteFill>
        <Img
          src={staticFile(eventAssetPath + "map.png")}
          className="w-[800px] h-auto object-center rotate-[-25deg] -top-[600px] -right-[350px] absolute object-cover"
        />
        <Img
          src={staticFile(eventAssetPath + "map_2.png")}
          className="w-[350px] h-auto object-center -bottom-[350px] -right-[50px] absolute object-cover"
        />
        <Img
          src={staticFile(eventAssetPath + "fly.png")}
          className="w-[120px] -top-5 rotate-12 right-[350px] h-auto object-center absolute object-cover"
        />
        <Img
          src={staticFile(eventAssetPath + "la_ban.png")}
          className="w-[110px] top-28 rotate-12 right-16 h-auto object-center absolute object-cover"
        />
        <Img
          src={staticFile(eventAssetPath + "fly_2.png")}
          className="w-[200px] bottom-28 right-16 h-auto object-center absolute object-cover"
        />
        <Img
          src={staticFile(eventAssetPath + "flower.png")}
          className="w-[120px] bottom-4 left-28 h-auto object-center absolute object-cover"
        />
        <Img
          src={staticFile(eventAssetPath + "flower.png")}
          className="w-[70px] bottom-16 left-4 h-auto object-center absolute object-cover"
        />
      </AbsoluteFill>

      {/* image layer */}
      <AbsoluteFill>
        <div className="w-[450px] aspect-[7/5] absolute left-10 top-[100px]">
          <div className="w-full border-[16px] border-white h-full overflow-hidden">
            <Img
              style={{
                transform: `scale(${scale})`,
              }}
              src={newImageURL[0]}
              className="image-fit-full "
            />
          </div>
          <Img
            src={staticFile(eventAssetPath + "ghim.png")}
            className="image-fit absolute w-[70px] h-auto left-1/2 -translate-x-[70%] -top-8"
          />
        </div>
        <div className="w-[260px] aspect-[5/6] absolute left-[350px] top-[300px]">
          <div className="w-full h-full overflow-hidden border-[10px] border-white">
            <Img
              style={{
                transform: `scale(${scale})`,
              }}
              src={newImageURL[1]}
              className="image-fit-full"
            />
          </div>
          <Img
            src={staticFile(eventAssetPath + "ghim.png")}
            className="image-fit absolute w-[70px] h-auto left-1/2 -translate-x-[70%] -top-8"
          />
        </div>
        <div className="w-[140px] aspect-[1/1.1] absolute left-[530px] top-[80px]">
          <div className="w-full h-full overflow-hidden border-[8px] border-white">
            <Img
              style={{
                transform: `scale(${scale})`,
              }}
              src={newImageURL[1]}
              className="image-fit-full "
            />
          </div>
          <Img
            src={staticFile(eventAssetPath + "ghim.png")}
            className="image-fit absolute w-[70px] h-auto left-1/2 -translate-x-[70%] -top-10"
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default EventPostTitle;
