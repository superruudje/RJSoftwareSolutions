<template>
    <nav class="navbar">
        <div id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" class="offcanvas show d-flex"
             data-bs-backdrop="false" data-bs-scroll="true" tabindex="-1">
            <div class="offcanvas-body d-flex align-items-center">
                <ul class="main-nav navbar-nav gap-2 text-center">
                    <li class="nav-item">
                        <NuxtLink
                            active-class="active"
                            class="nav-link d-flex flex-column"
                            to="/">
                              <span class="icon-holder">
                                <i class="bi bi-person-fill"></i>
                              </span>
                            <span class="nav-text">Over</span>
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink
                            active-class="active"
                            class="nav-link d-flex flex-column"
                            to="/projects">
                              <span class="icon-holder">
                                <i class="bi bi-suitcase-lg-fill"></i>
                              </span>
                            <span class="nav-text">Werk</span>
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink
                            active-class="active"
                            class="nav-link d-flex flex-column"
                            to="/resume">
                              <span class="icon-holder">
                                <i class="bi bi-person-badge-fill"></i>
                              </span>
                            <span class="nav-text">Resume</span>
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink
                            active-class="active"
                            class="nav-link d-flex flex-column"
                            to="/contact">
                              <span class="icon-holder">
                                <i class="bi bi-chat-dots-fill"></i>
                              </span>
                            <span class="nav-text">Contact</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped>
.navbar {
    padding: 0;
}

.offcanvas {
    width: auto;
    border: none;
    background: none;
    color: #a5b3ce;
    top: 0;
}

.offcanvas-body {
    padding: 0;
    padding-left: 1rem;
}

.main-nav {
    background: rgba(0, 0, 0, 0.1);
    padding: 1rem 0.5rem;
    border-radius: 6px;
}

a {
    color: #a5b3ce;
}

a:hover {
    text-decoration: none;
}

.icon-holder {
    font-size: 1.125rem;
    min-height: 25px;
}

.nav-text {
    text-transform: uppercase;
    font-size: 0.675rem;
}

.nav-link:focus:focus {
    color: white;
}

.navbar-nav .nav-link.active {
    color: #fe655c;
}

.navbar-nav .nav-link.active:hover {
    color: #fe655c;
}

.navbar-nav .nav-link:hover {
    color: white;
}

.nav-item-close .btn-close {
    color: #d7dde9;
    background-image: none;
    font-weight: 900;
    font-size: 2rem;
    outline: none;
}

.nav-item-close .btn-close:hover, .nav-item-close .btn-close:focus {
    color: white;
    box-shadow: none;
    -webkit-opacity: 1;
    -moz-opacity: 1;
    opacity: 1;
}

@media (max-width: 991.98px) {
    .offcanvas {
        position: fixed;
        bottom: 0;
        top: auto;
        left: 0;
        right: 0;
        flex-direction: row;
        width: 100%;
        height: auto;
        transition: none;
    }

    .offcanvas .main-nav {
        background: rgb(7, 9, 13);
        border-radius: 0;
        padding: 0;
    }

    .offcanvas .navbar {
        padding: 0;
    }

    .offcanvas .navbar-nav {
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
    }

    .offcanvas .nav-item {
        padding: 0.3rem;
    }

    .offcanvas .nav-text {
        font-size: 0.65rem;
    }

    .offcanvas .nav-item-close {
        display: none;
    }

    .offcanvas-body {
        padding-left: 0;
    }
}

</style>