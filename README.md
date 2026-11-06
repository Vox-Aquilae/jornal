# Vox Aquilae — jornal digital do Colégio Planalto

Site estático (Astro) com painel de edição (Pages CMS) e publicação automática no GitHub Pages. Custo: 0 €.

## Instalação rápida

1. Criar a organização GitHub `voxaquilae` (conta com email institucional).
2. Criar o repositório público `voxaquilae.github.io` e carregar todo o conteúdo desta pasta (incluindo `.github/` e `.pages.yml`).
3. *Settings → Pages → Source: GitHub Actions*.
4. Abrir https://app.pagescms.org, entrar com a conta do jornal e abrir o repositório.

Site publicado: https://vox-aquilae.github.io/jornal/

O guia completo para a equipa (instalação, publicação, fluxo editorial, proteção de dados) está no documento partilhado «Vox Aquilae — Guia de instalação e publicação».

## Onde está cada coisa

| Pasta / ficheiro | Conteúdo |
| --- | --- |
| `src/content/noticias/` | Publicações (uma por ficheiro .md) |
| `src/data/disciplinas.ts` | Lista de disciplinas (alterar também em `.pages.yml`) |
| `src/data/site.json` | Definições: nome, descrição, endereço do site do colégio |
| `public/media/` | Imagens carregadas pelo painel |
| `.pages.yml` | Configuração do painel de edição |
| `.github/workflows/publicar.yml` | Publicação automática (a cada alteração e diariamente às 05:00 UTC) |

## Trabalhar no computador (opcional)

```bash
npm install
npm run dev      # pré-visualização em http://localhost:4321
npm run build    # gera o site em dist/
```

Conteúdo marcado com `exemplo: true` mostra o selo «Exemplo» e deve ser substituído antes do lançamento.
