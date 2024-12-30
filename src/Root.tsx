import "./styles/tailwind.css";
import {
  CalculateMetadataFunction,
  Composition,
  random,
  staticFile,
} from "remotion";
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
import { calculateVideoDuration } from "./utils/calculate-video-timeline";
import { chooseRandomOutroImage } from "./utils/choose-random-outro-image";
import { chooseRandomOutroCaption } from "./utils/choose-random-outro-caption";
// import { uploadAndResizeImages } from "./utils/transform-image-size";
import { videoProps } from "./constants/video-props";

// TODO: read input from nodejs -> parse in

// TODO: upload image to cloudinary -> resize -> finish delete

// NOTE: can random by time render -> more random:))
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

  const outroImage = chooseRandomOutroImage(props.contentScene); // TODO: choose group image with max members instead

  const outroCaption = chooseRandomOutroCaption();

  const totalDurationInFrames =
    INTRO_SCENE_LENGTH + videoContentDuration + OUTRO_SCENE_LENGTH;

  const titleStyle = Math.floor(random(null) * 2);

  // const imageURL = await uploadAndResizeImages(
  //   props.introScene.secondScene.images,
  // );

  // props.introScene.secondScene.images = imageURL;

  props.bgMusic = bgMusic;
  props.bgVideo.src = bgVideoSrc;
  props.bgVideo.frameLength = durationInSeconds * VIDEO_FPS;
  props.introScene.firstScene.title = title;
  props.introScene.secondScene.firstCaption = captions.firstCaption;
  props.introScene.secondScene.secondCaption = captions.secondCaption;
  props.contentLength = videoContentDuration;
  props.titleStyle = titleStyle;
  props.outroScene.image = outroImage;
  props.outroScene.caption = outroCaption;

  return {
    durationInFrames: totalDurationInFrames,
    props,
  };
};

export const RemotionRoot: React.FC = () => {
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
        defaultProps={videoProps(new Date("2024-04-02"))}
      />
    </>
  );
};
