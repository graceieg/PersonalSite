// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://gracearlayna.netlify.app/',
  integrations: [mdx(), sitemap(), react()],
  adapter: netlify({
    imageCDN: true // Enable Netlify Image CDN
  })
});