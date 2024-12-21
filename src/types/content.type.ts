import {
  ChapterWithDuration,
  Frame,
  FrameCategory,
  Transition,
} from "./frame.type";

// chapter props
export type VideoChapterProps = ChapterWithDuration & {
  index: number;
  titleStyle: number;
};

export type ChapterTitleProps = {
  title: string;
  images: string[];
  index: number;
  titleStyle: number;
  frameCategory: FrameCategory;
  duration: number;
};

export type ChapterStyleProps = {
  title: string;
  images: string[];
  index: number;
};

export type EventTitleProps = {
  title: string;
  images: string[];
  index: number;
  duration: number;
};

export type ChapterContentProps = {
  frames: Frame[];
  transition: Transition;
  chapterIndex: number;
};

// frame props
export type FrameMappingProps = {
  type: Transition["type"];
  frame: Frame;
  chapterIndex: number;
  timingInFrame: FrameTransitionTiming;
  durationInFrames: number;
  frameIndex: number;
};

export type FrameTransitionTiming = {
  in: number;
  out: number;
};

export type SelfBuiltFrameProps = Omit<FrameMappingProps, "type">;

export type BuiltInTransitionProps = Omit<FrameMappingProps, "type">;

export type BuiltInTransitionLayoutProps = {
  children: React.ReactNode;
  bg: "light" | "dark";
  imageNumber?: number;
};

export type NormalImageProps = SelfBuiltFrameProps;

export type NormalImageLayoutProps = {
  children: React.ReactNode;
  chapterIndex: number;
};
