import {defineStore} from 'pinia'
import type {Project} from "~/app/types/project.ts";

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [{
            id: '4jis',
            title: 'Belastingdienst Connect',
            summary: 'Een dynamische formulierbouwer ontwikkeld voor de Belastingdienst waarmee complexe processen eenvoudig digitaal kunnen worden ingericht en beheerd.',
            description: '...',
            hasSinglePage: true,
            imageUrl: 'project-thumb-bd.png',
            tags: ['azure', 'typescript', 'vue'],
            spotlight: true,
        }, {
            id: 'dkpq',
            title: 'CloudControls',
            summary: 'CloudControls is een cloudgebaseerd ITSM-systeem voor IT-servicemanagement, met focus op automatisering van incidenten, wijzigingen en assetbeheer. Het biedt ticketing, workflows, selfservice-portals en rapportages voor efficiëntere IT-processen en compliance.',
            description: '...',
            hasSinglePage: true,
            imageUrl: 'project-thumb-cc.png',
            tags: ['docker', 'typescript', 'vue', 'bootstrap5', 'java'],
            spotlight: true,
        }, {
            id: '1fjn',
            title: 'Lekker Speuren',
            summary: 'Een YouTube look-a-like voor alle content van de streamers van Lekker Spelen. Onderhouden door de trouwe community.',
            description: '...',
            hasSinglePage: true,
            imageUrl: 'project-thumb-ls.png',
            demo: 'https://lekkerspeuren.nl/',
            tags: ['javascript', 'typescript', 'vue', 'bootstrap5'],
            spotlight: true,
        }, {
            id: '9ens',
            title: 'Voetbal pool',
            summary: 'Een webapp waarin teams of vrienden sportcompetities voorspellen, punten verdienen en samen de strijd aangaan om kampioen te worden.',
            description: '...',
            hasSinglePage: true,
            imageUrl: 'project-thumb-kp.png',
            demo: 'https://kampioenpool.nl/#/',
            tags: ['typescript', 'vue', 'bootstrap5'],
            spotlight: false,
        }, {
            id: '3kf9',
            title: 'Browser plugins',
            summary: '...',
            description: '...',
            hasSinglePage: true,
            imageUrl: 'project-thumb-tw.png',
            tags: ['chrome', 'firefox', 'javascript'],
            spotlight: false,
        }, {
            id: 'fiq2',
            title: 'Wordpress website',
            summary: '...',
            description: '...',
            hasSinglePage: true,
            imageUrl: 'project-thumb-avw.png',
            tags: ['wordpress', 'elementor', 'php'],
            spotlight: false,
        }, {
            id: 'sj28',
            title: 'Wordpress website',
            summary: '...',
            description: '...',
            hasSinglePage: true,
            imageUrl: 'project-thumb-ssl.png',
            tags: ['wordpress', 'elementor', 'php'],
            spotlight: false,
        }] as Project[],
    }),

    getters: {
        getById: (state) => (id: string) => state.projects.find(p => p.id === id),
        allProjects: (state) => state.projects,
        spotlightProjects: (state) => state.projects.filter((p) => p.spotlight === true),
    },
})