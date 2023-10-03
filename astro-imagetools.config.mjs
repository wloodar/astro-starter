import { defineConfig } from 'astro-imagetools/config'

export default defineConfig({
    assetFileNames: '_astro/media/[name]@[width].[ext]',
})
