import { AbsoluteFill } from "remotion";

const MainScene = () => {
  return (
    <AbsoluteFill>
      <div className="flex items-center justify-center w-full h-full bg-blue-500">
        <h1 className="text-4xl font-bold text-white">It's me ! Remotion!</h1>
      </div>
    </AbsoluteFill>
  );
};

export default MainScene;
