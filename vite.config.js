import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    base: './',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    build: {
        outDir: 'dist',
        assetsDir: '.',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                format: 'cjs',
                manualChunks: undefined
            }
        },
        chunkSizeWarningLimit: 600
    }
}) 