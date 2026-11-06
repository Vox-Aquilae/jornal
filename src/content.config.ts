import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Campos opcionais aceitam vazio ("") porque o painel de edição pode gravá-los assim.
const opcional = z.string().optional().nullable();

export const SECCOES_IDS = ['vida-do-colegio', 'desporto', 'ciencia', 'cultura', 'formacao', 'opiniao'] as const;
export const PAPEIS_IDS = ['aluno', 'familia', 'professor', 'antigo-aluno'] as const;

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    seccao: z.enum(SECCOES_IDS),
    autor: z.string().default('Redação Vox Aquilae'),
    imagem: opcional,
    legenda: opcional,
    destaque: z.boolean().default(false),
    rascunho: z.boolean().default(false),
    exemplo: z.boolean().default(false),
  }),
});

const vozes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vozes' }),
  schema: z.object({
    nome: z.string(),
    papel: z.enum(PAPEIS_IDS),
    detalhe: opcional,
    citacao: z.string(),
    data: z.coerce.date(),
    foto: opcional,
    destaque: z.boolean().default(false),
    exemplo: z.boolean().default(false),
  }),
});

const agenda = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/agenda' }),
  schema: z.object({
    titulo: z.string(),
    data: z.coerce.date(),
    hora: opcional,
    local: opcional,
    publico: z.enum(['Todos', 'Alunos', 'Famílias', 'Professores']).default('Todos'),
    descricao: opcional,
    exemplo: z.boolean().default(false),
  }),
});

const galeria = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galeria' }),
  schema: z.object({
    titulo: z.string(),
    data: z.coerce.date(),
    resumo: opcional,
    capa: opcional,
    fotos: z
      .array(z.object({ imagem: z.string(), legenda: opcional }))
      .optional()
      .nullable()
      .transform((v) => v ?? []),
    exemplo: z.boolean().default(false),
  }),
});

const paginas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paginas' }),
  schema: z.object({
    titulo: z.string(),
    resumo: opcional,
  }),
});

export const collections = { noticias, vozes, agenda, galeria, paginas };
