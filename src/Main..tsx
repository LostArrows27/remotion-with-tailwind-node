import { Series } from "remotion";
import IntroScene from "./components/Intro";
import OutroScene from "./components/Outro";
import { INTRO_SCENE_LENGTH, OUTRO_SCENE_LENGTH } from "./constants/constants";
import MainScene from "./components/Content";
import { MainProps } from "./types/video.type";
import BackgroundMedia from "./components/Main/BackgroundMedia";

const MainVideo = ({
  contentLength,
  introScene,
  bgMusic,
  bgVideo,
  videoDate,
  contentScene,
  titleStyle,
  outroScene,
}: MainProps) => {
  return (
    <>
      <BackgroundMedia bgMusic={bgMusic} bgVideo={bgVideo} />
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
          <OutroScene data={outroScene} />
        </Series.Sequence>
      </Series>
    </>
  );
};

export default MainVideo;
