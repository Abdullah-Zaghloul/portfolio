import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Every piece of visible text is written once per language.
const localized = z.object({ ar: z.string().min(1), en: z.string().min(1) });

// "2026" shows the year only; "2026-09" shows month and year.
const date = z.string().regex(/^\d{4}(-\d{2})?$/);

const yaml = (dir: string) => glob({ pattern: "*.yaml", base: `./src/content/${dir}` });

const settings = defineCollection({
  loader: yaml("settings"),
  schema: z.object({
    name: localized,
    availability: z.object({
      available: z.boolean(),
      note: z.object({ ar: z.string(), en: z.string() }).optional(),
    }),
    contact: z.object({
      whatsapp: z.string().regex(/^\d+$/, "Digits only, with the country code"),
      email: z.email(),
      linkedin: z.url(),
      github: z.url(),
    }),
    // Paths under public/. Leave a language out to hide its CV button.
    cv: z.object({ ar: z.string().optional(), en: z.string().optional() }),
  }),
});

const home = defineCollection({
  loader: yaml("home"),
  schema: z.object({
    headline: localized,
    subline: localized,
    about: localized,
    education: localized,
    principles: z.array(z.object({ title: localized, text: localized })),
  }),
});

const services = defineCollection({
  loader: yaml("services"),
  schema: z.object({
    order: z.number(),
    title: localized,
    text: localized,
  }),
});

const experience = defineCollection({
  loader: yaml("experience"),
  schema: z.object({
    order: z.number(),
    role: localized,
    org: localized,
    type: z.enum(["remote", "project"]),
    start: date,
    end: date.optional(),
    points: z.array(localized),
  }),
});

const projects = defineCollection({
  loader: yaml("projects"),
  schema: z.object({
    order: z.number(),
    featured: z.boolean().default(false),
    title: localized,
    summary: localized,
    problem: localized.optional(),
    built: localized,
    result: localized.optional(),
    stack: z.array(z.string()),
    link: z.url().optional(),
    related: reference("projects").optional(),
    testimonial: z
      .object({
        quote: localized,
        credit: localized,
        // Placeholder quotes are for layout only and never reach a production build.
        placeholder: z.boolean().default(false),
      })
      .optional(),
  }),
});

export const collections = { settings, home, services, experience, projects };
