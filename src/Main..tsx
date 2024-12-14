import {
  Audio,
  interpolate,
  Loop,
  OffthreadVideo,
  Series,
  useVideoConfig,
} from "remotion";
import IntroScene from "./components/Intro";
import OutroScene from "./components/Outro";
import {
  AUDIO_VOLUME,
  INTRO_FADE_IN_TIME,
  INTRO_SCENE_LENGTH,
  OUTRO_FADE_TIME,
  OUTRO_IDLE_TIME,
  OUTRO_SCENE_LENGTH,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "./constants/constants";
import MainScene from "./components/Content";
import { MainProps } from "./types/video.type";

const MainVideo = ({
  contentLength,
  introScene,
  bgMusic,
  bgVideo,
  videoDate,
  contentScene,
  titleStyle,
}: MainProps) => {
  const { durationInFrames } = useVideoConfig();

  return (
    <>
      <Loop durationInFrames={bgVideo.frameLength}>
        <OffthreadVideo
          muted
          style={{
            height: VIDEO_HEIGHT,
            width: VIDEO_WIDTH,
          }}
          src={bgVideo.src}
        />
      </Loop>
      <Audio
        src={bgMusic}
        volume={(frame) =>
          // fade out for last 2 seconds
          interpolate(
            frame,
            [
              0,
              INTRO_FADE_IN_TIME,
              durationInFrames - OUTRO_FADE_TIME - OUTRO_IDLE_TIME,
              durationInFrames - OUTRO_IDLE_TIME,
              durationInFrames,
            ],
            [0, AUDIO_VOLUME, AUDIO_VOLUME, 0, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          )
        }
      />
      <Series>
        <Series.Sequence durationInFrames={INTRO_SCENE_LENGTH}>
          <IntroScene
            firstScene={{
              ...introScene.firstScene,
              time: videoDate,
            }}
            secondScene={introScene.secondScene}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={contentLength}>
          <MainScene titleStyle={titleStyle} data={contentScene} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={OUTRO_SCENE_LENGTH}>
          <OutroScene />
        </Series.Sequence>
      </Series>
    </>
  );
};

export default MainVideo;
