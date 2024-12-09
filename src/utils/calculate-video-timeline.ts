import {
  CHAPTER_TRANSITION_TIME,
  FRAME_TRANSITION_TIME,
  MULTI_IMAGE_FRAME_DURATION,
  SINGLE_IMAGE_FRAME_DURATION,
  TITLE_FRAME_DURATION,
  TITLE_TRANSITION_TIME,
} from "../constants/constants";
import { ChapterWithDuration, Frame, ImageJSON } from "../types/frame.type";
import { generateVideoContent } from "./generate-video-content";

// called transition time = b
/* 1. Video -> have transition after every chapter (end transition)
    - 1st chapter -> b (1b of next)
    - other chapter -> 2b (1b of cur + 1b of next)
    - remove -> (n-1) * b
   2. Chapter = title + transition = content (no end transition)
    - title -> 1b 
    - content -> 1b
    - remove -> 1b
   3. Content = frame + transition (no end transition)
    - 1st frame / last frame -> 1b
    - other frame -> 2b
    - remove -> (n-1) * b
*/
export const calculateVideoTimeline = (
  imageData: ImageJSON,
): ChapterWithDuration[] => {
  const chapters = generateVideoContent(imageData);

  // NOTE: slide "chapters" if wanna test with fewer chaps
  const newChapters = chapters.map((chapter) => {
    const framesTotalDuration = calculateTotalFrameDuration(chapter.frame);

    const chapterTotalDuration = calculateChapterDuration(framesTotalDuration);

    return {
      ...chapter,
      durationInFrames: chapterTotalDuration,
    };
  });

  return newChapters;
};

export const calculateVideoDuration = (chapters: ChapterWithDuration[]) => {
  const totalChapterDuration = chapters.reduce(
    (acc, chapter) => acc + chapter.durationInFrames,
    0,
  );

  const totalDuration =
    totalChapterDuration - CHAPTER_TRANSITION_TIME * (chapters.length - 1);

  return totalDuration;
};

export const calculateChapterDuration = (framesTotalDuration: number) => {
  // NOTE: every chap have in + out transition
  //       -> add chap trans time at begin + end of chap

  const chapterDuration =
    CHAPTER_TRANSITION_TIME + TITLE_FRAME_DURATION + TITLE_TRANSITION_TIME;

  const contentDuration =
    TITLE_TRANSITION_TIME + framesTotalDuration + CHAPTER_TRANSITION_TIME;

  const totalDuration =
    chapterDuration + contentDuration - TITLE_TRANSITION_TIME;

  return totalDuration;
};

export const calculateTotalFrameDuration = (frames: Frame[]) => {
  const chapterTotalFrameDuration =
    frames.reduce((acc, frame, frameIndex) => {
      return acc + calculateFrameDuration(frame, frameIndex, frames.length);
    }, 0) -
    FRAME_TRANSITION_TIME * (frames.length - 1);

  return chapterTotalFrameDuration;
};

export const calculateFrameDuration = (
  frame: Frame,
  index: number,
  total: number,
) => {
  if (total === 1 && frame.type === "single") {
    return SINGLE_IMAGE_FRAME_DURATION;
  }

  if (total === 1 && frame.type === "multi") {
    return MULTI_IMAGE_FRAME_DURATION;
  }

  const frameDuration =
    frame.type === "single"
      ? SINGLE_IMAGE_FRAME_DURATION
      : MULTI_IMAGE_FRAME_DURATION;

  const additionalTime =
    index === 0 || index === total - 1
      ? FRAME_TRANSITION_TIME
      : FRAME_TRANSITION_TIME * 2;

  return frameDuration + additionalTime;
};
