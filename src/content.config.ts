import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Each project is one markdown file in src/content/projects/.
// `thread` decides which section it lands in on the home page.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    thread: z.enum(["stories", "exploring"]),
    tags: z.array(z.string()).default([]),
    role: z.string().optional(),
    year: z.string().optional(),
    repo: z.string().url().optional(),
    link: z.string().url().optional(),
    cover: z.string().optional(),
    coverFit: z.enum(["cover", "contain"]).optional(),
    imageCredit: z.string().optional(),
    // Embeddable video URL (YouTube/Vimeo). Renders as the feature media.
    video: z.string().url().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
