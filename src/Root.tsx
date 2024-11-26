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
import { compositionSchema } from "./schemas/config";
import { MainProps } from "./types/video.type";
import { chooseIntroMusic } from "./utils/chooseMusic";
import { chooseIntroTitle } from "./utils/chooseIntroTitle";

// TODO: calculate content length with algorithm later
// TODO: trim none-music part on mp3 file
const calculateMetadata: CalculateMetadataFunction<MainProps> = async ({
  props,
}) => {
  const { contentLength } = props;

  const totalDurationInFrames =
    INTRO_SCENE_LENGTH + contentLength + OUTRO_SCENE_LENGTH;

  const bgMusic = chooseIntroMusic();

  props.bgMusic = bgMusic;

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
        defaultProps={{
          contentLength: 5 * VIDEO_FPS,
          bgMusic: staticFile("/music/intro/accoutic_2.mp3"),
          introScene: {
            firstScene: {
              title: chooseIntroTitle(new Date(Date.now())),
              time: new Date(Date.now()),
              images: Array.from({ length: 4 }, (_, i) => {
                return `/images/intro/first_scene_${i + 1}.jpg`;
              }),
            },
            secondScene: {
              firstCaption: "Create videos",
              secondCaption: "with React",
              images: [],
              direction: "vertical",
            },
          },
        }}
      />
    </>
  );
};
