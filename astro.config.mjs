import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

// import { astroImageTools } from 'astro-imagetools'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap()],
    image: {
        domains: ['images.unsplash.com'],
    },
    build: {
        inlineStylesheets: `never`,
    },
    vite: {
        server: {
            host: true,
        },
        plugins: [],
    },
})
