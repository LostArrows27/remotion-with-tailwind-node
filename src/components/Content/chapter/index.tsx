import { linearTiming, TransitionSeries } from "@remotion/transitions";
import ChapterTitle from "./title/ChapterTitle";
import ChapterContent from "./ChapterContent";
import {
  CHAPTER_TRANSITION_TIME,
  TITLE_FRAME_DURATION,
  TITLE_TRANSITION_TIME,
} from "../../../constants/constants";
import { slide } from "@remotion/transitions/slide";
import { VideoChapterProps } from "../../../types/content.type";
import { chooseChapterTitleImage } from "../../../utils/choose-chapter-title-image";

// TODO: handle animation based on
// 1. self-built transition
// 2. remotion-transitions

// NOTE: every frame was added a transition time
// 1. if no use remotion-transitions -> none() -> self built
// 2. if use remotion-transitions -> exp: slide()

// NOTE: chapter = title + transition + (content = frame + transition)

const VideoChapter = ({
  title,
  transition,
  durationInFrames,
  frame,
  index,
  titleStyle,
}: VideoChapterProps) => {
  const chapterTitleDuration =
    CHAPTER_TRANSITION_TIME + TITLE_FRAME_DURATION + TITLE_TRANSITION_TIME;

  const chapterContentDuration =
    durationInFrames + TITLE_TRANSITION_TIME - chapterTitleDuration;

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={chapterTitleDuration}>
        <ChapterTitle
          index={index}
          titleStyle={titleStyle}
          title={title}
          image={chooseChapterTitleImage(frame)}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({
          direction: "from-right",
        })}
        timing={linearTiming({
          durationInFrames: TITLE_TRANSITION_TIME,
        })}
      />
      <TransitionSeries.Sequence durationInFrames={chapterContentDuration}>
        <ChapterContent transition={transition} frames={frame} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

export default VideoChapter;
