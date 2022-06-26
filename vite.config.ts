import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const timestamp = new Date().getTime();

export default defineConfig({
    plugins: [vue()],
    base: './',
    server: {
        host: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import '@/assets/scss/global/variables';`,
                charset: false
            }
        }
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `[name].${timestamp}.js`,
                chunkFileNames: `[name].${timestamp}.js`,
                assetFileNames: `[name].${timestamp}.[ext]`
            }
        }
    }
});
