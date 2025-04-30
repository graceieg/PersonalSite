// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://gracearlayna.netlify.app/',
  integrations: [mdx(), sitemap()],
  adapter: netlify({
    imageCDN: true // Enable Netlify Image CDN
  })
});