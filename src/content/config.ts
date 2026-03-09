import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['living', 'healthy', 'tech']), // Kategori yang kita bahas tadi
    author: z.string().default('Wanbe Team'),
    image: z.string().optional(),
    description: z.string().max(160),
  }),
});

export const collections = { blog };