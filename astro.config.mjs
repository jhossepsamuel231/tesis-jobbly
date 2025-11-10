import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update the `site` with your production URL
export default defineConfig({
  site: 'https://landing-jobbly.netlify.app',
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
});
