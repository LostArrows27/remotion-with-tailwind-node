import { ChapterTitleProps } from "../../../../types/content.type";
import BeigeStyleTitle from "./BeigeStyleTitle";
import PaperStyleTitle from "./PaperStyleTitle";

// TODO: do many title styles

const ChapterTitle = ({
  title,
  images,
  index,
  titleStyle,
}: ChapterTitleProps) => {
  switch (titleStyle) {
    case 0:
      return <PaperStyleTitle title={title} images={images} index={index} />;
    case 1:
      return <BeigeStyleTitle title={title} images={images} index={index} />;
    default:
      return <BeigeStyleTitle title={title} images={images} index={index} />;
  }
};

export default ChapterTitle;