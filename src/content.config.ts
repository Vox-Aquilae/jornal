import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { DISCIPLINAS_IDS } from './data/disciplinas';

// Campos opcionais aceitam vazio ("") porque o painel de edição pode gravá-los assim.
const opcional = z.string().optional().nullable();

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    disciplina: z.enum(DISCIPLINAS_IDS),
    professor: z.string(),
    turmas: opcional,
    imagem: opcional,
    legenda: opcional,
    destaque: z.boolean().default(false),
    rascunho: z.boolean().default(false),
    exemplo: z.boolean().default(false),
  }),
});

export const collections = { noticias };
