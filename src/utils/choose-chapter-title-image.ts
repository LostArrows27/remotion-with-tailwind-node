// NOTE: choose 2 image (top + random) for title image

import { random } from "remotion";
import { Frame } from "../types/frame.type";

const getRandomImage = (
  images: { path: string; confidence: number }[],
): string => {
  const randomIndex = Math.floor(random(null) * images.length);
  return images[randomIndex].path;
};

export const chooseChapterTitleImage = (frames: Frame[]): string[] => {
  const imagesWithConfidence: { path: string; confidence: number }[] = [];

  frames.forEach((frame) => {
    frame.images.forEach((image) => {
      const locationLabels = image.labels.location;

      const maxLocationConfidence = Math.max(...Object.values(locationLabels));

      imagesWithConfidence.push({
        path: image.path,
        confidence: maxLocationConfidence,
      });
    });
  });

  imagesWithConfidence.sort((a, b) => b.confidence - a.confidence);

  const highestConfidenceImage = imagesWithConfidence[0];

  const remainingImages = imagesWithConfidence.filter(
    (image) => image !== highestConfidenceImage,
  );

  const randomImage = getRandomImage(remainingImages);

  return [highestConfidenceImage.path, randomImage];
};
