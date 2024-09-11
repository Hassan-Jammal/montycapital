<template>
    <template v-if="post[0]">
        <section class="news-details extra-spacing">
            <div class="container">
                <div class="wrapper">
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
                        <div v-if="post" class="flex flex-col gap-14">
                            <h1 class="heading text-3xl font-bold text-center" data-aos="fade-up" data-aos-delay="100" v-html="post[0].title.rendered"></h1>
                            <p class="text-center">{{ new Date(post[0].date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }) }}</p>
                            <NuxtPicture priority format="webp,avif" :src="post[0].acf.inner_image.sizes['banner-image']" class="w-full rounded-xl overflow-hidden" :imgAttrs="{class:'w-full'}" />
                            <p class="description" data-aos="fade-up" data-aos-delay="200" v-html="post[0].content.rendered"></p>
                        </div>
                    </template>
                </div>
            </div>
        </section>
    </template>
</template>

<script setup>
    import he from 'he';

    const route = useRoute();
    const slug = route.params.slug;    
    
    const {data: post, pending, error, refresh } = await useFetch('https://backend.montycapital.com/wp-json/wp/v2/posts', {
        query: { slug: slug, _embed: '1', acf_format: 'standard' },
    });

    useSeoMeta({
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