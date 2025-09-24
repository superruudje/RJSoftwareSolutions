<template>
    <div class="top-bar text-center position-relative">
        <div class="top-bar-inner">
            <div class="position-absolute start-0 d-flex gap-3 align-items-center" style="top: 1rem; z-index: 9999">
                <NuxtLink class="d-flex align-items-center text-decoration-none" to="/">
                    <img v-if="isLightMode" class="main-logo me-3" alt="logo" src="../assets/images/logo-black.svg"/>
                    <img v-else class="main-logo me-3" alt="logo" src="../assets/images/logo-white.svg"/>
                    <h5 class="d-none d-lg-block text-uppercase ls-1 mb-0">Software <span class="fw-medium">Solutions</span></h5>
                </NuxtLink>
            </div>

            <div class="position-absolute end-0 d-flex gap-3 align-items-center" style="top: 1rem">
                <div class="mode-toggle text-center">
                    <input id="darkmode" v-model="isLightMode" class="toggle" type="checkbox">
                    <label class="toggle-btn mx-auto mb-0" for="darkmode">
                        <span class="day-icon toggle-icon">
                            <i class="bi bi-sun-fill lh-1"></i>
                        </span>
                        <span class="night-icon toggle-icon">
                            <i class="bi bi-moon-fill lh-1"></i>
                        </span>
                    </label>
                </div>
                <NuxtLink to="contact" class="btn btn-primary top-bar-cta">Hire Me</NuxtLink>
            </div>


            <ul class="social-list list-inline mx-auto d-none d-lg-block">
                <li class="list-inline-item me-0 me-md-1 me-lg-2">
                    <a href="https://github.com/superruudje" target="_blank"><i class="bi bi-github"></i></a>
                </li>
                <li class="list-inline-item me-0 me-md-1 me-lg-2">
                    <a href="https://www.linkedin.com/in/rudi-haamke-917840141/" target="_blank"><i class="bi bi-linkedin"></i></a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";
import Cookies from 'js-cookie';

const isLightMode = ref(false);

onMounted(() => {
    // Initialize from cookie
    if (Cookies.get("mode") === "light-mode") {
        isLightMode.value = true;
        document.body.classList.add("light-mode");
    } else {
        isLightMode.value = false;
        document.body.classList.remove("light-mode");
    }
});

// Watch for changes and update cookie + body class
watch(isLightMode, (newVal) => {
    if (newVal) {
        document.body.classList.add("light-mode");
        Cookies.set("mode", "light-mode", {expires: 7});
    } else {
        document.body.classList.remove("light-mode");
        Cookies.remove("mode");
    }
});

</script>

<style lang="css" scoped>

.top-bar {
    min-height: 60px;
    padding-top: 1rem;
}

.top-bar .top-bar-cta {
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
}

.main-logo {
    height: 40px;
    transition: transform .2s ease-in-out;
}

.main-logo:hover {
    transform: rotate(-5deg) scale(1.1);
}

.social-list a {
    width: 38px;
    height: 38px;
    padding-top: 6px;
    font-size: 17px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.1);
    color: #a5b3ce;
}

.social-list a:hover, .social-list a:focus {
    color: #629feb;
    background: rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .social-list a:hover, .social-list a:focus {
        transition: none;
    }
}

/* Dark/Light Mode Toggle */
.mode-toggle .toggle {
    display: none;
}

.mode-toggle .toggle + .toggle-btn {
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 47px;
    height: 26px;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    transition: all 0.3s ease-in-out;
    border: 2px solid #a5b3ce;
    border-radius: 54px;
}

@media (prefers-reduced-motion: reduce) {
    .mode-toggle .toggle + .toggle-btn {
        transition: none;
    }
}

.mode-toggle .toggle + .toggle-btn .toggle-icon {
    color: #a5b3ce;
    font-size: 10.25px;
    display: flex;
}

.mode-toggle .toggle + .toggle-btn::-moz-selection {
    background: none;
}

.mode-toggle .toggle + .toggle-btn::selection {
    background: none;
}

.mode-toggle .toggle + .toggle-btn:after, .mode-toggle .toggle + .toggle-btn:before {
    position: absolute;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
}

.mode-toggle .toggle + .toggle-btn:after {
    left: 4px;
    top: 3.5px;
    transition: all 0.2s ease-in-out;
    content: "";
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background: #d7dde9;
}

@media (prefers-reduced-motion: reduce) {
    .mode-toggle .toggle + .toggle-btn:after {
        transition: none;
    }
}

.mode-toggle .toggle + .toggle-btn:before {
    display: none;
}

.mode-toggle .toggle:checked + .toggle-btn {
    border: 2px solid #354765;
    background: none;
}

.mode-toggle .toggle:checked + .toggle-btn:after {
    left: 50%;
    background: #354765;
}

.mode-toggle .toggle:checked + .toggle-btn .toggle-icon {
    color: #354765;
}

</style>