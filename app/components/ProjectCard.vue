<template>
    <div class="project-item col-12 col-md-6 col-lg-12 mb-5">
        <div class="project-item-inner row">
            <div class="col-12 col-lg-5 col-xl-4">
                <img alt="image"
                     class="project-thumb rounded-2 mb-3 mb-lg-0 rounded mx-auto"
                     :src="getProjectImage(project.imageUrl)">
            </div>
            <div class="col-12 col-lg-7 col-xl-8">
                <h3 class="title"><a href="case-study.html">{{ project.title }}</a></h3>
                <div class="intro mb-3">{{  project.summary }}</div>

                <template v-if="project.tags">
                    <h4 class="subtitle">Tech Stack:</h4>
                    <ul class="tech-stack list-inline">
                        <li v-for="tag in project.tags" :key="tag" class="list-inline-item">
                            <img
                                alt="Javascript"
                                class="rounded"
                                :src="getIconPath(tag)">
                        </li>
                    </ul>
                </template>

                <div class="d-flex">
                    <a
                        v-if="project.demo"
                        class="more-link"
                        :href="project.demo"
                        target="_blank">Live demo
                    </a>
                    <div v-if="project.demo" class="vr mx-2"></div>
                    <a
                        v-if="project.hasSinglePage"
                        class="more-link"
                        href="case-study.html">Lees meer
                        <span class="link-arrow">
                            <i class="bi bi-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type {Project} from "@/types/project.ts";
import {getIconPath} from "@/utils/getIconPath";
import {getProjectImage} from "@/utils/getProjectImage";

defineProps<{
    project: Project
}>()
</script>

<style lang="css" scoped>

</style>