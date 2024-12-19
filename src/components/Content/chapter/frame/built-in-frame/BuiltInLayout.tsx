import { AbsoluteFill, Img, staticFile } from "remotion";
import { BuiltInTransitionLayoutProps } from "../../../../../types/content.type";
import { builtInPath } from "../../../../../constants/constants";
import { MapPin } from "lucide-react";
import { loadFont as loadTitleFont } from "@remotion/google-fonts/AmaticSC";

const { fontFamily } = loadTitleFont();

// TODO: add location if have later
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
      <AbsoluteFill>
        {bg === "dark" ? (
          <div className="aspect-[800/130] absolute h-auto w-[500px] -left-[320px] -bottom-2">
            <div className="right-0 absolute h-full w-[180px] p-2 gap-1 flex items-center">
              <MapPin size={30} />
              <p
                className="text-2xl font-bold"
                style={{
                  fontFamily,
                }}
              >
                144 Ba Vì, Hà Nội
              </p>
            </div>
            <Img
              className="image-fit-full"
              src={staticFile(`${builtInPath}yellow_note.png`)}
            />
          </div>
        ) : (
          <div className="-bottom-[250px] aspect-[800/582] w-[500px] -left-[230px] absolute">
            <div className="right-0 absolute h-full w-[270px] mt-10  gap-2 px-2 py-4 flex">
              <MapPin color="rgb(212,212,216)" size={30} />
              <p
                className="text-zinc-300 text-3xl font-bold"
                style={{
                  fontFamily,
                }}
              >
                144 Ba Vì, Hà Nội
              </p>
            </div>
            <Img
              className="image-fit-full"
              src={staticFile(`${builtInPath}black_note.png`)}
            />
          </div>
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default BuiltInLayout;
