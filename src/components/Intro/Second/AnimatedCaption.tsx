import { spring, staticFile, useCurrentFrame } from "remotion";
import {
  INTRO_SECOND_SCENE_CAPTION_DURATION,
  INTRO_SECOND_SCENE_FADE_TIME,
  INTRO_SECOND_SCENE_LENGTH,
  INTRO_SECOND_SCENE_TRANSITION_TIME,
  VIDEO_FPS,
} from "../../../constants/constants";
import { Animated, Fade, Move, Scale } from "remotion-animated";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont();

type AnimatedCaptionProps = {
  firstCaption: string;
  secondCaption: string;
};

const AnimatedCaption = ({
  firstCaption,
  secondCaption,
}: AnimatedCaptionProps) => {
  const frame = useCurrentFrame();

  const firstCaptionParts = firstCaption.split("\n");
  const secondCaptionParts = secondCaption.split("\n");

  return (
    <>
      <Animated
        style={{
          fontFamily,
          display:
            frame > INTRO_SECOND_SCENE_CAPTION_DURATION ? "none" : "block",
        }}
        className=" absolute"
        delay={INTRO_SECOND_SCENE_TRANSITION_TIME}
        animations={[
          Move({
            initialY: 0,
            y: 100,
            start: INTRO_SECOND_SCENE_CAPTION_DURATION - 35,
          }),
          Fade({
            initial: 1,
            to: 0,
            start: INTRO_SECOND_SCENE_CAPTION_DURATION - 35,
          }),
        ]}
      >
        <h1
          style={{
            background: `url(${staticFile("/images/intro/second/paper_bg.jpg")})`,
          }}
          className="text-[50px] bg-cover bg-center rounded-lg uppercase bg-white w-full p-5 text-center font-bold text-blue-500"
        >
          {firstCaptionParts.map((part, index) => {
            const delay = index * 5;

            const scale = spring({
              fps: VIDEO_FPS,
              frame: frame - delay * 7,
              config: {
                damping: 150,
              },
            });

            return (
              <div
                key={index}
                style={{
                  transform: `scale(${scale})`,
                }}
              >
                {part}
              </div>
            );
          })}
        </h1>
      </Animated>
      <Animated
        style={{
          fontFamily,
        }}
        delay={INTRO_SECOND_SCENE_CAPTION_DURATION - 5}
        animations={[
          Fade({ initial: 0.5, to: 1 }),
          Scale({ by: 1, initial: 0 }),
        ]}
      >
        <h1
          style={{
            background: `url(${staticFile("/images/intro/second/paper_bg.jpg")})`,
            display:
              frame >= INTRO_SECOND_SCENE_CAPTION_DURATION - 5 &&
              frame <= INTRO_SECOND_SCENE_LENGTH - INTRO_SECOND_SCENE_FADE_TIME
                ? "block"
                : "none",
          }}
          className="text-[50px] bg-cover bg-center rounded-lg uppercase bg-white w-full p-5 text-center font-bold text-blue-500"
        >
          {secondCaptionParts.map((part, index) => {
            return <div key={index}>{part}</div>;
          })}
        </h1>
      </Animated>
    </>
  );
};

export default AnimatedCaption;
