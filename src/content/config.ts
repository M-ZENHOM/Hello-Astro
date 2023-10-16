import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
    }),

});

export const collections = {
    'posts': blogCollection,
};