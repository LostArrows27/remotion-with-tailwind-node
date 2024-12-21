import { memo, useMemo } from "react";
import { AbsoluteFill } from "remotion";
import { SecondIntroSceneProps } from "../../types/video.type";
import VerticalPostsList from "./Second/VerticalPostsList";
import AnimatedCaption from "./Second/AnimatedCaption";
import { usePostListFrameAnimation } from "../../hooks/use-post-list-frame-animation";
import { useIntroSecondFrameAnimation } from "../../hooks/use-intro-second-frame-animation";
import { duplicateImageInView } from "../../utils/duplicate-image-in-view";
import { usePostListScrollAnimation } from "../../hooks/use-post-list-scroll-animation";

// NOTE: 3 level scale
// 1. -> 1.03
// 2. -> 1.45
// 3. -> 2.4
// NOTE: every row have to have 6 image to be in view -> 7 row -> 42 image

const SecondIntroScene = ({
  firstCaption,
  secondCaption,
  images,
}: SecondIntroSceneProps) => {
  const { opacity, scale } = useIntroSecondFrameAnimation();

  const { scale: postScale } = usePostListFrameAnimation();

  const duplicateImages = useMemo(
    () =>
      duplicateImageInView(images, firstCaption, secondCaption, images.length),
    [images, firstCaption, secondCaption],
  );

  const containerStyle = useMemo(
    () => ({
      opacity,
      transform: `scale(${scale})`,
      willChange: "transform, opacity",
    }),
    [opacity, scale],
  );

  const { up, down } = usePostListScrollAnimation();

  return (
    <AbsoluteFill
      style={containerStyle}
      className="!justify-center !items-center"
    >
      <AbsoluteFill
        className="!flex-row !w-[100%] !absolute center px-8 gap-4"
        style={{
          transform: `scale(${postScale})`,
          willChange: "transform",
        }}
      >
        {duplicateImages.map((image, i) => (
          <VerticalPostsList
            key={i}
            images={image}
            translateY={i % 2 === 0 ? up : down}
          />
        ))}
      </AbsoluteFill>
      <AbsoluteFill>
        <div className="bg-black/75 absolute right-0 left-0 w-[200%] -translate-x-1/4 -translate-y-1/4 h-[200%]" />
      </AbsoluteFill>
      <AbsoluteFill>
        <div className="center flex-col w-full h-full gap-5">
          <AnimatedCaption
            firstCaption={firstCaption}
            secondCaption={secondCaption}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default memo(SecondIntroScene);
