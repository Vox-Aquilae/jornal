import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from '../data/site.json';

export async function GET(context) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const noticias = (await getCollection('noticias', (e) => !e.data.rascunho)).sort(
    (a, b) => b.data.data.getTime() - a.data.data.getTime()
  );
  return rss({
    title: 'Vox Aquilae',
    description: site.descricao,
    site: context.site,
    customData: '<language>pt-PT</language>',
    items: noticias.map((n) => ({
      title: n.data.titulo,
      description: n.data.resumo,
      pubDate: n.data.data,
      link: `${base}/noticias/${n.id}/`,
    })),
  });
}
