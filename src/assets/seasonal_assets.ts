import { SeasonalAssets } from "../types/asset.type";

export const seasonAssets: SeasonalAssets = {
  spring: {
    images: [],
    videos: [
      ...Array.from({ length: 5 }, (_, i) => {
        return `/videos/season_bg/spring/spring_${i + 1}.mp4`;
      }),
      "/videos/season_bg/spring/spring_6.mov",
    ],
    title: ["Spring Story", "Spring Memories"],
  },
  summer: {
    images: [],
    videos: Array.from({ length: 8 }, (_, i) => {
      return `/videos/season_bg/summer/summer_${i + 1}.mp4`;
    }),
    title: ["Summer Story", "Summer Memories"],
  },
  fall: {
    images: [],
    videos: Array.from({ length: 6 }, (_, i) => {
      return `/videos/season_bg/autumn/autumn_${i + 1}.mp4`;
    }),
    title: ["Fall Story", "Fall Memories"],
  },
  winter: {
    images: [],
    videos: Array.from({ length: 8 }, (_, i) => {
      return `/videos/season_bg/winter/winter_${i + 1}.mp4`;
    }),
    title: ["Winter Story", "Winter Memories"],
  },
};
