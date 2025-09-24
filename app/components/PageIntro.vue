<template>
    <section class="page-intro-section section has-profile-image mx-auto position-relative">

        <div class="position-absolute d-none d-md-flex flex-column align-items-center gap-4 start-0 top-0 ms-4 mt-4">
            <div class="diamond"></div>
            <div class="diamond opacity-75"></div>
            <div class="diamond opacity-50"></div>
            <div class="diamond opacity-25"></div>
        </div>

        <div class="position-absolute d-none d-md-flex flex-column align-items-center gap-4 end-0 bottom-0 me-4 mb-4">
            <div class="diamond alt opacity-25"></div>
            <div class="diamond alt opacity-50"></div>
            <div class="diamond alt opacity-75"></div>
            <div class="diamond alt"></div>
        </div>

        <div class="profile-holder text-center">
            <img alt="image" class="profile-pic rounded-circle" src="@/assets/images/profile.png">
        </div>
        <div class="intro-holder px-md-4">
            <h2 class="intro-name text-center mb-3">{{ title }}</h2>
            <div class="profile-intro text-md-center limit-max-width mx-auto">
                <slot name="intro-text"></slot>
            </div>
        </div>

        <div v-if="button" class="section-cta text-center mt-4">
            <NuxtLink
                class="btn btn-secondary theme-btn-cta"
                :to="button.to">
                {{ button.label }}
                <i class="bi bi-arrow-right-short fs-4 align-middle ms-1"></i>
            </NuxtLink>
        </div>

    </section>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    button?: {
        label: string,
        to: string
    }
}>()
</script>

<style scoped lang="css">
.diamond {
    width: 16px;
    height: 16px;
    background: #6C51A4;
    transform: rotate(45deg);
}
.diamond.alt {
    background: #54B689;
}

.page-intro-section .intro-name {
    font-size: 1.75rem;
    font-weight: 900;
    letter-spacing: 0.1rem;
}
.page-intro-section .intro-content {
    margin-top: 1rem;
}
.page-intro-section .profile-intro {
    position: relative;
}
</style>