import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // Ganti ke array string biar bisa input 2-3 tag sekaligus
    tags: z.array(z.string()).default(['minimalist']), 
    author: z.string().default('Wanbe Team'),
    image: z.string().optional(),
    description: z.string().max(160),
  }),
});

export const collections = { blog };