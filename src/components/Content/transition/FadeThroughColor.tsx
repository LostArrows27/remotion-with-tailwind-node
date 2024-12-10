import { CSSProperties } from "react";
import { TransitionImplementationProps } from "remotion-transition-series/lib/components/Transition";

export const FadeThroughColor = ({
  color = "black",
  progress,
  exitingElement = null,
  enteringElement = null,
}: TransitionImplementationProps & {
  color?: CSSProperties["backgroundColor"];
}) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          opacity:
            enteringElement === null ? 1 - progress : progress > 0.5 ? 0 : 1,
        }}
      >
        {exitingElement}
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor:
            enteringElement === null
              ? color
              : progress > 0.5
                ? "transparent"
                : color,
          opacity:
            enteringElement === null ? progress : Math.min(1, progress * 2),
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          opacity: Math.max(0, 2 * progress - 1),
        }}
      >
        {enteringElement}
      </div>
    </>
  );
};
