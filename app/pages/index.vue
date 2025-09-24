<template>
    <div class="container-fluid">
        <TopBar/>
        <PageIntro title="RJ Software Solutions">
            <template #intro-text>
                <p>Ik ben Rudi, freelance software engineer gespecialiseerd in het ontwikkelen van maatwerk webapplicaties en het
                    optimaliseren van digitale processen. Met een achtergrond in o.a. Vue, Java en MySQL help ik bedrijven hun ideeën om te
                    zetten in schaalbare en betrouwbare software. Bekijk mijn
                    <NuxtLink to="/app/pages/projecten">
                        laatste projecten en case studies
                    </NuxtLink>
                    .
                </p>
            </template>
        </PageIntro>

        <section class="featured-projects-section section mx-auto">
            <h3 class="section-heading mb-4">Uitgelichte projecten</h3>
            <div class="section-intro mb-5 limit-max-width mx-auto text-md-center">Een selectie van recente projecten die mijn aanpak en
                expertise laten zien. Praktische oplossingen, afgestemd op de wensen van mijn klanten.
            </div>
            <div class="featured-project-list container">
                <div class="row justify-content-center gy-4">
                    <div v-for="project in projectsStore.spotlightProjects"
                         :key="project.id"
                         class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                            <div class="rounded overflow-hidden">
                                <img
                                    alt="image"
                                    class="w-100"
                                    :src="getProjectImage(project.imageUrl)">
                            </div>
                            <div class="card-body px-0">
                                <h5 class="card-title"><a href="case-study.html">{{ project.title }}</a></h5>
                                <p class="card-text mb-2">{{ project.summary.slice(0, 100) }}...</p>
                                <div class="d-flex">
                                    <a
                                        v-if="project.demo"
                                        class="card-link more-link"
                                        :href="project.demo"
                                        target="_blank">Live demo
                                    </a>
                                    <div v-if="project.demo" class="vr mx-2 bg-body"></div>
                                    <a
                                        v-if="project.hasSinglePage"
                                        class="card-link more-link"
                                        href="case-study.html">Lees meer
                                        <span class="link-arrow">
                                            <i class="bi bi-arrow-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-cta text-center mt-3">
                    <NuxtLink class="btn btn-secondary theme-btn-cta" to="/app/pages/projecten">Meer projecten
                        <i class="bi bi-arrow-right-short fs-4 align-middle ms-1"></i>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="skills-section section mx-auto">
            <h3 class="section-heading mb-4">Skills &amp; diensten</h3>
            <div class="section-intro mb-5 limit-max-width text-md-center">
                Mijn kennis van moderne technologieën zet ik in voor schaalbare oplossingen. Van ontwikkeling tot advies: ik help je project
                efficiënt vooruit.
            </div>
            <div class="row tech-list justify-content-center align-items-center">
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="JavaScript"
                         class="rounded"
                         src="@/assets/images/tech-icons/javascript.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="TypeScript"
                         class="rounded"
                         src="@/assets/images/tech-icons/typescript.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="Vue.js"
                         class="rounded"
                         src="@/assets/images/tech-icons/vue.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="Bootstrap"
                         class="rounded"
                         src="@/assets/images/tech-icons/bootstrap5.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="Vite"
                         class="rounded"
                         src="@/assets/images/tech-icons/vite.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="Azure"
                         class="rounded"
                         src="@/assets/images/tech-icons/azure.svg">
                </div>

                <div class="clearfix"></div>

                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="HTML"
                         class="rounded"
                         src="@/assets/images/tech-icons/html5.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="Sass"
                         class="rounded"
                         src="@/assets/images/tech-icons/sass.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="Laravel"
                         class="rounded"
                         src="@/assets/images/tech-icons/laravel.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="Php"
                         class="rounded"
                         src="@/assets/images/tech-icons/php.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="Java"
                         class="rounded"
                         src="@/assets/images/tech-icons/java.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="MySQL"
                         class="rounded"
                         src="@/assets/images/tech-icons/mysql.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="Wordpress"
                         class="rounded"
                         src="@/assets/images/tech-icons/wordpress.svg">
                </div>
                <div class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                    <img alt="Elementor"
                         class="rounded"
                         src="@/assets/images/tech-icons/elementor.svg">
                </div>
            </div>
            <div class="section-cta text-center mt-4">
                <NuxtLink
                    to="resume"
                    class="btn btn-secondary theme-btn-cta">Bekijk werkervaring
                    <i class="bi bi-arrow-right-short fs-4 align-middle ms-1"></i>
                </NuxtLink>
            </div>

            <div class="skill-blocks py-5 row justify-content-center">
                <div class="item col-md-6 col-lg-4 text-md-center">
                    <div class="item-icon-holder mx-md-auto"><i class="item-icon bi bi-terminal"></i></div>
                    <h3 class="item-title mb-3">Web Development</h3>
                    <div class="item-desc">
                        Ontwikkeling van maatwerk webapplicaties die zowel gebruiksvriendelijk als schaalbaar zijn, afgestemd op de
                        behoeften en processen van jouw organisatie.”
                    </div>
                </div>
                <div class="item col-md-6 col-lg-4 text-md-center">
                    <div class="item-icon-holder  mx-md-auto"><i class="item-icon bi bi-database-check"></i></div>
                    <h3 class="item-title mb-3">Database architectuur</h3>
                    <div class="item-desc">
                        Ontwerp en optimalisatie van database-structuren die efficiënt, veilig en schaalbaar zijn, zodat jouw applicaties
                        betrouwbare en snelle data-opslag hebben.
                    </div>
                </div>
                <div class="item col-md-6 col-lg-4 text-md-center">
                    <div class="item-icon-holder  mx-md-auto"><i class="item-icon bi bi-infinity"></i></div>
                    <h3 class="item-title mb-3">CI/CD & DevOps</h3>
                    <div class="item-desc">
                        Implementatie van CI/CD pipelines en DevOps-praktijken om softwareontwikkeling te versnellen, foutloos te maken en
                        betrouwbare, automatische uitrol van applicaties te garanderen.”
                    </div>
                </div>
                <div class="item col-md-6 col-lg-4 text-md-center">
                    <div class="item-icon-holder  mx-md-auto"><i class="item-icon bi bi-gear-wide-connected"></i></div>
                    <h3 class="item-title mb-3">API integraties</h3>
                    <div class="item-desc">
                        Ontwikkeling en integratie van APIs om systemen en applicaties naadloos te koppelen, data-uitwisseling te
                        automatiseren en processen efficiënt te stroomlijnen.
                    </div>
                </div>
                <div class="item col-md-6 col-lg-4 text-md-center">
                    <div class="item-icon-holder  mx-md-auto"><i class="item-icon bi bi-patch-question-fill"></i></div>
                    <h3 class="item-title mb-3">Advies</h3>
                    <div class="item-desc">
                        Advies en begeleiding bij softwareontwikkeling, van architectuur tot implementatie, om projecten efficiënt,
                        schaalbaar en toekomstbestendig te realiseren.
                    </div>
                </div>
            </div>

            <div class="section-cta text-center">
                <NuxtLink class="btn btn-secondary theme-btn-cta" to="contact">Neem contact op
                    <i class="bi bi-arrow-right-short fs-4 align-middle ms-1"></i>
                </NuxtLink>
            </div>
        </section>

        <section class="testimonials-section section py-5 mx-auto mb-0">
            <h3 class="section-heading mb-4">Klanten</h3>
            <div class="section-intro mb-5 limit-max-width mx-auto text-md-center">Een selectie van recente projecten die mijn aanpak en
                expertise laten zien. Praktische oplossingen, afgestemd op de wensen van mijn klanten.
            </div>
            <div class="container">
                <div class="client-logo-list row d-flex justify-content-center align-items-stretch py-4 gx-2 gx-lg-3">
                    <div class="logo-item col-4 col-md-3 col-lg-auto mb-3">
                        <div class="logo-holder">
                            <img alt="logo-belastingdienst" class="logo-image" src="@/assets/images/clients/client-logo-bd.svg">
                        </div>
                    </div>
                    <div class="logo-item col-4 col-md-3 col-lg-auto mb-3">
                        <div class="logo-holder">
                            <img alt="logo-clous-seven" class="logo-image" src="@/assets/images/clients/client-logo-cs.svg">
                        </div>
                    </div>
                    <div class="logo-item col-4 col-md-3 col-lg-auto mb-3">
                        <div class="logo-holder">
                            <img alt="logo-bloom-design" class="logo-image" src="@/assets/images/clients/client-logo-bloom.png">
                        </div>
                    </div>
                    <div class="logo-item col-4 col-md-3 col-lg-auto mb-3">
                        <div class="logo-holder">
                            <img alt="logo-academie-voor-weerbaarheid" class="logo-image" src="@/assets/images/clients/client-logo-avw.svg">
                        </div>
                    </div>
                    <div class="logo-item col-4 col-md-3 col-lg-auto mb-3">
                        <div class="logo-holder">
                            <img alt="logo-super-sound-leiden" class="logo-image" src="@/assets/images/clients/client-logo-ssl.svg">
                        </div>
                    </div>
                </div>

                <div class="slider-container text-center px-md-4 px-lg-5">
                    <div class="testimonials-slider tiny-slider">
                        <div class="item">
                            <div class="item-inner position-relative">
                                <div class="quote-holder">
                                    <i class="quote-icon fa-solid fa-quote-left"></i>
                                    <i class="quote-icon fa-solid fa-quote-right"></i>
                                    <blockquote class="quote-content px-3 px-lg-5 mb-3 text-start">
                                        You can list client testimonials here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec at erat vel quam cursus sagittis. <span class="quote-highlight">Highlighted text example etiam volutpat ornare quam</span>
                                        at cursus mi tristique sit amet.
                                    </blockquote>
                                </div>
                                <div class="source-holder ps-3 ps-lg-5 text-start">
                                    <div class="source-meta">
                                        <div class="name">Sam Doe, Lead Developer at Stripe</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-inner">
                                <div class="quote-holder">
                                    <i class="quote-icon fa-solid fa-quote-left"></i>
                                    <i class="quote-icon fa-solid fa-quote-right"></i>
                                    <blockquote class="quote-content px-3 px-lg-5 mb-3 text-start">
                                        <i class="quote-icon fa-solid fa-quote-left"></i>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at erat vel quam cursus sagittis.
                                        <span class="quote-highlight">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>. In
                                        egestas est at lorem lacinia malesuada vel at arcu.
                                    </blockquote>
                                </div>
                                <div class="source-holder ps-3 ps-lg-5 text-start">
                                    <div class="source-meta">
                                        <div class="name">Sarah Doe, Project Manager at Revlout</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-inner">
                                <div class="quote-holder text-start text-md-center">
                                    <i class="quote-icon fa-solid fa-quote-left"></i>
                                    <i class="quote-icon fa-solid fa-quote-right"></i>
                                    <blockquote class="quote-content px-3 px-lg-5 mb-3 text-start">
                                        <i class="quote-icon fa-solid fa-quote-left"></i>
                                        Excellent lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at erat vel quam cursus
                                        sagittis. Curabitur vestibulum mollis leo, sed ultricies felis egestas ac. <span
                                        class="quote-highlight">Etiam volutpat ornare quam</span>.
                                    </blockquote>
                                </div>
                                <div class="source-holder ps-3 ps-lg-5 text-start">
                                    <div class="source-meta">
                                        <div class="name">James Doe, Tech Lead at Coinbase</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="slider-custom-controls d-none d-md-block">
                        <div class="prev" data-controls="prev">
                            <i class="fas fa-chevron-left"></i>
                        </div>
                        <div class="next" data-controls="next">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {tns} from "tiny-slider";
import TopBar from "~/components/TopBar.vue";
import PageIntro from "~/components/PageIntro.vue";
import {useProjectsStore} from "@/stores/projects";
import {getProjectImage} from "@/utils/getProjectImage";

useHead({
    title: 'RJ Software Solutions',
    meta: [
        { name: 'description', content: 'Software development op maat voor jouw bedrijf.' }
    ],
})

const projectsStore = useProjectsStore()

onMounted(() => {
    tns({
        container: '.tiny-slider',
        loop: true,
        items: 1,
        slideBy: 'page',
        nav: true,
        autoplay: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        gutter: 0,
        navPosition: 'bottom',
        controls: true,
        controlsContainer: ".slider-custom-controls",
        speed: 200
    });
})


</script>

<style lang="css">
.featured-project-list .card {
    background: none;
    border: none;
}

.featured-project-list .card-title {
    font-size: 1.125rem;
}

.featured-project-list .card-title a {
    color: #d7dde9;
    text-decoration: none;
}

.featured-project-list .card-title a:hover {
    color: #629feb;
}

.featured-project-list .card-text {
    color: #a5b3ce;
}

.featured-project-list .card-text, .featured-project-list .card-link {
    font-size: 1rem;
}

.slider-container {
    position: relative;
}

.slider-container .quote-holder {
    position: relative;
    padding-top: 1rem;
}

.slider-container .quote-content {
    font-size: 1.125rem;
    line-height: 1.8;
    font-style: italic;
}

.slider-container .quote-icon {
    position: absolute;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.1);
}

.slider-container .quote-icon.fa-quote-left {
    left: 0;
    top: 0;
}

.slider-container .quote-icon.fa-quote-right {
    right: 0;
    top: 0;
}

.slider-container .quote-highlight {
    color: #629feb;
    font-weight: bold;
}

.slider-container .source-holder {
    font-size: 0.875rem;
    color: #a5b3ce;
}

.slider-container .tns-nav {
    display: block;
    margin-top: 1rem;
}

.slider-container .tns-nav button {
    width: 8px;
    height: 8px;
    padding: 0;
    margin: 0 5px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: 0;
}

.slider-container .tns-nav button.tns-nav-active {
    background: rgba(255, 255, 255, 0.8);
}

.slider-container .slider-custom-controls div {
    font-size: 1.25rem;
    display: inline-block;
    color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    width: 54px;
    height: 54px;
    position: absolute;
    top: 50%;
    margin: 0;
    margin-top: -46px;
    outline: none;
    cursor: pointer;
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
}

.slider-container .slider-custom-controls div:hover {
    color: #629feb;
    background: rgba(0, 0, 0, 0.2);
}

.slider-container .slider-custom-controls div.prev {
    left: -1rem;
    padding-top: 0.75rem;
}

.slider-container .slider-custom-controls div.next {
    right: -1rem;
    padding-top: 0.75rem;
}

.client-logo-list .logo-holder {
    display: flex;
    height: 100%;
    max-height: 80px;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    justify-content: center;
}

.client-logo-list .logo-holder img {
    width: 120px;
    max-width: 100%;
    height: auto;
    -webkit-opacity: 0.6;
    -moz-opacity: 0.6;
    opacity: 0.6;
}

.tech-list .icon-item {
    width: 80px;
}

.tech-list .icon-item img {
    max-width: 100%;
    height: auto;
}

.skill-blocks .item {
    padding: 1rem;
    margin-bottom: 1.5rem;
}

.skill-blocks .item-icon-holder {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: #d7dde9;
    margin-bottom: 1.125rem;
}

.skill-blocks .item-icon-holder .item-icon {
    font-size: 2rem;
}

.skill-blocks .item-title {
    font-size: 1.125rem;
}
</style>