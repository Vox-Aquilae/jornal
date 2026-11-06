import { getCollection } from 'astro:content';
import site from '../data/site.json';

export { site };

/** Caminho interno com o prefixo do site (necessário no GitHub Pages). */
export function u(p = ''): string {
  if (!p) return import.meta.env.BASE_URL;
  if (/^(https?:|mailto:|tel:|#|data:)/.test(p)) return p;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (p.startsWith('/') ? p : '/' + p);
}

export const SECCOES: Record<string, { nome: string; cor: string; descricao: string }> = {
  'vida-do-colegio': { nome: 'Vida do Colégio', cor: '#13213C', descricao: 'O dia a dia do Planalto: acontecimentos, visitas, celebrações.' },
  desporto: { nome: 'Desporto', cor: '#1F5A48', descricao: 'Torneios, resultados e crónicas desportivas.' },
  ciencia: { nome: 'Ciência', cor: '#24536E', descricao: 'Projetos, laboratório, saídas de campo e curiosidade científica.' },
  cultura: { nome: 'Cultura', cor: '#7A3B2E', descricao: 'Leitura, artes, música, fotografia e concursos.' },
  formacao: { nome: 'Formação', cor: '#6E5014', descricao: 'Virtudes, oratória, voluntariado e vida interior.' },
  opiniao: { nome: 'Opinião', cor: '#3A3550', descricao: 'Crónicas e textos de opinião dos alunos.' },
};

export const PAPEIS: Record<string, { nome: string; plural: string }> = {
  aluno: { nome: 'Aluno', plural: 'Alunos' },
  familia: { nome: 'Família', plural: 'Famílias' },
  professor: { nome: 'Professor', plural: 'Professores' },
  'antigo-aluno': { nome: 'Antigo aluno', plural: 'Antigos alunos' },
};

const fmt = new Intl.DateTimeFormat('pt-PT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const fmtCurto = new Intl.DateTimeFormat('pt-PT', { day: 'numeric', month: 'short', timeZone: 'UTC' });
const fmtMes = new Intl.DateTimeFormat('pt-PT', { month: 'long', year: 'numeric', timeZone: 'UTC' });

export const fmtData = (d: Date) => fmt.format(d);
export const fmtDataCurta = (d: Date) => fmtCurto.format(d).replace('.', '');
export const fmtMesAno = (d: Date) => {
  const s = fmtMes.format(d);
  return s.charAt(0).toUpperCase() + s.slice(1);
};
export const dia = (d: Date) => String(d.getUTCDate());
export const mesAbrev = (d: Date) =>
  new Intl.DateTimeFormat('pt-PT', { month: 'short', timeZone: 'UTC' }).format(d).replace('.', '').toUpperCase();

/** Ano letivo de uma data (setembro a agosto). */
export function anoLetivo(d: Date): string {
  const y = d.getUTCFullYear();
  const inicio = d.getUTCMonth() >= 8 ? y : y - 1;
  return `${inicio}/${String(inicio + 1).slice(2)}`;
}

export const temValor = (v?: string | null) => !!v && v.trim() !== '';

export async function noticiasPublicadas() {
  const todas = await getCollection('noticias', (e) => !e.data.rascunho);
  return todas.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

export async function vozesOrdenadas() {
  const todas = await getCollection('vozes');
  return todas.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

export async function agendaOrdenada() {
  const todas = await getCollection('agenda');
  return todas.sort((a, b) => a.data.data.getTime() - b.data.data.getTime());
}

export async function galeriasOrdenadas() {
  const todas = await getCollection('galeria');
  return todas.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

/** Tempo de leitura aproximado, em minutos. */
export function tempoLeitura(texto = ''): number {
  const palavras = texto.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palavras / 200));
}
