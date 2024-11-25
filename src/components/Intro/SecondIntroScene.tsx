import { AbsoluteFill } from "remotion";
import { SecondIntroSceneProps } from "../../types/video.type";

const SecondIntroScene = ({
  firstCaption,
  secondCaption,
  images,
  direction,
}: SecondIntroSceneProps) => {
  return (
    <AbsoluteFill>
      <div>Second Scene</div>
    </AbsoluteFill>
  );
};

export default SecondIntroScene;
