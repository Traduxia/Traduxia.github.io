# Traduxia Idiomas — Agencia de Traducción (web)

Landing de una sola página para Traduxia Idiomas, agencia de traducción e
interpretación en Córdoba. Es una adaptación 1:1 de la estructura y mecánica
del proyecto "El Perro Verde" (`../perroverde-starter/perroverde`), pero
ambientada para traducción: paleta violeta/lila en vez de teal, fondo animado
con letras de distintos alfabetos en vez de huellas de pata, y logo/hero/
galería en SVG propios donde no había foto real.

## Marca
- Eslogan: **"Traducimos palabras, conservamos voces"** (`empresa.eslogan` en
  `src/data/traduxia.js`).
- Logo real del cliente: `assets/Logo.jpeg` (sello circular). Procesado a
  `src/assets/logo-traduxia.png` (circular, fondo transparente) y a los
  iconos de `public/` con `scripts/procesar-logo.mjs` — solo hace falta
  volver a ejecutarlo si el cliente manda un logo nuevo.
- `Marca.astro` es el componente que pinta el logo (Header y Footer).

## Datos de contacto (ya confirmados por el cliente, en `src/data/traduxia.js`)
- Email: `ag.traduxiaidiomas@gmail.com`
- Teléfono / WhatsApp: `635 993 000`
- Horario: `7:00 - 15:00`
- Sede (para el mapa de "Dónde estamos"): Facultad de Filosofía y Letras,
  Universidad de Córdoba (Pza. del Cardenal Salazar, 3, 14003 Córdoba).

## Pendiente
- Dominio propio (de momento `https://traduxiaidiomas.es` es un placeholder
  en `astro.config.mjs` y `src/data/traduxia.js`).

## Stack
Igual que el proyecto original: Astro estático, sin frameworks de UI,
GSAP + ScrollTrigger para reveals, CSS propio con variables en `:root`.

## Comandos
- `npm install`
- `npm run dev` — servidor local
- `npm run build` — genera `dist/`
- `npm run preview`
- `node scripts/procesar-logo.mjs` — regenera logo e iconos si cambia
  `assets/Logo.jpeg`

## Convenciones
Las mismas que el proyecto original: textos y comentarios en español, un
componente por sección, nombres en español.
