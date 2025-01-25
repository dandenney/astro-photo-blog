import { defineCollection, z } from 'astro:content';

const photoCollection = defineCollection({
  type: 'data',
  schema: z.object({
    image: z.string(),
    attribution: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  'photos': photoCollection,
  'blog': blogCollection,
}; 