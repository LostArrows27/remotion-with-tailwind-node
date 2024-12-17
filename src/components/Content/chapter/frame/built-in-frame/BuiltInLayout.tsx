import { AbsoluteFill, Img, staticFile } from "remotion";
import { BuiltInTransitionLayoutProps } from "../../../../../types/content.type";
import { builtInPath } from "../../../../../constants/constants";

const BuiltInLayout = ({ children, bg }: BuiltInTransitionLayoutProps) => {
  return (
    <AbsoluteFill className="overflow-hidden">
      <AbsoluteFill>
        <Img
          className="object-cover object-center w-full h-full"
          src={staticFile(
            `${builtInPath}bg${bg === "dark" ? "_dark" : ""}.png`,
          )}
        />
      </AbsoluteFill>
      {bg === "light" && (
        <AbsoluteFill>
          <Img
            src={staticFile(`${builtInPath + "paper_white.png"}`)}
            className="object-cover rotate-180 object-center w-[120%] max-w-[120%] min-w-[120%] h-auto -top-10"
          />
        </AbsoluteFill>
      )}
      <AbsoluteFill>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
};

export default BuiltInLayout;
