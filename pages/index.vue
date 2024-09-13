<template lang="">
    <section class="hero-banner no-spacing">
        <div class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-delay="100">Welcome to Monty Capital Network</h1>
                <p class="description" data-aos="fade-up" data-aos-delay="200">We have positioned ourselves as a trusted partner in the ever-evolving landscape of global finance.</p>
                <div data-aos="fade-up" data-aos-delay="300">
                    <NuxtLink class="button" to="/startup-application">Startup Application</NuxtLink>
                </div>
            </div>
        </div>
    </section>

    <section class="marquee no-spacing">
        <div class="wrapper">
            <template v-for="(marquee, index) in marqueeList" :key="index">
                <a :href="marquee.link" target="_blank">
                    <img class="marquee-item" :src="`images/${marquee.image}.png`" :alt="marquee.alt" :width="marquee.width" :height="marquee.height" data-aos="fade-up" :data-aos-delay="(index + 1) * 100"/>
                </a>
            </template>
            <template v-for="(marquee, index) in marqueeList" :key="index">
                <a :href="marquee.image" target="_blank">
                    <img class="marquee-item" :src="`images/${marquee.image}.png`" :alt="marquee.alt" :width="marquee.width" :height="marquee.height" data-aos="fade-up" :data-aos-delay="(index + 1) * 100"/>
                </a>
            </template>
        </div>
    </section>

    <section class="services">
        <div class="container">
            <div class="section-title" data-aos="fade-up">
                <h2 class="heading">Our Services</h2>
                <div class="icon">
                    <div class="line line1"></div>
                    <div class="tri tri1"></div>
                    <div class="tri tri2"></div>
                    <div class="line line2"></div>
                </div>
            </div>

            <div class="card-wrapper two">
                <div class="content-block" v-for="(service, index) in servicesList" :key="index">
                    <div class="content-left">
                        <div class="numbering" data-aos="fade-up" :data-aos-delay="(index + 1) * 100">0{{ index+1 }}</div>
                        <h3 class="title" data-aos="fade-up" :data-aos-delay="(index + 1) * 100">{{ service.title }}</h3>
                        <p class="description" v-html="service.description" data-aos="fade-up"
                            :data-aos-delay="(index + 1) * 100"></p>
                    </div>
                    <div class="content-right image-1" data-aos="fade-up">
                        <NuxtPicture priority format="webp,avif" :src="`images/${service.image}.png`" class="w-full" :imgAttrs="{class:'w-full'}" />
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-shape">
            <div class="container">
                <div class="card-wrapper three">
                    <div class="content-block">
                        <template data-aos="fade-right" :data-aos-delay="(index + 1) * 100" v-for="(stat, index) in statsList" :key="index">
                            <div class="wrapper">
                                <div class="content">
                                    <span class="content--key">{{ stat.key }}</span>
                                    <span class="content--label">{{ stat.label }}</span>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="company" data-aos="fade-up">
                <div class="title">
                    <h2 class="heading">Monty Capital's Network</h2>
                    <span class="subheading">Support for Your Entire Journey</span>
                </div>
                <p class="description">Monty Capital is a premier financial advisory firm headquartered in Dubai, renowned
                    for delivering a comprehensive suitde of services designed to elevate the financial well-being of our
                    clients. With a commitment to excellence, innovation, and client-centric solutions, we have positioned
                    ourselves as a trusted partner in the ever-evolving landscape of global finance.</p>
            </div>
        </div>
    </section>

    <section class="financial-advisory">
        <div class="container">
            <div data-aos="fade-up">
                <AppLogoVertical />

                <div class="icon">
                    <div class="line line1"></div>
                    <div class="tri tri1"></div>
                    <div class="tri tri2"></div>
                    <div class="line line2"></div>
                </div>
            </div>

            <div class="partnerships">
                <div class="item" v-for="(partnership, index) in partnershipsList" :key="index" data-aos="fade-right"
                    :data-aos-delay="(index + 1) * 100">{{ partnership.title }}</div>
            </div>

            <div class="arrow-right">
                <div class="line">
                    <div class="content">Revenue Range</div>
                </div>
                <div class="angle"></div>
            </div>

            <div class="startups">
                <div class="item" v-for="(startup, index) in startupsList" :key="index" data-aos="fade-right"
                    :data-aos-delay="(index + 1) * 100">
                    <div class="range">{{ startup.range }}</div>
                    <p v-html="startup.description"></p>
                </div>
            </div>
        </div>
    </section>

    <section class="values mb-0">
        <div class="container">
            <div class="title">
                <h2 class="heading" data-aos="fade-up">Monty Capital Values</h2>
            </div>

            <div class="wrapper">
                <div class="item" v-for="(value, index) in valuesList" :key="index" data-aos="fade-up"
                    :data-aos-delay="(index + 1) * 100">
                    <span class="icon" v-html="value.icon"></span>
                    <h3 class="heading">{{ value.title }}
                    </h3>
                </div>
            </div>
        </div>
    </section>

    <!-- <template v-if="posts">
        <section class="news">
            <div class="container">
                <div class="section-title" data-aos="fade-up">
                    <h2 class="heading">Get News Feeds</h2>
                    <div class="icon">
                        <div class="line line1"></div>
                        <div class="tri tri1"></div>
                        <div class="tri tri2"></div>
                        <div class="line line2"></div>
                    </div>
                </div>

                <div class="wrapper">
                    <template v-if="pending">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div v-for="number in perPage">             
                                <div class="flex flex-col gap-4 animate-pulse">
                                    <div class="rounded-md h-[350px] w-full bg-[#f2f2f2]"></div>
                                    <div class="rounded-md w-1/2 h-[25px] bg-[#f2f2f2]"></div>
                                    <div class="rounded-md w-3/4 h-[28px] bg-[#f2f2f2]"></div>
                                    <div class="rounded-md h-[15px] bg-[#f2f2f2]"></div>
                                    <div class="rounded-md h-[15px] bg-[#f2f2f2]"></div>
                                    <div class="rounded-md h-[15px] bg-[#f2f2f2]"></div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="item" v-for="(post, index) in posts" :key="index" data-aos="fade-up"
                            :data-aos-delay="(index + 1) * 100">
                            <NuxtPicture priority format="webp,avif" :src="post._embedded['wp:featuredmedia'][0].media_details.sizes?.large?.source_url" class="image w-full" :imgAttrs="{class:'w-full'}" />

                            <span class="date">
                                <span>{{ new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }) }}</span>
                            </span>

                            <hr />

                            <h3 class="title" v-html="post.title.rendered"></h3>

                            <NuxtLink class="button" :to="`/news/${post.slug}`">Read More</NuxtLink>
                        </div>

                        
                    </template>
                </div>
            </div>
        </section>
    </template> -->
</template>

<script setup>
    useHead({
        bodyAttrs: {
            class: 'homepage'
        }
    })

    useSeoMeta({
        title: 'Homepage',
        description: '',

        ogTitle: 'Homepage',
        ogDescription: '',
        ogImage: '/assets/images/share-image-homepage.webp',

        twitterTitle: '',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const servicesList = [
        { title: "Advisory", description: "At Monty Capital, we recognize that navigating the capital landscape is a complex journey for businesses.", image: "advisory" },
        { title: "Family Office Diversification Platform", description: "Monty Capital introduces a Family Diversification Platform, empowering family offices to streamline asset management, optimise portfolios, and enhance financial resilience.", image: "family-office-diversification-platform" },
        { title: "Digital Transformation", description: "Monty Capital takes financial advisory to the next level by offering a comprehensive suite of digital transformation services.", image: "digital-transformation" },
    ];

    const marqueeList = [
        { image: "mymonty-bw", alt: "MyMonty", width: "175", height: "35", link: "https://mymonty.com" },
        { image: "montypay-bw", alt: "MontyPay", width: "183", height: "33", link: "https://montypay.com" },
        { image: "monty-mobile-bw", alt: "Monty Mobile", width: "154", height: "48", link: "https://montymobile.com" },
        { image: "monty-esim-bw", alt: "Monty eSim", width: "116", height: "44", link: "https://montyesim.com" },
        { image: "comium-bw", alt: "Comium", width: "154", height: "38", link: "https://comium.gm" },
    ];

    const statsList = [
        { key: "2024", label: "Year Established" },
        // { key: "5", label: "Team Size" },
        { key: "Deal Stages", label: "Pre Seed-Late Stage" },
        { key: "60+ Years", label: "Team Experience" },
        { key: "Dubai", label: "Location" },
        { key: "200M+", label: "Transaction Size" },
    ];

    const partnershipsList = [
        { title: "Incubation Program" },
        { title: "Accelerators Partners + Startup Competitions" },
        { title: "Investment Partners + Crowdfunding Platforms" },
        { title: "Corporate Partners + Growth Capital" },
        { title: "PE & Public Listing Exchanges" },
    ];

    const startupsList = [
        { description: "The guiding light for founders looking to bring their ideas to reality.", range: "$0 - $500K" },
        { description: "Startups have created an MVP.", range: "$500K - $1M" },
        { description: "Startups start to achieve traction and are in need of capital.", range: "$1M - $5M" },
        { description: "Startups become scaleups and now are looking for growth.", range: "$5M - $50M" },
        { description: "Startups and investors are now looking for acquisition targets and/or liquidation.", range: "$100M +" },
    ];

    const valuesList = [
        { title: "Technology-First Company", icon: "<svg width='51' height='50' viewBox='0 0 51 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M33.8333 16.6667V10.4167L40.0833 4.16675L42.1667 8.33342L46.3333 10.4167L40.0833 16.6667H33.8333ZM33.8333 16.6667L25.5 25M46.3334 25.0001C46.3334 36.506 37.006 45.8334 25.5001 45.8334C13.9941 45.8334 4.66675 36.506 4.66675 25.0001C4.66675 13.4941 13.9941 4.16675 25.5001 4.16675M35.9168 25.0001C35.9168 30.7531 31.2531 35.4168 25.5001 35.4168C19.7471 35.4168 15.0834 30.7531 15.0834 25.0001C15.0834 19.2471 19.7471 14.5834 25.5001 14.5834' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
        { title: "Commitment to Innovation", icon: "<svg width='51' height='50' viewBox='0 0 51 50' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_542_2)'><path d='M18.375 1.66675V8.66675M32.625 1.66675V8.66675M18.375 41.3334V48.3334M32.625 41.3334V48.3334M42.125 18.0001H49.25M42.125 29.6667H49.25M1.75 18.0001H8.875M1.75 29.6667H8.875M20.275 41.3334H30.725C34.7154 41.3334 36.7106 41.3334 38.2347 40.5705C39.5753 39.8993 40.6653 38.8285 41.3484 37.5114C42.125 36.014 42.125 34.0538 42.125 30.1334V19.8667C42.125 15.9464 42.125 13.9862 41.3484 12.4888C40.6653 11.1717 39.5753 10.1008 38.2347 9.4297C36.7106 8.66675 34.7154 8.66675 30.725 8.66675H20.275C16.2846 8.66675 14.2894 8.66675 12.7653 9.4297C11.4247 10.1008 10.3347 11.1717 9.65158 12.4888C8.875 13.9862 8.875 15.9464 8.875 19.8668V30.1334C8.875 34.0538 8.875 36.014 9.65158 37.5114C10.3347 38.8285 11.4247 39.8993 12.7653 40.5705C14.2894 41.3334 16.2846 41.3334 20.275 41.3334Z' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/></g><defs><clipPath id='clip0_542_2'><rect width='50' height='50' fill='white' transform='translate(0.5)'/></clipPath></defs></svg>" },
        { title: "Client Centric", icon: "<svg width='51' height='50' viewBox='0 0 51 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M42.1667 43.75C42.1667 40.8426 42.1667 39.3889 41.8079 38.2059C41 35.5426 38.9158 33.4584 36.2524 32.6505C35.0695 32.2917 33.6158 32.2917 30.7084 32.2917H20.2917C17.3843 32.2917 15.9306 32.2917 14.7477 32.6505C12.0843 33.4584 10.0001 35.5426 9.19221 38.2059C8.83337 39.3889 8.83337 40.8426 8.83337 43.75M34.875 15.625C34.875 20.8027 30.6777 25 25.5 25C20.3224 25 16.125 20.8027 16.125 15.625C16.125 10.4473 20.3224 6.25 25.5 6.25C30.6777 6.25 34.875 10.4473 34.875 15.625Z' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
        { title: "Commitment to Excellence", icon: "<svg width='51' height='50' viewBox='0 0 51 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15.0833 45.8334V22.9167M4.66663 27.0834V41.6668C4.66663 43.9679 6.53211 45.8334 8.83329 45.8334H36.8046C39.8895 45.8334 42.5129 43.5827 42.982 40.5338L45.2255 25.9504C45.808 22.1644 42.8788 18.7501 39.0482 18.7501H31.75C30.5994 18.7501 29.6666 17.8173 29.6666 16.6667V9.30391C29.6666 6.46674 27.3666 4.16675 24.5295 4.16675C23.8527 4.16675 23.2395 4.56528 22.9647 5.18367L15.6332 21.6795C15.2988 22.4319 14.5527 22.9167 13.7294 22.9167H8.83329C6.53211 22.9167 4.66663 24.7822 4.66663 27.0834Z' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
    ];

    const newsList = [
        { title: "Technology is evolving rapidly. New devices and applications.", date: "August 15, 2023", image: "technology-is-evolving-rapidly" },
        { title: "New devices and applications come to the market.", date: "June 20, 2023", image: "new-devices-and-applications" },
        { title: "Everyday providing solutions to problems.", date: "June 20, 2023", image: "everyday-providing-solutions" },
    ];

    const totalPages = ref(0);
    const currentPage = ref(1);
    const perPage = ref(3);
    const postsSection = ref(null);

    const {data: posts, pending, error, refresh } = await useFetch('https://backend.montycapital.com/wp-json/wp/v2/posts', {
        query: { categories: 7, per_page: perPage, page: currentPage, _embed: '1' },
        lazy: true,
        server: false,
        onResponse({ request, response, options }) {
            totalPages.value = parseInt(response.headers.get('X-WP-TotalPages'));
        }
    });
</script>

<style lang="sass">

</style>
