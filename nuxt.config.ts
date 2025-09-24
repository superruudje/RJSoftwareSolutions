import { defineNuxtConfig } from 'nuxt/config';
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
    compatibilityDate: '2025-09-23',
    ssr: true,
    nitro: {
        preset: 'github-pages',
        prerender: {
            autoSubfolderIndex: true,
            // Add dynamic routes if needed
            routes: ['/', '/projecten', '/resume', '/contact']
        }
    },
    app: {
        baseURL: '/RJSoftwareSolutions/'
    },
    typescript: { strict: true },
    modules: ['@pinia/nuxt'],
    css: [
        'tiny-slider/dist/tiny-slider.css',
        '@/assets/styles/main.sass',
    ],
    vite: {
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./app', import.meta.url)),
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    quietDeps: true
                }
            }
        }
    },
})