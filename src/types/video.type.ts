import { z } from "zod";
import { compositionSchema, introSceneSchema } from "../schemas/config";

export type MainProps = z.infer<typeof compositionSchema>;

export type IntroProps = z.infer<typeof introSceneSchema>;

export type FirstIntroSceneProps = IntroProps["firstScene"];

export type SecondIntroSceneProps = IntroProps["secondScene"];
