// NOTE: choose highest confident place prob

import { Frame } from "../types/frame.type";

export const chooseChapterTitleImage = (frames: Frame[]): string => {
  let highestConfidence = -1;
  let selectedImagePath = "";

  frames.forEach((frame) => {
    frame.images.forEach((image) => {
      const locationLabels = image.labels.location;

      const maxLocationConfidence = Math.max(...Object.values(locationLabels));

      if (maxLocationConfidence > highestConfidence) {
        highestConfidence = maxLocationConfidence;
        selectedImagePath = image.path;
      }
    });
  });

  return selectedImagePath;
};
