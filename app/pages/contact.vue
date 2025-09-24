<template>
    <div class="container-fluid">
        <TopBar/>

        <section class="page-intro-section section has-profile-image mx-auto mb-0">

            <div class="profile-holder text-center">
                <img alt="image" class="profile-pic rounded-circle" src="@/assets/images/profile.png">
            </div>
            <div class="intro-holder">
                <h2 class="intro-name text-center">Get In Touch</h2>
                <div class="contact-intro text-md-center limit-max-width mx-auto">
                    <p>Hulp nodig bij jouw project? Ik bied ondersteuning bij ontwikkeling, advies en integraties, zodat jouw software
                        efficiënt, schaalbaar en betrouwbaar wordt.</p>
                </div>

                <div class="text-center resume-contact mt-4">
                    <ul class="resume-contact-list list-unstyled list-inline mb-0 justify-content-between">
                        <li class="list-inline-item me-md-3 me-lg-5"><i class="resume-contact-icon bi bi-telephone-inbound me-2"></i>
                            <a href="tel:0031629010196">+316 29 0101 96</a></li>
                        <li class="list-inline-item me-md-3 me-lg-5"><i class="resume-contact-icon bi bi-envelope me-2"></i>
                            <a href="mailto:info@rjsoftwaresolutions.com">info@rjsoftwaresolutions.com</a>
                        </li>
                        <li class="list-inline-item me-lg-5"><i class="resume-contact-icon bi bi-globe me-2"></i>
                            <a href="https://rjsoftwaresolutions.nl" target="_blank">https://rjsoftwaresolutions.nl</a></li>
                    </ul>
                </div>
            </div>

        </section>
    </div>

</template>

<script lang="ts" setup>
useHead({
    title: 'RJ Software Solutions | Contact',
    meta: [
        {name: 'description', content: 'Software development op maat voor jouw bedrijf.'}
    ],
})
</script>

<style lang="css" scoped>
.resume-contact {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1rem;
    font-size: 0.875rem;
}

.resume-contact-icon {
    font-size: 1.125rem;
    vertical-align: middle;
}

</style>