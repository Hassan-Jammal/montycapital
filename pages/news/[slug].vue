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
            <section class="pb-16">
                <NuxtLink :to="`/news`" class="py-10 block"> 
                    <span> < </span> 
                    <span>Back to news</span>
                </Nuxtlink>
                <template v-if="pending">
                    <div class="animate-pulse flex flex-col gap-7">
                        <div class="rounded-md h-[500px] w-full bg-[#f2f2f2]"></div>
                        <div class="rounded-md h-[20px] max-w-[300px] bg-[#f2f2f2]"></div>
                        <div class="rounded-md h-[50px] max-w-[1000px] bg-[#f2f2f2]"></div>    
                    </div>
                    <div>
                        <div class="rounded-md mt-3 h-[15px] max-w-[1000px] bg-[#f2f2f2]"></div>
                        <div class="rounded-md mt-3 h-[15px] max-w-[700px] bg-[#f2f2f2]"></div>
                        <div class="rounded-md mt-3 h-[15px] max-w-[800px] bg-[#f2f2f2]"></div>
                        <div class="rounded-md mt-3 h-[15px] max-w-[650px] bg-[#f2f2f2]"></div>
                        <div class="rounded-md mt-3 h-[15px] max-w-[300px] bg-[#f2f2f2]"></div>
                        <div class="rounded-md mt-3 h-[15px] max-w-[1000px] bg-[#f2f2f2]"></div>
                        <div class="rounded-md mt-3 h-[15px] max-w-[600px] bg-[#f2f2f2]"></div>
                        <div class="rounded-md mt-3 h-[15px] max-w-[900px] bg-[#f2f2f2]"></div>
                        <div class="rounded-md mt-3 h-[15px] max-w-[450px] bg-[#f2f2f2]"></div>
                    </div>
                </template>
                <template v-else>
                    <div v-if="post">
                        <NuxtPicture priority format="webp,avif" :src="post[0].acf.inner_image.sizes['banner-image']" class="image w-full" :imgAttrs="{class:'w-full'}" />
                    
                        <div class="flex flex-col gap-7 max-w-[1000px]">
                            <p>{{ new Date(post[0].date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }) }}</p>
                            <h1 v-html="post[0].title.rendered"></h1>
                            <p class="post-content" v-html="post[0].content.rendered"></p>
                        </div>
                    </div>
                </template>
            </section>
        </div>
    </section>
</template>

<script setup>
    import he from 'he';

    const route = useRoute();
    const slug = route.params.slug;    
    
    const {data: post, pending, error, refresh } = await useFetch('https://backend.montypay.com/wp-json/wp/v2/posts', {
        query: { slug: slug, _embed: '1', acf_format: 'standard' },
        lazy: true,
        initialCache: false,
    });

    useServerSeoMeta({
        title: () => he.decode(post.value[0].title.rendered),
        ogTitle: () => he.decode(post.value[0].title.rendered),
        description: () => he.decode(post.value[0].excerpt.rendered).replace(/<[^>]*>/g, ''),
        ogDescription: () => he.decode(post.value[0].excerpt.rendered).replace(/<[^>]*>/g, ''),
        ogImage: () => post.value[0].acf.inner_image.sizes.large,
        twitterCard: 'summary_large_image',
    })
</script>

<style lang="" scoped>

</style>