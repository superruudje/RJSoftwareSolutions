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
        baseURL: '/',
        head: {
            title: 'RJ Software Solutions',
            meta: [
                // Charset & viewport
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

                // SEO basics
                { name: 'description', content: 'RJ Software Solutions - Professional software development and consulting.' },
                { name: 'keywords', content: 'software development, consulting, Vue, Java, web apps' },
                { name: 'author', content: 'RJ Software Solutions' },

                // Language & translation
                { name: 'google', content: 'notranslate' }, // prevent Google Translate popup

                // Indexing
                { name: 'robots', content: 'index, follow' },

                { name: 'theme-color', content: '#19202e' },
                { name: 'mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
            ],
            link: [
                { rel: 'canonical', href: 'https://rjsoftwaresolutions.nl' },
                { rel: 'manifest', href: '/manifest.json' }
            ]
        }
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