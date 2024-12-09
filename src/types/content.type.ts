import { ChapterWithDuration } from "./frame.type";

export type VideoContent = ChapterWithDuration & {
  index: number;
};
