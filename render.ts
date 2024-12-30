import path from "path";
import { bundle } from "@remotion/bundler";
import {
  renderMedia,
  RenderMediaOptions,
  selectComposition,
  RenderMediaOnProgress,
} from "@remotion/renderer";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { enableTailwind } from "@remotion/tailwind";
import { videoProps } from "./src/constants/video-props";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compositionID = "MainVideo";

const onBundleProgress = (progress: number) => {
  console.log(`Webpack bundling progress: ${progress}%`);
};

const onRenderProgress: RenderMediaOnProgress = ({ progress }) => {
  console.log(`Rendering is ${progress * 100}% complete`);
};

const renderOption: Omit<RenderMediaOptions, "composition" | "serveUrl"> = {
  imageFormat: "jpeg",
  overwrite: true,
  codec: "h264",
  audioCodec: "mp3",
  outputLocation: `out/render-server.mp4`,
  // scale: 1.5, // TODO: scale 1.5 if user require hd video -> FHD (1080p) / HD (720p - default)
  concurrency: 10,
  chromiumOptions: {
    gl: "angle",
    headless: true,
  },
  inputProps: videoProps(new Date("2024-04-02")),
  onProgress: onRenderProgress,
};

const renderVideo = async () => {
  const bundled = await bundle({
    entryPoint: path.join(__dirname, "./src/index.ts"),
    webpackOverride: enableTailwind,
    onProgress: onBundleProgress,
  });

  const composition = await selectComposition({
    serveUrl: bundled,
    id: compositionID,
  });

  await renderMedia({
    composition,
    serveUrl: bundled,
    ...renderOption,
  });
};

renderVideo();
