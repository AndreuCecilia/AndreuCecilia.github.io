import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [tailwind(), sitemap()],
    site: 'https://andreucecilia.com/',
    base: '/'
});