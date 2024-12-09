import "./styles/tailwind.css";
import { CalculateMetadataFunction, Composition, staticFile } from "remotion";
import {
  INTRO_SCENE_LENGTH,
  OUTRO_SCENE_LENGTH,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "./constants/constants";
import MainVideo from "./Main.";
import { compositionSchema } from "./schemas/video.schema";
import { MainProps } from "./types/video.type";
import { chooseIntroMusic } from "./utils/choose-music";
import { chooseIntroTitle } from "./utils/choose-intro-title";
import { getRandomAssetByDate } from "./utils/seasonal-helper";
import { chooseRandomCaption } from "./assets/caption_assets";
import { getVideoMetadata } from "@remotion/media-utils";
import { imageJSON } from "./assets/images";
import {
  calculateVideoDuration,
  calculateVideoTimeline,
} from "./utils/calculate-video-timeline";

// TODO: read input from nodejs -> parse in
const calculateMetadata: CalculateMetadataFunction<MainProps> = async ({
  props,
}) => {
  const bgMusic = chooseIntroMusic();
  const bgVideoSrc = staticFile(
    getRandomAssetByDate(props.videoDate, "videos"),
  );
  const title = chooseIntroTitle(props.videoDate);
  const captions = chooseRandomCaption();

  const { durationInSeconds } = await getVideoMetadata(bgVideoSrc);

  if (!durationInSeconds) {
    throw new Error("Cannot get video metadata");
  }

  const videoContentDuration = calculateVideoDuration(props.contentScene); // NOTE: parse images JSON laters using NodeJS

  const totalDurationInFrames =
    INTRO_SCENE_LENGTH + videoContentDuration + OUTRO_SCENE_LENGTH;

  props.bgMusic = bgMusic;
  props.bgVideo.src = bgVideoSrc;
  props.bgVideo.frameLength = durationInSeconds * VIDEO_FPS;
  props.introScene.firstScene.title = title;
  props.introScene.secondScene.firstCaption = captions.firstCaption;
  props.introScene.secondScene.secondCaption = captions.secondCaption;
  props.contentLength = videoContentDuration;

  return {
    durationInFrames: totalDurationInFrames,
    props,
  };
};

export const RemotionRoot: React.FC = () => {
  const fakeDate = new Date("2024-04-02"); // Fake summer

  return (
    <>
      <Composition
        component={MainVideo}
        id="MainVideo"
        durationInFrames={200}
        fps={VIDEO_FPS}
        schema={compositionSchema}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        calculateMetadata={calculateMetadata}
        defaultProps={{
          contentLength: 60 * VIDEO_FPS,
          videoDate: fakeDate,
          bgMusic: staticFile("/music/intro/accoutic_2.mp3"),
          bgVideo: {
            src: staticFile("/videos/season_bg/spring/spring_6.mov"),
            frameLength: 10 * VIDEO_FPS,
          },
          introScene: {
            firstScene: {
              title: "Our Trip Recap",
              time: fakeDate,
              images: Array.from({ length: 4 }, (_, i) => {
                return `/images/intro/first/first_scene_${i + 1}.jpg`;
              }),
            },
            secondScene: {
              firstCaption: "Sẵn sàng ôn lại\nkhoảnh khắc đáng nhớ ?",
              secondCaption: "Bắt đầu ngay thôi !",
              images: Array.from({ length: 16 }, (_, i) => {
                return `/images/intro/second/test (${i + 1}).jpg`;
              }),
              // direction: "vertical",
            },
          },
          contentScene: calculateVideoTimeline(imageJSON),
        }}
      />
    </>
  );
};
