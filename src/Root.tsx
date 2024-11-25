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

// TODO: calculate content length with algorithm later
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
              title: "Welcome to Remotion",
              timeTitle: "2021",
              bgImage: staticFile("/images/intro/bg.jpg"),
              images: [],
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
