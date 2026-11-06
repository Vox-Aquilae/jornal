// Lista única de disciplinas. Para acrescentar uma, junte-a aqui E em .pages.yml (campo «disciplina»).
export const DISCIPLINAS = {
  colegio: 'Colégio',
  portugues: 'Português',
  ingles: 'Inglês',
  frances: 'Francês',
  espanhol: 'Espanhol',
  historia: 'História',
  geografia: 'Geografia',
  matematica: 'Matemática',
  'ciencias-naturais': 'Ciências Naturais',
  'fisico-quimica': 'Físico-Química',
  'educacao-visual': 'Educação Visual',
  tic: 'TIC',
  'educacao-fisica': 'Educação Física',
  musica: 'Música',
  emrc: 'EMRC',
  cidadania: 'Cidadania',
} as const;

export type DisciplinaId = keyof typeof DISCIPLINAS;
export const DISCIPLINAS_IDS = Object.keys(DISCIPLINAS) as [DisciplinaId, ...DisciplinaId[]];
