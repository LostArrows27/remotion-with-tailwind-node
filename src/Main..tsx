import { Audio, interpolate, Series, useVideoConfig } from "remotion";
import IntroScene from "./components/Intro";
import OutroScene from "./components/Outro";
import {
  AUDIO_VOLUME,
  INTRO_SCENE_LENGTH,
  OUTRO_FADE_TIME,
  OUTRO_SCENE_LENGTH,
} from "./constants/constants";
import MainScene from "./components/Content";
import { MainProps } from "./types/video.type";

const MainVideo = ({ contentLength, introScene, bgMusic }: MainProps) => {
  const { durationInFrames } = useVideoConfig();

  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={INTRO_SCENE_LENGTH}>
          <IntroScene
            firstScene={introScene.firstScene}
            secondScene={introScene.secondScene}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={contentLength}>
          <MainScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={OUTRO_SCENE_LENGTH}>
          <OutroScene />
        </Series.Sequence>
      </Series>
      <Audio
        src={bgMusic}
        volume={(frame) =>
          // fade out for last 2 seconds
          interpolate(
            frame,
            [durationInFrames - OUTRO_FADE_TIME, durationInFrames],
            [AUDIO_VOLUME, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          )
        }
      />
    </>
  );
};

export default MainVideo;