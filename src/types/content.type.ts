import { ChapterWithDuration, Frame, Transition } from "./frame.type";

export type VideoChapterProps = ChapterWithDuration & {
  index: number;
  titleStyle: number;
};

export type ChapterTitleProps = {
  title: string;
  images: string[];
  index: number;
  titleStyle: number;
};

export type ChapterStyleProps = {
  title: string;
  images: string[];
  index: number;
};

export type ChapterContentProps = {
  frames: Frame[];
  transition: Transition;
};
