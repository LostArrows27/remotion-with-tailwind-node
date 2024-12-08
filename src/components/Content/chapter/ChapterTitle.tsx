import { AbsoluteFill } from "remotion";
import { Letter } from "../../Test/Letter";

// NOTE: include (chapter transition + title + title transition)
const ChapterTitle = () => {
  return (
    <AbsoluteFill>
      <Letter color="black">title</Letter>
    </AbsoluteFill>
  );
};

export default ChapterTitle;
