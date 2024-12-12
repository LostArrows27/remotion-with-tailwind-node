import { AbsoluteFill } from "remotion";
import { RemotionTransitionProps } from "../../../../types/content.type";

// TODO: add remotion-animation style laters

const RemotionTransitionFrame = ({ frame }: RemotionTransitionProps) => {
  return (
    <AbsoluteFill>
      {frame.images.length + " " + frame.category + " " + frame.type}
    </AbsoluteFill>
  );
};

export default RemotionTransitionFrame;
