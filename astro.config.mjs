import { defineConfig } from 'astro/config';

// SITE_URL e BASE_PATH são definidos automaticamente pela publicação no GitHub Pages
// (ver .github/workflows/publicar.yml). Com um domínio próprio, basta mudar SITE_URL.
export default defineConfig({
  site: process.env.SITE_URL || 'https://voxaquilae.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: {
    format: process.env.PREVIEW ? 'file' : 'directory',
  },
});
