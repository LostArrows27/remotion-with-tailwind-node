import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide, SlideDirection } from "@remotion/transitions/slide";
import {
  CHAPTER_TRANSITION_TIME,
  FRAME_TRANSITION_TIME,
  TITLE_TRANSITION_TIME,
} from "../../../constants/constants";
import { Fragment } from "react/jsx-runtime";
import { calculateFrameDuration } from "../../../utils/calculate-video-timeline";
import { ChapterContentProps } from "../../../types/content.type";
import { none } from "@remotion/transitions/none";
import FrameMapping from "./frame/FrameMapping";

const ChapterContent = ({
  frames,
  transition,
  chapterIndex,
}: ChapterContentProps) => {
  const transitionType = transition.type;

  return (
    <TransitionSeries>
      {frames.map((frame, index) => {
        // NOTE: calculate additional time by transition
        const firstChapterAdditionalTime =
          index === 0 ? TITLE_TRANSITION_TIME : 0;

        const lastChapterAdditionalTime =
          index === frames.length - 1 ? CHAPTER_TRANSITION_TIME : 0;

        const frameTotalDuration =
          calculateFrameDuration(frame, index, frames.length) +
          firstChapterAdditionalTime +
          lastChapterAdditionalTime;

        // NOTE: calculate in + out for each chapter -> during that time don't do anything
        // 1. first chapter -> only out-trans
        // 2. last chapter -> only in-trans

        const transitionInDuration =
          firstChapterAdditionalTime +
          (index === 0 ? 0 : FRAME_TRANSITION_TIME);

        const transitionOutDuration =
          lastChapterAdditionalTime +
          (index === frames.length - 1 ? 0 : FRAME_TRANSITION_TIME);

        const imagesNews = frame.images.map((image) => {
          return {
            ...image,
            path: image.path.replace(
              "D:/Code Space/AI/image_classification/model/image",
              "/images",
            ),
          };
        });

        frame.images = imagesNews;

        return (
          <Fragment key={index}>
            <TransitionSeries.Sequence durationInFrames={frameTotalDuration}>
              <FrameMapping
                durationInFrames={frameTotalDuration}
                chapterIndex={chapterIndex}
                frame={frame}
                frameIndex={index}
                type={transitionType}
                timingInFrame={{
                  in: transitionInDuration,
                  out: transitionOutDuration,
                }}
              />
            </TransitionSeries.Sequence>
            {index !== frames.length - 1 && (
              <TransitionSeries.Transition
                presentation={
                  transitionType === "self-built"
                    ? none()
                    : slide({
                        direction: transition.in as SlideDirection,
                      })
                }
                timing={linearTiming({
                  durationInFrames: FRAME_TRANSITION_TIME,
                })}
              />
            )}
          </Fragment>
        );
      })}
    </TransitionSeries>
  );
};

export default ChapterContent;
