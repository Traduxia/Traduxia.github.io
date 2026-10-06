# Publicar en GitHub Pages

Repo: **https://github.com/Traduxia/Traduxia.github.io** (sitio de la
organización/usuario "Traduxia", se sirve en la raíz:
https://traduxia.github.io/). Despliegue automático con GitHub Actions: cada
`push` a `main` recompila Astro y publica. El workflow está en
`.github/workflows/deploy.yml`.

## Acceso

El repo ya existe en GitHub (creado por el equipo de Traduxia) pero la cuenta
con la que está autenticado `gh` en este equipo no tiene permisos de
escritura sobre él. Antes de poder hacer `git push` hace falta una de estas
dos cosas:

- Que alguien con acceso a la cuenta/organización **Traduxia** añada la otra
  cuenta como colaboradora con permiso de escritura (Settings → Collaborators
  and teams → Add people), o
- Autenticar `gh`/`git` en este equipo directamente con la cuenta Traduxia
  (`gh auth login`).

## Subir el proyecto (primera vez)

```powershell
git add -A
git commit -m "Web Traduxia Idiomas: primera versión"
git remote add origin https://github.com/Traduxia/Traduxia.github.io.git
git push -u origin main
gh api -X POST "repos/Traduxia/Traduxia.github.io/pages" -f build_type=workflow
```

Si el paso de Pages da error de "already exists", usa `-X PUT` en vez de
`-X POST`. Alternativa manual: repo → Settings → Pages → Build and
deployment → Source → "GitHub Actions".

Espera 1–2 min y mira el progreso en la pestaña **Actions** del repo. Cuando
termine: **https://traduxia.github.io/**

## Cambios siguientes

```powershell
git add -A
git commit -m "..."
git push
```

Pages se actualiza solo.

## Al pasar a un dominio propio

- `astro.config.mjs` → `site: 'https://tudominio.es'`
- `public/robots.txt` → `Sitemap: https://tudominio.es/sitemap-index.xml`
- `src/data/traduxia.js` → `dominio: 'https://tudominio.es'`
