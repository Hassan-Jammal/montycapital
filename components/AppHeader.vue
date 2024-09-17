<template lang="">
   <header class="header-main" :class="{ 'active': isScrolledDown, 'background': !isOnTop, 'nav-visible': navVisible }">
        <div class="header-outer">
            <div class="header-inner">
                <NuxtLink to="/" class="header-inner--logo">
                   <!-- <AppLogoColored :fill="isScrolledDown || isScrolledUp || $route.path === '/' ? '#000000' : 'auto'"/> -->
                   <AppLogoColored />
                </NuxtLink>  
                <div class="header-inner--nav">
                    <nav class="header-inner--nav-desktop">
                        <ul class="nav-list">
                            <li class="nav-list--item" v-for="(link, index) in navLinks" :key="index">
                                <NuxtLink :to="link.route" class="nav-list--item-link" exact-active-class="active">
                                   {{link.text}}
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <div class="header-inner--nav-mobile-toggle" @click="toggleNav">
                        <Icon v-if="!navVisible" name="fa6-solid:bars" class="icon" />
                        <Icon v-if="navVisible" name="fa6-solid:x" class="icon" />
                    </div>
                </div>
            </div>
        </div>
        <nav class="nav-mobile" :class="{ '-translate-x-full': !navVisible }">
            <div class="container">  
                <ul class="nav-mobile--list">
                    <li class="nav-mobile--list-item" v-for="(link, index) in navLinks" :key="index">
                        <NuxtLink :to="link.route" class="nav-mobile--list-item-link" exact-active-class="active">
                           {{link.text}}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
const navVisible = ref(false);
const lastScrollPosition = ref(0);
const isScrolledDown = ref(false);
const isScrolledUp = ref(false);
const isOnTop = ref(true);
const scrollThreshold = 200;

const toggleNav = () => {
    navVisible.value = !navVisible.value;
};

const closeNav = () => {
    navVisible.value = false
};

onMounted(() => {
    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains('nav-mobile--list-item-link') || e.target.classList.contains('close-nav')) {
            closeNav()
        }
    });

    window.addEventListener('scroll', handleScroll);
    checkScrollPosition();
});

const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    // Determine the scroll direction
    const scrollDirection = currentScrollPosition > lastScrollPosition.value ? 'down' : 'up';

    // Set the value for isScrolledUp if the user is scrolling up
    isScrolledUp.value = scrollDirection === 'up';

    // Check if the user has scrolled down more than the threshold
    isScrolledDown.value = scrollDirection === 'down' && currentScrollPosition > scrollThreshold;

    // Check if the user is at the top of the page
    isOnTop.value = currentScrollPosition === 0;

    // Update the last scroll position
    lastScrollPosition.value = currentScrollPosition;
};

const checkScrollPosition = () => {
    // Check if the user is at the top of the page on mount
    isOnTop.value = window.scrollY === 0;
};

const navLinks = [
    { text: "About us", route: "/about-us" },
    // { text: "Projects", route: "/projects" },
    { text: "Services", route: "/services" },
    { text: "Team", route: "/team" },
    // { text: "News", route: "/news" },
    { text: "Contact us", route: "/contact-us" },
    { text: "Startup Application", route: "/startup-application" }
];
</script>

<style lang="sass">

</style>