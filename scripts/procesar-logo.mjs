// Regenera el logo y los iconos a partir del original en assets/Logo.jpeg
// (el sello circular que pasó el cliente). Solo hace falta volver a
// ejecutarlo si se sustituye ese archivo original.
//
// Uso: node scripts/procesar-logo.mjs

import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const src = path.join(root, 'assets', 'Logo.jpeg');
const srcAssets = path.join(root, 'src', 'assets');
const pub = path.join(root, 'public');

// Recorta el margen uniforme alrededor del sello circular. El umbral se
// ajustó a ojo para este archivo: con uno más bajo el ruido del papel del
// fondo impide que `trim()` detecte los bordes.
const trimmedBuf = await sharp(src).trim({ threshold: 40 }).toBuffer();
const tMeta = await sharp(trimmedBuf).metadata();

const size = Math.max(tMeta.width, tMeta.height);
const squared = await sharp(trimmedBuf)
  .resize(size, size, { fit: 'contain', background: { r: 244, g: 241, b: 234, alpha: 1 } })
  .toBuffer();

// Máscara circular: deja transparente todo lo que quede fuera del sello.
const maskSize = 1600;
const circleMask = Buffer.from(
  `<svg width="${maskSize}" height="${maskSize}"><circle cx="${maskSize / 2}" cy="${maskSize / 2}" r="${maskSize / 2}" fill="#fff"/></svg>`
);
const resized = await sharp(squared).resize(maskSize, maskSize).toBuffer();
const circular = await sharp(resized)
  .ensureAlpha()
  .composite([{ input: circleMask, blend: 'dest-in' }])
  .png()
  .toBuffer();

await sharp(circular).toFile(path.join(srcAssets, 'logo-traduxia.png'));
await sharp(circular).resize(512, 512).toFile(path.join(pub, 'android-chrome-512.png'));
await sharp(circular).resize(192, 192).toFile(path.join(pub, 'android-chrome-192.png'));
await sharp(circular).resize(180, 180).toFile(path.join(pub, 'apple-touch-icon.png'));
await sharp(circular).resize(32, 32).toFile(path.join(pub, 'favicon-32.png'));

// Imagen Open Graph (1200x630): fondo degradado violeta + sello + eslogan.
const logoB64 = circular.toString('base64');
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630">
      <stop offset="0" stop-color="#7c3aed"/>
      <stop offset="1" stop-color="#3d1d78"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <image x="80" y="105" width="420" height="420" href="data:image/png;base64,${logoB64}"/>
  <text x="560" y="280" font-family="Georgia, 'Times New Roman', serif" font-size="64" fill="#ffffff" font-weight="600">Traduxia</text>
  <text x="560" y="350" font-family="Georgia, 'Times New Roman', serif" font-size="64" fill="#ffffff" font-weight="600">Idiomas</text>
  <text x="560" y="410" font-family="Arial, sans-serif" font-size="28" fill="#e3d4fc">Traducimos palabras, conservamos voces</text>
</svg>`;
await sharp(Buffer.from(ogSvg)).png().toFile(path.join(pub, 'img', 'og.png'));

console.log('Logo e iconos regenerados.');
