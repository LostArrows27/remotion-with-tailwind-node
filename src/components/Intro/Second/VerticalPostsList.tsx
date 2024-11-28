import { staticFile } from "remotion";
import InstagramPost from "../InstagramPost";
import { usePostListScrollAnimation } from "../../../hooks/use-post-list-scroll-animation";

type VerticalPostsListProps = {
  images: string[];
  direction: "up" | "down";
};

const VerticalPostsList = ({ images, direction }: VerticalPostsListProps) => {
  const translateY = usePostListScrollAnimation(direction);

  return (
    <div
      data-direction={direction}
      style={{
        height: "100vh",
        overflowY: "visible",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        scrollbarWidth: "none",
        transform: translateY,
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <InstagramPost imageUrl={staticFile(image)} />
        </div>
      ))}
    </div>
  );
};

export default VerticalPostsList;
