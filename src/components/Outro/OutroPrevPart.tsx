import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import {
  OUTRO_PREV_PART_TOTAL_LENGTH,
  outroAssetPath,
} from "../../constants/constants";

const OutroPrevPast = () => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [0, OUTRO_PREV_PART_TOTAL_LENGTH], [0, 0.5], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: fade }}>
      <AbsoluteFill>
        <Img
          className="image-fit-full"
          src={staticFile(outroAssetPath + "bg.jpg")}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default OutroPrevPast;
