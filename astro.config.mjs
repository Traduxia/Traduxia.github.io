import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Se publica como sitio de GitHub Pages del usuario/organización "Traduxia"
  // (se sirve en la raíz). Cambiar cuando haya dominio propio.
  site: 'https://traduxia.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  // Escuchar en IPv4: en Windows el navegador resuelve "localhost" a 127.0.0.1
  // y Vite por defecto solo abre el puerto en ::1 (IPv6).
  server: { host: '127.0.0.1', port: 4322 },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
