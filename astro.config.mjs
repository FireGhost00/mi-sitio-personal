import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fireghost00.github.io',
  base: '/mi-sitio-personal',
  output: 'static',
  compressHTML: true,
  inlineStylesheets: 'auto',
});
