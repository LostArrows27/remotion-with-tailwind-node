import { AbsoluteFill } from "remotion";
import { FirstIntroSceneProps } from "../../types/video.type";

const FirstIntroScene = ({
  title,
  timeTitle,
  images,
}: FirstIntroSceneProps) => {
  return (
    <AbsoluteFill>
      <div>First Scene</div>
    </AbsoluteFill>
  );
};

export default FirstIntroScene;
