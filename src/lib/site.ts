import { getCollection } from 'astro:content';
import site from '../data/site.json';
import { DISCIPLINAS } from '../data/disciplinas';

export { site, DISCIPLINAS };

/** Caminho interno com o prefixo do site (necessário no GitHub Pages). */
export function u(p = ''): string {
  if (!p) return import.meta.env.BASE_URL;
  if (/^(https?:|mailto:|tel:|#|data:)/.test(p)) return p;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (p.startsWith('/') ? p : '/' + p);
}

const fmt = new Intl.DateTimeFormat('pt-PT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const fmtData = (d: Date) => fmt.format(d);

export const temValor = (v?: string | null) => !!v && v.trim() !== '';

export const nomeDisciplina = (id: string) => (DISCIPLINAS as Record<string, string>)[id] ?? id;

/** «Prof.ª Ana Silva» → «prof-a-ana-silva» */
export function slug(s: string): string {
  return s
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'sem-nome';
}

export async function noticiasPublicadas() {
  const todas = await getCollection('noticias', (e) => !e.data.rascunho);
  return todas.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

/** Disciplinas que já têm pelo menos uma publicação, pela ordem da lista oficial. */
export async function disciplinasComPosts() {
  const usadas = new Set((await noticiasPublicadas()).map((n) => n.data.disciplina));
  return Object.entries(DISCIPLINAS).filter(([id]) => usadas.has(id as any));
}

export function tempoLeitura(texto = ''): number {
  return Math.max(1, Math.round(texto.trim().split(/\s+/).filter(Boolean).length / 200));
}

export const POR_PAGINA = 12;
