import { useCurrentFrame } from "remotion";
import { INTRO_SECOND_SCENE_TRANSITION_TIME } from "../../../constants/constants";

type AnimatedCaptionProps = {
  firstCaption: string;
  secondCaption: string;
};

const AnimatedCaption = ({
  firstCaption,
  secondCaption,
}: AnimatedCaptionProps) => {
  const frame = useCurrentFrame();

  return (
    <>
      <h1 className="text-[50px] bg-white w-1/2 text-center font-bold text-blue-500">
        {frame < INTRO_SECOND_SCENE_TRANSITION_TIME ? " " : firstCaption}
      </h1>
      <h1 className="text-[50px] bg-white w-1/2 text-center font-bold text-blue-500">
        {frame < INTRO_SECOND_SCENE_TRANSITION_TIME ? " " : secondCaption}
      </h1>
    </>
  );
};

export default AnimatedCaption;
