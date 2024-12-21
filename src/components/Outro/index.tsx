import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import {
  OUTRO_FADE_TIME,
  OUTRO_IMAGE_FRAME_WAIT_TIME,
  OUTRO_MAIN_FADE_TIME,
  OUTRO_SCENE_LENGTH,
  outroAssetPath,
} from "../../constants/constants";
import { Gif } from "@remotion/gif";
import { OutroProps } from "../../types/video.type";
import OutroImageFrame from "./OutroImageFrame";
import OutroAnimatedCaption from "./OutroAnimatedCaption";

const OutroScene = ({ data }: OutroProps) => {
  const frame = useCurrentFrame();

  const fade = interpolate(
    frame,
    [
      0,
      OUTRO_MAIN_FADE_TIME,
      OUTRO_SCENE_LENGTH - OUTRO_FADE_TIME,
      OUTRO_SCENE_LENGTH,
    ],
    [0.5, 1, 1, 0],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    },
  );

  return (
    <>
      {frame >= OUTRO_SCENE_LENGTH - OUTRO_FADE_TIME && (
        <AbsoluteFill>
          <div className="w-full h-full bg-black" />
        </AbsoluteFill>
      )}
      <AbsoluteFill style={{ opacity: fade }}>
        {/* BG layer */}
        <AbsoluteFill>
          <Img
            className="image-fit-full"
            src={staticFile(outroAssetPath + "bg.jpg")}
          />
        </AbsoluteFill>
        {/* Image layer */}
        <AbsoluteFill>
          <div className="flex-col flex gap-5 absolute right-[350px] -top-0 rotate-[11.34deg]">
            <OutroImageFrame
              startFrame={OUTRO_MAIN_FADE_TIME + OUTRO_IMAGE_FRAME_WAIT_TIME}
              path={data.image[0]}
            />
            <OutroImageFrame
              startFrame={
                OUTRO_MAIN_FADE_TIME + OUTRO_IMAGE_FRAME_WAIT_TIME * 3
              }
              path={data.image[1]}
            />
          </div>
          <div className="flex-col flex gap-5 absolute right-[0px] -top-40 rotate-[11.34deg]">
            <OutroImageFrame
              startFrame={OUTRO_MAIN_FADE_TIME}
              path={data.image[2]}
            />
            <OutroImageFrame
              startFrame={
                OUTRO_MAIN_FADE_TIME + OUTRO_IMAGE_FRAME_WAIT_TIME * 2
              }
              path={data.image[3]}
            />
            <OutroImageFrame
              startFrame={
                OUTRO_MAIN_FADE_TIME + OUTRO_IMAGE_FRAME_WAIT_TIME * 4
              }
              path={data.image[4]}
            />
          </div>
        </AbsoluteFill>
        {/* caption layer */}
        <OutroAnimatedCaption captions={data.caption} />
        {/* fade layer */}
        <AbsoluteFill>
          <div className="absolute w-[430px] aspect-[1080/1920] -top-4 left-0">
            <Gif
              loopBehavior="loop"
              width={430}
              height={(430 / 1080) * 1920}
              src={staticFile(outroAssetPath + "fade.gif")}
            />
          </div>
          <div className="absolute rotate-180 w-[400px] aspect-[1080/1920] -top-4 left-[40%]">
            <Gif
              loopBehavior="loop"
              width={400}
              height={(400 / 1080) * 1920}
              src={staticFile(outroAssetPath + "fade.gif")}
            />
          </div>
          <div className="absolute rotate-180 w-[500px] aspect-[1080/1920] -top-4 -right-[20%]">
            <Gif
              loopBehavior="loop"
              width={500}
              height={(500 / 1080) * 1920}
              src={staticFile(outroAssetPath + "fade.gif")}
            />
          </div>
        </AbsoluteFill>
        {/* film */}
        <AbsoluteFill>
          <div className="absolute w-[85px] aspect-[155/1885] top-1/2 -translate-y-[56.5%] left-0 -translate-x-1/2">
            <Gif
              loopBehavior="loop"
              width={85}
              height={(85 / 155) * 1885}
              src={staticFile(outroAssetPath + "film.gif")}
            />
          </div>
          <div className="absolute w-[85px] aspect-[155/1885] top-1/2 -translate-y-[56.5%] right-0 translate-x-1/2">
            <Gif
              loopBehavior="loop"
              width={85}
              height={(85 / 155) * 1885}
              src={staticFile(outroAssetPath + "film.gif")}
            />
          </div>
        </AbsoluteFill>
      </AbsoluteFill>
    </>
  );
};

export default OutroScene;
