// contain schema + props
import { z } from "zod";

/** 0. Overall
 * background music
 * background video / background image
 */

/** 1. First Scene
 * title over all
 * time title
 * 4 images
 */

/** 2. Second Scene
 * first caption
 * second caption
 * images[4][5]
 */

export const introSceneSchema = z.object({
  firstScene: z.object({
    title: z.string(),
    timeTitle: z.string(),
    images: z.array(z.string()),
    bgImage: z.string(),
  }),
  secondScene: z.object({
    firstCaption: z.string(),
    secondCaption: z.string(),
    images: z.array(z.array(z.string())),
    direction: z
      .union([z.literal("vertical"), z.literal("horizontal")])
      .default("vertical"),
  }),
});

export const compositionSchema = z.object({
  contentLength: z.number(),
  introScene: introSceneSchema,
  bgMusic: z.string(),
});
