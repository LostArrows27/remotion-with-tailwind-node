import { Loop, OffthreadVideo, Series } from "remotion";
import IntroScene from "./components/Intro";
import OutroScene from "./components/Outro";
import {
  INTRO_SCENE_LENGTH,
  OUTRO_SCENE_LENGTH,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "./constants/constants";
import MainScene from "./components/Content";
import { MainProps } from "./types/video.type";
import AudioLoop from "./components/Main/AudioLoop";

const MainVideo = ({
  contentLength,
  introScene,
  bgMusic,
  bgVideo,
  videoDate,
  contentScene,
  titleStyle,
}: MainProps) => {
  // const { durationInFrames } = useVideoConfig();

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
      {/* NOTE: use this if perfomance down well (2:51 -> 2:41 :v) */}
      {/* <Audio
        loop
        loopVolumeCurveBehavior="extend"
        src={bgMusic.src}
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
      /> */}
      <AudioLoop src={bgMusic} />
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
