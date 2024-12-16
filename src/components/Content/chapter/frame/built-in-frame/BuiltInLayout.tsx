import { AbsoluteFill, Img, staticFile } from "remotion";
import { BuiltInTransitionLayoutProps } from "../../../../../types/content.type";

const BuiltInLayout = ({ children }: BuiltInTransitionLayoutProps) => {
  return (
    <AbsoluteFill className="overflow-hidden">
      <AbsoluteFill>
        <Img
          className="object-cover object-center w-full h-full"
          src={staticFile("/images/content/built_in_frame/bg_dark.png")}
        />
      </AbsoluteFill>
      <AbsoluteFill>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
};

export default BuiltInLayout;
