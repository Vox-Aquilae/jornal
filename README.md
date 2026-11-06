# Vox Aquilae — jornal digital do Colégio Planalto

Site estático (Astro) com painel de edição (Pages CMS) e publicação automática no GitHub Pages. Custo: 0 €.

## Instalação rápida

1. Criar a organização GitHub `voxaquilae` (conta com email institucional).
2. Criar o repositório público `voxaquilae.github.io` e carregar todo o conteúdo desta pasta (incluindo `.github/` e `.pages.yml`).
3. *Settings → Pages → Source: GitHub Actions*.
4. Abrir https://app.pagescms.org, entrar com a conta do jornal e abrir o repositório.

O guia completo para a equipa (instalação, publicação, fluxo editorial, proteção de dados) está no documento partilhado «Vox Aquilae — Guia de instalação e publicação».

## Onde está cada coisa

| Pasta / ficheiro | Conteúdo |
| --- | --- |
| `src/content/noticias/` | Notícias (uma por ficheiro .md) |
| `src/content/vozes/` | Testemunhos de alunos, famílias e professores |
| `src/content/agenda/` | Eventos |
| `src/content/galeria/` | Reportagens fotográficas |
| `src/content/paginas/` | Páginas fixas (Sobre, Participar) |
| `src/data/site.json` | Definições: lema, ligações de WhatsApp, formulário, newsletter |
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
