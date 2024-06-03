import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://v3.gwei.cz',
  base: '/',
  integrations: [tailwind(), mdx()],
  vite: {
    plugins: [yaml()]
  }
});