import { useCurrentFrame } from "remotion";
import { TYPE_WRITER_SPEED } from "../../constants/constants";

type TypeWriterProps = {
  text: string;
  delayInframe?: number; // Delay before typing starts (in frames)
  speed?: number; // Typing speed (frames per character)
};

export const TypeWriter = ({
  text,
  speed = TYPE_WRITER_SPEED,
  delayInframe = 0,
}: TypeWriterProps) => {
  const frame = useCurrentFrame();

  // Adjust the current frame by subtracting the delay
  const adjustedFrame = frame - delayInframe;

  // Only start showing characters after the delay
  const charsShown = adjustedFrame > 0 ? Math.floor(adjustedFrame / speed) : 0;

  // Slice the text to show the calculated number of characters
  const textToShow = text.slice(0, charsShown);

  // Cursor visibility logic (blinking cursor)
  const cursorShown =
    textToShow.length === text.length ? Math.floor(frame / 10) % 2 === 1 : true;

  return (
    <>
      {textToShow}
      <span
        className={`inline-block w-[3px] h-[60px] bg-white ml-1 align-middle transition-opacity ${
          cursorShown ? "opacity-100" : "opacity-0"
        } ${textToShow.length === text.length ? "hidden" : "inline-block"}`}
      />
    </>
  );
};
