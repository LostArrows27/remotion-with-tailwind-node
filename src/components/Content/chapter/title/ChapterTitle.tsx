import { ChapterTitleProps } from "../../../../types/content.type";
import PaperStyleTitle from "./PaperStyleTitle";

// TODO: do many title styles

const ChapterTitle = ({
  title,
  image,
  index,
  titleStyle,
}: ChapterTitleProps) => {
  const imageURL = image.replace(
    "D:/Code Space/AI/image_classification/model/image",
    "/images",
  );

  switch (titleStyle) {
    case 0:
      return <PaperStyleTitle title={title} image={imageURL} index={index} />;
    default:
      return <PaperStyleTitle title={title} image={imageURL} index={index} />;
  }
};

export default ChapterTitle;
