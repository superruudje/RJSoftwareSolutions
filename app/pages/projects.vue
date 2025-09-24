<template>
    <div class="container-fluid">
        <TopBar/>
        <PageIntro :button="{label: 'Contact', to: 'contact'}" title="Mijn projecten">
            <template #intro-text>
                <p class="mb-4">Bekijk een selectie van mijn recente projecten, waarin ik maatwerksoftware ontwikkelde, systemen integreerde
                    en praktische, schaalbare oplossingen leverde voor diverse klanten.</p>
            </template>
        </PageIntro>

        <section class="projects-section section mx-auto">
            <div class="row justify-content-center gx-lg-5">
                <ProjectCard
                    v-for="project in projectsToShow"
                    :key="project.id"
                    :project="project"/>
            </div>

            <div
                v-if="projectsStore.projects.length > 5"
                class="section-cta text-center d-grid col-6 mx-auto">
                <button
                    class="btn btn-secondary"
                    @click="toggleProjects">
                    {{ isExpanded ? 'Toon minden' : 'Toon meer' }}
                    <span class="d-none d-lg-inline">projecten</span>
                </button>
            </div>
        </section>

        <section class="leadgen-section section mx-auto">
            <h3 class="section-heading text-start text-md-center text-highlight">Hulp nodig bij jouw project?</h3>
            <div class="intro text-md-center">Hulp nodig bij jouw project? Ik bied ondersteuning bij ontwikkeling, advies en integraties,
                zodat jouw software efficiënt, schaalbaar en betrouwbaar wordt.
            </div>
            <div class="text-center mt-4">
                <NuxtLink
                    class="btn btn-secondary"
                    to="contact">Neem contact op
                    <i class="bi bi-arrow-right-short fs-4 align-middle ms-1"></i>
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import {useProjectsStore} from "@/stores/projects";
import ProjectCard from "@/components/ProjectCard.vue";

useHead({
    title: 'RJ Software Solutions | Projecten',
    meta: [
        { name: 'description', content: 'Software development op maat voor jouw bedrijf.' }
    ],
})

const projectsStore = useProjectsStore();

// how many projects to show initially
const visibleCount = ref(5)

const projectsToShow = computed(() =>
    projectsStore.projects.slice(0, visibleCount.value)
)

function toggleProjects() {
    if (visibleCount.value === 5) {
        // show all
        visibleCount.value = projectsStore.projects.length
    } else {
        // collapse back
        visibleCount.value = 5
    }
}

const isExpanded = computed(() => visibleCount.value > 5)
</script>

<style lang="css">
.projects-section .project-item .title {
    font-size: 1.125rem;
}

.projects-section .project-item .title a {
    color: white;
    text-decoration: none;
}

.projects-section .project-item .title a:hover {
    color: #629feb;
    text-decoration: underline;
}

.projects-section .project-item .subtitle {
    font-size: 0.875rem;
}

.projects-section .project-thumb {
    max-width: 320px;
    width: 100%;
}

.tech-stack img {
    width: auto;
    height: 25px;
}

.tech-stack .list-label {
    color: #a5b3ce;
}

.contact-cta .intro {
    max-width: 400px;
    margin: 0 auto;
}

.case-study-heading {
    font-size: 1.65rem;
    color: white;
}

.case-study-section-content h4, .case-study-section-content .h4 {
    font-size: 1.125rem;
}

.key-results .item .item-icon {
    font-size: 2rem;
}

.key-results .item .key-data {
    font-weight: bold;
    font-size: 2rem;
    color: white;
}

.key-results .item .key-data-desc {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.75rem;
}

.result-item .result-data {
    width: 100px;
    height: 100px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
}

.leadgen-section .section-heading {
    font-size: 1.5rem;
}

</style>