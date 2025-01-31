<template>
    <section class="banner extra-spacing">
        <div class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-delay="100">News Listing</h1>
                <p class="description" data-aos="fade-up" data-aos-delay="200">We are based around the globe but share one drive.</p>
            </div>
        </div>
    </section>

    <section class="news no-spacing">
        <div class="container">
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

            <template v-if="posts">
                <ul class="flex gap-2 justify-center items-center py-16">
                    <li>
                        <button
                            :class="{ 'cursor-default opacity-40': currentPage === 1 }"
                            class="text-3xl"
                            @click="goToPage(currentPage > 1 ? currentPage - 1 : 1)"
                        >
                            &lt;
                        </button>
                    </li>

                    <li
                        v-for="pageNumber in getPageRange()"
                        :key="'page-' + pageNumber"
                    >
                        <button
                            :class="pageNumber === currentPage ? 'cursor-default bg-black text-white' : 'bg-white text-black'"
                            @click="goToPage(pageNumber)"
                            class="w-[40px] h-[40px] border border-black rounded-xl flex items-center justify-center hover:bg-black hover:text-white"
                        >
                            {{ pageNumber }}
                        </button>
                    </li>

                    <li>
                        <button
                            :class="{ 'cursor-default opacity-40': currentPage === totalPages }"
                            class="text-3xl"
                            @click="goToPage(currentPage === totalPages.value ? currentPage : currentPage + 1)"
                        >
                            &gt;
                        </button>
                    </li>
                </ul>
            </template>
        </div>
    </section>
</template>

<script setup>
    useSeoMeta({
        title: 'News',
        ogTitle: 'News',
        description: 'News description',
        ogDescription: 'News description',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    const goToPage = (pageNumber) => {
        currentPage.value = pageNumber;
        postsSection.value.scrollIntoView({ behavior: "smooth" });
    };

    const totalPages = ref(0);
    const currentPage = ref(1);
    const perPage = ref(6);
    const postsSection = ref(null);

    // Define a computed range of pages to display in the pagination
    const getPageRange = () => {
        const range = [];
        let start = 1;
        let end = 2;

        if (currentPage.value === 1) {
            end = Math.min(2, totalPages.value);
        } else if (currentPage.value === totalPages.value) {
            start = Math.max(totalPages.value - 2, 1);
        } else {
            start = currentPage.value - 1;
            end = Math.min(currentPage.value + 1, totalPages.value);
        }

        for (let i = start; i <= end; i++) {
            range.push(i);
        }

        return range;
    };

    const {data: posts, pending, error, refresh } = await useFetch('https://backend.montycapital.com/wp-json/wp/v2/posts', {
        query: { categories: 7, per_page: perPage, page: currentPage, _embed: '1' },
        lazy: true,
        server: false,
        onResponse({ request, response, options }) {
            totalPages.value = parseInt(response.headers.get('X-WP-TotalPages'));
        }
    });
</script>

<style lang="" scoped></style>