import { z } from "zod";
import { compositionSchema, introSceneSchema } from "../schemas/video.schema";
import { Chapter } from "./frame.type";

export type MainProps = z.infer<typeof compositionSchema>;

export type IntroProps = z.infer<typeof introSceneSchema>;

export type ContentProps = {
  data: Chapter[];
};

export type FirstIntroSceneProps = IntroProps["firstScene"];

export type SecondIntroSceneProps = IntroProps["secondScene"];
