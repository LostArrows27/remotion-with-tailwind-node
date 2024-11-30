import path from "path";
import { bundle } from "@remotion/bundler";
import {
  renderMedia,
  RenderMediaOptions,
  selectComposition,
} from "@remotion/renderer";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// TODO: fix render error
const compositionID = "MainVideo";

const renderOption: Omit<RenderMediaOptions, "composition" | "serveUrl"> = {
  crf: 18,
  pixelFormat: "yuv420p",
  imageFormat: "jpeg",
  codec: "h264",
  outputLocation: `out/test.mp4`,
  scale: 1.5, // NOTE: idk if i should use this -> 720p a bit blur but 1080p is too big
  concurrency: 10,
  chromiumOptions: {
    gl: "angle",
  },
};

const renderVideo = async () => {
  const bundled = await bundle({
    entryPoint: path.join(__dirname, "./src/index.ts"),
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
